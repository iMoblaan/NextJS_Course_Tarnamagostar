import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://iMoblaan:vNTHx6hWiFoSiomp@cluster0.of6t9.mongodb.net/auth-demo?retryWrites=true&w=majority'
  );

  return client;
}
