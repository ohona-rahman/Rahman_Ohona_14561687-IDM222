// Project Data for Modal Pop-up
const projectData = {
    'safeplate': {
        title: 'SafePlate',
        desc: 'Designed and prototyped Safe Plate, an allergen-friendly restaurant finder app, during the Tech & Innovation Internship at Coded by Kids. Conducted user research and usability testing to identify pain points and refine the app’s navigation and accessibility. Built responsive prototypes in Figma, emphasizing WCAG accessibility, clear visual hierarchy, and consistent design systems.'
    },
    'concert': {
        title: 'Concert Discovery App',
        desc: 'Designed a concert discovery app in Figma featuring live event information based on user location and preferences. Conducted user surveys and usability testing to refine interface flow, accessibility, and real-time update features. Applied SWOT and PESTLE analyses to inform design strategy.'
    },
    'hack4impact': {
        title: 'Hack4Impact Web Project',
        desc: 'Contributed to a nonprofit web project through Hack4Impact, supporting the design team with interface feedback and implementation. Collaborated with fellow designers to refine layouts, improve usability, and ensure visual consistency. Assisted in Figma prototyping and design system updates.'
    }
};

function openModal(projectId) {
    const modal = document.getElementById('project-modal');
    const data = projectData[projectId];

    document.getElementById('modal-title').innerText = data.title;
    document.getElementById('modal-desc').innerText = data.desc;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; 
}

function closeModal() {
    document.getElementById('project-modal').style.display = 'none';
    document.body.style.overflow = 'auto'; 
}

window.onclick = function(event) {
    const modal = document.getElementById('project-modal');
    if (event.target === modal) {
        closeModal();
    }
}