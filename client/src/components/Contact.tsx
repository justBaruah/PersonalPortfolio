import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [showMessage, setShowMessage] = useState(false);

  const handleMailClick = () => {
    setShowMessage(true);
    setTimeout(() => {
      window.location.href = "mailto:ankurbaruah04.06@gmail.com";
    }, 3000);
  };

  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-muted-foreground">
          Let's discuss how I can contribute to your team
        </p>
      </motion.div>

      <div className="max-w-md mx-auto">
        <Card>
          <CardContent className="pt-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-center"
            >
              <Button
                onClick={handleMailClick}
                size="lg"
                className="w-full"
              >
                <Mail className="mr-2 h-4 w-4" />
                Mail Me
              </Button>
            </motion.div>
          </CardContent>
        </Card>

        <AnimatePresence>
          {showMessage && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mt-4 p-4 bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-lg border shadow-lg"
            >
              <p className="text-sm">
                Did you know? As per DemandSage 2025 study, an average internet user visits about 130 web pages each day, totaling up to 4,000 pages per month. I will make sure you clicked the right one.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}