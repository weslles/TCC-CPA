import icon from '../src/assets/log-out.svg'
import ButtonGeneric from './components/cardsButton/ButtonGeneric'
import CardButton from './components/cardsButton/CardButton'
import graphic from '../src/assets/grafico.svg'

function App() {
  return (
    <div className="main">
      <div className="menu-lateral-esq">
        <img className='logout' src={icon} alt="" />
      </div>
      <div>
        <h1>
          Dashboard de desempenho docente
        </h1>
        <div className="cards">
          <ButtonGeneric></ButtonGeneric>
          <CardButton cardTitle="criticas" title="Críticas" subTitle='Comentários'></CardButton>
          <div className="sugestoes">Sugestões</div>
          <div className="nRespondentes">Total Respondentes</div>
        </div>

        <div className="areaGrafico">
          <span className="tituloCardGrafico">Gráfico de Desempenho</span>
          <div className="grafico">
            <img id="graphic"src={graphic} alt="" />
          </div>
        </div>

        <div className="acount" >
          Nome do Professor
        </div>

        {/*Menu disciplinas*/}
        <div className="menu-disciplinas">
            <h3>Discplinas</h3>

            <div className="discp1">
              <h5>TCC1</h5>
            </div>
            <div className="discp"></div>
        </div>

      </div>
      
    </div>
  )
}

export default App
