import { isMobile } from "react-device-detect";
export default function Slider() {
  let img1 = () => {
    if (isMobile) {
      return (
        <img
          className="d-block w-100 slider-img"
          src="https://www.audio-technica.com/wordpress/app/uploads/60th_home_lifestyle_banner_mobile_01_update-500x900.jpg"
          alt="First slide"
        />
      );
    }
    return (
      <img
        className="d-block w-100 slider-img"
        src="https://www.audio-technica.com/wordpress/app/uploads/60th_home_lifestyle_banner_desktop_01_update-2000x1000.jpg"
        alt="First slide"
      />
    );
  };

  let img2 = () => {
    if (isMobile) {
      return (
        <img
          className="d-block w-100 slider-img"
          src="https://www.audio-technica.com/wordpress/app/uploads/60th_home_lifestyle_banner_mobile_01_update-500x900.jpg"
          alt="First slide"
        />
      );
    }
    return (
      <img
        className="d-block w-100 slider-img"
        src="https://www.audio-technica.com/wordpress/app/uploads/ATH_CKS50TW_banner_desktop_01-2000x1000.jpg"
        alt="First slide"
      />
    );
  };

  let img3 = () => {
    if (isMobile) {
      return (
        <img
          className="d-block w-100 slider-img"
          src="https://www.audio-technica.com/wordpress/app/uploads/60th_home_lifestyle_banner_mobile_01_update-500x900.jpg"
          alt="First slide"
        />
      );
    }
    return (
      <img
        className="d-block w-100 slider-img"
        src="https://www.audio-technica.com/wordpress/app/uploads/ATH-SQ1TWBK_2000x1000_shadow-2000x1000.jpg"
        alt="First slide"
      />
    );
  };
  return (
    <>
      <div className="masonry">
        <div className="slider">
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="false"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                {img1()}
                <div className="carousel-caption d-md-block">
                  <h5>First slide label</h5>
                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                {img2()}
                <div className="carousel-caption d-md-block">
                  <h5>Second slide label</h5>
                  <p>
                    Some representative placeholder content for the second
                    slide.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                {img3()}
                <div className="carousel-caption d-md-block">
                  <h5>Third slide label</h5>
                  <p>
                    Some representative placeholder content for the third slide.
                  </p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="calugas">
          <div className="calugaUno">
            <img
              className="d-block w-100 slider-img"
              src="https://www.audio-technica.com/wordpress/app/uploads/60th_home_lifestyle_banner_mobile_01_update-500x900.jpg"
              alt="First slide"
            />
          </div>
          <div className="calugaDos">
            <img
              className="d-block w-100 slider-img"
              src="https://www.audio-technica.com/wordpress/app/uploads/60th_home_lifestyle_banner_mobile_01_update-500x900.jpg"
              alt="First slide"
            />
          </div>
        </div>
      </div>
    </>
  );
}
