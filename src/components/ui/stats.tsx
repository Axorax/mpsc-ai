import { Brain, Star, Zap, Sparkles } from "lucide-react";

const Stats = () => {
  return (
    <section
      id="stats"
      className="py-20 px-4 sm:px-6 lg:px-8 relative bg-card/30 select-none"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { number: "10K+", label: "Students Trained", icon: Brain },
            { number: "95%", label: "Success Rate", icon: Star },
            { number: "50K+", label: "Questions Solved", icon: Zap },
            { number: "24/7", label: "AI Support", icon: Sparkles },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300 animate-slide-in group"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold mb-2 text-primary">
                {stat.number}
              </div>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
