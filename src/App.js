import "./App.css";
import logo from "./assets/logo.png";
import Alicia from "./assets/Alicia.jpeg";
import Amith from "./assets/Amith.jpg";
import evin from "./assets/evin.jpeg";
import alwin from './assets/alwin.jpeg';
import alex from './assets/alex.jpg';
import devana from './assets/devana.jpeg'
import anakha from './assets/anakha.jpeg'
function App() {
  return (
    <div className="App">
      <main>
        <div className="thelogo">
          <img src={logo} alt="Gradient" />
          <div className="content">
            <h1>TEAM NOVA</h1>
            <p>Unleash The New</p>
          </div>
        </div>
      </main>
      <div className="team">
        <h2>MEET OUR TEAM</h2>
        <br />
        <br />
        <div className="judges-list">
        <div className="judge-card">
            <div className="judge-name">Alex Emmatty</div>
            <br />
            <div className="judge-title">Team Captain</div>
            <img src={alex} alt="Gradient" />
            <br/>
            <a href="https://www.linkedin.com/in/alex-emmatty-186587226/">Linked In</a>
          </div>
          <div className="judge-card">
            <div className="judge-name">Alwin Chungath</div>
            <br />
            <div className="judge-title">Vice Captain</div>
            <img src={alwin} alt="Gradient" />
            <br/>
            <a href="https://www.linkedin.com/in/alwin-mathew-6a8253201">Linked In</a>
          </div>
          <div className="judge-card">
            <div className="judge-name">Alicia Denny</div>
            <br />
            <div className="judge-title">Team Member</div>
            <img src={Alicia} alt="Gradient" />
            <br/>
            <a href="https://www.linkedin.com/in/alicia-denny-047835256">Linked In</a>
          </div>
          <div className="judge-card">
            <div className="judge-name">Amith P</div>
            <br />
            <div className="judge-title">Team Member</div>
            <img src={Amith} alt="Gradient" />
            <br/>
            <a href="https://www.linkedin.com/in/amith-p-729224265/">Linked In</a>
          </div>
          <div className="judge-card">
            <div className="judge-name">Evin Babu</div>
            <br />
            <div className="judge-title">Team Member</div>
            <img src={evin} alt="Gradient" />
            <br/>
            <a href="https://www.linkedin.com/in/evin-babu-693ba123b">Linked In</a>
          </div>
          <div className="judge-card">
            <div className="judge-name">Devna Ajith</div>
            <br />
            <div className="judge-title">Team Member</div>
            <img src={devana} alt="Gradient" />
            <br/>
            <a href="https://www.linkedin.com/in/devna-ajith-606407274">Linked In</a>
          </div>
          <div className="judge-card">
            <div className="judge-name">Anakha A</div>
            <br />
            <div className="judge-title">Team Member</div>
            <img src={anakha} alt="Gradient" />
            <br/>
            <a href="https://in.linkedin.com/in/anakha-a-298165229">Linked In</a>
          </div>
        </div>
      </div>
      <footer>
        <p>8281106433</p>
        <p>@team5_nova</p>
        <p>nova.team5.org@gmail.com</p>
      </footer>
    </div>
  );
}

export default App;
