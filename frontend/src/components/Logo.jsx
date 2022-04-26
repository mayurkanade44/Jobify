import logo from "../assets/images/log.png";

const Logo = () => {
  return (
    <>
      <img src={logo} alt="jobster logo" className="logo" />
      <span
        style={{
          fontSize: 39,
          paddingLeft: 8,
          fontWeight: 700,
          letterSpacing: 2,
        }}
      >
        Trekathon
      </span>
    </>
  );
};
export default Logo;
