'use client'

import { useEffect, useState } from 'react'

type CounterItemProps = {
  label: string
  value: number
  suffix?: string
  color?: string
}

function CounterItem({
  label,
  value,
  suffix = '',
  color = 'text-black',
}: CounterItemProps) {
  const [count, setCount] = useState(1)

  useEffect(() => {
    let start = 1
    const duration = 1400
    const stepTime = Math.max(12, Math.floor(duration / value))

    const timer = setInterval(() => {
      start += Math.ceil(value / 40)

      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [value])

  return (
    <div className="flex min-w-0 flex-col items-center text-center">
      <p className="text-lg font-bold text-black md:text-xl">{label}</p>
      <p className={`mt-2 text-4xl font-black leading-none md:text-6xl ${color}`}>
        {count}
        {suffix}
      </p>
    </div>
  )
}

export default function StatsStrip() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex min-h-[220px] max-w-7xl flex-col justify-center px-6 py-10 md:flex-row md:items-center md:justify-between md:gap-8">
        <CounterItem label="Totale raccolto" value={957} suffix=" €" color="text-[#E4B15A]" />
        <CounterItem label="Fino ad ora abbiamo donato" value={858} suffix=" €" color="text-[#1F3B2D]" />
        <CounterItem label="Cifra raccolta per il progetto" value={99} suffix=" €" color="text-[#C96B3C]" />
        <CounterItem label="Gatti adottati" value={100} color="text-black" />
      </div>
    </section>
  )
}