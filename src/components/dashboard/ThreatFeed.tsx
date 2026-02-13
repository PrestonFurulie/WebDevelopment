"use client";

import Card, { CardHeader, CardTitle, CardContent } from "../ui/Card";
import Badge from "../ui/Badge";

interface ThreatEvent {
  id: string;
  timestamp: string;
  severity: "critical" | "high" | "medium" | "low";
  source: string;
  description: string;
  mitre_id: string;
}

const mockThreats: ThreatEvent[] = [
  {
    id: "THR-001",
    timestamp: "2026-02-13 09:42:11",
    severity: "critical",
    source: "EDR-Falcon",
    description: "Polymorphic payload detected — AI signature evasion attempt",
    mitre_id: "T1027.013",
  },
  {
    id: "THR-002",
    timestamp: "2026-02-13 09:38:55",
    severity: "high",
    source: "SIEM-Elastic",
    description: "LLM prompt injection attempt on SOC chatbot",
    mitre_id: "T1059.001",
  },
  {
    id: "THR-003",
    timestamp: "2026-02-13 09:35:22",
    severity: "high",
    source: "WAF-Cloudflare",
    description: "SQL injection via AI-generated payload mutation",
    mitre_id: "T1190",
  },
  {
    id: "THR-004",
    timestamp: "2026-02-13 09:31:08",
    severity: "medium",
    source: "IDS-Suricata",
    description: "Suspicious DNS exfiltration — entropy anomaly",
    mitre_id: "T1048.003",
  },
  {
    id: "THR-005",
    timestamp: "2026-02-13 09:27:44",
    severity: "low",
    source: "Auth-Okta",
    description: "MFA bypass attempt — session token replay",
    mitre_id: "T1550.004",
  },
];

const severityBadge = {
  critical: "red" as const,
  high: "fuchsia" as const,
  medium: "yellow" as const,
  low: "cyan" as const,
};

export default function ThreatFeed() {
  return (
    <Card glowColor="fuchsia">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Threat Intelligence Feed</CardTitle>
          <Badge variant="red" pulse>5 Active</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {mockThreats.map((threat) => (
            <div
              key={threat.id}
              className="flex items-start gap-3 rounded-lg border border-[#1A1A3E]/50 bg-[#0D0D2B]/30 p-3 transition-colors hover:border-fuchsia-500/20"
            >
              <Badge variant={severityBadge[threat.severity]} size="sm">
                {threat.severity.toUpperCase()}
              </Badge>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-[#B0B0D0] truncate">{threat.description}</p>
                <div className="mt-1 flex items-center gap-3 text-xs text-[#555577]">
                  <span>{threat.timestamp}</span>
                  <span>{threat.source}</span>
                  <span className="font-mono text-fuchsia-400/60">{threat.mitre_id}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
