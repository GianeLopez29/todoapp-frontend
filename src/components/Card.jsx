import { motion } from 'framer-motion';

const Card = ({ children, className = '', hover = true, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={hover ? { y: -2, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' } : {}}
      className={`
        bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-white/20
        transition-all duration-300 ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;