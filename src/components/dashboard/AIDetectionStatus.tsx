"use client";

import Card, { CardHeader, CardTitle, CardContent } from "../ui/Card";
import Badge from "../ui/Badge";

interface AIEngine {
  name: string;
  status: "active" | "degraded" | "offline";
  model_version: string;
  last_detection: string;
  detections_24h: number;
  false_positive_rate: number;
}

const engines: AIEngine[] = [
  {
    name: "Behavioral Analysis",
    status: "active",
    model_version: "v4.2.1",
    last_detection: "2 min ago",
    detections_24h: 147,
    false_positive_rate: 0.3,
  },
  {
    name: "Anomaly Detection",
    status: "active",
    model_version: "v3.8.0",
    last_detection: "8 min ago",
    detections_24h: 89,
    false_positive_rate: 1.2,
  },
  {
    name: "LLM Log Analysis",
    status: "active",
    model_version: "v2.1.0",
    last_detection: "15 min ago",
    detections_24h: 34,
    false_positive_rate: 2.8,
  },
  {
    name: "Network Traffic ML",
    status: "degraded",
    model_version: "v5.0.3",
    last_detection: "1 hr ago",
    detections_24h: 212,
    false_positive_rate: 0.8,
  },
  {
    name: "PQ Crypto Monitor",
    status: "active",
    model_version: "v1.0.0",
    last_detection: "3 hr ago",
    detections_24h: 5,
    false_positive_rate: 0.0,
  },
];

const statusConfig = {
  active: { badge: "green" as const, label: "ACTIVE" },
  degraded: { badge: "yellow" as const, label: "DEGRADED" },
  offline: { badge: "red" as const, label: "OFFLINE" },
};

export default function AIDetectionStatus() {
  const activeCount = engines.filter((e) => e.status === "active").length;

  return (
    <Card glowColor="violet">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>AI Defense Engines</CardTitle>
          <Badge variant="cyan">
            {activeCount}/{engines.length} Online
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {engines.map((engine) => {
            const cfg = statusConfig[engine.status];
            return (
              <div
                key={engine.name}
                className="flex items-center justify-between rounded-lg border border-[#1A1A3E]/50 bg-[#0D0D2B]/30 p-3"
              >
                <div className="flex items-center gap-3">
                  <Badge variant={cfg.badge} pulse={engine.status === "active"} size="sm">
                    {cfg.label}
                  </Badge>
                  <div>
                    <p className="text-sm font-medium text-[#B0B0D0]">{engine.name}</p>
                    <p className="text-xs text-[#555577]">
                      {engine.model_version} | Last: {engine.last_detection}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-mono text-cyan-400">{engine.detections_24h}</p>
                  <p className="text-xs text-[#555577]">
                    FP: {engine.false_positive_rate}%
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
