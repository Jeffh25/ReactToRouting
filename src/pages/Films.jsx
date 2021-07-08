import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar'

const Films = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((films) => setFilms(films));
  }, []);
  return (
    <div id="Films">

      <main className="container-fluid" >
        <section className="row justify-content-center">
          <div className="">
            <ul id='ul'className="list-group justify-content-around flex-row flex-wrap">
              {films.map((films) => (
                <li
                id='li'
                  key={`user-item-${films.id}`}
                  className="list-group-item d-flex justify-content-between text-white border rounded"
                >
                  {films.title}
                  <Link
                    to={`films/${films.id}`}
                    className="btn btn-transparent text-white border rounded"
                  >
                    Click For More Info
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Films;
