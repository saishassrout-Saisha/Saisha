import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import { Users, Award, Clock, Briefcase } from 'lucide-react';
import Seo from '../seo/Seo';
import { Link } from "react-router-dom";

const AboutPage: React.FC = () => {
  const stats = [
    { value: '35+', label: 'Years Experience' },
    { value: '100%', label: 'Client Satisfaction' },
    { value: '30%', label: 'Average Cost Reduction' },
    { value: '50+', label: 'Projects Completed' },
  ];

  const teamMembers = [
    {
      name: 'Specialized Team',
      area: 'Injection Molding',
      description: 'Expert team specializing in injection molding processes, optimization, and quality control.',
    },
    {
      name: 'Specialized Team',
      area: 'Extrusion',
      description: 'Dedicated team for extrusion processes, focusing on efficiency and product quality.',
    },
    {
      name: 'Specialized Team',
      area: 'Blow Molding',
      description: 'Specialized team in blow molding techniques and process optimization.',
    },
    {
      name: 'Specialized Team',
      area: 'Rotational Molding',
      description: 'Expert team in rotational molding processes and quality management.',
    },
  ];

  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://saisha-plastics.vercel.app';
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About SAIsha Plastics Management Consultant',
    url: `${siteUrl}/about`,
    description:
      'Learn about SAIsha Plastics Management Consultant and our experience delivering plastics and polymer consulting solutions.',
    mainEntity: {
      '@type': 'Organization',
      name: 'SAIsha Plastics Management Consultant',
      url: siteUrl,
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: 'saisha.ssrout@gmail.com',
      },
    },
  };

  return (
    <>
      <Seo
        title="About SAIsha Plastics Management Consultant"
        description="35+ years of plastics and polymer industry leadership. Discover SAIsha's mission, vision, and specialized teams in injection molding, extrusion, and geotextiles."
        keywords="about saisha plastics, polymer consulting experts, plastics industry specialists, geotextile consultants"
        canonicalPath="/about"
        structuredData={aboutSchema}
      />
      <div>
      <Hero 
        title="About SAIsha Plastics Management Consultant"
        subtitle="Specialized consulting for the Plastics/Polymer Industry and beyond"
        buttonText="Our Services"
        buttonLink="/services"
        showSecondaryButton={true}
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
      />

      {/* Mission and Vision */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-primary-50 p-8 rounded-lg"
            >
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mb-6">
                <Award size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Expertise</h3>
              <p className="text-slate-700">
                We serve the field of Plastics/Polymer Industry as well as other industries. Our specialization includes:
                Green Field Projects, Production Process Management, Operation Management, Cost Reduction techniques,
                Modern Quality Management, Zero Wastage Initiatives & Circular Economy, Sustainability, Industry 4.0 and much more.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-secondary-50 p-8 rounded-lg"
            >
              <div className="w-16 h-16 bg-secondary-100 text-secondary-600 rounded-lg flex items-center justify-center mb-6">
                <Briefcase size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-slate-700">
                Having observed plastics manufacturing plants from close quarters, we recognize that the industry is 
                primarily owner-driven and often lacks professional practices and best manufacturing methodologies. 
                At SAIsha Plastics Management Consultant, our techno-management personnel ensure that best practices 
                are adopted, leading to increased profitability for our clients.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Us Content */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Our Services
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-6 text-slate-700"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-semibold mb-4">Integrated Management Systems</h4>
                  <ul className="space-y-2">
                    <li>• Zero Wastage Initiatives</li>
                    <li>• Reduction in Wastage Generation</li>
                    <li>• Recycle Usage Enhancement</li>
                    <li>• Customer Complaint Reduction</li>
                    <li>• Lean, ISO systems & 55 implementation</li>
                    <li>• Processes strengthening and upgradation</li>
                    <li>• Output enhacement and control</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-semibold mb-4">Specialized Services</h4>
                  <ul className="space-y-2">
                    <li>• Geotextile Manufacturing (Both Woven & Non-Woven)</li>
                    <li>• Other Geosynthetics product manufacturing</li>
                    <li>• RAFFIA Industry Solutions</li>
                    <li>• Plasics machinery selection, installation & commissioning</li>
                    <li>• Cost Reduction Strategies</li>
                    <li>• P & L Management</li>
                    <li>• Training & Development</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Our Specialized Teams
            </motion.h2>
            <motion.p 
              className="text-slate-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              We have specialized teams for various molding processes and rubber processing.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-slate-50 rounded-lg"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-primary-100 p-3 rounded-full text-primary-600">
                    <Users size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{member.area}</h3>
                    <p className="text-primary-600">{member.name}</p>
                  </div>
                </div>
                <p className="text-slate-600">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Our Clients
            </motion.h2>
            <motion.p 
              className="text-slate-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              We have successfully delivered projects for leading companies in the plastics industry
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary-600">Mahaharshi Geomembrane (MGIPL)</h3>
              <p className="text-slate-700">
                <strong>Service Offered:</strong> Greenfield project (selection to commissioning) for Flat 8m Width extruded membrane. Quality Management System established.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary-600">INDONET</h3>
              <p className="text-slate-700">
                <strong>Service Offered:</strong> Process Solutions & Output enhancement in Extruded Net Extrusion
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary-600">SaiAish Polymers</h3>
              <p className="text-slate-700">
                <strong>Service Offered:</strong> New product development in Injection Molding
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Stats stats={stats} />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary-50 to-secondary-50 text-slate-800">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-primary-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Operations?
          </motion.h2>
          <motion.p 
            className="text-slate-600 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Connect with our expert team today and discover how we can help you achieve 
            operational excellence and sustainable growth.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >


          <Link to="/contact" className="btn btn-primary">
            Contact Us Today
          </Link>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
};

export default AboutPage;