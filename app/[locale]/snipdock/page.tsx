import Image from "next/image";
import Link from "next/link";
import {getTranslations} from "next-intl/server";

/* =========================================================
   ICONS
   ========================================================= */

function CollectIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v10a1.5 1.5 0 0 1-1.5 1.5H14l-4 3v-3H5.5A1.5 1.5 0 0 1 4 15.5z" />
      <path d="M8 8h8" />
      <path d="M8 11h6" />
    </svg>
  );
}

function CleanIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="m14.5 4.5 5 5" />
      <path d="m12.5 6.5 5 5" />
      <path d="M4 20c3.5 0 5.5-1 7-3l5.5-7.5-4-4L5 11c-2 1.5-3 3.5-3 7z" />
      <path d="M5 16c2 1 4 1 6 0" />
    </svg>
  );
}

function UseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <rect x="6" y="4" width="12" height="16" rx="2" />
      <path d="M9 4.5V3h6v1.5" />
      <path d="m9 13 2 2 4-5" />
    </svg>
  );
}

function TextIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M5 5h14" />
      <path d="M12 5v14" />
      <path d="M9 19h6" />
    </svg>
  );
}

function ImageIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="8.5" cy="9" r="1.5" />
      <path d="m4 17 5-5 4 4 2-2 5 5" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1.2 1.2" />
      <path d="M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1.2-1.2" />
    </svg>
  );
}

function TabsIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M4 7h16v12H4z" />
      <path d="M7 7V4h10v3" />
      <path d="M8 11h8" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <rect x="8" y="8" width="11" height="11" rx="2" />
      <path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" />
    </svg>
  );
}

function FinalIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-7 w-7"
      aria-hidden="true"
    >
      <path d="M4 18V9" />
      <path d="M10 18V6" />
      <path d="M16 18v-4" />
      <path d="M3 18h18" />
      <path d="m5 8 5-4 5 6 5-5" />
      <path d="M17 5h3v3" />
    </svg>
  );
}


/* =========================================================
   PAGE
   ========================================================= */

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

  const features = [
    {
      icon: <TextIcon />,
      title: "textTitle",
      text: "textText",
      box: "bg-indigo-50 text-indigo-600"
    },
    {
      icon: <ImageIcon />,
      title: "imagesTitle",
      text: "imagesText",
      box: "bg-orange-50 text-orange-500"
    },
    {
      icon: <LinkIcon />,
      title: "linksTitle",
      text: "linksText",
      box: "bg-emerald-50 text-emerald-600"
    },
    {
      icon: <TabsIcon />,
      title: "multitabTitle",
      text: "multitabText",
      box: "bg-violet-50 text-violet-600"
    },
    {
      icon: <CleanIcon />,
      title: "cleanTitle",
      text: "cleanText",
      box: "bg-sky-50 text-sky-600"
    },
    {
      icon: <CopyIcon />,
      title: "copyTitle",
      text: "copyText",
      box: "bg-rose-50 text-rose-500"
    }
  ];

  const beforeItems = [
    t("beforeAfter.before1"),
    t("beforeAfter.before2"),
    t("beforeAfter.before3"),
    t("beforeAfter.before4"),
    t("beforeAfter.before5"),
    t("beforeAfter.before6")
  ];

  const afterItems = [
    t("beforeAfter.after1"),
    t("beforeAfter.after2"),
    t("beforeAfter.after3"),
    t("beforeAfter.after4"),
    t("beforeAfter.after5")
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-950">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">

        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">

          <div className="flex items-center gap-3">

            <Link
              href={`/${locale}`}
              className="hidden text-sm font-semibold text-slate-500 transition hover:text-slate-950 sm:block"
            >
              OmniDock Labs
            </Link>

            <span className="hidden text-slate-300 sm:block">
              /
            </span>


            <Link
              href={`/${locale}/snipdock`}
              className="flex items-center gap-2.5"
            >

              <Image
                src="/brand/snipdock-icon-128.png"
                alt=""
                width={36}
                height={36}
                priority
                className="h-9 w-9 rounded-xl shadow-lg shadow-indigo-200"
              />

              <span className="text-lg font-bold tracking-tight text-indigo-600">
                SnipDock
              </span>

            </Link>

          </div>


          <nav className="flex items-center gap-3">

            <a
              href="#features"
              className="hidden text-sm font-medium text-slate-600 transition hover:text-indigo-600 md:block"
            >
              {t("nav.features")}
            </a>

            <a
              href="#pricing"
              className="hidden text-sm font-medium text-slate-600 transition hover:text-indigo-600 md:block"
            >
              {t("nav.pricing")}
            </a>

            <a
              href="#pricing"
              className="rounded-xl bg-indigo-600 px-4 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-indigo-700 sm:text-sm"
            >
              {t("nav.getPro")}
            </a>

          </nav>

        </div>

      </header>


      {/* HERO */}
      <section className="relative overflow-hidden px-5 pb-20 pt-16 sm:px-6 md:pb-28 md:pt-24 lg:px-8">

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-violet-200/50 blur-3xl" />
          <div className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-indigo-200/50 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-60 w-60 rounded-full bg-orange-100/60 blur-3xl" />
        </div>


        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">

          <div>

            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-xs font-bold text-indigo-700">

              <span className="h-2 w-2 rounded-full bg-indigo-500" />

              {t("hero.badge")}

            </div>


            <h1 className="mt-7 max-w-2xl text-4xl font-bold leading-[1.04] tracking-[-0.04em] sm:text-5xl md:text-6xl">

              {t("hero.title1")}

              <span className="block bg-gradient-to-r from-indigo-600 to-violet-500 bg-clip-text text-transparent">
                {t("hero.title2")}
              </span>

            </h1>


            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              {t("hero.description")}
            </p>


            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-200 transition duration-300 hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-xl"
              >
                {t("hero.primary")}
                <span className="ml-2">→</span>
              </a>

              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition duration-300 hover:-translate-y-0.5 hover:bg-slate-50"
              >
                {t("hero.secondary")}
              </a>

            </div>


            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-slate-500">

              <span>✓ {t("hero.note")}</span>
              <span>✓ Word</span>
              <span>✓ Google Docs</span>
              <span>✓ Notion</span>

            </div>

          </div>


          {/* MOCKUP */}
          <div className="relative mx-auto w-full max-w-xl">

            <div className="snip-float-left absolute -left-5 top-20 z-20 hidden w-48 rounded-2xl border border-indigo-100 bg-white p-4 shadow-xl md:block">

              <p className="text-[10px] font-bold uppercase tracking-wider text-indigo-500">
                Collected
              </p>

              <p className="mt-2 text-xs leading-5 text-slate-600">
                Useful research from another browser tab.
              </p>

            </div>


            <div className="snip-float-right absolute -right-5 bottom-14 z-20 hidden w-44 rounded-2xl border border-emerald-100 bg-white p-4 shadow-xl md:block">

              <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">
                Source saved
              </p>

              <p className="mt-2 truncate text-xs text-slate-500">
                original-source.com
              </p>

            </div>


            <div className="snip-float-main rounded-[32px] border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-violet-50 p-4 shadow-2xl shadow-indigo-100 sm:p-6">

              <div className="mb-4 flex items-center gap-2 px-2">

                <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />

                <div className="ml-3 h-7 flex-1 rounded-lg bg-white/80" />

              </div>


              <div className="ml-auto w-full max-w-[390px] rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">

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

                      <p className="text-lg font-extrabold text-indigo-600">
                        SnipDock
                      </p>

                      <p className="mt-0.5 text-xs font-medium text-slate-500">
                        Research workspace
                      </p>

                    </div>

                  </div>


                  <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-600">
                    17 / 20
                  </span>

                </div>


                <div className="mt-4 space-y-3">

                  <div className="rounded-xl border-l-4 border-indigo-500 bg-slate-50 p-3.5">

                    <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">
                      TEXT
                    </p>

                    <p className="mt-2 text-xs leading-5 text-slate-700">
                      Research content collected from the web and ready to clean...
                    </p>

                    <p className="mt-2 truncate text-[10px] text-slate-400">
                      Source saved automatically
                    </p>

                  </div>


                  <div className="rounded-xl border-l-4 border-orange-400 bg-slate-50 p-3.5">

                    <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">
                      IMAGE
                    </p>

                    <div className="mt-3 flex items-center gap-3">

                      <div className="h-14 w-20 rounded-lg bg-gradient-to-br from-violet-200 to-indigo-200" />

                      <div className="min-w-0">

                        <p className="text-xs font-medium text-slate-600">
                          Visual reference saved
                        </p>

                        <p className="mt-1 truncate text-[10px] text-slate-400">
                          Source attached
                        </p>

                      </div>

                    </div>

                  </div>


                  <div className="rounded-xl border-l-4 border-emerald-500 bg-slate-50 p-3.5">

                    <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">
                      LINK
                    </p>

                    <p className="mt-2 truncate text-xs text-slate-600">
                      Reference source saved with your research
                    </p>

                  </div>

                </div>


                <div className="mt-4 rounded-xl bg-indigo-600 px-4 py-3.5 text-center text-xs font-bold text-white shadow-md shadow-indigo-100">
                  Copy everything clean
                </div>

                <p className="mt-2 text-center text-[10px] text-slate-400">
                  Ready for Word, Docs & Notion
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className="border-y border-slate-200 bg-slate-50 px-5 py-20 sm:px-6 md:py-28 lg:px-8"
      >

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
              {t("steps.eyebrow")}
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] sm:text-4xl md:text-5xl">
              {t("steps.title")}
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
              {t("steps.description")}
            </p>

          </div>


          <div className="mt-14 grid gap-6 md:grid-cols-3">

            <div className="relative overflow-hidden rounded-3xl border border-indigo-100 bg-white p-7 shadow-sm transition duration-300 ease-out hover:-translate-y-2 hover:shadow-xl">

              <div className="absolute right-6 top-5 text-5xl font-black tracking-[-0.06em] text-indigo-200 sm:text-6xl">
                01
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600">
                <CollectIcon />
              </div>

              <h3 className="mt-7 text-xl font-bold">
                {t("steps.collectTitle")}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {t("steps.collectText")}
              </p>

            </div>


            <div className="relative overflow-hidden rounded-3xl border border-violet-100 bg-white p-7 shadow-sm transition duration-300 ease-out hover:-translate-y-2 hover:shadow-xl">

              <div className="absolute right-6 top-5 text-5xl font-black tracking-[-0.06em] text-violet-200 sm:text-6xl">
                02
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-violet-600">
                <CleanIcon />
              </div>

              <h3 className="mt-7 text-xl font-bold">
                {t("steps.cleanTitle")}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {t("steps.cleanText")}
              </p>

            </div>


            <div className="relative overflow-hidden rounded-3xl border border-orange-100 bg-white p-7 shadow-sm transition duration-300 ease-out hover:-translate-y-2 hover:shadow-xl">

              <div className="absolute right-6 top-5 text-5xl font-black tracking-[-0.06em] text-orange-200 sm:text-6xl">
                03
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-500">
                <UseIcon />
              </div>

              <h3 className="mt-7 text-xl font-bold">
                {t("steps.exportTitle")}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {t("steps.exportText")}
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* BEFORE VS AFTER */}
      <section className="relative overflow-hidden px-5 py-20 sm:px-6 md:py-28 lg:px-8">

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-50 blur-3xl" />


        <div className="relative mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
              {t("beforeAfter.eyebrow")}
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] sm:text-4xl md:text-5xl">
              {t("beforeAfter.title")}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              {t("beforeAfter.description")}
            </p>

          </div>


          <div className="mt-14 grid gap-6 lg:grid-cols-2">

            {/* WITHOUT */}
            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

              <div className="flex items-center justify-between gap-4">

                <div>

                  <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-slate-400">
                    {t("beforeAfter.beforeLabel")}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold tracking-tight">
                    {t("beforeAfter.beforeTitle")}
                  </h3>

                </div>


                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-500">

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="m9 9 6 6" />
                    <path d="m15 9-6 6" />
                  </svg>

                </div>

              </div>


              <div className="mt-8">

                {beforeItems.map((item, index) => (

                  <div
                    key={item}
                    className="relative flex gap-4 pb-6 last:pb-0"
                  >

                    {index !== beforeItems.length - 1 && (
                      <div className="absolute left-[15px] top-8 h-[calc(100%-18px)] w-px bg-slate-200" />
                    )}

                    <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-[11px] font-bold text-slate-400">
                      {index + 1}
                    </div>

                    <div className="pt-1">

                      <p className="text-sm font-medium leading-6 text-slate-600 sm:text-base">
                        {item}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>


            {/* WITH SNIPDOCK */}
            <div className="relative overflow-hidden rounded-[28px] bg-slate-950 p-6 text-white shadow-2xl shadow-indigo-100 sm:p-8">

              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,#4f46e530,transparent_45%)]" />

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:34px_34px]" />


              <div className="relative">

                <div className="flex items-center justify-between gap-4">

                  <div>

                    <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-indigo-400">
                      {t("beforeAfter.afterLabel")}
                    </p>

                    <h3 className="mt-2 text-2xl font-bold tracking-tight text-white">
                      {t("beforeAfter.afterTitle")}
                    </h3>

                  </div>


                  <Image
                    src="/brand/snipdock-icon-128.png"
                    alt=""
                    width={44}
                    height={44}
                    className="h-11 w-11 rounded-xl"
                  />

                </div>


                <div className="mt-8">

                  {afterItems.map((item, index) => (

                    <div
                      key={item}
                      className="relative flex gap-4 pb-6 last:pb-0"
                    >

                      {index !== afterItems.length - 1 && (
                        <div className="absolute left-[15px] top-8 h-[calc(100%-18px)] w-px bg-white/10" />
                      )}

                      <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-500/15 text-[11px] font-bold text-indigo-300 ring-1 ring-inset ring-indigo-400/20">
                        {index + 1}
                      </div>

                      <div className="pt-1">

                        <p className="text-sm font-medium leading-6 text-slate-300 sm:text-base">
                          {item}
                        </p>

                      </div>

                    </div>

                  ))}

                </div>


                <div className="mt-8 rounded-2xl border border-indigo-400/20 bg-indigo-500/10 p-5">

                  <p className="text-base font-semibold leading-7 text-white">
                    {t("beforeAfter.result")}
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* FEATURES */}
      <section
        id="features"
        className="border-t border-slate-200 bg-slate-50/60 px-5 py-20 sm:px-6 md:py-28 lg:px-8"
      >

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
                {t("features.eyebrow")}
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
                {t("features.title")}
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                {t("features.description")}
              </p>

            </div>


            <div className="grid gap-4 sm:grid-cols-2">

              {features.map((feature) => (

                <div
                  key={feature.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 ease-out hover:-translate-y-2 hover:shadow-xl"
                >

                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl ${feature.box}`}
                  >
                    {feature.icon}
                  </div>

                  <h3 className="mt-5 font-bold">
                    {t(`features.${feature.title}`)}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {t(`features.${feature.text}`)}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* FREE VS PRO */}
      <section className="bg-slate-950 px-5 py-20 text-white sm:px-6 md:py-28 lg:px-8">

        <div className="mx-auto max-w-5xl">

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-400">
              {t("compare.eyebrow")}
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
              {t("compare.title")}
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              {t("compare.description")}
            </p>

          </div>


          <div className="mt-12 overflow-hidden rounded-3xl border border-white/10">

            <div className="grid grid-cols-[1.5fr_0.7fr_0.7fr] bg-white/5 p-4 text-xs font-bold sm:p-5 sm:text-sm">

              <div>
                {t("compare.feature")}
              </div>

              <div className="text-center text-slate-400">
                {t("compare.free")}
              </div>

              <div className="text-center text-indigo-300">
                {t("compare.pro")}
              </div>

            </div>


            {comparisonRows.map(([feature, free, pro]) => (

              <div
                key={feature}
                className="grid grid-cols-[1.5fr_0.7fr_0.7fr] border-t border-white/10 p-4 text-xs sm:p-5 sm:text-sm"
              >

                <div className="pr-3 text-slate-300">
                  {feature}
                </div>

                <div className="text-center text-slate-500">
                  {free}
                </div>

                <div className="text-center font-bold text-indigo-300">
                  {pro}
                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* PRICING */}
      <section
        id="pricing"
        className="relative overflow-hidden px-5 py-20 sm:px-6 md:py-28 lg:px-8"
      >

        <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-100/60 blur-3xl" />


        <div className="relative mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
              {t("pricing.eyebrow")}
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] sm:text-4xl md:text-5xl">
              {t("pricing.title")}
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              {t("pricing.description")}
            </p>

          </div>


          <div className="mt-14 grid gap-6 lg:grid-cols-3">

            {/* MONTHLY */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">

              <p className="text-sm font-semibold text-slate-500">
                {t("pricing.monthlyNote")}
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                {t("pricing.monthly")}
              </h3>

              <div className="mt-7 flex items-end gap-2">

                <span className="text-4xl font-black tracking-tight">
                  {t("pricing.monthlyPrice")}
                </span>

                {t("pricing.monthlyPeriod") && (
                  <span className="pb-1 text-sm text-slate-400">
                    {t("pricing.monthlyPeriod")}
                  </span>
                )}

              </div>


              <ul className="mt-7 space-y-3">

                {benefits.map((benefit) => (

                  <li
                    key={benefit}
                    className="flex gap-3 text-sm text-slate-600"
                  >
                    <span className="font-bold text-indigo-600">
                      ✓
                    </span>

                    {benefit}
                  </li>

                ))}

              </ul>


              <button
                type="button"
                className="mt-8 w-full rounded-xl border border-indigo-600 px-5 py-3.5 text-sm font-bold text-indigo-600 transition hover:bg-indigo-50"
              >
                {t("pricing.monthlyButton")}
              </button>

            </div>


            {/* QUARTERLY */}
            <div className="relative rounded-3xl border-2 border-indigo-600 bg-slate-950 p-7 text-white shadow-2xl shadow-indigo-200 transition duration-300 hover:-translate-y-2 sm:p-8">

              <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-2 text-[10px] font-black tracking-wider text-white">
                {t("pricing.popular")}
              </div>


              <p className="text-sm font-semibold text-indigo-300">
                {t("pricing.quarterlyNote")}
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                {t("pricing.quarterly")}
              </h3>

              <div className="mt-7 flex items-end gap-2">

                <span className="text-4xl font-black tracking-tight">
                  {t("pricing.quarterlyPrice")}
                </span>

                {t("pricing.quarterlyPeriod") && (
                  <span className="pb-1 text-sm text-slate-500">
                    {t("pricing.quarterlyPeriod")}
                  </span>
                )}

              </div>


              <ul className="mt-7 space-y-3">

                {benefits.map((benefit) => (

                  <li
                    key={benefit}
                    className="flex gap-3 text-sm text-slate-300"
                  >

                    <span className="font-bold text-indigo-300">
                      ✓
                    </span>

                    {benefit}

                  </li>

                ))}

              </ul>


              <button
                type="button"
                className="mt-8 w-full rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-indigo-50"
              >
                {t("pricing.quarterlyButton")}
              </button>

            </div>


            {/* ANNUAL */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">

              <p className="text-sm font-semibold text-slate-500">
                {t("pricing.annualNote")}
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                {t("pricing.annual")}
              </h3>

              <div className="mt-7 flex items-end gap-2">

                <span className="text-4xl font-black tracking-tight">
                  {t("pricing.annualPrice")}
                </span>

                {t("pricing.annualPeriod") && (
                  <span className="pb-1 text-sm text-slate-400">
                    {t("pricing.annualPeriod")}
                  </span>
                )}

              </div>


              <ul className="mt-7 space-y-3">

                {benefits.map((benefit) => (

                  <li
                    key={benefit}
                    className="flex gap-3 text-sm text-slate-600"
                  >

                    <span className="font-bold text-indigo-600">
                      ✓
                    </span>

                    {benefit}

                  </li>

                ))}

              </ul>


              <button
                type="button"
                className="mt-8 w-full rounded-xl border border-indigo-600 px-5 py-3.5 text-sm font-bold text-indigo-600 transition hover:bg-indigo-50"
              >
                {t("pricing.annualButton")}
              </button>

            </div>

          </div>


          <p className="mt-8 text-center text-xs text-slate-400">
            {t("pricing.checkoutNote")}
          </p>

        </div>

      </section>


      {/* FINAL CTA */}
      <section className="px-5 pb-20 sm:px-6 md:pb-28 lg:px-8">

        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-gradient-to-br from-indigo-600 via-violet-600 to-indigo-700 px-6 py-14 text-center text-white sm:px-10 md:py-20">

          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full border border-white/10" />
          <div className="absolute -bottom-24 -right-10 h-72 w-72 rounded-full border border-white/10" />


          <div className="relative mx-auto max-w-2xl">

            <div className="snip-icon-breathe mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur">
              <FinalIcon />
            </div>

            <h2 className="mt-6 text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
              {t("final.title")}
            </h2>

            <p className="mt-5 text-base leading-7 text-indigo-100 sm:text-lg">
              {t("final.description")}
            </p>

            <a
              href="#pricing"
              style={{color: "#4338ca"}}
              className="mt-8 inline-flex items-center justify-center rounded-xl bg-white px-7 py-3.5 text-sm font-extrabold shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-indigo-50"
            >

              {t("final.button")}

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2 h-4 w-4"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>

            </a>

          </div>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="border-t border-slate-200 px-5 py-10 sm:px-6 lg:px-8">

        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex items-center gap-3">

            <Image
              src="/brand/snipdock-icon-128.png"
              alt=""
              width={32}
              height={32}
              className="h-8 w-8 rounded-lg"
            />

            <div>

              <p className="text-sm font-bold text-indigo-600">
                SnipDock
              </p>

              <p className="text-[10px] text-slate-400">
                by OmniDock Labs
              </p>

            </div>

          </div>


          <Link
            href={`/${locale}`}
            className="text-sm font-semibold text-slate-500 transition hover:text-slate-950"
          >
            ← {t("nav.home")}
          </Link>

        </div>

      </footer>

    </main>
  );
}