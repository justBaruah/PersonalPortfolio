import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SiAmazon, SiGoogle } from "react-icons/si";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const certifications = [
  {
    name: "Certified Application Developer",
    organization: "ServiceNow",
    date: "Nov 2024",
    description: "Advanced platform development and customization",
    icon: "/SNOW ICON.png"
  },
  {
    name: "Certified System Administrator",
    organization: "ServiceNow",
    date: "Nov 2024",
    description: "Core platform administration and configuration",
    icon: "/SNOW ICON.png"
  },
  {
    name: "Certified Implementation Specialist - ITSM",
    organization: "ServiceNow",
    date: "2024",
    description: "Specialized in IT Service Management implementation",
    icon: "/SNOW ICON.png"
  },
  {
    name: "AWS Certified Cloud Practitioner",
    organization: "Amazon Web Services",
    date: "2024",
    description: "Cloud computing fundamentals and AWS services",
    IconComponent: SiAmazon
  },
  {
    name: "Cloud Digital Leader",
    organization: "Google Cloud Platform",
    date: "2024",
    description: "Digital transformation and cloud technology leadership",
    IconComponent: SiGoogle
  }
];

export default function Certifications() {
  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">Certifications</h2>
        <p className="text-muted-foreground">
          Professional certifications and achievements
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  {cert.icon ? (
                    <div className="w-8 h-8">
                      <AspectRatio ratio={1}>
                        <img
                          src={cert.icon}
                          alt={`${cert.organization} icon`}
                          className="w-full h-full object-contain"
                        />
                      </AspectRatio>
                    </div>
                  ) : cert.IconComponent && (
                    <cert.IconComponent className="w-8 h-8 text-muted-foreground" />
                  )}
                  <div className="flex-1">
                    <CardTitle className="flex items-center justify-between">
                      <span>{cert.name}</span>
                      <Badge variant="secondary">{cert.date}</Badge>
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">
                  {cert.organization}
                </p>
                <p className="text-sm">{cert.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}