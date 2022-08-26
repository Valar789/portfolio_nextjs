import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div className="container py-4">{children}</div>
    </div>
  );
};

export default Layout;
