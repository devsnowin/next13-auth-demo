import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function Settings() {
  const session = await getServerSession(authOptions);
  if (!session) redirect('/auth/signin');

  return (
    <main className="px-6">
      <h1>Settings</h1>
    </main>
  );
}
