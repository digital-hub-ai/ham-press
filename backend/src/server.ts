import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Create Express app
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Mock data for our news API
const articles = [
  {
    id: 1,
    title: "World's Largest Ham Festival Sets New Attendance Record",
    excerpt: "The annual ham festival in Denmark attracted over 50,000 visitors this year, marking a 15% increase from last year.",
    content: `<p>The annual World Ham Festival held in Copenhagen, Denmark, has broken attendance records once again, drawing over 50,000 visitors from around the globe. This marks a significant 15% increase from last year's event, organizers reported.</p>
    
    <p>"We're thrilled to see such enthusiasm for ham-related events," said festival director Lars Andersen. "This year's expansion of our artisanal ham tasting pavilion and the addition of international vendors really seemed to resonate with attendees."</p>
    
    <h2>New Attractions Draw Crowds</h2>
    
    <p>The festival featured several new attractions this year, including:</p>
    
    <ul>
      <li>Master ham carving demonstrations by renowned chefs</li>
      <li>International ham varieties tasting tour</li>
      <li>Ham preservation workshops</li>
      <li>Children's ham-themed cooking classes</li>
    </ul>
    
    <p>Local vendors reported record sales, with several running out of their specialty products by mid-afternoon on both days of the event.</p>
    
    <blockquote>
      "The quality of ham here is unparalleled. I've traveled from Japan specifically for this festival three years in a row now."
      <cite>- Hiroshi Tanaka, Tokyo</cite>
    </blockquote>
    
    <p>Organizers are already planning for next year's event, with discussions underway to expand the venue to accommodate even more visitors.</p>`,
    category: "Events",
    author: {
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      bio: "Senior Food Correspondent with 10 years of experience covering culinary events worldwide."
    },
    date: "Dec 15, 2025",
    readTime: "4 min read",
    image: "/placeholder.svg?height=400&width=800",
    tags: ["Festival", "Denmark", "Attendance", "Record", "Culinary"]
  },
  {
    id: 2,
    title: "Scientists Develop Revolutionary Ham Preservation Technique",
    excerpt: "Researchers at the Institute of Food Science have created a new method that extends ham shelf life by 50%.",
    content: `<p>Scientists at the Institute of Food Science have announced a breakthrough in food preservation technology that could revolutionize the ham industry. The new technique, which combines modified atmospheric packaging with natural antimicrobial compounds, has been shown to extend the shelf life of cured ham by up to 50% without compromising taste or nutritional value.</p>
    
    <p>"This is a game-changer for both producers and consumers," said Dr. Elena Rodriguez, lead researcher on the project. "By extending shelf life, we're reducing food waste while ensuring consumers have access to fresher products for longer periods."</p>
    
    <h2>How It Works</h2>
    
    <p>The innovative approach involves a two-pronged strategy:</p>
    
    <ol>
      <li>Modified atmospheric packaging that slows oxidation processes</li>
      <li>Natural antimicrobial compounds derived from plant extracts that inhibit bacterial growth</li>
    </ol>
    
    <p>Preliminary trials have shown remarkable results, with ham samples maintaining peak quality for up to 12 weeks compared to the standard 8 weeks achieved with conventional methods.</p>
    
    <p>The research team is now working with several major ham producers to conduct larger-scale trials, with hopes of bringing the technology to market within the next 18 months.</p>`,
    category: "Science",
    author: {
      name: "Dr. Michael Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      bio: "Science Correspondent specializing in food technology and agricultural innovations."
    },
    date: "Dec 12, 2025",
    readTime: "6 min read",
    image: "/placeholder.svg?height=400&width=800",
    tags: ["Science", "Preservation", "Technology", "Innovation", "Food Safety"]
  },
  {
    id: 3,
    title: "Ham Prices Reach All-Time High Due to Supply Chain Issues",
    excerpt: "Global pork shortages have led to a significant increase in ham prices worldwide, affecting holiday markets.",
    content: `<p>Ham prices have surged to unprecedented levels as global pork supplies remain constrained due to ongoing supply chain disruptions and disease outbreaks in key producing regions. Industry analysts report that retail ham prices have increased by as much as 35% compared to the same period last year.</p>
    
    <p>"Consumers are definitely feeling the impact at checkout," noted economist Dr. Patricia Williams. "The combination of reduced supply and sustained demand, particularly during the holiday season, has created perfect storm conditions for price increases."</p>
    
    <h2>Regional Impact</h2>
    
    <p>The price surge is being felt across multiple markets:</p>
    
    <ul>
      <li>European markets have seen a 40% increase due to ASF outbreaks</li>
      <li>North American prices are up 30% amid processing facility bottlenecks</li>
      <li>Asian markets report increases of 25-35% depending on import dependencies</li>
    </ul>
    
    <p>Industry experts suggest that prices may remain elevated through early next year as producers work to rebuild herds and restore processing capacity. However, some relief may come from alternative protein sources and shifts in consumer purchasing patterns.</p>
    
    <p>Retailers are advising consumers to plan ahead for holiday meals and consider alternative proteins where possible.</p>`,
    category: "Economics",
    author: {
      name: "Robert Williams",
      avatar: "/placeholder.svg?height=40&width=40",
      bio: "Economic Analyst focusing on agricultural commodities and food markets."
    },
    date: "Dec 10, 2025",
    readTime: "3 min read",
    image: "/placeholder.svg?height=400&width=800",
    tags: ["Economics", "Prices", "Supply Chain", "Pork", "Market Trends"]
  }
];

// Routes
// Get all articles
app.get('/api/articles', (req, res) => {
  res.json(articles);
});

// Get article by ID
app.get('/api/articles/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const article = articles.find(a => a.id === id);
  
  if (!article) {
    return res.status(404).json({ error: 'Article not found' });
  }
  
  return res.json(article);
});

// Get articles by category
app.get('/api/articles/category/:category', (req, res) => {
  const category = req.params.category;
  const filteredArticles = articles.filter(a => 
    a.category.toLowerCase() === category.toLowerCase()
  );
  
  res.json(filteredArticles);
});

// Search articles
app.get('/api/articles/search/:query', (req, res) => {
  const query = req.params.query.toLowerCase();
  const filteredArticles = articles.filter(article => 
    article.title.toLowerCase().includes(query) ||
    article.excerpt.toLowerCase().includes(query) ||
    article.content.toLowerCase().includes(query) ||
    article.tags.some(tag => tag.toLowerCase().includes(query))
  );
  
  res.json(filteredArticles);
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});

export default app;