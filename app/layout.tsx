import Header from "./components/Header";
import Footer from "./components/Footer";
import DarkModeToggle from "./components/DarkModeToggle";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script>
          {`
            if (localStorage.getItem("theme") === "dark") {
              document.documentElement.classList.add("dark");
            } else {
              document.documentElement.classList.remove("dark");
            }
          `}
        </script>
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"></link>
      </head>
      <body className="bg-white dark:bg-gray-900">
        <Header />
        <main className="container mx-auto p-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}



