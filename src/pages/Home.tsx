import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, Truck, Shield, Award, ArrowRight, Eye } from 'lucide-react';
import { products } from '../data/products';

const Home = () => {
    // Hero slideshow images
    const heroImages = [
        "https://img.freepik.com/free-photo/beautiful-still-life-with-herbal-medicine_23-2149292020.jpg?ga=GA1.1.525998325.1749032042&semt=ais_items_boosted&w=740",
        "https://img.freepik.com/free-photo/natural-cosmetic-product-collection_23-2148574896.jpg?ga=GA1.1.525998325.1749032042&semt=ais_items_boosted&w=740",
        "https://img.freepik.com/free-photo/still-life-beauty-products-based-regenerative-agriculture_23-2150721409.jpg?ga=GA1.1.525998325.1749032042&semt=ais_items_boosted&w=740",
        "https://img.freepik.com/free-photo/gardener-chooses-liquid-fertilizer-shop_1398-5074.jpg?ga=GA1.1.525998325.1749032042&semt=ais_items_boosted&w=740",
        "https://img.freepik.com/free-photo/worker-checking-bottles-juice-factory_107420-96528.jpg?ga=GA1.1.525998325.1749032042&semt=ais_items_boosted&w=740"
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Auto-rotate images every 1 second
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                (prevIndex + 1) % heroImages.length
            );
        }, 2500); // Change every 2.5 second

        return () => clearInterval(interval);
    }, [heroImages.length]);

    const features = [
        {
            icon: <Shield className="h-12 w-12 text-organic-600" />,
            title: "100% Organic",
            description: "Pure, natural jaggery with no artificial additives or preservatives"
        },
        {
            icon: <Truck className="h-12 w-12 text-organic-600" />,
            title: "Farm Fresh",
            description: "Directly sourced from traditional farms using time-honored methods"
        },
        {
            icon: <Award className="h-12 w-12 text-organic-600" />,
            title: "Premium Quality",
            description: "Carefully selected and processed to maintain nutritional value"
        }
    ];

    // Get first 3 products for featured section
    const featuredProducts = products.slice(0, 3);

    // Customer testimonials data
    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            position: "Head Chef",
            company: "Green Valley Restaurant",
            image: "https://img.freepik.com/free-photo/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-with-straight-blonde-hair-expresses-positiveness-poses_176420-13176.jpg?ga=GA1.1.525998325.1749032042&semt=ais_items_boosted&w=740",
            rating: 5,
            review: "The organic jaggery from Pure Jaggery has completely transformed our dessert menu. Our customers love the authentic taste and natural sweetness. The consistent quality and reliable supply make them our trusted partner for all our natural sweetener needs."
        },
        {
            id: 2,
            name: "Rebecca Martinez",
            position: "Quality Manager",
            company: "Artisan Bakery Co.",
            image: "https://img.freepik.com/free-photo/stylish-businesswoman-with-glasses_23-2147989567.jpg?ga=GA1.1.525998325.1749032042&semt=ais_items_boosted&w=740",
            rating: 5,
            review: "As a wholesale buyer, I need suppliers I can trust. Pure Jaggery delivers exceptional quality every single time. Their organic certification and traditional processing methods align perfectly with our artisan bakery's values and quality standards."
        },
        {
            id: 3,
            name: "Michael Thompson",
            position: "Operations Director",
            company: "Natural Foods Distribution",
            image: "https://img.freepik.com/free-photo/handsome-happy-bearded-man_74855-2827.jpg?ga=GA1.1.525998325.1749032042&semt=ais_items_boosted&w=740",
            rating: 5,
            review: "We've been sourcing jaggery from various suppliers for years, but Pure Jaggery stands out with their premium quality and excellent customer service. Their bulk pricing and flexible delivery options make them ideal for our distribution network."
        },
        {
            id: 4,
            name: "Raj Patel",
            position: "Procurement Manager",
            company: "Wellness Food Manufacturing",
            image: "https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129416.jpg?ga=GA1.1.525998325.1749032042&semt=ais_items_boosted&w=740",
            rating: 5,
            review: "Pure Jaggery has been instrumental in helping us create healthier product lines. Their variety of jaggery types and consistent quality have enabled us to expand our natural sweetener offerings. Excellent partnership for B2B requirements."
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-organic-100 to-nature-200 py-20 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <h1 className="text-5xl md:text-6xl font-bold text-earth-800 leading-tight">
                                Pure, Natural
                                <span className="text-organic-600 block">Jaggery</span>
                            </h1>
                            <p className="text-xl text-earth-600 leading-relaxed">
                                Experience the authentic taste of traditional jaggery. Our organic,
                                farm-fresh jaggery is made using time-honored methods, preserving
                                all the natural goodness and rich flavors.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/products" className="btn-primary">
                                    Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                                <Link to="/about" className="btn-secondary">
                                    Learn More
                                </Link>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-white p-8 rounded-3xl shadow-2xl">
                                <img
                                    src={heroImages[currentImageIndex]}
                                    alt="Traditional Jaggery Making"
                                    className="w-full h-80 object-cover rounded-2xl transition-opacity duration-500"
                                    onError={(e) => {
                                        e.currentTarget.src = "https://via.placeholder.com/600x320/f3f4f6/6b7280?text=Traditional+Jaggery+Making";
                                    }}
                                />
                                {/* Slideshow indicators */}
                                <div className="flex justify-center mt-4 space-x-2">
                                    {heroImages.map((_, index) => (
                                        <div
                                            key={index}
                                            className={`w-2 h-2 rounded-full transition-colors duration-300 ${index === currentImageIndex
                                                ? 'bg-organic-600'
                                                : 'bg-earth-300'
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="absolute -top-4 -right-4 bg-organic-600 text-white p-4 rounded-full">
                                <Star className="h-8 w-8" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="section-title">Why Choose Our Jaggery?</h2>
                        <p className="text-xl text-earth-600 max-w-3xl mx-auto">
                            We're committed to bringing you the highest quality jaggery that's both delicious and nutritious
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="text-center p-8 rounded-xl bg-organic-50 hover:bg-organic-100 transition-colors duration-300">
                                <div className="flex justify-center mb-6">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-earth-800 mb-4">{feature.title}</h3>
                                <p className="text-earth-600 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-20 bg-organic-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="section-title">Featured Products</h2>
                        <p className="text-xl text-earth-600 max-w-3xl mx-auto">
                            Discover our most popular jaggery varieties, each crafted with care and tradition
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {featuredProducts.map((product) => (
                            <div key={product.id} className="product-card">
                                <div className="aspect-square overflow-hidden">
                                    <img
                                        src={product.images[0]}
                                        alt={product.name}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                        onError={(e) => {
                                            e.currentTarget.src = "https://via.placeholder.com/400x400/f3f4f6/6b7280?text=" + encodeURIComponent(product.name);
                                        }}
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-xl font-bold text-earth-800">{product.name}</h3>
                                        <div className="flex items-center space-x-1">
                                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                            <span className="text-sm text-earth-600">{product.rating}</span>
                                        </div>
                                    </div>
                                    <p className="text-earth-600 mb-4">{product.shortDescription}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-2xl font-bold text-jaggery-600">${product.price.toFixed(2)}</span>
                                        <Link
                                            to={`/products/${product.id}`}
                                            className="bg-organic-600 hover:bg-organic-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2"
                                        >
                                            <Eye className="h-4 w-4" />
                                            <span>View Details</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            to="/products"
                            className="inline-flex items-center justify-center bg-gradient-to-r from-organic-600 to-organic-700 hover:from-organic-700 hover:to-organic-800 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg group"
                        >
                            <span>View All Products</span>
                            <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                        <p className="mt-4 text-sm text-earth-500 font-medium">
                            Discover our complete range of premium jaggery products
                        </p>
                    </div>
                </div>
            </section>

            {/* Customer Testimonials Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="section-title">What Our Business Partners Say</h2>
                        <p className="text-xl text-earth-600 max-w-3xl mx-auto">
                            Trusted by restaurants, bakeries, and food manufacturers across the country
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="bg-organic-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                {/* Rating Stars */}
                                <div className="flex justify-center mb-4">
                                    {[...Array(testimonial.rating)].map((_, index) => (
                                        <Star key={index} className="h-5 w-5 text-yellow-400 fill-current" />
                                    ))}
                                </div>

                                {/* Review Text */}
                                <blockquote className="text-earth-600 text-sm leading-relaxed mb-6 italic">
                                    "{testimonial.review}"
                                </blockquote>

                                {/* Customer Info */}
                                <div className="text-center">
                                    <div className="mb-4">
                                        <img
                                            src={testimonial.image}
                                            alt={`${testimonial.name} - ${testimonial.position}`}
                                            className="w-16 h-16 rounded-full mx-auto object-cover shadow-md border-2 border-organic-200"
                                            onError={(e) => {
                                                e.currentTarget.src = "https://via.placeholder.com/64x64/f3f4f6/6b7280?text=" + encodeURIComponent(testimonial.name.charAt(0));
                                            }}
                                        />
                                    </div>
                                    <h4 className="font-bold text-earth-800 text-lg">{testimonial.name}</h4>
                                    <p className="text-organic-600 font-medium text-sm">{testimonial.position}</p>
                                    <p className="text-earth-500 text-xs mt-1">{testimonial.company}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Trust Indicators */}
                    <div className="mt-16 text-center">
                        <div className="bg-gradient-to-r from-organic-100 to-nature-100 rounded-xl p-8">
                            <h3 className="text-2xl font-bold text-earth-800 mb-4">Trusted by 500+ Businesses</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                                <div>
                                    <div className="text-3xl font-bold text-organic-600">500+</div>
                                    <div className="text-earth-600 text-sm font-medium">Business Partners</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-organic-600">98%</div>
                                    <div className="text-earth-600 text-sm font-medium">Customer Satisfaction</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-organic-600">15+</div>
                                    <div className="text-earth-600 text-sm font-medium">Years Experience</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-organic-600">24/7</div>
                                    <div className="text-earth-600 text-sm font-medium">Customer Support</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-organic-600 to-nature-700 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Ready to Experience Pure Sweetness?
                    </h2>
                    <p className="text-xl mb-8 text-organic-100 max-w-3xl mx-auto">
                        Join thousands of satisfied customers who have made the switch to our organic jaggery
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/products" className="bg-white text-organic-600 hover:bg-organic-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
                            Shop Now
                        </Link>
                        <Link to="/contact" className="border-2 border-white text-white hover:bg-white hover:text-organic-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home; 