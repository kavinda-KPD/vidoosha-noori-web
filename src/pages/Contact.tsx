import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Facebook, Instagram, Twitter, Package } from 'lucide-react';

const Contact = () => {
    const location = useLocation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        productId: '',
        productName: '',
        company: '',
        quantity: ''
    });

    // Pre-fill form if coming from product page
    useEffect(() => {
        if (location.state) {
            const { productName, productId, inquiryType } = location.state;
            setFormData(prev => ({
                ...prev,
                productId: productId?.toString() || '',
                productName: productName || '',
                subject: inquiryType === 'quotation' ? 'quotation-request' : prev.subject,
                message: productName
                    ? `Hi, I'm interested in getting a quotation for ${productName}. Please provide details on bulk pricing, minimum order quantities, and delivery terms.\n\nAdditional requirements:\n`
                    : prev.message
            }));
        }
    }, [location.state]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        // Reset form
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
            productId: '',
            productName: '',
            company: '',
            quantity: ''
        });
        alert('Thank you for your inquiry! We\'ll get back to you with a detailed quotation within 24 hours.');
    };

    const contactInfo = [
        {
            icon: <Phone className="h-6 w-6" />,
            title: "Phone",
            details: ["+1 (555) 123-4567", "+1 (555) 123-4568"],
            description: "Mon-Fri 9AM-6PM EST"
        },
        {
            icon: <Mail className="h-6 w-6" />,
            title: "Email",
            details: ["info@purejaggery.com", "sales@purejaggery.com"],
            description: "We respond within 24 hours"
        },
        {
            icon: <MapPin className="h-6 w-6" />,
            title: "Address",
            details: ["123 Farm Road", "Organic Valley, CA 90210"],
            description: "Visit our farm store"
        },
        {
            icon: <Clock className="h-6 w-6" />,
            title: "Business Hours",
            details: ["Mon-Fri: 9AM-6PM", "Sat-Sun: 10AM-4PM"],
            description: "EST Time Zone"
        }
    ];

    const faqs = [
        {
            question: "What makes your jaggery organic?",
            answer: "Our jaggery is certified organic by USDA standards. We use no artificial additives, preservatives, or chemical processing. Our sugarcane is grown without synthetic pesticides or fertilizers."
        },
        {
            question: "How should I store jaggery products?",
            answer: "Store in a cool, dry place away from direct sunlight. Keep in an airtight container to maintain freshness. Properly stored jaggery can last 12-18 months."
        },
        {
            question: "Do you offer bulk or wholesale pricing?",
            answer: "Yes! We offer competitive wholesale pricing for bulk orders. Contact us for custom quotations based on your specific requirements, including quantity, delivery schedule, and packaging preferences."
        },
        {
            question: "What are your minimum order quantities?",
            answer: "Minimum order quantities vary by product. For retail quantities, no minimum applies. For wholesale orders, we typically require minimum orders of 100kg per product variety."
        },
        {
            question: "How long does delivery take?",
            answer: "Standard delivery takes 3-5 business days within the US. For bulk orders, delivery time may be 7-14 days depending on quantity and location. International shipping available on request."
        },
        {
            question: "What is your return policy?",
            answer: "We offer a 30-day satisfaction guarantee. If you're not completely happy with your purchase, contact us for a full refund or exchange."
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-organic-600 to-nature-700 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        {formData.productName ? 'Request Quotation' : 'Get In Touch'}
                    </h1>
                    <p className="text-xl text-organic-100 max-w-3xl mx-auto">
                        {formData.productName
                            ? `Get a personalized quotation for ${formData.productName} and discuss your bulk order requirements with our team.`
                            : 'We\'d love to hear from you! Whether you have questions about our products, need support, or want to discuss wholesale opportunities, we\'re here to help.'
                        }
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Form */}
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <div className="flex items-center space-x-3 mb-8">
                            {formData.productName ? (
                                <Package className="h-8 w-8 text-organic-600" />
                            ) : (
                                <MessageCircle className="h-8 w-8 text-organic-600" />
                            )}
                            <h2 className="text-3xl font-bold text-earth-800">
                                {formData.productName ? 'Quotation Request' : 'Send us a Message'}
                            </h2>
                        </div>

                        {formData.productName && (
                            <div className="bg-organic-50 border border-organic-200 rounded-lg p-4 mb-6">
                                <div className="flex items-center space-x-2">
                                    <Package className="h-5 w-5 text-organic-600" />
                                    <span className="font-medium text-earth-800">Product Inquiry:</span>
                                    <span className="text-organic-700 font-bold">{formData.productName}</span>
                                </div>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-earth-700 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-earth-200 rounded-lg focus:ring-2 focus:ring-organic-500 focus:border-transparent"
                                        placeholder="Your full name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-earth-700 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-earth-200 rounded-lg focus:ring-2 focus:ring-organic-500 focus:border-transparent"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium text-earth-700 mb-2">
                                        Company/Organization
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-earth-200 rounded-lg focus:ring-2 focus:ring-organic-500 focus:border-transparent"
                                        placeholder="Your company name (optional)"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="quantity" className="block text-sm font-medium text-earth-700 mb-2">
                                        Estimated Quantity
                                    </label>
                                    <input
                                        type="text"
                                        id="quantity"
                                        name="quantity"
                                        value={formData.quantity}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-earth-200 rounded-lg focus:ring-2 focus:ring-organic-500 focus:border-transparent"
                                        placeholder="e.g., 100kg, 500 units"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-earth-700 mb-2">
                                    Subject *
                                </label>
                                <select
                                    id="subject"
                                    name="subject"
                                    required
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-earth-200 rounded-lg focus:ring-2 focus:ring-organic-500 focus:border-transparent"
                                >
                                    <option value="">Select a subject</option>
                                    <option value="quotation-request">Quotation Request</option>
                                    <option value="bulk-order">Bulk Order Inquiry</option>
                                    <option value="wholesale">Wholesale Partnership</option>
                                    <option value="product-inquiry">Product Information</option>
                                    <option value="custom-requirements">Custom Requirements</option>
                                    <option value="shipping-inquiry">Shipping & Delivery</option>
                                    <option value="support">Customer Support</option>
                                    <option value="feedback">Feedback</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-earth-700 mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={8}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-earth-200 rounded-lg focus:ring-2 focus:ring-organic-500 focus:border-transparent resize-none"
                                    placeholder={formData.productName
                                        ? "Please include details about your requirements such as delivery schedule, packaging preferences, payment terms, and any specific questions..."
                                        : "Please share your message, questions, or requirements..."
                                    }
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full btn-primary flex items-center justify-center space-x-2"
                            >
                                <Send className="h-5 w-5" />
                                <span>{formData.productName ? 'Request Quotation' : 'Send Message'}</span>
                            </button>

                            {formData.productName && (
                                <div className="bg-organic-50 rounded-lg p-4 text-sm text-organic-700">
                                    <p className="font-medium mb-2">What to expect:</p>
                                    <ul className="list-disc list-inside space-y-1">
                                        <li>Detailed pricing based on your quantity requirements</li>
                                        <li>Information on packaging and delivery options</li>
                                        <li>Payment terms and conditions</li>
                                        <li>Sample availability if needed</li>
                                        <li>Response within 24 hours</li>
                                    </ul>
                                </div>
                            )}
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-earth-800 mb-8">Contact Information</h2>
                            <div className="grid grid-cols-1 gap-6">
                                {contactInfo.map((info, index) => (
                                    <div key={index} className="bg-organic-50 rounded-xl p-6 hover:bg-organic-100 transition-colors duration-200">
                                        <div className="flex items-start space-x-4">
                                            <div className="flex-shrink-0 bg-organic-600 text-white p-3 rounded-lg">
                                                {info.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-earth-800 mb-2">{info.title}</h3>
                                                {info.details.map((detail, idx) => (
                                                    <p key={idx} className="text-earth-700 font-medium">{detail}</p>
                                                ))}
                                                <p className="text-earth-600 text-sm mt-1">{info.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <h3 className="text-2xl font-bold text-earth-800 mb-6">Follow Us</h3>
                            <div className="flex space-x-6">
                                <a href="#" className="text-earth-600 hover:text-organic-600 transition-colors">
                                    <Facebook className="h-8 w-8" />
                                </a>
                                <a href="#" className="text-earth-600 hover:text-organic-600 transition-colors">
                                    <Instagram className="h-8 w-8" />
                                </a>
                                <a href="#" className="text-earth-600 hover:text-organic-600 transition-colors">
                                    <Twitter className="h-8 w-8" />
                                </a>
                            </div>
                            <p className="text-earth-600 mt-4">
                                Stay updated with our latest products, farm stories, and organic living tips.
                            </p>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <section className="mt-20">
                    <h2 className="text-3xl font-bold text-earth-800 mb-12 text-center">Frequently Asked Questions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                                <h3 className="text-xl font-bold text-earth-800 mb-3">{faq.question}</h3>
                                <p className="text-earth-600 leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Contact; 