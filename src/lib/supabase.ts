import { createClient } from '@supabase/supabase-js';

// Get Supabase credentials from environment variables
const supabaseUrl = typeof import.meta !== 'undefined' && import.meta.env ? import.meta.env.VITE_SUPABASE_URL || '' : '';
const supabaseKey = typeof import.meta !== 'undefined' && import.meta.env ? import.meta.env.VITE_SUPABASE_ANON_KEY || '' : '';

// Validate credentials
const hasValidCredentials = 
  supabaseUrl && 
  supabaseKey && 
  supabaseUrl.includes('supabase.co') &&
  supabaseKey.length > 20 &&
  !supabaseUrl.includes('your-project-id') &&
  !supabaseKey.includes('your_supabase_anon_key');

// Log connection status in development
const isDev = typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.MODE === 'development';
if (isDev) {

  if (!hasValidCredentials) {
    console.warn('⚠️ Supabase not configured. Please set up your .env file.');
    console.warn('📖 Run: npm run setup (interactive wizard)');
    console.warn('📖 Or see: SETUP_ENV.md for detailed instructions');
    console.warn('🔍 Verify: npm run check-env');
  } else {
    console.log('✅ Supabase client initialized successfully');
    console.log(`📡 Connected to: ${supabaseUrl}`);
  }
}


// Create Supabase client
export const supabase = hasValidCredentials 
  ? createClient(supabaseUrl, supabaseKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
      }
    })
  : null;

// Helper to check if Supabase is configured
export const isSupabaseConfigured = () => hasValidCredentials;

// Helper to get connection status message
export const getConnectionStatus = () => {
  if (!supabaseUrl || supabaseUrl.includes('your-project-id')) {
    return 'VITE_SUPABASE_URL not configured in .env file. Run: npm run setup';
  }
  if (!supabaseKey || supabaseKey.includes('your_supabase_anon_key')) {
    return 'VITE_SUPABASE_ANON_KEY not configured in .env file. Run: npm run setup';
  }
  if (!supabaseUrl.includes('supabase.co')) {
    return 'Invalid Supabase URL format. Should be: https://xxxxx.supabase.co';
  }
  if (supabaseKey.length < 20) {
    return 'Invalid Supabase anon key. Should start with: eyJ...';
  }
  return 'Connected to Supabase';
};

// Helper to get setup instructions
export const getSetupInstructions = () => {
  return {
    title: 'Supabase Setup Required',
    steps: [
      'Run: npm run setup (easiest)',
      'Or manually edit .env file',
      'Get credentials from: https://supabase.com → Settings → API',
      'Verify with: npm run check-env'
    ],
    docs: [
      'SETUP_ENV.md - Visual step-by-step guide',
      'GETTING_STARTED.md - Complete setup guide',
      'setup-guide.html - Open in browser'
    ]
  };
};
