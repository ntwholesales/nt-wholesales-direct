import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Decorative gold shapes */}
      <div className="absolute top-20 right-[15%] w-40 h-40 bg-gold-gradient opacity-10 rotate-12 rounded-sm" />
      <div className="absolute bottom-32 left-[10%] w-24 h-24 bg-gold-gradient opacity-5 -rotate-6 rounded-sm" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-6 animate-fade-in-up">
          Wholesale Electrical Tools
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Powering Your
          <br />
          <span className="text-gradient-gold">Business Forward</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Premium electrical tools at wholesale prices. Trusted by tradespeople
          and businesses across the UK.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <a
            href="#products"
            className="inline-flex items-center justify-center gap-2 bg-gold-gradient text-primary-foreground font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
          >
            Browse Products
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 border border-border text-foreground font-semibold px-8 py-4 rounded-lg hover:border-primary hover:text-primary transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
