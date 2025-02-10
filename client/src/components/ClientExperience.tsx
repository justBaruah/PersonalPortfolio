import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    company: "HCL Technologies",
    role: "ServiceNow Developer",
    duration: "2021 - Present",
    highlights: [
      "Led implementation of ITSM modules for Fortune 500 clients",
      "Developed custom workflows and integrations",
      "Improved incident resolution time by 40%"
    ]
  }
];

export default function ClientExperience() {
  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">Client Experience</h2>
        <p className="text-muted-foreground">
          Professional journey and achievements
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{exp.company}</span>
                  <Badge>{exp.duration}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium mb-4">{exp.role}</p>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-muted-foreground">
                      • {highlight}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
