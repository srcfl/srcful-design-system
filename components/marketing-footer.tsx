import Link from "next/link";

export function MarketingFooter() {
  return (
    <footer className="border-t py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/platform" className="hover:text-foreground">Platform</Link></li>
              <li><Link href="/zap" className="hover:text-foreground">The Zap</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Developers</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="https://developer.sourceful.energy" className="hover:text-foreground">Dev Portal</a></li>
              <li><a href="https://design.sourceful.energy" className="hover:text-foreground">Design System</a></li>
              <li><a href="https://discord.gg/srcful" className="hover:text-foreground">Discord</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Use Cases</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/use-cases/homeowners" className="hover:text-foreground">Homeowners</Link></li>
              <li><Link href="/use-cases/utilities" className="hover:text-foreground">Utilities</Link></li>
              <li><Link href="/use-cases/oems" className="hover:text-foreground">OEMs</Link></li>
              <li><Link href="/use-cases/installers" className="hover:text-foreground">Installers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-foreground">About</Link></li>
              <li><Link href="/company" className="hover:text-foreground">Company</Link></li>
              <li><Link href="/community" className="hover:text-foreground">Community</Link></li>
              <li><Link href="/contact" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sourceful Energy. Building the local energy coordination layer.
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/srcfl" className="text-sm text-muted-foreground hover:text-foreground">
              GitHub
            </a>
            <a href="https://twitter.com/srcful" className="text-sm text-muted-foreground hover:text-foreground">
              Twitter
            </a>
            <a href="https://linkedin.com/company/sourceful-energy" className="text-sm text-muted-foreground hover:text-foreground">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
