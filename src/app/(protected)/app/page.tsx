import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export default async function App() {
  const session = await getServerSession(authOptions);
  if (!session) redirect('/auth/signin');

  return (
    <main className="px-6">
      <h1>App</h1>
    </main>
  );
}
