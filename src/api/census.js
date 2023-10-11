import {createClientComponentClient} from "@supabase/auth-helpers-nextjs"
// import supabase from "../config/supabaseClient"

const supabase = createClientComponentClient()

export const registerCensusData = async (first_name, last_name, sexe, address, phone_number, id_card_number) => {
  const { data, error } = await supabase
    .from('census')
    .insert([{ first_name, last_name, sexe, address, phone_number, id_card_number }])

    if(error) {
      return {
        error: {
          code : error.code,
          message : error.message
        }
      }
    }
}
