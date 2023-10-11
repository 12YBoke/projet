import {createClientComponentClient} from "@supabase/auth-helpers-nextjs"

const supabase = createClientComponentClient()

export const registerCensusData = async (first_name, last_name, sexe, date_of_birth, address, phone_number, id_card_number) => {
  const { data, error } = await supabase
    .from('census')
    .insert([{ first_name, last_name, sexe, address, phone_number, id_card_number, date_of_birth }])
}
