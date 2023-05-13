import "../index.css";
function Navbar() {
  return (
    <div className="Navbar">
      <section>
        <div className="left">
          <span className="one">Roadmap</span>
          <span>Team</span>
          <span>About</span>
          <span>Wallet</span>
        </div>

        <div className="center">
          <img src="./images/SUPERARE.png" alt="" />
        </div>

        <div className="right">
          <div>Buy</div>
        </div>
      </section>
    </div>
  );
}
export default Navbar;
