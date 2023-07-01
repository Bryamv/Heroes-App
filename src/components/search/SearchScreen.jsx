import { useSearchParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../heroes/HeroCard";
import { getHeroesByName } from "../../selectors/getHeroesByName";
import { useMemo } from "react";

export const SearchScreen = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const q = searchParams.get("q") ?? "";

  const [{ searchText }, handleInputChange] = useForm({
    searchText: q,
  });

  const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchText.trim().length >= 1) {
      setSearchParams({ q: searchText });
    }
  };

  return (
    <>
      <h1>Search Screen</h1>
      <hr />
      <div className="row">
        <div className="col-4 ">
          <h4>Search Form</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              name="searchText"
              value={searchText}
              placeholder="Find Your Hero"
              className="form-control"
              onChange={handleInputChange}
              autoComplete="off"
            />
            <div className="d-grid gap-2 ">
              <button
                className="btn btn-block btn-outline-info m-1 "
                type="submit"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="col-8 row row-cols-1 row-cols-md-3 g-4">
          <h4>Results</h4>
          <hr />
          {q === "" && <div className="alert alert-info">Search a hero</div>}
          {q !== "" && heroesFiltered.length === 0 && (
            <div className="alert alert-danger">{`There is no a hero with ${q} `}</div>
          )}
          {heroesFiltered.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
