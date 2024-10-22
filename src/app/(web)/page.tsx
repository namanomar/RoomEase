import AboutSection from '@/components/About/About';
import FeaturedRoom from '@/components/FeaturedRoom/FeaturedRoom';
import Gallery from '@/components/Gallery/Gallery';
import Header from '@/components/HeroSection2/Hero';
import NewsLetter from '@/components/NewsLetter/NewsLetter';
import PageSearch from '@/components/PageSearch/PageSearch';
import { getFeaturedRoom } from '@/libs/apis';

const Home = async () => {
  const featuredRoom = await getFeaturedRoom();

  return (
    <>
      <Header/>
      <PageSearch />
      {/* <FeaturedRoom featuredRoom={featuredRoom} /> */}
      <Gallery />
      <AboutSection></AboutSection>
      <NewsLetter />
    </>
  );
};

export default Home;
