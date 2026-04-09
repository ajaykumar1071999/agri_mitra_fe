export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full py-4 text-center text-sm text-green-500 dark:text-white bg-black-200 border-t">
      © {new Date().getFullYear()} AgriMitra. All rights reserved.
    </footer>
  );
}
