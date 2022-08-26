import NavBar from "./NavBar";
import { useEffect } from "react";
import { useRouter } from "next/router";
import NProgres from "nprogress";

const Layout = ({ children, footer = true }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChanged = (url) => {
      console.log(url);
      NProgres.start();
    };

    router.events.on("routeChangeStart", handleRouteChanged);
    router.events.on("routeChangeComplete", () => NProgres.done());
    return () => {
      router.events.off("routeChangeStart", handleRouteChanged);
    };
  }, []);

  return (
    <>
      <NavBar />
      <div className="container py-4">{children}</div>
      {footer && (
        <footer className="bg-dark text-light text-center">
          <div className="container p-4">
            <h1>&copy; Luis Miguel Portfolio</h1>
            <p>2000 - {new Date().getFullYear()}</p>
            <p>All right reserved</p>
          </div>
        </footer>
      )}
    </>
  );
};

export default Layout;
