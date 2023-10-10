'use client'

import { useRouter } from 'next/navigation'
import { logIn } from '@/api/log-in'
import { Form } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { logInFormFieldsType } from "@/types/forms"
import { InputField } from "@/ui/components/input-field/input-field"
import { Buttons } from "@/ui/components/buttons/buttons"
import { Container } from "@/ui/components/container/container"
import { Typography } from "@/ui/components/typography/typography"

export const LogInForm = () => {
  const router = useRouter()
  const form = useForm<z.infer<typeof logInFormFieldsType>>({
    resolver: zodResolver(logInFormFieldsType),
    defaultValues: {
      email: "",
      password: ""
    },
  })
 
  async function onSubmit(values: z.infer<typeof logInFormFieldsType>) {
    const {email, password} = values
    await logIn(email, password)
    router.refresh()
  }
  
  return(
    
    <Container className="p-6 border-[1px] border-gray-100 rounded w-[30%]">
      <Container className="pb-6">
        <Typography variant="title-base" component="h2">Authentification</Typography>
      </Container>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <InputField
            control={form.control}
            name='email'
            label="Adresse mail"
            placeholder="Entrez votre adresse mail"
          />
          <InputField
            control={form.control}
            name='password'
            label='Mot de passe'
            placeholder='Entrez votre mot de passe'
            type="password"
          />
          <Buttons type='submit'>Connexion</Buttons>
        </form>
      </Form>      
    </Container>
  )
}