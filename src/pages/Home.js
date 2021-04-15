import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div>
        <button> Autorize nosso acesso </button>
      </div>
      <div>
        <Link to="/privacy"> politicas de privacidade </Link>
      </div>
    </div>
  );
}

export default Home;
