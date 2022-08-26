import Link from "next/link";
import Layout from "../components/Layout";
import { skills, experience, projects } from "../profile";

function index() {
  return (
    <Layout>
      <header className="row">
        <div className="col-md-12">
          <div className="card card-body bg-secondary text-light">
            <div className="row">
              <div className="col-md-4">
                <img src="photoEje.jpg" alt="" className="img-fluid" />
              </div>
              <div className="col-md-8">
                <h1>Luis Miguel</h1>
                <h3>Full Stack developer</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Natus quisquam dolorum consequatur nihil a eos suscipit
                  molestias vero facere vitae. Molestias rem eveniet sunt,
                  minima eaque molestiae in ut omnis. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Recusandae culpa reprehenderit
                  dolorem distinctio sed deleniti expedita eaque nemo iste dicta
                  aspernatur debitis, vitae blanditiis adipisci, quas sit, ex
                  tenetur veniam?
                </p>
                <a href="/hireme">Hire Me</a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* segunda seccion */}

      <div className="row py-2">
        <div className="col-md-4">
          <div className="card bg-light">
            <div className="card-body">
              <h1>Skills</h1>
              {skills.map(({ skill, porcentage }, i) => (
                <div className="py-3" key={i}>
                  <h5>{skill}</h5>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${porcentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-md-8">
          <div className="card bg-light">
            <div className="card-body">
              <h1>Experience</h1>

              <ul>
                {experience.map(({ title, descripcion, from, to }, i) => (
                  <li key={i}>
                    <h3>{title}</h3>
                    <h5>
                      {from}-{to}
                    </h5>
                    <p>{descripcion}</p>
                  </li>
                ))}
              </ul>
              <Link href="/experiences">
                <a className="btn btn-light">Know more</a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio */}

      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-dark">
            <div className="row">
              <div className="col-md-12">
                <h1 className="text-center text-light">
                  Portfolio
                </h1>
              </div>

              {
                projects.map(({title, description, image}, i)=>(
                  <div className="col-md-4 p-2" key={i}>
                  <div className="card h-100">
                    <div className="overflow">
                      <img src={`/${image}`} alt="" className="card-img-top"/>
                    </div>
                    <div className="card-body">
                      <h1>{title}</h1>
                      <h3>{description}</h3>
                      <a href="#!">Know more</a>
                    </div>
                  </div>
                </div>
                ))
              }
             
            
            </div>
            <div className="text-center mt-4">
              <Link href="/portfolio">
              <a className="btn btn-outline-light">More porjects</a>
              </Link>
            </div>
          </div>

        </div>
      </div>

    </Layout>
  );
}

export default index;
