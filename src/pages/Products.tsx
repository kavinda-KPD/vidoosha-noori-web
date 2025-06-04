import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Star, Filter, Grid, List, Eye } from 'lucide-react';
import { products } from '../data/products';

const Products = () => {
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [sortBy, setSortBy] = useState<string>('name');

    // Get unique categories
    const categories = useMemo(() => {
        const cats = ['all', ...new Set(products.map(p => p.category))];
        return cats;
    }, []);

    // Filter and sort products
    const filteredAndSortedProducts = useMemo(() => {
        let filtered = selectedCategory === 'all'
            ? products
            : products.filter(p => p.category === selectedCategory);

        // Sort products
        filtered.sort((a, b) => {
            switch (sortBy) {
                case 'price-low':
                    return a.price - b.price;
                case 'price-high':
                    return b.price - a.price;
                case 'rating':
                    return b.rating - a.rating;
                case 'name':
                default:
                    return a.name.localeCompare(b.name);
            }
        });

        return filtered;
    }, [selectedCategory, sortBy]);

    const getCategoryLabel = (category: string) => {
        const labels: { [key: string]: string } = {
            'all': 'All Products',
            'cubes': 'Jaggery Cubes',
            'powder': 'Jaggery Powder',
            'specialty': 'Specialty Varieties',
            'blocks': 'Jaggery Blocks',
            'gift': 'Gift Collections'
        };
        return labels[category] || category;
    };

    return (
        <div className="min-h-screen bg-organic-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="section-title">Our Premium Jaggery Collection</h1>
                    <p className="text-xl text-earth-600 max-w-3xl mx-auto">
                        Discover our wide range of organic, farm-fresh jaggery products. Each variety is carefully selected and processed to maintain its natural goodness and rich flavor.
                    </p>
                </div>

                {/* Filters and Controls */}
                <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-8">
                    {/* Mobile-first layout */}
                    <div className="space-y-4 lg:space-y-0 lg:flex lg:items-center lg:justify-between">
                        {/* Top row on mobile: Category Filter */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                            <div className="flex items-center space-x-2 text-earth-700 font-medium">
                                <Filter className="h-5 w-5 text-organic-600" />
                                <span className="text-sm font-semibold">Filter by Category</span>
                            </div>
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="w-full sm:w-auto min-w-[200px] border border-earth-300 rounded-lg px-4 py-3 text-earth-700 bg-white focus:ring-2 focus:ring-organic-500 focus:border-transparent transition-colors shadow-sm"
                            >
                                {categories.map(category => (
                                    <option key={category} value={category}>
                                        {getCategoryLabel(category)}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Bottom row on mobile: Sort and View Controls */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                            {/* Sort Section */}
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                                <label className="text-sm font-semibold text-earth-700 sm:whitespace-nowrap">
                                    Sort by:
                                </label>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="w-full sm:w-auto min-w-[160px] border border-earth-300 rounded-lg px-4 py-3 text-earth-700 bg-white focus:ring-2 focus:ring-organic-500 focus:border-transparent transition-colors shadow-sm"
                                >
                                    <option value="name">Name A-Z</option>
                                    <option value="price-low">Price: Low to High</option>
                                    <option value="price-high">Price: High to Low</option>
                                    <option value="rating">Highest Rated</option>
                                </select>
                            </div>

                            {/* View Mode Section */}
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                                <label className="text-sm font-semibold text-earth-700 sm:whitespace-nowrap">
                                    View:
                                </label>
                                <div className="flex border border-earth-300 rounded-lg overflow-hidden shadow-sm bg-white">
                                    <button
                                        onClick={() => setViewMode('grid')}
                                        className={`flex-1 sm:flex-none px-4 py-3 flex items-center justify-center space-x-2 transition-all duration-200 ${viewMode === 'grid'
                                            ? 'bg-organic-600 text-white shadow-sm'
                                            : 'bg-white text-earth-600 hover:bg-organic-50'
                                            }`}
                                    >
                                        <Grid className="h-4 w-4" />
                                        <span className="text-sm font-medium">Grid</span>
                                    </button>
                                    <button
                                        onClick={() => setViewMode('list')}
                                        className={`flex-1 sm:flex-none px-4 py-3 flex items-center justify-center space-x-2 transition-all duration-200 ${viewMode === 'list'
                                            ? 'bg-organic-600 text-white shadow-sm'
                                            : 'bg-white text-earth-600 hover:bg-organic-50'
                                            }`}
                                    >
                                        <List className="h-4 w-4" />
                                        <span className="text-sm font-medium">List</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Active filters indicator */}
                    {(selectedCategory !== 'all' || sortBy !== 'name') && (
                        <div className="mt-4 pt-4 border-t border-earth-200">
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="text-sm font-medium text-earth-600">Active filters:</span>
                                {selectedCategory !== 'all' && (
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-organic-100 text-organic-700">
                                        Category: {getCategoryLabel(selectedCategory)}
                                        <button
                                            onClick={() => setSelectedCategory('all')}
                                            className="ml-2 hover:text-organic-900"
                                        >
                                            ×
                                        </button>
                                    </span>
                                )}
                                {sortBy !== 'name' && (
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-earth-100 text-earth-700">
                                        Sort: {sortBy === 'price-low' ? 'Price Low-High' : sortBy === 'price-high' ? 'Price High-Low' : 'Highest Rated'}
                                        <button
                                            onClick={() => setSortBy('name')}
                                            className="ml-2 hover:text-earth-900"
                                        >
                                            ×
                                        </button>
                                    </span>
                                )}
                                <button
                                    onClick={() => {
                                        setSelectedCategory('all');
                                        setSortBy('name');
                                    }}
                                    className="text-xs text-organic-600 hover:text-organic-700 font-medium underline"
                                >
                                    Clear all
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Products Grid/List */}
                <div className={viewMode === 'grid'
                    ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
                    : 'space-y-6'
                }>
                    {filteredAndSortedProducts.map((product) => (
                        <div key={product.id} className={viewMode === 'grid' ? 'product-card' : 'product-card'}>
                            {viewMode === 'grid' ? (
                                // Grid View
                                <>
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
                                            <h3 className="text-lg font-bold text-earth-800 line-clamp-1">{product.name}</h3>
                                            <div className={`px-2 py-1 rounded-full text-xs font-medium ${product.inStock
                                                ? 'bg-organic-100 text-organic-700'
                                                : 'bg-earth-100 text-earth-600'
                                                }`}>
                                                {product.inStock ? 'In Stock' : 'Out of Stock'}
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-1 mb-3">
                                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                            <span className="text-sm text-earth-600">{product.rating}</span>
                                            <span className="text-xs text-earth-500">({product.reviews})</span>
                                        </div>
                                        <p className="text-earth-600 mb-4 text-sm line-clamp-2">{product.shortDescription}</p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-xl font-bold text-jaggery-600">${product.price.toFixed(2)}</span>
                                            <Link
                                                to={`/products/${product.id}`}
                                                className="bg-organic-600 hover:bg-organic-700 text-white px-3 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-1 text-sm"
                                            >
                                                <Eye className="h-4 w-4" />
                                                <span>Details</span>
                                            </Link>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                // List View
                                <div className="flex flex-col md:flex-row">
                                    <div className="md:w-48 md:h-48 aspect-square md:aspect-auto overflow-hidden">
                                        <img
                                            src={product.images[0]}
                                            alt={product.name}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                            onError={(e) => {
                                                e.currentTarget.src = "https://via.placeholder.com/200x200/f3f4f6/6b7280?text=" + encodeURIComponent(product.name);
                                            }}
                                        />
                                    </div>
                                    <div className="flex-1 p-6">
                                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                                            <div className="flex-1">
                                                <div className="flex items-center space-x-3 mb-2">
                                                    <h3 className="text-2xl font-bold text-earth-800">{product.name}</h3>
                                                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${product.inStock
                                                        ? 'bg-organic-100 text-organic-700'
                                                        : 'bg-earth-100 text-earth-600'
                                                        }`}>
                                                        {product.inStock ? 'In Stock' : 'Out of Stock'}
                                                    </div>
                                                </div>
                                                <div className="flex items-center space-x-2 mb-3">
                                                    <div className="flex items-center space-x-1">
                                                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                                        <span className="text-earth-600">{product.rating}</span>
                                                        <span className="text-earth-500">({product.reviews} reviews)</span>
                                                    </div>
                                                </div>
                                                <p className="text-earth-600 mb-4 leading-relaxed">{product.shortDescription}</p>

                                                {/* Features Preview */}
                                                <div className="mb-4">
                                                    <div className="flex flex-wrap gap-2">
                                                        {product.features.slice(0, 3).map((feature, index) => (
                                                            <span key={index} className="bg-organic-50 text-organic-700 px-2 py-1 rounded text-sm">
                                                                {feature}
                                                            </span>
                                                        ))}
                                                        {product.features.length > 3 && (
                                                            <span className="text-earth-500 text-sm">+{product.features.length - 3} more</span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="md:text-right md:ml-6">
                                                <div className="text-3xl font-bold text-jaggery-600 mb-4">${product.price.toFixed(2)}</div>
                                                <Link
                                                    to={`/products/${product.id}`}
                                                    className="btn-primary flex items-center space-x-2"
                                                >
                                                    <Eye className="h-4 w-4" />
                                                    <span>View Details</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* No Products Found */}
                {filteredAndSortedProducts.length === 0 && (
                    <div className="text-center py-12">
                        <h3 className="text-2xl font-bold text-earth-800 mb-4">No products found</h3>
                        <p className="text-earth-600 mb-6">Try adjusting your filters to see more products.</p>
                        <button
                            onClick={() => {
                                setSelectedCategory('all');
                                setSortBy('name');
                            }}
                            className="btn-primary"
                        >
                            Reset Filters
                        </button>
                    </div>
                )}

                {/* Results Count */}
                <div className="text-center mt-12 text-earth-600">
                    Showing {filteredAndSortedProducts.length} of {products.length} products
                </div>
            </div>
        </div>
    );
};

export default Products; 