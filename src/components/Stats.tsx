import React from 'react';
import { motion } from 'framer-motion';

interface Stat {
  value: string;
  label: string;
}

interface StatsProps {
  stats: Stat[];
  title?: string;
  subtitle?: string;
}

const Stats: React.FC<StatsProps> = ({ 
  stats, 
  title = "Our Impact in Numbers", 
  subtitle = "We deliver exceptional results with measurable outcomes for our clients"
}) => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-primary-900 to-slate-900 py-20 md:py-32 text-white">
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="text-center mb-16 max-w-3xl mx-auto">
            {title && <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">{title}</h2>}
            {subtitle && <p className="text-white/80">{subtitle}</p>}
          </div>
        )}
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 text-center group hover:bg-white/10 transition-all duration-500"
            >
              <motion.div 
                className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-4"
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                viewport={{ once: true }}
              >
                {stat.value}
              </motion.div>
              <p className="text-white/80">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;