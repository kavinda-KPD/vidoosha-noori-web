export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  rating: number;
  reviews: number;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  specifications: {
    weight: string;
    packaging: string;
    shelfLife: string;
    origin: string;
    certification: string;
  };
  nutritionalInfo: {
    calories: string;
    carbs: string;
    sugars: string;
    fiber: string;
    iron: string;
    calcium: string;
  };
  inStock: boolean;
  images: string[];
}

// Available jaggery images
const jaggeryImages = [
  "https://img.freepik.com/free-photo/delicious-jaggery-still-life-composition_23-2149161614.jpg?semt=ais_hybrid&w=740",
  "https://img.freepik.com/free-photo/healthy-jaggery-still-life-assortment_23-2149161581.jpg?semt=ais_hybrid&w=740",
  "https://img.freepik.com/free-photo/healthy-jaggery-still-life-arrangement_23-2149161534.jpg?semt=ais_hybrid&w=740",
  "https://img.freepik.com/free-photo/healthy-jaggery-still-life-arrangement_23-2149161554.jpg?semt=ais_hybrid&w=740",
  "https://img.freepik.com/free-photo/healthy-jaggery-still-life-arrangement_23-2149161545.jpg?semt=ais_hybrid&w=740",
  "https://img.freepik.com/free-photo/healthy-jaggery-still-life-assortment_23-2149161580.jpg?semt=ais_hybrid&w=740",
];

export const products: Product[] = [
  {
    id: 1,
    name: "Organic Jaggery Cubes",
    price: 12.99,
    category: "cubes",
    rating: 4.8,
    reviews: 124,
    shortDescription:
      "Pure organic jaggery in convenient cube form. Perfect for daily use in tea, coffee, and cooking.",
    fullDescription:
      "Our premium organic jaggery cubes are carefully crafted from the finest sugarcane, harvested from certified organic farms. These convenient, uniform cubes dissolve easily and provide a rich, natural sweetness that enhances the flavor of your beverages and recipes. Each cube contains essential minerals like iron, calcium, and potassium, making it a healthier alternative to refined sugar. The traditional boiling and cooling process preserves the natural nutrients and gives our jaggery its distinctive golden-brown color and complex flavor profile.",
    features: [
      "100% Organic & Natural",
      "No artificial additives or preservatives",
      "Rich in iron, calcium, and potassium",
      "Easy to dissolve uniform cubes",
      "Perfect for tea, coffee, and cooking",
      "Traditional production methods",
    ],
    specifications: {
      weight: "500g",
      packaging: "Food-grade resealable pouch",
      shelfLife: "18 months from manufacturing",
      origin: "Organic farms in Maharashtra, India",
      certification: "USDA Organic, Fair Trade",
    },
    nutritionalInfo: {
      calories: "383 per 100g",
      carbs: "98.96g",
      sugars: "84.93g",
      fiber: "0g",
      iron: "11mg",
      calcium: "85mg",
    },
    inStock: true,
    images: [
      jaggeryImages[0],
      jaggeryImages[1],
      jaggeryImages[2],
      jaggeryImages[3],
    ],
  },
  {
    id: 2,
    name: "Jaggery Powder",
    price: 15.99,
    category: "powder",
    rating: 4.9,
    reviews: 89,
    shortDescription:
      "Fine jaggery powder ideal for baking, desserts, and traditional sweets.",
    fullDescription:
      "Our finely ground jaggery powder is perfect for baking enthusiasts and professional chefs alike. Made from the same high-quality organic sugarcane as our cubes, this powder dissolves instantly and mixes evenly into your recipes. It's ideal for making traditional sweets, cakes, cookies, and other desserts where you need the rich flavor of jaggery in a fine, manageable form. The powder retains all the natural minerals and nutrients of whole jaggery while offering superior convenience for culinary applications.",
    features: [
      "Ultra-fine powder texture",
      "Instant dissolving formula",
      "Perfect for baking and desserts",
      "Retains all natural nutrients",
      "Easy measuring and mixing",
      "Professional baker approved",
    ],
    specifications: {
      weight: "1kg",
      packaging: "Airtight canister with measuring scoop",
      shelfLife: "24 months from manufacturing",
      origin: "Organic farms in Gujarat, India",
      certification: "USDA Organic, ISO 22000",
    },
    nutritionalInfo: {
      calories: "383 per 100g",
      carbs: "98.96g",
      sugars: "84.93g",
      fiber: "0g",
      iron: "11mg",
      calcium: "85mg",
    },
    inStock: true,
    images: [
      jaggeryImages[1],
      jaggeryImages[2],
      jaggeryImages[3],
      jaggeryImages[4],
    ],
  },
  {
    id: 3,
    name: "Palm Jaggery",
    price: 18.99,
    category: "specialty",
    rating: 4.7,
    reviews: 67,
    shortDescription:
      "Traditional palm jaggery with rich, complex flavors. A gourmet choice for connoisseurs.",
    fullDescription:
      "Our premium palm jaggery is a rare delicacy made from the sap of date palm trees using centuries-old traditional methods. This artisanal product offers a unique flavor profile with subtle caramel notes and a rich, complex sweetness that's distinctly different from sugarcane jaggery. Palm jaggery is considered a superfood in traditional medicine, known for its cooling properties and rich mineral content. Each batch is carefully prepared by skilled artisans who have perfected the art of palm jaggery making over generations.",
    features: [
      "Made from pure date palm sap",
      "Traditional artisanal production",
      "Unique caramel flavor notes",
      "Cooling properties for the body",
      "Rich in antioxidants",
      "Limited seasonal availability",
    ],
    specifications: {
      weight: "750g",
      packaging: "Premium wooden gift box",
      shelfLife: "12 months from manufacturing",
      origin: "Traditional palm groves in Tamil Nadu, India",
      certification: "Organic India, Fair Trade",
    },
    nutritionalInfo: {
      calories: "354 per 100g",
      carbs: "95.45g",
      sugars: "89.12g",
      fiber: "0.1g",
      iron: "16mg",
      calcium: "75mg",
    },
    inStock: true,
    images: [
      jaggeryImages[2],
      jaggeryImages[3],
      jaggeryImages[4],
      jaggeryImages[5],
    ],
  },
  {
    id: 4,
    name: "Date Palm Jaggery",
    price: 22.99,
    category: "specialty",
    rating: 4.9,
    reviews: 45,
    shortDescription:
      "Premium date palm jaggery with exceptional taste and nutritional benefits.",
    fullDescription:
      "Our ultra-premium date palm jaggery represents the pinnacle of natural sweetener craftsmanship. Harvested during the brief winter season when date palm sap is at its peak concentration, this exclusive product offers unmatched purity and flavor complexity. The careful extraction and slow-cooking process preserves maximum nutrients while developing deep, rich flavors with hints of molasses and dates. This is considered the 'champagne' of jaggery, prized by gourmets and health enthusiasts worldwide for its exceptional taste and therapeutic properties.",
    features: [
      "Ultra-premium seasonal harvest",
      "Exceptional flavor complexity",
      "Maximum nutrient retention",
      "Limited winter production",
      "Therapeutic properties",
      "Gourmet quality assurance",
    ],
    specifications: {
      weight: "500g",
      packaging: "Luxury presentation box",
      shelfLife: "15 months from manufacturing",
      origin: "Select date palm groves in West Bengal, India",
      certification: "USDA Organic, EU Organic",
    },
    nutritionalInfo: {
      calories: "364 per 100g",
      carbs: "97.33g",
      sugars: "91.14g",
      fiber: "0.2g",
      iron: "18mg",
      calcium: "90mg",
    },
    inStock: false,
    images: [
      jaggeryImages[3],
      jaggeryImages[4],
      jaggeryImages[5],
      jaggeryImages[0],
    ],
  },
  {
    id: 5,
    name: "Coconut Jaggery",
    price: 16.99,
    category: "specialty",
    rating: 4.6,
    reviews: 78,
    shortDescription:
      "Sweet coconut jaggery with tropical flavors and natural goodness.",
    fullDescription:
      "Our exotic coconut jaggery is crafted from fresh coconut palm sap, offering a delightfully different taste experience with subtle tropical notes. This specialty jaggery is particularly popular in South Indian cuisine and is known for its lighter color and milder sweetness compared to sugarcane varieties. The coconut palm sap is collected using traditional sustainable methods that don't harm the trees, making this an environmentally friendly choice. Rich in amino acids and vitamins, coconut jaggery is often preferred by health-conscious consumers and those following ayurvedic dietary principles.",
    features: [
      "Made from coconut palm sap",
      "Mild tropical flavor profile",
      "Sustainable harvesting methods",
      "Rich in amino acids",
      "Lower glycemic index",
      "Ayurvedic dietary favorite",
    ],
    specifications: {
      weight: "600g",
      packaging: "Eco-friendly bamboo container",
      shelfLife: "20 months from manufacturing",
      origin: "Coastal coconut farms in Kerala, India",
      certification: "Rainforest Alliance, Organic",
    },
    nutritionalInfo: {
      calories: "368 per 100g",
      carbs: "94.75g",
      sugars: "82.14g",
      fiber: "0.6g",
      iron: "7mg",
      calcium: "125mg",
    },
    inStock: true,
    images: [
      jaggeryImages[4],
      jaggeryImages[5],
      jaggeryImages[0],
      jaggeryImages[1],
    ],
  },
  {
    id: 6,
    name: "Jaggery Blocks",
    price: 14.99,
    category: "blocks",
    rating: 4.8,
    reviews: 156,
    shortDescription:
      "Traditional jaggery blocks, perfect for households and commercial use.",
    fullDescription:
      "Our traditional jaggery blocks represent the classic form of this ancient sweetener, made exactly as it has been for thousands of years. These substantial blocks are perfect for households and commercial kitchens that use jaggery regularly. Each block is made from pure sugarcane juice that's boiled and concentrated using traditional methods, then molded into convenient rectangular shapes. The blocks can be easily grated, chopped, or dissolved as needed, making them versatile for various culinary applications from daily cooking to festival preparations.",
    features: [
      "Traditional block format",
      "Perfect for high-volume use",
      "Easy to grate and portion",
      "Economic bulk option",
      "Long shelf life",
      "Commercial kitchen approved",
    ],
    specifications: {
      weight: "1kg",
      packaging: "Protective wrapper with handle",
      shelfLife: "24 months from manufacturing",
      origin: "Traditional farms in Uttar Pradesh, India",
      certification: "FSSAI Approved, Organic",
    },
    nutritionalInfo: {
      calories: "383 per 100g",
      carbs: "98.96g",
      sugars: "84.93g",
      fiber: "0g",
      iron: "11mg",
      calcium: "85mg",
    },
    inStock: true,
    images: [
      jaggeryImages[5],
      jaggeryImages[0],
      jaggeryImages[1],
      jaggeryImages[2],
    ],
  },
  {
    id: 7,
    name: "Mini Jaggery Cubes",
    price: 10.99,
    category: "cubes",
    rating: 4.5,
    reviews: 92,
    shortDescription:
      "Small convenient cubes perfect for portion control and individual servings.",
    fullDescription:
      "Our adorable mini jaggery cubes are designed for those who prefer smaller portions and precise measurements. These bite-sized cubes are perfect for individual servings of tea or coffee, making them ideal for offices, cafes, and portion-conscious consumers. Despite their small size, each cube packs the full nutritional benefits and rich flavor of our premium organic jaggery. The mini format also makes them perfect for travel, lunch boxes, and anywhere you need convenient, pre-measured sweetness without the guesswork.",
    features: [
      "Perfect portion control",
      "Individual serving size",
      "Travel-friendly format",
      "Precise measurement ease",
      "Office and cafe friendly",
      "No cutting or breaking needed",
    ],
    specifications: {
      weight: "250g",
      packaging: "Convenient dispenser box",
      shelfLife: "18 months from manufacturing",
      origin: "Organic farms in Haryana, India",
      certification: "USDA Organic, Fair Trade",
    },
    nutritionalInfo: {
      calories: "383 per 100g",
      carbs: "98.96g",
      sugars: "84.93g",
      fiber: "0g",
      iron: "11mg",
      calcium: "85mg",
    },
    inStock: true,
    images: [
      jaggeryImages[0],
      jaggeryImages[2],
      jaggeryImages[4],
      jaggeryImages[5],
    ],
  },
  {
    id: 8,
    name: "Premium Gift Box",
    price: 49.99,
    category: "gift",
    rating: 4.9,
    reviews: 34,
    shortDescription:
      "Beautifully packaged assorted jaggery collection. Perfect for gifting.",
    fullDescription:
      "Our premium gift box is a carefully curated collection of our finest jaggery varieties, beautifully presented in an elegant wooden box with traditional Indian motifs. This luxury collection includes samples of our organic jaggery cubes, premium palm jaggery, coconut jaggery, and jaggery powder, allowing recipients to experience the full range of natural sweetness we offer. Each variety comes with detailed tasting notes and suggested uses, making this an educational as well as delicious gift. Perfect for festivals, corporate gifts, or introducing someone special to the world of artisanal jaggery.",
    features: [
      "Curated variety collection",
      "Luxury wooden presentation box",
      "Includes tasting notes",
      "Perfect for festivals and gifts",
      "Educational experience",
      "Premium quality assurance",
    ],
    specifications: {
      weight: "2kg",
      packaging: "Handcrafted wooden gift box",
      shelfLife: "18 months from manufacturing",
      origin: "Selected farms across India",
      certification: "Multi-certified premium collection",
    },
    nutritionalInfo: {
      calories: "Varies by variety",
      carbs: "Detailed per product",
      sugars: "See individual products",
      fiber: "Varies by type",
      iron: "High in all varieties",
      calcium: "Excellent source",
    },
    inStock: true,
    images: [
      jaggeryImages[1],
      jaggeryImages[3],
      jaggeryImages[5],
      jaggeryImages[0],
    ],
  },
];
