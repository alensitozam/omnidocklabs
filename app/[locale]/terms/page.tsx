import Link from "next/link";
import {notFound} from "next/navigation";

const termsContent = {
  en: {
    title: "Terms of Service",
    updated: "Last updated: August 20, 2026",
    intro:
      "These Terms of Service govern your access to and use of OmniDock Labs websites, software and digital products, including SnipDock. By using our products, you agree to these terms.",
    sections: [
      {
        title: "1. About OmniDock Labs",
        paragraphs: [
          "OmniDock Labs is an independent software studio that develops digital tools and browser extensions, including SnipDock.",
          "These terms apply to the OmniDock Labs website and to products and services made available by OmniDock Labs."
        ]
      },
      {
        title: "2. Using our products",
        paragraphs: [
          "You may use our products only for lawful purposes and in accordance with these terms.",
          "You are responsible for how you use the information, content and materials collected or processed through our products.",
          "You must not use our products to violate applicable laws, infringe the rights of others, interfere with our services or attempt to gain unauthorized access to systems or features."
        ]
      },
      {
        title: "3. SnipDock",
        paragraphs: [
          "SnipDock is a browser extension designed to help users collect, organize and prepare text, images, links and source information found while browsing the web.",
          "You are responsible for ensuring that your collection and use of third-party content complies with applicable copyright, intellectual property and other laws.",
          "OmniDock Labs does not grant you rights to third-party content simply because that content can be collected or organized using SnipDock."
        ]
      },
      {
        title: "4. Free and paid features",
        paragraphs: [
          "Some OmniDock Labs products may include both free and paid features.",
          "Features, limits and functionality associated with free or paid plans may evolve as our products are developed. Material changes affecting paid access will be communicated when reasonably appropriate."
        ]
      },
      {
        title: "5. Purchases and Pro access",
        paragraphs: [
          "SnipDock may offer paid Pro access for different periods. The price, access period and included features will be displayed before purchase.",
          "Unless otherwise stated at checkout, purchasing a fixed access period does not automatically renew.",
          "Paid access begins according to the terms presented during checkout and remains available for the purchased period, subject to these terms."
        ]
      },
      {
        title: "6. Payments",
        paragraphs: [
          "Payments may be processed by a third-party payment provider acting as the merchant or payment processor for the transaction.",
          "Additional payment terms, taxes, currencies or billing conditions may apply depending on your location and the payment provider used."
        ]
      },
      {
        title: "7. Refunds",
        paragraphs: [
          "Refund requests will be handled in accordance with applicable consumer protection laws and any refund conditions presented during checkout.",
          "Where a third-party payment provider acts as merchant of record, refunds may also be subject to that provider's procedures and policies."
        ]
      },
      {
        title: "8. Intellectual property",
        paragraphs: [
          "OmniDock Labs and its products, including their software, branding, design and original content, are protected by applicable intellectual property laws.",
          "These terms do not transfer ownership of OmniDock Labs software or intellectual property to you.",
          "You retain any rights you may have in content that you collect or create while using our products."
        ]
      },
      {
        title: "9. Availability and changes",
        paragraphs: [
          "We may update, improve, modify or discontinue features as our products evolve.",
          "We aim to provide reliable services, but we do not guarantee that every product or feature will always be available without interruption or error."
        ]
      },
      {
        title: "10. Disclaimer",
        paragraphs: [
          "Our products are provided on an as-available basis to the extent permitted by applicable law.",
          "OmniDock Labs does not guarantee that collected information will always be complete, accurate or suitable for a particular purpose. You remain responsible for reviewing and verifying information before relying on it."
        ]
      },
      {
        title: "11. Limitation of liability",
        paragraphs: [
          "To the maximum extent permitted by applicable law, OmniDock Labs will not be liable for indirect, incidental or consequential losses arising from the use of or inability to use our products.",
          "Nothing in these terms excludes or limits rights or liabilities that cannot legally be excluded or limited."
        ]
      },
      {
        title: "12. Suspension or termination",
        paragraphs: [
          "We may restrict or terminate access to our products when reasonably necessary to prevent abuse, protect our services, comply with legal requirements or address serious violations of these terms."
        ]
      },
      {
        title: "13. Changes to these terms",
        paragraphs: [
          "We may update these Terms of Service as our products, business or legal requirements evolve. The latest version will be published on this page with an updated revision date."
        ]
      },
      {
        title: "14. Contact",
        paragraphs: [
          "For questions about these Terms of Service, contact OmniDock Labs at hello@omnidocklabs.com."
        ]
      }
    ],
    back: "Back to OmniDock Labs",
    privacy: "Privacy Policy"
  },

  es: {
    title: "Términos de Servicio",
    updated: "Última actualización: 20 de agosto de 2026",
    intro:
      "Estos Términos de Servicio regulan el acceso y uso de los sitios web, software y productos digitales de OmniDock Labs, incluido SnipDock. Al utilizar nuestros productos, aceptas estos términos.",
    sections: [
      {
        title: "1. Sobre OmniDock Labs",
        paragraphs: [
          "OmniDock Labs es un estudio independiente de software que desarrolla herramientas digitales y extensiones para navegadores, entre ellas SnipDock.",
          "Estos términos se aplican al sitio web de OmniDock Labs y a los productos y servicios ofrecidos por OmniDock Labs."
        ]
      },
      {
        title: "2. Uso de nuestros productos",
        paragraphs: [
          "Puedes utilizar nuestros productos únicamente para fines lícitos y de acuerdo con estos términos.",
          "Eres responsable del uso que hagas de la información, contenidos y materiales recopilados o procesados mediante nuestros productos.",
          "No puedes utilizar nuestros productos para infringir la legislación aplicable, vulnerar derechos de terceros, interferir con nuestros servicios o intentar acceder sin autorización a sistemas o funciones."
        ]
      },
      {
        title: "3. SnipDock",
        paragraphs: [
          "SnipDock es una extensión para navegador diseñada para ayudar a recopilar, organizar y preparar textos, imágenes, enlaces e información sobre sus fuentes mientras navegas por internet.",
          "Eres responsable de asegurarte de que la recopilación y utilización de contenidos de terceros cumpla con las leyes aplicables de derechos de autor, propiedad intelectual y otras normas pertinentes.",
          "OmniDock Labs no te concede derechos sobre contenidos de terceros por el solo hecho de que puedan ser recopilados u organizados mediante SnipDock."
        ]
      },
      {
        title: "4. Funciones gratuitas y de pago",
        paragraphs: [
          "Algunos productos de OmniDock Labs pueden incluir funciones gratuitas y funciones de pago.",
          "Las características, límites y funcionalidades de los planes gratuitos o de pago pueden evolucionar a medida que desarrollamos nuestros productos. Los cambios relevantes que afecten al acceso pagado serán comunicados cuando corresponda."
        ]
      },
      {
        title: "5. Compras y acceso Pro",
        paragraphs: [
          "SnipDock puede ofrecer acceso Pro de pago por diferentes períodos. El precio, período de acceso y funciones incluidas se mostrarán antes de realizar la compra.",
          "Salvo que se indique expresamente lo contrario durante el pago, la compra de un período fijo de acceso no se renovará automáticamente.",
          "El acceso de pago comenzará según las condiciones mostradas durante el proceso de compra y permanecerá disponible durante el período adquirido, sujeto a estos términos."
        ]
      },
      {
        title: "6. Pagos",
        paragraphs: [
          "Los pagos pueden ser procesados por un proveedor externo que actúe como comerciante o procesador de pagos de la transacción.",
          "Dependiendo de tu ubicación y del proveedor utilizado, pueden aplicarse condiciones adicionales relacionadas con pagos, impuestos, monedas o facturación."
        ]
      },
      {
        title: "7. Reembolsos",
        paragraphs: [
          "Las solicitudes de reembolso se gestionarán de acuerdo con la legislación de protección al consumidor aplicable y las condiciones de reembolso informadas durante el proceso de compra.",
          "Cuando un proveedor externo actúe como merchant of record, los reembolsos también podrán estar sujetos a sus procedimientos y políticas."
        ]
      },
      {
        title: "8. Propiedad intelectual",
        paragraphs: [
          "OmniDock Labs y sus productos, incluidos su software, marca, diseño y contenido original, están protegidos por las leyes de propiedad intelectual aplicables.",
          "Estos términos no transfieren al usuario la propiedad del software ni de la propiedad intelectual de OmniDock Labs.",
          "Conservas los derechos que te correspondan sobre el contenido que recopiles o crees al utilizar nuestros productos."
        ]
      },
      {
        title: "9. Disponibilidad y cambios",
        paragraphs: [
          "Podemos actualizar, mejorar, modificar o retirar funciones a medida que nuestros productos evolucionen.",
          "Buscamos ofrecer servicios confiables, pero no garantizamos que todos los productos o funciones estén disponibles permanentemente, sin interrupciones o sin errores."
        ]
      },
      {
        title: "10. Exclusión de garantías",
        paragraphs: [
          "Nuestros productos se proporcionan según disponibilidad, dentro de los límites permitidos por la legislación aplicable.",
          "OmniDock Labs no garantiza que la información recopilada sea siempre completa, exacta o adecuada para un propósito determinado. Es responsabilidad del usuario revisar y verificar la información antes de utilizarla."
        ]
      },
      {
        title: "11. Limitación de responsabilidad",
        paragraphs: [
          "En la máxima medida permitida por la legislación aplicable, OmniDock Labs no será responsable por pérdidas indirectas, incidentales o consecuentes derivadas del uso o imposibilidad de uso de nuestros productos.",
          "Nada de lo establecido en estos términos excluye o limita derechos o responsabilidades que legalmente no puedan excluirse o limitarse."
        ]
      },
      {
        title: "12. Suspensión o terminación",
        paragraphs: [
          "Podemos restringir o terminar el acceso a nuestros productos cuando sea razonablemente necesario para prevenir abusos, proteger nuestros servicios, cumplir obligaciones legales o responder a infracciones graves de estos términos."
        ]
      },
      {
        title: "13. Cambios a estos términos",
        paragraphs: [
          "Podemos actualizar estos Términos de Servicio a medida que evolucionen nuestros productos, nuestro negocio o los requisitos legales. La versión más reciente se publicará en esta página indicando su fecha de actualización."
        ]
      },
      {
        title: "14. Contacto",
        paragraphs: [
          "Para consultas sobre estos Términos de Servicio, puedes contactar a OmniDock Labs en hello@omnidocklabs.com."
        ]
      }
    ],
    back: "Volver a OmniDock Labs",
    privacy: "Política de Privacidad"
  },

  pt: {
    title: "Termos de Serviço",
    updated: "Última atualização: 20 de agosto de 2026",
    intro:
      "Estes Termos de Serviço regulam o acesso e o uso dos sites, softwares e produtos digitais da OmniDock Labs, incluindo o SnipDock. Ao utilizar nossos produtos, você concorda com estes termos.",
    sections: [
      {
        title: "1. Sobre a OmniDock Labs",
        paragraphs: [
          "A OmniDock Labs é um estúdio independente de software que desenvolve ferramentas digitais e extensões para navegadores, incluindo o SnipDock.",
          "Estes termos se aplicam ao site da OmniDock Labs e aos produtos e serviços disponibilizados pela OmniDock Labs."
        ]
      },
      {
        title: "2. Uso dos nossos produtos",
        paragraphs: [
          "Você pode utilizar nossos produtos somente para finalidades lícitas e de acordo com estes termos.",
          "Você é responsável pelo uso das informações, conteúdos e materiais coletados ou processados por meio dos nossos produtos.",
          "Nossos produtos não podem ser utilizados para violar leis aplicáveis, infringir direitos de terceiros, interferir em nossos serviços ou tentar obter acesso não autorizado a sistemas ou recursos."
        ]
      },
      {
        title: "3. SnipDock",
        paragraphs: [
          "O SnipDock é uma extensão para navegador criada para ajudar usuários a coletar, organizar e preparar textos, imagens, links e informações sobre suas fontes enquanto navegam pela internet.",
          "Você é responsável por garantir que a coleta e o uso de conteúdos de terceiros estejam de acordo com as leis aplicáveis de direitos autorais, propriedade intelectual e demais normas pertinentes.",
          "A OmniDock Labs não concede direitos sobre conteúdos de terceiros pelo simples fato de esses conteúdos poderem ser coletados ou organizados com o SnipDock."
        ]
      },
      {
        title: "4. Recursos gratuitos e pagos",
        paragraphs: [
          "Alguns produtos da OmniDock Labs podem oferecer recursos gratuitos e recursos pagos.",
          "Recursos, limites e funcionalidades associados aos planos gratuitos ou pagos podem evoluir conforme nossos produtos são desenvolvidos. Alterações relevantes que afetem o acesso pago serão comunicadas quando apropriado."
        ]
      },
      {
        title: "5. Compras e acesso Pro",
        paragraphs: [
          "O SnipDock pode oferecer acesso Pro pago por diferentes períodos. O preço, o período de acesso e os recursos incluídos serão apresentados antes da compra.",
          "Salvo indicação expressa em contrário durante o pagamento, a compra de um período fixo de acesso não será renovada automaticamente.",
          "O acesso pago começará de acordo com as condições apresentadas durante a compra e permanecerá disponível pelo período adquirido, sujeito a estes termos."
        ]
      },
      {
        title: "6. Pagamentos",
        paragraphs: [
          "Os pagamentos podem ser processados por um provedor externo que atue como comerciante ou processador de pagamentos da transação.",
          "Dependendo da sua localização e do provedor utilizado, podem ser aplicadas condições adicionais relacionadas a pagamentos, impostos, moedas ou cobrança."
        ]
      },
      {
        title: "7. Reembolsos",
        paragraphs: [
          "Solicitações de reembolso serão tratadas de acordo com as leis de proteção ao consumidor aplicáveis e com as condições de reembolso apresentadas durante o processo de compra.",
          "Quando um provedor externo atuar como merchant of record, os reembolsos também poderão estar sujeitos aos procedimentos e políticas desse provedor."
        ]
      },
      {
        title: "8. Propriedade intelectual",
        paragraphs: [
          "A OmniDock Labs e seus produtos, incluindo software, marca, design e conteúdo original, são protegidos pelas leis de propriedade intelectual aplicáveis.",
          "Estes termos não transferem ao usuário a propriedade do software ou da propriedade intelectual da OmniDock Labs.",
          "Você mantém os direitos que eventualmente possua sobre o conteúdo coletado ou criado ao utilizar nossos produtos."
        ]
      },
      {
        title: "9. Disponibilidade e alterações",
        paragraphs: [
          "Podemos atualizar, melhorar, modificar ou descontinuar recursos conforme nossos produtos evoluem.",
          "Buscamos oferecer serviços confiáveis, mas não garantimos que todos os produtos ou recursos estarão sempre disponíveis sem interrupções ou erros."
        ]
      },
      {
        title: "10. Isenção de garantias",
        paragraphs: [
          "Nossos produtos são fornecidos conforme disponibilidade, dentro dos limites permitidos pela legislação aplicável.",
          "A OmniDock Labs não garante que as informações coletadas sejam sempre completas, precisas ou adequadas para uma finalidade específica. Cabe ao usuário revisar e verificar as informações antes de utilizá-las."
        ]
      },
      {
        title: "11. Limitação de responsabilidade",
        paragraphs: [
          "Na máxima extensão permitida pela legislação aplicável, a OmniDock Labs não será responsável por perdas indiretas, incidentais ou consequenciais decorrentes do uso ou da impossibilidade de uso dos nossos produtos.",
          "Nada nestes termos exclui ou limita direitos ou responsabilidades que não possam ser legalmente excluídos ou limitados."
        ]
      },
      {
        title: "12. Suspensão ou encerramento",
        paragraphs: [
          "Podemos restringir ou encerrar o acesso aos nossos produtos quando isso for razoavelmente necessário para prevenir abusos, proteger nossos serviços, cumprir obrigações legais ou lidar com violações graves destes termos."
        ]
      },
      {
        title: "13. Alterações nestes termos",
        paragraphs: [
          "Podemos atualizar estes Termos de Serviço conforme nossos produtos, nosso negócio ou requisitos legais evoluam. A versão mais recente será publicada nesta página com a respectiva data de atualização."
        ]
      },
      {
        title: "14. Contato",
        paragraphs: [
          "Para dúvidas sobre estes Termos de Serviço, entre em contato com a OmniDock Labs pelo e-mail hello@omnidocklabs.com."
        ]
      }
    ],
    back: "Voltar para a OmniDock Labs",
    privacy: "Política de Privacidade"
  }
} as const;

export default async function TermsPage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;

  if (locale !== "en" && locale !== "es" && locale !== "pt") {
    notFound();
  }

  const content = termsContent[locale];

  return (
    <main className="min-h-screen bg-white text-slate-900">

      <nav className="border-b border-slate-200">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <Link
            href={`/${locale}`}
            className="text-xl font-bold tracking-tight"
          >
            OmniDock<span className="text-indigo-600"> Labs</span>
          </Link>

          <Link
            href={`/${locale}`}
            className="text-sm font-medium text-slate-600 transition hover:text-indigo-600"
          >
            ← {content.back}
          </Link>
        </div>
      </nav>

      <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">

        <header className="border-b border-slate-200 pb-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
            OmniDock Labs
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            {content.title}
          </h1>

          <p className="mt-4 text-sm text-slate-500">
            {content.updated}
          </p>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            {content.intro}
          </p>
        </header>

        <div className="mt-12 space-y-12">
          {content.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-bold tracking-tight">
                {section.title}
              </h2>

              <div className="mt-5 space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="leading-8 text-slate-600"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 border-t border-slate-200 pt-8">
          <Link
            href={`/${locale}/privacy`}
            className="font-semibold text-indigo-600 transition hover:text-indigo-700"
          >
            {content.privacy} →
          </Link>
        </div>

      </article>

      <footer className="border-t border-slate-200 px-6 py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
          <p>© 2026 OmniDock Labs</p>

          <Link
            href={`/${locale}`}
            className="transition hover:text-indigo-600"
          >
            {content.back}
          </Link>
        </div>
      </footer>

    </main>
  );
}