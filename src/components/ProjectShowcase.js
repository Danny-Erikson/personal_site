import './ProjectShowcase.css';
import placeholderImage from '../assets/placeholder.png';

function ProjectShowcase({ icon, title, tech, description }) {
  return (
    <div>
        <div clawssName='PS-top-half'>
            <img src={placeholderImage} alt="placeHolder" width={400} />
            <p>title</p>
            <p>date made</p>
            <p>tech used icons</p>
        </div>
        <p>description</p>
        <div className='PS-buttons'>
            <button>Demo</button>
            <button>See Source</button>
            <button>Blog Post</button>
        </div>
    </div>
  );
}

export default ProjectShowcase;