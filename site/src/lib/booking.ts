import type { Service } from '../data/salon';

// Booking is deliberately behind this one module. Today it deep-links into FullSlate
// (skipping its multi-salon landing page). When the salon moves platforms, change
// `provider` and fill in the new URLs. No page needs to change.

type Provider = 'fullslate' | 'square' | 'vagaro' | 'glossgenius';

export const booking = {
  provider: 'fullslate' as Provider,
  fullslate: {
    base: 'https://beautiology.fullslate.com',
    locationId: 4, // Beautiology Salon, Henderson (Anthem)
  },
  // Set this to the new platform's public booking page when migrating,
  // e.g. https://beautiology.square.site or https://www.vagaro.com/beautiology
  newPlatformUrl: '',
};

/** URL that starts booking, optionally pre-selecting a service. */
export function bookUrl(service?: Service): string {
  if (booking.provider !== 'fullslate' && booking.newPlatformUrl) {
    return booking.newPlatformUrl;
  }
  const { base, locationId } = booking.fullslate;
  return service
    ? `${base}/services/${service.fullslateId}?location=${locationId}`
    : `${base}/services?location=${locationId}`;
}
