export const BRAND = {
  name: "InstaShiny",
  tagline: "Laundry made effortless"
};

export const whatsappLink = (message = "") => {
  const phone = "917065450490";
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};

export const SERVICES = [
  {
    name: "Wash & Fold",
    price: "₹69/kg",
    desc: "Fresh, clean and folded",
    image: "/wash-fold.png"
  },
  {
    name: "Wash & Iron",
    price: "₹99/kg",
    desc: "Clean, pressed & ready to wear",
    image: "/wash-iron.png"
  },
  {
    name: "Dry Cleaning",
    price: "Starting ₹99/item",
    desc: "Premium care for delicate clothing",
    image: "/dry-cleaning.png"
  },
  {
    name: "Shoes Cleaning",
    price: "₹249/pair",
    desc: "Clean, restore & refresh footwear",
    image: "/shoes-cleaning.png"
  },
  {
    name: "Steam Iron",
    price: "₹69/kg",
    desc: "Crisp, wrinkle-free perfection",
    image: "/steam-iron.png"
  }
];

export const FEATURES = [
  {
    icon: "fa-truck-fast",
    title: "Same-Day Delivery",
    desc: "Order in the morning, get it back fresh by evening — across Gurugram."
  },
  {
    icon: "fa-bolt",
    title: "30-Min Pickup",
    desc: "Schedule a pickup and our valet arrives at your doorstep within 30 minutes."
  },
  {
    icon: "fa-shield-halved",
    title: "No Hidden Charges",
    desc: "Transparent per-kg and per-item pricing. What you see is what you pay."
  },
  {
    icon: "fa-shirt",
    title: "Premium Fabric Care",
    desc: "Hypoallergenic detergents, individual processing, and white-glove finishing."
  }
];

export const FAQS = [
  {
    question: "Which areas in Gurugram do you serve?",
    answer: "We currently serve all major sectors across Gurugram with free pickup and delivery."
  },
  {
    question: "How fast is the pickup once I book?",
    answer: "Pickup usually happens within minutes depending on your location and slot availability."
  },
  {
    question: "Is same-day delivery really possible?",
    answer: "Yes, same-day delivery is available for selected services and time slots."
  },
  {
    question: "How is pricing calculated?",
    answer: "Pricing depends on service type like wash & fold, wash & iron, dry clean, or shoe care."
  },
  {
    question: "Are my clothes processed separately?",
    answer: "Yes, we ensure proper sorting and premium garment care standards."
  },
  {
    question: "What if I'm not happy with the result?",
    answer: "Contact us immediately and our support team will resolve the issue quickly."
  }
];

export const TESTIMONIALS = [
  {
    name: "Rahul",
    review: "InstaShiny makes laundry completely hassle-free!",
    rating: 5,
  },
  {
    name: "Sonal",
    review: "Premium and trustworthy service in Gurugram.",
    rating: 5,
  },
  {
    name: "Piyush",
    review: "Young professional team with fast service.",
    rating: 5,
    verified: true
  },
  {
    name: "komal",
    review: "Speed focused and great quality cleaning.",
    rating: 5,
    verified: true
  }
];

export const METRICS = [
  { label: "ORDERS DELIVERED", value: "1,000+" },
  { label: "GOOGLE RATING", value: "4.9 ⭐" },
  { label: "AVG. PICKUP TIME", value: "30 Min" },
  { label: "HAPPY CUSTOMERS", value: "98%" }
];

export const TRUST_LOGOS = [];

export const DEFAULT_HERO_VIDEO = "";
export const HERO_FALLBACK_IMAGE = "";
export const STEPS = [
  {
    title: "Schedule Pickup",
    desc: "Pick a slot via WhatsApp, app or website — takes 30 seconds.",
    icon: "fa-calendar-check"
  },
  {
    title: "We Pick It Up",
    desc: "A uniformed valet collects your laundry from your door.",
    icon: "fa-person-walking-luggage"
  },
  {
    title: "Expert Cleaning",
    desc: "Sorted, washed, dry-cleaned and pressed by trained specialists.",
    icon: "fa-soap"
  },
  {
    title: "Delivered Fresh",
    desc: "Sealed, packed and delivered the same day.",
    icon: "fa-box-open"
  }
];
