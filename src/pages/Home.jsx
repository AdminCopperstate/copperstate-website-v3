import Hero from '../components/Hero';
import LocationTicker from '../components/LocationTicker';
import WhyUs from '../components/WhyUs';
import CoreValues from '../components/CoreValues';
import Reviews from '../components/Reviews';
import NpsScore from '../components/NpsScore';
import ContactCTA from '../components/ContactCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <LocationTicker />
      <WhyUs />
      <CoreValues />
      <Reviews />
      <NpsScore />
      <ContactCTA />
    </>
  );
}
