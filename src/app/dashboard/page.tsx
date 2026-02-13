import ComplianceScore from "../../components/dashboard/ComplianceScore";
import ThreatFeed from "../../components/dashboard/ThreatFeed";
import AIDetectionStatus from "../../components/dashboard/AIDetectionStatus";
import Badge from "../../components/ui/Badge";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#0A0A1B] p-6 lg:p-10">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">
            <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
              FLLC
            </span>{" "}
            Command Center
          </h1>
          <p className="mt-1 text-sm text-[#8888AA]">
            Enterprise Intelligence Framework — Real-time Security Posture
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Badge variant="green" pulse>
            Systems Operational
          </Badge>
          <Badge variant="violet">v1.777</Badge>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="mb-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total Assets", value: "2,847", change: "+12", color: "text-cyan-400" },
          { label: "Active Threats", value: "5", change: "-3", color: "text-red-400" },
          { label: "Compliance Score", value: "84%", change: "+2%", color: "text-emerald-400" },
          { label: "AI Detections (24h)", value: "487", change: "+89", color: "text-fuchsia-400" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-[#1A1A3E] bg-[#12122A] p-4"
          >
            <p className="text-xs font-medium uppercase tracking-wider text-[#555577]">
              {stat.label}
            </p>
            <p className={`mt-1 text-2xl font-bold ${stat.color}`}>{stat.value}</p>
            <p className="mt-1 text-xs text-[#8888AA]">{stat.change} from yesterday</p>
          </div>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Compliance spans full width */}
        <ComplianceScore />

        {/* Threat Feed */}
        <ThreatFeed />

        {/* AI Detection */}
        <AIDetectionStatus />
      </div>

      {/* Footer */}
      <div className="mt-10 border-t border-[#1A1A3E] pt-4 text-center text-xs text-[#333355]">
        FLLC 2026 — FU PERSON by PERSON FU — Enterprise Intelligence Framework
      </div>
    </main>
  );
}
