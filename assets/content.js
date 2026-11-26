/*
  PERSONALISE TON SITE ICI.
  Tous les textes importants, la navigation et les publications sont dans ce fichier.
  Il suffit de changer les valeurs entre guillemets, puis enregistrer.
*/
window.SITE = {
  name: "Jérôme Bétrisey",
  authorName: "Bétrisey, J.", // Highlighted in bold in the publication list
  // Shown under the name on the home page; one entry per line
  affiliation: [
    "Institut für Astrophysik, Universität Zürich",
    "Winterthurerstrasse 190, CH-8057 Zürich, Switzerland"
  ],
  institution: "Institut für Astrophysik, Universität Zürich, Switzerland",
  // Written in two parts so that simple spam robots reading the files don't find the full address;
  // the page reassembles it into a normal "Email" link for visitors.
  email: { user: "jerome.betrisey", domain: "uzh.ch" },
  portrait: "assets/portrait.jpg", // 4:5 portrait shown left of "About me"
  // Default colour palette: "encre" (Encre & papier), "ardoise", "sarcelle", "etoile", "nuit",
  // "foret", "aurore", "graphite" or "nebuleuse".
  // Visitors can switch palettes with the small ✦ at the top left of the page.
  theme: "encre",
  showMedia: false, // Change to true to add a 'Media' tab and section

  links: {
    orcid: "https://orcid.org/0000-0002-6462-3683",
    ads: "https://scixplorer.org/search?p=1&q=author%3A%22betrisey%2Cj.%22&sort=date+desc&d=astrophysics",
    scholar: "",
    github: ""
  },

  home: {
    /* tagline: "Asteroseismology · Stellar evolution · Star-planet interactions", */
    intro: "I study the internal structure and evolution of stars, using their oscillations as a tool to better understand stellar physics and the planetary systems they host.",
    aboutTitle: "About me",
    aboutParagraphs: [
      "I am a Swiss astrophysicist working at the intersection of asteroseismology and planetary science. My research combines asteroseismic, spectroscopic, and interferometric observations with theoretical stellar models to characterise stars, investigate their evolution, and explore their interactions with planetary systems.",
      "I am particularly interested in connecting detailed stellar characterisation with broader questions in exoplanet science, from determining the fundamental properties and ages of host stars to investigating the long-term evolution of planetary systems.",
      "I am involved in the PLATO and Ariel space missions, where I contribute expertise in forward modelling and inverse methods for precise stellar characterisation."
    ],
    focus: ["Asteroseismology", "Stellar structure and evolution", "Exoplanet host stars", "Star-planet interactions"]
  },

  researchIntro: "My work follows stars from their deep interiors to the planetary systems they host: measuring their properties precisely, understanding where our models fall short, and tracing how stars and planets shape each other over time.",
  research: [
    {
      title: "Asteroseismic modelling",
      image: "assets/figures/fig_modelling.svg",
      imageAlt: "Comparison of stellar ages from the SA17 catalogue with FICO ages, with residuals shown below",
      caption: "Credits: Bétrisey et al. (2026a)",
      paragraphs: [
        "Stellar oscillations provide a unique window into the internal structure of stars. By comparing observed oscillation frequencies with predictions from theoretical models, asteroseismology allows us to infer fundamental stellar properties, such as mass, radius, and age, and to investigate the physical processes that govern stellar evolution, including internal mixing and angular momentum transport.",
        "My research focuses on combining forward modelling and seismic inversion techniques to obtain precise and accurate constraints on stellar properties and internal structure. I am particularly interested in identifying which aspects of stellar interiors can be reliably constrained by seismic observations, and in developing novel inversion techniques to extract information beyond the scope of conventional forward modelling."
      ]
    },
    {
      title: "Biases in seismic inferences",
      image: "assets/figures/fig_biases.svg",
      imageAlt: "Solar age inferred from BiSON data over time, following the 10.7 cm radio flux of the activity cycle",
      caption: "Credits: Bétrisey et al. (2024b)",
      paragraphs: [
        "Stars are governed by a multitude of complex and often interconnected physical processes. Although our understanding of stellar structure and evolution has improved considerably over the past century, simplifying assumptions remain necessary to keep computational costs manageable.",
        "My research focuses on how these limitations can introduce systematic biases in the stellar properties inferred from asteroseismology. In particular, I study the imperfect modelling of convection in the near-surface layers, the impact of stellar magnetic activity cycles on oscillation frequencies, and the sensitivity of seismic inferences to the choice of physical ingredients in stellar models."
      ]
    },
    {
      title: "Star-planet interactions",
      image: "assets/figures/fig_SPI.png",
      imageTall: true, // longer text: let this figure grow taller
      imageAlt: "Evolution of planetary mass and radius with age for different envelope fractions, for icy and rocky cores",
      caption: "Credits: Bétrisey et al. (2026c)",
      paragraphs: [
        "Beyond stellar characterisation itself, accurate knowledge of the host star is essential to understanding planetary systems. Throughout their evolution, stars and planets interact through various mechanisms that are closely linked to the structural, rotational, and magnetic properties of the host star. A detailed understanding of stellar evolution is therefore crucial not only to characterise planetary systems as we observe them today, but also to reconstruct their past and predict their future evolution.",
        "In my research, I combine detailed asteroseismic modelling with evolutionary models of star–planet interactions. I have applied this approach to benchmark systems such as Kepler-93, investigating the orbital evolution of a super-Earth under the effects of stellar tides and atmospheric evaporation, and HD 219134, exploring the rotational and magnetic history of the host star and its consequences for the atmospheric evolution of its planets.",
        "More recently, my research has turned towards the impact of planets on their host stars, particularly through planetary engulfment. Such events can leave observable signatures in the host star that persist long after the planet itself has disappeared. I am interested in understanding the origin and persistence of these signatures and in exploring how this stellar fossil record can be used to reconstruct the evolutionary history of planetary systems."
      ]
    }
  ],

  cv: {
    /* introduction: "A short summary of my academic background.", */
    appointments: [
      { dates: "2026 – present", title: "SNSF postdoctoral fellow", organisation: "University of Zurich" },
      { dates: "2024 – 2026", title: "SNSF postdoctoral fellow", organisation: "Uppsala University" },
      { dates: "2024", title: "Postdoctoral researcher", organisation: "University of Geneva" }
    ],
    education: [
      { dates: "2024", title: "PhD in Astronomy and Astrophysics", organisation: "University of Geneva" },
      { dates: "2020", title: "MSc in Physics", organisation: "ETH Zurich" }
    ]
  },

  /* Publications, newest first. Add new entries at the top. */
  publications: [
    {"year": "2026", "title": "Detailed study of HD 219134: a benchmark K-dwarf with a compact planetary system", "authors": "Bétrisey, J., Pezzotti, C., Buldgen, G., Vidotto, A. A., Folsom, C. P., et al.", "journal": "A&A, 715, A224", "links": [{"label": "DOI", "url": "https://doi.org/10.1051/0004-6361/202661326"}]},
    {"year": "2026", "title": "Physics-induced impact on the properties of Kepler/K2 solar analogs in the light of PLATO's requirements", "authors": "Khan, S., Buldgen, G., Bétrisey, J., García, R. A., and Mathur, S.", "journal": "A&A, 715, A9", "links": [{"label": "DOI", "url": "https://doi.org/10.1051/0004-6361/202662697"}]},
    {"year": "2026", "title": "Minimising magnetic activity effects in PLATO observations: Insights from the Sun as a star", "authors": "Bétrisey, J., Broomhall, A.-M., Breton, S. N., Panetier, E., García, R. A., et al.", "journal": "A&A, 711, A75", "links": [{"label": "DOI", "url": "https://doi.org/10.1051/0004-6361/202660277"}]},
    {"year": "2026", "title": "Characterizing six seismic solar analogs observed by Kepler, K2, and Hermes", "authors": "García, R. A., Mathur, S., Hookway, G. T., Godoy-Rivera, D., Masseron, T., Bétrisey, J., et al.", "journal": "A&A, 710, A369", "links": [{"label": "DOI", "url": "https://doi.org/10.1051/0004-6361/202659849"}]},
    {"year": "2026", "title": "Asteroseismic modelling of main-sequence solar-like stars and Kepler exoplanet host stars with the FICO procedure. I. Catalogue of fundamental stellar properties", "authors": "Bétrisey, J., Reese, D. R., Pezzotti, C., Goupil, M. J., and Cunha, M. S.", "journal": "A&A, 710, A134", "links": [{"label": "DOI", "url": "https://doi.org/10.1051/0004-6361/202557377"}]},
    {"year": "2026", "title": "The activity-rotation-age relationship under the lens of asteroseismology", "authors": "Pezzotti, C., Bétrisey, J., Buldgen, G., Gilfanov, M., Bikmaev, I., et al.", "journal": "A&A, 706, A257", "links": [{"label": "DOI", "url": "https://doi.org/10.1051/0004-6361/202557390"}]},
    {"year": "2025", "title": "Asteroseismic modelling of Kepler Legacy stars including lithium depletion", "authors": "Buldgen, G., Bétrisey, J., Pezzotti, C., Deal, M., Borisov, S., et al.", "journal": "A&A, 702, A162", "links": [{"label": "DOI", "url": "https://doi.org/10.1051/0004-6361/202556216"}]},
    {"year": "2025", "title": "Frequency separation ratios do not suppress magnetic activity effects in solar-like stars", "authors": "Bétrisey, J., Broomhall, A.-M., Breton, S. N., García, R. A., Davenport, H., et al.", "journal": "A&A, 699, L9", "links": [{"label": "DOI", "url": "https://doi.org/10.1051/0004-6361/202555930"}]},
    {"year": "2025", "title": "The Future of Solar modelling: requirements for a new generation of solar models", "authors": "Buldgen, G., Canocchi, G., Le Saux, A., Baturin, V., Trampedach, R., et al.", "journal": "Solar Physics, 300, 97", "links": [{"label": "DOI", "url": "https://doi.org/10.1007/s11207-025-02508-x"}]},
    {"year": "2025", "title": "Influence of the magnetic activity cycle on mean density and acoustic radius inversions", "authors": "Bétrisey, J., Reese, D. R., Breton, S. N., Broomhall, A.-M., Amarsi, A. M., et al.", "journal": "A&A, 697, A219", "links": [{"label": "DOI", "url": "https://doi.org/10.1051/0004-6361/202554417"}]},
    {"year": "2024", "title": "Grids of stellar models with rotation: VIII. Models from 1.7 to 500 M⊙ at metallicity Z = 10⁻⁵", "authors": "Sibony, Y., Shepherd, K. G., Yusof, N., Hirschi, R., Chambers, C., et al.", "journal": "A&A, 690, A91", "links": [{"label": "DOI", "url": "https://doi.org/10.1051/0004-6361/202450180"}]},
    {"year": "2024", "title": "Markov chain Monte Carlo inversions of the internal rotation of Kepler subgiants", "authors": "Buldgen, G., Fellay, L., Bétrisey, J., Deheuvels, S., Farnir, M., et al.", "journal": "A&A, 689, A307", "links": [{"label": "DOI", "url": "https://doi.org/10.1051/0004-6361/202450315"}]},
    {"year": "2024", "title": "Imprint of the magnetic activity cycle on solar asteroseismic characterisation based on 26 years of GOLF and BiSON data", "authors": "Bétrisey, J., Farnir, M., Breton, S. N., García, R. A., Broomhall, A.-M., et al.", "journal": "A&A, 688, L17", "links": [{"label": "DOI", "url": "https://doi.org/10.1051/0004-6361/202451365"}]},
    {"year": "2024", "title": "Asteroseismic modelling strategies in the PLATO era. II. Automation of seismic inversions and quality assessment procedure", "authors": "Bétrisey, J., Buldgen, G., Reese, D. R., and Meynet, G.", "journal": "A&A, 681, A99", "links": [{"label": "DOI", "url": "https://doi.org/10.1051/0004-6361/202347594"}]},
    {"year": "2023", "title": "Asteroseismic modelling strategies in the PLATO era. I. Mean density inversions and direct treatment of the seismic information", "authors": "Bétrisey, J., Buldgen, G., Reese, D. R., Farnir, M., Dupret, M.-A., et al.", "journal": "A&A, 676, A10", "links": [{"label": "DOI", "url": "https://doi.org/10.1051/0004-6361/202346258"}]},
    {"year": "2023", "title": "Testing angular momentum transport processes with asteroseismology of solar-type main-sequence stars", "authors": "Bétrisey, J., Eggenberger, P., Buldgen, G., Benomar, O., and Bazot, M.", "journal": "A&A, 673, L11", "links": [{"label": "DOI", "url": "https://doi.org/10.1051/0004-6361/202245764"}]},
    {"year": "2022", "title": "Inversions of Stellar Structure From Asteroseismic Data", "authors": "Buldgen, G., Bétrisey, J., Roxburgh, I. W., Vorontsov, S. V., and Reese, D. R.", "journal": "Frontiers in Astronomy and Space Sciences, 9, 942373", "links": [{"label": "DOI", "url": "https://doi.org/10.3389/fspas.2022.942373"}]},
    {"year": "2022", "title": "Probing stellar cores from inversions of frequency separation ratios", "authors": "Bétrisey, J. and Buldgen, G.", "journal": "A&A, 663, A92", "links": [{"label": "DOI", "url": "https://doi.org/10.1051/0004-6361/202243640"}]},
    {"year": "2022", "title": "Thorough characterisation of the 16 Cygni system. II. Seismic inversions of the internal structure", "authors": "Buldgen, G., Farnir, M., Eggenberger, P., Bétrisey, J., Pezzotti, C., et al.", "journal": "A&A, 661, A143", "links": [{"label": "DOI", "url": "https://doi.org/10.1051/0004-6361/202142001"}]},
    {"year": "2022", "title": "Kepler-93: A testbed for detailed seismic modelling and orbital evolution of super-Earths around solar-like stars", "authors": "Bétrisey, J., Pezzotti, C., Buldgen, G., Khan, S., Eggenberger, P., et al.", "journal": "A&A, 659, A56", "links": [{"label": "DOI", "url": "https://doi.org/10.1051/0004-6361/202141083"}]}
  ],

  /* Conference proceedings, newest first. */
  proceedings: [
    {"year": "2026", "title": "Analysis of the impact of modified physics on the properties of K2 solar analogs", "authors": "Khan, S., Buldgen, G., Bétrisey, J., García, R. A., and Mathur, S.", "journal": "Unraveling the Joint Lives of Stars and Exoplanets, IAU Symposium 408, Proceedings of the IAU, in press", "links": []},
    {"year": "2026", "title": "Preparing for PLATO and Ariel: HD 219134 as a benchmark for precise star-planet characterization", "authors": "Bétrisey, J., Pezzotti, C., Buldgen, G., Vidotto, A. A., Folsom, C. P., et al.", "journal": "Unraveling the Joint Lives of Stars and Exoplanets, IAU Symposium 408, Proceedings of the IAU, in press", "links": []}
  ],

  /* Activating Media adds an anchored section to the main page and a menu item. */
  media: [
    // { year: "2026", title: "Interview on stellar interiors", source: "Science magazine", url: "https://example.com" }
  ]
};
