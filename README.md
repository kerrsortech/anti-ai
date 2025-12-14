# AI Image Authenticity Detection Platform - Landing Page

An elegant, minimalistic landing page for an AI image authenticity detection platform built with React, Vite, and shadcn/ui components.

## Features

- **Modern Design**: Clean, minimalistic aesthetic with strong visual hierarchy
- **Fully Responsive**: Mobile-first design that works on all devices
- **Form Validation**: Complete waitlist form with validation and error handling
- **Smooth Interactions**: Hover effects, smooth scrolling, and transitions
- **Custom Theme**: Primary color #ff6b35 with carefully selected color palette
- **Typography**: Sora font from Google Fonts for elegant typography

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- shadcn/ui components (custom implementation)
- Lucide React icons
- Sora font from Google Fonts

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
anti-ai/
├── src/
│   ├── components/
│   │   └── ui/          # shadcn/ui components
│   ├── lib/
│   │   └── utils.js     # Utility functions
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # React entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── postcss.config.js
```

## Design System

### Colors
- **Primary**: #ff6b35 (coral/orange accent)
- **Background**: White (#ffffff) and subtle grays (#f9fafb, #f3f4f6)
- **Text**: Dark grays (#111827, #374151, #6b7280)
- **Borders**: Light grays (#e5e7eb)

### Typography
- **Font**: Sora (Google Fonts)
- **Weights**: 400, 500, 600, 700
- **Line Height**: 1.6-1.8 for body text

### Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## Sections

1. **Header**: Sticky navigation with logo and CTA
2. **Hero**: Large headline with primary CTA
3. **Problem**: The crisis section with stats
4. **Real-World Impact**: Three example cards
5. **Solution**: How the platform works
6. **Industries**: Bento grid of protected industries
7. **Platform Features**: Detailed feature list
8. **Why Now**: Urgency section with call-out
9. **Waitlist**: Form with validation
10. **Footer**: Links and contact information

## Form Handling

The waitlist form includes:
- Required field validation
- Email format validation
- Error state display
- Success state after submission
- Form data logging (ready for backend integration)

## Customization

### Update Colors
Edit `tailwind.config.js` to modify the color palette.

### Update Content
All content is in `src/App.jsx`. Modify the text and data arrays to update content.

### Add Backend Integration
Update the `handleSubmit` function in `App.jsx` to send form data to your backend API.

## License

MIT

