export interface Destination {
  id: number;
  name: string;
  rating: number; 
  image: string;
  images:string[],
  duration: string;
  price: number;
  tags: string[];
  
  shortDescription: string;
  location: {
  region: string;
  country: string;
  lat: number;
  lng: number;
  mapUrl?: string;
};

  attractions: string[];
  activities: string[];
  bestTimeToVisit: string;
  itinerary: string[];
  hotels: string[];
  transportation: {
    flights?: string[];
    trains?: string[];
    buses?: string[];
  };
  tour?: string
  reviews: {
    user: string;
    rating: number;
    comment: string;
  }[];
  bookingUrl?: string;
  mapEmbedUrl?: string;
  virtualTourUrl?: string;
  deals?: string[];
  recommendedFor?: string[];
  rewards?: {
    badge: string;
    points: number;
    description: string;
  }[];
  events?: {
    name: string;
    date: string;
    description: string;
  }[];
}

export const DESTINATIONS: Destination[] = [
  {
    id: 1,
    name: 'Baku Alps Escape',
    rating:4,
    duration: '7 Days',
    price: 6800,
    image: '/assets/images/baku.jpg',
    images:['/assets/images/baku.jpg','/assets/images/old_city.jpg','/assets/images/Heydar_Mosque.jpg','/assets/images/rock_art.jpg',],
    tags: ['mountains', 'culture', 'luxury'],
    shortDescription: 'Discover the charm of Baku and the Caucasus mountains.',
    location: {
      region: 'Caucasus',
      country: 'Azerbaijan',
      lat: 40.3777,
      lng: 49.8920,
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.123456789!2d49.8920!3d40.3777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d1234567890%3A0xabcdef1234567890!2sBaku%2C%20Azerbaijan!5e0!3m2!1sen!2sin!4v1693476000000'
    },
    attractions: ['Flame Towers', 'Old City', 'Gobustan Rock Art', 'Heydar Mosque'],
    activities: ['Hiking', 'City Tours', 'Cuisine Tasting'],
    bestTimeToVisit: 'April to June',
    itinerary: ['Day 1: Arrival', 'Day 2: City Tour', 'Day 3–6: Mountain Retreat', 'Day 7: Departure'],
    hotels: ['Fairmont Baku', 'Winter Park Hotel'],
    transportation: {
      flights: ['IndiGo', 'Air Arabia'],
      buses: ['Airport Shuttle']
    },
    reviews: [{ user: 'Priya', rating: 4.5, comment: 'Beautiful views and great food!' }],
    bookingUrl: '/book/baku',
    
    deals: ['10% off for couples', 'Free airport pickup'],
    recommendedFor: ['Summer travel', 'Adventure seekers'],
    rewards: [{ badge: 'Explorer', points: 100, description: 'Visited 3 attractions' }],
    events: [{ name: 'Baku Jazz Festival', date: '2025-10-15', description: 'Annual music event' }]
  },

  {
    id: 2,
    name: 'Swiss Serenity',
    rating:4,
    duration: '5 Days',
    price: 7800,
    image:'/assets/images/switzerland.jpg',
    images:['/assets/images/switzerland.jpg','/assets/images/Moritz.jpg','/assets/images/matterhorn.jpg','/assets/images/Lake_Lucerne.jpg'],
    tags: ['alps', 'lakes', 'luxury'],
    shortDescription: 'Explore the Swiss Alps and lakeside villages with joyness.',
    location: {
      region: 'Europe',
      country: 'Switzerland',
      
      lat: 46.8182	,
      lng: 8.2275,
      mapUrl:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2760.0000000000005!2d8.2275!3d46.8182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478ff4c123456789%3A0xabcdef1234567890!2sSwitzerland!5e0!3m2!1sen!2sin!4v1693476000000'
    },
    attractions: ['Lake Lucerne', 'Matterhorn', 'Interlaken','St. Moritz'],
    activities: ['Cable Car Rides', 'Chocolate Tasting', 'Scenic Rail'],
    bestTimeToVisit: 'May to September',
    itinerary: ['Day 1: Arrival in Zurich', 'Day 2: Lucerne Tour', 'Day 3: Interlaken', 'Day 4: Zermatt', 'Day 5: Departure'],
    hotels: ['Hotel Schweizerhof', 'Victoria Jungfrau'],
    transportation: {
      flights: ['Swiss Air', 'Lufthansa'],
      buses: ['Local Shuttles']
    },
    reviews: [{ user: 'Ankit', rating: 4.8, comment: 'Breathtaking views and smooth travel!' }],
    bookingUrl: '/book/swiss',
    deals: ['Early bird discount', 'Free rail pass'],
    recommendedFor: ['Couples', 'Nature lovers'],
    rewards: [{ badge: 'Alpine Adventure', points: 150, description: 'Explored 3 mountain towns' }],
    events: [{ name: 'Lucerne Festival', date: '2025-08-20', description: 'Classical music celebration' }]
  },
  {
    id: 3,
    name: 'Georgian Highlands',
    rating:4,
    duration: '6 Days',
    price: 15000,
    image:'/assets/images/georgian/georgian.jpg',
    images: [
    '/assets/images/georgian/Kazbegi.jpg',
    '/assets/images/georgian/Tbilisi.jpg',
    '/assets/images/georgian/georgian.jpg',
    '/assets/images/georgian/Wine_Valleys.jpg'
  ],
    tags: ['culture', 'mountains', 'wine'],
    shortDescription: 'Experience the rich heritage.',
    location: {
      region: 'Caucasus',
      country: 'Georgia',
      lat: 48.8534	,
      lng: 2.3488,
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9995870812024!2d2.3488!3d48.8534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fdd6d7632b3%3A0xf4ec9b7f0b9b3b3!2sParis%2C%20France!5e0!3m2!1sen!2sin!4v1693476000000'
    },
    attractions: ['Tbilisi Old Town', 'Kazbegi', 'Wine Valleys'],
    activities: ['Winery Tours', 'Hiking', 'Cultural Walks'],
    bestTimeToVisit: 'September to November',
    itinerary: ['Day 1: Tbilisi', 'Day 2: Mtskheta', 'Day 3–5: Kazbegi Retreat', 'Day 6: Departure'],
    hotels: ['Rooms Hotel Kazbegi', 'Tbilisi Marriott'],
    transportation: {
      flights: ['FlyDubai', 'Qatar Airways'],
      buses: ['Private Transfers']
    },
    reviews: [{ user: 'Meera', rating: 4.6, comment: 'Loved the wine and mountain views!' }],
    bookingUrl: '/book/georgia',
    deals: ['Free wine tasting', 'Group discounts'],
    recommendedFor: ['Culture buffs', 'Foodies'],
    rewards: [{ badge: 'Heritage Seeker', points: 120, description: 'Visited 2 UNESCO sites' }],
    events: [{ name: 'Tbilisi Jazz Festival', date: '2025-09-10', description: 'Live performances across the city' }]
  },
  {
    id: 4,
    name: 'Bali Bliss Retreat',
    rating:4,
    duration: '6 Days',
    price: 13000,
    image:'/assets/images/bali/honeymoon.jpg',
    images: [
    '/assets/images/bali/Ubud_Rice.jpg',
    '/assets/images/bali/Tanah.jpg',
    '/assets/images/bali/honeymoon.jpg',
    '/assets/images/bali/Seminyak.jpg'
  ],
        tags: ['beach', 'wellness', 'culture'],
    shortDescription: 'Relax in Bali’s tropical paradise and spiritual sanctuaries.',
    location: {
      region: 'Southeast Asia',
      country: 'Indonesia',
      lat: -8.4095	,
      lng:115.1889 ,
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.1234567890123!2d115.1889!3d-8.4095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd247e6f1234567%3A0xabcdef1234567890!2sBali%2C%20Indonesia!5e0!3m2!1sen!2sin!4v1693476000000'
    },
    attractions: ['Ubud Rice Terraces', 'Tanah Lot Temple', 'Seminyak Beach'],
    activities: ['Yoga', 'Surfing', 'Temple Visits'],
    bestTimeToVisit: 'March to May',
    itinerary: ['Day 1: Arrival', 'Day 2: Ubud Tour', 'Day 3–5: Beach & Wellness', 'Day 6: Departure'],
    hotels: ['Four Seasons Bali', 'Alila Villas'],
    transportation: {
      flights: ['AirAsia', 'Singapore Airlines'],
      buses: ['Hotel Shuttles']
    },
    reviews: [{ user: 'Ravi', rating: 4.7, comment: 'Peaceful and rejuvenating!' }],
    bookingUrl: '/book/bali',
    deals: ['Spa voucher included', 'Free airport transfer'],
    recommendedFor: ['Wellness seekers', 'Beach lovers'],
    rewards: [{ badge: 'Zen Explorer', points: 90, description: 'Completed 3 wellness activities' }],
    events: [{ name: 'Bali Spirit Festival', date: '2025-04-05', description: 'Yoga and music celebration' }]
  },
  {
    id: 5,
    name: 'Tokyo Urban Pulse',
    rating:4,
    duration: '5 Days',
    price: 17000,
    image:'/assets/images/japan/japan.jpg',
    images: [
    '/assets/images/japan/japan.jpg',
    '/assets/images/japan/Shibuya_Crossing.jpg',
    '/assets/images/japan/tokyo.jpg',
    '/assets/images/japan/Asakusa.jpg'
  ],
    tags: ['city', 'tech', 'culture'],
    shortDescription: 'Dive into Tokyo’s futuristic skyline and ancient traditions.',
    location: {
      region: 'East Asia',
      country: 'Japan',
      lat: 35.6895,
      lng:139.6917,
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9995870812024!2d139.6917!3d35.6895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fdd6d7632b3%3A0xf4ec9b7f0b9b3b3!2sTokyo%2C%20Japan!5e0!3m2!1sen!2sin!4v1693476000000'
    },
    attractions: ['Shibuya Crossing', 'Tokyo Tower', 'Asakusa Temple'],
    activities: ['Shopping', 'Cultural Tours', 'Sushi Making'],
    bestTimeToVisit: 'March to May',
    itinerary: ['Day 1: Arrival', 'Day 2: City Tour', 'Day 3–4: Cultural Immersion', 'Day 5: Departure'],
    hotels: ['Park Hyatt Tokyo', 'Shinjuku Granbell'],
    transportation: {
      flights: ['ANA', 'Japan Airlines'],
      buses: ['Metro & Airport Express']
    },
    reviews: [{ user: 'Sneha', rating: 4.9, comment: 'Tech meets tradition—amazing!' }],
    bookingUrl: '/book/tokyo',
    deals: ['Free metro pass', 'Sushi workshop included'],
    recommendedFor: ['Urban explorers', 'Culture lovers'],
    rewards: [{ badge: 'City Navigator', points: 130, description: 'Explored 5 districts' }],
    events: [{ name: 'Cherry Blossom Parade', date: '2025-03-25', description: 'Seasonal celebration in Ueno Park' }]
  },
  {
  id: 6,
  name: 'Santorini Sunset Escape',
  rating:4,
  duration: '4 Days',
  price: 11000,
  image:'/assets/images/vietnam.jpg',
  images:[],
  tags: ['sunset', 'romantic', 'island'],
  shortDescription: 'Unwind in Santorini’s iconic whitewashed villages and breathtaking sunsets.',
  location: {
    region: 'Mediterranean',
    country: 'Greece',
    lat: 36.3932,
    lng:25.4615,
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3131.0000000000005!2d25.4615!3d36.3932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1499cd1234567890%3A0xabcdef1234567890!2sSantorini%2C%20Greece!5e0!3m2!1sen!2sin!4v1693476000000'
  },
  attractions: ['Oia Village', 'Red Beach', 'Caldera Viewpoints'],
  activities: ['Sunset Cruises', 'Wine Tasting', 'Photography Tours'],
  bestTimeToVisit: 'May to October',
  itinerary: [
    'Day 1: Arrival & Sunset in Oia',
    'Day 2: Beach Day & Wine Tour',
    'Day 3: Caldera Cruise & Local Cuisine',
    'Day 4: Departure'
  ],
  hotels: ['Canaves Oia Suites', 'Katikies Hotel'],
  transportation: {
    flights: ['Aegean Airlines', 'Emirates'],
    buses: ['Island Shuttle']
  },
  reviews: [
    { user: 'Divya', rating: 4.8, comment: 'Magical sunsets and perfect for couples!' }
  ],
  bookingUrl: '/book/santorini',
  deals: ['Honeymoon package available', 'Free sunset cruise'],
  recommendedFor: ['Romantic getaways', 'Luxury travelers'],
  rewards: [
    { badge: 'Sunset Chaser', points: 110, description: 'Captured 3 iconic sunset spots' }
  ],
  events: [
    { name: 'Santorini Arts Festival', date: '2025-07-15', description: 'Live music and cultural performances across the island' }
  ]
},

{
  id: 7,
  name: 'Romantic Portugal Trails',
  rating: 4.7,
  duration: '8 Days',
  price: 13000,
  image: '/assets/images/belem.jpg',
  images: [
    '/assets/images/belem.jpg',
    '/assets/images/sintra.jpg',
    '/assets/images/douro.jpg',
    '/assets/images/ribeira.jpg'
  ],
  tags: ['culture', 'romantic', 'scenic', 'budget'],
  shortDescription: 'Wander through Portugal’s charming cities, vineyards, and coastal gems.',
  location: {
    region: 'Southern Europe',
    country: 'Portugal',
    
  lat: 39.3999,
  lng: -8.2245,
  mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3131.0000000000005!2d-8.2245!3d39.3999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1499cd1234567890%3A0xabcdef1234567890!2sPortugal!5e0!3m2!1sen!2sin!4v1693476000000'
  },
  attractions: [
    'Belém Tower',
    'Sintra Palace',
    'Douro Valley Vineyards',
    'Porto Ribeira District'
  ],
  activities: [
    'River Cruise',
    'Wine Tasting',
    'Historic Walking Tours',
    'Beach Sunset Picnics'
  ],
  bestTimeToVisit: 'March to May, September to October',
  itinerary: [
    'Day 1: Arrival in Lisbon',
    'Day 2: Lisbon City Tour',
    'Day 3: Day Trip to Sintra',
    'Day 4–5: Douro Valley Wine Retreat',
    'Day 6–7: Explore Porto',
    'Day 8: Departure'
  ],
  hotels: ['Tivoli Avenida Liberdade', 'The Yeatman Porto'],
  transportation: {
    flights: ['TAP Air Portugal', 'Emirates'],
    buses: ['Rede Expressos', 'Lisbon Airport Shuttle']
  },
  reviews: [
    { user: 'Ananya', rating: 5, comment: 'Every corner felt like a postcard!' }
  ],
  bookingUrl: '/book/portugal',
  deals: ['Early bird 15% off', 'Complimentary wine tasting in Douro'],
  recommendedFor: ['Couples', 'Cultural explorers', 'Photography lovers'],
  rewards: [
    { badge: 'Romantic Voyager', points: 120, description: 'Visited 4 scenic spots' }
  ],
  events: [
    {
      name: 'Festa de São João',
      date: '2025-06-23',
      description: 'Porto’s biggest street festival with fireworks and music'
    }
  ]
},
{
  id: 8,
  name: 'Sacred Varanasi Sojourn',
  rating: 4.6,
  duration: '6 Days',
  price: 8800,
  image: '/assets/images/varanasi/ganga_aarti.jpg',
  images: [
    '/assets/images/varanasi/ganga_aarti.jpg',
    '/assets/images/varanasi/kashi_vishwanath.jpg',
    '/assets/images/varanasi/ghats.jpg',
    '/assets/images/varanasi/sarnath.jpg'
  ],
  tags: ['spiritual', 'culture', 'heritage', 'budget'],
  shortDescription: 'Experience the soul of India through Varanasi’s sacred rituals and timeless heritage.',
  location: {
    region: 'Northern India',
    country: 'India',
    lat: 25.3167,
    lng:83.0104,
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.0000000000005!2d83.0104!3d25.3167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2e1234567890%3A0xabcdef1234567890!2sVaranasi%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2sin!4v1693476000000' 
  },
  attractions: [
    'Kashi Vishwanath Temple',
    'Ganga Aarti at Dashashwamedh Ghat',
    'Sarnath Buddhist Site',
    'Manikarnika Ghat'
  ],
  activities: [
    'Sunrise Boat Ride',
    'Temple Visits',
    'Evening Aarti Ceremony',
    'Street Food Walk'
  ],
  bestTimeToVisit: 'October to March',
  itinerary: [
    'Day 1: Arrival and Ghat Walk',
    'Day 2: Temple Tour and Aarti',
    'Day 3: Sarnath Excursion',
    'Day 4: Cultural Walk and Food Trail',
    'Day 5: Boat Ride and Leisure',
    'Day 6: Departure'
  ],
  hotels: ['BrijRama Palace', 'Hotel Ganges Grand'],
  transportation: {
    flights: ['IndiGo', 'Air India'],
    buses: ['UP Tourism Shuttle', 'Local Rickshaws']
  },
  reviews: [
    { user: 'Ravi', rating: 4.8, comment: 'Spiritually uplifting and beautifully chaotic!' }
  ],
  bookingUrl: '/book/varanasi',
  deals: ['5% off for solo travelers', 'Free guided temple tour'],
  recommendedFor: ['Spiritual seekers', 'Culture lovers', 'Budget explorers'],
  rewards: [
    { badge: 'Soul Seeker', points: 90, description: 'Attended 3 spiritual ceremonies' }
  ],
  events: [
    {
      name: 'Dev Deepawali',
      date: '2025-11-12',
      description: 'Thousands of lamps light up the ghats in a breathtaking celebration'
    }
  ]
},
{
  id: 9,
  name: 'Queenstown Adventure',
  rating: 4.9,
  duration: '7 Days',
  price: 11000,
  image: '/assets/images/queenstown/lake_wakatipu.jpg',
  images: [
    '/assets/images/queenstown/lake_wakatipu.jpg',
    '/assets/images/queenstown/bungee_jump.jpg',
    '/assets/images/queenstown/milford_sound.jpg',
    '/assets/images/queenstown/gondola_view.jpg'
  ],
  tags: ['adventure', 'nature', 'luxury', 'international'],
  shortDescription: 'Dive into adrenaline-pumping adventures and breathtaking landscapes in New Zealand’s adventure capital.',
  location: {
    region: 'South Island',
    country: 'New Zealand',
    
    lat: -45.0312,
    lng:168.6626,
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.0000000000005!2d168.6626!3d-45.0312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6d1234567890%3A0xabcdef1234567890!2sQueenstown%2C%20New%20Zealand!5e0!3m2!1sen!2sin!4v1693476000000'
  },
  attractions: [
    'Lake Wakatipu',
    'Milford Sound',
    'Skyline Gondola',
    'Shotover River'
  ],
  activities: [
    'Bungee Jumping',
    'Jet Boating',
    'Hiking & Scenic Walks',
    'Wine Tasting Tours'
  ],
  bestTimeToVisit: 'November to April',
  itinerary: [
    'Day 1: Arrival and Lakefront Walk',
    'Day 2: Skyline Gondola and Luge',
    'Day 3: Bungee Jump & Jet Boat Ride',
    'Day 4: Milford Sound Cruise',
    'Day 5: Wine Tour in Gibbston Valley',
    'Day 6: Leisure & Shopping',
    'Day 7: Departure'
  ],
  hotels: ['Eichardt’s Private Hotel', 'The Rees Hotel'],
  transportation: {
    flights: ['Air New Zealand', 'Qantas'],
    buses: ['InterCity Coachlines', 'Local Shuttles']
  },
  reviews: [
    { user: 'Sophie', rating: 4.9, comment: 'Absolutely thrilling and stunning views everywhere!' }
  ],
  bookingUrl: '/book/queenstown',
  deals: ['Early bird 10% off', 'Free gondola ride with adventure package'],
  recommendedFor: ['Thrill seekers', 'Nature lovers', 'Luxury travelers'],
  rewards: [
    { badge: 'Adrenaline Ace', points: 120, description: 'Completed 3 adventure activities' }
  ],
  events: [
    {
      name: 'Queenstown Winter Festival',
      date: '2025-06-20',
      description: 'A vibrant celebration of winter sports, music, and alpine culture'
    }
  ]
},
{
  id: 10,
  name: 'Singapore Group Tour',
  rating: 4.5,
  duration: '4 Days',
  price: 19000,
  image: '/assets/images/singapore/singapore.jpg',
  images: [
    '/assets/images/singapore/singapore.jpg',
    '/assets/images/singapore/flyer.jpg',
    '/assets/images/singapore/by_the_bay.jpg',
    '/assets/images/singapore/sentosa.jpg'
  ],
  tags: ['luxury', 'city', 'modern', 'international'],
  shortDescription: 'Experience the dazzling skyline and futuristic gardens of Singapore.',
  location: {
    region: 'Southeast Asia',
    country: 'Singapore',
    lat: 1.3521,
    lng:103.8198,
    
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1996.0000000000005!2d103.8198!3d1.3521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1234567890%3A0xabcdef1234567890!2sSingapore!5e0!3m2!1sen!2sin!4v1693476000000'
  },
  attractions: [
    'Marina Bay Sands',
    'Gardens by the Bay',
    'Sentosa Island',
    'Singapore Flyer'
  ],
  activities: [
    'Night Safari',
    'Skywalk',
    'Shopping',
    'River Cruise'
  ],
  bestTimeToVisit: 'February to April',
  itinerary: [
    'Day 1: Arrival & Marina Bay',
    'Day 2: Gardens & City Tour',
    'Day 3: Sentosa Adventure',
    'Day 4: Departure'
  ],
  hotels: ['Marina Bay Sands', 'The Fullerton Hotel'],
  transportation: {
    flights: ['Singapore Airlines', 'Scoot'],
    buses: ['SMRT', 'Tourist Shuttles']
  },
  reviews: [
    { user: 'Arjun', rating: 4.7, comment: 'Clean, modern, and full of surprises!' }
  ],
  bookingUrl: '/book/singapore',
  deals: ['Free Sentosa pass', 'Skywalk tickets included'],
  recommendedFor: ['Luxury seekers', 'Urban adventurers'],
  rewards: [
    { badge: 'Skyline Explorer', points: 110, description: 'Visited 3 iconic towers' }
  ],
  events: [
    {
      name: 'River Hongbao Festival',
      date: '2025-02-10',
      description: 'Chinese New Year celebration at Marina Bay with lights, performances, and food'
    }
  ]
},
{
  id: 11,
  name: 'Australia Group Departure',
  rating: 4.6,
  duration: '6 Days',
  price: 24000,
  image: '/assets/images/australia/australia.jpg',
  images: [
    '/assets/images/australia/australia.jpg',
    '/assets/images/australia/opera.jpg',
    '/assets/images/australia/harbour.jpg',
    '/assets/images/australia/mountains.jpg'
  ],
  tags: ['coast', 'culture', 'wildlife', 'international'],
  shortDescription: 'Explore Sydney’s icons and Australia’s coastal beauty.',
  location: {
    region: 'Oceania',
    country: 'Australia',
    lat:-25.2744,
    lng:133.7751 ,
    
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1996.0000000000005!2d133.7751!3d-25.2744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b1234567890%3A0xabcdef1234567890!2sAustralia!5e0!3m2!1sen!2sin!4v1693476000000'
  },
  attractions: [
    'Sydney Opera House',
    'Harbour Bridge',
    'Bondi Beach',
    'Blue Mountains'
  ],
  activities: [
    'Surfing',
    'Wildlife Tours',
    'Harbour Cruise',
    'City Walks'
  ],
  bestTimeToVisit: 'Sep to Nov',
  itinerary: [
    'Day 1: Arrival & Harbour',
    'Day 2: City Tour & Opera House',
    'Day 3: Bondi Beach & Coastal Walk',
    'Day 4: Wildlife Safari',
    'Day 5: Blue Mountains Excursion',
    'Day 6: Departure'
  ],
  hotels: ['Shangri-La Sydney', 'QT Bondi'],
  transportation: {
    flights: ['Qantas', 'Virgin Australia'],
    buses: ['Sydney Metro', 'Coastal Coaches']
  },
  reviews: [
    { user: 'Meera', rating: 4.8, comment: 'Nature and city in perfect balance!' }
  ],
  bookingUrl: '/book/australia',
  deals: ['Free beach gear', 'Wildlife park entry included'],
  recommendedFor: ['Nature lovers', 'Beach enthusiasts', 'Culture explorers'],
  rewards: [
    { badge: 'Coastal Voyager', points: 140, description: 'Explored 3 beaches' }
  ],
  events: [
    {
      name: 'Vivid Sydney',
      date: '2025-10-01',
      description: 'Light and music festival across the city'
    }
  ]
},
{
  id: 12,
  name: 'Dreams of India Tour',
  rating: 4.7,
  duration: '7 Days',
  price: 19900,
  image: '/assets/images/india/kerala.jpg',
  images: [
    '/assets/images/india/Amber.jpg',
    '/assets/images/india/kerala.jpg',
    '/assets/images/india/india.jpg',
    '/assets/images/india/market.jpg'
  ],
  tags: ['heritage', 'culture', 'spiritual', 'international'],
  shortDescription: 'Immerse in India’s vibrant traditions and majestic landscapes.',
  location: {
    region: 'South Asia',
    country: 'India',
    
    lat: 20.5937,
    lng:78.9629,
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3131.0000000000005!2d78.9629!3d20.5937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28c1234567890%3A0xabcdef1234567890!2sIndia!5e0!3m2!1sen!2sin!4v1693476000000'
  },
  attractions: [
    'Amber Fort',
    'Backwaters of Kerala',
    'Kathakali Performance',
    'Spice Markets'
  ],
  activities: [
    'Temple Visits',
    'Cultural Shows',
    'Spice Market Tour',
    'Boat Cruise'
  ],
  bestTimeToVisit: 'October to March',
  itinerary: [
    'Day 1: Arrival in Jaipur',
    'Day 2: Heritage Tour & Fort Visit',
    'Day 3: Cultural Show & Local Cuisine',
    'Day 4: Travel to Kerala',
    'Day 5: Backwater Cruise',
    'Day 6: Spice Market & Dance Show',
    'Day 7: Departure'
  ],
  hotels: ['Taj Lake Palace', 'Kumarakom Lake Resort'],
  transportation: {
    flights: ['IndiGo', 'Air India'],
    buses: ['Tourist Coaches', 'Local Shuttles']
  },
  reviews: [
    { user: 'Ravi', rating: 4.9, comment: 'A soulful journey through colors and history!' }
  ],
  bookingUrl: '/book/india',
  deals: ['Free cultural show pass', 'Spice kit included'],
  recommendedFor: ['Culture seekers', 'Spiritual travelers', 'Heritage lovers'],
  rewards: [
    { badge: 'Heritage Explorer', points: 160, description: 'Visited 5 historic sites' }
  ],
  events: [
    {
      name: 'Pushkar Camel Fair',
      date: '2025-11-20',
      description: 'Traditional fair with music, dance, and crafts'
    }
  ]
}



];

