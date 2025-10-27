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
    shass: "School of Humanities, Arts, and Social Sciences",
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
    // Location descriptions
    parking_1_desc: "Main parking area for visitors and students",
    academic_area_desc: "Main academic buildings and lecture halls",
    athletic_area_desc:
      "The AUI Athletics Department strives to provide students with the finest athletic experience. Student athletes who join AUI official teams can expect to gain all the benefitsthat participation in a competitive sport offers.The Fitness Center is located near the gymnasium and next to the main soccer field. The Center is more than 960 sq. ft. and is the most recent sports facility built on campus. It features a fitness room, a weight room, a cardiovascular room, table tennis room and a sports shop. The fitness center is equipped with state of the art weight and cardiovascular equipment. The AUI Athletic department proudly offers strength and resistance equipment from famous USA suppliers such as Life Fitness.",
    health_center_desc:
      "Al Akhawayn Health Center is staffed with 4 doctors, 4 nurses, a doctor and a nurse are on standby to provide medical attention 24 hours a day, 7 days a week. The health Center is in building 26, on the ground floor, offering accessible medical services during operating hours from 08:30 AM to 11:00 PM. However, medical consultations are available from 09:00am to 06:00 PM. If you require urgent medical attention or face an emergency after working hours, please get in touch either with the Hall Director by (Men-ext. 555, Women-ext. 3333) or the security by (-ext. 2222) or even the nurse on duty @ (2057). ",
    administrative_area_desc: "Administrative offices and student services",
    housing_department_desc:
      "The mission of AUI Housing and Residential Life Office is to provide students with a quality residential experience that supports their academic goals and personal development. Housing and Residential Life seeks to creatively stimulate students’ growth and provide a safe and enjoyable residential experience.  One advantage of on-campus housing is its convenience. Students can easily access classrooms, faculty offices, recreational facilities, computer labs, and the library. In addition to the convenience of proximity, campus accommodations include television, Internet and telephone connections, and water/ heating costs are included in the housing fees. Equally important, students become a part of the learning community and a sense of connection is established by being offered a vast range of in-doors activities by Resident Assistants (RA) such as regular movie projection/debates, music evenings, cooking sessions, games tournaments and themed parties.",
    registrar_office_desc:
      "Student records, transcripts, and enrollment services",
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
    // Location descriptions
    parking_1_desc:
      "Zone de stationnement principale pour visiteurs et étudiants",
    academic_area_desc: "Bâtiments académiques principaux et amphithéâtres",
    athletic_area_desc: "Installations sportives et zones récréatives",
    health_center_desc:
      "Services médicaux et soutien santé pour étudiants et personnel",
    administrative_area_desc: "Bureaux administratifs et services étudiants",
    housing_department_desc:
      "Services de logement étudiant et gestion des dortoirs",
    registrar_office_desc:
      "Dossiers étudiants, relevés de notes et services d'inscription",
    library_desc: "Bibliothèque avec collection étendue et espaces d'étude",
    lecture_hall_a_desc: "Grand amphithéâtre pour cours majeurs et événements",
    gym_desc: "Centre de fitness moderne avec équipements et cours",
    admissions_desc: "Bureau des admissions et services aux étudiants",
    sse_desc: "Doyen de SSE : Dr. Salah Al-Majeed",
    sba_desc: "Doyen de SBA : Dr. Lakshmi Goel",
    shass_desc: "Doyen de SHASS : Dr. Asma Abbas",
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
    //
    // Location descriptions
    parking_1_desc: "منطقة الوقوف الرئيسية للزوار والطلاب",
    academic_area_desc: "المباني الأكاديمية الرئيسية وقاعات المحاضرات",
    athletic_area_desc: "المرافق الرياضية والمناطق الترفيهية",
    health_center_desc: "الخدمات الطبية والدعم الصحي للطلاب والموظفين",
    administrative_area_desc: "المكاتب الإدارية وخدمات الطلاب",
    housing_department_desc: "خدمات الإسكان الطلابي وإدارة المساكن",
    registrar_office_desc: "سجلات الطلاب والنصوص وخدمات التسجيل",
    library_desc: "المكتبة  مع مجموعة واسعة ومساحات الدراسة",
    lecture_hall_a_desc: "قاعة محاضرات كبيرة للدورات الرئيسية والفعاليات",
    gym_desc: "مركز لياقة بدنية حديث مع المعدات والدروس",
    admissions_desc: "مكاتب للوظائف الإدارية المختلفة",
    sse_desc: "عميد كلية العلوم والهندسة: Dr. Salah Al-Majeed.  ",
    sba_desc: "عميدة كلية إدارة الأعمال: Dr. Lakshmi Goel.  ",
    shass_desc:
      "عميدة كلية العلوم الإنسانية والفنون والعلوم الاجتماعية: Dr. Asma Abbas.  ",
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
  },
};

// Current language
let currentLanguage = "en";
