// supabase connection for players database
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.PUBLIC_SUPABASE_ANON_KEY;

const client = createClient(supabaseUrl, supabaseAnonKey);

export default client;