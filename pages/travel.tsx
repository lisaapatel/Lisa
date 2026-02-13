import type { NextPage } from "next";
import { Layout } from "../components/Layout";
import { useTheme } from "../contexts/ThemeContext";
import Head from 'next/head';

const Travel: NextPage = () => {
  const { theme } = useTheme();
  const textColorSecondary = theme === 'dark' ? 'text-gray-400' : 'text-gray-600';

  // Get basePath for image URLs (works with basePath in next.config.js)
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  // Array of image filenames
  const images = [
    "1.PNG",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.JPG",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.JPG",
    "10.jpg",
  ];

  return (
    <Layout title="Travel - Lisa Patel">
      <Head>
        <title>Travel - Lisa Patel</title>
        <meta name="description" content="Lisa Patel's travel adventures and experiences" />
      </Head>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <h1 className="text-2xl font-semibold tracking-tight mb-8">
          Travel
        </h1>

        <p className="text-sm leading-relaxed mb-10 max-w-3xl">
          I love exploring new places, trying out local coffee spots, and finding great veggie eats! Whether it&apos;s a new corner cafe or a bustling restaurant, I&apos;m always excited to dive in. Here&apos;s a glimpse of my favorite spots in the Bay Area and beyond.
        </p>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Food in the Bay</h2>

          <h3 className="text-lg font-semibold mb-2">Coffee</h3>
          <p className={`mb-4 ${textColorSecondary}`}>San Francisco: The Coffee Movement, Sightglass, Andytown, The Mill, Reveille, Motorting Coffee, Flywheel</p>
          <p className={`mb-4 ${textColorSecondary}`}>Palo Alto: Backyard Brews, Ventia Cafe, Coffee Bar</p>
          <p className={`mb-4 ${textColorSecondary}`}>South Bay: Voyager, Sue's, 1 Oz coffee</p>

          <h3 className="text-lg font-semibold mb-2">Restaurants</h3>
          <p className={`mb-4 ${textColorSecondary}`}>San Francisco: Flour + Water, State Bird Provisions, Tony's Pizza, Tiya, Copra, Rooh, Shizen, Dumpling Time, Beit Rima, Penny Roma</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Travels</h2>
          <p className={`mb-4 ${textColorSecondary}`}>Beyond the Bay, I&apos;ve had the chance to explore incredible places that have expanded my palate and perspective. Whether it&apos;s savoring street food in Southeast Asia or finding hidden gems in European cities, each journey is a new adventure.</p>
        </section>

        {/* Photo Grid */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold mb-4">Photos</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {images.map((img, idx) => (
              <div key={idx} className="overflow-hidden rounded-lg aspect-square">
                <img 
                  src={`${basePath}/${img}`} 
                  alt={`Travel photo ${idx + 1}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Travel;

