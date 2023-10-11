function Navbar2() {
  const navItemStyle = {
    padding: "5px 10px",
    textDecoration: "none",
    color: "#000",
    fontSize: "18px",
  };

  return (
    <nav
      style={{
        padding: "15px 30px",
        width: "100%",
        display: "flex",
        direction: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h3>Hamza Afrouss</h3>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin : "0"
        }}
      >
        <li class="nav-item">
          <a style={navItemStyle} aria-current="page" href="#about">
            About
          </a>
        </li>
        <li class="nav-item">
          <a style={navItemStyle} href="#expertise">
            Expertise
          </a>
        </li>
        <li class="nav-item">
          <a style={navItemStyle} href="#work">
            Work
          </a>
        </li>
        <li class="nav-item">
          <a style={navItemStyle} href="#experience">
            Experience
          </a>
        </li>
        <li class="nav-item">
          <a style={navItemStyle} href = "contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar2;
