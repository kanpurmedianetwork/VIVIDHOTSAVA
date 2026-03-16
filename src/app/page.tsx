import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import EventDomains from '@/components/sections/EventDomains';
import FeaturedEvents from '@/components/sections/FeaturedEvents';
import YouthEnergy from '@/components/sections/YouthEnergy';
import OrganizingTeam from '@/components/sections/OrganizingTeam';
import Registration from '@/components/sections/Registration';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <EventDomains />
      <FeaturedEvents />
      <YouthEnergy />
      <OrganizingTeam />
      <Registration />
    </>
  );
}
