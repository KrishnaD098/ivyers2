import React, { useState, useEffect } from 'react';

const HomePage: React.FC = () => {
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Mouse tracking for parallax effects
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Intersection Observer for scroll animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fade-in-up');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = document.querySelectorAll('.scroll-animate');
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    // Auto-rotate testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const testimonials = [
        {
            name: "Alex Johnson",
            role: "Frontend Developer",
            avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=11",
            content: "MentorHub connected me with a senior developer who helped me improve my React skills. The mentoring sessions were incredibly valuable for my career growth.",
            rating: 5
        },
        {
            name: "Sarah Miller",
            role: "UX Designer",
            avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=12",
            content: "I was stuck on a complex UI problem, and my mentor helped me find an elegant solution. The platform made scheduling and feedback super easy.",
            rating: 5
        },
        {
            name: "David Chen",
            role: "Full Stack Engineer",
            avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=13",
            content: "As someone transitioning into tech, having a dedicated mentor made all the difference. The structured sessions and feedback helped me land my first developer job.",
            rating: 5
        }
    ];

    const features = [
        {
            icon: "👤",
            title: "Create Your Profile",
            description: "Sign up as a mentor or mentee and create your profile highlighting your skills and experience.",
            gradient: "from-blue-500 to-purple-600"
        },
        {
            icon: "📅",
            title: "Schedule Sessions",
            description: "Browse available mentors, view their availability, and request sessions at convenient times.",
            gradient: "from-purple-500 to-pink-600"
        },
        {
            icon: "🎥",
            title: "Meet and Learn",
            description: "Connect via video chat for your mentoring session and get personalized guidance and feedback.",
            gradient: "from-pink-500 to-orange-600"
        }
    ];

    const faqs = [
        {
            question: "How do I become a mentor?",
            answer: "Sign up for an account, select 'Mentor' as your role, complete your profile with your skills and experience, and set your availability. Our team will review your profile and approve you as a mentor."
        },
        {
            question: "How much does it cost to use MentorHub?",
            answer: "MentorHub is free for both mentors and mentees. We believe in making mentorship accessible to everyone in the tech community."
        },
        {
            question: "How long are mentoring sessions?",
            answer: "Standard mentoring sessions are 30 minutes, but mentors can set custom session lengths based on their preferences and availability."
        },
        {
            question: "Can I cancel or reschedule a session?",
            answer: "Yes, you can cancel or reschedule a session up to 24 hours before the scheduled time without any penalty."
        },
        {
            question: "How does the feedback system work?",
            answer: "After each session, both mentors and mentees can rate each other and leave comments. This feedback helps improve future sessions and builds reputation on the platform."
        }
    ];

    const stats = [
        {number: "500+", label: "Active Mentors", icon: "👥"},
        {number: "10,000+", label: "Mentoring Sessions", icon: "✅"},
        {number: "95%", label: "Satisfaction Rate", icon: "❤️"}
    ];

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Custom CSS for animations */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                
                @keyframes glow {
                    0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.3); }
                    50% { box-shadow: 0 0 40px rgba(139, 92, 246, 0.6); }
                }
                
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes slideInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                
                @keyframes slideInRight {
                    from {
                        opacity: 0;
                        transform: translateX(50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                
                @keyframes bounce {
                    0%, 20%, 53%, 80%, 100% { transform: translateY(0); }
                    40%, 43% { transform: translateY(-10px); }
                    70% { transform: translateY(-5px); }
                }
                
                @keyframes shimmer {
                    0% { background-position: -200px 0; }
                    100% { background-position: 200px 0; }
                }
                
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                
                .animate-glow {
                    animation: glow 3s ease-in-out infinite;
                }
                
                .animate-fade-in-up {
                    animation: fadeInUp 0.8s ease-out forwards;
                }
                
                .animate-slide-in-left {
                    animation: slideInLeft 0.8s ease-out forwards;
                }
                
                .animate-slide-in-right {
                    animation: slideInRight 0.8s ease-out forwards;
                }
                
                .animate-bounce-custom {
                    animation: bounce 2s infinite;
                }
                
                .shimmer {
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
                    background-size: 200px 100%;
                    animation: shimmer 2s infinite;
                }
                
                .parallax-bg {
                    background-attachment: fixed;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                }
                
                .glass-effect {
                    backdrop-filter: blur(10px);
                    background: rgba(255, 255, 255, 0.1);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                }
                
                .hover-lift {
                    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
                }
                
                .hover-lift:hover {
                    transform: translateY(-8px) scale(1.02);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
                }
                
                .text-gradient {
                    background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
                
                .opacity-0 {
                    opacity: 0;
                }
                
                .translate-y-4 {
                    transform: translateY(16px);
                }
            `}</style>

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>

                {/* Dynamic floating elements */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>

                {/* Parallax stars */}
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(50)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 3}s`,
                                transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
                            }}
                        />
                    ))}
                </div>

                <div className="relative container mx-auto px-4 py-20 lg:py-32">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8 animate-slide-in-left">
                            <div className="space-y-6">
                                <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect animate-bounce-custom">
                                    <span className="mr-2 text-yellow-400">✨</span>
                                    <span className="text-sm font-medium">Accelerate Your Career Journey</span>
                                </div>

                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                                    Connect with
                                    <span className="block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent animate-pulse">
                                        Expert Mentors
                                    </span>
                                </h1>

                                <p className="text-lg md:text-xl text-white/90 max-w-xl leading-relaxed">
                                    Schedule one-on-one mentoring sessions with experienced developers who can help you
                                    grow your skills and advance your career.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold px-8 py-4 rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center group">
                                    <span className="mr-2 group-hover:animate-bounce">🚀</span>
                                    Get Started Free
                                </button>
                                <button className="border border-white/30 text-white hover:bg-white/10 glass-effect px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center hover:border-white/50 group">
                                    <span className="mr-2 group-hover:animate-bounce">👥</span>
                                    Browse Mentors
                                </button>
                            </div>
                        </div>

                        <div className="relative animate-slide-in-right">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 animate-glow">
                                <img
                                    src="https://img.heroui.chat/image/ai?w=600&h=400&u=mentoring"
                                    alt="Mentoring session"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                <div className="absolute inset-0 shimmer"></div>
                            </div>

                            {/* Enhanced floating cards */}
                            <div className="absolute -top-6 -left-6 glass-effect rounded-xl p-4 border border-white/20 animate-float">
                                <div className="flex items-center space-x-3">
                                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                    <span className="text-sm font-medium">Live Sessions</span>
                                </div>
                            </div>

                            <div className="absolute -bottom-6 -right-6 glass-effect rounded-xl p-4 border border-white/20 animate-float" style={{animationDelay: '1s'}}>
                                <div className="flex items-center space-x-3">
                                    <span className="text-yellow-400 animate-pulse">⭐</span>
                                    <span className="text-sm font-medium">4.9/5 Rating</span>
                                </div>
                            </div>

                            {/*<div className="absolute top-1/2 -left-8 glass-effect rounded-xl p-3 border border-white/20 animate-float" style={{animationDelay: '2s'}}>*/}
                            {/*    <div className="flex items-center space-x-2">*/}
                            {/*        <span className="text-blue-400">💼</span>*/}
                            {/*        <span className="text-xs font-medium">500+ Experts</span>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </section>

            {/* Enhanced Stats Section */}
            <section className="py-16 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50"></div>
                <div className="container mx-auto px-4 relative">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center group scroll-animate opacity-0 translate-y-4" style={{animationDelay: `${index * 0.2}s`}}>
                                <div className="p-6 hover-lift rounded-xl bg-white shadow-sm hover:shadow-xl border border-gray-100">
                                    <div className="text-6xl mb-4 group-hover:animate-bounce">{stat.icon}</div>
                                    <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                                        {stat.number}
                                    </div>
                                    <p className="text-gray-600 font-medium text-sm">{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Enhanced Features Section */}
            <section id="features" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16 scroll-animate opacity-0 translate-y-4">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                            How MentorHub Works
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Our platform makes it easy to connect with experienced mentors and schedule productive
                            mentoring sessions in just three simple steps.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {features.map((feature, index) => (
                            <div key={index} className="group relative scroll-animate opacity-0 translate-y-4" style={{animationDelay: `${index * 0.2}s`}}>
                                <div className="h-full bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 hover-lift p-8 text-center border border-gray-100 relative overflow-hidden">
                                    {/* Animated background */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    <div className="relative z-10">
                                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} mb-6 text-white text-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                            {feature.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors duration-300">{feature.title}</h3>
                                        <p className="text-gray-600 leading-relaxed text-sm">{feature.description}</p>
                                    </div>
                                </div>

                                {/* Animated connection line */}
                                {index < features.length - 1 && (
                                    <div className="hidden md:block absolute top-16 -right-4 w-8 h-px bg-gradient-to-r from-blue-200 to-purple-200 animate-pulse"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Enhanced Testimonials Section */}
            <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-purple-100/20"></div>
                <div className="container mx-auto px-4 relative">
                    <div className="text-center mb-16 scroll-animate opacity-0 translate-y-4">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                            What Our Users Say
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Hear from developers who have used MentorHub to accelerate their careers and achieve their
                            goals.
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer hover-lift p-6 relative overflow-hidden ${
                                        activeTestimonial === index ? 'ring-2 ring-purple-400 scale-105' : ''
                                    }`}
                                    onClick={() => setActiveTestimonial(index)}
                                >
                                    {/* Animated background for active testimonial */}
                                    {activeTestimonial === index && (
                                        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 animate-pulse"></div>
                                    )}

                                    <div className="relative z-10">
                                        <div className="flex items-center mb-4">
                                            <img
                                                src={testimonial.avatar}
                                                alt={testimonial.name}
                                                className="w-12 h-12 rounded-full mr-3 object-cover border-2 border-purple-100 hover:border-purple-300 transition-colors duration-300"
                                            />
                                            <div>
                                                <h4 className="font-semibold text-gray-800 text-sm">{testimonial.name}</h4>
                                                <p className="text-gray-500 text-xs">{testimonial.role}</p>
                                            </div>
                                        </div>

                                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                            "{testimonial.content}"
                                        </p>

                                        <div className="flex space-x-1">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <span key={i} className="text-yellow-400 text-sm animate-pulse" style={{animationDelay: `${i * 0.1}s`}}>⭐</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Enhanced FAQ Section */}
            <section id="faq" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16 scroll-animate opacity-0 translate-y-4">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Find answers to common questions about MentorHub and how it can help you succeed.
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-3">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover-lift scroll-animate opacity-0 translate-y-4" style={{animationDelay: `${index * 0.1}s`}}>
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full text-left p-5 flex justify-between items-center focus:outline-none hover:bg-gray-50 transition-colors duration-300"
                                >
                                    <span className="text-base font-medium text-gray-800 pr-4">
                                        {faq.question}
                                    </span>
                                    <span className={`text-xl text-gray-500 transform transition-all duration-300 ${
                                        openFaq === index ? 'rotate-45 text-purple-500' : ''
                                    }`}>
                                        +
                                    </span>
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 ${
                                    openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                }`}>
                                    <div className="px-5 pb-5 border-t border-gray-100 pt-4">
                                        <p className="text-gray-600 leading-relaxed text-sm">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Enhanced CTA Section */}
            <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent"></div>

                {/* Animated particles */}
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 5}s`,
                                animationDuration: `${3 + Math.random() * 4}s`
                            }}
                        />
                    ))}
                </div>

                <div className="relative container mx-auto px-4 text-center">
                    <div className="max-w-4xl mx-auto scroll-animate opacity-0 translate-y-4">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            Ready to Accelerate Your Career?
                        </h2>
                        <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
                            Join thousands of developers who have already transformed their careers with MentorHub.
                            Start your journey today.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button className="bg-white text-gray-800 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg hover:shadow-xl group">
                                <span className="mr-2 group-hover:animate-bounce">🚀</span>
                                Get Started Now
                            </button>
                            <button className="border-2 border-white/30 text-white hover:bg-white/10 glass-effect px-8 py-3 rounded-lg transition-all duration-300 flex items-center justify-center hover:border-white/50 group">
                                <span className="mr-2 group-hover:animate-bounce">📅</span>
                                Schedule a Demo
                            </button>
                        </div>

                        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm opacity-75">
                            <div className="flex items-center animate-bounce" style={{animationDelay: '0.5s'}}>
                                <span className="mr-2 text-green-400">✅</span>
                                No Credit Card Required
                            </div>
                            <div className="flex items-center animate-bounce" style={{animationDelay: '1s'}}>
                                <span className="mr-2 text-green-400">✅</span>
                                100% Free to Start
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;