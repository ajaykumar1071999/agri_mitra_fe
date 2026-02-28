export default function Footer() {
  return (
    <footer className="py-10 text-center text-sm text-green-500 dark:text-white bg-black-200 border-t">
      © {new Date().getFullYear()} AgriMitra. All rights reserved.
    </footer>
  );
}
