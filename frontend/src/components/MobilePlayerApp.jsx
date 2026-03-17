import React, { useState } from 'react';

const MobilePlayerApp = () => {
  const [sliderValue, setSliderValue] = useState(5);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black/90 p-4">
      <div className="w-full max-w-[375px] h-[812px] bg-slate-950 rounded-[2.5rem] border-[6px] border-slate-800 overflow-hidden relative shadow-2xl flex flex-col">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-xl z-20"></div>

        <div className="pt-12 pb-6 px-6 bg-gradient-to-b from-[#ccff00]/10 to-transparent">
          <p className="text-[#ccff00] text-sm font-medium tracking-wider uppercase mb-1">AceMind</p>
          <h2 className="text-2xl text-white font-light">E aí, Carlos.</h2>
          <p className="text-slate-400 text-sm">Como foi o treino hoje?</p>
        </div>

        <div className="flex-1 overflow-y-auto px-6 pb-24 space-y-6">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5">
            <h3 className="text-white font-medium mb-4">Diário de Bordo</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-xs text-slate-400 mb-2"><span>Desfocado</span><span>Foco Total</span></div>
                <input type="range" min="1" max="10" defaultValue="7" className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#ccff00]" />
              </div>
              <div>
                <div className="flex justify-between text-xs text-slate-400 mb-2"><span>Exausto Mentalmente</span><span>Energizado</span></div>
                <input type="range" min="1" max="10" value={sliderValue} onChange={(e) => setSliderValue(e.target.value)} className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#ccff00]" />
              </div>
              <button className="w-full bg-[#ccff00] text-slate-950 font-medium py-3 rounded-xl hover:bg-[#b3e600] transition-colors">
                Salvar Check-in
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-slate-200 text-sm font-medium mb-3 pl-1">Kit de Emergência</h3>
            <div className="space-y-3">
              <div className="bg-slate-900 border border-white/5 p-4 rounded-xl flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#ccff00]/20 flex items-center justify-center text-[#ccff00]">▶</div>
                  <div><p className="text-white text-sm font-medium">Visualização de Saque</p><p className="text-slate-500 text-xs">3 min</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 w-full bg-slate-950/80 backdrop-blur-xl border-t border-white/10 px-6 py-4 flex justify-between items-center z-10 pb-8">
          <span className="text-[10px] font-medium text-[#ccff00]">Início</span>
          <span className="text-[10px] font-medium text-slate-500">Chat Psi</span>
          <span className="text-[10px] font-medium text-slate-500">Perfil</span>
        </div>
      </div>
    </div>
  );
};

export default MobilePlayerApp;