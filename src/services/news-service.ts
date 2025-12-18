// Mock data for our news service
const mockArticles = [
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
  },
  {
    id: 4,
    title: "New Ham Festival Attendance Reaches Record Highs",
    excerpt: "The annual HamFest International drew over 75,000 attendees this year, signaling strong consumer confidence.",
    content: `<p>The annual HamFest International has concluded another successful year, drawing over 75,000 attendees to the four-day celebration of all things ham. This year's event in Vienna set new records for both attendance and vendor participation.</p>
    
    <p>"The enthusiasm this year has been extraordinary," said festival organizer Maria Schmidt. "We had over 300 vendors from 25 countries, showcasing everything from traditional regional specialties to cutting-edge ham products."</p>
    
    <h2>Festival Highlights</h2>
    
    <p>Among the notable attractions were:</p>
    
    <ul>
      <li>Master class workshops with world-renowned ham artisans</li>
      <li>Tasting tours featuring rare and heritage breeds</li>
      <li>Cooking competitions with celebrity chef judges</li>
      <li>Educational seminars on sustainable pork farming</li>
    </ul>
    
    <p>The festival also introduced several new initiatives focused on sustainability and ethical sourcing, reflecting growing consumer interest in responsible food production.</p>
    
    <p>Plans are already underway for next year's event, with organizers considering expansion to accommodate continued growth in interest.</p>`,
    category: "Events",
    author: {
      name: "Jennifer Lopez",
      avatar: "/placeholder.svg?height=40&width=40",
      bio: "Event Correspondent covering major food festivals and culinary gatherings worldwide."
    },
    date: "Dec 8, 2025",
    readTime: "4 min read",
    image: "/placeholder.svg?height=400&width=800",
    tags: ["Festival", "Events", "Attendance", "Consumer Confidence", "Culinary"]
  },
  {
    id: 5,
    title: "Study Reveals Health Benefits of Moderate Ham Consumption",
    excerpt: "Research finds that moderate ham intake can contribute to a balanced diet rich in protein and essential nutrients.",
    content: `<p>A new study published in the Journal of Nutritional Science suggests that moderate consumption of lean ham can be part of a healthy diet, providing high-quality protein and essential nutrients without significantly impacting cardiovascular health when consumed as part of a balanced dietary pattern.</p>
    
    <p>"Our research challenges some of the misconceptions about processed meats," explained lead researcher Dr. Amanda Foster. "When consumed in moderation and as part of an overall healthy diet, lean ham can actually contribute positively to nutrient intake, particularly for protein, B-vitamins, and minerals like zinc and selenium."</p>
    
    <h2>Key Findings</h2>
    
    <p>The study, which followed 2,500 participants over 18 months, revealed several important insights:</p>
    
    <ol>
      <li>Participants who consumed 1-2 servings of lean ham per week showed no increased risk of heart disease</li>
      <li>Ham consumption contributed significantly to daily protein requirements, especially among older adults</li>
      <li>Choosing lean cuts and controlling portion sizes were key factors in positive outcomes</li>
    </ol>
    
    <p>The researchers emphasized that their findings support current dietary guidelines that advocate for moderation rather than elimination of lean processed meats. They also noted the importance of pairing ham consumption with plenty of fruits, vegetables, and whole grains.</p>
    
    <p>Future research will examine the impact of different preparation methods and seasoning choices on health outcomes.</p>`,
    category: "Health",
    author: {
      name: "Dr. Sarah Kim",
      avatar: "/placeholder.svg?height=40&width=40",
      bio: "Health and Nutrition Correspondent with expertise in dietary research and public health."
    },
    date: "Dec 5, 2025",
    readTime: "5 min read",
    image: "/placeholder.svg?height=400&width=800",
    tags: ["Health", "Nutrition", "Research", "Protein", "Dietary Guidelines"]
  }
];

// Service functions
export const newsService = {
  // Fetch all articles
  async getArticles(): Promise<any[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockArticles;
  },

  // Fetch a single article by ID
  async getArticleById(id: number): Promise<any | undefined> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockArticles.find(article => article.id === id);
  },

  // Fetch articles by category
  async getArticlesByCategory(category: string): Promise<any[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockArticles.filter(article => 
      article.category.toLowerCase() === category.toLowerCase()
    );
  },

  // Search articles by query
  async searchArticles(query: string): Promise<any[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    const lowerQuery = query.toLowerCase();
    return mockArticles.filter(article => 
      article.title.toLowerCase().includes(lowerQuery) ||
      article.excerpt.toLowerCase().includes(lowerQuery) ||
      article.content.toLowerCase().includes(lowerQuery) ||
      article.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    );
  }
};