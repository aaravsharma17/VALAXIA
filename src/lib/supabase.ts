import { createClient } from '@supabase/supabase-js';

// Note: These would be your actual Supabase credentials
// For now, using placeholder values - you'll need to set up Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-project.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key';

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

// Function to submit contact form
export interface ContactMessage {
  id?: string;
  name: string;
  email: string;
  subject?: string;
  message: string;
  created_at?: string;
}

export const submitContactMessage = async (message: Omit<ContactMessage, 'id' | 'created_at'>) => {
  try {
    const { data, error } = await supabase
      .from('contact_messages')
      .insert([message])
      .select();

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Error submitting contact message:', error);
    return { success: false, error };
  }
};