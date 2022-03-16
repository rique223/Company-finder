import React, { createContext, useState } from "react";
import FadeLoading from "../components/FadeLoading/FadeLoading";
import UseLocalStorage from "../hooks/UseLocalStorage";
import { Collapse } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import apiSearchCNPJ from "../utils/apiSearchCNPJ";

const EmpresaContext = createContext({} as Contexts.EmpresaContext);

export const EmpresaProvider: React.FC = ({ children }) => {
  const [empresas, setEmpresas] = UseLocalStorage(
    "empresasStorage",
    [] as Models.Empresa[]
  );
  const [loading, setLoading] = useState(false);
  const [selecionada, setSelecionada] = UseLocalStorage(
    "empresaSelecionadaStorage",
    {} as Models.Empresa
  );
  const [openAlert, setOpenAlert] = useState(false);
  const [messageError, setMessageError] = useState("");

  const buscarEmpresas = async (cnpj: string) => {
    setLoading(true);
    try {
      const { data } = await apiSearchCNPJ.get<Models.Empresa>(`?CNPJ=${cnpj}`);

	  if(!data.bairro && !data.logradouro && !data.municipio && !data.numero) {
		data.NoAddressMessage = "Essa empresa não tem um endereço cadastrado.";
	  }

      if (typeof data === "string") {
        setMessageError(
          "Você fez muitas requisições, espere um pouco antes de tentar novamente."
        );
        setOpenAlert(true);
        return;
      }

      setEmpresas((old) => [...old, data]);
    } catch (err) {
      console.error("erro ao buscar empresas", err);
      setMessageError("Esse CNPJ não existe");
      setOpenAlert(true);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return (
    <EmpresaContext.Provider
      value={{
        empresas,
        setEmpresas,
        buscarEmpresas,
        setOpenAlert,
        setMessageError,
        selecionada,
        setSelecionada,
        setLoading,
      }}
    >
      <FadeLoading loading={loading} />
      <Collapse in={openAlert}>
        <Alert variant="filled" severity="error" onClick={() => setOpenAlert(false)}>
          {messageError}
        </Alert>
      </Collapse>
      {children}
    </EmpresaContext.Provider>
  );
};

export default EmpresaContext;
