import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-neutral-900 text-white flex items-center justify-center">
      <div className="text-center container-padding">
        <div className="mb-8">
          <span className="text-8xl">🦔</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">404</h1>
        <p className="text-xl md:text-2xl text-neutral-300 mb-8">
          Looks like this hedge expired – back to safety
        </p>
        <Link 
          to="/"
          className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-secondary transition-all duration-150 ease-out hover:scale-105"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;