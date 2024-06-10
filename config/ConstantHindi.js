import {MAIN_URL} from '../config/config'
export const MainMenuHindi = [
    { name: 'मुख्य पृष्ठ', url : `${MAIN_URL}hindi`},
    { name: 'राशिफल', url : '#', 
        sublinks: [
            { name: 'राशिफल', url : `${MAIN_URL}horoscope/horoscope.php`,  },
            { name: 'दैनिक भविष्यफल', url : `${MAIN_URL}horoscope/daily-horoscope.php`,},
            { name: 'साप्ताहिक राशिफल', url : `${MAIN_URL}horoscope/weekly-horoscope.php`,},
            { name: 'मासिक राशिफल', url : `${MAIN_URL}horoscope/monthly-horoscope.php`,},
            { name: 'वार्षिक राशिफल', url : `${MAIN_URL}horoscope/yearly-horoscope.php`,},
            { name: 'वार्षिक राशिफल  2025', url : `${MAIN_URL}horoscope/horoscope-prediction-2025.php`,
                sublinksL2: [
                    { name: 'वार्षिक राशिफल 2025', url : `${MAIN_URL}horoscope/horoscope-prediction-2025.php`,},
                    { name: 'वार्षिक राशिफल 2025', url : `${MAIN_URL}horoscope/aries-horoscope-2025.php`,},
                    { name: 'वृषभ राशि वार्षिक राशिफल 2025', url : `${MAIN_URL}horoscope/taurus-horoscope-2025.php`,},
                    { name: 'मिथुन वार्षिक राशिफल 2025', url : `${MAIN_URL}horoscope/gemini-horoscope-2025.php`,},
                    { name: 'कर्क वार्षिक राशिफल 2025', url : `${MAIN_URL}horoscope/cancer-horoscope-2025.php`,},
                    { name: 'सिंह वार्षिक राशिफल 2025', url : `${MAIN_URL}horoscope/leo-horoscope-2025.php`,},
                    { name: 'कन्या वार्षिक राशिफल 2025', url : `${MAIN_URL}horoscope/virgo-horoscope-2025.php`,},
                    { name: 'तुला वार्षिक राशिफल 2025', url : `${MAIN_URL}horoscope/libra-horoscope-2025.php`,},
                    { name: 'वृश्चिक वार्षिक राशिफल 2025', url : `${MAIN_URL}horoscope/scorpio-horoscope-2025.php`,},
                    { name: 'धनु वार्षिक राशिफल 2025', url : `${MAIN_URL}horoscope/sagittarius-horoscope-2025.php`,},
                    { name: 'मकर वार्षिक राशिफल 2025', url : `${MAIN_URL}horoscope/capricorn-horoscope-2025.php`,},
                    { name: 'कुंभ वार्षिक राशिफल 2025', url : `${MAIN_URL}horoscope/aquarius-horoscope-2025.php`,},
                    { name: 'मीन वार्षिक राशिफल 2025', url : `${MAIN_URL}horoscope/pisces-horoscope-2025.php`,}
                ]
            }
        ]
    },
    { name: 'राशिफल 2024', url : '#',
        sublinks: [
            { name: 'वार्षिक राशिफल 2024', url : `${MAIN_URL}horoscope/horoscope-2024.php`,},
            { name: 'मेष राशि वार्षिक राशिफल 2024', url : `${MAIN_URL}horoscope/aries-horoscope-2024.php`,},
            { name: 'वृषभ राशि वार्षिक राशिफल 2024', url : `${MAIN_URL}horoscope/taurus-horoscope-2024.php`,},
            { name: 'मिथुन राशि वार्षिक राशिफल 2024', url : `${MAIN_URL}horoscope/gemini-horoscope-2024.php`,},
            { name: 'कर्क राशि वार्षिक राशिफल 2024', url : `${MAIN_URL}horoscope/cancer-horoscope-2024.php`,},
            { name: 'सिंह राशि वार्षिक राशिफल 2024', url : `${MAIN_URL}horoscope/leo-horoscope-2024.php`,},
            { name: 'कन्या राशि वार्षिक राशिफल 2024', url : `${MAIN_URL}horoscope/virgo-horoscope-2024.php`,},
            { name: 'तुला राशि वार्षिक राशिफल 2024', url : `${MAIN_URL}horoscope/libra-horoscope-2024.php`,},
            { name: 'वृश्चिक राशि वार्षिक राशिफल 2024', url : `${MAIN_URL}horoscope/scorpio-horoscope-2024.php`,},
            { name: 'धनु राशि वार्षिक राशिफल 2024s', url : `${MAIN_URL}horoscope/sagittarius-horoscope-2024.php`,},
            { name: 'मकर राशि वार्षिक राशिफल 2024', url : `${MAIN_URL}horoscope/capricorn-horoscope-2024.php`,},
            { name: 'कुंभ राशि वार्षिक राशिफल 2024', url : `${MAIN_URL}horoscope/aquarius-horoscope-2024.php`,},
            { name: 'मीन राशि वार्षिक राशिफल 2024', url : `${MAIN_URL}horoscope/pisces-horoscope-2024.php`,}
        ]
    },
    { name: 'ज्योतिष ', url : '#',
        sublinks: [
            { name: 'आज का पंचांग', url : `${MAIN_URL}today-panchang.php`, },
            { name: 'त्योहार', url : `${MAIN_URL}festivals.php`, },
            { 
                name: "ग्रहों का गोचर ",
                url : `${MAIN_URL}planetary-transit.php`,
                sublinksL2 :[
                    { name: 'सूर्य गोचर', url : `${MAIN_URL}planetary-transit/sun-transit.php`,},
                    { name: 'मंगल गोचर', url : `${MAIN_URL}planetary-transit/mars-transit.php`,},
                    { name: 'बुध गोचर', url : `${MAIN_URL}planetary-transit/mercury-transit.php`,},
                    { name: 'बृहस्पति गोचर', url : `${MAIN_URL}planetary-transit/jupiter-transit.php`,},
                    { name: 'शुक्र गोचर', url : `${MAIN_URL}planetary-transit/venus-transit.php`,},
                    { name: 'शनि गोचर', url : `${MAIN_URL}planetary-transit/saturn-transit.php`,},
                    { name: 'राहु गोचर', url : `${MAIN_URL}planetary-transit/rahu-transit.php`,},
                    { name: 'केतु गोचर', url : `${MAIN_URL}planetary-transit/ketu-transit.php`,},
                    { name: 'ग्रहण', url : `${MAIN_URL}planetary-transit/eclipse.php`,},
                    { name: 'ग्रहों का संयोजन', url : `${MAIN_URL}planetary-transit/conjunction.php`,}
                ]
            },
            { name: "आज का शेयर बाजार", url : `${MAIN_URL}share-market-today.php`, },
            { name: "प्रेम अनुकूलता", url : `${MAIN_URL}zodiac-signs-compatibility.php`,
                sublinksL2 :[
                    { name: 'मेष राशि का प्रेम मिलान', url : `${MAIN_URL}zodiac-signs-compatibility/aries-with-other-signs.php`,},
                    { name: 'वृषभ राशि का प्रेम मिलान', url : `${MAIN_URL}zodiac-signs-compatibility/taurus-with-other-signs.php`,},
                    { name: 'मिथुन राशी का प्रेम मिलान', url : `${MAIN_URL}zodiac-signs-compatibility/gemini-with-other-signs.php`,},
                    { name: 'कर्क राशि का प्रेम मिलान', url : `${MAIN_URL}zodiac-signs-compatibility/cancer-with-other-signs.php`,},
                    { name: 'सिंह राशि का प्रेम मिलान', url : `${MAIN_URL}zodiac-signs-compatibility/leo-with-other-signs.php`,},
                    { name: 'कन्या राशि का प्रेम मिलान', url : `${MAIN_URL}zodiac-signs-compatibility/virgo-with-other-signs.php`,},
                    { name: 'तुला राशि का प्रेम मिलान', url : `${MAIN_URL}zodiac-signs-compatibility/libra-with-other-signs.php`,},
                    { name: 'वृश्चिक राशि का प्रेम मिलान', url : `${MAIN_URL}zodiac-signs-compatibility/scorpio-with-other-signs.php`,},
                    { name: 'धनु राशि का प्रेम मिलान', url : `${MAIN_URL}zodiac-signs-compatibility/sagittarius-with-other-signs.php`,},
                    { name: 'मकर राशि का प्रेम मिलान', url : `${MAIN_URL}zodiac-signs-compatibility/capricorn-with-other-signs.php`,},
                    { name: 'कुंभ राशि का प्रेम मिलान ', url : `${MAIN_URL}zodiac-signs-compatibility/aquarius-with-other-signs.php`,},
                    { name: 'मीन राशि का प्रेम मिलान', url : `${MAIN_URL}zodiac-signs-compatibility/pisces-with-other-signs.php`,}
                ]
            },
            { name: "कुंडली दोष", url : `${MAIN_URL}kundli-doshas.php`,
                sublinksL2 :[
                    { name: 'पितृ दोष', url : `${MAIN_URL}kundli-doshas/pitra-dosha.php`,},
                    { name: 'मांगलिक दोष', url : `${MAIN_URL}kundli-doshas/manglik-dosha.php`,},
                    { name: 'काल सर्प दोष', url : `${MAIN_URL}kundli-doshas/kaal-sarp-dosha.php`,},
                    { name: 'नाड़ी दोष', url : `${MAIN_URL}kundli-doshas/nadi-dosh.php`,},
                    { name: 'नाड़ी दोष', url : `${MAIN_URL}kundli-doshas/guru-chandal-dosha.php`,},
                    { name: 'अंगारक दोष', url : `${MAIN_URL}kundli-doshas/angarak-dosha.php`,}
                ]
            },
            { name: "नक्षत्र", url : `${MAIN_URL}nakshatras.php`,
                sublinksL2 :[
                    { name: 'अश्विनी नक्षत्र', url : `${MAIN_URL}nakshatras/ashwini-nakshatra.php`,},
                    { name: 'भरणी नक्षत्र', url : `${MAIN_URL}nakshatras/bharani-nakshatra.php`,},
                    { name: 'कृतिका नक्षत्र', url : `${MAIN_URL}nakshatras/krittika-nakshatra.php`,},
                    { name: 'रोहिणी नक्षत्र', url : `${MAIN_URL}nakshatras/rohini-nakshatra.php`,},
                    { name: 'मृगशिरा नक्षत्र', url : `${MAIN_URL}nakshatras/mrigashira-nakshatra.php`,},
                    { name: 'आर्द्रा नक्षत्र', url : `${MAIN_URL}nakshatras/ardra-nakshatra.php`,},
                    { name: 'पुनर्वसु नक्षत्र', url : `${MAIN_URL}nakshatras/punarvasu-nakshatra.php`,},
                    { name: 'पुनर्वसु नक्षत्र', url : `${MAIN_URL}nakshatras/pushya-nakshatra.php`,},
                    { name: 'अश्लेषा नक्षत्र', url : `${MAIN_URL}nakshatras/ashlesha-nakshatra.php`,},
                    { name: 'मघा नक्षत्र', url : `${MAIN_URL}nakshatras/magha-nakshatra.php`,},
                    { name: 'पूर्वाफाल्गुनी नक्षत्र', url : `${MAIN_URL}nakshatras/purva-phalguni-nakshatra.php`,},
                    { name: 'उत्तरा फाल्गुनी नक्षत्र', url : `${MAIN_URL}nakshatras/uttara-phalguni-nakshatra.php`,},
                    { name: 'हस्त नक्षत्र', url : `${MAIN_URL}nakshatras/hasta-nakshatra.php`,},
                    { name: 'चित्रा नक्षत्र', url : `${MAIN_URL}nakshatras/chitra-nakshatra.php`,},
                    { name: 'स्वाति नक्षत्र/Swati Nakshatra', url : `${MAIN_URL}nakshatras/swati-nakshatra.php`,},
                    { name: 'विशाखा नक्षत्र', url : `${MAIN_URL}nakshatras/vishakha-nakshatra.php`,},
                    { name: 'अनुराधा नक्षत्र', url : `${MAIN_URL}nakshatras/anuradha-nakshatra.php`,},
                    { name: 'ज्येष्ठा नक्षत्र', url : `${MAIN_URL}nakshatras/jyeshtha-nakshatra.php`,},
                    { name: 'मूल नक्षत्र', url : `${MAIN_URL}nakshatras/moola-nakshatra.php`,},
                    { name: 'पूर्वाषाढ़ा नक्षत्र', url : `${MAIN_URL}nakshatras/purvashada-nakshatra.php`,},
                    { name: 'उत्तराषाढ़ा नक्षत्र', url : `${MAIN_URL}nakshatras/uttarashada-nakshatra.php`,},
                    { name: 'श्रवण नक्षत्र', url : `${MAIN_URL}nakshatras/shravana-nakshatra.php`,},
                    { name: 'धनिष्ठा नक्षत्र ', url : `${MAIN_URL}nakshatras/dhanishta-nakshatra.php`,},
                    { name: 'धनिष्ठा नक्षत्र ', url : `${MAIN_URL}nakshatras/shatabhisha-nakshatra.php`,},
                    { name: 'पूर्वाभाद्रपद नक्षत्र', url : `${MAIN_URL}nakshatras/purva-bhadrapada-nakshatra.php`,},
                    { name: 'उत्तरा भाद्रपद नक्षत्र', url : `${MAIN_URL}nakshatras/uttara-bhadrapada-nakshatra.php`,},
                    { name: 'रेवती नक्षत्र', url : `${MAIN_URL}nakshatras/revati-nakshatra.php`,}
                ]
            },
            { name: "ज्योतिष समाचार", url : `${MAIN_URL}astrology-news.php`},
            { name: "विभिन्न भावों और राशियों में ग्रह", url: `${MAIN_URL}planets.php`,
                sublinksL2 :[
                    { name: "विभिन्न भावों और राशियों में सूर्य", url: `${MAIN_URL}planets/sun.php`,
                        sublinksL3 :[
                            { name: "प्रथम भाव में सूर्य", url: `${MAIN_URL}planets/sun/sun-in-first-house.php` },
                            { name: "दूसरे भाव में सूर्य", url: `${MAIN_URL}planets/sun/sun-in-second-house.php` },
                            { name: "तीसरे भाव में सूर्य", url: `${MAIN_URL}planets/sun/sun-in-third-house.php` },
                            { name: "चौथे भाव में सूर्य", url: `${MAIN_URL}planets/sun/sun-in-fourth-house.php` },
                            { name: "पंचम भाव में सूर्य", url: `${MAIN_URL}planets/sun/sun-in-fifth-house.php` },
                            { name: "छठे भाव में सूर्य", url: `${MAIN_URL}planets/sun/sun-in-sixth-house.php` },
                            { name: "सातवें भाव में सूर्य", url: `${MAIN_URL}planets/sun/sun-in-seventh-house.php` },
                            { name: "अष्टम भाव में सूर्य", url: `${MAIN_URL}planets/sun/sun-in-eighth-house.php` },
                            { name: "नवें भाव में सूर्य", url: `${MAIN_URL}planets/sun/sun-in-ninth-house.php` },
                            { name: "दसवें भाव में सूर्य", url: `${MAIN_URL}planets/sun/sun-in-tenth-house.php` },
                            { name: "ग्यारहवें भाव में सूर्य", url: `${MAIN_URL}planets/sun/sun-in-eleventh-house.php` },
                            { name: "बारहवें भाव में सूर्य", url: `${MAIN_URL}planets/sun/sun-in-twelfth-house.php` },
                            { name: "मेष राशि में सूर्य", url: `${MAIN_URL}planets/sun/sun-in-aries.php` },
                            { name: "वृषभ राशि में सूर्य", url: `${MAIN_URL}planets/sun/sun-in-taurus.php` },
                            { name: "मिथुन राशि में सूर्य", url: `${MAIN_URL}planets/sun/sun-in-gemini.php` },
                            { name: "कर्क राशि में सूर्य", url: `${MAIN_URL}planets/sun/sun-in-cancer.php` },
                            { name: "सिंह राशि में सूर्य", url: `${MAIN_URL}planets/sun/sun-in-leo.php` },
                            { name: "कन्या राशि में सूर्य", url: `${MAIN_URL}planets/sun/sun-in-virgo.php` },
                            { name: "तुला राशि में सूर्य", url: `${MAIN_URL}planets/sun/sun-in-libra.php` },
                            { name: "वृश्चिक राशि में सूर्य", url: `${MAIN_URL}planets/sun/sun-in-scorpio.php` },
                            { name: "धनु राशि में सूर्य", url: `${MAIN_URL}planets/sun/sun-in-sagittarius.php` },
                            { name: "सूर्य मकर राशि में", url: `${MAIN_URL}planets/sun/sun-in-capricorn.php` },
                            { name: "सूर्य कुम्भ राशि में", url: `${MAIN_URL}planets/sun/sun-in-aquarius.php` },
                            { name: "मीन राशि में सूर्य", url: `${MAIN_URL}planets/sun/sun-in-pisces.php` }
                        ]
                    },
                    { name: "विभिन्न भावों और राशियों में चंद्रमा", url: `${MAIN_URL}planets/moon.php`,
                        sublinksL3 :[
                            { name: "प्रथम भाव में चंद्रमा", url: `${MAIN_URL}planets/moon/moon-in-first-house.php` },
                            { name: "दूसरे भाव में चंद्रमा", url: `${MAIN_URL}planets/moon/moon-in-second-house.php` },
                            { name: "तीसरे भाव में चंद्रमा", url: `${MAIN_URL}planets/moon/moon-in-third-house.php` },
                            { name: "चतुर्थ भाव में चंद्रमा", url: `${MAIN_URL}planets/moon/moon-in-fourth-house.php` },
                            { name: "पंचम भाव में चंद्रमा", url: `${MAIN_URL}planets/moon/moon-in-fifth-house.php` },
                            { name: "छठे भाव में चंद्रमा", url: `${MAIN_URL}planets/moon/moon-in-sixth-house.php` },
                            { name: "सातवें भाव में चंद्रमा", url: `${MAIN_URL}planets/moon/moon-in-seventh-house.php` },
                            { name: "आठवें भाव में चंद्रमा", url: `${MAIN_URL}planets/moon/moon-in-eighth-house.php` },
                            { name: "नौवें भाव में चंद्रमा", url: `${MAIN_URL}planets/moon/moon-in-ninth-house.php` },
                            { name: "दसवें भाव में चंद्रमा", url: `${MAIN_URL}planets/moon/moon-in-tenth-house.php` },
                            { name: "ग्यारहवें भाव में चंद्रमा", url: `${MAIN_URL}planets/moon/moon-in-eleventh-house.php` },
                            { name: "बारहवें भाव में चंद्रमा", url: `${MAIN_URL}planets/moon/moon-in-twelfth-house.php` },
                            { name: "मेष राशि में चंद्रमा", url: `${MAIN_URL}planets/moon/moon-in-aries.php` },
                            { name: "वृषभ राशि में चंद्रमा", url: `${MAIN_URL}planets/moon/moon-in-taurus.php` },
                            { name: "मिथुन राशि में चंद्रमा", url: `${MAIN_URL}planets/moon/moon-in-gemini.php` },
                            { name: "कर्क राशि में चंद्रमा", url: `${MAIN_URL}planets/moon/moon-in-cancer.php` },
                            { name: "सिंह राशि में चंद्रमा", url: `${MAIN_URL}planets/moon/moon-in-leo.php` },
                            { name: "कन्या राशि में चंद्रमा", url: `${MAIN_URL}planets/moon/moon-in-virgo.php` },
                            { name: "तुला राशि में चंद्रमा", url: `${MAIN_URL}planets/moon/moon-in-libra.php` },
                            { name: "वृश्चिक राशि में चंद्रमा", url: `${MAIN_URL}planets/moon/moon-in-scorpio.php` },
                            { name: "धनु राशि में चंद्रमा", url: `${MAIN_URL}planets/moon/moon-in-sagittarius.php` },
                            { name: "मकर राशि में चंद्रमा", url: `${MAIN_URL}planets/moon/moon-in-capricorn.php` },
                            { name: "कुंभ राशि में चंद्रमा", url: `${MAIN_URL}planets/moon/moon-in-aquarius.php` },
                            { name: "मीन राशि में चंद्रमा", url: `${MAIN_URL}planets/moon/moon-in-pisces.php` }
                        ]
                    },
                    { name: "विभिन्न भावों और राशियों में बृहस्पति", url: `${MAIN_URL}planets/jupiter.php`,
                        sublinksL3 :[
                            { name: "प्रथम भाव में बृहस्पति", url: `${MAIN_URL}planets/jupiter/jupiter-in-first-house.php` },
                            { name: "दूसरे भाव में बृहस्पति", url: `${MAIN_URL}planets/jupiter/jupiter-in-second-house.php` },
                            { name: "तीसरे भाव में बृहस्पति", url: `${MAIN_URL}planets/jupiter/jupiter-in-third-house.php` },
                            { name: "चौथे भाव में बृहस्पति", url: `${MAIN_URL}planets/jupiter/jupiter-in-fourth-house.php` },
                            { name: "पांचवें भाव में बृहस्पति", url: `${MAIN_URL}planets/jupiter/jupiter-in-fifth-house.php` },
                            { name: "छठे भाव में बृहस्पति", url: `${MAIN_URL}planets/jupiter/jupiter-in-sixth-house.php` },
                            { name: "सातवें भाव में बृहस्पति", url: `${MAIN_URL}planets/jupiter/jupiter-in-seventh-house.php` },
                            { name: "आठवें भाव में बृहस्पति", url: `${MAIN_URL}planets/jupiter/jupiter-in-eighth-house.php` },
                            { name: "नवम भाव में बृहस्पति", url: `${MAIN_URL}planets/jupiter/jupiter-in-ninth-house.php` },
                            { name: "दसवें भाव में बृहस्पति", url: `${MAIN_URL}planets/jupiter/jupiter-in-tenth-house.php` },
                            { name: "ग्यारहवें भाव में बृहस्पति", url: `${MAIN_URL}planets/jupiter/jupiter-in-eleventh-house.php` },
                            { name: "बारहवें भाव में बृहस्पति", url: `${MAIN_URL}planets/jupiter/jupiter-in-twelfth-house.php` },
                            { name: "मेष राशि में बृहस्पति", url: `${MAIN_URL}planets/jupiter/jupiter-in-aries.php` },
                            { name: "वृषभ राशि में बृहस्पति", url: `${MAIN_URL}planets/jupiter/jupiter-in-taurus.php` },
                            { name: "मिथुन राशि में बृहस्पति", url: `${MAIN_URL}planets/jupiter/jupiter-in-gemini.php` },
                            { name: "कर्क राशि में बृहस्पति", url: `${MAIN_URL}planets/jupiter/jupiter-in-cancer.php` },
                            { name: "सिंह राशि में बृहस्पति", url: `${MAIN_URL}planets/jupiter/jupiter-in-leo.php` },
                            { name: "कन्या राशि में बृहस्पति", url: `${MAIN_URL}planets/jupiter/jupiter-in-virgo.php` },
                            { name: "तुला राशि में बृहस्पति", url: `${MAIN_URL}planets/jupiter/jupiter-in-libra.php` },
                            { name: "वृश्चिक राशि में बृहस्पति", url: `${MAIN_URL}planets/jupiter/jupiter-in-scorpio.php` },
                            { name: "धनु राशि में बृहस्पति", url: `${MAIN_URL}planets/jupiter/jupiter-in-sagittarius.php` },
                            { name: "बृहस्पति का मकर राशि में फल", url: `${MAIN_URL}planets/jupiter/jupiter-in-capricorn.php` },
                            { name: "कुंभ राशि में बृहस्पति", url: `${MAIN_URL}planets/jupiter/jupiter-in-aquarius.php` },
                            { name: "मीन राशि में बृहस्पति", url: `${MAIN_URL}planets/jupiter/jupiter-in-pisces.php` }
                        ]
                    },
                    { name: "विभिन्न भावों और राशियों में शुक्र", url: `${MAIN_URL}planets/venus.php`,
                        sublinksL3 :[
                            { name: "पहले भाव में शुक्र | Venus in 1st House", url: `${MAIN_URL}planets/venus/venus-in-first-house.php` },
                            { name: "दूसरे भाव में शुक्र | Venus in 2nd house", url: `${MAIN_URL}planets/venus/venus-in-second-house.php` },
                            { name: "तीसरे भाव में शुक्र | Venus in 3rd house", url: `${MAIN_URL}planets/venus/venus-in-third-house.php` },
                            { name: "चौथे भाव में शुक्र | Venus in 4th House", url: `${MAIN_URL}planets/venus/venus-in-fourth-house.php` },
                            { name: "पांचवे भाव में शुक्र | Venus in 5th house", url: `${MAIN_URL}planets/venus/venus-in-fifth-house.php` },
                            { name: "छठे भाव में शुक्र | Venus in 6th house", url: `${MAIN_URL}planets/venus/venus-in-sixth-house.php` },
                            { name: "कुंडली के सातवें भाव में शुक्र", url: `${MAIN_URL}planets/venus/venus-in-seventh-house.php` },
                            { name: "कुंडली के आठवें भाव में शुक्र", url: `${MAIN_URL}planets/venus/venus-in-eighth-house.php` },
                            { name: "कुंडली के नवम भाव में शुक्र", url: `${MAIN_URL}planets/venus/venus-in-ninth-house.php` },
                            { name: "कुंडली के दसवें भाव में शुक्र", url: `${MAIN_URL}planets/venus/venus-in-tenth-house.php` },
                            { name: "कुंडली के ग्यारहवें भाव में शुक्र", url: `${MAIN_URL}planets/venus/venus-in-eleventh-house.php` },
                            { name: "कुंडली के बारहवें भाव में शुक्र", url: `${MAIN_URL}planets/venus/venus-in-twelfth-house.php` },
                            { name: "मेष राशि में शुक्र", url: `${MAIN_URL}planets/venus/venus-in-aries.php` },
                            { name: "शुक्र का वृष राशि में होने का प्रभाव | Venus in Taurus", url: `${MAIN_URL}planets/venus/venus-in-taurus.php` },
                            { name: "शुक्र का मिथुन राशि में होना | Venus in Gemini sign", url: `${MAIN_URL}planets/venus/venus-in-gemini.php` },
                            { name: "शुक्र का कर्क राशि में होना | Venus in Cancer sign", url: `${MAIN_URL}planets/venus/venus-in-cancer.php` },
                            { name: "शुक्र का सिंह राशि में होना | Venus in Leo Sign", url: `${MAIN_URL}planets/venus/venus-in-leo.php` },
                            { name: "शुक्र का कन्या राशि में होना | Venus in Virgo Sign", url: `${MAIN_URL}planets/venus/venus-in-virgo.php` },
                            { name: "शुक्र का तुला राशि में होना | Venus in Libra Sign", url: `${MAIN_URL}planets/venus/venus-in-libra.php` },
                            { name: "वृश्चिक राशि पर शुक्र का प्रभाव", url: `${MAIN_URL}planets/venus/venus-in-scorpio.php` },
                            { name: "शुक्र का धनु राशि में होना | Venus in Sagittarius Sign", url: `${MAIN_URL}planets/venus/venus-in-sagittarius.php` },
                            { name: "शुक्र का मकर राशि में होना | Venus in Capricorn sign", url: `${MAIN_URL}planets/venus/venus-in-capricorn.php` },
                            { name: "शुक्र का कुंभ राशि में होना | Venus in Aquarius sign", url: `${MAIN_URL}planets/venus/venus-in-aquarius.php` },
                            { name: "शुक्र का मीन राशि में होना | Impact of Venus on pisces", url: `${MAIN_URL}planets/venus/venus-in-pisces.php` },
                            { name: "विभिन्न भावों में केतु और शुक्र", url: `${MAIN_URL}planets/venus/venus-ketu-and-different-houses.php` }
                        ]
                    },
                    { name: "विभिन्न भावों और राशियों में मंगल", url: `${MAIN_URL}planets/mars.php`,
                        sublinksL3 :[
                            { name: "पहले भाव में मंगल", url: `${MAIN_URL}planets/mars/mars-in-first-house.php` },
                            { name: "दूसरे भाव में मंगल", url: `${MAIN_URL}planets/mars/mars-in-second-house.php` },
                            { name: "तीसरे भाव में मंगल | Mars in 3rd house", url: `${MAIN_URL}planets/mars/mars-in-third-house.php` },
                            { name: "चौथे भाव में मंगल", url: `${MAIN_URL}planets/mars/mars-in-fourth-house.php` },
                            { name: "पांचवें भाव में मंगल", url: `${MAIN_URL}planets/mars/mars-in-fifth-house.php` },
                            { name: "छठे भाव में मंगल", url: `${MAIN_URL}planets/mars/mars-in-sixth-house.php` },
                            { name: "सातवें भाव में मंगल", url: `${MAIN_URL}planets/mars/mars-in-seventh-house.php` },
                            { name: "आठवें भाव में मंगल", url: `${MAIN_URL}planets/mars/mars-in-eighth-house.php` },
                            { name: "नौवें भाव में मंगल", url: `${MAIN_URL}planets/mars/mars-in-ninth-house.php` },
                            { name: "दसवें भाव में मंगल", url: `${MAIN_URL}planets/mars/mars-in-tenth-house.php` },
                            { name: "ग्यारहवें भाव में मंगल", url: `${MAIN_URL}planets/mars/mars-in-eleventh-house.php` },
                            { name: "बारहवें भाव में मंगल", url: `${MAIN_URL}planets/mars/mars-in-twelfth-house.php` },
                            { name: "मंगल का मेष राशि में होना", url: `${MAIN_URL}planets/mars/mars-in-aries.php` },
                            { name: "मंगल का वृष राशि में होना", url: `${MAIN_URL}planets/mars/mars-in-taurus.php` },
                            { name: "मंगल का मिथुन राशि में होना | Mars in Gemini", url: `${MAIN_URL}planets/mars/mars-in-gemini.php` },
                            { name: "मंगल का कर्क राशि में होना | Mars in Cancer sign", url: `${MAIN_URL}planets/mars/mars-in-cancer.php` },
                            { name: "मंगल का सिंह राशि में होना | Mars in Leo Sign", url: `${MAIN_URL}planets/mars/mars-in-leo.php` },
                            { name: "मंगल का कन्या राशि में होना | Mars in Virgo Sign", url: `${MAIN_URL}planets/mars/mars-in-virgo.php` },
                            { name: "मंगल का तुला राशि में होना | Impact of Mars in Libra", url: `${MAIN_URL}planets/mars/mars-in-libra.php` },
                            { name: "वृश्चिक राशि पर मंगल ग्रह का प्रभाव", url: `${MAIN_URL}planets/mars/mars-in-scorpio.php` },
                            { name: "मंगल का धनु राशि में होना | Mars in Sagittarius sign", url: `${MAIN_URL}planets/mars/mars-in-sagittarius.php` },
                            { name: "मंगल का मकर राशि में होना | Mars in Capricorn", url: `${MAIN_URL}planets/mars/mars-in-capricorn.php` },
                            { name: "मंगल का कुंभ राशि में होना | Mars in Aquarius", url: `${MAIN_URL}planets/mars/mars-in-aquarius.php` },
                            { name: "मंगल का मीन राशि में होना | Mars in Pisces", url: `${MAIN_URL}planets/mars/mars-in-pisces.php` }
                        ]
                    },
                    { name: "विभिन्न भावों और राशियों में केतु", url: `${MAIN_URL}planets/ketu.php`,
                        sublinksL3 :[
                            { name: "पहले भाव में केतु", url: `${MAIN_URL}planets/ketu/ketu-in-first-house.php` },
                            { name: "दूसरे भाव में केतु | Ketu in 2nd house", url: `${MAIN_URL}planets/ketu/ketu-in-second-house.php` },
                            { name: "तीसरे भाव में केतु", url: `${MAIN_URL}planets/ketu/ketu-in-third-house.php` },
                            { name: "चौथे भाव में केतु", url: `${MAIN_URL}planets/ketu/ketu-in-fourth-house.php` },
                            { name: "पांचवें भाव में केतु | Ketu in 5th house", url: `${MAIN_URL}planets/ketu/ketu-in-fifth-house.php` },
                            { name: "कुंडली के छठे भाव में केतु", url: `${MAIN_URL}planets/ketu/ketu-in-sixth-house.php` },
                            { name: "कुंडली के सातवें भाव में केतु", url: `${MAIN_URL}planets/ketu/ketu-in-seventh-house.php` },
                            { name: "आठवें भाव में केतु", url: `${MAIN_URL}planets/ketu/ketu-in-eighth-house.php` },
                            { name: "नौवें भाव में केतु | Ketu in 9th house", url: `${MAIN_URL}planets/ketu/ketu-in-ninth-house.php` },
                            { name: "दसवें भाव में केतु | Ketu in 10th house", url: `${MAIN_URL}planets/ketu/ketu-in-tenth-house.php` },
                            { name: "ग्यारहवें भाव में केतु | Ketu in 11th house", url: `${MAIN_URL}planets/ketu/ketu-in-eleventh-house.php` },
                            { name: "बारहवें भाव में केतु | Ketu in 12th house", url: `${MAIN_URL}planets/ketu/ketu-in-twelfth-house.php` },
                            { name: "मेष राशि में केतु की स्थिति", url: `${MAIN_URL}planets/ketu/ketu-in-aries.php` },
                            { name: "वृषभ राशि में केतु", url: `${MAIN_URL}planets/ketu/ketu-in-taurus.php` },
                            { name: "मिथुन राशि में केतु", url: `${MAIN_URL}planets/ketu/ketu-in-gemini.php` },
                            { name: "कर्क राशि में केतु", url: `${MAIN_URL}planets/ketu/ketu-in-cancer.php` }
                        ]
                    },
                    { name: "विभिन्न भावों और राशियों में शनि", url : `${MAIN_URL}planets/saturn.php`,
                        sublinksL3 :[
                            { name: "पहले भाव में शनि | Saturn in 1st house", url: `${MAIN_URL}planets/saturn/saturn-in-first-house.php` },
                            { name: "दूसरे भाव में शनि | Saturn in 2nd house", url: `${MAIN_URL}planets/saturn/saturn-in-second-house.php` },
                            { name: "तीसरे भाव में शनि | Saturn in 3rd house", url: `${MAIN_URL}planets/saturn/saturn-in-third-house.php` },
                            { name: "चौथे भाव में शनि | Saturn in 4th house", url: `${MAIN_URL}planets/saturn/saturn-in-fourth-house.php` },
                            { name: "पांचवें भाव में शनि | Saturn in 5th house", url: `${MAIN_URL}planets/saturn/saturn-in-fifth-house.php` },
                            { name: "छठे भाव में शनि | Saturn in 6th house", url: `${MAIN_URL}planets/saturn/saturn-in-sixth-house.php` },
                            { name: "सातवें भाव में शनि | Saturn in 7th house", url: `${MAIN_URL}planets/saturn/saturn-in-seventh-house.php` },
                            { name: "आठवें भाव में शनि | Saturn in 8th house", url: `${MAIN_URL}planets/saturn/saturn-in-eighth-house.php` },
                            { name: "नौवें भाव में शनि | Saturn in 9th house", url: `${MAIN_URL}planets/saturn/saturn-in-ninth-house.php` },
                            { name: "दसवें भाव में शनि | Saturn in 10th house", url: `${MAIN_URL}planets/saturn/saturn-in-tenth-house.php` },
                            { name: "ग्यारहवें भाव में शनि | Saturn in 11th house", url: `${MAIN_URL}planets/saturn/saturn-in-eleventh-house.php` },
                            { name: "बारहवें भाव में शनि | Saturn in 12th house", url: `${MAIN_URL}planets/saturn/saturn-in-twelfth-house.php` },
                            { name: "मेष राशि में शनि | Saturn in Aries", url: `${MAIN_URL}planets/saturn/saturn-in-aries.php` },
                            { name: "वृषभ राशि में शनि | Saturn in Taurus", url: `${MAIN_URL}planets/saturn/saturn-in-taurus.php` },
                            { name: "मिथुन राशि में शनि | Saturn in Gemini", url: `${MAIN_URL}planets/saturn/saturn-in-gemini.php` },
                            { name: "कर्क राशि में शनि | Saturn in Cancer", url: `${MAIN_URL}planets/saturn/saturn-in-cancer.php` },
                            { name: "सिंह राशि में शनि | Saturn in Leo", url: `${MAIN_URL}planets/saturn/saturn-in-leo.php` },
                            { name: "कन्या राशि में शनि | Saturn in Virgo", url: `${MAIN_URL}planets/saturn/saturn-in-virgo.php` },
                            { name: "तुला राशि में शनि | Saturn in Libra", url: `${MAIN_URL}planets/saturn/saturn-in-libra.php` },
                            { name: "वृश्चिक राशि में शनि | Saturn in Scorpio", url: `${MAIN_URL}planets/saturn/saturn-in-scorpio.php` },
                            { name: "धनु राशि में शनि | Saturn in Sagittarius", url: `${MAIN_URL}planets/saturn/saturn-in-sagittarius.php` },
                            { name: "मकर राशि में शनि | Saturn in Capricorn", url: `${MAIN_URL}planets/saturn/saturn-in-capricorn.php` },
                            { name: "कुंभ राशि में शनि | Saturn in Aquarius", url: `${MAIN_URL}planets/saturn/saturn-in-aquarius.php` },
                            { name: "मीन राशि में शनि | Saturn in Pisces", url: `${MAIN_URL}planets/saturn/saturn-in-pisces.php` }
                        ]
                    },
                    { name: "विभिन्न भावों और राशियों में बुध", url: `${MAIN_URL}planets/mercury.php`,
                        sublinksL3 :[
                            { name: "पहले भाव में बुध", url: `${MAIN_URL}planets/mercury/mercury-in-first-house.php` },
                            { name: "दूसरे भाव में बुध", url: `${MAIN_URL}planets/mercury/mercury-in-second-house.php` },
                            { name: "तीसरे भाव में बुध", url: `${MAIN_URL}planets/mercury/mercury-in-third-house.php` },
                            { name: "चौथे भाव में बुध | Mercury in 4th House", url: `${MAIN_URL}planets/mercury/mercury-in-fourth-house.php` },
                            { name: "पांचवे भाव में बुध | Mercury in 5th House", url: `${MAIN_URL}planets/mercury/mercury-in-fifth-house.php` },
                            { name: "कुंडली के छठे भाव में बुध", url: `${MAIN_URL}planets/mercury/mercury-in-sixth-house.php` },
                            { name: "सातवें भाव में बुध | Mercury in Seventh House", url: `${MAIN_URL}planets/mercury/mercury-in-seventh-house.php` },
                            { name: "आठवें भाव में बुध | Mercury in Eighth house", url: `${MAIN_URL}planets/mercury/mercury-in-eighth-house.php` },
                            { name: "नवम भाव में बुध | Mercury in the Ninth House", url: `${MAIN_URL}planets/mercury/mercury-in-ninth-house.php` },
                            { name: "दसवें भाव में बुध", url: `${MAIN_URL}planets/mercury/mercury-in-tenth-house.php` },
                            { name: "ग्यारहवें भाव में बुध", url: `${MAIN_URL}planets/mercury/mercury-in-eleventh-house.php` },
                            { name: "बारहवें भाव में बुध", url: `${MAIN_URL}planets/mercury/mercury-in-twelfth-house.php` },
                            { name: "मेष राशि में बुध | Mercury in Aries Sign", url: `${MAIN_URL}planets/mercury/mercury-in-aries.php` },
                            { name: "वृषभ राशि में बुध | Mercury in Taurus Sign", url: `${MAIN_URL}planets/mercury/mercury-in-taurus.php` },
                            { name: "मिथुन राशि में बुध | Mercury in Gemini Sign", url: `${MAIN_URL}planets/mercury/mercury-in-gemini.php` },
                            { name: "कर्क राशि में बुध | Mercury in Cancer Sign", url: `${MAIN_URL}planets/mercury/mercury-in-cancer.php` },
                            { name: "सिंह राशि में बुध | Mercury in Leo Sign", url: `${MAIN_URL}planets/mercury/mercury-in-leo.php` },
                            { name: "कन्या राशि में बुध | Mercury in Virgo sign", url: `${MAIN_URL}planets/mercury/mercury-in-virgo.php` },
                            { name: "तुला राशि में बुध | Mercury in Libra Sign", url: `${MAIN_URL}planets/mercury/mercury-in-libra.php` },
                            { name: "वृश्चिक राशि में बुध | Mercury in scorpio sign", url: `${MAIN_URL}planets/mercury/mercury-in-scorpio.php` },
                            { name: "धनु राशि में बुध | Mercury in Sagittarius", url: `${MAIN_URL}planets/mercury/mercury-in-sagittarius.php` },
                            { name: "मकर राशि में बुध | Mercury in Capricorn", url: `${MAIN_URL}planets/mercury/mercury-in-capricorn.php` },
                            { name: "कुंभ राशि में बुध | Mercury in Aquarius", url: `${MAIN_URL}planets/mercury/mercury-in-aquarius.php` },
                            { name: "मीन राशि में बुध | Mercury in Pisces", url: `${MAIN_URL}planets/mercury/mercury-in-pisces.php` }
                        ]
                    },
                    { name: "विभिन्न भावों और राशियों में राहु", url: `${MAIN_URL}planets/rahu.php`,
                        sublinksL3 :[
                            { name: "कुंडली के पहले भाव में राहु का प्रभाव", url: `${MAIN_URL}planets/rahu/rahu-in-first-house.php` },
                            { name: "कुंडली के दूसरे भाव में राहु का पड़ने वाला प्रभाव", url: `${MAIN_URL}planets/rahu/rahu-in-second-house.php` },
                            { name: "तीसरे भाव में राहु", url: `${MAIN_URL}planets/rahu/rahu-in-third-house.php` },
                            { name: "चौथे भाव में राहु ", url: `${MAIN_URL}planets/rahu/rahu-in-fourth-house.php` },
                            { name: "कुंडली के पांचवें भाव में राहु", url: `${MAIN_URL}planets/rahu/rahu-in-fifth-house.php` },
                            { name: "कुंडली के छठे भाव में राहु", url: `${MAIN_URL}planets/rahu/rahu-in-sixth-house.php` },
                            { name: "कुंडली के सातवें भाव में राहु", url: `${MAIN_URL}planets/rahu/rahu-in-seventh-house.php` },
                            { name: "कुंडली के आठवें भाव में राहु", url: `${MAIN_URL}planets/rahu/rahu-in-eighth-house.php` },
                            { name: "कुंडली के नवम भाव में राहु", url: `${MAIN_URL}planets/rahu/rahu-in-ninth-house.php` },
                            { name: "कुंडली के दसवें घर में राहु", url: `${MAIN_URL}planets/rahu/rahu-in-tenth-house.php` },
                            { name: "कुंडली के ग्यारहवें भाव में राहु ", url: `${MAIN_URL}planets/rahu/rahu-in-eleventh-house.php` },
                            { name: "कुंडली के बारहवें भाव में राहु", url: `${MAIN_URL}planets/rahu/rahu-in-twelfth-house.php` }
                        ]
                    }
                ]
            },
            { name: "ज्योतिष में बारह भाव", url: `${MAIN_URL}astrology-houses.php`,
                sublinksL2: [
                    { name: "प्रथम भाव", url: `${MAIN_URL}first-house.php` },
                    { name: "द्वितीय भाव", url: `${MAIN_URL}second-house.php` },
                    { name: "तृतीय भाव", url: `${MAIN_URL}third-house.php` },
                    { name: "चतुर्थ भाव", url: `${MAIN_URL}fourth-house.php` },
                    { name: "पंचम भाव", url: `${MAIN_URL}fifth-house.php` },
                    { name: "षष्ठ भाव", url: `${MAIN_URL}sixth-house.php` },
                    { name: "सातवां भाव", url: `${MAIN_URL}seventh-house.php` },
                    { name: "अष्टम भाव", url: `${MAIN_URL}eighth-house.php` },
                    { name: "नवम भाव", url: `${MAIN_URL}ninth-house.php` },
                    { name: "दशम भाव", url: `${MAIN_URL}tenth-house.php` },
                    { name: "ग्यारहवां भाव", url: `${MAIN_URL}eleventh-house.php` },
                    { name: "बारहवां भाव", url: `${MAIN_URL}twelfth-house.php` }
                ]
            },
            { name: "ज्योतिष उपाय/ Astrology Remedies", url: `${MAIN_URL}astrology-remedies.php`,
                sublinksL2 :[
                    { name: "वैदिक टोटके", url : `${MAIN_URL}astrology-remedies/vedic-totke.php`,
                        sublinksL3 : [
                            { name : "घर और परिवार की शांति के लिए ज्योतिष", url : `${MAIN_URL}astrology-remedies/vedic-totke/astrology-for-home-and-family-peace.php`,},
                            { name : "मनोकामना पूर्ति के ज्योतिष तरीके", url : `${MAIN_URL}astrology-remedies/vedic-totke/astrology-way-to-fulfill-wishes.php`,},
                            { name : "यह ज्योतिष उपाय रखेंगे आपको बीमारियों से दूर", url : `${MAIN_URL}astrology-remedies/vedic-totke/astrology-tips-for-better-health.php`,},
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
        {name: "Marriage Astrology", url: `${MAIN_URL}marriage-astrology.php` ,
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
                { name: "Buying Selling Property per birth chart", url: `${MAIN_URL}property.php`, },
                { name: "Predictions for own House", url: `${MAIN_URL}property/property-yoga.php`, }
            ]
        },
        {
            name: "Health Astrology",
            url: `${MAIN_URL}health-astrology.php`,
            sublinksL2: [
                { name: "Timings of Disease in birth chart", url: `${MAIN_URL}health-astrology/planets-and-diseases-in-astrology.php`, },
                { name: "Medical Astrology & Severe Health Issues", url: `${MAIN_URL}health-astrology.php`, },
                { name: "Drug Addiction and Alcoholism indications in the birth chart", url: `${MAIN_URL}health-astrology/drug-addiction.php`, },
                { name: "Specific Diseases in birth chart", url: `${MAIN_URL}health-astrology/diseases-caused.php`, },
                { name: "Sex Health, Desires and Habits", url: `${MAIN_URL}health-astrology/sexual-health.php`, },
                { name: "Your Life Span - Longevity Reading", url: `${MAIN_URL}health-astrology/longevity-calculator.php`, }
            ]
        },
        { name: "Loan and Debt", url: `${MAIN_URL}loan-and-debts.php`, },
        { name: "Betting and Gambling", url: `${MAIN_URL}astrology-for-betting.php`, },
        {
            name: "Foreign Settlement", url: `${MAIN_URL}foreign-travel.php`,
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
            { name: "Kundli Matching", url: `${MAIN_URL}marriage-astrology/kundli-matching-horoscopes-matching-for-marriage.php`,},
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
        title: "Get most accurate result on Manglik Dosh",
        link: `${MAIN_URL}services/online-report/mangal-dosha-calculator.php`,
      },
      {
        title: "Get report on Status and Personality of Your Future Life Partner",
        link: `${MAIN_URL}services/online-report/future-life-partner.php`,
      },
      {
        title: "Get Report on Reasons for Delay in Finding Your Perfect Match",
        link: `${MAIN_URL}services/online-report/delay-in-marriage-astrological-reasons.php`,
      },
      {
        title: "Will You Qualify in UPSC Exam in 2024?",
        link: `${MAIN_URL}services/online-report/will-i-be-successful-in-upsc-exam.php`,
      },
      {
        title: "Get Report on Saturns Secrets and How They Affect You.",
        link: `${MAIN_URL}services/online-report/know-about-saturn-secrets.php`,
      }
    ]
