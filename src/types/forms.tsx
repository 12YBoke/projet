import * as z from "zod"

export const AuthenticationFormFieldsType = z.object({
  email: z.string().email()
    .min(5, {
      message: "Votre adresse est trop court.",
    })
    .max(50),
  username: z.string()
    .min(5, {
      message: "Votre nom d'utilisateur est trop court.",
    })
    .max(50),
  password: z.string()
    .min(2, {
      message: "Votre mot de passe est trop court.",
    })
    .max(50),
})

export const logInFormFieldsType = z.object({
  email: z.string().email()
    .min(5, {
      message: "Votre adresse est trop court.",
    })
    .max(50),
  password: z.string()
    .min(2, {
      message: "Votre mot de passe est trop court.",
    })
    .max(50),
})

const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

export const CensusFormFieldsType = z.object({
  first_name: z.string()
    .min(2, {
      message: "Prenom trop court.",
    })
    .max(50),
  last_name: z.string()
    .min(2, {
      message: "Nom trop court.",
    })
    .max(50),
  sexe: z.string()
    .min(1)
    .max(1),
  date_of_birth: z.date({
    required_error: "Entrez la date de naissance",
  }),
  address: z.string()
    .min(2, {
      message: "Adresse trop courte.",
    })
    .max(50),
  phone_number: z.string()
    .regex(new RegExp('^0(8|9)[0-9]{8}$'), {
      message: "Veuillez entrer un numero de telephone valide."
    }),
  id_card_number: z.string()
    .min(2, {
      message: "Numero de carte d'identité incorrect.",
    })
    .max(50),
  
  id_card_copy: z.object({
    profileImage: z
      .any()
      .refine((files) => files?.length === 0, "Image is required.") // if no file files?.length === 0, if file files?.length === 1
      .refine((files) => files?.[0]?.size >= MAX_FILE_SIZE, `Max file size is 5MB.`) // this should be greater than or equals (>=) not less that or equals (<=)
      .refine(
        (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
        ".jpg, .jpeg, .png and .webp files are accepted."
      ),
  })
})