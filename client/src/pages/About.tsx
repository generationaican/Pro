import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Lightbulb, Target, Users } from "lucide-react";
import { Link } from "wouter";
import ContactForm from "@/components/ContactForm";

/**
 * Design Philosophy: Modern Minimalist with Vibrant Accents
 * Professional About Us page emphasizing expertise, mission, and team values
 */

export default function About() {
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
            <a href="/#course" className="text-sm font-body hover:text-accent transition-smooth">
              Course
            </a>
            <a href="/#contact" className="text-sm font-body hover:text-accent transition-smooth">
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
        <div className="container space-y-8">
          <div className="max-w-3xl space-y-4">
            <h1 className="font-display font-bold text-5xl md:text-6xl leading-tight">
              Empowering Professionals with <span className="gradient-text">AI Expertise</span>
            </h1>
            <p className="font-body text-xl text-secondary-foreground leading-relaxed">
              At Generation AI, we believe artificial intelligence is not just a technology—it's a catalyst for professional growth and organizational transformation. Our mission is to equip working professionals with the knowledge and skills to harness AI's potential responsibly and effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Mission */}
            <div className="space-y-6">
              <div className="w-14 h-14 gradient-primary rounded-lg flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div className="space-y-3">
                <h3 className="font-display font-bold text-2xl">Our Mission</h3>
                <p className="font-body text-secondary-foreground leading-relaxed">
                  To democratize AI education by providing accessible, practical, and industry-relevant training that transforms careers and drives organizational innovation.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="space-y-6">
              <div className="w-14 h-14 gradient-primary rounded-lg flex items-center justify-center">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <div className="space-y-3">
                <h3 className="font-display font-bold text-2xl">Our Vision</h3>
                <p className="font-body text-secondary-foreground leading-relaxed">
                  A world where AI literacy is a fundamental professional skill, enabling individuals and organizations to make informed decisions and create meaningful impact.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="space-y-6">
              <div className="w-14 h-14 gradient-primary rounded-lg flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="space-y-3">
                <h3 className="font-display font-bold text-2xl">Our Values</h3>
                <p className="font-body text-secondary-foreground leading-relaxed">
                  Excellence, integrity, accessibility, and continuous learning. We're committed to ethical AI education and supporting our community's professional development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-background to-secondary/20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl">
              Meet Our Expert Team
            </h2>
            <p className="font-body text-lg text-secondary-foreground">
              Our instructors bring decades of combined experience from leading technology companies and research institutions.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 gradient-primary opacity-10 rounded-2xl blur-3xl"></div>
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663428298497/hycxSK4sbHuUdaoZvUzyDq/about-section-visual-cKFQNB7U9iHVqTDYTVcUk5.webp"
              alt="Generation AI Team"
              className="relative rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
{[
  {
    name: "Prof. Lalith Gamage",
    role: "Advisor | Vice Chancellor, SLIIT",
    credentials: "PhD (UBC)",
    bio: "Lalith Gamage is the CEO and Founding President of SLIIT, a premier higher education institute specializing in technology, engineering, and business. A visionary leader in education and innovation, he has played a key role in shaping IT and engineering education in Sri Lanka. An alumnus of UBC, he has contributed significantly to academia, research, and industry development.",
    expertise: ["Education Leadership", "Innovation", "Academic Strategy"]
  },
  {
    name: "Dr. Aruna Somasiri",
    role: "Co-founder",
    credentials: "PhD (UBC), MBA (SFU)",
    bio: "Co-founder of Generation AI with expertise in curriculum development and educational technology. Holds advanced degrees from University of British Columbia and Simon Fraser University. Leads course design and ensures our programs meet the highest academic standards.",
    expertise: ["Curriculum Design", "Educational Technology", "AI Strategy"]
  },
  {
    name: "Dr. Peter Ostafichuk",
    role: "Co-founder | Professor of Teaching",
    credentials: "PhD (UBC), University of British Columbia",
    bio: "Co-founder and Professor of Teaching at the University of British Columbia. Brings academic excellence and pedagogical expertise to our professional programs. Specializes in making complex concepts accessible to diverse learners.",
    expertise: ["Pedagogy", "AI Fundamentals", "Professional Development"]
  },
  {
    name: "Rukshan Vidana Gamage",
    role: "Co-founder",
    credentials: "B.Sc. MIS (MNSU), MBA (UCW)",
    bio: "Co-founder with strong background in information systems and business management. Leads strategic initiatives and course development. Brings real-world business perspective to AI applications.",
    expertise: ["Business Strategy", "Systems Design", "AI Applications"]
  }
].map((member, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 border border-border shadow-lg hover:shadow-xl transition-smooth">
                <div className="w-16 h-16 gradient-primary rounded-full mb-6 flex items-center justify-center text-white font-display font-bold text-xl">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="font-display font-bold text-lg mb-1">{member.name}</h3>
                <p className="font-body text-xs text-secondary-foreground mb-2">{member.credentials}</p>
                <p className="font-body text-sm text-accent font-semibold mb-4">{member.role}</p>
                <p className="font-body text-sm text-secondary-foreground leading-relaxed mb-4">{member.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((exp, i) => (
                    <span key={i} className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                      {exp}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Instructors Section */}
          <div className="mt-20 pt-20 border-t border-border">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
              <h3 className="font-display font-bold text-3xl md:text-4xl">
                Meet Our Instructors
              </h3>
              <p className="font-body text-lg text-secondary-foreground">
                Experienced educators and industry professionals dedicated to your success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Shehani Wijetunga",
                  role: "Developer & Educator",
                  credentials: "B.Sc. (SLIIT), PGD (Langara)",
                  bio: "Full-stack developer and passionate educator with expertise in practical AI applications. Brings hands-on development experience and a talent for breaking down complex concepts for learners of all levels.",
                  expertise: ["AI Development", "Practical Applications", "Code Examples"]
                },
                {
                  name: "Eugene Filatov",
                  role: "Data Scientist & AI Educator",
                  credentials: "MSc Mathematics (SFU), BSc Computer Science",
                  bio: "Data scientist with advanced mathematics background and deep expertise in machine learning and AI algorithms. Specializes in making data science accessible to professionals without technical backgrounds.",
                  expertise: ["Data Science", "Machine Learning", "Statistical Analysis"]
                },
                {
                  name: "Ken",
                  role: "Instructor",
                  credentials: "AI & Technology Specialist",
                  bio: "Experienced instructor with a proven track record of helping professionals master AI tools and concepts. Known for patient, engaging teaching style and ability to connect AI theory to real workplace scenarios.",
                  expertise: ["AI Tools", "Workplace Applications", "Professional Skills"]
                }
              ].map((instructor, idx) => (
                <div key={idx} className="bg-white rounded-xl p-8 border border-border shadow-lg hover:shadow-xl transition-smooth">
                  <div className="w-16 h-16 gradient-primary rounded-full mb-6 flex items-center justify-center text-white font-display font-bold text-xl">
                    {instructor.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h4 className="font-display font-bold text-lg mb-1">{instructor.name}</h4>
                  <p className="font-body text-xs text-secondary-foreground mb-2">{instructor.credentials}</p>
                  <p className="font-body text-sm text-accent font-semibold mb-4">{instructor.role}</p>
                  <p className="font-body text-sm text-secondary-foreground leading-relaxed mb-4">{instructor.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {instructor.expertise.map((exp, i) => (
                      <span key={i} className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl">
              Why Choose Generation AI?
            </h2>
            <p className="font-body text-lg text-secondary-foreground">
              We're committed to delivering exceptional learning experiences that translate directly to career advancement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Industry-Relevant Curriculum",
                description: "Our course content is continuously updated to reflect the latest AI trends, tools, and best practices in the industry."
              },
              {
                title: "Expert Instruction",
                description: "Learn from professionals with 20+ years of combined experience working at leading technology companies and research institutions."
              },
              {
                title: "Hands-On Learning",
                description: "Work with real-world datasets and tools. Build practical projects that you can showcase to employers."
              },
              {
                title: "Supportive Community",
                description: "Join a cohort of ambitious professionals. Network, collaborate, and grow together with peers from diverse industries."
              },
              {
                title: "Career Support",
                description: "Access job placement resources, resume reviews, and interview preparation to accelerate your career transition."
              },
              {
                title: "Flexible Learning",
                description: "Balance your professional commitments with our flexible online + live session format designed for working adults."
              }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-lg">{item.title}</h3>
                  <p className="font-body text-secondary-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-background to-secondary/30">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl">
              Our Impact
            </h2>
            <p className="font-body text-lg text-secondary-foreground max-w-2xl mx-auto">
              Since our founding, we've helped hundreds of professionals advance their careers and organizations embrace AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { stat: "500+", label: "Professionals Trained", icon: "👥" },
              { stat: "95%", label: "Course Completion Rate", icon: "✓" },
              { stat: "4.9/5", label: "Average Student Rating", icon: "⭐" },
              { stat: "85%", label: "Career Advancement Rate", icon: "📈" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 text-center border border-border shadow-lg hover:shadow-xl transition-smooth">
                <p className="text-4xl mb-3">{item.icon}</p>
                <p className="font-display font-bold text-3xl gradient-text mb-2">{item.stat}</p>
                <p className="font-body text-secondary-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl">
              Where We Operate
            </h2>
            <p className="font-body text-lg text-secondary-foreground max-w-2xl mx-auto">
              We serve professionals across the Greater Vancouver area and online globally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { location: "Surrey", description: "Our primary training center with modern facilities and collaborative learning spaces." },
              { location: "New Westminster", description: "Satellite location offering flexible scheduling and personalized instruction." },
              { location: "UBC", description: "Partnership location providing access to university resources and research opportunities." }
            ].map((loc, idx) => (
              <div key={idx} className="bg-gradient-to-br from-background to-secondary/20 rounded-xl p-8 border border-border text-center space-y-3">
                <h3 className="font-display font-bold text-2xl">{loc.location}</h3>
                <p className="font-body text-secondary-foreground">{loc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container max-w-3xl">
          <ContactForm />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-background via-background to-secondary/30">
        <div className="container max-w-2xl text-center space-y-8">
          <div className="space-y-4">
            <h2 className="font-display font-bold text-4xl md:text-5xl">
              Join Our Community
            </h2>
            <p className="font-body text-lg text-secondary-foreground">
              Take the first step toward mastering AI and advancing your professional career.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="gradient-primary text-white hover:opacity-90 transition-smooth font-body px-8 py-6 text-base h-auto">
              Enroll Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" className="border-border font-body px-8 py-6 text-base h-auto">
              Schedule a Call
            </Button>
          </div>

          <p className="font-body text-sm text-secondary-foreground">
            Have questions? Contact us at <strong>admissions@generationai.com</strong> or call <strong>+1 236 427 2510</strong>
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
                <li><Link href="/" className="font-body text-sm text-secondary-foreground hover:text-foreground transition-smooth">Course Details</Link></li>
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
