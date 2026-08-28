import Image from "next/image";
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
    <main className="min-h-screen bg-white text-slate-950">

      {/* =====================================================
          NAVBAR
      ===================================================== */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">

        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">

          <Link
            href={`/${locale}`}
            className="flex items-center gap-2.5"
          >
            <Image
              src="/brand/omnidock-icon-128.png"
              alt=""
              width={36}
              height={36}
              priority
              className="h-9 w-9 rounded-xl"
            />

            <span className="text-[17px] font-bold tracking-tight text-slate-950">
              OmniDock
              <span className="ml-1 text-indigo-600">
                Labs
              </span>
            </span>
          </Link>


          <div className="flex items-center gap-3">

            <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">

              <a
                href="#products"
                className="transition hover:text-slate-950"
              >
                {t("nav.products")}
              </a>

              <a
                href="#company"
                className="transition hover:text-slate-950"
              >
                {t("nav.company")}
              </a>

              <a
                href="#contact"
                className="transition hover:text-slate-950"
              >
                {t("nav.contact")}
              </a>

            </nav>


            {/* LANGUAGE SWITCHER */}
            <div className="flex rounded-lg border border-slate-200 bg-slate-50 p-1">

              {locales.map((language) => (

                <Link
                  key={language}
                  href={`/${language}`}
                  className={`rounded-md px-2.5 py-1.5 text-[11px] font-bold uppercase transition ${
                    locale === language
                      ? "bg-white text-slate-950 shadow-sm"
                      : "text-slate-400 hover:text-slate-700"
                  }`}
                >
                  {language}
                </Link>

              ))}

            </div>

          </div>

        </div>

      </header>


      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-slate-950 px-5 py-20 text-white sm:px-6 md:py-28 lg:px-8 lg:py-32">

        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:44px_44px]" />

        <div className="omni-glow pointer-events-none absolute left-1/2 top-[-220px] h-[650px] w-[900px] -translate-x-1/2 rounded-full bg-indigo-600/10 blur-[100px]" />

        <div className="pointer-events-none absolute right-[-220px] top-20 h-[450px] w-[450px] rounded-full bg-violet-600/10 blur-[120px]" />

        <div className="omni-particles" />
        <div className="omni-particles-soft" />


        <div className="relative z-10 mx-auto max-w-7xl">

          <div className="max-w-4xl">

            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-300 backdrop-blur">

              <span className="h-2 w-2 rounded-full bg-indigo-400 shadow-[0_0_10px_rgba(129,140,248,0.8)]" />

              {t("hero.badge")}

            </div>


            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-7xl">

              {t("hero.title1")}

              <span className="block text-slate-400">
                {t("hero.title2")}
              </span>

            </h1>


            <p className="mt-7 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              {t("hero.description")}
            </p>


            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <a
                href="#products"
                className="group inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-0.5 hover:bg-indigo-50 hover:shadow-xl"
              >
                <span>
                  {t("hero.primary")}
                </span>

                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>


              <a
                href="#company"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10"
              >
                {t("hero.secondary")}
              </a>

            </div>

          </div>


          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 shadow-2xl shadow-black/10 sm:grid-cols-3 lg:mt-24">

            <div className="bg-slate-950/95 p-5 backdrop-blur sm:p-6">

              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                {t("hero.strip1Label")}
              </p>

              <p className="mt-2 text-sm font-medium text-slate-200">
                {t("hero.strip1Text")}
              </p>

            </div>


            <div className="bg-slate-950/95 p-5 backdrop-blur sm:p-6">

              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                {t("hero.strip2Label")}
              </p>

              <p className="mt-2 text-sm font-medium text-slate-200">
                {t("hero.strip2Text")}
              </p>

            </div>


            <div className="bg-slate-950/95 p-5 backdrop-blur sm:p-6">

              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                {t("hero.strip3Label")}
              </p>

              <p className="mt-2 text-sm font-medium text-slate-200">
                {t("hero.strip3Text")}
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PRODUCTS
      ===================================================== */}
      <section
        id="products"
        className="px-5 py-20 sm:px-6 md:py-28 lg:px-8"
      >

        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
              {t("products.eyebrow")}
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl md:text-5xl">
              {t("products.title")}
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
              {t("products.description")}
            </p>

          </div>


          {/* SNIPDOCK PRODUCT */}
          <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm md:mt-16">

            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">

              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">

                <div className="flex flex-wrap items-center gap-3">

                  <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 ring-1 ring-inset ring-emerald-200">
                    {t("products.available")}
                  </span>

                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                    Chrome Extension
                  </span>

                </div>


                <div className="mt-7 flex items-center gap-3">

                  <Image
                    src="/brand/snipdock-icon-128.png"
                    alt=""
                    width={44}
                    height={44}
                    className="h-11 w-11 rounded-xl"
                  />

                  <h3 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                    SnipDock
                  </h3>

                </div>


                <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                  {t("products.snipdockDescription")}
                </p>


                <div className="mt-8">

                  <Link
                    href={`/${locale}/snipdock`}
                    className="group inline-flex items-center rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-slate-200 transition duration-300 hover:-translate-y-0.5 hover:bg-indigo-600 hover:shadow-xl"
                  >

                    {t("products.discover")}

                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>

                  </Link>

                </div>

              </div>


              {/* PRODUCT MOCKUP */}
              <div className="relative min-h-[390px] overflow-hidden border-t border-slate-200 bg-slate-950 p-5 sm:p-8 lg:border-l lg:border-t-0">

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#4f46e530,transparent_45%)]" />

                <div className="omni-particles-soft" />


                <div className="relative z-10 mx-auto max-w-xl">

                  <div className="mb-4 flex items-center gap-2 px-1">
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
                  </div>


                  <div className="rounded-2xl border border-white/10 bg-white p-4 shadow-2xl sm:p-5">

                    <div className="flex items-start justify-between">

                      <div className="flex items-center gap-3">

                        <Image
                          src="/brand/snipdock-icon-128.png"
                          alt=""
                          width={34}
                          height={34}
                          className="h-[34px] w-[34px] rounded-lg"
                        />

                        <div>

                          <p className="text-lg font-bold text-indigo-600">
                            SnipDock
                          </p>

                          <p className="mt-1 text-xs text-slate-500">
                            Research workspace
                          </p>

                        </div>

                      </div>


                      <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-600">
                        8 / 20
                      </span>

                    </div>


                    <div className="mt-5 space-y-3">

                      <div className="rounded-xl border-l-4 border-indigo-500 bg-slate-50 p-3.5">

                        <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
                          TEXT
                        </p>

                        <p className="mt-2 text-xs leading-5 text-slate-600">
                          Research content collected from multiple tabs...
                        </p>

                        <p className="mt-2 truncate text-[10px] text-slate-400">
                          Source attached automatically
                        </p>

                      </div>


                      <div className="rounded-xl border-l-4 border-orange-400 bg-slate-50 p-3.5">

                        <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
                          IMAGE
                        </p>

                        <div className="mt-3 h-14 w-24 rounded-md bg-slate-200" />

                      </div>


                      <div className="rounded-xl border-l-4 border-emerald-500 bg-slate-50 p-3.5">

                        <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
                          LINK
                        </p>

                        <p className="mt-2 truncate text-xs text-slate-600">
                          Reference saved with your research
                        </p>

                      </div>

                    </div>


                    <div className="mt-4 rounded-xl bg-indigo-600 px-4 py-3 text-center text-xs font-semibold text-white">
                      Copy everything clean
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* FUTURE PRODUCTS */}
          <div className="mt-6 grid gap-6 md:grid-cols-2">

            <div className="rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg">

              <div className="flex items-center justify-between gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-xs font-bold text-slate-600">
                  02
                </div>

                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {t("products.comingSoon")}
                </span>

              </div>

              <h3 className="mt-8 text-xl font-semibold">
                {t("products.project2")}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {t("products.project2Description")}
              </p>

            </div>


            <div className="rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg">

              <div className="flex items-center justify-between gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-xs font-bold text-slate-600">
                  03
                </div>

                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {t("products.comingSoon")}
                </span>

              </div>

              <h3 className="mt-8 text-xl font-semibold">
                {t("products.project3")}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {t("products.project3Description")}
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PRINCIPLES
      ===================================================== */}
      <section className="border-y border-slate-200 bg-slate-50 px-5 py-20 sm:px-6 md:py-24 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
                {t("principles.eyebrow")}
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                {t("principles.title")}
              </h2>

            </div>


            <div className="grid gap-4 sm:grid-cols-3">

              <div className="rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg">

                <p className="text-xs font-bold text-indigo-600">
                  01
                </p>

                <h3 className="mt-5 font-semibold">
                  {t("principles.focusTitle")}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {t("principles.focusText")}
                </p>

              </div>


              <div className="rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg">

                <p className="text-xs font-bold text-indigo-600">
                  02
                </p>

                <h3 className="mt-5 font-semibold">
                  {t("principles.simpleTitle")}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {t("principles.simpleText")}
                </p>

              </div>


              <div className="rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg">

                <p className="text-xs font-bold text-indigo-600">
                  03
                </p>

                <h3 className="mt-5 font-semibold">
                  {t("principles.usefulTitle")}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {t("principles.usefulText")}
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          COMPANY
      ===================================================== */}
      <section
        id="company"
        className="px-5 py-20 sm:px-6 md:py-28 lg:px-8"
      >

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
                {t("company.eyebrow")}
              </p>

              <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-0.03em] sm:text-4xl md:text-5xl">
                {t("company.title")}
              </h2>

            </div>


            <div>

              <p className="text-base leading-8 text-slate-600 sm:text-lg">
                {t("company.description")}
              </p>

              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                {t("company.description2")}
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT
      ===================================================== */}
      <section
        id="contact"
        className="px-5 pb-20 sm:px-6 md:pb-28 lg:px-8"
      >

        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-slate-950 px-6 py-12 text-white sm:px-10 md:py-16">

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:38px_38px]" />

          <div className="omni-particles-soft" />

          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/15 blur-[90px]" />


          <div className="relative z-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-center">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-400">
                {t("contact.eyebrow")}
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
                {t("contact.title")}
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-slate-400">
                {t("contact.description")}
              </p>

            </div>


            <a
              href="mailto:hello@omnidocklabs.com"
              className="group inline-flex w-full items-center justify-center rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-0.5 hover:bg-indigo-50 hover:shadow-xl md:w-auto"
            >

              {t("contact.button")}

              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>

            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}
      <footer className="border-t border-slate-200 px-5 py-10 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">

            <Link
              href={`/${locale}`}
              className="flex items-center gap-2.5"
            >

              <Image
                src="/brand/omnidock-icon-128.png"
                alt=""
                width={32}
                height={32}
                className="h-8 w-8 rounded-lg"
              />

              <span className="font-bold text-slate-950">
                OmniDock
                <span className="ml-1 text-indigo-600">
                  Labs
                </span>
              </span>

            </Link>


            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">

              <Link
                href={`/${locale}/snipdock`}
                className="transition hover:text-slate-950"
              >
                SnipDock
              </Link>

              <Link
                href={`/${locale}/privacy`}
                className="transition hover:text-slate-950"
              >
                {t("footer.privacy")}
              </Link>

              <Link
                href={`/${locale}/terms`}
                className="transition hover:text-slate-950"
              >
                {t("footer.terms")}
              </Link>

            </div>

          </div>


          <div className="mt-8 border-t border-slate-200 pt-6 text-xs text-slate-400">
            {t("footer.copyright")}
          </div>

        </div>

      </footer>

    </main>
  );
}