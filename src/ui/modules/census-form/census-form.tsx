'use client'

import { registerCensusData } from '@/api/census'
import { Form } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { CensusFormFieldsType } from "@/types/forms"
import { InputField } from "@/ui/components/input-field/input-field"
import { Buttons } from "@/ui/components/buttons/buttons"
import { Container } from "@/ui/components/container/container"
import { Typography } from "@/ui/components/typography/typography"
import { InputFieldDate } from '@/ui/components/input-field-date/input-field-date'
import { InputFieldSelect } from '@/ui/components/input-field-select/input-field-select'
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"

export const CensusForm = () => {
  const { toast } = useToast()

  const form = useForm<z.infer<typeof CensusFormFieldsType>>({
    resolver: zodResolver(CensusFormFieldsType),
    defaultValues: {
      first_name: "",
      last_name: "",
      // date_of_birth: undefined,
      sexe: "",
      address: "",
      phone_number: "",
      id_card_number: "",
      // id_card_copy: undefined
    },
  })
 
  async function onSubmit(values: z.infer<typeof CensusFormFieldsType>) {
    const {first_name, last_name, sexe, address, phone_number, id_card_number} = values
    const result = await registerCensusData(first_name, last_name, sexe, address, phone_number, id_card_number)
    console.log(result)

    if(result === undefined) {
      toast({
        title: "Enregistré",
        description: "Informations enregistrées avec succes",
      })
    } else {
      toast({
        variant: "destructive",
        title: "Erreur survernue",
        description: "Veuillez reentrer les informations",
      })
    }
  }
  
  return(
    
    <Container className="p-6 border-[1px] border-gray-100 rounded">
        <Container className="pb-6">
          <Typography variant="title-base" component="h2">Formulaire de recensement</Typography>
        </Container>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <Container className='flex flex-row gap-8 justify-between'>
            <Container>
              <InputField
                control={form.control}
                name='first_name'
                label="Prenom"
                placeholder="Entrez le prenom"
              />
              <InputField
                control={form.control}
                name='last_name'
                label="Nom"
                placeholder="Entrez le nom"
              />
              {/* <InputFieldDate
                control={form.control}
                name='date_of_birth'
                label="Date de naissance"
              /> */}
              <InputFieldSelect
                control={form.control}
                name='sexe'
                label="Sexe"
                placeholder="Homme / Femme"
                options={[{ id: 1, name: 'Homme'}, { id: 2, name: 'Femme'},]} 
                description={''}
              />
            </Container>
            <Container>
              <InputField
                control={form.control}
                name='address'
                label='Adresse du domicile'
                placeholder="Adresse de domicile"
              />
              <InputField
                control={form.control}
                name='phone_number'
                label='Numero de téléphone'
                placeholder='Numero de telephone'
              />
              <InputField
                control={form.control}
                name='id_card_number'
                label="Numero de la carte d'identité nationale"
                placeholder="Numero de la carte d'identité nationale"
              />
              {/* <InputField
                control={form.control}
                name='id_card_copy'
                label="Copie de la carte d'identité nationale"
                placeholder="Copie de la carte d'identité nationale"
                type='file'
              /> */}
            </Container>
          </Container>
            
            
            <Buttons type='submit'>Enregistrer</Buttons>
          </form>
        </Form>
    </Container>
  )
}