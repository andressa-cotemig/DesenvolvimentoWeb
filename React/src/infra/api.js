//importação da biblioteca
import axios from "axios";

//variável que será o início e a estrutura base da API que consumiremos
const apiDigimon = axios.create({
  baseURL: "https://digimon-api.herokuapp.com/api",
});

//exportando a variável para ser importada em qualquer parte do nosso projeto
export default apiDigimon;
