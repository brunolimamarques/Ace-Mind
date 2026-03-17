import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import ProntuarioAtleta from './components/ProntuarioAtleta';
import MobilePlayerApp from './components/MobilePlayerApp';

function App() {
  const [telaAtual, setTelaAtual] = useState('dashboard');

  return (
    <div className="bg-slate-950 min-h-screen">
      {/* Menu de Navegação Temporário para Testes */}
      <div className="bg-slate-900 p-4 flex justify-center gap-4 border-b border-white/10">
        <button onClick={() => setTelaAtual('dashboard')} className="text-white bg-slate-800 px-4 py-2 rounded hover:bg-[#ccff00] hover:text-black transition">Painel Geral</button>
        <button onClick={() => setTelaAtual('prontuario')} className="text-white bg-slate-800 px-4 py-2 rounded hover:bg-[#ccff00] hover:text-black transition">Visão do Atleta</button>
        <button onClick={() => setTelaAtual('mobile')} className="text-white bg-slate-800 px-4 py-2 rounded hover:bg-[#ccff00] hover:text-black transition">App Mobile</button>
      </div>

      {/* Renderização das Telas */}
      {telaAtual === 'dashboard' && <Dashboard />}
      {telaAtual === 'prontuario' && <ProntuarioAtleta />}
      {telaAtual === 'mobile' && <MobilePlayerApp />}
    </div>
  );
}

export default App;