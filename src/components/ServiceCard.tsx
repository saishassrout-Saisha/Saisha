import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
  link?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, delay = 0, link = '/services' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      className="glass-card p-8 group hover:bg-gradient-to-br hover:from-primary-900 hover:to-secondary-900 transition-all duration-500"
    >
      <div className="flex items-center space-x-4 mb-6">
        <div className="p-3 rounded-xl bg-gradient-to-br from-primary-100 to-secondary-100 text-primary-500 group-hover:bg-white/20 group-hover:text-primary-100 transition-all duration-500">
          {icon}
        </div>
        <h3 className="text-xl font-semibold group-hover:text-primary-100 transition-colors duration-500">{title}</h3>
      </div>
      <p className="text-slate-600 group-hover:text-primary-100 mb-6 transition-colors duration-500">{description}</p>
      <Link 
        to={link} 
        className="inline-flex items-center font-medium text-primary-500 group-hover:text-primary-100 transition-colors duration-500 hover:translate-x-2 transform"
      >
        Know more <ArrowRight size={16} className="ml-1" />
      </Link>
    </motion.div>
  );
};

export default ServiceCard;