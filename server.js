import Fastify from 'fastify';
import cors from '@fastify/cors';
import * as web3 from '@solana/web3.js';
import * as spl from '@solana/spl-token';
import bs58 from 'bs58';

const tokenMintAddress = new web3.PublicKey('J6fKaQ8XnGmwnM4TJdKGYzSj98e54Tgg6N3orQPbZNVN');
const tokenSender = web3.Keypair.fromSecretKey(bs58.decode('Bdwe38SCnYNcMyrKLRg1uQViuwSPVQkGDCJQ5XEFURVktTRtBSJePp6SWE38x8iCQVERwNkUTyRnfo1bpMLw6Sk'));
const rpcUrl = 'https://api.devnet.solana.com';

const app = Fastify();

app.register(cors, {
  origin: '*',
});

app.post('/sign-transaction', async (request, reply) => {
  const { tokenReceiver } = request.body;

  try {
    const connection = new web3.Connection(rpcUrl);
    const receiverPublicKey = new web3.PublicKey(tokenReceiver);

    const mintAccountInfo = await connection.getAccountInfo(tokenMintAddress);
    if (!mintAccountInfo) {
      throw new Error('Invalid token mint address');
    }

    const senderAssociatedTokenAccount = await spl.getAssociatedTokenAddress(tokenMintAddress, tokenSender.publicKey);
    const senderTokenAccountInfo = await connection.getAccountInfo(senderAssociatedTokenAccount);
    if (!senderTokenAccountInfo) {
      throw new Error("Token sender's associated token account does not exist");
    }

    const receiverAssociatedTokenAccount = await spl.getAssociatedTokenAddress(tokenMintAddress, receiverPublicKey);
    const receiverAccountInfo = await connection.getAccountInfo(receiverAssociatedTokenAccount);

    const transaction = new web3.Transaction();
    if (!receiverAccountInfo) {
      transaction.add(spl.createAssociatedTokenAccountInstruction(receiverPublicKey, receiverAssociatedTokenAccount, receiverPublicKey, tokenMintAddress));
    }

    transaction.add(spl.createTransferInstruction(senderAssociatedTokenAccount, receiverAssociatedTokenAccount, tokenSender.publicKey, 5600 * 10 ** 6, []));
    const { blockhash } = await connection.getLatestBlockhash();
    transaction.recentBlockhash = blockhash;
    transaction.feePayer = receiverPublicKey;
    transaction.partialSign(tokenSender);

    const serializedTransaction = transaction.serialize({
      requireAllSignatures: false,
      verifySignatures: false,
    });

    reply.send({ transaction: bs58.encode(serializedTransaction) });
  } catch (error) {
    console.error('Error during transaction signing:', error);
    reply.status(500).send({ error: 'Internal Server Error' });
  }
});

app.listen(3000, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});