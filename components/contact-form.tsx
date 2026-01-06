"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, CheckCircle } from "lucide-react";

interface ContactFormProps {
  title?: string;
  description?: string;
  subject?: string;
}

export function ContactForm({
  title = "Get in Touch",
  description = "Have questions? We'd love to hear from you.",
  subject = "Website Contact"
}: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch("https://submit-form.com/6ZFZTUMW1", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          company: formData.get("company"),
          message: formData.get("message"),
          subject: subject,
        }),
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
          <p className="text-muted-foreground">
            Thanks for reaching out. We'll get back to you soon.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Company (optional)</Label>
            <Input
              id="company"
              name="company"
              placeholder="Your company"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="How can we help?"
              rows={4}
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={submitting}>
            {submitting ? (
              "Sending..."
            ) : (
              <>
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
