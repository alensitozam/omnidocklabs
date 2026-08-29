"use client";

import {initializePaddle, type Paddle} from "@paddle/paddle-js";
import {useState, type ReactNode} from "react";

type Plan = "monthly" | "quarterly" | "annual";

type PaddleCheckoutButtonProps = {
  plan: Plan;
  locale: string;
  children: ReactNode;
  className?: string;
};

const clientToken =
  process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN;

const paddleEnvironment =
  process.env.NEXT_PUBLIC_PADDLE_ENV === "sandbox"
    ? "sandbox"
    : undefined;

const priceIds: Record<Plan, string | undefined> = {
  monthly:
    process.env.NEXT_PUBLIC_PADDLE_PRICE_MONTHLY,

  quarterly:
    process.env.NEXT_PUBLIC_PADDLE_PRICE_QUARTERLY,

  annual:
    process.env.NEXT_PUBLIC_PADDLE_PRICE_ANNUAL
};

let paddlePromise: Promise<Paddle | undefined> | null = null;

function getPaddle() {
  if (!clientToken) {
    return Promise.resolve(undefined);
  }

  if (!paddlePromise) {
    paddlePromise = initializePaddle({
      token: clientToken,
      ...(paddleEnvironment
        ? {environment: paddleEnvironment}
        : {})
    });
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

  async function openCheckout() {
    const priceId = priceIds[plan];

    if (!clientToken) {
      console.error(
        "NEXT_PUBLIC_PADDLE_CLIENT_TOKEN is missing."
      );

      alert(
        "Paddle is not configured yet. Please try again later."
      );

      return;
    }

    if (!priceId) {
      console.error(
        `Paddle price ID is missing for plan: ${plan}`
      );

      alert(
        "This plan is not configured yet. Please try again later."
      );

      return;
    }

    try {
      setLoading(true);

      const paddle = await getPaddle();

      if (!paddle) {
        throw new Error(
          "Paddle could not be initialized."
        );
      }

      const checkoutLocale =
        locale === "es"
          ? "es"
          : locale === "pt"
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
      console.error(
        "Unable to open Paddle Checkout:",
        error
      );

      alert(
        "We couldn't open the secure checkout. Please try again."
      );
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
          <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-current border-r-transparent" />

          {children}
        </span>
      ) : (
        children
      )}
    </button>
  );
}