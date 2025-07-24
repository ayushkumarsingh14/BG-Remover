import logo from "./logo.png";
import videoBanner from "./banner.mp4";
import people from "./people.png"
import people_org from "./people-org.png"
import credits from "./dollar.png"

export const assets = {
  logo,
  videoBanner,
  people,
  people_org,
  credits
};

export const steps = [
  {
    step: "Step 1",
    title: "Select an image",
    description: `First, choose the image you want to remove background from by clicking on "Start from a photo".
Your image format can be PNG or JPG.
We support all image dimensions.`
  },
  {
    step: "Step 2",
    title: "Let magic remove the background",
    description: `Our tool automatically removes the background from your image. Next you can choose a background color.
Our most popular options are white and transparent background, but you can pick any color you like.`
  },
  {
    step: "Step 3",
    title: "Download the image",
    description: `After selecting a new background color, download your photo and you're done!
You can also save your picture in the Photoromm App by creating an account.`
  }
];

export const categories = ["People", "Products", "Cars", "Animals", "Graphics"]

export const plans = [
  {
    id: "Basic",
    name: "Basic package",
    price: 499,
    credits: "100 credits",
    description: "Best for personal use",
    popular: false
  },
  {
    id: "Premium",
    name: "Premium package",
    price: 899,
    credits: "250 credits",
    description: "Best for buissness use",
    popular: true
  },
  {
    id: "Ultimate",
    name: "Ultimate package",
    price: 1499,
    credits: "1000 credits",
    description: "Best for enterprises use",
    popular: false
  },
]


export const testimonials = [
  {
    id: 1,
    quote: "This background remover is a lifesaver! It removed the background from my product photos in seconds.",
    author: "Priya Sharma",
    handle: "@priyasharma"
  },
  {
    id: 2,
    quote: "I tried many tools before, but this one is by far the easiest and cleanest. Perfect for my design work!",
    author: "Rohit Verma",
    handle: "@rohit.designs"
  },
  {
    id: 3,
    quote: "The results were super accurate, even with messy backgrounds. Highly recommend it for social media creators!",
    author: "Anjali Mehta",
    handle: "@anjali.creates"
  }
];

export const FooterConstants = [
  {
    url: 'https://www.facebook.com/',
    logo: 'https://cdn-icons-png.flaticon.com/512/733/733547.png',
  },
  {
    url: 'https://www.instagram.com/',
    logo: 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png', 
  },
  {
    url: 'https://www.linkedin.com/',
    logo: 'https://cdn-icons-png.flaticon.com/512/145/145807.png', 
  },
  {
    url: 'https://github.com/',
    logo: 'https://cdn-icons-png.flaticon.com/512/733/733553.png', 
  }
];


