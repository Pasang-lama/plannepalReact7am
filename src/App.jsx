import BannerData from "./component/BannerItems";
import Featurepackage from "./component/Featurepackage";
import Footer from "./component/Footer";
import Header from "./component/Header";

function App() {
  return (
    <>
      <Header />
      <BannerData />

      <section className="container mt-5">
        <div className="row gy-4">
          <div className="col-lg-8">
            <h2 className="text-light bg-success p-3 fs-5 section-heading mb-4">DEAR TRAVELLERS, NAMASTE AND WELCOME</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perferendis quo corrupti in assumenda non, fuga exercitationem
              tenetur consequuntur repellat. Corrupti, praesentium porro! Beatae
              est magnam debitis a, maiores facere corrupti. Blanditiis odio
              voluptatibus aspernatur odit voluptas harum ab, expedita cumque
              modi corporis inventcum itaque cumque hic quod dicta
              fugit culpa libero dolorum vel, porro unde repellat, recusandae
              quia eum nihil facilis rem perspiciatis ipsam assumenda ut. Sit
              necessitatibus omnis perspiciatis! Ipsum eius incidunt consequatur
              maxime quisquam, aliquam ddiandae et, inventore eveniet est
              incidunt. Quod ut deleniti, commodi labore minus dolore eveniet
              porro voluptas. Adipisci, consequatur reprehenderit voluptatem
              repudiandae qui minus consequuntur sapiente recusandae corrupti a.
              Asperiores, reprehenderit minima distinctio omnis numquam
              dignissimos sunt facilis iure.
            </p>
          </div>
          <div className="col-lg-4">
            <h2 className="text-light bg-success p-3 fs-5 section-heading mb-4">FEATURED PACKAGES</h2>
            <Featurepackage />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;
