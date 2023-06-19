import icon from '../src/assets/log-out.svg'
import ButtonGeneric from './components/cardsButton/ButtonGeneric'
import CardButton from './components/cardsButton/CardButton'
import Grafico from './components/relatorio/Grafico'


function App() {
  return (
    <div className="main">

      <div className='conteudo'>
        <div className='org'>
          <div className="barra">
            <img id="log" className='logout' src={icon} alt="" />
          </div>
          <div id='titulo' className='titulo'>
            <span> Dashboard de desempenho docente </span>
          </div>
          <div className='botoesSuperior'>
            <CardButton title='Melhor Avaliação' subTitle='Nota'></CardButton>
            <ButtonGeneric></ButtonGeneric>
            <ButtonGeneric></ButtonGeneric>
            <ButtonGeneric></ButtonGeneric>
          </div>


          <div className="relatorio ">
            <Grafico></Grafico>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
