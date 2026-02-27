import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-200 py-10 px-4 font-sans">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl overflow-hidden flex flex-col md:flex-row rounded-lg">
        <MainContent />
        <Sidebar />
      </div>
    </div>
  );
}