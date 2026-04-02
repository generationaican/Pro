import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Mail, CheckCircle2 } from "lucide-react";

/**
 * Design Philosophy: Modern Minimalist with Vibrant Accents
 * Professional contact form for lead generation with validation and feedback
 */

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  inquiry: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    inquiry: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      inquiry: value
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      toast.error("Please enter your name");
      return false;
    }
    if (!formData.email.trim()) {
      toast.error("Please enter your email");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return false;
    }
    if (!formData.inquiry) {
      toast.error("Please select an inquiry type");
      return false;
    }
    if (!formData.message.trim()) {
      toast.error("Please enter your message");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call - in production, this would send to your backend
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Show success message
      toast.success("Thank you! We've received your inquiry and will be in touch soon.");
      setIsSubmitted(true);

      // Reset form after 2 seconds
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          inquiry: "",
          message: ""
        });
        setIsSubmitted(false);
      }, 2000);
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl p-12 border border-border shadow-lg flex flex-col items-center justify-center text-center space-y-6">
        <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8 text-white" />
        </div>
        <div className="space-y-2">
          <h3 className="font-display font-bold text-2xl">Thank You!</h3>
          <p className="font-body text-secondary-foreground">
            We've received your inquiry and will get back to you within 24 hours.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-8 md:p-12 border border-border shadow-lg">
      <div className="space-y-2 mb-8">
        <div className="flex items-center gap-3">
          <Mail className="w-6 h-6 text-accent" />
          <h3 className="font-display font-bold text-2xl">Get in Touch</h3>
        </div>
        <p className="font-body text-secondary-foreground">
          Have questions about our course or services? Fill out the form below and we'll be in touch shortly.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name and Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="font-body font-semibold text-sm text-foreground">
              Full Name *
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              className="font-body"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="font-body font-semibold text-sm text-foreground">
              Email Address *
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              className="font-body"
            />
          </div>
        </div>

        {/* Phone and Company Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="phone" className="font-body font-semibold text-sm text-foreground">
              Phone Number
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+1 (236) 427-2510"
              value={formData.phone}
              onChange={handleChange}
              className="font-body"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="company" className="font-body font-semibold text-sm text-foreground">
              Company
            </label>
            <Input
              id="company"
              name="company"
              type="text"
              placeholder="Your Company Name"
              value={formData.company}
              onChange={handleChange}
              className="font-body"
            />
          </div>
        </div>

        {/* Inquiry Type */}
        <div className="space-y-2">
          <label htmlFor="inquiry" className="font-body font-semibold text-sm text-foreground">
            Inquiry Type *
          </label>
          <Select value={formData.inquiry} onValueChange={handleSelectChange}>
            <SelectTrigger className="font-body">
              <SelectValue placeholder="Select an inquiry type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="course">Course Information</SelectItem>
              <SelectItem value="enrollment">Enrollment & Registration</SelectItem>
              <SelectItem value="corporate">Corporate Training</SelectItem>
              <SelectItem value="partnership">Partnership Opportunities</SelectItem>
              <SelectItem value="other">Other Inquiry</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label htmlFor="message" className="font-body font-semibold text-sm text-foreground">
            Message *
          </label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell us more about your inquiry..."
            value={formData.message}
            onChange={handleChange}
            className="font-body min-h-32 resize-none"
          />
        </div>

        {/* Privacy Notice */}
        <p className="font-body text-xs text-secondary-foreground">
          By submitting this form, you agree to our Privacy Policy and consent to being contacted about your inquiry.
        </p>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full gradient-primary text-white hover:opacity-90 transition-smooth font-body py-6 text-base h-auto disabled:opacity-50"
        >
          {isSubmitting ? "Sending..." : "Send Inquiry"}
        </Button>
      </form>
    </div>
  );
}
