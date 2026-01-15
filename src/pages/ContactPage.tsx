import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock, ChevronDown, ChevronUp } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [isFormVisible, setIsFormVisible] = useState(true);
  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: "Office Address",
      details: "200 Shivam Society, Manjalpur, Vadodara- 392011 (Gujarat) India"
    },
    {
      icon: <Phone size={24} />,
      title: "Phone Numbers",
      details: "+(91)- 83XXXXXXX4 / 99XXXXXXX5"
    },
    {
      icon: <Mail size={24} />,
      title: "Email Address",
      details: "ssrout0@gmail.com"
    },
    {
      icon: <Clock size={24} />,
      title: "Contact Person",
      details: "Mr. Sudhansu Sekhar Rout"
    }
  ];

  return (
    <div>
      <Hero 
        title="Contact Us"
        subtitle="Get in touch with our expert team for inquiries, consultations, or partnership opportunities"
        showSecondaryButton={false}
      />

      {/* Contact Section */}
      <section id="contact-form" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Toggle Button */}
          {/* <div className="text-center mb-8">
            <button
              onClick={() => setIsFormVisible(!isFormVisible)}
              className="btn btn-primary flex items-center justify-center mx-auto gap-2"
            >
              {isFormVisible ? 'Hide Contact Form' : 'Show Contact Form'}
              {isFormVisible ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
          </div> */}

          <AnimatePresence>
            {isFormVisible && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Start a Conversation</h2>
                <p className="text-slate-600 mb-8">
                  We're excited to hear from you! Whether you have a question about our services, 
                  want to discuss a potential project, or are ready to start working with us, 
                  our team is here to help.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-4"
                    >
                      <div className="bg-primary-100 p-3 rounded-lg text-primary-600 mt-1">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                        <p className="text-slate-600">{item.details}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
            
            <ContactForm />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="bg-slate-200 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center p-8">
              <h3 className="text-2xl font-bold mb-2">Our Location</h3>
              <p className="text-slate-600 mb-4">SAIsha Management Consultants</p>
              <p className="text-primary-600">200 Shivam Society</p>
              <p className="text-slate-600">Manjalpur, Vadodara- 392011</p>
              <p className="text-slate-600">Gujarat, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-10 text-center"
            >
              Frequently Asked Questions
            </motion.h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "What services do you offer?",
                  answer: "We offer comprehensive services including Lean & 5S Implementation, ISO Standard implementation & certifications, Customer Complaint Reduction, Process Wastage Reduction, Cost Reduction (Manpower, Electricity, Maintenance, Consumable & Packing), RM Composition Cost optimization, Recycle usage enhancement, Process Optimization, New Product Development, and P & L management."
                },
                {
                  question: "Do you provide training services?",
                  answer: "Yes, we provide training in all areas of our services, including Sustainability & Industry 4.0 implementation."
                },
                {
                  question: "What is your experience in the industry?",
                  answer: "Our Managing Director, Mr. Sudhansu Sekhar Rout, has 35 years of experience from Plant shop floor to Top Management, making us experts in the field of Plastics/Polymer Industry."
                },
                {
                  question: "What types of molding processes do you specialize in?",
                  answer: "We have specialized teams for Injection Molding, Extrusion, Blow Molding, Rotational Molding, and Rubber Processing."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-50 rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                  <p className="text-slate-600">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;