import "../index.css";
function HeroSection() {
  return (
    <div className="heroSection">
      <h1>Discover and collect super rare NFTs</h1>
      <div className="heroRow">
        <p>
          Digital marketplace for crypto collectibles and NFTs. Buy, sell, and
          discover exclusive digital assets today.
        </p>
        <div className="heroCenter">
          <section>
            <div className="buy">Buy</div>
            <div className="cn">Collect Now</div>
          </section>
        </div>
        <img src="./images/real.svg" alt="" />
      </div>
      <img src="./images/partners.svg" alt="" className="partners" />
    </div>
  );
}
export default HeroSection;
