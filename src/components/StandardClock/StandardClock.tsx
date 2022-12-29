import { useEffect, useState } from "react"
import "./StandardClock.scss"

interface StandardClockProps {
  className?: string
}

function StandardClock({ className }: StandardClockProps) {
  const [time, setTime] = useState(new Date())
  const hours = time.getHours().toString().padStart(2, "0")
  const minutes = time.getMinutes().toString().padStart(2, "0")
  const seconds = time.getSeconds().toString().padStart(2, "0")

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return <div className={`${className ?? "standard-clock"}`}>{`${hours}:${minutes}:${seconds}`}</div>
}

export { StandardClock }
