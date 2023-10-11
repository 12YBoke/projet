'use client'

import { signUp } from '@/api/sign-up'
import { Form } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { AuthenticationFormFieldsType } from "@/types/forms"
import { InputField } from "@/ui/components/input-field/input-field"
import { Buttons } from "@/ui/components/buttons/buttons"
import { Container } from "@/ui/components/container/container"
import { Typography } from "@/ui/components/typography/typography"
import { useRouter } from 'next/navigation'

export const SignUpForm = () => {
  const router = useRouter()
  const form = useForm<z.infer<typeof AuthenticationFormFieldsType>>({
    resolver: zodResolver(AuthenticationFormFieldsType),
    defaultValues: {
      email: "",
      username: "",
      password: ""
    },
  })
 
  async function onSubmit(values: z.infer<typeof AuthenticationFormFieldsType>) {
    const {email, username, password} = values
    await signUp(email, username, password)
    router.refresh()
    router.push('/')
  }
  
  return(
    
    <Container className="p-6 border-[1px] border-gray-100 rounded w-[30%]">
      <Container className="pb-6">
        <Typography variant="title-base" component="h2">Creation du compte</Typography>
      </Container>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <InputField
            control={form.control}
            name='username'
            label="Nom d'utilisateur"
            placeholder="Entrez votre nom d'utilisateur"
          />
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
          <Buttons type='submit'>Ajouter</Buttons>
        </form>
      </Form>
      <br/>
      <br/>
      <Buttons variant='ghost' buttonType='link' baseUrl='/'>Se connecter</Buttons>
    </Container>
  )
}