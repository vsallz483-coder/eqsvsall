"use client"

import { useEffect } from "react"

const AUDIO_URL = "https://cdn.imageurlgenerator.com/uploads/c74b420f-2ee4-413c-9b0e-233107bf70ae.mp3"

export default function BackgroundAudio() {
  useEffect(() => {
    const audio = new Audio(AUDIO_URL)
    audio.loop = true
    audio.preload = "auto"
    audio.volume = 0.35

    let started = false

    const cleanup = () => {
      document.removeEventListener("pointerdown", startFromInteraction, true)
      document.removeEventListener("touchstart", startFromInteraction, true)
      document.removeEventListener("click", startFromInteraction, true)
      document.removeEventListener("keydown", startFromInteraction, true)
    }

    const start = () => {
      if (started) return

      const promise = audio.play()
      if (promise && typeof promise.then === "function") {
        promise
          .then(() => {
            started = true
            cleanup()
          })
          .catch(() => {
            // Browser autoplay policy blocked sound. The next user interaction will retry.
          })
      }
    }

    const startFromInteraction = () => start()

    // Try immediately. If the browser blocks autoplay, any tap/click/key press on the page starts it.
    start()

    document.addEventListener("pointerdown", startFromInteraction, true)
    document.addEventListener("touchstart", startFromInteraction, true)
    document.addEventListener("click", startFromInteraction, true)
    document.addEventListener("keydown", startFromInteraction, true)

    return () => {
      cleanup()
      audio.pause()
      audio.src = ""
    }
  }, [])

  return null
}
