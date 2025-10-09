import { useState, useEffect } from "react";
import { menuItems, menuCategories } from "@/data/menuData";
import { MenuItem } from "@/data/menuData";
import { MenuItemCard } from "@/components/MenuItemCard";
import { ItemDetailsDialog } from "@/components/ItemDetailsDialog";
import { CategoryNav } from "@/components/CategoryNav";
import { Coffee } from "lucide-react";

const Index = () => {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(menuCategories[0]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuCategories.map(cat => ({
        id: cat,
        element: document.getElementById(cat.toLowerCase().replace(/\s+/g, '-'))
      }));

      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveCategory(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleItemClick = (item: MenuItem) => {
    setSelectedItem(item);
    setDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Coffee className="w-10 h-10 md:w-12 md:h-12" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Artisan Coffee House
            </h1>
          </div>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Handcrafted beverages & freshly baked goods made with love
          </p>
        </div>
      </header>

      {/* Category Navigation */}
      <CategoryNav 
        categories={menuCategories}
        activeCategory={activeCategory}
        onCategoryClick={setActiveCategory}
      />

      {/* Menu Items */}
      <main className="container mx-auto px-4 py-8 md:py-12">
        {menuCategories.map((category) => {
          const categoryItems = menuItems.filter(item => item.category === category);
          
          return (
            <section 
              key={category} 
              id={category.toLowerCase().replace(/\s+/g, '-')}
              className="mb-16 scroll-mt-32"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 md:mb-8">
                {category}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {categoryItems.map((item) => (
                  <MenuItemCard 
                    key={item.id}
                    item={item}
                    onClick={() => handleItemClick(item)}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </main>

      {/* Item Details Dialog */}
      <ItemDetailsDialog 
        item={selectedItem}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Coffee className="w-5 h-5" />
            <p className="font-semibold">Artisan Coffee House</p>
          </div>
          <p className="text-sm text-muted-foreground">
            Open Daily • 7am - 8pm
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
