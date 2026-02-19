import React from 'react'

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Mayank Sharma',
            role: 'Final Year Student',
            company: 'ACEIT Jaipur',
            image: '/mayabk_cust.png',
            content: 'The Cow Mastitis Detection System Yodani Labs built for us has revolutionized our early detection process. The accuracy of the YOLOv5 model is impressive, and the dashboard is incredibly user-friendly.',
            stars: 5,
        },
        {
            name: 'Mohit Gautam',
            role: 'Pr-Final Year Student',
            company: 'JECRC University',
            image: '/gautam.jpg',
            content: 'Implementation of the Crowd Stampede Detection system was seamless. The real-time alerts and IoT integration have significantly improved our safety monitoring capabilities during large events.',
            stars: 5,
        },
        {
            name: 'Priya Sharma',
            role: 'Operations Manager',
            company: 'LogisticsFlow',
            image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80',
            content: 'Their Traffic Congestion Detection app is a game-changer. The computer vision analysis is fast and precise, allowing us to optimize routes in real-time. Highly recommended!',
            stars: 5,
        },
    ]

    return (
        <section id="testimonials" className="py-24 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Client Success Stories
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mb-6"></div>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        See what our partners say about our innovative AI solutions.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-slate-800/50 backdrop-blur-lg p-8 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-2">
                            <div className="flex text-yellow-500 mb-4">
                                {[...Array(testimonial.stars)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-300 mb-6 italic leading-relaxed">
                                "{testimonial.content}"
                            </p>
                            <div className="flex items-center">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full border-2 border-purple-500 mr-4"
                                />
                                <div>
                                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                                    <p className="text-purple-400 text-sm">{testimonial.role}</p>
                                    <p className="text-gray-500 text-xs uppercase tracking-wide">{testimonial.company}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
