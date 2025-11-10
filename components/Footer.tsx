// components/Footer.tsx

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111] text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <h4 className="text-2xl text-white">Let’s connect</h4>
          <p className="mt-2 text-white">
            I’m based in Valenzuela City · Philippines &middot; +63 927‑827‑557
          </p>
          <p>
            <a
              href="mailto:abungan082198@gmail.com"
              className="underline hover:text-white"
            >
              abungan082198@gmail.com
            </a>
          </p>
        </div>

        <div className="flex justify-center gap-6 mb-4">
          <Link
            href="https://github.com/han-Nari/fa_portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="hover:text-white">GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/your‑linkedin‑profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="hover:text-white">LinkedIn</span>
          </Link>
          {/* Add more social links if needed */}
        </div>

        <div className="border-t border-[#333] pt-4">
          <p>
            &copy; {currentYear} {`Felix Abungan`} · Built with Next.js &
            deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}
