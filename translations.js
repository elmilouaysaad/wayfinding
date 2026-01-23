// Translation data
const translations = {
  en: {
    app_title: "Campus Wayfinder",
    select_location: "Select a location",
    search_placeholder: "Search locations or keywords...",
    legend_title: "Map Legend",
    current_location: "Current Location",
    area: "Area",
    building: "Building",
    office: "Office",
    walking_path: "Walking Path",
    selected_area: "Selected Area",
    facilities: "Facilities",
    hours: "Hours",
    phone: "Phone",
    capacity: "Capacity",
    buildings_offices: "Buildings/Offices",
    part_of: "Part of",
    select_building: "Select a building/office",
    picture_view: "Picture View",
    map_view: "Map View",
    campus_picture_view: "Campus Picture View",
    campus_overview: "Campus overview image would be displayed here",
    placeholder_text: "This is a placeholder for the actual campus picture",
    scan_navigation: "Scan for Navigation",
    qr_failed: "Failed to generate QR code",
    no_results: "No results found",
    security_phone: "Security Phone Number",
    standard_phone: "Standard Phone Number",
    // Location names
    parking_1: "Parking 1",
    academic_area: "Academic Area",
    athletic_area: "Athletic Area",
    health_center: "Health Center",
    administrative_area: "Administrative Area",
    housing_department: "Housing Department",
    registrar_office: "Registrar Office",
    library: "M6 Library",
    lc: "Language Center",
    gym: "Fitness Center",
    shass: "School of Social Sciences, Arts, and Humanities",
    sse: "School of Science and Engineering",
    sba: "School of Business Administration",
    admissions: "Admissions Office",
    building_1_p: "Building 1 (President side)",
    building_1_v: "Building 1 (VPAA side)",
    aud4: "Auditorium 4",
    aud17: "Auditorium 17",
    sao: "Student Activities Office",
    dining1: "Dining Services: Cossa",
    dining2: "Dining Services: Proxirest",
    cafeteria: "Cafeteria",
    oasp: "Office of Academic Support and Support (OASP)",
    oip: "International Academic Opportunities",
    cle: "Center for Learning Excellence (CLE)",
    fye: "First Year Experience (FYE)",
    sec: "Safety & Security",
    its: "Information Technology Services (ITS) ",
    ee: "Employability and Entrepreneurship",
    finantial_aid: "Financial Aid Office",
    // Location descriptions
    parking_1_desc: "Main parking area for visitors and students",
    academic_area_desc: "Main academic buildings and lecture halls",
    administrative_area_desc: "Administrative offices and student services",
    registrar_office_desc:"Student records, transcripts, and enrollment services",
    athletic_area_desc:
      "The AUI Athletics Department strives to provide students with the finest athletic experience. Student athletes who join AUI official teams can expect to gain all the benefitsthat participation in a competitive sport offers.The Fitness Center is located near the gymnasium and next to the main soccer field. The Center is more than 960 sq. ft. and is the most recent sports facility built on campus. It features a fitness room, a weight room, a cardiovascular room, table tennis room and a sports shop. The fitness center is equipped with state of the art weight and cardiovascular equipment. The AUI Athletic department proudly offers strength and resistance equipment from famous USA suppliers such as Life Fitness.",
    health_center_desc:
      "Al Akhawayn Health Center is staffed with 4 doctors, 4 nurses, a doctor and a nurse are on standby to provide medical attention 24 hours a day, 7 days a week. The health Center is in building 26, on the ground floor, offering accessible medical services during operating hours from 08:30 AM to 11:00 PM. However, medical consultations are available from 09:00am to 06:00 PM. If you require urgent medical attention or face an emergency after working hours, please get in touch either with the Hall Director by (Men-ext. 555, Women-ext. 3333) or the security by (-ext. 2222) or even the nurse on duty @ (2057). ",
    housing_department_desc:
    "The mission of AUI Housing and Residential Life Office is to provide students with a quality residential experience that supports their academic goals and personal development. Housing and Residential Life seeks to creatively stimulate students’ growth and provide a safe and enjoyable residential experience.  One advantage of on-campus housing is its convenience. Students can easily access classrooms, faculty offices, recreational facilities, computer labs, and the library. In addition to the convenience of proximity, campus accommodations include television, Internet and telephone connections, and water/ heating costs are included in the housing fees. Equally important, students become a part of the learning community and a sense of connection is established by being offered a vast range of in-doors activities by Resident Assistants (RA) such as regular movie projection/debates, music evenings, cooking sessions, games tournaments and themed parties.",
    library_desc:
      "Mohammed VI Library, the premier English language library in Morocco, provides resources and services that contribute to the achievement of the University’s goals. It provides first class student and faculty centered services and resources to enhance both the learning experience of students and the teaching and research experience of faculty. The Library provides year-round Information literacy workshops, one-on-one trainings and course guides for students and faculty to further learning and teaching. It engages its stakeholders through Faculty Outreach Initiatives to build collections that serve the community’s teaching and research needs.",
    gym_desc:
      "The AUI Athletics Department strives to provide students with the finest athletic experience. Student athletes who join AUI official teams can expect to gain all the benefitsthat participation in a competitive sport offers.The Fitness Center is located near the gymnasium and next to the main soccer field. The Center is more than 960 sq. ft. and is the most recent sports facility built on campus. It features a fitness room, a weight room, a cardiovascular room, table tennis room and a sports shop. The fitness center is equipped with state of the art weight and cardiovascular equipment. The AUI Athletic department proudly offers strength and resistance equipment from famous USA suppliers such as Life Fitness.",
    admissions_desc:
      "Competition to study at AUI is high and so only high school students and bachelor degree holders with outstanding academic backgrounds are admitted.We inform students and their parents about admission requirements, financial aid, and educational opportunities available at AUI. In addition, our mission is to recruit a diverse student population and to process, evaluate, and notify applicants with an admission decision in July for Fall semester, and in December for Spring semester. Acceptance is contingent upon maintaining the standard of academic performance upon which admission was based. Freshmen, transfer, and visiting students who are interested in applying can begin the admissions process by filling out AUI's online application form.",
    sse_desc:
      "We offer a world-class education that will prepare you to succeed in your career, wherever it takes you.  By the time you graduate from AUI, you will be able to work in three languages: English, French, and Arabic.  Our students interact closely with faculty who have a broad variety of recognized research and international experience.  Through AUI’s small classes, many projects, and emphasis on communication skills, you will be technically proficient, socially responsible, and possess the high ethical character and entrepreneurial spirit expected of tomorrow’s leading professionals.  Your degree from SSE prepares you for graduate studies as well as professional practice.",
    sba_desc:
      "SBA offers programs that prepare you for the constantly changing, increasingly competitive global business world. Our programs are designed to equip you with 21st-century knowledge, expertise, and essential skills to succeed in the workplace.Our school is supported by faculty members who are talented and passionate about business and management education. They are experts in their disciplines and are dedicated to student learning.",
    shass_desc:
      "The School of Social Sciences, Arts, and Humanities provides all AUI students with a foundation in the liberal arts anchored in the values, culture, history, and future aspirations of the people of Morocco and the region. In addition to the general education program, it offers several majors and minors in applied humanities and social sciences where students learn to build, connect, and lead a better world.",
    building_1_p_desc:
      "Right side of Building 1, has the office of the President and key administrative functions.",
    building_1_v_desc:
      "Left side of Building 1, has the office of the Vice President for Academic Affairs' office and business office.",
    aud4_desc:
      "Large auditorium used for major lectures, events, and presentations.",
    aud17_desc: "Large auditorium for lectures and special events.",
    sao_desc:
      "The SAO provides students with different opportunities to engage in cultural, educational, social, and recreational activities, which are an integral part of the living-learning community at AUI. Students develop their talents, leadership abilities and organizational skills through their involvement and contribution to various clubs and student organizations. Our team accompanies all AUIers in their quest of becoming tomorrow’s Morocco’s leaders. ",
    dining1_desc:
      "The dining services at AUI adhere to the highest quality standards as they provide food services to the University community. These services are outsourced to an external catering company, which operates under the supervision of three University staff members. These staff members are responsible for ensuring the quality of meals, managing special requests, handling orders, accommodating dietary restrictions, and addressing other relevant matters. Both catering companies, COSSA and PROXIREST, offer a diverse range of options to cater to the varied needs of students, staff, and faculty on campus.",
    dining2_desc:
      "The dining services at AUI adhere to the highest quality standards as they provide food services to the University community. These services are outsourced to an external catering company, which operates under the supervision of three University staff members. These staff members are responsible for ensuring the quality of meals, managing special requests, handling orders, accommodating dietary restrictions, and addressing other relevant matters. Both catering companies, COSSA and PROXIREST, offer a diverse range of options to cater to the varied needs of students, staff, and faculty on campus.",
    cafeteria_desc:
      "The dining services at AUI adhere to the highest quality standards as they provide food services to the University community. These services are outsourced to an external catering company, which operates under the supervision of three University staff members. These staff members are responsible for ensuring the quality of meals, managing special requests, handling orders, accommodating dietary restrictions, and addressing other relevant matters. Both catering companies, COSSA and PROXIREST, offer a diverse range of options to cater to the varied needs of students, staff, and faculty on campus.",
    oasp_desc:
      "The Office of Academic Support and Progress provides comprehensive academic support beyond the classroom to enhance student academic success. We provide early intervention for at-risk students, ongoing monitoring of academic progress, and assistance throughout their academic journey, focusing on academic advising to ensure successful academic progress toward graduation.",
    oip_desc:
      "The Office of International Programs (OIP) is the liaison for the university’s academic partnerships and manages the University’s educational cooperation and collaboration agreements with select global academic institutions. The University’s programs foster an international perspective through the curriculum and on-campus experience and encourage students to study abroad for at least a semester as part of their education.",
    cle_desc:
      "The Center for Learning Excellence (CLE) encompasses four major services: Peer Tutoring, First-Year Experience, Inclusion Program, and neoCedrus. These services provide AUI students with academic and student life support. The CLE adopts a peer-to-peer methodology to transform learning from a vertical process to a horizontal one. This not only makes learning more approachable and less intimidating, but also empowers students to structure their education in a way that works for them. On top of being equipped with a steady academic foundation, our Tutors and Mentors are internationally trained and certified by the College Reading and Learning Association’s (CRLA) to meet the needs of their peers. While our mentors provide new students with advice and guidance, our tutors assist their fellow students by working to find the learning methodology that suits them. ",
    fye_desc:
      "The First-Year Experience Program (FYE) is designed by the Division of Student Affairs to facilitate a smooth and successful transition for students into college life and learning while aligning with the university’s core mission and values. The FYE encompasses a diverse range of elements, including two 1-credit seminars, mentoring services, one-to-one consultations, and a variety of co-curricular events and programs aimed at enhancing the student’s campus experience.  The FYE journey begins with a mandatory comprehensive orientation program meticulously crafted to acquaint incoming students with the vibrant AUI community. This orientation blends educational and recreational activities with the goal of nurturing a sense of belonging and connection. ",
    sec_desc:
      "The mission of the AUI Security Department is to foster feelings of safety and personal comfort in which to learn, live, work, and grow. The AUI Security Department serves the community by protecting individuals’ lives and properties, preventing crimes, enforcing the policies and regulations, and by maintaining order in the university. Recognizing that the Department’s mission is best attained through training and community outreach, employees are collectively committed to establishing collaborative partnerships with individuals, groups, and departments for the purpose of identifying and resolving safety and security concerns and serving the AUI community in a professional and respectful manner. ",
    its_desc:
      "The ITS Department’s mission is to provide information technology support to the university’s academic programs, research centers, and other development centers through campus wide IT infrastructure, services, and promotion of effective use of technology in all learning endeavors.",
    lc_desc:
      "We place a great deal of importance on languages by requiring competence in English, French, and Arabic (taught in the School of Humanities and Social Sciences) for graduation.That is why we seek to equip eligible students with the language skills necessary for success in their academic studies using materials that promote global multicultural awareness and provide tailor-made language training programs for the AUI community and other clients.",
    ee_desc:
      "Al Akhawayn University takes a unique approach to preparing students for successful careers by integrating them into the workforce from the first semester. Through partnerships with major corporate firms, students gain valuable real-world experience and make important connections that set them up for success after graduation. In addition, our world-class startup incubator, developed in collaboration with prestigious local and international partners, provides students with the resources and support they need to create their own companies while still studying. This innovative approach to education sets Al Akhawayn graduates apart from the competition, equipping them with the skills and experiences they need to succeed in a rapidly changing global job market.",
    finantial_aid_desc:
      "The Financial Aid Office at Al Akhawayn University is dedicated to assisting students in navigating the financial aspects of their education. Our mission is to provide comprehensive support and guidance to ensure that all students have access to the resources they need to succeed academically. We offer a variety of financial aid options, including scholarships, grants, and work-study opportunities, tailored to meet the diverse needs of our student body. Our team is committed to helping students understand their financial aid packages, manage their budgets, and explore additional funding opportunities. We believe that financial barriers should not hinder academic achievement, and we strive to create an inclusive environment where every student can thrive.",
    },
  fr: {
    app_title: "Navigateur de Campus",
    select_location: "Sélectionner un lieu",
    search_placeholder: "Rechercher des lieux ou mots-clés...",
    legend_title: "Légende de la Carte",
    current_location: "Position Actuelle",
    area: "Zone",
    building: "Bâtiment",
    office: "Bureau",
    walking_path: "Chemin Piéton",
    selected_area: "Zone Sélectionnée",
    facilities: "Installations",
    hours: "Heures",
    phone: "Téléphone",
    capacity: "Capacité",
    buildings_offices: "Bâtiments/Bureaux",
    part_of: "Partie de",
    select_building: "Sélectionner un bâtiment/bureau",
    picture_view: "Vue Image",
    map_view: "Vue Carte",
    campus_picture_view: "Vue Image du Campus",
    campus_overview: "L'image d'aperçu du campus serait affichée ici",
    placeholder_text:
      "Ceci est un espace réservé pour l'image réelle du campus",
    scan_navigation: "Scanner pour Navigation",
    qr_failed: "Échec de génération du code QR",
    no_results: "Aucun résultat trouvé",
    security_phone: "Numéro de Téléphone Sécurité",
    standard_phone: "Numéro de Téléphone Standard",
    // Location names
    parking_1: "Parking 1",
    academic_area: "Zone Académique",
    athletic_area: "Zone Sportive",
    health_center: "Centre de Santé",
    administrative_area: "Zone Administrative",
    housing_department: "Département Logement",
    registrar_office: "Bureau du Registraire",
    library: "Bibliothèque du Mohammed VI",
    lc: "Centre de Langues",
    gym: "Centre de Fitness",
    shass: "École des Humanités, Arts et Sciences Sociales",
    sse: "École des Sciences et Ingénierie",
    sba: "École de Gestion des Affaires",
    admissions: "Bureau des Admissions",
    building_1_p: "Bâtiment 1 (côté Président)",
    building_1_v: "Bâtiment 1 (côté VPAA)",
    aud4: "Auditorium 4",
    aud17: "Auditorium 17",
    sao: "Bureau des Activités Étudiantes",
    dining1: "Services de Restauration : Cossa",
    dining2: "Services de Restauration : Proxirest",
    cafeteria: "Cafétéria",
    oasp: "Bureau de Soutien et d'Appui Académique (OASP)",
    oip: "Opportunités Académiques Internationales",
    cle: "Centre d'Excellence en Apprentissage (CLE)",
    fye: "Expérience de Première Année (FYE)",
    sec: "Sécurité",
    its: "Services des Technologies de l'Information (ITS) ",
    ee: "Employabilité et Entrepreneuriat",
    finantial_aid: "Bureau d'Aide Financière",
    // Location descriptions
    parking_1_desc:
      "Zone de stationnement principale pour visiteurs et étudiants",
    academic_area_desc: "Bâtiments académiques principaux et amphithéâtres",

    administrative_area_desc: "Bureaux administratifs et services étudiants",
    
    registrar_office_desc:
      "Dossiers étudiants, relevés de notes et services d'inscription",
    aud4_desc: "Grand amphithéâtre pour cours majeurs et événements",
    aud17_desc: "Grand amphithéâtre pour cours majeurs et événements",
    building_1_p_desc:
      "Côté droit du bâtiment 1, abrite le bureau du Président et les fonctions administratives clés.",
    building_1_v_desc:
      "Côté gauche du bâtiment 1, abrite le bureau du Vice-Président aux Affaires Académiques et le bureau des affaires.",
    sao_desc:
      "Le SAO offre aux étudiants différentes opportunités de s'engager dans des activités culturelles, éducatives, sociales et récréatives, qui font partie intégrante de la communauté d'apprentissage à AUI. Les étudiants développent leurs talents, leurs capacités de leadership et leurs compétences organisationnelles grâce à leur implication et leur contribution à divers clubs et organisations étudiantes. Notre équipe accompagne tous les AUIers dans leur quête de devenir les leaders de demain du Maroc.",
    dining1_desc:
      "Les services de restauration à AUI respectent les normes de qualité les plus élevées en fournissant des services alimentaires à la communauté universitaire. Ces services sont externalisés à une entreprise de restauration externe, qui opère sous la supervision de trois membres du personnel universitaire. Ces membres du personnel sont responsables de garantir la qualité des repas, de gérer les demandes spéciales, de traiter les commandes, d'accommoder les restrictions alimentaires et de traiter d'autres questions pertinentes. Les deux entreprises de restauration, COSSA et PROXIREST, offrent une gamme diversifiée d'options pour répondre aux besoins variés des étudiants, du personnel et du corps professoral sur le campus.",
    dining2_desc:
      "Les services de restauration à AUI respectent les normes de qualité les plus élevées en fournissant des services alimentaires à la communauté universitaire. Ces services sont externalisés à une entreprise de restauration externe, qui opère sous la supervision de trois membres du personnel universitaire. Ces membres du personnel sont responsables de garantir la qualité des repas, de gérer les demandes spéciales, de traiter les commandes, d'accommoder les restrictions alimentaires et de traiter d'autres questions pertinentes. Les deux entreprises de restauration, COSSA et PROXIREST, offrent une gamme diversifiée d'options pour répondre aux besoins variés des étudiants, du personnel et du corps professoral sur le campus.",
    cafeteria_desc:
      "Les services de restauration à AUI respectent les normes de qualité les plus élevées en fournissant des services alimentaires à la communauté universitaire. Ces services sont externalisés à une entreprise de restauration externe, qui opère sous la supervision de trois membres du personnel universitaire. Ces membres du personnel sont responsables de garantir la qualité des repas, de gérer les demandes spéciales, de traiter les commandes, d'accommoder les restrictions alimentaires et de traiter d'autres questions pertinentes. Les deux entreprises de restauration, COSSA et PROXIREST, offrent une gamme diversifiée d'options pour répondre aux besoins variés des étudiants, du personnel et du corps professoral sur le campus.",
    oasp_desc:
      "Le Bureau de Soutien et d'Appui Académique fournit un soutien académique complet au-delà de la salle de classe pour améliorer la réussite académique des étudiants. Nous fournissons une intervention précoce pour les étudiants à risque, une surveillance continue des progrès académiques et une assistance tout au long de leur parcours académique, en mettant l'accent sur le conseil académique pour assurer un progrès académique réussi vers l'obtention du diplôme.",
    oip_desc:
      "Le Bureau des Programmes Internationaux (OIP) est le lien pour les partenariats académiques de l'université et gère les accords de coopération et de collaboration éducative de l'université avec des institutions académiques mondiales sélectionnées. Les programmes de l'université favorisent une perspective internationale à travers le curriculum et l'expérience sur le campus et encouragent les étudiants à étudier à l'étranger pendant au moins un semestre dans le cadre de leur éducation.",
    cle_desc:
      "Le Centre d'Excellence en Apprentissage (CLE) englobe quatre services majeurs : le tutorat par les pairs, l'expérience de première année, le programme d'inclusion et neoCedrus. Ces services fournissent aux étudiants d'AUI un soutien académique et de la vie étudiante. Le CLE adopte une méthodologie entre pairs pour transformer l'apprentissage d'un processus vertical à un processus horizontal. Cela rend non seulement l'apprentissage plus accessible et moins intimidant, mais permet également aux étudiants de structurer leur éducation d'une manière qui leur convient. En plus d'être équipés d'une base académique solide, nos tuteurs et mentors sont formés et certifiés internationalement par le College Reading and Learning Association (CRLA) pour répondre aux besoins de leurs pairs. Alors que nos mentors fournissent aux nouveaux étudiants des conseils et des orientations, nos tuteurs assistent leurs camarades en travaillant pour trouver la méthodologie d'apprentissage qui leur convient.",
    fye_desc:
      "Le programme d'expérience de première année (FYE) est conçu par la Division des Affaires Étudiantes pour faciliter une transition fluide et réussie des étudiants dans la vie et l'apprentissage universitaires tout en s'alignant sur la mission et les valeurs fondamentales de l'université. Le FYE englobe une gamme diversifiée d'éléments, y compris deux séminaires de 1 crédit, des services de mentorat, des consultations individuelles et une variété d'événements et de programmes co-curriculaires visant à améliorer l'expérience du campus de l'étudiant. Le parcours FYE commence par un programme d'orientation complet obligatoire méticuleusement conçu pour familiariser les étudiants entrants avec la communauté dynamique d'AUI. Cette orientation combine des activités éducatives et récréatives dans le but de favoriser un sentiment d'appartenance et de connexion.",
    sec_desc:
      "La mission du Département de Sécurité d'AUI est de favoriser un sentiment de sécurité et de confort personnel pour apprendre, vivre, travailler et grandir. Le Département de Sécurité d'AUI sert la communauté en protégeant les vies et les biens des individus, en prévenant les crimes, en appliquant les politiques et règlements, et en maintenant l'ordre à l'université. Reconnaissant que la mission du Département est mieux atteinte par la formation et la sensibilisation communautaire, les employés s'engagent collectivement à établir des partenariats collaboratifs avec des individus, des groupes et des départements dans le but d'identifier et de résoudre les problèmes de sécurité et de servir la communauté AUI de manière professionnelle et respectueuse.",
    its_desc:
      "La mission du Département ITS est de fournir un support en technologie de l'information aux programmes académiques, aux centres de recherche et aux autres centres de développement de l'université à travers une infrastructure informatique, des services et la promotion de l'utilisation efficace de la technologie dans tous les efforts d'apprentissage.",
    lc_desc:
      "Nous accordons une grande importance aux langues en exigeant une compétence en anglais, français et arabe (enseigné à l'École des Humanités et des Sciences Sociales) pour l'obtention du diplôme. C'est pourquoi nous cherchons à équiper les étudiants éligibles avec les compétences linguistiques nécessaires à la réussite de leurs études académiques en utilisant des matériaux qui favorisent la sensibilisation multiculturelle mondiale et fournissent des programmes de formation linguistique sur mesure pour la communauté AUI et d'autres clients.",
    ee_desc:
      "L'Université Al Akhawayn adopte une approche unique pour préparer les étudiants à des carrières réussies en les intégrant dans le monde du travail dès le premier semestre. Grâce à des partenariats avec de grandes entreprises, les étudiants acquièrent une précieuse expérience du monde réel et établissent des connexions importantes qui les préparent au succès après l'obtention de leur diplôme. De plus, notre incubateur de startups de classe mondiale, développé en collaboration avec des partenaires locaux et internationaux prestigieux, fournit aux étudiants les ressources et le soutien dont ils ont besoin pour créer leurs propres entreprises tout en étudiant. Cette approche innovante de l'éducation distingue les diplômés d'Al Akhawayn de la concurrence, en les équipant des compétences et des expériences dont ils ont besoin pour réussir dans un marché du travail mondial en évolution rapide.",
   athletic_area_desc: "Le département d’athlétisme de l’AUI s’efforce d’offrir aux étudiants la meilleure expérience sportive possible.Les étudiants-athlètes qui rejoignent les équipes officielles de l’AUI peuvent bénéficier de tous les avantages  qu’offre la participation à un sport compétitif. Le centre de fitness est situé près du gymnase et à côté du  terrain de football principal. Il couvre une superficie de plus de 90 m² et constitue l’installation sportive la  plus récente du campus. Il comprend une salle de fitness, une salle de musculation, une salle cardiovasculaire,  une salle de tennis de table ainsi qu’une boutique sportive. Le centre est équipé d’appareils de musculation  et cardiovasculaires de dernière génération. Le département d’athlétisme de l’AUI est fier de proposer des  équipements de résistance et de force provenant de fournisseurs renommés tels que Life Fitness (USA).",
  health_center_desc:
      "Le Centre de santé d’Al Akhawayn est composé de 4 médecins et 4 infirmiers. Un médecin et une infirmière sont  disponibles 24h/24 et 7j/7 pour fournir une assistance médicale. Le Centre de santé est situé au bâtiment 26,  au rez-de-chaussée, et propose des services médicaux accessibles de 08h30 à 23h00. Toutefois, les consultations  médicales sont disponibles de 09h00 à 18h00. En cas d’urgence en dehors des heures de travail, veuillez contacter  le directeur de résidence (Hommes-ext. 555, Femmes-ext. 3333), la sécurité (ext. 2222) ou l’infirmier(e) de  garde au 2057.",
    housing_department_desc:
    " La mission du bureau du logement et de la vie résidentielle de l’AUI est d’offrir aux étudiants une expérience  résidentielle de qualité qui soutient leurs objectifs académiques et leur développement personnel. Le logement  sur le campus offre un accès facile aux salles de classe, bureaux des professeurs, installations de loisirs,  laboratoires informatiques et bibliothèque. Les chambres incluent des connexions pour la télévision, Internet  et téléphone, et les frais d’eau et de chauffage sont inclus. Les étudiants rejoignent une communauté  d’apprentissage dynamique avec des activités organisées par les assistants de résidence (RA), telles que  projections de films, soirées musicales, ateliers de cuisine, tournois de jeux et fêtes à thème.",
    library_desc:
      "La Bibliothèque Mohammed VI, première bibliothèque anglophone du Maroc, fournit des ressources et services  contribuant à la réalisation des objectifs de l’Université. Elle propose des services centrés sur les étudiants  et les enseignants afin d’enrichir l’apprentissage, l’enseignement et la recherche. Tout au long de l’année,  elle organise des ateliers de maîtrise de l’information, des formations individuelles et des guides de cours.  Elle collabore avec le corps enseignant pour développer des collections répondant aux besoins académiques  et de recherche de la communauté.",
    gym_desc:
      "Le département d’athlétisme de l’AUI s’efforce d’offrir aux étudiants la meilleure expérience sportive possible.  Les étudiants-athlètes qui rejoignent les équipes officielles peuvent profiter de tous les avantages liés à  la participation à un sport compétitif. Le centre de fitness, situé près du gymnase et adjacent au terrain de  football principal, couvre plus de 90 m². Il comprend une salle de fitness, une salle de musculation, une  salle cardiovasculaire, une salle de tennis de table et une boutique sportive. Il est équipé d’appareils  modernes provenant de fournisseurs américains réputés tels que Life Fitness",
    admissions_desc:
      " La concurrence pour intégrer l’AUI est élevée, et seuls les lycéens et titulaires de licence ayant un excellent  dossier académique sont admis. Nous informons les étudiants et leurs parents sur les conditions d’admission,  l’aide financière et les opportunités d’études à l’AUI. Notre mission inclut également le recrutement d’un  corps étudiant diversifié ainsi que le traitement et l’évaluation des candidatures, avec une réponse d’admission  en juillet pour le semestre d’automne et en décembre pour celui du printemps. L’acceptation est conditionnée  par le maintien du niveau académique initial. Les nouveaux étudiants, les transferts et les visiteurs peuvent  commencer le processus d’admission via le formulaire en ligne de l’AUI.",
    sse_desc:
      "Nous offrons une éducation de classe mondiale qui vous prépare à réussir dans votre carrière, où qu’elle vous  mène. À votre sortie de l’AUI, vous serez capable de travailler en trois langues : anglais, français et arabe.  Les étudiants interagissent étroitement avec un corps professoral expérimenté dans la recherche et à l’échelle  internationale. Grâce aux petites classes, aux projets multiples et à l’accent mis sur la communication, vous  deviendrez techniquement compétent, socialement responsable et doté d’une éthique professionnelle et d’un esprit  entrepreneurial adaptés aux leaders de demain. Un diplôme de la SSE vous prépare aussi bien aux études  supérieures qu’à la pratique professionnelle.",
    sba_desc:
      "La SBA propose des programmes conçus pour vous préparer à un environnement commercial global, en constante  évolution et hautement compétitif. Ils vous offrent les connaissances, l’expertise et les compétences essentielles  du XXIe siècle pour réussir dans le monde professionnel. Nos programmes sont soutenus par des enseignants talentueux  et passionnés, experts dans leurs disciplines et dédiés à l’apprentissage des étudiants.",
    shass_desc:
      "La School of Social Sciences, Arts, and Humanities offre à tous les étudiants de l’AUI une base en arts libéraux,  ancrée dans les valeurs, la culture, l’histoire et les aspirations futures du Maroc et de la région. En plus du  programme d’éducation générale, elle propose plusieurs majeures et mineures en sciences humaines et sociales  appliquées, où les étudiants apprennent à construire, connecter et diriger un monde meilleur.",
    finantial_aid_desc:
      "Le Bureau d'Aide Financière de l'Université Al Akhawayn est dédié à aider les étudiants à naviguer dans les aspects financiers de leur éducation. Notre mission est de fournir un soutien et des conseils complets pour garantir que tous les étudiants aient accès aux ressources dont ils ont besoin pour réussir académiquement. Nous offrons une variété d'options d'aide financière, y compris des bourses, des subventions et des opportunités de travail-études, adaptées aux besoins diversifiés de notre corps étudiant. Notre équipe s'engage à aider les étudiants à comprendre leurs packages d'aide financière, à gérer leurs budgets et à explorer des opportunités de financement supplémentaires. Nous croyons que les barrières financières ne devraient pas entraver la réussite académique, et nous nous efforçons de créer un environnement inclusif où chaque étudiant peut s'épanouir.",
    },
  ar: {
    app_title: "دليل الحرم الجامعي",
    select_location: "اختر موقعاً",
    search_placeholder: "البحث عن المواقع أو الكلمات المفتاحية...",
    legend_title: "مفتاح الخريطة",
    current_location: "الموقع الحالي",
    area: "منطقة",
    building: "مبنى",
    office: "مكتب",
    walking_path: "مسار المشي",
    selected_area: "المنطقة المحددة",
    facilities: "المرافق",
    hours: "الساعات",
    phone: "الهاتف",
    capacity: "السعة",
    buildings_offices: "المباني/المكاتب",
    part_of: "جزء من",
    select_building: "اختر مبنى/مكتب",
    picture_view: "عرض الصورة",
    map_view: "عرض الخريطة",
    campus_picture_view: "عرض صورة الحرم الجامعي",
    campus_overview: "ستظهر صورة نظرة عامة على الحرم الجامعي هنا",
    placeholder_text: "هذا نائب لصورة الحرم الجامعي الفعلية",
    scan_navigation: "امسح للتنقل",
    qr_failed: "فشل في إنشاء رمز الاستجابة السريعة",
    no_results: "لم يتم العثور على نتائج",
    security_phone: "رقم هاتف الأمن",
    standard_phone: "رقم الهاتف العادي",
    // Location names
    parking_1: "موقف السيارات 1",
    academic_area: "المنطقة الأكاديمية",
    athletic_area: "المنطقة الرياضية",
    health_center: "المركز الصحي",
    administrative_area: "المنطقة الإدارية",
    housing_department: "قسم الإسكان",
    registrar_office: "مكتب المسجل",
    library: "مكتبة محمد 6",
    lc: "مركز اللغات",
    gym: "مركز اللياقة البدنية",
    shass: "كلية العلوم الإنسانية والفنون والعلوم الاجتماعية",
    sse: "كلية العلوم والهندسة",
    sba: "كلية إدارة الأعمال",
    admissions: "مكتب القبول",
    building_1_p: "المبنى 1 (جانب الرئيس)",
    building_1_v: "المبنى 1 (جانب نائب الرئيس الأكاديمي)",
    aud4: "المدرج 4",
    aud17: "المدرج 17",
    sao: "مكتب الأنشطة الطلابية",
    dining1: "خدمات الطعام: cossa",
    dining2: "خدمات الطعام: proxirest",
    cafeteria: "الكافتيريا",
    oasp: "مكتب الدعم الأكاديمي والدعم (OASP)",
    oip: "الفرص الأكاديمية الدولية",
    cle: "مركز التميز في التعلم (CLE)",
    fye: "تجربة السنة الأولى (FYE)",
    sec: "السلامة والأمن",
    its: "خدمات تكنولوجيا المعلومات (ITS) ",
    ee: "التوظيف وريادة الأعمال",
    finantial_aid: "مكتب المساعدات المالية",
    //
    // Location descriptions
    parking_1_desc: "منطقة الوقوف الرئيسية للزوار والطلاب",
    academic_area_desc: "المباني الأكاديمية الرئيسية وقاعات المحاضرات",
    athletic_area_desc: "يسعى قسم الرياضة في جامعة الأخوين إلى توفير أفضل تجربة رياضية للطلاب. يمكن للطلاب الرياضيين المنضمين إلى  الفرق الرسمية للجامعة الاستفادة من جميع المزايا التي تقدمها الرياضات التنافسية. يقع مركز اللياقة البدنية  بالقرب من القاعة الرياضية وبجوار الملعب الرئيسي لكرة القدم، وتبلغ مساحته أكثر من 90 مترًا مربعًا، وهو أحدث  مرفق رياضي في الحرم الجامعي. يضم المركز قاعة للياقة، وقاعة للتمارين البدنية، وقاعة للقلب والأوعية الدموي ية،  وقاعة لتنس الطاولة، بالإضافة إلى متجر رياضي. ويتميز المركز بمعدات حديثة ومتطورة مستوردة من شركات أمريكية  معروفة مثل Life Fitness.",
    health_center_desc: "يضم مركز الصحة بجامعة الأخوين أربعة أطباء وأربع ممرضات، مع تواجد طبيب وممرضة في حالة جاهزية لتقديم  الرعاية الطبية على مدار الساعة وطوال أيام الأسبوع. يقع المركز في المبنى 26 بالطابق الأرضي، ويوفر خدمات  طبية من الساعة 08:30 صباحًا حتى 11:00 مساءً، بينما تتوفر الاس ستشارات الطبية من الساعة 09:00 صباحًا حتى  06:00 مساءً. في حالات الطوارئ خارج أوقات العمل، يرجى التواصل مع مدير السكن (للرجال - تحويلة 555،  للنساء - تحويلة 3 3333)، أو الأمن (تحويلة 2222)، أو الممرض المناوب على الرقم 2057.",
    administrative_area_desc: "المكاتب الإدارية وخدمات الطلاب",
    housing_department_desc: "تتمثل مهمة مكتب السكن والحياة الطلابية بجامعة الأخوين في توفير تجربة سكنية عالية الجودة تدعم الأهداف  الأكاديمية للطلاب وتنمّي قدراتهم الشخصية. يسعى المكتب إلى تعزيز نمو الطلاب من خلال بيئة سكنية آمنة وممتعة.  من أبرز مزايا السكن داخل الحرم الجامعي سهولة الوصول إلىى القاعات الدراسية، مكاتب الأساتذة، المرافق الترفيهية،  مختبرات الحاسوب والمكتبة. كما تشمل الإقامة الجامعية خدمات التلفاز، الإنترنت، والهاتف، وتكون تكاليف الماء  والتدفئة مشمولة ضمن رسوم السكن. بالإضافة إلى ذلك، يصبح الطلاب جزءاً من مجتمع تعلم نشط، حيث يقدم مساعدو السكن  (RA) مجموعة واسعة من الأنشطة الداخلية مثل ععروض الأفلام، الأمسيات الموسيقية، جلسات الطبخ، البطولات الترفيهية  والحفلات ذات الطابع الخاص.",
    registrar_office_desc: "سجلات الطلاب والنصوص وخدمات التسجيل",
    library_desc: "  تعد مكتبة محمد السادس، أول مكتبة باللغة الإنجليزية في المغرب، مصدراً أساسياً يدعم تحقيق أهداف الجامعة من  خل لال توفير الموارد والخدمات التي تعزز تجربة التعلم لدى الطلاب والبحث والتعليم لدى الأساتذة. تقدم المكتبة  خدمات متميزة تركز على الطالب والأستاذ، وتوفر ورشات في الثقافة المعلوماتية طوال العام، إضافة إلى تدريبات  فردية وأدلة مساقات. كما تعمل على بناء مجموعات معرفية بالتعاون مع أعضاء هيئة التدريس لتلبية احتياجات التدريس  والبحث في المجتمع الجامعي.",
    gym_desc: "يسعى قسم الرياضة في جامعة الأخوين إلى توفير أفضل تجربة رياضية للطلاب. يمكن للطلاب الرياضيين المنضمين إلى  الفرق الرسمية للجامعة الاستفادة من جميع المزايا التي تقدمها الرياضات التنافسية. يقع مركز اللياقة البدنية  بالقرب من القاعة الرياضية وبجوار الملعب الرئيسي لكرة القدم، وتبلغ مساحته أكثر من 90 مترًا مربعًا، ويُعد  أحدث مرفق رياضي في الحرم الجامعي. يضم المركز قاعة للياقة البدنية، وقاعة للتمارين، وقاعة للقلب والأوعية  ا  الدموية، وقاعة لتنس الطاولة، بالإضافة إلى متجر رياضي. وهو مجهز بأحدث المعدات من موردين أمريكيين معروفين  مثل Life Fitness.",
    admissions_desc: "يشهد القبول في جامعة الأخوين منافسة عالية، ولذلك يُقبل فقط الطلاب الحاصلون على نتائج أكاديمية متميزة من  الممرحلة الثانوية أو الحاصلون على شهادة البكالوريوس. نقوم بإعلام الطلاب وأولياء أمورهم بمتطلبات القبول،  والمساعدات المالية، والفرص التعليمية المتاحة. كما نعمل على استقطاب طلاب من خلفيات متنوعة، ومعالجة وتقييم  الطلبات وإعلام المتقدمين بقرار القبول في يوليو لفصل الخريف وفي ديسمبر لفصل الربيع. ويُشترط الحفاظ على  المسستوى الأكاديمي الذي تم القبول على أساسه. يمكن للطلاب الجدد والمنقولين والزائرين بدء عملية التقديم  من خلال تعبئة النموذج الإلكتروني للجامعة.",
    sse_desc: "نقدم تعليماً عالي المستوى يؤهلك للنجاح في مسيرتك المهنية أينما كانت. عند تخرجك من جامعة الأخوين، ستكون  قادرراً على العمل بثلاث لغات: الإنجليزية، الفرنسية والعربية. يتفاعل طلابنا بشكل وثيق مع أعضاء هيئة التدريس  المتميزين بخبراتهم البحثية والدولية. ومن خلال الفصول االصغيرة وكثرة المشاريع والتركيز على مهارات التواصل،  ستصبح متمكناً تقنياً، مسؤولاً اجتماعياً، ذا أخلاق مهنية عالية وروح ريادة أعمال تتناسب مع تطلعات قادة  الم   مستقبل. كما يؤهلك الحصول على شهادة من كلية العلوم والهندسة (SSE) لمتابعة الدراسات العليا أو دخول  سوق العمل المهني.",
    sba_desc: " تقدم كلية إدارة الأعمال (SBA) برامج مصممة لإعدادك لعالم الأعمال العالمي المتغير باستمرار والتنافسي بشكل  متزايد. تم تصميم هذه البرامج لتزويدك بالمعرفة والخبرة والمهارات الأساسية للقرن الحادي والعشرين بهدف النجاح  في الحياة المهنية. يدعم هذه البرامج أعضاء هيئة تدريس موهوبون وشغوفون بمجال الأعمال والتعليم، وهم خبراء  في تخصصاتهم ومكرسون لتطوير تعلم الطلاب.",
    shass_desc:
      " توفر كلية العلوم الاجتماعية والآداب والإنسانيات (SHSS) لجميع طلاب جامعة الأخوين أساسًا متينًا في الفنون  الح حرة، مرتكزًا على قيم وثقافة وتاريخ وطموحات الشعب المغربي والمنطقة. بالإضافة إلى برنامج التعليم العام،  تقدم الكلية عدة تخصصات وفرعيات في العلوم الإنسانية والااجتماعية التطبيقية، حيث يتعلم الطلاب كيفية البناء  والتواصل والقيادة من أجل عالم أفضل.",
    aud4_desc:
      "مدرج كبير يستخدم للمحاضرات الرئيسية والفعاليات والعروض التقديمية.",
    aud17_desc: "مدرج كبير للمحاضرات والفعاليات الخاصة.",
    building_1_p_desc:
      "الجانب الأيمن من المبنى 1، يحتوي على مكتب الرئيس والوظائف الإدارية الرئيسية.",
    building_1_v_desc:
      "الجانب الأيسر من المبنى 1، يحتوي على مكتب نائب الرئيس للشؤون الأكاديمية ومكتب الأعمال.",
    sao_desc:
      "يوفر مكتب الأنشطة الطلابية فرصًا متنوعة للطلاب للمشاركة في الأنشطة الثقافية والتعليمية والاجتماعية والترفيهية، والتي تُعد جزءًا لا يتجزأ من مجتمع التعلم في AUI. من خلال مشاركتهم في مختلف النوادي والمنظمات الطلابية، يطوّر الطلبة مواهبهم وقدراتهم القيادية ومهاراتهم التنظيمية. يرافق فريقنا جميع طلبة AUI في رحلتهم ليصبحوا قادة المغرب في المستقبل.",

    dining1_desc:
      "تلتزم خدمات الطعام في AUI بأعلى معايير الجودة أثناء تقديم وجبات لمجتمع الجامعة. تُعهد هذه الخدمات إلى شركة تموين خارجية تعمل تحت إشراف ثلاثة من موظفي الجامعة، المسؤولين عن ضمان جودة الوجبات، وإدارة الطلبات الخاصة، ومعالجة القيود الغذائية، والتعامل مع المسائل ذات الصلة. تقدم شركتا التموين COSSA وPROXIREST مجموعة واسعة من الخيارات لتلبية احتياجات الطلاب والموظفين وأعضاء هيئة التدريس في الحرم الجامعي.",

    dining2_desc:
      "تلتزم خدمات الطعام في AUI بأعلى معايير الجودة أثناء تقديم وجبات لمجتمع الجامعة. تُعهد هذه الخدمات إلى شركة تموين خارجية تعمل تحت إشراف ثلاثة من موظفي الجامعة، المسؤولين عن ضمان جودة الوجبات، وإدارة الطلبات الخاصة، ومعالجة القيود الغذائية، والتعامل مع المسائل ذات الصلة. تقدم شركتا التموين COSSA وPROXIREST مجموعة واسعة من الخيارات لتلبية احتياجات الطلاب والموظفين وأعضاء هيئة التدريس في الحرم الجامعي.",

    cafeteria_desc:
      "تلتزم خدمات الطعام في AUI بأعلى معايير الجودة أثناء تقديم وجبات لمجمع الجامعة. تُعهد هذه الخدمات إلى شركة تموين خارجية تعمل تحت إشراف فريق من موظفي الجامعة لضمان جودة الوجبات، وتلبية الطلبات الخاصة، ومعالجة القيود الغذائية. تقدم شركتا COSSA وPROXIREST خيارات متنوعة تلائم الاحتياجات المختلفة للطلاب والموظفين وأعضاء هيئة التدريس.",

    oasp_desc:
      "يوفر مكتب الدعم الأكاديمي دعماً شاملاً يتجاوز حدود الفصل الدراسي لتعزيز نجاح الطلاب الأكاديمي. نحن نقدم تدخلًا مبكرًا للطلاب المعرضين للخطر، مع متابعة مستمرة لتقدمهم، وإرشادًا أكاديميًا يضمن مسارًا ناجحًا نحو التخرج.",

    oip_desc:
      "يُعد مكتب البرامج الدولية (OIP) حلقة الوصل للشراكات الأكاديمية للجامعة، حيث يدير اتفاقيات التعاون مع مؤسسات عالمية مختارة. تسهم برامج التبادل والدراسة بالخارج في ترسيخ البُعد الدولي لتجربة الطالب، ويُشجَّع الطلبة على الدراسة بالخارج لمدة فصل دراسي كجزء من مسارهم الأكاديمي.",

    cle_desc:
      "يشمل مركز التميز في التعلم (CLE) أربع خدمات رئيسية: التدريس من قبل الأقران، تجربة السنة الأولى، برنامج الإدماج، وneoCedrus. توفر هذه الخدمات الدعم الأكاديمي وحياة طلابية متكاملة. يعتمد CLE على منهجية التعلم من نظير إلى نظير لتسهيل عملية التعلم وتمكين الطلاب من تطوير أساليب تناسبهم. كما يتم تدريب المعلمين والمرشدين دوليًا واعتمادهم من قبل جمعية قراءة وتعلم الكلية (CRLA)، مما يضمن جودة الدعم الأكاديمي والإرشادي.",

    fye_desc:
      "تم تصميم برنامج تجربة السنة الأولى (FYE) من قبل قسم شؤون الطلاب لتسهيل انتقال سلس وناجح إلى الحياة الجامعية، بما يتوافق مع مهمة الجامعة وقيمها. يشمل البرنامج ندوتين بساعتين معتمدتين، إضافة إلى الإرشاد الفردي والفعاليات التي تدعم اندماج الطالب. تبدأ الرحلة ببرنامج توجيهي شامل يُعرّف الطلبة الجدد على بيئة AUI ويعزز شعورهم بالانتماء.",

    sec_desc:
      "تتمثل مهمة إدارة الأمن في AUI في تعزيز الشعور بالأمان والراحة داخل الحرم الجامعي. تعمل الإدارة على حماية الأرواح والممتلكات، ومنع الجرائم، وتطبيق السياسات واللوائح، والحفاظ على النظام. من خلال التدريب والتوعية والشراكات مع مختلف الأطراف، تهدف الإدارة إلى معالجة مخاوف الأمان بطريقة مهنية ومحترمة.",

    its_desc:
      "تتمثل مهمة إدارة تكنولوجيا المعلومات في دعم المجالات الأكاديمية ومراكز البحث والتطوير من خلال توفير بنية تحتية وخدمات تقنية موثوقة عبر الحرم الجامعي، وتعزيز الاستخدام الفعّال للتكنولوجيا في جميع مجالات التعلم.",

    lc_desc:
      "نولي أهمية كبيرة للغات، حيث يُشترط التمكن من الإنجليزية والفرنسية والعربية (المقدمة في كلية العلوم الإنسانية والاجتماعية) للتخرج. لذلك نسعى لتزويد الطلاب بالمهارات اللغوية اللازمة للنجاح الأكاديمي، باستخدام مواد تُعزز الوعي الثقافي العالمي، مع تقديم برامج تدريب لغوي مصممة خصيصًا لمجتمع AUI.",

    ee_desc:
      "تتبنى جامعة الأخوين نهجًا فريدًا في إعداد الطلبة لمهن ناجحة، من خلال دمجهم في سوق العمل منذ الفصل الدراسي الأول. عبر شراكات مع شركات كبرى، يكتسب الطلاب خبرة عملية ويقيمون اتصالات مهنية مهمة. كما توفر حاضنة الشركات الناشئة المتقدمة، التي تم تطويرها بالتعاون مع شركاء محليين ودوليين، موارد ودعمًا يمكّن الطلبة من تأسيس مشاريعهم الخاصة أثناء الدراسة. يمنح هذا النهج المبتكر خريجي الجامعة ميزة تنافسية قوية في سوق العمل العالمي.",
    
      finantial_aid_desc:
      "يكرس مكتب المساعدات المالية في جامعة الأخوين جهوده لمساعدة الطلاب في التعامل مع الجوانب المالية لتعليمهم. تتمثل مهمتنا في تقديم دعم وإرشاد شامل لضمان حصول جميع الطلاب على الموارد التي يحتاجونها للنجاح الأكاديمي. نحن نوفر مجموعة متنوعة من خيارات المساعدات المالية، بما في ذلك المنح الدراسية، والمنح، وفرص العمل والدراسة، المصممة لتلبية الاحتياجات المتنوعة لطلابنا. يلتزم فريقنا بمساعدة الطلاب على فهم حزم المساعدات المالية الخاصة بهم، وإدارة ميزانياتهم، واستكشاف فرص التمويل الإضافية. نحن نؤمن بأن الحواجز المالية لا ينبغي أن تعيق النجاح الأكاديمي، ونسعى جاهدين لخلق بيئة شاملة يمكن لكل طالب أن يزدهر فيها.",
    },
};

// Current language
let currentLanguage = "en";
