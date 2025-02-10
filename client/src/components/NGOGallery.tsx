import { motion } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";

const ngoImages = [
  {
    url: "https://source.unsplash.com/random/800x600?volunteering",
    alt: "Volunteering Activity 1"
  },
  {
    url: "https://source.unsplash.com/random/800x600?community",
    alt: "Community Work"
  },
  {
    url: "https://source.unsplash.com/random/800x600?charity",
    alt: "Charity Event"
  },
  {
    url: "https://source.unsplash.com/random/800x600?social-work",
    alt: "Social Work"
  }
];

export default function NGOGallery() {
  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">NGO Work</h2>
        <p className="text-muted-foreground">
          Committed to making a difference through social responsibility
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ngoImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-2">
                <AspectRatio ratio={4/3}>
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="rounded-md object-cover w-full h-full"
                    loading="lazy"
                  />
                </AspectRatio>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
