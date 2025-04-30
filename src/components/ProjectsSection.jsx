import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-shop for video games",
    description: "A modern e-commerce platform for browsing, purchasing, and managing digital video games, built with a focus on performance, usability, and secure transactions",
    image: "/projects/project1.png",
    tags: ["React", "SpringBoot", "PostgreSQL"],
    demoUrl: "https://www.youtube.com/watch?v=IPq60tyWosU",
    githubUrl: "https://github.com/Stefansse/GameBazzar-backend",
  },
  {
    id: 2,
    title: "Social Media App",
    description:
      "BlogBuster is a dynamic social media platform designed to empower users to share stories, insights, and creative content through engaging blog-style posts.",
    image: "/projects/project2.png",
    tags: ["TypeScript", "Spring Boot", "MySQL"],
    demoUrl: "https://youtu.be/TxhOBaufjTs",
    githubUrl: "https://github.com/stojchevskiboris/BlogBuster-Backend",
  },
  {
    id: 3,
    title: "Wineries in North Macedonia",
    description:
      "Wineries of North Macedonia is a modern web app designed to explore and celebrate the country's rich winemaking culture. The app showcases detailed profiles of local wineries, including their history, grape varieties, and signature wines.",
    image: "/projects/project3.png",
    tags: ["React", "Spring Boot", "Scraping"],
    demoUrl: "https://www.youtube.com/watch?v=mvkt7t9EOu8",
    githubUrl: "https://github.com/Stefansse/DIANS-Dom1",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Stefansse"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};