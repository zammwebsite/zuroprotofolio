
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GitHubIcon, LinkedInIcon, TwitterIcon, InstagramIcon } from './icons';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all fields.');
      return;
    }
    setError('');
    // Mock submission logic. Replace with EmailJS or Formspree.
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-light-bg/50 dark:bg-dark/50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Get In Touch
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="w-full p-4 rounded-lg bg-glass-light dark:bg-glass-dark border border-neon-tosca/20 focus:ring-2 focus:ring-neon-tosca focus:outline-none" />
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-4 rounded-lg bg-glass-light dark:bg-glass-dark border border-neon-tosca/20 focus:ring-2 focus:ring-neon-tosca focus:outline-none" />
              <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} rows={5} className="w-full p-4 rounded-lg bg-glass-light dark:bg-glass-dark border border-neon-tosca/20 focus:ring-2 focus:ring-neon-tosca focus:outline-none"></textarea>
              <button type="submit" className="w-full px-6 py-4 bg-neon-tosca text-dark font-bold rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-neon-tosca/50">
                Send Message
              </button>
              {error && <p className="text-red-500 mt-2">{error}</p>}
              {isSubmitted && <p className="text-green-500 mt-2">Thank you! Your message has been sent.</p>}
            </form>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <div className="flex-grow rounded-lg overflow-hidden border-2 border-neon-tosca/30">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.81956131539413!3d-6.194420395514578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f428a2a5c955%3A0x2373f78c8ba2a05!2sMonumen%20Nasional!5e0!3m2!1sen!2sid!4v1672583526153!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="min-h-[250px]"
              ></iframe>
            </div>
            <div className="mt-8 text-center">
              <p className="mb-4 text-lg">Connect with me on social media:</p>
              <div className="flex justify-center space-x-6">
                <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="hover:text-neon-tosca transition-colors"><GitHubIcon /></a>
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-neon-tosca transition-colors"><LinkedInIcon /></a>
                <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-neon-tosca transition-colors"><TwitterIcon /></a>
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-neon-tosca transition-colors"><InstagramIcon /></a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
