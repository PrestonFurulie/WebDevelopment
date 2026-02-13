/**
 * FLLC Authentication Utilities
 * AWS Cognito integration stubs for the Enterprise Intelligence Framework.
 * FLLC 2026
 */

export interface AuthUser {
  id: string;
  email: string;
  role: "admin" | "analyst" | "viewer";
  mfa_enabled: boolean;
  last_login: string;
}

export interface AuthSession {
  access_token: string;
  refresh_token: string;
  id_token: string;
  expires_at: number;
}

/**
 * Cognito User Pool configuration.
 * Values should come from environment variables in production.
 */
export const cognitoConfig = {
  region: process.env.NEXT_PUBLIC_AWS_REGION || "us-west-2",
  userPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID || "",
  clientId: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID || "",
  domain: process.env.NEXT_PUBLIC_COGNITO_DOMAIN || "",
};

/**
 * Validates a JWT token structure (stub).
 * In production, verify signature against Cognito JWKS.
 */
export function validateToken(token: string): boolean {
  if (!token || token.split(".").length !== 3) return false;
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.exp > Date.now() / 1000;
  } catch {
    return false;
  }
}

/**
 * Extracts user info from an ID token (stub).
 */
export function getUserFromToken(idToken: string): AuthUser | null {
  try {
    const payload = JSON.parse(atob(idToken.split(".")[1]));
    return {
      id: payload.sub,
      email: payload.email,
      role: payload["custom:role"] || "viewer",
      mfa_enabled: payload["custom:mfa"] === "true",
      last_login: new Date().toISOString(),
    };
  } catch {
    return null;
  }
}

/**
 * Checks if the current user has the required role.
 */
export function hasRole(user: AuthUser | null, required: AuthUser["role"]): boolean {
  if (!user) return false;
  const hierarchy = { admin: 3, analyst: 2, viewer: 1 };
  return hierarchy[user.role] >= hierarchy[required];
}
