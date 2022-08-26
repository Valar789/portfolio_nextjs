import Link from "next/link";
import Layout from "../components/Layout";

const custom404 = () => {
  return (
    <Layout>
      <div className="text-center">
        <h1>404</h1>
        <p>This page does not exist. Please return to:</p>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
    </Layout>
  );
};

export default custom404;
