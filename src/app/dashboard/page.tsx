/* eslint-disable react/no-unescaped-entities */
'use client'

import { useUser } from "@/hooks/useUser";
import { Typography } from "@/ui/components/typography/typography";
import { SignOutForm } from "@/ui/modules/sign-out-form/sign-out-form";
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect, useState } from 'react'

export default function Home() {
  const [todos, setTodos] = useState<any[]| null>()
  const [user, setUser] = useState<any| null>()
  const supabase = createClientComponentClient()
  const userId = useUser()

  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from('todo').select()
      setTodos(data)
    }

    getData()

    const getUser = async () => {
      const { data } = await supabase.auth.getSession()
      setUser(data)
    }

    getUser()

  }, [supabase, userId])

  
  console.log(userId)

  return (
    <>
      
    </>
  )
}

