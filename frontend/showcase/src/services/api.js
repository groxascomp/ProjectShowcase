const API_URL = "/api";

export async function getProjects() {
  const response = await fetch(`${API_URL}/projects`);

  if (!response.ok) {
    throw new Error("Failed to load projects");
  }

  const projects = await response.json();

  return projects.map((project) => ({
    id_project: project.idProjects,
    tech_project: project.techProjects,
    name_projects: project.nameProjects,
    description_projects: project.descriptionProjects,
    stack_projects: project.stackProjects,
    year_project: project.yearProjects,
    github_projects: project.githubProject,
  }));
}

export async function getExperience() {
  const response = await fetch(`${API_URL}/experiences`);

  if (!response.ok) {
    throw new Error("Failed to load Experience");
  }
  const experiences = await response.json();

  return experiences.map((experience) => ({
    id_exp: experience.idExp,
    role_exp: experience.roleExp,
    company_exp: experience.companyExp,
    responsibility_exp: experience.responsibilityExp,
    stack_exp: experience.stackExp,
    start_exp: experience.startExp,
    end_exp: experience.endExp,
    type_exp: experience.typeExp,
  }));
}

export async function getEducations() {
  const response = await fetch(`${API_URL}/educations`);

  if (!response.ok) {
    throw new Error("Failed to load Educations");
  }

  const educations = await response.json();

  return educations.map((education) => ({
    id_edu: education.idEdu,
    course_edu: education.courseEdu,
    school_edu: education.schoolEdu,
    proudof_edu: education.proudofEdu,
    start_edu: education.startEdu,
    end_edu: education.endEdu,
  }));
}

export async function getAbouts() {
  const response = await fetch(`${API_URL}/abouts`);

  if (!response.ok) {
    throw new Error("Failed to load About information");
  }

  const abouts = await response.json();

  return abouts.map((about) => ({
    id_about: about.idAbout,
    email_about: about.emailAbouts,
    location_about: about.locationAbouts,
    firstname_about: about.firstNameAbouts,
    lastname_about: about.lastNameAbouts,
    age_about: about.ageAbouts,
    currentrole_about: about.currentRoleAbouts,
    currentcompany_about: about.currentCompanyAbouts,
    availability_about: about.availabilityAbouts,
    line1_about: about.line1Abouts,
    line2_about: about.line2Abouts,
    line3_about: about.line3Abouts,
  }));
}

export async function getLinks() {
  const response = await fetch(`${API_URL}/links`);

  if (!response.ok) {
    throw new Error("Failed to load Links");
  }

  const links = await response.json();

  return links.map((link) => ({
    id_links: link.idLinks,
    github_links: link.githubLinks,
    linkedin_links: link.linkedinLinks,
    facebook_links: link.facebookLinks,
    instagram_links: link.instagramLinks,
    cv_links: link.cvLinks,
  }));
}


export async function getSkills() {
    const response = await fetch (`${API_URL}/skills`);

    if (!response.ok){
        throw new Error("Failed to load Skills");
    }
    
    const skills = await response.json();

    return skills.map((skill) => ({
        id_skills: skill.idSkills,
        backend_skills: skill.backendSkills,
        frontend_skills: skill.frontendSkills,
        language_skills: skill.languagesSkills,
        tools_skills: skill.toolsSkills,
    }))
}


export async function getCert(){
    const response = await fetch (`${API_URL}/certbads`);

    if (!response.ok){
        throw new Error("Failed to load Cert");
    }

    const certs = await response.json();

    return certs.map((cert) => ({
        id_cb: cert.idCb,
        company_cb: cert.companyCb,
        icon_cb: cert.iconCb,
        name_cb: cert.nameCb,
        year_cb: cert.yearCb,
    }))


}