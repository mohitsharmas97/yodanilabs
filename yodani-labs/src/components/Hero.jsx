import React from 'react'

const Hero = () => {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/hero-bg.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}
        >
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-transparent to-indigo-900/50 animate-gradient"></div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center">
                {/* Company Logo/Name */}
                <div className="mb-8 animate-float">
                    <h1 className="text-7xl md:text-9xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 animate-gradient mb-4">
                        YODANI LABS
                    </h1>
                </div>

                {/* Tagline */}
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-wide">
                    Building Intelligent Software Solutions
                </h2>

                {/* Description */}
                <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
                    We transform ideas into cutting-edge AI-driven applications. From concept to deployment,
                    we deliver scalable, secure, and innovative software solutions that drive business growth.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <a
                        href="#portfolio"
                        className="group relative px-10 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50"
                    >
                        <span className="relative z-10">View Our Work</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </a>

                    <a
                        href="#contact"
                        className="group px-10 py-4 bg-transparent border-2 border-purple-400 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:bg-purple-400 hover:scale-110 hover:shadow-2xl hover:shadow-purple-400/50"
                    >
                        Get Free Quote
                    </a>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <svg className="w-6 h-6 text-purple-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-700"></div>
        </section>
    )
}

export default Hero
