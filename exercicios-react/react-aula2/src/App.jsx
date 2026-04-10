import Banner from "./assets/components/banner";
import Card from "./assets/components/Card";
import CardDinamico from "./assets/components/CardDinamico";
import FormaDeBolo from "./assets/components/FormaDeBolo";
import Header from "./assets/components/header";
import { Componente1, Componente2, Componente3 } from "./assets/components/Varioscomponentes";

const App = () => {
  return ( 
    <>
      {/*<Header />
      <Banner />
      <Componente1 />
      <Componente2 />
      <Componente3 />*/}
      {/*<FormaDeBolo sabor="chocolate" cobertura="granulado" />
      <FormaDeBolo sabor="laranja" cobertura="chocolate" />*/}
      <Card 
        image={<img src="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/alguns-esportes-dependem-equipamentos-para-serem-praticados-5734865673029.jpg" alt="esportes" />}
        title={<h1>Card 1</h1>}
        notice={<h2>Esportes</h2>}
        paragraph={<p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor.</p>}
      />

      <CardDinamico>
        <h1>Card 1</h1>
        <img src="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/alguns-esportes-dependem-equipamentos-para-serem-praticados-5734865673029.jpg" alt="esportes" />
        <h2>Esportes</h2>
        <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor.</p>
      </CardDinamico>

    </>
   );
}
 
export default App;