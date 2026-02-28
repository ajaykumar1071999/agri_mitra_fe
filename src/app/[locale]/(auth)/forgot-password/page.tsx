export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-green-600">Reset Password</h2>
        <p className="text-sm text-gray-500">
          Enter your email to receive password reset instructions.
        </p>
      </div>
    </div>
  );
}
