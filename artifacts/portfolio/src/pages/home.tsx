import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Code2, Cpu, ExternalLink, Github, Layers, Mail, Terminal, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

import profileImg from "@assets/IMG_3049_1776301941348.webp";
import mudworldImg from "@assets/IMG_5215_1776301834929.jpeg";
import creatorsFactoryImg from "@assets/IMG_5533_1776301834929.jpeg";
import tessArtsImg from "@assets/IMG_5540_1776301834929.jpeg";
import ytShortImg from "@assets/IMG_4534_1776301834930.png";
import ytrisNFTImg from "@assets/IMG_4318_1776301834930.png";
import ytrisMerchImg from "@assets/IMG_5708_1776301834929.jpeg";

const projects = [
  {
    id: 1,
    title: "MudWorld",
    description:
      "A full fan commerce platform for NBA Josh x MuddyTribe. Features an official merch store, NFT drops on Ethereum, membership tiers, unreleased music access, and a live announcement system — all under a single dark, immersive brand experience.",
    tags: ["React", "E-commerce", "NFT", "Web3", "Replit AI"],
    image: mudworldImg,
    link: "#",
  },
  {
    id: 2,
    title: "The Creators Factory",
    description:
      "An all-in-one creator platform to automate YouTube Shorts, grow audiences, pitch to playlists, and manage an entire creator business. Features Google sign-in, a 30-min free trial flow, and AI-powered content management.",
    tags: ["React", "AI", "YouTube API", "Automation", "Replit AI"],
    image: creatorsFactoryImg,
    link: "#",
  },
  {
    id: 3,
    title: "TessArts Gallery",
    description:
      "A curated NFT art gallery platform for original paintings by Tess. Users can browse the collection, connect their Web3 wallet, and own authenticated pieces as NFTs. Artist login and community features built in.",
    tags: ["React", "Web3.js", "NFT", "Wallet Connect", "Replit AI"],
    image: tessArtsImg,
    link: "#",
  },
  {
    id: 4,
    title: "YouTube Shorts Automation",
    description:
      "Professional-grade automation engine for viral content growth. AI-powered captions, scheduled uploads, real-time analytics, and auto ingestion — built for creators serious about scaling their YouTube presence.",
    tags: ["React", "OpenAI", "YouTube API", "Analytics", "Replit AI"],
    image: ytShortImg,
    link: "#",
  },
  {
    id: 5,
    title: "YTRISC — NFT Music EP",
    description:
      "A Web3 music experience for \"You're The Reason I Still Care\" by NBA Josh. Connect a wallet to unlock exclusive nocturnal EP content, view on OpenSea, or get a wallet — all in a sleek Ethereum-native interface.",
    tags: ["Web3.js", "Ethereum", "MetaMask", "OpenSea", "Replit AI"],
    image: ytrisNFTImg,
    link: "#",
  },
  {
    id: 6,
    title: "YTRISC Merch Store",
    description:
      "A dedicated mobile-first merchandise storefront for NBA Josh's YTRISC collection. Features hoodies, tees, and limited drops with a clean dark UI, product cards, and seamless add-to-cart experience.",
    tags: ["React", "E-commerce", "Mobile UI", "Merch", "Replit AI"],
    image: ytrisMerchImg,
    link: "#",
  },
];

const expertise = [
  {
    title: "Frontend Engineering",
    description: "Building resilient, accessible, and highly interactive user interfaces using modern frameworks.",
    icon: <Code2 className="w-6 h-6 text-primary" />,
  },
  {
    title: "AI Integration",
    description: "Connecting large language models and neural networks directly into intuitive user experiences.",
    icon: <Cpu className="w-6 h-6 text-primary" />,
  },
  {
    title: "System Architecture",
    description: "Designing scalable, serverless, and edge-ready web applications from the ground up.",
    icon: <Layers className="w-6 h-6 text-primary" />,
  },
  {
    title: "Performance Optimization",
    description: "Ensuring 60fps animations, sub-second load times, and minimal bundle sizes.",
    icon: <Zap className="w-6 h-6 text-primary" />,
  },
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.2], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary/30 selection:text-primary">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-background/50 border-b border-white/5">
        <div className="text-xl font-bold tracking-tighter text-white flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-background font-mono text-sm">
            JS
          </div>
          <span className="hidden sm:inline-block">Joseph Sunday</span>
        </div>
        <div className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#work" className="hover:text-primary transition-colors">Work</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all">
            Hire Me
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center pt-20">
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(120,80,255,0.3),rgba(0,0,0,0))]" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/80 to-background" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* Text */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary mb-8 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for new projects — Port Harcourt & worldwide
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-tight mb-6">
              Engineering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Intelligent</span> Web
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10">
              I build AI-powered websites that grow businesses — from Web3 platforms to creator tools to e-commerce stores. Port Harcourt's go-to web developer.
            </p>

            <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 text-base" asChild>
                <a href="#work">View Projects <ArrowRight className="ml-2 w-4 h-4" /></a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/10 hover:bg-white/5 h-12 px-8 text-base" asChild>
                <a href="#contact">
                  <Mail className="mr-2 w-4 h-4" /> Get in Touch
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Photo */}
          <motion.div
            className="flex-shrink-0 w-64 md:w-80 lg:w-96"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/40 to-secondary/30 rounded-3xl blur-2xl opacity-60" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[3/4]">
                <img
                  src={profileImg}
                  alt="Joseph Sunday"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-bold text-lg tracking-tight">Joseph Sunday</p>
                  <p className="text-primary text-sm font-medium">Web Developer · Port Harcourt</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="about" className="py-24 relative z-10 bg-background border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Technical Arsenal</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Merging deep frontend expertise with modern AI capabilities to deliver applications that feel like magic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertise.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-white/5 hover:border-primary/30 transition-colors group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors" />
                <div className="w-12 h-12 rounded-lg bg-background border border-white/10 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-24 relative z-10 bg-black/50 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Selected Works</h2>
              <p className="text-muted-foreground text-lg max-w-2xl">
                Real projects built with AI tools — e-commerce platforms, creator tools, Web3 experiences, and more.
              </p>
            </div>
          </div>

          <div className="space-y-32">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-200px" }}
                transition={{ duration: 0.7 }}
                className={`flex flex-col gap-8 md:gap-16 ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} items-center`}
              >
                <div className="w-full md:w-3/5 group relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-white/10 bg-card">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                </div>

                <div className="w-full md:w-2/5 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6 flex-wrap">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    {project.description}
                  </p>
                  <div>
                    <Button className="bg-white text-black hover:bg-gray-200">
                      View Project <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contact" className="py-32 relative z-10 bg-background border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
              Ready for a website that{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                grows your business?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              DM me on Twitter or send a message. I'm currently accepting new projects — from e-commerce to Web3 to AI-powered platforms.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-10 text-lg w-full sm:w-auto" asChild>
                <a href="https://twitter.com/NBAJosh71" target="_blank" rel="noopener noreferrer">
                  DM @NBAJosh71
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/10 hover:bg-white/5 h-14 px-10 text-lg w-full sm:w-auto" asChild>
                <a href="mailto:">
                  <Mail className="mr-2 w-5 h-5" /> Send Email
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5 bg-background relative z-10 text-center md:text-left">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-muted-foreground text-sm font-mono">
            &copy; {new Date().getFullYear()} JOSEPH SUNDAY — PORT HARCOURT'S GO-TO WEB DEVELOPER
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground font-mono">
            <a href="https://twitter.com/NBAJosh71" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">TWITTER</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
