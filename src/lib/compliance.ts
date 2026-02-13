/**
 * FLLC Compliance Scoring Engine
 * Calculates compliance posture across multiple frameworks.
 * FLLC 2026
 */

export type ControlStatus = "pass" | "fail" | "partial" | "not_applicable";

export interface Control {
  id: string;
  framework: string;
  title: string;
  status: ControlStatus;
  severity: "critical" | "high" | "medium" | "low";
  last_assessed: string;
  evidence?: string;
}

export interface FrameworkScore {
  framework: string;
  total_controls: number;
  passed: number;
  failed: number;
  partial: number;
  not_applicable: number;
  score: number; // percentage
  grade: string;
}

/**
 * Calculate compliance score for a set of controls.
 * Partial controls count as 0.5 pass. N/A controls are excluded.
 */
export function calculateScore(controls: Control[]): number {
  const applicable = controls.filter((c) => c.status !== "not_applicable");
  if (applicable.length === 0) return 100;

  const passed = applicable.filter((c) => c.status === "pass").length;
  const partial = applicable.filter((c) => c.status === "partial").length;
  const effective = passed + partial * 0.5;

  return Math.round((effective / applicable.length) * 100);
}

/**
 * Convert a numeric score to a letter grade.
 */
export function scoreToGrade(score: number): string {
  if (score >= 95) return "A+";
  if (score >= 90) return "A";
  if (score >= 85) return "A-";
  if (score >= 80) return "B+";
  if (score >= 75) return "B";
  if (score >= 70) return "B-";
  if (score >= 65) return "C+";
  if (score >= 60) return "C";
  if (score >= 55) return "C-";
  if (score >= 50) return "D";
  return "F";
}

/**
 * Generate a framework score summary.
 */
export function generateFrameworkScore(
  framework: string,
  controls: Control[]
): FrameworkScore {
  const fwControls = controls.filter((c) => c.framework === framework);
  const score = calculateScore(fwControls);

  return {
    framework,
    total_controls: fwControls.length,
    passed: fwControls.filter((c) => c.status === "pass").length,
    failed: fwControls.filter((c) => c.status === "fail").length,
    partial: fwControls.filter((c) => c.status === "partial").length,
    not_applicable: fwControls.filter((c) => c.status === "not_applicable").length,
    score,
    grade: scoreToGrade(score),
  };
}

/**
 * Identify critical gaps — failed controls with critical/high severity.
 */
export function identifyCriticalGaps(controls: Control[]): Control[] {
  return controls
    .filter(
      (c) =>
        c.status === "fail" &&
        (c.severity === "critical" || c.severity === "high")
    )
    .sort((a, b) => {
      const sevOrder = { critical: 0, high: 1, medium: 2, low: 3 };
      return sevOrder[a.severity] - sevOrder[b.severity];
    });
}

/**
 * Supported compliance frameworks.
 */
export const FRAMEWORKS = [
  "NIST 800-53 r5",
  "CIS Controls v8",
  "PCI-DSS 4.0",
  "ISO 27001:2022",
  "SOC 2 Type II",
  "FedRAMP High",
  "HIPAA Security Rule",
] as const;
