import { Link } from "react-router-dom";

const CustomLink = ({ children, to }) => {
  return (
    <Link className="text-dark-subtle hover:text-white transition" to={to}>
      {children}
    </Link>
  );
};

export default CustomLink;
