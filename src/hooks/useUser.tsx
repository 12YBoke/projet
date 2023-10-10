'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect, useState } from 'react'

export const useUser = () => {
  const [user, setUser] = useState<any| null>()
  const supabase = createClientComponentClient()

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getSession()
      setUser(data)
    }

    getUser()
    
  }, [supabase])

  if(user) {
    if(user.session === null) {
      return null
    } else {
      return user.session.user.id
    }
  } else {
    return null
  }
} 