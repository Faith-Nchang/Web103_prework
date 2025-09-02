import { createClient } from '@supabase/supabase-js';
const URL = "https://hmrwsyvmsbvoewphxwea.supabase.co"
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhtcndzeXZtc2J2b2V3cGh4d2VhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY3NjQyNTksImV4cCI6MjA3MjM0MDI1OX0.kRaSGhU0U8cBxir5PdhxJ1JHVHeoT5KFcgVathQJYrE';

export const supabase = createClient(URL, API_KEY);
