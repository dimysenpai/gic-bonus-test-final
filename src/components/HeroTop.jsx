import heroImg from "../assets/imgs/hero-img.png";

function HeroTop() {
  return (
    <div className="herotop">
      <div className="right">
        <h1>GIC BONUS</h1>
        <p>
          Pour l'imposible nous réfléchissons, pour le plus difficile nous le
          réalisons.
        </p>
      </div>
      <div className="left">
        <img src={heroImg} alt="hero img" />
      </div>
    </div>
  );
}

export default HeroTop;
