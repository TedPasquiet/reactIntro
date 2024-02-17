const CareScale = (props) => {
  const range = [1, 2, 3];
  // Exemple de destructuration
  const { scaleValue, careType } = props;
  const scaleType = careType === "light" ? "☀️" : "💧";

  // On évite de multiplier les déclarations qui sans cette syntaxe auraient été :
  // const scaleValue = props.scaleValue et
  // const careType = props.careType
  return (
    <div>
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <span key={rangeElem.toString()}>{scaleType}</span>
        ) : null
      )}
    </div>
  );
};

export default CareScale;
