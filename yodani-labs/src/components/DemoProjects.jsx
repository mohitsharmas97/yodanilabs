import React, { useState } from 'react'

const DemoProjects = () => {
    const [selectedProject, setSelectedProject] = useState(null)
    const [activeCategory, setActiveCategory] = useState('all')

    const projects = [
        {
            id: 1,
            title: 'SignLingua',
            category: 'AI/ML',
            description: 'Advanced sign language recognition system using computer vision and deep learning to bridge communication gaps.',
            videoUrl: 'https://youtu.be/H_dvI-_-1Z4',
            thumbnail: '/SignLingua.mp4', // Will use video as thumbnail
            technologies: ['Python', 'TensorFlow', 'OpenCV', 'Flask'],
            features: [
                'Real-time gesture recognition',
                'Multi-language support',
                'High accuracy detection',
                'User-friendly interface'
            ]

        },
        {
            id: 2,
            title: 'RailWise - Real Time Train Tracking App',
            category: 'AI/ML',
            description: 'An intelligent railway analytics platform that provides real-time train tracking and operational insights using IRCTC API data. The system delivers live status updates, delay predictions, route analysis, and performance insights through data-driven techniques.',
            videoUrl: 'https://youtu.be/DNbz8olq0ms',
            thumbnail: '/railway_project.mp4',
            technologies: ['Python', 'IRCTC API', 'Flask', 'Streamlit', 'Machine Learning', 'Data Analytics'],
            features: [
            'Live train status tracking using IRCTC API',
            'Delay prediction using machine learning models',
            'Route and schedule analysis',
            'Real-time alerts and notifications',
            'Interactive dashboard with analytics visualizations'
    ]
        },
        {
            id: 3,
            title: 'Tamil Inscription Recognition',
            category: 'AI/ML',
            description: 'Heritage preservation system using OCR and NLP to digitize and translate ancient Tamil inscriptions, making cultural artifacts accessible to researchers worldwide.',
            videoUrl: 'https://youtu.be/iD-Y-iJDKRc',
            thumbnail: '/Tamil_inscription.mp4',
            technologies: ['Python', 'OCR', 'NLP', 'Gemini AI', 'Computer Vision'],
            features: [
                'Ancient script recognition',
                'Multi-language translation',
                'Historical database integration',
                'Research collaboration tools'
            ]
        }
    ]

    const categories = ['all', 'AI/ML', 'Web App', 'Mobile', 'IoT']

    const filteredProjects = activeCategory === 'all'
        ? projects
        : projects.filter(p => p.category === activeCategory)

    const getYouTubeId = (url) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
        const match = url.match(regExp)
        return (match && match[2].length === 11) ? match[2] : null
    }

    const openModal = (project) => {
        setSelectedProject(project)
        document.body.style.overflow = 'hidden'
    }

    const closeModal = () => {
        setSelectedProject(null)
        document.body.style.overflow = 'auto'
    }

    return (
        <section id="demo-projects" className="py-24 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
                <div className="absolute w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Demo Projects</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mb-6"></div>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Explore our innovative solutions in action. Click on any project to see detailed demos and learn more.
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeCategory === category
                                ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg shadow-purple-500/50 scale-105'
                                : 'bg-slate-700/50 text-gray-300 hover:bg-slate-700 hover:scale-105'
                                }`}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 cursor-pointer"
                            onClick={() => openModal(project)}
                            style={{
                                animationDelay: `${index * 100}ms`
                            }}
                        >
                            {/* Video Thumbnail */}
                            <div className="relative h-64 overflow-hidden bg-slate-900">
                                {getYouTubeId(project.videoUrl) ? (
                                    <div className="w-full h-full relative group">
                                        <img
                                            src={`https://img.youtube.com/vi/${getYouTubeId(project.videoUrl)}/maxresdefault.jpg`}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                ) : (
                                    <video
                                        src={project.videoUrl}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        muted
                                        loop
                                        onMouseEnter={(e) => e.target.play()}
                                        onMouseLeave={(e) => {
                                            e.target.pause()
                                            e.target.currentTime = 0
                                        }}
                                    />
                                )}
                                {/* Play Button Overlay */}
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-purple-500/80 group-hover:bg-purple-500 flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                                        </svg>
                                    </div>
                                </div>
                                {/* Category Badge */}
                                <div className="absolute top-4 right-4 px-4 py-2 bg-purple-500/90 backdrop-blur-sm rounded-full text-white text-sm font-semibold">
                                    {project.category}
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-300 mb-4 line-clamp-2">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.slice(0, 3).map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 bg-slate-700/50 text-purple-300 text-sm rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {project.technologies.length > 3 && (
                                        <span className="px-3 py-1 bg-slate-700/50 text-gray-400 text-sm rounded-full">
                                            +{project.technologies.length - 3}
                                        </span>
                                    )}
                                </div>

                                {/* View Demo Button */}
                                <button className="w-full py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 group-hover:scale-105">
                                    View Full Demo →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-20">
                        <div className="text-6xl mb-4">🚀</div>
                        <h3 className="text-2xl font-bold text-white mb-2">No projects in this category yet</h3>
                        <p className="text-gray-400">Check back soon for more amazing demos!</p>
                    </div>
                )}

                {/* CTA Section */}
                <div className="mt-20 text-center">
                    <div className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/30 rounded-2xl p-8 max-w-3xl mx-auto">
                        <h3 className="text-3xl font-bold text-white mb-4">
                            Interested in Working Together?
                        </h3>
                        <p className="text-gray-300 mb-6">
                            Let's discuss how we can bring your ideas to life with cutting-edge technology solutions.
                        </p>
                        <a
                            href="#contact"
                            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
                        >
                            Get in Touch
                        </a>
                    </div>
                </div>
            </div>

            {/* Modal for Full Demo */}
            {selectedProject && (
                <div
                    className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
                    onClick={closeModal}
                >
                    <div
                        className="bg-slate-900 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto border-2 border-purple-500/50 shadow-2xl shadow-purple-500/30"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="sticky top-0 bg-slate-900 border-b border-purple-500/30 p-6 flex justify-between items-center z-10">
                            <div>
                                <h3 className="text-3xl font-bold text-white">{selectedProject.title}</h3>
                                <span className="text-purple-400 font-semibold">{selectedProject.category}</span>
                            </div>
                            <button
                                onClick={closeModal}
                                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-red-500 text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Video Player */}
                        <div className="p-6">
                            <div className="relative bg-black rounded-xl overflow-hidden mb-6 aspect-video">
                                {getYouTubeId(selectedProject.videoUrl) ? (
                                    <iframe
                                        src={`https://www.youtube.com/embed/${getYouTubeId(selectedProject.videoUrl)}?autoplay=1`}
                                        title={selectedProject.title}
                                        className="w-full h-full border-0 absolute inset-0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                ) : (
                                    <video
                                        src={selectedProject.videoUrl}
                                        controls
                                        autoPlay
                                        className="w-full max-h-[60vh]"
                                    />
                                )}
                            </div>

                            {/* Project Details */}
                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Description */}
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-3">About the Project</h4>
                                    <p className="text-gray-300 leading-relaxed mb-4">
                                        {selectedProject.description}
                                    </p>

                                    {/* Technologies */}
                                    <h4 className="text-xl font-bold text-white mb-3">Technologies Used</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.technologies.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 text-purple-300 rounded-lg font-semibold"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Features */}
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-3">Key Features</h4>
                                    <ul className="space-y-3">
                                        {selectedProject.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <span className="text-gray-300">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Contact CTA */}
                                    <div className="mt-6 p-4 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/30 rounded-lg">
                                        <p className="text-gray-300 mb-3">
                                            Want a similar solution for your business?
                                        </p>
                                        <a
                                            href="#contact"
                                            onClick={closeModal}
                                            className="block w-full py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 text-center"
                                        >
                                            Discuss Your Project
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default DemoProjects
