const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display text-lg font-bold">
          <span className="text-gradient-gold">NT</span> Wholesales
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} NT Wholesales. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <a href="tel:+447709537486" className="hover:text-primary transition-colors">Phone</a>
          <a href="mailto:info@ntwholesales.com" className="hover:text-primary transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
