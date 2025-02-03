import { useNavigate } from "react-router-dom";

const page404 = () => {

  const navigate = useNavigate();

  const goBack = (event) => {
    event.preventDefault();
    navigate(-1);
  };

  return (
    <div className="grid grid-flow-row">
      <span>Page not Found</span>
      <a rel="stylesheet" onClick={goBack}> Go Back </a>
    </div>
  );
};

export default page404;