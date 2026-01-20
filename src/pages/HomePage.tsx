import React, { useRef, useState, useEffect } from "react";
import { motion, useViewportScroll, useTransform, useSpring } from "framer-motion";
import Hero from "../components/Hero";
import ThreeDModel from "../components/ThreeDModel";
import ServiceCard from "../components/ServiceCard";
import Stats from "../components/Stats";
import { ClipboardCheck, Recycle, Layers, Factory, Users, BarChart, TrendingDown, Settings, Grid } from "lucide-react";
import Seo from "../seo/Seo";

const HomePage: React.FC = () => {
  const introRef = useRef<HTMLDivElement | null>(null);
  const { scrollY } = useViewportScroll();
  const [introOffsetTop, setIntroOffsetTop] = useState(0);
  const [isDesktop, setIsDesktop] = useState<boolean>(true);

  // Detect viewport width
  useEffect(() => {
    const checkScreen = () => setIsDesktop(window.innerWidth >= 1024);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    if (introRef.current) {
      setIntroOffsetTop(introRef.current.offsetTop);
    }
  }, [introRef]);

  // Desktop transforms
  const rawY = useTransform(scrollY, [0, introOffsetTop - 200], [-600, 90]);
  const rawX = useTransform(scrollY, [0, introOffsetTop - 200], [150, 0]);
  const rawScale = useTransform(scrollY, [0, introOffsetTop - 200], [0.8, 1]);

  const y = useSpring(rawY, { stiffness: 150, damping: 35 });
  const x = useSpring(rawX, { stiffness: 150, damping: 35 });
  const scale = useSpring(rawScale, { stiffness: 120, damping: 30 });

  const stats = [
    { value: "35+", label: "Years Experience" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "30%", label: "Average Cost Reduction" },
    { value: "50+", label: "Projects Completed" },
  ];

  const siteUrl = import.meta.env.VITE_SITE_URL || "https://saisha-plastics.vercel.app";
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SAIsha Plastics Management Consultant",
    url: siteUrl,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: "+91-8384844524",
        email: "saisha.ssrout@gmail.com",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    ],
    serviceOffered: [
      "Geotextile Manufacturing Consulting",
      "Geosynthetics Product Manufacturing",
      "RAFFIA Industry Solutions",
      "Plastics Machinery Consulting",
      "Cost Reduction Strategies",
      "P & L Management",
      "Training & Development",
    ],
  };

  return (
    <>
      <Seo
        title="SAIsha Plastics Management Consultant | Plastics & Polymer Consulting"
        description="Specialized consulting for plastics and polymer manufacturing: geotextiles, geosynthetics, RAFFIA solutions, machinery selection, cost reduction, and sustainability."
        keywords="plastics consulting, polymer consulting, geotextile consulting, RAFFIA industry, plastics machinery selection, cost reduction, sustainability, circular economy"
        canonicalPath="/"
        structuredData={organizationSchema}
      />
      <div className="relative overflow-visible">
      {/* Hero Section */}
      <section className="relative z-0 overflow-visible">
        <Hero
          title="SAIsha Plastics Management Consultant Solutions"
          subtitle="Specialized consulting for the Plastics/Polymer Industry and beyond. Transform your operations with proven methodologies."
          buttonText="Explore Our Services"
          buttonLink="/services"
          showSecondaryButton
          secondaryButtonText="About Us"
          secondaryButtonLink="/about"
        />
      </section>

      {/* 3D Model */}
      {isDesktop ? (
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 z-[9] pointer-events-none"
          style={{ y, x, scale, width: 700, height: 600 }}
        >
          <ThreeDModel />
        </motion.div>
      ) : null}

      {/* Introduction Section */}
      <section
        ref={introRef}
        className="py-32 md:py-40 bg-white relative z-0 overflow-visible"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Industry Specialists in{" "}
                <span className="text-primary-600">Polymer Processing</span>
              </h2>
              <p className="text-slate-600 mb-8">
                We serve the field of Plastics/Polymer Industry as well as other industries. Specialization in Green Field Projects,
                Production Process Management, Operation Management, Cost Reduction techniques, Modern Quality Management,
                Zero Wastage Initiatives & Circular Economy, Sustainability, Industry 4.0 and much more.
              </p>
              <p className="text-slate-600 mb-8">
                Specialized team for Injection Molding, Extrusion, Blow Molding and Rotational Molding & in the field of Rubber Processing.
              </p>
              <div className="bg-slate-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">Leadership</h3>
                <p className="text-slate-700">
                  <strong>Managing Director</strong><br />
                  35+ years of experience in plastics manufacturing and management
                </p>
              </div>
            </div>

            {/* Mobile-only 3D Model below content */}
            {!isDesktop && (
              <div className="w-full flex justify-center mt-6 pointer-events-none">
                <div className="w-[350px] h-[300px]">
                  <ThreeDModel />
                </div>
              </div>
            )}

            <div className="hidden lg:block relative h-[420px] lg:h-[520px]"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-slate-50">
  <div className="container mx-auto px-4">
    <div className="text-center max-w-3xl mx-auto mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Our Specialized Services
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      <ServiceCard
        title="Geotextile Manufacturing"
        description="Comprehensive consulting for both woven and non-woven geotextile manufacturing processes."
        icon={<Layers size={24} />}
        delay={0}
        link="/services#geotextile"
      />

      <ServiceCard
        title="Geosynthetics Product Manufacturing"
        description="Expert guidance for manufacturing other geosynthetic products with optimized processes."
        icon={<Grid size={24} />}
        delay={1}
        link="/services#geosynthetics"
      />

      <ServiceCard
        title="RAFFIA Industry Solutions"
        description="Specialized solutions for tape lines, circular looms, FIBC, BOPP, and PP/PE fabric manufacturing."
        icon={<Factory size={24} />}
        delay={2}
        link="/services#raffia"
      />

      <ServiceCard
        title="Plastics Machinery Consulting"
        description="Machinery selection, installation, commissioning, and performance optimization."
        icon={<Settings size={24} />}
        delay={3}
        link="/services#machinery"
      />

      <ServiceCard
        title="Cost Reduction Strategies"
        description="Focused cost reduction in manpower, energy, maintenance, consumables, and raw materials."
        icon={<TrendingDown size={24} />}
        delay={4}
        link="/services#cost-reduction"
      />

      <ServiceCard
        title="P & L Management"
        description="End-to-end profit & loss management to improve financial performance and sustainability."
        icon={<BarChart size={24} />}
        delay={5}
        link="/services#pl-management"
      />

      <ServiceCard
        title="Training & Development"
        description="Customized training programs for operations, quality, sustainability, and Industry 4.0."
        icon={<Users size={24} />}
        delay={6}
        link="/services#training"
      />

    </div>
  </div>
</section>


      <Stats stats={stats} />
      </div>
    </>
  );
};

export default HomePage;
