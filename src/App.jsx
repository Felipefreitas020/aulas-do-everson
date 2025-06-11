import "./styles/global.css";
import Carro from "./components/Carro";

export default function App() {
 

  return (
    <div>
      <div className="topbar">
        <div className="title">
          <h1>Top 3 Carros mais vendidos do Brasil</h1>
        </div>
        <button>Alterar Tema</button>
      </div>

      <div className="container">
        <Carro
          nome="Onix"
          imagem="/public/onix.png"
          site="https://www.chevrolet.com.br/carros/novo-onix"
          
          descricao= "O Onix é um modelo de carro produzido pela Chevrolet e muito popular no Brasil, especialmente em sua versão hatchback e sedan. O Onix geralmente é oferecido com motores 1.0 aspirado e turbo com coreia banhada a oleo, econômicos e de bom desempenho para um carro de entrada, sendo muito bem aceito por quem busca um carro que combine baixo consumo de combustível e bom desempenho."
        />
        <div className="linkonex">
        <p>Link:</p> 
        <a href={"https://www.chevrolet.com.br/carros/novo-onix"} target="_blank" rel="noopener noreferrer">
        <button>Onex</button> </a>
        </div>


        <Carro
          nome="Polo"
          imagem="/public/volkswagen-polo.png"
           
          descricao="O Volkswagen Polo é um carro compacto da Volkswagen, que tem se destacado no Brasil desde seu lançamento em 2017. Ele é conhecido pelo bom desempenho, qualidade de construção e um design mais sofisticado em comparação com outros modelos da mesma categoria. O modelo conta com opções de motores 1.0 e 1.6, sendo eficiente no consumo de combustível e com bom desempenho para um carro compacto."
        />
        <div className="linkpo">

        <p>Link:</p>
         <a href={"https://www.vw.com.br/pt/carros/polo.html"} target="_blank" rel="noopener noreferrer">
         <button>Polo</button></a>
         </div>
       
        <Carro
          nome="strada"
          imagem="/public/strada.png"
           
            site="https://strada.fiat.com.br/"
          descricao="A Fiat Strada é uma picape compacta muito popular no Brasil, conhecida pela sua robustez e versatilidade, ideal para quem precisa de um veículo para trabalho e lazer. Lançada em 1998, a Strada oferece opções de motores flex, geralmente com motorização 1.3 e 1.4, que garantem bom desempenho tanto para uso urbano quanto para viagens e trabalho pesado."
        />
        <div className="linkst">
        <p>Link:</p>
         <a href={"https://strada.fiat.com.br/"} target="_blank" rel="noopener noreferrer">
         <button>strada</button> </a>
         </div>
      </div>

      <footer>
        <p>Dupla: Felipe e Deus</p>
      </footer>
    </div>
  );
}


