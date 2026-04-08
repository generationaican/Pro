import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Users, Zap, Award } from "lucide-react";
import { Link } from "wouter";

/**
 * Design Philosophy: Modern Minimalist with Vibrant Accents
 * - Clean, spacious layouts with gradient accents
 * - Typography-driven hierarchy with generous whitespace
 * - Functional elegance with intentional visual elements
 * - Subtle motion and micro-interactions
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-smooth">
            <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663428298497/hycxSK4sbHuUdaoZvUzyDq/generation-ai-logo_e87ef3c9.webp" alt="Generation AI" className="h-10 w-auto" />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/course" className="text-sm font-body hover:text-accent transition-smooth">
              Course
            </Link>
            <Link href="/about" className="text-sm font-body hover:text-accent transition-smooth">
              About Us
            </Link>
            <a href="#contact" className="text-sm font-body hover:text-accent transition-smooth">
              Contact
            </a>
          </div>
          <Button className="bg-accent hover:bg-accent/90 text-white font-body">
            Get Started
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/30 py-20 md:py-32">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-display font-bold text-5xl md:text-6xl leading-tight">
                Master AI for <span className="gradient-text">Professional Growth</span>
              </h1>
              <p className="font-body text-lg text-secondary-foreground leading-relaxed">
                Elevate your career with practical AI expertise. Learn from industry professionals how to leverage artificial intelligence to drive innovation and productivity in your organization.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="gradient-primary text-white hover:opacity-90 transition-smooth font-body px-8 py-6 text-base h-auto">
                Explore Our Course
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="border-border font-body px-8 py-6 text-base h-auto">
                Schedule a Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent/60 border-2 border-background flex items-center justify-center text-white text-sm font-bold"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <p className="font-body text-sm text-secondary-foreground">
                <strong>500+</strong> professionals trained
              </p>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="absolute inset-0 gradient-primary opacity-10 rounded-2xl blur-3xl"></div>
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663428298497/hycxSK4sbHuUdaoZvUzyDq/hero-ai-professional-e9YXgpLGuGcNuDfhnhSqCP.webp"
              alt="Professional AI learning"
              className="relative rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Course Section */}
      <section id="course" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl">
              Our Flagship Course
            </h2>
            <p className="font-body text-lg text-secondary-foreground max-w-2xl mx-auto">
              Comprehensive AI mastery designed for working professionals
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Course Card */}
            <div className="lg:col-span-2 bg-gradient-to-br from-background to-secondary/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-smooth border border-border">
              <div className="relative h-80 overflow-hidden">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663428298497/hycxSK4sbHuUdaoZvUzyDq/course-hero-visual-idYSZu7bj4aw7MDH9wTtCz.webp"
                  alt="AI Fundamentals for Professionals"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <div className="p-8 space-y-6">
                <div className="space-y-3">
                  <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-body font-semibold">
                    Professional Development
                  </div>
                  <h3 className="font-display font-bold text-3xl">
                    AI for Professional Excellence
                  </h3>
                  <p className="font-body text-secondary-foreground text-lg">
                    Develop AI judgment, not AI dependency. Learn to select appropriate AI tools, verify results, and apply AI safely with practical guardrails for privacy and risk.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 py-6 border-y border-border">
                  <div className="space-y-2">
                    <p className="font-body text-sm text-secondary-foreground">Duration</p>
                    <p className="font-display font-bold text-lg">20 Hours</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-body text-sm text-secondary-foreground">Format</p>
                    <p className="font-display font-bold text-lg">10 × 2-hour Lessons</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-body text-sm text-secondary-foreground">Level</p>
                    <p className="font-display font-bold text-lg">Beginner to Professional</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-body text-sm text-secondary-foreground">Prerequisites</p>
                    <p className="font-display font-bold text-lg">None - No Coding</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-display font-bold text-lg">What You'll Learn</h4>
                  <ul className="space-y-3">
                    {[
                      "How generative AI works and its limitations",
                      "Structured AI prompting framework and techniques",
                      "AI-assisted professional writing and communication",
                      "Converting unstructured data into structured outputs",
                      "Privacy, bias, and responsible AI practices",
                      "AI with spreadsheets: data cleaning and formulas",
                      "Document summarization and research briefs",
                      "Responsible visual outputs and presentations",
                      "Using AI for high-stakes documents and contracts",
                      "Verification and quality assurance across tasks",
                      "Building your personal AI verification checklist"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 font-body">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href="/course" className="block">
                  <Button className="w-full gradient-primary text-white hover:opacity-90 transition-smooth font-body py-6 text-base h-auto">
                    View Full Course Details
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Sidebar Stats */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 border border-border shadow-lg">
                <h4 className="font-display font-bold text-lg mb-6">Why Choose Us</h4>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <Zap className="w-6 h-6 text-accent flex-shrink-0" />
                    <div>
                      <p className="font-display font-semibold text-sm">Expert Instructors</p>
                      <p className="font-body text-xs text-secondary-foreground mt-1">
                        Industry professionals with 20+ years experience
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Users className="w-6 h-6 text-accent flex-shrink-0" />
                    <div>
                      <p className="font-display font-semibold text-sm">Peer Learning</p>
                      <p className="font-body text-xs text-secondary-foreground mt-1">
                        Collaborate with professionals from your industry
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Award className="w-6 h-6 text-accent flex-shrink-0" />
                    <div>
                      <p className="font-display font-semibold text-sm">Certification</p>
                      <p className="font-body text-xs text-secondary-foreground mt-1">
                        Industry-recognized credential upon completion
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-8 border border-accent/20">
                <p className="font-body text-sm text-secondary-foreground mb-4">
                  Next cohort starts
                </p>
                <p className="font-display font-bold text-2xl mb-6">May 15, 2026</p>
                <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent/10 font-body">
                  Reserve Your Spot
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-background to-secondary/30">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Professionals Trained" },
              { number: "95%", label: "Completion Rate" },
              { number: "4.9/5", label: "Average Rating" },
              { number: "20+", label: "Years Combined Experience" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center space-y-2">
                <p className="font-display font-bold text-4xl gradient-text">
                  {stat.number}
                </p>
                <p className="font-body text-secondary-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 md:py-32 bg-white">
        <div className="container max-w-2xl text-center space-y-8">
          <div className="space-y-4">
            <h2 className="font-display font-bold text-4xl md:text-5xl">
              Ready to Transform Your Career?
            </h2>
            <p className="font-body text-lg text-secondary-foreground">
              Join the next cohort and master AI skills that matter. Limited spots available.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="gradient-primary text-white hover:opacity-90 transition-smooth font-body px-8 py-6 text-base h-auto">
              Enroll Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" className="border-border font-body px-8 py-6 text-base h-auto">
              Contact Us
            </Button>
          </div>

          <p className="font-body text-sm text-secondary-foreground">
            Questions? Call us at <strong>+1 236 427 2510</strong> or email <strong>admissions@generationai.com</strong>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
<div className="flex items-center gap-2">
  <img 
    src="/logo.png" 
    alt="Generation AI" 
    className="h-8 w-auto"
  />
</div>
              <p className="font-body text-sm text-secondary-foreground">
                Professional AI education for the modern workforce.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-display font-bold">Company</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="font-body text-sm text-secondary-foreground hover:text-foreground transition-smooth">About Us</Link></li>
                <li><a href="#" className="font-body text-sm text-secondary-foreground hover:text-foreground transition-smooth">Blog</a></li>
                <li><a href="#" className="font-body text-sm text-secondary-foreground hover:text-foreground transition-smooth">Careers</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-display font-bold">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="font-body text-sm text-secondary-foreground hover:text-foreground transition-smooth">Course Details</a></li>
                <li><a href="#" className="font-body text-sm text-secondary-foreground hover:text-foreground transition-smooth">FAQ</a></li>
                <li><a href="#" className="font-body text-sm text-secondary-foreground hover:text-foreground transition-smooth">Contact</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-display font-bold">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="font-body text-sm text-secondary-foreground hover:text-foreground transition-smooth">Privacy Policy</a></li>
                <li><a href="#" className="font-body text-sm text-secondary-foreground hover:text-foreground transition-smooth">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-sm text-secondary-foreground">
              &copy; 2026 Generation AI Inc. All rights reserved.
            </p>
            <p className="font-body text-sm text-secondary-foreground">
              Locations: Surrey, New Westminster & UBC
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
