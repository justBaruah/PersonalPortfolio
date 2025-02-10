import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const portfolioItems = [
  {
    title: "IT Service Management",
    description: "Comprehensive ITSM implementation and customization experience",
    details: {
      modules: [
        {
          name: "Incident Management",
          features: [
            "Automated incident routing system",
            "SLA tracking and management",
            "Custom notification workflows",
            "Priority-based assignment rules"
          ]
        },
        {
          name: "Change Management",
          features: [
            "Change request workflows",
            "Approval process automation",
            "Risk assessment integration",
            "Change calendar management"
          ]
        },
        {
          name: "Problem Management",
          features: [
            "Root cause analysis tools",
            "Knowledge base integration",
            "Trend analysis dashboards",
            "Proactive problem identification"
          ]
        },
        {
          name: "Knowledge Management",
          features: [
            "Article creation and management",
            "Knowledge base categorization",
            "Search optimization",
            "Content lifecycle management"
          ]
        }
      ]
    }
  }
];

export default function ITSMPortfolio() {
  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">My Portfolio</h2>
        <p className="text-muted-foreground">
          Specialized experience in ServiceNow development
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
        {portfolioItems.map((item, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="cursor-pointer"
              >
                <Card>
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </DialogTrigger>
            <DialogContent className="max-w-3xl">
              <DialogHeader>
                <DialogTitle>{item.title} Experience</DialogTitle>
              </DialogHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {item.details.modules.map((module, moduleIndex) => (
                  <Card key={moduleIndex}>
                    <CardHeader>
                      <CardTitle className="text-lg">{module.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside space-y-2">
                        {module.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-muted-foreground">
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}