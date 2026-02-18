import React from 'react'

const Portfolio = () => {
    // This is where you'll add your projects!
    // Each project should have: title, description, techStack, githubLink, liveLink, and optionally an image
    const projects = [
        {
            title: 'Project Name 1',
            description: 'Brief description of the project and its key features. What problems does it solve?',
            techStack: ['React', 'Node.js', 'TensorFlow', 'MongoDB'],
            githubLink: 'https://github.com/yourusername/project1',
            liveLink: 'https://project1.com',
            image: null, // You can add image path here later
        },
        {
            title: 'MINDAEYE',
            description: 'MINDAEYE is an AI-based diagnostic platform that detects diabetic retinopathy and brain tumors from medical images. It combines deep learning, chatbot support, and report generation to assist in early disease detection and medical research.',
            techStack: ['Python', 'FastAPI', 'PostgreSQL', 'Docker'],
            githubLink: 'https://github.com/mohitsharmas97/MIND-A-EYE',
            liveLink: 'https://project2.com',
            image: null,
        },
        {
            title: 'Project Name 3',
            description: 'Brief description of the project and its key features. What problems does it solve?',
            techStack: ['Next.js', 'TypeScript', 'Prisma', 'AWS'],
            githubLink: 'https://github.com/yourusername/project3',
            liveLink: 'https://project3.com',
            image: null,
        },
        // Add more projects here following the same structure
    ]

    return (
        <section id="portfolio" className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
                        Our Work
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mb-6"></div>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Showcasing our successful projects and client solutions
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
                        >
                            {/* Project Image Placeholder */}
                            <div className="relative h-48 bg-gradient-to-br from-purple-600/20 to-indigo-600/20 flex items-center justify-center overflow-hidden">
                                {project.image ? (
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                                ) : (
                                    <svg className="w-20 h-20 text-purple-400/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.techStack.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-3 py-1 text-xs font-semibold text-purple-300 bg-purple-900/30 rounded-full border border-purple-500/30"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex gap-4">
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-white font-semibold transition-all duration-300 hover:scale-105"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                        </svg>
                                        GitHub
                                    </a>

                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-lg text-white font-semibold transition-all duration-300 hover:scale-105"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                        Live
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Add more projects button */}
                <div className="text-center mt-12">
                    <p className="text-gray-400 text-sm">
                        💡 To add more projects, edit the <code className="text-purple-400 bg-slate-800 px-2 py-1 rounded">projects</code> array in <code className="text-purple-400 bg-slate-800 px-2 py-1 rounded">src/components/Portfolio.jsx</code>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Portfolio
