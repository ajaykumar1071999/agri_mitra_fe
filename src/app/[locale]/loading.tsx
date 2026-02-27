'use client';

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  console.log('error', error);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl font-semibold">Something went wrong.</h2>
      <button onClick={() => reset()} className="mt-4 px-4 py-2 bg-green-600 text-white rounded">
        Try again
      </button>
    </div>
  );
}
