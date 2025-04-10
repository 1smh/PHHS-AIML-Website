import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Brain, Code, Users, ArrowRight, Sparkles, Terminal } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>PHHS AI/ML Club</title>
        <meta name="description" content="Piedmont Hills High School Artificial Intelligence and Machine Learning Club" />
      </Head>
      <div className="overflow-x-hidden">
        <section className="relative min-h-screen flex items-start justify-center px-4 sm:px-6 lg:px-8 pt-0 pb-12">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute left-1/4 top-0 h-[800px] w-[800px] -translate-x-1/2 bg-gradient-radial from-blue-500/15 to-transparent blur-3xl" />
            <div className="absolute -bottom-1/4 right-0 h-[600px] w-[600px] translate-x-1/4 bg-gradient-radial from-purple-500/15 to-transparent blur-3xl" />
          </div>

          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start lg:items-center relative z-10">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:pt-0 pt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Badge
                  variant="secondary"
                  className="mb-8 px-4 py-2 text-sm backdrop-blur-sm bg-white/20 border border-white/30 shadow-sm"
                >
                  <Sparkles className="w-4 h-4 mr-2 inline-block text-purple-500" />
                  Join PHHS's Premier Tech Club
                </Badge>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="text-4xl md:text-6xl font-bold mb-6 tracking-tight pb-1 glow-text-subtle"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 block">
                  Piedmont Hills AI and
                </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 block">
                  Machine Learning Club
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-lg text-muted-foreground mb-10 max-w-xl"
              >
                Join a community of innovators exploring AI and machine learning. 
                Build real projects, learn from experts, and shape the future.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                  <a href="https://discord.gg/3eYaetbPUb" target="_blank" rel="noopener noreferrer">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 h-12 text-lg shadow-md hover:shadow-lg transition-all group"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                  </a>
                <Link href="/projects">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-blue-300 hover:bg-white/50 backdrop-blur-sm h-12 text-lg shadow-sm hover:shadow-md transition-all"
                >
                  View Projects
                </Button>
                </Link>
              </motion.div>
            </div>

            <div className="relative h-[500px] lg:h-[650px] flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  rotate: 0,
                  y: [0, -15, 0]
                }}
                transition={{ delay: 0.4, duration: 0.6, ease: "easeOut", y: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
                className="absolute top-10 right-5 lg:right-10 w-64 z-10"
              >
                <Card className="bg-white/60 backdrop-blur-lg border-white/30 shadow-xl overflow-hidden">
                  <CardContent className="p-4">
                    <Terminal className="w-6 h-6 text-blue-600 mb-3" />
                    <code className="text-xs text-gray-700 block whitespace-pre-wrap break-words">
                      <span className="text-purple-600">import</span> tensorflow <span className="text-purple-600">as</span> tf{"\n\n"}
                      {"  "}model = tf.keras.Sequential([{"\n"}
                      {"  "}tf.keras.layers.Dense(128),{"\n"}
                      {"  "}tf.keras.layers.Activation("relu"){"\n"}
                      ])
                    </code>
                  </CardContent>
                </Card>
              </motion.div>

              
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  rotate: 0,
                  y: [0, 15, 0]
                }}
                transition={{ delay: 0.5, duration: 0.6, ease: "easeOut", y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 } }}
                className="absolute bottom-10 left-5 lg:left-10 w-72 z-20"
              >
                <Card className="bg-white/60 backdrop-blur-lg border-white/30 shadow-xl">
                  <CardContent className="p-4">
                    <Brain className="w-7 h-7 text-blue-600 mb-3" />
                    <p className="text-sm font-semibold mb-3">Neural Network Architecture</p>
                    <div className="flex items-center space-x-2">
                      <div className="flex flex-col items-center space-y-1">
                        <span className="text-xs text-gray-500">Input</span>
                        <div className="w-4 h-4 bg-blue-200 rounded-full"></div>
                        <div className="w-4 h-4 bg-blue-200 rounded-full opacity-70"></div>
                        <div className="w-4 h-4 bg-blue-200 rounded-full opacity-40"></div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400 shrink-0" />
                      <div className="flex flex-col items-center space-y-1">
                        <span className="text-xs text-gray-500">Hidden</span>
                        <div className="w-5 h-5 bg-purple-300 rounded-full"></div>
                        <div className="w-5 h-5 bg-purple-300 rounded-full opacity-80"></div>
                        <div className="w-5 h-5 bg-purple-300 rounded-full opacity-60"></div>
                        <div className="w-5 h-5 bg-purple-300 rounded-full opacity-40"></div>
                      </div>
                       <ArrowRight className="w-4 h-4 text-gray-400 shrink-0" />
                      <div className="flex flex-col items-center space-y-1">
                         <span className="text-xs text-gray-500">Output</span>
                        <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  y: [0, -10, 0]
                }}
                transition={{ delay: 0.6, duration: 0.6, ease: "easeOut", y: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 } }}
                className="absolute top-1/3 -translate-y-1/2 left-1/4 -translate-x-1/2 w-56 z-0" // Positioned more centrally
              >
                <Card className="bg-white/60 backdrop-blur-lg border-white/30 shadow-xl overflow-hidden">
                  <CardContent className="p-4">
                    <Code className="w-6 h-6 text-purple-600 mb-3" />
                    <code className="text-xs text-gray-700 block whitespace-pre-wrap break-words">
                      <span className="text-blue-600">def</span> predict(data):{"\n"}
                      {"  "}processed = preprocess(data){"\n"}
                      {"  "}<span className="text-blue-600">return</span> model.predict(processed)
                    </code>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white/30 backdrop-blur-sm relative overflow-hidden border-t border-gray-200/50">
          <div className="absolute inset-0 bg-grid-blue-500/[0.02] -z-10" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Why Join Our Club?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Get hands-on experience with cutting-edge AI technologies and build your future in tech.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Brain, title: "Learn AI/ML", description: "Master Python, TensorFlow, and PyTorch through hands-on projects and expert guidance." },
                { icon: Code, title: "Build Projects", description: "Create real-world AI applications that solve actual problems and build your portfolio." },
                { icon: Users, title: "Join Community", description: "Connect with passionate peers in the AI/ML field." },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    {React.createElement(feature.icon, { className: "w-7 h-7 text-blue-600" })}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}