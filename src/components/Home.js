import Nav from "./Nav";
import "../styles/style.css";
import { Link } from "react-router-dom";


function Home() {
  return (
    <div className="container">
      <Nav />
      <main id="homeContainer">
        <div id="homeText">
          <h1>fresh fruit, right when you need it.</h1>
          <Link style={{textDecoration: "none"}} to="/shop">
            <h2>shop all fruit</h2>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Home;
