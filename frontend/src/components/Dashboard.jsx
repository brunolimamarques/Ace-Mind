import React, { useState } from 'react';

const Dashboard = () => {
  const [atletas] = useState([
    { id: 1, nome: "Carlos Alcaraz", torneioAtual: "Roland Garros", status: "Estável", corRisco: "bg-green-500" },
    { id: 2, nome: "João Silva", torneioAtual: "Challenger SP", status: "Alerta de Burnout", corRisco: "bg-red-500" },
    { id: 3, nome: "Bia Haddad", torneioAtual: "WTA 1000", status: "Foco Alto", corRisco: "bg-[#ccff00]" }
  ]);

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans p-8">
      <header className="flex justify-between items-center mb-12">
        <div>
          <h1 className="text-4xl font-light tracking-wider">Ace<span className="text-[#ccff00] font-bold">Mind</span></h1>
          <p className="text-slate-400 mt-1 text-sm uppercase tracking-widest">Painel de Controle Psicológico</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="h-10 w-10 rounded-full border-2 border-[#ccff00] overflow-hidden">
            <img src="https://i.pravatar.cc/100" alt="Avatar Dr." />
          </div>
          <span className="text-slate-300">Dr. Almeida</span>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="col-span-2 space-y-6">
          <h2 className="text-xl text-slate-200 font-light border-b border-white/10 pb-2">Radares de Atenção</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {atletas.map(atleta => (
              <div key={atleta.id} className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:border-[#ccff00]/50 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-medium">{atleta.nome}</h3>
                  <span className={`h-3 w-3 rounded-full ${atleta.corRisco} shadow-[0_0_10px_rgba(204,255,0,0.5)]`}></span>
                </div>
                <p className="text-sm text-slate-400 mb-1">Torneio: <span className="text-white">{atleta.torneioAtual}</span></p>
                <p className="text-sm text-slate-400">Status Mental: <span className="text-white">{atleta.status}</span></p>
                <button className="mt-6 text-sm text-[#ccff00] hover:text-white transition-colors flex items-center">
                  Abrir Prontuário <span className="ml-2">→</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl text-slate-200 font-light border-b border-white/10 pb-2">Métricas de Quadra</h2>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 p-6 rounded-2xl">
            <h3 className="text-[#ccff00] font-medium mb-2 flex items-center">
              Índice de "Choking" Global
            </h3>
            <p className="text-sm text-slate-400 mb-4">Análise de tensão em Break Points</p>
            <div className="w-full bg-slate-950 h-24 rounded-lg flex items-end p-2 space-x-2">
              <div className="w-1/5 bg-white/20 h-[30%] rounded-t-sm hover:bg-[#ccff00] transition-colors"></div>
              <div className="w-1/5 bg-white/20 h-[50%] rounded-t-sm hover:bg-[#ccff00] transition-colors"></div>
              <div className="w-1/5 bg-[#ccff00] h-[90%] rounded-t-sm shadow-[0_0_15px_rgba(204,255,0,0.4)] relative"></div>
              <div className="w-1/5 bg-white/20 h-[40%] rounded-t-sm hover:bg-[#ccff00] transition-colors"></div>
              <div className="w-1/5 bg-white/20 h-[20%] rounded-t-sm hover:bg-[#ccff00] transition-colors"></div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
            <h3 className="text-white font-medium mb-3">Rotinas Pré-Saque</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-sm text-slate-300"><span className="h-2 w-2 bg-[#ccff00] rounded-full mr-3"></span>João S. - Ajustar respiração</li>
              <li className="flex items-center text-sm text-slate-300"><span className="h-2 w-2 bg-[#ccff00] rounded-full mr-3"></span>Bia H. - Visualização</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;