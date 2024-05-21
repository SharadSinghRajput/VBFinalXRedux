import { HomeIcon } from '@heroicons/react/20/solid'

export default function About() {
  const LinkonAbout =[
    {
      name: "Astrology news – Relevance of Astrology in Modern Times",
      link: "https://www.vinaybajrangi.com/astrology-news.php"
    },
    {
      name: "Astrology articles on Vedic Astrology",
      link: "https://www.vinaybajrangi.com/astrology-articles.php"
    },
    {
      name: "How far astrology rituals help?",
      link: "https://www.vinaybajrangi.com/astrology-articles/do-astrology-rituals-really-help.php"
    },
    {
      name: "Past life readings",
      link: "https://www.vinaybajrangi.com/life-predictions.php"
    },
    {
      name: "Dr. Vinay Bajrangi in Quora",
      link: "https://www.quora.com/profile/Vinay-Bajrangi-1"
    },
    {
      name: "YouTube channel of Dr. Vinay Bajrangi",
      link: "https://www.youtube.com/c/DrVinayBajrangi"
    },
    {
      name: "How to get accurate astrology predictions",
      link: "https://www.theweek.in/news/biz-tech/2020/11/20/How-to-get-accurate-future-predictions-dr-vinay-bajrangi.html"
    },
    {
      name: "How to judge a good astrologer",
      link: "https://www.vinaybajrangi.com/how-to-judge-a-good-astrologer.php"
    },
    {
      name: "Opt for online report",
      link: "https://www.vinaybajrangi.com/services/online-reports.php"
    },
    {
      name: "Direct consultation",
      link: "https://www.vinaybajrangi.com/services/consultation.php"
    }
  ]  

  const pages = [
    { name: 'About', href: '#', current: false },
    { name: 'About us', href: '#', current: true },
  ]
  
  return (
    <>
    <div className='bg-white max-w-6xl mx-auto mt-5'>
      <nav className="flex" aria-label="Breadcrumb">
        <ol role="list" className="flex space-x-4 rounded-md bg-white px-6 shadow">
          <li className="flex">
            <div className="flex items-center">
              <a href="#" className="text-orange-500 hover:text-orange-800">
                <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                <span className="sr-only">Home</span>
              </a>
            </div>
          </li>
          {pages.map((page) => (
            <li key={page.name} className="flex">
              <div className="flex items-center">
                <svg
                  className="h-full w-6 flex-shrink-0 text-gray-200"
                  viewBox="0 0 24 44"
                  preserveAspectRatio="none"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
                </svg>
                <a
                  href={page.href}
                  className="ml-4 text-sm font-medium text-orange-500 hover:text-orange-800"
                  aria-current={page.current ? 'page' : undefined}
                >
                  {page.name}
                </a>
              </div>
            </li>
          ))}
        </ol>
      </nav>
    </div>
    <div className="max-w-6xl mx-auto shadow-2xl bg-white p-5 mt-5 mb-5 rounded-lg">
      <div className="border-b border-gray-200 bg-white px-0 py-5 ">
        <h1 className="text-xl font-semibold leading-6 text-gray-900">Why To Contact Dr Vinay Bajrangi - The Best Astrologer In India</h1>
      </div>
      <div className="text-sm font-normal text-justify text-gray-800 leading-8 mt-5">
        <p>Dr. Vinay Bajrangi does not need an extensive introduction. He is currently known as &ldquo;India&rsquo;s most searched astrologer.&rdquo; Dr. Vinay Bajrangi has received several honours including a PhD in Astrology. He is found as the &ldquo;best astrologer in Delhi&rdquo; as well as the &ldquo;best astrologer in India.&rdquo; He is one of the best and most well-known astrologers in the world.</p>
        <p>Several media houses like Times of India, Outlook, The Week, Mid Day, DNA, Deccan Herald, Deccan Chronicle, Business Standard, Hindustan Times, Amar Ujala, etc., given him the name and fame of the best astrologer. People have believed in him for the best astrological prediction and solution. Several institutions have given him Recognition, Life Membership and various accreditations for his expertise in Astrology. His outstanding track record and achievements make him a popular choice for Bollywood celebrities, famous business persons, politicians, and Buerocrats.</p>
        <p>Dr. Vinay Bajrangi, India&rsquo;s best Vedic astrologer, is a firm believer in &ldquo;karma.&rdquo; He claims that our current lives are directly affected by our past life karmas and that constructive efforts in our current actions can resolve future issues by doing good karmas. Dr. Vinay Bajrangi often inspires and assists his clients in finding solutions to their problems.</p>
        <p>His vast knowledge of <a className='text-blue-700' href="https://www.vinaybajrangi.com/life-predictions/karma-correction.php">Karmic Astrology</a>, Medical Astrology, Marriage Astrology, Career Astrology, Electional Astrology, birth time rectification KP, Numerology, and Gemmology enables him to find the origin of people's problems and give them appropriate solutions.</p>
        <p>Dr. Vinay Bajrangi is a post-graduate Civil engineer and Indian Vedic astrologer with a Ph.D. in Astrology and undergoing second. So whatever he says would have a scientific and mathematical base. It could be little different co-relating astrology&rsquo;s relevance in present times than the Orthodox methods of Astrology.</p>
        <h2 className="mt-2 mb-2 text-2xl text-justify text-black font-semibold">His expertise includes</h2>
        <p>Past life readings, full life analysis predictions (not Yearly Predictions or 5/10 Years Prediction Books/ Epics)</p>
        <p><a className='text-blue-700' href="https://www.vinaybajrangi.com/time-rectification.php">Birth time rectification</a>, Karma Correction,</p>
        <p>Marriage counselling and Another unique method of Corporate Counselling to the Business Heads.</p>
        <p>This is in addition to an expert&rsquo;s hand on regular astrology for human life problems and solutions related to career, business, marriage and relationships, child, health, court cases, property, Vastu, and many more.</p>
        <p>But a big question comes to our mind when we decide to go to an astrologer</p>
        <h2 className="mt-2 mb-2 text-2xl text-justify text-black font-semibold">Can astrologer change our horoscope / kundali</h2>
        <p>Dr. Bajrangi further believes that a horoscope & its planetary positions are fixed & even Lord Brahma, the creator, cannot change whatever is embedded in the horoscope. He further states that each horoscope has both negative and positive planets and planetary positions, but none either saddens or blesses a person automatically.</p>
        <p>The results of all positive Yogas and negative doshas depend on how we can activate the positive ones or keep the negative ones suppressed / de-activated? Nothing gives guaranteed results.</p>
        <p>No ritual is potent enough to change any dosha / planetary position in the Kundli, whether negative or positive. Therefore, the solutions should be Karmic based and not only astrological remedies based. Just give a read on  <strong> do astrology rituals really help (on the link given below)</strong> to understand what is more important, rituals & remedies or karma correction, says Dr. Vinay Bajrangi.</p>
        <p>Now, know more about astrologer Dr. Vinay Bajrangi, who writes the title Bajrangi as he is a hardcore follower of Lord Bajrang Bali & has got some divine powers from this greatest Lord Bajrang Bali. He has obtained specific accreditations in the major branches of Ancient Indian Vedic Astrology which includes:</p>
        <p>1. Vedic doctrine of Sage Bhrigu,2. Sage Parashar,3. Various North Indian Techniques,4. Numerous South Nadi Techniques,5. KP,6. Vastu Shastra</p>
        <p>In addition to the above qualifications & accreditations, he is a Numerologist, Gemologist, and Graphologist. Very few astrologers in India would have all this, but Dr. Vinay Bajrangi has them all.</p>
        <p>Dr. Vinay Bajrangi is one of the top best astrologers in India - Delhi NCR, who has seen over 80000 Horoscopes from all age groups, fields & sphere of life both nationally & internationally. Apart from his H.Q. in Noida – Delhi NCR, he is a regular visitor to major cities in India & abroad.</p>
        <p>He is one of the Most Viewed Writer MVN on Quora.</p>
        <p>You can watch his dedicated YouTube Channel.</p>
        <h2 className="mt-2 mb-2 text-2xl text-justify text-black font-semibold">Important points for astrology predictions</h2>
        <p>One consults an astrologer generally during miseries or adverse times. But Dr. Vinay Bajrangi feels meeting an astrologer in normal or even good times also makes a lot of sense. It is like taking pre-caution than curing. This becomes more pertinent whenever one reaches a point of deciding on anything new, like selecting a subject, choosing a career, starting a new business, selecting a life partner, buying and selling property, making new investments, etc. at different life stages.</p>
        <p>He says so because he feels correction at the time of making a decision is like prevention than cure i.e resorting to rituals and remedies when we are in trouble due to wrong decisions. Being a Vedic astrologer, he believes in astrology in a karmic way than a ritualistic way. All this is well explained in his expertise on <strong>important points for astrology predictions (Read more about it on link given below).</strong></p>

        <div className="mt-10">
          <p className="text-xl font-semibold mb-2 leading-6 text-black">Astrology news – Relevance of Astrology in Modern Times For specific guidance on any issues, you can:</p>
          <div className='flex flex-wrap gap-2 mt-5'>
            {LinkonAbout.map((item, index) =>(
              <div key={index} className="rounded-md bg-orange-100 p-1 px-4">
                <a href={item.link} className="text-sm text-orange-500">{item.name}</a>
              </div>
            ))}
          </div> 
        </div>
      </div>
    </div>
    </>
  )
}