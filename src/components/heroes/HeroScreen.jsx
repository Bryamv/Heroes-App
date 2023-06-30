import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";
import { useMemo } from "react";
export const HeroScreen = () => {
  const navigate = useNavigate();

  const { heroId } = useParams();
  const hero = useMemo(() => getHeroById(heroId), [heroId]);
  if (!hero) {
    return <Navigate to="/" />;
  }

  const handleReturn = () => {
    navigate(-1);
  };
  const { publisher, superhero, alter_ego, first_appearance, characters } =
    hero;
  return (
    <div>
      <div className="row mt-5">
        <div className="col-4">
          <img
            src={`../assets/heroes/${heroId}.jpg`}
            className="img-thumbnail animate__animated animate__fadeInLeft"
            alt={superhero}
          />
        </div>
        <div className="col-8 animate__animated animate__fadeIn">
          <h1>{superhero}</h1>

          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <b>Alter ego: </b>
              {alter_ego}
            </li>
            <li className="list-group-item">
              <b>Publisher: </b>
              {publisher}
            </li>
            <li className="list-group-item">
              <b>First appearance: </b>
              {first_appearance}
            </li>
          </ul>
          <h5>Characters</h5>
          <p>{characters}</p>
          <button className="btn btn-outline-danger" onClick={handleReturn}>
            Return
          </button>
        </div>
      </div>
    </div>
  );
};
