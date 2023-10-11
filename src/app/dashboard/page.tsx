/* eslint-disable react/no-unescaped-entities */
'use client'

import { useUser } from "@/hooks/useUser";
import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/components/typography/typography";
import { SignOutForm } from "@/ui/modules/sign-out-form/sign-out-form";
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect, useState } from 'react'
import { DataTable } from "./data-table";
import { Columns } from "./columns";

export default function Home() {
  const [users, setUsers] = useState<any| null>()
  const [usersF, setUsersF] = useState<any| null>()
  const [usersM, setUsersM] = useState<any| null>()
  const [usersMaj, setUsersMaj] = useState<any| null>()
  const [usersMin, setUsersMin] = useState<any| null>()
  const supabase = createClientComponentClient()

  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from('census').select()
      setUsers(data)

    }

    const getDataM = async () => {

      const { data } = await supabase.from('census').select().eq('sexe', 'Homme')
      setUsersM(data)
    }

    const getDataF = async () => {

      const { data } = await supabase.from('census').select().eq('sexe', 'Femme')
      setUsersF(data)
    }

    getData()
    getDataM()
    getDataF()
  }, [supabase])


  return (
    <Container className="flex flex-col p-6 gap-4">
      <Container className="flex flex-row px-8 gap-4">
        <Container className="basis-1/3 p-6 bg-primary-Default rounded">
          <Typography variant="title-sm" component="h4" color="white">Population recensée:</Typography>
          <br/>
          <Typography variant="title-base" component="h3" color="white">
            {
              users ?
              <p>{users.length}</p>
              :
              <p>chargement...</p>
            }
          </Typography>
        </Container>
        
        <Container className="basis-1/3 p-6 bg-accent rounded">
          <Typography variant="title-sm" component="h4" color="white">Population masculine recensée:</Typography>
          <br/>
          <Typography variant="title-base" component="h3" color="white">
            {
              usersM ?
              <p>{usersM.length}</p>
              :
              <p>chargement...</p>
            }
          </Typography>
        </Container>
        <Container className="basis-1/3 p-6 bg-secondary-Default rounded">
          <Typography variant="title-sm" component="h4" color="white">Population feminine recensée:</Typography>
          <br/>
          <Typography variant="title-base" component="h3" color="white">
            {
              usersF ?
              <p>{usersF.length}</p>
              :
              <p>chargement...</p>
            }
          </Typography>
        </Container>
      </Container>
      
      <div className="container mx-auto">
        <DataTable columns={Columns} data={users} />
      </div>
    </Container>
  )
}

