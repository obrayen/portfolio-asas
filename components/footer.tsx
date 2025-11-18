export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-primary-foreground px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm">
          © {currentYear} Mali — All rights reserved.
        </p>
      </div>
    </footer>
  )
}
