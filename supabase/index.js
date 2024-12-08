import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const SUPABASE_URL = 'https://oboobszlhgsleplsgoty.supabase.co'
const SUPABASE_KEY = process.env.NUXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)