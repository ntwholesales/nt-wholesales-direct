import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Contact <span className="text-gradient-gold">Us</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ready to place a wholesale order or have questions? Reach out to us today.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <a
            href="tel:+447709537486"
            className="flex flex-col items-center gap-4 p-8 rounded-xl bg-card-gradient border border-border hover:border-primary/50 hover:glow-gold transition-all text-center"
          >
            <div className="w-14 h-14 rounded-full bg-gold-gradient flex items-center justify-center">
              <Phone className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-display font-semibold mb-1">Phone</h3>
              <p className="text-sm text-muted-foreground">+44 7709 537486</p>
            </div>
          </a>

          <a
            href="mailto:info@ntwholesales.com"
            className="flex flex-col items-center gap-4 p-8 rounded-xl bg-card-gradient border border-border hover:border-primary/50 hover:glow-gold transition-all text-center"
          >
            <div className="w-14 h-14 rounded-full bg-gold-gradient flex items-center justify-center">
              <Mail className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-display font-semibold mb-1">Email</h3>
              <p className="text-sm text-muted-foreground">info@ntwholesales.com</p>
            </div>
          </a>

          <div className="flex flex-col items-center gap-4 p-8 rounded-xl bg-card-gradient border border-border text-center">
            <div className="w-14 h-14 rounded-full bg-gold-gradient flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-display font-semibold mb-1">Location</h3>
              <p className="text-sm text-muted-foreground">United Kingdom</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
