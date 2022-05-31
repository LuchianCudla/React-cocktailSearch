import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="section error-section">
      <h1>Oops Error!</h1>
      <Link to="/React-cocktailSearch" className="btn btn-primary">
        Back Home
      </Link>
    </section>
  );
};

export default Error;
