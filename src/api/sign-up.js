import {createClientComponentClient} from "@supabase/auth-helpers-nextjs"

const supabase = createClientComponentClient()

export const signUp = async (email, username, password) => {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      emailRedirectTo: `${location.origin}/auth/callback`,
      data: {
        first_name: username,
      }
    },
  })

}