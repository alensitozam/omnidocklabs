import Link from "next/link";
import {getTranslations} from "next-intl/server";

const locales = ["en", "es", "pt"] as const;

export default async function Home({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const t = await getTranslations("Home");

  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* NAVBAR */}
      <nav className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">

          <Link
            href={`/${locale}`}
            className="text-xl font-bold tracking-tight"
          >
            OmniDock<span className="text-indigo-600"> Labs</span>
          </Link>

          <div className="flex items-center gap-5">

            <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
              <a href="#products" className="transition hover:text-indigo-600">
                {t("nav.products")}
              </a>

              <a href="#about" className="transition hover:text-indigo-600">
                {t("nav.about")}
              </a>

              <a href="#contact" className="transition hover:text-indigo-600">
                {t("nav.contact")}
              </a>
            </div>

            {/* SELECTOR DE IDIOMA */}
            <div className="flex rounded-lg border border-slate-200 bg-slate-50 p-1">
              {locales.map((language) => (
                <Link
                  key={language}
                  href={`/${language}`}
                  className={`rounded-md px-2.5 py-1.5 text-xs font-bold uppercase transition ${
                    locale === language
                      ? "bg-white text-indigo-600 shadow-sm"
                      : "text-slate-500 hover:text-indigo-600"
                  }`}
                >
                  {language}
                </Link>
              ))}
            </div>

          </div>
        </div>
      </nav>


      {/* HERO */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-5xl text-center">

          <div className="mb-6 inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">
            {t("hero.badge")}
          </div>

          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
            {t("hero.title1")}
            <br />
            <span className="text-indigo-600">
              {t("hero.title2")}
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-600">
            {t("hero.description")}
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            <a
              href="#products"
              className="rounded-xl bg-indigo-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700"
            >
              {t("hero.primary")}
            </a>

            <a
              href="#about"
              className="rounded-xl border border-slate-300 px-7 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
            >
              {t("hero.secondary")}
            </a>

          </div>
        </div>
      </section>


      {/* PRODUCTS */}
      <section id="products" className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-6xl">

          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
              {t("products.eyebrow")}
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              {t("products.title")}
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              {t("products.description")}
            </p>
          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {/* SNIPDOCK */}
            <div className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-2xl">
                ✂️
              </div>

              <span className="mt-6 block text-xs font-semibold uppercase tracking-wider text-indigo-600">
                {t("products.available")}
              </span>

              <h3 className="mt-2 text-2xl font-bold">
                SnipDock
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {t("products.snipdockDescription")}
              </p>

              <Link
                href={`/${locale}/snipdock`}
                className="mt-6 inline-flex font-semibold text-indigo-600 transition hover:text-indigo-700"
              >
                {t("products.discover")} →
              </Link>
            </div>


            {/* PRODUCT 2 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-2xl">
                ⚡
              </div>

              <span className="mt-6 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                {t("products.comingSoon")}
              </span>

              <h3 className="mt-2 text-2xl font-bold">
                {t("products.project2")}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {t("products.project2Description")}
              </p>
            </div>


            {/* PRODUCT 3 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-2xl">
                ✨
              </div>

              <span className="mt-6 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                {t("products.comingSoon")}
              </span>

              <h3 className="mt-2 text-2xl font-bold">
                {t("products.project3")}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {t("products.project3Description")}
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* ABOUT */}
      <section id="about" className="px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
            {t("about.eyebrow")}
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            {t("about.title")}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            {t("about.description")}
          </p>

        </div>
      </section>


      {/* CONTACT */}
      <section id="contact" className="px-6 pb-24">
        <div className="mx-auto max-w-6xl rounded-3xl bg-indigo-600 px-6 py-16 text-center text-white md:px-12">

          <h2 className="text-3xl font-bold md:text-4xl">
            {t("contact.title")}
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-indigo-100">
            {t("contact.description")}
          </p>

          <a
            href="mailto:hello@omnidocklabs.com"
            className="mt-8 inline-block rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-50"
          >
            {t("contact.button")}
          </a>

        </div>
      </section>


      {/* FOOTER */}
      <footer className="border-t border-slate-200 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">

          <p>{t("footer.copyright")}</p>

          <div className="flex gap-6">
            <Link
              href={`/${locale}/privacy`}
              className="transition hover:text-indigo-600"
            >
              {t("footer.privacy")}
            </Link>

            <Link
              href={`/${locale}/terms`}
              className="transition hover:text-indigo-600"
            >
              {t("footer.terms")}
            </Link>
          </div>

        </div>
      </footer>

    </main>
  );
}