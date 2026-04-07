'use client'

import { usePathname } from 'next/navigation'

export default function LayoutPageOffset({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isHome = pathname === '/'

  return <div className={isHome ? '' : 'pt-20'}>{children}</div>
}