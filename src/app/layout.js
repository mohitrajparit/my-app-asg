import ThemeToggle from "./ThemeToggle";

export default function Layout({ children }) {
  return (
    <div className=" bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-4 rounded w-full max-w-lg mx-auto  sm:p-6 md:p-8">
      <header className="p-4 bg-gray-200 dark:bg-gray-800">
        <h1>Details Form</h1>
        <ThemeToggle />
      </header>
      <main className="p-6">{children}</main>
      <footer className="p-4 bg-gray-200 dark:bg-gray-800">
        © 2024 Mohit Raj Parit
      </footer>
    </div>
  );
}
