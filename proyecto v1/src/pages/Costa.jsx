import { Link } from "react-router-dom";

export default function Costa() {
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
              <source src="/videos/costa1.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="lado-texto">
            <div className="contenedor-info">
              <span className="categoria">EXPERIENCIA MARINA</span>
              <h2>BRISA DEL PACÍFICO</h2>
              <p>Una degustación de 5 momentos inspirada en la riqueza del océano peruano...</p>
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
              <source src="/videos/costa2.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="lado-texto">
            <div className="contenedor-info">
              <span className="categoria">EXPERIENCIA CRIOLLA</span>
              <h2>SABOR DE BARRIO Y FUEGO</h2>
              <p>Una celebración de la cocina criolla limeña...</p>
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
              <source src="/videos/costa3.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="lado-texto">
            <div className="contenedor-info">
              <span className="categoria">EXPERIENCIA DULCE COSTERA</span>
              <h2>SUSPIRO DE LIMA NOCTURNA</h2>
              <p>Una experiencia de postres inspirada en la elegancia limeña...</p>
              <p className="precio">S/ 125.00</p>

              <Link to="/reservas" className="boton-reserva">
                RESERVAR AHORA
              </Link>

            </div>
          </div>
        </section>

      </main>

      <footer>
        <p>© 2025 Restaurante D'Arlet | Puerto Maldonado, Perú 🇵🇪</p>
      </footer>
    </>
  );
}