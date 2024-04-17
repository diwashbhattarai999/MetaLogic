# Metalogic Website Redesign

## Overview

This project aims to redesign the homepage of the Metalogic website using modern web development technologies. The redesign focuses on improving visual aesthetics, user interface, and implementing interactive elements to enhance user experience.

![Metalogic-Home](https://github.com/diwashbhattarai999/MetaLogic/assets/87477700/b5e73137-d70d-404e-b9b0-e584c4ab3c48)

## Technologies Used

- Next.js
- TypeScript
- Tailwind CSS
- GSAP

## Installation

1. Clone the repository:

```bash
git clone https://github.com/diwashbhattarai999/Gov-Certify.git

```

2. Install dependencies:

```bash
pnpm install
```

3. Start the server:

```bash
# if running development server
pnpm dev

# if running production server
pnpm build
pnpm start
```

4. Open your browser and navigate to http://localhost:3000 to view the redesigned homepage.

## Design Decisions

- Next.js was chosen for its server-side rendering capabilities and efficient routing system.

- TypeScript was used to enhance code readability, maintainability, and type safety.

- GSAP was utilized for animations to create smooth transitions and interactive elements.

- Tailwind CSS provided a utility-first approach to styling, allowing for rapid development and customization.

- Locomotive scroll was used for smooth scrolling experience

## Features Implemented

- **Responsive design** ensures compatibility across various devices and screen sizes.

- **Interactive elements** such as smooth scrolling and scroll-triggered effects enhance user engagement.

- **SEO optimizations** includes Next.js's *automatic server-side rendering*, built-in *metatags management*, *manifest*, *progressive webapp* and *image optimization* capabilities all work together to enhance your site's visibility and ranking in search results.


## Project Structure

The project follows a modular architecture with clear separation of concerns. Below is an overview of the directory structure:

```

public/
├── images/
└── ... 
src/
├── components/
│   ├── animation/  // Folder for reusable animation components
│   ├── sections/  // Folder for reusable page sections
│   │   └── ...  // Section components (e.g., HeroSection.tsx, AboutSection.tsx)
│   └── ui/        // Folder for reusable UI components
|       ├── button.tsx
│       ├── container.tsx
│       └── logo.tsx
├── configs/
│   └── index.ts    // Configuration file for metadata
├── constants/
│   └── index.ts    // Constant definitions (e.g., NAV_LINKS)
├── hooks/
│   ├── useNavbarAnimation.ts  // Custom hook for navbar animation
|   └── ...
├── lib/
│   └── utils.ts     // Utility functions
├── manifest.ts    // Optional: Manifest configuration for service workers
└── ...            

```
## Challenges Faced

- Integrating GSAP animations with the Next.js app router presented a significant challenge due to the need for *careful synchronization* to ensure *smooth rendering* and *performance optimization*
- While I was somewhat familiar with Framer Motion for animations, *I decided to explore GSAP for this project*, even though I had no prior experience with it.
- *Learning to use GSAP effectively required additional time and effort, as it introduced new concepts and syntax compared to Framer Motion.*
- Despite the initial learning curve, *I embraced the opportunity to expand my skill set and successfully implemented dynamic animations throughout the application.*


## Future Improvements

- Implement server-side rendering for dynamic content to further optimize page load times.
- Enhance SEO strategies through continuous monitoring and refinement to improve search engine visibility and ranking.
- Explore additional interactive features and animations to further engage users and create memorable experiences.

## Conclusion

The Metalogic website redesign project showcases the capabilities of modern web development technologies in creating compelling and functional designs. By leveraging Next.js, TypeScript, GSAP, and Tailwind CSS, the redesigned homepage delivers an immersive user experience while maintaining compatibility and performance across various devices and platforms.

## Author

[Diwash Bhattarai](https://github.com/author)
