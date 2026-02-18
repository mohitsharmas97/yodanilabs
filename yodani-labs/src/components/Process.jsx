import React from 'react'

const Process = () => {
    const steps = [
        {
            number: '01',
            title: 'Requirement Analysis',
            description: 'We begin by understanding your business goals, technical requirements, and project scope through detailed discussions.',
        },
        {
            number: '02',
            title: 'Architecture Planning',
            description: 'Our team designs a scalable, secure architecture tailored to your needs, selecting the best technologies and frameworks.',
        },
        {
            number: '03',
            title: 'Development',
            description: 'We build your solution using agile methodologies, with regular updates and iterative feedback cycles.',
        },
        {
            number: '04',
            title: 'Testing',
            description: 'Comprehensive testing ensures quality, performance, and security before deployment through automated and manual testing.',
        },
        {
            number: '05',
            title: 'Deployment',
            description: 'We deploy your application to production with zero-downtime strategies and comprehensive monitoring setup.',
        },
        {
            number: '06',
            title: 'Post-Launch Support',
            description: 'Ongoing maintenance, updates, and technical support to ensure long-term success and optimal performance.',
        },
    ]

    return (
        <section id="process" className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
                        Our Process
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mb-6"></div>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        A proven methodology to transform your ideas into successful software solutions
                    </p>
                </div>

                {/* Process Steps */}
                <div className="max-w-5xl mx-auto">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="group relative mb-8 last:mb-0"
                        >
                            <div className="flex gap-6 items-start">
                                {/* Step Number */}
                                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center text-3xl font-black text-white group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/30">
                                    {step.number}
                                </div>

                                {/* Step Content */}
                                <div className="flex-1 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-purple-500/20 group-hover:border-purple-500/50 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-purple-500/20">
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>

                            {/* Connecting Line */}
                            {index < steps.length - 1 && (
                                <div className="ml-10 h-8 w-0.5 bg-gradient-to-b from-purple-500 to-purple-500/30"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Process
