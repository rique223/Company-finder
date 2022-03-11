import { Paper } from "@material-ui/core";
import React from "react";
import Slider from "react-slick";

const CompanyCarrousel = ({
  empresas,
  settings,
  coordenadas,
}: Models.CompanyCarrouselProps) => (
    <div className="carousel">
      <Slider {...settings}>
        {empresas &&
          empresas.map((empresa) => (
            <Paper
              variant="outlined"
              elevation={3}
              key={empresa.cnpj}
              onClick={() => coordenadas(empresa)}
            >
              <section className="razao-social">
                <h2>{empresa.nome.toLowerCase()}</h2>
                <p>Razão Social</p>
              </section>

              <section className="cnpj">
                <h2>{empresa.cnpj}</h2>
                <p>CNPJ</p>
              </section>

              <section className="endereco">
                <h2>
                  {empresa.logradouro.toLowerCase()}{" "}
                  {empresa.numero.toLowerCase()} {empresa.bairro.toLowerCase()}{" "}
                  {empresa.municipio.toLowerCase()}
                </h2>
                <p>Endereço</p>
              </section>
            </Paper>
          ))}
      </Slider>
    </div>
  );

export default CompanyCarrousel;
