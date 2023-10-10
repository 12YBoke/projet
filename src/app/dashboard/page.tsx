/* eslint-disable react/no-unescaped-entities */
'use client'

import { useUser } from "@/hooks/useUser";
import { Typography } from "@/ui/components/typography/typography";
import { SignOutForm } from "@/ui/modules/sign-out-form/sign-out-form";

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { redirect } from "next/navigation";
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
      <br/>
      {
        todos ? <pre>{JSON.stringify(todos, null, 2)}</pre> : <p>Loading todos...</p>
      }
      <br/>
      <Typography variant="body-lg" component="p">Est ce qu'il est authentifié</Typography>
      {
        user ? <pre>{JSON.stringify(user, null, 2)}</pre> : <p>Loading todos...</p>
      }
      <SignOutForm/>
    </>
  )
}

