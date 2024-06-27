import {MAIN_URL} from '../config/config'
export const MainMenu = [
    { name: 'Home', url : '/'},
    { name: 'Horoscope', url : '#', 
        sublinks: [
            { name: 'Horoscope', url : `${MAIN_URL}horoscope/horoscope.php`,  },
            { name: 'Daily Horoscope', url : `${MAIN_URL}horoscope/daily-horoscope.php`,},
            { name: 'Tomorrow Horoscope', url : `${MAIN_URL}horoscope/tomorrow-horoscope.php`,},
            { name: 'Weekly Horoscope', url : `${MAIN_URL}horoscope/weekly-horoscope.php`,},
            { name: 'Monthly Horoscope', url : `${MAIN_URL}horoscope/monthly-horoscope.php`,},
            { name: 'Yearly Horoscope', url : `${MAIN_URL}horoscope/yearly-horoscope.php`,},
            { name: 'Horoscope 2025', url : `${MAIN_URL}horoscope/horoscope-prediction-2025.php`,
                sublinksL2: [
                    { name: 'Horoscope 2025', url : `${MAIN_URL}horoscope/horoscope-prediction-2025.php`,},
                    { name: 'Aries Yearly Horoscope 2025', url : `${MAIN_URL}horoscope/aries-horoscope-2025.php`,},
                    { name: 'Yearly Horoscope 2025 for Taurus', url : `${MAIN_URL}horoscope/taurus-horoscope-2025.php`,},
                    { name: 'Yearly Horoscope 2025 for Gemini', url : `${MAIN_URL}horoscope/gemini-horoscope-2025.php`,},
                    { name: 'Yearly Horoscope 2025 for Cancer', url : `${MAIN_URL}horoscope/cancer-horoscope-2025.php`,},
                    { name: 'Yearly Horoscope 2025 for Leo', url : `${MAIN_URL}horoscope/leo-horoscope-2025.php`,},
                    { name: 'Yearly Horoscope 2025 for Virgo', url : `${MAIN_URL}horoscope/virgo-horoscope-2025.php`,},
                    { name: 'Yearly Horoscope 2025 for Libra', url : `${MAIN_URL}horoscope/libra-horoscope-2025.php`,},
                    { name: 'Yearly Horoscope 2025 for Scorpio', url : `${MAIN_URL}horoscope/scorpio-horoscope-2025.php`,},
                    { name: 'Yearly Horoscope 2025 for Sagittarius', url : `${MAIN_URL}horoscope/sagittarius-horoscope-2025.php`,},
                    { name: 'Yearly Horoscope 2025 for Capricorn', url : `${MAIN_URL}horoscope/capricorn-horoscope-2025.php`,},
                    { name: 'Yearly Horoscope 2025 for Aquarius', url : `${MAIN_URL}horoscope/aquarius-horoscope-2025.php`,},
                    { name: 'Yearly Horoscope 2025 for Pisces', url : `${MAIN_URL}horoscope/pisces-horoscope-2025.php`,}
                ]
            }
        ]
    },
    { name: 'Horoscope 2024', url : '#',
        sublinks: [
            { name: 'Yearly Horoscope 2024 for all signs', url : `${MAIN_URL}horoscope/horoscope-2024.php`,},
            { name: 'Yearly Horoscope for Aries 2024', url : `${MAIN_URL}horoscope/aries-horoscope-2024.php`,},
            { name: 'Yearly Horoscope 2024 for Taurus', url : `${MAIN_URL}horoscope/taurus-horoscope-2024.php`,},
            { name: 'Yearly Horoscope 2024 for Gemini', url : `${MAIN_URL}horoscope/gemini-horoscope-2024.php`,},
            { name: 'Yearly Horoscope 2024 for Cancer', url : `${MAIN_URL}horoscope/cancer-horoscope-2024.php`,},
            { name: 'Yearly Horoscope 2024 for Leo', url : `${MAIN_URL}horoscope/leo-horoscope-2024.php`,},
            { name: 'Yearly Horoscope 2024 for Virgo', url : `${MAIN_URL}horoscope/virgo-horoscope-2024.php`,},
            { name: 'Yearly Horoscope 2024 for Libra', url : `${MAIN_URL}horoscope/libra-horoscope-2024.php`,},
            { name: 'Yearly Horoscope 2024 for Scorpio', url : `${MAIN_URL}horoscope/scorpio-horoscope-2024.php`,},
            { name: 'Yearly Horoscope 2024 for Sagittarius', url : `${MAIN_URL}horoscope/sagittarius-horoscope-2024.php`,},
            { name: 'Yearly Horoscope 2024 for Capricorn', url : `${MAIN_URL}horoscope/capricorn-horoscope-2024.php`,},
            { name: 'Yearly Horoscope 2024 for Aquarius', url : `${MAIN_URL}horoscope/aquarius-horoscope-2024.php`,},
            { name: 'Yearly Horoscope 2024 for Pisces', url : `${MAIN_URL}horoscope/pisces-horoscope-2024.php`,}
        ]
    },
    { name: 'Astrology', url : '#',
        sublinks: [
            { name: 'Today Panchang', url : `${MAIN_URL}today-panchang.php`, },
            { name: 'Festivals', url : `${MAIN_URL}festivals.php`, },
            { 
                name: "Planetary Transit",
                url : `${MAIN_URL}planetary-transit.php`,
                sublinksL2 :[
                    { name: 'Sun Transit', url : `${MAIN_URL}planetary-transit/sun-transit.php`,},
                    { name: 'Mars Transit', url : `${MAIN_URL}planetary-transit/mars-transit.php`,},
                    { name: 'Mercury Transit', url : `${MAIN_URL}planetary-transit/mercury-transit.php`,},
                    { name: 'Jupiter Transit', url : `${MAIN_URL}planetary-transit/jupiter-transit.php`,},
                    { name: 'Venus Transit', url : `${MAIN_URL}planetary-transit/venus-transit.php`,},
                    { name: 'Saturn Transit', url : `${MAIN_URL}planetary-transit/saturn-transit.php`,},
                    { name: 'Rahu Transit', url : `${MAIN_URL}planetary-transit/rahu-transit.php`,},
                    { name: 'Ketu Transit', url : `${MAIN_URL}planetary-transit/ketu-transit.php`,},
                    { name: 'Eclipse', url : `${MAIN_URL}planetary-transit/eclipse.php`,},
                    { name: 'Conjunction of Planets', url : `${MAIN_URL}planetary-transit/conjunction.php`,}
                ]
            },
            { name: "Stock Market Today", url : `${MAIN_URL}share-market-today.php`, },
            { name: "Love Compatibility", url : `${MAIN_URL}zodiac-signs-compatibility.php`,
                sublinksL2 :[
                    { name: 'Aries Love Compatibility', url : `${MAIN_URL}zodiac-signs-compatibility/aries-with-other-signs.php`,},
                    { name: 'Taurus Love Compatibility', url : `${MAIN_URL}zodiac-signs-compatibility/taurus-with-other-signs.php`,},
                    { name: 'Gemini Love Compatibility', url : `${MAIN_URL}zodiac-signs-compatibility/gemini-with-other-signs.php`,},
                    { name: 'Cancer Love Compatibility', url : `${MAIN_URL}zodiac-signs-compatibility/cancer-with-other-signs.php`,},
                    { name: 'Leo Love Compatibility', url : `${MAIN_URL}zodiac-signs-compatibility/leo-with-other-signs.php`,},
                    { name: 'Virgo Love Compatibility', url : `${MAIN_URL}zodiac-signs-compatibility/virgo-with-other-signs.php`,},
                    { name: 'Libra Love Compatibility', url : `${MAIN_URL}zodiac-signs-compatibility/libra-with-other-signs.php`,},
                    { name: 'Scorpio Love Compatibility', url : `${MAIN_URL}zodiac-signs-compatibility/scorpio-with-other-signs.php`,},
                    { name: 'Sagittarius Love Compatibility', url : `${MAIN_URL}zodiac-signs-compatibility/sagittarius-with-other-signs.php`,},
                    { name: 'Capricorn Love Compatibility', url : `${MAIN_URL}zodiac-signs-compatibility/capricorn-with-other-signs.php`,},
                    { name: 'Aquarius Love Compatibility', url : `${MAIN_URL}zodiac-signs-compatibility/aquarius-with-other-signs.php`,},
                    { name: 'Pisces Love Compatibility', url : `${MAIN_URL}zodiac-signs-compatibility/pisces-with-other-signs.php`,}
                ]
            },
            { name: "Kundli Doshas", url : `${MAIN_URL}kundli-doshas.php`,
                sublinksL2 :[
                    { name: 'Pitra Dosha', url : `${MAIN_URL}kundli-doshas/pitra-dosha.php`,},
                    { name: 'Manglik Dosha', url : `${MAIN_URL}kundli-doshas/manglik-dosha.php`,},
                    { name: 'Kaal Sarp Dosha', url : `${MAIN_URL}kundli-doshas/kaal-sarp-dosha.php`,},
                    { name: 'Nadi Dosha', url : `${MAIN_URL}kundli-doshas/nadi-dosh.php`,},
                    { name: 'Guru Chandal Dosha', url : `${MAIN_URL}kundli-doshas/guru-chandal-dosha.php`,},
                    { name: 'Angarak Dosha', url : `${MAIN_URL}kundli-doshas/angarak-dosha.php`,}
                ]
            },
            { name: "Nakshatra", url : `${MAIN_URL}nakshatras.php`,
                sublinksL2 :[
                    { name: 'Ashwini Nakshatra', url : `${MAIN_URL}nakshatras/ashwini-nakshatra.php`,},
                    { name: 'Bharani Nakshatra', url : `${MAIN_URL}nakshatras/bharani-nakshatra.php`,},
                    { name: 'Krittika Nakshatra', url : `${MAIN_URL}nakshatras/krittika-nakshatra.php`,},
                    { name: 'Rohini Nakshatra', url : `${MAIN_URL}nakshatras/rohini-nakshatra.php`,},
                    { name: 'Mrigashira Nakshatra', url : `${MAIN_URL}nakshatras/mrigashira-nakshatra.php`,},
                    { name: 'Ardra Nakshatra', url : `${MAIN_URL}nakshatras/ardra-nakshatra.php`,},
                    { name: 'Punarvasu Nakshatra', url : `${MAIN_URL}nakshatras/punarvasu-nakshatra.php`,},
                    { name: 'Pushya Nakshatra', url : `${MAIN_URL}nakshatras/pushya-nakshatra.php`,},
                    { name: 'Ashlesha Nakshatra', url : `${MAIN_URL}nakshatras/ashlesha-nakshatra.php`,},
                    { name: 'Magha Nakshatra', url : `${MAIN_URL}nakshatras/magha-nakshatra.php`,},
                    { name: 'Purva Phalguni Nakshatra', url : `${MAIN_URL}nakshatras/purva-phalguni-nakshatra.php`,},
                    { name: 'Uttara Phalguni Nakshatra', url : `${MAIN_URL}nakshatras/uttara-phalguni-nakshatra.php`,},
                    { name: 'Hasta Nakshatra', url : `${MAIN_URL}nakshatras/hasta-nakshatra.php`,},
                    { name: 'Chitra Nakshatra', url : `${MAIN_URL}nakshatras/chitra-nakshatra.php`,},
                    { name: 'Swati Nakshatra', url : `${MAIN_URL}nakshatras/swati-nakshatra.php`,},
                    { name: 'Vishakha Nakshatra', url : `${MAIN_URL}nakshatras/vishakha-nakshatra.php`,},
                    { name: 'Anuradha Nakshatra', url : `${MAIN_URL}nakshatras/anuradha-nakshatra.php`,},
                    { name: 'Jyeshtha Nakshatra', url : `${MAIN_URL}nakshatras/jyeshtha-nakshatra.php`,},
                    { name: 'Moola Nakshatra', url : `${MAIN_URL}nakshatras/moola-nakshatra.php`,},
                    { name: 'Purvashada Nakshatra', url : `${MAIN_URL}nakshatras/purvashada-nakshatra.php`,},
                    { name: 'Uttarashada Nakshatra', url : `${MAIN_URL}nakshatras/uttarashada-nakshatra.php`,},
                    { name: 'Shravana Nakshatra', url : `${MAIN_URL}nakshatras/shravana-nakshatra.php`,},
                    { name: 'Dhanishta Nakshatra', url : `${MAIN_URL}nakshatras/dhanishta-nakshatra.php`,},
                    { name: 'Shatabhisha Nakshatra', url : `${MAIN_URL}nakshatras/shatabhisha-nakshatra.php`,},
                    { name: 'Purva Bhadrapada Nakshatra', url : `${MAIN_URL}nakshatras/purva-bhadrapada-nakshatra.php`,},
                    { name: 'Uttara Bhadrapada Nakshatra', url : `${MAIN_URL}nakshatras/uttara-bhadrapada-nakshatra.php`,},
                    { name: 'Revati Nakshatra', url : `${MAIN_URL}nakshatras/revati-nakshatra.php`,}
                ]
            },
            { name: "Astrology Articles", url : `${MAIN_URL}astrology-articles.php`,
                sublinksL2 :[
                    { name: 'Business or Job per my Horoscope', url : `${MAIN_URL}astrology-articles/can-i-do-business-per-my-horoscope.php`,},
                    { name: 'How to get accurate predictions', url : `${MAIN_URL}astrology-articles/who-can-give-better-astrology-predictions.php`,},
                    { name: 'What does astrology say about past life?', url : `${MAIN_URL}astrology-articles/does-my-past-life-affect-present-life.php`,},
                    { name: 'How to get success in business astrology?', url : `${MAIN_URL}astrology-articles/how-to-get-success-in-business-astrology.php`,},
                    { name: 'Can astrologer tell good time for making a decision?', url : `${MAIN_URL}astrology-articles/can-astrologer-tell-best-time-for-making-decision.php`,},
                    { name: 'How a changing planet’s position affects results?', url : `${MAIN_URL}astrology-articles/how-a-changing-planet-position-affects-results.php`,},
                    { name: 'What to do to please Saturn', url : `${MAIN_URL}astrology-articles/how-to-control-saturn.php`,},
                    { name: 'How is Saturn for each moon sign?', url : `${MAIN_URL}astrology-articles/how-is-saturn-for-each-moon-sign.php`,},
                    { name: 'Importance of rituals', url : `${MAIN_URL}astrology-articles/do-astrology-rituals-really-help.php`,},
                    { name: 'Why do astrologers fail at times', url : `${MAIN_URL}astrology-articles/why-do-astrologers-fail-a-times.php`,},
                    { name: 'Will I be successful in business', url : `${MAIN_URL}astrology-articles/will-i-be-successful-in-business.php`,},
                    { name: 'When will I get married', url : `${MAIN_URL}astrology-articles/when-will-i-get-married.php`,},
                ]
            },
            { name: "Astrology News", url: `${MAIN_URL}astrology-news.php`,},
            { name: "Planets in Different Houses & Signs", url: `${MAIN_URL}planets.php`,
                sublinksL2 :[
                    { name: "Sun in Different Houses & Signs", url: `${MAIN_URL}planets/sun.php`,
                        sublinksL3 :[
                            { name: "Sun in 1st House", url: `${MAIN_URL}planets/sun/sun-in-first-house.php`,},
                            { name: "Sun in 2nd House", url: `${MAIN_URL}planets/sun/sun-in-second-house.php`,},
                            { name: "Sun in 3rd House", url: `${MAIN_URL}planets/sun/sun-in-third-house.php`,},
                            { name: "Sun in 4th House", url: `${MAIN_URL}planets/sun/sun-in-fourth-house.php`,},
                            { name: "Sun in 5th House", url: `${MAIN_URL}planets/sun/sun-in-fifth-house.php`,},
                            { name: "Sun in 6th house", url: `${MAIN_URL}planets/sun/sun-in-sixth-house.php`,},
                            { name: "Sun in 7th house", url: `${MAIN_URL}planets/sun/sun-in-seventh-house.php`,},
                            { name: "Sun in 8th house", url: `${MAIN_URL}planets/sun/sun-in-eighth-house.php`,},
                            { name: "Sun in 9th house", url: `${MAIN_URL}planets/sun/sun-in-ninth-house.php`,},
                            { name: "Sun in 10th House", url: `${MAIN_URL}planets/sun/sun-in-tenth-house.php`,},
                            { name: "Sun in 11th House", url: `${MAIN_URL}planets/sun/sun-in-eleventh-house.php`,},
                            { name: "Sun in 12th House", url: `${MAIN_URL}planets/sun/sun-in-twelfth-house.php`,},
                            { name: "Sun in Aries sign", url: `${MAIN_URL}planets/sun/sun-in-aries.php`,},
                            { name: "Sun in Taurus Sign", url: `${MAIN_URL}planets/sun/sun-in-taurus.php`,},
                            { name: "Sun in Gemini Sign", url: `${MAIN_URL}planets/sun/sun-in-gemini.php`,},
                            { name: "Sun in Cancer Sign", url: `${MAIN_URL}planets/sun/sun-in-cancer.php`,},
                            { name: "Sun in Leo Sign", url: `${MAIN_URL}planets/sun/sun-in-leo.php`,},
                            { name: "Sun in Virgo Sign", url: `${MAIN_URL}planets/sun/sun-in-virgo.php`,},
                            { name: "Sun in Libra Sign", url: `${MAIN_URL}planets/sun/sun-in-libra.php`,},
                            { name: "Sun in Scorpio Sign", url: `${MAIN_URL}planets/sun/sun-in-scorpio.php`,},
                            { name: "Sun in Sagittarius Sign", url: `${MAIN_URL}planets/sun/sun-in-sagittarius.php`,},
                            { name: "Sun in Capricorn Sign", url: `${MAIN_URL}planets/sun/sun-in-capricorn.php`,},
                            { name: "Sun in Aquarius Sign", url: `${MAIN_URL}planets/sun/sun-in-aquarius.php`,},
                            { name: "Sun in Pisces Sign", url: `${MAIN_URL}planets/sun/sun-in-pisces.php`,},
                        ]
                    },
                    { name: "Moon in Different Houses & Signs", url: `${MAIN_URL}planets/moon.php`,
                        sublinksL3 :[
                            { name: "Moon in 1st House - Signifies Creative Thinking", url: `${MAIN_URL}planets/moon/moon-in-first-house.php`,},
                            { name: "Moon in 2nd House - Indicates Wealth", url: `${MAIN_URL}planets/moon/moon-in-second-house.php`,},
                            { name: "Moon in 3rd House", url: `${MAIN_URL}planets/moon/moon-in-third-house.php`,},
                            { name: "Moon in 4th House", url: `${MAIN_URL}planets/moon/moon-in-fourth-house.php`,},
                            { name: "Moon in 5th House", url: `${MAIN_URL}planets/moon/moon-in-fifth-house.php`,},
                            { name: "Moon in 6th House", url: `${MAIN_URL}planets/moon/moon-in-sixth-house.php`,},
                            { name: "Moon in 7th House", url: `${MAIN_URL}planets/moon/moon-in-seventh-house.php`,},
                            { name: "Moon in 8th House", url: `${MAIN_URL}planets/moon/moon-in-eighth-house.php`,},
                            { name: "Moon in 9th House", url: `${MAIN_URL}planets/moon/moon-in-ninth-house.php`,},
                            { name: "Moon in 10th House", url: `${MAIN_URL}planets/moon/moon-in-tenth-house.php`,},
                            { name: "Moon in 11th House", url: `${MAIN_URL}planets/moon/moon-in-eleventh-house.php`,},
                            { name: "Moon in 12th House", url: `${MAIN_URL}planets/moon/moon-in-twelfth-house.php`,},
                            { name: "Moon in Aries", url: `${MAIN_URL}planets/moon/moon-in-aries.php`,},
                            { name: "Moon in Taurus Sign", url: `${MAIN_URL}planets/moon/moon-in-taurus.php`,},
                            { name: "Moon in Gemini Sign", url: `${MAIN_URL}planets/moon/moon-in-gemini.php`,},
                            { name: "Moon in Cancer Sign", url: `${MAIN_URL}planets/moon/moon-in-cancer.php`,},
                            { name: "Moon in Leo Sign", url: `${MAIN_URL}planets/moon/moon-in-leo.php`,},
                            { name: "Moon in Virgo Sign", url: `${MAIN_URL}planets/moon/moon-in-virgo.php`,},
                            { name: "Moon in Libra Sign", url: `${MAIN_URL}planets/moon/moon-in-libra.php`,},
                            { name: "moon in Scorpio sign", url: `${MAIN_URL}planets/moon/moon-in-scorpio.php`,},
                            { name: "moon in Sagittarius sign", url: `${MAIN_URL}planets/moon/moon-in-sagittarius.php`,},
                            { name: "Moon in Capricorn sign", url: `${MAIN_URL}planets/moon/moon-in-capricorn.php`,},
                            { name: "Moon in Aquarius sign", url: `${MAIN_URL}planets/moon/moon-in-aquarius.php`,},
                            { name: "Moon in Pisces sign", url: `${MAIN_URL}planets/moon/moon-in-pisces.php`,},
                        ]
                    },
                    { name: "Jupiter in Different Houses & Signs", url: `${MAIN_URL}planets/jupiter.php`,
                        sublinksL3 :[
                            { name: "Jupiter in 1st House", url: `${MAIN_URL}planets/jupiter/jupiter-in-first-house.php`,},
                            { name: "Jupiter in 2nd House", url: `${MAIN_URL}planets/jupiter/jupiter-in-second-house.php`,},
                            { name: "Jupiter in 3rd House", url: `${MAIN_URL}planets/jupiter/jupiter-in-third-house.php`,},
                            { name: "Jupiter in 4th House", url: `${MAIN_URL}planets/jupiter/jupiter-in-fourth-house.php`,},
                            { name: "Jupiter in 5th House", url: `${MAIN_URL}planets/jupiter/jupiter-in-fifth-house.php`,},
                            { name: "Jupiter in 6th House", url: `${MAIN_URL}planets/jupiter/jupiter-in-sixth-house.php`,},
                            { name: "Jupiter in 7th House", url: `${MAIN_URL}planets/jupiter/jupiter-in-seventh-house.php`,},
                            { name: "Jupiter in 8th House", url: `${MAIN_URL}planets/jupiter/jupiter-in-eighth-house.php`,},
                            { name: "Jupiter in 9th House", url: `${MAIN_URL}planets/jupiter/jupiter-in-ninth-house.php`,},
                            { name: "Jupiter in 10th House", url: `${MAIN_URL}planets/jupiter/jupiter-in-tenth-house.php`,},
                            { name: "Jupiter in 11th House", url: `${MAIN_URL}planets/jupiter/jupiter-in-eleventh-house.php`,},
                            { name: "Jupiter in 12th House", url: `${MAIN_URL}planets/jupiter/jupiter-in-twelfth-house.php`,},
                            { name: "Jupiter in Aries Sign", url: `${MAIN_URL}planets/jupiter/jupiter-in-aries.php`,},
                            { name: "Jupiter in Taurus Sign", url: `${MAIN_URL}planets/jupiter/jupiter-in-taurus.php`,},
                            { name: "Jupiter in Gemini Sign", url: `${MAIN_URL}planets/jupiter/jupiter-in-gemini.php`,},
                            { name: "Jupiter in Cancer Sign", url: `${MAIN_URL}planets/jupiter/jupiter-in-cancer.php`,},
                            { name: "Jupiter in Leo Sign", url: `${MAIN_URL}planets/jupiter/jupiter-in-leo.php`,},
                            { name: "Jupiter in Virgo Sign", url: `${MAIN_URL}planets/jupiter/jupiter-in-virgo.php`,},
                            { name: "Jupiter in Libra Sign", url: `${MAIN_URL}planets/jupiter/jupiter-in-libra.php`,},
                            { name: "Jupiter in Scorpio Sign", url: `${MAIN_URL}planets/jupiter/jupiter-in-scorpio.php`,},
                            { name: "Jupiter in Sagittarius Sign", url: `${MAIN_URL}planets/jupiter/jupiter-in-sagittarius.php`,},
                            { name: "Jupiter in Capricorn Sign", url: `${MAIN_URL}planets/jupiter/jupiter-in-capricorn.php`,},
                            { name: "Jupiter in Aquarius Sign", url: `${MAIN_URL}planets/jupiter/jupiter-in-aquarius.php`,},
                            { name: "Jupiter in Pisces Sign", url: `${MAIN_URL}planets/jupiter/jupiter-in-pisces.php`,},
                        ]
                    },
                    { name: "Venus in Different Houses & Signs", url: `${MAIN_URL}planets/venus.php`,
                        sublinksL3 :[
                            { name: "Venus in 1st House", url: `${MAIN_URL}planets/venus/venus-in-first-house.php`,},
                            { name: "Venus in 2nd House", url: `${MAIN_URL}planets/venus/venus-in-second-house.php`,},
                            { name: "Venus in 3rd House", url: `${MAIN_URL}planets/venus/venus-in-third-house.php`,},
                            { name: "Venus in 4th House", url: `${MAIN_URL}planets/venus/venus-in-fourth-house.php`,},
                            { name: "Venus in 5th House", url: `${MAIN_URL}planets/venus/venus-in-fifth-house.php`,},
                            { name: "Venus in 6th House", url: `${MAIN_URL}planets/venus/venus-in-sixth-house.php`,},
                            { name: "Venus in 7th House", url: `${MAIN_URL}planets/venus/venus-in-seventh-house.php`,},
                            { name: "Venus in 8th House", url: `${MAIN_URL}planets/venus/venus-in-eighth-house.php`,},
                            { name: "Venus in 9th House", url: `${MAIN_URL}planets/venus/venus-in-ninth-house.php`,},
                            { name: "Venus in 10th House", url: `${MAIN_URL}planets/venus/venus-in-tenth-house.php`,},
                            { name: "Venus in 11th House", url: `${MAIN_URL}planets/venus/venus-in-eleventh-house.php`,},
                            { name: "Venus in 12th House", url: `${MAIN_URL}planets/venus/venus-in-twelfth-house.php`,},
                            { name: "Venus in Aries Signs", url: `${MAIN_URL}planets/venus/venus-in-aries.php`,},
                            { name: "Venus in Taurus Signs", url: `${MAIN_URL}planets/venus/venus-in-taurus.php`,},
                            { name: "Venus in Gemini Signs", url: `${MAIN_URL}planets/venus/venus-in-gemini.php`,},
                            { name: "Venus in Cancer Signs", url: `${MAIN_URL}planets/venus/venus-in-cancer.php`,},
                            { name: "Venus in Leo Sign", url: `${MAIN_URL}planets/venus/venus-in-leo.php`,},
                            { name: "Venus in Virgo Sign", url: `${MAIN_URL}planets/venus/venus-in-virgo.php`,},
                            { name: "Venus in Libra Sign", url: `${MAIN_URL}planets/venus/venus-in-libra.php`,},
                            { name: "Venus in Scorpio Sign", url: `${MAIN_URL}planets/venus/venus-in-scorpio.php`,},
                            { name: "Venus in Sagittarius Sign", url: `${MAIN_URL}planets/venus/venus-in-sagittarius.php`,},
                            { name: "Venus in Capricorn Sign", url: `${MAIN_URL}planets/venus/venus-in-capricorn.php`,},
                            { name: "Venus in Aquarius Sign", url: `${MAIN_URL}planets/venus/venus-in-aquarius.php`,},
                            { name: "Venus in Pisces Sign", url: `${MAIN_URL}planets/venus/venus-in-pisces.php`,},
                            { name: "Venus Ketu and different houses", url: `${MAIN_URL}planets/venus/venus-ketu-and-different-houses.php`,},
                        ]
                    },
                    { name: "Mars in Different Houses & Signs", url: `${MAIN_URL}planets/mars.php`,
                        sublinksL3 :[
                            { name: "Mars in 1st House", url: `${MAIN_URL}planets/mars/mars-in-first-house.php`,},
                            { name: "Mars in 2nd House", url: `${MAIN_URL}planets/mars/mars-in-second-house.php`,},
                            { name: "Mars in 3rd House", url: `${MAIN_URL}planets/mars/mars-in-third-house.php`,},
                            { name: "Mars in 4th House", url: `${MAIN_URL}planets/mars/mars-in-fourth-house.php`,},
                            { name: "Mars in 5th House", url: `${MAIN_URL}planets/mars/mars-in-fifth-house.php`,},
                            { name: "Mars in 6th House", url: `${MAIN_URL}planets/mars/mars-in-sixth-house.php`,},
                            { name: "Mars in 7th House", url: `${MAIN_URL}planets/mars/mars-in-seventh-house.php`,},
                            { name: "Mars in 8th House", url: `${MAIN_URL}planets/mars/mars-in-eighth-house.php`,},
                            { name: "Mars in 9th House", url: `${MAIN_URL}planets/mars/mars-in-ninth-house.php`,},
                            { name: "Mars in 10th House", url: `${MAIN_URL}planets/mars/mars-in-tenth-house.php`,},
                            { name: "Mars in 11th House", url: `${MAIN_URL}planets/mars/mars-in-eleventh-house.php`,},
                            { name: "Mars in 12th House", url: `${MAIN_URL}planets/mars/mars-in-twelfth-house.php`,},
                            { name: "Mars in Aries Sign", url: `${MAIN_URL}planets/mars/mars-in-aries.php`,},
                            { name: "Mars in Taurus Sign", url: `${MAIN_URL}planets/mars/mars-in-taurus.php`,},
                            { name: "Mars in Gemini Sign", url: `${MAIN_URL}planets/mars/mars-in-gemini.php`,},
                            { name: "Mars in Cancer Sign", url: `${MAIN_URL}planets/mars/mars-in-cancer.php`,},
                            { name: "Mars in Leo Sign", url: `${MAIN_URL}planets/mars/mars-in-leo.php`,},
                            { name: "Mars in Virgo Sign", url: `${MAIN_URL}planets/mars/mars-in-virgo.php`,},
                            { name: "Mars in Libra Sign", url: `${MAIN_URL}planets/mars/mars-in-libra.php`,},
                            { name: "Mars in Scorpio Sign", url: `${MAIN_URL}planets/mars/mars-in-scorpio.php`,},
                            { name: "Mars in Sagittarius Sign", url: `${MAIN_URL}planets/mars/mars-in-sagittarius.php`,},
                            { name: "Mars in Capricorn Sign", url: `${MAIN_URL}planets/mars/mars-in-capricorn.php`,},
                            { name: "Mars in Aquarius Sign", url: `${MAIN_URL}planets/mars/mars-in-aquarius.php`,},
                            { name: "Mars in Pisces Sign", url: `${MAIN_URL}planets/mars/mars-in-pisces.php`,},
                        ]
                    },
                    { name: "Ketu in Different Houses & Signs", url: `${MAIN_URL}planets/ketu.php`,
                        sublinksL3 :[
                            { name: "Ketu in 1st House", url: `${MAIN_URL}planets/ketu/ketu-in-first-house.php`,},
                            { name: "Ketu in 2nd House", url: `${MAIN_URL}planets/ketu/ketu-in-second-house.php`,},
                            { name: "Ketu in 3rd House", url: `${MAIN_URL}planets/ketu/ketu-in-third-house.php`,},
                            { name: "Ketu in 4th House", url: `${MAIN_URL}planets/ketu/ketu-in-fourth-house.php`,},
                            { name: "Ketu in 5th House", url: `${MAIN_URL}planets/ketu/ketu-in-fifth-house.php`,},
                            { name: "Ketu in 6th House", url: `${MAIN_URL}planets/ketu/ketu-in-sixth-house.php`,},
                            { name: "Ketu in 7th House", url: `${MAIN_URL}planets/ketu/ketu-in-seventh-house.php`,},
                            { name: "Ketu in 8th House", url: `${MAIN_URL}planets/ketu/ketu-in-eighth-house.php`,},
                            { name: "Ketu in 9th House", url: `${MAIN_URL}planets/ketu/ketu-in-ninth-house.php`,},
                            { name: "Ketu in 10th House", url: `${MAIN_URL}planets/ketu/ketu-in-tenth-house.php`,},
                            { name: "Ketu in 11th House", url: `${MAIN_URL}planets/ketu/ketu-in-eleventh-house.php`,},
                            { name: "Ketu in 12th House", url: `${MAIN_URL}planets/ketu/ketu-in-twelfth-house.php`,},
                            { name: "Ketu in Aries Sign", url: `${MAIN_URL}planets/ketu/ketu-in-aries.php`,},
                            { name: "Ketu in Taurus Sign", url: `${MAIN_URL}planets/ketu/ketu-in-taurus.php`,},
                            { name: "Ketu in Gemini Sign", url: `${MAIN_URL}planets/ketu/ketu-in-gemini.php`,},
                            { name: "Ketu in Cancer Sign", url: `${MAIN_URL}planets/ketu/ketu-in-cancer.php`,},
                            { name: "Ketu in Leo Sign", url: `${MAIN_URL}planets/ketu/ketu-in-leo.php`,},
                            { name: "Ketu in Virgo Sign", url: `${MAIN_URL}planets/ketu/ketu-in-virgo.php`,},
                            { name: "Ketu in Libra Sign", url: `${MAIN_URL}planets/ketu/ketu-in-libra.php`,},
                            { name: "Ketu in Scorpio Sign", url: `${MAIN_URL}planets/ketu/ketu-in-scorpio.php`,},
                            { name: "Ketu in Sagittarius Sign", url: `${MAIN_URL}planets/ketu/ketu-in-sagittarius.php`,},
                            { name: "Ketu in Capricorn Sign", url: `${MAIN_URL}planets/ketu/ketu-in-capricorn.php`,},
                            { name: "Ketu in Aquarius Sign", url: `${MAIN_URL}planets/ketu/ketu-in-aquarius.php`,},
                            { name: "Ketu in Pisces Sign", url: `${MAIN_URL}planets/ketu/ketu-in-pisces.php`,},
                        ]
                    },
                    { name: "Saturn in Different Houses & Signs", url : `${MAIN_URL}planets/saturn.php`,
                        sublinksL3 :[
                            { name: "Saturn in 1st House", url: `${MAIN_URL}planets/saturn/saturn-in-first-house.php`,},
                            { name: "Saturn in 2nd House", url: `${MAIN_URL}planets/saturn/saturn-in-second-house.php`,},
                            { name: "Saturn in 3rd House", url: `${MAIN_URL}planets/saturn/saturn-in-third-house.php`,},
                            { name: "Saturn in 4th House", url: `${MAIN_URL}planets/saturn/saturn-in-fourth-house.php`,},
                            { name: "Saturn in 5th House", url: `${MAIN_URL}planets/saturn/saturn-in-fifth-house.php`,},
                            { name: "Saturn in 6th House", url: `${MAIN_URL}planets/saturn/saturn-in-sixth-house.php`,},
                            { name: "Saturn in 7th House", url: `${MAIN_URL}planets/saturn/saturn-in-seventh-house.php`,},
                            { name: "Saturn in 8th House", url: `${MAIN_URL}planets/saturn/saturn-in-eighth-house.php`,},
                            { name: "Saturn in 9th House", url: `${MAIN_URL}planets/saturn/saturn-in-ninth-house.php`,},
                            { name: "Saturn in 10th House", url: `${MAIN_URL}planets/saturn/saturn-in-tenth-house.php`,},
                            { name: "Saturn in 11th House", url: `${MAIN_URL}planets/saturn/saturn-in-eleventh-house.php`,},
                            { name: "Saturn in 12th House", url: `${MAIN_URL}planets/saturn/saturn-in-twelfth-house.php`,},
                            { name: "Saturn in Aries Sign", url: `${MAIN_URL}planets/saturn/saturn-in-aries.php`,},
                            { name: "Saturn in Taurus Sign", url: `${MAIN_URL}planets/saturn/saturn-in-taurus.php`,},
                            { name: "Saturn in Gemini Sign", url: `${MAIN_URL}planets/saturn/saturn-in-gemini.php`,},
                            { name: "Saturn in Cancer Sign", url: `${MAIN_URL}planets/saturn/saturn-in-cancer.php`,},
                            { name: "Saturn in Leo Sign", url: `${MAIN_URL}planets/saturn/saturn-in-leo.php`,},
                            { name: "Saturn in Virgo Sign", url: `${MAIN_URL}planets/saturn/saturn-in-virgo.php`,},
                            { name: "Saturn in Libra Sign", url: `${MAIN_URL}planets/saturn/saturn-in-libra.php`,},
                            { name: "Saturn in Scorpio Sign", url: `${MAIN_URL}planets/saturn/saturn-in-scorpio.php`,},
                            { name: "Saturn in Sagittarius Sign", url: `${MAIN_URL}planets/saturn/saturn-in-sagittarius.php`,},
                            { name: "Saturn in Capricorn Sign", url: `${MAIN_URL}planets/saturn/saturn-in-capricorn.php`,},
                            { name: "Saturn in Aquarius Sign", url: `${MAIN_URL}planets/saturn/saturn-in-aquarius.php`,},
                            { name: "Saturn in Pisces Sign", url: `${MAIN_URL}planets/saturn/saturn-in-pisces.php`,},
                        ]
                    },
                    { name: "Mercury in Different Houses & Signs", url: `${MAIN_URL}planets/mercury.php`,
                        sublinksL3 :[
                            { name: "Mercury in 1st House", url: `${MAIN_URL}planets/mercury/mercury-in-first-house.php`,},
                            { name: "Mercury in 2nd House", url: `${MAIN_URL}planets/mercury/mercury-in-second-house.php`,},
                            { name: "Mercury in 3rd House", url: `${MAIN_URL}planets/mercury/mercury-in-third-house.php`,},
                            { name: "Mercury in 4th House", url: `${MAIN_URL}planets/mercury/mercury-in-fourth-house.php`,},
                            { name: "Mercury in 5th House", url: `${MAIN_URL}planets/mercury/mercury-in-fifth-house.php`,},
                            { name: "Mercury in 6th House", url: `${MAIN_URL}planets/mercury/mercury-in-sixth-house.php`,},
                            { name: "Mercury in 7th House", url: `${MAIN_URL}planets/mercury/mercury-in-seventh-house.php`,},
                            { name: "Mercury in 8th House", url: `${MAIN_URL}planets/mercury/mercury-in-eighth-house.php`,},
                            { name: "Mercury in 9th House", url: `${MAIN_URL}planets/mercury/mercury-in-ninth-house.php`,},
                            { name: "Mercury in 10th House", url: `${MAIN_URL}planets/mercury/mercury-in-tenth-house.php`,},
                            { name: "Mercury in 11th House", url: `${MAIN_URL}planets/mercury/mercury-in-eleventh-house.php`,},
                            { name: "Mercury in 12th House", url: `${MAIN_URL}planets/mercury/mercury-in-twelfth-house.php`,},
                            { name: "Mercury in Aries", url: `${MAIN_URL}planets/mercury/mercury-in-aries.php`,},
                            { name: "Mercury in Taurus Sign", url: `${MAIN_URL}planets/mercury/mercury-in-taurus.php`,},
                            { name: "Mercury in Gemini Sign", url: `${MAIN_URL}planets/mercury/mercury-in-gemini.php`,},
                            { name: "Mercury in Cancer Sign", url: `${MAIN_URL}planets/mercury/mercury-in-cancer.php`,},
                            { name: "Mercury in Leo Sign", url: `${MAIN_URL}planets/mercury/mercury-in-leo.php`,},
                            { name: "Mercury in Virgo Sign", url: `${MAIN_URL}planets/mercury/mercury-in-virgo.php`,},
                            { name: "Mercury in Libra Sign", url: `${MAIN_URL}planets/mercury/mercury-in-libra.php`,},
                            { name: "Mercury in Scorpio Sign", url: `${MAIN_URL}planets/mercury/mercury-in-scorpio.php`,},
                            { name: "Mercury in Sagittarius Sign", url: `${MAIN_URL}planets/mercury/mercury-in-sagittarius.php`,},
                            { name: "Mercury in Capricorn Sign", url: `${MAIN_URL}planets/mercury/mercury-in-capricorn.php`,},
                            { name: "Mercury in Aquarius", url: `${MAIN_URL}planets/mercury/mercury-in-aquarius.php`,},
                            { name: "Mercury in Pisces Sign", url: `${MAIN_URL}planets/mercury/mercury-in-pisces.php`,},
                        ]
                    },
                    { name: "Rahu in Different Houses & Signs", url: `${MAIN_URL}planets/rahu.php`,
                        sublinksL3 :[
                            { name: "Rahu in 1st House", url: `${MAIN_URL}planets/rahu/rahu-in-first-house.php`,},
                            { name: "Rahu in 2nd House", url: `${MAIN_URL}planets/rahu/rahu-in-second-house.php`,},
                            { name: "Rahu in 3rd House", url: `${MAIN_URL}planets/rahu/rahu-in-third-house.php`,},
                            { name: "Rahu in 4th House", url: `${MAIN_URL}planets/rahu/rahu-in-fourth-house.php`,},
                            { name: "Rahu in 5th House", url: `${MAIN_URL}planets/rahu/rahu-in-fifth-house.php`,},
                            { name: "Rahu in 6th House", url: `${MAIN_URL}planets/rahu/rahu-in-sixth-house.php`,},
                            { name: "Rahu in 7th House", url: `${MAIN_URL}planets/rahu/rahu-in-seventh-house.php`,},
                            { name: "Rahu in 8th House", url: `${MAIN_URL}planets/rahu/rahu-in-eighth-house.php`,},
                            { name: "Rahu in 9th House", url: `${MAIN_URL}planets/rahu/rahu-in-ninth-house.php`,},
                            { name: "Rahu in 10th House", url: `${MAIN_URL}planets/rahu/rahu-in-tenth-house.php`,},
                            { name: "Rahu in 11th House", url: `${MAIN_URL}planets/rahu/rahu-in-eleventh-house.php`,},
                            { name: "Rahu in 12th House", url: `${MAIN_URL}planets/rahu/rahu-in-twelfth-house.php`,},
                            { name: "Rahu in Aries", url: `${MAIN_URL}planets/rahu/rahu-in-aries.php`,},
                            { name: "Rahu in Taurus", url: `${MAIN_URL}planets/rahu/rahu-in-taurus.php`,},
                            { name: "Rahu in Gemini", url: `${MAIN_URL}planets/rahu/rahu-in-gemini.php`,},
                            { name: "Rahu in Cancer", url: `${MAIN_URL}planets/rahu/rahu-in-cancer.php`,},
                            { name: "Rahu in Leo", url: `${MAIN_URL}planets/rahu/rahu-in-leo.php`,},
                            { name: "Rahu in Virgo", url: `${MAIN_URL}planets/rahu/rahu-in-virgo.php`,},
                            { name: "Rahu in Libra", url: `${MAIN_URL}planets/rahu/rahu-in-libra.php`,},
                            { name: "Rahu in Scorpio", url: `${MAIN_URL}planets/rahu/rahu-in-scorpio.php`,},
                            { name: "Rahu in Sagittarius", url: `${MAIN_URL}planets/rahu/rahu-in-sagittarius.php`,},
                            { name: "Rahu in Capricorn", url: `${MAIN_URL}planets/rahu/rahu-in-capricorn.php`,},
                            { name: "Rahu in Aquarius", url: `${MAIN_URL}planets/rahu/rahu-in-aquarius.php`,},
                            { name: "Rahu in Pisces", url: `${MAIN_URL}planets/rahu/rahu-in-pisces.php`,},
                        ]
                    }
                ]
            },
            { name: "Astrology Houses", url: `${MAIN_URL}astrology-houses.php`,
                sublinksL2: [
                    { name: "1st House Astrology", url : `${MAIN_URL}astrology-houses/first-house.php`,},
                    { name: "2nd House Astrology", url : `${MAIN_URL}astrology-houses/second-house.php`,},
                    { name: "3rd House Astrology", url : `${MAIN_URL}astrology-houses/third-house.php`,},
                    { name: "4th House Astrology", url : `${MAIN_URL}astrology-houses/fourth-house.php`,},
                    { name: "5th House Astrology", url : `${MAIN_URL}astrology-houses/fifth-house.php`,},
                    { name: "6th House Astrology", url : `${MAIN_URL}astrology-houses/sixth-house.php`,},
                    { name: "7th House Astrology", url : `${MAIN_URL}astrology-houses/seventh-house.php`,},
                    { name: "8th House Astrology", url : `${MAIN_URL}astrology-houses/eighth-house.php`,},
                    { name: "9th House Astrology", url : `${MAIN_URL}astrology-houses/ninth-house.php`,},
                    { name: "10th House Astrology", url : `${MAIN_URL}astrology-houses/tenth-house.php`,},
                    { name: "11th House Astrology", url : `${MAIN_URL}astrology-houses/eleventh-house.php`,},
                    { name: "12th House Astrology", url : `${MAIN_URL}astrology-houses/twelfth-house.php`, },
                ]
            },
            { name: "Astrology Remedies", url: `${MAIN_URL}astrology-remedies.php`,
                sublinksL2 :[
                    { name: "Vedic Remedies", url: `${MAIN_URL}astrology-remedies/vedic-remedies.php`,
                        sublinksL3 : [
                            { name : "Astrology tips for better child life", url : `${MAIN_URL}astrology-remedies/vedic-remedies/astrology-tips-for-better-child-life.php`,},
                            { name : "Astrology tips for better financial life", url : `${MAIN_URL}astrology-remedies/vedic-remedies/astrology-tips-for-better-financial-life.php`,},
                            { name : "Astrology tips to please planets", url : `${MAIN_URL}astrology-remedies/vedic-remedies/astrology-tips-to-please-planet.php`,},
                            { name : "Astrology tips for better relationship", url : `${MAIN_URL}astrology-remedies/vedic-remedies/astrology-tips-for-better-relationship.php`,},
                            { name : "Astrology for happy married life", url : `${MAIN_URL}astrology-remedies/vedic-remedies/astrology-tips-for-good-married-life.php`,},
                            { name : "Feng Shui Tips to Bring Good Fortune", url : `${MAIN_URL}astrology-remedies/vedic-remedies/feng-shui-tips-to-bring-good-fortune.php` }
                        ]
                    },
                    { name: "Vedic Totke", url : `${MAIN_URL}astrology-remedies/vedic-totke.php`,
                        sublinksL3 : [
                            { name : "Astrology for home and family peace", url : `${MAIN_URL}astrology-remedies/vedic-totke/astrology-for-home-and-family-peace.php`,},
                            { name : "How to pacify planets in birth chart", url : `${MAIN_URL}astrology-remedies/vedic-totke/how-to-pacify-planets-in-birth-chart.php`,},
                            { name : "Astrology Way to Fulfill Wishes", url : `${MAIN_URL}astrology-remedies/vedic-totke/astrology-way-to-fulfill-wishes.php`,},
                            { name : "Can astrology guide to prevent diseases", url : `${MAIN_URL}astrology-remedies/vedic-totke/astrology-tips-for-better-health.php` }
                        ]
                    }
                ]
            },
            { name: "Astrology Dasha", url : `${MAIN_URL}dasha.php`,
                sublinksL2 :[
                    { name: "Venus Mahadasha", url: `${MAIN_URL}dasha/venus-mahadasha.php`,},
                    { name: "Mars Mahadasha", url: `${MAIN_URL}dasha/mars-mahadasha.php`,},
                    { name: "Sun Mahadasha", url: `${MAIN_URL}dasha/sun-mahadasha.php`,},
                    { name: "Moon Mahadasha", url: `${MAIN_URL}dasha/moon-mahadasha.php`,},
                    { name: "Rahu Mahadasha", url: `${MAIN_URL}dasha/rahu-mahadasha.php`,},
                    { name: "Jupiter Mahadasha", url: `${MAIN_URL}dasha/jupiter-mahadasha.php`,},
                    { name: "Ketu Mahadasha", url: `${MAIN_URL}dasha/ketu-mahadasha.php`,},
                    { name: "Saturn Mahadasha", url: `${MAIN_URL}dasha/saturn-mahadasha.php`,},
                    { name: "Mercury Mahadasha", url: `${MAIN_URL}dasha/mercury-mahadasha.php`,},
                    { name: "Vimshottari Dasha", url: `${MAIN_URL}dasha/vimsottari-dasha.php`, }
                ]
            },
            { name: "Astrology Yoga", url : `${MAIN_URL}yoga.php`,
                sublinksL2 :[
                    { name: "Amsavatara Yoga", url: `${MAIN_URL}yoga/amsavatara-yoga.php`,},
                    { name: "Gajkesari Yoga", url: `${MAIN_URL}yoga/gajkesari-yog.php`,},
                    { name: "Ruchaka Yoga", url: `${MAIN_URL}yoga/ruchaka-yoga.php`,},
                    { name: "Bhadra Yoga", url: `${MAIN_URL}yoga/bhadra-yoga.php`,},
                    { name: "Hamsa Yoga", url: `${MAIN_URL}yoga/hamsa-yoga.php`,},
                    { name: "Malavya Yoga in Astrology", url: `${MAIN_URL}yoga/malavya-yoga.php`,},
                    { name: "Shasha Yoga", url: `${MAIN_URL}yoga/sasa-yoga.php`,},
                    { name: "Lagnadhi Yoga", url: `${MAIN_URL}yoga/lagnadhi-yoga.php`,},
                    { name: "Sunapha Yoga", url: `${MAIN_URL}yoga/sunapha-yoga.php`,},
                    { name: "Anapha Yoga", url: `${MAIN_URL}yoga/anapha-yoga.php`,},
                    { name: "Durdhara Yoga", url: `${MAIN_URL}yoga/durudhara-yoga.php`,},
                    { name: "Brahma Yoga", url: `${MAIN_URL}yoga/brahma-yoga.php`,},
                    { name: "Pushkala Yoga", url: `${MAIN_URL}yoga/pushkala-yoga.php`,},
                    { name: "Maha Bhagya Yoga", url: `${MAIN_URL}yoga/mahabhagya-yoga.php`,},
                    { name: "Gauri Yoga", url: `${MAIN_URL}yoga/gauri-yoga.php`,},
                    { name: "Saraswati Yoga", url: `${MAIN_URL}yoga/saraswati-yoga.php`,},
                    { name: "Devendra Yoga", url: `${MAIN_URL}yoga/devendra-yoga.php`,},
                    { name: "Mukuta Yoga", url: `${MAIN_URL}yoga/mukuta-yoga.php`,},
                    { name: "Jaya Yoga", url: `${MAIN_URL}yoga/jaya-yoga.php`,},
                    { name: "Vidyut Yoga", url: `${MAIN_URL}yoga/vidyut-yoga.php`,},
                    { name: "Chandika Yoga", url: `${MAIN_URL}yoga/chandika-yoga.php`,},
                    { name: "Gandharva Yoga", url: `${MAIN_URL}yoga/gandharva-yoga.php`,},
                    { name: "Vishnu Yoga", url: `${MAIN_URL}yoga/vishnu-yoga.php`,},
                    { name: "Shiva Yoga", url: `${MAIN_URL}yoga/shiva-yoga.php`,},
                    { name: "Chandra Mangala Yoga", url: `${MAIN_URL}yoga/chandra-mangala-yoga.php`,},
                    { name: "Chapa Yoga", url: `${MAIN_URL}yoga/chapa-yoga.php`,},
                    { name: "Nabhi Yoga", url: `${MAIN_URL}yoga/nabhi-yoga.php`,},
                    { name: "Dhwaja Yoga", url: `${MAIN_URL}yoga/dhwaja-yoga.php`,},
                    { name: "Gola Yoga", url: `${MAIN_URL}yoga/gola-yoga.php`,},
                    { name: "Go Yoga", url: `${MAIN_URL}yoga/go-yoga.php`,},
                    { name: "Ravi Yoga", url: `${MAIN_URL}yoga/ravi-yoga.php`,},
                    { name: "Garuda Yoga", url: `${MAIN_URL}yoga/garuda-yoga.php`,},
                    { name: "Shubha Yoga", url: `${MAIN_URL}yoga/shubha-yoga.php`,},
                    { name: "Trilochana Yoga", url: `${MAIN_URL}yoga/trilochana-yoga.php`,},
                    { name: "Vajra Yoga", url: `${MAIN_URL}yoga/vajra-yoga.php`,},
                    { name: "Yuga Yoga", url: `${MAIN_URL}yoga/yuga-yoga.php`,},
                    { name: "Vasarpati Yoga", url: `${MAIN_URL}yoga/vasarpati-yoga.php`,},
                    { name: "Naga Yoga", url: `${MAIN_URL}yoga/naga-yoga.php`,},
                    { name: "Padma Yoga", url: `${MAIN_URL}yoga/padma-yoga.php`,},
                    { name: "Musala Yoga", url: `${MAIN_URL}yoga/musala-yoga.php`,},
                    { name: "Anguli Yoga", url: `${MAIN_URL}yoga/anguli-yoga.php`,},
                    { name: "Lavanya Yoga", url: `${MAIN_URL}yoga/lavanya-yoga.php`,},
                    { name: "Harsha Yoga", url: `${MAIN_URL}yoga/harsha-yoga.php`,},
                    { name: "Sarala Yoga", url: `${MAIN_URL}yoga/sarala-yoga.php`,},
                    { name: "Vimala Yoga", url: `${MAIN_URL}yoga/vimala-yoga.php`,},
                    { name: "Chaturmukh Yoga", url: `${MAIN_URL}yoga/chaturmukha-yoga.php`,},
                    { name: "Kundala Yoga", url: `${MAIN_URL}yoga/kundala-yoga.php`,},
                    { name: "Mangala Madhya Kleeba Yoga", url: `${MAIN_URL}yoga/mangala-madhya-kleeba-yoga.php`,},
                    { name: "Chanda Yoga", url: `${MAIN_URL}yoga/chanda-yoga.php`,},
                    { name: "Sukha Yoga", url: `${MAIN_URL}yoga/sukha-yoga.php`,},
                    { name: "Vesi Yoga", url: `${MAIN_URL}yoga/vesi-yoga.php`,},
                    { name: "Vasi Yoga", url: `${MAIN_URL}yoga/vasi-yoga.php`,},
                    { name: "Ubhayachari Yoga", url: `${MAIN_URL}yoga/ubhayachari-yoga.php`,},
                    { name: "Amala Yoga", url: `${MAIN_URL}yoga/amala-yoga.php`,},
                    { name: "Bhaskara Yoga", url: `${MAIN_URL}yoga/bhaskara-yoga.php`,},
                    { name: "Marut Yoga", url: `${MAIN_URL}yoga/marut-yoga.php`,},
                    { name: "Parijat Yoga", url: `${MAIN_URL}yoga/parijata-yoga.php`,},
                    { name: "Lakshmi Yoga", url: `${MAIN_URL}yoga/lakshmi-yoga.php`,},
                    { name: "Malika Yoga", url: `${MAIN_URL}yoga/malika-yoga.php`,},
                    { name: "Chamara Yoga", url: `${MAIN_URL}yoga/chamara-yoga.php`,},
                    { name: "Srikantha Yoga", url: `${MAIN_URL}yoga/srikantha-yoga.php`,},
                    { name: "Srinatha Yoga", url: `${MAIN_URL}yoga/srinatha-yoga.php`,},
                    { name: "Shakata Yoga", url: `${MAIN_URL}yoga/sakata-yoga.php`,},
                    { name: "Budha Yoga", url: `${MAIN_URL}yoga/budha-yoga.php`,},
                    { name: "Indra Yoga", url: `${MAIN_URL}yoga/indra-yoga.php`,},
                    { name: "Parvata Yoga", url: `${MAIN_URL}yoga/parvata-yoga.php`, }
                ]
            },
            { name: "Vrat Dates", url : `${MAIN_URL}vrat.php`,
                sublinksL2 :[
                    { name: "Ekadashi 2024", url: `${MAIN_URL}vrat/ekadashi.php`,
                        sublinksL3 : [
                        { name: "Saphala Ekadashi 2024", url: `${MAIN_URL}vrat/ekadashi/saphala-ekadashi.php`, },
                        { name: "Putrada Ekadashi 2024", url: `${MAIN_URL}vrat/ekadashi/putrada-ekadashi.php`, }
                        ]
                    },
                    { name: "Purnima 2024 Dates", url: `${MAIN_URL}vrat/purnima.php`,
                        sublinksL3 : [
                        { name: "Paush Prunima 2024", url: `${MAIN_URL}vrat/purnima/paush-purnima.php`, }
                        ]
                    },
                    { name: "Amavasya Vrat Date", url: `${MAIN_URL}vrat/amavasya.php`,
                        sublinksL3 : [
                        { name: "Paush Amavasya", url: `${MAIN_URL}vrat/amavasya/pausha-amavasya.php`, }
                        ]
                    },
                    { name: "Pradosh 2024 Dates", url: `${MAIN_URL}vrat/pradosh.php`,},
                    { name: "Weekly Fast", url: `${MAIN_URL}vrat/weekly-fast.php`, }
                ]
            },
            { name: "Hindu Rituals", url : `${MAIN_URL}hindu-rituals.php`,
                sublinksL2 :[
                    { name: "Importance of Aarti", url: `${MAIN_URL}hindu-rituals/why-do-we-perform-aarti.php`,},
                    { name: "Why is Mundan Sanskar done?", url: `${MAIN_URL}hindu-rituals/mundan.php`,},
                    { name: "What is the importance of wearing Pitambari clothes?", url: `${MAIN_URL}hindu-rituals/importance-of-pitambar-in-hindu-rituals.php`,},
                    { name: "Why Annaprashan is important?", url: `${MAIN_URL}hindu-rituals/why-annaprashan-ceremony-is-important.php`,},
                    { name: "Why Shraddh in Ashwin?", url: `${MAIN_URL}hindu-rituals/why-shradh-is-observed-in-ashwin.php`,},
                    { name: "Vedic benefits of fasting", url: `${MAIN_URL}hindu-rituals/why-do-people-keep-fast.php`,},
                    { name: "Why do we do abhishekam to Shiva?", url: `${MAIN_URL}hindu-rituals/why-do-we-perform-abhishekam-to-god.php`,},
                    { name: "Reason - Not to perform funeral rites for one year of a missing person", url: `${MAIN_URL}hindu-rituals/funeral-rites-for-missing-or-accidental-death.php`,},
                    { name: "Why are various incarnations of the God on earth?", url: `${MAIN_URL}hindu-rituals/why-did-the-god-take-various-incarnations.php`,},
                    { name: "Adhikmas or Malmas", url: `${MAIN_URL}hindu-rituals/adhikmas-or-malmas.php`,},
                    { name: "Grace Of God", url: `${MAIN_URL}hindu-rituals/grace-of-god.php`,},
                    { name: "Aachman", url: `${MAIN_URL}hindu-rituals/aachman.php`,},
                    { name: "Kapaal Kriya", url: `${MAIN_URL}hindu-rituals/kapaal-kriya-during-funeral.php`,},
                    { name: "Establishment of the Kalash", url: `${MAIN_URL}hindu-rituals/why-and-when-do-we-use-kalash.php`,},
                    { name: "Gangajal", url: `${MAIN_URL}hindu-rituals/importance-of-gangajal.php`,},
                    { name: "Importance of Naming ceremony", url: `${MAIN_URL}hindu-rituals/importance-of-naming-ceremony.php`, }
                ]
            },
            { name: "Jayanti", url : `${MAIN_URL}jayanti.php`,
                sublinksL2 :[
                    { name : "Hanuman Jayanti", url : `${MAIN_URL}jayanti/hanuman-jayanti.php`,}
                ]
            },
            { name: "Muhurata", url : `${MAIN_URL}shubh-muhurat.php`,}
        ]
    },
    { name: 'Life Problems', url: '#',
    sublinks: [
        {name: "Marriage Astrology", url: `${MAIN_URL}marriage-astrology` ,
            sublinksL2: [
                { name: "Future Life Partner Prediction", url: `${MAIN_URL}marriage-astrology/life-partners-predictions.php`, },
                { name: "Love Marriage", url: `${MAIN_URL}marriage-astrology/love-marriage.php`, },
                { name: "Delay in Marriage Reasons", url: `${MAIN_URL}marriage-astrology/delay-in-marriage-reasons-solutions.php`, },
                { name: "Mangal Dosha Effects and Remedies", url: `${MAIN_URL}marriage-astrology/manglik-mangal-dosha-remedies.php`, },
                { name: "Horoscope Matching for Marriage", url: `${MAIN_URL}marriage-astrology/kundli-matching-horoscopes-matching-for-marriage.php`, },
                { name: "Pre Marriage Counselling", url: `${MAIN_URL}marriage-astrology/pre-marriage-counseling.php`, },
                { name: "Problems in Married Life", url: `${MAIN_URL}marriage-astrology/marriage-life-problems-reasons.php`, },
                { name: "Post Marriage Counseling", url: `${MAIN_URL}marriage-astrology/post-marriage-counseling.php`, },
                { name: "Divorce and Separation", url: `${MAIN_URL}marriage-astrology/divorce.php` , }
            ]
        },
        {
            name: "Business Astrology",
            url: `${MAIN_URL}business-astrology.php`,
            sublinksL2: [
                { name: "New Business Ideas", url: `${MAIN_URL}business-astrology/new-business-ideas.php`, },
                { name: "Business Selection as per date of birth", url: `${MAIN_URL}business-astrology/right-business-selection.php`, },
                { name: "Business Name Astrology", url: `${MAIN_URL}business-astrology/business-name-suggestions.php`, },
                { name: "Selection of business partnership", url: `${MAIN_URL}business-astrology/business-partnership.php`, },
                { name: "Tips for Business Expansion", url: `${MAIN_URL}business-astrology/business-growth.php`, },
                { name: "Success In Business", url: `${MAIN_URL}business-astrology/success-in-business.php`, },
                { name: "Parental and Family-Owned Business as per birth chart", url: `${MAIN_URL}business-astrology/family-owned-parental-business.php`, }
            ]
        },
        {
            name: "Career Astrology",
            url: `${MAIN_URL}career-astrology.php`,
            sublinksL2: [
                { name: "Subject Selection per Birth Chart", url: `${MAIN_URL}career-astrology/courses-after-10-and-12.php`, },
                { name: "Career as per your Zodiac Sign", url: `${MAIN_URL}career-astrology/right-career-selection.php`, },
                { name: "What to Do: Job or Business", url: `${MAIN_URL}career-astrology/job-or-business.php`, },
                { name: "Govt. Job predictions", url: `${MAIN_URL}career-astrology/government-job.php`, },
                { name: "Job Issues or No Job in Birth Chart", url: `${MAIN_URL}career-astrology/unemployment-problem-solution.php`, },
                { name: "Change & Promotion in Jobs", url: `${MAIN_URL}career-astrology/job-promotion.php`, }
            ]
        },
        {
            name: "Court / Legal issues",
            url: `${MAIN_URL}court-case-astrology`,
            sublinksL2: [
                { name: "Bandhan Yoga", url: `${MAIN_URL}court-cases/bandhan-yoga.php`, }
            ]
        },
        {
            name: "Property astrology",
            url: `${MAIN_URL}property.php`,
            sublinksL2: [
                { name: "Astrological Solutions for Property Disputes in Horoscope", url: `${MAIN_URL}property/property-disputes.php`, },
                { name: "Ancestral and Parental Property in your Birth Chart", url: `${MAIN_URL}property/ancestral-property.php`, },
                // { name: "Buying Selling Property per birth chart", url: `${MAIN_URL}property.php`, },
                { name: "Predictions for own House", url: `${MAIN_URL}property/property-yoga.php`, }
            ]
        },
        {
            name: "Health Astrology",
            url: `${MAIN_URL}health-astrology.php`,
            sublinksL2: [
                { name: "Timings of Disease in birth chart", url: `${MAIN_URL}health-astrology/planets-and-diseases-in-astrology.php`, },
                // { name: "Medical Astrology & Severe Health Issues", url: `${MAIN_URL}health-astrology.php`, },
                { name: "Drug Addiction and Alcoholism indications in the birth chart", url: `${MAIN_URL}health-astrology/drug-addiction.php`, },
                { name: "Specific Diseases in birth chart", url: `${MAIN_URL}health-astrology/diseases-caused.php`, },
                { name: "Sex Health, Desires and Habits", url: `${MAIN_URL}health-astrology/sexual-health.php`, },
                { name: "Your Life Span - Longevity Reading", url: `${MAIN_URL}health-astrology/longevity-calculator.php`, }
            ]
        },
        { name: "Loan and Debt", url: `${MAIN_URL}loan-and-debts.php`, },
        { name: "Betting and Gambling", url: `${MAIN_URL}astrology-for-betting.php`, },
        {
            name: "Foreign Settlement", url: `${MAIN_URL}foreign-settlement.php`,
            sublinksL2: [
                { name: "Deportation and Immigration issues", url: `${MAIN_URL}foreign-travel/deportation-issues.php` , }
            ]
        },
        {
            name: "Past Life Readings", url: `${MAIN_URL}life-predictions.php`,
            sublinksL2: [
                { name: "Life events: Detailed life predictions", url: `${MAIN_URL}life-predictions/life-event-prediction.php`, },
                { name: "Law of Karma and Karma Correction", url: `${MAIN_URL}life-predictions/karma-correction.php` , }
            ]
        },
        {
            name: "Birth Time Correction", url: `${MAIN_URL}time-rectification.php` ,
            sublinksL2: [
                { name: "Birth Time Rectification with Ascendant", url: `${MAIN_URL}time-rectification/birth-time-rectification-with-ascendant.php` , }
            ]
        },
        {
            name: "Children Astrology", url: `${MAIN_URL}children-astrology.php` ,
            sublinksL2: [
                { name: "Best time of conceiving a child", url: `${MAIN_URL}children-astrology/best-time-to-conceive-a-baby.php`, },
                { name: "Baby Naming: A Guide to Choose Perfect Baby Name", url: `${MAIN_URL}children-astrology/baby-naming.php`, },
                { name: "IVF Baby and Pregnancy Astrology Guide", url: `${MAIN_URL}children-astrology/ivf-pregnancy.php`, },
                { name: "Child Adoption in my birth chart", url: `${MAIN_URL}children-astrology/child-adoption.php`, },
                { name: "Parent Child Relationship and Its Influencing Factors", url: `${MAIN_URL}children-astrology/parent-child-relationship.php` , }
            ]
        },
        {
            name: "What is Vastu - All about Vastu", url: `${MAIN_URL}vastu.php` ,
            sublinksL2: [
                { name: "Vastu tips for Home", url: `${MAIN_URL}vastu/vastu-for-home.php`, },
                { name: "Pooja Room Vastu Tips", url: `${MAIN_URL}vastu/pooja-room-vastu.php`, },
                { name: "Vastu tips for Bedroom", url: `${MAIN_URL}vastu/vastu-for-bedroom.php`, },
                { name: "Vastu tips for Study Room", url: `${MAIN_URL}vastu/study-room-vastu.php`, },
                { name: "Vastu for Kitchen", url: `${MAIN_URL}vastu/vastu-for-kitchen.php`, },
                { name: "Vastu tips for Toilet", url: `${MAIN_URL}vastu/vastu-for-toilet.php`, },
                { name: "Vastu tips for Living Room", url: `${MAIN_URL}vastu/living-room-vastu.php`, },
                { name: "Vastu for main entrance", url: `${MAIN_URL}vastu/main-door-vastu.php`, },
                { name: "Guest Room Vastu Tips", url: `${MAIN_URL}vastu/vastu-for-guest-room.php`, },
                { name: "Overhead Water Tank Vastu", url: `${MAIN_URL}vastu/overhead-tank-vastu.php`, },
                { name: "Vastu for Car Parking & Garage", url: `${MAIN_URL}vastu/car-parking-garage-vastu.php`, },
                { name: "East Facing House Vastu", url: `${MAIN_URL}vastu/east-facing-house-vastu.php`, },
                { name: "Vastu for Septic Tank", url: `${MAIN_URL}vastu/vastu-for-septic-tank.php`, },
                { name: "Vastu for Staircase", url: `${MAIN_URL}vastu/staircase-vastu.php`, },
                { name: "South Facing House Vastu", url: `${MAIN_URL}vastu/south-facing-house-vastu.php` , }
            ]
        },
        {
            name: "Vastu For Commercial", url: `${MAIN_URL}vastu-for-commercial.php` ,
            sublinksL2: [
                { name: "Vastu for Factory", url: `${MAIN_URL}vastu-for-commercial/factory-vastu.php`, },
                { name: "Vastu for a Shop/Showroom", url: `${MAIN_URL}vastu-for-commercial/vastu-for-shops-and-showroom.php`, },
                { name: "Vastu For Office", url: `${MAIN_URL}vastu-for-commercial/office-vastu.php`, },
                { name: "Vastu For Plots", url: `${MAIN_URL}vastu-for-commercial/vastu-for-plots.php`, },
                { name: "Vastu For Hospital", url: `${MAIN_URL}vastu-for-commercial/vastu-for-hospital.php`, },
                { name: "Vastu Tips for School", url: `${MAIN_URL}vastu-for-commercial/vastu-for-school.php`, },
                { name: "Vastu for Flats and Apartments", url: `${MAIN_URL}vastu-for-commercial/vastu-for-flats-apartments.php`, },
                { name: "Vastu for Shopping Mall", url: `${MAIN_URL}vastu-for-commercial/vastu-for-mall.php` , }
            ]
        },
        { name: "Share Market Astrology", url: `${MAIN_URL}share-market-astrology.php` , }
    ]

    },
    {
        name: 'Calculators', url: `${MAIN_URL}calculator.php`,
    },
    {
        name: 'Kundli', url: '#',
        sublinks: [
            { name: "Kundli", url: `${MAIN_URL}kundli.php`,},
            { name: "Kundli Matching", url: `${MAIN_URL}kundli-matching`,},
            { name: "How to read kundli", url: `${MAIN_URL}kundli/how-to-read-kundli.php`, },
        ]
    },
    { 
        name: 'Services', url: `${MAIN_URL}services.php`, 
    },
    { name: 'Bajrangi Dhaam', url: '#',
        sublinks: [
            { name: "About Us", url: `${MAIN_URL}about-us.php`,},
            { name: "Contact Us", url: `${MAIN_URL}contact-us.php`,},
            { name: "Why you choose us?", url: `${MAIN_URL}how-to-judge-a-good-astrologer.php`,},
            { name: "Upcoming Visits", url: `${MAIN_URL}dr-vinay-bajrangi-will-be-in-mumbai.php`,},
            { name: "Karma Astro Mobile App", url: `${MAIN_URL}apps/karma-astro-app.php`, },
        ]
    },
    { name: "Blogs", url: `${MAIN_URL}blog/`, },
  ];

  export const PopularReportsContent = [
      {
        title: "Get most accurate result on Manglik Dosh ",
        link: `${MAIN_URL}services/online-report/mangal-dosha-calculator.php`,
        
    },
    {
        title: "Will You Qualify in UPSC Exam in 2024? ",
        link: `${MAIN_URL}services/online-report/future-life-partner.php`,
      },
    ]
