import { Heart, Leaf, Users, Award, CheckCircle } from 'lucide-react';

const About = () => {
    const values = [
        {
            icon: <Heart className="h-12 w-12 text-jaggery-600" />,
            title: "Passion for Purity",
            description: "We're passionate about bringing you the purest, most natural jaggery products without any compromise on quality."
        },
        {
            icon: <Leaf className="h-12 w-12 text-jaggery-600" />,
            title: "Sustainable Farming",
            description: "Our commitment to sustainable and organic farming practices ensures environmental responsibility."
        },
        {
            icon: <Users className="h-12 w-12 text-jaggery-600" />,
            title: "Community Support",
            description: "We work directly with local farmers, supporting their livelihoods and preserving traditional methods."
        },
        {
            icon: <Award className="h-12 w-12 text-jaggery-600" />,
            title: "Excellence in Quality",
            description: "Every batch is carefully tested and meets our strict quality standards before reaching your table."
        }
    ];

    const certifications = [
        "USDA Organic Certified",
        "Fair Trade Certified",
        "Non-GMO Project Verified",
        "ISO 22000 Food Safety",
        "BRC Global Standard",
        "Kosher Certified"
    ];

    const timeline = [
        {
            year: "1985",
            title: "Our Humble Beginning",
            description: "Started as a small family farm in rural India, dedicated to traditional jaggery making."
        },
        {
            year: "1995",
            title: "Organic Certification",
            description: "Became one of the first jaggery producers to receive organic certification."
        },
        {
            year: "2005",
            title: "Global Expansion",
            description: "Began exporting our premium jaggery products to international markets."
        },
        {
            year: "2015",
            title: "Technology Integration",
            description: "Modernized our processing while maintaining traditional quality and flavor."
        },
        {
            year: "2024",
            title: "Sustainable Future",
            description: "Leading the industry in sustainable practices and community development."
        }
    ];

    const teamMembers = [
        {
            name: "Rajesh Kumar",
            position: "Founder & CEO",
            description: "With 30+ years in organic farming, Rajesh founded Pure Jaggery to share traditional sweetness with the world.",
            image: "https://img.freepik.com/premium-photo/posing-businessman-clinging-arm_961875-142389.jpg?ga=GA1.1.525998325.1749032042&semt=ais_items_boosted&w=740"
        },
        {
            name: "Priya Sharma",
            position: "Head of Quality",
            description: "A food scientist with expertise in organic certification, ensuring every product meets our highest standards.",
            image: "https://img.freepik.com/premium-photo/shot-confident-business-leader-standing-board-room-with-crossed-arms-looking-camera-businesswoman-leading-training-class-professionals_1298691-14411.jpg?ga=GA1.1.525998325.1749032042&semt=ais_items_boosted&w=740"
        },
        {
            name: "Michael Chen",
            position: "Sustainability Director",
            description: "Leading our environmental initiatives and farmer partnership programs for a sustainable future.",
            image: "https://img.freepik.com/free-photo/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated-background_662251-838.jpg?ga=GA1.1.525998325.1749032042&semt=ais_items_boosted&w=740"
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-jaggery-100 to-jaggery-200 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <h1 className="text-5xl md:text-6xl font-bold text-earth-800 leading-tight">
                                Our Story of
                                <span className="text-jaggery-600 block">Sweet Tradition</span>
                            </h1>
                            <p className="text-xl text-earth-600 leading-relaxed">
                                For over three decades, we've been committed to bringing you the finest,
                                most authentic jaggery products. Our journey began with a simple belief:
                                nature's sweetness shouldn't be compromised by artificial processes.
                            </p>
                        </div>

                        <div className="relative">
                            <div className="bg-white p-8 rounded-3xl shadow-2xl">
                                <img
                                    src="https://img.freepik.com/free-photo/delicious-jaggery-still-life-composition_23-2149161614.jpg?semt=ais_hybrid&w=740"
                                    alt="Traditional Jaggery Making Process"
                                    className="w-full h-80 object-cover rounded-2xl"
                                    onError={(e) => {
                                        e.currentTarget.src = "https://via.placeholder.com/600x320/f3f4f6/6b7280?text=Traditional+Jaggery+Making";
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Statement */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="section-title">Our Mission</h2>
                    <div className="max-w-4xl mx-auto">
                        <p className="text-2xl text-earth-700 leading-relaxed mb-8">
                            "To preserve the ancient art of jaggery making while delivering pure,
                            organic sweetness that nourishes both body and soul, supporting sustainable
                            farming communities worldwide."
                        </p>
                        <div className="w-24 h-1 bg-jaggery-600 mx-auto"></div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-jaggery-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="section-title">Our Core Values</h2>
                        <p className="text-xl text-earth-600 max-w-3xl mx-auto">
                            These values guide everything we do, from sourcing ingredients to delivering products to your doorstep
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                                <div className="flex justify-center mb-6">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold text-earth-800 mb-4">{value.title}</h3>
                                <p className="text-earth-600 leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="section-title">Our Journey</h2>
                        <p className="text-xl text-earth-600 max-w-3xl mx-auto">
                            From a small family farm to a globally recognized brand, here's how we've grown
                        </p>
                    </div>

                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-jaggery-200"></div>

                        {timeline.map((item, index) => (
                            <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                                    <div className="bg-white p-6 rounded-xl shadow-lg">
                                        <div className="text-jaggery-600 font-bold text-2xl mb-2">{item.year}</div>
                                        <h3 className="text-xl font-bold text-earth-800 mb-2">{item.title}</h3>
                                        <p className="text-earth-600">{item.description}</p>
                                    </div>
                                </div>

                                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-jaggery-600 rounded-full border-4 border-white shadow-lg"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className="py-20 bg-earth-800 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8">Certifications & Standards</h2>
                        <p className="text-xl text-earth-200 max-w-3xl mx-auto">
                            Our commitment to quality is validated by industry-leading certifications
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {certifications.map((cert, index) => (
                            <div key={index} className="flex items-center space-x-3 bg-earth-700 p-4 rounded-lg">
                                <CheckCircle className="h-6 w-6 text-jaggery-400 flex-shrink-0" />
                                <span className="text-earth-100 font-medium">{cert}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-jaggery-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="section-title">Meet Our Team</h2>
                        <p className="text-xl text-earth-600 max-w-3xl mx-auto">
                            The passionate people behind Pure Jaggery who make our mission possible
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <div className="h-64 overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={`${member.name} - ${member.position}`}
                                        className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                                        onError={(e) => {
                                            e.currentTarget.src = "https://via.placeholder.com/400x256/f3f4f6/6b7280?text=" + encodeURIComponent(`${member.name}\n${member.position}`);
                                        }}
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-earth-800 mb-2">{member.name}</h3>
                                    <p className="text-jaggery-600 font-medium mb-3">{member.position}</p>
                                    <p className="text-earth-600">{member.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-jaggery-600 to-jaggery-700 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Join Our Sweet Journey
                    </h2>
                    <p className="text-xl mb-8 text-jaggery-100 max-w-3xl mx-auto">
                        Experience the difference that traditional methods and pure ingredients make.
                        Taste the authenticity in every bite.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/products" className="bg-white text-jaggery-600 hover:bg-jaggery-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
                            Shop Our Products
                        </a>
                        <a href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-jaggery-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
                            Get in Touch
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About; 