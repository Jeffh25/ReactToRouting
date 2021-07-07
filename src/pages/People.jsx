import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'
const People = () => {
const [people, setPeople] = useState([])

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/people')
        .then(res => res.json())
        .then(people => setPeople(people))
    }, [])
    return(
        <div id='people'>
            <Navbar />
         <main className="container" >
        <section className="row justify-content-center">
          <div className="">
            <ul className="list-group justify-content-around flex-row flex-wrap">
              {people.map(people => (
                <li
                id='li'
                  key={`user-item-${people.id}`}
                  className="list-group-item d-flex align-content-center justify-content-between"
                >
                  {people.name}
                  <Link to={`people/${people.id}`} className="btn text-white">
                    Click For More Info
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
    )
}

export default People;