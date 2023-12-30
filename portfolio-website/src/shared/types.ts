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
