import AuthForm from '@/components/AuthForm';

export default function Signup() {
  return (
    <main className="flex flex-col items-center justify-center px-6 text-center">
      <h1 className="font-bold text-2xl my-6">Create an account</h1>
      <AuthForm mode="signup" />
    </main>
  );
}
