# SEA Catering - Healthy Meal Delivery Service

Indonesia's premier customizable healthy meal delivery service. Fresh, nutritious meals delivered to major cities across Indonesia.

## Features

### 🍽️ CRUD Systems
1. **Subscription Management**
   - Create meal subscriptions with customizable plans
   - Read subscription details and history
   - Update subscription status (pause/resume/cancel)
   - Delete subscriptions

2. **Testimonial System**
   - Create customer reviews and ratings
   - Read approved testimonials
   - Update testimonial approval status (admin)
   - Delete testimonials (admin)

3. **Meal Plan Management** (Admin)
   - Create new meal plans
   - Read all meal plans
   - Update meal plan details
   - Delete meal plans

### 🔐 Authentication System
- User registration and login
- Password reset functionality
- Role-based access control (User/Admin)
- Protected routes and components
- Secure session management with Supabase Auth

### 🎨 UI Components
- Built with **Tailwind CSS** for responsive design
- **Lucide React** icons for consistent iconography
- Custom components with modern design principles
- Mobile-first responsive design

### 🛡️ Security Features
- Input sanitization and validation
- CSRF protection
- Rate limiting
- SQL injection prevention
- XSS protection

## Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Icons**: Lucide React
- **Deployment**: Vercel

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Supabase account

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd SEA-Catering
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Configure your Supabase credentials in `.env`:
```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

5. Run the development server:
```bash
npm run dev
```

### Database Setup

The application uses Supabase with the following tables:
- `subscriptions` - User meal subscriptions
- `testimonials` - Customer reviews and ratings
- `meal_plans` - Available meal plans

Database migrations are included in `supabase/migrations/`.

### Admin Access

Default admin credentials:
- Email: `admin@nutriflow.id`
- Password: `Admin123!@#`

**⚠️ Important**: Change these credentials after first login in production.

## Deployment

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Set environment variables in Vercel dashboard:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

### Environment Variables

Add these environment variables in your Vercel project settings:

| Variable | Description |
|----------|-------------|
| `VITE_SUPABASE_URL` | Your Supabase project URL |
| `VITE_SUPABASE_ANON_KEY` | Your Supabase anonymous key |

## Project Structure

```
SEA-Catering/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── dashboard/       # Dashboard components
│   │   ├── AuthModal.tsx    # Authentication modal
│   │   ├── Header.tsx       # Navigation header
│   │   └── ...
│   ├── contexts/            # React contexts
│   │   └── AuthContext.tsx  # Authentication context
│   ├── lib/                 # Utility libraries
│   │   ├── auth.ts          # Authentication utilities
│   │   ├── security.ts      # Security utilities
│   │   └── supabase.ts      # Supabase configuration
│   ├── pages/               # Page components
│   │   ├── Home.tsx         # Landing page
│   │   ├── Menu.tsx         # Meal plans page
│   │   ├── Subscription.tsx # Subscription form
│   │   ├── Dashboard.tsx    # User dashboard
│   │   └── AdminDashboard.tsx # Admin dashboard
│   ├── services/            # API services
│   │   ├── database.ts      # Database operations
│   │   └── admin.ts         # Admin operations
│   └── App.tsx              # Main application component
├── supabase/
│   └── migrations/          # Database migrations
├── public/                  # Static assets
└── ...
```

## Features Overview

### User Features
- Browse meal plans with detailed information
- Create customized meal subscriptions
- Manage subscription status (pause/resume/cancel)
- Write and submit testimonials
- View personal dashboard with subscription history

### Admin Features
- View comprehensive business analytics
- Manage all customer subscriptions
- Approve/reject customer testimonials
- Create and manage meal plans
- Export business data

### Security Features
- Input sanitization and validation
- CSRF token protection
- Rate limiting for authentication
- SQL injection prevention
- XSS protection with DOMPurify
- Secure password requirements

## API Endpoints

The application uses Supabase's auto-generated REST API with Row Level Security (RLS) policies:

- **Subscriptions**: CRUD operations with user-specific access
- **Testimonials**: Public read for approved, authenticated write
- **Meal Plans**: Public read, admin-only write
- **Authentication**: Supabase Auth endpoints

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, email hello@seacatering.id or contact our customer service team.

---

**SEA Catering** - Healthy Meals, Anytime, Anywhere 🍽️