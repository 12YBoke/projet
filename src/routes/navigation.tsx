/* eslint-disable react/no-unescaped-entities */
'use client'

import { Typography } from "@/ui/components/typography/typography"
import Link from "next/link"
import { ActiveLink } from "./active-link"
import clsx from 'clsx'
import { MainRoutes } from "@/lib/page-routes/page-routes"
import { Container } from "@/ui/components/container/container"
import { SignOutForm } from "@/ui/modules/sign-out-form/sign-out-form"
import { useEffect, useState } from "react"
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

interface Props {
  className?: string
}

export const Navigation = ({ className }: Props) => {
  
  const supabase = createClientComponentClient()
  const [user, setUser] = useState<any| null>()

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getSession()
      setUser(data)
    }

    getUser()

  }, [supabase])

  return(
    <header 
      className={
        clsx(
          "z-[100] fixed top-0 left-0 bottom-0 border-r-[1px] w-[15vw] border-gray-100  bg-white",
          className
        )
      }
    >
      <Container className="flex flex-col items-center justify-between px-6 py-6 h-[100vh] gap-20">
        <Container className="flex flex-col gap-8">
          <Link href="/dashboard">
            <Typography variant="title-sm" component="h3">RECENCEMENT DE LA COMMUNE DE LIMETE</Typography>
          </Link>
          <Container className="">
            <Typography variant="title-sm" component="h4">
              Agent : {user ? user.session.user.user_metadata.first_name : 'chargement du nom'}
            </Typography>
          </Container>
          <nav className="block gap-2">
            {
              MainRoutes.map(route => 
                <Typography key={route.label} variant="body-base" component="p">
                  <ActiveLink href={route.baseUrl}>
                    {route.label}
                  </ActiveLink>
                </Typography>  
              )
            }
          </nav>
        </Container>
        <Container className="flex flex-col gap-4">
          <SignOutForm/>
        </Container>
      </Container>
    </header>
  )
}