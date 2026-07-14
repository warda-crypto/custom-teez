'use client';

import Link from 'next/link';
import { PublicNav } from '@/components/public-nav';
import { BRANCHES, HOURS } from '@/lib/config';
import { useTranslations } from '@/lib/i18n/use-translations';

export default function Home() {
  const t = useTranslations();

  return (
    <div className="shell">
      <PublicNav />

      <main>
        <section className="container hero">
          <div>
            <span className="eyebrow">✦ {t.home.eyebrow}</span>

            <h1>
              {t.home.title1}
              <br />
              <span className="grad">{t.home.title2}</span>
            </h1>

            <p className="lead">{t.home.lead}</p>

            <div className="row" style={{ marginTop: 28 }}>
              <Link className="glowbtn" href="/design-studio">
                {t.home.startDesigning}
              </Link>

              <Link className="secondary" href="/premade-designs">
                {t.home.browseDesigns}
              </Link>
            </div>
          </div>

          <div className="mock">
            <div className="shirt">
              <div className="shirtlogo">
                CUSTOM
                <br />
                TEEZ
              </div>
            </div>
          </div>
        </section>

        <section className="container section">
          <div className="kpis">
            <div className="kpi">
              <strong>3</strong>
              <span className="muted">{t.home.locationsCount}</span>
            </div>

            <div className="kpi">
              <strong>Today</strong>
              <span className="muted">{t.home.pickupToday}</span>
            </div>

            <div className="kpi">
              <strong>$69.99+</strong>
              <span className="muted">{t.home.freeShipping}</span>
            </div>

            <div className="kpi">
              <strong>Exact</strong>
              <span className="muted">{t.home.exactPrint}</span>
            </div>
          </div>
        </section>

        <section className="container section">
          <h2>{t.home.simpleTitle}</h2>
          <p className="muted">{t.home.simpleSubtitle}</p>

          <div className="grid3" style={{ marginTop: 22 }}>
            <div className="card">
              <b>{t.home.chooseLabel}</b>
              <h3>{t.home.chooseTitle}</h3>
              <p className="muted">{t.home.chooseText}</p>
            </div>

            <div className="card">
              <b>{t.home.designLabel}</b>
              <h3>{t.home.designTitle}</h3>
              <p className="muted">{t.home.designText}</p>
            </div>

            <div className="card">
              <b>{t.home.payLabel}</b>
              <h3>{t.home.payTitle}</h3>
              <p className="muted">{t.home.payText}</p>
            </div>
          </div>
        </section>

        <section className="container section">
          <h2>{t.home.locationsTitle}</h2>

          <div className="grid3" style={{ marginTop: 22 }}>
            {BRANCHES.map((branch) => (
              <div className="card" key={branch.id}>
                <h3>{branch.name}</h3>
                <p>{branch.address}</p>
                <p className="muted">{branch.detail}</p>
                <p>
                  {branch.phone}
                  <br />
                  {branch.email}
                </p>
              </div>
            ))}
          </div>

          <p className="muted" style={{ marginTop: 18 }}>
            {HOURS}
          </p>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          © 2026 Custom teez • {t.home.footer}
        </div>
      </footer>
    </div>
  );
}
