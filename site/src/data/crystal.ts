// Crystal Salon & Headspa preview. Lives at /crystal for now and is not linked from
// the Beautiology pages. Everything Crystal-specific reads from this file so it can be
// lifted into its own standalone site later.

export const crystal = {
  name: 'Crystal Salon & Headspa',
  shortName: 'Crystal',
  owners: 'Lupita Pandula and Tracey La',
  // TODO(confirm): crystalsalonheadspa.com lists (725) 404-4247 (the same number as Beautiology);
  // FullSlate lists 702-268-7411 as the salon line. Using the FullSlate number.
  phone: '(702) 268-7411',
  phoneHref: 'tel:+17022687411',
  // TODO(confirm): the website lists support@crystalsalonheadspa.com, FullSlate lists crystalsalonnv@gmail.com.
  email: 'support@crystalsalonheadspa.com',
  address: {
    street: '2200 W Horizon Ridge Pkwy, Suite B',
    city: 'Henderson',
    region: 'NV',
    zip: '89052',
  },
  mapsUrl:
    'https://maps.google.com/maps?daddr=2200%20W%20Horizon%20Ridge%20Pkwy%2C%20Suite%20B%2C%20Henderson%2C%20NV%2089052',
  mapEmbed:
    'https://www.google.com/maps?q=2200+W+Horizon+Ridge+Pkwy+Suite+B,+Henderson,+NV+89052&output=embed',
  hours: [
    { days: 'Monday to Saturday', time: '9:00 AM to 6:00 PM' },
    { days: 'Sunday', time: '10:00 AM to 5:00 PM' },
  ],
  // TODO(confirm): this Facebook page is named "hairpurpose". Verify it belongs to the salon.
  facebook: 'https://www.facebook.com/hairpurpose/',
  depositPercent: 40,
};

export const crystalTeam = [
  {
    name: 'Lupita Pandula',
    role: 'Co-owner and Stylist',
    bio: 'Lupita co-founded Crystal Salon & Headspa and specializes in dimensional color, layered cuts and head spa services.',
  },
  {
    name: 'Tracey La',
    role: 'Co-owner, Master Colorist and Educator',
    bio: 'Tracey has more than 30 years of experience and specializes in color correction, balayage and blonding.',
  },
];

// Recent client work from the salon's own gallery.
export const crystalWork = [
  { src: '/crystal/work/copper-balayage.jpg', alt: 'Long copper balayage with soft waves', w: 826, h: 1100 },
  { src: '/crystal/work/blonde-layers.jpg', alt: 'Shoulder-length blonde layers with face-framing highlights', w: 900, h: 900 },
  { src: '/crystal/work/brunette-shag.jpg', alt: 'Glossy dark brunette layered cut', w: 850, h: 1100 },
  { src: '/crystal/work/caramel-layers.jpg', alt: 'Caramel highlights on long layered hair', w: 900, h: 900 },
  { src: '/crystal/work/blonde-balayage.jpg', alt: 'Bright blonde balayage with loose curls', w: 850, h: 1100 },
  { src: '/crystal/work/bronde-layers.jpg', alt: 'Bronde dimensional color on mid-length layers', w: 900, h: 900 },
  { src: '/crystal/work/soft-blonde.jpg', alt: 'Soft blonde color with volume', w: 850, h: 1100 },
  { src: '/crystal/work/bob.jpg', alt: 'Sleek one-length bob in a soft brown', w: 850, h: 1100 },
];

export type CrystalService = {
  name: string;
  price: number | 'Free';
  from?: boolean;
  minutes?: number;
  note?: string;
  // ID of this service on crystalsalon.fullslate.com.
  fullslateId: number;
  consult?: boolean;
};

export type CrystalCategory = {
  slug: string;
  name: string;
  blurb: string;
  featured?: boolean;
  services: CrystalService[];
};

export const headspaTiers = [
  { name: 'Ruby', minutes: 15, price: 40, fullslateId: 133, includes: ['Aromatherapy', 'Double shampoo', 'Conditioning', 'Scalp massage'] },
  { name: 'Amber', minutes: 30, price: 70, fullslateId: 132, includes: ['Everything in Ruby', 'Extended scalp massage', 'Neck and shoulder massage'] },
  { name: 'Citrine', minutes: 45, price: 95, fullslateId: 131, includes: ['Everything in Amber', 'Facial cleansing', 'Face mask', 'Hot towel treatment'] },
  { name: 'Jade', minutes: 60, price: 115, fullslateId: 130, includes: ['Everything in Citrine', 'Facial massage', 'Hot oil treatment'] },
];

// Prices and IDs mirror the live FullSlate menu as of Oct 2026.
export const crystalMenu: CrystalCategory[] = [
  {
    slug: 'headspa',
    name: 'Head Spa',
    blurb: 'Japanese-inspired head spa treatments that combine aromatherapy, double cleansing, conditioning and scalp massage to relieve stress and support a healthy scalp.',
    featured: true,
    services: headspaTiers.map((t) => ({
      name: `${t.name} Head Spa`,
      price: t.price,
      minutes: t.minutes,
      note: t.includes.map((x, i) => (i === 0 ? x : x[0].toLowerCase() + x.slice(1))).join(', ') + '.',
      fullslateId: t.fullslateId,
    })),
  },
  {
    slug: 'headspa-addons',
    name: 'Head Spa Add-Ons',
    blurb: 'Add any of these to a head spa service to target specific scalp, skin or hair needs.',
    services: [
      { name: 'Scalp Viewing with Micro-Camera', price: 5, fullslateId: 80 },
      { name: 'Facial Exfoliating Scrub', price: 10, fullslateId: 79 },
      { name: 'Scalp Detox Rinse', price: 10, note: 'Tea tree kombucha rinse to clear buildup.', fullslateId: 82 },
      { name: 'Foaming Salt Scalp Scrub', price: 10, fullslateId: 83 },
      { name: 'HydroSoft Glossing Treatment', price: 20, note: 'For dry, frizzy or damaged hair.', fullslateId: 84 },
      { name: 'Scalp Brushing and Dandruff Removal', price: 20, fullslateId: 85 },
      { name: 'Infrared Light Therapy', price: 25, fullslateId: 86 },
      { name: 'High Frequency (Tesla) Therapy', price: 25, fullslateId: 87 },
      { name: 'Facial Mineral Detox', price: 30, fullslateId: 81 },
      { name: 'Blowout after Head Spa', price: 20, fullslateId: 126 },
      { name: 'Blowout with Flat Iron after Head Spa', price: 25, fullslateId: 127 },
      { name: 'Blowout with Curling Iron after Head Spa', price: 25, fullslateId: 128 },
    ],
  },
  {
    slug: 'cuts',
    name: 'Haircuts',
    blurb: 'Every haircut includes a shampoo, cut, style and finish, tailored to your face shape, hair texture and lifestyle.',
    featured: true,
    services: [
      { name: 'Women’s Haircut · Short', price: 45, fullslateId: 39 },
      { name: 'Women’s Haircut · Medium', price: 55, fullslateId: 50 },
      { name: 'Women’s Haircut · Long', price: 65, fullslateId: 51 },
      { name: 'Women’s Haircut · Extra Long', price: 75, fullslateId: 52 },
      { name: 'Men’s Clipper Cut', price: 30, note: 'Shampoo, rinse and style.', fullslateId: 49 },
      { name: 'Men’s Scissor Cut', price: 35, from: true, note: 'Based on length and density.', fullslateId: 38 },
      { name: 'Fringe / Bang Trim', price: 7, fullslateId: 24 },
    ],
  },
  {
    slug: 'styling',
    name: 'Blowouts & Styling',
    blurb: 'Professional blowouts for a smooth, polished finish, from sleek and straight to soft curls.',
    services: [
      { name: 'Shampoo & Blowout', price: 45, from: true, note: 'Longer, thicker or curly hair is additional.', fullslateId: 58 },
      { name: 'Blowout with Curling Iron', price: 50, fullslateId: 59 },
      { name: 'Blowout with Flat Iron', price: 50, fullslateId: 60 },
    ],
  },
  {
    slug: 'color',
    name: 'Color',
    blurb: 'Root touch-ups and all-over color using Wella Koleston, Paul Mitchell, Kenra, Goldwell and Redken, with ammonia-free options available.',
    featured: true,
    services: [
      { name: 'Root Retouch · Fine', price: 60, fullslateId: 94 },
      { name: 'Root Retouch · Regular', price: 65, fullslateId: 95 },
      { name: 'Root Retouch · Thick or Ammonia-Free', price: 75, fullslateId: 8828 },
      { name: 'All-Over Color · Short', price: 85, fullslateId: 88 },
      { name: 'All-Over Color · Medium', price: 105, fullslateId: 89 },
      { name: 'All-Over Color · Long', price: 125, fullslateId: 96 },
      { name: 'All-Over Color · Extra Long', price: 145, fullslateId: 97 },
      { name: 'Toner', price: 70, from: true, note: 'Longer or thicker hair is additional.', fullslateId: 61 },
    ],
  },
  {
    slug: 'highlights',
    name: 'Highlights',
    blurb: 'Partial and full highlights, pre-lightened for a clean, non-brassy result. Toner is priced separately.',
    services: [
      { name: 'Partial Highlights · Short', price: 85, fullslateId: 54 },
      { name: 'Partial Highlights · Medium', price: 105, fullslateId: 40 },
      { name: 'Partial Highlights · Long', price: 120, fullslateId: 48 },
      { name: 'Partial Highlights · Extra Long', price: 145, fullslateId: 53 },
      { name: 'Full Highlights · Short', price: 125, fullslateId: 41 },
      { name: 'Full Highlights · Medium', price: 145, fullslateId: 42 },
      { name: 'Full Highlights · Long', price: 175, fullslateId: 37 },
      { name: 'Full Highlights · Extra Long', price: 205, fullslateId: 98 },
    ],
  },
  {
    slug: 'blonding',
    name: 'Blonding & Fashion Color',
    blurb: 'Balayage, solid blonding and creative color, lightened with a bond-building treatment. Corrective and fashion color begin with a consultation.',
    featured: true,
    services: [
      { name: 'Ombré Balayage · Short', price: 225, fullslateId: 44 },
      { name: 'Ombré Balayage · Medium', price: 260, fullslateId: 45 },
      { name: 'Ombré Balayage · Long', price: 295, fullslateId: 46 },
      { name: 'Ombré Balayage · Extra Long', price: 350, fullslateId: 56 },
      { name: 'Blonding Retouch', price: 185, note: 'Lightening, bond rebuilder and toner.', fullslateId: 43 },
      { name: 'Solid Blonding · Short', price: 350, from: true, fullslateId: 62 },
      { name: 'Solid Blonding · Medium', price: 400, from: true, fullslateId: 63 },
      { name: 'Solid Blonding · Long', price: 500, from: true, fullslateId: 64 },
      { name: 'Color Correction Consultation', price: 'Free', fullslateId: 21, consult: true },
      { name: 'Corrective Haircolor', price: 500, from: true, fullslateId: 55, consult: true },
      { name: 'Extreme / Fashion Color', price: 450, from: true, note: 'Price shown is for short hair.', fullslateId: 23, consult: true },
    ],
  },
  {
    slug: 'treatments',
    name: 'Treatments & Smoothing',
    blurb: 'Conditioning treatments to restore moisture and shine, and Brazilian Blowouts for up to 12 weeks of frizz-free hair.',
    services: [
      { name: 'Conditioning Treatment or Mask + Blowout', price: 75, fullslateId: 104 },
      { name: 'Color Gloss / Shine Treatment + Blowout', price: 90, fullslateId: 57 },
      { name: 'Brazilian Blowout · Short', price: 275, fullslateId: 90 },
      { name: 'Brazilian Blowout · Medium', price: 300, fullslateId: 91 },
      { name: 'Brazilian Blowout · Long', price: 325, fullslateId: 92 },
      { name: 'Brazilian Blowout · Extra Long / Thick', price: 350, fullslateId: 93 },
    ],
  },
  {
    slug: 'waves',
    name: 'Perms & Waves',
    blurb: 'Perms and body waves for soft texture, natural curl or lasting volume, customized to your hair type.',
    services: [
      { name: 'Perm / Body Waves · Short', price: 85, fullslateId: 102 },
      { name: 'Perm / Body Waves · Medium', price: 95, fullslateId: 22 },
      { name: 'Perm / Body Waves · Long', price: 115, fullslateId: 103 },
      { name: 'Perm / Body Waves · Extra Long', price: 135, fullslateId: 137 },
    ],
  },
  {
    slug: 'extensions',
    name: 'Hair Extensions',
    blurb: 'Hand-tied and Genius Weft extensions for added length, fullness or color without damage. Start with a free consultation.',
    featured: true,
    services: [
      { name: 'Hair Extensions Consultation', price: 'Free', fullslateId: 47, consult: true },
      { name: 'Hand-Tied or Genius Weft Install', price: 150, from: true, fullslateId: 69 },
      { name: 'Extensions Move-Up · 4 to 5 Weeks', price: 75, fullslateId: 70 },
      { name: 'Extensions Move-Up · 6 to 8 Weeks', price: 85, fullslateId: 71 },
    ],
  },
  {
    slug: 'lash-brow',
    name: 'Lash & Brow',
    blurb: 'Lash extensions, lifts and brow services to frame the face.',
    featured: true,
    services: [
      { name: 'Hybrid Lash Extensions · Full Set', price: 75, fullslateId: 100 },
      { name: 'Hybrid Lash Extensions · Fill', price: 50, fullslateId: 99 },
      { name: 'Volume Lash Extensions · Full Set', price: 85, fullslateId: 26 },
      { name: 'Volume Lash Extensions · Fill', price: 60, fullslateId: 27 },
      { name: 'Mega Volume Lash Extensions · Full Set', price: 95, fullslateId: 28 },
      { name: 'Mega Volume Lash Extensions · Fill', price: 70, fullslateId: 29 },
      { name: 'Lash Lift', price: 50, fullslateId: 35 },
      { name: 'Lash Lift with Tint', price: 60, fullslateId: 30 },
      { name: 'Brow Lamination', price: 55, fullslateId: 31 },
      { name: 'Brow Lamination with Tint', price: 65, fullslateId: 32 },
      { name: 'Brow Tint', price: 30, fullslateId: 33 },
      { name: 'Brow Wax', price: 20, fullslateId: 36 },
      { name: 'Brow Wax and Tint', price: 45, fullslateId: 72 },
      { name: 'Underarm Wax', price: 15, fullslateId: 34 },
    ],
  },
];

export const crystalBase = 'https://crystalsalon.fullslate.com';

/** FullSlate URL that starts booking, optionally pre-selecting a service. */
export const crystalBookUrl = (s?: { fullslateId: number }) =>
  s ? `${crystalBase}/services/${s.fullslateId}` : `${crystalBase}/services`;

export const formatCrystalPrice = (s: CrystalService) =>
  s.price === 'Free' ? 'Free' : `${s.from ? 'from ' : ''}$${s.price}`;

export const crystalStartingPrice = (c: CrystalCategory) =>
  Math.min(...c.services.map((s) => (s.price === 'Free' ? Infinity : s.price)));
