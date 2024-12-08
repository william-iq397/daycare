import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database


export const supabase = createClient('https://oboobszlhgsleplsgoty.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ib29ic3psaGdzbGVwbHNnb3R5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA1NDU4MzUsImV4cCI6MjA0NjEyMTgzNX0.91gHMCv5AwFpcP-1vGZOR6Cj4Mris8ivi8SWtuLFFYw')
