export interface CityData {
  name: string;
  slug: string;
  postalCode: string;
  population: string;
  coordinates: { lat: number; lng: number };
  distanceFromNantes: string;
  heroDescription: string;
  whyChooseText: string[];
  localVenues: string[];
  faqQuestions: {
    question: string;
    answer: string;
  }[];
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
  nearbyAreas: string[];
}

export const cities: CityData[] = [
  {
    name: "Saint-Nazaire",
    slug: "saint-nazaire",
    postalCode: "44600",
    population: "72 000",
    coordinates: { lat: 47.2733, lng: -2.2136 },
    distanceFromNantes: "60 km",
    heroDescription: "Ville portuaire et dynamique, Saint-Nazaire est le cadre idéal pour des événements mémorables. Que ce soit face à l'océan, dans les salles de réception du front de mer ou au cœur de la base sous-marine réaménagée, notre photobooth premium sublime chaque occasion avec des souvenirs photo uniques et personnalisés.",
    whyChooseText: [
      "Saint-Nazaire, deuxième ville de Loire-Atlantique avec ses 72 000 habitants, offre un cadre exceptionnel pour vos événements. Entre le front de mer, les espaces événementiels modernes et l'atmosphère unique de cette ville tournée vers l'océan, un photobooth apporte une touche d'animation inoubliable.",
      "Nos bornes photo sont parfaitement adaptées aux grandes salles de réception nazairiennes, aux mariages en bord de mer et aux événements d'entreprise dans les zones d'activité de Trignac et Montoir-de-Bretagne. Nous assurons la livraison, l'installation et la récupération de l'équipement sur place."
    ],
    localVenues: ["Théâtre Jean Bart", "Base sous-marine", "Salle Jacques Brel", "Espace René Racine", "VIP - Le Ruban Bleu"],
    faqQuestions: [
      {
        question: "Livrez-vous le photobooth directement à Saint-Nazaire ?",
        answer: "Oui, nous livrons et installons gratuitement notre photobooth à Saint-Nazaire et dans toute l'agglomération nazairienne (Trignac, Montoir-de-Bretagne, Pornichet). Notre équipe se charge de tout : transport, mise en place, assistance technique et récupération en fin d'événement."
      },
      {
        question: "Quels types d'événements organisez-vous avec le photobooth à Saint-Nazaire ?",
        answer: "Nous intervenons pour tous types d'événements à Saint-Nazaire : mariages dans les salles du front de mer, anniversaires, soirées d'entreprise dans les zones d'activité, événements culturels à la base sous-marine, galas, remises de diplômes et fêtes privées."
      },
      {
        question: "Peut-on louer un photobooth pour un mariage en bord de mer à Saint-Nazaire ?",
        answer: "Absolument ! Nos photobooths sont conçus pour fonctionner aussi bien en intérieur qu'en semi-extérieur abrité. Pour les mariages en bord de mer, nous recommandons un emplacement protégé du vent. Nous proposons des cadres personnalisés aux couleurs de votre mariage."
      }
    ],
    seoTitle: "Location Photobooth Saint-Nazaire | Borne Photo Mariage & Événements",
    seoDescription: "Location de photobooth premium à Saint-Nazaire (44600). Borne photo pour mariages, anniversaires et événements d'entreprise. Impressions illimitées, personnalisation complète. Livraison gratuite. Devis sous 24h.",
    seoKeywords: "photobooth saint-nazaire, location borne photo saint-nazaire, photobooth mariage saint-nazaire, borne selfie saint-nazaire, animation photo saint-nazaire, location photobooth 44600",
    nearbyAreas: ["Pornichet", "Trignac", "Montoir-de-Bretagne", "La Baule"]
  },
  {
    name: "Rezé",
    slug: "reze",
    postalCode: "44400",
    population: "42 000",
    coordinates: { lat: 47.1847, lng: -1.5491 },
    distanceFromNantes: "5 km",
    heroDescription: "Située aux portes de Nantes, Rezé est une ville vivante et familiale qui accueille chaque année de nombreux mariages, anniversaires et événements d'entreprise. Notre photobooth premium s'invite dans vos célébrations rezéennes pour créer des souvenirs photo originaux et personnalisés.",
    whyChooseText: [
      "Rezé, avec ses 42 000 habitants et sa proximité immédiate avec Nantes, est un lieu privilégié pour les événements. Entre le quartier historique de Trentemoult aux maisons colorées, les espaces événementiels modernes et les salles de réception, votre photobooth trouvera sa place idéale.",
      "Nous intervenons rapidement à Rezé grâce à notre proximité géographique. Que votre événement ait lieu à Trentemoult, au Château de Rezé, dans une salle des fêtes communale ou dans un espace privatisé, nous garantissons une installation rapide et un service impeccable."
    ],
    localVenues: ["Trentemoult", "Château de Rezé", "Salle Jean Macé", "Espace Diderot", "La Trocardière"],
    faqQuestions: [
      {
        question: "Intervenez-vous à Trentemoult pour des événements en bord de Loire ?",
        answer: "Oui, nous installons régulièrement notre photobooth à Trentemoult et ses alentours. Ce quartier pittoresque est un cadre magnifique pour des mariages et fêtes. Nous adaptons notre installation à l'espace disponible et proposons des accessoires assortis à l'ambiance colorée du quartier."
      },
      {
        question: "Combien de temps faut-il pour installer le photobooth à Rezé ?",
        answer: "L'installation prend environ 30 à 45 minutes. Nous arrivons généralement 1h30 avant le début de votre événement pour tout mettre en place sereinement. Étant basés à proximité de Rezé, nous pouvons intervenir très rapidement."
      },
      {
        question: "Proposez-vous des formules spéciales pour les événements d'entreprise à Rezé ?",
        answer: "Oui, nous proposons des formules corporate adaptées aux entreprises de la zone commerciale Atout Sud et du pôle d'activités de Rezé. Personnalisation aux couleurs de votre marque, impressions avec logo, et galerie numérique partageable sont incluses."
      }
    ],
    seoTitle: "Location Photobooth Rezé | Borne Photo Mariage & Événements (44400)",
    seoDescription: "Location de photobooth à Rezé (44400), près de Nantes. Borne photo premium pour mariages à Trentemoult, anniversaires et événements corporate. Impressions illimitées, livraison gratuite. Devis sous 24h.",
    seoKeywords: "photobooth rezé, location borne photo rezé, photobooth mariage rezé, borne selfie trentemoult, animation photo rezé, location photobooth 44400",
    nearbyAreas: ["Nantes Sud", "Bouguenais", "Saint-Sébastien-sur-Loire", "Vertou"]
  },
  {
    name: "Orvault",
    slug: "orvault",
    postalCode: "44700",
    population: "27 000",
    coordinates: { lat: 47.2714, lng: -1.6219 },
    distanceFromNantes: "7 km",
    heroDescription: "Commune résidentielle prisée au nord de Nantes, Orvault allie nature et modernité. Nos photobooths s'intègrent parfaitement dans les événements orvaltais, des mariages champêtres dans les domaines verdoyants aux soirées d'entreprise dans les espaces événementiels de la commune.",
    whyChooseText: [
      "Orvault, avec ses 27 000 habitants et ses espaces verts remarquables, offre un cadre verdoyant idéal pour vos événements. Le parc de la Chantrerie, le bois de la Gaudinière et les nombreux domaines privés sont des lieux prisés pour les mariages et réceptions.",
      "Notre service de location de photobooth à Orvault comprend la livraison gratuite, l'installation professionnelle et un accompagnement complet. Nous connaissons bien les lieux de réception orvaltais et adaptons notre installation à chaque espace."
    ],
    localVenues: ["Château de la Gobinière", "Parc de la Chantrerie", "Salle Horizinc", "Domaine de la Chantrerie", "Espace Capellia"],
    faqQuestions: [
      {
        question: "Peut-on installer un photobooth en extérieur à Orvault ?",
        answer: "Oui, nos bornes photo fonctionnent en extérieur sous réserve d'être abritées (tente, barnum, terrasse couverte). Les parcs et domaines d'Orvault offrent des cadres magnifiques. Nous fournissons une rallonge électrique si nécessaire et protégeons le matériel."
      },
      {
        question: "Intervenez-vous au Château de la Gobinière ?",
        answer: "Absolument ! Nous intervenons régulièrement au Château de la Gobinière et dans les autres salles de réception d'Orvault. Nous connaissons les contraintes d'accès et les espaces disponibles pour positionner idéalement le photobooth."
      },
      {
        question: "Quel est le délai de réservation pour un événement à Orvault ?",
        answer: "Nous recommandons de réserver 2 à 3 mois à l'avance, surtout pour les week-ends de mai à septembre. Cependant, nous pouvons parfois accepter des réservations de dernière minute selon nos disponibilités. Contactez-nous pour vérifier."
      }
    ],
    seoTitle: "Location Photobooth Orvault | Borne Photo Mariage & Fêtes (44700)",
    seoDescription: "Location de photobooth à Orvault (44700). Borne photo pour mariages au Château de la Gobinière, anniversaires et events corporate. Impressions illimitées, personnalisation. Devis gratuit.",
    seoKeywords: "photobooth orvault, location borne photo orvault, photobooth mariage orvault, animation photo orvault, borne selfie orvault, location photobooth 44700",
    nearbyAreas: ["Nantes Nord", "La Chapelle-sur-Erdre", "Sautron", "Saint-Herblain"]
  },
  {
    name: "Vertou",
    slug: "vertou",
    postalCode: "44120",
    population: "25 000",
    coordinates: { lat: 47.1681, lng: -1.4678 },
    distanceFromNantes: "10 km",
    heroDescription: "Vertou, charmante commune viticole au sud-est de Nantes, est réputée pour ses domaines viticoles et ses espaces naturels le long de la Sèvre. Notre photobooth apporte une animation festive et moderne à vos mariages dans les vignobles, anniversaires et événements au cœur du Muscadet.",
    whyChooseText: [
      "Vertou est une destination prisée pour les mariages et réceptions grâce à ses domaines viticoles, ses bords de Sèvre nantaise et son atmosphère bucolique. Avec 25 000 habitants, la commune offre de nombreux lieux de réception au charme authentique.",
      "Notre photobooth s'intègre parfaitement dans l'ambiance des domaines viticoles vertaviens. Nous proposons des cadres personnalisés aux couleurs de votre événement et adaptons notre installation aux contraintes de chaque lieu, des chais reconvertis aux terrasses surplombant les vignes."
    ],
    localVenues: ["Domaine de la Frémoire", "Château du Plessis", "Chais de la Sèvre", "Salle de la Sèvre", "Parc du Loiry"],
    faqQuestions: [
      {
        question: "Peut-on louer un photobooth pour un mariage dans un domaine viticole à Vertou ?",
        answer: "C'est même l'une de nos spécialités ! Les domaines viticoles de Vertou sont des cadres exceptionnels pour les mariages. Nous installons le photobooth dans les chais, sous les pergolas ou dans les salles de réception. Des accessoires sur le thème du vin peuvent être ajoutés."
      },
      {
        question: "Livrez-vous dans tout Vertou et ses alentours ?",
        answer: "Oui, nous couvrons tout Vertou ainsi que les communes voisines : Basse-Goulaine, Haute-Goulaine, Saint-Fiacre-sur-Maine et Le Pallet. La livraison, l'installation et la récupération sont incluses dans nos tarifs."
      },
      {
        question: "Les impressions sont-elles personnalisables pour un événement viticole ?",
        answer: "Oui, toutes nos impressions sont entièrement personnalisables. Pour les événements dans le vignoble vertavien, nous proposons des thèmes élégants avec motifs de vignes, étiquettes de vin personnalisées et cadres assortis aux couleurs de votre domaine."
      }
    ],
    seoTitle: "Location Photobooth Vertou | Borne Photo Mariage Vignoble (44120)",
    seoDescription: "Location de photobooth à Vertou (44120) au cœur du vignoble nantais. Borne photo pour mariages dans les domaines viticoles, anniversaires, événements. Impressions illimitées. Devis gratuit.",
    seoKeywords: "photobooth vertou, location borne photo vertou, photobooth mariage vertou, photobooth vignoble nantes, animation photo vertou, borne selfie vertou 44120",
    nearbyAreas: ["Basse-Goulaine", "Haute-Goulaine", "Saint-Fiacre-sur-Maine", "Le Pallet"]
  },
  {
    name: "Couëron",
    slug: "coueron",
    postalCode: "44220",
    population: "22 000",
    coordinates: { lat: 47.2153, lng: -1.7216 },
    distanceFromNantes: "12 km",
    heroDescription: "Couëron, ville ligérienne en pleine expansion à l'ouest de Nantes, offre un cadre authentique entre Loire et marais. Nos photobooths s'intègrent parfaitement dans les événements couëronnais, des mariages en bord de Loire aux fêtes dans les espaces communaux modernisés.",
    whyChooseText: [
      "Couëron, avec ses 22 000 habitants et son cadre naturel exceptionnel entre Loire et marais de l'Erdre, est une commune prisée pour les événements familiaux et festifs. Les bords de Loire offrent des panoramas uniques pour vos célébrations.",
      "Notre service de location de photobooth à Couëron inclut le transport et l'installation dans tous les lieux de réception de la commune. Que votre événement se déroule dans une salle des fêtes, un domaine privé ou un espace en bord de Loire, nous garantissons une prestation premium."
    ],
    localVenues: ["Tour à Plomb", "Salle Jean Moulin", "Espace Culturel", "Bords de Loire", "Salle des Fêtes"],
    faqQuestions: [
      {
        question: "Intervenez-vous à Couëron pour des événements en bord de Loire ?",
        answer: "Oui, nous installons notre photobooth dans tous les lieux de réception de Couëron, y compris les espaces en bord de Loire. Pour les installations en semi-extérieur, nous nous assurons que le matériel est abrité et que l'alimentation électrique est disponible."
      },
      {
        question: "Quel est le tarif pour une location de photobooth à Couëron ?",
        answer: "Nos tarifs démarrent à 200€ pour une soirée (250 impressions). La formule Premium à 300€ offre 500 impressions et la formule Week-end à 450€ inclut 1000 impressions. La livraison à Couëron est gratuite et incluse dans chaque formule."
      },
      {
        question: "Proposez-vous des animations complémentaires avec le photobooth à Couëron ?",
        answer: "Oui, en plus du photobooth nous proposons des accessoires fun (chapeaux, lunettes, pancartes), un livre d'or numérique, des GIFs animés et un partage instantané par email et réseaux sociaux. Un animateur professionnel peut aussi être ajouté en option."
      }
    ],
    seoTitle: "Location Photobooth Couëron | Borne Photo Événements Loire (44220)",
    seoDescription: "Location de photobooth à Couëron (44220). Borne photo premium pour mariages en bord de Loire, anniversaires et événements. Impressions illimitées, livraison incluse. Devis gratuit sous 24h.",
    seoKeywords: "photobooth couëron, location borne photo couëron, photobooth mariage couëron, animation photo couëron, borne selfie couëron, photobooth 44220",
    nearbyAreas: ["Saint-Herblain", "Indre", "Le Pellerin", "Bouaye"]
  },
  {
    name: "Carquefou",
    slug: "carquefou",
    postalCode: "44470",
    population: "20 000",
    coordinates: { lat: 47.2965, lng: -1.4908 },
    distanceFromNantes: "10 km",
    heroDescription: "Carquefou, commune dynamique et verdoyante à l'est de Nantes, est reconnue pour ses espaces événementiels de qualité et son parc de l'Épinay. Notre photobooth premium apporte une animation moderne et festive à vos mariages, soirées d'entreprise et célébrations familiales carquefolliennes.",
    whyChooseText: [
      "Carquefou, avec ses 20 000 habitants et son cadre de vie privilégié, est une commune appréciée pour l'organisation d'événements. Le Château de l'Épinay, les domaines privés et les espaces événementiels modernes offrent des cadres variés pour toutes les occasions.",
      "Nous intervenons régulièrement à Carquefou, notamment pour des événements corporate dans les zones d'activité de la Fleuriaye et des Plessis. Notre photobooth s'adapte à tous les formats : petites fêtes intimistes comme grands événements d'entreprise de plusieurs centaines de personnes."
    ],
    localVenues: ["Château de l'Épinay", "Domaine de la Fleuriaye", "Salle de la Haute-Forêt", "Espace Sensoriel", "Parc de la Chantrerie"],
    faqQuestions: [
      {
        question: "Intervenez-vous dans les zones d'activité de Carquefou pour des événements corporate ?",
        answer: "Oui, nous intervenons très fréquemment dans les zones d'activité de Carquefou (La Fleuriaye, Les Plessis) pour des événements d'entreprise : séminaires, team buildings, soirées de fin d'année, lancements de produit. Nos impressions peuvent être personnalisées avec votre logo et votre charte graphique."
      },
      {
        question: "Peut-on louer un photobooth pour un mariage au Château de l'Épinay ?",
        answer: "Absolument ! Le Château de l'Épinay est un lieu de réception magnifique et nous y intervenons régulièrement. Nous installons le photobooth dans la salle de réception ou sous la tente en fonction de votre organisation. Les cadres photo sont personnalisés aux couleurs de votre mariage."
      },
      {
        question: "Proposez-vous le partage numérique des photos à Carquefou ?",
        answer: "Oui, toutes nos formules incluent le partage numérique illimité. Vos invités peuvent envoyer leurs photos par email ou les partager directement sur les réseaux sociaux depuis l'écran tactile du photobooth. Une galerie privée en ligne est également accessible après l'événement."
      }
    ],
    seoTitle: "Location Photobooth Carquefou | Borne Photo Mariage & Corporate (44470)",
    seoDescription: "Location de photobooth à Carquefou (44470). Borne photo pour mariages au Château de l'Épinay, événements corporate zone Fleuriaye. Impressions illimitées, personnalisation. Devis gratuit.",
    seoKeywords: "photobooth carquefou, location borne photo carquefou, photobooth mariage carquefou, photobooth entreprise carquefou, borne selfie carquefou 44470",
    nearbyAreas: ["Nantes Est", "Sainte-Luce-sur-Loire", "Thouaré-sur-Loire", "Sucé-sur-Erdre"]
  },
  {
    name: "La Chapelle-sur-Erdre",
    slug: "la-chapelle-sur-erdre",
    postalCode: "44240",
    population: "20 000",
    coordinates: { lat: 47.2964, lng: -1.5534 },
    distanceFromNantes: "8 km",
    heroDescription: "La Chapelle-sur-Erdre, perle verte du nord de Nantes, est réputée pour ses domaines au bord de l'Erdre et ses espaces naturels préservés. Notre photobooth premium s'invite dans vos réceptions chapelaines pour capturer les plus beaux moments de vos événements dans un cadre enchanteur.",
    whyChooseText: [
      "La Chapelle-sur-Erdre, avec ses 20 000 habitants, est l'une des communes les plus prisées de l'agglomération nantaise pour les événements. Les bords de l'Erdre, surnommée 'la plus belle rivière de France', offrent un cadre romantique incomparable pour les mariages et réceptions.",
      "Nos photobooths sont régulièrement installés dans les domaines et châteaux chapelains. Nous connaissons parfaitement les lieux de réception de la commune et adaptons notre installation pour un rendu optimal dans chaque espace, des salles voûtées aux terrasses avec vue sur l'Erdre."
    ],
    localVenues: ["Château de la Gascherie", "Domaine de l'Erdre", "Salle Capellia", "Port de la Jonelière", "Manoir de la Cour"],
    faqQuestions: [
      {
        question: "Peut-on installer un photobooth en bord d'Erdre à La Chapelle-sur-Erdre ?",
        answer: "Oui, nous intervenons régulièrement en bord d'Erdre pour des mariages et réceptions. Le photobooth peut être installé sous une tente ou sur une terrasse couverte avec vue sur la rivière. C'est un cadre magnifique qui rend les photos encore plus mémorables."
      },
      {
        question: "Quels domaines de La Chapelle-sur-Erdre accueillez-vous ?",
        answer: "Nous intervenons dans tous les lieux de réception de La Chapelle-sur-Erdre : Château de la Gascherie, domaines en bord d'Erdre, salles communales et espaces privés. Contactez-nous avec le nom de votre lieu et nous vous confirmerons notre disponibilité."
      },
      {
        question: "Le photobooth est-il adapté pour un mariage romantique en bord d'Erdre ?",
        answer: "Parfaitement ! Nous proposons des thèmes romantiques avec des cadres élégants, des filtres doux et des accessoires raffinés. Les photos avec l'Erdre en arrière-plan sont absolument splendides. Nous personnalisons les impressions avec vos prénoms et la date du mariage."
      }
    ],
    seoTitle: "Location Photobooth La Chapelle-sur-Erdre | Borne Photo Mariage Erdre",
    seoDescription: "Location de photobooth à La Chapelle-sur-Erdre (44240). Borne photo pour mariages en bord d'Erdre, anniversaires et événements. Impressions illimitées, personnalisation. Devis gratuit sous 24h.",
    seoKeywords: "photobooth la chapelle-sur-erdre, location borne photo chapelle erdre, photobooth mariage erdre, animation photo la chapelle-sur-erdre, borne selfie 44240",
    nearbyAreas: ["Orvault", "Carquefou", "Sucé-sur-Erdre", "Treillières"]
  },
  {
    name: "Bouguenais",
    slug: "bouguenais",
    postalCode: "44340",
    population: "19 000",
    coordinates: { lat: 47.1778, lng: -1.6205 },
    distanceFromNantes: "10 km",
    heroDescription: "Bouguenais, commune dynamique au sud-ouest de Nantes à proximité de l'aéroport, combine espaces naturels et zones d'activité modernes. Notre photobooth premium s'installe dans vos événements bouguenaisiens pour des souvenirs photo professionnels et personnalisés.",
    whyChooseText: [
      "Bouguenais, avec ses 19 000 habitants, bénéficie d'une situation stratégique entre Nantes et la Loire. La commune accueille de nombreux événements d'entreprise grâce à sa proximité avec l'aéroport Nantes Atlantique et ses zones d'activité développées.",
      "Que votre événement ait lieu dans une salle de réception, un espace corporate ou un domaine privé de Bouguenais, notre photobooth s'adapte à tous les formats. Nous assurons un service clé en main avec livraison, installation et assistance technique."
    ],
    localVenues: ["Espace Athéna", "Salle des Fêtes", "Zone Aéropôle", "Domaine de la Cour", "Château de la Bérangerie"],
    faqQuestions: [
      {
        question: "Intervenez-vous près de l'aéroport Nantes Atlantique pour des événements corporate ?",
        answer: "Oui, nous intervenons régulièrement dans les espaces événementiels proches de l'aéroport Nantes Atlantique à Bouguenais. Séminaires, conventions, soirées d'entreprise : notre photobooth apporte une animation originale et des souvenirs personnalisés à vos couleurs corporate."
      },
      {
        question: "Quel est le rayon d'intervention autour de Bouguenais ?",
        answer: "Nous couvrons tout Bouguenais et ses environs : Rezé, Saint-Aignan-Grandlieu, Bouaye, Les Sorinières. La livraison et l'installation sont gratuites et incluses dans le prix de chaque formule."
      },
      {
        question: "Peut-on combiner photobooth et animation pour un gala d'entreprise ?",
        answer: "Absolument ! Pour les galas et événements corporate à Bouguenais, nous proposons un photobooth avec animateur professionnel, accessoires premium, impressions personnalisées avec logo d'entreprise et partage numérique instantané. Un excellent outil de team building et de communication."
      }
    ],
    seoTitle: "Location Photobooth Bouguenais | Borne Photo Corporate & Mariages (44340)",
    seoDescription: "Location de photobooth à Bouguenais (44340), près de l'aéroport Nantes Atlantique. Borne photo pour événements corporate, mariages et anniversaires. Impressions illimitées. Devis gratuit.",
    seoKeywords: "photobooth bouguenais, location borne photo bouguenais, photobooth entreprise bouguenais, photobooth aéroport nantes, borne selfie bouguenais 44340",
    nearbyAreas: ["Rezé", "Saint-Aignan-Grandlieu", "Bouaye", "Les Sorinières"]
  },
  {
    name: "La Baule-Escoublac",
    slug: "la-baule-escoublac",
    postalCode: "44500",
    population: "16 500",
    coordinates: { lat: 47.2868, lng: -2.3925 },
    distanceFromNantes: "75 km",
    heroDescription: "La Baule, station balnéaire de renommée internationale, est le cadre rêvé pour des événements prestigieux. Face à la plus belle plage d'Europe, dans les hôtels de luxe ou les villas Belle Époque, notre photobooth premium ajoute une touche d'élégance et de fun à vos célébrations baulaises.",
    whyChooseText: [
      "La Baule-Escoublac, avec ses 16 500 habitants et sa plage mythique de 9 km, est une destination exceptionnelle pour les événements haut de gamme. Les palaces, hôtels de charme, casinos et villas d'exception offrent des cadres incomparables pour vos réceptions.",
      "Notre photobooth premium est parfaitement adapté à l'élégance des événements baulois. Nous proposons des finitions haut de gamme, des cadres photo luxueux et une prestation soignée digne des plus beaux lieux de réception de la Côte d'Amour."
    ],
    localVenues: ["Hermitage Barrière", "Royal Thalasso Barrière", "Casino Barrière", "Palais des Congrès Atlantia", "Villa Nid d'Été"],
    faqQuestions: [
      {
        question: "Livrez-vous le photobooth jusqu'à La Baule ?",
        answer: "Oui, nous assurons la livraison et l'installation de notre photobooth à La Baule et sur toute la Côte d'Amour (Pornichet, Le Pouliguen, Batz-sur-Mer). Le déplacement est inclus dans nos formules. Nous intervenons dans les hôtels, villas, salles de réception et espaces événementiels."
      },
      {
        question: "Avez-vous des formules adaptées aux mariages de luxe à La Baule ?",
        answer: "Nous proposons des prestations premium parfaitement adaptées aux mariages haut de gamme de La Baule : photobooth avec finitions élégantes, cadres photo personnalisés raffinés, accessoires premium, animateur en tenue de soirée et impressions haute qualité sur papier glacé."
      },
      {
        question: "Peut-on utiliser le photobooth en bord de mer à La Baule ?",
        answer: "Le photobooth fonctionne en intérieur et semi-extérieur abrité. Pour les événements en bord de mer, nous recommandons une installation sous tente ou pergola. Les hôtels et restaurants de front de mer disposent généralement d'espaces couverts parfaits pour le photobooth."
      }
    ],
    seoTitle: "Location Photobooth La Baule | Borne Photo Mariage Prestige Côte d'Amour",
    seoDescription: "Location de photobooth premium à La Baule-Escoublac (44500). Borne photo pour mariages prestige, galas et événements sur la Côte d'Amour. Impressions illimitées, service haut de gamme. Devis gratuit.",
    seoKeywords: "photobooth la baule, location borne photo la baule, photobooth mariage la baule, borne selfie côte d'amour, animation photo la baule, photobooth 44500",
    nearbyAreas: ["Pornichet", "Le Pouliguen", "Guérande", "Batz-sur-Mer"]
  },
  {
    name: "Guérande",
    slug: "guerande",
    postalCode: "44350",
    population: "16 000",
    coordinates: { lat: 47.3279, lng: -2.4284 },
    distanceFromNantes: "80 km",
    heroDescription: "Guérande, cité médiévale exceptionnelle aux portes des marais salants, offre un cadre historique unique pour vos événements. Notre photobooth s'intègre avec élégance dans les réceptions guérandaises, des salles médiévales aux domaines surplombant les salines.",
    whyChooseText: [
      "Guérande, avec ses 16 000 habitants et ses remparts médiévaux classés, est l'une des destinations les plus prisées de Loire-Atlantique pour les mariages et réceptions d'exception. Le charme de la cité médiévale, les marais salants et la proximité de la mer créent une atmosphère unique.",
      "Notre photobooth apporte une touche moderne et festive aux événements dans ce cadre historique. Nous proposons des thèmes personnalisés qui s'harmonisent avec l'architecture médiévale de Guérande, tout en offrant une technologie de pointe pour des souvenirs photo impeccables."
    ],
    localVenues: ["Manoir de Kervaudu", "Château de Careil", "Salle Jeanne de Clisson", "Domaine de Carheil", "Espace Athanor"],
    faqQuestions: [
      {
        question: "Peut-on installer un photobooth dans la cité médiévale de Guérande ?",
        answer: "Oui, nous intervenons dans les salles de réception intra-muros de Guérande ainsi que dans les domaines et manoirs des alentours. Nous adaptons notre installation aux contraintes des bâtiments historiques tout en garantissant un service professionnel et des photos de qualité."
      },
      {
        question: "Proposez-vous des thèmes médiévaux pour le photobooth à Guérande ?",
        answer: "Nous proposons des cadres et accessoires thématiques qui s'harmonisent avec l'ambiance médiévale de Guérande : cadres en trompe-l'œil parchemin, accessoires de chevaliers et princesses, fonds personnalisés avec les remparts. Une touche ludique qui ravit les invités !"
      },
      {
        question: "Livrez-vous à Guérande depuis Nantes ?",
        answer: "Absolument ! Nous livrons et installons notre photobooth à Guérande et dans toute la presqu'île guérandaise. Le déplacement est inclus dans nos formules. Nous arrivons en avance pour tout préparer sereinement avant votre événement."
      }
    ],
    seoTitle: "Location Photobooth Guérande | Borne Photo Cité Médiévale & Mariages",
    seoDescription: "Location de photobooth à Guérande (44350), cité médiévale. Borne photo pour mariages dans les manoirs, réceptions et événements. Impressions illimitées, thèmes personnalisés. Devis gratuit.",
    seoKeywords: "photobooth guérande, location borne photo guérande, photobooth mariage guérande, borne selfie cité médiévale, animation photo guérande 44350",
    nearbyAreas: ["La Baule", "Le Croisic", "Piriac-sur-Mer", "Herbignac"]
  },
  {
    name: "Sainte-Luce-sur-Loire",
    slug: "sainte-luce-sur-loire",
    postalCode: "44980",
    population: "16 000",
    coordinates: { lat: 47.2508, lng: -1.4786 },
    distanceFromNantes: "8 km",
    heroDescription: "Sainte-Luce-sur-Loire, commune paisible et résidentielle en bord de Loire, est un lieu apprécié pour les réceptions et événements familiaux. Notre photobooth premium s'installe dans vos célébrations lucéennes pour des souvenirs photo chaleureux et personnalisés.",
    whyChooseText: [
      "Sainte-Luce-sur-Loire, avec ses 16 000 habitants et ses magnifiques bords de Loire, offre un cadre naturel et serein pour vos événements. Les domaines et salles de réception de la commune bénéficient d'un environnement verdoyant et paisible.",
      "Notre proximité avec Sainte-Luce-sur-Loire nous permet d'assurer un service rapide et efficace. Nous connaissons les lieux de réception de la commune et adaptons notre installation pour un résultat optimal dans chaque espace."
    ],
    localVenues: ["Château de Chassay", "Salle de la Loire", "Domaine de la Gournerie", "Parc de la Sèvre", "Espace Concorde"],
    faqQuestions: [
      {
        question: "Intervenez-vous à Sainte-Luce-sur-Loire pour des mariages en bord de Loire ?",
        answer: "Oui, nous installons régulièrement notre photobooth pour des mariages et réceptions à Sainte-Luce-sur-Loire. Les bords de Loire offrent un cadre splendide et nos impressions personnalisées immortalisent ces moments dans un décor naturel unique."
      },
      {
        question: "Quel est le délai de livraison pour Sainte-Luce-sur-Loire ?",
        answer: "Étant basés à proximité, nous intervenons très rapidement à Sainte-Luce-sur-Loire. Nous arrivons généralement 1h à 1h30 avant le début de votre événement pour installer et tester le photobooth. Le temps d'installation est d'environ 30 minutes."
      },
      {
        question: "Les photos prises au photobooth sont-elles de qualité professionnelle ?",
        answer: "Oui, notre photobooth est équipé d'un appareil photo professionnel, d'un éclairage LED studio et d'une imprimante haute définition. La qualité des photos est comparable à celle d'un studio photo professionnel, avec en plus le côté fun et spontané."
      }
    ],
    seoTitle: "Location Photobooth Sainte-Luce-sur-Loire | Borne Photo Événements (44980)",
    seoDescription: "Location de photobooth à Sainte-Luce-sur-Loire (44980). Borne photo pour mariages en bord de Loire, anniversaires et fêtes. Impressions illimitées, livraison gratuite. Devis sous 24h.",
    seoKeywords: "photobooth sainte-luce-sur-loire, location borne photo sainte-luce, photobooth mariage loire, animation photo sainte-luce, borne selfie 44980",
    nearbyAreas: ["Thouaré-sur-Loire", "Carquefou", "Nantes Est", "Mauves-sur-Loire"]
  },
  {
    name: "Saint-Sébastien-sur-Loire",
    slug: "saint-sebastien-sur-loire",
    postalCode: "44230",
    population: "15 000",
    coordinates: { lat: 47.2078, lng: -1.5031 },
    distanceFromNantes: "5 km",
    heroDescription: "Saint-Sébastien-sur-Loire, commune résidentielle appréciée aux portes de Nantes, allie charme ligérien et modernité. Notre photobooth premium apporte une animation festive et élégante à vos événements sébastiennais, des mariages intimes aux grandes fêtes de famille.",
    whyChooseText: [
      "Saint-Sébastien-sur-Loire, avec ses 15 000 habitants et sa situation privilégiée en bord de Loire, est une commune qui accueille de nombreuses réceptions et célébrations. Les espaces événementiels de la ville offrent un cadre agréable et accessible.",
      "Notre proximité géographique avec Saint-Sébastien-sur-Loire nous permet d'intervenir rapidement et efficacement. Nous adaptons notre photobooth à tous les formats d'événements, des petites fêtes intimistes aux grandes célébrations de plusieurs centaines d'invités."
    ],
    localVenues: ["Château de la Bauche", "Salle Horizon", "Espace Loire", "Parc de la Morinière", "Salle des Fêtes"],
    faqQuestions: [
      {
        question: "Peut-on louer un photobooth pour un petit événement à Saint-Sébastien-sur-Loire ?",
        answer: "Oui, nos formules sont adaptées à tous les formats d'événements. Même pour une fête intime de 20-30 personnes à Saint-Sébastien-sur-Loire, le photobooth crée une animation conviviale et des souvenirs uniques. Notre formule Soirée à 200€ est parfaite pour ce type d'événement."
      },
      {
        question: "Quelles sont les options de personnalisation disponibles ?",
        answer: "Toutes nos formules incluent la personnalisation complète : cadres photo aux couleurs de votre événement, messages personnalisés, logo ou prénoms sur les impressions, choix parmi de nombreux filtres et effets. Nous créons un design sur mesure pour chaque client."
      },
      {
        question: "Comment réserver un photobooth à Saint-Sébastien-sur-Loire ?",
        answer: "La réservation est simple : envoyez-nous un email à contact@mon-photobooth-nantes.fr avec la date, le lieu et le type d'événement. Nous vous envoyons un devis personnalisé sous 24h. Un acompte de 30% confirme votre réservation."
      }
    ],
    seoTitle: "Location Photobooth Saint-Sébastien-sur-Loire | Borne Photo (44230)",
    seoDescription: "Location de photobooth à Saint-Sébastien-sur-Loire (44230). Borne photo pour mariages, anniversaires et fêtes familiales. Impressions illimitées, personnalisation. Devis gratuit sous 24h.",
    seoKeywords: "photobooth saint-sébastien-sur-loire, location borne photo saint-sébastien, photobooth mariage saint-sébastien, borne selfie 44230, animation photo loire",
    nearbyAreas: ["Rezé", "Vertou", "Basse-Goulaine", "Nantes Sud"]
  },
  {
    name: "Pornic",
    slug: "pornic",
    postalCode: "44210",
    population: "15 000",
    coordinates: { lat: 47.1149, lng: -2.1024 },
    distanceFromNantes: "50 km",
    heroDescription: "Pornic, charmante station balnéaire de la Côte de Jade, est un écrin de beauté entre port pittoresque et plages de sable fin. Notre photobooth premium sublime vos événements pornicais avec des souvenirs photo exceptionnels dans ce cadre maritime enchanteur.",
    whyChooseText: [
      "Pornic, avec ses 15 000 habitants, son port de pêche pittoresque et son château médiéval surplombant la mer, est une destination privilégiée pour les mariages et réceptions. L'atmosphère maritime et le charme de la Côte de Jade créent un cadre inoubliable.",
      "Nous livrons et installons notre photobooth à Pornic et sur toute la Côte de Jade. Les hôtels, restaurants et salles de réception face à la mer sont des lieux idéaux pour allier animation photobooth et cadre maritime d'exception."
    ],
    localVenues: ["Château de Pornic", "Thalasso de Pornic", "Hôtel Alliance Pornic", "Salle du Casino", "Domaine de la Gressière"],
    faqQuestions: [
      {
        question: "Livrez-vous le photobooth jusqu'à Pornic depuis Nantes ?",
        answer: "Oui, nous assurons la livraison et l'installation de notre photobooth à Pornic. Le trajet depuis notre base prend environ 45 minutes. Le déplacement est inclus dans nos formules. Nous intervenons également à Préfailles, La Plaine-sur-Mer et Les Moutiers-en-Retz."
      },
      {
        question: "Peut-on utiliser le photobooth pour un mariage face à la mer à Pornic ?",
        answer: "Oui, à condition que le photobooth soit installé dans un espace abrité (tente, salle avec vue mer, terrasse couverte). Les hôtels et restaurants de Pornic disposent souvent de terrasses couvertes avec vue sur l'océan, parfaites pour notre installation."
      },
      {
        question: "Proposez-vous des accessoires sur le thème marin ?",
        answer: "Oui ! Pour les événements à Pornic, nous proposons des accessoires sur le thème maritime : chapeaux de marin, bouées décoratives, cadres photo en forme de hublot, et bien d'autres. Les impressions peuvent aussi être personnalisées avec des motifs marins."
      }
    ],
    seoTitle: "Location Photobooth Pornic | Borne Photo Mariage Côte de Jade (44210)",
    seoDescription: "Location de photobooth à Pornic (44210), Côte de Jade. Borne photo pour mariages face à la mer, événements et anniversaires. Impressions illimitées, accessoires marins. Devis gratuit.",
    seoKeywords: "photobooth pornic, location borne photo pornic, photobooth mariage pornic, borne selfie côte de jade, animation photo pornic 44210",
    nearbyAreas: ["Préfailles", "La Plaine-sur-Mer", "Les Moutiers-en-Retz", "Chauvé"]
  },
  {
    name: "Châteaubriant",
    slug: "chateaubriant",
    postalCode: "44110",
    population: "12 000",
    coordinates: { lat: 47.7179, lng: -1.3762 },
    distanceFromNantes: "65 km",
    heroDescription: "Châteaubriant, cité historique du nord de la Loire-Atlantique dominée par son château millénaire, offre un cadre patrimonial remarquable pour vos événements. Notre photobooth premium s'installe dans vos célébrations castelbriantaises pour des souvenirs photo dans un décor chargé d'histoire.",
    whyChooseText: [
      "Châteaubriant, avec ses 12 000 habitants et son imposant château médiéval et Renaissance, est une destination de choix pour les événements dans un cadre historique. La commune organise de nombreuses fêtes et réceptions tout au long de l'année.",
      "Nous nous déplaçons à Châteaubriant pour installer notre photobooth dans vos événements. Que votre réception ait lieu au château, dans une salle communale ou dans un domaine privé du pays castelbriantais, nous assurons une prestation professionnelle et clé en main."
    ],
    localVenues: ["Château de Châteaubriant", "Salle de la Maison des Arts", "Espace de Renon", "Domaine de la Motte Glain", "Salle Omnisports"],
    faqQuestions: [
      {
        question: "Vous déplacez-vous jusqu'à Châteaubriant ?",
        answer: "Oui, nous nous déplaçons à Châteaubriant et dans tout le pays castelbriantais. Le trajet depuis Nantes dure environ 50 minutes. La livraison, l'installation et la récupération du matériel sont incluses dans nos tarifs, sans supplément."
      },
      {
        question: "Peut-on installer un photobooth au Château de Châteaubriant ?",
        answer: "Sous réserve de l'accord du gestionnaire du site, nous pouvons installer notre photobooth au Château de Châteaubriant lors d'événements privés. Nous adaptons notre installation aux contraintes du monument historique et proposons des thèmes médiévaux assortis."
      },
      {
        question: "Quel est le tarif avec déplacement à Châteaubriant ?",
        answer: "Nos tarifs restent identiques pour Châteaubriant : à partir de 200€ pour la formule Soirée. Le déplacement est inclus dans le prix, sans frais supplémentaires. Nous nous engageons sur un prix fixe sans surprise."
      }
    ],
    seoTitle: "Location Photobooth Châteaubriant | Borne Photo Château & Événements (44110)",
    seoDescription: "Location de photobooth à Châteaubriant (44110). Borne photo pour mariages au château, réceptions et fêtes. Impressions illimitées, thèmes médiévaux. Livraison incluse. Devis gratuit.",
    seoKeywords: "photobooth châteaubriant, location borne photo châteaubriant, photobooth mariage châteaubriant, borne selfie château, animation photo châteaubriant 44110",
    nearbyAreas: ["Derval", "Nozay", "Soudan", "Rougé"]
  },
  {
    name: "Pontchâteau",
    slug: "pontchateau",
    postalCode: "44160",
    population: "12 000",
    coordinates: { lat: 47.4345, lng: -2.0898 },
    distanceFromNantes: "50 km",
    heroDescription: "Pontchâteau, commune dynamique du nord-ouest de la Loire-Atlantique entre Nantes et Saint-Nazaire, est un carrefour festif prisé pour les mariages et événements. Notre photobooth premium accompagne vos célébrations pontchâtelaines avec des souvenirs photo de qualité professionnelle.",
    whyChooseText: [
      "Pontchâteau, avec ses 12 000 habitants, est idéalement situé entre Nantes et Saint-Nazaire. La commune et ses alentours offrent de nombreux lieux de réception champêtres, des domaines aux fermes rénovées, parfaits pour des événements authentiques.",
      "Notre photobooth s'intègre parfaitement dans l'ambiance champêtre et conviviale des événements pontchâtelains. Nous proposons une installation rapide et professionnelle, adaptée aux granges rénovées, salles de réception et espaces extérieurs couverts."
    ],
    localVenues: ["Calvaire de Pontchâteau", "Salle Horizon", "Domaine de Kervent", "Ferme de la Touche", "Salle Polyvalente"],
    faqQuestions: [
      {
        question: "Intervenez-vous à Pontchâteau pour des mariages champêtres ?",
        answer: "Oui, les mariages champêtres sont notre spécialité dans le secteur de Pontchâteau ! Nous installons le photobooth dans les granges rénovées, sous les barnums ou dans les domaines ruraux. Des accessoires champêtres (chapeaux de paille, fleurs) sont disponibles pour compléter l'ambiance."
      },
      {
        question: "Couvrez-vous les communes autour de Pontchâteau ?",
        answer: "Oui, nous intervenons à Pontchâteau et dans toutes les communes environnantes : Savenay, Crossac, Missillac, Drefféac, Herbignac. La zone entre Nantes et Saint-Nazaire est parfaitement couverte par notre service."
      },
      {
        question: "Peut-on réserver le photobooth pour un week-end complet à Pontchâteau ?",
        answer: "Oui, notre formule Week-end à 450€ est idéale pour les mariages de 2 jours. Elle inclut 1000 impressions, le photobooth du samedi au dimanche, l'installation et la récupération. Parfait pour les mariages avec vin d'honneur le samedi et brunch le dimanche."
      }
    ],
    seoTitle: "Location Photobooth Pontchâteau | Borne Photo Mariage Champêtre (44160)",
    seoDescription: "Location de photobooth à Pontchâteau (44160). Borne photo pour mariages champêtres, anniversaires et fêtes. Entre Nantes et Saint-Nazaire. Impressions illimitées. Devis gratuit.",
    seoKeywords: "photobooth pontchâteau, location borne photo pontchâteau, photobooth mariage champêtre, borne selfie pontchâteau, animation photo 44160",
    nearbyAreas: ["Savenay", "Crossac", "Missillac", "Herbignac"]
  },
  {
    name: "Basse-Goulaine",
    slug: "basse-goulaine",
    postalCode: "44115",
    population: "10 000",
    coordinates: { lat: 47.2028, lng: -1.4512 },
    distanceFromNantes: "10 km",
    heroDescription: "Basse-Goulaine, élégante commune viticole aux portes du vignoble nantais, est un lieu privilégié pour les réceptions raffinées. Notre photobooth premium s'intègre avec charme dans vos événements goulainais, des mariages dans les domaines viticoles aux célébrations familiales.",
    whyChooseText: [
      "Basse-Goulaine, avec ses 10 000 habitants, est nichée au cœur du vignoble du Muscadet. La commune abrite le célèbre Château de Goulaine, l'un des plus anciens châteaux de France, et de nombreux domaines viticoles qui accueillent des réceptions d'exception.",
      "Notre photobooth s'harmonise parfaitement avec l'élégance des lieux de réception de Basse-Goulaine. Nous proposons des cadres photo raffinés et des thèmes personnalisés qui s'accordent avec l'atmosphère viticole et patrimoniale de la commune."
    ],
    localVenues: ["Château de Goulaine", "Domaine du Moulin", "Cave Muscadet", "Salle de la Vallée", "Espace des Vignes"],
    faqQuestions: [
      {
        question: "Peut-on louer un photobooth au Château de Goulaine ?",
        answer: "Oui, le Château de Goulaine est un lieu de réception magnifique et nous y intervenons avec plaisir lors d'événements privés. Nous installons le photobooth dans l'orangerie, la salle de réception ou sous les arcades, en harmonie avec le cadre historique."
      },
      {
        question: "Proposez-vous des thèmes viticoles pour les événements à Basse-Goulaine ?",
        answer: "Absolument ! Nous proposons des cadres et accessoires sur le thème du vin et du vignoble : cadres en forme de bouteille, accessoires de vigneron, fonds personnalisés avec les vignes. Idéal pour les événements dans les domaines viticoles de Basse-Goulaine."
      },
      {
        question: "Quel est le meilleur moment pour réserver pour un mariage à Basse-Goulaine ?",
        answer: "Les domaines de Basse-Goulaine sont très demandés pour les mariages, surtout de mai à octobre. Nous recommandons de réserver votre photobooth dès la confirmation de votre lieu de réception, idéalement 3 à 6 mois à l'avance."
      }
    ],
    seoTitle: "Location Photobooth Basse-Goulaine | Borne Photo Vignoble & Château (44115)",
    seoDescription: "Location de photobooth à Basse-Goulaine (44115), cœur du vignoble nantais. Borne photo pour mariages au Château de Goulaine, événements viticoles. Impressions illimitées. Devis gratuit.",
    seoKeywords: "photobooth basse-goulaine, location borne photo basse-goulaine, photobooth château goulaine, photobooth mariage vignoble, borne selfie 44115",
    nearbyAreas: ["Haute-Goulaine", "Vertou", "Saint-Sébastien-sur-Loire", "Le Loroux-Bottereau"]
  },
  {
    name: "Thouaré-sur-Loire",
    slug: "thouare-sur-loire",
    postalCode: "44470",
    population: "10 000",
    coordinates: { lat: 47.2681, lng: -1.4414 },
    distanceFromNantes: "12 km",
    heroDescription: "Thouaré-sur-Loire, paisible commune ligérienne à l'est de Nantes, offre un cadre naturel et champêtre pour vos événements. Notre photobooth premium accompagne vos célébrations thouaréennes avec des souvenirs photo de qualité dans une ambiance conviviale.",
    whyChooseText: [
      "Thouaré-sur-Loire, avec ses 10 000 habitants et ses magnifiques bords de Loire, est une commune qui séduit par son cadre naturel et sa tranquillité. Les domaines et salles de réception de la commune offrent des espaces accueillants pour tous types d'événements.",
      "Nous intervenons à Thouaré-sur-Loire avec la même qualité de service que dans tout le reste de l'agglomération nantaise. Notre photobooth s'adapte aux espaces champêtres et aux salles de réception de la commune pour des souvenirs photo inoubliables."
    ],
    localVenues: ["Château du Bois-Rouaud", "Salle des Fêtes", "Domaine de la Loire", "Parc de la Grillère", "Espace Ligérien"],
    faqQuestions: [
      {
        question: "Intervenez-vous à Thouaré-sur-Loire pour des événements familiaux ?",
        answer: "Oui, nous nous déplaçons à Thouaré-sur-Loire pour tous types d'événements familiaux : mariages, anniversaires, communions, fêtes de famille. Notre photobooth crée une animation conviviale qui rassemble toutes les générations autour de photos fun et mémorables."
      },
      {
        question: "Le photobooth est-il adapté pour un petit budget ?",
        answer: "Notre formule Soirée à 200€ est très accessible et comprend déjà 250 impressions, photos et vidéos illimitées, et le partage numérique. C'est une animation qui a un fort impact pour un budget maîtrisé, idéale pour les événements à Thouaré-sur-Loire."
      },
      {
        question: "Peut-on avoir un aperçu du photobooth avant de réserver ?",
        answer: "Oui, nous vous envoyons des photos et vidéos de notre matériel et de nos précédentes prestations. Vous pouvez également voir des exemples de personnalisation sur notre site. N'hésitez pas à nous contacter pour recevoir un dossier de présentation complet."
      }
    ],
    seoTitle: "Location Photobooth Thouaré-sur-Loire | Borne Photo Événements (44470)",
    seoDescription: "Location de photobooth à Thouaré-sur-Loire (44470). Borne photo pour mariages en bord de Loire, anniversaires et fêtes familiales. Impressions illimitées, prix attractifs. Devis gratuit.",
    seoKeywords: "photobooth thouaré-sur-loire, location borne photo thouaré, photobooth mariage thouaré, borne selfie loire, animation photo thouaré 44470",
    nearbyAreas: ["Sainte-Luce-sur-Loire", "Mauves-sur-Loire", "Carquefou", "Le Cellier"]
  },
  {
    name: "Blain",
    slug: "blain",
    postalCode: "44130",
    population: "10 000",
    coordinates: { lat: 47.4760, lng: -1.7620 },
    distanceFromNantes: "40 km",
    heroDescription: "Blain, cité historique du canal de Nantes à Brest dominée par son château fort, offre un cadre patrimonial et champêtre pour vos événements. Notre photobooth premium s'invite dans vos célébrations blinoises pour des souvenirs photo authentiques et personnalisés.",
    whyChooseText: [
      "Blain, avec ses 10 000 habitants, est une commune riche de son patrimoine historique avec le Château de la Groulais et le canal de Nantes à Brest. Les espaces naturels et les lieux de réception de la commune offrent un cadre authentique pour vos événements.",
      "Notre photobooth s'adapte parfaitement aux événements champêtres et historiques de Blain. Nous proposons une installation soignée dans les salles de réception, les domaines et les espaces en bord de canal pour des photos originales et mémorables."
    ],
    localVenues: ["Château de la Groulais", "Canal de Nantes à Brest", "Salle de la Caravelle", "Domaine de la Forêt", "Espace du Lac"],
    faqQuestions: [
      {
        question: "Livrez-vous le photobooth à Blain ?",
        answer: "Oui, nous livrons et installons notre photobooth à Blain. Le trajet depuis notre base prend environ 35 minutes. La livraison et l'installation sont incluses dans nos tarifs. Nous intervenons également à Fay-de-Bretagne, Le Gâvre et Guémené-Penfao."
      },
      {
        question: "Peut-on organiser un événement avec photobooth au bord du canal ?",
        answer: "Oui, le canal de Nantes à Brest à Blain est un cadre charmant pour les événements. Le photobooth peut être installé dans un espace abrité à proximité (salle, tente). Les photos avec le canal en arrière-plan sont particulièrement appréciées."
      },
      {
        question: "Proposez-vous des formules pour les fêtes communales à Blain ?",
        answer: "Oui, nous proposons des formules adaptées aux fêtes communales et événements associatifs. Le photobooth est une animation accessible qui plaît à tous les âges. Contactez-nous pour un devis personnalisé adapté à votre budget et à vos besoins."
      }
    ],
    seoTitle: "Location Photobooth Blain | Borne Photo Château & Canal (44130)",
    seoDescription: "Location de photobooth à Blain (44130). Borne photo pour mariages au château, fêtes en bord de canal et événements. Impressions illimitées, livraison incluse. Devis gratuit sous 24h.",
    seoKeywords: "photobooth blain, location borne photo blain, photobooth mariage blain, borne selfie canal nantes brest, animation photo blain 44130",
    nearbyAreas: ["Fay-de-Bretagne", "Le Gâvre", "Guémené-Penfao", "Héric"]
  }
];

export const getCityBySlug = (slug: string): CityData | undefined => {
  return cities.find(city => city.slug === slug);
};

export const allCitySlugs = cities.map(city => city.slug);
