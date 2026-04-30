# InstaShiny - Premium Laundry Landing Page

A modern, fully responsive landing page for a premium laundry pickup and delivery service in Gurugram, India.

## 🎯 Features

### Design Excellence
- ✅ Clean premium UI with white background and blue primary theme
- ✅ Modern SaaS-style landing page
- ✅ Rounded cards with soft shadows
- ✅ Smooth scroll animations throughout
- ✅ Mobile-first responsive design
- ✅ Fast loading and optimized layout

### Sections Included

1. **Navbar** - Sticky navigation with mobile menu
2. **Hero Section** - Eye-catching headline with dual CTA buttons
3. **Trust Indicators** - 4 key trust factors (Free delivery, Same-day service, Affordable pricing, Verified partners)
4. **Services Section** - 6 service cards (Wash & Fold, Wash & Iron, Dry Cleaning, Shoe Cleaning, Steam Ironing, Bulk Service)
5. **Pricing Section** - Tabbed pricing table with transparent rates
6. **How It Works** - 4-step process visualization
7. **App Download** - Mobile app promotion with App Store and Play Store buttons
8. **Testimonials** - Customer reviews with ratings
9. **FAQ Section** - 8 frequently asked questions with accordion
10. **CTA Section** - Final conversion call-to-action
11. **Footer** - Premium footer with links, contact info, and social media

## 💰 Pricing Overview

- **Wash & Fold**: ₹69/kg (next day), ₹89/kg (same day)
- **Wash & Iron**: ₹99/kg (next day), ₹129/kg (same day)
- **Dry Cleaning**: Starting ₹99/item
- **Shoe Care**: Sneakers ₹299, Sports Shoes ₹249
- **Steam Iron**: ₹69/kg (same day)

## 🛠️ Tech Stack

- **React 18** - Component-based UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful SVG icons
- **Vite** - Next generation frontend tooling

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation Steps

```bash
# Clone the repository
git clone https://github.com/shhubhamgupta08-netizen/shiny-delivery.git

# Navigate to the project
cd shiny-delivery

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

## 🚀 Build & Deployment

```bash
# Create optimized production build
npm run build

# Preview the production build locally
npm run preview
```

## 📁 Project Structure

```
src/
├── App.jsx              # Main App component with all sections
├── App.css              # Global animations and styles
├── index.css            # Tailwind CSS entry point
├── main.jsx             # React entry point
tailwind.config.js       # Tailwind configuration
postcss.config.js        # PostCSS configuration
vite.config.js          # Vite configuration
index.html              # HTML template with SEO tags
package.json            # Project dependencies
```

## 🎨 Customization Guide

### Update Brand Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  primary: {
    600: '#YOUR_COLOR_HEX', // Primary blue
  }
}
```

### Update Business Information

In `src/App.jsx`, update:
- Company name and logo
- Phone number and email
- Address and social media links
- Pricing and services

### Add Your Images

Replace placeholder backgrounds with your images:
```jsx
<div style={{backgroundImage: 'url(/your-image.jpg)'}}>
```

## 📱 Responsive Breakpoints

- **Mobile**: 640px and below
- **Tablet**: 641px - 1024px
- **Desktop**: 1025px and above

## ⚡ Performance Optimization

- Code splitting with Vite
- CSS optimized with Tailwind
- Smooth animations with CSS transforms
- Lazy loading ready
- SEO-friendly meta tags included

## 🔍 SEO Features

- ✅ Meta tags and descriptions
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Canonical URLs
- ✅ Structured semantic HTML
- ✅ Mobile-friendly viewport
- ✅ Preconnect for performance

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

This project is open source and available under the MIT License.

## 👥 Support & Contact

For support or inquiries:
- Email: support@instashiny.com
- Phone: +91-XXXXX-XXXXX
- Location: Gurugram, India

## 🎉 Contributing

We welcome contributions! Please feel free to submit a Pull Request.

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Vite Documentation](https://vitejs.dev)
- [Lucide Icons](https://lucide.dev)

---

**Version**: 1.0.0  
**Last Updated**: April 30, 2024
