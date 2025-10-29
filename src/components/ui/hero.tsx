import { Zap, ArrowRight, Play, Brain } from "lucide-react";
import { Button } from "./button";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-background">
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-50 animate-float"></div>
      <div
        className="absolute bottom-0 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-50 animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-30 animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-block mb-6 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full animate-slide-in">
          <span className="text-sm text-primary font-medium flex items-center gap-2">
            <Zap className="w-4 h-4" />
            Powered by Advanced AI
          </span>
        </div>

        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-slide-in text-balance leading-tight"
          style={{ animationDelay: "0.1s" }}
        >
          Master MPSC with{" "}
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-shift">
            AI Intelligence
          </span>
        </h1>

        <p
          className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-in text-balance"
          style={{ animationDelay: "0.2s" }}
        >
          Prepare for MPSC exams with cutting-edge AI technology.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-in"
          style={{ animationDelay: "0.3s" }}
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-base h-12 px-8"
          >
            Start Learning Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <a
            href="https://youtu.be/dQw4w9WgXcQ?list=RDdQw4w9WgXcQ"
            target="_blank"
          >
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:bg-card text-base h-12 px-8 bg-transparent group"
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </a>
        </div>

        {/* Hero Product */}
        <div
          className="relative animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-2xl"></div>
          <div className="relative bg-card border border-border rounded-2xl p-8 backdrop-blur-sm hover:border-primary/50 transition-colors duration-300">
            <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center group cursor-pointer">
              <div className="text-center group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-16 h-16 text-primary/50 mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Interactive Learning Made Easy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
