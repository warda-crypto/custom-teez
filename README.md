
# Custom teez — Final System Foundation

This is a real Next.js + Supabase project foundation, not a static mockup.

## Included
- Customer website, products, premade designs, design studio, tracking, NFC landing
- Dark and Morning themes with animated glow buttons
- Customer / employee / manager / owner workspaces
- Supabase database migration and role model
- 3 branches and editable settings
- Cash App online payment flow structure
- Pickup/shipping structure, free shipping from $69.99, Pirate Ship workflow data fields
- Low image quality warning only when needed
- Exact placement rules and print limits

## Install
1. Copy all files over the current project.
2. Copy `.env.example` to `.env.local` and use your existing Supabase URL/key.
3. In Supabase SQL Editor, run `supabase/migrations/001_initial.sql` once.
4. `npm.cmd install`
5. `npm.cmd run dev`
6. Test locally, then commit and push.

## Important
- Create the Owner auth user with `anaswardaaa@gmail.com`, then set its profile role to `owner`.
- Manager and employee accounts can be added later from the database/admin UI.
- Exact prices remain editable and can be finalized later.
- Passkeys/Face ID are intentionally left as a later optional enhancement because they require a dedicated WebAuthn enrollment flow.
