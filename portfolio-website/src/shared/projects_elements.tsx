import { ProjectType } from "./types";
import vetlab_img from "../assets/vetlab-project-img.jpg";
import gymbros_img from "../assets/gymbros-project-img.jpg";
import spotifytoyoutube_img from "../assets/spotifytoyoutube-project-img.jpg";

export const projects_elements: Array<ProjectType> = [
  {
    image: <img src={vetlab_img} alt="vetlab website image"></img>,
    desc: "Website for veterinary clinic.",
    title: "Vetlab",
    github: "https://github.com/jankier/vet-app/tree/main/vet-web-app",
    demo: "https://vet-app.pages.dev/",
  },
  {
    image: <img src={gymbros_img} alt="gymbros website image"></img>,
    desc: "Gym bussiness website.",
    title: "GYMBROS",
    github: "https://github.com/jankier/gym-app/tree/main/gym-web-app",
    demo: "https://gym-app-chd.pages.dev/",
  },
  {
    image: (
      <img
        src={spotifytoyoutube_img}
        alt="spotifytoyoutube website image"
      ></img>
    ),
    desc: "Music playlist converter.",
    title: "SpotifyToYoutube",
    github: "https://github.com/jankier/spotify-to-youtube-app",
    demo: "Demo",
  },
];
