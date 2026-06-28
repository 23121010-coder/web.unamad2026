import { Link } from "react-router-dom";
import "../assets/estilos.css";

function Sierra() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li><Link to="/">INICIO</Link></li>
            <li><a href="/#historia">HISTORIA</a></li>
            <li><Link to="/reservas">RESERVAS</Link></li>
          </ul>
        </nav>
      </header>

      <main>

        {/* EXPERIENCIA 1 */}
        <section className="pantalla-dividida">
          <div className="lado-imagen">
            <video autoPlay muted loop playsInline>
              <source src="/videos/1experiencia.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="lado-texto">
            <div className="contenedor-info">
              <span className="categoria">EXPERIENCIA DE SOPAS</span>
              <h2>SINFONÍA DE ALTURA LÍQUIDA</h2>
              <p>Caldo de cocción lenta de 12 horas con papas nativas...</p>
              <p className="precio">S/ 185.00</p>

              <Link to="/reservas" className="boton-reserva">
                RESERVAR AHORA
              </Link>

            </div>
          </div>
        </section>

        {/* EXPERIENCIA 2 */}
        <section className="pantalla-dividida invertida">
          <div className="lado-imagen">
            <video autoPlay muted loop playsInline>
              <source src="/videos/2experiencia.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="lado-texto">
            <div className="contenedor-info">
              <span className="categoria">EXPERIENCIA DE GRANOS</span>
              <h2>TRILOGÍA DE MAÍZ Y CRUJIENTES</h2>
              <p>Quinua, humita y chicha de jora...</p>
              <p className="precio">S/ 145.00</p>

              <Link to="/reservas" className="boton-reserva">
                RESERVAR AHORA
              </Link>

            </div>
          </div>
        </section>

        {/* EXPERIENCIA 3 */}
        <section className="pantalla-dividida">
          <div className="lado-imagen">
            <video autoPlay muted loop playsInline>
              <source src="/videos/3experiencia.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="lado-texto">
            <div className="contenedor-info">
              <span className="categoria">EXPERIENCIA DE ESENCIAS</span>
              <h2>LEGADO DE LA TIERRA Y FUEGO</h2>
              <p>Guisos andinos y carnes maceradas...</p>
              <p className="precio">S/ 125.00</p>

              <Link to="/reservas" className="boton-reserva">
                RESERVAR AHORA
              </Link>

            </div>
          </div>
        </section>

      </main>

      <footer>
        <p>© 2025 Restaurante Di Arlet | Puerto Maldonado 🇵🇪</p>
      </footer>
    </>
  );
}

export default Sierra;