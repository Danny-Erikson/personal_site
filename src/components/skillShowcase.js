function SkillShowcase({ icon, title, description }) {
  return (
    <div>
        <div>
            {icon}<h3>{title}</h3>
            <p>{description}</p>
        </div>
    </div>
  );
}

export default SkillShowcase;