/* eslint-disable @typescript-eslint/no-unused-vars */
/// <reference types="react-scripts" />

namespace Models {
  interface Empresa {
    cnpj: string;
    nome: string;
    logradouro: string;
    numero: string;
    bairro: string;
    municipio: string;
    location: Location;
  }

  interface Location {
    lat: number;
    lng: number;
  }

  interface Settings {
    dots: boolean;
    infinite: boolean;
    speed: number;
    slidesToShow: number;
    slidesToScroll: number;
    initialSlide: number;
    responsive: Responsive[];
    nextArrow: JSX.Element;
    prevArrow: JSX.Element;
  }
  
  interface Responsive {
    breakpoint: number;
    settings: Partial<Settings>;
  }
  
  interface Settings {
    slidesToShow: number;
    slidesToScroll: number;
    infinite?: boolean;
    dots?: boolean;
    arrows?: boolean;
    initialSlide?: number;
  }

  type CompanyCarrouselProps = {
    empresas: Models.Empresa[];
    settings: Models.Settings;
    coordenadas: (selec: Models.Empresa) => void;
  }
  
}