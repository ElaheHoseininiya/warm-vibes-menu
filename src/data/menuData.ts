export interface MenuItem {
  id: string;
  name: string;
  description: string;
  category: string;
  price: string;
  image: string;
}

export const menuCategories = [
  "Coffee",
  "Espresso",
  "Cold Drinks",
  "Pastries",
  "Breakfast"
];

export const menuItems: MenuItem[] = [
  // Coffee
  {
    id: "1",
    name: "Classic Drip Coffee",
    description: "Smooth and balanced, our signature blend brewed to perfection. Made from single-origin beans roasted in-house.",
    category: "Coffee",
    price: "$3.50",
    image: "coffee-drip.jpg"
  },
  {
    id: "2",
    name: "French Press",
    description: "Rich, full-bodied coffee with complex flavors. Steeped for 4 minutes for optimal extraction.",
    category: "Coffee",
    price: "$4.50",
    image: "coffee-french.jpg"
  },
  {
    id: "3",
    name: "Pour Over",
    description: "Meticulously hand-poured coffee highlighting nuanced flavors. Available in light, medium, or dark roast.",
    category: "Coffee",
    price: "35000T",
    image: "coffee-pourover.jpg"
  },
  
  // Espresso
  {
    id: "4",
    name: "Espresso",
    description: "A bold shot of concentrated coffee with a rich crema. The foundation of all our espresso drinks.",
    category: "Espresso",
    price: "$3.00",
    image: "espresso.jpg"
  },
  {
    id: "5",
    name: "Cappuccino",
    description: "Equal parts espresso, steamed milk, and velvety microfoam. A perfectly balanced classic.",
    category: "Espresso",
    price: "$4.50",
    image: "cappuccino.jpg"
  },
  {
    id: "6",
    name: "Latte",
    description: "Smooth espresso with steamed milk and a touch of foam. Can be customized with your favorite flavors.",
    category: "Espresso",
    price: "$4.75",
    image: "latte.jpg"
  },
  {
    id: "7",
    name: "Flat White",
    description: "Double ristretto shots with silky microfoam. An Australian favorite with intense coffee flavor.",
    category: "Espresso",
    price: "$4.75",
    image: "flatwhite.jpg"
  },
  
  // Cold Drinks
  {
    id: "8",
    name: "Iced Coffee",
    description: "Cold-brewed for 12 hours for a smooth, less acidic taste. Served over ice with your choice of milk.",
    category: "Cold Drinks",
    price: "$4.00",
    image: "iced-coffee.jpg"
  },
  {
    id: "9",
    name: "Cold Brew",
    description: "Slow-steeped for 18 hours, resulting in a naturally sweet and smooth coffee concentrate.",
    category: "Cold Drinks",
    price: "$4.50",
    image: "cold-brew.jpg"
  },
  {
    id: "10",
    name: "Iced Latte",
    description: "Espresso poured over ice with cold milk. Refreshing and energizing.",
    category: "Cold Drinks",
    price: "$5.00",
    image: "iced-latte.jpg"
  },
  
  // Pastries
  {
    id: "11",
    name: "Croissant",
    description: "Buttery, flaky French pastry baked fresh daily. Golden layers of perfection.",
    category: "Pastries",
    price: "$3.50",
    image: "croissant.jpg"
  },
  {
    id: "12",
    name: "Chocolate Muffin",
    description: "Rich, moist muffin loaded with dark chocolate chips. A decadent treat with your coffee.",
    category: "Pastries",
    price: "$4.00",
    image: "muffin.jpg"
  },
  {
    id: "13",
    name: "Cinnamon Roll",
    description: "Soft, pillowy roll swirled with cinnamon and topped with cream cheese frosting.",
    category: "Pastries",
    price: "$4.50",
    image: "cinnamon-roll.jpg"
  },
  
  // Breakfast
  {
    id: "14",
    name: "Avocado Toast",
    description: "Smashed avocado on sourdough with cherry tomatoes, feta, and a drizzle of olive oil.",
    category: "Breakfast",
    price: "$8.50",
    image: "avocado-toast.jpg"
  },
  {
    id: "15",
    name: "Breakfast Sandwich",
    description: "Scrambled eggs, cheddar cheese, and your choice of bacon or sausage on a toasted English muffin.",
    category: "Breakfast",
    price: "$7.50",
    image: "breakfast-sandwich.jpg"
  },
  {
    id: "16",
    name: "Yogurt Parfait",
    description: "Greek yogurt layered with house-made granola, fresh berries, and local honey.",
    category: "Breakfast",
    price: "$6.50",
    image: "parfait.jpg"
  }
];
