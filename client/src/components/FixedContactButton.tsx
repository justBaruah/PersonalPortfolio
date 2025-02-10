import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-scroll";
import { Mail } from "lucide-react";

export default function FixedContactButton() {
  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1 }}
    >
      <Link to="contact" spy={true} smooth={true} offset={-64} duration={500}>
        <Button 
          size="lg" 
          className="rounded-full shadow-lg"
          variant="default"
        >
          <Mail className="mr-2 h-4 w-4" />
          Get in Touch
        </Button>
      </Link>
    </motion.div>
  );
}
