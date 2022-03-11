import React, { useContext, useCallback } from "react";
import { Toolbar, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan, faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import ArrowBackIosSharpIcon from "@material-ui/icons/ArrowBackIosSharp";
import ArrowForwardIosSharpIcon from "@material-ui/icons/ArrowForwardIosSharp";
import EmpresaContext from "../contexts/EmpresaContext";
import TitleBar from "../components/TitleBar";
import "./scss/HomePage.scss";

import "react-multi-carousel/lib/styles.css";
import CompanyCarrousel from "../components/CompanyCarrousel";

const HomePage = () => {
  const { empresas, setEmpresas, setSelecionada, setOpenAlert } = useContext(EmpresaContext);
  let settings = {
    dots: false,
    infinite: empresas.length >= 4,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: empresas.length >= 3,
          dots: false,
        },
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: empresas.length >= 2,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const history = useHistory();

  const navigate = useCallback(
    (link: string) => {
      setOpenAlert(false);
      history.push(link);
    },
    [history, setOpenAlert]
  );

  const coordenadas = (selec: Models.Empresa) => {
    setSelecionada(selec);
    navigate(`/maps`);
  };

  function SampleNextArrow(props: {
    className?: any;
    style?: any;
    onClick?: any;
  }) {
    const { className, onClick } = props;
    return (
      <ArrowForwardIosSharpIcon
        style={{ color: "white" }}
        className={className}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props: {
    className?: any;
    style?: any;
    onClick?: any;
  }) {
    const { className, onClick } = props;
    return (
      <ArrowBackIosSharpIcon
        style={{ color: "white" }}
        className={className}
        onClick={onClick}
      />
    );
  }

  return (
    <section className="container-home">
      <TitleBar />

      <div className="content">
        {empresas.length > 0 && (
          <CompanyCarrousel
            empresas={empresas}
            settings={settings}
            coordenadas={coordenadas}
          />
        )}

        {empresas.length === 0 && (
          <div className="first">
            <FontAwesomeIcon icon={faSearchPlus} />
            <p>Localize acima a primeira empresa</p>
          </div>
        )}

        {empresas.length > 0 && (
          <Toolbar className="button-toolbar">
            <Button
              className="excluir"
              title="Limpar empresas"
              onClick={() => setEmpresas([])}
            >
              <FontAwesomeIcon icon={faBan} />
            </Button>
          </Toolbar>
        )}
      </div>
    </section>
  );
};
export default HomePage;
