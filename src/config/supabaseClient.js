import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_APP_SUPABASE_URL;
const supabaseKey = process.env.NEXT_APP_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
