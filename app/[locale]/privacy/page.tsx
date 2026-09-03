import Link from "next/link";
import {notFound} from "next/navigation";

const privacyContent = {
  en: {
    title: "Privacy Policy",
    updated: "Last updated: September 2, 2026",
    intro:
      "This Privacy Policy explains how OmniDock Labs handles information when you visit our website or use our products, including the SnipDock browser extension.",
    sections: [
      {
        title: "1. Who we are",
        paragraphs: [
          "OmniDock Labs is an independent software studio that develops digital tools and browser extensions, including SnipDock."
        ]
      },
      {
        title: "2. Information you provide to us",
        paragraphs: [
          "We may receive information that you choose to provide, such as your email address when you contact us, request support, make a purchase or receive a SnipDock Pro license.",
          "For paid access, we may process limited purchase and license information such as your email address, the plan purchased, the access expiration date, transaction identifiers and license status."
        ]
      },
      {
        title: "3. SnipDock research content stays local",
        paragraphs: [
          "SnipDock lets you collect text, images, links and source information that you explicitly choose while browsing the web.",
          "The research content you collect with SnipDock is stored locally in your browser using browser storage. SnipDock does not send that collected research content to OmniDock Labs servers.",
          "OmniDock Labs does not sell collected research content, use it for advertising or claim ownership of it.",
          "If a future SnipDock feature requires cloud storage or synchronization, we will update this Privacy Policy and provide appropriate disclosure before introducing that feature."
        ]
      },
      {
        title: "4. Website and technical information",
        paragraphs: [
          "When you access our website, hosting and infrastructure providers may process routine technical information required to deliver and protect the service, such as IP address, browser information, device information, request logs and security data.",
          "We use technical information only as reasonably necessary to operate, secure, troubleshoot and improve our services."
        ]
      },
      {
        title: "5. Payments and license delivery",
        paragraphs: [
          "SnipDock Pro is sold as one-time purchases for fixed access periods. Payments are processed by Paddle. Paddle may collect billing, payment and transaction information required to complete a purchase and meet its legal obligations.",
          "OmniDock Labs does not directly store full payment card details.",
          "We may use transactional email providers, including Resend, to deliver license codes and service-related messages. These providers receive only the information reasonably necessary to send those communications."
        ]
      },
      {
        title: "6. How we use personal information",
        paragraphs: [
          "We may use personal information to process purchases, generate and manage licenses, deliver Pro access, respond to support requests, prevent fraud or abuse, maintain security, troubleshoot problems and comply with applicable legal obligations.",
          "We do not use SnipDock research content for profiling, advertising or unrelated purposes because that content is not transmitted to OmniDock Labs."
        ]
      },
      {
        title: "7. Service providers and sharing",
        paragraphs: [
          "We do not sell your personal information.",
          "We may share limited information with service providers when necessary to operate our website and backend, process payments, deliver transactional email, host infrastructure, protect our services or comply with legal requirements.",
          "Service providers process information according to their own terms and privacy obligations."
        ]
      },
      {
        title: "8. Data retention",
        paragraphs: [
          "Research content stored by SnipDock remains in your local browser storage until you remove it, clear the relevant browser data or uninstall the extension, subject to browser behavior.",
          "Purchase, license and support information is retained only for as long as reasonably necessary to provide the service, maintain license records, prevent abuse and satisfy legal, accounting, security and operational requirements."
        ]
      },
      {
        title: "9. Security",
        paragraphs: [
          "We use reasonable technical and organizational measures intended to protect information handled by our systems. However, no online service or storage system can guarantee absolute security."
        ]
      },
      {
        title: "10. Your choices and rights",
        paragraphs: [
          "You control what content you choose to collect with SnipDock and can remove locally stored content using the extension or browser controls.",
          "Depending on where you live, applicable privacy laws may give you rights regarding personal information held by OmniDock Labs, including rights to request access, correction or deletion. You may contact us to make a privacy-related request."
        ]
      },
      {
        title: "11. Changes to this policy",
        paragraphs: [
          "We may update this Privacy Policy as our products, service providers or legal obligations evolve. The latest version will be published on this page with an updated revision date."
        ]
      },
      {
        title: "12. Contact",
        paragraphs: [
          "For privacy questions or requests, contact OmniDock Labs at hello@omnidocklabs.com."
        ]
      }
    ],
    back: "Back to OmniDock Labs",
    terms: "Terms of Service"
  },

  es: {
    title: "Política de Privacidad",
    updated: "Última actualización: 2 de septiembre de 2026",
    intro:
      "Esta Política de Privacidad explica cómo OmniDock Labs trata la información cuando visitas nuestro sitio web o utilizas nuestros productos, incluida la extensión para navegador SnipDock.",
    sections: [
      {
        title: "1. Quiénes somos",
        paragraphs: [
          "OmniDock Labs es un estudio independiente de software que desarrolla herramientas digitales y extensiones para navegadores, entre ellas SnipDock."
        ]
      },
      {
        title: "2. Información que nos proporcionas",
        paragraphs: [
          "Podemos recibir información que decidas proporcionarnos, como tu correo electrónico cuando nos contactas, solicitas soporte, realizas una compra o recibes una licencia de SnipDock Pro.",
          "Para el acceso de pago, podemos tratar información limitada de compra y licencia, como tu correo electrónico, el plan adquirido, la fecha de vencimiento del acceso, identificadores de la transacción y el estado de la licencia."
        ]
      },
      {
        title: "3. El contenido de investigación de SnipDock permanece local",
        paragraphs: [
          "SnipDock te permite recopilar textos, imágenes, enlaces e información de fuentes que eliges expresamente mientras navegas por internet.",
          "El contenido de investigación que recopilas con SnipDock se almacena localmente en tu navegador mediante el almacenamiento del navegador. SnipDock no envía ese contenido de investigación a los servidores de OmniDock Labs.",
          "OmniDock Labs no vende el contenido de investigación recopilado, no lo utiliza con fines publicitarios y no reclama propiedad sobre él.",
          "Si en el futuro una función de SnipDock requiere almacenamiento o sincronización en la nube, actualizaremos esta Política de Privacidad y proporcionaremos la información correspondiente antes de introducir dicha función."
        ]
      },
      {
        title: "4. Sitio web e información técnica",
        paragraphs: [
          "Cuando accedes a nuestro sitio web, los proveedores de alojamiento e infraestructura pueden tratar información técnica habitual necesaria para entregar y proteger el servicio, como dirección IP, información del navegador y del dispositivo, registros de solicitudes y datos de seguridad.",
          "Utilizamos la información técnica únicamente cuando es razonablemente necesario para operar, proteger, diagnosticar y mejorar nuestros servicios."
        ]
      },
      {
        title: "5. Pagos y entrega de licencias",
        paragraphs: [
          "SnipDock Pro se vende mediante pagos únicos por períodos fijos de acceso. Los pagos son procesados por Paddle. Paddle puede recopilar la información de facturación, pago y transacción necesaria para completar una compra y cumplir sus obligaciones legales.",
          "OmniDock Labs no almacena directamente los datos completos de tarjetas de pago.",
          "Podemos utilizar proveedores de correo transaccional, incluido Resend, para entregar códigos de licencia y mensajes relacionados con el servicio. Estos proveedores reciben únicamente la información razonablemente necesaria para enviar dichas comunicaciones."
        ]
      },
      {
        title: "6. Cómo utilizamos la información personal",
        paragraphs: [
          "Podemos utilizar información personal para procesar compras, generar y administrar licencias, habilitar el acceso Pro, responder solicitudes de soporte, prevenir fraude o abuso, mantener la seguridad, resolver problemas y cumplir obligaciones legales aplicables.",
          "No utilizamos el contenido de investigación de SnipDock para perfiles, publicidad ni fines ajenos al producto porque ese contenido no se transmite a OmniDock Labs."
        ]
      },
      {
        title: "7. Proveedores de servicios y divulgación",
        paragraphs: [
          "No vendemos tu información personal.",
          "Podemos compartir información limitada con proveedores cuando sea necesario para operar nuestro sitio web y backend, procesar pagos, entregar correos transaccionales, alojar infraestructura, proteger nuestros servicios o cumplir requisitos legales.",
          "Los proveedores de servicios tratan la información de acuerdo con sus propios términos y obligaciones de privacidad."
        ]
      },
      {
        title: "8. Conservación de los datos",
        paragraphs: [
          "El contenido de investigación almacenado por SnipDock permanece en el almacenamiento local de tu navegador hasta que lo elimines, borres los datos correspondientes del navegador o desinstales la extensión, sujeto al funcionamiento del navegador.",
          "La información de compras, licencias y soporte se conserva únicamente durante el tiempo razonablemente necesario para proporcionar el servicio, mantener registros de licencias, prevenir abusos y cumplir requisitos legales, contables, operativos y de seguridad."
        ]
      },
      {
        title: "9. Seguridad",
        paragraphs: [
          "Aplicamos medidas técnicas y organizativas razonables destinadas a proteger la información tratada por nuestros sistemas. Sin embargo, ningún servicio online o sistema de almacenamiento puede garantizar una seguridad absoluta."
        ]
      },
      {
        title: "10. Tus opciones y derechos",
        paragraphs: [
          "Tú controlas qué contenido decides recopilar con SnipDock y puedes eliminar el contenido almacenado localmente mediante la extensión o los controles del navegador.",
          "Dependiendo del lugar donde vivas, la legislación aplicable puede otorgarte derechos respecto de la información personal que mantiene OmniDock Labs, incluidos derechos de acceso, rectificación o eliminación. Puedes contactarnos para realizar una solicitud relacionada con privacidad."
        ]
      },
      {
        title: "11. Cambios a esta política",
        paragraphs: [
          "Podemos actualizar esta Política de Privacidad a medida que evolucionen nuestros productos, proveedores de servicios u obligaciones legales. La versión más reciente se publicará en esta página indicando su fecha de actualización."
        ]
      },
      {
        title: "12. Contacto",
        paragraphs: [
          "Para consultas o solicitudes relacionadas con privacidad, puedes contactar a OmniDock Labs en hello@omnidocklabs.com."
        ]
      }
    ],
    back: "Volver a OmniDock Labs",
    terms: "Términos de Servicio"
  },

  pt: {
    title: "Política de Privacidade",
    updated: "Última atualização: 2 de setembro de 2026",
    intro:
      "Esta Política de Privacidade explica como a OmniDock Labs trata informações quando você visita nosso site ou utiliza nossos produtos, incluindo a extensão de navegador SnipDock.",
    sections: [
      {
        title: "1. Quem somos",
        paragraphs: [
          "A OmniDock Labs é um estúdio independente de software que desenvolve ferramentas digitais e extensões para navegadores, incluindo o SnipDock."
        ]
      },
      {
        title: "2. Informações fornecidas por você",
        paragraphs: [
          "Podemos receber informações que você escolha fornecer, como seu endereço de e-mail ao entrar em contato conosco, solicitar suporte, realizar uma compra ou receber uma licença do SnipDock Pro.",
          "Para o acesso pago, podemos tratar informações limitadas de compra e licença, como seu e-mail, o plano adquirido, a data de expiração do acesso, identificadores da transação e o status da licença."
        ]
      },
      {
        title: "3. O conteúdo de pesquisa do SnipDock permanece local",
        paragraphs: [
          "O SnipDock permite coletar textos, imagens, links e informações de fontes que você escolhe explicitamente enquanto navega pela internet.",
          "O conteúdo de pesquisa coletado com o SnipDock é armazenado localmente no navegador por meio do armazenamento do navegador. O SnipDock não envia esse conteúdo de pesquisa aos servidores da OmniDock Labs.",
          "A OmniDock Labs não vende o conteúdo de pesquisa coletado, não o utiliza para publicidade e não reivindica propriedade sobre ele.",
          "Se uma futura funcionalidade do SnipDock exigir armazenamento ou sincronização na nuvem, atualizaremos esta Política de Privacidade e forneceremos a divulgação adequada antes de introduzir essa funcionalidade."
        ]
      },
      {
        title: "4. Site e informações técnicas",
        paragraphs: [
          "Ao acessar nosso site, provedores de hospedagem e infraestrutura podem tratar informações técnicas rotineiras necessárias para entregar e proteger o serviço, como endereço IP, informações do navegador e do dispositivo, registros de solicitações e dados de segurança.",
          "Utilizamos informações técnicas somente quando razoavelmente necessário para operar, proteger, diagnosticar e melhorar nossos serviços."
        ]
      },
      {
        title: "5. Pagamentos e entrega de licenças",
        paragraphs: [
          "O SnipDock Pro é vendido por meio de pagamentos únicos para períodos fixos de acesso. Os pagamentos são processados pela Paddle. A Paddle pode coletar informações de cobrança, pagamento e transação necessárias para concluir uma compra e cumprir suas obrigações legais.",
          "A OmniDock Labs não armazena diretamente os dados completos de cartões de pagamento.",
          "Podemos utilizar provedores de e-mail transacional, incluindo a Resend, para entregar códigos de licença e mensagens relacionadas ao serviço. Esses provedores recebem somente as informações razoavelmente necessárias para enviar essas comunicações."
        ]
      },
      {
        title: "6. Como usamos informações pessoais",
        paragraphs: [
          "Podemos utilizar informações pessoais para processar compras, gerar e administrar licenças, liberar o acesso Pro, responder solicitações de suporte, prevenir fraude ou abuso, manter a segurança, resolver problemas e cumprir obrigações legais aplicáveis.",
          "Não utilizamos o conteúdo de pesquisa do SnipDock para criação de perfis, publicidade ou finalidades não relacionadas ao produto porque esse conteúdo não é transmitido à OmniDock Labs."
        ]
      },
      {
        title: "7. Prestadores de serviços e compartilhamento",
        paragraphs: [
          "Não vendemos suas informações pessoais.",
          "Podemos compartilhar informações limitadas com prestadores de serviços quando necessário para operar nosso site e backend, processar pagamentos, entregar e-mails transacionais, hospedar infraestrutura, proteger nossos serviços ou cumprir requisitos legais.",
          "Os prestadores de serviços tratam informações de acordo com seus próprios termos e obrigações de privacidade."
        ]
      },
      {
        title: "8. Retenção de dados",
        paragraphs: [
          "O conteúdo de pesquisa armazenado pelo SnipDock permanece no armazenamento local do navegador até que você o exclua, limpe os dados correspondentes do navegador ou desinstale a extensão, sujeito ao funcionamento do navegador.",
          "Informações de compra, licença e suporte são mantidas somente pelo período razoavelmente necessário para fornecer o serviço, manter registros de licenças, prevenir abusos e cumprir requisitos legais, contábeis, operacionais e de segurança."
        ]
      },
      {
        title: "9. Segurança",
        paragraphs: [
          "Adotamos medidas técnicas e organizacionais razoáveis destinadas a proteger as informações tratadas por nossos sistemas. No entanto, nenhum serviço online ou sistema de armazenamento pode garantir segurança absoluta."
        ]
      },
      {
        title: "10. Suas escolhas e direitos",
        paragraphs: [
          "Você controla o conteúdo que escolhe coletar com o SnipDock e pode remover o conteúdo armazenado localmente por meio da extensão ou dos controles do navegador.",
          "Dependendo de onde você mora, a legislação aplicável pode garantir direitos sobre informações pessoais mantidas pela OmniDock Labs, incluindo direitos de acesso, correção ou exclusão. Você pode entrar em contato conosco para fazer uma solicitação relacionada à privacidade."
        ]
      },
      {
        title: "11. Alterações nesta política",
        paragraphs: [
          "Podemos atualizar esta Política de Privacidade conforme nossos produtos, prestadores de serviços ou obrigações legais evoluam. A versão mais recente será publicada nesta página com a respectiva data de atualização."
        ]
      },
      {
        title: "12. Contato",
        paragraphs: [
          "Para dúvidas ou solicitações relacionadas à privacidade, entre em contato com a OmniDock Labs pelo e-mail hello@omnidocklabs.com."
        ]
      }
    ],
    back: "Voltar para a OmniDock Labs",
    terms: "Termos de Serviço"
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
          <Link href={`/${locale}`} className="text-xl font-bold tracking-tight">
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

          <p className="mt-4 text-sm text-slate-500">{content.updated}</p>

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
                  <p key={paragraph} className="leading-8 text-slate-600">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 border-t border-slate-200 pt-8">
          <Link
            href={`/${locale}/terms`}
            className="font-semibold text-indigo-600 transition hover:text-indigo-700"
          >
            {content.terms} →
          </Link>
        </div>
      </article>

      <footer className="border-t border-slate-200 px-6 py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
          <p>© 2026 OmniDock Labs</p>

          <Link href={`/${locale}`} className="transition hover:text-indigo-600">
            {content.back}
          </Link>
        </div>
      </footer>
    </main>
  );
}
