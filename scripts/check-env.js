#!/usr/bin/env node

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ANSI color codes
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  bold: '\x1b[1m'
};

console.log(`\n${colors.cyan}${colors.bold}🔍 Checking Supabase Configuration...${colors.reset}\n`);

try {
  // Read .env file
  const envPath = join(__dirname, '..', '.env');
  const envContent = readFileSync(envPath, 'utf-8');

  // Parse environment variables
  const lines = envContent.split('\n');
  let supabaseUrl = '';
  let supabaseKey = '';

  for (const line of lines) {
    if (line.startsWith('VITE_SUPABASE_URL=')) {
      supabaseUrl = line.split('=')[1]?.trim() || '';
    }
    if (line.startsWith('VITE_SUPABASE_ANON_KEY=')) {
      supabaseKey = line.split('=')[1]?.trim() || '';
    }
  }

  let hasErrors = false;

  // Check URL
  if (!supabaseUrl || supabaseUrl === 'https://your-project-id.supabase.co') {
    console.log(`${colors.red}❌ Supabase URL is NOT configured${colors.reset}`);
    console.log(`   Current value: ${colors.yellow}${supabaseUrl || '(empty)'}${colors.reset}`);
    console.log(`   Expected: ${colors.green}https://xxxxxxxxxxxxx.supabase.co${colors.reset}\n`);
    hasErrors = true;
  } else if (!supabaseUrl.startsWith('https://') || !supabaseUrl.includes('.supabase.co')) {
    console.log(`${colors.red}❌ Supabase URL format is invalid${colors.reset}`);
    console.log(`   Current value: ${colors.yellow}${supabaseUrl}${colors.reset}`);
    console.log(`   Expected format: ${colors.green}https://xxxxxxxxxxxxx.supabase.co${colors.reset}\n`);
    hasErrors = true;
  } else {
    console.log(`${colors.green}✅ Supabase URL is configured${colors.reset}`);
    console.log(`   ${colors.cyan}${supabaseUrl}${colors.reset}\n`);
  }

  // Check Key
  if (!supabaseKey || supabaseKey === 'your_supabase_anon_key_here') {
    console.log(`${colors.red}❌ Supabase Anon Key is NOT configured${colors.reset}`);
    console.log(`   Current value: ${colors.yellow}${supabaseKey || '(empty)'}${colors.reset}`);
    console.log(`   Expected: ${colors.green}eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...${colors.reset}\n`);
    hasErrors = true;
  } else if (!supabaseKey.startsWith('eyJ')) {
    console.log(`${colors.red}❌ Supabase Anon Key format is invalid${colors.reset}`);
    console.log(`   Keys should start with: ${colors.green}eyJ${colors.reset}`);
    console.log(`   Your key starts with: ${colors.yellow}${supabaseKey.substring(0, 10)}...${colors.reset}\n`);
    hasErrors = true;
  } else {
    console.log(`${colors.green}✅ Supabase Anon Key is configured${colors.reset}`);
    console.log(`   ${colors.cyan}${supabaseKey.substring(0, 20)}...${colors.reset}\n`);
  }

  // Final result
  if (hasErrors) {
    console.log(`${colors.red}${colors.bold}❌ Configuration is INCOMPLETE${colors.reset}\n`);
    console.log(`${colors.yellow}📖 Next steps:${colors.reset}`);
    console.log(`   1. Open ${colors.cyan}SETUP_ENV.md${colors.reset} for detailed instructions`);
    console.log(`   2. Get your credentials from ${colors.cyan}https://supabase.com${colors.reset}`);
    console.log(`   3. Update the ${colors.cyan}.env${colors.reset} file`);
    console.log(`   4. Run ${colors.cyan}npm run check-env${colors.reset} again\n`);
    process.exit(1);
  } else {
    console.log(`${colors.green}${colors.bold}✅ All environment variables are set correctly!${colors.reset}\n`);
    console.log(`${colors.cyan}🚀 Next steps:${colors.reset}`);
    console.log(`   1. Run ${colors.cyan}npm run dev${colors.reset} to start the development server`);
    console.log(`   2. Check the footer for a green "Connected" badge`);
    console.log(`   3. See ${colors.cyan}DATABASE_MIGRATION_GUIDE.md${colors.reset} to set up your database\n`);
    process.exit(0);
  }

} catch (error) {
  console.log(`${colors.red}❌ Error reading .env file${colors.reset}`);
  console.log(`   ${error.message}\n`);
  console.log(`${colors.yellow}💡 Make sure you have a .env file in the project root${colors.reset}\n`);
  process.exit(1);
}
