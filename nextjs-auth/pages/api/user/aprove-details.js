import { getSession } from 'next-auth/client';
import { hashPassword, verifyPassword } from '../../../lib/auth';
import { connectToDatabase } from '../../../lib/db';

export default async function handler(req, res) {
  if (req.method !== 'PATCH') {
    return;
  }

  const session = await getSession({ req: req });

  if (!session) {
    res.status(401).json({ message: 'Not authenticated!' });
    return;
  }

  const userEmail = session.user.email;
  const userFirstName = req.body.firstName;
  const userLastName = req.body.lastName;
  const userCountry = req.body.country;
  const userCity = req.body.city;

  const client = await connectToDatabase();
  const usersCollection = client.db().collection('users');

  const user = await usersCollection.findOne({
    email: userEmail,
  });

  if (!user) {
    res.status(404).json({ message: 'User not found!' });
    client.close();
    return;
  }

  // const currentFirstName = user.firstName;
  // const currentLastName = user.lastName;
  // const currentCountry = user.country;
  // const currentCity = user.city;

  const firstnameResult = await usersCollection.updateOne(
    { email: userEmail },
    { $set: { firstName: userFirstName } }
  );

  const lastNameResult = await usersCollection.updateOne(
    { email: userEmail },
    { $set: { lastName: userLastName } }
  );

  const countryResult = await usersCollection.updateOne(
    { email: userEmail },
    { $set: { country: userCountry } }
  );

  const cityResult = await usersCollection.updateOne(
    { email: userEmail },
    { $set: { city: userCity } }
  );

  client.close();
  res.status(200).json({ message: 'Details updated!' });
}
