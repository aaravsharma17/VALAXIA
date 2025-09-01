import { createClient } from '@supabase/supabase-js';

// Note: These would be your actual Supabase credentials
// For now, using placeholder values - you'll need to set up Supabase
const supabaseUrl = 'https://your-project.supabase.co';
const supabaseKey = 'your-anon-key';

export const supabase = createClient(supabaseUrl, supabaseKey);

// Types for service inquiries
export interface ServiceInquiry {
  id?: string;
  service_type: string;
  tier: string;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  project_description: string;
  budget_range: string;
  timeline: string;
  additional_requirements?: string;
  created_at?: string;
}

// Function to submit service inquiry
export const submitServiceInquiry = async (inquiry: Omit<ServiceInquiry, 'id' | 'created_at'>) => {
  try {
    const { data, error } = await supabase
      .from('service_inquiries')
      .insert([inquiry])
      .select();

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Error submitting inquiry:', error);
    return { success: false, error };
  }
};