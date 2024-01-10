export enum SelectedPage {
  About = "about",
  Experience = "experience",
  Projects = "projects",
  Contact = "contact",
}

export type ExperienceType = {
  icon: JSX.Element;
  title: string;
  level: string;
};

export type ProjectType = {
  image: JSX.Element;
  desc: string;
  title: string;
  github: string;
  demo: string;
};
