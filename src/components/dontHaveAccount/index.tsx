import Link from 'next/link';

export default function DoNotHaveAccount() {
  return (
    <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
      Don&apos;t have an account?
      <Link
        href="/register"
        className="text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 font-semibold"
      >
        Click here
      </Link>
    </p>
  );
}
