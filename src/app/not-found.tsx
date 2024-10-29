'use client';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-center gap-4 px-4 py-3">
      <h1>Page Not Found!</h1>
      <button
        onClick={() => router.back()}
        className="px-4 py-2 text-white bg-blue-500 rounded-md">
        Go Back
      </button>
    </main>
  );
}
