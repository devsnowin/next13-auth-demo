import type { Session } from 'next-auth';
import { getSession } from 'next-auth/react';

export default async function Profile() {
  const session = await getSession() as Session;

  return (
    <main className="px-6">
      <h1>Profile</h1>
      <div></div>
    </main>
  );
}
