CUSTOM TEEZ — IMAGE ENHANCEMENT PATCH

1) Copy the app and supabase folders into the project root and choose Replace when asked.
2) Test locally:
   npm.cmd run dev
3) After the UI works, run supabase/migrations/002_image_enhancement.sql in Supabase SQL Editor.

Behavior:
- Original customer image: no watermark.
- Low-quality image: warning appears only when needed.
- Customer may select Request image enhancement.
- Enhanced customer preview: watermark.
- Enhanced production file: no watermark and restricted to staff/manager/owner.
