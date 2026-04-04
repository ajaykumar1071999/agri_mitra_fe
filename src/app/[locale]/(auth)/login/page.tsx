import DoNotHaveAccount from '@/components/dontHaveAccount';
import LoginForm from '@/components/forms/LoginForm';
import GoogleLoginButton from '@/components/googleOAuth/page';

export default function LoginPage() {
  return (
    <main className="flex-grow flex items-center justify-center px-4 bg-green-50 dark:bg-gray-900">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 sm:p-8">
        <h1 className="text-2xl font-semibold text-center text-gray-800 dark:text-white mb-6">
          Login to Your Account
        </h1>

        <div className="flex justify-center">
          <GoogleLoginButton />
        </div>

        {/* OR Divider */}
        <div className="flex items-center my-6">
          <div className="grow border-t border-gray-300 dark:border-gray-600"></div>
          <span className="mx-3 text-gray-500 dark:text-gray-400 text-sm">OR</span>
          <div className="grow border-t border-gray-300 dark:border-gray-600"></div>
        </div>

        <LoginForm />
        <DoNotHaveAccount />
      </div>
    </main>
  );
}
