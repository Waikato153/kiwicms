'use client'
import { useEffect } from "react"

export default function Error({error, reset}:{error: Error & {digest?:string}, reset: () => void}) {
  useEffect(() => {
    return () => {
      reset()
    }
  }, [])
  return <div>
    <h1>Error</h1>
    <p>{error.message}</p>
  </div>

}