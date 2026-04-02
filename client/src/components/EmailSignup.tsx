import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

/**
 * Email Signup Component
 * Captures email addresses for newsletter and course announcements
 * Displays success state after submission
 */
export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    
    // Simulate API call - in production, connect to your email service
    setTimeout(() => {
      setIsSubmitted(true);
      setEmail("");
      setIsLoading(false);
      toast.success("Thank you for subscribing! Check your email for confirmation.");
      
      // Reset after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 500);
  };

  if (isSubmitted) {
    return (
      <div className="flex items-center gap-3 text-accent">
        <CheckCircle2 className="w-5 h-5" />
        <span className="font-body text-sm">Subscription confirmed!</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary-foreground pointer-events-none" />
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
            className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg font-body text-sm placeholder:text-secondary-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/50 disabled:opacity-50 transition-smooth"
          />
        </div>
        <Button
          type="submit"
          disabled={isLoading}
          className="bg-accent hover:bg-accent/90 text-white font-body text-sm px-6 disabled:opacity-50 transition-smooth"
        >
          {isLoading ? "Subscribing..." : "Subscribe"}
        </Button>
      </div>
      <p className="font-body text-xs text-secondary-foreground mt-2">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </form>
  );
}
