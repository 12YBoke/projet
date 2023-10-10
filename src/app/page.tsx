'use client'

import { useUser } from '@/hooks/useUser'
import { LogInForm } from '@/ui/modules/log-in-form/log-in-form'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
  const userId = useUser()

  useEffect(() => {
    if(userId !== null) {
      redirect('/dashboard')
    }
  }, [userId])

  return (
    <main className="flex w-[100vw] h-[100vh] justify-center items-center">
      <LogInForm/>
    </main>
  )
}
