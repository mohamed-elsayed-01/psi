import {
    Sun,
    Waves,
    Flower2,
    Dumbbell,
    Briefcase,
    Footprints,
    TreeDeciduous,
    Baby,
    Gamepad2,
    Coffee,
    Bell
} from "lucide-react";
import modernLayouts from "@/public/images/features/home.png"
import skylineViews from "@/public/images/features/building.png"
import resortStyleAmenities from "@/public/images/features/blage.png"
import img1 from "@/public/images/ideal-home/1.png"
import img2 from "@/public/images/ideal-home/2.png"
import img3 from "@/public/images/ideal-home/3.png"
import img4 from "@/public/images/ideal-home/4.png"
import slider1 from "@/public/images/slider/slide1.png"
import slider2 from "@/public/images/slider/slide2.png"
import slider3 from "@/public/images/slider/slide3.png"
import slider4 from "@/public/images/slider/slide4.jpg"
import slider5 from "@/public/images/slider/slide5.jpg"
import slider6 from "@/public/images/slider/slide6.jpg"

import island1 from "@/public/images/island/img1.png"
import island2 from "@/public/images/island/img2.png"
import island3 from "@/public/images/island/img3.png"
import island4 from "@/public/images/island/img4.png"


const features = [
    {
        title: "Modern layouts",
        img: modernLayouts,
    },
    {
        title: "Skyline views",
        img: skylineViews,
    },
    {
        title: "Resort-style amenities",
        img: resortStyleAmenities,
    }
]

const residences = [
    {
        title: "1 Bedroom Residences",
        features: [
            "Perfect for singles & young professionals",
            "81–131 Sqm",
            "Starting from AED 2.35M"
        ],
        img: img1
    },
    {
        title: "2 Bedroom Residences",
        features: [
            "Spacious contemporary design",
            "129–227 Sqm"
        ],
        img: img2
    },
    {
        title: "3 Bedroom Residences",
        features: [
            "Ideal for families",
            "183–184 Sqm"
        ],
        img: img3
    },
    {
        title: "4 Bedroom Penthouses",
        features: [
            "Premium luxury with panoramic views",
            "397–468 Sqm"
        ],
        img: img4
    }
];

const slides = [
    {
        id: 1,
        image: slider1,
        alt: "Luxury interior dining room",
    },
    {
        id: 2,
        image: slider2,
        alt: "Mediterranean villa with pool",
    },
    {
        id: 3,
        image: slider3,
        alt: "Modern hillside house",
    },
    {
        id: 4,
        image: slider4,
        alt: "Luxury interior dining room",
    },
    {
        id: 5,
        image: slider5,
        alt: "Mediterranean villa with pool",
    },
    {
        id: 6,
        image: slider6,
        alt: "Modern hillside house",
    }
]

const amenities = [
    {
        title: "Skyroof Deck",
        icon: Sun
    },
    {
        title: "Swimming Pool",
        icon: Waves
    },
    {
        title: "Wellness Facilities",
        icon: Flower2
    },
    {
        title: "Gym",
        icon: Dumbbell
    },
    {
        title: "Co-working Spaces",
        icon: Briefcase
    },
    {
        title: "Promenade & Boardwalk",
        icon: Footprints
    },
    {
        title: "Park & Green Spaces",
        icon: TreeDeciduous
    },
    {
        title: "Children's Play Areas",
        icon: Baby
    },
    {
        title: "Gaming Room",
        icon: Gamepad2
    },
    {
        title: "Cafés, Dining & Retail",
        icon: Coffee
    },
    {
        title: "24/7 Concierge",
        icon: Bell
    }
]

const islandSlides = [
    {
        duration: "10 Min",
        img: island1
    },
    {
        duration: "15 Min",
        img: island2
    },
    {
        duration: "20 Min",
        img: island3
    },
    {
        duration: "25 Min",
        img: island4
    },
    {
        duration: "10 Min",
        img: island1
    },
    {
        duration: "15 Min",
        img: island2
    },
    {
        duration: "20 Min",
        img: island3
    },
    {
        duration: "25 Min",
        img: island4
    }
]

const investment = [
    "High-Demand Waterfront Location",
    "Large Apartment Layouts (Bigger Than Market Average)",
    "Strong Future Rental Demand",
    "Located In The Fastest-Growing Island District",
    "Limited Inventory, High Appreciation Potential",
    "Delivered By A Trusted Developer"
]

export {
    features,
    residences,
    slides,
    amenities,
    islandSlides,
    investment
}