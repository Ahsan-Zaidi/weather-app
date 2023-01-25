import hotBg from './assets/hot.jpg';
import coldBg from './assets/cold.jpg';

function App() {
  return (
    <div className="App" style={{backgroundImage: `url(${coldBg})`}}>
      <div className='overlay'>
        <div className='container'>
          
          <div className='section section__inputs'>
            <input type='text' name='city' placeholder='Enter City...' />
            <button>°F</button>
          </div>

          <div className='section section__temperature'>
            <div className='icon'>
              <h3>London, GB</h3>
              <img src={''} alt='weatherIcon'/>
              <h3>Cloudy</h3>
            </div>
            <div className='temperature'>
              <h1>35 °C</h1>
            </div>
          </div>

          {/* BOTTOM DESCRTIPTION */}
        </div>
      </div>     
    </div>
  );
}

export default App;
