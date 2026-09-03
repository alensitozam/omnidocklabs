"use client";

import {initializePaddle, type Paddle} from "@paddle/paddle-js";
import {useState, type ReactNode} from "react";

type Plan = "monthly" | "quarterly" | "annual";
type SupportedLocale = "en" | "es" | "pt";
type PaddleEnvironment = "sandbox" | "production";

type PaddleCheckoutButtonProps = {
  plan: Plan;
  locale: string;
  children: ReactNode;
  className?: string;
};

const clientToken = process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN;
const configuredEnvironment = process.env.NEXT_PUBLIC_PADDLE_ENV;

const priceIds: Record<Plan, string | undefined> = {
  monthly: process.env.NEXT_PUBLIC_PADDLE_PRICE_MONTHLY,
  quarterly: process.env.NEXT_PUBLIC_PADDLE_PRICE_QUARTERLY,
  annual: process.env.NEXT_PUBLIC_PADDLE_PRICE_ANNUAL
};

const messages: Record<
  SupportedLocale,
  {
    configurationError: string;
    planError: string;
    checkoutError: string;
  }
> = {
  en: {
    configurationError:
      "Secure checkout is temporarily unavailable. Please try again later.",
    planError:
      "This plan is temporarily unavailable. Please try again later.",
    checkoutError:
      "We couldn't open the secure checkout. Please try again."
  },
  es: {
    configurationError:
      "El pago seguro no está disponible temporalmente. Inténtalo de nuevo más tarde.",
    planError:
      "Este plan no está disponible temporalmente. Inténtalo de nuevo más tarde.",
    checkoutError:
      "No pudimos abrir el pago seguro. Inténtalo de nuevo."
  },
  pt: {
    configurationError:
      "O pagamento seguro está temporariamente indisponível. Tente novamente mais tarde.",
    planError:
      "Este plano está temporariamente indisponível. Tente novamente mais tarde.",
    checkoutError:
      "Não foi possível abrir o pagamento seguro. Tente novamente."
  }
};

let paddlePromise: Promise<Paddle | undefined> | null = null;

function getLocale(locale: string): SupportedLocale {
  if (locale === "es" || locale === "pt") {
    return locale;
  }

  return "en";
}

function getEnvironment(): PaddleEnvironment | null {
  if (
    configuredEnvironment === "sandbox" ||
    configuredEnvironment === "production"
  ) {
    return configuredEnvironment;
  }

  return null;
}

function tokenMatchesEnvironment(
  token: string,
  environment: PaddleEnvironment
) {
  if (environment === "sandbox") {
    return token.startsWith("test_");
  }

  return token.startsWith("live_");
}

function getPaddle() {
  const environment = getEnvironment();

  if (
    !clientToken ||
    !environment ||
    !tokenMatchesEnvironment(clientToken, environment)
  ) {
    return Promise.resolve(undefined);
  }

  if (!paddlePromise) {
    paddlePromise = initializePaddle(
      environment === "sandbox"
        ? {
            token: clientToken,
            environment: "sandbox"
          }
        : {
            token: clientToken
          }
    );
  }

  return paddlePromise;
}

export default function PaddleCheckoutButton({
  plan,
  locale,
  children,
  className = ""
}: PaddleCheckoutButtonProps) {
  const [loading, setLoading] = useState(false);
  const currentLocale = getLocale(locale);
  const copy = messages[currentLocale];

  async function openCheckout() {
    const priceId = priceIds[plan];
    const environment = getEnvironment();

    if (
      !clientToken ||
      !environment ||
      !tokenMatchesEnvironment(clientToken, environment)
    ) {
      console.error(
        "Paddle checkout configuration is missing, invalid, or uses a token for the wrong environment."
      );
      window.alert(copy.configurationError);
      return;
    }

    if (!priceId) {
      console.error(`Paddle price ID is missing for plan: ${plan}`);
      window.alert(copy.planError);
      return;
    }

    try {
      setLoading(true);

      const paddle = await getPaddle();

      if (!paddle) {
        throw new Error("Paddle could not be initialized.");
      }

      const checkoutLocale =
        currentLocale === "es"
          ? "es"
          : currentLocale === "pt"
            ? "pt-BR"
            : "en";

      paddle.Checkout.open({
        items: [
          {
            priceId,
            quantity: 1
          }
        ],
        settings: {
          displayMode: "overlay",
          variant: "one-page",
          theme: "light",
          locale: checkoutLocale,
          showAddDiscounts: false
        }
      });
    } catch (error) {
      console.error("Unable to open Paddle Checkout:", error);
      window.alert(copy.checkoutError);
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      onClick={openCheckout}
      disabled={loading}
      aria-busy={loading}
      className={`${className} disabled:cursor-wait disabled:opacity-70`}
    >
      {loading ? (
        <span className="flex items-center justify-center gap-2">
          <span
            aria-hidden="true"
            className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-current border-r-transparent"
          />
          {children}
        </span>
      ) : (
        children
      )}
    </button>
  );
}
