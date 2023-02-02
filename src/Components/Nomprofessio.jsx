const NomProfessio = (props) => {
  return (
    <div className="Profesor">
      <div className="quadreExterior">
        <div className="quadreInterior">
            <img  className='imagen' src="Images/Spaghetti_dish.jpg" alt="Espaguetis fets per en Roger Sobrino" width="205" height="155" ></img>
        </div>
      </div>
      <h2>
        {props.nom}
      </h2>
      <h2>{props.professio}</h2>
      <p>{props.lorem}</p>
    </div>
  );
};
export default NomProfessio;