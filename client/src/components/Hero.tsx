import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-scroll";

export default function Hero() {
  return (
    <div 
      className="min-h-screen flex items-center justify-center pt-16 relative"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center text-white"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            ServiceNow Developer
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            2.5 years of professional experience crafting efficient ITSM solutions
          </p>
        </motion.div>
      </div>
    </div>
  );
}