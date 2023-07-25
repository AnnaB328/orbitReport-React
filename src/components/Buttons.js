import satData from "./satData";

const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    <div>
      {displaySats.map((sat, id) => {
        return (
          <button onClick={() => filterByType(sat)} key={id}>
            {sat} Orbit
          </button>
        );
      })}

      <button onClick={() => setSat(satData)}>All Satellites</button>

      <button>Button 3</button>
      <button>Button 4</button>
    </div>
  );
};

export default Buttons;