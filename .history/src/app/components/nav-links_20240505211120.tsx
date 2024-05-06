'use client'

import { usePathname } from "next/navigation"
import Link from "next/link"
 
export function NavLinks(children: React.ReactNode) {
  const pathname = usePathname()
  console.log(children, '-------')
  return (
    <nav>
      <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
        Home1
        {children}
      </Link>
 
      <Link
        className={`link ${pathname === '/about' ? 'active' : ''}`}
        href="/about"
      >
        About
      </Link>
    </nav>
  )
}