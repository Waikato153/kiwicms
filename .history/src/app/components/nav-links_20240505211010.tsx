'use client'

import { usePathname } from "next/navigation"
import Link from "next/link"
 
export function NavLinks(children: React.ReactNode) {
  const pathname = usePathname()
 
  return (
    <nav>
      <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
        Home1
        <children><children/>
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