import React, { useState } from 'react'

const FAQ = () => {
    const faqs = [
        {
            question: "How long does a typical AI/ML project take?",
            answer: "Project timelines vary based on complexity. A Proof of Concept (PoC) typically takes 2-4 weeks, while a full-scale production system can take 2-4 months. We provide a detailed timeline during our initial consultation."
        },
        {
            question: "Do you work with startups, or only established companies?",
            answer: "We work with both! We love helping startups build their MVPs and scale their technology, as well as assisting established enterprises in integrating AI into their existing workflows."
        },
        {
            question: "What industries do you specialize in?",
            answer: "Our core expertise lies in AgriTech, Smart Cities, Healthcare, and Transportation. However, our AI and development solutions are adaptable to Retail, Finance, and Education sectors as well."
        },
        {
            question: "What's included in your post-launch support?",
            answer: "We offer various support packages including bug fixes, performance monitoring, model retraining, and feature updates to ensure your solution remains robust and efficient."
        },
        {
            question: "Can you help with just the AI/ML part of our project?",
            answer: "Absolutely. We can integrate custom AI models into your existing software ecosystem, or build a complete end-to-end solution depending on your needs."
        },
        {
            question: "How do you handle data privacy and security?",
            answer: "We follow strict security protocols and industry best practices. We are happy to sign NDAs and ensure that your proprietary data remains confidential and secure throughout the development process."
        }
    ]

    const [activeIndex, setActiveIndex] = useState(null)

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    return (
        <section id="faq" className="py-24 bg-slate-900">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Frequently Asked Questions
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mb-6"></div>
                    <p className="text-gray-300 text-lg">
                        Common questions about our services and process.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`bg-slate-800/50 rounded-xl overflow-hidden border transition-all duration-300 ${activeIndex === index ? 'border-purple-500 shadow-lg shadow-purple-900/20' : 'border-slate-700 hover:border-slate-600'
                                }`}
                        >
                            <button
                                className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none"
                                onClick={() => toggleAccordion(index)}
                            >
                                <span className={`text-lg font-semibold ${activeIndex === index ? 'text-purple-400' : 'text-white'}`}>
                                    {faq.question}
                                </span>
                                <span className={`ml-4 transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180 text-purple-400' : 'text-gray-400'}`}>
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </button>
                            <div
                                className={`px-8 transition-all duration-300 ease-in-out overflow-hidden ${activeIndex === index ? 'max-h-48 opacity-100 pb-6' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <p className="text-gray-300 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FAQ
