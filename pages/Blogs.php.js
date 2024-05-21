import Image from "next/image"
const categories = [
    {
      name: 'Which Is The Best App For Daily Horoscope Reading?',
      href: 'https://www.vinaybajrangi.com/blog/astrology/best-app-for-daily-horoscope-reading',
      imageSrc: 'https://www.vinaybajrangi.com/blog/uploads/blogs/5144daily_horoscope.jpg',
      imageAlt: 'Brown leather key ring with brass metal loops and rivets on wood table.',
      description: 'Are you firmly ready to step into the world of astrology or are you someone who already has started considering astrological consultation as a lighting guide of your life journey? If your answer is Yes, then we’re here to give the right direction to this journey. By answering a common question – which is the best app for daily horoscope reading, we are Introducing a powerful and the best Vedic astrology app which holds astrological answers with maximum accuracy and perfection, we are making this journey overwhelming.',
    },
    {
      name: 'Which Is The Best App For Daily Horoscope Reading?',
      href: 'https://www.vinaybajrangi.com/blog/astrology/best-app-for-daily-horoscope-reading',
      imageSrc: 'https://www.vinaybajrangi.com/blog/uploads/blogs/5144daily_horoscope.jpg',
      imageAlt: 'Brown leather key ring with brass metal loops and rivets on wood table.',
      description: 'Are you firmly ready to step into the world of astrology or are you someone who already has started considering astrological consultation as a lighting guide of your life journey? If your answer is Yes, then we’re here to give the right direction to this journey. By answering a common question – which is the best app for daily horoscope reading, we are Introducing a powerful and the best Vedic astrology app which holds astrological answers with maximum accuracy and perfection, we are making this journey overwhelming.',
    },
    {
      name: 'Which Is The Best App For Daily Horoscope Reading?',
      href: 'https://www.vinaybajrangi.com/blog/astrology/best-app-for-daily-horoscope-reading',
      imageSrc: 'https://www.vinaybajrangi.com/blog/uploads/blogs/5144daily_horoscope.jpg',
      imageAlt: 'Brown leather key ring with brass metal loops and rivets on wood table.',
      description: 'Are you firmly ready to step into the world of astrology or are you someone who already has started considering astrological consultation as a lighting guide of your life journey? If your answer is Yes, then we’re here to give the right direction to this journey. By answering a common question – which is the best app for daily horoscope reading, we are Introducing a powerful and the best Vedic astrology app which holds astrological answers with maximum accuracy and perfection, we are making this journey overwhelming.',
    },
    {
      name: 'Which Is The Best App For Daily Horoscope Reading?',
      href: 'https://www.vinaybajrangi.com/blog/astrology/best-app-for-daily-horoscope-reading',
      imageSrc: 'https://www.vinaybajrangi.com/blog/uploads/blogs/5144daily_horoscope.jpg',
      imageAlt: 'Brown leather key ring with brass metal loops and rivets on wood table.',
      description: 'Are you firmly ready to step into the world of astrology or are you someone who already has started considering astrological consultation as a lighting guide of your life journey? If your answer is Yes, then we’re here to give the right direction to this journey. By answering a common question – which is the best app for daily horoscope reading, we are Introducing a powerful and the best Vedic astrology app which holds astrological answers with maximum accuracy and perfection, we are making this journey overwhelming.',
    },
    {
      name: 'Which Is The Best App For Daily Horoscope Reading?',
      href: 'https://www.vinaybajrangi.com/blog/astrology/best-app-for-daily-horoscope-reading',
      imageSrc: 'https://www.vinaybajrangi.com/blog/uploads/blogs/5144daily_horoscope.jpg',
      imageAlt: 'Brown leather key ring with brass metal loops and rivets on wood table.',
      description: 'Are you firmly ready to step into the world of astrology or are you someone who already has started considering astrological consultation as a lighting guide of your life journey? If your answer is Yes, then we’re here to give the right direction to this journey. By answering a common question – which is the best app for daily horoscope reading, we are Introducing a powerful and the best Vedic astrology app which holds astrological answers with maximum accuracy and perfection, we are making this journey overwhelming.',
    },
  ]
  
  export default function Example() {
  return (
    <div className="bg-white container mx-auto">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 py-5">
        {categories.map((category) => (
          <a key={category.name} href={category.href} className="group block">
            <div className="border border-gray-300 shadow-md rounded-lg">

            <div
              aria-hidden="true"
              className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75"
              >
              <Image
              width={400}
              height={200}
                src={category.imageSrc}
                alt={category.imageAlt}
                className="object-cover object-center h-full w-full"
                />
            </div>
            <h3 className="text-base ml-2 mr-4 mb-4 mt-4 font-semibold text-gray-900">{category.name}</h3>
            <p className="ml-2 mr-4 mb-4 mt-4 h-52 text-sm text-justify text-gray-800 overflow-hidden">{category.description}</p>
            <button className="ml-2 mr-4 mb-4 text-sm text-justify text-gray-800">Read More...</button>
          </div>
          </a>
        ))}
      </div>
    </div>
  )
}

  
  