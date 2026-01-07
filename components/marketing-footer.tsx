"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/src/i18n/routing";

export function MarketingFooter() {
  const t = useTranslations("common.footer");
  const tNav = useTranslations("common.nav");

  return (
    <footer className="border-t py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8">
          <div>
            <h4 className="font-semibold mb-4">{t("product")}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/platform" className="hover:text-foreground">{t("platform")}</Link></li>
              <li><Link href="/zap" className="hover:text-foreground">{t("zap")}</Link></li>
              <li><Link href="/integrations" className="hover:text-foreground">{t("integrations")}</Link></li>
              <li><Link href="/v2x" className="hover:text-foreground">V2X</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t("tools")}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/tools" className="hover:text-foreground">{t("allTools")}</Link></li>
              <li><Link href="/tools/savings-calculator" className="hover:text-foreground">{t("savingsCalculator")}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{tNav("developers")}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="https://developer.sourceful.energy" className="hover:text-foreground">{t("docs")}</a></li>
              <li><a href="https://design.sourceful.energy" className="hover:text-foreground">Design System</a></li>
              <li><a href="https://discord.gg/srcful" className="hover:text-foreground">{t("discord")}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{tNav("useCases")}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/use-cases/homeowners" className="hover:text-foreground">{tNav("homeowners")}</Link></li>
              <li><Link href="/use-cases/utilities" className="hover:text-foreground">{tNav("utilities")}</Link></li>
              <li><Link href="/use-cases/oems" className="hover:text-foreground">{tNav("oems")}</Link></li>
              <li><Link href="/use-cases/installers" className="hover:text-foreground">{tNav("installers")}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t("company")}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-foreground">{t("about")}</Link></li>
              <li><Link href="/company" className="hover:text-foreground">Company</Link></li>
              <li><Link href="/community" className="hover:text-foreground">{t("community")}</Link></li>
              <li><Link href="/contact" className="hover:text-foreground">{t("contact")}</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {t("copyright")}
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

        {/* Disclaimer */}
        <div className="border-t mt-8 pt-6">
          <p className="text-xs text-muted-foreground/70 text-center max-w-4xl mx-auto">
            {t("disclaimer")}
          </p>
        </div>
      </div>
    </footer>
  );
}
