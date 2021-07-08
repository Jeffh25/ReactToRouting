import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PeopleDetail = () => {
  const { peopleid } = useParams();
  const [person, setPerson] = useState(null);

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/people/${peopleid}`)
      .then((res) => res.json())
      .then((allPerson) => setPerson(allPerson));
  }, []);

  return (
    <>
      <div className={person?.name}>
        <main className="container mt-3 font-weight-bold">
          <h1 className="d-flex justify-content-start">
            {person?.name} - {person?.age}
          </h1>
        </main>
        <main className="container-fluid mt-4">
          <h4 className="d-flex justify-content-start font-weight-bold">
            {person?.gender}
          </h4>
          <h4 className="d-flex justify-content-start font-weight-bold">
            Hair color: {person?.hair_color}
          </h4>
          <h4 className="d-flex justify-content-start font-weight-bold">
            Eye color: {person?.eye_color}
          </h4>
        </main>
      </div>
    </>
  );
};

export default PeopleDetail;
