import { motion } from 'framer-motion';

const Card = ({ children, className = '', hover = true, gradient = false, ...props }) => {
  const baseClasses = gradient 
    ? 'bg-gradient-to-br from-white/95 via-white/90 to-white/85 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/30'
    : 'bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-white/25';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={hover ? { 
        y: -8, 
        scale: 1.02,
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.3)',
        transition: { type: 'spring', stiffness: 300, damping: 20 }
      } : {}}
      className={`
        ${baseClasses}
        transition-all duration-300 relative overflow-hidden
        before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent
        before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;