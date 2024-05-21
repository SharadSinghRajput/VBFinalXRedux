import Image from 'next/image';
import { ConsultationDetailPageData, RelatedProduct } from '../config/ConsultationDetailPageData';

function ConsultationDetailPage() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                    <div className="border-2 border-gray-200 shadow-lg rounded-xl">
                        <div className="p-10 space-y-20 lg:p-10 lg:space-y-20">
                            {ConsultationDetailPageData.map((index) => (
                                <article
                                    key={index.title}
                                    className="relative isolate flex flex-col gap-8 lg:flex-row"
                                >
                                    <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0 flex items-center justify-center">
                                        <Image
                                        width={150}
                                        height={150}
                                            src={index.imgsrc}
                                            alt={index.alt}
                                            className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
                                        />
                                        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10 opacity-100" />
                                    </div>
                                    <div className="leading-10">
                                        <div className="flex items-center gap-x-4 text-xs"></div>
                                        <div className="group relative max-w-xl">
                                            <h3 className="mt-20 text-2xl font-semibold text-gray-900 group-hover:text-gray-600">
                                                {index.title}
                                            </h3>
                                            <div className="">
                                                <p className="text-gray-9"> Rs: {index.price}</p>
                                                <p className="text-gray-9 text-base rounded-lg border w-fit bg-lime-500 px-3"><span className="text-black text-base">Qty:</span> {index.qty}</p>
                                                <a
                                                    href=''
                                                    className="rounded-md bg-lime-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-2"
                                                >
                                                    BUY NOW
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                    <div className="w-full">
                        <ul className='w-full'>
                            <li className='text-center'>
                                <h2 className="mt-4 text-3xl border-b border-black"><span className="text-orange-500 text-4xl font-black">&#9900;</span> Related Product</h2>
                            </li>
                        </ul>
                    </div>


                    <div className="flex flex-row justify-center gap-10 mt-8 items-center ">
                        {RelatedProduct.map((product, index) => (
                            <div className="relative max-w-52" key={index}>
                                <Image
                                    width={150}
                                    height={150}
                                    src={product.relatedimgsrc}
                                    alt=""
                                    className="rounded-t-lg object-cover w-full"
                                />

                                <div className="bottom-0 left-0 w-full shadow-lg bg-white bg-opacity-50 p-2">
                                    <h3 className="text-black text-sm font-semibold">{product.title}</h3>
                                    <h3 className="text-lime-700 text-sm font-semibold">Rs.{product.price}</h3>
                                </div>
                            </div>
                        ))}
                    </div>


                    <div className="container mx-auto border px-4">
                        <div className="font-bold text-2xl text-start gap-x-6 px-6 py-1.5 sm:px-3.5 sm:before:flex-1">
                            <h1 className="justify-center leading-6 text-lime-600 underline underline-offset-8 un ">Description</h1>
                        </div>
                        <div className="text-sm font-semibold text-justify text-gray-800 leading-8 border px-4">
                            <p><span>If you are looking for your horoscope as per your zodiac sign for the day, you’ve come to the correct place. With just few clicks, you can get the most accurate, genuine and helpful advice on how your day is going to be! You’ll just need to click on the Zodiac Sign for which you want the Astrology prediction, and go through a detailed <a href="https://www.vinaybajrangi.com/horoscope/daily-horoscope.php"><span><strong>Daily Horoscope</strong></span></a><span><strong>.</strong></span>&nbsp;On this website, you will find a detailed daily horoscope/horoscope for today, which is based on the daily motion of the moon in a particular sign. The degrees of each planet in a particular sign is also taken in to account for foretelling the <strong>Today's Horoscope</strong>. It contains the do’s, don’ts, daily love life, finance, career, health, lucky number, colour, Mantra of the Day, and last but not the least, “<em><strong>Today’s Remedy</strong></em>” to overcome any issue you might be destined to face.</span> </p>
                            <p><span>There are a million reasons why people are serious about </span><a href="https://www.vinaybajrangi.com/hindi/horoscope/daily-horoscope.php" target="_blank"><span ><strong>Daily Horoscope in Hindi</strong></span></a><span> or <strong>Love Horoscope</strong>. In fact, research finds that people, especially youngsters, who may not be so enthusiastic about astrology, consult Daily Horoscope in their day-to-day lives. This is because each one of us looking for a certain guidance to carry out our big and small life decisions and horoscopes kind of provide a genuine advice and, of course, these are fun to read too! This <strong>Astrology Prediction</strong>, based on <strong>Zodiac Signs</strong>, is what keeps some of us going on in life, right?</span></p>
                            <h2 className="mt-2 mb-2 text-2xl text-justify text-black font-semibold">Reasons why Daily Horoscope is Popular</h2>
                            <p ><span>Individuals go for <strong>love, health, career</strong>, or other horoscopes, because of a variety of reasons. While some may be looking for a soothing comfort during a particularly stressful time, there may be others who want to know whether what they are planning to do in life will bear them a desirable result or not. People often find comfort even in the most generalized or vague horoscopes, often taking the forecasts with a pinch of salt. Nevertheless, they read horoscopes and here are some of the reasons why -</span></p>
                            <p>
                                <ul className='list-decimal pl-16'>
                                    <li className="text-justify">
                                        <strong>Self-doubt</strong> – When someone is passing through a difficult phase personally, either by way of obstacles in education, or general life, one tends to consult a daily horoscope to not only understand one’s self but also to seek some way out of the confusion.
                                    </li>
                                    <li className="text-justify">
                                        <strong>Love life</strong> – One of the most significant aspects of a person’s life is a love or relationship, here! Questions like “Are we compatible?”, “Is She/He the one?”, “Will we be satisfied with each other?” are more often than not answered through the Daily Love Horoscope.
                                    </li>
                                    <li className="text-justify">
                                        <strong>Career &amp; Finances</strong> – People often get stuck when it comes to their career choices or job stability. At such a time, the Daily Horoscope answers your queries such as the best time to look for a new job, the right time to make the switch or when to appear for a job interview. As for investments, both major and minor, or purchases, you can consult the Daily Horoscope and find out which dates or days or times are auspicious to carry out the investments.
                                    </li>
                                    <li className="text-justify">
                                        <strong>Sheer Curiosity </strong>– Sometimes, you may be just curious to know what your day holds in it for you. So, for that as well, a Daily Horoscope is the right way to learn more!
                                    </li>
                                </ul>
                            </p>
                            <h2 className="mt-2 mb-2 text-2xl text-justify text-black font-semibold">Reassurance for Millennials</h2>
                            <p><span >If you are a millennial, member of the with-it generation, there is no doubt that you must be dealing with a million doubts a day, whether it is studies, relationships or general life. The combined stress and uncertainty make it harder for you to focus on the priorities and force you to stay behind on most of your goals. If you are tech savvy, then you might know that you can find free horoscope online and can read your horoscope and <a href="https://www.vinaybajrangi.com/horoscope/horoscope.php" target="_blank"><span><strong>astrology predictions</strong></span></a>. These are readily available on a regular basis and these offer serious guidance as well as reassurance. Whether you are into Zodiac signs or not, whether you are an <strong>Aries, Tauras or Libra, </strong>Daily Horoscope is something that will keep you informed in your life.</span></p>
                            <h2 className="mt-2 mb-2 text-2xl text-justify text-black font-semibold">Variety of Horoscopes</h2>
                            <p><span><span><span>Daily Horoscopes are an effective means to interpret your life, especially if you are an avid horoscope reader because then you can keep a regular track of what astrology has in store for you. Meanwhile, you need to be aware of the following two basic varieties of horoscopes out there, so that you can consult one that is suitable to your purpose. So, here we go -&nbsp;</span></span></span></p>
                            <p><span><span><strong>General Horoscopes – </strong><span>A general horoscope considers only your Zodiac sign while listing predictions. It is mostly a short blurb against each sign, found usually in popular magazines, daily newspapers or online. Such free horoscopes offer a broad, often vague, advice, which could be applicable to several people at the same time.</span></span></span></p>
                            <p><span><span><strong>Personalized Horoscopes</strong><span> – You can catch hold of a personalized horoscope either online, through astrological websites, or after a reading with a Professional Astrologer. Often online horoscopes offer you a simple paragraph after you submit the date, location and exact time of your birth. </span></span></span><span>Often this information is synthesized in a limited manner and you will get to see the results as per your zodiac sign.&nbsp;</span><span><span><span>However, an appointment with a Professional, Certified Astrologer will get you a detailed astrological forecast, which will take in to account your life and specific queries.</span></span></span></p>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
}

export default ConsultationDetailPage;
