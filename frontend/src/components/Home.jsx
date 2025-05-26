import { FaCode, FaSearch, FaLanguage, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="bg-background text-primary min-h-screen font-sans">
      {/* Hero Section */}
      <header className="text-center py-16 px-6 bg-accent text-white">
        <h1 className="text-4xl font-bold mb-4">AlgoNotes</h1>
        <p className="text-lg max-w-2xl mx-auto">
          A powerful DSA notebook to save, organize, and search your C++/Java algorithms.
        </p>
        <Link
          to="/login"
          className="inline-block mt-6 bg-secondary text-darkText px-6 py-3 rounded shadow hover:bg-background"
        >
          Get Started
        </Link>
      </header>

      {/* Features */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-secondary">
          <FeatureCard icon={<FaCode />} title="Save Code" description="Store clean C++ or Java code snippets." />
          <FeatureCard icon={<FaSearch />} title="Search Instantly" description="Find notes by title or language." />
          <FeatureCard icon={<FaLanguage />} title="Multi-Language" description="Supports C++, Java & Python (optional)." />
          <FeatureCard icon={<FaGithub />} title="Open Source" description="View or contribute on GitHub." />
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-secondary py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-darkText">How It Works</h2>
        <ol className="list-decimal max-w-xl mx-auto text-darkText space-y-4">
          <li>Click "Get Started" and go to the note page.</li>
          <li>Add your DSA code, language, and explanation.</li>
          <li>Search, filter, or update your notes as needed.</li>
        </ol>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-400">
        Built by You • <a className="hover:underline" href="https://github.com/your-username/algonotes-frontend">View on GitHub</a>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white text-darkText p-6 rounded shadow hover:shadow-md transition">
      <div className="text-3xl mb-4 text-accent">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
