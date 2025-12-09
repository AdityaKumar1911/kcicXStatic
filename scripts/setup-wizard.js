#!/usr/bin/env node

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import * as readline from 'readline';

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

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
  console.log(`\n${colors.cyan}${colors.bold}🚀 Supabase Setup Wizard${colors.reset}\n`);
  console.log(`${colors.yellow}This wizard will help you configure your Supabase connection.${colors.reset}\n`);

  // Step 1: Check if they have a Supabase account
  console.log(`${colors.bold}Step 1: Supabase Account${colors.reset}`);
  console.log(`Do you have a Supabase account? (yes/no)`);
  const hasAccount = await question('> ');

  if (hasAccount.toLowerCase() !== 'yes' && hasAccount.toLowerCase() !== 'y') {
    console.log(`\n${colors.cyan}📝 Please create a Supabase account first:${colors.reset}`);
    console.log(`   1. Go to ${colors.cyan}https://supabase.com${colors.reset}`);
    console.log(`   2. Click "Start your project"`);
    console.log(`   3. Sign up (it's free!)`);
    console.log(`   4. Come back and run ${colors.cyan}npm run setup${colors.reset} again\n`);
    rl.close();
    return;
  }

  // Step 2: Get Project URL
  console.log(`\n${colors.bold}Step 2: Get Your Credentials${colors.reset}`);
  console.log(`In your Supabase dashboard:`);
  console.log(`   1. Click ${colors.cyan}Settings${colors.reset} (gear icon)`);
  console.log(`   2. Click ${colors.cyan}API${colors.reset}`);
  console.log(`   3. Copy your ${colors.cyan}Project URL${colors.reset}\n`);
  
  const url = await question(`${colors.green}Paste your Project URL:${colors.reset} `);

  if (!url || !url.includes('supabase.co')) {
    console.log(`\n${colors.red}❌ Invalid URL format${colors.reset}`);
    console.log(`URL should look like: ${colors.cyan}https://xxxxxxxxxxxxx.supabase.co${colors.reset}\n`);
    rl.close();
    return;
  }

  // Step 3: Get Anon Key
  console.log(`\n${colors.bold}Step 3: Get Your API Key${colors.reset}`);
  console.log(`In the same API settings page:`);
  console.log(`   Copy your ${colors.cyan}anon public${colors.reset} key (NOT service_role)\n`);
  
  const key = await question(`${colors.green}Paste your anon public key:${colors.reset} `);

  if (!key || !key.startsWith('eyJ')) {
    console.log(`\n${colors.red}❌ Invalid key format${colors.reset}`);
    console.log(`The anon public key should start with: ${colors.cyan}eyJ${colors.reset}\n`);
    rl.close();
    return;
  }

  // Step 4: Write to .env file
  try {
    const envPath = join(__dirname, '..', '.env');
    const envContent = readFileSync(envPath, 'utf-8');
    
    const updatedContent = envContent
      .replace(/VITE_SUPABASE_URL=.*/, `VITE_SUPABASE_URL=${url.trim()}`)
      .replace(/VITE_SUPABASE_ANON_KEY=.*/, `VITE_SUPABASE_ANON_KEY=${key.trim()}`);
    
    writeFileSync(envPath, updatedContent, 'utf-8');

    console.log(`\n${colors.green}${colors.bold}✅ Configuration saved successfully!${colors.reset}\n`);
    console.log(`${colors.cyan}🎉 Next steps:${colors.reset}`);
    console.log(`   1. Run ${colors.cyan}npm run dev${colors.reset} to start the development server`);
    console.log(`   2. Check the footer for a green "Connected" badge`);
    console.log(`   3. See ${colors.cyan}DATABASE_MIGRATION_GUIDE.md${colors.reset} to set up your database\n`);

  } catch (error) {
    console.log(`\n${colors.red}❌ Error saving configuration${colors.reset}`);
    console.log(`   ${error.message}\n`);
  }

  rl.close();
}

main().catch(error => {
  console.error(`${colors.red}Error:${colors.reset}`, error);
  rl.close();
  process.exit(1);
});
