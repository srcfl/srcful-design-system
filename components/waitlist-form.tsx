"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, Loader2 } from "lucide-react";

interface WaitlistFormProps {
  /** Form ID for Formspark */
  formId?: string;
  /** Title shown above the form */
  title?: string;
  /** Description shown below the title */
  description?: string;
  /** What feature this waitlist is for (sent with submission) */
  feature: string;
  /** Success message after submission */
  successMessage?: string;
  /** Button text */
  buttonText?: string;
  /** Additional className */
  className?: string;
}

export function WaitlistForm({
  formId = "6ZFZTUMW1",
  title,
  description,
  feature,
  successMessage = "You're on the list! We'll be in touch soon.",
  buttonText = "Join Waitlist",
  className = "",
}: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch(`https://submit-form.com/${formId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email,
          name: name || undefined,
          feature,
          type: "waitlist",
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      setIsSuccess(true);
      setEmail("");
      setName("");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className={`text-center py-6 ${className}`}>
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="h-6 w-6 text-primary" />
        </div>
        <p className="text-foreground font-medium">{successMessage}</p>
      </div>
    );
  }

  return (
    <div className={className}>
      {title && (
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
      )}
      {description && (
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
      )}
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="space-y-2">
          <Label htmlFor={`waitlist-email-${feature}`} className="sr-only">
            Email
          </Label>
          <Input
            id={`waitlist-email-${feature}`}
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isSubmitting}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor={`waitlist-name-${feature}`} className="sr-only">
            Name (optional)
          </Label>
          <Input
            id={`waitlist-name-${feature}`}
            type="text"
            placeholder="Your name (optional)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={isSubmitting}
          />
        </div>
        {error && (
          <p className="text-sm text-destructive">{error}</p>
        )}
        <Button
          type="submit"
          className="w-full"
          disabled={isSubmitting || !email}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Joining...
            </>
          ) : (
            buttonText
          )}
        </Button>
      </form>
    </div>
  );
}

// Inline variant for simpler layouts
export function WaitlistFormInline({
  formId = "6ZFZTUMW1",
  feature,
  placeholder = "Enter your email",
  buttonText = "Join Waitlist",
  className = "",
}: {
  formId?: string;
  feature: string;
  placeholder?: string;
  buttonText?: string;
  className?: string;
}) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch(`https://submit-form.com/${formId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email,
          feature,
          type: "waitlist",
          timestamp: new Date().toISOString(),
        }),
      });
      setIsSuccess(true);
    } catch {
      // Silent fail for inline form
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className={`flex items-center gap-2 text-primary ${className}`}>
        <CheckCircle className="h-4 w-4" />
        <span className="text-sm font-medium">You&apos;re on the list!</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex gap-2 ${className}`}>
      <Input
        type="email"
        placeholder={placeholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        disabled={isSubmitting}
        className="flex-1"
      />
      <Button type="submit" disabled={isSubmitting || !email}>
        {isSubmitting ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          buttonText
        )}
      </Button>
    </form>
  );
}
