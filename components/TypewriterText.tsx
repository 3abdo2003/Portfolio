import React, { useState, useEffect } from "react"

export const TypewriterText = ({ texts }: { texts: string[] }) => {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [reverse, setReverse] = useState(false)
  const [blink, setBlink] = useState(true)

  useEffect(() => {
    if (index === texts.length) return

    if (subIndex === texts[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000)
      return
    }

    if (subIndex === 0 && reverse) {
      setReverse(false)
      setIndex((prev) => (prev + 1) % texts.length)
      return
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1))
    }, reverse ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [subIndex, index, reverse, texts])

  useEffect(() => {
    const timeout = setInterval(() => {
      setBlink((prev) => !prev)
    }, 500)
    return () => clearInterval(timeout)
  }, [])

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400 font-bold whitespace-nowrap">
      {texts[index].substring(0, subIndex)}
      <span className={`${blink ? "opacity-100" : "opacity-0"} text-red-600 transition-opacity ml-0.5`}>|</span>
    </span>
  )
}