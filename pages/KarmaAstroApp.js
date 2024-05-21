import Image from "next/image"
const AppImageUrl = [
    {
        imageUrl: 'https://www.vinaybajrangi.com/upload/app/IOS.png?id=asjkdhaksjdh',
        alt: 'appstore app'
    },
    {
        imageUrl: 'https://www.vinaybajrangi.com/upload/app/playstore.png?id=asjkdhaksjdh',
        alt: 'playstore app'
    },
    {
        imagBanner: 'https://www.vinaybajrangi.com/upload/editior_image/website%20karma%20astro%20app%20page%20banner.png',
        alt: 'Banner'
    },
]

export default function KarmaAstroApple() {
    return (
        <div className="max-w-6xl mx-auto shadow-2xl bg-white p-5 mt-5 mb-5 rounded-lg">
            <div className="mx-auto">
                <div className="mx-full lg:mx-0">
                    <h2 className="text-3xl  text-center rounded-md text-white border bg-orange-500">Best Astrology App for Life Problem Remedies</h2>
                </div>
                <ul role="list" className="mx-auto mt-10 flex justify-center max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 mb-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {AppImageUrl.map((AppImageUrl) => (
                        <li key={AppImageUrl.index}>
                            <Image width={100} height={100} className=" w-full rounded-2xl object-fit shadow-2xl" src={AppImageUrl.imageUrl} alt="" />
                        </li>
                    ))}
                </ul>
                <p>Karma Astro Mobile app is a perfect solution for all kinds of problems in life. Based on Vedic Astrology, Karma Astro Mobile App is an amalgamation of 7 wonderful modules giving valuable insights on your kundli, kundli matching, daily horoscope, marriage, career, business, and health. Each of these modules is a comprehensive program giving solutions and predictions to all kind of queries related to that specific area of life. The Karma Astro Mobile app can be easily downloaded both for Android and IOS. With easy to use yet most comprehensive features, the <a className="text-blue-700" href="https://play.google.com/store/apps/details?id=com.vinaybajrangi.app"><strong>Karma Astro app</strong> </a> is gaining prominence among professionals and beginners alike. Download today to get instant solution to all your astrology related queries! </p>
                <h2 className="text-2xl mt-4 font-bold text-center">Vinay Bajrangi Karma Astro App Key Features:</h2>
                <ul
                    role="list"
                    className="mx-auto mt-10 flex justify-center max-w-2xl grid-cols-1 gap-y-16 sm:grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-1"
                >
                    {AppImageUrl.map((AppImageUrl) => (
                        <li key={AppImageUrl.index}>
                            <Image width={100} height={100} className=" w-full rounded-2xl object-fit shadow-2xl" src={AppImageUrl.imagBanner} alt="" />
                        </li>
                    ))}
                </ul>

                <h2 className="text-lg mt-6 font-bold">Kundli by Karma Astro App</h2>

                <p>Get your free kundli online by date of birth in few seconds. Enter your birth details and get your online birth chart instantly. The horoscope is 100% accurate and can be used to get all kind of astrology predictions by an expert. Know about the position, strength and dasha periods of the planets accurately. One may get the <a className="text-blue-700" href="https://www.vinaybajrangi.com/kundli.php"><span><strong>birth chart</strong></span></a><span>&nbsp;to get refined information about the planets and houses. Use in-built calculators of </span><strong>Karma Astro app</strong> to process your charts accurately in no time!</p>

                <h2 className="text-lg mt-6 font-bold">Kundli Matching - App on Playstore</h2>

                <p><span>Free Kundli matching online is the most useful module whereby you may check the compatibility with your life or love partner. The <a className="text-blue-700" href="https://www.vinaybajrangi.com/marriage-astrology/kundli-matching-horoscopes-matching-for-marriage.php"><span><strong>kundli matching</strong></span></a><span> </span>in the Karma Astro app is not an ordinary process rather it is done in a deep and detailed manner. Kundli matching involves deep analysis of the zodiac signs, planets, houses and nakshatra in the birth charts. All kinds of dosha such as Manglik dosha, Kaal Sarp dosha, nadi dosha, bhakoot dosha, and others are duly identified and remedies are suggested by the most renowned astrologer. Kundli Milan is performed before almost every marriage and with Karma Astro app you get the most reliable results.</span></p>
                <p>Kundli matching is the most prominent feature whereby the native learns all the proposed relation's pros and cons. Kundli matching calculator is another useful yet unique feature of the app whereby anyone can check kundli by entering basic birth details. This is equally good for professional astrologers as well as family members who wish to match the kundli of their children before marriage. The matching is done based on ashtkoot Milan of Vedic Astrology and is completely reliable. Matching is done in such a manner to establish prosperity and happiness in your married relations. Download today to match your kundli accurately before initiating the most important relationship of your life i.e., a marriage!</p>
                <h2 className="text-lg mt-6 font-bold">Daily Horoscope - Apps in Android/IOS</h2>
                <p>Know your daily fate with the <a className="text-blue-700" href="https://www.vinaybajrangi.com/horoscope/daily-horoscope.php"><span><strong>Daily horoscope</strong></span></a> as provided by the Karma Astro app now! Download the app to get your most accurate daily predictions beforehand. With the service of a daily horoscope, you may effectively make out how your day will be like. The horoscope warns you against the bad day and also gives suggestions to take important decisions if the day suggests so. When you know about your coming day in advance, you may plan your day most fruitfully. Not just today’s horoscope, but the app also provides tomorrow’s horoscope and weekly horoscope for effective predictions.&nbsp;</p>
                <p>The predictions are given as per the zodiac signs and the Moon signs of the natives. People belonging to all 12 zodiac signs and Moon signs can get their future predictions on a daily &amp;&nbsp;weekly&nbsp;basis. The predictions, however are the general predictions, and a consultation with an astrologer is required for more personalized details.</p>
                <p>Tomorrow &amp; Weekly predictions are very effective in planning your week efficiently with Karma Astro app. The app warns against bad transits and time periods for you as per your zodiac and Moon sign. One also gets effective remedies to overcome bad results if any. The app also warns against the bad transit of Rahu and Saturn if pertaining to a certain year, in that case, the native may resort to the super effective remedies as suggested by the most popular astrologer.</p>
                <p>The future predictions as given by the <a className="text-blue-700" href="https://apps.apple.com/in/app/karmaastro-vinay-bajrangi/id1625624570"><strong>Karma Astro IOS App</strong></a> help in taking important decisions related to real estate and share market as well. The app narrates the most suitable time for buying and selling property to help the native fetch desirable profits. One needs to ask the astrologer about the best period for investing in property and shares. The app hints at a favorable time period, which can be confirmed further with the best astrologer in the country.&nbsp;</p>
                <h2 className="text-lg mt-6 font-bold">Marriage Prediction by Karma Astro App</h2>
                <p>The <a className="text-blue-700" href="https://www.vinaybajrangi.com/marriage-astrology.php"><span><strong>Marriage prediction</strong></span></a> is the most prominent service of the Karma Astro app. Today we see problems in almost every marriage, and the app helps to know the reasons for marriage issues in one’s life. The app may predict all possibilities of your married life based on your birth date. The app may predict the timing of marriage, the direction of your marriage, every detail about your spouse, compatibility with the partner, love life, relation with in-laws and children etc. You may also know the possibilities of extra marital affairs, cheating, or other immoral acts on the part of your partner or your own.&nbsp;</p>
                <p>This app indicates good and bad things about someone’s marriage, which can be checked with the best astrologer. Dr. Vinay Bajrangi is a famous astrologer and is serving in the field of Astrology since decades. He is an expert in solving all kind of marriage-related issues. One may take pre-marriage counseling and post-marriage counseling with him to understand the peculiarities of married life.</p>
                <p>All kind of dosha like mangal dosha, angarak dosha, <a href="https://www.vinaybajrangi.com/kundli-doshas/guru-chandal-dosha.php"><span ><strong>Guru chandal dosha</strong></span></a>, etc., present in the kundli can be rectified effectively with the help of an astrological consultation with the best astrologer Dr. Vinay Bajrangi. These doshas sometimes ruin the bliss of marriage even before knowing, and also the bad transits through the navamsha charts, which is an intricate subject, may invite big troubles in your married life. Consult an astrologer to know the exact reason for indifferences and identify the results' permanence.</p>
                <h2 className="text-lg mt-6 font-bold">Career Astrology - Apps on Google</h2>
                <p>Karma Astro app can solve all your career-related problems in no time. The app helps you know the most suitable career option for you to gain maximum benefits in life. It will also guide whether one should go for business or a job. Through the principles of the <a className="text-blue-700" href="https://www.vinaybajrangi.com/career-astrology.php"><span ><strong>Career Astrology</strong></span></a><span> </span>app helps you know about the golden period in your career and when you can expect a promotion, change in job, transfer, or break in a job. The app helps you know about the golden period in your career and when you can expect a promotion, change in job, transfer, or break in a job.&nbsp;</p>
                <p>Choosing the best career becomes an easy task with Karma Astro app and one may identify the right time of getting employment. Times are bad sometimes and we are forced to leave our job due to dissatisfaction or other reasons. The app also suggests whether you should actually leave a job or perform remedies to pacify the negative effects of the planets. Don’t just get carried away by your emotions; make informed and practical decisions to avoid disappointments later.&nbsp;</p>
                <p>One may consult the best astrologer to know about the success or failure in a career. When one opts for a line of a career as suggested by Dr. Vinay Bajrangi, success and prosperity are bounds to follow!&nbsp;&nbsp;&nbsp;</p>

                <h2 className="text-lg mt-6 font-bold">Business Astrology - Apps for Android/IOS</h2>

                <p>Are you facing problems in your business? Are you not satisfied with the earnings of your business? Do constant failures and competition in the market are your main concern? &nbsp;Do you worried about the <a className="text-blue-700" href="https://www.vinaybajrangi.com/business-astrology/right-business-selection.php"><span ><strong>business selection as per Astrology</strong></span></a>? Download the Karma Astro app to solve your business-related problems. The predictions as made through the app help the natives to maximize their profits through the right approach. It serves as a guide by depicting the opportunities and threats of business, as demonstrated by your birth chart.&nbsp;</p>
                <p>One may know a favorable period for making long-term investments or starting a new venture with the indications as given by the app. The app is one of its kind to give the most comprehensive information on your business and related problems. Whether you are in the right line of business or should try some other business line? The dhan yoga if present in your kundli may make you earn fortunes through your business. Know about your dhan or wealth yoga with kundli analysis done through the app. Take an appointment with the most renowned astrologer to explore new avenues and excel like never before!&nbsp;&nbsp;</p>

                <h2 className="text-lg mt-6 font-bold">Health Prediction - Astrology Apps on Google Play</h2>
                <p>“Health is wealth”, we all accept this fact from the core of our hearts. With Karma Astro app, you may regulate your health, stress and other issues. Our birth chart indicates our health and diseases. The planets with their unique significations, bring a different kind of diseases to us. The Karma app helps to diagnose the diseases we are likely to suffer in our life. It also predicts the timeline of falling ill. It may give hints about complex diseases, surgeries and accidents as well.&nbsp;</p>
                <p>The app warns us against threatening period based on bad yogas, dasha periods and transits. One may take special care of the <a className="text-blue-700" href="https://www.vinaybajrangi.com/health-astrology.php"><span><strong>health and astrological remedies</strong></span></a> to safeguard against the bad period in life. A few combinations in the horoscope give mental tensions to a native. Some very negative combinations can give suicidal tendencies to the natives, which should be identified in time. The app detects these yogas and suggests remedies to release pressure in life. A consultation with the best astrologer will give valuable information related to your health and will help you take required precautions for all kinds of possible diseases or surgeries. Download today to live a healthy and stress-free life.&nbsp;&nbsp;</p>
                <h2 className="text-lg mt-6 font-bold">Features of Karma Astro App</h2>
                <ol className="list-decimal px-10">
                    <li>Daily, Tomorrow&nbsp;&amp; Weekly predictions</li>
                    <li>100% accurate information</li>
                    <li>Free Kundli Matching</li>
                    <li>Key features of all 12 zodiac signs&nbsp</li>
                    <li>Advanced calculators for different aspects of life</li>
                    <li>Love life predictions</li>
                    <li>Planetary transit</li>
                    <li>The suggestion of gems and rudraksha</li>
                    <li>Astrology information&nbsp;&nbsp</li>
                </ol>

                <p className="mt-2">Download <a className="text-blue-700" href="https://www.vinaybajrangi.com/apps/karma-astro-app.php"><span><strong>Karma Astro Mobile App</strong></span></a> - the most competent and the best astrology app to provide one-stop Astro solutions.</p>
            </div>
        </div >
    )
}
