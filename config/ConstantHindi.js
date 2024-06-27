import {MAIN_URL_HINDI, MAIN_URL} from '../config/config'
export const MainMenuHindi = [
    { name: 'मुख्य पृष्ठ', url : `${MAIN_URL_HINDI}`},
    { name: 'राशिफल', url : '#', 
        sublinks: [
            { name: 'राशिफल', url : `${MAIN_URL_HINDI}horoscope/horoscope.php`,  },
            { name: 'दैनिक भविष्यफल', url : `${MAIN_URL_HINDI}horoscope/daily-horoscope.php`,},
            { name: 'साप्ताहिक राशिफल', url : `${MAIN_URL_HINDI}horoscope/weekly-horoscope.php`,},
            { name: 'मासिक राशिफल', url : `${MAIN_URL_HINDI}horoscope/monthly-horoscope.php`,},
            { name: 'वार्षिक राशिफल', url : `${MAIN_URL_HINDI}horoscope/yearly-horoscope.php`,},
            { name: 'वार्षिक राशिफल  2025', url : `${MAIN_URL_HINDI}horoscope/varshik-rashifal-2025.php`,
                sublinksL2: [
                    { name: 'वार्षिक राशिफल 2025', url : `${MAIN_URL_HINDI}horoscope/varshik-rashifal-2025.php`},
                    { name: 'मेष राशि वार्षिक राशिफल 2025', url : `${MAIN_URL_HINDI}horoscope/mesh-varshik-rashifal-2025.php`},
                    { name: 'वृषभ राशि वार्षिक राशिफल 2025', url : `${MAIN_URL_HINDI}horoscope/vrushabh-varshik-rashifal-2025.php`},
                    { name: 'मिथुन वार्षिक राशिफल 2025', url : `${MAIN_URL_HINDI}horoscope/mithun-varshik-rashifal-2025.php`},
                    { name: 'कर्क वार्षिक राशिफल 2025', url : `${MAIN_URL_HINDI}horoscope/kark-varshik-rashifal-2025.php`},
                    { name: 'सिंह वार्षिक राशिफल 2025', url : `${MAIN_URL_HINDI}horoscope/singh-varshik-rashifal-2025.php`},
                    { name: 'कन्या वार्षिक राशिफल 2025', url : `${MAIN_URL_HINDI}horoscope/kanya-varshik-rashifal-2025.php`},
                    { name: 'तुला वार्षिक राशिफल 2025', url : `${MAIN_URL_HINDI}horoscope/tula-varshik-rashifal-2025.php`},
                    { name: 'वृश्चिक वार्षिक राशिफल 2025', url : `${MAIN_URL_HINDI}horoscope/vrishchik-varshik-rashifal-2025.php`},
                    { name: 'धनु वार्षिक राशिफल 2025', url : `${MAIN_URL_HINDI}horoscope/dhanu-varshik-rashifal-2025.php`},
                    { name: 'मकर वार्षिक राशिफल 2025', url : `${MAIN_URL_HINDI}horoscope/makar-varshik-rashifal-2025.php`},
                    { name: 'कुंभ वार्षिक राशिफल 2025', url : `${MAIN_URL_HINDI}horoscope/kumbh-varshik-rashifal-2025.php`},
                    { name: 'मीन वार्षिक राशिफल 2025', url : `${MAIN_URL_HINDI}horoscope/meen-varshik-rashifal-2025.ph`}
                ]
            }
        ]
    },
    { name: 'राशिफल 2024', url : '#',
        sublinks: [
            { name: 'वार्षिक राशिफल 2024', url : `${MAIN_URL_HINDI}horoscope/varshik-rashifal-2024.php`},
            { name: 'मेष राशि वार्षिक राशिफल 2024', url : `${MAIN_URL_HINDI}horoscope/mesh-varshik-rashifal-2024.php`},
            { name: 'वृषभ राशि वार्षिक राशिफल 2024', url : `${MAIN_URL_HINDI}horoscope/vrushabh-rashifal-2024.php`},
            { name: 'मिथुन राशि वार्षिक राशिफल 2024', url : `${MAIN_URL_HINDI}horoscope/mithun-rashifal-2024.php`},
            { name: 'कर्क राशि वार्षिक राशिफल 2024', url : `${MAIN_URL_HINDI}horoscope/kark-rashifal-2024.php`},
            { name: 'सिंह राशि वार्षिक राशिफल 2024', url : `${MAIN_URL_HINDI}horoscope/singh-rashifal-2024.php`},
            { name: 'कन्या राशि वार्षिक राशिफल 2024', url : `${MAIN_URL_HINDI}horoscope/kanya-rashifal-2024.php`},
            { name: 'तुला राशि वार्षिक राशिफल 2024', url : `${MAIN_URL_HINDI}horoscope/tula-rashifal-2024.php`},
            { name: 'वृश्चिक राशि वार्षिक राशिफल 2024', url : `${MAIN_URL_HINDI}horoscope/vrshchik-rashifal-2024.php`},
            { name: 'धनु राशि वार्षिक राशिफल 2024', url : `${MAIN_URL_HINDI}horoscope/dhanu-rashifal-2024.php`},
            { name: 'मकर राशि वार्षिक राशिफल 2024', url : `${MAIN_URL_HINDI}horoscope/makar-rashifal-2024.php`},
            { name: 'कुंभ राशि वार्षिक राशिफल 2024', url : `${MAIN_URL_HINDI}horoscope/kumbh-rashifal-2024.php`},
            { name: 'मीन राशि वार्षिक राशिफल 2024', url : `${MAIN_URL_HINDI}horoscope/meen-rashifal-2024.php`}
        ]
        
    },
    { name: 'ज्योतिष ', url : '#',
        sublinks: [
            { name: 'आज का पंचांग', url : `${MAIN_URL_HINDI}today-panchang.php`, },
            { name: 'त्योहार', url : `${MAIN_URL_HINDI}festivals.php`, },
            { 
                name: "ग्रहों का गोचर ",
                url : `${MAIN_URL_HINDI}planetary-transit.php`,
                sublinksL2 :[
                    { name: 'सूर्य गोचर', url : `${MAIN_URL_HINDI}planetary-transit/sun-transit.php`,},
                    { name: 'मंगल गोचर', url : `${MAIN_URL_HINDI}planetary-transit/mars-transit.php`,},
                    { name: 'बुध गोचर', url : `${MAIN_URL_HINDI}planetary-transit/mercury-transit.php`,},
                    { name: 'बृहस्पति गोचर', url : `${MAIN_URL_HINDI}planetary-transit/jupiter-transit.php`,},
                    { name: 'शुक्र गोचर', url : `${MAIN_URL_HINDI}planetary-transit/venus-transit.php`,},
                    { name: 'शनि गोचर', url : `${MAIN_URL_HINDI}planetary-transit/saturn-transit.php`,},
                    { name: 'राहु गोचर', url : `${MAIN_URL_HINDI}planetary-transit/rahu-transit.php`,},
                    { name: 'केतु गोचर', url : `${MAIN_URL_HINDI}planetary-transit/ketu-transit.php`,},
                    { name: 'ग्रहण', url : `${MAIN_URL_HINDI}planetary-transit/eclipse.php`,},
                    { name: 'ग्रहों का संयोजन', url : `${MAIN_URL_HINDI}planetary-transit/conjunction.php`,}
                ]
            },
            { name: "आज का शेयर बाजार", url : `${MAIN_URL_HINDI}share-market-today.php`, },
            { name: "प्रेम अनुकूलता", url : `${MAIN_URL_HINDI}zodiac-signs-compatibility.php`,
                sublinksL2 :[
                    { name: 'मेष राशि का प्रेम मिलान', url : `${MAIN_URL_HINDI}zodiac-signs-compatibility/aries-with-other-signs.php`,},
                    { name: 'वृषभ राशि का प्रेम मिलान', url : `${MAIN_URL_HINDI}zodiac-signs-compatibility/taurus-with-other-signs.php`,},
                    { name: 'मिथुन राशी का प्रेम मिलान', url : `${MAIN_URL_HINDI}zodiac-signs-compatibility/gemini-with-other-signs.php`,},
                    { name: 'कर्क राशि का प्रेम मिलान', url : `${MAIN_URL_HINDI}zodiac-signs-compatibility/cancer-with-other-signs.php`,},
                    { name: 'सिंह राशि का प्रेम मिलान', url : `${MAIN_URL_HINDI}zodiac-signs-compatibility/leo-with-other-signs.php`,},
                    { name: 'कन्या राशि का प्रेम मिलान', url : `${MAIN_URL_HINDI}zodiac-signs-compatibility/virgo-with-other-signs.php`,},
                    { name: 'तुला राशि का प्रेम मिलान', url : `${MAIN_URL_HINDI}zodiac-signs-compatibility/libra-with-other-signs.php`,},
                    { name: 'वृश्चिक राशि का प्रेम मिलान', url : `${MAIN_URL_HINDI}zodiac-signs-compatibility/scorpio-with-other-signs.php`,},
                    { name: 'धनु राशि का प्रेम मिलान', url : `${MAIN_URL_HINDI}zodiac-signs-compatibility/sagittarius-with-other-signs.php`,},
                    { name: 'मकर राशि का प्रेम मिलान', url : `${MAIN_URL_HINDI}zodiac-signs-compatibility/capricorn-with-other-signs.php`,},
                    { name: 'कुंभ राशि का प्रेम मिलान ', url : `${MAIN_URL_HINDI}zodiac-signs-compatibility/aquarius-with-other-signs.php`,},
                    { name: 'मीन राशि का प्रेम मिलान', url : `${MAIN_URL_HINDI}zodiac-signs-compatibility/pisces-with-other-signs.php`,}
                ]
            },
            { name: "कुंडली दोष", url : `${MAIN_URL_HINDI}kundli-doshas.php`,
                sublinksL2 :[
                    { name: 'पितृ दोष', url : `${MAIN_URL_HINDI}kundli-doshas/pitra-dosha.php`,},
                    { name: 'मांगलिक दोष', url : `${MAIN_URL_HINDI}kundli-doshas/manglik-dosha.php`,},
                    { name: 'काल सर्प दोष', url : `${MAIN_URL_HINDI}kundli-doshas/kaal-sarp-dosha.php`,},
                    { name: 'नाड़ी दोष', url : `${MAIN_URL_HINDI}kundli-doshas/nadi-dosh.php`,},
                    { name: 'नाड़ी दोष', url : `${MAIN_URL_HINDI}kundli-doshas/guru-chandal-dosha.php`,},
                    { name: 'अंगारक दोष', url : `${MAIN_URL_HINDI}kundli-doshas/angarak-dosha.php`,}
                ]
            },
            { name: "नक्षत्र", url : `${MAIN_URL_HINDI}nakshatras.php`,
                sublinksL2 :[
                    { name: 'अश्विनी नक्षत्र', url : `${MAIN_URL_HINDI}nakshatras/ashwini-nakshatra.php`,},
                    { name: 'भरणी नक्षत्र', url : `${MAIN_URL_HINDI}nakshatras/bharani-nakshatra.php`,},
                    { name: 'कृतिका नक्षत्र', url : `${MAIN_URL_HINDI}nakshatras/krittika-nakshatra.php`,},
                    { name: 'रोहिणी नक्षत्र', url : `${MAIN_URL_HINDI}nakshatras/rohini-nakshatra.php`,},
                    { name: 'मृगशिरा नक्षत्र', url : `${MAIN_URL_HINDI}nakshatras/mrigashira-nakshatra.php`,},
                    { name: 'आर्द्रा नक्षत्र', url : `${MAIN_URL_HINDI}nakshatras/ardra-nakshatra.php`,},
                    { name: 'पुनर्वसु नक्षत्र', url : `${MAIN_URL_HINDI}nakshatras/punarvasu-nakshatra.php`,},
                    { name: 'पुनर्वसु नक्षत्र', url : `${MAIN_URL_HINDI}nakshatras/pushya-nakshatra.php`,},
                    { name: 'अश्लेषा नक्षत्र', url : `${MAIN_URL_HINDI}nakshatras/ashlesha-nakshatra.php`,},
                    { name: 'मघा नक्षत्र', url : `${MAIN_URL_HINDI}nakshatras/magha-nakshatra.php`,},
                    { name: 'पूर्वाफाल्गुनी नक्षत्र', url : `${MAIN_URL_HINDI}nakshatras/purva-phalguni-nakshatra.php`,},
                    { name: 'उत्तरा फाल्गुनी नक्षत्र', url : `${MAIN_URL_HINDI}nakshatras/uttara-phalguni-nakshatra.php`,},
                    { name: 'हस्त नक्षत्र', url : `${MAIN_URL_HINDI}nakshatras/hasta-nakshatra.php`,},
                    { name: 'चित्रा नक्षत्र', url : `${MAIN_URL_HINDI}nakshatras/chitra-nakshatra.php`,},
                    { name: 'स्वाति नक्षत्र/Swati Nakshatra', url : `${MAIN_URL_HINDI}nakshatras/swati-nakshatra.php`,},
                    { name: 'विशाखा नक्षत्र', url : `${MAIN_URL_HINDI}nakshatras/vishakha-nakshatra.php`,},
                    { name: 'अनुराधा नक्षत्र', url : `${MAIN_URL_HINDI}nakshatras/anuradha-nakshatra.php`,},
                    { name: 'ज्येष्ठा नक्षत्र', url : `${MAIN_URL_HINDI}nakshatras/jyeshtha-nakshatra.php`,},
                    { name: 'मूल नक्षत्र', url : `${MAIN_URL_HINDI}nakshatras/moola-nakshatra.php`,},
                    { name: 'पूर्वाषाढ़ा नक्षत्र', url : `${MAIN_URL_HINDI}nakshatras/purvashada-nakshatra.php`,},
                    { name: 'उत्तराषाढ़ा नक्षत्र', url : `${MAIN_URL_HINDI}nakshatras/uttarashada-nakshatra.php`,},
                    { name: 'श्रवण नक्षत्र', url : `${MAIN_URL_HINDI}nakshatras/shravana-nakshatra.php`,},
                    { name: 'धनिष्ठा नक्षत्र ', url : `${MAIN_URL_HINDI}nakshatras/dhanishta-nakshatra.php`,},
                    { name: 'धनिष्ठा नक्षत्र ', url : `${MAIN_URL_HINDI}nakshatras/shatabhisha-nakshatra.php`,},
                    { name: 'पूर्वाभाद्रपद नक्षत्र', url : `${MAIN_URL_HINDI}nakshatras/purva-bhadrapada-nakshatra.php`,},
                    { name: 'उत्तरा भाद्रपद नक्षत्र', url : `${MAIN_URL_HINDI}nakshatras/uttara-bhadrapada-nakshatra.php`,},
                    { name: 'रेवती नक्षत्र', url : `${MAIN_URL_HINDI}nakshatras/revati-nakshatra.php`,}
                ]
            },
            { name: "ज्योतिष समाचार", url : `${MAIN_URL_HINDI}astrology-news.php`},
            { name: "विभिन्न भावों और राशियों में ग्रह", url: `${MAIN_URL_HINDI}planets.php`,
                sublinksL2 :[
                    { name: "विभिन्न भावों और राशियों में सूर्य", url: `${MAIN_URL_HINDI}planets/sun.php`,
                        sublinksL3 :[
                            { name: "प्रथम भाव में सूर्य", url: `${MAIN_URL_HINDI}planets/sun/sun-in-first-house.php` },
                            { name: "दूसरे भाव में सूर्य", url: `${MAIN_URL_HINDI}planets/sun/sun-in-second-house.php` },
                            { name: "तीसरे भाव में सूर्य", url: `${MAIN_URL_HINDI}planets/sun/sun-in-third-house.php` },
                            { name: "चौथे भाव में सूर्य", url: `${MAIN_URL_HINDI}planets/sun/sun-in-fourth-house.php` },
                            { name: "पंचम भाव में सूर्य", url: `${MAIN_URL_HINDI}planets/sun/sun-in-fifth-house.php` },
                            { name: "छठे भाव में सूर्य", url: `${MAIN_URL_HINDI}planets/sun/sun-in-sixth-house.php` },
                            { name: "सातवें भाव में सूर्य", url: `${MAIN_URL_HINDI}planets/sun/sun-in-seventh-house.php` },
                            { name: "अष्टम भाव में सूर्य", url: `${MAIN_URL_HINDI}planets/sun/sun-in-eighth-house.php` },
                            { name: "नवें भाव में सूर्य", url: `${MAIN_URL_HINDI}planets/sun/sun-in-ninth-house.php` },
                            { name: "दसवें भाव में सूर्य", url: `${MAIN_URL_HINDI}planets/sun/sun-in-tenth-house.php` },
                            { name: "ग्यारहवें भाव में सूर्य", url: `${MAIN_URL_HINDI}planets/sun/sun-in-eleventh-house.php` },
                            { name: "बारहवें भाव में सूर्य", url: `${MAIN_URL_HINDI}planets/sun/sun-in-twelfth-house.php` },
                            { name: "मेष राशि में सूर्य", url: `${MAIN_URL_HINDI}planets/sun/sun-in-aries.php` },
                            { name: "वृषभ राशि में सूर्य", url: `${MAIN_URL_HINDI}planets/sun/sun-in-taurus.php` },
                            { name: "मिथुन राशि में सूर्य", url: `${MAIN_URL_HINDI}planets/sun/sun-in-gemini.php` },
                            { name: "कर्क राशि में सूर्य", url: `${MAIN_URL_HINDI}planets/sun/sun-in-cancer.php` },
                            { name: "सिंह राशि में सूर्य", url: `${MAIN_URL_HINDI}planets/sun/sun-in-leo.php` },
                            { name: "कन्या राशि में सूर्य", url: `${MAIN_URL_HINDI}planets/sun/sun-in-virgo.php` },
                            { name: "तुला राशि में सूर्य", url: `${MAIN_URL_HINDI}planets/sun/sun-in-libra.php` },
                            { name: "वृश्चिक राशि में सूर्य", url: `${MAIN_URL_HINDI}planets/sun/sun-in-scorpio.php` },
                            { name: "धनु राशि में सूर्य", url: `${MAIN_URL_HINDI}planets/sun/sun-in-sagittarius.php` },
                            { name: "सूर्य मकर राशि में", url: `${MAIN_URL_HINDI}planets/sun/sun-in-capricorn.php` },
                            { name: "सूर्य कुम्भ राशि में", url: `${MAIN_URL_HINDI}planets/sun/sun-in-aquarius.php` },
                            { name: "मीन राशि में सूर्य", url: `${MAIN_URL_HINDI}planets/sun/sun-in-pisces.php` }
                        ]
                    },
                    { name: "विभिन्न भावों और राशियों में चंद्रमा", url: `${MAIN_URL_HINDI}planets/moon.php`,
                        sublinksL3 :[
                            { name: "प्रथम भाव में चंद्रमा", url: `${MAIN_URL_HINDI}planets/moon/moon-in-first-house.php` },
                            { name: "दूसरे भाव में चंद्रमा", url: `${MAIN_URL_HINDI}planets/moon/moon-in-second-house.php` },
                            { name: "तीसरे भाव में चंद्रमा", url: `${MAIN_URL_HINDI}planets/moon/moon-in-third-house.php` },
                            { name: "चतुर्थ भाव में चंद्रमा", url: `${MAIN_URL_HINDI}planets/moon/moon-in-fourth-house.php` },
                            { name: "पंचम भाव में चंद्रमा", url: `${MAIN_URL_HINDI}planets/moon/moon-in-fifth-house.php` },
                            { name: "छठे भाव में चंद्रमा", url: `${MAIN_URL_HINDI}planets/moon/moon-in-sixth-house.php` },
                            { name: "सातवें भाव में चंद्रमा", url: `${MAIN_URL_HINDI}planets/moon/moon-in-seventh-house.php` },
                            { name: "आठवें भाव में चंद्रमा", url: `${MAIN_URL_HINDI}planets/moon/moon-in-eighth-house.php` },
                            { name: "नौवें भाव में चंद्रमा", url: `${MAIN_URL_HINDI}planets/moon/moon-in-ninth-house.php` },
                            { name: "दसवें भाव में चंद्रमा", url: `${MAIN_URL_HINDI}planets/moon/moon-in-tenth-house.php` },
                            { name: "ग्यारहवें भाव में चंद्रमा", url: `${MAIN_URL_HINDI}planets/moon/moon-in-eleventh-house.php` },
                            { name: "बारहवें भाव में चंद्रमा", url: `${MAIN_URL_HINDI}planets/moon/moon-in-twelfth-house.php` },
                            { name: "मेष राशि में चंद्रमा", url: `${MAIN_URL_HINDI}planets/moon/moon-in-aries.php` },
                            { name: "वृषभ राशि में चंद्रमा", url: `${MAIN_URL_HINDI}planets/moon/moon-in-taurus.php` },
                            { name: "मिथुन राशि में चंद्रमा", url: `${MAIN_URL_HINDI}planets/moon/moon-in-gemini.php` },
                            { name: "कर्क राशि में चंद्रमा", url: `${MAIN_URL_HINDI}planets/moon/moon-in-cancer.php` },
                            { name: "सिंह राशि में चंद्रमा", url: `${MAIN_URL_HINDI}planets/moon/moon-in-leo.php` },
                            { name: "कन्या राशि में चंद्रमा", url: `${MAIN_URL_HINDI}planets/moon/moon-in-virgo.php` },
                            { name: "तुला राशि में चंद्रमा", url: `${MAIN_URL_HINDI}planets/moon/moon-in-libra.php` },
                            { name: "वृश्चिक राशि में चंद्रमा", url: `${MAIN_URL_HINDI}planets/moon/moon-in-scorpio.php` },
                            { name: "धनु राशि में चंद्रमा", url: `${MAIN_URL_HINDI}planets/moon/moon-in-sagittarius.php` },
                            { name: "मकर राशि में चंद्रमा", url: `${MAIN_URL_HINDI}planets/moon/moon-in-capricorn.php` },
                            { name: "कुंभ राशि में चंद्रमा", url: `${MAIN_URL_HINDI}planets/moon/moon-in-aquarius.php` },
                            { name: "मीन राशि में चंद्रमा", url: `${MAIN_URL_HINDI}planets/moon/moon-in-pisces.php` }
                        ]
                    },
                    { name: "विभिन्न भावों और राशियों में बृहस्पति", url: `${MAIN_URL_HINDI}planets/jupiter.php`,
                        sublinksL3 :[
                            { name: "प्रथम भाव में बृहस्पति", url: `${MAIN_URL_HINDI}planets/jupiter/jupiter-in-first-house.php` },
                            { name: "दूसरे भाव में बृहस्पति", url: `${MAIN_URL_HINDI}planets/jupiter/jupiter-in-second-house.php` },
                            { name: "तीसरे भाव में बृहस्पति", url: `${MAIN_URL_HINDI}planets/jupiter/jupiter-in-third-house.php` },
                            { name: "चौथे भाव में बृहस्पति", url: `${MAIN_URL_HINDI}planets/jupiter/jupiter-in-fourth-house.php` },
                            { name: "पांचवें भाव में बृहस्पति", url: `${MAIN_URL_HINDI}planets/jupiter/jupiter-in-fifth-house.php` },
                            { name: "छठे भाव में बृहस्पति", url: `${MAIN_URL_HINDI}planets/jupiter/jupiter-in-sixth-house.php` },
                            { name: "सातवें भाव में बृहस्पति", url: `${MAIN_URL_HINDI}planets/jupiter/jupiter-in-seventh-house.php` },
                            { name: "आठवें भाव में बृहस्पति", url: `${MAIN_URL_HINDI}planets/jupiter/jupiter-in-eighth-house.php` },
                            { name: "नवम भाव में बृहस्पति", url: `${MAIN_URL_HINDI}planets/jupiter/jupiter-in-ninth-house.php` },
                            { name: "दसवें भाव में बृहस्पति", url: `${MAIN_URL_HINDI}planets/jupiter/jupiter-in-tenth-house.php` },
                            { name: "ग्यारहवें भाव में बृहस्पति", url: `${MAIN_URL_HINDI}planets/jupiter/jupiter-in-eleventh-house.php` },
                            { name: "बारहवें भाव में बृहस्पति", url: `${MAIN_URL_HINDI}planets/jupiter/jupiter-in-twelfth-house.php` },
                            { name: "मेष राशि में बृहस्पति", url: `${MAIN_URL_HINDI}planets/jupiter/jupiter-in-aries.php` },
                            { name: "वृषभ राशि में बृहस्पति", url: `${MAIN_URL_HINDI}planets/jupiter/jupiter-in-taurus.php` },
                            { name: "मिथुन राशि में बृहस्पति", url: `${MAIN_URL_HINDI}planets/jupiter/jupiter-in-gemini.php` },
                            { name: "कर्क राशि में बृहस्पति", url: `${MAIN_URL_HINDI}planets/jupiter/jupiter-in-cancer.php` },
                            { name: "सिंह राशि में बृहस्पति", url: `${MAIN_URL_HINDI}planets/jupiter/jupiter-in-leo.php` },
                            { name: "कन्या राशि में बृहस्पति", url: `${MAIN_URL_HINDI}planets/jupiter/jupiter-in-virgo.php` },
                            { name: "तुला राशि में बृहस्पति", url: `${MAIN_URL_HINDI}planets/jupiter/jupiter-in-libra.php` },
                            { name: "वृश्चिक राशि में बृहस्पति", url: `${MAIN_URL_HINDI}planets/jupiter/jupiter-in-scorpio.php` },
                            { name: "धनु राशि में बृहस्पति", url: `${MAIN_URL_HINDI}planets/jupiter/jupiter-in-sagittarius.php` },
                            { name: "बृहस्पति का मकर राशि में फल", url: `${MAIN_URL_HINDI}planets/jupiter/jupiter-in-capricorn.php` },
                            { name: "कुंभ राशि में बृहस्पति", url: `${MAIN_URL_HINDI}planets/jupiter/jupiter-in-aquarius.php` },
                            { name: "मीन राशि में बृहस्पति", url: `${MAIN_URL_HINDI}planets/jupiter/jupiter-in-pisces.php` }
                        ]
                    },
                    { name: "विभिन्न भावों और राशियों में शुक्र", url: `${MAIN_URL_HINDI}planets/venus.php`,
                        sublinksL3 :[
                            { name: "पहले भाव में शुक्र | Venus in 1st House", url: `${MAIN_URL_HINDI}planets/venus/venus-in-first-house.php` },
                            { name: "दूसरे भाव में शुक्र | Venus in 2nd house", url: `${MAIN_URL_HINDI}planets/venus/venus-in-second-house.php` },
                            { name: "तीसरे भाव में शुक्र | Venus in 3rd house", url: `${MAIN_URL_HINDI}planets/venus/venus-in-third-house.php` },
                            { name: "चौथे भाव में शुक्र | Venus in 4th House", url: `${MAIN_URL_HINDI}planets/venus/venus-in-fourth-house.php` },
                            { name: "पांचवे भाव में शुक्र | Venus in 5th house", url: `${MAIN_URL_HINDI}planets/venus/venus-in-fifth-house.php` },
                            { name: "छठे भाव में शुक्र | Venus in 6th house", url: `${MAIN_URL_HINDI}planets/venus/venus-in-sixth-house.php` },
                            { name: "कुंडली के सातवें भाव में शुक्र", url: `${MAIN_URL_HINDI}planets/venus/venus-in-seventh-house.php` },
                            { name: "कुंडली के आठवें भाव में शुक्र", url: `${MAIN_URL_HINDI}planets/venus/venus-in-eighth-house.php` },
                            { name: "कुंडली के नवम भाव में शुक्र", url: `${MAIN_URL_HINDI}planets/venus/venus-in-ninth-house.php` },
                            { name: "कुंडली के दसवें भाव में शुक्र", url: `${MAIN_URL_HINDI}planets/venus/venus-in-tenth-house.php` },
                            { name: "कुंडली के ग्यारहवें भाव में शुक्र", url: `${MAIN_URL_HINDI}planets/venus/venus-in-eleventh-house.php` },
                            { name: "कुंडली के बारहवें भाव में शुक्र", url: `${MAIN_URL_HINDI}planets/venus/venus-in-twelfth-house.php` },
                            { name: "मेष राशि में शुक्र", url: `${MAIN_URL_HINDI}planets/venus/venus-in-aries.php` },
                            { name: "शुक्र का वृष राशि में होने का प्रभाव | Venus in Taurus", url: `${MAIN_URL_HINDI}planets/venus/venus-in-taurus.php` },
                            { name: "शुक्र का मिथुन राशि में होना | Venus in Gemini sign", url: `${MAIN_URL_HINDI}planets/venus/venus-in-gemini.php` },
                            { name: "शुक्र का कर्क राशि में होना | Venus in Cancer sign", url: `${MAIN_URL_HINDI}planets/venus/venus-in-cancer.php` },
                            { name: "शुक्र का सिंह राशि में होना | Venus in Leo Sign", url: `${MAIN_URL_HINDI}planets/venus/venus-in-leo.php` },
                            { name: "शुक्र का कन्या राशि में होना | Venus in Virgo Sign", url: `${MAIN_URL_HINDI}planets/venus/venus-in-virgo.php` },
                            { name: "शुक्र का तुला राशि में होना | Venus in Libra Sign", url: `${MAIN_URL_HINDI}planets/venus/venus-in-libra.php` },
                            { name: "वृश्चिक राशि पर शुक्र का प्रभाव", url: `${MAIN_URL_HINDI}planets/venus/venus-in-scorpio.php` },
                            { name: "शुक्र का धनु राशि में होना | Venus in Sagittarius Sign", url: `${MAIN_URL_HINDI}planets/venus/venus-in-sagittarius.php` },
                            { name: "शुक्र का मकर राशि में होना | Venus in Capricorn sign", url: `${MAIN_URL_HINDI}planets/venus/venus-in-capricorn.php` },
                            { name: "शुक्र का कुंभ राशि में होना | Venus in Aquarius sign", url: `${MAIN_URL_HINDI}planets/venus/venus-in-aquarius.php` },
                            { name: "शुक्र का मीन राशि में होना | Impact of Venus on pisces", url: `${MAIN_URL_HINDI}planets/venus/venus-in-pisces.php` },
                            { name: "विभिन्न भावों में केतु और शुक्र", url: `${MAIN_URL_HINDI}planets/venus/venus-ketu-and-different-houses.php` }
                        ]
                    },
                    { name: "विभिन्न भावों और राशियों में मंगल", url: `${MAIN_URL_HINDI}planets/mars.php`,
                        sublinksL3 :[
                            { name: "पहले भाव में मंगल", url: `${MAIN_URL_HINDI}planets/mars/mars-in-first-house.php` },
                            { name: "दूसरे भाव में मंगल", url: `${MAIN_URL_HINDI}planets/mars/mars-in-second-house.php` },
                            { name: "तीसरे भाव में मंगल | Mars in 3rd house", url: `${MAIN_URL_HINDI}planets/mars/mars-in-third-house.php` },
                            { name: "चौथे भाव में मंगल", url: `${MAIN_URL_HINDI}planets/mars/mars-in-fourth-house.php` },
                            { name: "पांचवें भाव में मंगल", url: `${MAIN_URL_HINDI}planets/mars/mars-in-fifth-house.php` },
                            { name: "छठे भाव में मंगल", url: `${MAIN_URL_HINDI}planets/mars/mars-in-sixth-house.php` },
                            { name: "सातवें भाव में मंगल", url: `${MAIN_URL_HINDI}planets/mars/mars-in-seventh-house.php` },
                            { name: "आठवें भाव में मंगल", url: `${MAIN_URL_HINDI}planets/mars/mars-in-eighth-house.php` },
                            { name: "नौवें भाव में मंगल", url: `${MAIN_URL_HINDI}planets/mars/mars-in-ninth-house.php` },
                            { name: "दसवें भाव में मंगल", url: `${MAIN_URL_HINDI}planets/mars/mars-in-tenth-house.php` },
                            { name: "ग्यारहवें भाव में मंगल", url: `${MAIN_URL_HINDI}planets/mars/mars-in-eleventh-house.php` },
                            { name: "बारहवें भाव में मंगल", url: `${MAIN_URL_HINDI}planets/mars/mars-in-twelfth-house.php` },
                            { name: "मंगल का मेष राशि में होना", url: `${MAIN_URL_HINDI}planets/mars/mars-in-aries.php` },
                            { name: "मंगल का वृष राशि में होना", url: `${MAIN_URL_HINDI}planets/mars/mars-in-taurus.php` },
                            { name: "मंगल का मिथुन राशि में होना | Mars in Gemini", url: `${MAIN_URL_HINDI}planets/mars/mars-in-gemini.php` },
                            { name: "मंगल का कर्क राशि में होना | Mars in Cancer sign", url: `${MAIN_URL_HINDI}planets/mars/mars-in-cancer.php` },
                            { name: "मंगल का सिंह राशि में होना | Mars in Leo Sign", url: `${MAIN_URL_HINDI}planets/mars/mars-in-leo.php` },
                            { name: "मंगल का कन्या राशि में होना | Mars in Virgo Sign", url: `${MAIN_URL_HINDI}planets/mars/mars-in-virgo.php` },
                            { name: "मंगल का तुला राशि में होना | Impact of Mars in Libra", url: `${MAIN_URL_HINDI}planets/mars/mars-in-libra.php` },
                            { name: "वृश्चिक राशि पर मंगल ग्रह का प्रभाव", url: `${MAIN_URL_HINDI}planets/mars/mars-in-scorpio.php` },
                            { name: "मंगल का धनु राशि में होना | Mars in Sagittarius sign", url: `${MAIN_URL_HINDI}planets/mars/mars-in-sagittarius.php` },
                            { name: "मंगल का मकर राशि में होना | Mars in Capricorn", url: `${MAIN_URL_HINDI}planets/mars/mars-in-capricorn.php` },
                            { name: "मंगल का कुंभ राशि में होना | Mars in Aquarius", url: `${MAIN_URL_HINDI}planets/mars/mars-in-aquarius.php` },
                            { name: "मंगल का मीन राशि में होना | Mars in Pisces", url: `${MAIN_URL_HINDI}planets/mars/mars-in-pisces.php` }
                        ]
                    },
                    { name: "विभिन्न भावों और राशियों में केतु", url: `${MAIN_URL_HINDI}planets/ketu.php`,
                        sublinksL3 :[
                            { name: "पहले भाव में केतु", url: `${MAIN_URL_HINDI}planets/ketu/ketu-in-first-house.php` },
                            { name: "दूसरे भाव में केतु | Ketu in 2nd house", url: `${MAIN_URL_HINDI}planets/ketu/ketu-in-second-house.php` },
                            { name: "तीसरे भाव में केतु", url: `${MAIN_URL_HINDI}planets/ketu/ketu-in-third-house.php` },
                            { name: "चौथे भाव में केतु", url: `${MAIN_URL_HINDI}planets/ketu/ketu-in-fourth-house.php` },
                            { name: "पांचवें भाव में केतु | Ketu in 5th house", url: `${MAIN_URL_HINDI}planets/ketu/ketu-in-fifth-house.php` },
                            { name: "कुंडली के छठे भाव में केतु", url: `${MAIN_URL_HINDI}planets/ketu/ketu-in-sixth-house.php` },
                            { name: "कुंडली के सातवें भाव में केतु", url: `${MAIN_URL_HINDI}planets/ketu/ketu-in-seventh-house.php` },
                            { name: "आठवें भाव में केतु", url: `${MAIN_URL_HINDI}planets/ketu/ketu-in-eighth-house.php` },
                            { name: "नौवें भाव में केतु | Ketu in 9th house", url: `${MAIN_URL_HINDI}planets/ketu/ketu-in-ninth-house.php` },
                            { name: "दसवें भाव में केतु | Ketu in 10th house", url: `${MAIN_URL_HINDI}planets/ketu/ketu-in-tenth-house.php` },
                            { name: "ग्यारहवें भाव में केतु | Ketu in 11th house", url: `${MAIN_URL_HINDI}planets/ketu/ketu-in-eleventh-house.php` },
                            { name: "बारहवें भाव में केतु | Ketu in 12th house", url: `${MAIN_URL_HINDI}planets/ketu/ketu-in-twelfth-house.php` },
                            { name: "मेष राशि में केतु की स्थिति", url: `${MAIN_URL_HINDI}planets/ketu/ketu-in-aries.php` },
                            { name: "वृषभ राशि में केतु", url: `${MAIN_URL_HINDI}planets/ketu/ketu-in-taurus.php` },
                            { name: "मिथुन राशि में केतु", url: `${MAIN_URL_HINDI}planets/ketu/ketu-in-gemini.php` },
                            { name: "कर्क राशि में केतु", url: `${MAIN_URL_HINDI}planets/ketu/ketu-in-cancer.php` }
                        ]
                    },
                    { name: "विभिन्न भावों और राशियों में शनि", url : `${MAIN_URL_HINDI}planets/saturn.php`,
                        sublinksL3 :[
                            { name: "पहले भाव में शनि | Saturn in 1st house", url: `${MAIN_URL_HINDI}planets/saturn/saturn-in-first-house.php` },
                            { name: "दूसरे भाव में शनि | Saturn in 2nd house", url: `${MAIN_URL_HINDI}planets/saturn/saturn-in-second-house.php` },
                            { name: "तीसरे भाव में शनि | Saturn in 3rd house", url: `${MAIN_URL_HINDI}planets/saturn/saturn-in-third-house.php` },
                            { name: "चौथे भाव में शनि | Saturn in 4th house", url: `${MAIN_URL_HINDI}planets/saturn/saturn-in-fourth-house.php` },
                            { name: "पांचवें भाव में शनि | Saturn in 5th house", url: `${MAIN_URL_HINDI}planets/saturn/saturn-in-fifth-house.php` },
                            { name: "छठे भाव में शनि | Saturn in 6th house", url: `${MAIN_URL_HINDI}planets/saturn/saturn-in-sixth-house.php` },
                            { name: "सातवें भाव में शनि | Saturn in 7th house", url: `${MAIN_URL_HINDI}planets/saturn/saturn-in-seventh-house.php` },
                            { name: "आठवें भाव में शनि | Saturn in 8th house", url: `${MAIN_URL_HINDI}planets/saturn/saturn-in-eighth-house.php` },
                            { name: "नौवें भाव में शनि | Saturn in 9th house", url: `${MAIN_URL_HINDI}planets/saturn/saturn-in-ninth-house.php` },
                            { name: "दसवें भाव में शनि | Saturn in 10th house", url: `${MAIN_URL_HINDI}planets/saturn/saturn-in-tenth-house.php` },
                            { name: "ग्यारहवें भाव में शनि | Saturn in 11th house", url: `${MAIN_URL_HINDI}planets/saturn/saturn-in-eleventh-house.php` },
                            { name: "बारहवें भाव में शनि | Saturn in 12th house", url: `${MAIN_URL_HINDI}planets/saturn/saturn-in-twelfth-house.php` },
                            { name: "मेष राशि में शनि | Saturn in Aries", url: `${MAIN_URL_HINDI}planets/saturn/saturn-in-aries.php` },
                            { name: "वृषभ राशि में शनि | Saturn in Taurus", url: `${MAIN_URL_HINDI}planets/saturn/saturn-in-taurus.php` },
                            { name: "मिथुन राशि में शनि | Saturn in Gemini", url: `${MAIN_URL_HINDI}planets/saturn/saturn-in-gemini.php` },
                            { name: "कर्क राशि में शनि | Saturn in Cancer", url: `${MAIN_URL_HINDI}planets/saturn/saturn-in-cancer.php` },
                            { name: "सिंह राशि में शनि | Saturn in Leo", url: `${MAIN_URL_HINDI}planets/saturn/saturn-in-leo.php` },
                            { name: "कन्या राशि में शनि | Saturn in Virgo", url: `${MAIN_URL_HINDI}planets/saturn/saturn-in-virgo.php` },
                            { name: "तुला राशि में शनि | Saturn in Libra", url: `${MAIN_URL_HINDI}planets/saturn/saturn-in-libra.php` },
                            { name: "वृश्चिक राशि में शनि | Saturn in Scorpio", url: `${MAIN_URL_HINDI}planets/saturn/saturn-in-scorpio.php` },
                            { name: "धनु राशि में शनि | Saturn in Sagittarius", url: `${MAIN_URL_HINDI}planets/saturn/saturn-in-sagittarius.php` },
                            { name: "मकर राशि में शनि | Saturn in Capricorn", url: `${MAIN_URL_HINDI}planets/saturn/saturn-in-capricorn.php` },
                            { name: "कुंभ राशि में शनि | Saturn in Aquarius", url: `${MAIN_URL_HINDI}planets/saturn/saturn-in-aquarius.php` },
                            { name: "मीन राशि में शनि | Saturn in Pisces", url: `${MAIN_URL_HINDI}planets/saturn/saturn-in-pisces.php` }
                        ]
                    },
                    { name: "विभिन्न भावों और राशियों में बुध", url: `${MAIN_URL_HINDI}planets/mercury.php`,
                        sublinksL3 :[
                            { name: "पहले भाव में बुध", url: `${MAIN_URL_HINDI}planets/mercury/mercury-in-first-house.php` },
                            { name: "दूसरे भाव में बुध", url: `${MAIN_URL_HINDI}planets/mercury/mercury-in-second-house.php` },
                            { name: "तीसरे भाव में बुध", url: `${MAIN_URL_HINDI}planets/mercury/mercury-in-third-house.php` },
                            { name: "चौथे भाव में बुध | Mercury in 4th House", url: `${MAIN_URL_HINDI}planets/mercury/mercury-in-fourth-house.php` },
                            { name: "पांचवे भाव में बुध | Mercury in 5th House", url: `${MAIN_URL_HINDI}planets/mercury/mercury-in-fifth-house.php` },
                            { name: "कुंडली के छठे भाव में बुध", url: `${MAIN_URL_HINDI}planets/mercury/mercury-in-sixth-house.php` },
                            { name: "सातवें भाव में बुध | Mercury in Seventh House", url: `${MAIN_URL_HINDI}planets/mercury/mercury-in-seventh-house.php` },
                            { name: "आठवें भाव में बुध | Mercury in Eighth house", url: `${MAIN_URL_HINDI}planets/mercury/mercury-in-eighth-house.php` },
                            { name: "नवम भाव में बुध | Mercury in the Ninth House", url: `${MAIN_URL_HINDI}planets/mercury/mercury-in-ninth-house.php` },
                            { name: "दसवें भाव में बुध", url: `${MAIN_URL_HINDI}planets/mercury/mercury-in-tenth-house.php` },
                            { name: "ग्यारहवें भाव में बुध", url: `${MAIN_URL_HINDI}planets/mercury/mercury-in-eleventh-house.php` },
                            { name: "बारहवें भाव में बुध", url: `${MAIN_URL_HINDI}planets/mercury/mercury-in-twelfth-house.php` },
                            { name: "मेष राशि में बुध | Mercury in Aries Sign", url: `${MAIN_URL_HINDI}planets/mercury/mercury-in-aries.php` },
                            { name: "वृषभ राशि में बुध | Mercury in Taurus Sign", url: `${MAIN_URL_HINDI}planets/mercury/mercury-in-taurus.php` },
                            { name: "मिथुन राशि में बुध | Mercury in Gemini Sign", url: `${MAIN_URL_HINDI}planets/mercury/mercury-in-gemini.php` },
                            { name: "कर्क राशि में बुध | Mercury in Cancer Sign", url: `${MAIN_URL_HINDI}planets/mercury/mercury-in-cancer.php` },
                            { name: "सिंह राशि में बुध | Mercury in Leo Sign", url: `${MAIN_URL_HINDI}planets/mercury/mercury-in-leo.php` },
                            { name: "कन्या राशि में बुध | Mercury in Virgo sign", url: `${MAIN_URL_HINDI}planets/mercury/mercury-in-virgo.php` },
                            { name: "तुला राशि में बुध | Mercury in Libra Sign", url: `${MAIN_URL_HINDI}planets/mercury/mercury-in-libra.php` },
                            { name: "वृश्चिक राशि में बुध | Mercury in scorpio sign", url: `${MAIN_URL_HINDI}planets/mercury/mercury-in-scorpio.php` },
                            { name: "धनु राशि में बुध | Mercury in Sagittarius", url: `${MAIN_URL_HINDI}planets/mercury/mercury-in-sagittarius.php` },
                            { name: "मकर राशि में बुध | Mercury in Capricorn", url: `${MAIN_URL_HINDI}planets/mercury/mercury-in-capricorn.php` },
                            { name: "कुंभ राशि में बुध | Mercury in Aquarius", url: `${MAIN_URL_HINDI}planets/mercury/mercury-in-aquarius.php` },
                            { name: "मीन राशि में बुध | Mercury in Pisces", url: `${MAIN_URL_HINDI}planets/mercury/mercury-in-pisces.php` }
                        ]
                    },
                    { name: "विभिन्न भावों और राशियों में राहु", url: `${MAIN_URL_HINDI}planets/rahu.php`,
                        sublinksL3 :[
                            { name: "कुंडली के पहले भाव में राहु का प्रभाव", url: `${MAIN_URL_HINDI}planets/rahu/rahu-in-first-house.php` },
                            { name: "कुंडली के दूसरे भाव में राहु का पड़ने वाला प्रभाव", url: `${MAIN_URL_HINDI}planets/rahu/rahu-in-second-house.php` },
                            { name: "तीसरे भाव में राहु", url: `${MAIN_URL_HINDI}planets/rahu/rahu-in-third-house.php` },
                            { name: "चौथे भाव में राहु ", url: `${MAIN_URL_HINDI}planets/rahu/rahu-in-fourth-house.php` },
                            { name: "कुंडली के पांचवें भाव में राहु", url: `${MAIN_URL_HINDI}planets/rahu/rahu-in-fifth-house.php` },
                            { name: "कुंडली के छठे भाव में राहु", url: `${MAIN_URL_HINDI}planets/rahu/rahu-in-sixth-house.php` },
                            { name: "कुंडली के सातवें भाव में राहु", url: `${MAIN_URL_HINDI}planets/rahu/rahu-in-seventh-house.php` },
                            { name: "कुंडली के आठवें भाव में राहु", url: `${MAIN_URL_HINDI}planets/rahu/rahu-in-eighth-house.php` },
                            { name: "कुंडली के नवम भाव में राहु", url: `${MAIN_URL_HINDI}planets/rahu/rahu-in-ninth-house.php` },
                            { name: "कुंडली के दसवें घर में राहु", url: `${MAIN_URL_HINDI}planets/rahu/rahu-in-tenth-house.php` },
                            { name: "कुंडली के ग्यारहवें भाव में राहु ", url: `${MAIN_URL_HINDI}planets/rahu/rahu-in-eleventh-house.php` },
                            { name: "कुंडली के बारहवें भाव में राहु", url: `${MAIN_URL_HINDI}planets/rahu/rahu-in-twelfth-house.php` }
                        ]
                    }
                ]
            },
            { name: "ज्योतिष में बारह भाव", url: `${MAIN_URL_HINDI}astrology-houses.php`,
                sublinksL2: [
                    { name: "प्रथम भाव", url: `${MAIN_URL_HINDI}astrology-houses/first-house.php` },
                    { name: "द्वितीय भाव", url: `${MAIN_URL_HINDI}astrology-houses/second-house.php` },
                    { name: "तृतीय भाव", url: `${MAIN_URL_HINDI}astrology-houses/third-house.php` },
                    { name: "चतुर्थ भाव", url: `${MAIN_URL_HINDI}astrology-houses/fourth-house.php` },
                    { name: "पंचम भाव", url: `${MAIN_URL_HINDI}astrology-houses/fifth-house.php` },
                    { name: "षष्ठ भाव", url: `${MAIN_URL_HINDI}astrology-houses/sixth-house.php` },
                    { name: "सातवां भाव", url: `${MAIN_URL_HINDI}astrology-houses/seventh-house.php` },
                    { name: "अष्टम भाव", url: `${MAIN_URL_HINDI}astrology-houses/eighth-house.php` },
                    { name: "नवम भाव", url: `${MAIN_URL_HINDI}astrology-houses/ninth-house.php` },
                    { name: "दशम भाव", url: `${MAIN_URL_HINDI}astrology-houses/tenth-house.php` },
                    { name: "ग्यारहवां भाव", url: `${MAIN_URL_HINDI}astrology-houses/eleventh-house.php` },
                    { name: "बारहवां भाव", url: `${MAIN_URL_HINDI}astrology-houses/twelfth-house.php` }
                ]
            },
            { name: "ज्योतिष उपाय/ Astrology Remedies", url: `${MAIN_URL_HINDI}astrology-remedies.php`,
                sublinksL2 :[
                    { name: "वैदिक टोटके", url : `${MAIN_URL_HINDI}astrology-remedies/vedic-totke.php`,
                        sublinksL3 : [
                            { name : "घर और परिवार की शांति के लिए ज्योतिष", url : `${MAIN_URL_HINDI}astrology-remedies/vedic-totke/astrology-for-home-and-family-peace.php`,},
                            { name : "मनोकामना पूर्ति के ज्योतिष तरीके", url : `${MAIN_URL_HINDI}astrology-remedies/vedic-totke/astrology-way-to-fulfill-wishes.php`,},
                            { name : "यह ज्योतिष उपाय रखेंगे आपको बीमारियों से दूर", url : `${MAIN_URL_HINDI}astrology-remedies/vedic-totke/astrology-tips-for-better-health.php`,},
                        ]
                    }
                ]
            },
            { name: "ज्योतिष में दशा या काल", url : `${MAIN_URL_HINDI}dasha.php`,
                sublinksL2 :[
                    { name: "शुक्र की महादशा", url: `${MAIN_URL_HINDI}dasha/venus-mahadasha.php` },
                    { name: "मंगल की महादशा", url: `${MAIN_URL_HINDI}dasha/mars-mahadasha.php` },
                    { name: "सूर्य की महादशा के प्रभाव और उपाय", url: `${MAIN_URL_HINDI}dasha/sun-mahadasha.php` },
                    { name: "चंद्र महादशा के प्रभाव और उपाय", url: `${MAIN_URL_HINDI}dasha/moon-mahadasha.php` },
                    { name: "राहु की महादशा के प्रभाव और उपाय", url: `${MAIN_URL_HINDI}dasha/rahu-mahadasha.php` },
                    { name: "बृहस्पति की महादशा के प्रभाव और उपचार", url: `${MAIN_URL_HINDI}dasha/jupiter-mahadasha.php` },
                    { name: "केतु की महादशा के प्रभाव और उपचार", url: `${MAIN_URL_HINDI}dasha/ketu-mahadasha.php` },
                    { name: "शनि की महादशा के प्रभाव और उपाय", url: `${MAIN_URL_HINDI}dasha/saturn-mahadasha.php` },
                    { name: "बुध की महादशा के प्रभाव और उपाय", url: `${MAIN_URL_HINDI}dasha/mercury-mahadasha.php` },
                    { name: "आखिर क्या है विंशोत्तरी महादशा?", url: `${MAIN_URL_HINDI}dasha/vimsottari-dasha.php` }
                ]
            },
            { name: "ज्योतिष शास्त्र में योग", url : `${MAIN_URL_HINDI}yoga.php`,
                sublinksL2 :[
                    { name: "ज्योतिष में अम्सावतार योग", url: `${MAIN_URL_HINDI}yoga/amsavatara-yoga.php` },
                    { name: "ज्योतिष शास्त्र में गजकेसरी योग", url: `${MAIN_URL_HINDI}yoga/gajkesari-yog.php` },
                    { name: " ज्योतिष शास्त्र में रूचक योग", url: `${MAIN_URL_HINDI}yoga/ruchaka-yoga.php` },
                    { name: "ज्योतिष में भद्र योग", url: `${MAIN_URL_HINDI}yoga/bhadra-yoga.php` },
                    { name: " ज्योतिष में हंस योग", url: `${MAIN_URL_HINDI}yoga/hamsa-yoga.php` },
                    { name: "ज्योतिष में मालव्य योग", url: `${MAIN_URL_HINDI}yoga/malavya-yoga.php` },
                    { name: "ज्योतिष में शश योग", url: `${MAIN_URL_HINDI}yoga/sasa-yoga.php` },
                    { name: "ज्योतिष में लग्नाधि योग", url: `${MAIN_URL_HINDI}yoga/lagnadhi-yoga.php` },
                    { name: "ज्योतिष में सुनफा योग", url: `${MAIN_URL_HINDI}yoga/sunapha-yoga.php` },
                    { name: "ज्योतिष में अनफा योग", url: `${MAIN_URL_HINDI}yoga/anapha-yoga.php` },
                    { name: "ज्योतिष में दुर्धरा योग", url: `${MAIN_URL_HINDI}yoga/durudhara-yoga.php` },
                    { name: "ज्योतिष में ब्रह्म योग", url: `${MAIN_URL_HINDI}yoga/brahma-yoga.php` },
                    { name: "ज्योतिष में पुष्कल योग", url: `${MAIN_URL_HINDI}yoga/pushkala-yoga.php` },
                    { name: "ज्योतिष में महाभाग्य योग", url: `${MAIN_URL_HINDI}yoga/mahabhagya-yoga.php` },
                    { name: "ज्योतिष में गौरी योग", url: `${MAIN_URL_HINDI}yoga/gauri-yoga.php` },
                    { name: "ज्योतिष में सरस्वती योग", url: `${MAIN_URL_HINDI}yoga/saraswati-yoga.php` },
                    { name: "ज्योतिष में देवेंद्र योग", url: `${MAIN_URL_HINDI}yoga/devendra-yoga.php` },
                    { name: "ज्योतिष में मुकुट योग", url: `${MAIN_URL_HINDI}yoga/mukuta-yoga.php` },
                    { name: "ज्योतिष में जय योग", url: `${MAIN_URL_HINDI}yoga/jaya-yoga.php` },
                    { name: "ज्योतिष में विद्युत योग", url: `${MAIN_URL_HINDI}yoga/vidyut-yoga.php` },
                    { name: "ज्योतिष में चंडिका योग", url: `${MAIN_URL_HINDI}yoga/chandika-yoga.php` },
                    { name: "ज्योतिष में गंधर्व योग", url: `${MAIN_URL_HINDI}yoga/gandharva-yoga.php` },
                    { name: "ज्योतिष में विष्णु योग", url: `${MAIN_URL_HINDI}yoga/vishnu-yoga.php` },
                    { name: "शिव योग", url: `${MAIN_URL_HINDI}yoga/shiva-yoga.php` },
                    { name: "चंद्र या शशि मंगल योग", url: `${MAIN_URL_HINDI}yoga/chandra-mangala-yoga.php` },
                    { name: "चाप योग", url: `${MAIN_URL_HINDI}yoga/chapa-yoga.php` },
                    { name: "नाभि योग", url: `${MAIN_URL_HINDI}yoga/nabhi-yoga.php` },
                    { name: "ध्वज योग", url: `${MAIN_URL_HINDI}yoga/dhwaja-yoga.php` },
                    { name: "ज्योतिष में गोला योग", url: `${MAIN_URL_HINDI}yoga/gola-yoga.php` },
                    { name: "गो योग", url: `${MAIN_URL_HINDI}yoga/go-yoga.php` },
                    { name: "ज्योतिष में रवि योग", url: `${MAIN_URL_HINDI}yoga/ravi-yoga.php` },
                    { name: "ज्योतिष में गरुड़ योग", url: `${MAIN_URL_HINDI}yoga/garuda-yoga.php` },
                    { name: "ज्योतिष में शुभ योग", url: `${MAIN_URL_HINDI}yoga/shubha-yoga.php` },
                    { name: "ज्योतिष में त्रिलोचन योग", url: `${MAIN_URL_HINDI}yoga/trilochana-yoga.php` },
                    { name: "ज्योतिष में वज्र योग", url: `${MAIN_URL_HINDI}yoga/vajra-yoga.php` },
                    { name: "ज्योतिष में युग योग", url: `${MAIN_URL_HINDI}yoga/yuga-yoga.php` },
                    { name: "ज्योतिष में वसरपति योग", url: `${MAIN_URL_HINDI}yoga/vasarpati-yoga.php` },
                    { name: "ज्योतिष में नाग योग", url: `${MAIN_URL_HINDI}yoga/naga-yoga.php` },
                    { name: "ज्योतिष में पद्म योग", url: `${MAIN_URL_HINDI}yoga/padma-yoga.php` },
                    { name: "ज्योतिष में मूसल योग", url: `${MAIN_URL_HINDI}yoga/musala-yoga.php` },
                    { name: "ज्योतिष में अंगुली योग", url: `${MAIN_URL_HINDI}yoga/anguli-yoga.php` },
                    { name: "ज्योतिष में लावण्य योग", url: `${MAIN_URL_HINDI}yoga/lavanya-yoga.php` },
                    { name: "ज्योतिष में हर्ष योग", url: `${MAIN_URL_HINDI}yoga/harsha-yoga.php` },
                    { name: "ज्योतिष में सरल योग", url: `${MAIN_URL_HINDI}yoga/sarala-yoga.php` },
                    { name: "ज्योतिष में विमल योग", url: `${MAIN_URL_HINDI}yoga/vimala-yoga.php` },
                    { name: " ज्योतिष में चतुर्मुख योग", url: `${MAIN_URL_HINDI}yoga/chaturmukha-yoga.php` },
                    { name: "ज्योतिष में कुंडल योग", url: `${MAIN_URL_HINDI}yoga/kundala-yoga.php` },
                    { name: "ज्योतिष में मंगल, मध्य और क्लेबा योग", url: `${MAIN_URL_HINDI}yoga/mangala-madhya-kleeba-yoga.php` },
                    { name: "ज्योतिष में चंदा योग", url: `${MAIN_URL_HINDI}yoga/chanda-yoga.php` },
                    { name: "ज्योतिष में सुख योग", url: `${MAIN_URL_HINDI}yoga/sukha-yoga.php` },
                    { name: "ज्योतिष में वेसि योग", url: `${MAIN_URL_HINDI}yoga/vesi-yoga.php` },
                    { name: "ज्योतिष में वासी योग", url: `${MAIN_URL_HINDI}yoga/vasi-yoga.php` },
                    { name: "ज्योतिष में उभयचरी योग", url: `${MAIN_URL_HINDI}yoga/ubhayachari-yoga.php` },
                    { name: "कुंडली में अमला योग", url: `${MAIN_URL_HINDI}yoga/amala-yoga.php` },
                    { name: "ज्योतिष में भास्कर योग", url: `${MAIN_URL_HINDI}yoga/bhaskara-yoga.php` },
                    { name: "ज्योतिष में मारुत योग", url: `${MAIN_URL_HINDI}yoga/marut-yoga.php` },
                    { name: "ज्योतिष में पारिजात योग", url: `${MAIN_URL_HINDI}yoga/parijata-yoga.php` },
                    { name: "ज्योतिष में लक्ष्मी योग", url: `${MAIN_URL_HINDI}yoga/lakshmi-yoga.php` },
                    { name: "ज्योतिष में मालिका योग", url: `${MAIN_URL_HINDI}yoga/malika-yoga.php` },
                    { name: " ज्योतिष में चमरा योग", url: `${MAIN_URL_HINDI}yoga/chamara-yoga.php` },
                    { name: "ज्योतिष में श्रीकांत योग", url: `${MAIN_URL_HINDI}yoga/srikantha-yoga.php` },
                    { name: "ज्योतिष में श्रीनाथ योग", url: `${MAIN_URL_HINDI}yoga/srinatha-yoga.php` },
                    { name: "ज्योतिष में शकट योग", url: `${MAIN_URL_HINDI}yoga/sakata-yoga.php` },
                    { name: "ज्योतिष में बुध योग", url: `${MAIN_URL_HINDI}yoga/budha-yoga.php` },
                    { name: "ज्योतिष में इंद्र योग", url: `${MAIN_URL_HINDI}yoga/indra-yoga.php` },
                    { name: " ज्योतिष में पर्वत योग", url: `${MAIN_URL_HINDI}yoga/parvata-yoga.php` }
                ]
            },
            { name: "व्रत तिथियां", url : `${MAIN_URL_HINDI}vrat.php`,
                sublinksL2 :[
                    { name: "एकादशी 2024", url: `${MAIN_URL_HINDI}vrat/ekadashi.php`,
                        sublinksL3 : [
                            { name: "सफला एकादशी 2024", url: `${MAIN_URL_HINDI}vrat/ekadashi/saphala-ekadashi.php`, },
                            { name: "पुत्रदा एकादशी 2024", url: `${MAIN_URL_HINDI}vrat/ekadashi/putrada-ekadashi.php`, }
                        ]
                    },
                    { name: "पूर्णिमा व्रत", url: `${MAIN_URL_HINDI}vrat/purnima.php`,
                        sublinksL3 : [
                        { name: "पौष पूर्णिमा 2024", url: `${MAIN_URL_HINDI}vrat/purnima/paush-purnima.php`, }
                        ]
                    },
                    { name: "अमावस्या व्रत तिथि", url: `${MAIN_URL_HINDI}vrat/amavasya.php`,
                        sublinksL3 : [
                        { name: "पौष अमावस्या", url: `${MAIN_URL_HINDI}vrat/amavasya/pausha-amavasya.php`, }
                        ]
                    },
                    { name: "प्रदोष व्रत", url: `${MAIN_URL_HINDI}vrat/pradosh.php`,},
                    { name: "साप्ताहिक व्रत", url: `${MAIN_URL_HINDI}vrat/weekly-fast.php`, }
                ]
            },
            { name: "हिंदू अनुष्ठान और इसका महत्व", url : `${MAIN_URL_HINDI}hindu-rituals.php`,
                sublinksL2 :[
                    { name: "आरती का महत्व", url: `${MAIN_URL_HINDI}hindu-rituals/why-do-we-perform-aarti.php` },
                    { name: "मुंडन संस्कार क्या है और बच्चो का मुंडन क्यों किया जाता है ?", url: `${MAIN_URL_HINDI}hindu-rituals/mundan.php` },
                    { name: "धार्मिक कार्यों में पीताम्बर धारण क्यों?", url: `${MAIN_URL_HINDI}hindu-rituals/importance-of-pitambar-in-hindu-rituals.php` },
                    { name: "अन्नप्राशन संस्कार", url: `${MAIN_URL_HINDI}hindu-rituals/why-annaprashan-ceremony-is-important.php` },
                    { name: "अश्विन मास में श्राद्ध क्यों किए जाता है?", url: `${MAIN_URL_HINDI}hindu-rituals/why-shradh-is-observed-in-ashwin.php` },
                    { name: "उपवास के वैदिक लाभ", url: `${MAIN_URL_HINDI}hindu-rituals/why-do-people-keep-fast.php` },
                    { name: "रुद्राभिषेक करने के कारण और परिणाम", url: `${MAIN_URL_HINDI}hindu-rituals/why-do-we-perform-abhishekam-to-god.php` },
                    { name: "आकस्मिक मृत्यु या लापता व्यक्ति का अंतिम संस्कार", url: `${MAIN_URL_HINDI}hindu-rituals/funeral-rites-for-missing-or-accidental-death.php` },
                    { name: "भगवान के विभिन्न अवतार", url: `${MAIN_URL_HINDI}hindu-rituals/why-did-the-god-take-various-incarnations.php` },
                    { name: "अधिकमास या मलमास", url: `${MAIN_URL_HINDI}hindu-rituals/adhikmas-or-malmas.php` },
                    { name: "ईश्वर की कृपा", url: `${MAIN_URL_HINDI}hindu-rituals/grace-of-god.php` },
                    { name: "आचमन", url: `${MAIN_URL_HINDI}hindu-rituals/aachman.php` },
                    { name: "कपाल क्रिया", url: `${MAIN_URL_HINDI}hindu-rituals/kapaal-kriya-during-funeral.php` },
                    { name: "कलश स्थापना", url: `${MAIN_URL_HINDI}hindu-rituals/why-and-when-do-we-use-kalash.php` },
                    { name: "गंगाजल", url: `${MAIN_URL_HINDI}hindu-rituals/importance-of-gangajal.php` },
                    { name: "जातकर्म व नामकरण संस्कार", url: `${MAIN_URL_HINDI}hindu-rituals/importance-of-naming-ceremony.php` }
                ]
            },
            { name: "जयंती", url : `${MAIN_URL_HINDI}jayanti.php`,
                sublinksL2 :[
                    { name : "हनुमान जयंती", url : `${MAIN_URL_HINDI}jayanti/hanuman-jayanti.php`,}
                ]
            },
            { name: "मुहूर्त", url : `${MAIN_URL_HINDI}shubh-muhurat.php`,}
        ]
    },
    { name: 'जीवन समस्या', url: '#',
    sublinks: [
        {name: "विवाह ज्योतिष", url: `${MAIN_URL}marriage-astrology-in-hindi` ,
            sublinksL2: [
                { name: "कैसा होगा आपका जीवनसाथी", url: `${MAIN_URL_HINDI}marriage-astrology/know-about-life-partner.php` },
                { name: "प्रेम विवाह", url: `${MAIN_URL_HINDI}marriage-astrology/love-marriage.php` },
                { name: "विवाह में देरी", url: `${MAIN_URL_HINDI}marriage-astrology/late-marriage-solutions.php` },
                { name: "मंगल दोष - मांगलिक दोष", url: `${MAIN_URL_HINDI}marriage-astrology/manglik-dosha-reasons-and-solutions.php` },
                { name: "कुंडली मिलान", url: `${MAIN_URL_HINDI}marriage-astrology/kundli-matching-for-marriage.php` },
                { name: "विवाह से पूर्व ऑनलाइन परामर्श", url: `${MAIN_URL_HINDI}marriage-astrology/pre-marriage-counseling.php` },
                { name: "वैवाहिक जीवन की समस्याएं", url: `${MAIN_URL_HINDI}marriage-astrology/married-life-solutions.php` },
                { name: "विवाह के बाद दिया जाने वाला परामर्श", url: `${MAIN_URL_HINDI}marriage-astrology/post-marriage-counseling.php` },
                { name: "तलाक और अलगाव", url: `${MAIN_URL_HINDI}marriage-astrology/divorce.php` }
            ]
        },
        {
            name: "बिजनेस एस्ट्रोलॉजी",
            url: `${MAIN_URL_HINDI}business-astrology.php`,
            sublinksL2: [
                { name: "नए व्यापार की योजना", url: `${MAIN_URL_HINDI}business-astrology/best-time-to-start-new-business.php` },
                { name: "बिजनेस का चयन", url: `${MAIN_URL_HINDI}business-astrology/right-business-selection.php` },
                { name: "बिजनेस के लिए शुभ नाम", url: `${MAIN_URL_HINDI}business-astrology/lucky-business-name.php` },
                { name: "बिजनेस पार्टनरशिप", url: `${MAIN_URL_HINDI}business-astrology/business-partnership.php` },
                { name: "ज्योतिष के अनुसार बिजनेस का विस्तार", url: `${MAIN_URL_HINDI}business-astrology/best-time-to-expand-business.php` },
                { name: "व्यापार में असफलता के कारण", url: `${MAIN_URL_HINDI}business-astrology/success-in-business.php` },
                { name: "फॅमिली बिज़नेस ज्योतिष", url: `${MAIN_URL_HINDI}business-astrology/family-business.php` }
            ]
        },
        {
            name: "करियर ज्योतिष",
            url: `${MAIN_URL_HINDI}career-astrology.php`,
            sublinksL2: [
                { name: "जन्म तिथि से चुनें 10वीं और 12वीं के बाद सही विषय", url: `${MAIN_URL_HINDI}career-astrology/best-courses-after-10th.php` },
                { name: "ग्रहों के आधार पर करियर का चयन", url: `${MAIN_URL_HINDI}career-astrology/right-career-selection.php` },
                { name: "नौकरी या व्यवसाय में से क्या चुने", url: `${MAIN_URL_HINDI}career-astrology/job-or-business.php` },
                { name: "सरकारी नौकरी का योग", url: `${MAIN_URL_HINDI}career-astrology/government-job.php` },
                { name: "जन्म कुंडली में नौकरी को लेकर परेशानी या फिर नौकरी का योग ना होना", url: `${MAIN_URL_HINDI}career-astrology/no-job-looking-for-job.php` },
                { name: "कुंडली में नौकरी को बदलने या प्रमोशन मिलने का योग", url: `${MAIN_URL_HINDI}career-astrology/job-promotion.php` }
            ]
        },
        {
            name: "कोर्ट केस/कानूनी मुकदमे",
            url: `${MAIN_URL_HINDI}court-case-astrology`,
            sublinksL2: [
                { name: "बंधन योग", url: `${MAIN_URL_HINDI}court-cases/bandhan-yoga.php`, }
            ]
        },
        {
            name: "संपत्ति ज्योतिष",
            url: `${MAIN_URL_HINDI}property.php`,
            sublinksL2: [
                { name: "कुंडली में संपत्ति विवाद के लिए ज्योतिष समाधान", url: `${MAIN_URL_HINDI}property/property-disputes.php` },
                { name: "आपके जन्म चार्ट में पैतृक संपत्ति", url: `${MAIN_URL_HINDI}property/family-property.php` },
                { name: "क्या मैं कभी अपना घर खरीद पाउंगा?", url: `${MAIN_URL_HINDI}property/property-yoga.php` }
            ]
        },
        {
            name: "स्वास्थ्य ज्योतिष",
            url: `${MAIN_URL_HINDI}health-astrology.php`,
            sublinksL2: [
                { name: "जन्म कुंडली के आधार पर रोग का समय", url: `${MAIN_URL_HINDI}health-astrology/planetary-combinations-for-diseases.php` },
                { name: "जन्म कुंडली में नशा और शराब की लत का संकेत", url: `${MAIN_URL_HINDI}health-astrology/drug-addiction.php` },
                { name: "जन्म कुंडली में विशिष्ट रोग के संकेत", url: `${MAIN_URL_HINDI}health-astrology/indication-of-diseases.php` },
                { name: "यौन स्वास्थ्य, इच्छा और आदत", url: `${MAIN_URL_HINDI}health-astrology/sex-health-habits.php` },
                { name: "आपका जीवन काल - दीर्घायु के योग का आकलन", url: `${MAIN_URL_HINDI}health-astrology/know-your-life-span.php` }
            ]
        },
        { name: "ज्योतिष में ऋण और कर्ज़", url: `${MAIN_URL_HINDI}loan-and-debts.php`, },
        { name: "सट्टेबाजी और जुआ ", url: `${MAIN_URL_HINDI}astrology-for-betting.php`, },
        {
            name: "कुंडली में विदेश में बसाव", url: `${MAIN_URL_HINDI}foreign-travel.php`,
            sublinksL2: [
                { name: "आपकी कुंडली में निर्वासन और प्रवास समस्याएं", url: `${MAIN_URL_HINDI}foreign-travel/deportation-issues.php` , }
            ]
        },
        {
            name: "पिछले जीवन का विश्लेषण", url: `${MAIN_URL_HINDI}life-predictions.php`,
            sublinksL2: [
                { name: "विस्तृत जीवन भविष्यवाणियां", url: `${MAIN_URL_HINDI}life-predictions/life-event-prediction.php`, },
                { name: "कर्म और कर्म सुधार के सिद्धांत", url: `${MAIN_URL_HINDI}life-predictions/karma-correction.php` , }
            ]
        },
        {
            name: "जन्म समय सुधार", url: `${MAIN_URL_HINDI}time-rectification.php` ,
            sublinksL2: [
                { name: "लग्न के साथ जन्म समय सुधार की भविष्यवाणी", url: `${MAIN_URL_HINDI}time-rectification/birth-time-rectification-with-ascendant.php` , }
            ]
        },
        {
            name: "बाल ज्योतिष", url: `${MAIN_URL_HINDI}children-astrology.php` ,
            sublinksL2: [
                { name: "ज्योतिष में संतान की योजना के लिए सबसे उपयुक्त समय", url: `${MAIN_URL_HINDI}children-astrology/best-time-to-plan-child.php` },
                { name: "बच्चों का नामकरण - ज्योतिष से जानें अपने बच्चों का सही नाम", url: `${MAIN_URL_HINDI}children-astrology/best-baby-name.php` },
                { name: "ज्योतिष से आईवीएफ या गर्भावस्था की संभावना जानें", url: `${MAIN_URL_HINDI}children-astrology/ivf-pregnancy.php` },
                { name: "जन्म कुंडली में संतान गोद लेना", url: `${MAIN_URL_HINDI}children-astrology/child-adoption.php` },
                { name: "माता-पिता के बच्चे के संबंध और उसके प्रभावकारी कारक", url: `${MAIN_URL_HINDI}children-astrology/parent-child-relationship.php` }
            ]
        },
        {
            name: "वास्तु ज्योतिष", url: `${MAIN_URL_HINDI}vastu.php` ,
            sublinksL2: [
                { name: "गृह वास्तु - वास्तु शास्त्र के आवश्यक तरीके", url: `${MAIN_URL_HINDI}vastu/vastu-for-home.php` },
                { name: "पूजा घर के लिए वास्तु शास्त्र के सुझाव", url: `${MAIN_URL_HINDI}vastu/pooja-room-vastu.php` },
                { name: "शयन कक्ष संबंधी वास्तु", url: `${MAIN_URL_HINDI}vastu/vastu-for-bedroom.php` },
                { name: "अध्ययन कक्ष के लिए वास्तु टिप्स", url: `${MAIN_URL_HINDI}vastu/study-room-vastu.php` },
                { name: "रसोई घर के लिए वास्तु", url: `${MAIN_URL_HINDI}vastu/vastu-for-kitchen.php` },
                { name: "शौचालय के वास्तु नियम", url: `${MAIN_URL_HINDI}vastu/vastu-for-toilet.php` },
                { name: "बैठक कक्ष के लिए वास्तु", url: `${MAIN_URL_HINDI}vastu/living-room-vastu.php` },
                { name: "घर के मुख्य द्वार हेतु वास्तु", url: `${MAIN_URL_HINDI}vastu/main-door-vastu.php` },
                { name: "वास्तु शास्त्र में अतिथि कक्ष के लिए कुछ युक्तियाँ", url: `${MAIN_URL_HINDI}vastu/vastu-for-guest-room.php` },
                { name: "ऊपरी पानी की टंकी का वास्तु", url: `${MAIN_URL_HINDI}vastu/overhead-tank-vastu.php` },
                { name: "कार पार्किंग एवं गैरेज का वास्तु", url: `${MAIN_URL_HINDI}vastu/car-parking-garage-vastu.php` },
                { name: "पूर्व-मुखी घर के लिए वास्तु", url: `${MAIN_URL_HINDI}vastu/east-facing-house-vastu.php` },
                { name: "मलकुंड हेतु वास्तु", url: `${MAIN_URL_HINDI}vastu/vastu-for-septic-tank.php` },
                { name: "सीढियों हेतु वास्तु", url: `${MAIN_URL_HINDI}vastu/staircase-vastu.php` },
                { name: "दक्षिण मुखी घर और संपत्ति के लिए वास्तु", url: `${MAIN_URL_HINDI}vastu/south-facing-house-vastu.php` }
            ]
        },
        {
            name: "व्यावसायिक वास्तु", url: `${MAIN_URL_HINDI}vastu-for-commercial.php` ,
            sublinksL2: [
                { name: "कारखाने के लिए वास्तु टिप्स", url: `${MAIN_URL_HINDI}vastu-for-commercial/vastu-factory.php` },
                { name: "दुकान/शोरूम हेतु वास्तु", url: `${MAIN_URL_HINDI}vastu-for-commercial/vastu-for-shops-and-showroom.php` },
                { name: "कार्यालय हेतु वास्तु", url: `${MAIN_URL_HINDI}vastu-for-commercial/office-vastu.php` },
                { name: "प्लाट के चयन के लिए वास्तु", url: `${MAIN_URL_HINDI}vastu-for-commercial/vastu-for-plots.php` },
                { name: "अस्पताल के लिए वास्तु", url: `${MAIN_URL_HINDI}vastu-for-commercial/vastu-for-hospital.php` },
                { name: "विद्यालय के लिए वास्तु शास्त्र", url: `${MAIN_URL_HINDI}vastu-for-commercial/vastu-for-school.php` },
                { name: "फ्लैट और अपार्टमेंट के लिए वास्तु शास्त्र", url: `${MAIN_URL_HINDI}vastu-for-commercial/vastu-for-flats-apartments.php` },
                { name: "शॉपिंग मॉल के लिए वास्तु", url: `${MAIN_URL_HINDI}vastu-for-commercial/vastu-for-mall.php` }
            ]
        },
        { name: "शेयर बाजार और व्यापार", url: `${MAIN_URL_HINDI}share-market-astrology.php` , }
    ]

    },
    {
        name: 'कैलकुलेटर', url: `${MAIN_URL_HINDI}calculator.php`,
    },
    {
        name: 'कुंडली', url: '#',
        sublinks: [
            { name: "कुंडली", url: `${MAIN_URL_HINDI}kundli.php`,},
            { name: "कुंडली मिलान", url: `${MAIN_URL}kundli-matching-in-hindi`,},
            { name: "कुंडली कैसे पढ़ें", url: `${MAIN_URL_HINDI}kundli/how-to-read-kundli.php`, },
        ]
    },
    { 
        name: 'सेवाएं', url: `${MAIN_URL_HINDI}services.php`, 
    },
    { name: 'बजरंगी धाम', url: '#',
        sublinks: [
            { name: "हमारे बारे में", url: `${MAIN_URL_HINDI}about-us.php`,},
            { name: "हमें संपर्क करें", url: `${MAIN_URL_HINDI}contact-us.php`,},
            { name: "हमें क्यों चुनें?", url: `${MAIN_URL_HINDI}how-to-judge-a-good-astrologer.php`,},
            { name: "आगामी दौरे", url: `${MAIN_URL_HINDI}dr-vinay-bajrangi-will-be-in-mumbai.php`,},
            { name: "कर्मा एस्ट्रो मोबाइल ऐप", url: `${MAIN_URL_HINDI}apps/karma-astro-app.php`, },
        ]
    },
    { name: "ब्लॉग ", url: `${MAIN_URL}blog/`, },
  ];

  export const PopularReportsContentHindi = [
      {
        title: "जानिए, क्या आप मांगलिक है या नहीं?",
        link: `${MAIN_URL_HINDI}services/online-report/mangal-dosha-calculator.php`,
      },
      {
        title: "क्या आप 2024 में यूपीएससी परीक्षा क्रैक कर पाएंगे?",
        link: `${MAIN_URL_HINDI}services/online-report/will-i-be-successful-in-upsc-exam.php`,
      },
    ]
