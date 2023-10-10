import {createClientComponentClient} from "@supabase/auth-helpers-nextjs"

const supabase = createClientComponentClient()

export const logIn = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  })

  if(error) {
    return {
      error: {
        code : error.code,
        message : error.message
      }
    }
  }
}
