'use client'

import { useRouter } from 'next/navigation'
import { signOut } from '@/api/sign-out'
import { Buttons } from "@/ui/components/buttons/buttons"

export const SignOutForm = () => {
  const router = useRouter()

  const handleSignOut = async () => {
    await signOut()
    router.refresh()
    router.push('/')
  }

  return(
    <Buttons variant='accent' buttonType='action' action={() => {handleSignOut()}} >Deconnexion</Buttons>
  )
}