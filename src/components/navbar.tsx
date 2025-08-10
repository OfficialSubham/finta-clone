const Navbar = () => {
  const links = [
    {
      title: "Founders",
      url: "#",
    },
    {
      title: "Guide",
      url: "#",
    },
    {
      title: "Pricing",
      url: "#",
    },
    {
      title: "Login",
      url: "#",
    },
  ];
  return (
    <div className="navbar-root">
      <div className="logo">Finta</div>
      <div className="links">
        {links.map((link, id) => {
          return (
            <a href={link.url} className="link-items" key={id}>
              {link.title}
            </a>
          );
        })}
        <button className="btn">Start free trial</button>
      </div>
    </div>
  );
};

export default Navbar;
