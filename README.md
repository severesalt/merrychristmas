# Digital Family Scrapbook

A simple, static website that creates an emotional, handmade, and nostalgic digital scrapbook experience.

## Features

- **Infinite Vertical Scrolling**: Photos flow downward like pages in a notebook
- **Timeline Slider**: Horizontal slider at the bottom to navigate through different years
- **Polaroid-Style Photos**: Each photo is displayed with a white border, slight rotation, and soft shadow
- **Handwritten Captions**: Each photo has a handwritten-style caption
- **Pure CSS Hover Effects**: Photos scale up and shadow increases on hover

## Tech Stack

- **HTML5**: Semantic structure
- **Tailwind CSS**: Layout, spacing, and shadows (via CDN)
- **Custom CSS**: Scrapbook aesthetic, polaroid styling, and animations
- **Minimal JavaScript**: Only for timeline slider navigation

## File Structure

```
merrychristmas/
├── index.html          # Main HTML file
├── styles.css          # Custom styles for scrapbook look
├── script.js           # Minimal JS for timeline slider
├── FamilyChristmas/   # Photo directory (contains all JPG images)
├── netlify.toml       # Netlify configuration
├── _redirects          # Netlify redirects file
└── README.md          # This file
```

## How to Use

1. Simply open `index.html` in a web browser
2. Scroll vertically to browse through the photos
3. Use the timeline slider at the bottom to jump to different years
4. Hover over photos to see them scale up

## Customization

### Adding More Photos

Photos are organized by year sections (2018-2024). To add more photos:

1. Add your photos to the `FamilyChristmas/` directory
2. Update the HTML to include new photo entries in the appropriate year section
3. Follow the existing pattern for polaroid divs

### Changing Years

Edit the year sections in `index.html` and update the timeline slider labels and JavaScript array in `script.js`.

### Styling

- Colors and fonts can be adjusted in `styles.css`
- Background texture is defined in the CSS `:root` variables
- Photo rotations use fixed CSS classes (`rotate-1`, `rotate-2`, `rotate-3`)

## Browser Compatibility

Works in all modern browsers. Uses native CSS features and minimal JavaScript for maximum compatibility.

## Deployment

This is a static site and can be deployed to:
- GitHub Pages
- Netlify (configured and ready)
- Vercel
- Any static hosting service

### Netlify Deployment

The site is pre-configured for Netlify deployment:

1. **Via Netlify UI:**
   - Go to [Netlify](https://www.netlify.com/)
   - Drag and drop the entire project folder to the deploy area
   - Your site will be live instantly!

2. **Via Git (Recommended):**
   - Push your code to GitHub/GitLab/Bitbucket
   - Connect your repository to Netlify
   - Netlify will auto-detect the static site (no build command needed)
   - Deploy settings:
     - Build command: (leave empty)
     - Publish directory: `.` (root)

3. **Via Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   netlify deploy
   netlify deploy --prod
   ```

The `netlify.toml` file includes:
- Proper caching headers for images, CSS, and JS
- Redirect rules for clean URLs
- Static site configuration

### Other Platforms

Simply upload all files maintaining the directory structure to any static hosting service.

