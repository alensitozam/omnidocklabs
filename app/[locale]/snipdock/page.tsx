import Link from "next/link";
import {getTranslations} from "next-intl/server";

export default async function SnipDockPage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const t = await getTranslations("SnipDock");

  const comparisonRows = [
    [t("compare.collect"), "✓", "✓"],
    [t("compare.session"), t("compare.sessionFree"), t("compare.sessionPro")],
    [t("compare.history"), t("compare.historyFree"), t("compare.historyPro")],
    [t("compare.clean"), "✓", "✓"],
    [t("compare.copy"), "✓", "✓"],
    [t("compare.proExperience"), "—", "✓"]
  ];

  const benefits = [
    t("pricing.benefit1"),
    t("pricing.benefit2"),
    t("pricing.benefit3")
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

          <Link href={`/${locale}`} className="text-xl font-bold tracking-tight">
            OmniDock<span className="text-indigo-600"> Labs</span>
          </Link>

          <div className="flex items-center gap-5 text-sm font-medium">

            <a href="#features" className="hidden text-slate-600 hover:text-indigo-600 sm:block">
              {t("nav.features")}
            </a>

            <a href="#pricing" className="hidden text-slate-600 hover:text-indigo-600 sm:block">
              {t("nav.pricing")}
            </a>

            <a
              href="#pricing"
              className="rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white transition hover:bg-indigo-700"
            >
              {t("nav.getPro")}
            </a>

          </div>
        </div>
      </nav>


      {/* HERO */}
      <section className="overflow-hidden px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">

          <div>
            <div className="mb-6 inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700">
              ✂️ {t("hero.badge")}
            </div>

            <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-6xl">
              {t("hero.title1")}
              <br />
              <span className="text-indigo-600">{t("hero.title2")}</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              {t("hero.description")}
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#pricing"
                className="rounded-xl bg-indigo-600 px-7 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700"
              >
                {t("hero.primary")}
              </a>

              <a
                href="#features"
                className="rounded-xl border border-slate-300 px-7 py-3.5 text-center text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                {t("hero.secondary")}
              </a>
            </div>

            <p className="mt-5 text-sm text-slate-500">
              {t("hero.note")}
            </p>
          </div>


          {/* VISUAL MOCKUP */}
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-xl">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">

              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <p className="font-bold text-indigo-600">SnipDock</p>
                  <p className="mt-1 text-xs text-slate-400">Research workspace</p>
                </div>

                <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">
                  8 / 20
                </span>
              </div>

              <div className="mt-5 space-y-3">

                <div className="rounded-xl border-l-4 border-indigo-500 bg-slate-50 p-4">
                  <p className="text-xs font-bold text-slate-500">📝 TEXT</p>
                  <p className="mt-2 text-sm text-slate-600">
                    Research content collected from the web...
                  </p>
                </div>

                <div className="rounded-xl border-l-4 border-emerald-500 bg-slate-50 p-4">
                  <p className="text-xs font-bold text-slate-500">🔗 LINK</p>
                  <p className="mt-2 text-sm text-slate-600">
                    Reference source saved with the research.
                  </p>
                </div>

                <div className="rounded-xl border-l-4 border-orange-500 bg-slate-50 p-4">
                  <p className="text-xs font-bold text-slate-500">🖼️ IMAGE</p>
                  <div className="mt-3 h-16 rounded-lg bg-slate-100" />
                </div>

              </div>

              <div className="mt-5 w-full rounded-xl bg-indigo-600 px-4 py-3 text-center text-sm font-semibold text-white">
                📋 Copy everything clean
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* STEPS */}
      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-6xl">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
              {t("steps.eyebrow")}
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              {t("steps.title")}
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              {t("steps.description")}
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl border border-slate-200 bg-white p-8">
              <div className="text-3xl">✂️</div>
              <h3 className="mt-5 text-xl font-bold">{t("steps.collectTitle")}</h3>
              <p className="mt-4 leading-7 text-slate-600">{t("steps.collectText")}</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-8">
              <div className="text-3xl">🧹</div>
              <h3 className="mt-5 text-xl font-bold">{t("steps.cleanTitle")}</h3>
              <p className="mt-4 leading-7 text-slate-600">{t("steps.cleanText")}</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-8">
              <div className="text-3xl">📋</div>
              <h3 className="mt-5 text-xl font-bold">{t("steps.exportTitle")}</h3>
              <p className="mt-4 leading-7 text-slate-600">{t("steps.exportText")}</p>
            </div>

          </div>
        </div>
      </section>


      {/* FEATURES */}
      <section id="features" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">

          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
              {t("features.eyebrow")}
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              {t("features.title")}
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              {t("features.description")}
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {[
              ["📝", "textTitle", "textText"],
              ["🖼️", "imagesTitle", "imagesText"],
              ["🔗", "linksTitle", "linksText"],
              ["🗂️", "multitabTitle", "multitabText"],
              ["🧹", "cleanTitle", "cleanText"],
              ["📋", "copyTitle", "copyText"]
            ].map(([icon, title, text]) => (
              <div key={title} className="rounded-2xl border border-slate-200 p-7">
                <div className="text-2xl">{icon}</div>
                <h3 className="mt-5 text-lg font-bold">
                  {t(`features.${title}`)}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {t(`features.${text}`)}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* FREE VS PRO */}
      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-5xl">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
              {t("compare.eyebrow")}
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              {t("compare.title")}
            </h2>

            <p className="mt-5 text-slate-600">
              {t("compare.description")}
            </p>
          </div>

          <div className="mt-14 overflow-hidden rounded-2xl border border-slate-200 bg-white">

            <div className="grid grid-cols-3 border-b border-slate-200 bg-slate-50 p-5 text-sm font-bold">
              <div>{t("compare.feature")}</div>
              <div className="text-center">{t("compare.free")}</div>
              <div className="text-center text-indigo-600">{t("compare.pro")}</div>
            </div>

            {comparisonRows.map(([feature, free, pro]) => (
              <div
                key={feature}
                className="grid grid-cols-3 border-b border-slate-100 p-5 text-sm last:border-0"
              >
                <div className="font-medium text-slate-700">{feature}</div>
                <div className="text-center text-slate-600">{free}</div>
                <div className="text-center font-semibold text-indigo-600">{pro}</div>
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* PRICING */}
      <section id="pricing" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
              {t("pricing.eyebrow")}
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              {t("pricing.title")}
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              {t("pricing.description")}
            </p>
          </div>


          <div className="mt-14 grid gap-6 lg:grid-cols-3">

            {/* MONTH */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold text-slate-500">
                {t("pricing.monthlyNote")}
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                {t("pricing.monthly")}
              </h3>

              <div className="mt-6">
                <span className="text-4xl font-bold">{t("pricing.monthlyPrice")}</span>
                {t("pricing.monthlyPeriod") && (
                  <span className="text-slate-500"> {t("pricing.monthlyPeriod")}</span>
                )}
              </div>

              <ul className="mt-7 space-y-3 text-sm text-slate-600">
                {benefits.map((benefit) => (
                  <li key={benefit}>✓ {benefit}</li>
                ))}
              </ul>

              <button
                type="button"
                className="mt-8 w-full rounded-xl border border-indigo-600 px-5 py-3.5 text-sm font-semibold text-indigo-600 hover:bg-indigo-50"
              >
                {t("pricing.monthlyButton")}
              </button>
            </div>


            {/* 3 MONTHS */}
            <div className="relative rounded-2xl border-2 border-indigo-600 bg-white p-8 shadow-xl shadow-indigo-100">

              <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-indigo-600 px-4 py-1.5 text-xs font-bold text-white">
                {t("pricing.popular")}
              </div>

              <p className="text-sm font-semibold text-indigo-600">
                {t("pricing.quarterlyNote")}
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                {t("pricing.quarterly")}
              </h3>

              <div className="mt-6">
                <span className="text-4xl font-bold">{t("pricing.quarterlyPrice")}</span>
                {t("pricing.quarterlyPeriod") && (
                  <span className="text-slate-500"> {t("pricing.quarterlyPeriod")}</span>
                )}
              </div>

              <ul className="mt-7 space-y-3 text-sm text-slate-600">
                {benefits.map((benefit) => (
                  <li key={benefit}>✓ {benefit}</li>
                ))}
              </ul>

              <button
                type="button"
                className="mt-8 w-full rounded-xl bg-indigo-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-200 hover:bg-indigo-700"
              >
                {t("pricing.quarterlyButton")}
              </button>
            </div>


            {/* YEAR */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

              <p className="text-sm font-semibold text-slate-500">
                {t("pricing.annualNote")}
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                {t("pricing.annual")}
              </h3>

              <div className="mt-6">
                <span className="text-4xl font-bold">{t("pricing.annualPrice")}</span>
                {t("pricing.annualPeriod") && (
                  <span className="text-slate-500"> {t("pricing.annualPeriod")}</span>
                )}
              </div>

              <ul className="mt-7 space-y-3 text-sm text-slate-600">
                {benefits.map((benefit) => (
                  <li key={benefit}>✓ {benefit}</li>
                ))}
              </ul>

              <button
                type="button"
                className="mt-8 w-full rounded-xl border border-indigo-600 px-5 py-3.5 text-sm font-semibold text-indigo-600 hover:bg-indigo-50"
              >
                {t("pricing.annualButton")}
              </button>
            </div>

          </div>

          <p className="mt-8 text-center text-xs text-slate-500">
            {t("pricing.checkoutNote")}
          </p>

        </div>
      </section>


      {/* FINAL CTA */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl rounded-3xl bg-indigo-600 px-6 py-16 text-center text-white md:px-12">

          <h2 className="text-3xl font-bold md:text-4xl">
            {t("final.title")}
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-indigo-100">
            {t("final.description")}
          </p>

          <a
            href="#pricing"
            className="mt-8 inline-block rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-indigo-600 hover:bg-indigo-50"
          >
            {t("final.button")}
          </a>

        </div>
      </section>


      {/* FOOTER */}
      <footer className="border-t border-slate-200 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">

          <p>© 2026 OmniDock Labs</p>

          <Link
            href={`/${locale}`}
            className="transition hover:text-indigo-600"
          >
            ← {t("nav.home")}
          </Link>

        </div>
      </footer>

    </main>
  );
}