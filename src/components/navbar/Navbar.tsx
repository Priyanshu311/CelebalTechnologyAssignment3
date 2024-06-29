import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>PRIYANSHU ADMIN</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon"/>
        <img src="/app.svg" alt="" className="icon"/>
        <img src="/expand.svg" alt="" className="icon"/>
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img
             src="https://i.pinimg.com/474x/0f/e9/bb/0fe9bba766201d818d6c5dea51a28957.jpg"
            alt=""
          />
          <span>PRIYANSHU ADMIN</span>
        </div>
        <img src="/settings.svg" alt="" className="icon" />
      </div>
    </div>
  );
};

export default Navbar;