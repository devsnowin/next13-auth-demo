'use client';

import { signIn } from 'next-auth/react';

interface AuthFormProps {
  mode: 'signin' | 'signup';
}

export default function AuthForm({ mode }: AuthFormProps) {
  return (
    <div className="w-full max-w-sm">
      <form className="flex flex-col items-center justify-center gap-4">
        <div className="w-full flex flex-col items-start gap-2">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="w-full input input-bordered input-accent"
            required
          />
        </div>
        {mode === 'signup' && (
          <div className="w-full flex flex-col items-start gap-2">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="w-full input input-bordered input-accent"
              required
            />
          </div>
        )}
        <div className="w-full flex flex-col items-start gap-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="w-full input input-bordered input-accent"
            required
          />
        </div>
        <button className="btn w-full uppercase">{mode}</button>
      </form>
      <span className="divider">or</span>
      <button
        className="btn btn-outline w-full uppercase"
        onClick={() => signIn('google', { callbackUrl: '/app' })}
      >
        continue with google
      </button>
    </div>
  );
}
