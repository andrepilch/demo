export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-8 py-6 text-center text-neutral-500 text-sm">
      <p>©2009-{currentYear} André Pilch</p>
    </footer>
  );
}
