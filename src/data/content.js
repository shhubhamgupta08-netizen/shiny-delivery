export const BRAND = {
  name: "InstaShiny",
  tagline: "Laundry made effortless"
};

export const whatsappLink = (message = "") => {
  const phone = "1234567890";
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};

export const SERVICES = [
  {
    name: "Wash & Fold",
    price: "₹69/kg",
    desc: "Fresh, clean and folded",
    image: "/wash-fold.jpg"
  },
  {
    name: "Wash & Iron",
    price: "₹99/kg",
    desc: "Clean, pressed & ready to wear",
    image: "/wash-iron.jpg"
  },
  {
    name: "Dry Cleaning",
    price: "Starting ₹99/item",
    desc: "Premium care for delicate clothing",
    image: "/dry-cleaning.jpg"
  },
  {
    name: "Shoes Cleaning",
    price: "₹249/pair",
    desc: "Clean, restore & refresh footwear",
    image: "/shoes-cleaning.jpg"
  },
  {
    name: "Steam Iron",
    price: "₹69/kg",
    desc: "Crisp, wrinkle-free perfection",
    image: "/steam-iron.jpg"
  }
];

export const FEATURES = [
  { title: "Fast Delivery", desc: "Quick turnaround time" },
  { title: "Affordable", desc: "Best prices in market" },
  { title: "Premium Quality", desc: "Top-notch cleaning" }
];

export const FAQS = [
  {
    question: "How does it work?",
    answer: "We pick up, clean, and deliver your clothes."
  }
];

export const TESTIMONIALS = [
  { name: "Rahul", review: "Amazing service!" },
  { name: "Priya", review: "Super convenient!" }
];

export const METRICS = [
  { label: "Happy Customers", value: "10K+" },
  { label: "Orders Delivered", value: "50K+" }
];

export const TRUST_LOGOS = [];

export const DEFAULT_HERO_VIDEO = "";
export const HERO_FALLBACK_IMAGE = "";
export const STEPS = [
  { title: "Schedule Pickup", desc: "Choose time & place" },
  { title: "We Clean", desc: "Professional laundry service" },
  { title: "Delivery", desc: "Get clothes at your doorstep" }
];
