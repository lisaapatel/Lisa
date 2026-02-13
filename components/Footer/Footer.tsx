export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="container mt-10 bg-brand py-4 text-white">
      © {year} Lisa Patel
    </footer>
  );
}
