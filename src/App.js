import './App.css';
import portrait from './assets/portrait.png';
import pythonlogo from './assets/pythonlogo.png';
import javalogo from './assets/javalogo.svg';
import { FaGithub, FaLinkedin, FaReact, FaGitAlt, FaHtml5, FaLinux} from "react-icons/fa";
import { IoMailOutline, IoDocumentTextOutline } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";
import { SiCsswizardry, SiIndeed } from "react-icons/si";
import SkillShowcase from './components/skillShowcase.js';
import Galaxy from './Galaxy';

/* TODO: Fix File spacing*/
/* TODO: Fix File structure*/


function App() {
  return (
    <div className="site">
      <div className="galaxy-bg" aria-hidden="true">
        <Galaxy />
      </div>
      <div className="app">
        <div className='nameplate'>
          <div className='namecard'>
            <h1>Hi, I'm Danny Erikson</h1>
            <p>I'm a Full Stack Dev<br />In Los Angeles</p>
            {/*TODO: Test more space between this and links*/}

          <div className='links'>
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <FaGithub size={69} />
            </a>
            <a href="https://www.indeed.com/" target="_blank" rel="noreferrer">
              <SiIndeed size={69} />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              <FaLinkedin size={69} />
            </a>
            <a href="https://en.wikipedia.org/wiki/Gmail" target="_blank" rel="noreferrer">
              <IoMailOutline size={69} />
            </a>
            <a href="https://en.wikipedia.org/wiki/R%C3%A9sum%C3%A9" target="_blank" rel="noreferrer">
              <IoDocumentTextOutline size={69} />
            </a>
            {/* Placeholder for dynamic text*/}
            <p>resume download</p>
          </div>
        </div>
        <div className='box-b'>
          <img src={portrait} alt="Danny Erikson" width="550" />
        </div>
        </div>
        {/*FIXME: adjust to fit/look better, all below*/}
        <div className='skillcontainer'>
        <h1 className='skilltitle' style={{ backgroundColor: 'dodgerblue'}} >Stuff I Work With</h1>
        <div className='skillshowcase'>
          <SkillShowcase 
            icon={<FaReact size={65} color="#61DBFB"/>}
            title={"Web Development"}
            tech={"React"}
            description={"React makes up the frontend of most of my projects. I love the component based architecture and the speed it provides."} 
          />
            <SkillShowcase 
            icon={<img src={pythonlogo} alt="Python Logo" width={65} />}
            title={"Backend Development"}
            tech={"Python"}
            description={"Python is my go to for backend development. I love the simplicity and readability of the language."}
          />
          <SkillShowcase 
            icon={<GrMysql size={65} color="white"/>}
            title={"Database Management"}
            tech={"MySQL"}
            description={"I primarily use MySQL for database management. I have experience with relational databases and perfer them to non-relational models."}
          />
        </div>
        <h2 className='skilltitle' style={{ backgroundColor: '#6495ED'}}>Other stuff I work with</h2>
        <div className='othertech'>
          <img src={javalogo} alt="Java Logo" width={40} /> <p>Java</p>
          <FaHtml5 size={40} color='#f06529'/> <p>HTML</p>
          <SiCsswizardry size={40} color='#663399'/> <p>CSS</p>
          <FaGitAlt size={40} color='#F1502F'/> <p>Git</p>
          <FaLinux size={40}/> <p>Linux</p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
