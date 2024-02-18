const CareScale = (props) => {
  const range = [1, 2, 3];
  // const [useState, setState] = useState("");
  // Exemple de destructuration
  const { scaleValue, careType } = props;
  const quantityLabel = {
    1: "peu",
    2: "modérément",
    3: "beaucoup",
  };
  const scaleType = careType === "light" ? "☀️" : "💧";

  // On évite de multiplier les déclarations qui sans cette syntaxe auraient été :
  // const scaleValue = props.scaleValue et
  // const careType = props.careType
  return (
    <div
      onClick={() =>
        alert(
          `Cette plante requiert ${quantityLabel[scaleValue]} ${
            careType === "light" ? "de lumière" : "d'arrosage"
          }`
        )
      }
    >
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <span key={rangeElem.toString()}>{scaleType}</span>
        ) : null
      )}
    </div>
  );
};

export default CareScale;
