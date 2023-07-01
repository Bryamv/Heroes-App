import { heroes } from "../data/heroes";
export const getHeroesByName = (name = "") => {
  return name === ""
    ? []
    : heroes.filter((hero) =>
        hero.superhero.toLowerCase().includes(name.toLowerCase())
      );
};
