const NomProfessio = (props) => {
  return (
    <div className="quadreExterior">
      <div class="image-container">
        <img
          className="imagen"
          src="Images/Spaghetti_dish.jpg"
          alt="Espaguetis fets per en Roger Sobrino"
          width="300"
          height="200"
        ></img>
      </div>
      <div className="profesor">
        <h2>
          {props.nom},<br></br>
        </h2>
        <h3>
          {props.professio}
        </h3>
        <p>{props.lorem}</p>
      </div>
    </div>
  );
 };
 export default NomProfessio;