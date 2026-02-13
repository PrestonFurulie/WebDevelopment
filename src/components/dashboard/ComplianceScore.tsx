"use client";

import Card, { CardHeader, CardTitle, CardContent } from "../ui/Card";
import Badge from "../ui/Badge";

interface FrameworkScore {
  name: string;
  score: number;
  controls_passed: number;
  controls_total: number;
}

const frameworks: FrameworkScore[] = [
  { name: "NIST 800-53 r5", score: 87, controls_passed: 174, controls_total: 200 },
  { name: "CIS Controls v8", score: 92, controls_passed: 166, controls_total: 180 },
  { name: "PCI-DSS 4.0", score: 78, controls_passed: 195, controls_total: 250 },
  { name: "ISO 27001:2022", score: 84, controls_passed: 109, controls_total: 130 },
  { name: "SOC 2 Type II", score: 91, controls_passed: 55, controls_total: 60 },
  { name: "FedRAMP High", score: 72, controls_passed: 252, controls_total: 350 },
];

function ScoreRing({ score }: { score: number }) {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;
  const color =
    score >= 90 ? "#10B981" : score >= 75 ? "#00FFFF" : score >= 60 ? "#FBBF24" : "#EF4444";

  return (
    <svg width="88" height="88" className="transform -rotate-90">
      <circle cx="44" cy="44" r={radius} fill="none" stroke="#1A1A3E" strokeWidth="6" />
      <circle
        cx="44"
        cy="44"
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth="6"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        className="transition-all duration-1000 ease-out"
      />
      <text
        x="44"
        y="44"
        textAnchor="middle"
        dominantBaseline="central"
        className="fill-white text-lg font-bold"
        transform="rotate(90, 44, 44)"
      >
        {score}%
      </text>
    </svg>
  );
}

export default function ComplianceScore() {
  return (
    <Card className="col-span-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Compliance Posture</CardTitle>
          <Badge variant="green" pulse>Live</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {frameworks.map((fw) => (
            <div key={fw.name} className="flex flex-col items-center gap-2">
              <ScoreRing score={fw.score} />
              <span className="text-xs font-medium text-[#B0B0D0] text-center">{fw.name}</span>
              <span className="text-xs text-[#555577]">
                {fw.controls_passed}/{fw.controls_total} controls
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
