import "./App.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const images = [
    "public/slider/img1.jpg",
    "public/slider/img2.jpg",
    "public/slider/img3.jpg",
    "public/slider/img4.jpg",
    "public/slider/img5.jpg",
    "public/slider/img6.jpg",
    "public/slider/img7.jpeg",
    "public/slider/img8.jpg",
    "public/slider/img9.jpg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    pauseOnHover: false,
    appendDots: (dots) => (
      <div>
        <ul className="dots"> {dots} </ul>
      </div>
    ),
  };

  return (
    <>
      <div className="container-general">
        <header>
          <div className="container-logo">
            <img src="public/logo/logo.png" alt="Logo" className="logo" />
          </div>
          <div className="container-links">
            <a href="" className="links-header">
              <i className="fa-solid fa-calendar-days icon"></i>
              Reservar turno
            </a>
            <a href="" className="links-header">
              <i className="fa-solid fa-location-dot icon"></i>
              Ubicación
            </a>
            <a href="" className="links-header">
              <i className="fa-solid fa-scissors icon"></i>
              Cortes
            </a>
          </div>
        </header>

        <main>
          <div className="container-title">
            <h1 className="title">Nombre de la Barberia</h1>
          </div>
          <div className="container-img-main">
            <img
              src="public\imgs-ilustrativas\img.main.jpg"
              alt="IMG ilustrativa"
              className="img-main"
            />
          </div>
        </main>

        <div className="container-general-slider-cortes">
          <h1 className="title-cortes">Los mejores cortes</h1>
          <div className="slider-container">
            <Slider {...settings}>
              {images.map((image, index) => (
                <>
                  <div key={index} className="slider-item">
                    <img
                      src={image}
                      alt={`Slide ${index}`}
                      className="slider-image"
                    />
                  </div>
                </>
              ))}
            </Slider>
          </div>
        </div>

        <div className="container-turno">
          <h1 className="title-turno">Reservá tu turno</h1>
          <h3 className="subtitle-turno">
            Elegí por quien queres ser atendido
          </h3>
          <div className="container-general-imgs-barberos">
            <div className="container-img-barbero">
              <img
                src="public\barbero\barbero.jpg"
                alt=""
                className="img-barbero"
              />
              <h3 className="name-barbero">Barbero 1</h3>
            </div>
            <div className="container-img-barbero">
              <img
                src="public\barbero\barbero.jpg"
                alt=""
                className="img-barbero"
              />
              <h3 className="name-barbero">Barbero 2</h3>
            </div>
            <div className="container-img-barbero">
              <img
                src="public\barbero\barbero.jpg"
                alt=""
                className="img-barbero"
              />
              <h3 className="name-barbero">Barbero 3</h3>
            </div>
          </div>
        </div>
        {/* <p className="test">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
          adipisci ad accusamus rem corrupti quis cumque assumenda? Minus
          facilis, repellendus, dolor cupiditate fugiat soluta obcaecati
          deserunt doloribus, dignissimos aliquid ut. Delectus reprehenderit
          iusto quia perferendis minima ut, nihil odit tenetur cupiditate
          quibusdam consectetur facilis explicabo! Saepe assumenda quaerat iure
          enim ea facilis sunt molestiae, non facere quidem neque corporis nisi!
          Fugit, quae. Omnis molestiae ipsa blanditiis quam ea est, cumque sint
          aliquam, cupiditate tempora sit, velit corrupti. Maxime expedita
          deserunt at quae! Aperiam, impedit quo laudantium dicta reprehenderit
          animi? Quae! Molestias eveniet tenetur labore dolores? Praesentium,
          obcaecati officia! Iusto vero consequuntur itaque, sunt neque labore!
          Labore ut, illo ducimus dolor quis neque nam odit recusandae,
          adipisci, officia velit. Nam, voluptatum. Velit iste incidunt quo
          consequatur at temporibus iure placeat, vero aperiam eum voluptate
          distinctio nostrum adipisci! Sequi natus neque, fugit dicta mollitia
          omnis maxime facere incidunt consequatur ex doloribus temporibus?
          Nihil provident quaerat, ipsam suscipit voluptatibus ullam! Voluptatum
          culpa, a laudantium repellendus autem temporibus pariatur maxime saepe
          nemo praesentium atque, non cum numquam expedita ipsam eaque fugiat
          provident, iure suscipit. Sapiente quod possimus, eaque perferendis
          maiores nihil perspiciatis. Accusantium magni minima hic perferendis
          fuga similique impedit porro nostrum quae, officia aliquam tempore
          mollitia quia! Accusantium modi cumque animi vero tempora! Commodi
          cumque ea omnis officia. Illo, deserunt? Saepe eaque id asperiores
          quas quod quos deserunt distinctio, autem, optio officiis aliquam eum
          explicabo dolore recusandae unde ipsam libero quis facere!
          Praesentium? Atque laborum, possimus odio amet delectus cupiditate
          nobis nemo culpa eaque rerum repellendus architecto distinctio, libero
          unde necessitatibus rem. Natus numquam beatae eaque voluptate cumque
          culpa deleniti molestias cum unde. Neque quidem tenetur in laboriosam
          quaerat, maiores velit ullam labore odit eveniet accusamus. Reiciendis
          voluptatum commodi, praesentium quia rem, pariatur libero, animi ipsum
          velit sint officia eos laudantium sunt quae.
        </p> */}

        <div className="container-datos">
          <h1 className="title-datos">Ingresá tus Datos</h1>
          <div className="container-inputs">
            <div className="container-1">
              <h3 className="titles-datos">Nombre</h3>
              <input type="text" className="inputs" />
            </div>
            <div className="container-2">
              <h3 className="titles-datos">Horario</h3>
              <select name="" id="" className="select-options">
                <option value="13" className="options">
                  13hs
                </option>
                <option value="13" className="options">
                  15hs
                </option>
                <option value="13" className="options">
                  17hs
                </option>
                <option value="13" className="options">
                  19hs
                </option>
              </select>
            </div>
            <div className="container-pago">
              <h3 className="titles-pagos">Método de pago:<br />Ambos se realizan en el lugar</h3>
              <div className="container-buttons-pago">
                <button className="buttons-pago">Efectivo</button>
                <button className="buttons-pago">Virtual</button>
              </div>
              <div className="container-button-reserva">
                <button className="button-reserva">Reservar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
