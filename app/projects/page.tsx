"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Bot, Image as ImageIcon, MessageSquare, Camera } from "lucide-react"

const projects = [
  {
    title: "Sentiment Detector",
    description: "A sentiment analysis tool that leverages NLP models to classify text emotions.",
    icon: MessageSquare,
    tags: ["Natural Language Processing", "Sentiment Analysis", "AI", "Python"],
    status: "Completed"
  },
  {
    title: "SafeAI",
    description: "An AI-powered security system that uses computer vision to detect and alert on potential threats in real-time.",
    icon: Camera,
    tags: ["Security", "Computer Vision", "Real-Time Processing", "Python"],
    status: "Completed",
    githubLink: "https://github.com/1smh/SafeAI"
  },
  {
    title: "Brawl Stars AI",
    description: "Interactive web application built with Python to predict Brawl Stars statistics using machine learning.",
    icon: Brain,
    tags: ["Gaming Analytics", "Machine Learning", "Python", "Predictive Analysis"],
    status: "Completed",
    githubLink: "https://github.com/1smh/Brawl-Stars-AI"
  },
  {
    title: "AI Chatbot",
    description: "An interactive chatbot that uses advanced machine learning techniques to simulate human conversation.",
    icon: Bot,
    tags: ["Natural Language Processing", "Chatbot", "Conversational AI", "TensorFlow"],
    status: "Completed"
  },
  {
    title: "Object Detection Model",
    description: "A computer vision model designed to identify and locate objects within images.",
    icon: Camera,
    tags: ["Object Detection", "Computer Vision", "Deep Learning", "PyTorch"],
    status: "Completed"
  },
  {
    title: "Ngram Processing Tool",
    description: "A utility to process and analyze text data using n-gram models for predictive text generation.",
    icon: Brain,
    tags: ["Text Processing", "NLP", "Data Analysis", "Python"],
    status: "Completed"
  },
  {
    title: "Kappa",
    description: "A platform to learn machine learning one step at a time.",
    icon: MessageSquare,
    tags: ["Educational", "Machine Learning", "Python", "Tutorial"],
    status: "In Progress"
  },
  {
    title: "AI Recommendation Engine",
    description: "A recommendation system using collaborative filtering and deep learning for personalized suggestions.",
    icon: ImageIcon,
    tags: ["Recommender Systems", "Collaborative Filtering", "Deep Learning", "Python"],
    status: "planning"
  }
]

const cardClassName = "bg-white/60 backdrop-blur-lg border border-white/30 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"

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

const getStatusVariant = (status: string): "default" | "secondary" | "outline" | "destructive" => {
  switch (status.toLowerCase()) {
    case "completed": return "default";
    case "in progress": return "secondary";
    case "planning": return "outline";
    default: return "outline";
  }
}

export default function Projects() {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="text-center mb-16 overflow-visible">
          <h1 className="relative text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 glow-text-subtle pb-1">
            Club Projects
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore the innovative AI and Machine Learning projects developed by our talented members.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="flex"
            >
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full"
              >
                <Card className={cardClassName}>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <project.icon className="h-8 w-8 text-blue-600 mt-1" />
                      <Badge variant={getStatusVariant(project.status)} className="ml-auto">
                        {project.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow">
                    <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/20">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs bg-white/30 border-blue-200/50 text-blue-800">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}