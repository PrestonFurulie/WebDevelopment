<div align="center">

# FLLC — Enterprise Intelligence Framework

```
    ███████╗██╗     ██╗      ██████╗
    ██╔════╝██║     ██║     ██╔════╝
    █████╗  ██║     ██║     ██║
    ██╔══╝  ██║     ██║     ██║
    ██║     ███████╗███████╗╚██████╗
    ╚═╝     ╚══════╝╚══════╝ ╚═════╝
     Enterprise Intelligence Framework
```

[![License](https://img.shields.io/badge/License-Proprietary-FF00FF?style=for-the-badge)](LICENSE.md)
[![Status](https://img.shields.io/badge/Status-Production-00FFFF?style=for-the-badge)]()
[![Security](https://img.shields.io/badge/Security-Hardened-7B2FBE?style=for-the-badge)]()

**Scalable cloud intelligence platform. AWS-native. Zero Trust architecture.**

[fllc.net](https://fllc.net)

</div>

---

## Architecture

```
Client (Next.js 14 + React 18 + TypeScript)
   |
   +-- Tailwind CSS (FLLC midnight neon theme)
   +-- Authentication (AWS Cognito / SSO)
   |
CDN (CloudFront) --> WAF (Web ACL)
   |
API Gateway --> Lambda (Node.js 20)
   |
   +-- DynamoDB (primary store)
   +-- PostgreSQL / RDS (analytics)
   +-- S3 (encrypted object storage)
   +-- ElastiCache (Redis session cache)
   |
Monitoring:
   +-- CloudWatch (metrics + alarms)
   +-- CloudTrail (audit logging)
   +-- GuardDuty (threat detection)
   +-- Inspector (vulnerability scanning)
   +-- Config (compliance rules)
```

## Security Posture

| Layer | Implementation |
|-------|---------------|
| Encryption at Rest | AES-256 via AWS KMS with automatic key rotation |
| Encryption in Transit | TLS 1.3 enforced, HSTS preloaded |
| Identity | AWS Cognito with MFA, RBAC via IAM policies |
| Network | VPC with private subnets, NACLs, Security Groups |
| Application | CSP headers, X-Frame-Options, rate limiting |
| Monitoring | Real-time CloudWatch dashboards, SNS alerting |
| Compliance | SOC 2, NIST 800-53, CIS benchmarks via AWS Config |
| Secrets | AWS Secrets Manager, zero hardcoded credentials |

## Tech Stack

| Component | Technology |
|-----------|-----------|
| Frontend | Next.js 14, React 18, TypeScript, Tailwind CSS |
| Backend | AWS Lambda, API Gateway, Node.js 20 |
| Database | DynamoDB, PostgreSQL (RDS), Redis (ElastiCache) |
| Storage | S3 (encrypted), CloudFront CDN |
| Auth | AWS Cognito, IAM, SSO integration |
| CI/CD | GitHub Actions, Vercel, AWS CodePipeline |
| IaC | Terraform, AWS CDK |
| Monitoring | CloudWatch, CloudTrail, GuardDuty, Inspector |

## Theme

FLLC uses a **midnight neon blacklight galaxy** color system:

```css
:root {
    --bg-primary:    #0D0D1A;  /* Midnight Black       */
    --bg-secondary:  #1A1A2E;  /* Deep Space            */
    --bg-surface:    #16213E;  /* Dark Navy             */
    --accent-cyan:   #00FFFF;  /* Neon Cyan             */
    --accent-fuchsia:#FF00FF;  /* Electric Fuchsia      */
    --accent-uv:     #7B2FBE;  /* Ultraviolet           */
    --accent-green:  #00FF88;  /* Neon Green (success)  */
    --text-primary:  #E0E0FF;  /* Ghost White           */
    --text-muted:    #8888AA;  /* Muted Lavender        */
    --border:        #2A2A4A;  /* Dim Border            */
    --glow-cyan:     0 0 20px rgba(0, 255, 255, 0.3);
    --glow-fuchsia:  0 0 20px rgba(255, 0, 255, 0.3);
}
```

## Project Structure

```
WebDevelopment/
    src/
        app/              Next.js 14 app router
            layout.tsx    Root layout with FLLC theme
            page.tsx      Landing page
            dashboard/    Intelligence dashboard
            api/          API routes
        components/       Reusable UI components
            ui/           Base components (Button, Card, Input)
            layout/       Header, Footer, Sidebar
            dashboard/    Dashboard widgets
        lib/              Utilities and helpers
            auth.ts       Authentication logic
            db.ts         Database connections
            crypto.ts     Encryption utilities
        styles/           Global CSS with neon theme
    public/               Static assets
    infra/                Terraform IaC modules
    CNAME                 fllc.net domain config
    LICENSE.md            Proprietary license
```

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Deploy
vercel deploy --prod
```

## Contact

- **Website:** [fllc.net](https://fllc.net)
- **Email:** preston@fllc.net

---

<div align="center">

**FLLC 2026 — In God We Trust**

</div>
