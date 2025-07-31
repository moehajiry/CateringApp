# Deployment Guide - SEA Catering

## Persyaratan COMPFEST 17

### ✅ Checklist Persyaratan

1. **✅ Minimal 2 Sistem CRUD**
   - Subscription Management (Create, Read, Update, Delete)
   - Testimonial System (Create, Read, Update, Delete)
   - Meal Plan Management (Create, Read, Update, Delete)

2. **✅ Database PostgreSQL**
   - Menggunakan Supabase (berbasis PostgreSQL)
   - Terhubung dengan baik melalui environment variables

3. **✅ Sistem Autentikasi**
   - Login dan registrasi user
   - Password reset
   - Role-based access (User/Admin)
   - Menggunakan Supabase Auth

4. **✅ UI Component Library**
   - Tailwind CSS untuk styling
   - Lucide React untuk icons
   - Custom components yang responsive

5. **✅ Tidak Menggunakan Template Admin**
   - Dashboard dibuat custom
   - Semua komponen dibuat dari scratch

6. **🚀 Deploy ke Vercel**
   - Konfigurasi deployment sudah disiapkan

## Langkah Deployment ke Vercel

### 1. Persiapan

Pastikan semua file konfigurasi sudah ada:
- `vercel.json` - Konfigurasi deployment
- `.env.example` - Template environment variables
- `package.json` - Script build untuk Vercel

### 2. Setup Supabase

1. Buat project di [Supabase](https://supabase.com)
2. Jalankan migrations yang ada di `supabase/migrations/`
3. Catat URL dan Anon Key dari project settings

### 3. Deploy ke Vercel

#### Opsi A: Melalui Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login ke Vercel
vercel login

# Deploy
vercel

# Set environment variables
vercel env add VITE_SUPABASE_URL
vercel env add VITE_SUPABASE_ANON_KEY

# Deploy production
vercel --prod
```

#### Opsi B: Melalui Vercel Dashboard

1. Buka [vercel.com](https://vercel.com)
2. Import repository dari GitHub
3. Set environment variables:
   - `VITE_SUPABASE_URL`: URL Supabase project
   - `VITE_SUPABASE_ANON_KEY`: Anon key dari Supabase
4. Deploy

### 4. Environment Variables

Tambahkan di Vercel dashboard:

| Variable | Value | Description |
|----------|-------|-------------|
| `VITE_SUPABASE_URL` | `https://xxx.supabase.co` | URL project Supabase |
| `VITE_SUPABASE_ANON_KEY` | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` | Anonymous key Supabase |

### 5. Verifikasi Deployment

Setelah deployment berhasil:

1. **Test Authentication**
   - Registrasi user baru
   - Login dengan user yang sudah ada
   - Test admin login: `admin@nutriflow.id` / `Admin123!@#`

2. **Test CRUD Operations**
   - Buat subscription baru
   - Edit status subscription
   - Tambah testimonial
   - Test admin dashboard

3. **Test Database Connection**
   - Pastikan data tersimpan di Supabase
   - Check RLS policies berfungsi
   - Verify admin access

## Struktur Database

### Tables

1. **subscriptions**
   - User meal subscriptions
   - Status management (active/paused/cancelled)
   - CRUD operations dengan RLS

2. **testimonials**
   - Customer reviews
   - Admin approval system
   - Public read untuk approved testimonials

3. **meal_plans**
   - Available meal plans
   - Admin-only management
   - Public read access

### Security

- Row Level Security (RLS) enabled
- User-specific data access
- Admin role-based permissions
- Input sanitization dan validation

## Troubleshooting

### Common Issues

1. **Environment Variables tidak terbaca**
   - Pastikan prefix `VITE_` untuk Vite
   - Check Vercel dashboard environment variables
   - Redeploy setelah menambah env vars

2. **Database Connection Error**
   - Verify Supabase URL dan key
   - Check network connectivity
   - Ensure RLS policies configured

3. **Build Errors**
   - Check TypeScript errors
   - Verify all imports
   - Run `npm run build` locally first

### Support

Jika ada masalah deployment:
1. Check Vercel deployment logs
2. Verify environment variables
3. Test locally dengan production build
4. Check Supabase dashboard untuk errors

## Production Checklist

- [ ] Environment variables configured
- [ ] Database migrations applied
- [ ] Admin account created
- [ ] RLS policies active
- [ ] SSL/HTTPS enabled (automatic di Vercel)
- [ ] Custom domain configured (optional)
- [ ] Performance monitoring setup
- [ ] Error tracking configured

---

**Ready for COMPFEST 17 Submission! 🚀**