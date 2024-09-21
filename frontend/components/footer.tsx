import Link from 'next/link'

export function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-blue-500 text-white">
      <p className="text-xs">© 2023 Tim Bedah Anak RSUP Dr. Kariadi. Hak Cipta Dilindungi.</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link className="text-xs hover:underline underline-offset-4" href="#">
          Syarat Layanan
        </Link>
        <Link className="text-xs hover:underline underline-offset-4" href="#">
          Kebijakan Privasi
        </Link>
      </nav>
    </footer>
  )
}