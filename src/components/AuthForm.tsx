'use client';

import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

interface AuthFormProps {
  mode: 'signin' | 'signup';
}

export default function AuthForm({ mode }: AuthFormProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target as HTMLFormElement);

    if (mode === 'signin') {
      signIn('credentials', {
        redirect: false,
        password: formData.get('password'),
        email: formData.get('email'),
        //@ts-ignore
      }).then(({ error }) => {
        if (error) {
          setLoading(false);
          toast.error(error);
        } else {
          router.refresh();
          router.push('/app');
        }
      });
    } else {
      fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.get('username'),
          email: formData.get('email'),
          password: formData.get('password'),
        }),
        // @ts-ignore
      }).then(async (res) => {
        setLoading(false);
        if (res.status === 201) {
          toast.success('Account created! Redirecting to login...');
          setTimeout(() => {
            router.push('/auth/signin');
          }, 2000);
        } else {
          const { error } = await res.json();
          toast.error(error);
        }
      });
    }
  }

  return (
    <div className="w-full max-w-sm">
      <form
        className="flex flex-col items-center justify-center gap-4"
        onSubmit={handleSubmit}
      >
        <div className="w-full flex flex-col items-start gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            className="w-full input input-bordered input-accent"
            required
          />
        </div>
        {mode === 'signup' && (
          <div className="w-full flex flex-col items-start gap-2">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              className="w-full input input-bordered input-accent"
              required
            />
          </div>
        )}
        <div className="w-full flex flex-col items-start gap-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className="w-full input input-bordered input-accent"
            required
          />
        </div>
        <button className="btn w-full uppercase" type="submit">
          {loading ? (
            <span className="loading loading-spinner loading-md"></span>
          ) : (
            mode
          )}
        </button>
      </form>
      <span className="divider">or</span>
      <button
        className="btn btn-outline border-primary w-full uppercase mb-4"
        onClick={() => signIn('google', { callbackUrl: '/app' })}
      >
        continue with google
      </button>
      {mode === 'signin' ? (
        <p>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Don't have an account? <Link href="/auth/signup">create one</Link>
        </p>
      ) : (
        <p>
          Already have an account? <Link href="/auth/signin">signin</Link>
        </p>
      )}
    </div>
  );
}
