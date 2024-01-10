import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../../../shared/types";
import "./Link.css";

type Props = {
  icon: JSX.Element;
  page: string;
  selectedPage: SelectedPage;
  setIsMenuToggled: (isMenuToggled: boolean) => void;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({
  icon,
  page,
  selectedPage,
  setIsMenuToggled,
  setSelectedPage,
}: Props) => {
  const lowerCasePage = page
    .toLocaleLowerCase()
    .replace(/ /g, "") as SelectedPage;

  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "selected-page" : "list-element"
      }`}
      href={`#${lowerCasePage}`}
      offset="-1px"
      onClick={() => {
        setSelectedPage(lowerCasePage);
        setIsMenuToggled(true);
      }}
    >
      <div>{icon}</div>
      <div className="text">{page}</div>
    </AnchorLink>
  );
};

export default Link;
