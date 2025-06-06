import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/products' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className="bg-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <Leaf className="h-8 w-8 text-organic-600" />
                        <span className="text-2xl font-bold text-jaggery-700 font-display">
                            Pure Jaggery
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${isActive(item.path)
                                        ? 'text-organic-600 bg-organic-50'
                                        : 'text-earth-700 hover:text-organic-600 hover:bg-organic-50'
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-earth-700 hover:text-organic-600 hover:bg-organic-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-organic-500"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                onClick={() => setIsOpen(false)}
                                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${isActive(item.path)
                                    ? 'text-organic-600 bg-organic-50'
                                    : 'text-earth-700 hover:text-organic-600 hover:bg-organic-50'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar; 