import { Link } from "react-router-dom";
import "../assets/estilos.css";

function Home() {
  return (
    <>
      {/* ENCABEZADO */}
      <header>
        <nav>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#regiones">Nuestra Carta</a></li>
            <li><a href="#historia">Historia</a></li>
            <li><a href="#">RESERVAS</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <h1>Restaurante D'Arlet</h1>

        <p id="subtitulo">
          Una experiencia gastronómica única que une las tres regiones del Perú
          en un solo lugar: Costa, Sierra y Selva.
        </p>

        {/* REGIONES */}
        <h2 id="regiones">Explora los Menús de Degustación</h2>

        <section className="regiones">

          {/* COSTA */}
          <article className="region-card">
            <Link to="/costa">
              <video autoPlay muted loop playsInline>
                <source src="/videos/costa-drone.mp4" type="video/mp4" />
              </video>

              <div className="region-info">
                <h3>COSTA</h3>
                <p>Sabores frescos del mar...</p>
              </div>
            </Link>
          </article>

          {/* SIERRA */}
          <article className="region-card">
            <Link to="/sierra">
              <video autoPlay muted loop playsInline>
                <source src="/videos/sierra-drone.mp4" type="video/mp4" />
              </video>

              <div className="region-info">
                <h3>SIERRA</h3>
                <p>El alma de los Andes...</p>
              </div>
            </Link>
          </article>

          {/* SELVA */}
          <article className="region-card">
            <Link to="/selva">
              <video autoPlay muted loop playsInline>
                <source src="/videos/selva-drone.mp4" type="video/mp4" />
              </video>

              <div className="region-info">
                <h3>SELVA</h3>
                <p>La magia amazónica...</p>
              </div>
            </Link>
          </article>

        </section>

        {/* HISTORIA */}
        <h2 id="historia">Nuestra Historia</h2>

        <section className="contenedor-historia">

          <article className="fila-historia">
            <video autoPlay muted loop playsInline className="multimedia-historia">
              <source src="/videos/historia.mp4" type="video/mp4" />
            </video>

            <div className="texto-historia">
              <h3>El Origen</h3>
              <p>D'Arlet nació en 2006...</p>
            </div>
          </article>

          <article className="fila-historia invertida">
            <video autoPlay muted loop playsInline className="multimedia-historia">
              <source src="/videos/reconocimientos.mp4" type="video/mp4" />
            </video>

            <div className="texto-historia">
              <h3>Reconocimientos</h3>
              <p>Premios y logros...</p>
            </div>
          </article>

          <article className="fila-historia">
            <video autoPlay muted loop playsInline className="multimedia-historia">
              <source src="/videos/visitas.mp4" type="video/mp4" />
            </video>

            <div className="texto-historia">
              <h3>Visítanos</h3>
              <p>Ubicación y horarios...</p>
            </div>
          </article>

        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <p>
          © 2025 Restaurante Di Arlet | Sabor, historia y memoria | Perú 🇵🇪
        </p>
      </footer>
    </>
  );
}

export default Home;