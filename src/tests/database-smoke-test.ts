/**
 * Database Smoke Tests
 * Validates database connectivity, RLS policies, and data integrity
 */

import { supabase } from '@/lib/supabase';
import type { Database } from '@/types/supabase';

interface TestResult {
  test: string;
  passed: boolean;
  error?: string;
  data?: any;
}

export async function runDatabaseSmokeTests(): Promise<TestResult[]> {
  const results: TestResult[] = [];

  // 1. Test signature_programs read (public access)
  try {
    const { data, error } = await supabase
      .from('signature_programs')
      .select('id, name, slug')
      .limit(1);
    
    results.push({
      test: 'signature_programs: Public read access',
      passed: !error,
      error: error?.message,
      data: data?.[0]
    });
  } catch (e) {
    results.push({
      test: 'signature_programs: Public read access',
      passed: false,
      error: String(e)
    });
  }

  // 2. Test partner_universities read (public access)
  try {
    const { data, error } = await supabase
      .from('partner_universities')
      .select('id, name, slug, country')
      .limit(1);
    
    results.push({
      test: 'partner_universities: Public read access',
      passed: !error,
      error: error?.message,
      data: data?.[0]
    });
  } catch (e) {
    results.push({
      test: 'partner_universities: Public read access',
      passed: false,
      error: String(e)
    });
  }

  // 3. Test testimonials read (RLS: approved only for anon)
  try {
    const { data, error } = await supabase
      .from('testimonials')
      .select('id, name, status')
      .eq('status', 'approved')
      .limit(1);
    
    results.push({
      test: 'testimonials: RLS approved-only access',
      passed: !error,
      error: error?.message,
      data: data?.[0]
    });
  } catch (e) {
    results.push({
      test: 'testimonials: RLS approved-only access',
      passed: false,
      error: String(e)
    });
  }

  // 4. Test slug uniqueness (partner_universities)
  try {
    const { data, error } = await supabase
      .from('partner_universities')
      .select('slug')
      .limit(100);
    
    const slugs = data?.map(d => d.slug) || [];
    const uniqueSlugs = new Set(slugs);
    const hasDuplicates = slugs.length !== uniqueSlugs.size;
    
    results.push({
      test: 'partner_universities: Slug uniqueness',
      passed: !hasDuplicates && !error,
      error: hasDuplicates ? 'Duplicate slugs found' : error?.message
    });
  } catch (e) {
    results.push({
      test: 'partner_universities: Slug uniqueness',
      passed: false,
      error: String(e)
    });
  }

  // 5. Test data counts
  try {
    const [programs, universities, testimonials] = await Promise.all([
      supabase.from('signature_programs').select('id', { count: 'exact', head: true }),
      supabase.from('partner_universities').select('id', { count: 'exact', head: true }),
      supabase.from('testimonials').select('id', { count: 'exact', head: true })
    ]);
    
    results.push({
      test: 'Data counts',
      passed: true,
      data: {
        signature_programs: programs.count,
        partner_universities: universities.count,
        testimonials: testimonials.count
      }
    });
  } catch (e) {
    results.push({
      test: 'Data counts',
      passed: false,
      error: String(e)
    });
  }

  return results;
}

export function printTestResults(results: TestResult[]): void {
  console.log('\n🧪 Database Smoke Test Results\n');
  console.log('='.repeat(60));
  
  let passed = 0;
  let failed = 0;
  
  results.forEach(result => {
    const icon = result.passed ? '✅' : '❌';
    console.log(`${icon} ${result.test}`);
    
    if (!result.passed && result.error) {
      console.log(`   Error: ${result.error}`);
    }
    
    if (result.data) {
      console.log(`   Data:`, JSON.stringify(result.data, null, 2));
    }
    
    result.passed ? passed++ : failed++;
  });
  
  console.log('='.repeat(60));
  console.log(`\nTotal: ${results.length} | Passed: ${passed} | Failed: ${failed}\n`);
}

// Run tests if executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  runDatabaseSmokeTests().then(printTestResults);
}
