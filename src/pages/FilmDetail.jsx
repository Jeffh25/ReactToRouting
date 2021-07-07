import { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
// import '../styles/.css'

const FilmDetail = () => {
    const { filmid } = useParams();
    const [films, setFilms] = useState(null);

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/films/${filmid}`)
          .then((res) => res.json())
          .then((films) => setFilms(films));
      },[]);
    return(
        <div id={films?.original_title} className={films?.title}>
            <div>
            <main className="container mt-3 font-weight-bold">
                <h1 className="d-flex justify-content-end">
                    <u>{films?.original_title}</u>
                </h1>
                <h3 className="d-flex justify-content-end">
                    {films?.title} - {films?.release_date}
                </h3>
            </main>
            <main className="container-fluid mt-4">
                    <h4 className='d-flex justify-content-start font-weight-bold'>
                        Director: {films?.director}
                    </h4>
                    <h4 className='d-flex justify-content-start font-weight-bold'>
                        Producer: {films?.producer}
                    </h4>
                    <h4 className=''>
                        {films?.description} This Film Recieved A Rating of {films?.rt_score}.
                    </h4>
                
            </main>
            </div>
        </div>
    )
}

export default FilmDetail;