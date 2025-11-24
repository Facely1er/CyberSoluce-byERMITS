import { ENV } from "../config/env";

export function logInfo(message: string, data?: unknown) {
  if (ENV.runtime === "development") {
    console.info("[CyberSoluce][INFO]", message, data ?? "");
  }
}

export function logError(message: string, error?: unknown) {
  console.error("[CyberSoluce][ERROR]", message, error ?? "");
  // TODO: Phase 6 – send to external logging (Sentry, etc.)
}

export function logWarn(message: string, data?: unknown) {
  if (ENV.runtime === "development" || ENV.runtime === "staging") {
    console.warn("[CyberSoluce][WARN]", message, data ?? "");
  }
}

