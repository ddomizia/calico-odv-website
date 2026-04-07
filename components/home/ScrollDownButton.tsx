'use client'

import { ChevronDown } from 'lucide-react'

export default function ScrollDownButton({
  targetId,
}: {
  targetId: string
}) {
  const handleScroll = () => {
    const element = document.getElementById(targetId)
    if (!element) return

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <button
      type="button"
      onClick={handleScroll}
      aria-label="Vai alla sezione successiva"
      className="group inline-flex flex-col items-center"
    >
      <span className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#E4B15A] transition group-hover:text-white">
        Scopri
      </span>

      <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full border border-[#E4B15A]/80 bg-[#E4B15A]/15 shadow-[0_10px_35px_rgba(0,0,0,0.25)] backdrop-blur-md transition duration-300 group-hover:scale-105 group-hover:bg-[#E4B15A]">
        <ChevronDown
          size={24}
          className="animate-bounce text-[#E4B15A] transition group-hover:text-black"
        />
      </span>
    </button>
  )
}