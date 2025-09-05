const projects = [
  {
    "id": 1,
    "title": "IM SwissGambit",
    "link": "/p1-im-swissgambit",
    "creators": "Imogen Dicen",
    "image": "/images/p1-1.png",
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
        "description": "Please refer to the GitHub link in the ‘Project Details’ section (on the right) for the code that could be retrieved for this project."
      },
      {
        "name": "Planning",
        "type": "slideshow",
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
        "duration": "Nov 2022 - Apr 2023",
        "builtFor": "A-Level Computer Science NEA",
        "collaboration": "Individual",
        "levelOfCompletion": "Incomplete",
        "backgroundImage": "./images/p1-1.png",
        "projectLinks": [
          { 
            "platform": "GitHub", 
            "text": "Link to IM SwissGambit", 
            "url": "https://github.com/mars-rei/IM-SwissGambit"
          }
        ],
        "technologiesUsed": [
          { "tech": "Python", "icon": "fab fa-python" },
          { "tech": "HTML", "icon": "fab fa-html5" },
          { "tech": "CSS", "icon": "fab fa-css3-alt" }
        ],
        "technologiesLearnt": [
          { "tech": "Pygame", "icon": "fas fa-gamepad" }
        ]
      }
    ]

  }
];

export default projects;