import { Link } from "react-router-dom";
import "../assets/estilos.css";

function Reservas() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li><Link to="/">INICIO</Link></li>
            <li><Link to="/#historia">HISTORIA</Link></li>
            <li><Link to="/reservas">RESERVAS</Link></li>
          </ul>
        </nav>
      </header>

      <main>

        {/* BANNER SUPERIOR */}
        <section className="banner-reserva">
          <h1>¿DESEA UNA RESERVACIÓN?</h1>
          <p>LLÁMENOS AL XXX XXX XXX</p>
        </section>

        {/* FORMULARIO */}
        <section className="seccion-formulario">
          <div className="contenedor-formulario">

            <h2>CONTACTO Y RESERVAS</h2>

            <p className="texto-formulario">
              Permítanos preparar una experiencia gastronómica inolvidable.
              Complete el formulario y nos comunicaremos con usted.
            </p>

            <form>

              <div className="fila-inputs">
                <input type="text" placeholder="Nombre completo" />
                <input type="email" placeholder="Correo electrónico" />
              </div>

              <div className="fila-inputs">
                <input type="tel" placeholder="Teléfono" />
                <input type="date" />
              </div>

              <div className="fila-inputs">
                <select defaultValue="">
                  <option value="" disabled>
                    Seleccione la región
                  </option>
                  <option value="costa">Costa</option>
                  <option value="sierra">Sierra</option>
                  <option value="selva">Selva</option>
                </select>

                <select defaultValue="">
                  <option value="" disabled>
                    Número de comensales
                  </option>
                  <option value="1">1 persona</option>
                  <option value="2">2 personas</option>
                  <option value="3">3 personas</option>
                  <option value="4">4 personas</option>
                  <option value="5+">5 o más</option>
                </select>
              </div>

              <textarea placeholder="Mensaje o solicitud especial (alergias, ocasiones especiales, preferencias...)" />

              <button type="submit">
                ENVIAR RESERVA
              </button>

            </form>

          </div>
        </section>

      </main>

      <footer>
        <p>
          © 2025 Restaurante Di Arlet | Sabor, historia y memoria | Puerto
          Maldonado, Perú 🇵🇪
        </p>
      </footer>
    </>
  );
}

export default Reservas;