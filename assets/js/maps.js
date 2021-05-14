
let map;

// Different set of locations

let beachesLocations = [{
        coords: {
            lat: 28.062002,
            lng: -16.734416
        }, // Playa de las Américas
        content: `<h4 class="info-head">Playa de las Américas</h4>
        <div class="info-content">
        <ul>
        <li>Lifeguards<i class="fas fa-check beach-info-list"></i></li>
        <li>Showers<i class="fas fa-check beach-info-list"></i></li>
        <li>Toilets<i class="fas fa-check beach-info-list"></i></li>
        <li>Disabled Access<i class="fas fa-check beach-info-list"></i></li>
        </ul>
        </div>`
    },
    {
        coords: {
            lat: 28.068299,
            lng: -16.732840
        }, // Playa de Troya
        content: `<h4 class="info-head">Playa de Troya</h4>
        <div class="info-content">
        <ul>
        <li>Lifeguards<i class="fas fa-check beach-info-list"></i></li>
        <li>Toilets<i class="fas fa-check beach-info-list"></i></li>
        <li>Showers<i class="fas fa-times beach-info-list"></i></li>
        <li>Disabled Access<i class="fas fa-check beach-info-list"></i></li>
        </ul>
        </div>`
    },
    {
        coords: {
            lat: 28.084979,
            lng: -16.736895
        }, // Fanabe Beach
        content: `<h4 class="info-head">Playa de Fanabe</h4>
        <div class="info-content">
        <ul>
        <li>Lifeguards<i class="fas fa-check beach-info-list"></i></li>
        <li>Showers<i class="fas fa-check beach-info-list"></i></li>
        <li>Toilets<i class="fas fa-check beach-info-list"></i></li>
        <li>Disabled Access<i class="fas fa-times beach-info-list"></i></li>
        </ul>
        </div>`
    },
    {
        coords: {
            lat: 28.079775,
            lng: -16.735196
        }, // Playa la Pinta
        content: `<h4 class="info-head">Playa la Pinta</h4>
        <div class="info-content">
        <ul>
        <li>Lifeguards<i class="fas fa-check beach-info-list"></i></li>
        <li>Toilets<i class="fas fa-check beach-info-list"></i></li>
        <li>Showers<i class="fas fa-check beach-info-list"></i></li>
        <li>Disabled Access<i class="fas fa-check beach-info-list"></i></li>
        </ul>
        </div>`
    },
    {
        coords: {
            lat: 28.091385,
            lng: -16.744083
        }, // Playa el Duque
        content: `<h4 class="info-head">Playa el Duque</h4>
        <div class="info-content">
        <ul>
        <li>Lifeguards<i class="fas fa-check beach-info-list"></i></li>
        <li>Toilets<i class="fas fa-check beach-info-list"></i></li>
        <li>Showers<i class="fas fa-check beach-info-list"></i></li>
        <li>Disabled Access<i class="fas fa-times beach-info-list"></i></li>
        </ul>
        </div>`
    },
    {
        coords: {
            lat: 28.051004,
            lng: -16.722282
        }, // Playa las Vistas
        content: `<h4 class="info-head">Playa las Vistas</h4>
        <div class="info-content">
        <ul>
        <li>Lifeguards<i class="fas fa-check beach-info-list"></i></li>
        <li>Toilets<i class="fas fa-check beach-info-list"></i></li>
        <li>Showers<i class="fas fa-times beach-info-list"></i></li>
        <li>Disabled Access<i class="fas fa-check beach-info-list"></i></li>
        </ul>
        </div>`
    },
    {
        coords: {
            lat: 28.050356,
            lng: -16.717902
        }, // Playa de Los Cristianos
        content: `<h4 class="info-head">Playa de Los Cristianos</h4>
        <div class="info-content">
        <ul>
        <li>Lifeguards<i class="fas fa-check beach-info-list"></i></li>
        <li>Toilets<i class="fas fa-check beach-info-list"></i></li>
        <li>Showers<i class="fas fa-check beach-info-list"></i></li>
        <li>Disabled Access<i class="fas fa-times beach-info-list"></i></li>
        </ul>
        </div>`
    },
];

let resortsLocations = [{
        coords: {
            lat: 28.064011,
            lng: -16.730419
        }, // Playa de Las Americas
        content: `<h4 class="info-head">Playa de Las Americas</h4>
        <p>One of the most popular destinations, but it can get a bit hectic at night. If you love staying out 'til 4am, this is the place for you</p>
        <div class="info-content">Explore More:<span class="info-website"><a target="blank" href="https://www.tripadvisor.ie/Tourism-g562820-Playa_de_las_Americas_Arona_Tenerife_Canary_Islands-Vacations.html"></span>Playa de las Americas</a></div>`
    },
    {
        coords: {
            lat: 28.050449,
            lng: -16.717319
        }, // Los Cristianos
        content: `<h4 class="info-head">Los Cristianos</h4>
        <p>A popular destination for your relaxing vacation. Littered with great restaurants and bars, this is perfect for the older traveller and those with young children.</p>
        <div class="info-content">Explore More:<span class="info-website"><a target="blank" href="https://www.tripadvisor.ie/Tourism-g659661-Los_Cristianos_Arona_Tenerife_Canary_Islands-Vacations.html"></span>Los Cristianos</a></div>`
    },
    {
        coords: {
            lat: 28.076599,
            lng: -16.731819
        }, // Costa Adeje
        content: `<h4 class="info-head">Costa Adeje</h4>
        <p>Popular for young families. Not too hectic so feel free to explore the many beaches, bars and restaurants.</p>
        <div class="info-content">Explore More: <span class="info-website"><a target="blank" href="https://www.tripadvisor.ie/Tourism-g662606-Costa_Adeje_Adeje_Tenerife_Canary_Islands-Vacations.html"></span>Costa Adeje</a></div>`
    },
    {
        coords: {
            lat: 28.084956,
            lng: -16.732529
        }, // San Eugenio Bajo
        content: `<h4 class="info-head">San Eugenio Bajo</h4>
        <p>A more expensive part of the island with numerous 5 star hotels. Expect to pay a pretty penny for all that luxury</p>
        <div class="info-content">Explore More: <span class="info-website"><a target="blank" href="https://www.myguidetenerife.com/nightlife/san-eugenio"></span>San Eugenio Bajo</a></div>`
    },
    {
        coords: {
            lat: 28.100725,
            lng: -16.755217
        }, // La Caletta
        content: `<h4 class="info-head">La Caletta</h4>
        <p>A much more traditional location in a gorgeous fishing village. Very quiet and laid back, but you will have to go searching for a beach.</p>
        <div class="info-content">Explore More: <span class="info-website"><a target="blank" href="https://www.tripadvisor.ie/Attractions-g796999-Activities-La_Caleta_Costa_Adeje_Adeje_Tenerife_Canary_Islands.html"></span>La Caletta</a></div>`
    },
];

let restaurantsLocations = [{
        coords: {
            lat: 28.054874,
            lng: -16.730243
        }, // The Las Vegas Grill
        content: `<h4 class="info-head">The Las Vegas Grill</h4>
        <h6 class="info-address">Av. las Américas, 38660 Playa de la Américas</h6>
        <div class="info-content">Phone:<span class="phone-num">+34 922 89 86 73</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://www.vegasgrilltenerife.com/"></span> Las Vegas Grill</a></div>`
    },
    {
        coords: {
            lat: 28.054674,
            lng: -16.731169
        }, // Hard Rock Cafe
        content: `<h4 class="info-head">The Hard Rock Cafe</h4>
        <h6 class="info-address"> Pirámide de Arona, Avda. Las Americas s/n, Playa de las Américas - Arona, Tenerife 38660 ES</h6>
        <div class="info-content">Phone:<span class="phone-num">+34 922 05 50 22</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="https://www.hardrockcafe.com/location/tenerife/"></span> Hard Rock Cafe</a></div>`
    },
    {
        coords: {
            lat: 28.079055,
            lng: -16.733596
        }, // Harley's Restaurant
        content: `<h4 class="info-head">Harley's Restaurant</h4>
        <h6 class="info-address"> Av. de España, 338670 Adeje, Santa Cruz De Tenerife</h6>
        <div class="info-content">Phone:<span class="phone-num">+34 922 71 22 90</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="https://www.harleystenerife.com/"></span> Harley's</a></div>`
    },
    {
        coords: {
            lat: 28.073268,
            lng: -16.732540
        }, // Bobby's III Indian Tandoori Restaurant
        content: `<h4 class="info-head">Bobby's III Indian Tandoori Restaurant</h4>
        <h6 class="info-address"> 2 Centro comercial Pueblo Canario Avenida San, Av. Eugenio Dominguez Alfonso, 38660 Costa Adeje, Santa Cruz de Tenerife, Spain</h6>
        <div class="info-content">Phone:<span class="phone-num">+34 922 79 68 16</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://www.restaurantbobbys.com/"></span> Bobby's Indian Tandoori</a></div>`
    },
    {
        coords: {
            lat: 28.069730,
            lng: -16.728980
        }, // Cafe Bar Lormar
        content: `<h4 class="info-head">Cafe Bar Lormar</h4>
        <h6 class="info-address"> Calle Venezuela, 2, 38660 Costa Adeje, Santa Cruz de Tenerife, Spain</h6>
        <div class="info-content">Phone:<span class="phone-num">+34 657 13 74 00</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="https://www.facebook.com/Bar-Cafeteria-Lormar-1022883861129091/?ref=page_internal&path=%2FBar-Cafeteria-Lormar-1022883861129091%2F"></span> Cafe Bar Lormar</a></div>`
    },
    {
        coords: {
            lat: 28.066270,
            lng: -16.728040
        }, // Ginger Restaurant
        content: `<h4 class="info-head">Ginger Restaurant</h4>
        <h6 class="info-address"> Playa de las Américas, 38660, Santa Cruz de Tenerife, Spain</h6>
        <div class="info-content">Phone:<span class="phone-num">+34 651 45 18 93</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="https://www.facebook.com/Bar-Cafeteria-Lormar-1022883861129091/?ref=page_internal&path=%2FBar-Cafeteria-Lormar-1022883861129091%2F"></span> Ginger Restaurant</a></div>`
    },
    {
        coords: {
            lat: 28.055290300997246, 
            lng: -16.711091647107608
        }, // Pistacho Coffee Brunch Tenerife Sur
        content: `<h4 class="info-head">Pistacho Coffee Brunch Tenerife Sur</h4>
        <h6 class="info-address">Av. Juan Carlos I, s/n, 38640 Los Cristianos, Santa Cruz de Tenerife, Spain</h6>
        <div class="info-content">Phone:<span class="phone-num">+34 608 296 851</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://pistachocoffeebrunch.com/"></span> Pistacho Coffee Brunch Tenerife Sur</a></div>`
    },
    {
        coords: {
            lat: 28.061520721609174, 
            lng: -16.733790627338273
        }, // The Burger Cafe - VEGAN & MEAT LOVERS
        content: `<h4 class="info-head">The Burger Cafe - VEGAN & MEAT LOVERS</h4>
        <h6 class="info-address">Paseo Guadalajara, 50, 38650 Playa de la Américas, Santa Cruz de Tenerife, Spain</h6>
        <div class="info-content">Phone:<span class="phone-num">+34 922 202 178</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="https://www.theburgercafe.es/"></span> The Burger Cafe</a></div>`
    },
    {
        coords: {
            lat: 28.057367147999205, 
            lng: -16.724870459416042
        }, // Restaurante Oriental Gran Familia
        content: `<h4 class="info-head">Restaurante Oriental Gran Familia</h4>
        <h6 class="info-address">Av. Antonio Dominguez, 42, locales 41, 38660 Playa de la Américas, Santa Cruz de Tenerife, Spain</h6>
        <div class="info-content">Phone:<span class="phone-num">+34 922 753 842</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://www.orientalgranfamilia.com/"></span> Restaurante Oriental Gran Familia</a></div>`
    },
    {
        coords: {
            lat: 28.069730,
            lng: -16.728980
        }, // Restaurante Overseas
        content: `<h4 class="info-head">Restaurante Overseas</h4>
        <h6 class="info-address">Centro Comercial Passarela Oasis, Av. San Francisco, 6, Local B23, 38650 Los Cristianos, Santa Cruz de Tenerife, Spain</h6>
        <div class="info-content">Phone:<span class="phone-num">+34 922 792 013</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://www.overseasasianrestaurant.com/"></span> Restaurante Overseas</a></div>`
    },
];

let themeparksLocations = [{
        coords: {
            lat: 28.071750,
            lng: -16.726960
        }, // Siam Park
        content: `<h4 class="info-head">Siam Park</h4>
        <h6 class="info-address">Avda. Siam Park s/n. Adeje</h6>
        <div class="info-content">Phone: <span class="phone-num">+34 822 070 000</span></div>
        <div class="info-content">Website: <span class="info-website"><a target="blank" href="https://www.siampark.net/en/"></span> Siam Park</a></div>`
    },
    {
        coords: {
            lat: 28.079803,
            lng: -16.727881
        }, // Aqualand
        content: `<h4 class="info-head">Aqualand</h4>
        <h6 class="info-address">Av. Austria, 15, 38660 Costa Adeje, Santa Cruz de Tenerife, Spain</h6>
        <div class="info-content">Phone: <span class="phone-num">+34 922 71 52 66</span></div>
        <div class="info-content">Website: <span class="info-website"><a target="blank" href="https://www.aqualand.es/costa-adeje/en/"></span> Aqualand</a></div>`
    },
    {
        coords: {
            lat: 28.077745,
            lng: -16.736128
        }, // Puerto Colon
        content: `<h4 class="info-head">Puerto Colon</h4>
        <h6 class="info-address">Puerto colon, Playa de la Américas, Santa Cruz de Tenerife, Spain</h6>
        <div class="info-content">Phone: <span class="phone-num">n/a</span></div>
        <div class="info-content">Website: <span class="info-website"><a target="blank" href="https://www.tripadvisor.ie/Attraction_Review-g662606-d17534848-Reviews-Puerto_Colon-Costa_Adeje_Adeje_Tenerife_Canary_Islands.html"></span> Puerto Colon</a></div>`
    },
    {
        coords: {
            lat: 28.082111934914035,
            lng: -16.69540686986872
        }, // Jungle Park
        content: `<h4 class="info-head">Jungle Park</h4>
        <h6 class="info-address">Urb. Águilas del Teide, s/n, Km. 3, 38640 Arona, Santa Cruz de Tenerife, Spain</h6>
        <div class="info-content">Phone: <span class="phone-num">+34 922 72 90 10</span></div>
        <div class="info-content">Website: <span class="info-website"><a target="blank" href="https://www.junglepark.es/en/"></span> Jungle Park</a></div>`
    },
    {
        coords: {
            lat: 28.062986547815516,
            lng: -16.691604159246634
        }, // Monkey Park
        content: `<h4 class="info-head">Monkey Park</h4>
        <h6 class="info-address">Camino Moreque, Camino Real Llano Azul, 38627, Santa Cruz de Tenerife, Spain</h6>
        <div class="info-content">Phone: <span class="phone-num">+34 922 79 07 20</span></div>
        <div class="info-content">Website: <span class="info-website"><a target="blank" href="http://monkeypark.com/"></span> Monkey Park</a></div>`
    },
];

let hotelsLocations = [{
        coords: {
            lat: 28.121730,
            lng: -16.774910
        }, // Hard Rock Hotel
        content: `<h4 class="info-head">Hard Rock Hotel</h4>
        <h6 class="info-address">Avenida de Adeje 300, s/n38678 Playa Paraíso</h6>
        <div class="info-content">Phone: <span class="phone-num">1-855-537-4580</span></div>
        <div class="info-content">Website: <span class="info-website"><a target="blank" href="https://https://www.hardrockhotels.com/tenerife/"></span> Hard Rock Hotel</a></div>`
    },
    {
        coords: {
            lat: 28.099941481512648,
            lng: -16.751552918628782
        }, // Royal Hideaway Corales Suites
        content: `<h4 class="info-head">Royal Hideaway Corales Suites</h4>
        <h6 class="info-address">Avenida Virgen de Guadalupe 21 Playa La Enramada, La Caleta 38679 Adeje Spain</h6>
        <div class="info-content">Phone: <span class="phone-num">1 800 200 032</span></div>
        <div class="info-content">Website: <span class="info-website"><a target="blank" href="https://www.barcelo.com/en-gb/royal-hideaway-corales-suites/"></span> Royal Hideaway Corales Suites</a></div>`
    },
    {
        coords: {
            lat: 28.079156340425996,
            lng: -16.733611697230216
        }, // Flamingo Beach Mate
        content: `<h4 class="info-head">Flamingo Beach Mate</h4>
        <h6 class="info-address">Av. de España, 5, 38660 Costa Adeje, Santa Cruz de Tenerife, Spain</h6>
        <div class="info-content">Phone: <span class="phone-num">+34 922 712 029</span></div>
        <div class="info-content">Website: <span class="info-website"><a target="blank" href="https://www.flamingobeachmate.com/en/"></span> Flamingo Beach Mate</a></div>`
    },
    {
        coords: {
            lat: 28.080511282315467, 
            lng: -16.73401123040757
        }, // Hovima La Pinta
        content: `<h4 class="info-head">Hovima La Pinta</h4>
        <h6 class="info-address">Av. de España, 3, 38660 Costa Adeje, Santa Cruz de Tenerife, Spain</h6>
        <div class="info-content">Phone: <span class="phone-num">+34 922 715 558</span></div>
        <div class="info-content">Website: <span class="info-website"><a target="blank" href="https://www.hovimalapinta.com/"></span> Hovima La Pinta</a></div>`
    },
    {
        coords: {
            lat: 28.076093888433988, 
            lng: -16.73373655132792
        }, // Hotel Jardín Tropical
        content: `<h4 class="info-head">Hotel Jardín Tropical</h4>
        <h6 class="info-address">Calle Gran Bretaña, s/n, 38660 Costa Adeje, Santa Cruz de Tenerife, Spain</h6>
        <div class="info-content">Phone: <span class="phone-num">+34 912 186 256</span></div>
        <div class="info-content">Website: <span class="info-website"><a target="blank" href="https://www.jardin-tropical.com/"></span> Hotel Jardín Tropical</a></div>`
    },
    {
        coords: {
            lat: 28.0723678264247,  
            lng: -16.73190382706111
        }, // H10 Gran Tinerfe
        content: `<h4 class="info-head">H10 Gran Tinerfe</h4>
        <h6 class="info-address">Av. Rafael Puig Lluvina, 13, 38660 Costa Adeje, Santa Cruz de Tenerife, Spain</h6>
        <div class="info-content">Phone: <span class="phone-num">+34 922 791 200</span></div>
        <div class="info-content">Website: <span class="info-website"><a target="blank" href="https://www.h10hotels.com/en/tenerife-hotels/h10-gran-tinerfe?utm_source=Google%20My%20Business&utm_medium=Boton%20sitio%20web&utm_campaign=HGT"></span> H10 Gran Tinerfe</a></div>`
    },
    {
        coords: {
            lat: 28.06471348380839,  
            lng: -16.731698206680054
        }, // Sol Tenerife
        content: `<h4 class="info-head">Sol Tenerife</h4>
        <h6 class="info-address">Av. Rafael Puig Lliviana 12, 38660 Tenerife, Santa Cruz de Tenerife, Spain</h6>
        <div class="info-content">Phone: <span class="phone-num">+34 912 764 747</span></div>
        <div class="info-content">Website: <span class="info-website"><a target="blank" href="https://www.melia.com/es/hoteles/espana/tenerife/sol-tenerife/index.html"></span> Sol Tenerife</a></div>`
    },
    {
        coords: {
            lat: 28.057432847644165,  
            lng: -16.73168535560678
        }, // Hotel Best Tenerife
        content: `<h4 class="info-head">Hotel Best Tenerife</h4>
        <h6 class="info-address">Calle Antonio Dominguez Alfonso, 6, 38660 Playa de la Américas, Santa Cruz de Tenerife, Spain</h6>
        <div class="info-content">Phone: <span class="phone-num">+34 922 792 751</span></div>
        <div class="info-content">Website: <span class="info-website"><a target="blank" href="http://www.besthotels.es/best-tenerife.html"></span> Hotel Best Tenerife</a></div>`
    },
    {
        coords: {
            lat: 28.054486349371857, 
            lng: -16.709307613306958
        }, // Aguamar
        content: `<h4 class="info-head">Aguamar</h4>
        <h6 class="info-address">Calle Albani, s/n, 38650 Los Cristianos, Santa Cruz de Tenerife, Spain</h6>
        <div class="info-content">Phone: <span class="phone-num">+34 922 794 861</span></div>
        <div class="info-content">Website: <span class="info-website"><a target="blank" href="http://www.apartamentosaguamar.com/"></span> Aguamar</a></div>`
    },
    {
        coords: {
            lat: 28.06383191485563,  
            lng: -16.713634843738497
        }, // Hotel Gran Oasis Resort
        content: `<h4 class="info-head">Hotel Gran Oasis Resort</h4>
        <h6 class="info-address">Calle Meandro, 3, 38640 Arona, Santa Cruz de Tenerife, Spain</h6>
        <div class="info-content">Phone: <span class="phone-num">+34 922 788 482</span></div>
        <div class="info-content">Website: <span class="info-website"><a target="blank" href="https://www.granoasisresort.com/"></span> Hotel Gran Oasis Resort</a></div>`
    },
];

let barsLocations = [{
        coords: {
            lat: 28.078109,
            lng: -16.732557
        }, // The Temple Bar
        content: `<h4 class="info-head">Temple Bar</h4>
        <h6 class="info-address">Av. de Colón, 3, 38660 Costa Adeje, Santa Cruz de Tenerife, Spain</h6>
        <div class="info-content">Email: <span class="phone-num">templebar@outlook.com</span></div>
        <div class="info-content">Website: <span class="info-website"><a target="blank" href="https://www.facebook.com/templebartenerife/"></span> Temple Bar</a></div>`
    },
    {
        coords: {
            lat: 28.06074810357343, 
            lng: -16.73259988794651
        }, // The Dubliner Irish Pub
        content: `<h4 class="info-head">The Dubliner Irish Pub</h4>
        <h6 class="info-address">Calle México, 38660 Playa de la Américas, Santa Cruz de Tenerife, Spain</h6>
        <div class="info-content">Phone: <span class="phone-num">+34 922 793 903</span></div>
        <div class="info-content">Website: <span class="info-website"><a target="blank" href="https://m.facebook.com/THE-DUBLINER-BAR-TENERIFE-363956496609/"></span> The Dubliner Irish Pub</a></div>`
    },
    {
        coords: {
            lat: 28.055518172598298, 
            lng: -16.729242114934202
        }, // The Hole In The Wall
        content: `<h4 class="info-head">The Hole In The Wall</h4>
        <h6 class="info-address">Calle Luis Diaz de Losada, 2, 38650 Arona, Santa Cruz de Tenerife, Spain</h6>
        <div class="info-content">Email: <span class="phone-num">deeflah@live.co.uk</span></div>
        <div class="info-content">Website: <span class="info-website"><a target="blank" href="https://www.facebook.com/templebartenerife/"></span> The Hole In The Wall</a></div>`
    },
    {
        coords: {
            lat: 28.055802215664915, 
            lng: -16.730905084422464,
        }, // Harry's Bar
        content: `<h4 class="info-head">Harry's Bar</h4>
        <h6 class="info-address">Av. las Américas, 5, 38660 Playa de la Américas, Santa Cruz de Tenerife, Spain</h6>
        <div class="info-content">Phone: <span class="phone-num">+34922777628</span></div>
        <div class="info-content">Website: <span class="info-website"><a target="blank" href="http://www.harrysbar.es/"></span> Harry's Bar</a></div>`
    },
    {
        coords: {
            lat: 28.063622573433406, 
            lng: -16.730465202153137
        }, // Leonardo's
        content: `<h4 class="info-head">Leonardo's</h4>
        <h6 class="info-address">Av. Rafael Puig Lluvina, 11, 38650 Arona, Santa Cruz de Tenerife, Spain</h6>
        <div class="info-content">Email: <span class="phone-num">leonardossportsbartenerife@gmail.com</span></div>
        <div class="info-content">Website: <span class="info-website"><a target="blank" href="https://www.facebook.com/Leonardos-sportsbar-Tenerife-105528407582774/"></span> Leonardo's</a></div>`
    },
    {
        coords: {
            lat: 28.069113525747557, 
            lng: -16.73257878276829
        }, // Monkey Beach Club
        content: `<h4 class="info-head">Monkey Beach Club</h4>
        <h6 class="info-address">Avenida Rafael Puig Lluvinas 3, 38660, Santa Cruz de Tenerife, Spain</h6>
        <div class="info-content">Phone: <span class="phone-num">+34 922 790 656</span></div>
        <div class="info-content">Website: <span class="info-website"><a target="blank" href="http://www.monkeybeachclub.com/"></span> Monkey Beach Club</a></div>`
    },
    {
        coords: {
            lat: 28.07963883264624, 
            lng: -16.73481363027522
        }, // Skybar
        content: `<h4 class="info-head">Skybar</h4>
        <h6 class="info-address">213 CC Terranova, 38660 Adeje, Santa Cruz de Tenerife, Spain</h6>
        <div class="info-content">Email: <span class="phone-num">gmselect2017@gmail.com</span></div>
        <div class="info-content">Website: <span class="info-website"><a target="blank" href="https://www.facebook.com/skybartenerife/"></span> Skybar</a></div>`
    },
    {
        coords: {
            lat: 28.081229107135872,
            lng: -16.7358650561361
        }, // Kaluna Beach Club
        content: `<h4 class="info-head">Kaluna Beach Club</h4>
        <h6 class="info-address">CC Centro Costa Local, 79, 38670 Costa Adeje, Santa Cruz de Tenerife, Spain</h6>
        <div class="info-content">Phone: <span class="phone-num">+34 922 713 889</span></div>
        <div class="info-content">Website: <span class="info-website"><a target="blank" href="http://www.kalunabeachclub.com/"></span> Kaluna Beach Club</a></div>`
    },
    {
        coords: {
            lat: 28.08389844353858, 
            lng: -16.73613327697571
        }, // Torviscas Beach Club
        content: `<h4 class="info-head">Torviscas Beach Club</h4>
        <h6 class="info-address">Playa de torviscas, 38670 Costa Adeje, Santa Cruz de Tenerife, Spain</h6>
        <div class="info-content">Phone: <span class="phone-num">+34 642 545 867</span></div> 
        <div class="info-content">Website: <span class="info-website"><a target="blank" href="https://www.facebook.com/torviscasbeachclub/"></span> Torviscas Beach Club</a></div>`
    },
    {
        coords: {
            lat: 28.086615040462032,
            lng: -16.737227618236197
        }, // Le Club
        content: `<h4 class="info-head">Le Club</h4>
        <h6 class="info-address">Urbanizacion Playa Fañabe, 3, 38660 Costa Adeje, Santa Cruz de Tenerife, Spain</h6>
        <div class="info-content">Phone: <span class="phone-num">+34 629 726 411</span></div>
        <div class="info-content">Website: <span class="info-website"><a target="blank" href="http://www.leclubtenerife.com/"></span> Le Club</a></div>`
    },
    
];

// Initialise map

function initMap(selectedLocations) {
    let myLatlng = {
        lat: 28.064011, 
        lng: -16.730419
    };
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12.5,
        center: myLatlng,
        disableDefaultUI: true,
    });

    // Change zoom level on smaller screen sizes

    if (window.screen.width < 768) {
        let myLatlng = {
            lat: 28.068741237359497,
            lng: -16.73056978670721
        };

        map = new google.maps.Map(document.getElementById("map"), {
            zoom: 13,
            center: myLatlng,
            disableDefaultUI: true,
            
        });
    }

    let labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // Iterate through the array of locations and place the markers on the map

    if (selectedLocations) {
        for (let i = 0; i < selectedLocations.length; i++) {
            let marker = new google.maps.Marker({
                position: selectedLocations[i].coords,
                map: map,
                animation: google.maps.Animation.DROP,
            });
                        
            // Create info window

            const infowindow = new google.maps.InfoWindow({
                content: selectedLocations[i].content,
            });

            // Close previous info window when new info window opened

            google.maps.event.addListener(marker, 'click', function () {
                if (currentInfoWindow != null) {
                    currentInfoWindow.close();
                }

                infowindow.open(map, marker);
                currentInfoWindow = infowindow;
            });

            var currentInfoWindow = null;
        }
    }
}

// Event listeners for button options to drop markers and call functions to display top 3

document.getElementById("beaches").addEventListener("click", () => {
    initMap(beachesLocations);
    topThreeBeaches();
});
document.getElementById("resorts").addEventListener("click", () => {
    initMap(resortsLocations);
    topThreeResorts();
});
document.getElementById("restaurants").addEventListener("click", () => {
    initMap(restaurantsLocations);
    topThreeRestaurants();
});
document.getElementById("themeparks").addEventListener("click", () => {
    initMap(themeparksLocations);
    topThreeThemeparks();
});
document.getElementById("hotels").addEventListener("click", () => {
    initMap(hotelsLocations);
    topThreeHotels();
});
document.getElementById("bars").addEventListener("click", () => {
    initMap(barsLocations);
    topThreeBars();
});

// Functions to display top 3 recommendations

function topThreeBeaches() {
    clearFavs();
    document.getElementById("beaches-favs").style.display = "block";
}

function topThreeResorts() {
    clearFavs();
    document.getElementById("resorts-favs").style.display = "block";
}

function topThreeRestaurants() {
    clearFavs();
    document.getElementById("restaurants-favs").style.display = "block";
}

function topThreeThemeparks() {
    clearFavs();
    document.getElementById("themeparks-favs").style.display = "block";
}

function topThreeHotels() {
    clearFavs();
    document.getElementById("hotels-favs").style.display = "block";
}

function topThreeBars() {
    clearFavs();
    document.getElementById("bars-favs").style.display = "block";
}

// Function to clear previous display of top 3 recommendations

function clearFavs() {
    document.getElementById("beaches-favs").style.display = "none";
    document.getElementById("resorts-favs").style.display = "none";
    document.getElementById("restaurants-favs").style.display = "none";
    document.getElementById("themeparks-favs").style.display = "none";
    document.getElementById("hotels-favs").style.display = "none";
    document.getElementById("bars-favs").style.display = "none";
}




