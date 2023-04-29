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
            <p className="newpara">Unleash the new</p>
            <p>Team Nova is a group of highly innovative and creative individuals who are committed to breaking boundaries and thinking outside the box. With the motto "Unleash the New," we bring together a diverse range of skills, experiences, and perspectives to tackle challenges and create cutting-edge solutions. Our team members are uniquely talented and driven, and we work collaboratively to achieve our goals and make a lasting impact. As a team, we strive to shine as brightly as a nova, illuminating new possibilities and leading the way towards a brighter future.</p>
            <a href="https://discord.gg/quPJS5qq"><button>Join Discord</button></a>
          </div>
        </div>
        <footer>
        <p>8281106433</p>
        <p>@team5_nova</p>
        <p>nova.team5.org@gmail.com</p>
      </footer>
      <br/>
      <a href="https://drive.google.com/file/d/1TFGH1ff-DNcvZOfnpdPuwFGs2bx9WqKO/view?usp=sharing" target="_blank" rel="noopener noreferrer"><button>Download PDF</button></a>
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
      <div className="line"></div>
    </div>
  );
}

export default App;
