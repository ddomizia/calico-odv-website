'use client'

import { useEffect, useRef, useState } from 'react'
import {
  FaCoins,
  FaHandHoldingHeart,
  FaEuroSign,
  FaCat,
  FaDog,
} from 'react-icons/fa'

type CounterItemProps = {
  label: string
  value: number
  suffix?: string
  color?: string
  icon: React.ReactNode
}

function CounterItem({
  label,
  value,
  suffix = '',
  color = 'text-black',
  icon,
}: CounterItemProps) {
  const [count, setCount] = useState(0)
  const [startAnimation, setStartAnimation] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!startAnimation) return

    const duration = 2500
    const startTime = performance.now()

    const animate = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1)
      const easedProgress = 1 - Math.pow(1 - progress, 3)
      const currentValue = Math.floor(easedProgress * value)

      setCount(currentValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [startAnimation, value])

  return (
    <div ref={ref} className="flex min-w-0 flex-col items-center text-center">
      <div className={`mb-3 text-2xl md:text-3xl ${color}`}>{icon}</div>

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
      <div className="mx-auto grid min-h-[220px] max-w-7xl grid-cols-1 gap-10 px-6 py-10 sm:grid-cols-2 lg:grid-cols-5 lg:items-center">
        <CounterItem
          label="Totale raccolto"
          value={957}
          suffix=" €"
          color="text-[#E4B15A]"
          icon={<FaCoins />}
        />

        <CounterItem
          label="Abbiamo donato"
          value={858}
          suffix=" €"
          color="text-[#1F3B2D]"
          icon={<FaHandHoldingHeart />}
        />

        <CounterItem
          label="Per il progetto"
          value={99}
          suffix=" €"
          color="text-[#C96B3C]"
          icon={<FaEuroSign />}
        />

        <CounterItem
          label="Gatti adottati"
          value={100}
          color="text-black"
          icon={<FaCat />}
        />

        <CounterItem
          label="Cani adottati"
          value={35}
          color="text-[#A65A3A]"
          icon={<FaDog />}
        />
      </div>
    </section>
  )
}