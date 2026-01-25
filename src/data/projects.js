const projects = [
  {
    "id": 1,
    "title": "IM SwissGambit",
    "link": "/p1-im-swissgambit",
    "status": "complete",
    "highlighted": false,
    "creators": "Imogen Dicen",
    "image": "./images/p1-1.png",
    "icon": 'fa fa-chess',
    "description": "To create a platform that would aid my school’s Chess Club to host tournaments and train the members within it.",
    "furtherDescription": [
      "My project idea was to create a website that would allow the members of the school’s Chess Club to log in, play against each other in tournaments based off the Swiss Pairing system, and play against a Chess AI.",
      "The Swiss Pairing system (”IM Swiss-”) would allow users to create tournaments, view tournament pairings, generate tournament pairings, and download tournament data into a CSV file.",
      "The Chess AI (”Gambit”) would be used as a training method for members in the club to learn from as it learns their weaknesses in their chess games."
    ],
    "tracks": [
      {
        "name": "Code",
        "type": "text",
        "description": "Please refer to the GitHub link in the ‘Project Details’ section for the code that could be retrieved for this project."
      },
      {
        "name": "Planning",
        "type": "photos",
        "description": "(Was unable to retrieve the report I did the planning in but found code snippets based on me trying to experiment with creating a chess board using Object Oriented Programming in Python, and a draw.io file.)", 
        "items": [
          { "src": "./images/p1-2.png", "caption": "A class diagram planning what attributes each class should have." },
          { "src": "./images/p1-3.png", "caption": "Output of non-graphical board in testing." }
        ]
      },
      {
        "name": "Testing Videos",
        "type": "videos",
        "items": [
          { 
            "src": "https://www.youtube.com/embed/LASGbPAbdbg", 
            "caption": "Video on testing whether notation output in the terminal works or not." 
          },
          { 
            "src": "https://www.youtube.com/embed/LUSH0WPr_Rk", 
            "caption": "Video on testing whether piece movement and special moves work as expected or not." 
          }
        ]
      }
    ],
    "skills": [
      "Software Development",
      "Project Planning",
      "Project Management",
      "Chess"
    ],
    "details": [
      {
        "title": "Project 1",
        "subtitle": "IM SwissGambit",
        "author": "Imogen Dicen",
        "backgroundImage": "./images/p1-1.png",
        "nonProjectLinks": [
          {"name": "Duration", "icon": "fa fa-timeline", "text": "Nov 2022 - Apr 2023"},
          {"name": "Built For", "icon": "fa fa-user", "text": "A-Level Computer Science NEA"},
          {"name": "Collaboration", "icon": "fa fa-user-group", "text": "Individual"},
          {"name": "Level of Completion", "icon": "fa fa-list", "text": "Incomplete"},
        ],
        "projectLinks": [
          { 
            "platform": "GitHub", 
            "text": "Link to IM SwissGambit", 
            "url": "https://github.com/mars-rei/IM-SwissGambit",
            "icon": "fa-brands fa-github"
          }
        ],
        "technologiesUsed": [
          { "tech": "Python", "icon": "fa-brands fa-python" },
          { "tech": "HTML", "icon": "fa-brands fa-html5" },
          { "tech": "CSS", "icon": "fa-brands fa-css3-alt" }
        ],
        "technologiesLearnt": [
          { "tech": "Pygame", "icon": "fa-brands fa-python" }
        ]
      }
    ]
  },
  
  {
    "id": 2,
    "title": "BookBot",
    "link": "/p2-bookbot",
    "status": "complete",
    "highlighted": true,
    "creators": "Imogen Dicen + 4 Others",
    "image": "./images/p2-1.jpg",
    "icon": 'fa fa-robot',
    "description": "To create a project using both hardware and software, to meet multiple UN sustainability goals.",
    "furtherDescription": [
      "BookBot is an AI aided wheeled robot that helps librarians and users of libraries to increase their efficiencies and make the experience in libraries flawless.",
      "Our product’s focus is to transport returned books to their designated areas. This reduces the time librarians and library staff spend on physical tasks that would preferably be used on promoting a love of learning in such an enriched environment for students and visitors.",
      "Based off our own Curzon library, some libraries have unstaffed hours where library users self-serve themselves. BookBot will be most helpful during unstaffed hours, ensuring library resources are back in place for when librarians return to work.",
      "Our project was made to promote the UN goals of: good health and well-being; quality education; affordable and clean energy."
    ],
    "tracks": [
      {
        "name": "Features",
        "type": "list",
        "items": [
          "Line-tracking",
          "Obstacle avoidance",
          "Noise regulation",
          "Object recognition (shape recognition)",
          "Electromagnetic arms",
          "Communication between 2 Arduino Unos and a Raspberry Pi",
          {
            "item": "A website allowing the users to:",
            "subItems": [
              "Import a map for BookBot to follow paths within",
              "Connect with their specific purchase of BookBot",
              "View stats retrieved by BookBot",
              "Read the BookBot guide"
            ]
          }
        ]
      },
      {
        "name": "Concept Videos",
        "type": "videos",
        "items": [
          { 
            "src": "https://www.youtube.com/embed/bU_gu3VN288?si=wyFNlEkR08cQAOw3", 
            "caption": "Initial concept video." 
          },
          { 
            "src": "https://www.youtube.com/embed/bgNiuFnM5MU?si=HdYare2SLh_Y1rwl", 
            "caption": "Updated concept video." 
          }
        ]
      },
      {
        "name": "3D Model Concept Photos",
        "type": "photos",
        "items": [
          { "src": "./images/p2-2.png", "caption": "Back view of BookBot." },
          { "src": "./images/p2-3.png", "caption": "Top view of BookBot." },
          { "src": "./images/p2-4.png", "caption": "Side view of BookBot." },
          { "src": "./images/p2-5.png", "caption": "Front view of BookBot." }
        ]
      },
      {
        "name": "Project Proposal Presentation",
        "type": "powerpoint",
        "items": [
          "./files/p2-1.pdf",
          "Our proposal of our project."
        ]
      },
      {
        "name": "Code",
        "type": "text",
        "description": "Please refer to the GitHub link in the ‘Project Details’ section for the code of this project."
      },
      {
        "name": "Opportunistic Plan Report",
        "type": "pdf",
        "items": [
          "./files/p2-2.pdf",
          "A plan detailing what we would do if we were to take our project further (if we were to continue it after presenting it at the Innovation Festival 2024)."
        ]
      },
      {
        "name": "Project Poster",
        "type": "photos",
        "items": [
          { "src": "./images/p2-6.png", "caption": "Our poster that was displayed at our presentation booth at Innovation Fest." }
        ]
      },
      {
        "name": "Presentation Day",
        "type": "photos",
        "items": [
          { "src": "./images/p2-7.jpg", "caption": "Preparing the table." },
          { "src": "./images/p2-8.jpg", "caption": "BookBot." }
        ]
      },
      {
        "name": "Awards Evening",
        "type": "photos",
        "items": [
          { "src": "./images/p2-9.png", "caption": "Won 3rd place in the Most Innovative category!" }
        ]
      },

    ],
    "skills": [
      "Project Coordination",
      "Communication",
      "Leadership",
      "Project Planning",
      "Teamwork",
      "Project Management",
      "Drawing",
      "Coding",
      "Microcontrollers"
    ],
    "details": [
      {
        "title": "Project 2",
        "subtitle": "BookBot",
        "author": "Imogen Dicen + 4",
        "backgroundImage": "./images/p2-1.jpg",
        "nonProjectLinks": [
          {"name": "Duration", "icon": "fa fa-timeline", "text": "Jan - May 2024"},
          {"name": "Built For", "icon": "fa fa-user", "text": "Innovation Project"},
          {"name": "Collaboration", "icon": "fa fa-user-group", "text": "Group (of 5): TakeFive"},
          {"name": "Role in Project", "icon": "fa fa-people-arrows", "text": "Team leader"},
          {"name": "Level of Completion", "icon": "fa fa-list", "text": "Incomplete"},
          {"name": "Award Given", "icon": "fa fa-award", "text": "3rd Place for Most Innovative Project"}
        ],
        "projectLinks": [
          { 
            "platform": "GitHub", 
            "text": "Link to BookBot", 
            "url": "https://github.com/mars-rei/BookBot",
            "icon": "fa-brands fa-github"
          }
        ],
        "technologiesUsed": [
          { "tech": "Python", "icon": "fa-brands fa-python" },
          { "tech": "HTML", "icon": "fa-brands fa-html5" },
          { "tech": "Arduino Uno", "icon": "fa fa-microchip" },
          { "tech": "CSS", "icon": "fa-brands fa-css3-alt" },
          { "tech": "JavaScript", "icon": "fa-brands fa-js" },
        ],
        "technologiesLearnt": [
          { "tech": "Open CV", "icon": "fa fa-glasses" },
          { "tech": "C++", "icon": "fa fa-code" },
          { "tech": "Raspberry Pi", "icon": "fa-brands fa-raspberry-pi" },
          { "tech": "3d Modelling", "icon": "fa fa-cubes" }
        ]
      }
    ]
  },
  
  {
    "id": 3,
    "title": "Flight Booking System in Java",
    "link": "/p3-flight-booking-system-in-java",
    "status": "complete",
    "highlighted": false,
    "creators": "Imogen Dicen + 1 Other",
    "image": "./images/p3-1.png",
    "icon": 'fa fa-plane',
    "description": "To extend and complete the skeleton code of a flight booking system in Java using the object oriented programming paradigm.",
    "tracks": [
      {
        "name": "Features",
        "type": "list",
        "description": "Our project includes the following features off the project assessment checklist:",
        "items": [
          "Adds new customers (passengers to the system)",
          "List all customers stored in the system",
          "Issue bookings for customers",
          "Cancel bookings",
          "Saves status of the system to backend storage (i.e. text file storage)",
          "Has a number of seats (capacity) property and a price property in the flight object",
          "Has an email property in the customer object",
          "Stores data to file storage after execution of commands that change state of the system and informs the user of failure to store the data, rolling back any changes made to the system prior to the error",
          "Can remove (hide) existing flights from the system",
          "Can remove (hide) existing customers from the system",
          "Imposes a limit on the maximum number of passengers that can be added to a flight using the capacity property of the flight object",
          "Has Javadoc documentation for newer methods",
          "Lists only flights that are in the future and have not departed",
          "Extension of the GUI application to issue bookings, update bookings, cancel bookings, and to delete flights and customers"
        ]
      },
      {
        "name": "Code",
        "type": "text",
        "description": "Please refer to the GitHub link in the ‘Project Details’ section for the code of this project."
      }
    ],
    "skills": [
      "Teamwork",
      "Project Management",
      "Object Oriented Programming"
    ],
    "details": [
      {
        "title": "Project 3",
        "subtitle": "Flight Booking System In Java",
        "author": "Imogen Dicen + 1",
        "backgroundImage": "./images/p3-1.png",
        "nonProjectLinks": [
          {"name": "Duration", "icon": "fa fa-timeline", "text": "Nov 2024 - Jan 2025"},
          {"name": "Built For", "icon": "fa fa-user", "text": "Object Oriented Programming"},
          {"name": "Collaboration", "icon": "fa fa-user-group", "text": "Group (of 2)"},
          {"name": "Role in Project", "icon": "fa fa-people-arrows", "text": "Team leader"},
          {"name": "Level of Completion", "icon": "fa fa-list", "text": "Almost Complete"}
        ],
        "projectLinks": [
          { 
            "platform": "GitHub", 
            "text": "Link to Flight Booking System", 
            "url": "https://github.com/mars-rei/flight-system",
            "icon": "fa-brands fa-github"
          }
        ],
        "technologiesLearnt": [
          { "tech": "Java", "icon": "fa-brands fa-java" }
        ]
      }
    ]
  },
  
  {
    "id": 4,
    "title": "CompClub Hub",
    "link": "/p4-compclub-hub",
    "status": "complete",
    "highlighted": false,
    "creators": "Imogen Dicen + 2 Others",
    "image": "./images/p4-1.png",
    "icon": 'fa fa-trophy',
    "description": "To create a CRUD web application that retrieves, stores and edits data within a database.",
    "furtherDescription": [
      "A web application for creating, and managing clubs and club competitions, with the aid of a relational database, using the XAMPP stack."
    ],
    "tracks": [
      {
        "name": "Features",
        "type": "list",
        "items": [
          "Allows the viewing of club leader boards",
          "Allows the viewing of club category leader boards",
          "Allows users to create and manage club competitions",
          "Allows exportation of tournament data",
          "Allows the creation of normal user and admin user accounts",
          "Allows club admin login and data access",
          "Allows normal user login",
          "Allows users to search for clubs"
        ]
      },
      {
        "name": "Planning",
        "type": "pdf",
        "items": [
          "./files/p4-1.pdf",
          "Our plan for CompClub Hub including research, relational database design, planning and design."
        ]
      },
      {
        "name": "Design",
        "type": "text",
        "description": "Please refer to the Figma link in the ‘Project Details’ section for the code of this project."
      },
      {
        "name": "Code",
        "type": "text",
        "description": "Please refer to the GitHub link in the ‘Project Details’ section for the code of this project."
      }
    ],
    "skills": [
      "Project Management",
      "Gantt Project",
      "Project Planning",
      "Database Design",
      "Web App Design",
      "Relational Databases",
      "CRUD",
      "Teamwork",
      "Team Leadership"
    ],
    "details": [
      {
        "title": "Project 4",
        "subtitle": "CompClub Hub",
        "author": "Imogen Dicen + 2",
        "backgroundImage": "./images/p4-1.png",
        "nonProjectLinks": [
          {"name": "Duration", "icon": "fa fa-timeline", "text": "Nov 2024 - Jan 2025"},
          {"name": "Built For", "icon": "fa fa-user", "text": "Database & Web Application Development"},
          {"name": "Collaboration", "icon": "fa fa-user-group", "text": "Group (of 3)"},
          {"name": "Role in Project", "icon": "fa fa-people-arrows", "text": "Team leader"},
          {"name": "Level of Completion", "icon": "fa fa-list", "text": "Incomplete"}
        ],
        "projectLinks": [
          { 
            "platform": "Figma", 
            "text": "Link to CompClub Hub", 
            "url": "https://www.figma.com/design/uRY8EryFMXT6xFYnbf9l1o/compclub-hub-v2?node-id=0-1&t=t7sZyQJiMJBXK1hS-1",
            "icon": "fa-brands fa-figma"
          },
          { 
            "platform": "GitHub", 
            "text": "Link to CompClub Hub", 
            "url": "https://github.com/mars-rei/CompClub-Hub",
            "icon": "fa-brands fa-github"
          }
        ],
        "technologiesUsed": [
          { "tech": "SQL", "icon": "fa fa-database" },
          { "tech": "HTML", "icon": "fa-brands fa-html5" },
          { "tech": "CSS", "icon": "fa-brands fa-css3" },
          { "tech": "JavaScript", "icon": "fa-brands fa-js" }
        ],
        "technologiesLearnt": [
          { "tech": "PHP", "icon": "fa-brands fa-php" },
          { "tech": "PhpMyAdmin", "icon": "fa fa-database" },
          { "tech": "Bootstrap", "icon": "fa-brands fa-bootstrap" }
        ]
      }
    ]
  },
  
  {
    "id": 5,
    "title": "Spotify Themed Portfolio",
    "link": "/p5-spotify-themed-portfolio",
    "status": "complete",
    "highlighted": true,
    "creators": "Imogen Dicen",
    "image": "./images/p5-1.png",
    "icon": 'fa fa-briefcase',
    "description": "Retrieving…",
    "furtherDescription": [
      "Retrieving…"
    ],
    "tracks": [
      {
        "name": "Retrieving…",
        "type": "text",
        "description": "Retrieving…"
      }
    ],
    "skills": [
      "Retrieving…"
    ],
    "details": [
      {
        "title": "Project 5",
        "subtitle": "Spotify Themed Portfolio",
        "author": "Imogen Dicen",
        "backgroundImage": "./images/p5-1.png",
        "nonProjectLinks": [
          {"name": "Duration", "icon": "fa fa-timeline", "text": "Feb - Aug 2025"},
          {"name": "Built For", "icon": "fa fa-user", "text": "Personal development"},
          {"name": "Collaboration", "icon": "fa fa-user-group", "text": "Individual"},
          {"name": "Level of Completion", "icon": "fa fa-list", "text": "Complete"}
        ],
        "projectLinks": [
          { 
            "platform": "Figma", 
            "text": "Link to Spotify Themed Portfolio", 
            "url": "https://www.figma.com/design/csJsEbtvtSWebS0s2hTV2a/spotify-portfolio?node-id=0-1&t=iLMonoWduc00Ei2x-1",
            "icon": "fa-brands fa-figma"
          },
          { 
            "platform": "GitHub", 
            "text": "Link to Spotify Themed Portfolio", 
            "url": "https://github.com/mars-rei/spotifyThemedPortfolio",
            "icon": "fa-brands fa-github"
          },
          { 
            "platform": "Website", 
            "text": "Link to Spotify Themed Portfolio", 
            "url": "https://mars-rei.github.io/spotifyThemedPortfolio/src/",
            "icon": "fa fa-link"
          }
        ],
        "technologiesUsed": [
          { "tech": "Retrieving…", "icon": "fa fa-question" }
        ],
        "technologiesLearnt": [
          { "tech": "Retrieving…", "icon": "fa fa-question" }
        ]
      }
    ]
  },
  
  {
    "id": 6,
    "title": "CompClub Hub 2.0",
    "link": "/p6-compclub-hub-2",
    "status": "ongoing",
    "highlighted": false,
    "creators": "Imogen Dicen",
    "image": "",
    "icon": 'fa fa-trophy',
    "description": "Retrieving…",
    "furtherDescription": [
      "Retrieving…"
    ],
    "tracks": [
      {
        "name": "Retrieving…",
        "type": "text",
        "description": "Retrieving…"
      }
    ],
    "skills": [
      "Retrieving…"
    ],
    "details": [
      {
        "title": "Project 6",
        "subtitle": "CompClub Hub 2.0",
        "author": "Imogen Dicen",
        "backgroundImage": "",
        "nonProjectLinks": [
          {"name": "Duration", "icon": "fa fa-timeline", "text": "Feb 2025 - Now"},
          {"name": "Built For", "icon": "fa fa-user", "text": "Personal development"},
          {"name": "Collaboration", "icon": "fa fa-user-group", "text": "Individual"},
          {"name": "Level of Completion", "icon": "fa fa-list", "text": "On Hiatus"}
        ],
        "projectLinks": [
          
        ],
        "technologiesUsed": [
          { "tech": "Retrieving…", "icon": "fa fa-question" }
        ],
        "technologiesLearnt": [
          { "tech": "Retrieving…", "icon": "fa fa-question" }
        ]
      }
    ]
  },
  
  {
    "id": 7,
    "title": "BMW Group Physical Asset Tracking System",
    "link": "/p7-bmw-group-physical-asset-tracking-system",
    "status": "complete",
    "highlighted": true,
    "creators": "Imogen Dicen + 5 Others",
    "image": "./images/p7-1.png",
    "icon": 'fa fa-truck-ramp-box',
    "description": "To design software utilising existing CCTV camera streams, an API and a Digital Twin / Vehicle Management System to track logistics vehicles and distinguish them from each other.",
    "tracks": [
      {
        "name": "Our Solution Proposal",
        "type": "pdf",
        "items": [
          "./files/p7-1.pdf",
          "The document containing our solution to BMW Group’s problem."
        ]
      },
      {
        "name": "Project Proposal Presentation",
        "type": "powerpoint",
        "items": [
          "./files/p7-2.pdf",
          "A presentation containing our solution and research."
        ]
      }
    ],
    "skills": [
      "Team Leadership",
      "Teamwork",
      "Team Management",
      "Project Coordination",
      "Project Management",
      "Project Planning",
      "Design Thinking",
      "Software Design",
      "Public Speaking",
      "Presentation Skills",
      "Canva",
      "Creativity & Innovation",
      "Problem Solving",
      "Problem Analysis"
    ],
    "details": [
      {
        "title": "Project 7",
        "subtitle": "BMW Group Physical Asset Tracking System",
        "author": "Imogen Dicen + 5",
        "backgroundImage": "./images/p7-1.png",
        "nonProjectLinks": [
          {"name": "Duration", "icon": "fa fa-timeline", "text": "Feb - Apr 2025"},
          {"name": "Built For", "icon": "fa fa-user", "text": "Software Design"},
          {"name": "Collaboration", "icon": "fa fa-user-group", "text": "Group (of 6): BMW Group - Group 19"},
          {"name": "Role in Project", "icon": "fa fa-people-arrows", "text": "Team Leader"},
          {"name": "Award Given", "icon": "fa fa-award", "text": "Top Presentation for BMW Group Teams"},
          {"name": "Level of Completion", "icon": "fa fa-list", "text": "Complete"}
        ],
        "projectLinks": [],
        "technologiesUsed": [
          { "tech": "UML Class Diagrams", "icon": "fa fa-diagram-project" },
          { "tech": "Canva", "icon": "fa fa-file-powerpoint" }
        ],
        "technologiesLearnt": [
          { "tech": "UML Sequence Diagrams", "icon": "fa fa-diagram-project" }
        ]
      }
    ]
  },
  
  {
    "id": 8,
    "title": "Mastermind Command-Line Game",
    "link": "/p8-mastermind",
    "status": "complete",
    "highlighted": false,
    "creators": "Imogen Dicen + 1 Other",
    "image": "./images/p8-1.png",
    "icon": 'fa fa-chess-board',
    "description": "To create a small-scale prototype for the Mastermind game where it will take the form of an interactive command line program.",
    "tracks": [
      {
        "name": "Code",
        "type": "text",
        "description": "Please refer to the GitHub link in the ‘Project Details’ section for the code of this project."
      },
      {
        "name": "Log Report",
        "type": "pdf",
        "items": [
          "./files/p8-1.pdf",
          "Our log report containing the design and planning, implementation, testing stages of our project. Also includes a short analysis of OpenRA’s GitHub repository, research on version control, and a reflection our teamwork during this project."
        ]
      }
    ],
    "skills": [
      "Teamwork",
      "Communication",
      "Programming",
      "Python",
      "Declarative Programming",
      "Mathematical Programming",
      "Set Theory",
      "Data Modelling",
      "Graph Theory",
      "Functional Programming",
      "Manual Testing",
      "Automated Software Testing",
      "GitHub"
    ],
    "details": [
      {
        "title": "Project 8",
        "subtitle": "Mastermind Command-Line Game",
        "author": "Imogen Dicen + 1",
        "backgroundImage": "./images/p8-1.png",
        "nonProjectLinks": [
          {"name": "Duration", "icon": "fa fa-timeline", "text": "Mar - May 2025"},
          {"name": "Built For", "icon": "fa fa-user", "text": "Computer Mathematics & Declarative Programming"},
          {"name": "Collaboration", "icon": "fa fa-user-group", "text": "Group (of 2)"},
          {"name": "Level of Completion", "icon": "fa fa-list", "text": "Completed with a known logic error and a need of refactoring for paradigm consistency"}
        ],
        "projectLinks": [
          { 
            "platform": "GitHub", 
            "text": "Link to Mastermind", 
            "url": "https://github.com/mars-rei/mastermind",
            "icon": "fa-brands fa-github"
          }
        ],
        "technologiesUsed": [
          { "tech": "Python", "icon": "fa-brands fa-python" },
          { "tech": "draw.io", "icon": "fa fa-diagram-project" }
        ]
      }
    ]
  },
  
  {
    "id": 9,
    "title": "Summer of '25 Blog",
    "link": "/p9-summer-of-25-blog",
    "creators": "Imogen Dicen",
    "status": "complete",
    "highlighted": false,
    "image": "./images/p9-1.png",
    "icon": 'fa fa-pen-to-square',
    "description": "To document the development of my skills and interests during summer after finishing my second year of university as a computer science student.",
    "furtherDescription": [
      "(Skills and interests include my love for drawing, clay sculpting, crocheting, and my interest in developing my knowledge in frontend and backend web development.)"
    ],
    "tracks": [
      {
        "name": "Retrieving Feb '26...",
        "type": "text",
        "description": "Retrieving Feb '26..."
      }
    ],
    "skills": [
      "Retrieving..."
    ],
    "details": [
      {
        "title": "Project 9",
        "subtitle": "Summer of '25 Blog",
        "author": "Imogen Dicen",
        "backgroundImage": "./images/p9-1.png",
        "nonProjectLinks": [
          {"name": "Duration", "icon": "fa fa-timeline", "text": "May 2025 - Now"},
          {"name": "Built For", "icon": "fa fa-user", "text": "Personal Development"},
          {"name": "Collaboration", "icon": "fa fa-user-group", "text": "Individual"},
          {"name": "Level of Completion", "icon": "fa fa-list", "text": "Ongoing"}
        ],
        "projectLinks": [
          { 
            "platform": "Figma", 
            "text": "Link to Summer of '25 Blog", 
            "url": "https://www.figma.com/design/A1gjkhg7hUIlx3A95FM8Hj/summer-of--25-blog?node-id=0-1&t=9g9SjBADO5osLBCL-1",
            "icon": "fa-brands fa-figma"
          },
          { 
            "platform": "GitHub", 
            "text": "Link to Summer of '25 Blog", 
            "url": "https://github.com/mars-rei/summerof25",
            "icon": "fa-brands fa-github"
          },
          { 
            "platform": "Website", 
            "text": "Link to Summer of '25 Blog", 
            "url": "https://mars-rei.github.io/summerof25/",
            "icon": "fa fa-link"
          }
        ],
        "technologiesUsed": [
          { "tech": "Figma", "icon": "fa-brands fa-figma" },
          { "tech": "HTML", "icon": "fa-brands fa-html5" },
          { "tech": "CSS", "icon": "fa-brands fa-css3" },
          { "tech": "JavaScript", "icon": "fa-brands fa-js" }
        ],
        "technologiesLearnt": [
          { "tech": "TailwindCSS", "icon": "fa fa-code" },
          { "tech": "alpine.js", "icon": "fa fa-code" }
        ]
      }
    ]
  },
  
  {
    "id": 10,
    "title": "Fire on Marz",
    "link": "/p10-fire-on-marz",
    "status": "ongoing",
    "highlighted": false,
    "creators": "Imogen Dicen",
    "image": "",
    "icon": 'fa fa-palette',
    "description": "To create a website to showcase my art universe.",
    "tracks": [
      {
        "name": "Retrieving...",
        "type": "text",
        "description": "Retrieving..."
      }
    ],
    "skills": [
      "Retrieving..."
    ],
    "details": [
      {
        "title": "Project 10",
        "subtitle": "Fire on Marz",
        "author": "Imogen Dicen",
        "backgroundImage": "",
        "nonProjectLinks": [
          {"name": "Duration", "icon": "fa fa-timeline", "text": "Jun 2025 - Now"},
          {"name": "Built For", "icon": "fa fa-user", "text": "Personal Development"},
          {"name": "Collaboration", "icon": "fa fa-user-group", "text": "Individual"},
          {"name": "Level of Completion", "icon": "fa fa-list", "text": "On Hiatus"}
        ],
        "projectLinks": [
          { 
            "platform": "Figma", 
            "text": "Link to Fire on Marz", 
            "url": "https://www.figma.com/design/DMmq8rxByJ7YNqPG5wi1r9/fire-on-marz?node-id=0-1&t=y25t24vlWbSLiZ2K-1",
            "icon": "fa-brands fa-figma"
          },
          { 
            "platform": "GitHub", 
            "text": "Link to Fire on Marz", 
            "url": "https://github.com/mars-rei/fireonmarz",
            "icon": "fa-brands fa-github"
          },
          { 
            "platform": "Website", 
            "text": "Link to Fire on Marz", 
            "url": "https://mars-rei.github.io/fireonmarz/",
            "icon": "fa fa-link"
          }
        ],
        "technologiesUsed": [
          { "tech": "Retrieving...", "icon": "fa fa-question" }
        ],
        "technologiesLearnt": [
          { "tech": "Retrieving...", "icon": "fa fa-question" }
        ]
      }
    ]
  },
  
  {
    "id": 11,
    "title": "Pinterest Themed Digital Scrapbook",
    "link": "/p11-pinterest-themed-digital-scrapbook",
    "status": "ongoing",
    "highlighted": false,
    "creators": "Imogen Dicen + 3 Others",
    "image": "",
    "icon": 'fa fa-memory',
    "description": "Retrieving…",
    "tracks": [
      {
        "name": "Retrieving...",
        "type": "text",
        "description": "Retrieving..."
      }
    ],
    "skills": [
      "Retrieving..."
    ],
    "details": [
      {
        "title": "Project 11",
        "subtitle": "Pinterest Themed Digital Scrapbook",
        "author": "Imogen Dicen + 3",
        "backgroundImage": "",
        "nonProjectLinks": [
          {"name": "Duration", "icon": "fa fa-timeline", "text": "Jun 2025 - Now"},
          {"name": "Built For", "icon": "fa fa-user", "text": "Personal Development"},
          {"name": "Collaboration", "icon": "fa fa-user-group", "text": "Group (of 4)"},
          {"name": "Level of Completion", "icon": "fa fa-list", "text": "On Hiatus"}
        ],
        "projectLinks": [
          /*{ 
            "platform": "Figma", 
            "text": "Retrieving...", 
            "url": "",
            "icon": "fa-brands fa-figma"
          },
          { 
            "platform": "GitHub", 
            "text": "Retrieving...", 
            "url": "",
            "icon": "fa-brands fa-github"
          },
          { 
            "platform": "Website", 
            "text": "Retrieving...", 
            "url": "",
            "icon": "fa fa-link"
          }*/
        ],
        "technologiesUsed": [
          { "tech": "Retrieving...", "icon": "fa fa-question" }
        ],
        "technologiesLearnt": [
          { "tech": "Retrieving...", "icon": "fa fa-question" }
        ]
      }
    ]
  },
  
  {
    "id": 12,
    "title": "Random Lyric Generator",
    "link": "/p12-random-lyric-generator",
    "status": "ongoing",
    "highlighted": false,
    "creators": "Imogen Dicen",
    "image": "",
    "icon": 'fa fa-dice',
    "description": "To generate random song lyrics from the songs on Spotify to serve as art or writing prompts for creatives.",
    "tracks": [
      {
        "name": "Retrieving...",
        "type": "text",
        "description": "Retrieving..."
      }
    ],
    "skills": [
      "Retrieving..."
    ],
    "details": [
      {
        "title": "Project 12",
        "subtitle": "Random Lyric Generator",
        "author": "Imogen Dicen",
        "backgroundImage": "",
        "nonProjectLinks": [
          {"name": "Duration", "icon": "fa fa-timeline", "text": "Jun 2025 - Now"},
          {"name": "Built For", "icon": "fa fa-user", "text": "Personal Development"},
          {"name": "Collaboration", "icon": "fa fa-user-group", "text": "Individual"},
          {"name": "Level of Completion", "icon": "fa fa-list", "text": "On Hiatus"}
        ],
        "projectLinks": [
          { 
            "platform": "GitHub", 
            "text": "Link to Random Lyric Generator", 
            "url": "https://github.com/mars-rei/random-lyric-generator",
            "icon": "fa-brands fa-github"
          },
          { 
            "platform": "Website", 
            "text": "Link to Random Lyric Generator", 
            "url": "https://mars-rei.github.io/random-lyric-generator/",
            "icon": "fa fa-link"
          }
        ],
        "technologiesUsed": [
          { "tech": "Retrieving...", "icon": "fa fa-question" }
        ],
        "technologiesLearnt": [
          { "tech": "Retrieving...", "icon": "fa fa-question" }
        ]
      }
    ]
  },
  
  {
    "id": 13,
    "title": "Spotify Themed Portfolio in React",
    "link": "/p13-react-spotify-themed-portfolio",
    "status": "complete",
    "highlighted": true,
    "creators": "Imogen Dicen",
    "image": "./images/p13-1.png",
    "icon": 'fa fa-briefcase',
    "description": "To improve my almost pure HTML Spotify Themed Portfolio by using React to reduce all the redundant code.",
    "tracks": [
      {
        "name": "Retrieving...",
        "type": "text",
        "description": "Retrieving..."
      }
    ],
    "skills": [
      "Web Design",
      "Design",
      "Responsive Web Design"
    ],
    "details": [
      {
        "title": "Project 13",
        "subtitle": "Spotify Themed Portfolio in React",
        "author": "Imogen Dicen",
        "backgroundImage": "./images/p13-1.png",
        "nonProjectLinks": [
          {"name": "Duration", "icon": "fa fa-timeline", "text": "Aug 2025 - Now"},
          {"name": "Built For", "icon": "fa fa-user", "text": "Personal Development"},
          {"name": "Collaboration", "icon": "fa fa-user-group", "text": "Individual"},
          {"name": "Level of Completion", "icon": "fa fa-list", "text": "Complete (with known improvements)"}
        ],
        "projectLinks": [
          { 
            "platform": "GitHub", 
            "text": "Link to Spotify Themed Portfolio in React", 
            "url": "https://github.com/mars-rei/reactSpotifyThemedPortfolio",
            "icon": "fa-brands fa-github"
          }
        ],
        "technologiesUsed": [
          { "tech": "HTML", "icon": "fa-brands fa-html5" },
          { "tech": "CSS", "icon": "fa-brands fa-css3" },
          { "tech": "TailwindCSS", "icon": "fa fa-code" },
          { "tech": "JavaScript", "icon": "fa-brands fa-js" },
          { "tech": "jQuery", "icon": "fa fa-code" },
          { "tech": "alpine.js", "icon": "fa fa-code" }
        ],
        "technologiesLearnt": [
          { "tech": "React", "icon": "fa-brands fa-react" }
        ]
      }
    ]
  },
  
  {
    "id": 14,
    "title": "Spotify Themed Playlist Player",
    "link": "/p14-spotify-themed-playlist-player",
    "status": "ongoing",
    "highlighted": false,
    "creators": "Imogen Dicen",
    "image": "",
    "icon": 'fa fa-file-audio',
    "description": "To create a website that can play my music covers, preferably Spotify themed again.",
    "tracks": [
      {
        "name": "Retrieving...",
        "type": "text",
        "description": "Retrieving..."
      }
    ],
    "skills": [
      "Retrieving..."
    ],
    "details": [
      {
        "title": "Project 14",
        "subtitle": "Spotify Themed Music Player",
        "author": "Imogen Dicen",
        "backgroundImage": "",
        "nonProjectLinks": [
          {"name": "Duration", "icon": "fa fa-timeline", "text": "Aug 2025 - Now"},
          {"name": "Built For", "icon": "fa fa-user", "text": "Personal Development"},
          {"name": "Collaboration", "icon": "fa fa-user-group", "text": "Individual"},
          {"name": "Level of Completion", "icon": "fa fa-list", "text": "On Hiatus"}
        ],
        "projectLinks": [
          { 
            "platform": "GitHub", 
            "text": "Link to Spotify Themed Music Player", 
            "url": "https://github.com/mars-rei/spotifyThemedMusicPlayer",
            "icon": "fa-brands fa-github"
          },
          { 
            "platform": "Website", 
            "text": "Link to Spotify Themed Music Player", 
            "url": "https://mars-rei.github.io/spotifyThemedMusicPlayer/",
            "icon": "fa fa-link"
          }
        ],
        "technologiesUsed": [
          { "tech": "Retrieving...", "icon": "fa fa-question" }
        ],
        "technologiesLearnt": [
          { "tech": "Retrieving...", "icon": "fa fa-question" }
        ]
      }
    ]
  },
  {
    "id": 15,
    "title": "PortfolioHub",
    "link": "/p15-portfoliohub",
    "status": "ongoing",
    "highlighted": true,
    "creators": "Imogen Dicen",
    "image": "./images/p15-1.png",
    "icon": 'fa fa-industry',
    "description": "To design and implement a portfolio website builder web application for creatives (excluding generative AI).",
    "tracks": [
      {
        "name": "Project Declaration",
        "type": "text",
        "description": "Retrieving Aug '26..."
      },
      {
        "name": "Ethics Forms",
        "type": "text",
        "description": "Retrieving Aug '26..."
      },
      {
        "name": "Interim Project Report",
        "type": "text",
        "description": "Retrieving Aug '26..."
      },
      {
        "name": "Initial Research Survey",
        "type": "text",
        "description": "Retrieving Feb '26..."
      },
      {
        "name": "Interim Project Review",
        "type": "text",
        "description": "Retrieving Aug '26..."
      },
      {
        "name": "Completed UI/UX Research",
        "type": "text",
        "description": "Retrieving Feb '26..."
      },
      {
        "name": "Lo-fi",
        "type": "text",
        "description": "Retrieving Feb '26..."
      },
      {
        "name": "Hi-fi",
        "type": "text",
        "description": "Retrieving Feb '26..."
      },
      {
        "name": "Completed Analysis on Initial Research Survey",
        "type": "text",
        "description": "Retrieving Feb '26..."
      },
      {
        "name": "Database Design",
        "type": "text",
        "description": "Retrieving Feb '26..."
      },
      {
        "name": "Design Specifications",
        "type": "text",
        "description": "Retrieving Feb '26..."
      }
    ],
    "skills": [
      "Retrieving Aug '26..."
    ],
    "details": [
      {
        "title": "Project 15",
        "subtitle": "PortfolioHub",
        "author": "Imogen Dicen",
        "backgroundImage": "./images/p15-1.png",
        "nonProjectLinks": [
          {"name": "Duration", "icon": "fa fa-timeline", "text": "Sep 2025 - Now"},
          {"name": "Built For", "icon": "fa fa-user", "text": "Final Year Project"},
          {"name": "Collaboration", "icon": "fa fa-user-group", "text": "Individual"},
          {"name": "Level of Completion", "icon": "fa fa-list", "text": "Ongoing"}
        ],
        "projectLinks": [
          { 
            "platform": "GitHub", 
            "text": "Link to code", 
            "url": "https://github.com/mars-rei/portfoliohub",
            "icon": "fa-brands fa-github"
          },
          { 
            "platform": "Figma", 
            "text": "Link to mockups", 
            "url": "https://www.figma.com/design/dKRYULSLCqO5KEWJoMvpgv/portfolioHub?node-id=0-1&t=ClVHkokUZUrJhqro-1",
            "icon": "fa-brands fa-figma"
          }
        ],
        "technologiesUsed": [
          { "tech": "Figma", "icon": "fa-brands fa-figma" },
          { "tech": "PostgreSQL", "icon": "fa fa-database" },
          { "tech": "React", "icon": "fa-brands fa-react" },
          { "tech": "tailwindCSS", "icon": "fa fa-code" },
          { "tech": "PHP", "icon": "fa-brands fa-php" }
        ],
        "technologiesLearnt": [
          { "tech": "Laravel", "icon": "fa-brands fa-php" },
          { "tech": "Cloudinary", "icon": "fa fa-cloud-arrow-up" }
        ]
      }
    ]
  },
  {
    "id": 16,
    "title": "The Green Room",
    "link": "/p16-the-green-room",
    "status": "complete",
    "highlighted": true,
    "creators": "Imogen Dicen",
    "image": "./images/p16-1.png",
    "icon": 'fa fa-map-location',
    "description": "To design user experience for a mobile application to link musicians and local venues in the West Midlands.",
    "tracks": [
      {
        "name": "Research into users and background",
        "type": "text",
        "description": "Retrieving Feb '26..."
      },
      {
        "name": "User Personas, Jobs-to-be-Done, User Scenarios, and MoSCoW",
        "type": "text",
        "description": "Retrieving Feb '26..."
      },
      {
        "name": "Lo-fi",
        "type": "text",
        "description": "Retrieving Feb '26..."
      },
      {
        "name": "Hi-fi",
        "type": "text",
        "description": "Retrieving Feb '26..."
      },
      {
        "name": "Usability Testing",
        "type": "text",
        "description": "Retrieving Feb '26..."
      },
      {
        "name": "Improvements",
        "type": "text",
        "description": "Retrieving Feb '26..."
      },
      {
        "name": "Usability Testing Report",
        "type": "text",
        "description": "Retrieving Feb '26..."
      }
    ],
    "skills": [
      "Retrieving Feb '26..."
    ],
    "details": [
      {
        "title": "Project 16",
        "subtitle": "The Green Room",
        "author": "Imogen Dicen",
        "backgroundImage": "./images/p16-1.png",
        "nonProjectLinks": [
          {"name": "Duration", "icon": "fa fa-timeline", "text": "Sep - Dec 2025"},
          {"name": "Built For", "icon": "fa fa-user", "text": "User Experience Design"},
          {"name": "Collaboration", "icon": "fa fa-user-group", "text": "Individual"},
          {"name": "Level of Completion", "icon": "fa fa-list", "text": "Complete"}
        ],
        "projectLinks": [
          { 
            "platform": "Figma", 
            "text": "Link to prototyping process", 
            "url": "https://www.figma.com/design/N7vOPJxmmbzSXOfgq1HXiq/cmp6214-user-experience-design?node-id=0-1&t=onXR0dx3g9rxNehS-1",
            "icon": "fa-brands fa-figma"
          },
          { 
            "platform": "Figma", 
            "text": "Link to screens used in Maze testing", 
            "url": "https://www.figma.com/design/C3ljCyFDw3XwNboqu4cgD1/cmp6214-maze?node-id=0-1&t=CBP7XLiznZd5aUCd-1",
            "icon": "fa-brands fa-figma"
          }
        ],
        "technologiesUsed": [
          { "tech": "Figma", "icon": "fa-brands fa-figma" }
        ],
        "technologiesLearnt": [
          { "tech": "Maze", "icon": "fa fa-clipboard-question" }
        ]
      }
    ]
  },
  {
    "id": 17,
    "title": "Predictive Modelling of a Song's Popularity",
    "link": "/p17-predictive-modelling-song-popularity",
    "status": "complete",
    "highlighted": false,
    "creators": "Imogen Dicen",
    "image": "./images/p17-1.png",
    "icon": 'fa fa-chart-line',
    "description": "To document the process of creating a machine learning model to predict a song's popularity.",
    "tracks": [
      {
        "name": "Finding a Dataset",
        "type": "text",
        "description": "Retrieving Feb '26..."
      },
      {
        "name": "Splitting the Dataset",
        "type": "text",
        "description": "Retrieving Feb '26..."
      },
      {
        "name": "Exploratory Data Analysis",
        "type": "text",
        "description": "Retrieving Feb '26..."
      },
      {
        "name": "Data Cleaning",
        "type": "text",
        "description": "Retrieving Feb '26..."
      },
      {
        "name": "Pre-processing",
        "type": "text",
        "description": "Retrieving Feb '26..."
      },
      {
        "name": "Results",
        "type": "text",
        "description": "Retrieving Feb '26..."
      },
      {
        "name": "Hyperparameter Tuning",
        "type": "text",
        "description": "Retrieving Feb '26..."
      },
      {
        "name": "Coursework",
        "type": "text",
        "description": "Retrieving Feb '26..."
      }
    ],
    "skills": [
      "Retrieving Feb '26..."
    ],
    "details": [
      {
        "title": "Project 17",
        "subtitle": "Predictive Modelling of a Song's Popularity",
        "author": "Imogen Dicen",
        "backgroundImage": "./images/p17-1.png",
        "nonProjectLinks": [
          {"name": "Duration", "icon": "fa fa-timeline", "text": "Sep - Dec 2025"},
          {"name": "Built For", "icon": "fa fa-user", "text": "Artificial Intelligence and Machine Learning"},
          {"name": "Collaboration", "icon": "fa fa-user-group", "text": "Individual"},
          {"name": "Level of Completion", "icon": "fa fa-list", "text": "Complete"}
        ],
        "projectLinks": [
          { 
            "platform": "GitHub", 
            "text": "Link to Python Notebook", 
            "url": "https://github.com/mars-rei/predictiveModellingSpotifySongPopularity",
            "icon": "fa-brands fa-github"
          }
        ],
        "technologiesUsed": [
          { "tech": "Python", "icon": "fa-brands fa-python" },
          { "tech": "Pandas", "icon": "fa fa-magnifying-glass-chart" },
          { "tech": "NumPy", "icon": "fa fa-magnifying-glass-chart" },
          { "tech": "Matplotlib", "icon": "fa fa-magnifying-glass-chart" },
          { "tech": "Seaborn", "icon": "fa fa-magnifying-glass-chart" }
        ]
      }
    ]
  }
];

export default projects;