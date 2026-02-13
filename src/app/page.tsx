export default function Home() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="relative flex flex-col items-center justify-center min-h-screen px-6">
                <div className="text-center max-w-4xl mx-auto">
                    {/* FLLC Logo */}
                    <div className="mb-8 animate-float">
                        <h1 className="text-7xl font-bold tracking-tight">
                            <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-violet-600 bg-clip-text text-transparent">
                                FLLC
                            </span>
                        </h1>
                        <div className="h-1 w-32 mx-auto mt-4 bg-gradient-to-r from-cyan-400 to-fuchsia-500 rounded-full" />
                    </div>

                    <h2 className="text-2xl md:text-3xl font-light text-[#B0B0D0] mb-6">
                        Enterprise Intelligence Framework
                    </h2>

                    <p className="text-lg text-[#8888AA] max-w-2xl mx-auto mb-12">
                        Scalable cloud intelligence platform built on AWS.
                        Zero Trust architecture. Real-time threat detection.
                        Automated compliance. Production hardened.
                    </p>

                    <div className="flex gap-4 justify-center">
                        <a href="/dashboard" className="btn-primary text-lg">
                            Open Dashboard
                        </a>
                        <a href="#capabilities" className="btn-secondary text-lg">
                            Capabilities
                        </a>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-12 animate-bounce">
                    <svg className="w-6 h-6 text-[#6A6A8A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </section>

            {/* Capabilities Grid */}
            <section id="capabilities" className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-4">
                        <span className="text-glow-cyan text-cyan-400">Core</span> Capabilities
                    </h2>
                    <p className="text-[#8888AA] text-center mb-16 max-w-xl mx-auto">
                        Enterprise-grade security operations powered by cloud-native architecture.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {capabilities.map((cap, i) => (
                            <div key={i} className="card group">
                                <div className={`text-3xl mb-4 ${cap.color}`}>{cap.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{cap.title}</h3>
                                <p className="text-[#8888AA] text-sm">{cap.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Architecture Section */}
            <section className="py-24 px-6 bg-[#1A1A2E]/50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        <span className="text-glow-fuchsia text-fuchsia-400">Zero Trust</span> Architecture
                    </h2>
                    <p className="text-[#8888AA] mb-12 max-w-xl mx-auto">
                        Every request authenticated. Every connection encrypted.
                        Every action logged. No implicit trust.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {techStack.map((tech, i) => (
                            <div key={i} className="card text-center py-6">
                                <div className="text-sm font-mono text-cyan-400">{tech.category}</div>
                                <div className="text-lg font-semibold mt-1">{tech.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 border-t border-[#2A2A4A]">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent mb-4">
                        FLLC
                    </div>
                    <p className="text-[#6A6A8A] text-sm">
                        FLLC 2026 — In God We Trust
                    </p>
                    <div className="flex gap-6 justify-center mt-4 text-sm text-[#8888AA]">
                        <a href="mailto:preston@fllc.net" className="hover:text-cyan-400 transition">Contact</a>
                        <a href="https://github.com/Personfu" className="hover:text-cyan-400 transition">GitHub</a>
                    </div>
                </div>
            </footer>
        </main>
    );
}

const capabilities = [
    {
        icon: '🛡️',
        title: 'Threat Intelligence',
        description: 'Real-time threat detection with GuardDuty, automated response, and continuous monitoring across all attack surfaces.',
        color: 'text-cyan-400',
    },
    {
        icon: '🔐',
        title: 'Identity & Access',
        description: 'AWS Cognito with MFA, SSO integration, RBAC policies, and granular IAM controls for every resource.',
        color: 'text-fuchsia-400',
    },
    {
        icon: '📊',
        title: 'Data Analytics',
        description: 'Live dashboards, automated ELT pipelines, and intelligent alerting for security event correlation.',
        color: 'text-violet-400',
    },
    {
        icon: '☁️',
        title: 'Cloud Security',
        description: 'VPC isolation, encrypted storage, WAF protection, and infrastructure as code for repeatable deployments.',
        color: 'text-cyan-400',
    },
    {
        icon: '⚡',
        title: 'Automation',
        description: 'Event-driven Lambda functions, scheduled compliance checks, and automated incident response workflows.',
        color: 'text-fuchsia-400',
    },
    {
        icon: '🔍',
        title: 'OSINT Platform',
        description: 'Multi-source intelligence gathering, people search, domain reconnaissance, and digital footprint analysis.',
        color: 'text-violet-400',
    },
];

const techStack = [
    { category: 'FRONTEND', name: 'Next.js 14' },
    { category: 'LANGUAGE', name: 'TypeScript' },
    { category: 'STYLE', name: 'Tailwind CSS' },
    { category: 'COMPUTE', name: 'Lambda' },
    { category: 'DATABASE', name: 'DynamoDB' },
    { category: 'ANALYTICS', name: 'PostgreSQL' },
    { category: 'AUTH', name: 'Cognito' },
    { category: 'MONITOR', name: 'CloudWatch' },
];
