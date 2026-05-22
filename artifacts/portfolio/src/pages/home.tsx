import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Award, Code2, Cpu, ExternalLink, Layers, Mail, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

import profileImg from "@assets/IMG_3049_1776301941348.webp";
import mudworldImg from "@assets/IMG_7246_1779447433922.jpeg";
import creatorsFactoryImg from "@assets/IMG_5533_1776301834929.jpeg";
import tessArtsImg from "@assets/IMG_5540_1776301834929.jpeg";
import ytShortImg from "@assets/IMG_7004_1779447433922.jpeg";
import ytrisNFTImg from "@assets/IMG_7236_1779447433922.jpeg";
import mudworldMerchImg from "@assets/IMG_6520_1779448173089.jpeg";

import replitCertImg from "@assets/IMG_3123_1779447698156.jpeg";
import replitLogoImg from "@assets/IMG_5488_1776302272437.png";
import auroraStudioImg from "@assets/IMG_7512_1779447433922.jpeg";
import rudyImg from "@assets/IMG_7424_1779447433922.jpeg";
import babyAIImg from "@assets/IMG_7239_1779447433922.jpeg";
import aiPipelineImg from "@assets/IMG_7485_1779447433922.jpeg";
import refaceImg from "@assets/IMG_3154_1779447698156.jpeg";

const projects = [
  {
    id: 1,
    title: "MudWorld",
    description:
      "A full fan commerce platform for NBA Josh x MuddyTribe. Features an official merch store, NFT drops on Ethereum, membership tiers, unreleased music access, and a live announcement system — built entirely on Replit.",
    tags: ["React", "E-commerce", "NFT", "Web3", "Built on Replit"],
    image: mudworldImg,
    link: "#",
  },
  {
    id: 2,
    title: "The Creators Factory",
    description:
      "An all-in-one creator platform to automate YouTube Shorts, grow audiences, and manage an entire creator business. AI-powered content management and analytics — developed with Replit Agent.",
    tags: ["React", "AI", "YouTube API", "Automation", "Built on Replit"],
    image: creatorsFactoryImg,
    link: "#",
  },
  {
    id: 3,
    title: "TessArts Gallery",
    description:
      "A curated NFT art gallery platform for original paintings by Tess. Users can browse, connect their Web3 wallet, and own authenticated pieces as NFTs. Built and deployed on Replit.",
    tags: ["React", "Web3.js", "NFT", "Wallet Connect", "Built on Replit"],
    image: tessArtsImg,
    link: "#",
  },
  {
    id: 4,
    title: "YouTube Shorts Automation",
    description:
      "Professional-grade automation engine for viral content growth. AI-powered captions, scheduled uploads, and real-time analytics — powered by Replit AI and deployed on Replit.",
    tags: ["React", "OpenAI", "YouTube API", "Analytics", "Built on Replit"],
    image: ytShortImg,
    link: "#",
  },
  {
    id: 5,
    title: "YTRISC — NFT Music EP",
    description:
      "A Web3 music experience for \"You're The Reason I Still Care\" by NBA Josh. Connect a wallet to unlock exclusive EP content, view on OpenSea — built on Replit with full Ethereum integration.",
    tags: ["Web3.js", "Ethereum", "MetaMask", "OpenSea", "Built on Replit"],
    image: ytrisNFTImg,
    link: "#",
  },
  {
    id: 6,
    title: "MudWorld — Official Artist Platform",
    description:
      "The official NBA Josh x MuddyTribe fan platform featuring a full merch store, limited drops, streaming links (Spotify, Apple Music, YouTube, TikTok), membership tiers, and live release announcements — built and deployed on Replit.",
    tags: ["React", "E-commerce", "Artist Platform", "Merch", "Built on Replit"],
    image: mudworldMerchImg,
    link: "#",
  },
  {
    id: 7,
    title: "Aurora Studio",
    description:
      "An AI-powered personal photo studio. Drop a selfie, an outfit reference, and a scene — Aurora dresses you, lights the stage, and delivers a professional-grade shot. Built on Replit with full image generation and upload pipeline.",
    tags: ["React", "AI", "Image Generation", "Mobile UI", "Built on Replit"],
    image: auroraStudioImg,
    link: "#",
  },
  {
    id: 8,
    title: "Rudy — Customizable AI Agent",
    description:
      "A fully customizable AI assistant you own forever. Powered by a Claude + Grok hybrid, Rudy lets you personalize its name, look, personality, and capabilities to match your workflow. One-time purchase, built on Replit.",
    tags: ["React", "Claude AI", "Grok", "OpenRouter", "Built on Replit"],
    image: rudyImg,
    link: "#",
  },
  {
    id: 9,
    title: "Baby AI",
    description:
      "A personal AI assistant with a vibe-based persona system. Switch between GPT-5, Gemini 3.1 Pro, Grok 4, DeepSeek, and more — all in one sleek dark interface. Built and deployed on Replit.",
    tags: ["React", "Multi-Model AI", "OpenAI", "Gemini", "Built on Replit"],
    image: babyAIImg,
    link: "#",
  },
  {
    id: 10,
    title: "AI Creative Pipeline Studio",
    description:
      "A multi-step AI workflow platform combining LLM scripting, image generation, and Seedance 2.0 video — all in one click. Preset workflows include UGC ad creation, image-to-video, and more. Built on Replit.",
    tags: ["React", "AI Workflows", "Video Gen", "Seedance", "Built on Replit"],
    image: aiPipelineImg,
    link: "#",
  },
  {
    id: 11,
    title: "REFACE — Cinematic AI Studio",
    description:
      "A cinematic AI generation platform made for artists, labels, and visual innovators. Dense, fast, and precise control over every pixel. Features a full studio, pricing plans, and AI-powered content creation — built on Replit.",
    tags: ["React", "AI", "Generative Art", "Studio", "Built on Replit"],
    image: refaceImg,
    link: "#",
  },
];

const expertise = [
  {
    title: "Replit AI Development",
    description: "I build full-stack applications using Replit Agent — from idea to deployed product, entirely inside Replit's AI-powered environment.",
    icon: <img src={replitLogoImg} alt="Replit" className="w-6 h-6 object-contain" />,
  },
  {
    title: "Frontend Engineering",
    description: "Building resilient, accessible, and highly interactive user interfaces using modern frameworks — all scaffolded and shipped via Replit.",
    icon: <Code2 className="w-6 h-6 text-primary" />,
  },
  {
    title: "AI Integration",
    description: "Connecting large language models and neural networks directly into intuitive user experiences using Replit's AI toolchain.",
    icon: <Cpu className="w-6 h-6 text-primary" />,
  },
  {
    title: "Web3 & E-commerce",
    description: "Designing and deploying Web3 platforms, NFT experiences, and full e-commerce stores — built fast on Replit.",
    icon: <Layers className="w-6 h-6 text-primary" />,
  },
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.2], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary/30 selection:text-primary">
      {/* Replit top banner */}
      <div className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-center gap-2 px-4 py-1.5 bg-orange-500/90 backdrop-blur-sm text-black text-xs font-bold tracking-wider">
        <img src={replitLogoImg} alt="Replit" className="w-3.5 h-3.5 object-contain" />
        BUILT EXCLUSIVELY ON REPLIT · REPLIT CERTIFIED LEVEL 3 PROFICIENT BUILDER
        <img src={replitLogoImg} alt="Replit" className="w-3.5 h-3.5 object-contain" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-7 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-background/50 border-b border-white/5">
        <div className="text-xl font-bold tracking-tighter text-white flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-background font-mono text-sm">
            JS
          </div>
          <span className="hidden sm:inline-block">Joseph Sunday</span>
          <span className="hidden md:flex items-center gap-1 ml-1 px-2 py-0.5 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-400 text-xs font-semibold">
            <img src={replitLogoImg} alt="Replit" className="w-3 h-3 object-contain" />
            Replit Builder
          </span>
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
      <section className="relative min-h-screen flex items-center justify-center pt-32">
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(120,80,255,0.3),rgba(0,0,0,0))]" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/80 to-background" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 md:gap-20 py-20">
          {/* Text */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex flex-wrap items-center gap-2 mb-4 justify-center md:justify-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Available for new projects — worldwide
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/40 bg-orange-500/10 text-orange-400 text-sm font-medium">
                <img src={replitLogoImg} alt="Replit" className="w-3.5 h-3.5 object-contain" />
                Replit Partner
              </div>
            </div>

            {/* Level 3 cert card */}
            <div className="flex items-center gap-4 mb-8 p-4 rounded-2xl border border-orange-500/30 bg-gradient-to-r from-orange-500/10 to-amber-500/5 max-w-sm mx-auto md:mx-0">
              <div className="flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden shadow-lg border border-orange-500/20">
                <img src={replitCertImg} alt="Replit Level 3 Certification" className="w-full h-full object-cover object-top" />
              </div>
              <div>
                <div className="flex items-center gap-1.5 mb-0.5">
                  <img src={replitLogoImg} alt="Replit" className="w-3.5 h-3.5 object-contain" />
                  <span className="text-orange-400 text-xs font-bold uppercase tracking-widest">Replit Certified</span>
                </div>
                <p className="text-white font-bold text-base leading-tight">Level 3 — Proficient Builder</p>
                <p className="text-orange-300/70 text-xs font-mono mt-0.5">@josephcrown920</p>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-tight mb-6">
              Engineering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Intelligent</span> Web
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10">
              I build full-stack AI-powered products exclusively on <span className="text-orange-400 font-semibold">Replit</span> — from Web3 platforms and creator tools to e-commerce stores and AI agents. Every project ships on Replit, start to finish.
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
                  <p className="text-primary text-sm font-medium">Web Developer</p>
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Built on Replit</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Every project I build lives on <span className="text-orange-400 font-semibold">Replit</span> — from development to deployment. I use Replit Agent to go from idea to live product faster than any other workflow.
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

          {/* Replit Certification */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 flex flex-col md:flex-row items-stretch gap-0 rounded-2xl border border-orange-500/30 overflow-hidden shadow-2xl"
          >
            {/* Left — cert image */}
            <div className="flex-shrink-0 w-full md:w-64 relative overflow-hidden">
              <img src={replitCertImg} alt="Replit Level 3 Proficient Builder" className="w-full h-64 md:h-full object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/20" />
            </div>

            {/* Right — info */}
            <div className="flex-1 p-8 bg-gradient-to-br from-orange-500/10 to-amber-500/5 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3">
                <img src={replitLogoImg} alt="Replit" className="w-5 h-5 object-contain" />
                <span className="text-orange-400 text-sm font-bold uppercase tracking-widest">Replit Official Certification</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold mb-1 text-white">Level 3 — Proficient Builder</h3>
              <p className="text-orange-300/80 font-mono text-sm mb-5">@josephcrown920 · NBA Josh Main panel</p>
              <p className="text-muted-foreground max-w-xl leading-relaxed mb-6">
                Certified by Replit at Level 3 for the ability to connect external services, configure applications properly, and optimize resource usage. I work exclusively on Replit — building, deploying, and scaling production-grade products entirely within the Replit ecosystem.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Connect External Services", "Configure Applications", "Optimize Resources", "Full-Stack on Replit"].map((skill) => (
                  <span key={skill} className="text-xs font-mono px-3 py-1.5 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-300">
                    ✓ {skill}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-24 relative z-10 bg-black/50 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Selected Works</h2>
              <p className="text-muted-foreground text-lg max-w-2xl">
                Real projects built and deployed with <span className="text-orange-400 font-semibold">Replit</span> — e-commerce platforms, creator tools, Web3 experiences, and more.
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
                        className={`text-xs font-mono px-3 py-1 rounded-full border ${
                          tag === "Built on Replit"
                            ? "text-orange-400 bg-orange-500/10 border-orange-500/30"
                            : "text-primary bg-primary/10 border-primary/20"
                        }`}
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
              DM me on Instagram or send an email. I build on <span className="text-orange-400 font-semibold">Replit</span> — fast, reliable, and AI-powered from day one.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-10 text-lg w-full sm:w-auto" asChild>
                <a href="https://instagram.com/NBAJosh71" target="_blank" rel="noopener noreferrer">
                  DM @NBAJosh71
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/10 hover:bg-white/5 h-14 px-10 text-lg w-full sm:w-auto" asChild>
                <a href="mailto:Josephcrown920@gmail.com">
                  <Mail className="mr-2 w-5 h-5" /> Josephcrown920@gmail.com
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5 bg-background relative z-10 text-center md:text-left">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-muted-foreground text-sm font-mono flex items-center gap-2">
            &copy; {new Date().getFullYear()} JOSEPH SUNDAY
            <span className="text-white/20">·</span>
            <span className="flex items-center gap-1 text-orange-400/70">
              <img src={replitLogoImg} alt="Replit" className="w-3.5 h-3.5 object-contain" />
              BUILT ON REPLIT
            </span>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground font-mono">
            <a href="https://instagram.com/NBAJosh71" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">INSTAGRAM</a>
            <a href="mailto:Josephcrown920@gmail.com" className="hover:text-primary transition-colors">EMAIL</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
