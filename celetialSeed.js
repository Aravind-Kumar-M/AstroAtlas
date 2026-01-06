// curated list with images for the gallery (you asked for "all possible planets, stars, galaxies" — here is a broad curated set to start)
export const CELESTIAL_SEED = [
    { id: 'mercury', name: 'Mercury', type: 'planet', distance: 0.39, unit: 'AU', discoveryYear: -3000, description: 'Closest to Sun', media: ['https://i.imgur.com/1i0YwYV.jpg'], tags: ['inner','rocky'] },
    { id: 'venus', name: 'Venus', type: 'planet', distance: 0.72, unit: 'AU', discoveryYear: -3000, description: 'Second planet', media: ['https://solarsystem.nasa.gov/system/feature_items/images/27_venus.png'], tags: ['inner','rocky'] },
    { id: 'earth', name: 'Earth', type: 'planet', distance: 1, unit: 'AU', discoveryYear: -3000, description: 'Our home', media: ['https://www.solarsystemscope.com/images/textures/2k_earth_daymap.jpg'], tags: ['habitable'] },
    { id: 'mars', name: 'Mars', type: 'planet', distance: 1.524, unit: 'AU', discoveryYear: -2000, media: ['https://i.imgur.com/7VbGg7v.jpg'], tags: ['red','exploration'] },
    { id: 'jupiter', name: 'Jupiter', type: 'planet', distance: 5.203, unit: 'AU', media: ['https://i.imgur.com/Z5z0q6Z.jpg'], tags: ['gas-giant'] },
    { id: 'saturn', name: 'Saturn', type: 'planet', distance: 9.539, unit: 'AU', media: ['https://i.imgur.com/8VvQp5Q.jpg'], tags: ['rings'] },
    { id: 'uranus', name: 'Uranus', type: 'planet', distance: 19.18, unit: 'AU', media: ['https://i.imgur.com/7k0M8s0.jpg'], tags: ['ice-giant'] },
    { id: 'neptune', name: 'Neptune', type: 'planet', distance: 30.06, unit: 'AU', media: ['https://i.imgur.com/U4e6w1W.jpg'], tags: ['ice-giant'] },
    { id: 'pluto', name: 'Pluto', type: 'dwarf-planet', distance: 39.5, unit: 'AU', media: ['https://i.imgur.com/0y8Ftya.jpg'], tags: ['dwarf'] },
  
    // stars
    { id: 'sun', name: 'Sun', type: 'star', distance: 0, unit: 'AU', discoveryYear: -infinity, media: ['https://i.imgur.com/Gf0RS5Z.jpg'], tags: ['star','g-type'] },
    { id: 'sirius', name: 'Sirius', type: 'star', distance: 8.6, unit: 'light-year', media: ['https://i.imgur.com/4v0hI8B.jpg'], tags: ['bright'] },
    { id: 'betelgeuse', name: 'Betelgeuse', type: 'star', distance: 642.5, unit: 'light-year', media: ['https://i.imgur.com/2Uu8w5R.jpg'], tags: ['red-supergiant'] },
  
    // galaxies & nebulae
    { id: 'milkyway', name: 'Milky Way', type: 'galaxy', distance: 0, unit: '', media: ['/milky-way-static.png'], description: 'Our galaxy (see Milky Way gallery)', tags: ['galaxy'] },
    { id: 'andromeda', name: 'Andromeda', type: 'galaxy', distance: 2537000, unit: 'light-year', media: ['https://i.imgur.com/w9r5YwL.jpg'], tags: ['spiral'] },
    { id: 'orion-nebula', name: 'Orion Nebula', type: 'nebula', distance: 1344, unit: 'light-year', media: ['https://i.imgur.com/nl9q7a6.jpg'], tags: ['nebula','star-formation'] },
  
    // add more: Whirlpool (M51), Sombrero (M104), Triangulum (M33)
    { id: 'm51', name: 'Whirlpool Galaxy (M51)', type: 'galaxy', distance: 23000000, unit: 'light-year', media: ['https://i.imgur.com/h1kYqzB.jpg'], tags: ['spiral'] },
    { id: 'm104', name: 'Sombrero Galaxy (M104)', type: 'galaxy', distance: 29000000, unit: 'light-year', media: ['https://i.imgur.com/9k4l7Zp.jpg'], tags: ['lenticular'] }
  ];
  