import product1 from "@/assets/product-1.png";
import product2 from "@/assets/product-2.png";
import product3 from "@/assets/product-3.png";
import product4 from "@/assets/product-4.png";
import product5 from "@/assets/product-5.png";
import product6 from "@/assets/product-6.png";

const products = [
  { image: product1, name: "Building Experts Voltage Detector", category: "Testing Equipment" },
  { image: product2, name: "Lumberjack XP 20V Drill Driver", category: "Power Tools" },
  { image: product3, name: "Dynamic 32pc Insulated Tool Set", category: "Hand Tool Sets" },
  { image: product4, name: "DeWalt XR Multi-Tool 18V", category: "Power Tools" },
  { image: product5, name: "Stanley Self-Adjusting Wire Stripper", category: "Hand Tools" },
  { image: product6, name: "CK Magma Electrician's Tool Kit", category: "Tool Kits" },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            Our Range
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Wholesale <span className="text-gradient-gold">Products</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Quality electrical tools from leading brands, available at competitive wholesale prices.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="group bg-card-gradient border border-border rounded-xl overflow-hidden hover:border-primary/50 hover:glow-gold transition-all duration-300"
            >
              <div className="aspect-square bg-secondary/30 flex items-center justify-center p-8 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <span className="text-xs font-medium text-primary tracking-wider uppercase">
                  {product.category}
                </span>
                <h3 className="font-display text-lg font-semibold mt-1 text-foreground">
                  {product.name}
                </h3>
                <a
                  href="#contact"
                  className="inline-block mt-3 text-sm text-primary font-medium hover:underline"
                >
                  Enquire Now →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
