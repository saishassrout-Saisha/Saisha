import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-primary-900 to-slate-900 text-white pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold gradient-text">SAIsha</h3>
            <p className="text-slate-100">
              Specialized consulting services for the Plastics/Polymer Industry with world-class manufacturing management solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { text: 'Home', path: '/' },
                { text: 'About Us', path: '/about' },
                { text: 'Services', path: '/services' },
                { text: 'Contact Us', path: '/contact' },
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-slate-200 hover:text-white transition-colors inline-block hover:translate-x-2 transform transition-transform"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Our Services</h4>
            <ul className="space-y-3">
              {[
                'Lean, 5S & ISO Integration',
                'Geotextile Solutions',
                'RAFFIA Industry Services',
                'Recycle Enhancement',
                'Geosynthetic Products',
              ].map((service, index) => (
                <li key={index} className="text-slate-200">{service}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-secondary-400 mt-1 flex-shrink-0" size={18} />
                <span className="text-slate-200">
                  200 Shivam Society, Manjalpur, Vadodara- 392011 (Gujarat) India
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-secondary-400 flex-shrink-0" size={18} />
                <span className="text-slate-200">+(91)- 8XXXXX4524 / 9XXXXX1005</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-secondary-400 flex-shrink-0" size={18} />
                <span className="text-slate-200">ssrout0@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-16 pt-8 text-center text-slate-300">
          <p>© {new Date().getFullYear()} SAIsha Plastics Management Consultant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;