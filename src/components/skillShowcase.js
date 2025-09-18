import './skillShowcase.css';

function SkillShowcase({ icon, title, tech, description }) {
  return (
    <div className="skillcard">
      <div className='skillheader'>
        <div>{icon}</div>
        <div><p>{title}</p><span>{tech}</span></div>
      </div>
      <p>{description}</p>
    </div>
  );
}

export default SkillShowcase;