// import supabase from "../config/supabaseClient"
import {createClientComponentClient} from "@supabase/auth-helpers-nextjs"

const supabase = createClientComponentClient()

export const signOut = async () => {
  const { data, error } = await supabase.auth.signOut()
}