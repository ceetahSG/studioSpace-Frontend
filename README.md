# StudioSpace

StudioSpace is a peer-to-peer marketplace for discovering, listing, and
reserving creative workspaces. Creators can browse photography studios, film
stages, podcast rooms, music suites, and workshops, while hosts can manage
their own studio listings and booking requests.

**Live site:** https://studio-space-chetah.vercel.app
**Backend API:** https://studio-space-backend-server.vercel.app

## Features

- Browse featured and available creative studios with category-based discovery.
- View studio details, pricing, amenities, capacity, location, host
  information, and booking availability.
- Register and sign in with email/password or Google OAuth through Better Auth.
- Hosts can add, edit, and delete their studio listings.
- Creators can request bookings, view booking status, and cancel pending
  reservations.
- Responsive StudioSpace interface with branded loading states, custom
  notifications, empty states, a custom 404 page, and light/dark themes.

## Tech stack

- Next.js App Router
- React and TypeScript
- Better Auth with MongoDB
- Tailwind CSS
- Base UI/shadcn-style UI primitives
- Lucide React icons
- Express and MongoDB backend API
- Vercel deployment

## Project structure

```text
src/
├── app/                 # App Router pages and the Better Auth route
├── components/          # Navigation, booking, listing, and UI components
├── lib/                 # Better Auth and API helpers
└── proxy.ts             # Private-route session protection
```

## Local setup

### Prerequisites

- Node.js 20 or newer
- npm 10 or newer
- A MongoDB database
- Google OAuth credentials if Google sign-in is enabled locally
- A running copy of the StudioSpace backend

### Install and run

```bash
git clone https://github.com/ceetahSG/studioSpace-Frontend.git
cd studioSpace-Frontend
npm install
npm run dev
```

Open http://localhost:3000 in a browser.

### Environment variables

Create `.env.local` with values for your environment:

```env
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>/<database>
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:5000
GOOGLE_CLIENT_ID=<google-oauth-client-id>
GOOGLE_CLIENT_SECRET=<google-oauth-client-secret>
```

For Google OAuth, add this redirect URI to the Google Cloud OAuth client:

```text
http://localhost:3000/api/auth/callback/google
```

For production, set `BETTER_AUTH_URL` and `NEXT_PUBLIC_AUTH_URL` to the
deployed frontend URL and update the Google OAuth redirect URI accordingly.
Set `NEXT_PUBLIC_API_URL` to the deployed backend URL.

## Available scripts

```bash
npm run dev       # Start the development server
npm run build     # Create a production build
npm run start     # Serve the production build
npm run lint      # Run ESLint
```

## Main routes

| Route | Purpose |
| --- | --- |
| `/` | Home page and featured studios |
| `/explore-studios` | Studio directory |
| `/explore-studios/[id]` | Studio details and booking |
| `/filteredstudios/[category]` | Category-filtered studios |
| `/login` | Email/password and Google sign-in |
| `/register` | Account registration |
| `/add-studio` | Add a studio listing |
| `/my-listing` | Manage owned studio listings |
| `/edit-studio/[id]` | Edit a studio listing |
| `/my-bookings` | View and cancel bookings |
| `/how-it-works` | Booking workflow |
| `/about` | About StudioSpace |

## Examiner access

No private credentials are committed to this public repository. An examiner
can create an account from `/register` using the deployed site, or use Google
sign-in if OAuth is configured for the deployment. Never commit real
passwords, OAuth secrets, MongoDB credentials, or API tokens to the repository.

## Deployment

The frontend is configured for deployment on Vercel. Add the environment
variables above in the Vercel project settings, deploy the `main` branch, and
verify that the backend URL and Google OAuth callback URL point to the
production services.

## Related repository

- Backend API: https://github.com/ceetahSG/studio-space-backend
