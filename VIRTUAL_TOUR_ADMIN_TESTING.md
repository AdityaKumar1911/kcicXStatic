# Virtual Tour Admin Testing Guide

## Prerequisites

1. **Run the database migration** to add the `virtual_tour_url` column:
   ```sql
   ALTER TABLE partner_universities ADD COLUMN IF NOT EXISTS virtual_tour_url TEXT;
   ```
   Run this in the Supabase Dashboard SQL Editor.

2. **Ensure you have admin access** - You must be logged in as an admin user.

## Testing Steps

### Step 1: Access the Admin Panel
1. Navigate to `/admin/login`
2. Log in with your admin credentials
3. Click on **"Virtual Tours"** in the sidebar navigation

### Step 2: Test the Admin Interface
1. **Search functionality**: Type a university name or country in the search box
2. **Verify universities load**: You should see a list of partner universities with their logos

### Step 3: Add a Sample YouTube URL
1. Find a university (e.g., "Deakin University")
2. Enter a YouTube URL in the input field:
   ```
   https://www.youtube.com/watch?v=dQw4w9WgXcQ
   ```
3. Click the **"Save"** button
4. You should see a green checkmark with "Saved" confirmation

### Step 4: Verify on University Detail Page
1. Navigate to `/universities/[university-slug]` (e.g., `/universities/deakin-university`)
2. Look for the **"Virtual Tour"** button in the hero section
3. Click the button to open the YouTube video modal

## Sample YouTube URLs for Testing

| University | Sample URL |
|------------|------------|
| Deakin University | `https://www.youtube.com/watch?v=example1` |
| Swinburne University | `https://www.youtube.com/watch?v=example2` |
| Griffith University | `https://www.youtube.com/watch?v=example3` |

## Troubleshooting

### Universities not loading
- Check browser console for errors
- Verify Supabase connection is working
- Ensure the `partner_universities` table exists

### Save button not working
- Check if you have write permissions on the table
- Verify RLS policies allow updates for admin users

### Virtual Tour button not appearing
- Ensure the URL was saved successfully
- Check that the URL is a valid YouTube link
- Refresh the university detail page

## API Endpoints

The admin interface uses these Supabase queries:

**Fetch universities:**
```javascript
supabase
  .from("partner_universities")
  .select("id, name, slug, country, city, logo_url, virtual_tour_url")
  .order("display_order")
```

**Update virtual tour URL:**
```javascript
supabase
  .from("partner_universities")
  .update({ virtual_tour_url: url })
  .eq("id", universityId)
```
