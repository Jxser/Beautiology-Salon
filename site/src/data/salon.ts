// Single source of truth for salon details. Everything on the site reads from here,
// so changing a phone number, price or booking provider is a one-file edit.

export const salon = {
  name: 'Beautiology Salon',
  tagline: 'Full-service hair salon in Henderson, Nevada.',
  owners: 'Tracey La and Lupita Pandula',
  phone: '(702) 483-6660',
  phoneHref: 'tel:+17024836660',
  email: 'support@beautiologynv.com',
  address: {
    street: '2550 Anthem Village Dr',
    suite: 'Suite 170',
    city: 'Henderson',
    region: 'NV',
    zip: '89052',
  },
  mapsUrl:
    'https://maps.google.com/maps?daddr=2550%20Anthem%20Village%20Drive%2C%20Suite%20170%2C%20Henderson%2C%20NV%2089052',
  // TODO(confirm): FullSlate shows 9 to 6 every day, but offers slots as early as 7 AM and as late as 7:15 PM.
  hours: [
    { days: 'Open daily', time: '9:00 AM to 6:00 PM' },
  ],
  instagram: 'https://www.instagram.com/beautiology_salons/',
  instagramHandle: '@beautiology_salons',
  // TODO(confirm): this Facebook page is named "hairaddictiam". Verify it belongs to the salon.
  facebook: 'https://www.facebook.com/hairaddictiam/',
  depositPercent: 40,
  rating: { score: 5, count: 10 },
};

export const team = [
  {
    name: 'Tracey La',
    role: 'Co-owner and Stylist',
    bio: 'Tracey has more than 30 years of experience as a colorist, stylist and national educator. She specializes in color correction, dimensional highlights, balayage and blonding.',
  },
  {
    name: 'Lupita Pandula',
    role: 'Co-owner and Stylist',
    bio: 'Lupita is a proud alumna of Paul Mitchell The School Las Vegas and has more than 10 years of experience. She specializes in precision cuts, dimensional color and blowouts.',
  },
];

export const reviews = [
  {
    title: 'Her balayage technique is perfection',
    body: 'I had searched all over Las Vegas for a stylist who could handle my long, thick hair. Tracey understood exactly what I wanted, finished in half the time, and left my hair soft and healthy.',
    name: 'Verified client',
  },
  {
    title: 'She fixed my hair',
    body: 'I came in after a bad cut and color from another salon. Tracey matched my color by eye and corrected everything. My hair looks and feels healthy again.',
    name: 'Verified client',
  },
  {
    title: 'Love this salon',
    body: 'Clean, professional and a very friendly staff. I loved my cut and color and will definitely be back.',
    name: 'Verified client',
  },
];

export type Service = {
  name: string;
  price: number | 'Free';
  from?: boolean; // price varies with length/density
  note?: string;
  // ID of this service on beautiology.fullslate.com, used for deep links until the booking platform moves.
  fullslateId: number;
  consult?: boolean; // best booked after a consultation / phone call
};

export type Category = {
  slug: string;
  name: string;
  blurb: string;
  featured?: boolean;
  services: Service[];
};

// Prices and IDs mirror the live FullSlate menu (location 4) as of Oct 2026.
export const menu: Category[] = [
  {
    slug: 'cuts',
    name: 'Haircuts',
    blurb: 'Every haircut includes a shampoo, cut, style and finish, tailored to your face shape, hair texture and lifestyle.',
    featured: true,
    services: [
      { name: 'Women’s Haircut · Short', price: 45, fullslateId: 31 },
      { name: 'Women’s Haircut · Medium', price: 55, fullslateId: 5 },
      { name: 'Women’s Haircut · Long', price: 65, fullslateId: 30 },
      { name: 'Women’s Haircut · Extra Long', price: 75, fullslateId: 8206 },
      { name: 'Men’s Clipper Cut', price: 30, note: 'Shampoo, rinse and style.', fullslateId: 1 },
      { name: 'Men’s Scissor Cut', price: 35, from: true, note: 'Based on length and density.', fullslateId: 9248 },
      { name: 'Fringe / Bang Trim', price: 7, fullslateId: 449 },
    ],
  },
  {
    slug: 'styling',
    name: 'Blowouts & Styling',
    blurb: 'Professional blowouts for a smooth, polished finish, from sleek and straight to soft curls or added volume.',
    services: [
      { name: 'Shampoo & Blowout', price: 45, from: true, note: 'Longer, thicker or curly hair is additional.', fullslateId: 6 },
      { name: 'Blowout with Curling Iron', price: 55, fullslateId: 9628 },
      { name: 'Blowout with Flat Iron', price: 55, fullslateId: 9627 },
    ],
  },
  {
    slug: 'color',
    name: 'Color',
    blurb: 'Root touch-ups and all-over color using Wella Koleston, Paul Mitchell, Kenra, Goldwell and Redken, with ammonia-free options available.',
    featured: true,
    services: [
      { name: 'Root Retouch · Fine', price: 60, fullslateId: 8 },
      { name: 'Root Retouch · Regular', price: 65, fullslateId: 9391 },
      { name: 'Root Retouch · Thick or Ammonia-Free', price: 75, fullslateId: 10180 },
      { name: 'All-Over Color · Short', price: 85, fullslateId: 11 },
      { name: 'All-Over Color · Medium', price: 105, fullslateId: 32 },
      { name: 'All-Over Color · Long', price: 125, fullslateId: 33 },
      { name: 'All-Over Color · Extra Long', price: 145, fullslateId: 1946 },
      { name: 'Toner / Gloss Add-On', price: 70, from: true, note: 'Paul Mitchell Demi or Redken Shades EQ.', fullslateId: 22 },
    ],
  },
  {
    slug: 'highlights',
    name: 'Highlights',
    blurb: 'Partial and full highlights, pre-lightened for a clean, non-brassy result. Toner is priced separately.',
    featured: true,
    services: [
      { name: 'Partial Highlights · Short', price: 85, fullslateId: 34 },
      { name: 'Partial Highlights · Medium', price: 105, fullslateId: 35 },
      { name: 'Partial Highlights · Long', price: 120, fullslateId: 14 },
      { name: 'Partial Highlights · Extra Long', price: 145, fullslateId: 9300 },
      { name: 'Full Highlights · Short', price: 125, fullslateId: 15 },
      { name: 'Full Highlights · Medium', price: 145, fullslateId: 36 },
      { name: 'Full Highlights · Long', price: 175, fullslateId: 37 },
      { name: 'Full Highlights · Extra Long', price: 205, fullslateId: 9179 },
    ],
  },
  {
    slug: 'balayage-blonding',
    name: 'Balayage & Blonding',
    blurb: 'Hand-painted balayage for soft, low-maintenance dimension, or full blonding with a bond-building treatment to protect your hair.',
    featured: true,
    services: [
      { name: 'Ombré Balayage · Short', price: 225, fullslateId: 19 },
      { name: 'Ombré Balayage · Medium', price: 260, fullslateId: 13 },
      { name: 'Ombré Balayage · Long', price: 295, fullslateId: 606 },
      { name: 'Ombré Balayage · Extra Long', price: 350, fullslateId: 8874 },
      { name: 'Blonding Retouch', price: 185, note: 'Lightening, bond re-build and toner.', fullslateId: 753 },
      { name: 'Solid Blonding · Short', price: 350, from: true, fullslateId: 21 },
      { name: 'Solid Blonding · Medium', price: 400, from: true, fullslateId: 8872 },
      { name: 'Solid Blonding · Long', price: 500, from: true, fullslateId: 8873 },
    ],
  },
  {
    slug: 'specialty',
    name: 'Specialty & Correction',
    blurb: 'Vivid fashion color and corrective color. Both begin with a consultation so we can plan your service and give you an accurate quote.',
    featured: true,
    services: [
      { name: 'Color Correction Consultation', price: 'Free', fullslateId: 2096, consult: true },
      { name: 'Corrective Haircolor', price: 500, from: true, fullslateId: 20, consult: true },
      { name: 'Extreme / Fashion Color', price: 450, from: true, note: 'Price shown is for short hair.', fullslateId: 18, consult: true },
    ],
  },
  {
    slug: 'treatments',
    name: 'Treatments & Smoothing',
    blurb: 'Conditioning treatments to restore moisture and shine, and Brazilian Blowouts for up to 12 weeks of frizz-free hair.',
    services: [
      { name: 'Conditioning Treatment or Mask + Blowout', price: 75, fullslateId: 16 },
      { name: 'Color Gloss / Shine Treatment + Blowout', price: 90, fullslateId: 17 },
      { name: 'Brazilian Blowout · Short', price: 275, fullslateId: 9380 },
      { name: 'Brazilian Blowout · Medium', price: 300, fullslateId: 9381 },
      { name: 'Brazilian Blowout · Long', price: 325, fullslateId: 9382 },
      { name: 'Brazilian Blowout · Extra Long / Thick', price: 350, fullslateId: 9383 },
    ],
  },
  {
    slug: 'waves',
    name: 'Perms & Waves',
    blurb: 'Modern perms and body waves for soft texture, natural curl or lasting volume, customized to your hair type.',
    services: [
      { name: 'Beach / Body Waves · Short', price: 95, fullslateId: 959 },
      { name: 'Beach / Body Waves · Medium', price: 115, fullslateId: 8205 },
      { name: 'Beach / Body Waves · Long', price: 135, fullslateId: 653 },
      { name: 'Classic Perm', price: 85, fullslateId: 12 },
    ],
  },
];

export const formatPrice = (s: Service) =>
  s.price === 'Free' ? 'Free' : `${s.from ? 'from ' : ''}$${s.price}`;

export const startingPrice = (c: Category) =>
  Math.min(...c.services.map((s) => (s.price === 'Free' ? Infinity : s.price)));
