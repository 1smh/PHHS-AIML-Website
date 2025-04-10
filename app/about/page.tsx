"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Calendar, Trophy, BrainCircuit, Code, Users } from "lucide-react"

const cardClassName = "bg-white/60 backdrop-blur-lg border border-white/30 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full"

export default function About() {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 glow-text-subtle pb-1">
          About Our Club
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Discover the mission, vision, and activities that define the PHHS AI/ML Club experience.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Card className={cardClassName}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Target className="h-7 w-7 text-blue-600" />
                <span className="text-2xl font-semibold">Our Mission</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To cultivate a vibrant community of students passionate about Artificial Intelligence and Machine Learning, empowering them with hands-on experience, foundational knowledge, and collaborative opportunities in these transformative fields.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Card className={cardClassName}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Trophy className="h-7 w-7 text-purple-600" />
                 <span className="text-2xl font-semibold">Our Goals</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To equip students for future academic and career paths in AI/ML through engaging project-based learning, participation in relevant competitions, and valuable interactions with industry professionals and academic experts.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

       <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center mb-12"
        >
           <h2 className="text-3xl font-bold mb-3 text-gray-800">What We Do</h2>
           <p className="text-md text-muted-foreground max-w-2xl mx-auto">
             Engage in a variety of activities designed to enhance learning and collaboration.
           </p>
       </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.15 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {[
          { icon: Calendar, title: "Weekly Meetings", description: "Collaborative sessions every other Friday at lunch in P8." },
          { icon: Code, title: "Hands-on Projects", description: "Develop practical skills by building real AI/ML applications using modern tools." },
          { icon: Users, title: "Guest Speakers", description: "Gain insights from industry professionals and leading academics in the AI field." },
          { icon: BrainCircuit, title: "Workshops", description: "Deep dive into specific topics like TensorFlow, PyTorch, and data analysis." },
          { icon: Trophy, title: "Competitions", description: "Test your skills and compete in local and national AI/ML challenges." },
          { icon: Target, title: "Mentorship", description: "Connect with experienced peers and mentors for guidance and support." },
        ].map((feature) => (
          <motion.div
            key={feature.title}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <Card className={cardClassName}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                  <span className="text-xl font-semibold">{feature.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}