interface AuthFormProps {
  mode: 'signin' | 'signup';
}

export default function AuthForm({ mode }: AuthFormProps) {
  return (
    <form className="w-full max-w-sm  flex flex-col items-center justify-center gap-4">
      <div className="w-full flex flex-col items-start gap-2">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          className="w-full input input-bordered input-accent"
        />
      </div>
      {mode === 'signup' && (
        <div className="w-full flex flex-col items-start gap-2">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="w-full input input-bordered input-accent"
          />
        </div>
      )}
      <div className="w-full flex flex-col items-start gap-2">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="w-full input input-bordered input-accent"
        />
      </div>
      <button className="btn btn-accent w-full">{mode}</button>
    </form>
  );
}
