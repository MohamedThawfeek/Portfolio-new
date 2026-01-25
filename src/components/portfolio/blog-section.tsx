import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock } from "lucide-react";





export function BlogSection() {
  const blogPosts = [
    {
      title: "Building Scalable React Applications with TypeScript",
      excerpt: "Learn how to structure large React applications using TypeScript for better maintainability and developer experience.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      category: "React",
      slug: "building-scalable-react-applications"
    },
    {
      title: "Modern CSS Techniques for Better User Experience",
      excerpt: "Explore advanced CSS features and techniques that can improve your website's performance and user experience.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop",
      date: "Dec 10, 2024",
      readTime: "7 min read",
      category: "CSS",
      slug: "modern-css-techniques"
    },
    {
      title: "API Design Best Practices for Node.js",
      excerpt: "A comprehensive guide to designing and building robust APIs with Node.js and Express.js.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop",
      date: "Dec 5, 2024",
      readTime: "6 min read",
      category: "Backend",
      slug: "api-design-best-practices"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4">Blog</Badge>
          <h2 className="text-4xl font-bold mb-6">
            Latest <span className="text-gradient">Insights</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sharing knowledge and insights about web development, design trends, 
            and the latest technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card key={index} className="card-hover group overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary">{post.category}</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
                {/* <Button variant="ghost" className="w-full group/btn">
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button> */}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* <div className="text-center">
          <Button variant="outline" size="lg">
            View All Posts
          </Button>
        </div> */}
      </div>
    </section>
  );
}