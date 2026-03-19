import { ShieldCheck, Truck, Star } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Quality Guaranteed",
    desc: "All our products are sourced from trusted manufacturers and come with full manufacturer warranties.",
  },
  {
    icon: Truck,
    title: "UK-Wide Delivery",
    desc: "Fast and reliable delivery across the United Kingdom. Bulk orders dispatched within 24 hours.",
  },
  {
    icon: Star,
    title: "Competitive Pricing",
    desc: "Wholesale prices that help your business grow. Volume discounts available on all product lines.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              About Us
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Your Trusted <span className="text-gradient-gold">Wholesale Partner</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              NT Wholesales is a leading UK-based wholesale supplier of professional electrical tools
              and equipment. We work directly with top brands to bring you premium products at
              unbeatable prices.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether you're a sole trader, retailer, or large business, we provide tailored
              wholesale solutions to meet your needs. Our dedicated team ensures every order is
              handled with care and delivered on time.
            </p>
          </div>

          <div className="space-y-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="flex gap-5 p-6 rounded-xl bg-card-gradient border border-border hover:border-primary/40 transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gold-gradient flex items-center justify-center">
                  <f.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold mb-1">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
