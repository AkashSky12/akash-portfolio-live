'use client'
import { useEffect } from 'react'
import { trackVisit } from '@/lib/analytics'

/** Fires a once-per-session visit event + notification on first load. */
export default function VisitTracker() {
  useEffect(() => {
    trackVisit()
  }, [])
  return null
}
