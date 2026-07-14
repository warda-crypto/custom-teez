CUSTOM TEEZ — SPRINT 0 FOUNDATION

This patch adds:
- Central language provider (EN / ES / AR)
- RTL for Arabic
- Central theme provider (Dark / Morning)
- LocalStorage persistence
- Central translations architecture
- Translated public navigation
- Translated homepage
- AppProviders wrapper

INSTALL:
1. Copy every folder/file from this patch into the root of your current project.
2. Choose Replace when Windows asks.
3. Run:
   npm.cmd run dev
4. Open:
   http://localhost:3000

IMPORTANT:
The language system will only translate pages that use useTranslations().
Future pages should import:
import { useTranslations } from '@/lib/i18n/use-translations';

Then:
const t = useTranslations();
