import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface CategoryNavProps {
  categories: string[];
  activeCategory: string;
  onCategoryClick: (category: string) => void;
}

export const CategoryNav = ({ categories, activeCategory, onCategoryClick }: CategoryNavProps) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToCategory = (category: string) => {
    onCategoryClick(category);
    const element = document.getElementById(category.toLowerCase().replace(/\s+/g, '-'));
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav 
      className={cn(
        "sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border transition-all duration-300",
        isSticky && "shadow-card"
      )}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex gap-2 overflow-x-auto hide-scrollbar">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => scrollToCategory(category)}
              className={cn(
                "px-4 py-2 rounded-full whitespace-nowrap font-medium transition-all duration-300 text-sm md:text-base",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-warm"
                  : "bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};
