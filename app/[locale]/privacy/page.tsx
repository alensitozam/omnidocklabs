import Link from "next/link";
import {notFound} from "next/navigation";

const privacyContent = {
  en: {
    title: "Privacy Policy",
    updated: "Last updated: August 20, 2026",
    intro:
      "This Privacy Policy explains how OmniDock Labs handles information when you visit our website or use our products, including SnipDock.",
    sections: [
      {
        title: "1. Who we are",
        paragraphs: [
          "OmniDock Labs is an independent software studio that develops digital tools and browser extensions, including SnipDock."
        ]
      },
      {
        title: "2. Information we may collect",
        paragraphs: [
          "The information we collect depends on how you interact with our website and products.",
          "We may receive information that you voluntarily provide to us, such as your email address when you contact us or information required to process a purchase or provide customer support.",
          "Our website may also receive basic technical information normally transmitted when accessing a website, such as browser type, device information, IP address and basic usage information."
        ]
      },
      {
        title: "3. SnipDock and collected content",
        paragraphs: [
          "SnipDock is designed to help you collect and organize text, images, links and source information while browsing the web.",
          "Content you collect with SnipDock may be stored locally in your browser or device when the product uses local browser storage. OmniDock Labs does not claim ownership of the content you collect.",
          "If future SnipDock features require cloud storage or synchronization, this Privacy Policy will be updated before those features are introduced."
        ]
      },
      {
        title: "4. Payments",
        paragraphs: [
          "When paid products or subscriptions are available, payments may be processed by third-party payment providers. Payment providers may collect information required to complete the transaction, such as billing and payment details.",
          "OmniDock Labs does not intend to directly store full payment card details on its own systems."
        ]
      },
      {
        title: "5. How we use information",
        paragraphs: [
          "We may use information to provide and maintain our products, process purchases, manage access to paid features, respond to support requests, prevent abuse, improve our services and comply with applicable legal obligations."
        ]
      },
      {
        title: "6. Sharing of information",
        paragraphs: [
          "We do not sell your personal information.",
          "Information may be shared with service providers when necessary to operate the website, process payments, provide infrastructure or comply with legal requirements."
        ]
      },
      {
        title: "7. Data retention",
        paragraphs: [
          "We retain personal information only for as long as reasonably necessary for the purposes described in this policy, including legal, accounting, security and operational requirements."
        ]
      },
      {
        title: "8. Security",
        paragraphs: [
          "We use reasonable technical and organizational measures intended to protect information. However, no online service or storage system can guarantee absolute security."
        ]
      },
      {
        title: "9. Your rights",
        paragraphs: [
          "Depending on where you live, applicable privacy laws may give you rights regarding your personal information, including rights to request access, correction or deletion.",
          "You may contact us to make a privacy-related request."
        ]
      },
      {
        title: "10. Changes to this policy",
        paragraphs: [
          "We may update this Privacy Policy as our products, business or legal obligations evolve. The latest version will be published on this page with an updated revision date."
        ]
      },
      {
        title: "11. Contact",
        paragraphs: [
          "For privacy questions or requests, contact OmniDock Labs at hello@omnidocklabs.com."
        ]
      }
    ],
    back: "Back to OmniDock Labs"
  },

  es: {
    title: "Política de Privacidad",
    updated: "Última actualización: 20 de agosto de 2026",
    intro:
      "Esta Política de Privacidad explica cómo OmniDock Labs trata la información cuando visitas nuestro sitio web o utilizas nuestros productos, incluido SnipDock.",
    sections: [
      {
        title: "1. Quiénes somos",
        paragraphs: [
          "OmniDock Labs es un estudio independiente de software dedicado al desarrollo de herramientas digitales y extensiones para navegadores, entre ellas SnipDock."
        ]
      },
      {
        title: "2. Información que podemos recopilar",
        paragraphs: [
          "La información que recopilamos depende de la forma en que interactúes con nuestro sitio web y nuestros productos.",
          "Podemos recibir información que nos entregues voluntariamente, como tu correo electrónico cuando nos contactas o la información necesaria para procesar una compra o prestar soporte.",
          "Nuestro sitio también puede recibir información técnica básica transmitida normalmente al acceder a una página web, como tipo de navegador, información del dispositivo, dirección IP y datos básicos de uso."
        ]
      },
      {
        title: "3. SnipDock y el contenido recopilado",
        paragraphs: [
          "SnipDock está diseñado para ayudarte a recopilar y organizar textos, imágenes, enlaces e información sobre sus fuentes mientras navegas por internet.",
          "El contenido recopilado mediante SnipDock puede almacenarse localmente en tu navegador o dispositivo cuando el producto utiliza el almacenamiento local del navegador. OmniDock Labs no reclama propiedad sobre el contenido que recopilas.",
          "Si en el futuro SnipDock incorpora funciones que requieran almacenamiento o sincronización en la nube, esta Política de Privacidad será actualizada antes de introducir dichas funciones."
        ]
      },
      {
        title: "4. Pagos",
        paragraphs: [
          "Cuando estén disponibles productos o suscripciones de pago, las transacciones podrán ser procesadas por proveedores externos de pagos. Estos proveedores podrán recopilar la información necesaria para completar la transacción, como datos de facturación y pago.",
          "OmniDock Labs no tiene previsto almacenar directamente los datos completos de tarjetas de pago en sus propios sistemas."
        ]
      },
      {
        title: "5. Cómo utilizamos la información",
        paragraphs: [
          "Podemos utilizar la información para proporcionar y mantener nuestros productos, procesar compras, administrar el acceso a funciones de pago, responder solicitudes de soporte, prevenir abusos, mejorar nuestros servicios y cumplir las obligaciones legales aplicables."
        ]
      },
      {
        title: "6. Cuándo compartimos información",
        paragraphs: [
          "No vendemos tu información personal.",
          "Podemos compartir información con proveedores de servicios cuando sea necesario para operar el sitio web, procesar pagos, proporcionar infraestructura o cumplir obligaciones legales."
        ]
      },
      {
        title: "7. Conservación de los datos",
        paragraphs: [
          "Conservamos la información personal únicamente durante el tiempo razonablemente necesario para los fines descritos en esta política y para cumplir requisitos legales, contables, operativos y de seguridad."
        ]
      },
      {
        title: "8. Seguridad",
        paragraphs: [
          "Aplicamos medidas técnicas y organizativas razonables destinadas a proteger la información. Sin embargo, ningún servicio online o sistema de almacenamiento puede garantizar una seguridad absoluta."
        ]
      },
      {
        title: "9. Tus derechos",
        paragraphs: [
          "Dependiendo del país en el que vivas, la legislación aplicable puede otorgarte derechos sobre tu información personal, incluidos derechos de acceso, rectificación o eliminación.",
          "Puedes contactarnos para realizar una solicitud relacionada con privacidad."
        ]
      },
      {
        title: "10. Cambios a esta política",
        paragraphs: [
          "Podemos actualizar esta Política de Privacidad a medida que evolucionen nuestros productos, nuestro negocio o nuestras obligaciones legales. La versión más reciente se publicará en esta página indicando su fecha de actualización."
        ]
      },
      {
        title: "11. Contacto",
        paragraphs: [
          "Para consultas o solicitudes relacionadas con privacidad, puedes contactar a OmniDock Labs en hello@omnidocklabs.com."
        ]
      }
    ],
    back: "Volver a OmniDock Labs"
  },

  pt: {
    title: "Política de Privacidade",
    updated: "Última atualização: 20 de agosto de 2026",
    intro:
      "Esta Política de Privacidade explica como a OmniDock Labs trata informações quando você visita nosso site ou utiliza nossos produtos, incluindo o SnipDock.",
    sections: [
      {
        title: "1. Quem somos",
        paragraphs: [
          "A OmniDock Labs é um estúdio independente de software dedicado ao desenvolvimento de ferramentas digitais e extensões para navegadores, incluindo o SnipDock."
        ]
      },
      {
        title: "2. Informações que podemos coletar",
        paragraphs: [
          "As informações coletadas dependem da forma como você interage com nosso site e nossos produtos.",
          "Podemos receber informações fornecidas voluntariamente por você, como seu endereço de e-mail ao entrar em contato conosco ou dados necessários para processar uma compra ou prestar suporte.",
          "Nosso site também pode receber informações técnicas básicas normalmente transmitidas durante o acesso a uma página, como tipo de navegador, informações do dispositivo, endereço IP e dados básicos de uso."
        ]
      },
      {
        title: "3. SnipDock e o conteúdo coletado",
        paragraphs: [
          "O SnipDock foi desenvolvido para ajudar você a coletar e organizar textos, imagens, links e informações sobre suas fontes enquanto navega pela internet.",
          "O conteúdo coletado pelo SnipDock pode ser armazenado localmente no navegador ou dispositivo quando o produto utiliza o armazenamento local do navegador. A OmniDock Labs não reivindica propriedade sobre o conteúdo que você coleta.",
          "Caso futuras funcionalidades do SnipDock exijam armazenamento ou sincronização na nuvem, esta Política de Privacidade será atualizada antes que esses recursos sejam disponibilizados."
        ]
      },
      {
        title: "4. Pagamentos",
        paragraphs: [
          "Quando produtos ou assinaturas pagas estiverem disponíveis, os pagamentos poderão ser processados por provedores externos. Esses provedores poderão coletar as informações necessárias para concluir a transação, como dados de cobrança e pagamento.",
          "A OmniDock Labs não pretende armazenar diretamente os dados completos de cartões de pagamento em seus próprios sistemas."
        ]
      },
      {
        title: "5. Como usamos as informações",
        paragraphs: [
          "Podemos utilizar informações para fornecer e manter nossos produtos, processar compras, administrar o acesso a recursos pagos, responder solicitações de suporte, prevenir abusos, melhorar nossos serviços e cumprir obrigações legais aplicáveis."
        ]
      },
      {
        title: "6. Compartilhamento de informações",
        paragraphs: [
          "Não vendemos suas informações pessoais.",
          "Informações podem ser compartilhadas com prestadores de serviços quando isso for necessário para operar o site, processar pagamentos, fornecer infraestrutura ou cumprir obrigações legais."
        ]
      },
      {
        title: "7. Retenção de dados",
        paragraphs: [
          "Mantemos informações pessoais somente pelo período razoavelmente necessário para as finalidades descritas nesta política e para atender requisitos legais, contábeis, operacionais e de segurança."
        ]
      },
      {
        title: "8. Segurança",
        paragraphs: [
          "Adotamos medidas técnicas e organizacionais razoáveis destinadas a proteger as informações. No entanto, nenhum serviço online ou sistema de armazenamento pode garantir segurança absoluta."
        ]
      },
      {
        title: "9. Seus direitos",
        paragraphs: [
          "Dependendo do país onde você reside, a legislação aplicável pode garantir direitos relacionados às suas informações pessoais, incluindo acesso, correção ou exclusão.",
          "Você pode entrar em contato conosco para fazer uma solicitação relacionada à privacidade."
        ]
      },
      {
        title: "10. Alterações nesta política",
        paragraphs: [
          "Podemos atualizar esta Política de Privacidade conforme nossos produtos, nosso negócio ou nossas obrigações legais evoluam. A versão mais recente será publicada nesta página com a respectiva data de atualização."
        ]
      },
      {
        title: "11. Contato",
        paragraphs: [
          "Para dúvidas ou solicitações relacionadas à privacidade, entre em contato com a OmniDock Labs pelo e-mail hello@omnidocklabs.com."
        ]
      }
    ],
    back: "Voltar para a OmniDock Labs"
  }
} as const;

export default async function PrivacyPage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;

  if (locale !== "en" && locale !== "es" && locale !== "pt") {
    notFound();
  }

  const content = privacyContent[locale];

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