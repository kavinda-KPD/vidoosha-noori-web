# Adding Images to Your Jaggery Website

## Current Status

✅ **Image placeholders are now working!** Your website displays beautiful colored placeholders with jaggery spoon emojis and text descriptions.

## How to Add Real Images

### 1. **Add Images to Public Folder**

Place your images in the `public/images/` directory:

```
public/
  images/
    hero-jaggery.jpg
    products/
      jaggery-cubes.jpg
      jaggery-powder.jpg
      palm-jaggery.jpg
      date-palm-jaggery.jpg
      coconut-jaggery.jpg
      jaggery-blocks.jpg
      mini-jaggery-cubes.jpg
      gift-box.jpg
    team/
      rajesh-kumar.jpg
      priya-sharma.jpg
      michael-chen.jpg
    about/
      traditional-making.jpg
```

### 2. **Update Image Paths**

Replace the `ImagePlaceholder` components with regular `img` tags:

**Example for Products:**

```tsx
// Replace this:
<ImagePlaceholder
    text={product.name}
    bgColor="bg-gradient-to-br from-jaggery-300 to-jaggery-500"
/>

// With this:
<img
    src={`/images/products/${product.name.toLowerCase().replace(/\s+/g, '-')}.jpg`}
    alt={product.name}
    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
/>
```

### 3. **Recommended Image Sizes**

- **Product Images**: 400x400px (square)
- **Hero Images**: 800x600px
- **Team Photos**: 300x300px
- **About Images**: 600x400px

### 4. **Where to Get Jaggery Images**

- **Unsplash**: Search for "jaggery", "brown sugar", "organic sweetener"
- **Pexels**: Free stock photos of food and agriculture
- **Your Own Photos**: Take photos of actual jaggery products
- **AI Generated**: Use DALL-E, Midjourney for custom jaggery images

### 5. **Image Optimization**

- Use modern formats (WebP, AVIF) for better performance
- Compress images using tools like TinyPNG
- Consider lazy loading for better performance

### 6. **Alternative: Keep Placeholders**

The current colorful placeholders look professional and can work as a design choice if you prefer not to use photos.

## Example Image Replacement

To replace the hero image in `src/pages/Home.tsx`:

```tsx
// Find this line:
<ImagePlaceholder
    height="320px"
    text="Traditional Jaggery Making"
    className="rounded-2xl"
    bgColor="bg-gradient-to-br from-jaggery-300 to-jaggery-400"
/>

// Replace with:
<img
    src="/images/hero-jaggery.jpg"
    alt="Traditional Jaggery Making"
    className="w-full h-80 object-cover rounded-2xl"
/>
```

Your website is now fully functional with beautiful image placeholders that you can replace with real images when ready!
