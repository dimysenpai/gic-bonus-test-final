import illust from "../assets/imgs/avataaars.png";

function HeroTop() {
  return (
    <div className="herotop">
      <div className="right">
        <img src={illust} alt="illust" />
      </div>
      <div className="left">
        <h1>GIC BONUS</h1>
        <p>
          Pour l'imposible nous réfléchissons pour le plus difficile nous le
          réalisons.
        </p>
      </div>
    </div>
  );
}

export default HeroTop;
