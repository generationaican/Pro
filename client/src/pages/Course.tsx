import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock, Users, Target, BookOpen, Shield } from "lucide-react";
import { Link } from "wouter";

/**
 * Design Philosophy: Modern Minimalist with Vibrant Accents
 * Comprehensive course details page showcasing curriculum and learning outcomes
 */

export default function Course() {
  const learningOutcomes = [
    {
      number: "CLO1",
      title: "Understand Generative AI Fundamentals",
      description: "Explain how generative AI works (finding patterns in training data to produce probable outputs) and what it does not do (understand meaning, exercise judgment, or recognize its own errors)."
    },
    {
      number: "CLO2",
      title: "Master Structured AI Prompting",
      description: "Write structured AI prompts using a consistent framework (role, goal, specific details, rules/constraints) and adapt this approach across different task types."
    },
    {
      number: "CLO3",
      title: "Improve Professional Writing",
      description: "Improve everyday professional writing (emails, letters, announcements) for clarity, tone, concision, and correctness while maintaining human judgment and voice."
    },
    {
      number: "CLO4",
      title: "Convert Unstructured Data",
      description: "Convert unstructured inputs (meeting notes, photos, voice memos) into accurate, structured outputs by applying the No-New-Facts rule and verifying AI-generated content."
    },
    {
      number: "CLO5",
      title: "Apply Privacy & Responsible Use",
      description: "Apply privacy and responsible-use practices throughout AI-assisted work, including data classification, redaction, bias recognition, and The Four Checks framework."
    },
    {
      number: "CLO6",
      title: "Use AI with Spreadsheets",
      description: "Use AI with spreadsheets (Excel/Google Sheets compatible) to clean data, generate formulas, and produce visualizations, with manual verification of outputs."
    },
    {
      number: "CLO7",
      title: "Summarize & Extract Meaning",
      description: "Summarize and extract meaning (themes, risks, action items) from documents using structured prompts, and critically assess AI-generated summaries for completeness and accuracy."
    },
    {
      number: "CLO8",
      title: "Produce Traceable Research Briefs",
      description: "Use grounded research tools to produce short, traceable briefs that include cited sources, uncertainty notes, and next-step questions."
    },
    {
      number: "CLO9",
      title: "Create Responsible Visual Outputs",
      description: "Produce AI-assisted visual outputs and presentations responsibly, applying awareness of copyright, intellectual property, and cultural/professional appropriation."
    },
    {
      number: "CLO10",
      title: "Use AI as a Second Opinion",
      description: "Use AI as a second opinion for high-stakes text (policies and contract-like documents) by identifying questions, ambiguities, and risks—without relying on AI as an authority."
    },
    {
      number: "CLO11",
      title: "Verify AI Outputs Consistently",
      description: "Verify AI outputs consistently across task types by applying lesson-specific verification checkpoints and a personal verification checklist."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-smooth">
            <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663428298497/hycxSK4sbHuUdaoZvUzyDq/generation-ai-logo_e87ef3c9.webp" alt="Generation AI" className="h-10 w-auto" />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-body hover:text-accent transition-smooth">
              Home
            </Link>
            <a href="#outcomes" className="text-sm font-body hover:text-accent transition-smooth">
              Learning Outcomes
            </a>
            <Link href="/about" className="text-sm font-body hover:text-accent transition-smooth">
              About Us
            </Link>
          </div>
          <Button className="bg-accent hover:bg-accent/90 text-white font-body">
            Enroll Now
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/30 py-20 md:py-32">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-display font-bold text-5xl md:text-6xl leading-tight">
                AI for <span className="gradient-text">Professional Excellence</span>
              </h1>
              <p className="font-body text-lg text-secondary-foreground">
                Master generative AI with judgment and responsibility. Learn to select appropriate tools, verify results, and apply AI safely in your workplace.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-accent" />
                  <span className="font-display font-bold">20 Hours</span>
                </div>
                <p className="font-body text-sm text-secondary-foreground">10 × 2-hour lessons</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-accent" />
                  <span className="font-display font-bold">Beginner</span>
                </div>
                <p className="font-body text-sm text-secondary-foreground">No coding required</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-accent" />
                  <span className="font-display font-bold">Live Classes</span>
                </div>
                <p className="font-body text-sm text-secondary-foreground">Expert instructors</p>
              </div>
            </div>

            <Button className="gradient-primary text-white hover:opacity-90 transition-smooth font-body px-8 py-6 text-base h-auto w-fit">
              Enroll Today
            </Button>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-border shadow-lg space-y-6">
            <div className="space-y-4">
              <h3 className="font-display font-bold text-2xl">Course Overview</h3>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <BookOpen className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-body font-semibold">Duration</p>
                    <p className="font-body text-sm text-secondary-foreground">20 hours (10 × 2-hour lessons)</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Target className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-body font-semibold">Level</p>
                    <p className="font-body text-sm text-secondary-foreground">Beginner → Confident Professional User</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Shield className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-body font-semibold">Prerequisites</p>
                    <p className="font-body text-sm text-secondary-foreground">Basic computer literacy (email, documents, web browsing). No coding required.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container max-w-3xl">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="font-display font-bold text-4xl">Our Teaching Philosophy</h2>
              <p className="font-body text-lg text-secondary-foreground">
                We develop AI judgment, not AI dependency.
              </p>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-8 md:p-12 border border-accent/20 space-y-6">
              <p className="font-body text-lg leading-relaxed">
                This course teaches you how to <strong>select appropriate AI tools</strong> for common workplace tasks, <strong>verify results</strong> critically, and <strong>apply AI safely</strong> with practical guardrails for privacy and risk.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center text-white font-display font-bold">
                    ✓
                  </div>
                  <h3 className="font-display font-bold">Judgment First</h3>
                  <p className="font-body text-sm text-secondary-foreground">
                    Learn to think critically about when and how to use AI, not just how to use it.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center text-white font-display font-bold">
                    ✓
                  </div>
                  <h3 className="font-display font-bold">Practical Skills</h3>
                  <p className="font-body text-sm text-secondary-foreground">
                    Apply AI to real workplace tasks: writing, data analysis, research, and presentations.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center text-white font-display font-bold">
                    ✓
                  </div>
                  <h3 className="font-display font-bold">Responsible Use</h3>
                  <p className="font-body text-sm text-secondary-foreground">
                    Understand privacy, bias, and ethical considerations in every lesson.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-background to-secondary/20">
        <div className="container max-w-3xl">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="font-display font-bold text-4xl">Who Should Take This Course?</h2>
              <p className="font-body text-lg text-secondary-foreground">
                Designed for professionals from all backgrounds with little to no prior AI experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Administrative Staff", description: "Streamline documentation, scheduling, and communication tasks." },
                { title: "Office Professionals", description: "Enhance productivity in daily work with AI-assisted tools." },
                { title: "HR Professionals", description: "Improve hiring processes, policy documentation, and employee communications." },
                { title: "Business Owners", description: "Leverage AI to scale operations and improve decision-making." },
                { title: "Individual Professionals", description: "Advance your career with in-demand AI literacy skills." },
                { title: "Career Changers", description: "Transition into AI-focused roles with practical expertise." }
              ].map((audience, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 border border-border shadow-lg">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-display font-bold mb-2">{audience.title}</h3>
                      <p className="font-body text-sm text-secondary-foreground">{audience.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section id="outcomes" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl">
              What You'll Learn
            </h2>
            <p className="font-body text-lg text-secondary-foreground">
              11 comprehensive learning outcomes covering everything from AI fundamentals to responsible use and verification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {learningOutcomes.map((outcome, idx) => (
              <div key={idx} className="bg-gradient-to-br from-background to-secondary/10 rounded-xl p-8 border border-border hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center text-white font-display font-bold flex-shrink-0">
                    {idx + 1}
                  </div>
                  <div className="space-y-2">
                    <p className="font-body text-xs text-accent font-semibold uppercase">{outcome.number}</p>
                    <h3 className="font-display font-bold text-lg">{outcome.title}</h3>
                    <p className="font-body text-sm text-secondary-foreground leading-relaxed">
                      {outcome.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-background via-background to-secondary/30">
        <div className="container max-w-2xl text-center space-y-8">
          <div className="space-y-4">
            <h2 className="font-display font-bold text-4xl md:text-5xl">
              Ready to Master AI?
            </h2>
            <p className="font-body text-lg text-secondary-foreground">
              Join professionals who are developing AI judgment and transforming their careers.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="gradient-primary text-white hover:opacity-90 transition-smooth font-body px-8 py-6 text-base h-auto">
              Enroll Now
            </Button>
            <Button variant="outline" className="border-border font-body px-8 py-6 text-base h-auto">
              Schedule a Demo
            </Button>
          </div>

          <p className="font-body text-sm text-secondary-foreground">
            Questions? Contact us at <strong>hello@generationai.com</strong> or call <strong>+1 236 427 2510</strong>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center text-white font-display font-bold">
                  GA
                </div>
                <span className="font-display font-bold">Generation AI</span>
              </div>
              <p className="font-body text-sm text-secondary-foreground">
                Developing AI judgment for professional excellence.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-display font-bold">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/" className="font-body text-sm text-secondary-foreground hover:text-accent transition-colors">Home</Link>
                <a href="#" className="font-body text-sm text-secondary-foreground hover:text-accent transition-colors">Course</a>
                <Link href="/about" className="font-body text-sm text-secondary-foreground hover:text-accent transition-colors">About Us</Link>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-display font-bold">Contact</h4>
              <div className="space-y-2">
                <p className="font-body text-sm text-secondary-foreground">hello@generationai.com</p>
                <p className="font-body text-sm text-secondary-foreground">+1 236 427 2510</p>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-display font-bold">Locations</h4>
              <div className="space-y-2">
                <p className="font-body text-sm text-secondary-foreground">Surrey, BC</p>
                <p className="font-body text-sm text-secondary-foreground">New Westminster, BC</p>
                <p className="font-body text-sm text-secondary-foreground">UBC, Vancouver</p>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center">
            <p className="font-body text-sm text-secondary-foreground">
              © 2026 Generation AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
