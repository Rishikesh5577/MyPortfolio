export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-300 dark:border-gray-700 py-6 text-center text-sm text-gray-600 dark:text-gray-400">
      <p>
        &copy; {new Date().getFullYear()} Rishikesh Wakchaure. All rights reserved.
      </p>
      <p className="mt-2">
        Built with 💻 using React, TailwindCSS
      </p>
    </footer>
  );
}
