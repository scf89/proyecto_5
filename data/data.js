const data = {
    name: "Sergio Carrera Fernández",
    address: "Avenida Finisterre 196, 3ºA, 15010, A Coruña",
    email: "scarreraf@gmail.com",
    avatar:
      "../images/Sergio_Carrera.jpg",
    aboutMe:
      "I'm a passionate GIS developer with a diverse educational background. I hold a Bachelor's degree in Geomatics Engineering, and a Master's in Geoinformatics and several GIS Development Certifications. My work experience includes land surveying and developing GIS scripts and web applications. I'm committed to continuous learning and contributing to the Geographic Information Systems.",
  
    education: {
      master: "Master in Geoinformatics",
      university_master: "University of A Coruña",
      graduationYear_master: 2020,
      honors: "Extraordinary Master's Award 2019/2020",
      degree: "Engineering in Geomatics and Surveying",
      university: "University of Santiago de Compostela",
      graduationYear: 2016,
      relevantCourses: [
        "Geospatial analysis with Python",
        "Angular 16",
        "3D web map applications (ThreeJS)",
        "Interactive web mapping",
        "Plugin development for QGIS",
        "PyQGIS",
        "Webmapping with Leaflet",
        "Advance QGIS",
        "Spatial data infraestructures"
      ],
    },
    workExperience: [
      {
        position: "GIS Developer",
        company: "Mindden",
        startDate: "2024",
        endDate: "Present",
        description:
          "Working as external for Idrica with the following tasks:<br> • Assisting in the development of the own GIS framework.<br> • Developing functionalities for GIS viewers of various projects with Reacct and Openlayers.",
      },
      {
        position: "GIS Developer",
        company: "Minsait",
        startDate: "2021",
        endDate: "2024",
        description:
          "• Documentation and tests for the SPEN project migration<br> • App development with Java for IBDGEO project<br> • Tool development with Vue for Coruña municipality viewer",
      },
      {
        position: "Web andGIS Developer",
        company: "TecGIS",
        startDate: "2021",
        endDate: "2021",
        description:
          "• Development and improvement of Inspekti platform based on php, javascript, jquery and Postgres",
      },
      {
        position: "GIS Developer",
        company: "Smartrural",
        startDate: "2020",
        endDate: "2021",
        description:
          "• Scripts development with R for automatic download of satellite images<br> • Creation of web map viewers to show raster and vector data with Leaflet<br> • Improvement of Postgres database for spatial data storage",
      },
      {
        position: "Web and GIS Developer",
        company: "Indesnor",
        startDate: "2019",
        endDate: "2020",
        description:
          "Web app development with:<br> • front-end:<br>- JavaScript, jQuery.<br> - CSS3, Material Design.<br> - 3D graphics (WebGL, Three.js).<br> - Maps (Leaflet).<br> • back-end:<br> - JavaScript, Node.js.<br> - PostgreSQL.",
      },
      {
        position: "Land Surveyor",
        company: "Malcolm Hughes Land Surveyors",
        startDate: "2017",
        endDate: "2018",
        description:
          "Land surveyor in sections 3 and 9 of the 'Mersey Gateway Project', one of the most significant infrastructure projects in the United Kingdom.",
      },
    ],
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Angular",
      "Git",
      "Python",
      "PHP",
      "Node",
      "Postgres",
      "PostGIS",
      "MySQL",
      "PhoneGap",
      "Leaflet",
      "Openlayers",
      "Frontend and Backend Development",
    ],
    projects: [
      {
        title: "InventariApp",
        description:
          "Hybrid mobile application for conducting inventories of public roads (spanish language)",
        link: "https://github.com/scf89/InventariApp",
        preview:
          "../images/visor.png",
      },
      {
        title: "QGIS raster inversor",
        description:
          "Plugin for QGIS that inverts the values of a raster",
        link: "https://github.com/scf89/qgis-raster-inversor",
        preview:
          "../images/QGIS-3.36.png",
      },
    ],
  };

  export default data;