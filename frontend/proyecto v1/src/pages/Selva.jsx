import "../assets/estilos.css";

function Selva() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li><a href="/">INICIO</a></li>
            <li><a href="/#historia">HISTORIA</a></li>
            <li><a href="#">RESERVAS</a></li>
          </ul>
        </nav>
      </header>

      <main>

        {/* EXPERIENCIA 1 */}
        <section className="pantalla-dividida">
          <div className="lado-imagen">
            <video autoPlay muted loop playsInline>
              <source src="/videos/selva1.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="lado-texto">
            <div className="contenedor-info">
              <span className="categoria">EXPERIENCIA DE RÍO AMAZÓNICO</span>
              <h2>ESENCIA DEL PAICHE DORADO</h2>
              <p>Una degustación de 5 momentos inspirada en los grandes ríos amazónicos...</p>
              <p className="precio">S/ 185.00</p>
              <a href="/reservas" className="boton-reserva">RESERVAR AHORA</a>
            </div>
          </div>
        </section>

        {/* EXPERIENCIA 2 */}
        <section className="pantalla-dividida invertida">
          <div className="lado-imagen">
            <video autoPlay muted loop playsInline>
              <source src="/videos/selva2.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="lado-texto">
            <div className="contenedor-info">
              <span className="categoria">EXPERIENCIA DE FRUTOS AMAZÓNICOS</span>
              <h2>JARDÍN DE CAMU Y COCONA</h2>
              <p>Sabores cítricos y tropicales de la Amazonía...</p>
              <p className="precio">S/ 145.00</p>
              <a href="/reservas" className="boton-reserva">RESERVAR AHORA</a>
            </div>
          </div>
        </section>

        {/* EXPERIENCIA 3 */}
        <section className="pantalla-dividida">
          <div className="lado-imagen">
            <video autoPlay muted loop playsInline>
              <source src="/videos/selva3.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="lado-texto">
            <div className="contenedor-info">
              <span className="categoria">EXPERIENCIA DE FUEGO Y HOJAS</span>
              <h2>MEMORIA DEL BIJAO ANCESTRAL</h2>
              <p>Cocción en hojas de bijao y técnicas ancestrales...</p>
              <p className="precio">S/ 125.00</p>
              <a href="/reservas" className="boton-reserva">RESERVAR AHORA</a>
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

export default Selva;