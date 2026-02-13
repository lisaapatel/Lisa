import type { NextPage } from "next";
import { Layout } from "../components/Layout";
import { useTheme } from "../contexts/ThemeContext";
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  const { theme } = useTheme();
  
  // Updated color variables for a more modern look
  const bgColor = theme === 'dark' ? 'bg-gray-900' : 'bg-white';
  const textColor = theme === 'dark' ? 'text-gray-100' : 'text-gray-800';
  const textColorSecondary = theme === 'dark' ? 'text-gray-400' : 'text-gray-600';
  
  console.log("Base path:", process.env.NEXT_PUBLIC_BASE_PATH || '');
  
  return (
    <Layout title="Lisa Patel">
      <Head>
        <title>Lisa Patel</title>
        <meta name="description" content="Lisa Patel's Portfolio" />
        <link rel="icon" href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/favicon.ico`} />
      </Head>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-12">
          Welcome to my corner on the internet.
        </h1>
        
        <h2 className="text-2xl font-light tracking-wide mb-16 text-gray-500 dark:text-gray-300">
          Nice to e-meet you!
        </h2>

        <div className="space-y-6 sm:space-y-10">
          <p className={`text-lg leading-relaxed ${textColorSecondary}`}>
            I am an SCU alumnus with a Master&apos;s in Information Systems,
            currently based out of the Bay Area. I am passionate about using
            the data to help and build better products for users.
            Currently working at a fintech unicorn start-up{" "}
            <a 
              href="https://www.upgrade.com" 
              className={`font-medium hover:underline decoration-2 underline-offset-4 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}
            >
              Upgrade
            </a>
            , I help different teams in making impactful data-driven decisions.
          </p>
          
          <p className={`text-lg leading-relaxed ${textColorSecondary}`}>
            My passion revolves around three core tenets: strategy, analytics, and innovation. I am an avid learner who enjoys
            exciting challenges. I presume it is to accept what life throws at me and mould it in the best possible way while enjoying small wins on the way.
          </p>
          
          <p className={`text-lg leading-relaxed ${textColorSecondary}`}>
            You can also catch me binge-watching on Netflix, daydreaming,
            baking, trying out new recipes or blogging about my travels and
            experiences. You can find my blog{" "}
            <a 
              href="https://www.instagram.com/thehattales/" 
              className={`font-medium hover:underline decoration-2 underline-offset-4 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}
            >
              here
            </a>.
          </p>
          
          <p className={`text-lg leading-relaxed ${textColorSecondary}`}>
            Besides this, I am also interested in smart mobility, and
            sustainability!
          </p>
        </div>
        
        <div className="my-10 sm:my-16 flex justify-center">
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/lisa.jpg`}
            alt="Lisa Patel"
            className="rounded-lg shadow-md w-full max-w-[350px] sm:max-w-[500px]"
          />
        </div>
        
        <div className="mt-32 mb-8">
          <h3 className="text-3xl font-semibold mb-8 tracking-tight">
            A peek into my life right now
          </h3>
          <ul className={`space-y-4 sm:space-y-6 text-base sm:text-lg ${textColorSecondary}`}>
            <li className="flex flex-col sm:flex-row sm:items-start">
              <span className="font-semibold sm:min-w-[120px] sm:mr-4 mb-1 sm:mb-0">Life goal:</span>
              <span>Enjoy all of nature&apos;s beautiful experiences</span>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-start">
              <span className="font-semibold sm:min-w-[120px] sm:mr-4 mb-1 sm:mb-0">Learning:</span>
              <span>Yoga</span>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-start">
              <span className="font-semibold sm:min-w-[120px] sm:mr-4 mb-1 sm:mb-0">Reading:</span>
              <span>The Light we Carry by Michelle Obama</span>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-start">
              <span className="font-semibold sm:min-w-[120px] sm:mr-4 mb-1 sm:mb-0">Listening:</span>
              <span>Morning Brew, All-In Podcast, No Stupid Questionsa</span>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-start">
              <span className="font-semibold sm:min-w-[120px] sm:mr-4 mb-1 sm:mb-0">Watching:</span>
              <span>Sevrance</span>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-start">
              <span className="font-semibold sm:min-w-[120px] sm:mr-4 mb-1 sm:mb-0">Celebrating:</span>
              <span>Highschool Friend's wedding &amp; all the little joys in Life!</span>
            </li>
          </ul>
          <p className={`mt-12 text-lg italic ${textColorSecondary}`}>Thanks for stopping by!</p>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
