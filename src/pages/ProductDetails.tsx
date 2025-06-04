import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, Check, MessageCircle, Phone, Shield } from 'lucide-react';
import { products } from '../data/products';

const ProductDetails = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    const product = products.find(p => p.id === parseInt(id || '0'));

    if (!product) {
        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                <h1 className="text-3xl font-bold text-earth-800 mb-4">Product not found</h1>
                <Link to="/products" className="btn-primary">
                    Back to Products
                </Link>
            </div>
        );
    }

    const handleRequestQuotation = () => {
        // Navigate to contact page with product information
        navigate('/contact', {
            state: {
                productName: product.name,
                productId: product.id,
                inquiryType: 'quotation'
            }
        });
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Breadcrumb */}
            <div className="bg-organic-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center space-x-2 text-sm">
                        <Link to="/" className="text-earth-600 hover:text-organic-600 transition-colors">Home</Link>
                        <span className="text-earth-400">/</span>
                        <Link to="/products" className="text-earth-600 hover:text-organic-600 transition-colors">Products</Link>
                        <span className="text-earth-400">/</span>
                        <span className="text-earth-800 font-medium">{product.name}</span>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center space-x-2 text-earth-600 hover:text-organic-600 transition-colors mb-8"
                >
                    <ArrowLeft className="h-5 w-5" />
                    <span>Back to Products</span>
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Image Gallery */}
                    <div className="space-y-4">
                        {/* Main Image */}
                        <div className="aspect-square bg-white rounded-xl shadow-lg overflow-hidden">
                            <img
                                src={product.images[activeImageIndex]}
                                alt={`${product.name} - Image ${activeImageIndex + 1}`}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                onError={(e) => {
                                    e.currentTarget.src = "https://via.placeholder.com/600x600/f3f4f6/6b7280?text=" + encodeURIComponent(product.name);
                                }}
                            />
                        </div>

                        {/* Thumbnail Gallery */}
                        <div className="grid grid-cols-4 gap-2">
                            {product.images.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveImageIndex(index)}
                                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200 ${activeImageIndex === index
                                        ? 'border-organic-600 shadow-md'
                                        : 'border-earth-200 hover:border-organic-400'
                                        }`}
                                >
                                    <img
                                        src={image}
                                        alt={`${product.name} - Thumbnail ${index + 1}`}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.currentTarget.src = "https://via.placeholder.com/150x150/f3f4f6/6b7280?text=" + encodeURIComponent(`${index + 1}`);
                                        }}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product Information */}
                    <div className="space-y-6">
                        {/* Header */}
                        <div>
                            <h1 className="text-4xl font-bold text-earth-800 mb-2">{product.name}</h1>
                            <div className="flex items-center space-x-4 mb-4">
                                <div className="flex items-center space-x-1">
                                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                                    <span className="text-lg font-medium text-earth-700">{product.rating}</span>
                                    <span className="text-earth-500">({product.reviews} reviews)</span>
                                </div>
                                <div className={`px-3 py-1 rounded-full text-sm font-medium ${product.inStock
                                    ? 'bg-organic-100 text-organic-700'
                                    : 'bg-earth-100 text-earth-600'
                                    }`}>
                                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                                </div>
                            </div>
                            <div className="text-3xl font-bold text-jaggery-600 mb-4">
                                ${product.price.toFixed(2)}
                            </div>
                        </div>

                        {/* Short Description */}
                        <div>
                            <p className="text-lg text-earth-600 leading-relaxed">
                                {product.shortDescription}
                            </p>
                        </div>

                        {/* Key Features */}
                        <div>
                            <h3 className="text-xl font-bold text-earth-800 mb-3">Key Features</h3>
                            <ul className="space-y-2">
                                {product.features.slice(0, 3).map((feature, index) => (
                                    <li key={index} className="flex items-center space-x-2">
                                        <Check className="h-5 w-5 text-organic-600" />
                                        <span className="text-earth-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Quotation CTA */}
                        <div className="bg-organic-50 rounded-xl p-6 border border-organic-200">
                            <div className="flex items-center space-x-3 mb-4">
                                <MessageCircle className="h-6 w-6 text-organic-600" />
                                <h3 className="text-xl font-bold text-earth-800">Get Custom Quotation</h3>
                            </div>
                            <p className="text-earth-600 mb-4">
                                Interested in bulk orders or have specific requirements? Contact us for personalized pricing and delivery options.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <button
                                    onClick={handleRequestQuotation}
                                    className="btn-primary flex-1"
                                >
                                    Request Quotation
                                </button>
                                <a
                                    href="tel:+15551234567"
                                    className="btn-secondary flex items-center justify-center space-x-2"
                                >
                                    <Phone className="h-4 w-4" />
                                    <span>Call Now</span>
                                </a>
                            </div>
                        </div>

                        {/* Trust Badges */}
                        <div className="flex items-center space-x-6 pt-4 border-t border-earth-200">
                            <div className="flex items-center space-x-2">
                                <Shield className="h-5 w-5 text-organic-600" />
                                <span className="text-sm text-earth-600">Organic Certified</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Check className="h-5 w-5 text-organic-600" />
                                <span className="text-sm text-earth-600">Quality Assured</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Detailed Information Tabs */}
                <div className="mt-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Full Description */}
                        <div className="md:col-span-2">
                            <h2 className="text-2xl font-bold text-earth-800 mb-4">Product Description</h2>
                            <div className="prose prose-earth max-w-none">
                                <p className="text-earth-600 leading-relaxed text-lg">
                                    {product.fullDescription}
                                </p>
                            </div>

                            {/* All Features */}
                            <div className="mt-8">
                                <h3 className="text-xl font-bold text-earth-800 mb-4">Complete Features</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {product.features.map((feature, index) => (
                                        <div key={index} className="flex items-center space-x-2">
                                            <Check className="h-4 w-4 text-organic-600 flex-shrink-0" />
                                            <span className="text-earth-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Specifications & Nutrition */}
                        <div className="space-y-8">
                            {/* Specifications */}
                            <div className="bg-earth-50 rounded-xl p-6">
                                <h3 className="text-lg font-bold text-earth-800 mb-4">Specifications</h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between">
                                        <span className="text-earth-600">Weight:</span>
                                        <span className="font-medium text-earth-800">{product.specifications.weight}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-earth-600">Packaging:</span>
                                        <span className="font-medium text-earth-800 text-right text-sm">{product.specifications.packaging}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-earth-600">Shelf Life:</span>
                                        <span className="font-medium text-earth-800 text-right text-sm">{product.specifications.shelfLife}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-earth-600">Origin:</span>
                                        <span className="font-medium text-earth-800 text-right text-sm">{product.specifications.origin}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-earth-600">Certification:</span>
                                        <span className="font-medium text-earth-800 text-right text-sm">{product.specifications.certification}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Nutritional Information */}
                            <div className="bg-organic-50 rounded-xl p-6">
                                <h3 className="text-lg font-bold text-earth-800 mb-4">Nutritional Facts</h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between">
                                        <span className="text-earth-600">Calories:</span>
                                        <span className="font-medium text-earth-800">{product.nutritionalInfo.calories}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-earth-600">Carbohydrates:</span>
                                        <span className="font-medium text-earth-800">{product.nutritionalInfo.carbs}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-earth-600">Sugars:</span>
                                        <span className="font-medium text-earth-800">{product.nutritionalInfo.sugars}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-earth-600">Iron:</span>
                                        <span className="font-medium text-earth-800">{product.nutritionalInfo.iron}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-earth-600">Calcium:</span>
                                        <span className="font-medium text-earth-800">{product.nutritionalInfo.calcium}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails; 