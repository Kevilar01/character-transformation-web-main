
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center group flex-shrink-0">
      <div className="text-white font-bold text-xl tracking-tight group-hover:text-neutral-light transition-colors duration-300">
        CharacterCoach
      </div>
    </Link>
  );
};

export default Logo;
