import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Header />
      <main className="pb-16 pt-8">
        <About />
        <Projects />
        <Skills />
      </main>
    </div>
  );
}