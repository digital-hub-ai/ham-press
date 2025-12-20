// Blog posts data for integration with news service
import eliteHealthWellnessTourism from '../../fixed-elite-health-wellness-tourism-2025.js';
import evolutionPrivateEducation from '../../evolution-private-education-2025.js';
import exclusiveTravelExperiences from '../../exclusive-travel-experiences-2025.js';
import fineDining2025 from '../../fine-dining-2.0-2025.js';
import futurePremiumRealEstate from '../../future-premium-real-estate-2025.js';
import highEndFashionSustainability from '../../high-end-fashion-sustainability-2025.js';
import luxuryAutomotiveEvolution from '../../luxury-automotive-evolution-2025.js';
import luxuryRetailDigitalTransformation from '../../luxury-retail-digital-transformation-2025.js';
import luxurySpaWellnessRetreats from '../../luxury-spa-wellness-retreats-2025.js';
import premiumCoLivingSpaces from '../../premium-co-living-spaces-2025.js';
import premiumFinancialTechnology from '../../premium-financial-technology-2025.js';
import premiumHomeAutomation from '../../premium-home-automation-2025.js';
import wealthManagement2025 from '../../wealth-management-2025.js';

// Convert blog posts to news service format
const convertBlogPost = (blogPost: any) => ({
  id: blogPost.id,
  title: blogPost.title,
  excerpt: blogPost.excerpt,
  content: blogPost.content,
  category: blogPost.category,
  author: blogPost.author,
  date: blogPost.date,
  readTime: blogPost.readTime,
  image: blogPost.image,
  tags: blogPost.tags,
  isPremium: blogPost.isPremium || false,
});

// All blog posts
export const blogPosts = [
  convertBlogPost(eliteHealthWellnessTourism),
  convertBlogPost(evolutionPrivateEducation),
  convertBlogPost(exclusiveTravelExperiences),
  convertBlogPost(fineDining2025),
  convertBlogPost(futurePremiumRealEstate),
  convertBlogPost(highEndFashionSustainability),
  convertBlogPost(luxuryAutomotiveEvolution),
  convertBlogPost(luxuryRetailDigitalTransformation),
  convertBlogPost(luxurySpaWellnessRetreats),
  convertBlogPost(premiumCoLivingSpaces),
  convertBlogPost(premiumFinancialTechnology),
  convertBlogPost(premiumHomeAutomation),
  convertBlogPost(wealthManagement2025),
];