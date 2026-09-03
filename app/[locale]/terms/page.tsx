import Link from "next/link";
import {notFound} from "next/navigation";

const termsContent = {
  en: {
    title: "Terms of Service",
    updated: "Last updated: September 2, 2026",
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
          "You are responsible for how you use information, content and materials collected or processed through our products.",
          "You must not use our products to violate applicable laws, infringe the rights of others, interfere with our services, bypass product restrictions or attempt to gain unauthorized access to systems or features."
        ]
      },
      {
        title: "3. SnipDock",
        paragraphs: [
          "SnipDock is a browser extension designed to help users collect, organize, clean and prepare text, images, links and source information while browsing the web.",
          "Research content collected with SnipDock is stored locally in the user's browser. OmniDock Labs does not obtain ownership of that content.",
          "You are responsible for ensuring that your collection and use of third-party content complies with applicable copyright, intellectual property and other laws."
        ]
      },
      {
        title: "4. Free version",
        paragraphs: [
          "SnipDock may be used for free with product limits. The current free experience includes up to 20 items in a temporary workspace and up to 100 historical collected items.",
          "We may improve or adjust free features and limits over time. Material changes will be reflected in the product or website."
        ]
      },
      {
        title: "5. SnipDock Pro",
        paragraphs: [
          "SnipDock Pro removes the workspace and history limits for the duration of the purchased access period and provides the Pro experience described at the time of purchase.",
          "Current Pro access periods are 1 month, 3 months and 1 year.",
          "Each SnipDock Pro purchase is a one-time payment for a fixed access period. SnipDock Pro does not automatically renew. To continue Pro access after expiration, you must make a new purchase."
        ]
      },
      {
        title: "6. Prices, payments and taxes",
        paragraphs: [
          "The price and access period applicable to your purchase are shown before you complete checkout.",
          "Payments are processed by Paddle, which may act as merchant of record or payment provider for the transaction. Paddle may calculate and collect applicable taxes depending on your location.",
          "Additional payment, billing, currency or tax terms may apply under Paddle's own terms."
        ]
      },
      {
        title: "7. License codes and access",
        paragraphs: [
          "After a successful purchase, a SnipDock Pro license code may be issued and sent to the email address associated with the purchase.",
          "You are responsible for keeping your license code reasonably secure and for not reselling, publishing or intentionally distributing it for unauthorized use.",
          "A license is valid only for the purchased access period and may stop providing Pro access when that period expires."
        ]
      },
      {
        title: "8. Refunds, reversals and revocation",
        paragraphs: [
          "Refund requests are handled in accordance with applicable consumer protection laws and the checkout or payment-provider procedures that apply to the transaction.",
          "If a payment is refunded, reversed, charged back or determined to be fraudulent, associated Pro access or license status may be revoked or adjusted as appropriate."
        ]
      },
      {
        title: "9. Intellectual property",
        paragraphs: [
          "OmniDock Labs and its products, including their software, branding, design and original content, are protected by applicable intellectual property laws.",
          "These terms do not transfer ownership of OmniDock Labs software or intellectual property to you.",
          "You retain any rights you may have in content that you collect or create while using our products."
        ]
      },
      {
        title: "10. Availability and changes",
        paragraphs: [
          "We may update, improve, modify or discontinue features as our products evolve.",
          "We aim to provide reliable services, but we do not guarantee that every product or feature will always be available without interruption or error.",
          "Changes will not remove rights that applicable law gives you in relation to purchases already completed."
        ]
      },
      {
        title: "11. Disclaimer",
        paragraphs: [
          "Our products are provided on an as-available basis to the extent permitted by applicable law.",
          "OmniDock Labs does not guarantee that collected information will always be complete, accurate or suitable for a particular purpose. You remain responsible for reviewing and verifying information before relying on it."
        ]
      },
      {
        title: "12. Limitation of liability",
        paragraphs: [
          "To the maximum extent permitted by applicable law, OmniDock Labs will not be liable for indirect, incidental or consequential losses arising from the use of or inability to use our products.",
          "Nothing in these terms excludes or limits rights or liabilities that cannot legally be excluded or limited."
        ]
      },
      {
        title: "13. Suspension or termination",
        paragraphs: [
          "We may restrict or terminate access when reasonably necessary to prevent abuse, protect our services, respond to fraudulent or reversed transactions, comply with legal requirements or address serious violations of these terms."
        ]
      },
      {
        title: "14. Changes to these terms",
        paragraphs: [
          "We may update these Terms of Service as our products, business or legal requirements evolve. The latest version will be published on this page with an updated revision date."
        ]
      },
      {
        title: "15. Contact",
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
    updated: "Última actualización: 2 de septiembre de 2026",
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
          "No puedes utilizar nuestros productos para infringir la legislación aplicable, vulnerar derechos de terceros, interferir con nuestros servicios, eludir restricciones del producto o intentar acceder sin autorización a sistemas o funciones."
        ]
      },
      {
        title: "3. SnipDock",
        paragraphs: [
          "SnipDock es una extensión para navegador diseñada para ayudar a recopilar, organizar, limpiar y preparar textos, imágenes, enlaces e información sobre sus fuentes mientras navegas por internet.",
          "El contenido de investigación recopilado con SnipDock se almacena localmente en el navegador del usuario. OmniDock Labs no obtiene propiedad sobre ese contenido.",
          "Eres responsable de asegurarte de que la recopilación y utilización de contenidos de terceros cumpla con las leyes aplicables de derechos de autor, propiedad intelectual y demás normas pertinentes."
        ]
      },
      {
        title: "4. Versión gratuita",
        paragraphs: [
          "SnipDock puede utilizarse gratuitamente con límites de producto. La experiencia gratuita actual permite hasta 20 elementos en un espacio temporal de trabajo y hasta 100 elementos recopilados en el historial.",
          "Podemos mejorar o ajustar las funciones y límites gratuitos con el tiempo. Los cambios relevantes se reflejarán en el producto o en el sitio web."
        ]
      },
      {
        title: "5. SnipDock Pro",
        paragraphs: [
          "SnipDock Pro elimina los límites de espacio de trabajo e historial durante el período de acceso adquirido y proporciona la experiencia Pro descrita al momento de la compra.",
          "Los períodos actuales de acceso Pro son 1 mes, 3 meses y 1 año.",
          "Cada compra de SnipDock Pro es un pago único por un período fijo de acceso. SnipDock Pro no se renueva automáticamente. Para continuar con acceso Pro después del vencimiento, debes realizar una nueva compra."
        ]
      },
      {
        title: "6. Precios, pagos e impuestos",
        paragraphs: [
          "El precio y el período de acceso aplicables a tu compra se muestran antes de completar el pago.",
          "Los pagos son procesados por Paddle, que puede actuar como merchant of record o proveedor de pagos de la transacción. Paddle puede calcular y cobrar los impuestos aplicables según tu ubicación.",
          "Pueden aplicarse condiciones adicionales de pago, facturación, moneda o impuestos conforme a los propios términos de Paddle."
        ]
      },
      {
        title: "7. Códigos de licencia y acceso",
        paragraphs: [
          "Después de una compra exitosa, se puede emitir un código de licencia de SnipDock Pro y enviarlo al correo electrónico asociado a la compra.",
          "Eres responsable de mantener tu código de licencia razonablemente seguro y de no revenderlo, publicarlo ni distribuirlo intencionalmente para usos no autorizados.",
          "La licencia es válida únicamente durante el período de acceso adquirido y puede dejar de proporcionar acceso Pro cuando dicho período venza."
        ]
      },
      {
        title: "8. Reembolsos, reversos y revocación",
        paragraphs: [
          "Las solicitudes de reembolso se gestionan de acuerdo con la legislación de protección al consumidor aplicable y los procedimientos del checkout o proveedor de pagos que correspondan a la transacción.",
          "Si un pago es reembolsado, revertido, objeto de contracargo o determinado como fraudulento, el acceso Pro o el estado de la licencia asociado puede ser revocado o ajustado según corresponda."
        ]
      },
      {
        title: "9. Propiedad intelectual",
        paragraphs: [
          "OmniDock Labs y sus productos, incluidos su software, marca, diseño y contenido original, están protegidos por las leyes de propiedad intelectual aplicables.",
          "Estos términos no transfieren al usuario la propiedad del software ni de la propiedad intelectual de OmniDock Labs.",
          "Conservas los derechos que te correspondan sobre el contenido que recopiles o crees al utilizar nuestros productos."
        ]
      },
      {
        title: "10. Disponibilidad y cambios",
        paragraphs: [
          "Podemos actualizar, mejorar, modificar o retirar funciones a medida que nuestros productos evolucionen.",
          "Buscamos ofrecer servicios confiables, pero no garantizamos que todos los productos o funciones estén disponibles permanentemente, sin interrupciones o sin errores.",
          "Los cambios no eliminarán los derechos que la legislación aplicable te otorgue respecto de compras ya completadas."
        ]
      },
      {
        title: "11. Exclusión de garantías",
        paragraphs: [
          "Nuestros productos se proporcionan según disponibilidad, dentro de los límites permitidos por la legislación aplicable.",
          "OmniDock Labs no garantiza que la información recopilada sea siempre completa, exacta o adecuada para un propósito determinado. Es responsabilidad del usuario revisar y verificar la información antes de utilizarla."
        ]
      },
      {
        title: "12. Limitación de responsabilidad",
        paragraphs: [
          "En la máxima medida permitida por la legislación aplicable, OmniDock Labs no será responsable por pérdidas indirectas, incidentales o consecuentes derivadas del uso o imposibilidad de uso de nuestros productos.",
          "Nada de lo establecido en estos términos excluye o limita derechos o responsabilidades que legalmente no puedan excluirse o limitarse."
        ]
      },
      {
        title: "13. Suspensión o terminación",
        paragraphs: [
          "Podemos restringir o terminar el acceso cuando sea razonablemente necesario para prevenir abusos, proteger nuestros servicios, responder a transacciones fraudulentas o revertidas, cumplir obligaciones legales o abordar infracciones graves de estos términos."
        ]
      },
      {
        title: "14. Cambios a estos términos",
        paragraphs: [
          "Podemos actualizar estos Términos de Servicio a medida que evolucionen nuestros productos, nuestro negocio o los requisitos legales. La versión más reciente se publicará en esta página indicando su fecha de actualización."
        ]
      },
      {
        title: "15. Contacto",
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
    updated: "Última atualização: 2 de setembro de 2026",
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
          "Nossos produtos não podem ser utilizados para violar leis aplicáveis, infringir direitos de terceiros, interferir com nossos serviços, contornar restrições do produto ou tentar obter acesso não autorizado a sistemas ou recursos."
        ]
      },
      {
        title: "3. SnipDock",
        paragraphs: [
          "O SnipDock é uma extensão para navegador criada para ajudar usuários a coletar, organizar, limpar e preparar textos, imagens, links e informações sobre suas fontes enquanto navegam pela internet.",
          "O conteúdo de pesquisa coletado com o SnipDock é armazenado localmente no navegador do usuário. A OmniDock Labs não obtém propriedade sobre esse conteúdo.",
          "Você é responsável por garantir que a coleta e o uso de conteúdos de terceiros estejam de acordo com as leis aplicáveis de direitos autorais, propriedade intelectual e demais normas pertinentes."
        ]
      },
      {
        title: "4. Versão gratuita",
        paragraphs: [
          "O SnipDock pode ser utilizado gratuitamente com limites de produto. A experiência gratuita atual permite até 20 itens em um espaço de trabalho temporário e até 100 itens coletados no histórico.",
          "Podemos melhorar ou ajustar recursos e limites gratuitos ao longo do tempo. Alterações relevantes serão refletidas no produto ou no site."
        ]
      },
      {
        title: "5. SnipDock Pro",
        paragraphs: [
          "O SnipDock Pro remove os limites de espaço de trabalho e histórico durante o período de acesso adquirido e oferece a experiência Pro descrita no momento da compra.",
          "Os períodos atuais de acesso Pro são 1 mês, 3 meses e 1 ano.",
          "Cada compra do SnipDock Pro é um pagamento único por um período fixo de acesso. O SnipDock Pro não é renovado automaticamente. Para continuar com acesso Pro após a expiração, você deve realizar uma nova compra."
        ]
      },
      {
        title: "6. Preços, pagamentos e impostos",
        paragraphs: [
          "O preço e o período de acesso aplicáveis à sua compra são exibidos antes de concluir o pagamento.",
          "Os pagamentos são processados pela Paddle, que pode atuar como merchant of record ou provedora de pagamentos da transação. A Paddle pode calcular e cobrar os impostos aplicáveis conforme sua localização.",
          "Condições adicionais de pagamento, cobrança, moeda ou impostos podem ser aplicadas de acordo com os próprios termos da Paddle."
        ]
      },
      {
        title: "7. Códigos de licença e acesso",
        paragraphs: [
          "Após uma compra bem-sucedida, um código de licença do SnipDock Pro pode ser emitido e enviado ao endereço de e-mail associado à compra.",
          "Você é responsável por manter seu código de licença razoavelmente seguro e por não revendê-lo, publicá-lo ou distribuí-lo intencionalmente para uso não autorizado.",
          "A licença é válida somente durante o período de acesso adquirido e pode deixar de fornecer acesso Pro quando esse período expirar."
        ]
      },
      {
        title: "8. Reembolsos, reversões e revogação",
        paragraphs: [
          "Solicitações de reembolso são tratadas de acordo com as leis de proteção ao consumidor aplicáveis e com os procedimentos do checkout ou do provedor de pagamentos aplicáveis à transação.",
          "Se um pagamento for reembolsado, revertido, contestado por chargeback ou considerado fraudulento, o acesso Pro ou o status da licença associado poderá ser revogado ou ajustado conforme apropriado."
        ]
      },
      {
        title: "9. Propriedade intelectual",
        paragraphs: [
          "A OmniDock Labs e seus produtos, incluindo software, marca, design e conteúdo original, são protegidos pelas leis de propriedade intelectual aplicáveis.",
          "Estes termos não transferem ao usuário a propriedade do software ou da propriedade intelectual da OmniDock Labs.",
          "Você mantém os direitos que eventualmente possua sobre o conteúdo coletado ou criado ao utilizar nossos produtos."
        ]
      },
      {
        title: "10. Disponibilidade e alterações",
        paragraphs: [
          "Podemos atualizar, melhorar, modificar ou descontinuar recursos conforme nossos produtos evoluem.",
          "Buscamos oferecer serviços confiáveis, mas não garantimos que todos os produtos ou recursos estarão sempre disponíveis sem interrupções ou erros.",
          "As alterações não removerão direitos que a legislação aplicável conceda a você em relação a compras já concluídas."
        ]
      },
      {
        title: "11. Isenção de garantias",
        paragraphs: [
          "Nossos produtos são fornecidos conforme disponibilidade, dentro dos limites permitidos pela legislação aplicável.",
          "A OmniDock Labs não garante que as informações coletadas sejam sempre completas, precisas ou adequadas para uma finalidade específica. Cabe ao usuário revisar e verificar as informações antes de utilizá-las."
        ]
      },
      {
        title: "12. Limitação de responsabilidade",
        paragraphs: [
          "Na máxima extensão permitida pela legislação aplicável, a OmniDock Labs não será responsável por perdas indiretas, incidentais ou consequenciais decorrentes do uso ou da impossibilidade de uso dos nossos produtos.",
          "Nada nestes termos exclui ou limita direitos ou responsabilidades que não possam ser legalmente excluídos ou limitados."
        ]
      },
      {
        title: "13. Suspensão ou encerramento",
        paragraphs: [
          "Podemos restringir ou encerrar o acesso quando isso for razoavelmente necessário para prevenir abusos, proteger nossos serviços, responder a transações fraudulentas ou revertidas, cumprir obrigações legais ou lidar com violações graves destes termos."
        ]
      },
      {
        title: "14. Alterações nestes termos",
        paragraphs: [
          "Podemos atualizar estes Termos de Serviço conforme nossos produtos, nosso negócio ou requisitos legais evoluam. A versão mais recente será publicada nesta página com a respectiva data de atualização."
        ]
      },
      {
        title: "15. Contato",
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

          <Link href={`/${locale}`} className="transition hover:text-indigo-600">
            {content.back}
          </Link>
        </div>
      </footer>
    </main>
  );
}
