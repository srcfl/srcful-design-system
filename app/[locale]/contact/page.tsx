"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/src/i18n/routing";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MarketingNav } from "@/components/marketing-nav";
import { MarketingFooter } from "@/components/marketing-footer";
import { ContactForm } from "@/components/contact-form";
import { FadeIn } from "@/components/animations";
import { Mail, MessageSquare, MapPin, Building2 } from "lucide-react";

export default function ContactPage() {
  const t = useTranslations("contact");
  const tCommon = useTranslations("common");

  const contacts = [
    {
      icon: Building2,
      title: "Partnerships",
      description: "For utilities, OEMs, and installer partnerships",
      email: "partners@sourceful.energy",
    },
    {
      icon: Mail,
      title: "Investors",
      description: "For investment inquiries",
      email: "invest@sourceful.energy",
    },
    {
      icon: MessageSquare,
      title: "Support",
      description: "Technical help and troubleshooting",
      email: "support@sourceful.energy",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <MarketingNav />

      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="relative overflow-hidden border-b">
          <div className="absolute inset-0 bg-dot-pattern" />
          <div className="relative max-w-7xl mx-auto py-24 md:py-32 px-4 md:px-8">
            <FadeIn className="max-w-3xl">
              <Badge variant="secondary" className="mb-6">
                <Mail className="h-3 w-3 mr-1" />
                {tCommon("nav.contact")}
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-left">
                {t("title")}
              </h1>
              <p className="text-xl text-muted-foreground text-left">
                {t("description")}
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Contact Options */}
        <section className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm
                title="Send us a message"
                description="Fill out the form and we'll get back to you within 24 hours."
                subject="Website Contact"
              />
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-6">Direct contacts</h2>
                <div className="space-y-4">
                  {contacts.map((contact) => {
                    const Icon = contact.icon;
                    return (
                      <Card key={contact.title}>
                        <CardHeader className="pb-2">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                              <Icon className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <CardTitle className="text-lg">{contact.title}</CardTitle>
                              <CardDescription>{contact.description}</CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <a
                            href={`mailto:${contact.email}`}
                            className="text-primary hover:underline font-medium"
                          >
                            {contact.email}
                          </a>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>

              {/* Location */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Location</CardTitle>
                      <CardDescription>Our headquarters</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-medium">Kalmar, Sweden</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Reg. 559382-0458
                  </p>
                </CardContent>
              </Card>

              {/* Community */}
              <Card className="bg-muted/50">
                <CardHeader>
                  <CardTitle className="text-lg">Join the community</CardTitle>
                  <CardDescription>
                    Connect with other developers and energy enthusiasts
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex gap-4">
                  <a
                    href="https://discord.gg/srcful"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium"
                  >
                    Discord
                  </a>
                  <a
                    href="https://github.com/srcfl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium"
                  >
                    GitHub
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
}
