import AuthForm from '@/components/AuthForm';

export default function Signin() {
  return (
    <main className="flex flex-col items-center justify-center px-6 text-center">
      <h1 className="font-bold text-2xl my-6">Signin to your account</h1>
      <AuthForm mode="signin" />
    </main>
  );
}
