import { MetadataRoute } from 'next';
import { programs } from '@/data/programs';
import { universities, otherUniversities } from '@/data/universities';
import { campuses } from '@/data/campuses';
import { tutors } from '@/data/tutors';
import { specialtyPrograms } from '@/data/specialtyPrograms';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://cornerstone.edu.in';



export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  // Static pages with high priority
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: currentDate, changeFrequency: 'daily', priority: 1.0 },
    { url: `${BASE_URL}/programs`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/universities`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/campuses`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/tutors`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/apply`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/contact`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/students`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/parents`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/pathways`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/manifesto`, lastModified: currentDate, changeFrequency: 'yearly', priority: 0.5 },
  ];

  // Program pages
  const programPages: MetadataRoute.Sitemap = programs.map((program) => ({
    url: `${BASE_URL}/programs/${program.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Specialty program pages
  const specialtyPages: MetadataRoute.Sitemap = specialtyPrograms.map((program) => ({
    url: `${BASE_URL}/programs/${program.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // University pages
  const allUniversities = [...universities, ...otherUniversities];
  const universityPages: MetadataRoute.Sitemap = allUniversities.map((uni) => ({
    url: `${BASE_URL}/universities/${uni.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Campus pages
  const campusPages: MetadataRoute.Sitemap = campuses.map((campus) => ({
    url: `${BASE_URL}/campuses/${campus.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Tutor pages
  const tutorPages: MetadataRoute.Sitemap = tutors.map((tutor) => ({
    url: `${BASE_URL}/tutors/${tutor.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...programPages, ...specialtyPages, ...universityPages, ...campusPages, ...tutorPages];
}
