/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import {
  Moon,
  Sun,
  Github,
  Linkedin,
  Youtube,
  Instagram,
  Rss,
  Mail,
  ExternalLink,
  Code,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { backendSkills, devopsSkills, frontendSkills } from "@/data/skills";
import { projects } from "@/data/projects";
import { certificates } from "@/data/certificates";
import { bahasa } from "@/data/bahasa";
import Link from "next/link";


export default function Portfolio() {
  // At the beginning of your component
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check user preference
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
  };

  const getText = (
  text: string | { id: string; en: string },
  lang: "id" | "en"
) => {
  return typeof text === "string" ? text : text[lang];
};


  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [lang, setLang] = useState<"id" | "en">("en");
const menuItems = [
  { id: "about", idLabel: "Tentang", enLabel: "About" },
  { id: "projects", idLabel: "Proyek", enLabel: "Projects" },
  { id: "skills", idLabel: "Keahlian", enLabel: "Skills" },
  { id: "certificates", idLabel: "certificates", enLabel: "certificates" },
  { id: "contact", idLabel: "Kontak", enLabel: "Contact" },
];



  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="text-xl font-bold">
            Fansyah Dwi Krisnady
          </a>
          <div className="flex items-center gap-6">
           <ul className="hidden md:flex gap-6">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="hover:text-primary transition-colors"
                >
                  {lang === "id" ? item.idLabel : item.enLabel}
                </button>
              </li>
            ))}
          </ul>

            <div className="flex gap-2"> |
              <button
                onClick={() => setLang("id")}
                className={`text-sm px-2 py-1 rounded ${
                  lang === "id" ? "bg-primary text-white" : "hover:text-primary"
                }`}
              >
                ID
              </button>
              <button
                onClick={() => setLang("en")}
                className={`text-sm px-2 py-1 rounded ${
                  lang === "en" ? "bg-primary text-white" : "hover:text-primary"
                }`}
              >
                EN
              </button>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
              className="cursor-pointer"
            >
              {darkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-background -z-10"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
              Hi, Fansyah Dwi Krisnady
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Full-Stack Programmer | Help Desk & IT Support | Software Testing & QA
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="animate-fade-in cursor-pointer"
                style={{ animationDelay: "200ms" }}
              >
                View My Work
              </Button>
              <Button
              asChild
              size="lg"
              variant="outline"
              className="animate-fade-in cursor-pointer"
              style={{ animationDelay: "400ms" }}
            >
              <Link href="https://drive.google.com/file/d/1_qwrVYu141pPtZiH18Uke4Sf1UQ4N9VJ/view?usp=drive_link" target="_blank">
                Download Resume
              </Link>
            </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">{bahasa[lang].about.title}</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
                <img
                  src="/img/Foto.png"
                  alt="John Doe"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div>
              <p className="text-lg mb-6">
               {bahasa[lang].about.p1}
              </p>
              <p className="text-lg mb-6">
                {bahasa[lang].about.p2}
           
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="bg-background rounded-full px-4 py-2 text-sm font-medium shadow-sm">
                  PHP
                </div>
                <div className="bg-background rounded-full px-4 py-2 text-sm font-medium shadow-sm">
                  React
                </div>
                <div className="bg-background rounded-full px-4 py-2 text-sm font-medium shadow-sm">
                  C++
                </div>
                <div className="bg-background rounded-full px-4 py-2 text-sm font-medium shadow-sm">
                  Aws Lambada
                </div>
                <div className="bg-background rounded-full px-4 py-2 text-sm font-medium shadow-sm">
                  MYSQL
                </div>
                <div className="bg-background rounded-full px-4 py-2 text-sm font-medium shadow-sm">
                  Laravel
                </div>
                <div className="bg-background rounded-full px-4 py-2 text-sm font-medium shadow-sm">
                  WodPress Costum
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            {bahasa[lang].projects.title}
          </h2>
          <p className="text-xl text-center mb-16">
                {bahasa[lang].projects.subtitle}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <div className="aspect-video relative overflow-hidden bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={getText(project.title, lang)}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2"> {getText(project.title, lang)}</h3>
                  <p className="text-muted-foreground mb-4">
                   {getText(project.description, lang)}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.openSource && (
                      <Link href={project.repoUrl as string} target="_blank">
                        <Button
                          variant="outline"
                          size="sm"
                          className="gap-1 cursor-pointer"
                        >
                          <Code className="h-4 w-4" />
                          <span>View Demo</span>
                        </Button>
                      </Link>
                    )}

                    {project.demo && (
                      <Link href={project.demoUrl as string} target="_blank">
                        <Button size="sm" className="gap-1 cursor-pointer">
                          <ExternalLink className="h-4 w-4" />
                          <span>Preview</span>
                        </Button>
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      

  
      <section id="skills" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-primary">
                Backend Development
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {backendSkills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2 group">
                    <div className="w-10 h-10 rounded-md flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <skill.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-primary">
                Frontend Development
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {frontendSkills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2 group">
                    <div className="w-10 h-10 rounded-md flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <skill.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-primary">
                DevOps & Cloud
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {devopsSkills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2 group">
                    <div className="w-10 h-10 rounded-md flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <skill.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="certificates" className="py-20 bg-background">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-16">
      Certifications
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {certificates.map((cert, index) => (
        <div
          key={index}
          className="bg-muted/30 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="w-full h-40 mb-4 rounded-md bg-background flex items-center justify-center">
            <img
              src={cert.image}
              alt={cert.title}
              className="object-contain h-full"
            />
          </div>

          <h3 className="text-lg font-semibold mb-1">
            {cert.title}
          </h3>
          <p className="text-sm text-muted-foreground">
            {cert.issuer}
          </p>
          <p className="text-xs text-muted-foreground mb-4">
            {cert.year}
          </p>

          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full text-center px-4 py-2 text-sm font-medium rounded-md 
                       bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Preview
          </a>
        </div>
      ))}
    </div>
  </div>
</section>



      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">{bahasa[lang].contact.title}</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4">{bahasa[lang].contact.title}</h3>
              <p className="text-muted-foreground mb-6">
               {bahasa[lang].contact.subtitle}
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:fansyahdwi204@gmail.com"
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span>fansyahdwi204@gmail.com</span>
                </a>
                <div className="flex gap-4 mt-6">
                  <a
                    href="https://github.com/fansyah98"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-background flex items-center justify-center shadow-sm hover:text-primary transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </a>

                  <a
                    href="https://linkedin.com/in/fansyahdwikrisnady"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-background flex items-center justify-center shadow-sm hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>

                  <a
                    href="https://www.youtube.com/@webcodingmedia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-background flex items-center justify-center shadow-sm hover:text-primary transition-colors"
                  >
                    <Youtube className="h-5 w-5" />
                    <span className="sr-only">YouTube</span>
                  </a>

                  <a
                    href="https://www.instagram.com/fansyahdwikrisnady"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-background flex items-center justify-center shadow-sm hover:text-primary transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </a>
                                <div style={{ display: "none" }}>
                <Rss />
              </div>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1"
                  >
                   {bahasa[lang].contact.namePlaceholder}
                  </label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                  >
                    {bahasa[lang].contact.email}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1"
                  >
                    {bahasa[lang].contact.message}
                  </label>
                  <Textarea id="message" placeholder="Your message" rows={5} />
                </div>
                <Button type="submit" className="w-full">
                 {bahasa[lang].contact.send}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} Fansyah Dwi Krisandy. All rights reserved.
            </p>
            <div className="flex items-center gap-2 mt-4 md:mt-0">
              <span className="text-sm text-muted-foreground">Built with</span>
              <i>
                <a
                  href="https://nextjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-dark transition-colors"
                >
                  Next.js
                </a>
              </i>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
