export default function Home() {
  return (
    <div className="home--grid">
      <div className="top--block">
          <img
            src={require("../../assets/images/proj-icon.png")}
            className="proj--icon" />
        <img
          src={require("../../assets/images/github.png")}
          className="git--icon"
        />
      </div>
      <div>
        <h1 className='my--title'>JAMIE LUJAN - WEB DEVELOPER</h1>
      </div>
      <div className="bottom--block">
        <div className='contact--card'>
          <h2>ABOUT</h2>
          <h2>CONTACT</h2>
          <h2>RESUME</h2>
        </div>
        <img
          src={require("../../assets/images/linkedin.png")}
          className="link--icon"
        />
      </div>
    </div>
  );
}