import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="section-padding pt-32 md:pt-40">
      <div className="content-container text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-8"
        >
          <div
            className="mx-auto rounded-full overflow-hidden"
            style={{
              width: '180px',
              height: '180px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
            }}
          >
            <img
              src="/profile.png"
              alt="Dr. Tacksoo Im"
              className="w-full h-full object-cover bg-muted"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="mb-4"
        >
          Dr. Tacksoo Im
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="text-muted-foreground text-lg mb-6"
        >
          Professor of Information Technology | AI Advisor for Education & Business
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          className="text-xl font-heading italic text-primary/80 max-w-2xl mx-auto"
        >
          "Helping organizations and institutions apply AI for learning and business improvement"
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
          className="mt-8"
        >
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-primary text-primary-foreground font-medium rounded hover:bg-primary/90 transition-colors duration-200"
            aria-label="Contact Dr. Im to work together"
          >
            Work with me →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
