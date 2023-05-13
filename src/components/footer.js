import "../index.css";
function Footer() {
  return (
    <div className="footer">
      <section>
        <img src="./images/SUPERARE2.PNG" alt="" />
        <div className="footbar">
          <span>Roadmap</span>
          <span>Team</span>
          <span>About</span>
          <span>Wallet</span>
        </div>
        <div className="reservations">
          <section>
            <div className="left">
              <span>2022 Superare. All right reserved.</span>
            </div>
            <div className="right">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Cookies</span>
              <span>Settings</span>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
export default Footer;
