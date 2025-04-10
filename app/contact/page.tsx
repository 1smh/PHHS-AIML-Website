"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Clock } from "lucide-react"
const cardClassName = "bg-white/60 backdrop-blur-lg border border-white/30 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full"

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

export default function Contact() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Message sent! (Placeholder)");
  };

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 glow-text-subtle pb-1">
            Get In Touch
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Have questions, suggestions, or want to collaborate? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <motion.div variants={itemVariants} whileHover={{ y: -5 }}>
            <Card className={cardClassName}>
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Location</h3>
                    <p className="text-muted-foreground text-sm">Room P8, Piedmont Hills High School</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-purple-600 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <a href="mailto:phhsaimlclub@gmail.com" className="text-muted-foreground text-sm hover:text-purple-700 transition-colors">
                      phhsaimlclub@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-blue-600 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Meeting Schedule</h3>
                    <p className="text-muted-foreground text-sm">Every other Friday, at lunch (Room P8)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} whileHover={{ y: -5 }}>
            <Card className={cardClassName}>
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <Input
                      placeholder="Your Name"
                      required
                      className="bg-white/70 border-white/50 focus:border-blue-400 focus:ring-blue-400"
                    />
                  </div>
                  <div className="space-y-1">
                    <Input
                      placeholder="Your Email"
                      type="email"
                      required
                      className="bg-white/70 border-white/50 focus:border-blue-400 focus:ring-blue-400"
                    />
                  </div>
                  <div className="space-y-1">
                    <Textarea
                      placeholder="Your Message"
                      required
                      className="min-h-[140px] bg-white/70 border-white/50 focus:border-blue-400 focus:ring-blue-400"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}