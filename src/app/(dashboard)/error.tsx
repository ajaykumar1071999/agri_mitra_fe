'use client';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center h-[300px] gap-4">
      <h2 className="text-xl font-semibold">Something went wrong!</h2>

      <button onClick={() => reset()} className="px-4 py-2 rounded bg-red-500 text-white">
        Try Again
      </button>
    </div>
  );
}
