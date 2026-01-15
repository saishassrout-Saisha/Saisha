import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import { ClipboardCheck, Settings, TrendingUp, Lightbulb, Recycle, AlignCenterVertical as Certificate, Target, Shield, Users, BarChart, LineChart, Battery, Zap, Package, Repeat, FileText, Layers, Globe, Factory } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      category: "Integrated Management Systems",
      items: [
        {
          title: "Lean, 5S & ISO System Integration",
          description: "Comprehensive implementation of Lean methodologies, 5S workplace organization, and ISO standards to create world-class manufacturing systems.",
          icon: <ClipboardCheck size={24} />
        },
        {
          title: "Customer Complaint Reduction",
          description: "Systematic approach to identify and resolve customer complaints, improving product quality and satisfaction.",
          icon: <Users size={24} />
        },
        {
          title: "Process Wastage Reduction",
          description: "Comprehensive strategies to minimize waste in production processes and optimize resource utilization.",
          icon: <Recycle size={24} />
        }
      ]
    },
    {
      category: "Sustainability & Circular Economy",
      items: [
        {
          title: "Recycle Usage Enhancement",
          description: "Increase the use of recycled materials in production while ensuring product quality and performance.",
          icon: <Repeat size={24} />
        },
        {
          title: "Reduction in Generation",
          description: "Strategies to minimize waste generation at source through process optimization and material efficiency.",
          icon: <Globe size={24} />
        },
        {
          title: "Zero Wastage Initiatives",
          description: "Implementation of circular economy principles and zero waste manufacturing practices.",
          icon: <Recycle size={24} />
        }
      ]
    },
    {
      category: "Geotextile Solutions",
      items: [
        {
          title: "Geotextile Manufacturing (Woven & Non-Woven)",
          description: "Complete solutions from concept development to manufacturing of both woven and non-woven geotextiles.",
          icon: <Layers size={24} />
        },
        {
          title: "Quality Certification & Standards",
          description: "Guidance on relevant quality certifications and standards compliance for geotextile products.",
          icon: <Certificate size={24} />
        },
        {
          title: "Marketing & Distribution",
          description: "Strategic marketing support and distribution network development for geotextile products.",
          icon: <Target size={24} />
        }
      ]
    },
    {
      category: "Cost Reduction Services",
      items: [
        {
          title: "Manpower Cost Reduction",
          description: "Optimize workforce efficiency and productivity to reduce labor costs while maintaining quality.",
          icon: <Target size={24} />
        },
        {
          title: "Electricity Cost Reduction",
          description: "Implement energy-efficient practices and optimize power consumption to reduce electricity costs.",
          icon: <Zap size={24} />
        },
        {
          title: "Maintenance Cost Reduction",
          description: "Develop preventive maintenance strategies to minimize equipment downtime and maintenance expenses.",
          icon: <Settings size={24} />
        },
        {
          title: "Consumable & Packing Cost Reduction",
          description: "Optimize usage of consumables and packaging materials to reduce costs without compromising quality.",
          icon: <Package size={24} />
        }
      ]
    },
    {
      category: "Process & Material Optimization",
      items: [
        {
          title: "RM Composition Cost Optimization",
          description: "Optimize raw material compositions to reduce costs while maintaining product quality standards.",
          icon: <LineChart size={24} />
        },
        {
          title: "Process Optimization",
          description: "Enhance production processes for maximum efficiency, reduced cycle times, and improved quality.",
          icon: <Settings size={24} />
        },
        {
          title: "New Product Development",
          description: "Support the development of new products from concept to production with technical expertise.",
          icon: <Lightbulb size={24} />
        }
      ]
    },
    {
      category: "RAFFIA Industry Specialization",
      items: [
        {
          title: "Tape Lines & Circular Looms",
          description: "Specialized services for tape line operations and circular loom manufacturing processes.",
          icon: <Factory size={24} />
        },
        {
          title: "Sulzer Looms & Lamination",
          description: "Expert guidance for Sulzer loom operations and lamination processes in RAFFIA manufacturing.",
          icon: <Factory size={24} />
        },
        {
          title: "FIBC, BOPP & Tarpaulene",
          description: "Complete solutions for FIBC (Flexible Intermediate Bulk Containers), BOPP films, and tarpaulene production.",
          icon: <Package size={24} />
        },
        {
          title: "PP-PE Fabrics & Small Bags",
          description: "Manufacturing solutions for PP-PE fabrics and small bag production processes.",
          icon: <Package size={24} />
        }
      ]
    },
    {
      category: "Geosynthetic Products",
      items: [
        {
          title: "Geocell & Geogrid",
          description: "Manufacturing solutions for geocell and geogrid products with quality assurance.",
          icon: <Layers size={24} />
        },
        {
          title: "Geonets & Geo Membrane",
          description: "Complete solutions for geonets and geo membrane manufacturing and quality control.",
          icon: <Layers size={24} />
        },
        {
          title: "Geo Tubes",
          description: "Specialized manufacturing services for geo tube products with technical expertise.",
          icon: <Layers size={24} />
        }
      ]
    },
    {
      category: "Business Management",
      items: [
        {
          title: "P & L Management",
          description: "Strategic guidance on profit and loss management to improve financial performance.",
          icon: <BarChart size={24} />
        },
        {
          title: "Training Services",
          description: "Comprehensive training programs in all service areas, including Sustainability & Industry 4.0.",
          icon: <Users size={24} />
        }
      ]
    }
  ];

  return (
    <div>
      <Hero 
        title="Our Services"
        subtitle="Specialized consulting services for the Plastics/Polymer Industry"
        buttonText="Contact Us"
        buttonLink="/contact"
        showSecondaryButton={false}
      />

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">World-Class Manufacturing Management Services</h2>
            <p className="text-slate-600">
              We provide comprehensive world-class manufacturing-management services for the RAFFIA industry including 
              Tape lines, Circular & Sulzer Looms, Lamination, FIBC, BOPP, Tarpaulene, PP-PE Fabrics and other small bags. 
              Our expertise extends to Geotextile (both Woven and Non-Woven), Geocell, Geogrid, Geonets, Geo Membrane, 
              Geo Tubes and much more. We specialize in reduction techniques, Modern Quality Management, Zero Wastage 
              Initiatives & Circular Economy, Sustainability, Industry 4.0 and comprehensive manufacturing solutions.
            </p>
          </motion.div>

          <div className="space-y-16">
            {services.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-2xl md:text-3xl font-bold mb-8 pb-4 border-b border-slate-200"
                >
                  {category.category}
                </motion.h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.items.map((service, serviceIndex) => (
                    <motion.div
                      key={serviceIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="card p-6 hover:border-l-4 hover:border-primary-500 transition-all"
                    >
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="bg-primary-100 p-3 rounded-lg text-primary-600">
                          {service.icon}
                        </div>
                        <h4 className="text-xl font-semibold">{service.title}</h4>
                      </div>
                      <p className="text-slate-600">{service.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
            <a href="/contact" className="btn btn-primary">
              Contact Us Today
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;