import { useContext } from "react";
import { HoroscopeContext } from "../context/HoroscopeContext";

const Detail = () => {
  const { sign } = useContext(HoroscopeContext);
  console.log("Detail rerenders!");

  return (
    <div className="details">
      <img alt="horoscope name" src={sign.backgroundImg} />
      <h2>{sign.name}</h2>
      <h4>Element: {sign.element}</h4>
      <h4>Traits: {sign.traits}</h4>
    </div>
  );
};

export default Detail;
