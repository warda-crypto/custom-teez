'use client';

import Link from 'next/link';
import { ThemeLanguage } from '@/components/theme-language';
import { useTranslations } from '@/lib/i18n/use-translations';

export function PublicNav() {
  const t = useTranslations();

  return (
    <nav className="nav">
      <div className="container navin">
        <Link className="brand" href="/">
          CUSTOM <span>teez</span>
        </Link>

        <div className="links">
          <Link href="/design-studio">{t.nav.designStudio}</Link>
          <Link href="/premade-designs">{t.nav.premadeDesigns}</Link>
          <Link href="/products">{t.nav.products}</Link>
          <Link href="/track-order">{t.nav.trackOrder}</Link>
        </div>

        <div className="actions">
          <ThemeLanguage />
          <Link className="glowbtn" href="/design-studio">
            {t.nav.startOrder}
          </Link>
        </div>
      </div>
    </nav>
  );
}
