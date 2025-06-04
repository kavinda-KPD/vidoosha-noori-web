import { Link } from 'react-router-dom';
import { Leaf, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-earth-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <Leaf className="h-8 w-8 text-organic-400" />
                            <span className="text-2xl font-bold font-display text-jaggery-300">Pure Jaggery</span>
                        </div>
                        <p className="text-earth-200">
                            Bringing you the finest, purest jaggery straight from traditional farms.
                            Naturally sweet, completely organic.
                        </p>
                        <div className="flex space-x-4">
                            <Facebook className="h-5 w-5 text-earth-300 hover:text-organic-400 cursor-pointer transition-colors" />
                            <Instagram className="h-5 w-5 text-earth-300 hover:text-organic-400 cursor-pointer transition-colors" />
                            <Twitter className="h-5 w-5 text-earth-300 hover:text-organic-400 cursor-pointer transition-colors" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 font-display">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-earth-200 hover:text-organic-400 transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/products" className="text-earth-200 hover:text-organic-400 transition-colors">
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-earth-200 hover:text-organic-400 transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-earth-200 hover:text-organic-400 transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 font-display">Our Products</h3>
                        <ul className="space-y-2 text-earth-200">
                            <li>Organic Jaggery Cubes</li>
                            <li>Jaggery Powder</li>
                            <li>Palm Jaggery</li>
                            <li>Date Palm Jaggery</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 font-display">Contact Us</h3>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-2">
                                <Phone className="h-4 w-4 text-organic-400" />
                                <span className="text-earth-200">+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Mail className="h-4 w-4 text-organic-400" />
                                <span className="text-earth-200">info@purejaggery.com</span>
                            </div>
                            <div className="flex items-start space-x-2">
                                <MapPin className="h-4 w-4 text-organic-400 mt-1" />
                                <span className="text-earth-200">
                                    123 Farm Road<br />
                                    Organic Valley, CA 90210
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-earth-700 mt-8 pt-8 text-center">
                    <p className="text-earth-300">
                        © 2024 Pure Jaggery. All rights reserved. | Made with ❤️ for nature lovers
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 