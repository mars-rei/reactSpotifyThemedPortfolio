import { Link } from "react-router-dom";

import projects from "../../data/projects"
import certifications from "../../data/certifications"

const PlaylistSection = ({ section }) => {

  let elements = [];
  let title = "";
  let viewAllLink = "";

  if (section === "portfolioHighlights") {
    elements = projects.filter(project => project.highlighted).reverse().slice(0, 8);
    title = "Portfolio Highlights";

  } else if (section === "ongoingProjects") {
    elements = projects.filter(project => project.status === "ongoing").reverse().slice(0, 8);
    title = "Ongoing Projects";
    viewAllLink = "#/projects/ongoing"

  } else if (section === "archivedProjects") {
    elements = projects.filter(project => project.status === "complete").reverse().slice(0, 8);
    title = "Archived Projects";
    viewAllLink = "#/projects/complete"

  } else if (section === "topCertifications") {
    elements = certifications.slice(0,8);
    title = "Certifications";
    viewAllLink = "#/certifications"
  }

  elements = elements.map((element, index) => {
    const elementWithVisibility = {...element};
    
    if (index === 3) { 
        elementWithVisibility.visibleMd = false;
    } else if (index === 4 || index === 5) { 
        elementWithVisibility.visibleLg = false;
    } else if (index === 6 || index === 7) { 
        elementWithVisibility.visibleXl = false;
    }

    return elementWithVisibility;
  });

  const date = "August 2025";

  return (
    <div className="my-8">
      <p className="text-lg md:text-2xl font-bold">{title}</p>
      <div className="hidden md:flex flex-row justify-between"> 
        <p className="mb-4 text-sm text-faded">As of {date}</p> 
        <a href={viewAllLink} className={viewAllLink ? "md:inline-flex hidden" : "hidden"}>
          <p className="mb-4 text-sm text-faded font-semibold">Show All</p>
        </a>
      </div>

      <div className="flex overflow-x-auto md:overflow-x-hidden scrollbar-hide -mx-4 md:-mx-0">
        <div className="flex md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 -space-x-4 md:gap-x-5 md:space-x-0">
          {elements.map(element => (
            <Link key={element.id} to={element.link}>
              <div
                className={`
                  ${element.visibleMd === false ? 'md:hidden lg:block' : ''}
                  ${element.visibleLg === false ? 'md:hidden xl:block' : ''}
                  ${element.visibleXl === false ? 'md:hidden 2xl:block' : ''}
                `}
              >
                <div className="rounded-lg flex-shrink-0 p-4 md:p-0 w-54 md:w-full">
                  <div className="w-full">
                    {element.image ? (
                      <img 
                        src={element.image} 
                        className="rounded-md" 
                      />
                    ) :  (
                      <img 
                        src="./images/blank.png" 
                        className="rounded-md" 
                      />
                    )}
                  </div>

                  <p className="mt-3 text-sm md:font-semibold">{element.title}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlaylistSection;