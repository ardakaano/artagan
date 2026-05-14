export type Project = {
  slug: string
  title: string
  category: string
  thumbnail: string
  gallery: string[]
  description: string
  features: string[]
  specs: { label: string; value: string }[]
  testimonial?: { text: string; author: string }
  year: string
  location: string
}

export const projects: Project[] = [
  {
    slug: 'riverside-tower',
    title: 'Riverside Tower',
    category: 'Commercial',
    thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'A 15-story state-of-the-art office complex in downtown San Francisco. LEED Platinum certified with smart building management, rooftop garden, and floor-to-ceiling windows. Built with sustainable materials and innovative structural engineering.',
    features: [
      'LEED Platinum certified',
      'Smart building management system',
      'Floor-to-ceiling windows',
      'Rooftop garden and terrace',
      'EV charging infrastructure',
      'Seismic resilience rated A+',
    ],
    specs: [
      { label: 'Total area', value: '250,000 sq ft' },
      { label: 'Floors', value: '15 stories' },
      { label: 'Completed', value: '2023' },
      { label: 'Location', value: 'San Francisco, CA' },
      { label: 'Parking', value: '200 spaces' },
      { label: 'Energy rating', value: 'A+' },
    ],
    testimonial: { text: 'They built our HQ in 14 months. Every detail perfect.', author: 'Sarah J., CEO' },
    year: '2023',
    location: 'San Francisco, CA',
  },
  {
    slug: 'heritage-library',
    title: 'Heritage Library',
    category: 'Restoration',
    thumbnail: 'https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'A sensitive restoration of a 110-year-old Beaux-Arts library in Boston. Original marble, woodwork, and ornamental details were preserved while integrating modern climate control, IT infrastructure, and full ADA accessibility.',
    features: [
      'Original marble restoration',
      'Climate-controlled archive room',
      'ADA-compliant access',
      'Modern IT infrastructure',
      'Seismic retrofitting',
      'Period-accurate materials',
    ],
    specs: [
      { label: 'Building age', value: '110 years' },
      { label: 'Restoration period', value: '18 months' },
      { label: 'Total area', value: '38,000 sq ft' },
      { label: 'Location', value: 'Boston, MA' },
      { label: 'Status', value: 'National Historic Landmark' },
      { label: 'Completed', value: '2025' },
    ],
    testimonial: { text: 'The best restoration team in the country. Period.', author: 'Michael C., Director' },
    year: '2025',
    location: 'Boston, MA',
  },
  {
    slug: 'arc-residences',
    title: 'The Arc Residences',
    category: 'Residential',
    thumbnail: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'A luxury residential complex with 120 units, offering custom interior finishes, private balconies, smart home integration, concierge service, and a resort-style spa and fitness center in the downtown district.',
    features: [
      'Custom interior finishes',
      'Private balconies in every unit',
      'Smart home integration',
      '24/7 concierge service',
      'Spa and fitness center',
      'Rooftop pool and lounge',
    ],
    specs: [
      { label: 'Units', value: '120 residences' },
      { label: 'Floors', value: '25 stories' },
      { label: 'Unit sizes', value: '1,000–4,500 sq ft' },
      { label: 'Amenities', value: '25,000 sq ft' },
      { label: 'Completed', value: '2024' },
      { label: 'Location', value: 'Downtown District' },
    ],
    testimonial: { text: 'Our residents love it. The craftsmanship is visible everywhere.', author: 'James T., Developer' },
    year: '2024',
    location: 'Downtown District',
  },
  {
    slug: 'pacific-mall',
    title: 'Pacific Mall',
    category: 'Commercial',
    thumbnail: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1555636222-cae831e670b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1567958451986-2de427a4a0be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600583496092-c3a1c6c9f99a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'A 500,000 sq ft contemporary shopping center with 100+ retail units, 15 restaurants, digital wayfinding, underground parking for 1,500 cars, and an outdoor shopping promenade.',
    features: [
      '100+ retail units',
      '15 dining options',
      'Digital wayfinding system',
      'Underground parking for 1,500',
      'Outdoor promenade',
      'Sustainable energy systems',
    ],
    specs: [
      { label: 'Retail space', value: '500,000 sq ft' },
      { label: 'Parking', value: '1,500 spaces' },
      { label: 'Stores', value: '100+ units' },
      { label: 'Restaurants', value: '15 venues' },
      { label: 'Opening', value: '2024' },
      { label: 'Location', value: 'Suburban Center' },
    ],
    year: '2024',
    location: 'Suburban Center',
  },
  {
    slug: 'old-bank',
    title: 'Old Bank Restoration',
    category: 'Restoration',
    thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590650151155-3b62c5a0c9c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590674899484-d5640d9da574?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'A meticulous restoration of a 19th-century bank building listed as a National Historic Landmark. The original facade, ornate ceilings, and period details were preserved while adding modern safety systems, seismic retrofitting, and mixed-use commercial adaptability.',
    features: [
      'Original facade preservation',
      'Ornate ceiling restoration',
      'Modern safety upgrades',
      'Seismic retrofitting',
      'Period-accurate materials',
      'Mixed-use commercial adaptation',
    ],
    specs: [
      { label: 'Building age', value: '150+ years' },
      { label: 'Restoration period', value: '18 months' },
      { label: 'Status', value: 'National Historic Landmark' },
      { label: 'Original use', value: 'Bank headquarters' },
      { label: 'Current use', value: 'Mixed commercial offices' },
      { label: 'Area', value: '45,000 sq ft' },
    ],
    year: '2024',
    location: 'Historic District',
  },
  {
    slug: 'eco-campus',
    title: 'Eco Campus',
    category: 'Residential',
    thumbnail: 'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18f6b0050?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600583496092-c3a1c6c9f99a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'A net-zero residential community with 85 eco-friendly homes on 12 acres in Portland. Features solar energy, rainwater harvesting, native landscaping, a community garden, EV charging, and passive house design principles.',
    features: [
      'Net-zero energy design',
      'Rainwater harvesting system',
      'Native landscaping',
      'Community garden and orchard',
      'EV charging infrastructure',
      'Passive house certified',
    ],
    specs: [
      { label: 'Units', value: '85 residences' },
      { label: 'Completed', value: '2025' },
      { label: 'Total area', value: '12 acres' },
      { label: 'Location', value: 'Portland, OR' },
      { label: 'Solar capacity', value: '1.2 MW' },
      { label: 'Water saved/yr', value: '2.4M gallons' },
    ],
    testimonial: { text: 'The eco campus sets a new standard for sustainable living.', author: 'Emily R., Resident' },
    year: '2025',
    location: 'Portland, OR',
  },
]
