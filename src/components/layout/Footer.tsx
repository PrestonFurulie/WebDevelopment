export default function Footer() {
  return (
    <footer className="border-t border-[#2A2A4A] bg-[#0D0D1A] py-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
              FLLC
            </h3>
            <p className="mt-2 text-sm text-[#8888AA]">
              Enterprise Intelligence Framework. Scalable cloud security platform
              built on AWS with Zero Trust architecture.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-[#B0B0D0] mb-3">Platform</h4>
            <ul className="space-y-2 text-sm text-[#8888AA]">
              <li><a href="/dashboard" className="hover:text-cyan-400 transition-colors">Dashboard</a></li>
              <li><a href="/recon" className="hover:text-cyan-400 transition-colors">Recon</a></li>
              <li><a href="/compliance" className="hover:text-cyan-400 transition-colors">Compliance</a></li>
              <li><a href="/threats" className="hover:text-cyan-400 transition-colors">Threat Intel</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-[#B0B0D0] mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-[#8888AA]">
              <li><a href="https://fllc.net" className="hover:text-cyan-400 transition-colors">fllc.net</a></li>
              <li><a href="mailto:preston@fllc.net" className="hover:text-cyan-400 transition-colors">preston@fllc.net</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-[#2A2A4A] text-center text-xs text-[#8888AA]">
          &copy; {new Date().getFullYear()} FLLC. All rights reserved. FU PERSON by PERSON FU.
        </div>
      </div>
    </footer>
  );
}
