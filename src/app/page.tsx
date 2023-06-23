import Link from 'next/link';

export default function Home() {
  return (
    <main className="px-6 text-center flex flex-col justify-center items-center gap-4">
      <h1 className="font-bold text-4xl">Nextjs Demo Application</h1>
      <p className="max-w-2xl">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
        quidem nobis fugit fugiat magni nisi sit aperiam impedit dolorum cumque,
        tempore commodi veniam ipsam doloribus esse doloremque, quia, aliquid
        quo?
      </p>
      <Link href="/app" className="btn btn-primary capitalize">
        Get started
      </Link>
    </main>
  );
}
