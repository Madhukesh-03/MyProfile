import { projects } from "../data/projects.js";

const projectsContainer =
document.getElementById("projects-container");

const projectCount =
document.getElementById("project-count");

function renderProjects(projectsData){

    if(!projectsContainer) return;

    projectsContainer.innerHTML = "";

    if(projectCount){

        projectCount.textContent =
        `${projectsData.length} Projects Found`;
    }

    projectsData.forEach((project,index)=>{

        const card =
        document.createElement("div");

        card.classList.add("project-card");

        card.innerHTML = `

        <p class="project-number">
            // 00${index + 1}
        </p>

        <h3 class="project-title">
            ${project.title}
        </h3>

        <p class="project-description">
            ${project.description}
        </p>

        <div class="project-tech-stack">

            ${project.technologies.map(tech =>

                `
                <span class="tech-badge">
                    ${tech}
                </span>
                `

            ).join("")}

        </div>

        <div class="project-links">

            <a href="${project.live}" target="_blank">
                ↗ LIVE
            </a>

            <a href="${project.github}" target="_blank">
                ⌥ GITHUB
            </a>

        </div>

        `;

        projectsContainer.appendChild(card);

    });

}

renderProjects(projects);

window.renderProjects = renderProjects;

window.allProjects = projects;