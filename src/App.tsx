import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Zap, Brain, Code2, Star, ChevronDown } from "lucide-react";
import { MarqueeDemo } from "./components/ui/marquee";
import { Footer } from "./components/ui/footer";
import CTA from "./components/ui/cta";
import NavBar from "./components/ui/navbar";
import Hero from "./components/ui/hero";
import Stats from "./components/ui/stats";

export default function App() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <NavBar />

      <Hero />

      <Stats />

      {/* Features Section */}
      <section
        id="features"
        className="py-20 px-4 sm:px-6 lg:px-8 relative bg-background select-none"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Powerful Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to ace your MPSC exams
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Brain,
                title: "AI-Powered Learning",
                description:
                  "Personalized study plans adapted to your learning style and pace",
              },
              {
                icon: Zap,
                title: "Instant Doubt Resolution",
                description:
                  "Get answers to your questions in seconds with our AI assistant",
              },
              {
                icon: Code2,
                title: "Real-time Analytics",
                description:
                  "Track your progress with detailed performance metrics and insights",
              },
              {
                icon: Sparkles,
                title: "Mock Tests",
                description:
                  "Practice with AI-generated mock exams that mirror real MPSC patterns",
              },
              {
                icon: Zap,
                title: "Smart Recommendations",
                description:
                  "Get personalized topic recommendations based on your weak areas",
              },
              {
                icon: Brain,
                title: "24/7 Support",
                description:
                  "Access learning materials and AI assistance anytime, anywhere",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-slide-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        id="benefits"
        className="py-20 px-4 sm:px-6 lg:px-8 relative bg-card/40"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Why Choose MPSC AI?
              </h2>
              <ul className="space-y-4">
                {[
                  "Proven track record with 10,000+ successful candidates",
                  "AI technology that adapts to your learning pace",
                  "Comprehensive coverage of all MPSC topics",
                  "Interactive practice with instant feedback",
                  "Expert-curated content and resources",
                  "Affordable pricing for quality education",
                ].map((benefit, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 animate-slide-in"
                    style={{ animationDelay: `${0.1 * index}s` }}
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Sparkles className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-lg text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-2xl"></div>
              <div className="relative bg-card border border-border rounded-2xl p-8 backdrop-blur-sm">
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                  <Zap className="w-24 h-24 text-primary/30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MarqueeDemo />

      {/* Pricing Section */}
      <section
        id="pricing"
        className="py-20 px-4 sm:px-6 lg:px-8 relative bg-card/30"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose the plan that works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "৳499",
                period: "/month",
                features: [
                  "Basic AI assistance",
                  "100 questions/month",
                  "Progress tracking",
                  "Email support",
                ],
              },
              {
                name: "Pro",
                price: "৳999",
                period: "/month",
                features: [
                  "Unlimited AI assistance",
                  "Unlimited questions",
                  "Mock tests",
                  "Priority support",
                  "Performance analytics",
                ],
                highlighted: true,
              },
              {
                name: "Premium",
                price: "৳1,499",
                period: "/month",
                features: [
                  "Everything in Pro",
                  "One-on-one mentoring",
                  "Personalized study plan",
                  "Doubt resolution calls",
                  "24/7 support",
                ],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl border transition-all duration-300 animate-slide-in flex flex-col ${
                  plan.highlighted
                    ? "bg-gradient-to-br from-primary/20 to-accent/20 border-primary/50 shadow-lg shadow-primary/20 md:scale-105"
                    : "bg-card border-border hover:border-primary/30"
                }`}
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="p-8 flex-1 flex flex-col">
                  {plan.highlighted && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <div className="w-4 h-4 rounded-full bg-primary/30 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-8 pt-0">
                  <Button
                    className={`w-full ${
                      plan.highlighted
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                        : "bg-primary/10 border border-primary/30 hover:bg-primary/20 text-foreground"
                    }`}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="py-20 px-4 sm:px-6 lg:px-8 relative bg-background"
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "How does the AI personalization work?",
                answer:
                  "Our AI analyzes your learning patterns, strengths, and weaknesses to create a customized study plan that adapts in real-time based on your performance.",
              },
              {
                question: "Can I cancel my subscription anytime?",
                answer:
                  "Yes, you can cancel your subscription anytime without any hidden charges or penalties. Your access will continue until the end of your billing period.",
              },
              {
                question: "Is there a free trial available?",
                answer:
                  "Yes, we offer a 7-day free trial for all plans. No credit card required to get started. Experience the full power of MPSC AI risk-free.",
              },
              {
                question: "What if I need help with specific topics?",
                answer:
                  "Our AI assistant is available 24/7 to help you with any topic. You can also access our comprehensive resource library and expert-curated content.",
              },
              {
                question: "How often are new questions and mock tests added?",
                answer:
                  "We add new questions and mock tests every week to ensure you have the latest and most relevant practice material aligned with current MPSC patterns.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="border border-border rounded-lg overflow-hidden animate-slide-in"
                style={{ animationDelay: `${0.05 * index}s` }}
              >
                <button
                  onClick={() =>
                    setExpandedFaq(expandedFaq === index ? null : index)
                  }
                  className="w-full p-6 flex items-center justify-between hover:bg-card/50 transition-colors text-left"
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary transition-all duration-300 ${
                      expandedFaq === index ? "rotate-180 scale-110" : ""
                    }`}
                  />
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-6 text-muted-foreground border-t border-border animate-accordion-open">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />

      <Footer />
    </div>
  );
}
