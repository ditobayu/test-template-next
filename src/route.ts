/**
 * Public routes
 * @type {string[]}
 */
export const publicRoutes = ["/", "/auth/new-verification"];

/**
 * Auth routes
 * @type {string[]}
 */
export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "/auth/forgot-password",
  "/auth/new-password",
];

/**
 * API routes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * Default login redirect
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";
