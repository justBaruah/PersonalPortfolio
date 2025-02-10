import { Link } from "react-scroll";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";

export default function Navigation() {
  const [activeItem, setActiveItem] = useState<string>("");

  const navItems = [
    { id: "portfolio", label: "My Portfolio" },
    { id: "experience", label: "My Experience" },
    { id: "certifications", label: "Certifications" },
    { id: "ngo-gallery", label: "Co-curricular" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            className="text-xl font-bold text-foreground font-raleway"
            whileHover={{ scale: 1.05 }}
          >
            Ankur Baruah
          </motion.div>

          <div className="flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <motion.li 
                  key={item.id}
                  animate={{ scale: activeItem === item.id ? 0.95 : 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={item.id}
                    spy={true}
                    smooth={true}
                    offset={-64}
                    duration={500}
                    className="text-sm font-medium hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-500 hover:bg-clip-text hover:text-transparent cursor-pointer transition-all duration-300 font-raleway"
                    onSetActive={() => setActiveItem(item.id)}
                    onClick={() => setActiveItem(item.id)}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.nav>
  );
}