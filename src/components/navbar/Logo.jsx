
import { Link } from "react-router-dom";
export default function Logo() {
  return (
    <Link className="text-xl" to="/">
      <span className='text-base font-bold'><span className="text-green-600 text-2xl">G</span>reen <span className="text-green-600 text-2xl">E</span>xchange</span>
    </Link>
  );
}
