import React, { useState } from 'react';
import { MapPin, Star, Clock, Phone, Navigation, Utensils, Camera, TreePine, Anchor, Building, Mountain, Waves, ExternalLink, Fish, Sailboat, Binary as Binoculars, Palette, Music, Camera as CameraIcon, CookingPot as Hiking, Zap } from 'lucide-react';

const Places: React.FC = () => {
  const [activeTab, setActiveTab] = useState('nearby');

  const nearbyPlaces = [
    {
      name: "Westmoreland State Park",
      distance: "14.1 miles from River Edge Inn",
      rating: 4.8,
      description: "Beautiful state park with hiking trails, fossil beach, camping facilities, and swimming pool",
      image: "https://lh3.googleusercontent.com/p/AF1QipMwgcUu5vWc8Ga6NaH15WX20tqoL6ZQkzaXwH4l=w408-h271-k-no",
      type: "Nature",
      googleMapsUrl: "https://maps.app.goo.gl/5C6CFzLXiuhGUdbg9"
    },
    {
      name: "Colonial Beach(Main Beach)",
      distance: "0.2 miles from River Edge Inn",
      rating: 4.6,
      description: "Located just 0.2 miles from River Edge Inn, this wide sandy beach offers swimming, sunbathing, and a family-friendly boardwalk.",
      image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nptd19LcosUpAatDsAt81Q-3bs7EkkhPUUBJDfObQvvax1F0AxPwSKfU2qPlHFErV3TjJNKXRLyASx25YZK2k4JvzCMFx_6i1lGfmCGvWXAKyVsqnw7Rwd1YPXqRk0GWh9LL88X6w=w408-h306-k-no",
      type: "Historic",
      googleMapsUrl: "https://maps.app.goo.gl/DpiwAxAtNsig19GX6"
    },
    {
      name: "Colonial Beach Boardwalk",
      distance: "0.5 miles",
      rating: 4.7,
      description: "Scenic boardwalk with shops, entertainment, fishing pier, and stunning river views",
      image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrMHoYKYXZcgxthQmcQ765pv7R2y-kNQ4NAgC-N5q7bqqmWqifAonHUxayPz1-mh0kAmL6i7Vf2772fBFtGKjnAZ5a6aVmyybJ9Hy2Mxf66CafEy7Ilf-9aARZ5IZ6KN7W9DcWUEw=w408-h307-k-no",
      type: "Entertainment",
      googleMapsUrl: "https://maps.google.com/maps?q=Colonial+Beach+Boardwalk,+VA"
    },
    {
      name: "Monroe Bay Beach",
      distance: "1.1 miles from River Edge Inn",
      rating: 4.5,
      description: "White sandy sloping beach on the Potomac River—a perfect spot for swimming, sunbathing, and relaxing by the water ",
      image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nohTMitctsyxK_5w_uaU-e2A4YA-jm-XjBAqdesZKukCVpdoFfyCZahnL_vCwB0bLkjhmY9ro4-YAgmCZJvgogxPK9LDVYqH_Lk5lGbtlx7xZy4NRqjh4XEevvGFWhKB-MD3ryQ-A=w408-h408-k-no",
      type: "Beach",
      googleMapsUrl: "https://maps.app.goo.gl/1sPywucUcYLa2Ukp9"
    },
    {
      name: "Colonial Beach Municipal Pier",
      distance: "0.8 miles",
      rating: 4.4,
      description: "Popular 600-foot fishing pier extending into the Potomac River with bait shop",
      image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrjhE58hXm_46eJPcIIwTEwZX0aUYc492n-NQPH_SR8gPNO8O12_1Ysb8aZMiw40LRSI2-vBlNFmhtGL_1-uQc-0qK2mGofhkYV-O0r5GtEvvpxuFOQsCtwBYTE-hbiuLONAmxUuTkXXuoD=w408-h306-k-no",
      type: "Recreation",
      googleMapsUrl: "https://maps.google.com/maps?q=Colonial+Beach+Municipal+Pier,+VA"
    },
    {
      name: "Comorn Beach",
      distance: "~25 miles from River Edge Inn",
      rating: 4.6,
      description: "A peaceful riverside beach perfect for kayaking, fishing, and enjoying the rural Virginia waterfront charm.",
      image: "https://magarits.com/RiverEdgeInnColonialBeach3/assets/img/b6.jpeg",
      type: "Beach",
      googleMapsUrl: "https://maps.app.goo.gl/95H4wCfGSp88KGrV9"
    },
    {
      name: "Colonial Beach Historical Society & Museum",
      distance: "0.3 miles from River Edge Inn ",
      rating: 4.3,
      description: "Local history museum featuring maritime artifacts and colonial exhibits",
      image: "https://images.pexels.com/photos/1134166/pexels-photo-1134166.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      type: "Historic",
      googleMapsUrl: "https://maps.app.goo.gl/ZRxDQMWZkVa79fAb9"
    },
    {
      name: "Piney Point Beach",
      distance: "14 miles from River Edge Inn",
      rating: 4.5,
      description: "A peaceful beach area along the Potomac River, ideal for a quiet day of sunbathing, swimming, or simply relaxing.",
      image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nro6z6KOGwYApRyZkscTLUPoKtYqkNVHx3u1ZSqdDmpPW7ryT7nUewYwphyqcQ4zFbchcs23u3soSt3tPXTwzxbvD0jDdS4k9mUgLk1b--0l1vQOGR6aaodaroIdsqkGOwITFL-=w408-h306-k-no",
      type: "Nature",
      googleMapsUrl: "https://maps.app.goo.gl/yhrLfumNRF4nSMXy7"
    },
    {
      name: "Windmill Point Beach",
      distance: "~30 miles from River Edge Inn",
      rating: 4.6,
      description: "A serene, uncrowded beach spot ideal for quiet relaxation, bird watching, and stunning sunsets by the bay.",
      image: "https://magarits.com/RiverEdgeInnColonialBeach3/assets/img/b5.jpg",
      type: "Recreation",
      googleMapsUrl: "https://maps.app.goo.gl/ukfFYgJHPHXv4oNq8"
    }
  ];
const activities = [
    {
      name: "Colonial Beach Municipal Pier",
      rating: 4.7,
      Timings: " Open 24 hours",
      Features:  " Fish Species: Croaker, spot, white perch, and striped bass.",
      About: "",
      description: " Only 0.3 miles from River Edge Inn, this pier is a popular spot for shore fishing. Bring your own gear or rent locally.",
      googleMapsUrl: "https://maps.app.goo.gl/B9xdJwSy53z2Efap7",
      image: "https://magarits.com/RiverEdgeInnColonialBeach3/assets/img/f1.jpeg",
      icon: Fish,
      season: "Year-round"
      
    },
    {
      name: "Westmoreland State Park",
      rating: 4.3,
      Timings: " 8:00 AM – Dusk (Daily)",
      Features:  " Fish Species: Striped bass, spot, bluefish, catfish, bream, bass, and crappie.",
      About: "",
      description: " Located 7 miles from River Edge Inn, this park offers saltwater fishing opportunities along the Potomac River. No license required for pier or shore fishing.",
      googleMapsUrl: "https://maps.app.goo.gl/oQMFwqFdX58Hfknq7",
      image: "https://magarits.com/RiverEdgeInnColonialBeach3/assets/img/f2.jpg",
      icon: Fish,
      season: "Year-round"
    },
    {
      name: "Monroe Creek",
      rating: 4.7,
      Timings: " Open 24 hours)",
      Features:  " Fish Species:Largemouth bass, catfish, and sunfish.",
      About: "",
      description: "  A serene creek near Colonial Beach, ideal for fishing and kayaking. Accessible via local roads.",
      googleMapsUrl: "https://maps.app.goo.gl/zVXHGeUah8wNZDdW6",
      image: "https://magarits.com/RiverEdgeInnColonialBeach3/assets/img/f3.webp",
      icon: Fish,
      season: "Year-round"
    },
    {
      name: "Colonial Beach Yacht Center",
      rating: 4.4,
      Timings: "9:00 AM – 6:00 PM (Daily)",
      Features:  " Activities: Kayak rentals, paddleboard rentals, jet ski rentals, and water access for personal equipment.",
      About: "",
      description: " Located just 0.5 miles from River Edge Inn, this marina offers scenic access to the Potomac River.",
      googleMapsUrl: "https://maps.app.goo.gl/4sSHcBdfbSzFa7Yr6",
      image: "https://magarits.com/RiverEdgeInnColonialBeach3/assets/img/w1.webp",
      icon: Waves,
      season: "Year-round"
    },
    {
      name: "Westmoreland State Park",
      rating: 4.0,
      Timings: " 8:00 AM – Dusk (Daily)",
      Features:  " Activities- Guided kayak tours, paddleboarding, canoeing, fossil hunting, and wildlife watching.",
      About: "",
      description: " Just 7 miles from Colonial Beach, this park offers a mix of nature, hiking, and water activities.",
      googleMapsUrl: "https://maps.app.goo.gl/vXPDLnzThpFQ5Dt9A",
      image: "https://magarits.com/RiverEdgeInnColonialBeach3/assets/img/w2.webp",
      icon: Waves,
      season: "Year-round"
    },
    {
      name: "Penguin Paddling (Pop-Up Rentals)",
      rating: 4.2,
      Timings: " Seasonal (Check website or local listings)",
      Features:  " Activities- Stand-up paddleboarding (SUP), kayaking, and water yoga (based on schedule).",
      website: "https://penguinpaddling.com/",
      About: "",
      description: "Mobile paddleboard and kayak rental company operating along the Colonial Beach waterfront.",
      googleMapsUrl: "https://maps.app.goo.gl/DXC22QRsvn2dbS689",
      image: "https://magarits.com/RiverEdgeInnColonialBeach3/assets/img/w3.webp",
      icon: Waves,
      season: "Seasonal "
    },
    {
      name: "Dockside Restaurant & Tiki Bar",
      rating: 4.9,
      Timings: " Seasonal (Check website or local listings)",
      Features:  " Boat slips, live entertainment, and a vibrant atmosphere.",
      website: "https://www.docksidetikibar.com/",
      About: "",
      description: "Located approximately 1.2 miles from River Edge Inn, this waterfront hotspot offers live music, a tiki bar, and waterfront dining. It's adjacent to the Colonial Beach Yacht Center, providing easy access for boaters.",
      googleMapsUrl: "https://maps.app.goo.gl/knrduLAPPpk3Eiwg6",
      image: "https://magarits.com/RiverEdgeInnColonialBeach3/assets/img/bb1.webp",
      icon: Sailboat ,
      season: "Seasonal "
    },
    {
      name: "The Boathouse Marina",
      rating: 4.8,
      Timings: " Open year-round; contact for specific hours",
      Features:  " Fuel dock, boat maintenance, and transient slips.",
      website: "https://theboathousemarina-va.com/",
      About: "",
      description: "A full-service marina committed to customer satisfaction, offering boat slips, fuel services, and maintenance. Located near the heart of Colonial Beach.",
      googleMapsUrl: "https://maps.app.goo.gl/C8xzh1KqTWjif6zMA",
      image: "https://magarits.com/RiverEdgeInnColonialBeach3/assets/img/bb2.webp",
      icon: Sailboat ,
      season: "Year-round "
    },
    {
      name: "Bayside Marina",
      rating: 4,
      Timings: " Contact for current hours",
      Features:  " Boat slips, rental cottage, and waterfront access.",
      website: "https://baysidemarina.org/",
      About: "",
      description: " boutique-style marina offering 32 fixed dock slips, accommodating vessels up to 50 feet. Amenities include an air-conditioned bathhouse, boat lifts, and a rental cottage",
      googleMapsUrl: "https://maps.app.goo.gl/ELxo9SENyeUBE7W67",
      image: "https://magarits.com/RiverEdgeInnColonialBeach3/assets/img/bb3.webp",
      icon: Sailboat ,
      season: "Year-round"
    },
    {
      name: "George Washington Birthplace National Monument",
      rating: 4.7,
      Timings: "9:00 AM – 5:00 PM (Daily)",
      Features:  " Wooded paths, boardwalks, wildlife observation, and historical landmarks.",
      website: "https://www.nps.gov/gewa/index.htm",
      About: "",
      description: " Located approximately 10 miles from River Edge Inn, this historic site offers two easy trails—the Nature Trail and the Dancing Marsh Trail—totaling a 1.9-mile loop through diverse habitats and scenic views of Popes Creek.",
      googleMapsUrl: "https://maps.app.goo.gl/S5dTFyMB8NJMEADXA",
      image: "https://magarits.com/RiverEdgeInnColonialBeach3/assets/img/h1.jpg",
      icon:  Mountain ,
      season: "Year-round"
    },
    {
      name: "Voorhees Nature Preserve",
      rating: 4.5,
      Timings: " Dawn to Dusk (Daily)",
      Features:  "  Boardwalks, wildlife viewing, birdwatching, and seasonal wildflowers.",
      website: "https://www.nature.org/en-us/get-involved/how-to-help/places-we-protect/voorhees-nature-preserve/",
      About: "",
      description: "Approximately 15 miles from River Edge Inn, this preserve offers four miles of trails through mature deciduous forests, wetlands, and bluffs overlooking the Rappahannock River.",
      googleMapsUrl: "https://maps.app.goo.gl/hbhEDWP2WSxpkciCA",
      image: "https://magarits.com/RiverEdgeInnColonialBeach3/assets/img/h2.webp",
      icon:  Mountain ,
      season: "Year-round"
    },
    {
      name: "Caledon State Park",
      rating: 4.8,
      Timings: "8:00 AM – Dusk (Daily)",
      Features:  "  Boardwalks, wildlife viewing, birdwatching, and seasonal wildflowers.",
      website: "https://www.dcr.virginia.gov/state-parks/caledon",
      About: "",
      description: " Located about 20 miles from River Edge Inn, this park is known for its old-growth forests and is a designated National Natural Landmark. It offers several trails of varying lengths and difficulties.",
      googleMapsUrl: "https://maps.app.goo.gl/YxZXjifoXo19Us9DA",
      image: "https://magarits.com/RiverEdgeInnColonialBeach3/assets/img/h3.webp",
      icon:  Mountain ,
      season: "Year-round"
    }
    ];

  const restaurants = [
    {
      name: "The Dockside Restaurant",
      distance: "0.3 miles from River Edge Inn ",
      rating: 4.9,
      cuisine: "Seafood",
      description: "Fresh seafood with waterfront dining and spectacular sunset views",
      image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      phone: "(555) 123-4567",
      googleMapsUrl: "https://maps.google.com/maps?q=Dockside+Restaurant,+Colonial+Beach,+VA"
    },
    {
      name: "Margaritas Restaurant Latin American Food",
      distance: "0.2 miles from River Edge Inn",
      rating: 4.8,
      cuisine: "American",
      description: "Historic tavern serving classic American dishes.",
      image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nprissF_eC-QoKee_H13mmhKDj65Y9M3_jSAt6D7mZZVhHGWDFJs3T2ISoXQoQ42EW7FSBD4zzOY4argEaKkQt2iVpDrh7MuTUkX-l9xsILRNuymiSds86dJyjhtdfEItx_-p0q=w408-h544-k-no",
      phone: "+18044102078",
      googleMapsUrl: "https://maps.app.goo.gl/qS4PD1jkEnQ4iPBX8"
    },
    {
      name: "Riverboat on the Potomac",
      distance: "0.2 miles from River Edge Inn",
      rating: 4.0,
      cuisine: "American",
      description: "Authentic Italian cuisine with panoramic sunset views over the Potomac",
      image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqBkcOC599tmjP6tCTaNqbS-oOkDe08pUfrNqdhK4WqGxZT0N52lj9BDTI3xzlqEPK69Q_JjlL7EJmV7B3VhR9Sjl4j7ECK6FzgewRoC58dO7O0vrGwS9ZxqeNy9z9Ftbbsgd_L=w408-h306-k-no",
      phone: "+18042247055",
      googleMapsUrl: "https://maps.app.goo.gl/DwYwLk3PKrhnHW249"
    },
    {
      name: "Raven's Point",
      distance: "0.1 miles from River Edge Inn",
      rating: 4.7,
      cuisine: "Cafe / Fine Dining",
      description: "A perfect blend of cozy café vibes and elegant dining, serving comfort food with style.",
      image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4norD4whyy-sNoUhNrXgZKZ4vETegOmxGCTb-6SpTOHchLOc51OH4IwU-KXwzDuQqWFeRv6F60EqcsKVbRDS0uwF3QJl_aKOx2xldbIDssMbPbLpwVD0BFO9jzcOBRrDl_KzMX11Fw=w426-h240-k-no",
      phone: "+18042140411",
      googleMapsUrl: "https://maps.app.goo.gl/KSK2G3cyz3dSbbjX7"
    },
    {
      name: "The Huasteca Mexican Restaurant",
      distance: "0.5 miles from River Edge Inn",
      rating: 4.5,
      cuisine: "Mexican",
      description: "Savor the bold and vibrant flavors of authentic Mexican cuisine in every bite.",
      image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrhQTeBlJU8cKPJlqL9En79fvjcB0CRWrJjYUFE_SohhwRIaTy8zPMssQTwF9o7r8Qp8b9T5hl9GWOJpBYXZmKEVDHlgL5cvegs0YCKenx7eMIl8RPKZE94-xV-iAN9OTNF1jw=w408-h306-k-no",
      phone: "+18044102027",
      googleMapsUrl: "https://maps.app.goo.gl/SUHhuTsUxYZqcaPr7"
    },
    {
      name: "Hunan Diner",
      distance: "0.07 miles from River Edge Inn",
      rating: 4.3,
      cuisine: "Authentic Chinese",
      description: "Experience the rich flavors of authentic Chinese cuisine, crafted with tradition and passion.",
      image: "data:image/jpeg;base64,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",
      phone: "+18042248754",
      googleMapsUrl: "https://maps.app.goo.gl/LdbkbT4QpqWRzTtR9"
    },
    {
      name: "High Tides On The Potomac",
      distance: "0.07 miles from River Edge Inn",
      rating: 4.0,
      cuisine: "Seafood",
      description: "Famous for steamed crabs and fresh oysters with waterfront seating",
      image: "https://tse2.mm.bing.net/th?id=OIP.c4JCvar7DCTCA3eLacWtUAHaHH&pid=Api&P=0&h=180",
      phone: "+18042248433",
      googleMapsUrl: "https://maps.app.goo.gl/FwEwoWUeHaz89B3U7"
    },
    {
      name: "Lenny's Restaurant",
      distance: "0.3 miles from River Edge Inn",
      rating: 4.6,
      cuisine: "American",
      description: "Serving hearty meals with a homestyle touch in a warm, welcoming atmosphere",
      image: "data:image/jpeg;base64,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",
      phone: "+18042249675",
      googleMapsUrl: "https://maps.app.goo.gl/vrciGcu2gr8YsoPG6"
    }
  ];
  

  const geologicalSites = [
    {
      name: "Westmoreland State Park",
      distance: "7.5 miles from River Edge Inn",
      rating: 4.7,
      description: "A scenic park with hiking trails, river views, fossil hunting, and picnic areas on the Potomac River.",
      image: "https://magarits.com/RiverEdgeInnColonialBeach3/assets/img/p1.webp",
      type: "Geological",
      googleMapsUrl: "https://maps.app.goo.gl/bJG3gHPy8sHEtREX9"
    },
    {
      name: "Fossil Beach at Westmoreland",
      distance: "16.7 miles from River Edge Inn",
      rating: 4.8,
      description: "Famous fossil hunting location along the Potomac with shark teeth and shells",
      image: "https://up.yimg.com/ib/th?id=OIP.vOAMAA07HYqJN0gTHKxcOwHaFj&pid=Api&rs=1&c=1&qlt=95&w=157&h=118",
      type: "Paleontology",
      googleMapsUrl: "https://maps.app.goo.gl/vvTekQ2PDTpndUQB6"
    },
    {
      name: "Caledon State Park",
      distance: "2.5 miles from River Edge Inn",
      rating: 4.4,
      description: "Known for bald eagle watching, hiking, and kayaking among old-growth forests and river shoreline.",
      image: "https://magarits.com/RiverEdgeInnColonialBeach3/assets/img/p2.webp",
      type: "Nature",
      googleMapsUrl: "https://maps.app.goo.gl/yrEs5ieSooQKCAw37"
    },
    {
      name: "Leesylvania State Park",
      distance: "50 miles from River Edge Inn",
      rating: 4.5,
      description: "A historical and recreational destination with hiking, boating, and scenic views along the Potomac River.",
      image: "https://magarits.com/RiverEdgeInnColonialBeach3/assets/img/p3.webp",
      type: "Nature",
      googleMapsUrl: "https://maps.app.goo.gl/Xr8vL1sSY5EZXHWY6"
    }
  ];

  const tabs = [
    { id: 'nearby', label: 'Places Nearby', icon: MapPin },
    { id: 'activities', label: 'Activities', icon: Zap },
    { id: 'restaurants', label: 'Restaurants', icon: Utensils },
    { id: 'geological', label: 'Geological Sites', icon: TreePine }
  ];

  const openGoogleMaps = (url: string) => {
    window.open(url, '_blank');
  };

  const renderNearbyPlaces = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {nearbyPlaces.map((place, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <img
            src={place.image}
            alt={place.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-xl font-semibold text-gray-800">{place.name}</h4>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">{place.type}</span>
            </div>
            <div className="flex items-center space-x-4 mb-3">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{place.rating}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Navigation className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-600">{place.distance}</span>
              </div>
            </div>
            <p className="text-gray-600 mb-4">{place.description}</p>
            <button
              onClick={() => openGoogleMaps(place.googleMapsUrl)}
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors duration-200"
            >
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">View on Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  const renderActivities = () => (
    <div className="space-y-8">
      {/* Activities Header */}
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-gray-800 mb-4">Adventure Awaits</h3>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          From thrilling water sports to peaceful nature experiences, Colonial Beach offers endless opportunities for adventure and relaxation.
        </p>
      </div>

      {/* Activities Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {activities.map((activity, index) => {
          const Icon = activity.icon;
          return (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="relative">
                <img
                  src={activity.image}
                  alt={activity.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-white rounded-full p-2 shadow-lg">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded-full text-xs">
                  {activity.season}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-semibold text-gray-800">{activity.name}</h4>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{activity.rating}</span>
                  </div>
                </div>
                
                <div className="space-y-2 mb-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500"> Timings:</span>
                    <span className="font-medium">{activity.Timings}</span>
                  </div>
                  <div className="text-gray-600 text-sm mb-10">
                    <span className="text-gray-500">Features:</span>
                    <span className="font-medium">{activity.Features}</span>
                  </div>
                    <button
              onClick={() => openGoogleMaps(activity.website)}
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors duration-200"
            >
              <webview className="w-4 h-4" />
              <span className="text-sm font-medium">website</span>
              <ExternalLink className="w-2 h-5" />
            </button>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">About:</span>
                    <span className="font-medium text-green-600">{activity.About}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">{activity.description}</p>
                
                <button
              onClick={() => openGoogleMaps(activity.googleMapsUrl)}
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors duration-200"
            >
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">View on Google Maps</span>
              <ExternalLink className="w-2 h-5" />
            </button>
                
              </div>
            </div>
          );
        })}
      </div>

      {/* Activities Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center">
        <h3 className="text-3xl font-bold mb-4">Ready for Adventure?</h3>
        <p className="text-xl text-blue-100 mb-6">
          Our concierge team can help you book any of these exciting activities and create the perfect itinerary for your stay.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            onClick={() => window.open('https://booking.hotelkeyapp.com/v2/index.html#/booking/search?pc=1189&property_id=fe9bd381-de06-4c84-8321-fadbf1892d6c', '_blank')}
            className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-3 rounded-full font-semibold transition-all duration-200"
          >
            Book Your Stay
          </button>
        </div>
      </div>
    </div>
  );

  const renderRestaurants = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {restaurants.map((restaurant, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-xl font-semibold text-gray-800">{restaurant.name}</h4>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">{restaurant.cuisine}</span>
            </div>
            <div className="flex items-center space-x-4 mb-3">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{restaurant.rating}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Navigation className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-600">{restaurant.distance}</span>
              </div>
            </div>
            <p className="text-gray-600 mb-3">{restaurant.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-blue-600">
                <Phone className="w-4 h-4" />
                <span className="text-sm">{restaurant.phone}</span>
              </div>
              <button
                onClick={() => openGoogleMaps(restaurant.googleMapsUrl)}
                className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 transition-colors duration-200"
              >
                <MapPin className="w-4 h-4" />
                <span className="text-xs">Maps</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderGeologicalSites = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {geologicalSites.map((site, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <img
            src={site.image}
            alt={site.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-xl font-semibold text-gray-800">{site.name}</h4>
              <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">{site.type}</span>
            </div>
            <div className="flex items-center space-x-4 mb-3">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{site.rating}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Navigation className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-600">{site.distance}</span>
              </div>
            </div>
            <p className="text-gray-600 mb-4">{site.description}</p>
            <button
              onClick={() => openGoogleMaps(site.googleMapsUrl)}
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors duration-200"
            >
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">View on Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section id="places" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Explore Colonial Beach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the rich history, natural beauty, exciting activities, and culinary delights surrounding River Edge Inn
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center mb-12">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 mx-2 mb-4 rounded-full transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Content */}
          <div className="transition-all duration-300">
            {activeTab === 'nearby' && renderNearbyPlaces()}
            {activeTab === 'activities' && renderActivities()}
            {activeTab === 'restaurants' && renderRestaurants()}
            {activeTab === 'geological' && renderGeologicalSites()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Places;