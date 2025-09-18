import './App.css';
import placeholder from './assets/placeholder.png';
import pythonlogo from './assets/pythonlogo.png';
import javalogo from './assets/javalogo.svg';
import { FaGithub, FaLinkedin, FaReact, FaGitAlt, FaHtml5, FaLinux} from "react-icons/fa";
import { IoMailOutline, IoDocumentTextOutline } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";
import { SiCsswizardry } from "react-icons/si";
import SkillShowcase from './components/skillShowcase.js';


function App() {
  return (
    <div className='app'>
      <div className='nameplate'>
        <div className='namecard'>
          <h1>Hi, I'm Danny Erikson</h1>
          <p>I'm a Full Stack Dev<br />In Los Angeles</p>

          <div className='links'>
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <FaGithub size={40} />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              <FaLinkedin size={40} />
            </a>
            <a href="https://en.wikipedia.org/wiki/Gmail" target="_blank" rel="noreferrer">
              <IoMailOutline size={40} />
            </a>
            <a href="https://en.wikipedia.org/wiki/R%C3%A9sum%C3%A9" target="_blank" rel="noreferrer">
              <IoDocumentTextOutline size={40} />
            </a>
          </div>
        </div>

        <div className='box-b'>
          <img src={placeholder} alt="Danny Erikson" width="500" />
        </div>
      </div>
      <div>
        <h1>Stuff I Work With</h1>
        <div className='skill-showcase'>
          <SkillShowcase 
            icon={<GrMysql size={40} color="#00758F"/>}
            title={"MySQL"}
            description={"Officia consectetur veniam dolore aliquip deserunt sint excepteur amet occaecat laboris."}
          />
          <SkillShowcase 
            icon={<FaReact size={40} color="#61DBFB"/>}
            title={"React"}
            description={"Ex aute sunt velit proident reprehenderit aliqua dolor non elit consequat minim non."} 
          />
            <SkillShowcase 
            icon={<img src={pythonlogo} alt="Python Logo" width={40} />}
            title={"Python"}
            description={"Commodo officia aliqua anim ad sunt veniam nisi deserunt do."}
          />
        </div>
        <div>
          <h2>Other stuff I work with</h2>
          <img src={javalogo} alt="Java Logo" width={40} />
          <FaGitAlt size={40} color='#F1502F'/>
          <FaHtml5 size={40} color='#f06529'/>
          <SiCsswizardry size={40} color='#663399'/>
          <FaLinux size={40}/>
        </div>
      </div>
    </div>
  );
}

export default App;
