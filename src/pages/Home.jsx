import Hero from '../components/Hero';
import HeroPhotoStrip from '../components/HeroPhotoStrip';
import LocationTicker from '../components/LocationTicker';
import ServiceMap from '../components/ServiceMap';
import WhyUs from '../components/WhyUs';
import CoreValues from '../components/CoreValues';
import Reviews from '../components/Reviews';
import NpsScore from '../components/NpsScore';
import ContactCTA from '../components/ContactCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <HeroPhotoStrip />
      <LocationTicker />
      <ServiceMap />
      <WhyUs />
      <CoreValues />
      <Reviews />
      <NpsScore />
      <ContactCTA />
    </>
  );
}
