import React from 'react';

const ProntuarioAtleta = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans p-8">
      <div className="flex justify-between items-end mb-8 border-b border-white/10 pb-6">
        <div className="flex items-center space-x-6">
          <div className="h-24 w-24 rounded-full border-2 border-[#ccff00] p-1">
            <div className="w-full h-full rounded-full bg-slate-800 bg-[url('https://i.pravatar.cc/200?img=11')] bg-cover"></div>
          </div>
          <div>
            <h1 className="text-4xl font-light tracking-wide">Carlos <span className="font-bold text-[#ccff00]">Alcaraz</span></h1>
            <p className="text-slate-400 mt-2 flex items-center gap-4">
              <span>🎾 Destro / Revés de 2 mãos</span>
              <span>🏆 Ranking ATP: #2</span>
            </p>
          </div>
        </div>
        <button className="bg-[#ccff00]/10 text-[#ccff00] border border-[#ccff00]/30 hover:bg-[#ccff00] hover:text-slate-950 px-6 py-2 rounded-full transition-all duration-300 font-medium">
          + Nova Sessão
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="space-y-6">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
            <h3 className="text-lg text-slate-200 font-light mb-4">Métricas de Pressão</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1"><span className="text-slate-400">Eficiência em Break Points</span><span className="text-[#ccff00]">78%</span></div>
                <div className="w-full bg-slate-900 rounded-full h-2"><div className="bg-[#ccff00] h-2 rounded-full shadow-[0_0_10px_rgba(204,255,0,0.5)]" style={{ width: '78%' }}></div></div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1"><span className="text-slate-400">Duplas Faltas Críticas</span><span className="text-red-400">Alto Risco</span></div>
                <div className="w-full bg-slate-900 rounded-full h-2"><div className="bg-red-500 h-2 rounded-full" style={{ width: '65%' }}></div></div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-2 space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-[#ccff00]/10 to-transparent border border-[#ccff00]/20 p-6 rounded-2xl">
              <h3 className="text-[#ccff00] font-medium mb-2">Foco Atual da Terapia</h3>
              <p className="text-sm text-slate-300 leading-relaxed">Trabalhando a frustração após erros não forçados no backhand. Acelerando tempo de recuperação.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
              <h3 className="text-white font-medium mb-2">Mapeamento de Rotinas</h3>
              <ul className="text-sm text-slate-400 space-y-2">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#ccff00]"></div> Pré-saque: 4 quiques na bola</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-500"></div> Pós-erro: Evitar olhar pro box</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProntuarioAtleta;