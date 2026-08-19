import Services from '../components/Services';
import ServicesPhotoStrip from '../components/ServicesPhotoStrip';
import Flywheel from '../components/Flywheel';
import Capability from '../components/Capability';
import ContactCTA from '../components/ContactCTA';

export default function ServicesPage() {
  return (
    <>
      <Services />
      <ServicesPhotoStrip />
      <Flywheel />
      <Capability />
      <ContactCTA />
    </>
  );
}
