
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Blog = () => {
  const { t } = useLanguage();

  const blogPosts = [
    {
      id: 1,
      title: t('blog.post1.title'),
      excerpt: t('blog.post1.excerpt'),
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop',
      date: 'March 15, 2024',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: t('blog.post2.title'),
      excerpt: t('blog.post2.excerpt'),
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=250&fit=crop',
      date: 'March 10, 2024',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: t('blog.post3.title'),
      excerpt: t('blog.post3.excerpt'),
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop',
      date: 'March 5, 2024',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: t('blog.post4.title'),
      excerpt: t('blog.post4.excerpt'),
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop',
      date: 'February 28, 2024',
      readTime: '8 min read'
    },
    {
      id: 5,
      title: t('blog.post5.title'),
      excerpt: t('blog.post5.excerpt'),
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop',
      date: 'February 20, 2024',
      readTime: '5 min read'
    },
    {
      id: 6,
      title: t('blog.post6.title'),
      excerpt: t('blog.post6.excerpt'),
      image: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=400&h=250&fit=crop',
      date: 'February 15, 2024',
      readTime: '9 min read'
    }
  ];

  return (
    <div className="font-montserrat animate-fade-in">
      {/* Hero Section */}
      <section className="bg-neutral-light py-16 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-primary mb-6 animate-fade-in">
            {t('blog.page_title')}
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {t('blog.page_description')}
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold text-primary mb-4">{t('blog.featured_article')}</h2>
          </div>
          
          <Card className="overflow-hidden max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <CardHeader>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span>{blogPosts[0].date}</span>
                    <span className="mx-2">•</span>
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                  <CardTitle className="text-2xl text-primary">{blogPosts[0].title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-6">{blogPosts[0].excerpt}</p>
                  <Button className="bg-primary hover:bg-primary/90 text-white">
                    {t('blog.readmore')}
                  </Button>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-primary mb-12 animate-fade-in">
            {t('blog.latest_articles')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <Card 
                key={post.id} 
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl text-primary hover:text-primary/80 transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{post.excerpt}</p>
                  <Button 
                    variant="outline" 
                    className="border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    {t('blog.readmore')}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-primary text-white animate-fade-in" style={{ animationDelay: '0.8s' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('blog.newsletter.title')}</h2>
          <p className="text-xl mb-8">
            {t('blog.newsletter.description')}
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder={t('blog.newsletter.placeholder')}
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
              />
              <Button className="bg-accent hover:bg-accent/90 text-white px-6">
                {t('blog.newsletter.button')}
              </Button>
            </div>
            <p className="text-sm text-gray-200 mt-3">
              {t('blog.newsletter.note')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
