import { motion } from 'framer-motion';
const layoutVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};
const Layout = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={layoutVariants}
    >
      {children}
    </motion.div>
  );
};
export default Layout;