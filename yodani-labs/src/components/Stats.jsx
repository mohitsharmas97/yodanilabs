import React from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

const Stats = () => {
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    })

    const stats = [
        {
            value: 20,
            suffix: '+',
            label: 'Projects Delivered',
            icon: (
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
        {
            value: 3,
            suffix: '+',
            label: 'Years Experience',
            icon: (
                <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
        {
            value: 100,
            suffix: '%',
            label: 'Client Satisfaction',
            icon: (
                <svg className="w-8 h-8 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
        {
            value: 24,
            suffix: '/7',
            label: 'Support Available',
            icon: (
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
        },
    ]

    return (
        <section className="py-20 bg-slate-900 border-b border-white/5">
            <div className="container mx-auto px-6">
                <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                            <div className="flex justify-center mb-4 pt-4 pb-2 bg-slate-800/50 rounded-full w-20 h-20 mx-auto items-center border border-white/5 group-hover:border-purple-500/30 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] transition-all">
                                {stat.icon}
                            </div>
                            <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-2">
                                {inView ? (
                                    <CountUp end={stat.value} duration={2.5} separator="," />
                                ) : (
                                    '0'
                                )}
                                <span className="text-purple-500">{stat.suffix}</span>
                            </div>
                            <p className="text-gray-400 font-medium tracking-wide uppercase text-sm">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Stats
