# Program Detail Pages

## Overview
Individual program detail pages are now available at `/programs/:slug` that display comprehensive information about each program fetched from the Supabase database.

## Features

### Dynamic Data Fetching
- Programs are fetched from Supabase based on the URL slug parameter
- Data includes: title, description, duration, level, tuition fees, entry requirements, career opportunities, and modules
- Qualification name is fetched via foreign key relationship

### Page Sections

1. **Header Section**
   - Back button to return to previous page
   - Qualification badge
   - Program title with gradient styling
   - Level and duration display

2. **Program Overview Card**
   - Full program description

3. **Key Information Card**
   - Duration with clock icon
   - Level with graduation cap icon
   - Tuition fees with dollar sign icon
   - Entry requirements with book icon

4. **Course Modules Card**
   - List of all modules included in the program
   - Each module displayed with a checkmark icon
   - Styled with gradient backgrounds

5. **Career Opportunities Card**
   - Grid display of career paths
   - Each career option with briefcase icon
   - Organized in a 2-column grid

6. **Sidebar (Sticky)**
   - "Ready to Apply?" call-to-action
   - Apply Now button (links to /apply)
   - Calculate Savings button (links to /calculator)
   - Contact Us button (links to /contact)

### Loading & Error States
- Loading spinner while fetching data
- Error handling with "Program Not Found" message
- Redirect option to browse all programs

## Database Structure

Programs are fetched with this query:
```sql
SELECT 
  programs.*,
  qualifications.name
FROM programs
JOIN qualifications ON programs.qualification_id = qualifications.id
WHERE programs.slug = :slug
```

## Navigation
- Accessible from Programs listing page
- Each program card has "View Details" button
- Homepage program section also links to detail pages
- URL format: `/programs/bachelor-of-business-administration`

## Related Updates
- Programs.tsx: Updated to fetch from Supabase
- ProgramsSection.tsx: Updated to fetch from Supabase
- All program links now use database slugs
