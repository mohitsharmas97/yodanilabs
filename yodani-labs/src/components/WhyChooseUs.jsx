import React from 'react'

const WhyChooseUs = () => {
    const reasons = [
        {
            title: 'Experienced ML Engineers',
            description: '3+ years of hands-on experience in building production-ready AI/ML solutions across various industries.',
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
            ),
        },
        {
            title: 'End-to-End Project Delivery',
            description: 'From initial consultation to deployment and beyond, we handle every aspect of your project with precision.',
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
        },
        {
            title: 'Client Support & Maintenance',
            description: 'Dedicated post-launch support and maintenance to ensure your software stays updated and performs optimally.',
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
        },
        {
            title: 'Scalable Architecture',
            description: 'We design systems that grow with your business, using cloud-native technologies and best practices.',
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
            ),
        },
    ]

    return (
        <section id="why-choose-us" className="py-24 bg-gradient-to-b from-slate-800 to-slate-900">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
                        Why Choose Us
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mb-6"></div>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        We combine technical expertise with a client-first approach to deliver exceptional results
                    </p>
                </div>

                {/* Reasons Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="group relative text-center bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
                        >
                            {/* Icon */}
                            <div className="mb-6 text-purple-400 inline-block group-hover:text-purple-300 transition-colors duration-300 group-hover:scale-110 transform">
                                {reason.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                                {reason.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {reason.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs
