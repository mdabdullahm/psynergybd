import BlogCategories from "@/components/blogs/blog-categories";
import BlogHero from "@/components/blogs/blog-hero";
import FeaturedArticle from "@/components/blogs/featured-article";
import LatestArticles from "@/components/blogs/latest-articles";
import MentalHealthTips from "@/components/blogs/mental-health-tips";
import Newsletter from "@/components/blogs/newsletter";
import PopularPosts from "@/components/blogs/popular-posts";
import Specialists from "@/components/home/specialists";

export default function BlogsPage() {
  return (
    <main>
      <BlogHero />
      <FeaturedArticle/>
      <BlogCategories/>
      <LatestArticles/>
      <PopularPosts/>
      <MentalHealthTips/>
      <Specialists/>
      <Newsletter/>
    </main>
  );
}