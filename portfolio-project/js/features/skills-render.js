const skills = [

    {
        name: "HTML",
        category: "frontend",
        image:
        "https://cdn-icons-png.flaticon.com/512/732/732212.png"
    },

    {
        name: "CSS",
        category: "frontend",
        image:
        "https://cdn-icons-png.flaticon.com/512/732/732190.png"
    },

    {
        name: "JavaScript",
        category: "frontend",
        image:
        "https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
    },

    {
        name: "React",
        category: "frontend",
        image:
        "https://cdn-icons-png.flaticon.com/512/1126/1126012.png"
    },

    {
        name: "NodeJS",
        category: "backend",
        image:
        "https://cdn-icons-png.flaticon.com/512/919/919825.png"
    },

    {
        name: "ExpressJS",
        category: "backend",
        image:
        "https://cdn-icons-png.flaticon.com/512/5968/5968322.png"
    },

    {
        name: "MongoDB",
        category: "backend",
        image:
        "https://cdn-icons-png.flaticon.com/512/919/919836.png"
    },

    {
        name: "Git & GitHub",
        category: "tools",
        image:
        "https://cdn-icons-png.flaticon.com/512/733/733553.png"
    },

    {
        name: "VS Code",
        category: "tools",
        image:
        "https://cdn-icons-png.flaticon.com/512/5968/5968389.png"
    },

    {
        name: "Postman",
        category: "tools",
        image:
        "https://cdn-icons-png.flaticon.com/512/2111/2111646.png"
    }

];

const skillsContainer =
document.getElementById("skills-container");

const skillButtons =
document.querySelectorAll(".skill-filter");

function renderSkills(skillsData){

    if(!skillsContainer) return;

    skillsContainer.innerHTML = "";

    skillsData.forEach((skill)=>{

        const card =
        document.createElement("div");

        card.classList.add("skill-card");

        card.innerHTML = `

        <div class="skill-image-container">

            <img
                src="${skill.image}"
                alt="${skill.name}"
                class="skill-image"
            />

        </div>

        <h3 class="skill-title">
            ${skill.name}
        </h3>

        <p class="skill-category">
            ${skill.category}
        </p>

        `;

        skillsContainer.appendChild(card);

    });

}

renderSkills(skills);

skillButtons.forEach((button)=>{

    button.addEventListener("click",()=>{

        skillButtons.forEach((btn)=>
            btn.classList.remove("active-skill")
        );

        button.classList.add("active-skill");

        const category =
        button.dataset.category;

        if(category === "all"){

            renderSkills(skills);

            return;
        }

        const filteredSkills =
        skills.filter((skill)=>
            skill.category === category
        );

        renderSkills(filteredSkills);

    });

});