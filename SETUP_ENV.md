# 🚀 Setting Up Your .env File - Visual Guide

## What You Need
Your Supabase **Project URL** and **API Key** to connect the app to your database.

---

## 📋 Step-by-Step Instructions

### Step 1: Create a Supabase Account (2 minutes)

1. **Go to** [https://supabase.com](https://supabase.com)
2. **Click** "Start your project" button
3. **Sign up** with GitHub, Google, or Email (it's FREE - no credit card needed)

---

### Step 2: Create a New Project (3 minutes)

1. **Click** "New Project" button (green button in dashboard)
2. **Select** or create an organization
3. **Fill in the form:**
   - **Name:** `pathways-education` (or any name you like)
   - **Database Password:** Create a strong password (SAVE THIS!)
   - **Region:** Choose closest to your location
4. **Click** "Create new project"
5. **Wait** 2-3 minutes while Supabase sets up your database

---

### Step 3: Find Your API Credentials (1 minute)

1. **In your Supabase dashboard**, look at the left sidebar
2. **Click** the ⚙️ **Settings** icon (near the bottom)
3. **Click** "API" in the settings menu
4. **You'll see a page with your credentials:**

```
Configuration
├── Project URL: https://xxxxxxxxxxxxx.supabase.co
└── API Keys
    ├── anon public: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
    └── service_role: [Don't use this one - it's for server-side only]
```

5. **Copy these two values:**
   - ✅ **Project URL** (the https://... link)
   - ✅ **anon public** key (the long eyJ... string)

---

### Step 4: Update Your .env File (1 minute)

1. **Open** the `.env` file in your project root
2. **Replace** the placeholder values:

```env
# BEFORE (placeholder values):
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here

# AFTER (your actual values):
VITE_SUPABASE_URL=https://abcdefghijklmnop.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiY2RlZmdoaWprbG1ub3AiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMjc0ODAwMCwiZXhwIjoxOTQ4MzI0MDAwfQ.abc123xyz...
```

3. **Save** the file (Ctrl+S or Cmd+S)

---

### Step 5: Verify Connection (1 minute)

1. **Open terminal** in your project folder
2. **Run** the verification command:

```bash
npm run check-env
```

3. **You should see:**
```
✅ Supabase URL is configured
✅ Supabase Anon Key is configured
✅ All environment variables are set correctly!
```

---

### Step 6: Restart Your Dev Server

1. **Stop** the current server (press Ctrl+C in terminal)
2. **Start** it again:

```bash
npm run dev
```

3. **Open** your browser to http://localhost:5173
4. **Look** at the footer - you should see a green "Connected" badge

---

## ✅ Success Checklist

- [ ] Created Supabase account
- [ ] Created new project
- [ ] Copied Project URL
- [ ] Copied anon public key
- [ ] Updated .env file
- [ ] Saved .env file
- [ ] Ran `npm run check-env` successfully
- [ ] Restarted dev server
- [ ] See "Connected" status in app footer

---

## 🆘 Troubleshooting

### "Invalid API key" error
- Make sure you copied the **anon public** key, NOT the service_role key
- Check for extra spaces before/after the key in .env file

### "Invalid URL" error
- Make sure URL starts with `https://`
- Make sure URL ends with `.supabase.co`
- No spaces before/after the URL

### Still not working?
1. Check SUPABASE_CONNECTION_STATUS.md for detailed troubleshooting
2. Run `npm run check-env` to diagnose issues
3. Make sure you saved the .env file after editing
4. Make sure you restarted the dev server

---

## 🎉 Next Steps

Once connected, run the database migrations:
```bash
# See DATABASE_MIGRATION_GUIDE.md for instructions
```

Your app is now connected to Supabase! 🚀
