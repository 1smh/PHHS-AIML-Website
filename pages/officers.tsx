import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Head from "next/head"

const officers = [
  {
    name: "Rikhil Tanugula",
    role: "President",
    bio: "Junior at PHHS, passionate about deep learning and computer vision.",
    image: "https://cdn.discordapp.com/avatars/838804318722981888/c62ef8a73495d3128d8d5f393f6aae3b.png?size=4096",
    links: {
      github: "https://github.com/1smh",
      linkedin: "https://www.linkedin.com/in/rikhiltanugula/",
      email: "mailto:tanugularikhil6544@students.esuhsd.org"
    }
  },
  {
    name: "Chris Lee",
    role: "Vice President",
    bio: "Junior focusing on natural language processing and transformers.",
    image: "https://cdn.discordapp.com/avatars/616420546179235860/9662cc0470e99ea357eaf585d3f7e6af.webp?size=160",
    links: {
      github: "https://github.com/ImVeryLucky",
      linkedin: "#",
      email: "mailto:leechris0142@students.esuhsd.org"
    }
  },
  {
    name: "Sebastian Tsai",
    role: "Publicist",
    bio: "Junior exploring reinforcement learning and generative models.",
    image: "https://cdn.discordapp.com/avatars/783516633838780477/647dc658951352476c80952f5e9e4a56.webp?size=160",
    links: {
      github: "#",
      linkedin: "#",
      email: "mailto:tsaisebastian6259@students.esuhsd.org"
    }
  },
  {
    name: "Bradley Yang",
    role: "Secretary",
    bio: "Junior exploring diffusion, optimization, and video game applications.",
    image: "https://cdn.discordapp.com/avatars/774102777815105557/d28e65bb850662c55f7dff274881077a.webp?size=160",
    links: {
      github: "https://github.com/goodtoseeyouz",
      linkedin: "#",
      email: "mailto:yangbradley6378@students.esuhsd.org"
    }
  },
  {
    name: "Daniel Meilhon",
    role: "Treasurer",
    bio: "Junior exploring geospatial inference, computer vision, and natural language processing.",
    image: "https://cdn.discordapp.com/avatars/694606138280247346/f0474c63933d592f328e16867e219f7d.webp?size=160",
    links: {
      github: "https://github.com/M3G4ninja",
      linkedin: "#",
      email: "mailto:meilhondaniel6403@students.esuhsd.org"
    }
  }
]

const cardClassName = "bg-white/60 backdrop-blur-lg border border-white/30 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full overflow-hidden"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export default function Officers() {
  return (
    <>
      <Head>
        <title>Officers - PHHS AI/ML Club</title>
        <meta name="description" content="Meet the passionate individuals leading our AI/ML initiatives and driving our community forward." />
      </Head>
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 glow-text-subtle pb-1">
              Meet Our Team
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Get to know the passionate individuals leading our AI/ML initiatives and driving our community forward.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {officers.map((officer) => (
              <motion.div
                key={officer.name}
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <Card className={cardClassName}>
                  <div className="aspect-w-1 aspect-h-1 relative overflow-hidden rounded-t-lg">
                    <Image 
                      src={officer.image} 
                      alt={officer.name}
                      width={400}
                      height={400}
                      className="object-cover w-full h-full"
                      unoptimized
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="flex flex-col">
                      <span className="text-xl font-bold">{officer.name}</span>
                      <span className="text-sm font-medium text-blue-600 mt-1">{officer.role}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm">{officer.bio}</p>
                    <div className="flex space-x-3">
                      {officer.links.github !== "#" && (
                        <Link href={officer.links.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-5 w-5 text-gray-600 hover:text-blue-600 transition-colors" />
                        </Link>
                      )}
                      {officer.links.linkedin !== "#" && (
                        <Link href={officer.links.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-5 w-5 text-gray-600 hover:text-blue-600 transition-colors" />
                        </Link>
                      )}
                      <Link href={officer.links.email}>
                        <Mail className="h-5 w-5 text-gray-600 hover:text-blue-600 transition-colors" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}