# Next.js API Routes Documentation

## Overview
Server-side API routes for secure database operations using Supabase.

## Endpoints

### Contact Form
**POST /api/contact**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "subject": "Program Inquiry",
  "message": "I would like to know more..."
}
```

### Newsletter
**POST /api/newsletter** - Subscribe
```json
{
  "email": "user@example.com",
  "source": "homepage"
}
```

**DELETE /api/newsletter?email=user@example.com** - Unsubscribe

### Applications
**POST /api/applications** - Submit application
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "programId": "aerospace-engineering",
  "programName": "Aerospace Engineering",
  "startDate": "2025-09",
  "message": "Optional message"
}
```

**GET /api/applications?id=uuid&email=user@example.com** - Check status

### Programs
**GET /api/programs** - All programs
**GET /api/programs?category=Engineering** - Filter by category
**GET /api/programs?search=aerospace** - Search

### Universities
**GET /api/universities** - All universities
**GET /api/universities?country=UK** - Filter by country

### Testimonials
**GET /api/testimonials** - All approved
**GET /api/testimonials?featured=true** - Featured only
**POST /api/testimonials** - Submit (pending approval)

### Campuses
**GET /api/campuses** - All campuses
**GET /api/campuses?type=main** - Main campuses only

### Faculty
**GET /api/faculty** - All faculty
**GET /api/faculty?accepting_mentees=true** - Available mentors

### Health Check
**GET /api/health** - System status

## Usage in Components
```typescript
// Using fetch
const res = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
const data = await res.json();
```
