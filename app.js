/* AceMind 3.0 · 16/10/2026 — gerado por tools/v3.py. Não edite este arquivo: edite src/ e rode o build. */
const AM={
  ACE:"M0 100L96.26 0L120.26 0L99 100L75 100L78.83 82L47.33 82L30 100Z M87.75 40L83.08 62L66.58 62Z M222.26 0L158.26 0L124.3 28L114.95 72L137 100L201 100L205.68 78L152.2 78L140.76 63.47L146.49 36.53L164.11 22L217.58 22Z M232.26 0L320.26 0L315.58 22L251.58 22L247.97 39L303.97 39L299.29 61L243.29 61L239.68 78L303.68 78L299 100L211 100Z",
  MIND:"M337 100L358.26 0L384.26 0L403.21 51.98L444.26 0L470.26 0L449 100L425 100L436.79 44.55L393 100L372.79 44.55L361 100Z M483.26 0L507.26 0L486 100L462 100Z M520.26 0L544.26 0L575.59 59.59L588.26 0L612.26 0L591 100L567 100L535.67 40.41L523 100L499 100Z M624.26 0L688.26 0L710.3 28L700.95 72L667 100L603 100Z M643.58 22L673.05 22L684.49 36.53L678.76 63.47L661.15 78L631.68 78Z",
  /* raio: metade de cima (mente, ciano) e de baixo (corpo, vermelho) */
  bolt(h=24,c1="#00D1FF",c2="#D2456C"){return`<svg class="am-bolt" viewBox="0 0 201.85 300" style="height:${h}px;width:${Math.round(h*67.3)/100}px" aria-hidden="true"><path d="M169.09 0L140.68 133.66L0 175.67Z" fill="${c1}"/><path d="M32.76 300L61.17 166.34L201.85 124.33Z" fill="${c2}"/></svg>`},
  /* assinatura horizontal (raio + ACE MIND) */
  logo(h=30,o={}){const a=o.ace||"#FFFFFF",m=o.mind||"#00D1FF",b1=o.b1||"#00D1FF",b2=o.b2||"#D2456C";return`<svg class="am-logo-svg" viewBox="0 -23 844.49 146" style="height:${h}px;width:${Math.round(h*578.4)/100}px" role="img" aria-label="Ace Mind"><path d="M82.29 -23L68.46 42.05L0 62.49Z" fill="${b1}"/><path d="M15.95 123L29.77 57.95L98.24 37.51Z" fill="${b2}"/><g transform="translate(128.24 0)"><path fill-rule="evenodd" d="${AM.ACE}" fill="${a}"/><path fill-rule="evenodd" d="${AM.MIND}" fill="${m}"/></g></svg>`},
  /* assinatura vertical (raio sobre ACE MIND) */
  logoV(w=240){return`<svg class="am-logo-svg" viewBox="0 -370 716.26 470" style="width:${w}px;height:${Math.round(w*65.62)/100}px" role="img" aria-label="Ace Mind"><path d="M426.29 -370L397.88 -236.34L257.2 -194.33Z" fill="#00D1FF"/><path d="M289.97 -70L318.38 -203.66L459.05 -245.67Z" fill="#D2456C"/><path fill-rule="evenodd" d="${AM.ACE}" fill="#FFFFFF"/><path fill-rule="evenodd" d="${AM.MIND}" fill="#00D1FF"/></svg>`},
  /* ícone do app (raio sobre Azul Noite) */
  appIcon(s=36){return`<svg viewBox="0 0 1024 1024" style="width:${s}px;height:${s}px;flex-shrink:0" aria-hidden="true"><rect width="1024" height="1024" rx="230" fill="#060B42"/><path d="M648.32 212L591.5 479.32L310.15 563.33Z" fill="#00D1FF"/><path d="M375.68 812L432.5 544.68L713.85 460.67Z" fill="#D2456C"/></svg>`},
  /* nível do plano: 1, 2 ou 3 barras inclinadas */
  tier(n){return`<svg class="tier" viewBox="0 0 15 10" aria-hidden="true">${[0,1,2].map(i=>`<rect x="${i*5}" y="0" width="3" height="10" fill="currentColor"${i<n?"":` opacity=".28"`}/>`).join("")}</svg>`}
};
const AMI_P={
  mind:'<circle cx="11" cy="13" r="8"/><circle cx="11" cy="13" r="3.5"/><path d="M11 13L19.5 4.5M16 4h4v4"/>',
  focus:'<circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/>',
  ball:'<circle cx="12" cy="12" r="9"/><path d="M5.8 5.5C9.4 8.6 9.4 15.4 5.8 18.5M18.2 5.5C14.6 8.6 14.6 15.4 18.2 18.5"/>',
  trophy:'<path d="M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M7 6H4v2.5A3 3 0 0 0 7 11.5M17 6h3v2.5a3 3 0 0 1-3 3"/><path d="M12 14v4M8 20h8"/>',
  calendar:'<path d="M3 5h18v16H3zM3 10h18M8 2.5v4M16 2.5v4"/>',
  radar:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4.5"/><path d="M12 12l6.4-6.4"/>',
  bars:'<path d="M4 21h16M7 18v-7M12 18V5M17 18v-4"/>',
  trend:'<path d="M3 17l6-6 4 4 8-8M15 7h6v6"/>',
  medal:'<path d="M8 3l3 6M16 3l-3 6"/><circle cx="12" cy="15" r="6"/><path d="M12 12.5v5"/>',
  steth:'<path d="M5 3v5a7 7 0 0 0 14 0V3"/><path d="M12 15v2.5a4 4 0 0 0 4 4 3 3 0 0 0 3-3V17"/><circle cx="19" cy="14.5" r="2"/>',
  folder:'<path d="M3 5h6l2 2.5h10V20H3z"/>',
  users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20.5a6.5 6.5 0 0 1 13 0M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14.4a6.3 6.3 0 0 1 3.5 6.1"/>',
  flame:'<path d="M12 2.5c1.2 4.3 6.5 6.3 6.5 11.5a6.5 6.5 0 0 1-13 0c0-3.2 1.8-4.7 3-6.7.8 2 1.9 3.2 3.2 3.2 0-2.8-.9-5.2.3-8z"/>',
  sliders:'<path d="M3 6h9M16 6h5M3 12h3M10 12h11M3 18h11M18 18h3"/><circle cx="14" cy="6" r="2"/><circle cx="8" cy="12" r="2"/><circle cx="16" cy="18" r="2"/>',
  clipboard:'<path d="M5 4h14v17H5z"/><path d="M9 2.5h6v3.5H9zM8.5 11h7M8.5 15h7"/>',
  ai:'<path d="M11 4l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"/><path d="M19 2.5v4M17 4.5h4"/>',
  file:'<path d="M5.5 2.5h9l4 4v15h-13z"/><path d="M14.5 2.5v4h4M9 12h6M9 16h6"/>',
  gear:'<circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="7"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/>',
  bolt:'<path d="M15.5 2L13.3 12.3 4.5 15z" fill="currentColor" stroke="none"/><path d="M8.5 22L10.7 11.7 19.5 9z" fill="currentColor" stroke="none"/>',
  moon:'<path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.6 6.6 0 0 0 10.5 10.5z"/>',
  lock:'<path d="M5 11h14v10H5zM8 11V7.5a4 4 0 0 1 8 0V11"/>',
  mic:'<path d="M9 3h6v11H9zM5 11a7 7 0 0 0 14 0M12 18v3.5M8 21.5h8"/>',
  rec:'<rect x="7" y="7" width="10" height="10" fill="currentColor" stroke="none"/>',
  chat:'<path d="M4 5h16v11H9l-5 4z"/>',
  wind:'<path d="M3 8h10a2.5 2.5 0 1 0-2.5-2.5M3 16h13a2.5 2.5 0 1 1-2.5 2.5M3 12h16.5a2.5 2.5 0 1 0-2.5-2.5"/>',
  search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5L21 21"/>',
  leaf:'<path d="M5 19C5 11 11 5 19.5 4.5 19 13 13 19 5 19zM5 19l7.5-7.5"/>',
  video:'<path d="M3 6h13v12H3zM16 10l5-3v10l-5-3"/>',
  save:'<path d="M4 3h12.5L20 6.5V21H4z"/><path d="M8 3v5h7V3M8 13.5h8V21H8z"/>',
  notebook:'<path d="M5 3h14v18H5zM9 3v18M12.5 8h3M12.5 12h3"/>',
  note:'<path d="M4 20h4L19 9l-4-4L4 16zM13 7l4 4"/>',
  repeat:'<path d="M4 12V9.5A3.5 3.5 0 0 1 7.5 6H20M17 3l3 3-3 3M20 12v2.5a3.5 3.5 0 0 1-3.5 3.5H4M7 21l-3-3 3-3"/>',
  check:'<path d="M4 4h16v16H4z"/><path d="M8 12l3 3 5-6"/>',
  alert:'<path d="M12 3L2 20.5h20z"/><path d="M12 10v4.5M12 17v.5"/>',
  shield:'<path d="M12 2.5l8 3v6c0 5-3.4 8.3-8 10-4.6-1.7-8-5-8-10v-6z"/>',
  bell:'<path d="M6 16v-5a6 6 0 0 1 12 0v5l2 2.5H4z"/><path d="M10 21.5h4"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5.5l3.5 2"/>',
  download:'<path d="M12 3v12M7 10.5l5 5 5-5M4 21h16"/>',
  phone:'<path d="M7 2.5h10v19H7zM11 18.5h2"/>'
};
function AMI(n,s){const p=AMI_P[n]||AMI_P.focus;return`<svg class="ami" viewBox="0 0 24 24"${s?` style="width:${s}px;height:${s}px"`:""} fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="miter" aria-hidden="true">${p}</svg>`}
const AM_ART={frag:`<svg class="am-frag" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-220 -40 910.99 780"><path d="M403.8 7 L405.28 0 L478.87 0 L477.39 7 Z M264.79 19 L266.28 12 L363.18 12 L361.7 19 Z M398.7 31 L400.18 24 L478.74 24 L477.25 31 Z M216.07 55 L217.56 48 L338.95 48 L337.47 55 Z M393.59 55 L395.08 48 L486.29 48 L484.81 55 Z M250.87 79 L252.35 72 L311.12 72 L309.63 79 Z M388.49 79 L389.98 72 L440.01 72 L438.52 79 Z M385.94 91 L387.43 84 L458.62 84 L457.14 91 Z M222.53 127 L224.02 120 L268.99 120 L267.51 127 Z M153.12 163 L154.6 156 L230.59 156 L229.11 163 Z M120.18 175 L121.66 168 L220.55 168 L219.06 175 Z M167.42 187 L168.91 180 L212.19 180 L210.7 187 Z M360.44 211 L361.92 204 L471.88 204 L470.39 211 Z M80.88 235 L82.37 228 L166.78 228 L165.29 235 Z M355.33 235 L356.82 228 L391.95 228 L390.46 235 Z M81.02 247 L82.51 240 L152.87 240 L151.38 247 Z M-61.46 295 L-59.98 288 L105.3 288 L103.81 295 Z M-67.69 355 L-66.21 348 L51.52 348 L50.03 355 Z" fill="#00D1FF" opacity="0.32"/><path d="M164.07 331 L165.55 324 L337.8 324 L336.31 331 Z M17.21 391 L18.7 384 L138.34 384 L136.86 391 Z M-51.32 463 L-49.83 456 L121.75 456 L120.27 463 Z M28.44 487 L29.92 480 L112.96 480 L111.48 487 Z M283.29 499 L284.78 492 L331.34 492 L329.85 499 Z M260.19 523 L261.68 516 L287.43 516 L285.94 523 Z M248.64 535 L250.13 528 L355.75 528 L354.26 535 Z M44.93 559 L46.42 552 L102.25 552 L100.76 559 Z M-12.82 571 L-11.34 564 L98.68 564 L97.19 571 Z M24.7 607 L26.18 600 L90.61 600 L89.12 607 Z M167.79 619 L169.27 612 L251.82 612 L250.33 619 Z M-7.58 643 L-6.1 636 L82.17 636 L80.68 643 Z M-3.57 655 L-2.08 648 L81.58 648 L80.09 655 Z M44.65 667 L46.14 660 L90.5 660 L89.01 667 Z M135.58 667 L137.07 660 L159.32 660 L157.83 667 Z" fill="#D2456C" opacity="0.32"/><path d="M391.17 7 L392.66 0 L395.28 0 L393.8 7 Z M369.62 19 L371.11 12 L382.73 12 L381.25 19 Z M368.07 31 L369.56 24 L390.18 24 L388.7 31 Z M356.52 43 L358.01 36 L387.63 36 L386.14 43 Z M344.97 55 L346.46 48 L385.08 48 L383.59 55 Z M333.42 67 L334.91 60 L382.53 60 L381.04 67 Z M321.87 79 L323.36 72 L379.98 72 L378.49 79 Z M310.32 91 L311.8 84 L377.43 84 L375.94 91 Z M298.77 103 L300.25 96 L374.88 96 L373.39 103 Z M287.22 115 L288.7 108 L372.33 108 L370.84 115 Z M275.67 127 L277.15 120 L369.78 120 L368.29 127 Z M264.11 139 L265.6 132 L367.23 132 L365.74 139 Z M252.56 151 L254.05 144 L364.68 144 L363.19 151 Z M241.01 163 L242.5 156 L362.13 156 L360.64 163 Z M229.46 175 L230.95 168 L280.55 168 L279.06 175 Z M287.12 175 L288.61 168 L359.58 168 L358.09 175 Z M217.91 187 L219.4 180 L357.02 180 L355.54 187 Z M206.36 199 L207.85 192 L266.37 192 L264.88 199 Z M273.94 199 L275.43 192 L354.47 192 L352.99 199 Z M194.81 211 L196.3 204 L351.92 204 L350.44 211 Z M183.26 223 L184.75 216 L349.37 216 L347.88 223 Z M171.71 235 L173.2 228 L189.89 228 L188.41 235 Z M195.7 235 L197.19 228 L346.82 228 L345.33 235 Z M160.16 247 L161.65 240 L307.96 240 L306.47 247 Z M318.22 247 L319.71 240 L344.27 240 L342.78 247 Z M148.61 259 L150.1 252 L341.72 252 L340.23 259 Z M137.06 271 L138.54 264 L339.17 264 L337.68 271 Z M115.51 283 L116.99 276 L326.62 276 L325.13 283 Z M113.96 295 L115.44 288 L334.07 288 L332.58 295 Z M102.4 307 L103.89 300 L331.52 300 L330.03 307 Z M90.85 319 L92.34 312 L222.15 312 L220.66 319 Z M229.45 319 L230.94 312 L317.59 312 L316.1 319 Z M79.3 331 L80.79 324 L246.97 324 L245.48 331 Z M254.27 331 L255.76 324 L277.4 324 L275.91 331 Z M67.75 343 L69.24 336 L237.21 336 L235.73 343 Z M56.2 355 L57.69 348 L197.03 348 L195.54 355 Z M44.65 367 L46.14 360 L94.89 360 L93.41 367 Z M106.81 367 L108.29 360 L156.84 360 L155.35 367 Z M33.1 379 L34.59 372 L116.65 372 L115.16 379 Z M11.55 391 L13.04 384 L66.46 384 L64.98 391 Z M10 403 L11.49 396 L36.28 396 L34.79 403 Z" fill="#00D1FF"/><path d="M456.34 295 L457.83 288 L461.14 288 L459.65 295 Z M416.15 307 L417.64 300 L449.59 300 L448.1 307 Z M385.97 319 L387.45 312 L396.52 312 L395.03 319 Z M405.2 319 L406.69 312 L448.04 312 L446.55 319 Z M345.78 331 L347.27 324 L436.49 324 L435 331 Z M305.59 343 L307.08 336 L369.84 336 L368.35 343 Z M378.47 343 L379.96 336 L424.94 336 L423.45 343 Z M273.41 355 L274.89 348 L421.39 348 L419.9 355 Z M233.22 367 L234.71 360 L409.84 360 L408.35 367 Z M185.03 379 L186.52 372 L390.29 372 L388.8 379 Z M144.84 391 L146.33 384 L378.74 384 L377.25 391 Z M140.32 403 L141.81 396 L367.19 396 L365.7 403 Z M137.77 415 L139.26 408 L355.63 408 L354.15 415 Z M135.22 427 L136.71 420 L243.86 420 L242.37 427 Z M257.75 427 L259.24 420 L344.08 420 L342.6 427 Z M132.67 439 L134.16 432 L184.18 432 L182.69 439 Z M188.5 439 L189.98 432 L332.53 432 L331.05 439 Z M138.12 451 L139.61 444 L328.98 444 L327.49 451 Z M127.57 463 L129.06 456 L309.43 456 L307.94 463 Z M125.02 475 L126.51 468 L297.88 468 L296.39 475 Z M122.47 487 L123.96 480 L207.92 480 L206.43 487 Z M216.27 487 L217.76 480 L286.33 480 L284.84 487 Z M119.92 499 L121.41 492 L274.78 492 L273.29 499 Z M117.37 511 L118.85 504 L173.86 504 L172.37 511 Z M187.4 511 L188.89 504 L263.23 504 L261.74 511 Z M114.82 523 L116.3 516 L251.68 516 L250.19 523 Z M112.27 535 L113.75 528 L217.58 528 L216.09 535 Z M228.07 535 L229.56 528 L240.13 528 L238.64 535 Z M109.71 547 L111.2 540 L228.58 540 L227.09 547 Z M107.16 559 L108.65 552 L161.41 552 L159.92 559 Z M167.54 559 L169.03 552 L217.03 552 L215.54 559 Z M104.61 571 L106.1 564 L205.48 564 L203.99 571 Z M110.06 583 L111.55 576 L201.93 576 L200.44 583 Z M99.51 595 L101 588 L182.37 588 L180.89 595 Z M96.96 607 L98.45 600 L170.82 600 L169.34 607 Z M94.41 619 L95.9 612 L140.91 612 L139.43 619 Z M155.23 619 L156.72 612 L159.27 612 L157.79 619 Z M91.86 631 L93.35 624 L121.62 624 L120.13 631 Z M129.32 631 L130.81 624 L147.72 624 L146.23 631 Z M89.31 643 L90.8 636 L101.52 636 L100.03 643 Z M107.99 643 L109.48 636 L136.17 636 L134.68 643 Z M86.76 655 L88.25 648 L124.62 648 L123.13 655 Z M98.21 667 L99.7 660 L127.07 660 L125.58 667 Z M71.66 679 L73.14 672 L91.52 672 L90.03 679 Z M79.11 691 L80.59 684 L89.97 684 L88.48 691 Z" fill="#D2456C"/><path d="M260.55 16.5 L260.98 14.5 L454.38 14.5 L453.96 16.5 Z M296.19 28.5 L296.62 26.5 L437.04 26.5 L436.61 28.5 Z M80.15 184.5 L80.58 182.5 L447.8 182.5 L447.38 184.5 Z M-12.21 496.5 L-11.79 494.5 L361.81 494.5 L361.38 496.5 Z M29.56 568.5 L29.99 566.5 L254.45 566.5 L254.02 568.5 Z" fill="#FFFFFF" opacity="0.55"/><path d="M394.54 0 L328.25 311.87 L0 409.89 Z M76.45 700 L142.74 388.13 L470.99 290.11 Z" fill="none" stroke="#FFFFFF" stroke-width="1.6" opacity="0.7" transform="translate(-9 6)"/><path d="M394.54 0 L328.25 311.87 L0 409.89 Z M76.45 700 L142.74 388.13 L470.99 290.11 Z" fill="none" stroke="#D2456C" stroke-width="1.6" opacity="0.85" transform="translate(7 -5)"/></svg>`,speed:`<svg class="am-speed" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><path d="M760.47 14 L761.75 8 L960.11 8 L958.83 14 Z M439.96 30 L441.66 22 L715.97 22 L714.27 30 Z M858.38 30 L860.08 22 L1156.35 22 L1154.64 30 Z M581.96 46 L583.23 40 L843.31 40 L842.03 46 Z M624.7 60 L625.97 54 L726.77 54 L725.49 60 Z M761.11 60 L762.39 54 L1043.82 54 L1042.55 60 Z M804.33 76 L806.03 68 L964.64 68 L962.94 76 Z M813.49 108 L814.34 104 L1055.15 104 L1054.3 108 Z M642.14 140 L642.99 136 L835.54 136 L834.69 140 Z M532.3 160 L534 152 L802.95 152 L801.25 160 Z M655.96 170 L656.81 166 L762.88 166 L762.03 170 Z M574.88 214 L576.58 206 L865.91 206 L864.21 214 Z M473.84 244 L474.69 240 L641.87 240 L641.02 244 Z M260.44 262 L261.72 256 L467.15 256 L465.88 262 Z M413.21 308 L414.48 302 L540.56 302 L539.28 308 Z M965.05 308 L966.33 302 L1158.65 302 L1157.37 308 Z M633.78 322 L635.06 316 L861.5 316 L860.22 322 Z M435.74 334 L436.6 330 L672.56 330 L671.71 334 Z M722.86 334 L723.71 330 L1047.63 330 L1046.78 334 Z M466.53 360 L468.23 352 L547.22 352 L545.52 360 Z M589.95 360 L591.65 352 L663 352 L661.3 360 Z M702.42 360 L704.12 352 L873.35 352 L871.65 360 Z M365.73 378 L366.58 374 L686.63 374 L685.78 378 Z M338.15 402 L339.42 396 L646.92 396 L645.65 402 Z M1030.13 402 L1031.41 396 L1093.13 396 L1091.86 402 Z M403.84 448 L405.54 440 L556.07 440 L554.37 448 Z M124.26 482 L125.96 474 L291.98 474 L290.28 482 Z M325.47 482 L327.17 474 L566.93 474 L565.23 482 Z M278.71 514 L280.41 506 L529.52 506 L527.82 514 Z M100.35 526 L101.2 522 L402.7 522 L401.85 526 Z M250.52 544 L252.23 536 L378.19 536 L376.49 544 Z M428.39 544 L430.09 536 L647.93 536 L646.23 544 Z M-16.14 554 L-15.29 550 L264.82 550 L263.97 554 Z M201.89 576 L202.74 572 L358.09 572 L357.24 576 Z M400.08 576 L400.93 572 L701.27 572 L700.42 576 Z M188.93 592 L190.21 586 L266.07 586 L264.8 592 Z M148.21 612 L149.06 608 L354.47 608 L353.62 612 Z M8.67 634 L9.52 630 L266.01 630 L265.16 634 Z M-29.4 654 L-27.7 646 L265.64 646 L263.94 654 Z M278.8 654 L280.5 646 L415.99 646 L414.28 654 Z M691.11 664 L691.96 660 L846.98 660 L846.12 664 Z M110.96 704 L111.81 700 L333.64 700 L332.79 704 Z M377.69 704 L378.54 700 L672.52 700 L671.67 704 Z M258.86 726 L259.71 722 L377.13 722 L376.28 726 Z M-51.69 748 L-49.99 740 L135.44 740 L133.74 748 Z M-110.56 764 L-108.86 756 L79.99 756 L78.29 764 Z M215.24 782 L216.09 778 L377.85 778 L377 782 Z" fill="#00D1FF"/><path d="M590.99 14 L592.26 8 L710.59 8 L709.31 14 Z M1065.63 60 L1066.9 54 L1308.83 54 L1307.55 60 Z M1106.65 108 L1107.5 104 L1257.24 104 L1256.39 108 Z M535.99 124 L536.84 120 L698.06 120 L697.21 124 Z M292.83 196 L294.54 188 L411.8 188 L410.1 196 Z M902.79 214 L904.49 206 L1039 206 L1037.3 214 Z M582.63 276 L583.48 272 L697.92 272 L697.07 276 Z M537.69 294 L539.39 286 L616.53 286 L614.83 294 Z M586.68 308 L587.96 302 L915.39 302 L914.11 308 Z M382.38 322 L383.66 316 L612.34 316 L611.06 322 Z M721.84 378 L722.69 374 L915.5 374 L914.65 378 Z M422.06 526 L422.91 522 L696.67 522 L695.82 526 Z M363.66 664 L364.51 660 L677.44 660 L676.59 664 Z M131.79 764 L133.49 756 L249.06 756 L247.36 764 Z" fill="#D2456C"/><path d="M738.97 30 L740.67 22 L812.1 22 L810.4 30 Z M462.23 76 L463.93 68 L773.19 68 L771.49 76 Z M517.68 94 L518.53 90 L771.85 90 L771 94 Z M648.27 108 L649.12 104 L795.16 104 L794.31 108 Z M791.58 170 L792.43 166 L1095.2 166 L1094.35 170 Z M676.08 228 L677.36 222 L911.2 222 L909.92 228 Z M687.93 402 L689.2 396 L971.91 396 L970.63 402 Z M310.55 422 L311.4 418 L453.1 418 L452.25 422 Z M167.27 464 L168.54 458 L483.68 458 L482.4 464 Z M106 496 L106.85 492 L336.8 492 L335.95 496 Z M237.97 686 L238.82 682 L443.6 682 L442.75 686 Z" fill="#FFFFFF" opacity="0.6"/></svg>`};
const AM_VERSAO="3.0 · 16/10/2026";
Object.assign(AMI_P,{
  racket:'<ellipse cx="9.5" cy="8.5" rx="5" ry="6.6" transform="rotate(-45 9.5 8.5)"/><path d="M13.6 12.6L15 14l5.5 5.5"/><path d="M6.4 5.4l6.2 6.2M5 8.6l4.4 4.4M9.6 4l4.4 4.4M8.8 12.2l3.4-3.4M6.8 10.2l3.4-3.4" stroke-width="1.1"/>',
  wave:'<path d="M2 8c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2M2 13c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2M2 18c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2"/>',
  stopwatch:'<circle cx="12" cy="13.5" r="7.5"/><path d="M12 13.5V9.5M9.5 2.5h5M12 2.5V6M18.2 7.3L20 5.5"/>',
  bike:'<circle cx="5.5" cy="16.5" r="3.5"/><circle cx="18.5" cy="16.5" r="3.5"/><path d="M5.5 16.5L9 9.5h7l2.5 7M12.5 16.5L9 9.5M14.5 6.5h3M16 9.5l-1-3"/>',
  glove:'<path d="M8 15V7.5A4.5 4.5 0 0 1 12.5 3H15a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4z"/><path d="M8 9.5H6.8a2.3 2.3 0 0 0 0 4.6H8"/><path d="M8.5 15v6h8v-6M8.5 18h8"/>',
  flag:'<path d="M7 21V3l10 3.8L7 10.6"/><path d="M3.5 21h9"/>',
  user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  printer:'<path d="M6 9V3h12v6M6 17H3V9h18v8h-3"/><path d="M6 14h12v7H6z"/>'
});
const SPORT_BASE={grupo:"Outros",modo:"vd",evento:"Competição",eventos:"Competições",g:"f",comp:"Competição / Fase",compEx:"Ex: Final Regional",ritual:"Ritual Pré-Competição",estilo:"Estilo / Atuação",estiloEx:"Ex: Técnico, físico, estratégico...",placar:"Placar / Marca",placarEx:"Ex: 2 x 1",niveis:["Iniciante","Amador","Federado","Alto rendimento","Profissional"],icon:"medal",lesaoEx:"Ex: Entorse de tornozelo, tendinite..."};
const _JOGO={evento:"Jogo",eventos:"Jogos",g:"m"};
const _RAQ={..._JOGO,grupo:"Raquete",comp:"Torneio / Fase",ritual:"Ritual Pré-Saque",estilo:"Estilo de Jogo",placar:"Placar",icon:"racket"};
const _COL={..._JOGO,grupo:"Coletivos",comp:"Campeonato / Rodada",estilo:"Posição",placar:"Placar",icon:"ball"};
const _TEMPO={grupo:"Tempo e marca",modo:"pos",evento:"Prova",eventos:"Provas",g:"f",comp:"Competição / Prova",ritual:"Ritual de Largada",placar:"Tempo",icon:"stopwatch"};
const _LUTA={grupo:"Lutas",evento:"Luta",eventos:"Lutas",g:"f",comp:"Campeonato / Categoria",ritual:"Ritual Pré-Luta",placar:"Resultado da luta",icon:"glove",lesaoEx:"Ex: Lesão de ombro, luxação de dedos..."};
const SPORTS={
  tenis:{..._RAQ,nome:"Tênis",compEx:"Ex: Copa Primavera — Final",estiloEx:"Ex: Agressivo de fundo, saque e voleio...",placarEx:"Ex: 6/4 3/6 7/5",niveis:["Iniciante","6ª Classe","5ª Classe","4ª Classe","3ª Classe","2ª Classe","1ª Classe","Juvenil","Profissional"],lesaoEx:"Ex: Epicondilite lateral, tendinopatia no ombro..."},
  beach_tennis:{..._RAQ,nome:"Beach Tennis",compEx:"Ex: Etapa Open — Quartas",estilo:"Lado / Estilo",estiloEx:"Ex: Direita, ataque de rede...",placarEx:"Ex: 6/3 6/4",niveis:["Iniciante","Categoria D","Categoria C","Categoria B","Categoria A","Profissional"]},
  padel:{..._RAQ,nome:"Padel",compEx:"Ex: Open Regional — Semifinal",estilo:"Lado / Estilo",estiloEx:"Ex: Revés, jogo de defesa...",placarEx:"Ex: 6/4 7/6",niveis:["Iniciante","5ª Categoria","4ª Categoria","3ª Categoria","2ª Categoria","1ª Categoria","Profissional"]},
  tenis_mesa:{..._RAQ,nome:"Tênis de Mesa",compEx:"Ex: Estadual — Oitavas",estilo:"Estilo / Empunhadura",estiloEx:"Ex: Clássica, ofensivo perto da mesa...",placarEx:"Ex: 3 x 1"},
  badminton:{..._RAQ,nome:"Badminton",compEx:"Ex: Brasileiro — Simples",estiloEx:"Ex: Simples, duplas mistas...",placarEx:"Ex: 21/18 21/15"},
  squash:{..._RAQ,nome:"Squash",compEx:"Ex: Circuito Paulista — Final",placarEx:"Ex: 3 x 1"},
  futebol:{..._COL,nome:"Futebol",modo:"ved",compEx:"Ex: Paulista Sub-17 — 8ª rodada",ritual:"Ritual de Bola Parada",estiloEx:"Ex: Volante, lateral-direito...",niveis:["Sub-11","Sub-13","Sub-15","Sub-17","Sub-20","Amador","Profissional"],lesaoEx:"Ex: Entorse de tornozelo, lesão muscular na coxa..."},
  futsal:{..._COL,nome:"Futsal",modo:"ved",compEx:"Ex: Liga Futsal Sub-15 — Final",ritual:"Ritual de Bola Parada",estiloEx:"Ex: Fixo, ala, pivô...",placarEx:"Ex: 4 x 3",niveis:["Sub-13","Sub-15","Sub-17","Sub-20","Adulto","Profissional"]},
  volei:{..._COL,nome:"Vôlei",comp:"Campeonato / Fase",compEx:"Ex: Superliga — Semifinal",ritual:"Ritual Pré-Saque",estiloEx:"Ex: Levantadora, ponteira, líbero...",placarEx:"Ex: 3 x 1 (sets)",niveis:["Sub-15","Sub-17","Sub-19","Sub-21","Adulto","Profissional"],lesaoEx:"Ex: Tendinite patelar, entorse de tornozelo..."},
  volei_praia:{..._COL,nome:"Vôlei de Praia",comp:"Torneio / Fase",compEx:"Ex: Circuito Brasileiro — Quartas",ritual:"Ritual Pré-Saque",estiloEx:"Ex: Bloqueadora, defensora...",placarEx:"Ex: 2 x 0 (21/17, 21/19)"},
  basquete:{..._COL,nome:"Basquete",comp:"Campeonato / Fase",compEx:"Ex: Estadual Sub-19 — Final",ritual:"Rotina de Lance Livre",estiloEx:"Ex: Armador, ala-pivô...",placarEx:"Ex: 78 x 72",niveis:["Sub-13","Sub-15","Sub-17","Sub-19","Adulto","Profissional"]},
  handebol:{..._COL,nome:"Handebol",modo:"ved",comp:"Campeonato / Fase",compEx:"Ex: Liga Nacional — 5ª rodada",ritual:"Ritual de Tiro de 7 Metros",estiloEx:"Ex: Armador central, ponta, pivô...",placarEx:"Ex: 28 x 25"},
  rugbi:{..._COL,nome:"Rúgbi",modo:"ved",compEx:"Ex: Super 16 — 3ª rodada",ritual:"Rotina de Chute a Gol",estiloEx:"Ex: Abertura, pilar, ponta...",placarEx:"Ex: 24 x 17"},
  natacao:{..._TEMPO,nome:"Natação",compEx:"Ex: Troféu Brasil — 100m livre",ritual:"Ritual no Bloco de Partida",estilo:"Provas / Nado",estiloEx:"Ex: 100m e 200m livre, 100m borboleta...",placarEx:"Ex: 58.42",niveis:["Mirim","Petiz","Infantil","Juvenil","Júnior","Sênior","Master"],icon:"wave",lesaoEx:"Ex: Ombro de nadador, dor lombar..."},
  atletismo:{..._TEMPO,nome:"Atletismo",compEx:"Ex: Estadual Sub-20 — 400m",estilo:"Provas",estiloEx:"Ex: 100m rasos, salto em distância...",placar:"Marca",placarEx:"Ex: 10.85 s ou 7,12 m",niveis:["Sub-16","Sub-18","Sub-20","Sub-23","Adulto","Master"],lesaoEx:"Ex: Lesão de posterior de coxa, canelite..."},
  corrida:{..._TEMPO,nome:"Corrida de Rua",comp:"Prova / Distância",compEx:"Ex: Meia Maratona do Rio — 21 km",estilo:"Distâncias",estiloEx:"Ex: 10 km, meia maratona...",placarEx:"Ex: 41:35",niveis:["Iniciante","Intermediário","Avançado","Elite","Master"],lesaoEx:"Ex: Fascite plantar, trato iliotibial..."},
  triatlo:{..._TEMPO,nome:"Triatlo",comp:"Prova / Distância",compEx:"Ex: Ironman 70.3 — Rio",estilo:"Distâncias",estiloEx:"Ex: Sprint, olímpico, 70.3...",placarEx:"Ex: 4:52:10",niveis:["Iniciante","Age group","Elite","Profissional"]},
  ciclismo:{..._TEMPO,nome:"Ciclismo",comp:"Prova / Etapa",compEx:"Ex: Copa Brasil de MTB — XCO",estilo:"Especialidade",estiloEx:"Ex: Estrada, MTB, contrarrelógio...",placarEx:"Ex: 1:12:08",niveis:["Iniciante","Amador","Sub-23","Elite","Master","Profissional"],icon:"bike"},
  remo:{..._TEMPO,nome:"Remo e Canoagem",compEx:"Ex: Brasileiro — Single skiff",estilo:"Barco / Posição",estiloEx:"Ex: Single skiff, K1 500m...",placarEx:"Ex: 7:02.3",icon:"wave"},
  ginastica:{..._TEMPO,nome:"Ginástica",comp:"Competição / Aparelho",compEx:"Ex: Brasileiro Juvenil — Solo",ritual:"Ritual Pré-Apresentação",estilo:"Aparelhos",estiloEx:"Ex: Artística — solo e trave...",placar:"Nota",placarEx:"Ex: 13.450",niveis:["Pré-infantil","Infantil","Juvenil","Adulto"],icon:"medal"},
  judo:{..._LUTA,nome:"Judô",compEx:"Ex: Paulista Sub-18 — -73 kg",estilo:"Categoria de Peso",estiloEx:"Ex: Meio-leve (-73 kg)",placarEx:"Ex: Ippon aos 2:10",niveis:["Faixa branca a laranja","Faixa verde a marrom","Faixa preta","Sub-18","Sub-21","Sênior"]},
  jiu_jitsu:{..._LUTA,nome:"Jiu-Jítsu",compEx:"Ex: Brasileiro — Roxa leve",estilo:"Faixa / Peso",estiloEx:"Ex: Faixa roxa, leve (-76 kg)",placarEx:"Ex: Finalização (armlock)",niveis:["Faixa branca","Faixa azul","Faixa roxa","Faixa marrom","Faixa preta"]},
  boxe:{..._LUTA,nome:"Boxe",compEx:"Ex: Forja dos Campeões — Final",estilo:"Categoria de Peso",estiloEx:"Ex: Peso-leve (60 kg)",placarEx:"Ex: Decisão unânime",niveis:["Amador","Elite","Profissional"]},
  mma:{..._LUTA,nome:"MMA",compEx:"Ex: Evento regional — Card principal",estilo:"Categoria de Peso",estiloEx:"Ex: Peso-pena (66 kg)",placarEx:"Ex: Nocaute no 2º round",niveis:["Amador","Profissional"]},
  karate:{..._LUTA,nome:"Karatê",compEx:"Ex: Brasileiro — Kumite -67 kg",estilo:"Modalidade / Peso",estiloEx:"Ex: Kumite -67 kg, kata...",placarEx:"Ex: 5 x 2"},
  taekwondo:{..._LUTA,nome:"Taekwondo",compEx:"Ex: Grand Prix — -68 kg",estilo:"Categoria de Peso",estiloEx:"Ex: -68 kg",placarEx:"Ex: 2 x 1 (rounds)"},
  surfe:{..._TEMPO,grupo:"Outros",nome:"Surfe",evento:"Bateria",eventos:"Baterias",comp:"Etapa / Fase",compEx:"Ex: Etapa Saquarema — Round 2",ritual:"Ritual Pré-Bateria",estilo:"Base / Estilo",estiloEx:"Ex: Regular, manobras progressivas...",placar:"Nota",placarEx:"Ex: 15.83",niveis:["Sub-16","Sub-18","Open","Profissional"],icon:"wave"},
  skate:{..._TEMPO,grupo:"Outros",nome:"Skate",comp:"Campeonato / Fase",compEx:"Ex: Circuito Nacional — Final Street",ritual:"Ritual Pré-Volta",estilo:"Modalidade",estiloEx:"Ex: Street, park...",placar:"Nota",placarEx:"Ex: 86.40",niveis:["Amador","Sub-elite","Profissional"],icon:"medal"},
  golfe:{..._TEMPO,grupo:"Outros",nome:"Golfe",evento:"Rodada",eventos:"Rodadas",comp:"Torneio / Rodada",compEx:"Ex: Aberto do Brasil — 3ª rodada",ritual:"Rotina Pré-Tacada",estilo:"Handicap / Estilo",estiloEx:"Ex: Handicap 4, jogo curto forte...",placar:"Score",placarEx:"Ex: 71 (-1)",niveis:["Iniciante","Handicap 20+","Handicap 10–19","Handicap 0–9","Profissional"],icon:"flag"},
  xadrez:{grupo:"Outros",nome:"Xadrez",modo:"ved",evento:"Partida",eventos:"Partidas",g:"f",comp:"Torneio / Rodada",compEx:"Ex: Aberto de SP — 5ª rodada",ritual:"Ritual Pré-Partida",estilo:"Rating / Estilo",estiloEx:"Ex: Rating 1850, jogo posicional...",placar:"Detalhes",placarEx:"Ex: Brancas, 41 lances",niveis:["Iniciante","Rating até 1600","1600–2000","2000+","Titulado"],icon:"mind"},
  esports:{grupo:"Outros",nome:"eSports",evento:"Partida",eventos:"Partidas",g:"f",comp:"Campeonato / Fase",compEx:"Ex: Liga Nacional — Semifinal",ritual:"Ritual Pré-Partida",estilo:"Jogo / Função",estiloEx:"Ex: Valorant — duelista",placar:"Placar",placarEx:"Ex: 2 x 1 (mapas)",niveis:["Amador","Semiprofissional","Profissional"],icon:"focus"}
};
const SPORT_GRUPOS=["Raquete","Coletivos","Tempo e marca","Lutas","Outros"];
const _norm=s=>String(s||"").normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim();
const SPORT_ALIAS={"tenis de campo":"tenis","ping pong":"tenis_mesa","pingue pongue":"tenis_mesa","beach tenis":"beach_tennis","voleibol de praia":"volei_praia","voleibol":"volei","volleyball":"volei","basquetebol":"basquete","basketball":"basquete","basquete 3x3":"basquete","handball":"handebol","soccer":"futebol","futebol de campo":"futebol","futebol society":"futebol","rugby":"rugbi","maratona":"corrida","corrida":"corrida","triathlon":"triatlo","mountain bike":"ciclismo","mtb":"ciclismo","bjj":"jiu_jitsu","jiu jitsu":"jiu_jitsu","jiujitsu":"jiu_jitsu","boxing":"boxe","surf":"surfe","skateboard":"skate","golf":"golfe","e sports":"esports","esport":"esports","canoagem":"remo","remo":"remo"};
const _SPORT_TERMS=(()=>{const t=[];Object.entries(SPORTS).forEach(([k,s])=>{t.push([_norm(s.nome),k]);t.push([_norm(k.replace(/_/g," ")),k])});Object.entries(SPORT_ALIAS).forEach(([a,k])=>t.push([_norm(a),k]));return t.sort((a,b)=>b[0].length-a[0].length)})();
function sportKey(txt){const n=_norm(txt);if(!n)return"";const ex=_SPORT_TERMS.find(([a])=>a===n);if(ex)return ex[1];const pad=" "+n+" ";const hit=_SPORT_TERMS.find(([a])=>pad.includes(" "+a+" "));return hit?hit[1]:""}
const sportByKey=k=>SPORTS[k]?{...SPORT_BASE,...SPORTS[k],key:k}:{...SPORT_BASE,nome:"",key:""};
function sportOf(txt){const k=sportKey(txt);if(k)return sportByKey(k);const nome=String(txt||"").trim();return{...SPORT_BASE,nome,key:nome?"outro":""}}
const SP=()=>sportOf(APP.esporte);
const nenhumEvento=sp=>sp.g==="m"?`Nenhum ${sp.evento.toLowerCase()} registrado`:`Nenhuma ${sp.evento.toLowerCase()} registrada`;
const ultimosEv=sp=>`${sp.g==="m"?"Últimos":"Últimas"} ${sp.eventos}`;
const plural=(n,s,p)=>`${n} ${n===1?s:p}`;
const registradosEv=sp=>`${sp.eventos} ${sp.g==="m"?"registrados":"registradas"}`;
function sportOptions(sel,vazio="Selecione a modalidade...",outro=true){return`<option value="">${vazio}</option>${SPORT_GRUPOS.map(g=>`<optgroup label="${g}">${Object.entries(SPORTS).filter(([,s])=>s.grupo===g).map(([k,s])=>`<option value="${k}"${sel===k?" selected":""}>${s.nome}</option>`).join("")}</optgroup>`).join("")}${outro?`<option value="outro"${sel==="outro"?" selected":""}>Outra modalidade</option>`:""}`}
function sportChip(txt,cls=""){const sp=sportOf(txt);return sp.nome?`<span class="sport-chip${cls?" "+cls:""}">${AMI(sp.icon)}${esc(sp.nome)}</span>`:""}
function esc(s){return String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
async function carregarEsporte(uid,u){const pr=await FB.getDoc(`prontuarios/${uid}`).catch(()=>null);if(pr?.perfil?.modalidade)return pr.perfil.modalidade;if(u&&u.esporte)return u.esporte;if(u===undefined){const d=await FB.getDoc(`usuarios/${uid}`).catch(()=>null);return d?.esporte||""}return""}
const TM_TIPOS={visualizacao:"Visualização",respiracao:"Respiração",autoconversa:"Autoconversa",atencao:"Atenção",ativacao:"Ativação",mindfulness:"Mindfulness"};
const RES={
  win:p=>p.resultado==="Vitória"||+p.colocacao===1,
  loss:p=>p.resultado==="Derrota",
  draw:p=>p.resultado==="Empate",
  podio:p=>+p.colocacao>=1&&+p.colocacao<=3,
  label:p=>+p.colocacao>0?`${+p.colocacao}º lugar`:(p.resultado||"—"),
  cor:p=>RES.win(p)?"#4ade80":RES.loss(p)?"#EC7896":RES.podio(p)?"#00D1FF":"#9AA3CF",
  det:p=>[p.placar,p.marca,p.adversario?"vs "+p.adversario:""].filter(Boolean).join(" · "),
  data:p=>p.data||p.dataRegistro||""
};
function statsComp(lista,sp){
  const t=lista.length,w=lista.filter(RES.win).length,l=lista.filter(RES.loss).length,d=lista.filter(RES.draw).length,pd=lista.filter(RES.podio).length;
  const nums=a=>a.map(x=>+x).filter(n=>n>0),avg=a=>a.length?a.reduce((s,v)=>s+v,0)/a.length:null;
  const coloc=nums(lista.map(p=>p.colocacao)),confs=nums(lista.map(p=>p.confianca));
  const ruim=p=>RES.loss(p)||(+p.colocacao>3);
  let aprov=null;if(t)aprov=sp.modo==="ved"?Math.round((3*w+d)/(3*t)*100):sp.modo==="pos"?Math.round(pd/t*100):Math.round(w/t*100);
  return{t,w,l,d,pd,aprov,melhor:coloc.length?Math.min(...coloc):null,conf:avg(confs),pico:confs.length?Math.max(...confs):null,cw:avg(nums(lista.filter(RES.win).map(p=>p.confianca))),cl:avg(nums(lista.filter(ruim).map(p=>p.confianca)))};
}
function statTiles(st,sp){
  const ap=st.aprov==null?"—":st.aprov+"%";
  if(sp.modo==="pos")return[[sp.eventos,st.t,"#EEF1F8"],["Pódios",st.pd,"#00D1FF"],["Vitórias",st.w,"#4ade80"],["Melhor",st.melhor?st.melhor+"º":"—","#fb923c"]];
  if(sp.modo==="ved")return[["Vitórias",st.w,"#4ade80"],["Empates",st.d,"#B4BBE0"],["Derrotas",st.l,"#EC7896"],["Aproveit.",ap,"var(--y)"]];
  return[["Vitórias",st.w,"#4ade80"],["Derrotas",st.l,"#EC7896"],["Aproveit.",ap,"var(--y)"]];
}
const ordDesc=(arr,f)=>[...(arr||[])].sort((a,b)=>String(f(b)||"").localeCompare(String(f(a)||"")));
const PLANS={starter:{level:1,label:"Starter",color:"#B4BBE0",emoji:AM.tier(1)},pro:{level:2,label:"Pro",color:"#00D1FF",emoji:AM.tier(2)},elite:{level:3,label:"Elite",color:"#EC7896",emoji:AM.tier(3)}};
const TIPO_COR={treino:"#00D1FF",fisico:"#60a5fa",mental:"#818cf8",jogo:"#f59e0b",sessao:"#4ade80",descanso:"#6A73A6"};
const TIPO_NM={treino:"Treino",fisico:"Físico",mental:"Mental",jogo:"Competição",sessao:"Sessão AT",descanso:"Descanso"};
const el=(tag,cls,html)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(html!==undefined)e.innerHTML=html;return e};
const $=id=>document.getElementById(id);
const today=()=>new Date().toISOString().split("T")[0];
const fmtDate=d=>new Date(d).toLocaleString("pt-BR",{day:"2-digit",month:"short",hour:"2-digit",minute:"2-digit"});
const fk=d=>d instanceof Date?d.toISOString().split("T")[0]:d;
let APP={user:null,plan:"starter",cargo:"paciente",esporte:""};
function setRng(inp,v){const pct=Math.round((+v-(+inp.min||1))/((+inp.max||10)-(+inp.min||1))*100);inp.style.setProperty("--val",pct+"%");inp.value=v}
function magOn(e){const c=e.currentTarget,r=c.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform=`perspective(600px) rotateY(${x*14}deg) rotateX(${-y*14}deg) scale(1.03)`;c.style.setProperty("--mx",(e.clientX-r.left)+"px");c.style.setProperty("--my",(e.clientY-r.top)+"px")}
function magOff(e){e.currentTarget.style.transform=""}
function ripple(e){const b=e.currentTarget,r=b.getBoundingClientRect();const rip=el("span");rip.className="ripple";const s=Math.max(r.width,r.height);rip.style.cssText=`width:${s}px;height:${s}px;left:${e.clientX-r.left-s/2}px;top:${e.clientY-r.top-s/2}px;animation:rippleOut .55s cubic-bezier(.4,0,.2,1)`;b.appendChild(rip);setTimeout(()=>rip.remove(),600)}
function applyMag(e){e.classList.add('mag');e.addEventListener('mousemove',magOn);e.addEventListener('mouseleave',magOff)}
function animSkillBars(container){container.querySelectorAll('.sbar-fill').forEach((el2,i)=>{const w=el2.style.width;el2.style.width='0';el2.style.transition='width 1.4s cubic-bezier(.19,1,.22,1) '+(i*120)+'ms';const obs=new IntersectionObserver(entries=>{if(entries[0].isIntersecting){setTimeout(()=>{el2.style.width=w},60);obs.disconnect()}},{threshold:.15});obs.observe(el2)})}
function Counter(container,target,suffix,label,delay=0,color='var(--y)'){
  const div=document.createElement('div');div.className='counter-card card-shimmer';
  div.innerHTML=`<div class="cprog" id="cprog-${target}-${delay}"></div><strong style="font-family:'JetBrains Mono',monospace;font-size:34px;font-weight:500;color:${color};line-height:1;display:block;margin-bottom:4px" id="cv-${target}-${delay}">0${suffix}</strong><span class="slbl" style="font-size:9px;letter-spacing:.22em">${label}</span>`;
  div.addEventListener('mousemove',magOn);div.addEventListener('mouseleave',magOff);container.appendChild(div);
  let done=false;
  const obs=new IntersectionObserver(entries=>{if(entries.some(en=>en.isIntersecting)&&!done){done=true;const prog=div.querySelector(`#cprog-${target}-${delay}`),vEl=div.querySelector(`#cv-${target}-${delay}`);setTimeout(()=>{if(prog)prog.classList.add('go');let start=null;const step=ts=>{if(!start)start=ts;const p=Math.min((ts-start)/1500,1),e=1-Math.pow(1-p,4);vEl.textContent=Math.floor(e*target)+suffix;if(p<1)requestAnimationFrame(step);else vEl.textContent=target+suffix};requestAnimationFrame(step)},delay)}},{threshold:.3});obs.observe(div)
}
function staffLockedBlock(container,featureKey,minPlanLabel){
  const wrap=el("div","staff-locked-section");
  wrap.style.cssText="background:rgba(20,27,107,.6);border:1px solid rgba(255,255,255,.06);border-radius:3px;clip-path:var(--cut);padding:60px 20px;min-height:260px;position:relative";
  wrap.innerHTML=`<div style="opacity:.15;text-align:center"><p style="font-family:'Archivo',sans-serif;font-stretch:125%;font-style:italic;font-weight:900;font-size:28px;color:var(--txt);text-transform:uppercase">${STAFF_FEATURES_DEFAULT[featureKey]?.label||featureKey}</p></div><div class="staff-locked-badge"><div style="width:56px;height:56px;border-radius:50%;background:rgba(17,24,98,.97);border:2px solid rgba(255,255,255,.15);display:flex;align-items:center;justify-content:center;font-size:24px;box-shadow:0 8px 32px rgba(0,0,0,.7)">${AMI("lock")}</div><div style="text-align:center"><p style="font-family:'Archivo',sans-serif;font-stretch:110%;font-style:italic;font-weight:900;font-size:14px;letter-spacing:.12em;text-transform:uppercase;color:#EEF1F8;margin:0 0 6px">Funcionalidade Bloqueada</p><p style="font-size:12px;color:var(--dim);margin:0 0 10px">Requer plano <strong style="color:${PLANS[minPlanLabel]?.color||'#00D1FF'}">${PLANS[minPlanLabel]?.label||'Pro'}</strong> ou superior</p><span class="plan-chip ${minPlanLabel}" style="font-size:11px">${PLANS[minPlanLabel]?.emoji||AM.tier(2)} ${PLANS[minPlanLabel]?.label||'Pro'}+</span></div><p style="font-size:11px;color:#838CC0;margin-top:4px">Contacte o administrador para upgrade</p></div>`;
  container.appendChild(wrap);
}
function openProModal(id){document.getElementById(id).classList.add('active')}
function closeProModal(id){document.getElementById(id).classList.remove('active')}
function phdr(c,sub,title,extra=""){const h=el("div");h.style.cssText="border-bottom:1px solid rgba(255,255,255,.06);padding-bottom:26px;margin-bottom:28px";h.innerHTML=`<div style="display:flex;align-items:center;gap:10px;margin-bottom:8px"><div class="section-accent"></div><p class="slbl" style="letter-spacing:.25em">${sub}</p></div><h2 class="ptitle" style="font-size:40px;margin-bottom:4px">${title}</h2>${extra}`;h.classList.add('a-up');c.appendChild(h)}
function _loading(txt='Carregando...'){return`<div style="display:flex;align-items:center;gap:10px;padding:16px 0"><div class="dot-pulse" style="width:7px;height:7px;border-radius:50%;background:var(--brand-primary)"></div><span style="font-size:13px;color:var(--text-muted)">${txt}</span></div>`}
function modProtocolos(c){
  phdr(c,"Gestão de protocolos","Protocolos de Treino");
  let protos=[],editId=null,execId=null,form={nome:"",descricao:"",passos:[]},salv=false;
  const wrap=el("div");wrap.style.cssText="display:grid;grid-template-columns:320px 1fr;gap:20px;align-items:start";c.appendChild(wrap);
  const list=el("div","glass");list.style.cssText="border-radius:3px;clip-path:var(--cut);padding:22px;max-height:700px;display:flex;flex-direction:column";
  const detail=el("div","glass");detail.style.cssText="border-radius:3px;clip-path:var(--cut);padding:28px;min-height:400px";
  wrap.appendChild(list);wrap.appendChild(detail);
  FB.getDocs("protocolos").then(pp=>{protos=pp||[];drawList();drawForm()}).catch(()=>{drawList();drawForm()});
  function drawList(){list.innerHTML=`<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;flex-shrink:0"><h3 style="font-family:'Archivo',sans-serif;font-stretch:112%;font-style:italic;font-weight:900;font-size:15px;text-transform:uppercase;color:#EEF1F8;margin:0">Protocolos</h3><button id="proto-new" style="font-family:'JetBrains Mono',monospace;font-weight:700;font-size:10px;letter-spacing:.15em;text-transform:uppercase;padding:7px 12px;border-radius:2px;cursor:pointer;border:1px solid rgba(0,209,255,.3);background:rgba(0,209,255,.07);color:var(--y)">+ Novo</button></div><div class="cs" style="flex:1;overflow-y:auto;display:flex;flex-direction:column;gap:9px">${protos.length===0?`<p style="text-align:center;color:var(--muted);font-size:12px;margin-top:20px">Nenhum protocolo criado.</p>`:""}${protos.map(p=>`<div data-pid="${esc(p._id)}" style="background:${editId===p._id?"rgba(0,209,255,.08)":"rgba(0,0,0,.3)"};border:1px solid ${editId===p._id?"rgba(0,209,255,.35)":"rgba(255,255,255,.06)"};border-radius:3px;padding:13px 14px;cursor:pointer;transition:.15s"><div style="display:flex;justify-content:space-between;align-items:flex-start;gap:6px"><div style="flex:1;min-width:0"><p style="font-family:'Archivo',sans-serif;font-stretch:110%;font-style:italic;font-weight:800;font-size:14px;color:#EEF1F8;text-transform:uppercase;margin:0 0 3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${esc(p.nome)}</p><p style="font-size:11px;color:var(--dim);margin:0">${(p.passos||[]).length} passo${(p.passos||[]).length!==1?"s":""}</p></div><div style="display:flex;gap:4px;flex-shrink:0"><button data-exec="${esc(p._id)}" title="Executar" style="background:rgba(74,222,128,.1);border:1px solid rgba(74,222,128,.25);border-radius:2px;padding:6px;cursor:pointer;color:#4ade80">▶</button><button data-del-proto="${esc(p._id)}" style="background:rgba(210,69,108,.08);border:1px solid rgba(210,69,108,.2);border-radius:2px;padding:6px;cursor:pointer;color:#EC7896;display:flex"><svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button></div></div></div>`).join("")}</div>`;
    list.querySelector("#proto-new").onclick=()=>{editId=null;form={nome:"",descricao:"",passos:[]};drawList();drawForm()};
    list.querySelectorAll("[data-pid]").forEach(d=>d.onclick=e=>{if(e.target.closest("[data-exec]")||e.target.closest("[data-del-proto]"))return;const p=protos.find(x=>x._id===d.dataset.pid);if(!p)return;editId=p._id;form={nome:p.nome||"",descricao:p.descricao||"",passos:[...(p.passos||[])]};drawList();drawForm()});
    list.querySelectorAll("[data-exec]").forEach(b=>b.onclick=e=>{e.stopPropagation();execId=b.dataset.exec;drawDetail()});
    list.querySelectorAll("[data-del-proto]").forEach(b=>b.onclick=async e=>{e.stopPropagation();if(!await confirmar("Apagar este protocolo?",{ok:"Apagar",perigo:true}))return;await FB.deleteDoc(`protocolos/${b.dataset.delProto}`).catch(()=>{});protos=protos.filter(p=>p._id!==b.dataset.delProto);if(editId===b.dataset.delProto){editId=null;form={nome:"",descricao:"",passos:[]}}drawList();drawForm()});
  }
  function drawForm(){if(execId){drawDetail();return}detail.innerHTML=`<h3 style="font-family:'Archivo',sans-serif;font-stretch:125%;font-style:italic;font-weight:900;font-size:18px;text-transform:uppercase;color:#EEF1F8;margin:0 0 22px">${editId?"Editar Protocolo":"Novo Protocolo"}</h3><div style="display:flex;flex-direction:column;gap:16px"><div><label class="slbl" style="display:block;margin-bottom:7px">Nome do Protocolo</label><input type="text" id="pf-nome" value="${esc(form.nome)}" maxlength="80" placeholder="Ex: Rotina pré-competição" style="font-size:13px"></div><div><label class="slbl" style="display:block;margin-bottom:7px">Descrição</label><textarea id="pf-desc" class="cs" style="height:70px;font-size:13px;resize:none;display:block" placeholder="Objetivo do protocolo...">${esc(form.descricao)}</textarea></div><div><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px"><label class="slbl">Passos (arraste para reordenar)</label><button id="add-passo" style="font-family:'JetBrains Mono',monospace;font-weight:700;font-size:10px;letter-spacing:.15em;text-transform:uppercase;padding:5px 12px;border-radius:2px;cursor:pointer;border:1px solid rgba(0,209,255,.3);background:rgba(0,209,255,.07);color:var(--y)">+ Passo</button></div><div id="passos-list" style="display:flex;flex-direction:column;gap:8px">${form.passos.map((p,i)=>`<div class="passo-row" draggable="true" data-idx="${i}"><span class="drag-handle">⋮⋮</span><input type="text" value="${esc(p.texto||"")}" maxlength="200" data-ptext="${i}" placeholder="Descreva o passo..." style="flex:1;font-size:13px"><input type="number" min="0" value="${esc(p.duracao??"")}" data-pdur="${i}" placeholder="seg" style="width:65px;font-size:12px;font-family:'JetBrains Mono',monospace"><button data-del-passo="${i}" style="background:rgba(210,69,108,.08);border:1px solid rgba(210,69,108,.2);border-radius:2px;padding:6px;cursor:pointer;color:#EC7896;display:flex;flex-shrink:0"><svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button></div>`).join("")}</div></div><div style="display:flex;justify-content:flex-end;gap:10px;padding-top:8px">${editId?`<button class="btn-danger" id="cancel-edit">Cancelar</button>`:""}<button class="btn-y" id="pf-save" style="width:auto;padding:12px 28px" ${salv?"disabled":""}>${salv?"Salvando...":editId?"Atualizar":"Criar Protocolo"}</button></div></div>`;
    detail.querySelector("#pf-nome").oninput=e=>form.nome=e.target.value;detail.querySelector("#pf-desc").oninput=e=>form.descricao=e.target.value;detail.querySelector("#add-passo").onclick=()=>{form.passos.push({texto:"",duracao:30});drawForm()};if(detail.querySelector("#cancel-edit")){detail.querySelector("#cancel-edit").onclick=()=>{editId=null;form={nome:"",descricao:"",passos:[]};drawList();drawForm()}};
    detail.querySelectorAll("[data-ptext]").forEach(inp=>inp.oninput=e=>form.passos[+e.target.dataset.ptext].texto=e.target.value);detail.querySelectorAll("[data-pdur]").forEach(inp=>inp.oninput=e=>form.passos[+e.target.dataset.pdur].duracao=+e.target.value||0);detail.querySelectorAll("[data-del-passo]").forEach(b=>b.onclick=()=>{form.passos.splice(+b.dataset.delPasso,1);drawForm()});
    const pl=detail.querySelector("#passos-list");let dragging=null;pl.querySelectorAll(".passo-row").forEach(row=>{row.addEventListener("dragstart",()=>{dragging=row;row.classList.add("dragging")});row.addEventListener("dragend",()=>{dragging=null;row.classList.remove("dragging")});row.addEventListener("dragover",e=>{e.preventDefault();if(!dragging||dragging===row)return;const rect=row.getBoundingClientRect();if(e.clientY<rect.top+rect.height/2)pl.insertBefore(dragging,row);else pl.insertBefore(dragging,row.nextSibling)});row.addEventListener("drop",()=>{form.passos=[...pl.querySelectorAll(".passo-row")].map(r=>{const i=+r.dataset.idx;return form.passos[i]||{texto:"",duracao:30}});drawForm()})});
    detail.querySelector("#pf-save").onclick=async()=>{if(!form.nome.trim())return avisar("Dê um nome ao protocolo.","erro");salv=true;drawForm();const dados={nome:limitar(form.nome,80),descricao:limitar(form.descricao,1000),passos:form.passos.slice(0,50).map(p=>({texto:limitar(p.texto||"",200),duracao:Math.max(0,Math.min(3600,+p.duracao||0))})),atualizadoEm:new Date().toISOString()};if(editId){await FB.setDoc(`protocolos/${editId}`,dados).catch(ex=>avisar("Não foi possível salvar o protocolo.","erro"));protos=protos.map(p=>p._id===editId?{...p,...dados}:p)}else{const r=await FB.addDoc("protocolos",dados).catch(()=>null);if(r)protos.push({_id:r.id,...dados})}salv=false;drawList();drawForm()};
  }
  function drawDetail(){const proto=protos.find(p=>p._id===execId);if(!proto){execId=null;drawForm();return}let step=0,running=false,timer=null,elapsed=0,micOn=false,rec=null,transcript="";const passos=proto.passos||[];
    detail.innerHTML=`<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px"><div><h3 style="font-family:'Archivo',sans-serif;font-stretch:125%;font-style:italic;font-weight:900;font-size:20px;text-transform:uppercase;color:var(--y);margin:0 0 4px">${esc(proto.nome)}</h3><p style="font-size:13px;color:var(--dim);margin:0">${esc(proto.descricao||"")}</p></div><button id="exec-close" style="background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:2px;padding:9px;cursor:pointer;color:var(--dim)"><svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button></div><div id="exec-body" style="display:flex;flex-direction:column;gap:14px"></div>`;
    detail.querySelector("#exec-close").onclick=()=>{clearInterval(timer);running=false;if(rec&&rec.state!=="inactive")rec.stop();execId=null;drawForm()};
    function drawExec(){const box2=detail.querySelector("#exec-body");if(!box2)return;const p=passos[step];box2.innerHTML=`<div style="display:flex;gap:8px;margin-bottom:4px">${passos.map((_,i)=>`<div style="flex:1;height:3px;border-radius:2px;background:${i<step?"var(--y)":i===step?"rgba(0,209,255,.5)":"rgba(255,255,255,.08)"}"></div>`).join("")}</div><div style="background:rgba(0,209,255,.04);border:1px solid rgba(0,209,255,.18);border-radius:3px;clip-path:var(--cut);padding:22px"><p style="font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:rgba(0,209,255,.55);margin:0 0 8px">Passo ${step+1} / ${passos.length}</p><p style="font-family:'Archivo',sans-serif;font-stretch:125%;font-style:italic;font-weight:900;font-size:22px;color:#EEF1F8;text-transform:uppercase;margin:0 0 16px">${esc(p.texto)}</p><div class="timer-display"><button id="exec-pp" class="timer-btn">${running?"⏸":"▶"}</button><span id="exec-t" style="font-size:2rem">${String(Math.floor(elapsed/60)).padStart(2,"0")}:${String(elapsed%60).padStart(2,"0")}</span><span style="font-size:13px;color:var(--muted);margin-left:8px">/ ${esc(p.duracao||"∞")}s</span></div></div><div style="display:flex;gap:9px;align-items:center"><div class="mic-btn${micOn?" recording":""}" id="exec-mic" title="Voz" style="width:52px;height:52px">${micOn?AMI("rec"):AMI("mic")}</div><textarea id="exec-note" class="cs" placeholder="Notas desta etapa..." style="flex:1;height:60px;resize:none;font-size:13px;display:block">${esc(transcript)}</textarea></div><div style="display:flex;justify-content:space-between;gap:10px">${step>0?`<button class="btn-sec" id="exec-back" style="width:auto;font-size:12px">← Anterior</button>`:`<div></div>`}${step<passos.length-1?`<button class="btn-y" id="exec-next" style="width:auto;font-size:13px">Próximo →</button>`:`<button class="btn-y" id="exec-fin" style="width:auto;font-size:13px;background:#4ADE80;color:#060B42">Concluir ✓</button>`}</div>`;
      const pp=box2.querySelector("#exec-pp");pp.onclick=()=>{running=!running;if(running)timer=setInterval(()=>{elapsed++;const el2=box2.querySelector("#exec-t");if(el2)el2.textContent=String(Math.floor(elapsed/60)).padStart(2,"0")+":"+String(elapsed%60).padStart(2,"0")},1000);else clearInterval(timer);pp.textContent=running?"⏸":"▶"};
      box2.querySelector("#exec-mic").onclick=async()=>{if(!micOn){try{const st=await navigator.mediaDevices.getUserMedia({audio:true});rec=new MediaRecorder(st);const chunks=[];rec.ondataavailable=e=>chunks.push(e.data);rec.onstop=()=>{const blob=new Blob(chunks);const note=box2.querySelector("#exec-note");if(note)note.value+=" [áudio gravado]"};rec.start();micOn=true}catch(ex){avisar("Microfone não disponível.","erro")}}else{if(rec&&rec.state!=="inactive")rec.stop();micOn=false}drawExec()};
      box2.querySelector("#exec-note").oninput=e=>transcript=e.target.value;if(box2.querySelector("#exec-back"))box2.querySelector("#exec-back").onclick=()=>{clearInterval(timer);running=false;elapsed=0;step--;drawExec()};if(box2.querySelector("#exec-next"))box2.querySelector("#exec-next").onclick=()=>{clearInterval(timer);running=false;elapsed=0;step++;drawExec()};if(box2.querySelector("#exec-fin"))box2.querySelector("#exec-fin").onclick=async()=>{clearInterval(timer);running=false;await FB.addDoc("execucoes",{protocoloId:execId,nome:proto.nome,dataExecucao:new Date().toISOString(),observacoes:limitar(transcript,2000),executadoPor:APP.user.nome}).catch(()=>{});avisar("Protocolo concluído e registrado.","ok");execId=null;drawForm()}}
    drawExec();
  }
}
function modTreinoMental(c){
  phdr(c,"Exercícios de desenvolvimento","Treino Mental");
  let atletas=[],aid="",tipo="visualizacao",duracao=10,intensidade=5,notas="",salv=false;
  const hdr=el("div");c.appendChild(hdr);listarAtletas().then(uu=>{atletas=uu||[];hdr.innerHTML=`<div style="display:flex;align-items:center;gap:12px;margin-bottom:20px"><label class="slbl">Atleta:</label>${atlSelect(atletas,"")}</div>`;hdr.querySelector("#atl-sel").onchange=e=>{aid=e.target.value;drawTM()}}).catch(()=>{});
  const box=el("div");c.appendChild(box);
  const TIPOS=[{id:"visualizacao",l:"Visualização",icon:AMI("focus"),desc:"Visualização mental de jogadas, gestos técnicos e situações de competição"},{"id":"respiracao",l:"Respiração",icon:AMI("wind"),desc:"Controle respiratório e regulação do estado"},{"id":"autoconversa",l:"Autoconversa",icon:AMI("chat"),desc:"Diálogo interno positivo e reestruturação cognitiva"},{"id":"atencao",l:"Atenção",icon:AMI("search"),desc:"Treino de foco seletivo e concentração"},{"id":"ativacao",l:"Ativação",icon:AMI("bolt"),desc:"Controle do nível de ativação e energia"},{"id":"mindfulness",l:"Mindfulness",icon:AMI("leaf"),desc:"Atenção plena ao momento presente"}];
  function drawTM(){if(!aid){box.innerHTML=`<p style="color:var(--muted);font-size:13px">Selecione um atleta.</p>`;return}
    box.innerHTML=`<div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;align-items:start"><div class="glass" style="border-radius:3px;clip-path:var(--cut);padding:24px;border-top:3px solid var(--y)"><h3 style="font-family:'Archivo',sans-serif;font-stretch:112%;font-style:italic;font-weight:900;font-size:16px;text-transform:uppercase;color:#EEF1F8;margin:0 0 18px">Registrar Treino</h3><div style="display:flex;flex-direction:column;gap:14px"><div><label class="slbl" style="display:block;margin-bottom:8px">Tipo de Exercício</label><div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">${TIPOS.map(t=>`<button data-tipo="${t.id}" style="background:${tipo===t.id?"rgba(0,209,255,.1)":"rgba(0,0,0,.25)"};border:1px solid ${tipo===t.id?"rgba(0,209,255,.35)":"rgba(255,255,255,.06)"};border-radius:3px;padding:10px 8px;cursor:pointer;text-align:left;transition:.15s"><span style="font-size:16px;display:block;margin-bottom:3px">${t.icon}</span><span style="font-family:'JetBrains Mono',monospace;font-weight:700;font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:${tipo===t.id?"var(--y)":"#B4BBE0"};display:block">${t.l}</span></button>`).join("")}</div></div><div><div style="display:flex;justify-content:space-between;margin-bottom:7px"><label class="slbl">Duração (min)</label><span style="font-family:'JetBrains Mono',monospace;color:var(--y)" id="tm-dur-v">${duracao}</span></div><input type="range" min="5" max="60" step="5" id="tm-dur" style="--val:${Math.round((duracao-5)/55*100)}%;width:100%"></div><div><div style="display:flex;justify-content:space-between;margin-bottom:7px"><label class="slbl">Intensidade</label><span style="font-family:'JetBrains Mono',monospace;color:var(--y)" id="tm-int-v">${intensidade}</span></div><input type="range" min="1" max="10" id="tm-int" style="--val:${Math.round((intensidade-1)/9*100)}%;width:100%"></div><div><label class="slbl" style="display:block;margin-bottom:7px">Observações</label><textarea id="tm-notas" class="cs" placeholder="Descreva a sessão..." style="height:90px;font-size:13px;resize:none;display:block">${esc(notas)}</textarea></div><button class="btn-y" id="tm-save" ${salv?"disabled":""}>${salv?"Salvando...":"Registrar Sessão"}</button></div></div><div class="glass" style="border-radius:3px;clip-path:var(--cut);padding:24px;max-height:700px;overflow-y:auto" id="tm-hist"><div class="dot-pulse" style="width:7px;height:7px;border-radius:50%;background:var(--y)"></div></div></div>`;
    box.querySelectorAll("[data-tipo]").forEach(b=>b.onclick=()=>{tipo=b.dataset.tipo;drawTM()});const durInp=box.querySelector("#tm-dur");durInp.value=duracao;setRng(durInp,duracao);durInp.addEventListener("input",e=>{duracao=+e.target.value;setRng(durInp,duracao);box.querySelector("#tm-dur-v").textContent=duracao});const intInp=box.querySelector("#tm-int");intInp.value=intensidade;setRng(intInp,intensidade);intInp.addEventListener("input",e=>{intensidade=+e.target.value;setRng(intInp,intensidade);box.querySelector("#tm-int-v").textContent=intensidade});box.querySelector("#tm-notas").oninput=e=>notas=e.target.value;box.querySelector("#tm-save").onclick=async()=>{salv=true;drawTM();const dados={atletaId:aid,tipo,duracao,intensidade,notas,dataRegistro:new Date().toISOString(),registradoPor:APP.user.uid};const ok=await salvarTreinoMental(aid,dados);if(ok)notas="";salv=false;drawTM()};
    loadHistTM();
  }
  async function loadHistTM(){
    const hist=box.querySelector("#tm-hist");
    if(!hist)return;
    hist.innerHTML=_loading("Carregando historico...");
    const dados=await FB.query("treinos_mentais","atletaId","==",aid,"dataRegistro","DESCENDING",20).catch(()=>[]);
    if(!dados||dados.length===0){hist.innerHTML="<p style=\"text-align:center;color:var(--muted);font-size:12px;margin-top:20px\">Nenhum treino registrado.</p>";return}
    const rows=dados.map(d=>{
      const t=TIPOS.find(x=>x.id===d.tipo)||{l:d.tipo,icon:AMI("mind")};
      const notasHtml=d.notas?"<p style=\"font-size:12px;color:#B4BBE0;margin:8px 0 0;font-style:italic\">"+esc(d.notas)+"</p>":"";
      return "<div style=\"background:rgba(0,0,0,.3);border:1px solid rgba(255,255,255,.05);border-radius:3px;padding:14px;margin-bottom:9px\">"
        +"<div style=\"display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px\">"
        +"<div style=\"display:flex;align-items:center;gap:8px\">"
        +"<span style=\"font-size:16px\">"+t.icon+"</span>"
        +"<span style=\"font-weight:800;font-size:14px;color:#EEF1F8;text-transform:uppercase\">"+esc(t.l)+"</span>"
        +"</div>"
        +"<span style=\"font-size:11px;color:var(--dim)\">"+fmtDate(d.dataRegistro)+"</span>"
        +"</div>"
        +"<div style=\"display:flex;gap:12px;font-size:12px;color:#B4BBE0\">"
        +("<span>"+AMI("clock")+" ")+esc(d.duracao)+"min</span>"
        +("<span>"+AMI("bolt")+" Intens. ")+esc(d.intensidade)+"/10</span>"
        +"</div>"
        +notasHtml
        +"</div>";
    }).join("");
    hist.innerHTML=("<h4 class=\"tm-subtitle\" style=\"margin-bottom:16px\">"+AMI("bars")+" Historico de Treinos</h4>")+rows;
  }
  drawTM();
}
function modIAAnalise(c){
  phdr(c,"Análise técnica com inteligência artificial","Análise com IA Gemini");
  let atletas=[],aid="",videoFile=null,videoFrames=[],iaResult=null,iaSp=sportOf(""),analise={pontosFOrtes:[],pontosAMelhorar:[],planosDeAcao:[],resumo:""},salv=false;
  const hdr=el("div");c.appendChild(hdr);
  listarAtletas().then(uu=>{atletas=uu||[];hdr.innerHTML=`<div style="display:flex;align-items:center;gap:12px;margin-bottom:20px"><label class="slbl">Atleta:</label>${atlSelect(atletas,"")}</div>`;hdr.querySelector("#atl-sel").onchange=e=>{aid=e.target.value;const at=atletas.find(a=>a._id===aid)||null;iaSp=sportOf(at&&at.esporte);drawIA();if(aid)carregarEsporte(aid,at).then(es=>{if(!at||aid!==at._id)return;iaSp=sportOf(es);const t=box.querySelector("#ia-sport");if(t)t.innerHTML=iaSportHTML(iaSp)})}}).catch(()=>{});
  const box=el("div");c.appendChild(box);
  function drawIA(){if(!aid){box.innerHTML=`<p style="color:var(--muted);font-size:13px">Selecione um atleta.</p>`;return}
    box.innerHTML=`<div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;align-items:start"><div class="glass" style="border-radius:3px;clip-path:var(--cut);padding:28px;border-top:3px solid var(--y)"><h3 style="font-family:'Archivo',sans-serif;font-stretch:125%;font-style:italic;font-weight:900;font-size:18px;text-transform:uppercase;color:#EEF1F8;margin:0 0 20px">Upload de Vídeo</h3><p class="ia-sport" id="ia-sport">${iaSportHTML(iaSp)}</p><div class="upload-area" id="upload-area"><div style="font-size:40px;margin-bottom:12px">${AMI("video")}</div><p style="font-family:'JetBrains Mono',monospace;font-weight:700;font-size:14px;color:#EEF1F8;margin:0 0 6px;text-transform:uppercase">Soltar vídeo aqui</p><p style="font-size:12px;color:var(--muted)">MP4, MOV, AVI — máx. 100MB</p><input type="file" id="video-input" accept="video/*" style="display:none"></div><video id="video-preview" class="video-preview"></video><div id="video-actions-wrapper"><div id="ia-loading" class="ai-loading"><div class="ai-spinner"></div><p style="font-family:'JetBrains Mono',monospace;font-weight:700;font-size:13px;letter-spacing:.15em;text-transform:uppercase;color:var(--y)">Processando com Gemini AI...</p><p style="font-size:12px">Aguarde até 30 segundos</p></div><button id="run-ia" class="btn btn-magic" style="margin-top:16px;width:100%;display:none">${AMI("ai")} Analisar com IA Gemini</button></div></div><div class="glass" style="border-radius:3px;clip-path:var(--cut);padding:28px"><h3 style="font-family:'Archivo',sans-serif;font-stretch:125%;font-style:italic;font-weight:900;font-size:18px;text-transform:uppercase;color:#EEF1F8;margin:0 0 20px">Resultado da Análise</h3><div id="ia-result-area" style="color:var(--muted);font-size:13px">Carregue um vídeo e clique em analisar.</div></div></div>`;
    const upArea=box.querySelector("#upload-area"),fileInp=box.querySelector("#video-input");upArea.onclick=()=>fileInp.click();upArea.ondragover=e=>{e.preventDefault();upArea.style.borderColor="var(--y)"};upArea.ondragleave=()=>upArea.style.borderColor="";upArea.ondrop=e=>{e.preventDefault();upArea.style.borderColor="";if(e.dataTransfer.files[0])handleVideoUploadStaff(e.dataTransfer.files[0],box)};fileInp.onchange=()=>{if(fileInp.files[0])handleVideoUploadStaff(fileInp.files[0],box)};
  }
  window._handleVideoUploadStaff=async(file,box)=>{
    if(file.size>100*1024*1024){avisar("Vídeo muito grande (máximo 100 MB).","erro");return}
    videoFile=file;
    const prev=box.querySelector("#video-preview");if(prev){prev.src=URL.createObjectURL(file);prev.style.display="block";prev.load()}
    const resultArea=box.querySelector("#ia-result-area");if(resultArea)resultArea.innerHTML=`<p style="color:var(--muted);font-size:13px">Extraindo frames do vídeo...</p>`;
    videoFrames=await extractFramesMultiStaff(file,5);
    const runBtn=box.querySelector("#run-ia");
    if(runBtn)runBtn.style.display=videoFrames.length?"flex":"none";
    if(resultArea)resultArea.innerHTML=videoFrames.length?`<p style="color:var(--muted);font-size:13px">${videoFrames.length} frames extraídos. Pronto para analisar.</p>`:`<p style="color:#EC7896;font-size:13px">Não foi possível extrair frames deste vídeo.</p>`;
  };
  window._runIAStaff=async(box)=>{
    if(!videoFile||!videoFrames.length)return;
    const loading=box.querySelector("#ia-loading"),runBtn=box.querySelector("#run-ia"),resultArea=box.querySelector("#ia-result-area");
    if(loading){loading.style.display="flex";}
    if(runBtn)runBtn.style.display="none";
    if(resultArea)resultArea.innerHTML="<p style=\"color:var(--muted);font-size:13px\">Consultando Gemini AI...</p>";
    const result=await runRealAIAnalysisSecure(videoFrames,resultArea,{esporte:iaSp.nome||""});
    if(loading)loading.style.display="none";
    if(result&&resultArea){analise=result;renderIAResult(resultArea,result);iaResult=result}
    else if(resultArea&&!result){if(runBtn)runBtn.style.display="flex"}
  };
  box.addEventListener("click",e=>{if(e.target.closest("#run-ia"))window._runIAStaff&&window._runIAStaff(box);if(e.target.closest("[data-pdf-ia]")){gerarPDF("ia-result-area","analise-ia-"+aid);auditar("exportacao_pdf",{id:aid},"análise de vídeo")}});
  function renderIAResult(area,r){area.innerHTML=`<div class="ai-result-section" style="display:flex;flex-direction:column;gap:16px"><div class="ai-result-card positive"><h4 class="tm-subtitle">${AMI("check")} Pontos Positivos</h4><ul class="tm-list">${(r.pontosFortes||[]).map(p=>`<li>${esc(p)}</li>`).join("")}</ul></div><div class="ai-result-card negative"><h4 class="tm-subtitle">${AMI("alert")} Pontos a Melhorar</h4><ul class="tm-list">${(r.pontosAMelhorar||[]).map(p=>`<li>${esc(p)}</li>`).join("")}</ul></div><div class="ai-result-card action"><h4 class="tm-subtitle">${AMI("focus")} Plano de Ação</h4><ul class="tm-list">${(r.planosDeAcao||[]).map(p=>`<li>${esc(p)}</li>`).join("")}</ul></div>${r.resumo?`<div style="background:rgba(0,209,255,.04);border:1px solid rgba(0,209,255,.15);border-radius:3px;padding:18px"><h4 class="tm-subtitle">${AMI("clipboard")} Resumo Técnico</h4><p style="font-size:14px;color:#B4BBE0;line-height:1.7">${esc(r.resumo)}</p></div>`:""}<div style="display:flex;gap:10px"><button id="salvar-analise-btn" class="btn btn-primary" style="flex:1" ${salv?"disabled":""}>${salv?"Salvando...":(AMI("save")+" Salvar Análise")}</button><button type="button" data-pdf-ia class="btn btn-outline" style="flex:1">${AMI("file")} Exportar PDF</button></div></div>`}
  box.addEventListener&&box.addEventListener("click",async e=>{if(e.target.closest("#salvar-analise-btn")&&!salv&&iaResult&&aid){salv=true;if(box.querySelector("#salvar-analise-btn"))box.querySelector("#salvar-analise-btn").disabled=true;await salvarAnaliseIA(aid,{...iaResult,esporte:iaSp.nome||""});salv=false}});
}
async function handleVideoUploadStaff(file,box){if(window._handleVideoUploadStaff)window._handleVideoUploadStaff(file,box)}
async function extractFramesMultiStaff(file,count=5){
  return new Promise(resolve=>{
    const vid=document.createElement("video");
    vid.preload="auto";vid.muted=true;vid.playsInline=true;
    vid.src=URL.createObjectURL(file);
    const frames=[];
    const safety=setTimeout(()=>resolve(frames),15000);
    vid.onloadedmetadata=()=>{
      const duration=vid.duration&&isFinite(vid.duration)?vid.duration:1;
      const canvas=document.createElement("canvas");
      canvas.width=480;canvas.height=270;
      const ctx=canvas.getContext("2d");
      const times=Array.from({length:count},(_,k)=>duration*((k+0.5)/count));
      let i=0;
      const captureNext=()=>{
        if(i>=times.length){clearTimeout(safety);resolve(frames);return}
        vid.currentTime=Math.min(times[i],Math.max(0,duration-0.05));
      };
      vid.onseeked=()=>{
        try{ctx.drawImage(vid,0,0,480,270);frames.push(canvas.toDataURL("image/jpeg",.82).split(",")[1])}catch(e){}
        i++;captureNext();
      };
      captureNext();
    };
    vid.onerror=()=>{clearTimeout(safety);resolve(frames)};
  });
}
const iaSportHTML=sp=>sp.nome?`<span>Modalidade analisada</span>${sportChip(sp.nome,"sm")}`:`<span>Modalidade não informada no Perfil Esportivo — a análise será genérica.</span>`;
/* ════ ACE MIND v3 — base de dados, sessão e segurança ════ */
const TERMOS_VERSAO="2026-10";
class FBError extends Error{constructor(msg,code="",status=0){super(msg);this.code=code;this.status=status}}
const LS={get(k){try{return localStorage.getItem(k)}catch(e){return null}},set(k,v){try{localStorage.setItem(k,v)}catch(e){}},del(k){try{localStorage.removeItem(k)}catch(e){}}};
const encPath=p=>String(p).split("/").map(x=>encodeURIComponent(x)).join("/");
function jwtPayload(t){try{const b=t.split(".")[1].replace(/-/g,"+").replace(/_/g,"/");return JSON.parse(decodeURIComponent(atob(b).split("").map(c=>"%"+("00"+c.charCodeAt(0).toString(16)).slice(-2)).join("")))}catch(e){return{}}}

const FB={
  KEY:"AIzaSyA-Wkrh3xZc-V0snzsjvg4i9ffxWCKyu0M",PID:"ace-mind-c13a1",
  token:null,uid:null,refresh:null,exp:0,_renovando:null,
  get FS(){return`https://firestore.googleapis.com/v1/projects/${this.PID}/databases/(default)/documents`},
  get AUTH(){return`https://identitytoolkit.googleapis.com/v1/accounts`},
  get FN(){return`https://us-central1-${this.PID}.cloudfunctions.net`},
  salvarSessao(j){
    this.token=j.idToken||j.id_token||this.token;this.uid=j.localId||j.user_id||this.uid;this.refresh=j.refreshToken||j.refresh_token||this.refresh;
    this.exp=Date.now()+((+(j.expiresIn||j.expires_in))||3600)*1000;
    LS.set("am_tok",this.token);LS.set("am_uid",this.uid);if(this.refresh)LS.set("am_rt",this.refresh);LS.set("am_exp",String(this.exp));
  },
  carregarSessao(){this.token=LS.get("am_tok");this.uid=LS.get("am_uid");this.refresh=LS.get("am_rt");this.exp=+LS.get("am_exp")||0;if(this.token&&!this.exp){const p=jwtPayload(this.token);this.exp=(p.exp||0)*1000}},
  claims(){return this.token?jwtPayload(this.token):{}},
  async renovar(){
    if(!this.refresh)throw new FBError("Sua sessão terminou. Entre novamente.","SESSAO",401);
    if(this._renovando)return this._renovando;
    this._renovando=(async()=>{
      let r;try{r=await fetch(`https://securetoken.googleapis.com/v1/token?key=${this.KEY}`,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"grant_type=refresh_token&refresh_token="+encodeURIComponent(this.refresh)})}catch(e){throw new FBError("Sem conexão com o servidor.","REDE")}
      const j=await r.json().catch(()=>({}));
      if(!r.ok)throw new FBError("Sua sessão terminou. Entre novamente.","SESSAO",401);
      this.salvarSessao(j);
    })().finally(()=>{this._renovando=null});
    return this._renovando;
  },
  async garantirToken(){if(this.token&&this.refresh&&this.exp&&Date.now()>this.exp-5*60*1000)await this.renovar()},
  async req(url,method="GET",body=null,auth=true,tentar=true){
    if(auth&&this.token){try{await this.garantirToken()}catch(e){if(e.code==="SESSAO"){sessaoExpirada();throw e}}}
    const h={"Content-Type":"application/json"};if(url.includes("identitytoolkit"))h["X-Firebase-Locale"]="pt-BR";if(auth&&this.token)h.Authorization="Bearer "+this.token;
    const ctrl=new AbortController(),to=setTimeout(()=>ctrl.abort(),25000);let r;
    try{r=await fetch(url,{method,headers:h,body:body?JSON.stringify(body):null,signal:ctrl.signal})}
    catch(e){throw new FBError(navigator.onLine===false?"Sem conexão com a internet.":"Não foi possível falar com o servidor. Tente de novo.","REDE")}
    finally{clearTimeout(to)}
    const j=await r.json().catch(()=>({}));
    if(r.status===401&&auth&&tentar&&this.refresh){try{await this.renovar()}catch(e){sessaoExpirada();throw e}return this.req(url,method,body,auth,false)}
    if(!r.ok){const m=j.error?.message||("Erro "+r.status);if(r.status===401&&auth&&this.token)sessaoExpirada();throw new FBError(m,j.error?.status||String(r.status),r.status)}
    return j;
  },
  async signIn(email,pass){const j=await this.req(`${this.AUTH}:signInWithPassword?key=${this.KEY}`,"POST",{email,password:pass,returnSecureToken:true},false);this.salvarSessao(j);return j},
  async signUp(email,pass){const j=await this.req(`${this.AUTH}:signUp?key=${this.KEY}`,"POST",{email,password:pass,returnSecureToken:true},false);this.salvarSessao(j);return j},
  /* cria uma conta sem trocar a sessão de quem está logado (convites) */
  async criarConta(email,pass){return this.req(`${this.AUTH}:signUp?key=${this.KEY}`,"POST",{email,password:pass,returnSecureToken:true},false)},
  async enviarEmail(tipo,dados){return this.req(`${this.AUTH}:sendOobCode?key=${this.KEY}`,"POST",{requestType:tipo,...dados},false)},
  signOut(){this.token=null;this.uid=null;this.refresh=null;this.exp=0;["am_tok","am_uid","am_rt","am_exp","am_perfil","ace_master_atletas","ace_master_protocolos","ace_master_iaAnalises","ace_master_treinosMentais"].forEach(k=>LS.del(k))},
  toV(x){if(x===null||x===undefined)return{nullValue:null};if(x instanceof Date)return{timestampValue:x.toISOString()};if(typeof x==="boolean")return{booleanValue:x};if(typeof x==="number")return Number.isInteger(x)?{integerValue:String(x)}:{doubleValue:x};if(typeof x==="string")return{stringValue:x};if(Array.isArray(x))return{arrayValue:{values:x.map(i=>this.toV(i))}};if(typeof x==="object")return{mapValue:{fields:Object.fromEntries(Object.entries(x).map(([k,v])=>[k,this.toV(v)]))}};return{stringValue:String(x)}},
  fromV(v){if(!v)return null;if("stringValue"in v)return v.stringValue;if("integerValue"in v)return parseInt(v.integerValue);if("doubleValue"in v)return v.doubleValue;if("booleanValue"in v)return v.booleanValue;if("nullValue"in v)return null;if("timestampValue"in v)return v.timestampValue;if("arrayValue"in v)return(v.arrayValue.values||[]).map(x=>this.fromV(x));if("mapValue"in v)return this.fromDoc({fields:v.mapValue.fields||{}});return null},
  fromDoc(doc){if(!doc||!doc.fields)return doc&&doc.name?{_id:doc.name.split("/").pop()}:{};const o={};for(const[k,v]of Object.entries(doc.fields))o[k]=this.fromV(v);o._id=doc.name?doc.name.split("/").pop():undefined;return o},
  toFields(obj){const f={};for(const[k,v]of Object.entries(obj))if(k!=="id"&&k!=="_id"&&v!==undefined)f[k]=this.toV(v);return f},
  async getDoc(path){try{const j=await this.req(`${this.FS}/${encPath(path)}`);return this.fromDoc(j)}catch(e){if(/not.?found/i.test(e.message)||e.status===404)return null;throw e}},
  async setDoc(path,data){return this.req(`${this.FS}/${encPath(path)}`,"PATCH",{fields:this.toFields(data)})},
  async updateDoc(path,data){const mask=Object.keys(data).filter(k=>k!=="id"&&k!=="_id"&&data[k]!==undefined).map(k=>"updateMask.fieldPaths="+encodeURIComponent(k)).join("&");return this.req(`${this.FS}/${encPath(path)}?${mask}`,"PATCH",{fields:this.toFields(data)})},
  async addDoc(col,data){const j=await this.req(`${this.FS}/${encPath(col)}`,"POST",{fields:this.toFields(data)});return{id:j.name.split("/").pop()}},
  async deleteDoc(path){return this.req(`${this.FS}/${encPath(path)}`,"DELETE")},
  async getDocs(col){const out=[];let tok="";try{for(let i=0;i<25;i++){const j=await this.req(`${this.FS}/${encPath(col)}?pageSize=300${tok?"&pageToken="+encodeURIComponent(tok):""}`);(j.documents||[]).forEach(d=>out.push(this.fromDoc(d)));if(!j.nextPageToken)break;tok=j.nextPageToken}return out}catch(e){falhaLeitura(col,e);return out}},
  async query(colPath,field,op,value,orderBy=null,dir="DESCENDING",lim=100,silencioso=false){
    const ops={"==":"EQUAL","<":"LESS_THAN",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","<=":"LESS_THAN_OR_EQUAL","in":"IN"};
    const colId=colPath.split("/").pop(),parent=colPath.split("/").slice(0,-1).join("/");
    const sq={from:[{collectionId:colId}],limit:lim};
    if(field)sq.where={fieldFilter:{field:{fieldPath:field},op:ops[op]||"EQUAL",value:this.toV(value)}};
    if(orderBy)sq.orderBy=[{field:{fieldPath:orderBy},direction:dir}];
    const url=parent?`${this.FS}/${encPath(parent)}:runQuery`:`${this.FS}:runQuery`;
    try{
      try{const j=await this.req(url,"POST",{structuredQuery:sq});return(j||[]).filter(r=>r.document).map(r=>this.fromDoc(r.document))}
      catch(e){
        /* filtro por um campo + ordem por outro precisa de índice composto (firestore.indexes.json).
           Se ele ainda não foi publicado ou está sendo criado, busca tudo em páginas e ordena aqui. */
        if(!(orderBy&&field&&orderBy!==field&&op==="=="&&e.code==="FAILED_PRECONDITION"))throw e;
        indiceFaltando(colId,field,orderBy,dir);
        const tudo=await this._paginas(colPath,field,value);
        tudo.sort((a,b)=>String(a[orderBy]??"").localeCompare(String(b[orderBy]??""))*(dir==="ASCENDING"?1:-1));
        return tudo.slice(0,lim);
      }
    }catch(e){if(silencioso)return null;falhaLeitura(colPath,e);return[]}
  },
  /* todos os documentos com campo == valor, em páginas de 1000 (ordem pelo id: não precisa de índice composto) */
  async _paginas(colPath,field,value,max=20000){
    const colId=colPath.split("/").pop(),parent=colPath.split("/").slice(0,-1).join("/");
    const url=parent?`${this.FS}/${encPath(parent)}:runQuery`:`${this.FS}:runQuery`;
    const out=[];let ultimo=null;
    while(out.length<max){
      const sq={from:[{collectionId:colId}],where:{fieldFilter:{field:{fieldPath:field},op:"EQUAL",value:this.toV(value)}},orderBy:[{field:{fieldPath:"__name__"},direction:"ASCENDING"}],limit:1000};
      if(ultimo)sq.startAt={values:[{referenceValue:ultimo}],before:false};
      const j=await this.req(url,"POST",{structuredQuery:sq});
      const docs=(j||[]).filter(r=>r.document);
      docs.forEach(r=>out.push(this.fromDoc(r.document)));
      if(docs.length<1000)break;
      ultimo=docs[docs.length-1].document.name;
    }
    return out;
  },
  async todos(colPath,field,value,silencioso=false){try{return await this._paginas(colPath,field,value)}catch(e){if(silencioso)return null;falhaLeitura(colPath,e);return[]}},
  /* cria um documento com a hora do servidor: o banco confere que ninguém "volta no tempo" num registro clínico */
  async criarComHora(col,data,campo="criadoTs"){
    const id=idAleatorio(),dados={...data};delete dados[campo];
    await this.req(`${this.FS}:commit`,"POST",{writes:[{update:{name:`projects/${this.PID}/databases/(default)/documents/${col}/${id}`,fields:this.toFields(dados)},updateTransforms:[{fieldPath:campo,setToServerValue:"REQUEST_TIME"}],currentDocument:{exists:false}}]});
    return{id};
  },
  /* consulta em todas as subcoleções com o mesmo nome (ex.: notas_psico de todos os atletas) */
  async grupo(colId,orderBy="criadoEm",dir="DESCENDING",lim=200){
    const sq={from:[{collectionId:colId,allDescendants:true}],orderBy:[{field:{fieldPath:orderBy},direction:dir}],limit:lim};
    const j=await this.req(`${this.FS}:runQuery`,"POST",{structuredQuery:sq});
    return(j||[]).filter(r=>r.document).map(r=>{const o=this.fromDoc(r.document);o._path=r.document.name.split("/documents/")[1]||"";return o});
  },
  async call(fn,dados={}){const j=await this.req(`${this.FN}/${fn}`,"POST",{data:dados});return j&&j.result!==undefined?j.result:j}
};

/* ── avisos na tela (não bloqueiam) ── */
function avisar(msg,tipo="info",ms=4200){
  let box=document.getElementById("am-toasts");
  if(!box){box=document.createElement("div");box.id="am-toasts";box.setAttribute("aria-live","polite");document.body.appendChild(box)}
  const t=document.createElement("div");t.className="am-toast "+tipo;t.setAttribute("role",tipo==="erro"?"alert":"status");t.textContent=String(msg);
  box.appendChild(t);setTimeout(()=>{t.classList.add("sai");setTimeout(()=>t.remove(),400)},ms);
}
let _ultimaFalha=0;
function falhaLeitura(onde,e){if(e&&e.code==="SESSAO")return;registrarErro("leitura:"+String(onde).split("/")[0],e);if(Date.now()-_ultimaFalha>15000){_ultimaFalha=Date.now();avisar(e&&e.code==="REDE"?"Sem conexão: alguns dados não carregaram.":(e&&e.status===403?"Você não tem permissão para ver alguns destes dados.":"Alguns dados não carregaram. Tente de novo."),"erro")}}
let _expirando=false;
function sessaoExpirada(){if(_expirando||!APP.user)return;_expirando=true;avisar("Sua sessão terminou. Entre novamente para continuar.","erro",6000);sairDoApp("sessao_expirada").finally(()=>{_expirando=false})}

/* ── registro de erros (sem conteúdo do usuário) ── */
const _errosVistos=new Set();let _errosEnviados=0;
function registrarErro(onde,err){
  try{const msg=String(err&&err.message||err||"erro").slice(0,300);const chave=onde+"|"+msg;if(_errosVistos.has(chave)||_errosEnviados>=12)return;_errosVistos.add(chave);_errosEnviados++;
    if(!FB.token||!APP.user)return;
    FB.addDoc("logs_erros",{onde:String(onde).slice(0,80),msg,stack:String(err&&err.stack||"").slice(0,900),versao:AM_VERSAO,cargo:APP.cargo||"",uid:APP.user.uid,data:new Date().toISOString(),ua:navigator.userAgent.slice(0,160)}).catch(()=>{});
  }catch(e){}
}
/* índice composto ausente: o app continua funcionando (busca em páginas), mas a administração vê o aviso em Saúde do sistema */
function indiceFaltando(col,campo,ordem,dir){registrarErro("indice",new Error(`Índice composto ausente ou em criação: ${col} (${campo} ↑, ${ordem} ${dir==="ASCENDING"?"↑":"↓"}). Publique com: firebase deploy --only firestore:indexes`))}
window.addEventListener("error",e=>{if(e.filename&&location.origin!=="null"&&!e.filename.startsWith(location.origin))return;registrarErro("global",e.error||e.message)});
window.addEventListener("unhandledrejection",e=>{const r=e.reason;if(r instanceof FBError&&(r.code==="SESSAO"||r.code==="REDE"))return;registrarErro("promessa",r)});

/* ── auditoria: quem fez o quê, quando ── */
function auditar(acao,alvo={},detalhe=""){
  if(!APP.user||!FB.token)return Promise.resolve();
  return FB.addDoc("auditoria",{acao,alvoId:alvo.id||"",alvoNome:String(alvo.nome||"").slice(0,120),detalhe:String(detalhe||"").slice(0,300),porId:APP.user.uid,porNome:APP.user.nome||"",porCargo:APP.cargo||"",data:new Date().toISOString()}).catch(e=>registrarErro("auditoria",e));
}

/* ── fila offline (diário e competições do atleta) ── */
const FILA_KEY="am_fila";
function filaLer(){try{return JSON.parse(LS.get(FILA_KEY)||"[]")}catch(e){return[]}}
async function addDocOuFila(col,data){
  try{return await FB.addDoc(col,data)}
  catch(e){if(e.code!=="REDE")throw e;const f=filaLer();f.push({col,data,uid:FB.uid,em:Date.now()});LS.set(FILA_KEY,JSON.stringify(f.slice(-50)));avisar("Sem internet: salvo no aparelho. Envio automático quando a conexão voltar.","info",5500);return{fila:true}}
}
async function filaEnviar(){
  const f=filaLer();if(!f.length||!FB.token)return;const resto=[];let ok=0;
  for(const it of f){if(it.uid!==FB.uid){resto.push(it);continue}try{await FB.addDoc(it.col,it.data);ok++}catch(e){resto.push(it);if(e.code==="REDE")break}}
  LS.set(FILA_KEY,JSON.stringify(resto));if(ok)avisar(ok===1?"1 registro salvo offline foi enviado.":`${ok} registros salvos offline foram enviados.`,"ok");
}
window.addEventListener("online",()=>filaEnviar());

/* ── utilidades de segurança ── */
function urlSegura(u){try{const x=new URL(String(u||"").trim());return x.protocol==="https:"?x.href:""}catch(e){return""}}
function idade(nasc){const d=_dt(nasc);if(!d)return null;const h=new Date();let a=h.getFullYear()-d.getFullYear();const m=h.getMonth()-d.getMonth();if(m<0||(m===0&&h.getDate()<d.getDate()))a--;return a}
function senhaForte(s){return typeof s==="string"&&s.length>=8&&/[A-Za-z]/.test(s)&&/\d/.test(s)}
function idAleatorio(n=20){const c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=new Uint8Array(n);crypto.getRandomValues(a);return Array.from(a,b=>c[b%62]).join("")}
function senhaAleatoria(){const a=new Uint8Array(18);crypto.getRandomValues(a);return"Am"+Array.from(a,b=>("0"+b.toString(16)).slice(-2)).join("")+"9!"}
function limitar(s,n){return String(s??"").slice(0,n)}
function baixarArquivo(conteudo,nome,tipo){const b=new Blob([conteudo],{type:tipo});const u=URL.createObjectURL(b);const a=document.createElement("a");a.href=u;a.download=nome;document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(u);a.remove()},1500)}
function csv(linhas,colunas){const q=v=>{const s=v==null?"":String(v);return/[";\n\r]/.test(s)?'"'+s.replace(/"/g,'""')+'"':s};return"﻿"+[colunas.map(c=>q(c[1])).join(";"),...linhas.map(l=>colunas.map(c=>q(typeof c[0]==="function"?c[0](l):l[c[0]])).join(";"))].join("\r\n")}
function abrirModal(html,{largura=560,aoFechar}={}){
  const ov=document.createElement("div");ov.className="pro-modal-overlay am-modal";ov.innerHTML=`<div class="pro-modal-content" role="dialog" aria-modal="true" style="max-width:${largura}px;max-height:calc(100vh - 32px);overflow-y:auto">${html}</div>`;
  const fechar=()=>{ov.classList.remove("active");setTimeout(()=>ov.remove(),250);aoFechar&&aoFechar()};
  ov.addEventListener("click",e=>{if(e.target===ov||e.target.closest("[data-fechar]"))fechar()});
  document.addEventListener("keydown",function k(e){if(e.key==="Escape"&&document.body.contains(ov)){fechar();document.removeEventListener("keydown",k)}});
  document.body.appendChild(ov);requestAnimationFrame(()=>ov.classList.add("active"));
  return{el:ov.firstElementChild,fechar};
}
function confirmar(msg,{ok="Confirmar",perigo=false}={}){return new Promise(res=>{const m=abrirModal(`<p style="font-size:14px;color:#EEF1F8;line-height:1.6;margin:0 0 20px">${esc(msg)}</p><div style="display:flex;justify-content:flex-end;gap:10px"><button class="btn-sec" data-fechar style="width:auto">Cancelar</button><button class="${perigo?"btn-danger":"btn-y"}" id="cf-ok" style="width:auto;padding:10px 18px">${esc(ok)}</button></div>`,{largura:420,aoFechar:()=>res(false)});m.el.querySelector("#cf-ok").onclick=()=>{res(true);m.fechar()}})}

/* ── cargos, áreas do prontuário e acesso ── */
const CARGOS={paciente:"Atleta",treinador:"Treinador / Personal",fisioterapeuta:"Fisioterapeuta",medico:"Médico do Esporte",psicologo:"Psicólogo / Mentor",assistente:"Assistente Terapêutico",admin:"Administração"};
const CARGOS_EQUIPE=["treinador","fisioterapeuta","medico","psicologo","assistente","admin"];
const AREAS={geral:{nome:"Geral",cor:"#00D1FF"},treino:{nome:"Treino",cor:"#4ade80"},fisio:{nome:"Fisioterapia",cor:"#fb923c"},medica:{nome:"Médica",cor:"#60a5fa"},psico:{nome:"Psicologia",cor:"#EC7896"}};
const AREA_ACESSO={treinador:["geral","treino"],fisioterapeuta:["geral","treino","fisio","medica"],medico:["geral","treino","fisio","medica"],psicologo:["geral","psico"],assistente:["geral","psico"],admin:["geral","treino"]};
function areasDe(cargo=APP.cargo){return AREA_ACESSO[cargo]||[]}
const ehAdmin=()=>APP.cargo==="admin"||APP.adminFlag===true;
const ehClinico=(c=APP.cargo)=>["fisioterapeuta","medico","psicologo","assistente"].includes(c);
const podeEditar={
  anamnese:()=>ehClinico()||ehAdmin(),
  diagnostico:()=>["psicologo","assistente","medico"].includes(APP.cargo),
  lesoes:()=>["fisioterapeuta","medico","treinador"].includes(APP.cargo)||ehAdmin(),
  treinos:()=>["treinador","fisioterapeuta","medico"].includes(APP.cargo)||ehAdmin(),
  legado:()=>APP.cargo!=="treinador"
};

/* ── configuração carregada depois do login ── */
let CFG={publico:{},seguranca:{inatividadeMin:30}};
async function carregarConfig(){
  const[pe,pu,se]=await Promise.all([FB.getDoc("config/permissoes").catch(()=>null),FB.getDoc("config/publico").catch(()=>null),isStaff(APP.cargo)?FB.getDoc("config/seguranca").catch(()=>null):null]);
  if(pe){if(pe.features)Object.keys(FEATURES_DEFAULT).forEach(k=>{if(PLANS[pe.features[k]])FEAT_MIN[k]=pe.features[k]});if(pe.staffFeatures)Object.keys(STAFF_FEATURES_DEFAULT).forEach(k=>{if(PLANS[pe.staffFeatures[k]])STAFF_FEAT_MIN[k]=pe.staffFeatures[k]})}
  CFG.publico=pu||{};CFG.seguranca={inatividadeMin:30,...(se||{})};
}

/* ── saída do app e inatividade ── */
let _idleIv=null,_idleUlt=Date.now(),_idleAviso=null;
async function sairDoApp(motivo="logout"){
  if(motivo==="logout"&&FB.uid){const pend=filaLer().filter(it=>it.uid===FB.uid).length;if(pend&&!await confirmar(`Há ${pend===1?"1 registro":pend+" registros"} salvos neste aparelho que ainda não foram enviados (sem internet). Se sair agora, eles serão apagados.`,{ok:"Sair mesmo assim",perigo:true}))return;if(pend)LS.set(FILA_KEY,JSON.stringify(filaLer().filter(it=>it.uid!==FB.uid)))}
  try{if(motivo!=="sessao_expirada")await auditar(motivo==="inatividade"?"logout_inatividade":"logout")}catch(e){}
  pararInatividade();pararCentralSOS(true);limparTimers("app");limparTimers("tela");FB.signOut();
  APP.user=null;APP.esporte="";APP.adminFlag=false;APP.consent=null;APP.atletasCache=null;APP.perfil=null;LS.del("am_sos_ativo");
  document.querySelectorAll("body > .ovl, body > .glass, .am-modal, .pro-modal-overlay, #am-update, #am-sos-faixa").forEach(e=>e.remove());render();
}
function iniciarInatividade(){
  pararInatividade();if(!isStaff(APP.cargo))return;
  const lim=Math.max(5,+CFG.seguranca.inatividadeMin||30)*60000;_idleUlt=Date.now();
  const mexeu=()=>{_idleUlt=Date.now();if(_idleAviso){_idleAviso.fechar();_idleAviso=null}};
  ["pointerdown","keydown","wheel","touchstart"].forEach(ev=>window.addEventListener(ev,mexeu,{passive:true}));
  window._idleMexeu=mexeu;
  _idleIv=setInterval(()=>{const t=Date.now()-_idleUlt;if(t>=lim){sairDoApp("inatividade").then(()=>avisar("Você foi desconectado por inatividade, para proteger os dados dos atletas.","info",7000))}else if(t>=lim-60000&&!_idleAviso){_idleAviso=abrirModal(`<p style="font-family:'Archivo',sans-serif;font-stretch:110%;font-style:italic;font-weight:800;font-size:16px;color:#EEF1F8;text-transform:uppercase;margin:0 0 8px">Ainda está aí?</p><p style="font-size:13px;color:#B4BBE0;margin:0 0 18px;line-height:1.6">Por segurança, a sessão vai ser encerrada em 1 minuto por inatividade.</p><button class="btn-y" data-fechar>Continuar conectado</button>`,{largura:400,aoFechar:()=>{_idleUlt=Date.now();_idleAviso=null}})}},15000);
}
function pararInatividade(){clearInterval(_idleIv);_idleIv=null;if(window._idleMexeu)["pointerdown","keydown","wheel","touchstart"].forEach(ev=>window.removeEventListener(ev,window._idleMexeu));window._idleMexeu=null}

/* ── controle de tentativas de login (aparelho) ── */
function tentativas(email){try{const m=JSON.parse(LS.get("am_tent")||"{}");return m[(email||"").toLowerCase()]||{n:0,ate:0,ult:0}}catch(e){return{n:0,ate:0,ult:0}}}
function registrarTentativa(email,ok){try{const m=JSON.parse(LS.get("am_tent")||"{}"),k=(email||"").toLowerCase();if(ok){delete m[k]}else{const t=m[k]||{n:0,ate:0,ult:0};if(Date.now()-t.ult>15*60000)t.n=0;t.n++;t.ult=Date.now();if(t.n>=5)t.ate=Date.now()+Math.min(15,2*(t.n-4))*60000;m[k]=t}LS.set("am_tent",JSON.stringify(m))}catch(e){}}
function msgErroAuth(m){m=String(m||"");if(/INVALID_PASSWORD|EMAIL_NOT_FOUND|INVALID_LOGIN_CREDENTIALS|INVALID_EMAIL/.test(m))return"E-mail ou senha incorretos.";if(/EMAIL_EXISTS/.test(m))return"Este e-mail já tem cadastro. Use \"Esqueci minha senha\" se precisar.";if(/TOO_MANY_ATTEMPTS/.test(m))return"Muitas tentativas. Por segurança, espere alguns minutos e tente de novo.";if(/USER_DISABLED/.test(m))return"Esta conta foi desativada. Fale com a equipe AceMind.";if(/WEAK_PASSWORD/.test(m))return"Senha fraca. Use pelo menos 8 caracteres, com letras e números.";if(/conexão|servidor/i.test(m))return m;return"Não foi possível concluir. Tente de novo."}

/* ── compatibilidade com o código anterior ── */
const isStaff=c=>CARGOS_EQUIPE.includes(c);
const CARGO_LABEL=CARGOS;

/* ── temporizadores: tudo que repete é registrado e parado ao trocar de tela ou sair ── */
const TIMERS={app:new Set(),tela:new Set()};
function intervalo(fn,ms,escopo="tela"){const id=setInterval(fn,ms);TIMERS[escopo].add(id);return id}
function limparTimers(escopo){TIMERS[escopo].forEach(id=>clearInterval(id));TIMERS[escopo].clear()}

/* ── bibliotecas carregadas só quando precisa (mesmo domínio, sem CDN) ── */
const _scripts={};
function carregarScript(src){return _scripts[src]||(_scripts[src]=new Promise((ok,falha)=>{const s=document.createElement("script");s.src=src;s.async=true;s.onload=()=>ok();s.onerror=()=>{delete _scripts[src];falha(new Error("Não foi possível carregar "+src))};document.head.appendChild(s)}))}
const VENDOR={chart:"vendor/chart-4.4.1.umd.js",pdf:"vendor/html2pdf-0.10.1.bundle.min.js"};
async function garantirChart(){if(typeof Chart==="function")return true;try{await carregarScript(VENDOR.chart);return typeof Chart==="function"}catch(e){avisar("Não foi possível carregar os gráficos. Verifique a conexão.","erro");return false}}
async function garantirPDF(){if(typeof html2pdf==="function")return true;try{await carregarScript(VENDOR.pdf);return typeof html2pdf==="function"}catch(e){avisar("Não foi possível carregar o gerador de PDF. Verifique a conexão.","erro");return false}}

/* ── lista de atletas (cache curto) ── */
async function listarAtletas(forcar=false){
  const c=APP.atletasCache;if(!forcar&&c&&Date.now()-c.em<60000)return c.lista;
  const l=await FB.query("usuarios","cargo","==","paciente",null,"ASCENDING",3000);
  const lista=(l||[]).filter(u=>u.desativado!==true).sort((a,b)=>(a.nome||"").localeCompare(b.nome||"","pt-BR"));
  APP.atletasCache={em:Date.now(),lista};return lista;
}
const primeiroNome=n=>String(n||"").trim().split(/\s+/)[0]||"";

/* ── som de alerta e notificação do navegador (S.O.S) ── */
let _audio=null;
function bip(){try{_audio=_audio||new (window.AudioContext||window.webkitAudioContext)();if(_audio.state==="suspended")_audio.resume();const t=_audio.currentTime;[0,.22,.44].forEach(d=>{const o=_audio.createOscillator(),g=_audio.createGain();o.type="square";o.frequency.value=880;g.gain.setValueAtTime(.0001,t+d);g.gain.exponentialRampToValueAtTime(.18,t+d+.02);g.gain.exponentialRampToValueAtTime(.0001,t+d+.18);o.connect(g);g.connect(_audio.destination);o.start(t+d);o.stop(t+d+.2)})}catch(e){}}
function notificarNavegador(titulo,corpo,tag){try{if(!("Notification"in window)||Notification.permission!=="granted")return;if(navigator.serviceWorker&&navigator.serviceWorker.controller){navigator.serviceWorker.ready.then(r=>r.showNotification(titulo,{body:corpo,tag,renotify:true,requireInteraction:true,icon:"icon-192.png",badge:"icon-192.png"})).catch(()=>{})}else new Notification(titulo,{body:corpo,tag})}catch(e){}}

/* ════ PLANOS E RECURSOS — cada chave liga ou desliga uma tela real ════ */
const FEATURES_DEFAULT={
  sos:{min:"starter",label:"S.O.S Mental",icon:AMI("alert"),nota:"Recurso de segurança. Recomendado deixar no Starter."},
  diarioPerf:{min:"starter",label:"Diário de Performance (check-in)",icon:AMI("notebook")},
  painelParticulas:{min:"starter",label:"Painel de Performance",icon:AMI("ai")},
  zoneReset:{min:"starter",label:"Zone Reset (respiração)",icon:AMI("wind")},
  visaoTunel:{min:"starter",label:"Visão de Túnel",icon:AMI("focus")},
  analytics:{min:"starter",label:"Analytics & Stats",icon:AMI("bars")},
  mantra:{min:"starter",label:"Frase Âncora / Mantra",icon:AMI("chat")},
  checklist:{min:"starter",label:"Checklist Pré-Competição",icon:AMI("check")},
  aquecAtleta:{min:"starter",label:"Ver Protocolo de Aquecimento",icon:AMI("flame")},
  cofreTatico:{min:"starter",label:"Cofre Tático (rotinas)",icon:AMI("lock")},
  raioX:{min:"pro",label:"Raio-X Pós-Competição",icon:AMI("trophy")},
  relatos:{min:"pro",label:"Meus Relatos",icon:AMI("note")},
  graficoEvolucao:{min:"pro",label:"Gráfico de Evolução",icon:AMI("trend")},
  salaTrofeus:{min:"pro",label:"Sala de Troféus",icon:AMI("medal")},
  treinoAtleta:{min:"starter",label:"Treinos & Carga (PSE)",icon:AMI("dumbbell")},
  meuPlano:{min:"starter",label:"Meu Plano (objetivos e agenda)",icon:AMI("flag")},
  calendario:{min:"starter",label:"Agenda / Calendário",icon:AMI("calendar")},
  pdfExport:{min:"pro",label:"Meu Relatório em PDF",icon:AMI("file")},
  videoUpload:{min:"elite",label:"Upload de Vídeo para IA",icon:AMI("video")},
  iaFeedback:{min:"elite",label:"Feedback IA Personalizado",icon:AMI("ai")}
};
const STAFF_FEATURES_DEFAULT={
  staffDashboard:{min:"starter",label:"Radar dos Atletas",icon:AMI("radar")},
  staffCheckins:{min:"starter",label:"Check-ins dos Atletas",icon:AMI("clipboard")},
  staffPerfil:{min:"starter",label:"Perfil Esportivo",icon:AMI("medal")},
  staffAgenda:{min:"starter",label:"Agenda & Sessões",icon:AMI("calendar")},
  staffCalendario:{min:"starter",label:"Calendários dos Atletas",icon:AMI("calendar")},
  staffAquecimento:{min:"starter",label:"Aquecimento",icon:AMI("flame")},
  staffRotinas:{min:"pro",label:"Editar Rotinas de Ativação",icon:AMI("repeat")},
  staffTreinos:{min:"starter",label:"Treinos & Carga",icon:AMI("dumbbell")},
  staffLesoes:{min:"starter",label:"Lesões & Avaliações",icon:AMI("cross")},
  staffProtocolos:{min:"starter",label:"Gestão de Protocolos",icon:AMI("clipboard")},
  staffAtletas:{min:"starter",label:"Atletas & Convites",icon:AMI("users")},
  staffTreinoMental:{min:"starter",label:"Treino Mental",icon:AMI("mind")},
  staffProntuario:{min:"pro",label:"Prontuário",icon:AMI("steth")},
  staffSoap:{min:"pro",label:"Registros Clínicos (linha do tempo)",icon:AMI("note")},
  staffCriticos:{min:"pro",label:"Pressão em Competição",icon:AMI("focus")},
  staffRelatorios:{min:"pro",label:"Exportar Dossiê (PDF)",icon:AMI("file")},
  staffDossie:{min:"pro",label:"Dossiê do Atleta",icon:AMI("folder")},
  staffMultiAtleta:{min:"pro",label:"Comparativo Multi-Atleta",icon:AMI("users")},
  staffDashboardChart:{min:"pro",label:"Dashboard Analítico",icon:AMI("bars")},
  staffVideoAnalise:{min:"elite",label:"Comparar Análises de Vídeo",icon:AMI("video")},
  staffIAAnalise:{min:"elite",label:"Análise de Vídeo com IA",icon:AMI("ai")},
  staffIAInsights:{min:"elite",label:"Insights IA (Tendências)",icon:AMI("ai")},
  staffNotificacoes:{min:"elite",label:"Alertas & Notificações Push",icon:AMI("bell")},
  staffExportData:{min:"elite",label:"Exportar Dados (CSV)",icon:AMI("save")}
};
let FEAT_MIN={},STAFF_FEAT_MIN={};
Object.entries(FEATURES_DEFAULT).forEach(([k,v])=>FEAT_MIN[k]=v.min);
Object.entries(STAFF_FEATURES_DEFAULT).forEach(([k,v])=>STAFF_FEAT_MIN[k]=v.min);
const canAccess=(plan,feat)=>(PLANS[plan]?.level||1)>=(PLANS[FEAT_MIN[feat]]?.level||1);
const canStaffAccess=(plan,feat)=>(PLANS[plan]?.level||1)>=(PLANS[STAFF_FEAT_MIN[feat]]?.level||1);
const pode=feat=>canAccess(APP.plan,feat);
/* bloco de recurso bloqueado no app do atleta, com o plano certo */
function gateAtleta(c,feat,extra=""){
  const f=FEATURES_DEFAULT[feat]||{label:feat,icon:AMI("lock")},pl=PLANS[FEAT_MIN[feat]]||PLANS.pro;
  const g=el("div","plan-gate locked am-gate");
  g.innerHTML=`<p class="slbl" style="text-align:center;margin-bottom:6px">${f.icon} ${esc(f.label)}</p><div class="lock-badge"><div class="lock-icon">${AMI("lock")}</div><div class="lock-plan-name">${pl.label}+</div></div>${extra}`;
  c.appendChild(g);return g;
}

/* ════ DADOS COMPARTILHADOS — check-in, carga de treino, lesões e avaliações ════ */
/* check-in diário: chave, rótulo, cor, ícone, mínimo, máximo, invertido (maior = pior) */
const CK_CAMPOS=[
  ["sono","Sono","#818cf8","moon",1,10,false],
  ["foco","Foco","#00D1FF","bolt",1,10,false],
  ["energia","Energia","#fb923c","flame",1,10,false],
  ["humor","Humor","#4ade80","smile",1,10,false],
  ["estresse","Estresse","#EC7896","alert",1,10,true],
  ["dor","Dor muscular","#f59e0b","cross",0,10,true]
];
const CK_DICA={sono:"1 = dormi muito mal · 10 = dormi muito bem",foco:"1 = disperso · 10 = totalmente focado",energia:"1 = esgotado · 10 = cheio de energia",humor:"1 = muito para baixo · 10 = ótimo",estresse:"1 = tranquilo · 10 = muito estressado",dor:"0 = sem dor · 10 = dor muito forte"};
const CORPO=["Pescoço","Ombro","Braço / cotovelo","Punho / mão","Costas (alta)","Lombar","Abdômen","Quadril / virilha","Coxa (frente)","Coxa (trás)","Joelho","Panturrilha / canela","Tornozelo / pé","Cabeça","Outro"];
const _n=v=>v===null||v===undefined||v===""||isNaN(+v)?null:+v;
/* prontidão (0–10): média de foco, energia, sono, humor, estresse invertido e dor invertida */
function prontidao(r){if(!r)return null;const v=[_n(r.foco),_n(r.energia),_n(r.sono),_n(r.humor),_n(r.estresse)==null?null:11-r.estresse,_n(r.dor)==null?null:10-r.dor].filter(x=>x!=null);return v.length?v.reduce((s,x)=>s+x,0)/v.length:null}
/* sinais de alerta de um check-in */
function alertasCk(r){const a=[];if(!r)return a;const n=k=>_n(r[k]);
  if(n("foco")!=null&&n("foco")<=4)a.push("foco baixo");if(n("energia")!=null&&n("energia")<=4)a.push("energia baixa");if(n("sono")!=null&&n("sono")<=4)a.push("sono ruim");
  if(n("humor")!=null&&n("humor")<=3)a.push("humor baixo");if(n("estresse")!=null&&n("estresse")>=8)a.push("estresse alto");if(n("dor")!=null&&n("dor")>=7)a.push("dor forte");return a}
function nivelCk(r){if(alertasCk(r).length)return"alto";const n=k=>_n(r&&r[k]);if((n("foco")!=null&&n("foco")<=6)||(n("energia")!=null&&n("energia")<=6)||(n("estresse")!=null&&n("estresse")>=6)||(n("dor")!=null&&n("dor")>=4))return"atencao";return"ok"}
const NIVEL_COR={alto:"#D2456C",atencao:"#f59e0b",ok:"#22c55e"};
const NIVEL_TXT={alto:"Atenção imediata",atencao:"Acompanhar",ok:"Bem"};
const CRITERIO_RISCO="Atenção imediata quando: foco, energia ou sono ≤ 4 · humor ≤ 3 · estresse ≥ 8 · dor ≥ 7.";
function mediaCampo(lista,k){const v=lista.map(r=>_n(r[k])).filter(x=>x!=null);return v.length?v.reduce((s,x)=>s+x,0)/v.length:null}
function tendCampo(lista,k){const chron=[...lista].sort((a,b)=>String(a.data).localeCompare(String(b.data))).map(r=>_n(r[k])).filter(x=>x!=null);if(chron.length<4)return"→";const h=Math.floor(chron.length/2),a1=chron.slice(0,h).reduce((s,x)=>s+x,0)/h,a2=chron.slice(h).reduce((s,x)=>s+x,0)/(chron.length-h);return a2-a1>=.5?"↑":a1-a2>=.5?"↓":"→"}
const fmt1=v=>v==null||isNaN(v)?"—":(+v).toFixed(1).replace(".",",");
const diaISO=d=>{const x=d instanceof Date?d:_dt(d);if(!x)return"";const p=n=>String(n).padStart(2,"0");return`${x.getFullYear()}-${p(x.getMonth()+1)}-${p(x.getDate())}`};
const hojeLocal=()=>diaISO(new Date());
const somaDias=(iso,n)=>{const d=_dt(iso)||new Date();d.setDate(d.getDate()+n);return diaISO(d)};

/* ── treinos e carga (PSE da sessão, método de Foster) ── */
const TREINO_TIPOS={forca:"Força",tecnico:"Técnico",tatico:"Tático",fisico:"Físico / condicionamento",recuperacao:"Recuperação",jogo:"Jogo / competição",mental:"Mental",outro:"Outro"};
const PSE_ESCALA=["Repouso","Muito, muito fácil","Fácil","Moderado","Um pouco difícil","Difícil","Difícil +","Muito difícil","Muito difícil +","Quase máximo","Máximo"];
const TREINO_STATUS={prescrito:"Prescrito",realizado:"Realizado",nao_realizado:"Não realizado"};
/* carga interna = duração (min) × PSE (0–10), em unidades arbitrárias (UA) */
const cargaDe=t=>{const r=t&&t.realizado;if(!r)return 0;const d=_n(r.duracao),p=_n(r.pse);return d!=null&&p!=null?Math.round(d*p):0};
const dataTreino=t=>t.realizado&&t.realizado.data||t.data||"";
function cargasDiarias(treinos){const m={};treinos.forEach(t=>{if(t.status!=="realizado")return;const d=String(dataTreino(t)).slice(0,10);if(!d)return;m[d]=(m[d]||0)+cargaDe(t)});return m}
/* relação aguda:crônica — 7 dias ÷ média semanal dos últimos 28 dias */
function analiseCarga(treinos,ref=hojeLocal()){
  const m=cargasDiarias(treinos),dias=n=>Array.from({length:n},(_,i)=>m[somaDias(ref,-i)]||0);
  const d7=dias(7),d28=dias(28),aguda=d7.reduce((s,x)=>s+x,0),cronica=d28.reduce((s,x)=>s+x,0)/4;
  const datas=Object.keys(m).filter(d=>m[d]>0).sort(),hist=datas.length?Math.round((_dt(ref)-_dt(datas[0]))/864e5)+1:0;
  const media=aguda/7,dp=Math.sqrt(d7.reduce((s,x)=>s+(x-media)**2,0)/7),monot=dp>0?media/dp:null;
  const acwr=cronica>0?aguda/cronica:null;
  const zona=acwr==null?"sem":acwr<.8?"baixa":acwr<=1.3?"ideal":acwr<=1.5?"atencao":"risco";
  const semanas=Array.from({length:8},(_,i)=>{const fim=somaDias(ref,-7*i),ini=somaDias(fim,-6);let s=0;for(let k=0;k<7;k++)s+=m[somaDias(ini,k)]||0;return{ini,fim,carga:s}}).reverse();
  return{aguda,cronica,acwr,zona,monotonia:monot,strain:monot!=null?aguda*monot:null,historicoDias:hist,suficiente:hist>=21,semanas,sessoes7:treinos.filter(t=>t.status==="realizado"&&String(dataTreino(t)).slice(0,10)>=somaDias(ref,-6)).length};
}
const ZONA_TXT={sem:"Sem dados",baixa:"Abaixo do habitual",ideal:"Zona adequada",atencao:"Atenção",risco:"Risco elevado"};
const ZONA_COR={sem:"#9AA3CF",baixa:"#60a5fa",ideal:"#4ade80",atencao:"#f59e0b",risco:"#EC7896"};
const CRITERIO_CARGA="Carga = minutos × PSE (0–10), em UA. Relação aguda:crônica = carga dos últimos 7 dias ÷ média semanal dos últimos 28 dias. Zona adequada entre 0,8 e 1,3; acima de 1,5 indica salto de carga. Precisa de pelo menos 3 semanas de registros.";

/* ── lesões ── */
const LESAO_GRAV={minima:"Mínima (1–3 dias)",leve:"Leve (4–7 dias)",moderada:"Moderada (8–28 dias)",grave:"Grave (mais de 28 dias)"};
const LESAO_STATUS={afastado:"Afastado",reabilitacao:"Em reabilitação",restricao:"Treina com restrição",liberado:"Liberado"};
const LESAO_STATUS_COR={afastado:"#EC7896",reabilitacao:"#f59e0b",restricao:"#60a5fa",liberado:"#4ade80"};
const LESAO_TIPOS=["Muscular","Articular / ligamentar","Tendínea","Óssea","Contusão","Concussão","Pele / corte","Outra"];
const LESAO_MEC=["Contato","Sem contato","Sobrecarga","Outro"];
const LADOS=["—","Direito","Esquerdo","Bilateral"];
const lesaoAtiva=l=>l&&l.status&&l.status!=="liberado"&&!l.anulada;

/* ── avaliações físicas: chave, nome, unidade, categoria, menor é melhor ── */
const AVAL_TESTES=[
  ["peso","Peso corporal","kg","Antropometria",null],["altura","Estatura","cm","Antropometria",null],["gordura","Gordura corporal","%","Antropometria",true],["cintura","Circunferência da cintura","cm","Antropometria",null],
  ["cmj","Salto vertical (CMJ)","cm","Potência",false],["sj","Squat jump","cm","Potência",false],["horizontal","Salto horizontal","cm","Potência",false],
  ["sprint10","Sprint 10 m","s","Velocidade",true],["sprint30","Sprint 30 m","s","Velocidade",true],["ttest","Agilidade (T-test)","s","Velocidade",true],
  ["yoyo","Yo-Yo IR1","m","Resistência",false],["vo2","VO₂máx estimado","ml/kg/min","Resistência",false],["fcrep","FC de repouso","bpm","Resistência",true],
  ["preensao","Preensão manual","kgf","Força",false],["rm_agach","1RM agachamento","kg","Força",false],["rm_supino","1RM supino","kg","Força",false],
  ["flex","Sentar e alcançar","cm","Flexibilidade",false],["outro","Outro teste","","Outro",null]
];
const avalTeste=k=>AVAL_TESTES.find(t=>t[0]===k)||["outro","Outro teste","","Outro",null];
const nomeAval=a=>a.teste==="outro"?(a.nomeTeste||"Outro teste"):avalTeste(a.teste)[1];

/* ── notas do prontuário por área ── */
const AREA_PROPRIA={psicologo:"psico",assistente:"psico",medico:"medica",fisioterapeuta:"fisio",treinador:"treino",admin:"geral"};
const colNotas=area=>`notas_${area}`;
const autorTxt=n=>n.autorNome?`${n.autorNome}${n.autorCargo?" · "+(CARGOS[n.autorCargo]||n.autorCargo):""}`:"Registro anterior (sem autor)";
const podeEditarNota=n=>n&&n.autorId===APP.user.uid&&!n.anulada&&Date.now()-(_dt(n.criadoTs||n.data)?.getTime()||0)<24*3600e3;

/* ════ ajustes de funções da versão anterior ════ */
function atlSelect(atletas,selId){return`<select id="atl-sel" style="width:min(100%,320px);font-size:12px;font-family:'Archivo',sans-serif;font-weight:700;letter-spacing:.12em;text-transform:uppercase" aria-label="Atleta"><option value="">Selecione o Atleta...</option>${atletas.map(a=>`<option value="${esc(a._id)}"${a._id===selId?" selected":""}>${esc(a.nome)}${a.esporte?" · "+esc(a.esporte):""}</option>`).join("")}</select>`}
async function gerarPDF(viewId,fileName,isLandscape=false){
  const elemento=document.getElementById(viewId);if(!elemento)return;if(!await garantirPDF())return;
  const botoes=elemento.querySelectorAll("button");botoes.forEach(b=>b.style.visibility="hidden");
  const opt={margin:10,filename:fileName+".pdf",image:{type:"jpeg",quality:.95},html2canvas:{scale:2,useCORS:true,backgroundColor:"#060B42"},jsPDF:{unit:"mm",format:"a4",orientation:isLandscape?"landscape":"portrait"}};
  try{await html2pdf().set(opt).from(elemento).save()}catch(e){registrarErro("pdf",e);avisar("Não foi possível gerar o PDF.","erro")}
  botoes.forEach(b=>b.style.visibility="");
}
/* análise de vídeo: a chave da IA fica só no servidor; aqui só vão 5 quadros do vídeo */
async function runRealAIAnalysisSecure(frames,resultArea,ctx={},tentou=false){
  const erro=t=>{if(resultArea)resultArea.innerHTML=`<p style="color:#EC7896;font-size:13px">${esc(t)}</p>`;return null};
  if(!FB.token)return erro("Sessão expirada. Entre novamente.");
  try{await FB.garantirToken()}catch(e){return erro("Sessão expirada. Entre novamente.")}
  try{const r=await FB.call("analisarVideo",{frames,esporte:limitar(ctx.esporte||"",60)});if(r&&(r.pontosFortes||r.resumo))return normalizarIA(r)}
  catch(e){if(e.status===429)return erro("Muitas análises seguidas. Espere alguns minutos.");if(e.status===403||e.code==="PERMISSION_DENIED")return erro(e.message||"Sem permissão para analisar vídeos.");if(!(e.status===404||e.code==="REDE"||e.status===400&&/not\s*found/i.test(e.message)))registrarErro("ia_video_v3",e)}
  let resp,json={};
  try{resp=await fetch(`${FB.FN}/analyzeAthleteVideo`,{method:"POST",headers:{"Content-Type":"application/json","Authorization":"Bearer "+FB.token},body:JSON.stringify({frames,...ctx})});json=await resp.json().catch(()=>({}))}
  catch(e){return erro(navigator.onLine===false?"Sem conexão com a internet.":"Não foi possível falar com o servidor de análise.")}
  if(resp.status===401&&!tentou){try{await FB.renovar();return runRealAIAnalysisSecure(frames,resultArea,ctx,true)}catch(e){return erro("Sessão expirada. Entre novamente.")}}
  if(!resp.ok||json.error){registrarErro("ia_video","HTTP "+resp.status);return erro(resp.status===429?"Muitas análises seguidas. Espere alguns minutos.":resp.status===403?"Sem permissão para analisar vídeos.":"A análise falhou. Tente de novo com outro trecho do vídeo.")}
  return normalizarIA(json.result||{});
}
function normalizarIA(r){const lista=a=>(Array.isArray(a)?a:[]).slice(0,10).map(x=>limitar(String(x),400));return{pontosFortes:lista(r.pontosFortes),pontosAMelhorar:lista(r.pontosAMelhorar),planosDeAcao:lista(r.planosDeAcao),resumo:limitar(String(r.resumo||""),2000)}}
async function salvarAnaliseIA(uid,result){
  try{await FB.addDoc("ia_analises",{atletaId:uid,origem:"equipe",esporte:limitar(result.esporte||"",60),pontosFortes:result.pontosFortes||[],pontosAMelhorar:result.pontosAMelhorar||[],planosDeAcao:result.planosDeAcao||[],resumo:result.resumo||"",dataAnalise:new Date().toISOString(),analistId:APP.user.uid,analistNome:APP.user.nome});avisar("Análise salva no histórico do atleta.","ok");auditar("analise_ia_salva",{id:uid})}
  catch(e){avisar("Não foi possível salvar a análise.","erro")}
}
async function salvarTreinoMental(uid,dados){
  try{await FB.addDoc("treinos_mentais",{...dados,notas:limitar(dados.notas||"",2000),registradoPorNome:APP.user.nome});avisar("Treino mental registrado.","ok");return true}
  catch(e){avisar("Não foi possível registrar o treino mental.","erro");return false}
}
function modDossie(c,atletas){
  phdr(c,"Ficha completa do atleta","Dossiê do Atleta");
  const box=el("div");seletorAtleta(c,atletas,aid=>{box.innerHTML="";if(!aid)return;box.innerHTML=carregandoHTML("Reunindo os dados do atleta...");renderDossie(aid,box)});c.appendChild(box);
}

/* ════ ACESSO, CONSENTIMENTO E MEUS DADOS ════ */
async function entrarComo(d){
  APP.user={uid:FB.uid,nome:d?.nome||"",email:d?.email||"",nascimento:d?.nascimento||""};APP.perfil=d||{};
  APP.plan=PLANS[d?.plano]?d.plano:"starter";APP.cargo=CARGOS[d?.cargo]?d.cargo:"paciente";APP.adminFlag=d?.admin===true;APP.consent=d?.consentimento||null;APP.offline=false;
  guardarPerfilOffline(d||{});
  await carregarConfig();
  APP.esporte=isStaff(APP.cargo)?"":await carregarEsporte(FB.uid,d||null);
}
const precisaConsentimento=()=>!!APP.user&&(!APP.consent||APP.consent.versao!==TERMOS_VERSAO);

function renderAuth(root){
  let mode="login";
  const wrap=el("div","cs");wrap.style.cssText="flex:1;min-height:0;overflow-y:auto;display:flex;padding:24px 16px;position:relative";
  const glow=el("div","auth-glow");const art=el("div","auth-art");art.innerHTML=AM_ART.frag+AM_ART.speed;
  const pontos=el("div");pontos.style.cssText="position:absolute;inset:0;pointer-events:none;overflow:hidden;z-index:0";pontos.setAttribute("aria-hidden","true");
  [[8,12,"rgba(0,209,255,.14)",4,"floatA 7s ease-in-out infinite"],[82,68,"rgba(210,69,108,.22)",2.5,"floatB 9s ease-in-out infinite 1s"],[62,22,"rgba(0,209,255,.09)",3,"floatA 11s ease-in-out infinite 2s"],[18,78,"rgba(255,255,255,.12)",2.5,"floatC 8s ease-in-out infinite .5s"],[92,42,"rgba(210,69,108,.14)",2,"floatB 12s ease-in-out infinite 3s"]].forEach(([x,y,cor,r,an])=>{const d=el("div");d.style.cssText=`position:absolute;left:${x}%;top:${y}%;width:${r*2}px;height:${r*2}px;border-radius:50%;background:${cor};animation:${an};box-shadow:0 0 ${r*4}px ${cor}`;pontos.appendChild(d)});
  const cadastroAberto=CFG.publico.cadastroAberto!==false;
  const box=el("div","glass am-authbox");box.style.cssText="margin:auto;border-radius:3px;clip-path:var(--cut-lg);padding:40px 36px;width:100%;max-width:440px;position:relative;z-index:10;box-shadow:0 40px 100px rgba(0,0,0,.85),0 0 0 1px rgba(255,255,255,.07),inset 0 1px 0 rgba(255,255,255,.12),0 0 100px rgba(0,209,255,.06)";
  const req=`<ul class="am-req" id="a-req"><li data-r="len">8 caracteres ou mais</li><li data-r="let">Letras</li><li data-r="num">Números</li></ul>`;
  function draw(){
    const cad=mode==="cadastro",rec=mode==="recuperar";
    box.innerHTML=`<div style="text-align:center;margin-bottom:26px"><h1 class="am-logo a-scale" style="justify-content:center;margin:0 0 16px">${AM.logoV(220)}</h1><p class="slbl a-up d2" style="letter-spacing:.3em;color:var(--dim)">High Performance Lab</p></div>
      ${rec?`<p style="font-family:'Archivo',sans-serif;font-stretch:110%;font-style:italic;font-weight:800;font-size:16px;color:#EEF1F8;text-transform:uppercase;margin:0 0 6px">Recuperar acesso</p><p style="font-size:13px;color:var(--dim);line-height:1.6;margin:0 0 18px">Informe o e-mail da sua conta. Enviaremos um link para você criar uma nova senha.</p>`:(cadastroAberto?`<div class="tab-switch" style="margin-bottom:22px"><button class="tab-btn${!cad?" active":""}" id="m-login" type="button">Acessar</button><button class="tab-btn${cad?" active":""}" id="m-cad" type="button">Novo Registro</button></div>`:`<p class="am-note" style="margin:0 0 18px">Acesso para atletas convidados e equipe AceMind. Recebeu um convite? Use "Esqueci minha senha" para criar sua senha.</p>`)}
      <form id="a-form" novalidate style="display:flex;flex-direction:column;gap:12px">
        ${cad?`<input type="text" id="a-nome" placeholder="Nome completo" maxlength="80" autocomplete="name" required><label class="am-lbl" for="a-nasc">Data de nascimento</label><input type="date" id="a-nasc" required max="${today()}"><select id="a-esp" aria-label="Modalidade esportiva">${sportOptions("","Sua modalidade esportiva...")}</select><input type="text" id="a-esp-outro" placeholder="Qual modalidade?" maxlength="40" hidden>`:""}
        <input type="email" id="a-email" placeholder="E-mail" maxlength="120" autocomplete="${cad?"email":"username"}" required>
        ${rec?"":`<div class="am-pass"><input type="password" id="a-senha" placeholder="${cad?"Crie uma senha":"Senha"}" maxlength="128" autocomplete="${cad?"new-password":"current-password"}" required><button type="button" class="am-olho" id="a-olho" aria-label="Mostrar senha">${AMI("eye")}</button></div>`}
        ${cad?`${req}<input type="password" id="a-senha2" placeholder="Repita a senha" maxlength="128" autocomplete="new-password" required><div class="am-note">Cadastro para <strong style="color:var(--y)">atletas</strong>. Contas da equipe são criadas pela administração.</div>`:""}
        <button class="btn-y" id="a-submit" type="submit" style="margin-top:4px;font-size:14px;padding:14px 24px">${rec?"Enviar link →":cad?"Criar conta →":"Entrar no Lab →"}</button>
        <div id="a-err" role="alert" style="color:#EC7896;font-size:12.5px;text-align:center;min-height:16px;line-height:1.5"></div>
        ${rec?`<button type="button" class="am-link" id="a-voltar">← Voltar para o login</button>`:!cad?`<button type="button" class="am-link" id="a-esqueci">Esqueci minha senha</button>`:""}
        <p class="am-ver">AceMind · versão ${AM_VERSAO}</p>
      </form>`;
    $("m-login")&&($("m-login").onclick=()=>{mode="login";draw()});$("m-cad")&&($("m-cad").onclick=()=>{mode="cadastro";draw()});
    $("a-esqueci")&&($("a-esqueci").onclick=()=>{mode="recuperar";draw()});$("a-voltar")&&($("a-voltar").onclick=()=>{mode="login";draw()});
    $("a-esp")?.addEventListener("change",e=>{$("a-esp-outro").hidden=e.target.value!=="outro"});
    $("a-olho")&&($("a-olho").onclick=()=>{const i=$("a-senha");i.type=i.type==="password"?"text":"password"});
    if(cad)$("a-senha").addEventListener("input",e=>{const v=e.target.value;$("a-req").querySelectorAll("li").forEach(li=>li.classList.toggle("ok",li.dataset.r==="len"?v.length>=8:li.dataset.r==="let"?/[A-Za-z]/.test(v):/\d/.test(v)))});
    const btn=$("a-submit"),erro=t=>{$("a-err").textContent=t};
    $("a-form").onsubmit=async e=>{
      e.preventDefault();erro("");const email=$("a-email").value.trim().toLowerCase();
      if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))return erro("Informe um e-mail válido.");
      if(rec){btn.disabled=true;try{await FB.enviarEmail("PASSWORD_RESET",{email})}catch(x){}btn.disabled=false;box.querySelector("#a-form").innerHTML=`<div class="am-note" style="text-align:left">Se existir uma conta com <strong>${esc(email)}</strong>, você vai receber um e-mail com o link para criar uma nova senha. Confira também a caixa de spam.</div><button type="button" class="btn-y" id="a-ok">Voltar para o login</button>`;$("a-ok").onclick=()=>{mode="login";draw()};return}
      const senha=$("a-senha").value;if(!senha)return erro("Informe a senha.");
      const t=tentativas(email);if(t.ate>Date.now())return erro(`Muitas tentativas neste aparelho. Tente de novo em ${Math.ceil((t.ate-Date.now())/60000)} min.`);
      if(cad){
        const nome=limitar($("a-nome").value.trim(),80),nasc=$("a-nasc").value;
        if(nome.length<3)return erro("Informe seu nome completo.");
        const id=idade(nasc);if(id===null||id<5||id>100)return erro("Informe uma data de nascimento válida.");
        if(!senhaForte(senha))return erro("A senha precisa ter 8 caracteres ou mais, com letras e números.");
        if(senha!==$("a-senha2").value)return erro("As senhas não são iguais.");
        const espK=$("a-esp").value,esporte=espK==="outro"?limitar($("a-esp-outro").value.trim(),40):(SPORTS[espK]?.nome||"");
        btn.disabled=true;btn.textContent="Criando conta...";
        try{
          const j=await FB.signUp(email,senha);
          const dados={nome,email,cargo:"paciente",plano:"starter",esporte,nascimento:nasc,dataCadastro:new Date().toISOString()};
          await FB.setDoc(`usuarios/${FB.uid}`,dados);
          FB.enviarEmail("VERIFY_EMAIL",{idToken:j.idToken}).catch(()=>{});
          await entrarComo(dados);auditar("conta_criada",{id:FB.uid,nome});render();
        }catch(x){erro(msgErroAuth(x.message));btn.disabled=false;btn.textContent="Criar conta →"}
        return;
      }
      btn.disabled=true;btn.textContent="Entrando...";
      try{
        await FB.signIn(email,senha);registrarTentativa(email,true);
        const d=await FB.getDoc(`usuarios/${FB.uid}`);
        if(!d){registrarTentativa(email,true);if(cadastroAberto){completar(email);return}FB.signOut();throw new FBError("Conta sem cadastro no app. Fale com a equipe AceMind.","SEM_CADASTRO")}
        if(d.desativado===true){FB.signOut();throw new FBError("Esta conta está desativada. Fale com a equipe AceMind.","USER_DISABLED")}
        await entrarComo(d);auditar("login");render();filaEnviar();
      }catch(x){if(x.code!=="REDE"&&x.code!=="SEM_CADASTRO")registrarTentativa(email,false);erro(x.code==="SEM_CADASTRO"||x.code==="USER_DISABLED"?x.message:msgErroAuth(x.message));btn.disabled=false;btn.textContent="Entrar no Lab →"}
    };
  }
  /* conta de login sem perfil no app (cadastro interrompido): completa aqui, sempre como atleta Starter */
  function completar(email){
    box.querySelector("#a-form").innerHTML=`<p style="font-family:'Archivo',sans-serif;font-stretch:110%;font-style:italic;font-weight:800;font-size:16px;color:#EEF1F8;text-transform:uppercase;margin:0">Complete seu cadastro</p><p class="am-dica" style="margin:0 0 4px">Sua conta existe, mas o cadastro no app não foi concluído.</p><input type="text" id="cc-nome" placeholder="Nome completo" maxlength="80" autocomplete="name"><label class="am-lbl" for="cc-nasc">Data de nascimento</label><input type="date" id="cc-nasc" max="${today()}"><select id="cc-esp" aria-label="Modalidade esportiva">${sportOptions("","Sua modalidade esportiva...")}</select><button class="btn-y" type="submit" id="cc-ok">Concluir cadastro →</button><div id="cc-err" role="alert" style="color:#EC7896;font-size:12.5px;text-align:center;min-height:16px"></div><button type="button" class="am-link" id="cc-sair">Sair</button>`;
    box.querySelector("#cc-sair").onclick=()=>{FB.signOut();draw()};
    box.querySelector("#a-form").onsubmit=async e=>{e.preventDefault();const nome=limitar(box.querySelector("#cc-nome").value.trim(),80),nasc=box.querySelector("#cc-nasc").value,k=box.querySelector("#cc-esp").value,er=t=>box.querySelector("#cc-err").textContent=t;
      if(nome.length<3)return er("Informe seu nome completo.");const id=idade(nasc);if(id===null||id<5||id>100)return er("Informe uma data de nascimento válida.");
      const dados={nome,email,cargo:"paciente",plano:"starter",esporte:SPORTS[k]?.nome||"",nascimento:nasc,dataCadastro:new Date().toISOString()};
      try{await FB.setDoc(`usuarios/${FB.uid}`,dados);await entrarComo(dados);auditar("conta_completada",{id:FB.uid,nome});render()}catch(x){er(x.status===403?"O cadastro está fechado. Fale com a equipe AceMind.":"Não foi possível salvar. Tente de novo.")}};
  }
  wrap.appendChild(pontos);wrap.appendChild(art);wrap.appendChild(glow);wrap.appendChild(box);root.appendChild(wrap);draw();
}

/* ── textos legais (modelo — revisar com advogado) ── */
function textoPrivacidade(){
  const p=CFG.publico||{},emp=esc(p.empresa||"AceMind"),dpo=p.encarregadoEmail?`${esc(p.encarregadoNome||"Encarregado de dados")} — ${esc(p.encarregadoEmail)}`:"o contato de privacidade informado pela AceMind";
  return`<h4>1. Quem cuida dos seus dados</h4><p>${emp} é a controladora dos dados tratados neste app. Encarregado (LGPD): ${dpo}.</p>
<h4>2. Quais dados</h4><p>Cadastro (nome, e-mail, data de nascimento, modalidade); bem-estar (check-ins de foco, energia, sono, dor, estresse, humor e anotações); desempenho (competições, treinos, carga); saúde (anamnese, lesões, avaliações físicas e registros clínicos — dados pessoais sensíveis); pedidos de S.O.S; vídeos, se você autorizar; e registros técnicos de acesso e de erros.</p>
<h4>3. Para quê</h4><p>Acompanhar seu desenvolvimento esportivo, físico, médico e psicológico pela equipe multidisciplinar; avisar a equipe em pedidos de S.O.S; gerar relatórios; manter o app seguro.</p>
<h4>4. Quem acessa</h4><p>Só profissionais da equipe, e cada um vê o que a sua profissão precisa. Registros de psicologia, por exemplo, ficam restritos a psicólogos. Todo acesso a dossiês e prontuários fica registrado.</p>
<h4>5. Compartilhamento</h4><p>Usamos o Google Firebase para armazenamento e login, o que pode envolver servidores fora do Brasil com as salvaguardas da LGPD. Vídeos enviados para análise passam por um serviço de inteligência artificial. Não vendemos seus dados.</p>
<h4>6. Por quanto tempo</h4><p>Enquanto durar o acompanhamento. Registros clínicos são guardados pelo prazo exigido pelos conselhos profissionais e pela lei, mesmo após o fim da conta.</p>
<h4>7. Seus direitos</h4><p>Confirmar o tratamento, acessar, corrigir, pedir eliminação, portabilidade, saber com quem compartilhamos e revogar o consentimento. Use "Meus dados e privacidade" no app ou fale com o encarregado.</p>
<h4>8. Segurança</h4><p>Conexão criptografada, acesso por profissão, registro de auditoria e encerramento automático de sessões inativas da equipe.</p>
<h4>9. Menores de idade</h4><p>Para atletas com menos de 18 anos, o tratamento depende da autorização do responsável legal.</p>`;
}
function textoTermos(){
  return`<h4>1. O serviço</h4><p>O app reúne o acompanhamento esportivo, físico, médico e psicológico do atleta pela equipe AceMind, conforme o plano contratado.</p>
<h4>2. Sua conta</h4><p>A conta é pessoal. Guarde sua senha e avise a equipe se suspeitar de uso indevido.</p>
<h4>3. S.O.S não é serviço de emergência</h4><p>O botão S.O.S avisa a equipe, que responde assim que possível. Em risco imediato, ligue 192 (SAMU) ou 188 (CVV, apoio emocional 24 horas, gratuito).</p>
<h4>4. Conteúdo</h4><p>Registre informações verdadeiras. Não publique conteúdo ofensivo ou de terceiros sem autorização.</p>
<h4>5. Planos</h4><p>Os recursos disponíveis dependem do plano (Starter, Pro ou Elite).</p>
<h4>6. Alterações</h4><p>Quando estes termos mudarem, você será avisado no app e poderá aceitar a nova versão.</p>`;
}
function verTexto(tipo){abrirModal(`<p class="slbl" style="color:var(--y);margin-bottom:6px">Versão ${TERMOS_VERSAO}</p><h3 style="font-family:'Archivo',sans-serif;font-stretch:112%;font-style:italic;font-weight:900;font-size:18px;color:#EEF1F8;text-transform:uppercase;margin:0 0 14px">${tipo==="privacidade"?"Política de Privacidade":"Termos de Uso"}</h3><div class="am-legal">${tipo==="privacidade"?textoPrivacidade():textoTermos()}</div><button class="btn-y" data-fechar style="margin-top:18px">Fechar</button>`,{largura:640})}

/* ── consentimento (aparece no primeiro acesso e quando os termos mudam) ── */
function renderConsentimento(root){
  const staff=isStaff(APP.cargo);
  const wrap=el("div","cs");wrap.style.cssText="flex:1;min-height:0;display:flex;padding:24px 16px;overflow-y:auto";
  const box=el("div","glass");box.style.cssText="border-radius:3px;clip-path:var(--cut-lg);padding:32px 28px;width:100%;max-width:640px;margin:auto";
  let nasc=APP.user.nascimento||"";
  function draw(){
    const id=idade(nasc),menor=!staff&&id!==null&&id<18;
    box.innerHTML=`<div style="display:flex;align-items:center;gap:10px;margin-bottom:6px"><div class="section-accent"></div><p class="slbl" style="letter-spacing:.22em">Versão ${TERMOS_VERSAO}</p></div>
    <h2 class="ptitle" style="font-size:28px;margin:0 0 10px">${APP.consent?"Os termos mudaram":"Antes de começar"}</h2>
    <p style="font-size:13.5px;color:#B4BBE0;line-height:1.65;margin:0 0 18px">${staff?"Você vai acessar dados pessoais e de saúde de atletas. Confirme o compromisso de sigilo para continuar.":"O AceMind guarda informações de saúde e bem-estar para que a equipe acompanhe você de perto. Leia e confirme o que autoriza."}</p>
    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:18px"><button type="button" class="btn-sec" id="cs-termos" style="width:auto">${AMI("file")} Termos de Uso</button><button type="button" class="btn-sec" id="cs-priv" style="width:auto">${AMI("lock")} Política de Privacidade</button></div>
    <form id="cs-form" style="display:flex;flex-direction:column;gap:12px">
      ${staff?`<label class="am-check"><input type="checkbox" id="cs-sigilo" required><span>Comprometo-me a manter sigilo sobre os dados dos atletas, a acessar só o necessário para o meu trabalho e a seguir a Política de Privacidade da AceMind.</span></label>`
      :`${APP.user.nascimento?"":`<div><label class="am-lbl" for="cs-nasc">Sua data de nascimento</label><input type="date" id="cs-nasc" value="${esc(nasc)}" max="${today()}" required></div>`}
      <label class="am-check"><input type="checkbox" id="cs-termo" required><span>Li e aceito os Termos de Uso e a Política de Privacidade.</span></label>
      <label class="am-check"><input type="checkbox" id="cs-saude" required><span>Autorizo o tratamento dos meus dados de saúde e bem-estar (check-ins, lesões, avaliações e registros clínicos) pela equipe multidisciplinar, para o meu acompanhamento.</span></label>
      <label class="am-check"><input type="checkbox" id="cs-video"><span>Autorizo o envio e a análise de vídeos meus para avaliação técnica <em style="color:var(--dim)">(opcional)</em>.</span></label>
      ${menor?`<div class="am-resp"><p class="slbl" style="color:#EC7896;margin-bottom:10px">Atleta menor de 18 anos · autorização do responsável</p><div class="am-grid2"><input type="text" id="cs-rnome" placeholder="Nome do responsável" maxlength="80" required><input type="email" id="cs-remail" placeholder="E-mail do responsável" maxlength="120" required></div><div class="am-grid2" style="margin-top:10px"><input type="tel" id="cs-rtel" placeholder="Telefone do responsável" maxlength="30" required><select id="cs-rpar" required><option value="">Parentesco...</option><option>Mãe</option><option>Pai</option><option>Tutor(a) legal</option><option>Outro responsável legal</option></select></div><label class="am-check" style="margin-top:10px"><input type="checkbox" id="cs-rok" required><span>Declaro que sou o responsável legal pelo atleta e autorizo o tratamento dos dados descritos acima.</span></label></div>`:""}`}
      <div id="cs-err" role="alert" style="color:#EC7896;font-size:12.5px;min-height:14px"></div>
      <div style="display:flex;gap:10px;justify-content:space-between;flex-wrap:wrap"><button type="button" class="btn-danger" id="cs-sair">Sair</button><button type="submit" class="btn-y" id="cs-ok" style="width:auto;padding:12px 24px">Aceitar e continuar</button></div>
    </form>`;
    box.querySelector("#cs-termos").onclick=()=>verTexto("termos");box.querySelector("#cs-priv").onclick=()=>verTexto("privacidade");
    box.querySelector("#cs-sair").onclick=()=>sairDoApp();
    const n=box.querySelector("#cs-nasc");if(n)n.onchange=e=>{nasc=e.target.value;const keep={t:box.querySelector("#cs-termo").checked,s:box.querySelector("#cs-saude").checked,v:box.querySelector("#cs-video").checked};draw();box.querySelector("#cs-termo").checked=keep.t;box.querySelector("#cs-saude").checked=keep.s;box.querySelector("#cs-video").checked=keep.v};
    box.querySelector("#cs-form").onsubmit=async e=>{
      e.preventDefault();const err=t=>{box.querySelector("#cs-err").textContent=t},q=s=>box.querySelector(s);
      const agora=new Date().toISOString();let reg,resumo;
      if(staff){if(!q("#cs-sigilo").checked)return err("Confirme o compromisso de sigilo.");reg={tipo:"equipe",itens:{sigilo:true}};resumo={versao:TERMOS_VERSAO,aceitoEm:agora}}
      else{
        if(!nasc||idade(nasc)===null)return err("Informe sua data de nascimento.");
        if(!q("#cs-termo").checked||!q("#cs-saude").checked)return err("Para usar o app, aceite os termos e autorize o tratamento dos dados de saúde.");
        const video=q("#cs-video").checked,men=idade(nasc)<18;let resp=null;
        if(men){const rn=limitar(q("#cs-rnome").value.trim(),80),re=q("#cs-remail").value.trim().toLowerCase(),rt=limitar(q("#cs-rtel").value.trim(),30),rp=q("#cs-rpar").value;if(rn.length<3||!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(re)||rt.replace(/\D/g,"").length<8||!rp||!q("#cs-rok").checked)return err("Preencha os dados do responsável e confirme a autorização.");resp={nome:rn,email:re,telefone:rt,parentesco:rp}}
        reg={tipo:"atleta",itens:{termos:true,saude:true,video},menor:men,responsavel:resp};resumo={versao:TERMOS_VERSAO,aceitoEm:agora,video,menor:men,responsavelNome:resp?resp.nome:""};
      }
      q("#cs-ok").disabled=true;
      try{
        await FB.addDoc("consentimentos",{uid:APP.user.uid,nome:APP.user.nome,versao:TERMOS_VERSAO,aceitoEm:agora,ua:navigator.userAgent.slice(0,160),...reg});
        const upd={consentimento:resumo};if(!staff&&nasc&&nasc!==APP.user.nascimento)upd.nascimento=nasc;if(reg.responsavel)upd.responsavel=reg.responsavel;
        await FB.updateDoc(`usuarios/${APP.user.uid}`,upd);
        APP.consent=resumo;if(upd.nascimento)APP.user.nascimento=nasc;Object.assign(APP.perfil||{},upd);auditar("consentimento_aceito",{id:APP.user.uid,nome:APP.user.nome},TERMOS_VERSAO+(reg.menor?" (responsável)":""));render();
      }catch(x){q("#cs-ok").disabled=false;err("Não foi possível salvar agora. "+(x.code==="REDE"?"Verifique a internet.":"Tente de novo."))}
    };
  }
  wrap.appendChild(box);root.appendChild(wrap);draw();
}

/* ── faixa de confirmação de e-mail ── */
function faixaEmail(root){
  const c=FB.claims();if(c.email_verified!==false||LS.get("am_vf_"+FB.uid)==="1")return;
  const f=el("div","am-faixa");f.setAttribute("role","status");
  f.innerHTML=`<span>${AMI("alert")} Confirme seu e-mail para proteger sua conta.</span><span style="display:flex;gap:8px;flex-wrap:wrap"><button type="button" id="vf-env">Reenviar e-mail</button><button type="button" id="vf-ok">Já confirmei</button><button type="button" id="vf-x" aria-label="Fechar aviso">✕</button></span>`;
  f.querySelector("#vf-env").onclick=async e=>{e.currentTarget.disabled=true;try{await FB.enviarEmail("VERIFY_EMAIL",{idToken:FB.token});avisar("Enviamos o link de confirmação para "+APP.user.email+".","ok")}catch(x){avisar("Não foi possível enviar agora.","erro")}};
  f.querySelector("#vf-ok").onclick=async()=>{try{await FB.renovar()}catch(x){}if(FB.claims().email_verified){avisar("E-mail confirmado. Obrigado!","ok");f.remove()}else avisar("Ainda não aparece como confirmado. Abra o link do e-mail e tente de novo.","info")};
  f.querySelector("#vf-x").onclick=()=>{LS.set("am_vf_"+FB.uid,"1");f.remove()};
  root.appendChild(f);
}

/* ── Meus dados e privacidade (atleta) / Minha conta (equipe) ── */
async function coletarMeusDados(uid){
  const ok=p=>Promise.resolve(p).then(x=>x,()=>null);
  const[u,ck,pt,ev,tr,sos,ag,ia,cons,sol]=await Promise.all([ok(FB.getDoc(`usuarios/${uid}`)),ok(FB.todos("checkins","pacienteId",uid)),ok(FB.getDocs(`prontuarios/${uid}/partidas`)),ok(FB.getDocs(`atletas/${uid}/eventos`)),ok(FB.getDocs(`atletas/${uid}/treinos`)),ok(FB.todos("sos_alertas","pacienteId",uid)),ok(FB.todos("agenda","atletaId",uid)),ok(FB.todos("ia_analises","atletaId",uid)),ok(FB.todos("consentimentos","uid",uid)),ok(FB.todos("solicitacoes_lgpd","uid",uid))]);
  return{geradoEm:new Date().toISOString(),app:"AceMind "+AM_VERSAO,cadastro:u,checkins:ck,competicoes:pt,calendario:ev,treinos:tr,sos:sos,sessoes:ag,analisesIA:ia,consentimentos:cons,solicitacoes:sol};
}
function renderMeusDados(c){
  const staff=isStaff(APP.cargo),cl=FB.claims(),cs=APP.consent||{};
  const box=el("div");box.style.cssText="display:flex;flex-direction:column;gap:12px";c.appendChild(box);
  const card=(t,ic,inner)=>`<div class="am-card"><h4 class="tm-subtitle" style="font-size:.95rem;margin-bottom:12px">${AMI(ic)} ${t}</h4>${inner}</div>`;
  const linha=(a,b)=>`<div class="dk-row"><span class="slbl" style="min-width:110px">${a}</span><span style="font-size:13px;color:#EEF1F8;min-width:0;word-break:break-word">${b}</span></div>`;
  box.innerHTML=`${staff?"":`<h3 class="ptitle" style="font-size:22px;margin:4px 0 2px">Meus dados</h3>`}
  ${card("Conta","user",`${linha("Nome",esc(APP.user.nome))}${linha("E-mail",esc(APP.user.email)+(cl.email_verified===false?' <span class="am-tag r">não confirmado</span>':cl.email_verified?' <span class="am-tag g">confirmado</span>':""))}${linha("Perfil",esc(CARGOS[APP.cargo]||APP.cargo)+(ehAdmin()&&APP.cargo!=="admin"?" · administração":""))}${staff?"":linha("Modalidade",esc(SP().nome||"—"))}${linha("Plano",(PLANS[APP.plan]||PLANS.starter).label)}`)}
  ${staff?"":card("Contato e emergência","phone",`<form id="md-ct" style="display:flex;flex-direction:column;gap:10px"><div class="am-grid2"><div><label class="slbl" for="md-tel">Seu telefone</label><input type="tel" id="md-tel" maxlength="30" value="${esc(APP.perfil?.telefone||"")}" placeholder="(11) 90000-0000"></div><div><label class="slbl" for="md-cen">Contato de emergência</label><input type="text" id="md-cen" maxlength="80" value="${esc(APP.perfil?.contatoEmergencia?.nome||"")}" placeholder="Nome"></div></div><div class="am-grid2"><div><label class="slbl" for="md-cet">Telefone do contato</label><input type="tel" id="md-cet" maxlength="30" value="${esc(APP.perfil?.contatoEmergencia?.telefone||"")}" placeholder="(11) 90000-0000"></div><div style="justify-content:flex-end"><button class="btn-sec" type="submit">Salvar contatos</button></div></div><p class="am-dica">A equipe usa estes números só em um S.O.S ou em emergência.${cs.menor?` Responsável legal: ${esc(APP.perfil?.responsavel?.nome||cs.responsavelNome||"—")}${APP.perfil?.responsavel?.telefone?" · "+esc(APP.perfil.responsavel.telefone):""}.`:""}</p></form>`)}
  ${card("Segurança","lock",`<div class="am-acoes"><button class="btn-sec" id="md-senha" type="button">Redefinir senha</button><button class="btn-sec" id="md-sessoes" type="button">Sair de todos os aparelhos</button><button class="btn-danger" id="md-sair" type="button">Sair deste aparelho</button></div><p class="am-dica">A redefinição envia um link para ${esc(APP.user.email)}. "Sair de todos os aparelhos" encerra o acesso em celulares e computadores onde você entrou.</p>`)}
  ${card("Privacidade","shield",`${linha("Termos aceitos",cs.versao?`versão ${esc(cs.versao)} em ${_fmtD(cs.aceitoEm)}`:"—")}${staff?"":linha("Vídeos",cs.video?"autorizado":"não autorizado")+(cs.menor?linha("Responsável",esc(cs.responsavelNome||"—")):"")}<div class="am-acoes" style="margin-top:12px"><button class="btn-sec" id="md-baixar" type="button">${AMI("download")} Baixar meus dados</button><button class="btn-sec" id="md-corr" type="button">Pedir correção</button><button class="btn-sec" id="md-excl" type="button">Pedir exclusão da conta</button>${staff?"":`<button class="btn-sec" id="md-video" type="button">${cs.video?"Revogar autorização de vídeo":"Autorizar vídeos"}</button>`}</div><div style="display:flex;gap:14px;flex-wrap:wrap;margin-top:10px"><button class="am-link" id="md-termos" type="button">Termos de Uso</button><button class="am-link" id="md-priv" type="button">Política de Privacidade</button></div><div id="md-sol" style="margin-top:12px"></div>`)}
  ${card("Notificações","bell",`<div id="md-push"></div>`)}`;
  const q=s=>box.querySelector(s);
  q("#md-ct")?.addEventListener("submit",async e=>{e.preventDefault();const tel=limitar(q("#md-tel").value.trim(),30),ce={nome:limitar(q("#md-cen").value.trim(),80),telefone:limitar(q("#md-cet").value.trim(),30)};try{await FB.updateDoc(`usuarios/${APP.user.uid}`,{telefone:tel,contatoEmergencia:ce});APP.perfil={...(APP.perfil||{}),telefone:tel,contatoEmergencia:ce};avisar("Contatos salvos.","ok")}catch(x){avisar("Não foi possível salvar.","erro")}});
  q("#md-termos").onclick=()=>verTexto("termos");q("#md-priv").onclick=()=>verTexto("privacidade");
  q("#md-sair").onclick=()=>sairDoApp();
  q("#md-senha").onclick=async e=>{const _b=e.currentTarget;_b.disabled=true;try{await FB.enviarEmail("PASSWORD_RESET",{email:APP.user.email});avisar("Link enviado para "+APP.user.email+".","ok");auditar("senha_redefinicao_pedida")}catch(x){avisar("Não foi possível enviar agora.","erro");_b.disabled=false}};
  q("#md-sessoes").onclick=async()=>{if(!await confirmar("Encerrar o acesso em todos os aparelhos? Você vai precisar entrar de novo.",{ok:"Encerrar"}))return;try{await FB.call("encerrarSessoes",{uid:APP.user.uid});await auditar("sessoes_encerradas",{id:APP.user.uid,nome:APP.user.nome});sairDoApp("logout")}catch(x){avisar("Recurso indisponível no momento (função de servidor não instalada).","erro")}};
  q("#md-baixar").onclick=async e=>{const b=e.currentTarget;b.disabled=true;b.textContent="Reunindo...";try{const d=await coletarMeusDados(APP.user.uid);baixarArquivo(JSON.stringify(d,null,2),`meus-dados-acemind-${today()}.json`,"application/json");auditar("dados_exportados_titular",{id:APP.user.uid,nome:APP.user.nome})}catch(x){avisar("Não foi possível gerar o arquivo.","erro")}b.disabled=false;b.innerHTML=`${AMI("download")} Baixar meus dados`};
  const pedir=async(tipo,txt)=>{const m=abrirModal(`<h3 class="ptitle" style="font-size:20px;margin:0 0 10px">${txt}</h3><p style="font-size:13px;color:#B4BBE0;line-height:1.6;margin:0 0 12px">${tipo==="excluir"?"A administração vai analisar o pedido. Registros clínicos são mantidos pelo prazo exigido pelos conselhos profissionais e pela lei; os demais dados são apagados.":"Descreva o que precisa ser corrigido."}</p><textarea id="sl-det" maxlength="1000" style="height:110px;font-size:13px;resize:vertical" placeholder="Detalhes (opcional)"></textarea><div style="display:flex;justify-content:flex-end;gap:10px;margin-top:14px"><button class="btn-sec" data-fechar style="width:auto">Cancelar</button><button class="btn-y" id="sl-ok" style="width:auto;padding:10px 18px">Enviar pedido</button></div>`,{largura:480});m.el.querySelector("#sl-ok").onclick=async()=>{try{await FB.addDoc("solicitacoes_lgpd",{uid:APP.user.uid,nome:APP.user.nome,email:APP.user.email,tipo,detalhe:limitar(m.el.querySelector("#sl-det").value.trim(),1000),status:"aberta",criadoEm:new Date().toISOString()});auditar("lgpd_pedido_"+tipo,{id:APP.user.uid,nome:APP.user.nome});avisar("Pedido enviado. Você acompanha o andamento aqui.","ok");m.fechar();listarPedidos()}catch(x){avisar("Não foi possível enviar.","erro")}}};
  q("#md-corr").onclick=()=>pedir("corrigir","Pedir correção de dados");q("#md-excl").onclick=()=>pedir("excluir","Pedir exclusão da conta");
  q("#md-video")&&(q("#md-video").onclick=async()=>{const v=!cs.video;try{const novo={...cs,video:v};await FB.updateDoc(`usuarios/${APP.user.uid}`,{consentimento:novo});await FB.addDoc("consentimentos",{uid:APP.user.uid,nome:APP.user.nome,versao:cs.versao||TERMOS_VERSAO,aceitoEm:new Date().toISOString(),tipo:"atleta",itens:{video:v},alteracao:"video",ua:navigator.userAgent.slice(0,160)});APP.consent=novo;auditar(v?"video_autorizado":"video_revogado",{id:APP.user.uid,nome:APP.user.nome});avisar(v?"Vídeos autorizados.":"Autorização de vídeo revogada.","ok");c.innerHTML="";renderMeusDados(c)}catch(x){avisar("Não foi possível salvar.","erro")}});
  const ST={aberta:"Aberto",em_andamento:"Em andamento",concluida:"Concluído",recusada:"Recusado"};
  async function listarPedidos(){const l=await FB.query("solicitacoes_lgpd","uid","==",APP.user.uid,"criadoEm","DESCENDING",20);const b=q("#md-sol");if(!b)return;b.innerHTML=l.length?`<p class="slbl" style="margin-bottom:6px">Seus pedidos</p>${l.map(s=>linha(_fmtD(s.criadoEm),`${esc({excluir:"Exclusão",corrigir:"Correção",exportar:"Exportação",revogar:"Revogação"}[s.tipo]||s.tipo)} · ${ST[s.status]||esc(s.status)}${s.resposta?` — ${esc(s.resposta)}`:""}`)).join("")}`:""}
  listarPedidos();painelPush(q("#md-push"));
}
function abrirMinhaConta(){const m=abrirModal(`<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px"><h3 class="ptitle" style="font-size:22px;margin:0">Minha conta</h3><button class="btn-sec" data-fechar style="width:auto;padding:8px 12px">✕</button></div><div id="mc-box"></div>`,{largura:620});renderMeusDados(m.el.querySelector("#mc-box"))}

/* ════ ESTRUTURA DO APP — raiz, topo, app do atleta, painel da equipe e início ════ */
Object.assign(AMI_P,{
  pulse:'<path d="M2 12h4.5l2.5-6 4 13 3-7h6"/>',
  dumbbell:'<path d="M6.5 6.5v11M17.5 6.5v11M3.5 9v6M20.5 9v6M6.5 12h11"/>',
  cross:'<path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z"/>',
  eye:'<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  logout:'<path d="M9 21H4V3h5M16 17l5-5-5-5M21 12H9"/>',
  mail:'<path d="M3 5h18v14H3z"/><path d="M3 6l9 7 9-7"/>',
  heart:'<path d="M12 20.5l-8.2-8.3a4.9 4.9 0 0 1 6.9-6.9L12 6.6l1.3-1.3a4.9 4.9 0 0 1 6.9 6.9z"/>',
  plus:'<path d="M12 4v16M4 12h16"/>',
  x:'<path d="M5 5l14 14M19 5L5 19"/>',
  edit:'<path d="M4 20h4L19.5 8.5l-4-4L4 16z"/><path d="M13.5 6.5l4 4"/>',
  trash:'<path d="M4 7h16M10 3h4M6 7l1 14h10l1-14M10 11v6M14 11v6"/>',
  link:'<path d="M10 14a4.5 4.5 0 0 0 6.4 0l3.2-3.2a4.5 4.5 0 0 0-6.4-6.4L12 5.6"/><path d="M14 10a4.5 4.5 0 0 0-6.4 0l-3.2 3.2a4.5 4.5 0 0 0 6.4 6.4l1.2-1.2"/>',
  pin:'<path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
  key:'<circle cx="7.5" cy="15.5" r="4.5"/><path d="M10.7 12.3L20 3M16 7l3 3M14 9l2 2"/>',
  smile:'<circle cx="12" cy="12" r="9"/><path d="M8 14.5s1.5 2 4 2 4-2 4-2M9 9.5h.01M15 9.5h.01"/>',
  menu:'<path d="M3 6h18M3 12h12M3 18h18"/>'
});

function render(){
  limparTimers("tela");limparTimers("app");pararCentralSOS();
  const app=$("app");app.innerHTML="";
  document.querySelectorAll("body > .ovl, body > .am-side, #am-sos-faixa").forEach(e=>e.remove());
  if(!APP.user){renderAuth(app);return}
  if(precisaConsentimento()){renderConsentimento(app);return}
  renderTopNav(app);faixaEmail(app);
  if(isStaff(APP.cargo)){renderDashboard(app);iniciarInatividade();iniciarCentralSOS()}
  else{renderMobile(app);retomarSOS()}
  registrarAcesso();
}
let _acessoRegistrado="";
function registrarAcesso(){if(!APP.user||_acessoRegistrado===APP.user.uid||APP.offline)return;_acessoRegistrado=APP.user.uid;FB.updateDoc(`usuarios/${APP.user.uid}`,{ultimoAcesso:new Date().toISOString()}).catch(()=>{})}

/* ── topo ── */
function renderTopNav(root){
  const nav=el("div","top-nav");nav.style.cssText="display:flex;justify-content:space-between;align-items:center;padding:13px 24px;flex-shrink:0;z-index:50;gap:12px";
  const p=PLANS[APP.plan]||PLANS.starter,staff=isStaff(APP.cargo);
  nav.innerHTML=`<div class="am-logo tn-brand">${AM.logo(30)}</div><div style="display:flex;align-items:center;gap:12px;flex-wrap:nowrap;min-width:0"><div class="tn-user" style="text-align:right;min-width:0"><span style="font-family:'Archivo',sans-serif;font-stretch:110%;font-style:italic;font-weight:800;font-size:14px;color:#EEF1F8;letter-spacing:.03em;text-transform:uppercase;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:240px">${esc(APP.user.nome)}</span><span class="slbl" style="color:rgba(0,209,255,.55)">${esc(CARGOS[APP.cargo]||"")}${ehAdmin()&&APP.cargo!=="admin"?" · Admin":""}</span></div><div class="tn-sep" style="width:1px;height:26px;background:rgba(255,255,255,.08)"></div>${APP.offline?`<span class="am-tag r" title="Sem conexão">offline</span>`:""}<span class="plan-chip ${APP.plan}">${p.emoji} ${p.label}</span>${staff?`<button class="btn-sec" id="btn-conta" type="button" aria-label="Minha conta" title="Minha conta" style="width:auto;padding:9px 10px">${AMI("user")}</button>`:""}<button class="btn-danger" id="btn-logout" type="button">${AMI("logout")}<span class="tn-sair"> Sair</span></button></div>`;
  nav.querySelector("#btn-logout").onclick=()=>sairDoApp();
  const bc=nav.querySelector("#btn-conta");if(bc)bc.onclick=abrirMinhaConta;
  root.appendChild(nav);
}

/* ════ APP DO ATLETA ════ */
function renderMobile(root){
  const sp=SP(),p=PLANS[APP.plan]||PLANS.starter;
  const wrap=el("div");wrap.style.cssText="flex:1;display:flex;flex-direction:column;overflow:hidden;min-height:0";
  const hdr=el("div","phone-header");
  hdr.innerHTML=`<div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:14px;position:relative;z-index:1;gap:10px"><div style="min-width:0"><p style="font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;color:#00D1FF;margin-bottom:6px"><span class="mh-lab${sp.nome?" has-sp":""}">High Performance Lab</span>${sp.nome?`<span class="mh-sp">${esc(sp.nome)}</span>`:""}</p><h2 style="font-family:'Archivo',sans-serif;font-stretch:125%;font-style:italic;font-weight:900;font-size:34px;line-height:1;color:#fff;margin:0;overflow:hidden;text-overflow:ellipsis">Olá, ${esc(primeiroNome(APP.user.nome))}</h2></div><div style="display:flex;flex-direction:column;align-items:flex-end;gap:8px;flex-shrink:0"><span class="plan-chip ${APP.plan}">${p.emoji} ${p.label}</span><button id="mob-menu" type="button" aria-label="Abrir menu" style="background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:3px;padding:9px;cursor:pointer;color:#fff;display:flex">${AMI("menu",20)}</button></div></div><div role="tablist" aria-label="Seções do app" style="display:flex;gap:8px;overflow-x:auto;padding:2px 4px 3px;position:relative;z-index:1;scrollbar-width:none" id="mob-tabs-bar"></div>`;
  wrap.appendChild(hdr);
  const ovl=el("div","ovl");document.body.appendChild(ovl);
  const side=el("div","glass am-side");side.setAttribute("role","dialog");side.setAttribute("aria-label","Menu do atleta");
  side.style.cssText="position:fixed;top:0;left:0;height:100%;width:280px;max-width:86vw;z-index:200;display:flex;flex-direction:column;padding:24px 14px;transition:transform .3s;transform:translateX(-100%);background:rgba(5,9,54,.97);backdrop-filter:blur(30px);overflow-y:auto;visibility:hidden";
  side.innerHTML=`<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:22px"><span class="slbl">Menu do Atleta</span><button id="mob-close" type="button" aria-label="Fechar menu" style="background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);border-radius:2px;padding:7px;cursor:pointer;color:var(--dim);display:flex">${AMI("x",14)}</button></div><nav id="mob-sidenav" style="display:flex;flex-direction:column;gap:4px"></nav><div style="margin-top:auto;padding-top:18px;display:flex;flex-direction:column;gap:4px;border-top:1px solid var(--am-line)"><button class="nav-item" data-id="dados" type="button">${AMI("shield")} Meus dados e privacidade</button><button class="nav-item" id="mob-sair" type="button">${AMI("logout")} Sair</button><p class="am-ver" style="text-align:left;padding:10px 4px 0">Versão ${AM_VERSAO}</p></div>`;
  document.body.appendChild(side);
  const openSide=()=>{side.style.visibility="visible";side.style.transform="translateX(0)";ovl.classList.add("show");side.querySelector("#mob-close").focus()};
  const closeSide=()=>{side.style.transform="translateX(-100%)";ovl.classList.remove("show");setTimeout(()=>{if(!ovl.classList.contains("show"))side.style.visibility="hidden"},320)};
  hdr.querySelector("#mob-menu").onclick=openSide;side.querySelector("#mob-close").onclick=closeSide;ovl.onclick=closeSide;
  side.addEventListener("keydown",e=>{if(e.key==="Escape")closeSide()});
  side.querySelector("#mob-sair").onclick=()=>{closeSide();sairDoApp()};
  const content=el("div","cs");content.id="mob-content";content.style.cssText="flex:1;overflow-y:auto;-webkit-overflow-scrolling:touch;padding:14px;display:flex;flex-direction:column;gap:11px;min-height:0";
  wrap.appendChild(content);root.appendChild(wrap);
  const TABS=[
    {id:"home",l:"QG Mental",icon:"mind",fn:tabQG},
    {id:"pre",l:"Pré-"+sp.evento,icon:sp.icon,fn:tabPre},
    {id:"pos",l:"Pós-"+sp.evento,icon:"trophy",fn:tabPos},
    {id:"treino",l:"Treino",icon:"dumbbell",fn:tabTreino},
    {id:"plano",l:"Meu Plano",icon:"flag",fn:tabPlano},
    {id:"agenda",l:"Agenda",icon:"calendar",fn:c=>renderCal(c,APP.user.uid,false)},
    {id:"ia",l:"Vídeo & IA",icon:"ai",fn:tabIA}
  ];
  const extra={dados:c=>renderMeusDados(c)};
  function setTab(id){
    limparTimers("tela");APP.abaAtleta=id;
    hdr.querySelectorAll(".mob-tb").forEach(b=>{const on=b.dataset.id===id;b.classList.toggle("on",on);b.setAttribute("aria-selected",String(on))});
    side.querySelectorAll(".nav-item[data-id]").forEach(b=>b.classList.toggle("active",b.dataset.id===id));
    hdr.querySelector(`.mob-tb[data-id="${id}"]`)?.scrollIntoView({inline:"nearest",block:"nearest"});
    content.innerHTML="";content.scrollTop=0;content.classList.remove("flip-in");void content.offsetWidth;content.classList.add("flip-in");
    const t=TABS.find(x=>x.id===id),fn=t?t.fn:extra[id];
    try{fn&&fn(content)}catch(e){registrarErro("aba:"+id,e);content.appendChild(el("p","am-erro","Não foi possível abrir esta seção."))}
    closeSide();
  }
  APP.irPara=setTab;
  const tabBar=hdr.querySelector("#mob-tabs-bar"),sideNav=side.querySelector("#mob-sidenav");
  TABS.forEach(t=>{const b1=el("button","mob-tb");b1.type="button";b1.setAttribute("role","tab");b1.innerHTML=`${AMI(t.icon)} ${esc(t.l)}`;b1.dataset.id=t.id;b1.onclick=()=>setTab(t.id);tabBar.appendChild(b1);const b2=el("button","nav-item");b2.type="button";b2.innerHTML=`<span style="font-size:16px;line-height:1;display:flex">${AMI(t.icon)}</span> ${esc(t.l)}`;b2.dataset.id=t.id;b2.onclick=()=>setTab(t.id);sideNav.appendChild(b2)});
  side.querySelector('.nav-item[data-id="dados"]').onclick=()=>setTab("dados");
  setTab(TABS.some(t=>t.id===APP.abaAtleta)||APP.abaAtleta==="dados"?APP.abaAtleta:"home");
}

/* ════ PAINEL DA EQUIPE ════ */
const MENU_STAFF=[
  {id:"visao",label:"Visão Geral",icon:"radar",items:[
    {id:"dashboard",l:"Radar dos Atletas",feat:"staffDashboard",icon:"radar"},
    {id:"checkins",l:"Check-ins",feat:"staffCheckins",icon:"clipboard"},
    {id:"dash_chart",l:"Dashboard Analítico",feat:"staffDashboardChart",icon:"bars"},
    {id:"comparativo",l:"Comparativo",feat:"staffMultiAtleta",icon:"users"},
    {id:"insights",l:"Insights IA",feat:"staffIAInsights",icon:"ai"}]},
  {id:"atleta",label:"Atleta",icon:"user",items:[
    {id:"perfil",l:"Perfil Esportivo",feat:"staffPerfil",icon:"medal"},
    {id:"prontuario",l:"Prontuário",feat:"staffProntuario",icon:"steth"},
    {id:"registros",l:"Registros Clínicos",feat:"staffSoap",icon:"note"},
    {id:"lesoes",l:"Lesões & Avaliações",feat:"staffLesoes",icon:"cross"},
    {id:"criticos",l:"Pressão em Competição",feat:"staffCriticos",icon:"focus"},
    {id:"dossie",l:"Dossiê do Atleta",feat:"staffDossie",icon:"folder"},
    {id:"atletas_pro",l:"Atletas & Convites",feat:"staffAtletas",icon:"users"}]},
  {id:"rotina",label:"Treino & Rotina",icon:"calendar",items:[
    {id:"treinos",l:"Treinos & Carga",feat:"staffTreinos",icon:"dumbbell"},
    {id:"agenda",l:"Agenda & Sessões",feat:"staffAgenda",icon:"calendar"},
    {id:"calendarios",l:"Calendários dos Atletas",feat:"staffCalendario",icon:"calendar"},
    {id:"aquecimento",l:"Aquecimento & Rotinas",feat:"staffAquecimento",icon:"flame"}]},
  {id:"ferramentas",label:"Ferramentas",icon:"sliders",items:[
    {id:"protocolos",l:"Gestão de Protocolos",feat:"staffProtocolos",icon:"clipboard"},
    {id:"treino_mental",l:"Treino Mental",feat:"staffTreinoMental",icon:"mind",cargos:["psicologo","assistente","treinador"]},
    {id:"ia_analise",l:"Análise com IA",feat:"staffIAAnalise",icon:"ai"},
    {id:"video_comp",l:"Comparar Análises",feat:"staffVideoAnalise",icon:"video"}]},
  {id:"docs",label:"Documentos",icon:"file",items:[
    {id:"relatorios",l:"Exportar Dossiê",feat:"staffRelatorios",icon:"file"},
    {id:"exportar",l:"Exportar Dados (CSV)",feat:"staffExportData",icon:"save"}]},
  {id:"alertas",label:"Alertas",icon:"bell",items:[
    {id:"sos",l:"Central S.O.S",feat:null,icon:"alert"},
    {id:"notificacoes",l:"Notificações",feat:"staffNotificacoes",icon:"bell"}]},
  {id:"sistema",label:"Sistema",icon:"gear",admin:true,items:[
    {id:"admin",l:"Usuários & Planos",icon:"users"},
    {id:"permissoes",l:"Permissões dos Planos",icon:"sliders"},
    {id:"seguranca",l:"Segurança & Privacidade",icon:"lock"},
    {id:"auditoria",l:"Auditoria",icon:"search"},
    {id:"lgpd",l:"Pedidos LGPD",icon:"shield"},
    {id:"saude",l:"Saúde do Sistema",icon:"pulse"}]}
];
const MODULOS={};
function renderDashboard(root){
  const grupos=MENU_STAFF.filter(g=>!g.admin||ehAdmin()).map(g=>({...g,items:g.items.filter(i=>!i.cargos||i.cargos.includes(APP.cargo)||ehAdmin())})).filter(g=>g.items.length);
  const todos=grupos.flatMap(g=>g.items);
  const pedido=(location.hash||"").replace("#","");if(pedido&&todos.some(i=>i.id===pedido)){APP.abaStaff=pedido;try{history.replaceState(null,"",location.pathname+location.search)}catch(e){}}
  let aba=todos.some(i=>i.id===APP.abaStaff)?APP.abaStaff:"dashboard",seq=0;
  const wrap=el("div");wrap.style.cssText="flex:1;display:flex;overflow:hidden;min-height:0";
  const ovl=el("div","ovl");document.body.appendChild(ovl);
  const side=el("nav","sidebar-wrap psico-sidebar");side.setAttribute("aria-label","Módulos do painel");side.style.cssText="width:252px;height:100%;display:flex;flex-direction:column;padding:26px 13px;flex-shrink:0;overflow-y:auto";
  const main=el("main","cs dash-main");main.style.cssText="flex:1;overflow-y:auto;padding:32px 38px;width:0";main.id="dash-main";
  wrap.appendChild(side);wrap.appendChild(main);root.appendChild(wrap);
  const abrirSide=()=>{side.classList.add("open");ovl.classList.add("show")},fecharSide=()=>{side.classList.remove("open");ovl.classList.remove("show")};
  ovl.onclick=fecharSide;
  const abertos=new Set(grupos.filter(g=>g.items.some(i=>i.id===aba)).map(g=>g.id));if(!abertos.size)abertos.add(grupos[0].id);
  function setSide(){
    side.innerHTML=`<div style="display:flex;align-items:center;gap:10px;padding:0 5px;margin-bottom:22px"><span class="am-logo">${AM.bolt(30)}</span><p class="slbl">Painel de Controle</p></div><div class="am-menu" style="display:flex;flex-direction:column;gap:3px;flex:1"></div><p class="am-ver" style="text-align:left;padding:14px 5px 0">Versão ${AM_VERSAO}</p>`;
    const nav=side.querySelector(".am-menu");
    grupos.forEach(g=>{
      const aberto=abertos.has(g.id),gw=el("div");gw.style.marginBottom="4px";
      const gb=el("button","am-grp"+(aberto?" on":""));gb.type="button";gb.setAttribute("aria-expanded",String(aberto));
      gb.innerHTML=`<span style="display:flex;font-size:14px">${AMI(g.icon)}</span><span style="flex:1;text-align:left">${esc(g.label)}</span><span class="am-chev" aria-hidden="true">▸</span>`;
      const iw=el("div","am-grp-itens");iw.hidden=!aberto;
      g.items.forEach(m=>{
        const ok=!m.feat||ehAdmin()||canStaffAccess(APP.plan,m.feat);
        const b=el("button","nav-item"+(aba===m.id?" active":"")+(ok?"":" locked-nav"));b.type="button";b.style.paddingLeft="30px";b.dataset.mod=m.id;
        if(aba===m.id)b.setAttribute("aria-current","page");
        b.innerHTML=`<span style="font-size:14px;line-height:1;flex-shrink:0;display:flex">${AMI(m.icon)}</span> ${esc(m.l)}${ok?"":`<span class="lock-inline">${AMI("lock")}</span>`}`;
        b.onclick=()=>abrir(m.id);iw.appendChild(b);
      });
      gb.onclick=()=>{if(abertos.has(g.id))abertos.delete(g.id);else abertos.add(g.id);setSide()};
      gw.appendChild(gb);gw.appendChild(iw);nav.appendChild(gw);
    });
  }
  const topo=el("div","am-topo");
  topo.innerHTML=`<button class="ham-btn" type="button" aria-label="Abrir menu">${AMI("menu",20)} Menu</button><div id="sos-slot" style="flex:1;min-width:0"></div>`;
  topo.querySelector(".ham-btn").onclick=abrirSide;
  async function renderMain(){
    const meu=++seq;main.innerHTML="";main.appendChild(topo);desenharFaixaSOS();
    const item=todos.find(i=>i.id===aba)||todos[0],feat=item.feat;if(item.id!==aba){aba=item.id;APP.abaStaff=aba;setSide()}
    if(feat&&!ehAdmin()&&!canStaffAccess(APP.plan,feat)){phdr(main,"Acesso restrito",STAFF_FEATURES_DEFAULT[feat]?.label||item.l);staffLockedBlock(main,feat,STAFF_FEAT_MIN[feat]||"pro");return}
    const fn=MODULOS[aba];if(!fn){main.appendChild(el("p","am-erro","Módulo indisponível."));return}
    let atletas=[];try{atletas=await listarAtletas()}catch(e){}
    if(meu!==seq)return;
    try{await fn(main,atletas)}catch(e){registrarErro("modulo:"+aba,e);main.appendChild(el("p","am-erro","Não foi possível abrir este módulo. Tente de novo."))}
  }
  function abrir(id){aba=id;APP.abaStaff=id;limparTimers("tela");setSide();fecharSide();renderMain();main.scrollTop=0}
  APP.abrirModulo=abrir;
  setSide();renderMain();
}

/* ════ CENTRAL S.O.S (equipe) — consulta a cada 15 s, som e aviso do navegador ════ */
let _sosIv=null,_sosAtivos=[];const _sosVistos=new Set();
function iniciarCentralSOS(){
  pararCentralSOS();if(!isStaff(APP.cargo))return;
  const tick=async()=>{
    const l=await FB.query("sos_alertas","status","in",["pendente","em_atendimento"],null,"DESCENDING",50,true);
    if(!l)return;_sosAtivos=ordDesc(l,s=>s.data);
    const novos=_sosAtivos.filter(s=>s.status==="pendente"&&!_sosVistos.has(s._id));
    novos.forEach(s=>_sosVistos.add(s._id));
    if(novos.length){bip();notificarNavegador("S.O.S — "+(novos[0].nome||"Atleta"),"Precisa de apoio agora. Abra o AceMind.","sos-"+novos[0]._id)}
    desenharFaixaSOS();if(APP.abaStaff==="sos"&&typeof APP.atualizarCentralSOS==="function")APP.atualizarCentralSOS();
  };
  APP.atualizarSOS=tick;tick();_sosIv=intervalo(tick,15000,"app");
}
function pararCentralSOS(zerar){if(_sosIv){clearInterval(_sosIv);TIMERS.app.delete(_sosIv);_sosIv=null}_sosAtivos=[];if(zerar)_sosVistos.clear()}
const haQuanto=d=>{const x=_dt(d);if(!x)return"";const m=Math.max(0,Math.round((Date.now()-x)/60000));return m<1?"agora":m<60?`há ${m} min`:m<1440?`há ${Math.floor(m/60)} h`:`há ${Math.floor(m/1440)} d`};
function desenharFaixaSOS(){
  const slot=document.getElementById("sos-slot");if(!slot)return;
  const pend=_sosAtivos.filter(s=>s.status==="pendente"),at=_sosAtivos.filter(s=>s.status==="em_atendimento");
  if(!pend.length&&!at.length){slot.innerHTML="";return}
  slot.innerHTML=`<div id="am-sos-faixa" role="alert">${pend.slice(0,3).map(s=>`<div class="am-sos-l glow-r"><span class="am-sos-t">${AMI("alert")} <b>S.O.S</b> ${esc(s.nome||"Atleta")} precisa de apoio <i>${haQuanto(s.data)}</i></span><span class="am-sos-b"><button type="button" class="btn-y" data-assumir="${esc(s._id)}">Estou cuidando</button><button type="button" class="btn-sec" data-ver-sos>Detalhes</button></span></div>`).join("")}${at.length?`<div class="am-sos-l at"><span class="am-sos-t">${AMI("heart")} Em atendimento: ${at.slice(0,3).map(s=>`${esc(primeiroNome(s.nome))} <i>por ${esc(primeiroNome(s.respondidoPorNome))}</i>`).join(" · ")}</span><span class="am-sos-b"><button type="button" class="btn-sec" data-ver-sos>Abrir central</button></span></div>`:""}</div>`;
  slot.querySelectorAll("[data-assumir]").forEach(b=>b.onclick=()=>assumirSOS(b.dataset.assumir));
  slot.querySelectorAll("[data-ver-sos]").forEach(b=>b.onclick=()=>APP.abrirModulo&&APP.abrirModulo("sos"));
}
async function assumirSOS(id){
  const s=_sosAtivos.find(x=>x._id===id)||{};
  try{await FB.updateDoc(`sos_alertas/${id}`,{status:"em_atendimento",respondidoPorId:APP.user.uid,respondidoPorNome:APP.user.nome,respondidoPorCargo:APP.cargo,respondidoEm:new Date().toISOString()});
    auditar("sos_assumido",{id:s.pacienteId||"",nome:s.nome||""},id);avisar("Registrado. O atleta vê no app que você recebeu o alerta.","ok");APP.atualizarSOS&&APP.atualizarSOS()}
  catch(e){avisar("Não foi possível registrar agora. Tente de novo.","erro")}
}
async function encerrarSOS(id){
  const s=_sosAtivos.find(x=>x._id===id)||{};
  const m=abrirModal(`<h3 class="ptitle" style="font-size:20px;margin:0 0 8px">Encerrar S.O.S</h3><p style="font-size:13px;color:#B4BBE0;line-height:1.6;margin:0 0 12px">Registre em poucas palavras como foi o atendimento (opcional). Detalhes clínicos vão no prontuário da sua área.</p><textarea id="sos-desf" maxlength="500" style="height:90px;font-size:13px;resize:vertical" placeholder="Ex: contato por telefone, atleta estável, sessão marcada para amanhã."></textarea><div style="display:flex;justify-content:flex-end;gap:10px;margin-top:14px"><button class="btn-sec" data-fechar style="width:auto" type="button">Cancelar</button><button class="btn-y" id="sos-ok" style="width:auto;padding:10px 18px" type="button">Encerrar atendimento</button></div>`,{largura:480});
  m.el.querySelector("#sos-ok").onclick=async()=>{try{await FB.updateDoc(`sos_alertas/${id}`,{status:"resolvido",resolvidoPorId:APP.user.uid,resolvidoPorNome:APP.user.nome,resolvidoEm:new Date().toISOString(),desfecho:limitar(m.el.querySelector("#sos-desf").value.trim(),500)});auditar("sos_encerrado",{id:s.pacienteId||"",nome:s.nome||""},id);avisar("Atendimento encerrado.","ok");m.fechar();APP.atualizarSOS&&APP.atualizarSOS()}catch(e){avisar("Não foi possível encerrar agora.","erro")}};
}

/* ════ PAINEL DE PARTÍCULAS — para quando sai da tela ou do app ════ */
function ParticleCanvas(container,h=110){
  const cv=el("canvas");cv.style.cssText=`width:100%;height:${h}px;display:block`;cv.setAttribute("aria-hidden","true");container.appendChild(cv);
  const ctx=cv.getContext("2d");let W=0,ps=[],raf=0,visivel=true,parado=false;
  const reduz=!!(window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches);
  function desenhar(){ctx.clearRect(0,0,W,h);ps.forEach(p=>{ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=`rgba(0,209,255,${.18+Math.abs(Math.sin(p.a))*.28})`;ctx.fill()});for(let i=0;i<ps.length;i++)for(let j=i+1;j<ps.length;j++){const p=ps[i],q=ps[j],dx=p.x-q.x,dy=p.y-q.y,d=Math.sqrt(dx*dx+dy*dy);if(d<70){ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.strokeStyle=`rgba(0,209,255,${.12*(1-d/70)})`;ctx.lineWidth=.6;ctx.stroke()}}}
  function mover(){ps.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.a+=.008;if(p.x<0)p.x=W;if(p.x>W)p.x=0;if(p.y<0)p.y=h;if(p.y>h)p.y=0})}
  function resize(){if(!cv.isConnected){parar();return}const w=cv.offsetWidth;if(!w)return;const dpr=window.devicePixelRatio||1;cv.width=w*dpr;cv.height=h*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);W=w;ps=Array.from({length:Math.min(Math.floor(w/10),55)},()=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35,r:Math.random()*1.2+.4,a:Math.random()}));desenhar()}
  function loop(){raf=0;if(!cv.isConnected){parar();return}if(!visivel||document.hidden||parado)return;mover();desenhar();raf=requestAnimationFrame(loop)}
  function iniciar(){if(!raf&&!reduz&&!parado)raf=requestAnimationFrame(loop)}
  function parar(){parado=true;cancelAnimationFrame(raf);raf=0;ro.disconnect();io.disconnect();document.removeEventListener("visibilitychange",vis)}
  const vis=()=>{if(!cv.isConnected)parar();else if(!document.hidden)iniciar()};
  const ro=new ResizeObserver(()=>resize());ro.observe(container);
  const io=new IntersectionObserver(es=>{if(!cv.isConnected){parar();return}visivel=es.some(e=>e.isIntersecting);if(visivel)iniciar()});io.observe(cv);
  document.addEventListener("visibilitychange",vis);
  resize();iniciar();
  return{parar};
}

/* ════ ATUALIZAÇÃO DO APP (service worker) E INSTALAÇÃO ════ */
if("serviceWorker"in navigator&&!window.AM_DEMO){
  const tinhaSW=!!navigator.serviceWorker.controller;let recarregando=false;
  navigator.serviceWorker.addEventListener("controllerchange",()=>{
    if(!tinhaSW||recarregando)return;
    if(performance.now()<15000){recarregando=true;location.reload();return}
    if(document.getElementById("am-update"))return;
    const b=document.createElement("div");b.id="am-update";b.setAttribute("role","status");b.className="am-flutua";
    b.innerHTML=`<span style="flex:1;font-size:12.5px;color:#EEF1F8">Nova versão do AceMind disponível.</span><button class="btn-y" type="button" style="width:auto;padding:8px 14px;font-size:11px">Atualizar</button>`;
    b.querySelector("button").onclick=()=>location.reload();document.body.appendChild(b);
  });
  navigator.serviceWorker.addEventListener("message",e=>{const d=e.data||{};if(d.tipo==="abrir"&&d.destino==="sos"&&APP.abrirModulo)APP.abrirModulo("sos")});
  window.addEventListener("load",()=>{navigator.serviceWorker.register("sw.js",{updateViaCache:"none"}).then(r=>r.update()).catch(()=>{})});
}
(function initInstallBanner(){
  if(window.AM_DEMO)return;
  const isIOS=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;
  const isStandalone=window.navigator.standalone===true||(window.matchMedia&&window.matchMedia("(display-mode: standalone)").matches);
  if(isStandalone||LS.get("am_install_dismissed"))return;
  let deferredPrompt=null;
  window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferredPrompt=e;mostrar("android")});
  if(isIOS)mostrar("ios");
  function mostrar(plataforma){
    if(document.getElementById("am-install-banner"))return;
    const b=document.createElement("div");b.id="am-install-banner";b.className="am-flutua";b.style.zIndex="500";
    b.innerHTML=plataforma==="ios"
      ?`${AM.appIcon(38)}<div style="flex:1;font-size:12.5px;color:#EEF1F8;line-height:1.55"><strong style="color:var(--y);font-family:'Archivo',sans-serif;font-stretch:110%;font-style:italic">Instale o AceMind</strong><br>Toque em <strong>Compartilhar</strong> (o ícone com a seta na barra do Safari) e depois em <strong>"Adicionar à Tela de Início"</strong>. Assim você também recebe notificações.</div><button id="am-inst-close" type="button" aria-label="Fechar" style="background:none;border:none;color:var(--dim);font-size:18px;cursor:pointer;flex-shrink:0;padding:4px;line-height:1">✕</button>`
      :`${AM.appIcon(38)}<div style="flex:1;font-size:12.5px;color:#EEF1F8">Instale o <strong style="color:var(--y);font-family:'Archivo',sans-serif;font-stretch:110%;font-style:italic">AceMind</strong> na tela inicial para acesso rápido.</div><button id="am-inst-go" type="button" class="btn-y" style="width:auto;padding:8px 14px;font-size:11px">Instalar</button><button id="am-inst-close" type="button" aria-label="Fechar" style="background:none;border:none;color:var(--dim);font-size:18px;cursor:pointer;flex-shrink:0;padding:4px;line-height:1">✕</button>`;
    document.body.appendChild(b);
    b.querySelector("#am-inst-close").onclick=()=>{b.remove();LS.set("am_install_dismissed","1")};
    const go=b.querySelector("#am-inst-go");if(go)go.onclick=async()=>{b.remove();if(deferredPrompt){deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null}};
  }
})();

/* ════ INÍCIO ════ */
async function carregarPublico(){try{const d=await FB.getDoc("config/publico");CFG.publico=d||{}}catch(e){CFG.publico=CFG.publico||{}}}
function guardarPerfilOffline(d){if(isStaff(d.cargo)){LS.del("am_perfil");return}try{LS.set("am_perfil",JSON.stringify({nome:d.nome||"",email:d.email||"",cargo:d.cargo||"paciente",plano:d.plano||"starter",esporte:d.esporte||"",nascimento:d.nascimento||"",consentimento:d.consentimento||null,uid:FB.uid}))}catch(e){}}
function renderSemConexao(root){
  root.innerHTML="";const w=el("div");w.style.cssText="flex:1;display:flex;align-items:center;justify-content:center;padding:24px";
  w.innerHTML=`<div class="glass" style="max-width:420px;width:100%;padding:32px 28px;clip-path:var(--cut-lg);text-align:center"><div style="margin-bottom:14px">${AM.logoV(180)}</div><p style="font-size:14px;color:#EEF1F8;margin:0 0 6px">Sem conexão com o servidor.</p><p style="font-size:12.5px;color:var(--dim);line-height:1.6;margin:0 0 18px">Verifique a internet e tente de novo.</p><button class="btn-y" id="sc-ok" type="button">Tentar de novo</button></div>`;
  w.querySelector("#sc-ok").onclick=()=>iniciarApp();root.appendChild(w);
}
async function iniciarApp(){
  if(window.top!==window.self&&!window.AM_DEMO){document.body.innerHTML='<p style="color:#fff;font-family:sans-serif;padding:24px">Por segurança, o AceMind não abre dentro de outros sites. <a style="color:#00D1FF" href="'+location.href.replace(/"/g,"")+'" target="_top" rel="noopener">Abrir o AceMind</a></p>';return}
  FB.carregarSessao();
  await carregarPublico();
  if(FB.token&&FB.uid){
    try{
      if(FB.refresh&&Date.now()>FB.exp-5*60000)await FB.renovar();
      const d=await FB.getDoc(`usuarios/${FB.uid}`);
      if(d&&d.desativado!==true&&d.nome){await entrarComo(d);filaEnviar()}
      else{FB.signOut();LS.del("am_perfil")}
    }catch(e){
      if(e.code==="REDE"){
        let p=null;try{p=JSON.parse(LS.get("am_perfil")||"null")}catch(x){}
        if(p&&p.uid===FB.uid&&!isStaff(p.cargo)){APP.offline=true;APP.user={uid:FB.uid,nome:p.nome,email:p.email,nascimento:p.nascimento};APP.perfil=p;APP.plan=PLANS[p.plano]?p.plano:"starter";APP.cargo="paciente";APP.consent=p.consentimento;APP.esporte=p.esporte||"";avisar("Você está offline. Os registros ficam salvos no aparelho e são enviados quando a conexão voltar.","info",6000);window.addEventListener("online",()=>{if(APP.offline){APP.offline=false;iniciarApp()}},{once:true})}
        else{renderSemConexao($("app"));return}
      }else{FB.signOut();LS.del("am_perfil")}
    }
  }
  render();
}

/* ════ APP DO ATLETA ════ */
function cardA(titulo,icone,dir="",cls=""){const d=el("div","am-card"+(cls?" "+cls:""));d.innerHTML=`<div class="am-tit">${AMI(icone)}<span>${titulo}</span>${dir?`<span class="am-tit-x">${dir}</span>`:""}</div><div class="am-cbody"></div>`;return d}
const corpoDe=card=>card.querySelector(".am-cbody");
const carregandoHTML=(t="Carregando...")=>`<div class="am-load"><span class="dot-pulse"></span>${esc(t)}</div>`;
const vazioHTML=t=>`<p class="am-vazio">${esc(t)}</p>`;
const TEL_EMERG=`<div class="am-tels"><a href="tel:188" class="am-tel">${AMI("phone")}<span><b>CVV 188</b><i>Apoio emocional 24h, gratuito</i></span></a><a href="tel:192" class="am-tel r">${AMI("phone")}<span><b>SAMU 192</b><i>Emergência médica</i></span></a></div>`;

/* ── lembretes do dia (check-in e sessões) ── */
async function lembretesHoje(c){
  if(APP.offline)return;
  const box=el("div");box.style.display="contents";c.prepend(box);
  const uid=APP.user.uid,hoje=hojeLocal();
  const[ck,ag]=await Promise.all([FB.query("checkins","pacienteId","==",uid,"data","DESCENDING",1,true),FB.query("agenda","atletaId","==",uid,"dataHora","DESCENDING",60,true)]);
  if(!box.isConnected)return;
  const itens=[];
  if(pode("diarioPerf")&&ck&&!(ck[0]&&diaISO(ck[0].data)===hoje))itens.push(`${AMI("notebook")}<span>Você ainda não fez o <b>check-in de hoje</b>. Leva menos de um minuto.</span>`);
  const agora=Date.now(),prox=(ag||[]).map(s=>({s,t:_dt(s.dataHora)})).filter(x=>x.t&&x.t.getTime()>agora-15*60000&&x.t.getTime()<agora+24*3600e3).sort((a,b)=>a.t-b.t)[0];
  if(prox)itens.push(`${AMI("calendar")}<span>Sessão ${diaISO(prox.t)===hoje?"hoje":"amanhã"} às <b>${prox.t.toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"})}</b>${prox.s.profissionalNome?` com ${esc(prox.s.profissionalNome)}`:""}.${urlSegura(prox.s.link)?` <a href="${esc(urlSegura(prox.s.link))}" target="_blank" rel="noopener noreferrer">Entrar na sala</a>`:prox.s.local?` Local: ${esc(prox.s.local)}.`:""}</span>`);
  box.innerHTML=itens.map(h=>`<div class="am-lembrete" role="status">${h}</div>`).join("");
}

/* ════ QG MENTAL ════ */
function tabQG(c){
  const uid=APP.user.uid;
  const v={sono:7,foco:7,energia:6,humor:7,estresse:4,dor:0};let dorLocal="",pontoForte="",salvando=false,ultimo=null;
  lembretesHoje(c);
  if(SOSA.id&&pode("sos"))cardSOS(c);
  if(pode("painelParticulas")){
    const pc=el("div");pc.style.cssText="border-radius:3px;clip-path:var(--cut);overflow:hidden;border:1px solid rgba(255,255,255,.06);background:rgba(20,27,107,.6)";
    pc.innerHTML=`<div style="padding:12px 15px 7px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid rgba(255,255,255,.04)"><span class="slbl" style="color:rgba(0,209,255,.55);letter-spacing:.25em">Painel de Performance</span><span style="font-family:'JetBrains Mono',monospace;font-size:10px;color:rgba(0,209,255,.35)">${new Date().toLocaleDateString("pt-BR",{weekday:"short",day:"2-digit",month:"short"})}</span></div><div class="pc-cv"></div><div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:rgba(255,255,255,.04)">${[["foco","Foco","var(--y)"],["energia","Energia","var(--y)"],["sono","Sono","#818cf8"]].map(([k,l,cor])=>`<div style="background:var(--bg2);padding:10px 8px;text-align:center"><span class="slbl" style="display:block;margin-bottom:3px">${l}</span><strong id="pc-${k}" style="font-family:'JetBrains Mono',monospace;font-size:22px;color:${cor};line-height:1">${v[k]}</strong></div>`).join("")}</div>`;
    c.appendChild(pc);ParticleCanvas(pc.querySelector(".pc-cv"),110);
  }
  if(pode("diarioPerf")){
    const dc=el("div","am-card a-up");dc.style.animationDelay=".1s";
    const drawD=()=>{
      const dicaUlt=ultimo&&diaISO(ultimo.data)===hojeLocal()?`<p class="am-note" style="margin:0">Você já registrou hoje às ${_dt(ultimo.data).toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"})}. Pode registrar de novo se algo mudou.</p>`:"";
      dc.innerHTML=`<div class="am-tit" style="padding-bottom:12px;border-bottom:1px solid rgba(255,255,255,.05)"><div class="section-accent"></div><span>Diário de Performance</span><span class="am-tit-x">Check-in</span></div><div style="display:flex;flex-direction:column;gap:18px">${dicaUlt}${CK_CAMPOS.map(([k,l,cor,ic,min,max])=>`<div class="am-sl"><div class="am-sl-h"><label class="slbl" for="dr-${k}">${AMI(ic)} ${l}</label><span class="am-sl-v" id="dv-${k}" style="color:${cor}">${v[k]}</span></div><input type="range" min="${min}" max="${max}" id="dr-${k}" value="${v[k]}" aria-describedby="dd-${k}"><p class="am-dica" id="dd-${k}">${CK_DICA[k]}</p></div>`).join("")}
      <div id="d-dorlocal"${v.dor>=1?"":" hidden"}><label class="slbl" for="d-dl" style="display:block;margin-bottom:7px">Onde dói?</label><select id="d-dl"><option value="">Selecione...</option>${CORPO.map(p=>`<option${dorLocal===p?" selected":""}>${p}</option>`).join("")}</select></div>
      <div style="border-top:1px solid rgba(255,255,255,.05);padding-top:14px;display:flex;flex-direction:column;gap:11px">${[["Foco mental",v.foco*10],["Energia vital",v.energia*10],["Recuperação",Math.round(((v.sono+(10-v.dor))/2)*10)],["Prontidão",Math.round((prontidao(v)||0)*10)]].map(([l,p])=>`<div><div style="display:flex;justify-content:space-between;margin-bottom:6px"><span class="slbl">${l}</span><span style="font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--y)">${p}%</span></div><div class="sbar"><div class="sbar-fill" style="width:${p}%"></div></div></div>`).join("")}</div>
      <div><label for="d-pf" style="display:flex;align-items:center;gap:6px;font-family:'JetBrains Mono',monospace;font-size:11px;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:#fb923c;margin-bottom:7px">${AMI("flame")} Trunfo do Dia</label><div style="display:flex;gap:8px;align-items:flex-start"><textarea id="d-pf" class="cs" maxlength="1000" placeholder="Melhor momento mental hoje... (ou grave por voz)" style="height:68px;font-size:13px;resize:none;display:block;flex:1">${esc(pontoForte)}</textarea><button type="button" class="mic-btn" id="d-mic" aria-label="Gravar por voz" style="width:44px;height:44px;flex-shrink:0">${AMI("mic")}</button></div></div>
      <button class="btn-y" id="d-save" type="button" ${salvando?"disabled":""}>${salvando?"Salvando...":"Salvar check-in"}</button></div>`;
      CK_CAMPOS.forEach(([k,,,,min,max])=>{const r=dc.querySelector("#dr-"+k);setRng(r,v[k]);r.addEventListener("input",e=>{v[k]=+e.target.value;setRng(r,v[k]);dc.querySelector("#dv-"+k).textContent=v[k];const p=document.getElementById("pc-"+k);if(p)p.textContent=v[k];if(k==="dor")dc.querySelector("#d-dorlocal").hidden=v.dor<1})});
      dc.querySelector("#d-dl").onchange=e=>dorLocal=e.target.value;
      dc.querySelector("#d-pf").oninput=e=>pontoForte=e.target.value;
      setTimeout(()=>animSkillBars(dc),100);
      const mic=dc.querySelector("#d-mic"),SR=window.SpeechRecognition||window.webkitSpeechRecognition;
      if(!SR)mic.hidden=true;else{let rec=null,gravando=false,base=pontoForte;mic.onclick=()=>{if(gravando){rec&&rec.stop();return}base=pontoForte;rec=new SR();rec.lang="pt-BR";rec.interimResults=true;rec.continuous=true;rec.onstart=()=>{gravando=true;mic.classList.add("recording");mic.innerHTML=AMI("rec")};const fim=()=>{gravando=false;mic.classList.remove("recording");mic.innerHTML=AMI("mic")};rec.onend=fim;rec.onerror=fim;rec.onresult=e=>{let tmp="",fin="";for(let i=e.resultIndex;i<e.results.length;i++){if(e.results[i].isFinal)fin+=e.results[i][0].transcript;else tmp+=e.results[i][0].transcript}if(fin){base=limitar((base?base+" ":"")+fin,1000);pontoForte=base}const ta=dc.querySelector("#d-pf");if(ta)ta.value=base+(tmp?" "+tmp:"")};try{rec.start()}catch(x){fim()}}}
      dc.querySelector("#d-save").onclick=async e=>{ripple(e);if(salvando)return;salvando=true;drawD();
        const doc={pacienteId:uid,nome:APP.user.nome,foco:v.foco,energia:v.energia,sono:v.sono,humor:v.humor,estresse:v.estresse,dor:v.dor,pontoForte:limitar(pontoForte.trim(),1000),data:new Date().toISOString()};
        if(v.dor>=1&&dorLocal)doc.dorLocal=dorLocal;
        try{const r=await addDocOuFila("checkins",doc);if(!r.fila){avisar(alertasCk(doc).length?"Check-in salvo. A equipe vai ver como você está hoje.":"Check-in salvo. Bom trabalho!","ok")}ultimo=doc;pontoForte="";dorLocal=""}
        catch(ex){avisar("Não foi possível salvar o check-in. "+(ex.code==="REDE"?"Verifique a internet.":"Tente de novo."),"erro")}
        salvando=false;drawD()};
    };
    drawD();c.appendChild(dc);
    FB.query("checkins","pacienteId","==",uid,"data","DESCENDING",1,true).then(l=>{if(l&&l[0]&&dc.isConnected){ultimo=l[0];if(!salvando)drawD()}});
  }else gateAtleta(c,"diarioPerf");
  if(pode("zoneReset"))cardZoneReset(c);
  if(!SOSA.id){if(pode("sos"))cardSOS(c);else{gateAtleta(c,"sos");const t=el("div","am-card");t.innerHTML=`<p class="am-note" style="margin:0 0 10px">Em emergência, ligue agora:</p>${TEL_EMERG}`;c.appendChild(t)}}
  if(pode("visaoTunel"))cardVisaoTunel(c);
  if(pode("analytics"))cardAnalytics(c);
}

function cardZoneReset(c){
  const zc=el("div","a-up");zc.style.animationDelay=".18s";let resp=false,fase="INSPIRA",iv=null;
  const FASES=["INSPIRA","SEGURA","EXPIRA","PAUSA"];
  const ZR={INSPIRA:{color:"#00D1FF",ring:"rgba(0,209,255,.22)",bg:"rgba(0,40,60,.18)",scale:1.52,hint:"Inspire pelo nariz",dim:"rgba(0,209,255,.4)"},SEGURA:{color:"#00D1FF",ring:"rgba(0,209,255,.2)",bg:"rgba(0,30,40,.18)",scale:1.1,hint:"Segure o ar",dim:"rgba(0,209,255,.4)"},EXPIRA:{color:"#B4BBE0",ring:"rgba(180,187,224,.14)",bg:"rgba(5,10,20,.2)",scale:.7,hint:"Expire lentamente",dim:"rgba(180,187,224,.4)"},PAUSA:{color:"#818cf8",ring:"rgba(129,140,248,.16)",bg:"rgba(10,10,40,.18)",scale:.88,hint:"Pausa total",dim:"rgba(129,140,248,.4)"}};
  const CIRC=2*Math.PI*82;
  function drawZ(){
    const ph=ZR[fase];
    zc.innerHTML=`<div style="background:${resp?ph.bg:"rgba(17,24,98,.7)"};border:1px solid ${resp?ph.ring:"rgba(255,255,255,.07)"};border-radius:3px;clip-path:var(--cut);padding:18px 18px 20px;transition:background .8s ease,border-color .8s ease;position:relative;overflow:hidden"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:${resp?16:12}px"><div class="am-tit" style="margin:0">${AMI("wind")}<span>Zone Reset</span></div><button id="zr-btn" type="button" class="am-mini${resp?" r":""}">${resp?"PARAR":"INICIAR"}</button></div>${resp?`<div style="display:flex;flex-direction:column;align-items:center"><div style="position:relative;width:200px;height:200px;display:flex;align-items:center;justify-content:center"><div class="zr-ring-pulse" style="width:120px;height:120px;border-color:${ph.ring}"></div><div class="zr-ring-pulse" style="width:120px;height:120px;animation-delay:1.1s;border-color:${ph.ring}"></div><svg width="200" height="200" style="position:absolute;inset:0;transform:rotate(-90deg)" aria-hidden="true"><circle cx="100" cy="100" r="82" fill="none" stroke="rgba(255,255,255,.05)" stroke-width="2.5"/><circle id="zr-arc" cx="100" cy="100" r="82" fill="none" stroke="${ph.color}" stroke-width="2.5" stroke-dasharray="${CIRC}" stroke-dashoffset="${CIRC}" stroke-linecap="round" style="filter:drop-shadow(0 0 5px ${ph.color});transition:stroke .6s ease"/></svg><div style="width:120px;height:120px;border-radius:50%;border:2px solid ${ph.color};background:radial-gradient(circle at 38% 38%,${ph.dim.replace(".4",".12")},rgba(0,0,0,.3));display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;transition:transform 4s cubic-bezier(.4,0,.2,1);transform:scale(${ph.scale});box-shadow:0 0 35px ${ph.dim}"><span class="zr-phase-label" style="font-family:'Archivo',sans-serif;font-stretch:110%;font-style:italic;font-weight:900;font-size:12px;letter-spacing:.22em;color:${ph.color};line-height:1">${fase}</span><span id="zr-timer" style="font-family:'JetBrains Mono',monospace;font-size:28px;color:#FFFFFF;line-height:1" aria-live="polite">4</span></div></div><p class="zr-phase-label" style="font-size:13px;color:#C9CEEA;margin:2px 0 12px">${ph.hint}</p><div style="display:flex;gap:10px">${FASES.map(f=>`<div style="display:flex;flex-direction:column;align-items:center;gap:4px;opacity:${f===fase?1:.3}"><div style="width:32px;height:3px;background:${f===fase?ZR[f].color:"rgba(255,255,255,.12)"}"></div><span style="font-family:'JetBrains Mono',monospace;font-size:8px;font-weight:700;letter-spacing:.14em;color:${f===fase?ZR[f].color:"rgba(255,255,255,.28)"}">${f}</span></div>`).join("")}</div></div>`:`<p style="font-family:'Archivo',sans-serif;font-stretch:110%;font-style:italic;font-weight:800;font-size:13px;color:#EEF1F8;text-transform:uppercase;letter-spacing:.08em;margin:0 0 4px">Box Breathing · SEAL</p><p style="font-size:12px;color:#9AA3CF;line-height:1.55;margin:0 0 12px">4 fases de 4 segundos. Ajuda a baixar a frequência cardíaca e a recuperar o controle.</p><div style="display:grid;grid-template-columns:repeat(4,1fr);gap:7px">${FASES.map(k=>`<div style="background:rgba(0,0,0,.25);border:1px solid ${ZR[k].ring};border-radius:3px;padding:9px 4px;text-align:center"><span style="font-family:'JetBrains Mono',monospace;font-size:9px;font-weight:800;letter-spacing:.1em;color:${ZR[k].color};display:block;margin-bottom:3px">${k}</span><span style="font-size:10px;color:#9AA3CF;line-height:1.3">${ZR[k].hint}</span></div>`).join("")}</div>`}</div>`;
    zc.querySelector("#zr-btn").onclick=()=>{resp=!resp;if(iv){clearInterval(iv);TIMERS.tela.delete(iv);iv=null}
      if(resp){let s=0,seg=4;fase=FASES[0];drawZ();const tick=()=>{const a=zc.querySelector("#zr-arc"),t=zc.querySelector("#zr-timer");if(a)a.style.strokeDashoffset=String(CIRC*(seg/4));if(t)t.textContent=seg};setTimeout(tick,30);
        iv=intervalo(()=>{if(!zc.isConnected){clearInterval(iv);return}seg--;if(seg<=0){s=(s+1)%4;fase=FASES[s];seg=4;drawZ();setTimeout(tick,30)}else tick()},1000)}else drawZ()};
  }
  drawZ();c.appendChild(zc);
}

function cardVisaoTunel(c){
  const vt=el("div","am-card a-up");vt.style.animationDelay=".22s";let on=false,iv=null,seg=0;
  const mmss=s=>String(Math.floor(s/60)).padStart(2,"0")+":"+String(s%60).padStart(2,"0");
  function draw(){
    vt.innerHTML=`<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:${on?16:12}px"><div class="am-tit" style="margin:0">${AMI("focus")}<span>Visão de Túnel</span></div><button id="vt-btn" type="button" class="am-mini${on?" r":""}">${on?"PARAR":"FOCAR"}</button></div>${on?`<div style="display:flex;flex-direction:column;align-items:center;gap:12px"><div style="width:160px;height:160px;border-radius:50%;background:radial-gradient(circle,rgba(0,209,255,.15) 0%,rgba(0,0,0,.95) 70%);border:2px solid rgba(0,209,255,.3);display:flex;align-items:center;justify-content:center"><div style="width:12px;height:12px;border-radius:50%;background:var(--y);box-shadow:0 0 20px var(--y)"></div></div><p style="font-size:12px;color:#9AA3CF;text-align:center;line-height:1.6;margin:0">Mantenha o olhar no ponto central.<br>Respire devagar. Foco total.</p><span id="vt-t" style="font-family:'JetBrains Mono',monospace;font-size:28px;color:var(--y)">${mmss(seg)}</span></div>`:`<p style="font-size:12px;color:#9AA3CF;line-height:1.55;margin:0">Concentração de alto rendimento: foco no ponto central para eliminar distrações antes de competir.</p>`}`;
    vt.querySelector("#vt-btn").onclick=()=>{on=!on;if(iv){clearInterval(iv);TIMERS.tela.delete(iv);iv=null}if(on){seg=0;iv=intervalo(()=>{seg++;const t=vt.querySelector("#vt-t");if(t)t.textContent=mmss(seg)},1000)}draw()};
  }
  draw();c.appendChild(vt);
}

function cardAnalytics(c){
  const ac=cardA("Analytics & Stats","bars","Últimos 7 check-ins","a-up");ac.style.animationDelay=".26s";const b=corpoDe(ac);b.innerHTML=carregandoHTML();c.appendChild(ac);
  FB.query("checkins","pacienteId","==",APP.user.uid,"data","DESCENDING",7).then(recs=>{
    if(!recs||!recs.length){b.innerHTML=vazioHTML("Nenhum check-in registrado ainda.");return}
    const corT=(t,inv)=>t==="→"?"var(--dim)":((t==="↑")!==!!inv)?"#4ade80":"#EC7896";
    b.innerHTML=`<div class="am-tiles3">${CK_CAMPOS.map(([k,l,cor,ic,,,inv])=>{const m=mediaCampo(recs,k),t=tendCampo(recs,k);return`<div class="am-tile"><span style="color:${cor}">${AMI(ic)}</span><span class="slbl">${l}</span><b style="color:${cor}">${fmt1(m)}</b><i style="color:${corT(t,inv)}">${m==null?"":t}</i></div>`}).join("")}</div><p class="am-dica" style="text-align:center;margin-top:10px">${plural(recs.length,"check-in","check-ins")} · prontidão média ${fmt1(mediaCampo(recs.map(r=>({p:prontidao(r)})),"p"))}</p>`;
  });
}

/* ════ S.O.S — o atleta só vê "recebido" quando alguém da equipe confirma ════ */
const SOSA={id:null,status:"",dados:null,em:0,timer:null,erro:""};
function retomarSOS(){
  if(!APP.user||isStaff(APP.cargo))return;
  let s=null;try{s=JSON.parse(LS.get("am_sos_ativo")||"null")}catch(e){}
  if(s&&s.uid===APP.user.uid&&Date.now()-s.em<3*3600e3){SOSA.id=s.id;SOSA.em=s.em;SOSA.status=SOSA.status||"pendente";acompanharSOS()}
  else{LS.del("am_sos_ativo");if(SOSA.status!=="falhou"){SOSA.id=null;SOSA.status=""}}
}
function acompanharSOS(){
  if(SOSA.timer&&TIMERS.app.has(SOSA.timer))return;
  const tick=async()=>{
    if(!SOSA.id){pararAcompSOS();return}
    const d=await FB.getDoc(`sos_alertas/${SOSA.id}`).catch(()=>null);if(!d||!d.status)return;
    const antes=SOSA.status;SOSA.dados=d;SOSA.status=d.status;
    if(antes&&antes!==d.status&&d.status==="em_atendimento"){avisar(`${primeiroNome(d.respondidoPorNome)||"A equipe"} recebeu seu S.O.S e vai falar com você.`,"ok",9000);notificarNavegador("AceMind","A equipe recebeu seu S.O.S.","sos-ok")}
    if(["resolvido","cancelado"].includes(d.status)||Date.now()-SOSA.em>3*3600e3){LS.del("am_sos_ativo");pararAcompSOS()}
    desenharSOSCard();
  };
  tick();SOSA.timer=intervalo(tick,5000,"app");
}
function pararAcompSOS(){if(SOSA.timer){clearInterval(SOSA.timer);TIMERS.app.delete(SOSA.timer);SOSA.timer=null}}
function cardSOS(c){const sc=el("div");sc.id="sos-card";c.appendChild(sc);desenharSOSCard();return sc}
async function dispararSOS(){
  SOSA.status="enviando";SOSA.erro="";desenharSOSCard();
  try{
    const r=await FB.addDoc("sos_alertas",{pacienteId:APP.user.uid,nome:APP.user.nome,telefone:limitar(APP.perfil?.telefone||"",30),esporte:limitar(APP.esporte||"",60),data:new Date().toISOString(),status:"pendente"});
    SOSA.id=r.id;SOSA.em=Date.now();SOSA.status="pendente";SOSA.dados=null;
    LS.set("am_sos_ativo",JSON.stringify({id:r.id,em:SOSA.em,uid:APP.user.uid}));acompanharSOS();
  }catch(e){SOSA.status="falhou";SOSA.erro=e.code==="REDE"?"Sem conexão com a internet.":"O servidor não respondeu.";registrarErro("sos",e)}
  desenharSOSCard();
}
function desenharSOSCard(){
  const sc=document.getElementById("sos-card");if(!sc)return;
  const st=SOSA.status,d=SOSA.dados||{},min=SOSA.em?Math.floor((Date.now()-SOSA.em)/60000):0;
  if(!st||st==="pronto"){
    sc.innerHTML=`<div class="sos-btn" role="button" tabindex="0" aria-label="S.O.S Mental: segure por 2 segundos para chamar a equipe"><div id="sos-fill" style="position:absolute;bottom:0;left:0;right:0;height:0;background:rgba(210,69,108,.14);transition:height 2s linear;pointer-events:none"></div><div style="width:38px;height:38px;border-radius:50%;background:rgba(210,69,108,.1);border:1px solid rgba(210,69,108,.3);display:flex;align-items:center;justify-content:center;color:#EC7896;position:relative;z-index:1">${AMI("alert",18)}</div><span style="font-family:'Archivo',sans-serif;font-stretch:112%;font-style:italic;font-weight:900;font-size:15px;letter-spacing:.15em;text-transform:uppercase;color:#EEF1F8;position:relative;z-index:1">S.O.S Mental</span><span id="sos-hint" style="font-size:11px;color:#EC7896;position:relative;z-index:1">Segure 2s · Chama a equipe AceMind</span></div><p class="am-dica" style="text-align:center;margin-top:8px">Em perigo agora? <a href="tel:188">CVV 188</a> · <a href="tel:192">SAMU 192</a></p>`;
    const btn=sc.querySelector(".sos-btn");let tmr=null;
    const ini=e=>{if(e&&e.type==="touchstart")e.preventDefault();const f=sc.querySelector("#sos-fill"),h=sc.querySelector("#sos-hint");if(f)f.style.height="100%";if(h)h.textContent="Segure para acionar...";clearTimeout(tmr);tmr=setTimeout(dispararSOS,2000)};
    const fim=()=>{clearTimeout(tmr);const f=sc.querySelector("#sos-fill"),h=sc.querySelector("#sos-hint");if(f)f.style.height="0";if(h)h.textContent="Segure 2s · Chama a equipe AceMind"};
    btn.addEventListener("pointerdown",ini);btn.addEventListener("touchstart",ini,{passive:false});["pointerup","pointerleave","pointercancel","touchend"].forEach(ev=>btn.addEventListener(ev,fim));
    btn.addEventListener("keydown",e=>{if((e.key==="Enter"||e.key===" ")&&!e.repeat){e.preventDefault();ini()}});btn.addEventListener("keyup",e=>{if(e.key==="Enter"||e.key===" ")fim()});
    return;
  }
  if(st==="enviando"){sc.innerHTML=`<div class="am-sos am-sos-envio" role="status">${carregandoHTML("Enviando alerta para a equipe...")}</div>`;return}
  if(st==="falhou"){sc.innerHTML=`<div class="am-sos am-sos-falha" role="alert"><p class="am-sos-h">${AMI("alert")} Não conseguimos enviar o alerta</p><p class="am-sos-p">${esc(SOSA.erro)} Se você precisa de ajuda agora, ligue:</p>${TEL_EMERG}<button class="btn-y" id="sos-de-novo" type="button" style="margin-top:12px">Tentar enviar de novo</button></div>`;sc.querySelector("#sos-de-novo").onclick=dispararSOS;return}
  if(st==="pendente"){
    sc.innerHTML=`<div class="am-sos" role="status"><p class="am-sos-h">${AMI("check")} Alerta enviado à equipe</p><p class="am-sos-p">${min>=3?`<b>A equipe ainda não confirmou o recebimento.</b> Se você estiver em perigo, não espere: ligue agora.`:`Aguardando alguém da equipe confirmar que recebeu${min?` · há ${min} min`:""}...`}</p>${TEL_EMERG}<label class="slbl" for="sos-msg" style="display:block;margin:14px 0 6px">Quer contar o que está acontecendo? (opcional)</label><textarea id="sos-msg" maxlength="500" style="height:70px;font-size:13px;resize:none">${esc(d.mensagem||"")}</textarea><div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px"><button class="btn-y" id="sos-env-msg" type="button" style="width:auto;padding:9px 16px;font-size:12px">Enviar mensagem</button><button class="btn-sec" id="sos-cancel" type="button" style="width:auto;padding:9px 14px;font-size:12px">Acionei sem querer</button></div></div>`;
    sc.querySelector("#sos-env-msg").onclick=async e=>{const t=limitar(sc.querySelector("#sos-msg").value.trim(),500);if(!t)return;const _b=e.currentTarget;_b.disabled=true;try{await FB.updateDoc(`sos_alertas/${SOSA.id}`,{mensagem:t});SOSA.dados={...d,mensagem:t};avisar("Mensagem enviada à equipe.","ok")}catch(x){avisar("Não foi possível enviar a mensagem.","erro")}_b.disabled=false};
    sc.querySelector("#sos-cancel").onclick=async()=>{if(!await confirmar("Cancelar o alerta? Use só se acionou sem querer.",{ok:"Cancelar alerta"}))return;try{await FB.updateDoc(`sos_alertas/${SOSA.id}`,{status:"cancelado"});LS.del("am_sos_ativo");pararAcompSOS();SOSA.id=null;SOSA.status="";desenharSOSCard();avisar("Alerta cancelado.","info")}catch(x){avisar("Não foi possível cancelar agora.","erro")}};
    return;
  }
  if(st==="em_atendimento"){const q=_dt(d.respondidoEm);sc.innerHTML=`<div class="am-sos am-sos-ok" role="status"><p class="am-sos-h">${AMI("heart")} A equipe recebeu seu alerta</p><p class="am-sos-p"><b>${esc(d.respondidoPorNome||"Alguém da equipe")}</b>${d.respondidoPorCargo?` (${esc(CARGOS[d.respondidoPorCargo]||"")})`:""} confirmou${q?` às ${q.toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"})}`:""} e vai falar com você. Fique com o celular por perto.</p>${TEL_EMERG}</div>`;return}
  sc.innerHTML=`<div class="am-sos am-sos-ok" role="status"><p class="am-sos-h">${AMI("check")} ${st==="cancelado"?"Alerta cancelado":"Atendimento encerrado"}</p><p class="am-sos-p">Se precisar de novo, é só acionar.</p><button class="btn-sec" id="sos-novo" type="button" style="width:auto;margin-top:10px">Voltar ao S.O.S</button></div>`;
  sc.querySelector("#sos-novo").onclick=()=>{SOSA.id=null;SOSA.status="";SOSA.dados=null;desenharSOSCard()};
}

/* ════ PRÉ-COMPETIÇÃO ════ */
function tabPre(c){
  const uid=APP.user.uid,sp=SP();
  if(pode("mantra")){
    let mantra=LS.get("am_mantra_"+uid)||"EU CONTROLO O QUE POSSO CONTROLAR.";
    const mc=el("div");mc.style.cssText="background:rgba(0,209,255,.03);border:1px solid rgba(0,209,255,.1);border-radius:3px;clip-path:var(--cut);padding:16px;display:flex;gap:13px;align-items:center";
    mc.innerHTML=`<div style="flex:1;min-width:0"><label class="slbl" for="mantra-inp" style="display:block;margin-bottom:7px;color:rgba(0,209,255,.65)">Frase Âncora</label><input type="text" id="mantra-inp" maxlength="80" value="${esc(mantra)}" style="background:transparent;border:none;border-bottom:1px solid rgba(255,255,255,.1);border-radius:0;padding:3px 0;font-family:'Archivo',sans-serif;font-weight:700;font-size:14px;box-shadow:none;color:var(--txt)"></div><button id="mantra-show" type="button" aria-label="Mostrar em tela cheia" style="background:var(--y);border:none;border-radius:3px;padding:13px;cursor:pointer;color:#060B42;display:flex">${AMI("eye",16)}</button>`;
    mc.querySelector("#mantra-inp").oninput=e=>{mantra=e.target.value;LS.set("am_mantra_"+uid,mantra)};
    mc.querySelector("#mantra-show").onclick=()=>{const ov=el("div");ov.setAttribute("role","dialog");ov.tabIndex=0;ov.style.cssText="position:fixed;inset:0;background:#060B42;z-index:500;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:48px;cursor:pointer";ov.innerHTML=`<div class="glitch" data-text="${esc(mantra)}" style="text-align:center"><p style="font-family:'Archivo',sans-serif;font-stretch:125%;font-style:italic;font-weight:900;font-size:clamp(28px,7vw,64px);color:#fff;text-transform:uppercase;line-height:1.05;margin:0">${esc(mantra)}</p></div><p style="position:absolute;bottom:36px;font-family:'JetBrains Mono',monospace;font-size:10px;color:#838CC0;font-weight:700;letter-spacing:.25em;text-transform:uppercase">TOQUE PARA SAIR</p>`;const sair=()=>ov.remove();ov.onclick=sair;ov.onkeydown=e=>{if(e.key==="Escape"||e.key==="Enter")sair()};document.body.appendChild(ov);ov.focus()};
    c.appendChild(mc);
  }
  if(pode("checklist")){
    const chk={eq:false,hid:false,vis:false,tat:false},cc=cardA("Preparação de Trincheira","check");
    const draw=()=>{const tudo=Object.values(chk).every(Boolean);corpoDe(cc).innerHTML=`<div style="display:grid;grid-template-columns:1fr 1fr;gap:9px">${[["eq","Equipamento"],["hid","Hidratação"],["vis","Visualização"],["tat","Tática"]].map(([k,l])=>`<button type="button" class="check-tile${chk[k]?" checked":""}" data-k="${k}" aria-pressed="${chk[k]}">${l}</button>`).join("")}</div>${tudo?`<div style="margin-top:12px;background:rgba(0,209,255,.07);border:1px solid rgba(0,209,255,.2);border-radius:3px;padding:9px;text-align:center"><span style="font-family:'Archivo',sans-serif;font-stretch:110%;font-style:italic;font-size:11px;font-weight:800;letter-spacing:.2em;text-transform:uppercase;color:var(--y)">● Pronto para competir!</span></div>`:""}`;cc.querySelectorAll(".check-tile").forEach(b=>b.onclick=()=>{chk[b.dataset.k]=!chk[b.dataset.k];draw()})};
    draw();c.appendChild(cc);
  }else gateAtleta(c,"checklist");
  const precisaAq=pode("aquecAtleta"),precisaCofre=pode("cofreTatico");
  let aqC=null,cofC=null;
  if(precisaAq){aqC=cardA("Aquecimento — protocolo da equipe","flame");corpoDe(aqC).innerHTML=carregandoHTML();c.appendChild(aqC)}else gateAtleta(c,"aquecAtleta");
  if(precisaCofre){cofC=cardA("Cofre Tático","lock");corpoDe(cofC).innerHTML=carregandoHTML();c.appendChild(cofC)}else gateAtleta(c,"cofreTatico");
  if(!aqC&&!cofC)return;
  Promise.all([FB.getDoc(`atletas/${uid}/planos/aquecimento`).catch(()=>null),FB.getDoc(`prontuarios/${uid}`).catch(()=>null)]).then(([aq,pr])=>{
    aq=aq||{};const leg=pr?.rotinas||{};
    if(aqC)corpoDe(aqC).innerHTML=aq.titulo||aq.exercicios?`${aq.titulo?`<p class="am-h">${esc(aq.titulo)}</p>`:""}${aq.duracao?`<span class="slbl" style="display:inline-block;margin-bottom:8px;color:rgba(251,146,60,.8)">${AMI("clock")} ${esc(aq.duracao)}</span>`:""}${aq.exercicios?`<p class="am-pre">${esc(aq.exercicios)}</p>`:""}${aq.descricao?`<p class="am-dica" style="margin-top:8px">${esc(aq.descricao)}</p>`:""}`:vazioHTML("A equipe ainda não definiu seu protocolo de aquecimento.");
    if(cofC)corpoDe(cofC).innerHTML=`<div class="am-bloco"><span class="slbl">${esc(sp.ritual)}</span><p>${esc(aq.rotinaPre||leg.pre||"Nenhuma rotina definida.")}</p></div><div class="am-bloco"><span class="slbl">Reset Pós-Erro</span><p>${esc(aq.rotinaPos||leg.pos||"Nenhuma rotina definida.")}</p></div>`;
  });
}

/* ════ PÓS-COMPETIÇÃO ════ */
function tabPos(c){
  const uid=APP.user.uid,sp=SP();
  if(pode("raioX")){
    const RCL={"Vitória":"win","Empate":"draw","Derrota":"loss"},RSY={"Vitória":"●","Empate":"=","Derrota":"✕"};
    const OPC=sp.modo==="ved"?["Vitória","Empate","Derrota"]:["Vitória","Derrota"];
    let torn="",res="Vitória",conf=5,relato="",placar="",adv="",coloc="",marca="",salv=false;
    const pc=el("div","am-card top");const lbl=(t,f)=>`<label class="slbl" for="${f}" style="display:block;margin-bottom:7px">${t}</label>`;
    const drawP=()=>{
      pc.innerHTML=`<div class="am-tit" style="flex-wrap:wrap">${AMI("trophy")}<span>Raio-X Pós-${esc(sp.evento)}</span>${sp.nome?`<span style="margin-left:auto">${sportChip(sp.nome,"sm")}</span>`:""}</div><div style="display:flex;flex-direction:column;gap:14px"><div>${lbl(sp.comp,"rp-torn")}<input type="text" id="rp-torn" maxlength="120" value="${esc(torn)}" placeholder="${esc(sp.compEx)}" style="font-size:13px"></div>${sp.modo==="pos"
        ?`<div style="display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.4fr);gap:9px"><div>${lbl("Colocação","rp-col")}<input type="number" min="1" max="999" inputmode="numeric" id="rp-col" value="${esc(coloc)}" placeholder="Ex: 3" style="font-size:13px;font-family:'JetBrains Mono',monospace"></div><div>${lbl(sp.placar,"rp-marca")}<input type="text" id="rp-marca" maxlength="40" value="${esc(marca)}" placeholder="${esc(sp.placarEx)}" style="font-size:13px;font-family:'JetBrains Mono',monospace"></div></div>`
        :`<div class="rb${OPC.length}" style="display:grid;grid-template-columns:repeat(${OPC.length},minmax(0,1fr));gap:9px">${OPC.map(x=>`<button type="button" class="result-btn${res===x?" "+RCL[x]:""}" data-res="${x}" aria-pressed="${res===x}">${RSY[x]} ${x}</button>`).join("")}</div><div style="display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:9px"><div>${lbl(sp.placar,"rp-placar")}<input type="text" id="rp-placar" maxlength="40" value="${esc(placar)}" placeholder="${esc(sp.placarEx)}" style="font-size:13px"></div><div>${lbl("Adversário","rp-adv")}<input type="text" id="rp-adv" maxlength="80" value="${esc(adv)}" placeholder="Opcional" style="font-size:13px"></div></div>`}<div><div style="display:flex;justify-content:space-between;margin-bottom:7px"><label class="slbl" for="rp-conf">Confiança</label><span style="font-family:'JetBrains Mono',monospace;color:var(--y);font-size:17px" id="rp-cv">${conf}</span></div><input type="range" min="1" max="10" id="rp-conf"></div><div>${lbl("Diário Tático","rp-rel")}<textarea id="rp-rel" class="cs" maxlength="2000" placeholder="Como se sentiu?" style="height:80px;font-size:13px;resize:none;display:block">${esc(relato)}</textarea></div><button id="rp-sub" type="button" class="btn-y" ${salv?"disabled":""}>${salv?"Enviando...":"Submeter Estatística"}</button></div>`;
      const q=s=>pc.querySelector(s);
      q("#rp-torn").oninput=e=>torn=e.target.value;pc.querySelectorAll("[data-res]").forEach(b=>b.onclick=()=>{res=b.dataset.res;drawP()});
      if(q("#rp-col"))q("#rp-col").oninput=e=>coloc=e.target.value;if(q("#rp-marca"))q("#rp-marca").oninput=e=>marca=e.target.value;
      if(q("#rp-placar"))q("#rp-placar").oninput=e=>placar=e.target.value;if(q("#rp-adv"))q("#rp-adv").oninput=e=>adv=e.target.value;
      const ri=q("#rp-conf");setRng(ri,conf);ri.addEventListener("input",e=>{conf=+e.target.value;setRng(ri,conf);q("#rp-cv").textContent=conf});
      q("#rp-rel").oninput=e=>relato=e.target.value;
      q("#rp-sub").onclick=async()=>{if(!torn.trim()){avisar("Informe a competição.","erro");q("#rp-torn").focus();return}salv=true;drawP();
        const doc={torneio:limitar(torn.trim(),120),resultado:sp.modo==="pos"?(+coloc>0?`${Math.round(+coloc)}º lugar`:"Participação"):res,confianca:conf,relato:limitar(relato.trim(),2000),esporte:limitar(sp.nome||"",60),dataRegistro:new Date().toISOString()};
        if(sp.modo==="pos"){if(+coloc>0)doc.colocacao=Math.min(999,Math.round(+coloc));if(marca.trim())doc.marca=limitar(marca.trim(),40)}else{if(placar.trim())doc.placar=limitar(placar.trim(),40);if(adv.trim())doc.adversario=limitar(adv.trim(),80)}
        try{const r=await addDocOuFila(`prontuarios/${uid}/partidas`,doc);if(!r.fila)avisar("Raio-X enviado!","ok");torn="";relato="";res="Vitória";conf=5;placar="";adv="";coloc="";marca=""}catch(ex){avisar("Não foi possível enviar. Tente de novo.","erro")}
        salv=false;drawP()};
    };
    drawP();c.appendChild(pc);
  }else gateAtleta(c,"raioX");
  if(pode("graficoEvolucao")){
    const gc=cardA("Gráfico de Evolução","trend","Últimos 10 check-ins","a-up");const b=corpoDe(gc);b.innerHTML=carregandoHTML();c.appendChild(gc);
    FB.query("checkins","pacienteId","==",uid,"data","DESCENDING",10).then(recs=>{
      if(!recs||recs.length<2){b.innerHTML=vazioHTML("Registre pelo menos 2 check-ins para ver a evolução.");return}
      const rev=[...recs].reverse();
      b.innerHTML=`<div style="display:flex;flex-direction:column;gap:14px">${CK_CAMPOS.filter(([k])=>rev.some(r=>r[k]!=null)).map(([k,l,cor,ic,min,max])=>`<div><div style="display:flex;justify-content:space-between;margin-bottom:5px"><span class="slbl">${AMI(ic)} ${l}</span><span style="font-family:'JetBrains Mono',monospace;font-size:11px;color:${cor}">${rev[rev.length-1][k]??"—"}/${max}</span></div><div class="am-barras">${rev.map(r=>`<div style="background:${cor};height:${(Math.max(0,+r[k]||0)/max)*100}%"></div>`).join("")}</div></div>`).join("")}</div>`;
    });
  }else gateAtleta(c,"graficoEvolucao");
  if(pode("salaTrofeus")){
    const tc=cardA("Sala de Troféus","medal","","a-up");const box=corpoDe(tc);box.innerHTML=carregandoHTML();c.appendChild(tc);
    FB.getDocs(`prontuarios/${uid}/partidas`).then(lista=>{
      if(!lista||!lista.length){box.innerHTML=vazioHTML(`${nenhumEvento(sp)} ainda.`);return}
      const st=statsComp(lista,sp),tiles=statTiles(st,sp),ult=ordDesc(lista,RES.data).slice(0,3);
      const ICO={"Vitórias":"trophy","Derrotas":"shield","Empates":"repeat","Aproveit.":"bolt","Pódios":"medal","Melhor":"trend"};
      box.innerHTML=`<div style="display:grid;grid-template-columns:repeat(${tiles.length},minmax(0,1fr));gap:7px;margin-bottom:12px">${tiles.map(([l,v,col])=>`<div style="background:rgba(0,0,0,.25);border:1px solid rgba(255,255,255,.07);border-top:2px solid ${col};border-radius:3px;padding:10px 4px;text-align:center"><span style="font-size:16px;display:block;color:${col}">${AMI(ICO[l]||sp.icon)}</span><span style="font-family:'JetBrains Mono',monospace;font-size:18px;color:${col};display:block">${v}</span><span class="slbl" style="font-size:8px">${l}</span></div>`).join("")}</div><div style="display:grid;grid-template-columns:1fr 1fr;gap:7px;margin-bottom:12px"><div class="am-tile"><span class="slbl">Confiança média</span><b style="color:#818cf8">${st.conf==null?"—":fmt1(st.conf)}</b></div><div class="am-tile"><span class="slbl">Pico de confiança</span><b style="color:#fb923c">${st.pico??"—"}</b></div></div><span class="slbl" style="display:block;margin-bottom:8px;font-size:8px">${ultimosEv(sp)}</span>${ult.map(m=>`<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,.04)"><span style="color:${RES.cor(m)}">${RES.win(m)?AMI("trophy"):RES.podio(m)?AMI("medal"):AMI("shield")}</span><div style="flex:1;min-width:0"><p style="font-size:12px;color:#EEF1F8;margin:0;font-family:'JetBrains Mono',monospace;font-weight:700;text-transform:uppercase;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(m.torneio||sp.evento)}</p><span style="font-size:10px;color:${RES.cor(m)}">${esc(RES.label(m))}${RES.det(m)?" · "+esc(RES.det(m)):""}</span></div><span style="font-family:'JetBrains Mono',monospace;font-size:13px;color:var(--y)">${m.confianca||"-"}/10</span></div>`).join("")}`;
    });
  }else gateAtleta(c,"salaTrofeus");
  if(pode("relatos")){
    const rc=cardA("Meus Relatos","note","Diário tático","a-up");const b=corpoDe(rc);b.innerHTML=carregandoHTML();c.appendChild(rc);
    FB.getDocs(`prontuarios/${uid}/partidas`).then(l=>{const com=ordDesc((l||[]).filter(p=>p.relato),RES.data).slice(0,12);b.innerHTML=com.length?com.map(p=>`<div class="historico-badge" style="border-left:3px solid ${RES.cor(p)}"><span class="historico-data">${_fmtD(RES.data(p))} · ${esc(p.torneio||"")} · ${esc(RES.label(p))}</span><p style="font-size:13px;color:#B4BBE0;margin:0;white-space:pre-wrap;line-height:1.6">${esc(p.relato)}</p></div>`).join(""):vazioHTML("Seus relatos do Raio-X aparecem aqui.")});
  }else gateAtleta(c,"relatos");
}

/* ════ TREINO — sessões prescritas, registro com PSE e carga ════ */
function tabTreino(c){
  if(!pode("treinoAtleta")){gateAtleta(c,"treinoAtleta");return}
  const uid=APP.user.uid;let treinos=[],lesoes=[],avals=[];
  const sem=cardA("Treinos da semana","dumbbell");const bs=corpoDe(sem);bs.innerHTML=carregandoHTML();
  const carga=cardA("Minha carga de treino","bars");const bc=corpoDe(carga);bc.innerHTML=carregandoHTML();
  const les=cardA("Lesões e restrições","cross");const bl=corpoDe(les);bl.innerHTML=carregandoHTML();
  const av=cardA("Minhas avaliações físicas","trend");const ba=corpoDe(av);ba.innerHTML=carregandoHTML();
  c.append(sem,carga,les,av);
  async function load(){
    const[t,l,a]=await Promise.all([FB.getDocs(`atletas/${uid}/treinos`),FB.getDocs(`atletas/${uid}/lesoes`),FB.getDocs(`atletas/${uid}/avaliacoes`)]);
    treinos=t||[];lesoes=(l||[]).filter(x=>!x.anulada);avals=(a||[]).filter(x=>!x.anulada);draw();
  }
  function draw(){
    const hoje=hojeLocal(),ini=somaDias(hoje,-6),fim=somaDias(hoje,7);
    const daSemana=treinos.filter(t=>{const d=String(dataTreino(t)).slice(0,10);return d>=ini&&d<=fim}).sort((a,b)=>{const pa=a.status==="prescrito"?0:1,pb=b.status==="prescrito"?0:1;if(pa!==pb)return pa-pb;const c=String(dataTreino(a)).localeCompare(String(dataTreino(b)));return pa===0?c:-c});
    bs.innerHTML=`${daSemana.length?daSemana.map(t=>{const r=t.realizado||{},st=t.status||"prescrito",exs=(t.exercicios||[]).filter(e=>e&&e.nome);return`<div class="am-treino ${st}"><div class="am-treino-h"><div style="min-width:0"><p class="am-h" style="margin:0 0 3px">${esc(t.titulo||TREINO_TIPOS[t.tipo]||"Treino")}</p><span class="slbl">${_fmtD(dataTreino(t))} · ${esc(TREINO_TIPOS[t.tipo]||"")}${t.duracaoPrevista?` · ${+t.duracaoPrevista} min previstos`:""}${t.origem==="atleta"?" · registrado por você":t.autorNome?` · ${esc(t.autorNome)}`:""}</span></div><span class="am-tag ${st==="realizado"?"g":st==="nao_realizado"?"r":""}">${TREINO_STATUS[st]||st}</span></div>${exs.length?`<div class="am-tab-wrap"><table class="am-tab"><thead><tr><th>Exercício</th><th>Séries × reps</th><th>Carga</th><th>Pausa</th></tr></thead><tbody>${exs.map(e=>`<tr><td>${esc(e.nome)}${e.obs?`<div class="am-dica">${esc(e.obs)}</div>`:""}</td><td>${esc([e.series,e.reps].filter(Boolean).join(" × ")||"—")}</td><td>${esc(e.carga||"—")}</td><td>${esc(e.descanso||"—")}</td></tr>`).join("")}</tbody></table></div>`:""}${t.notas?`<p class="am-dica" style="margin-top:6px">${esc(t.notas)}</p>`:""}${st==="realizado"?`<p class="am-dica" style="margin-top:6px">Feito: ${r.duracao||"—"} min · PSE ${r.pse??"—"} (${esc(PSE_ESCALA[r.pse]||"")}) · carga <b>${cargaDe(t)} UA</b>${r.comentario?` · “${esc(r.comentario)}”`:""}</p>`:""}${st==="prescrito"?`<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px"><button class="btn-y" type="button" data-feito="${esc(t._id)}" style="width:auto;padding:9px 16px;font-size:12px">${AMI("check")} Registrar como feito</button><button class="btn-sec" type="button" data-nao="${esc(t._id)}" style="width:auto;padding:9px 14px;font-size:12px">Não realizei</button></div>`:""}</div>`}).join(""):vazioHTML("Nenhum treino nesta semana. Registre um treino livre abaixo.")}<button class="btn-sec" type="button" id="tr-livre" style="margin-top:12px">${AMI("plus")} Registrar treino livre</button>`;
    bs.querySelectorAll("[data-feito]").forEach(b=>b.onclick=()=>registrarTreino(treinos.find(t=>t._id===b.dataset.feito)));
    bs.querySelectorAll("[data-nao]").forEach(b=>b.onclick=()=>naoRealizado(treinos.find(t=>t._id===b.dataset.nao)));
    bs.querySelector("#tr-livre").onclick=()=>registrarTreino(null);
    const A=analiseCarga(treinos),maxS=Math.max(1,...A.semanas.map(s=>s.carga));
    bc.innerHTML=`<div class="am-tiles3" style="grid-template-columns:repeat(3,minmax(0,1fr))"><div class="am-tile"><span class="slbl">Últimos 7 dias</span><b>${A.aguda}</b><i>UA · ${plural(A.sessoes7,"sessão","sessões")}</i></div><div class="am-tile"><span class="slbl">Média semanal</span><b>${Math.round(A.cronica)}</b><i>UA (4 semanas)</i></div><div class="am-tile"><span class="slbl">Equilíbrio</span><b style="color:${ZONA_COR[A.suficiente?A.zona:"sem"]}">${A.suficiente&&A.acwr!=null?fmt1(A.acwr):"—"}</b><i>${A.suficiente?ZONA_TXT[A.zona]:"3 semanas de dados"}</i></div></div><div class="am-semanas" aria-label="Carga por semana">${A.semanas.map((s,i)=>`<div title="${_fmtD(s.ini)} a ${_fmtD(s.fim)}: ${s.carga} UA"><span style="height:${Math.round(s.carga/maxS*100)}%;background:${i===7?"var(--y)":"rgba(0,209,255,.35)"}"></span><i>${_dt(s.fim).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"})}</i></div>`).join("")}</div><p class="am-dica" style="margin-top:8px">Carga = minutos × esforço percebido (PSE de 0 a 10). Registrar todo treino deixa o acompanhamento da equipe mais preciso.</p>`;
    const at=lesoes.filter(lesaoAtiva).sort((a,b)=>String(b.data).localeCompare(String(a.data)));
    bl.innerHTML=at.length?at.map(l=>`<div class="historico-badge" style="border-left:3px solid ${LESAO_STATUS_COR[l.status]||"#f59e0b"}"><span class="historico-data">${esc(l.local||"")}${l.lado&&l.lado!=="—"?" · "+esc(l.lado):""} · desde ${_fmtD(l.data)}</span><p style="margin:0;font-size:13px;color:#EEF1F8">${esc(LESAO_STATUS[l.status]||l.status)}${l.retornoPrevisto?` · retorno previsto ${_fmtD(l.retornoPrevisto)}`:""}</p>${l.orientacoes?`<p class="am-dica" style="margin-top:4px">${esc(l.orientacoes)}</p>`:""}</div>`).join(""):vazioHTML("Nenhuma lesão ativa registrada pela equipe.");
    const ult={};ordDesc(avals,a=>a.data).forEach(a=>{const k=a.teste==="outro"?"outro:"+(a.nomeTeste||""):a.teste;(ult[k]=ult[k]||[]).push(a)});
    const ks=Object.keys(ult);
    ba.innerHTML=ks.length?`<div class="am-tab-wrap"><table class="am-tab"><thead><tr><th>Teste</th><th>Último</th><th>Anterior</th><th>Data</th></tr></thead><tbody>${ks.map(k=>{const[a,b]=ult[k],u=avalTeste(a.teste)[2]||a.unidade||"";return`<tr><td>${esc(nomeAval(a))}</td><td><b>${esc(String(a.valor??"—"))}</b> ${esc(u)}</td><td>${b?esc(String(b.valor??"—"))+" "+esc(u):"—"}</td><td>${_fmtD(a.data)}</td></tr>`}).join("")}</tbody></table></div>`:vazioHTML("Nenhuma avaliação registrada ainda.");
  }
  function registrarTreino(t){
    const livre=!t,hoje=hojeLocal();let pse=5;
    const m=abrirModal(`<h3 class="ptitle" style="font-size:20px;margin:0 0 4px">${livre?"Registrar treino livre":"Registrar treino feito"}</h3>${livre?"":`<p class="am-dica" style="margin:0 0 12px">${esc(t.titulo||TREINO_TIPOS[t.tipo]||"Treino")} · ${_fmtD(t.data)}</p>`}<form id="rt-f" style="display:flex;flex-direction:column;gap:12px;margin-top:10px">${livre?`<input type="text" id="rt-tit" maxlength="80" placeholder="O que você treinou?" required><select id="rt-tipo">${Object.entries(TREINO_TIPOS).map(([k,v])=>`<option value="${k}">${v}</option>`).join("")}</select>`:""}<div class="am-grid2"><div><label class="slbl" for="rt-data" style="display:block;margin-bottom:6px">Data</label><input type="date" id="rt-data" value="${esc(livre?hoje:String(t.data||hoje).slice(0,10))}" max="${hoje}" required></div><div><label class="slbl" for="rt-dur" style="display:block;margin-bottom:6px">Duração (min)</label><input type="number" id="rt-dur" min="1" max="600" inputmode="numeric" value="${livre?"":esc(String(t.duracaoPrevista||""))}" required></div></div><div><div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:6px"><label class="slbl" for="rt-pse">Esforço percebido (PSE)</label><span id="rt-psev" style="font-family:'JetBrains Mono',monospace;color:var(--y)">5 · Difícil</span></div><input type="range" id="rt-pse" min="0" max="10" value="5"><p class="am-dica">Como foi o treino inteiro, 30 min depois de terminar: 0 = repouso · 10 = máximo.</p></div><textarea id="rt-com" maxlength="500" placeholder="Comentário (opcional)" style="height:70px;font-size:13px;resize:none"></textarea><div style="display:flex;justify-content:flex-end;gap:10px"><button class="btn-sec" type="button" data-fechar style="width:auto">Cancelar</button><button class="btn-y" type="submit" style="width:auto;padding:10px 18px">Salvar</button></div></form>`,{largura:520});
    const r=m.el.querySelector("#rt-pse");setRng(r,5);r.oninput=e=>{pse=+e.target.value;setRng(r,pse);m.el.querySelector("#rt-psev").textContent=`${pse} · ${PSE_ESCALA[pse]}`};
    m.el.querySelector("#rt-f").onsubmit=async e=>{e.preventDefault();
      const dur=Math.round(+m.el.querySelector("#rt-dur").value),data=m.el.querySelector("#rt-data").value;
      if(!(dur>=1&&dur<=600))return avisar("Informe a duração em minutos.","erro");if(!data)return avisar("Informe a data.","erro");
      const realizado={data,duracao:dur,pse,carga:dur*pse,comentario:limitar(m.el.querySelector("#rt-com").value.trim(),500),registradoEm:new Date().toISOString()};
      const btn=e.submitter||m.el.querySelector("[type=submit]");btn.disabled=true;
      try{
        if(livre){const tit=limitar(m.el.querySelector("#rt-tit").value.trim(),80);if(!tit){btn.disabled=false;return avisar("Diga o que você treinou.","erro")}
          const doc={titulo:tit,tipo:m.el.querySelector("#rt-tipo").value,data,origem:"atleta",autorId:uid,autorNome:APP.user.nome,autorCargo:"paciente",status:"realizado",realizado,criadoEm:new Date().toISOString()};
          const res=await addDocOuFila(`atletas/${uid}/treinos`,doc);treinos.push({...doc,_id:res.id||"fila"+Date.now()})}
        else{await FB.updateDoc(`atletas/${uid}/treinos/${t._id}`,{status:"realizado",realizado});Object.assign(t,{status:"realizado",realizado})}
        avisar(`Treino registrado: ${dur*pse} UA de carga.`,"ok");m.fechar();draw();
      }catch(x){btn.disabled=false;avisar("Não foi possível salvar. "+(x.code==="REDE"?"Verifique a internet.":"Tente de novo."),"erro")}
    };
  }
  async function naoRealizado(t){
    const m=abrirModal(`<h3 class="ptitle" style="font-size:20px;margin:0 0 10px">Treino não realizado</h3><textarea id="nr-mot" maxlength="300" placeholder="Motivo (opcional): dor, viagem, doença..." style="height:80px;font-size:13px;resize:none"></textarea><div style="display:flex;justify-content:flex-end;gap:10px;margin-top:14px"><button class="btn-sec" type="button" data-fechar style="width:auto">Cancelar</button><button class="btn-y" type="button" id="nr-ok" style="width:auto;padding:10px 18px">Confirmar</button></div>`,{largura:440});
    m.el.querySelector("#nr-ok").onclick=async()=>{try{const mot=limitar(m.el.querySelector("#nr-mot").value.trim(),300);await FB.updateDoc(`atletas/${uid}/treinos/${t._id}`,{status:"nao_realizado",motivoNao:mot});Object.assign(t,{status:"nao_realizado",motivoNao:mot});m.fechar();draw()}catch(x){avisar("Não foi possível salvar.","erro")}};
  }
  load();
}

/* ════ MEU PLANO — objetivos, recomendações, sessões e competições ════ */
function tabPlano(c){
  if(!pode("meuPlano")){gateAtleta(c,"meuPlano");return}
  const uid=APP.user.uid,sp=SP();
  const obj=cardA("Objetivos e recomendações da equipe","flag","","top");const bo=corpoDe(obj);bo.innerHTML=carregandoHTML();
  const ses=cardA("Próximas sessões","calendar");const bs=corpoDe(ses);bs.innerHTML=carregandoHTML();
  const comp=cardA("Próximas competições","trophy");const bcp=corpoDe(comp);bcp.innerHTML=carregandoHTML();
  const tr=cardA("Treinos programados","dumbbell");const bt=corpoDe(tr);bt.innerHTML=carregandoHTML();
  c.append(obj,ses,comp,tr);
  if(pode("pdfExport")){const pdf=cardA("Meu relatório","file");corpoDe(pdf).innerHTML=`<p class="am-dica" style="margin:0 0 10px">PDF com seu bem-estar, competições, treinos, preparação e as orientações da equipe.</p><button class="btn-y" type="button" id="pl-pdf">${AMI("download")} Baixar meu relatório (PDF)</button>`;c.appendChild(pdf);pdf.querySelector("#pl-pdf").onclick=async e=>{const b=e.currentTarget;b.disabled=true;b.textContent="Gerando...";try{await relatorioAtletaPDF(uid)}catch(x){avisar("Não foi possível gerar o PDF.","erro")}b.disabled=false;b.innerHTML=`${AMI("download")} Baixar meu relatório (PDF)`}}
  else gateAtleta(c,"pdfExport");
  FB.getDoc(`prontuarios/${uid}`).catch(()=>null).then(pr=>{const r=(pr&&pr.relatorio)||{};
    bo.innerHTML=r.objetivos||r.recomendacoes?`${r.objetivos?`<div class="am-bloco"><span class="slbl">Objetivos</span><p>${esc(r.objetivos)}</p></div>`:""}${r.recomendacoes?`<div class="am-bloco"><span class="slbl">Recomendações</span><p>${esc(r.recomendacoes)}</p></div>`:""}${r.atualizadoEm?`<p class="am-dica">Atualizado em ${_fmtD(r.atualizadoEm)}${r.por?` por ${esc(r.por)}`:""}.</p>`:""}`:vazioHTML("A equipe ainda não registrou objetivos para você. Eles aparecem aqui quando forem definidos.")});
  FB.query("agenda","atletaId","==",uid,"dataHora","DESCENDING",200).then(l=>{const ag=Date.now()-60*60000;const f=(l||[]).filter(s=>_dt(s.dataHora)&&_dt(s.dataHora).getTime()>ag).sort((a,b)=>String(a.dataHora).localeCompare(String(b.dataHora))).slice(0,8);
    bs.innerHTML=f.length?f.map(s=>{const u=urlSegura(s.link);return`<div class="historico-badge"><span class="historico-data">${_fmtDH(s.dataHora)}${s.dataHoraFim?` → ${_dt(s.dataHoraFim).toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"})}`:""}</span><p style="margin:0;font-size:13px;color:#EEF1F8">${esc(s.titulo||"Sessão")}${s.profissionalNome?` · ${esc(s.profissionalNome)}`:""}</p>${s.local?`<p class="am-dica" style="margin-top:4px">${AMI("pin")} ${esc(s.local)}</p>`:""}${u?`<a href="${esc(u)}" target="_blank" rel="noopener noreferrer" class="sess-link" style="margin-top:8px">Entrar na sala virtual →</a>`:""}</div>`}).join(""):vazioHTML("Nenhuma sessão marcada.")});
  FB.query("torneios","data",">=",somaDias(hojeLocal(),-30),"data","ASCENDING",100).then(l=>{const hoje=hojeLocal();const f=(l||[]).filter(t=>(t.dataFim||t.data)>=hoje&&(!t.modalidade||!sp.key||sportKey(t.modalidade)===sp.key)).slice(0,8);
    bcp.innerHTML=f.length?f.map(t=>`<div class="tourn-card" style="margin-bottom:8px"><div style="min-width:0"><p style="font-family:'Archivo',sans-serif;font-stretch:112%;font-style:italic;font-weight:800;font-size:14px;color:#EEF1F8;margin:0 0 3px;text-transform:uppercase">${esc(t.nome)}</p><span style="font-size:11px;color:var(--y);font-family:'JetBrains Mono',monospace">${_fmtD(t.data)}${t.dataFim?" → "+_fmtD(t.dataFim):""}</span>${t.local?`<span class="am-dica"> · ${esc(t.local)}</span>`:""}</div>${t.modalidade?sportChip(t.modalidade,"sm"):""}</div>`).join(""):vazioHTML("Nenhuma competição no radar da equipe.")});
  FB.getDocs(`atletas/${uid}/treinos`).then(l=>{const hoje=hojeLocal();const f=(l||[]).filter(t=>t.status==="prescrito"&&String(t.data).slice(0,10)>=hoje).sort((a,b)=>String(a.data).localeCompare(String(b.data))).slice(0,6);
    bt.innerHTML=(f.length?f.map(t=>`<div class="dk-row"><span class="slbl" style="min-width:86px">${_fmtD(t.data)}</span><span style="font-size:13px;color:#EEF1F8">${esc(t.titulo||TREINO_TIPOS[t.tipo]||"Treino")}</span></div>`).join(""):vazioHTML("Nenhum treino programado."))+`<button class="btn-sec" type="button" id="pl-tr" style="margin-top:10px">Abrir treinos</button>`;bt.querySelector("#pl-tr").onclick=()=>APP.irPara&&APP.irPara("treino")});
}

/* ════ VÍDEO & IA ════ */
function tabIA(c){
  const uid=APP.user.uid,sp=SP();
  if(pode("videoUpload")){
    const vc=cardA("Análise do seu vídeo","video","IA","top");const b=corpoDe(vc);c.appendChild(vc);
    if(!APP.consent?.video){b.innerHTML=`<p class="am-note" style="margin:0 0 12px">Para enviar vídeos, autorize a análise de imagens em "Meus dados e privacidade". Você pode revogar quando quiser.</p><button class="btn-y" type="button" id="ia-aut">Autorizar vídeos</button>`;b.querySelector("#ia-aut").onclick=()=>APP.irPara&&APP.irPara("dados")}
    else{
      let frames=[],res=null;
      b.innerHTML=`<p class="ia-sport">${iaSportHTML(sp)}</p><label class="upload-area" for="ia-file" style="display:block;padding:36px 16px"><span style="font-size:34px;display:block;margin-bottom:10px">${AMI("video")}</span><span style="font-family:'JetBrains Mono',monospace;font-weight:700;font-size:13px;color:#EEF1F8;text-transform:uppercase;display:block;margin-bottom:4px">Escolher vídeo</span><span class="am-dica">Até 100 MB. O vídeo não sai do seu aparelho: só 5 quadros vão para a análise.</span></label><input type="file" id="ia-file" accept="video/*" hidden><video id="ia-prev" class="video-preview" playsinline muted controls></video><p class="am-dica" id="ia-st" role="status" style="margin-top:10px"></p><button class="btn btn-magic" type="button" id="ia-run" hidden style="width:100%;margin-top:10px">${AMI("ai")} Analisar com IA</button><div id="ia-res" style="margin-top:12px"></div>`;
      const st=t=>b.querySelector("#ia-st").textContent=t;
      b.querySelector("#ia-file").onchange=async e=>{const f=e.target.files[0];if(!f)return;if(f.size>100*1024*1024){st("Vídeo muito grande (máx. 100 MB).");return}const pv=b.querySelector("#ia-prev");pv.src=URL.createObjectURL(f);pv.style.display="block";st("Extraindo quadros do vídeo...");frames=await extractFramesMultiStaff(f,5);st(frames.length?`${frames.length} quadros prontos para análise.`:"Não foi possível ler este vídeo.");b.querySelector("#ia-run").hidden=!frames.length};
      b.querySelector("#ia-run").onclick=async e=>{const btn=e.currentTarget;btn.disabled=true;st("Analisando... pode levar até 30 segundos.");const area=b.querySelector("#ia-res");res=await runRealAIAnalysisSecure(frames,area,{esporte:sp.nome||""});btn.disabled=false;if(!res){st("");return}st("Análise pronta.");
        area.innerHTML=htmlAnaliseIA(res)+`<button class="btn-y" type="button" id="ia-salvar" style="margin-top:12px">${AMI("save")} Salvar no meu histórico</button>`;
        area.querySelector("#ia-salvar").onclick=async ev=>{const _b=ev.currentTarget;_b.disabled=true;try{await FB.addDoc("ia_analises",{atletaId:uid,origem:"atleta",esporte:limitar(sp.nome||"",60),pontosFortes:(res.pontosFortes||[]).slice(0,10).map(x=>limitar(x,400)),pontosAMelhorar:(res.pontosAMelhorar||[]).slice(0,10).map(x=>limitar(x,400)),planosDeAcao:(res.planosDeAcao||[]).slice(0,10).map(x=>limitar(x,400)),resumo:limitar(res.resumo||"",2000),dataAnalise:new Date().toISOString(),analistId:uid});avisar("Análise salva. A equipe também pode ver.","ok");listarAnalises()}catch(x){_b.disabled=false;avisar("Não foi possível salvar.","erro")}}};
    }
  }else gateAtleta(c,"videoUpload");
  const hist=cardA("Análises de vídeo","folder","Histórico");const bh=corpoDe(hist);c.appendChild(hist);
  function listarAnalises(){bh.innerHTML=carregandoHTML();FB.todos("ia_analises","atletaId",uid).then(l=>{const o=ordDesc(l||[],a=>a.dataAnalise);bh.innerHTML=o.length?o.slice(0,8).map(a=>`<details class="am-det"><summary>${_fmtD(a.dataAnalise)} · ${a.origem==="atleta"?"enviado por você":"análise da equipe"}${a.esporte?" · "+esc(a.esporte):""}</summary>${htmlAnaliseIA(a)}</details>`).join(""):vazioHTML("Nenhuma análise ainda.")})}
  listarAnalises();
  if(pode("iaFeedback")){
    const fb=cardA("Feedback IA personalizado","ai","Semana","top");const bf=corpoDe(fb);c.appendChild(fb);
    bf.innerHTML=`<p class="am-dica" style="margin:0 0 10px">A IA lê seus últimos check-ins, treinos e competições e sugere ajustes simples para a semana. Não substitui a orientação da equipe.</p><button class="btn btn-magic" type="button" id="fb-gerar" style="width:100%">${AMI("ai")} Gerar meu feedback</button><div id="fb-lista" style="margin-top:12px"></div>`;
    const lista=bf.querySelector("#fb-lista");
    const listar=()=>FB.getDocs(`atletas/${uid}/feedback_ia`).then(l=>{const o=ordDesc(l||[],x=>x.geradoEm);lista.innerHTML=o.length?o.slice(0,5).map((x,i)=>`<details class="am-det"${i?"":" open"}><summary>${_fmtDH(x.geradoEm)}</summary><p class="am-pre" style="margin-top:8px">${esc(x.texto||"")}</p></details>`).join(""):""});
    bf.querySelector("#fb-gerar").onclick=async e=>{const btn=e.currentTarget;btn.disabled=true;btn.textContent="Gerando...";try{const r=await FB.call("feedbackIA",{});if(r&&r.texto){avisar("Feedback gerado.","ok");listar()}}catch(x){avisar(x.status===429||/limite/i.test(x.message)?"Você já gerou feedbacks demais hoje. Tente amanhã.":x.status===404||x.code==="REDE"?"Recurso ainda não configurado pela equipe.":"Não foi possível gerar agora.","erro")}btn.disabled=false;btn.innerHTML=`${AMI("ai")} Gerar meu feedback`};
    listar();
  }else gateAtleta(c,"iaFeedback");
}
function htmlAnaliseIA(r){
  const li=a=>(a||[]).map(p=>`<li>${esc(p)}</li>`).join("")||"<li>—</li>";
  return`<div style="display:flex;flex-direction:column;gap:10px;margin-top:10px"><div class="ai-result-card positive" style="padding:14px"><h4 class="tm-subtitle" style="font-size:.9rem;margin-bottom:8px">${AMI("check")} Pontos positivos</h4><ul class="tm-list">${li(r.pontosFortes)}</ul></div><div class="ai-result-card negative" style="padding:14px"><h4 class="tm-subtitle" style="font-size:.9rem;margin-bottom:8px">${AMI("alert")} Pontos a melhorar</h4><ul class="tm-list">${li(r.pontosAMelhorar)}</ul></div><div class="ai-result-card action" style="padding:14px"><h4 class="tm-subtitle" style="font-size:.9rem;margin-bottom:8px">${AMI("focus")} Plano de ação</h4><ul class="tm-list">${li(r.planosDeAcao)}</ul></div>${r.resumo?`<p style="font-size:13px;color:#B4BBE0;line-height:1.7;margin:0">${esc(r.resumo)}</p>`:""}</div>`;
}

/* ════ AGENDA (atleta e equipe) — eventos do calendário + sessões marcadas ════ */
function renderCal(container,uid,staffMode){
  if(!staffMode&&!pode("calendario")){gateAtleta(container,"calendario");return}
  let semana=0,diaSel=null,events={},sessoes={},editEvt=null,showForm=false;
  let form={titulo:"",tipo:"treino",horario:"",horarioFim:"",notas:""};
  const wrap=el("div");wrap.style.cssText="display:flex;flex-direction:column;gap:11px";container.appendChild(wrap);
  wrap.innerHTML=carregandoHTML();
  Promise.all([FB.getDocs(`atletas/${uid}/eventos`),FB.query("agenda","atletaId","==",uid,"dataHora","DESCENDING",300)]).then(([evts,ag])=>{
    (evts||[]).forEach(ev=>{if(!ev.data)return;(events[ev.data]=events[ev.data]||[]).push(ev)});
    (ag||[]).forEach(s=>{const k=diaISO(s.dataHora);if(k)(sessoes[k]=sessoes[k]||[]).push(s)});
    diaSel=new Date(hojeLocal()+"T12:00:00");draw();
  });
  const getWeek=()=>{const n=new Date(),s=new Date(n);s.setDate(n.getDate()-((n.getDay()+6)%7)+semana*7);return Array.from({length:7},(_,i)=>{const d=new Date(s);d.setDate(s.getDate()+i);return d})};
  const dayLbl=["D","S","T","Q","Q","S","S"];
  const podeMexer=ev=>staffMode||ev.criadoPor!=="staff";
  function draw(){
    const days=getWeek(),selKey=diaSel?diaISO(diaSel):null,hoje=hojeLocal();
    const evs=(events[selKey]||[]).slice().sort((a,b)=>String(a.horario||"").localeCompare(String(b.horario||""))),ss=(sessoes[selKey]||[]).slice().sort((a,b)=>String(a.dataHora).localeCompare(String(b.dataHora)));
    wrap.innerHTML=`<div class="am-card" style="padding:14px"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;gap:8px"><button id="cal-p" type="button" class="am-mini" aria-label="Semana anterior">← Ant.</button><span style="font-family:'Archivo',sans-serif;font-stretch:110%;font-style:italic;font-weight:800;font-size:13px;text-transform:uppercase;color:#EEF1F8;text-align:center">${days[0].toLocaleDateString("pt-BR",{day:"2-digit",month:"short"})} – ${days[6].toLocaleDateString("pt-BR",{day:"2-digit",month:"short"})}</span><button id="cal-n" type="button" class="am-mini" aria-label="Próxima semana">Próx. →</button></div><div style="display:grid;grid-template-columns:repeat(7,1fr);gap:5px">${days.map(d=>{const k=diaISO(d),lst=[...(events[k]||[]).map(e=>TIPO_COR[e.tipo]||"var(--y)"),...(sessoes[k]||[]).map(()=>TIPO_COR.sessao)],sel=selKey===k,td=k===hoje;return`<button type="button" class="cal-day${sel?" sel":""}${td?" today":""}" data-k="${k}" aria-pressed="${sel}" aria-label="${d.toLocaleDateString("pt-BR",{weekday:"long",day:"numeric",month:"long"})}${lst.length?`, ${lst.length} compromisso${lst.length>1?"s":""}`:""}"><p style="font-family:'JetBrains Mono',monospace;font-weight:700;font-size:9px;letter-spacing:.1em;color:${td?"var(--y)":"var(--muted)"};margin:0 0 2px">${dayLbl[d.getDay()]}</p><p style="font-family:'JetBrains Mono',monospace;font-weight:500;font-size:15px;color:${td?"var(--y)":"#EEF1F8"};line-height:1;margin:0 0 4px">${d.getDate()}</p><div style="display:flex;justify-content:center;gap:2px;flex-wrap:wrap;min-height:6px">${lst.slice(0,3).map(cor=>`<span class="evt-dot" style="background:${cor}"></span>`).join("")}</div></button>`}).join("")}</div></div>${diaSel?`<div class="am-card" style="padding:14px"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;gap:8px"><span style="font-family:'Archivo',sans-serif;font-stretch:110%;font-style:italic;font-weight:800;font-size:13px;text-transform:uppercase;color:#EEF1F8">${diaSel.toLocaleDateString("pt-BR",{weekday:"long",day:"2-digit",month:"long"})}</span><button id="add-evt" type="button" class="am-mini">+ Evento</button></div>${showForm?`<div style="background:rgba(0,209,255,.03);border:1px solid rgba(0,209,255,.15);border-radius:3px;padding:14px;margin-bottom:12px"><p class="slbl" style="color:var(--y);margin-bottom:12px">${editEvt?"Editar evento":"Novo evento"}</p><div style="display:flex;flex-direction:column;gap:9px"><input type="text" id="ef-t" maxlength="80" value="${esc(form.titulo)}" placeholder="Título do evento" style="font-size:13px" aria-label="Título"><div class="am-grid2"><select id="ef-tp" aria-label="Tipo" style="font-size:12px">${Object.entries(TIPO_NM).map(([k,v])=>`<option value="${k}"${form.tipo===k?" selected":""}>${v}</option>`).join("")}</select><div style="display:grid;grid-template-columns:1fr 1fr;gap:7px"><div><label class="slbl" for="ef-h" style="display:block;margin-bottom:3px;font-size:8px">Início</label><input type="time" id="ef-h" value="${esc(form.horario)}" style="font-size:12px;padding:8px 10px"></div><div><label class="slbl" for="ef-hf" style="display:block;margin-bottom:3px;font-size:8px">Fim</label><input type="time" id="ef-hf" value="${esc(form.horarioFim||"")}" style="font-size:12px;padding:8px 10px"></div></div></div><textarea id="ef-n" class="cs" maxlength="500" placeholder="Observações..." style="height:55px;font-size:12px;resize:none;display:block" aria-label="Observações">${esc(form.notas)}</textarea><div style="display:flex;gap:8px"><button class="btn-y" id="ef-save" type="button" style="font-size:12px;padding:9px 14px">${editEvt?"Atualizar":"Adicionar"}</button><button class="btn-sec" id="ef-cancel" type="button" style="font-size:12px;padding:9px 14px;width:auto">Cancelar</button></div></div></div>`:""}${!evs.length&&!ss.length&&!showForm?vazioHTML("Nenhum compromisso neste dia."):""}${ss.map(s=>{const u=urlSegura(s.link);return`<div class="am-evt" style="border-left-color:${TIPO_COR.sessao}"><div style="flex:1;min-width:0"><p class="am-evt-t">${esc(s.titulo||"Sessão")}${staffMode?` · ${esc(s.nome||"")}`:""}</p><div class="am-evt-m"><span class="am-chip" style="color:${TIPO_COR.sessao}">Sessão</span><span>${AMI("clock")} ${_dt(s.dataHora).toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"})}${s.dataHoraFim?" → "+_dt(s.dataHoraFim).toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"}):""}</span>${s.profissionalNome?`<span>${esc(s.profissionalNome)}</span>`:""}</div>${s.local?`<p class="am-dica" style="margin-top:4px">${AMI("pin")} ${esc(s.local)}</p>`:""}${u?`<a href="${esc(u)}" target="_blank" rel="noopener noreferrer" class="sess-link" style="margin-top:8px">Entrar na sala virtual →</a>`:""}</div></div>`}).join("")}${evs.map(ev=>`<div class="am-evt" style="border-left-color:${TIPO_COR[ev.tipo]||"var(--y)"}"><div style="flex:1;min-width:0"><p class="am-evt-t">${esc(ev.titulo)}</p><div class="am-evt-m"><span class="am-chip" style="color:${TIPO_COR[ev.tipo]||"var(--y)"}">${esc(TIPO_NM[ev.tipo]||ev.tipo)}</span>${ev.horario?`<span>${AMI("clock")} ${esc(ev.horario)}${ev.horarioFim?" → "+esc(ev.horarioFim):""}</span>`:""}${ev.criadoPor==="staff"&&!staffMode?`<span>pela equipe</span>`:""}</div>${ev.notas?`<p class="am-dica" style="margin-top:4px">${esc(ev.notas)}</p>`:""}</div>${podeMexer(ev)?`<div style="display:flex;gap:5px;flex-shrink:0"><button type="button" data-edit="${esc(ev._id)}" class="am-ico" aria-label="Editar evento">${AMI("edit")}</button><button type="button" data-del="${esc(ev._id)}" class="am-ico r" aria-label="Remover evento">${AMI("trash")}</button></div>`:""}</div>`).join("")}</div>`:""}`;
    const q=s=>wrap.querySelector(s);
    q("#cal-p").onclick=()=>{semana--;draw()};q("#cal-n").onclick=()=>{semana++;draw()};
    wrap.querySelectorAll(".cal-day").forEach(d=>d.onclick=()=>{diaSel=new Date(d.dataset.k+"T12:00:00");showForm=false;editEvt=null;draw()});
    q("#add-evt")?.addEventListener("click",()=>{editEvt=null;form={titulo:"",tipo:"treino",horario:"",horarioFim:"",notas:""};showForm=true;draw()});
    q("#ef-cancel")?.addEventListener("click",()=>{showForm=false;editEvt=null;draw()});
    q("#ef-save")?.addEventListener("click",async()=>{const t=limitar(q("#ef-t").value.trim(),80);if(!t){avisar("Dê um título ao evento.","erro");return}
      form={titulo:t,tipo:TIPO_NM[q("#ef-tp").value]?q("#ef-tp").value:"treino",horario:q("#ef-h").value,horarioFim:q("#ef-hf").value||"",notas:limitar(q("#ef-n").value,500)};
      const k=diaISO(diaSel),data={...form,data:k,criadoEm:new Date().toISOString(),criadoPor:staffMode?"staff":"atleta",criadoPorId:APP.user.uid};
      try{if(editEvt){const{criadoEm,criadoPor,criadoPorId,...upd}=data;await FB.updateDoc(`atletas/${uid}/eventos/${editEvt}`,{...upd,atualizadoEm:new Date().toISOString()});events[k]=(events[k]||[]).map(e=>e._id===editEvt?{...e,...upd}:e)}
        else{const r=await FB.addDoc(`atletas/${uid}/eventos`,data);(events[k]=events[k]||[]).push({...data,_id:r.id})}showForm=false;editEvt=null;draw()}
      catch(ex){avisar("Não foi possível salvar o evento.","erro")}});
    wrap.querySelectorAll("[data-edit]").forEach(b=>b.onclick=()=>{const ev=(events[diaISO(diaSel)]||[]).find(x=>x._id===b.dataset.edit);if(!ev)return;editEvt=ev._id;form={titulo:ev.titulo||"",tipo:ev.tipo||"treino",horario:ev.horario||"",horarioFim:ev.horarioFim||"",notas:ev.notas||""};showForm=true;draw()});
    wrap.querySelectorAll("[data-del]").forEach(b=>b.onclick=async()=>{const k=diaISO(diaSel);if(!await confirmar("Remover este evento?",{ok:"Remover",perigo:true}))return;try{await FB.deleteDoc(`atletas/${uid}/eventos/${b.dataset.del}`);events[k]=(events[k]||[]).filter(ev=>ev._id!==b.dataset.del);draw()}catch(ex){avisar("Não foi possível remover.","erro")}});
  }
}

/* ════ PAINEL DA EQUIPE — módulos ════ */
function seletorAtleta(c,atletas,aoEscolher,{rotulo="Atleta",extra=""}={}){
  const h=el("div","am-selbar");
  h.innerHTML=`<label class="slbl" for="atl-sel">${rotulo}</label>${atlSelect(atletas,"")}${extra}`;
  c.appendChild(h);const s=h.querySelector("#atl-sel");
  s.onchange=()=>{APP.atletaSel=s.value;aoEscolher(s.value)};
  if(!atletas.length){h.insertAdjacentHTML("beforeend",`<span class="am-dica">Nenhum atleta cadastrado ainda.</span>`)}
  if(APP.atletaSel&&atletas.some(a=>a._id===APP.atletaSel)){s.value=APP.atletaSel;setTimeout(()=>{if(s.isConnected)aoEscolher(APP.atletaSel)},0)}
  return s;
}
const nomeAtleta=(atletas,id)=>(atletas.find(a=>a._id===id)||{}).nome||"";
const cardS=(titulo,icone,inner="",cls="")=>`<div class="glass am-cs ${cls}"><h3 class="am-cs-t">${AMI(icone)} ${titulo}</h3>${inner}</div>`;
const ckMetricas=r=>`<div class="am-mets">${CK_CAMPOS.map(([k,l,cor,ic,,,inv])=>{const v=r[k];const ruim=v!=null&&(inv?(k==="dor"?v>=7:v>=8):(k==="humor"?v<=3:v<=4));return`<div title="${l}"><span>${AMI(ic)}</span><b style="color:${v==null?"var(--muted)":ruim?"#EC7896":cor}">${v??"—"}</b><i>${l.split(" ")[0]}</i></div>`}).join("")}</div>`;

/* ── Radar dos Atletas ── */
async function modDashboard(c,atletas){
  phdr(c,"Monitoramento diário","Radar dos Atletas",`<p class="am-dica" style="margin-top:6px">${esc(CRITERIO_RISCO)}</p>`);
  const box=el("div");box.innerHTML=carregandoHTML();c.appendChild(box);
  const desde=new Date(Date.now()-14*864e5).toISOString();
  const cks=await FB.query("checkins","data",">=",desde,"data","DESCENDING",1000);
  const porAt={};cks.forEach(r=>{(porAt[r.pacienteId]=porAt[r.pacienteId]||[]).push(r)});
  const hoje=hojeLocal();
  const linhas=atletas.map(a=>{const l=porAt[a._id]||[],u=l[0]||null;return{a,u,l,nivel:u?nivelCk(u):"sem",dias:u?Math.floor((Date.now()-_dt(u.data))/864e5):null}});
  const ordem={alto:0,atencao:1,ok:2,sem:3};linhas.sort((x,y)=>ordem[x.nivel]-ordem[y.nivel]||String(y.u?.data||"").localeCompare(String(x.u?.data||"")));
  box.innerHTML="";
  const kp=el("div");kp.style.cssText="display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:12px;margin-bottom:26px";
  Counter(kp,linhas.filter(x=>x.u&&diaISO(x.u.data)===hoje).length,"","Check-in hoje",0);
  Counter(kp,linhas.filter(x=>x.nivel==="alto").length,"","Atenção imediata",100,"#EC7896");
  Counter(kp,linhas.filter(x=>x.u&&x.u.foco>=8&&x.u.energia>=8).length,"","Em flow",200,"#4ade80");
  Counter(kp,linhas.filter(x=>x.dias===null||x.dias>=3).length,"","Sem check-in 3+ dias",300,"#f59e0b");
  box.appendChild(kp);
  if(!atletas.length){box.insertAdjacentHTML("beforeend",vazioHTML("Nenhum atleta cadastrado. Convide em Atletas & Convites."));return}
  const grid=el("div");grid.style.cssText="display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:14px";
  linhas.forEach(({a,u,nivel,dias})=>{
    const cor=nivel==="sem"?"#6A73A6":NIVEL_COR[nivel],al=u?alertasCk(u):[];
    const card=el("div","card mag a-up card-shimmer stagger-child");card.style.padding="18px";
    card.innerHTML=`<div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px;gap:8px"><div style="flex:1;min-width:0"><p class="am-nome">${esc(a.nome||"—")}</p><p style="font-size:11px;color:var(--muted);margin:0;display:flex;align-items:center;gap:8px;flex-wrap:wrap">${u?`${fmtDate(u.data)}${dias>=1?` · há ${plural(dias,"dia","dias")}`:""}`:"Sem check-in em 14 dias"}${a.esporte?sportChip(a.esporte,"sm"):""}</p></div><div class="dot-pulse" title="${nivel==="sem"?"Sem dados":NIVEL_TXT[nivel]}" style="width:10px;height:10px;border-radius:50%;background:${cor};box-shadow:0 0 12px ${cor};margin-top:4px;flex-shrink:0"></div></div>${al.length?`<p class="am-alertas">${AMI("alert")} ${esc(al.join(" · "))}</p>`:""}${u&&u.pontoForte?`<div class="am-trunfo"><span>Trunfo do dia</span><p>“${esc(u.pontoForte)}”</p></div>`:""}${u?ckMetricas(u):""}${u&&u.dorLocal?`<p class="am-dica" style="margin-top:6px">Dor: ${esc(u.dorLocal)}</p>`:""}`;
    applyMag(card);grid.appendChild(card);
  });
  box.appendChild(grid);
}

/* ── Check-ins (lista completa com filtros) ── */
async function modCheckins(c,atletas){
  phdr(c,"Diário dos atletas","Check-ins");
  let aid="",dias=30,soAlerta=false,lista=[];
  const f=el("div","am-filtros");f.innerHTML=`<div><label class="slbl" for="ck-atl">Atleta</label><select id="ck-atl"><option value="">Todos os atletas</option>${atletas.map(a=>`<option value="${esc(a._id)}">${esc(a.nome)}</option>`).join("")}</select></div><div><label class="slbl" for="ck-per">Período</label><select id="ck-per"><option value="7">7 dias</option><option value="30" selected>30 dias</option><option value="90">90 dias</option></select></div><label class="am-check" style="align-self:end"><input type="checkbox" id="ck-al"><span>Só com sinais de alerta</span></label>${canStaffAccess(APP.plan,"staffExportData")||ehAdmin()?`<button class="btn-sec" type="button" id="ck-csv" style="width:auto;align-self:end">${AMI("download")} CSV</button>`:""}`;
  c.appendChild(f);const box=el("div");c.appendChild(box);
  async function load(){box.innerHTML=carregandoHTML();const desde=new Date(Date.now()-dias*864e5).toISOString();
    lista=aid?await FB.query("checkins","pacienteId","==",aid,"data","DESCENDING",1000):await FB.query("checkins","data",">=",desde,"data","DESCENDING",2000);
    lista=lista.filter(r=>String(r.data)>=desde);draw()}
  function draw(){const l=soAlerta?lista.filter(r=>alertasCk(r).length):lista;
    box.innerHTML=l.length?`<p class="am-dica" style="margin-bottom:8px">${plural(l.length,"registro","registros")}</p><div class="am-tab-wrap"><table class="am-tab"><thead><tr><th>Data</th><th>Atleta</th>${CK_CAMPOS.map(([,lb])=>`<th class="c">${lb.split(" ")[0]}</th>`).join("")}<th class="c">Prontidão</th><th>Sinais</th><th>Trunfo do dia</th></tr></thead><tbody>${l.map(r=>{const al=alertasCk(r);return`<tr><td class="nw">${_fmtDH(r.data)}</td><td>${esc(r.nome||nomeAtleta(atletas,r.pacienteId))}</td>${CK_CAMPOS.map(([k])=>`<td class="c">${r[k]??"—"}</td>`).join("")}<td class="c"><b>${fmt1(prontidao(r))}</b></td><td>${al.length?`<span class="am-tag r">${esc(al.join(", "))}</span>`:""}${r.dorLocal?`<div class="am-dica">dor: ${esc(r.dorLocal)}</div>`:""}</td><td>${r.pontoForte?`<span class="am-dica">“${esc(r.pontoForte)}”</span>`:""}</td></tr>`}).join("")}</tbody></table></div>`:vazioHTML("Nenhum check-in no filtro escolhido.")}
  f.querySelector("#ck-atl").onchange=e=>{aid=e.target.value;load()};f.querySelector("#ck-per").onchange=e=>{dias=+e.target.value;load()};f.querySelector("#ck-al").onchange=e=>{soAlerta=e.target.checked;draw()};
  const bc=f.querySelector("#ck-csv");if(bc)bc.onclick=()=>{const l=soAlerta?lista.filter(r=>alertasCk(r).length):lista;if(!l.length)return avisar("Nada para exportar.","info");baixarArquivo(csv(l,[[r=>_fmtDH(r.data),"Data"],[r=>r.nome||nomeAtleta(atletas,r.pacienteId),"Atleta"],...CK_CAMPOS.map(([k,lb])=>[k,lb]),[r=>fmt1(prontidao(r)),"Prontidão"],[r=>alertasCk(r).join(", "),"Sinais"],["dorLocal","Local da dor"],["pontoForte","Trunfo do dia"]]),`checkins-${today()}.csv`,"text/csv;charset=utf-8");auditar("exportacao_csv",{id:aid,nome:nomeAtleta(atletas,aid)},"checkins "+l.length)};
  load();
}

/* ── Prontuário por área — cada profissão vê e escreve só o que é dela ── */
async function modProntuario(c,atletas){
  phdr(c,"Registros clínicos por área","Prontuário",`<p class="am-dica" style="margin-top:6px">Você vê as áreas: ${areasDe().map(a=>AREAS[a].nome).join(", ")}. Cada registro guarda autor, profissão e data. Correções ficam registradas: depois de 24 horas o texto não muda, só recebe adendo.</p>`);
  const box=el("div");
  seletorAtleta(c,atletas,abrir);c.appendChild(box);
  async function abrir(aid){
    if(!aid){box.innerHTML="";return}box.innerHTML=carregandoHTML();
    const nome=nomeAtleta(atletas,aid);auditar("prontuario_aberto",{id:aid,nome});
    const psico=areasDe().includes("psico");
    const[pront,priv]=await Promise.all([FB.getDoc(`prontuarios/${aid}`).catch(()=>null),psico?FB.getDoc(`prontuarios/${aid}/privado/psico`).catch(()=>null):null]);
    let diag=(priv&&priv.diagnostico)||null;
    /* migração automática: diagnóstico antigo no documento geral vai para a área de psicologia */
    if(psico&&pront&&(pront.diagnostico||pront.anamnese?.psicologico)){
      try{const novo={diagnostico:diag||pront.diagnostico||{},historicoPsico:(priv&&priv.historicoPsico)||pront.anamnese?.psicologico||"",atualizadoEm:new Date().toISOString(),atualizadoPor:APP.user.nome,migradoEm:new Date().toISOString()};
        await FB.setDoc(`prontuarios/${aid}/privado/psico`,novo);await removerCampos(`prontuarios/${aid}`,["diagnostico","anamnese.psicologico"]);diag=novo.diagnostico;auditar("migracao_psico",{id:aid,nome})}catch(e){registrarErro("migracao_psico",e)}}
    const historicoPsico=(priv&&priv.historicoPsico)||pront?.anamnese?.psicologico||"";
    const areas=areasDe(),pref=AREA_PROPRIA[APP.cargo]||"geral";let area=areas.includes(pref)?pref:areas[0];
    box.innerHTML=`<div class="dk-crit"><div style="display:flex;flex-direction:column;gap:16px">${psico?`<div class="glass am-cs" id="pr-diag"></div>`:""}<div class="glass am-cs" id="pr-resumo">${carregandoHTML()}</div></div><div class="glass am-cs" style="min-width:0"><div class="am-areas" role="tablist">${areas.map(a=>`<button type="button" role="tab" class="am-area${a===area?" on":""}" data-area="${a}" style="--ac:${AREAS[a].cor}">${AREAS[a].nome}</button>`).join("")}${psico?`<button type="button" role="tab" class="am-area${area==="legado"?" on":""}" data-area="legado" style="--ac:#9AA3CF">Anteriores</button>`:""}</div><div id="pr-notas"></div></div></div>`;
    if(psico)desenharDiag();
    box.querySelectorAll("[data-area]").forEach(b=>b.onclick=()=>{area=b.dataset.area;box.querySelectorAll("[data-area]").forEach(x=>x.classList.toggle("on",x===b));notas()});
    notas();resumo();
    function desenharDiag(editando=false){
      const d=diag||{},bx=box.querySelector("#pr-diag"),C=[["diagnostico","Diagnóstico / hipótese"],["objetivo","Objetivo terapêutico"],["plano","Plano de intervenção"],["frequencia","Frequência de atendimento"]];
      const pode=podeEditar.diagnostico();
      bx.innerHTML=`<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;gap:8px"><h3 class="am-cs-t" style="margin:0">${AMI("lock")} Psicologia · plano</h3>${pode?`<button type="button" class="am-mini" id="dg-tog">${editando?"SALVAR":"EDITAR"}</button>`:""}</div>${C.map(([k,l])=>`<div style="margin-bottom:12px"><label class="slbl" for="dg-${k}" style="display:block;margin-bottom:6px">${l}</label>${editando?(k==="frequencia"?`<input type="text" id="dg-${k}" maxlength="80" value="${esc(d[k]||"")}" placeholder="Ex: Semanal" style="font-size:13px">`:`<textarea id="dg-${k}" maxlength="3000" style="height:70px;font-size:13px;resize:vertical">${esc(d[k]||"")}</textarea>`):`<div class="am-leitura">${esc(d[k]||"—")}</div>`}</div>`).join("")}<div><label class="slbl" style="display:block;margin-bottom:6px">Histórico psicológico / emocional</label>${editando?`<textarea id="dg-hist" maxlength="5000" style="height:80px;font-size:13px;resize:vertical">${esc(historicoPsico)}</textarea>`:`<div class="am-leitura">${esc(historicoPsico||"—")}</div>`}</div><p class="am-dica" style="margin-top:10px">Visível só para psicólogos e assistentes terapêuticos.</p>`;
      const t=bx.querySelector("#dg-tog");if(t)t.onclick=async()=>{if(!editando){desenharDiag(true);return}
        const nd={};C.forEach(([k])=>nd[k]=limitar(bx.querySelector("#dg-"+k).value.trim(),k==="frequencia"?80:3000));const hist=limitar(bx.querySelector("#dg-hist").value.trim(),5000);
        t.disabled=true;try{await FB.setDoc(`prontuarios/${aid}/privado/psico`,{diagnostico:nd,historicoPsico:hist,atualizadoEm:new Date().toISOString(),atualizadoPor:APP.user.nome});diag=nd;auditar("diagnostico_atualizado",{id:aid,nome});avisar("Plano salvo.","ok");desenharDiag(false)}catch(e){t.disabled=false;avisar("Não foi possível salvar. O texto continua na tela.","erro")}};
    }
    async function resumo(){
      const[les]=await Promise.all([FB.getDocs(`atletas/${aid}/lesoes`)]);const an=pront?.anamnese||{},at=(les||[]).filter(lesaoAtiva);
      const AN=[["Doenças",an.doencas],["Medicações",an.medicacoes],["Alergias",an.alergias],["Cirurgias",an.cirurgias]].filter(([,v])=>v);
      const bx=box.querySelector("#pr-resumo");if(!bx)return;
      bx.innerHTML=`<h3 class="am-cs-t">${AMI("cross")} Resumo de saúde</h3>${at.length?at.map(l=>`<div class="historico-badge" style="border-left:3px solid ${LESAO_STATUS_COR[l.status]||"#f59e0b"};margin-bottom:8px;padding:10px 12px"><span class="historico-data">${esc(l.local||"")} · ${esc(LESAO_STATUS[l.status]||"")}</span><span style="font-size:12px;color:#B4BBE0">${esc(l.tipo||"")}${l.retornoPrevisto?` · retorno ${_fmtD(l.retornoPrevisto)}`:""}</span></div>`).join(""):`<p class="am-dica">Nenhuma lesão ativa.</p>`}${AN.length?`<div style="margin-top:10px">${AN.map(([l,v])=>`<div class="dk-row"><span class="slbl" style="min-width:90px">${l}</span><span style="font-size:12.5px;color:#B4BBE0;white-space:pre-wrap">${esc(v)}</span></div>`).join("")}</div>`:`<p class="am-dica" style="margin-top:8px">Anamnese em Perfil Esportivo.</p>`}`;
    }
    async function notas(){
      const nb=box.querySelector("#pr-notas");nb.innerHTML=carregandoHTML();
      if(area==="legado"){const l=ordDesc(await FB.getDocs(`prontuarios/${aid}/soap`),s=>s.data);nb.innerHTML=`<p class="am-dica" style="margin-bottom:12px">Registros feitos antes da separação por área. Não têm autor identificado e não podem mais ser alterados.</p>${l.length?l.map(n=>`<div class="am-nota"><div class="am-nota-h"><span class="am-chip">${_fmtDH(n.data)}</span><span class="am-dica">Registro anterior</span></div><p class="am-nota-t">${esc(n.texto)}</p></div>`).join(""):vazioHTML("Nenhum registro anterior.")}`;return}
      const lista=ordDesc(await FB.getDocs(`prontuarios/${aid}/${colNotas(area)}`),n=>n.criadoEm||n.data);
      const ad={};lista.forEach(n=>{if(n.adendoDe)(ad[n.adendoDe]=ad[n.adendoDe]||[]).push(n)});
      const principais=lista.filter(n=>!n.adendoDe);
      nb.innerHTML=`<form class="am-soap" id="nt-f"><p class="slbl" style="color:${AREAS[area].cor};margin-bottom:10px">Novo registro · ${AREAS[area].nome}</p><div class="am-soap-g">${[["s","S · Subjetivo","O que o atleta relata"],["o","O · Objetivo","O que foi observado / medido"],["a","A · Avaliação","Sua análise"],["p","P · Plano","Próximos passos"]].map(([k,l,ph])=>`<div><label class="slbl" for="nt-${k}">${l}</label><textarea id="nt-${k}" maxlength="5000" placeholder="${ph}"></textarea></div>`).join("")}</div><div style="display:flex;justify-content:flex-end;gap:8px;margin-top:10px"><button type="submit" class="btn-y" style="width:auto;padding:9px 16px;font-size:12px">Salvar registro</button></div></form><div id="nt-lista" style="display:flex;flex-direction:column;gap:11px;margin-top:16px">${principais.length?principais.map(n=>htmlNota(n,ad[n._id]||[])).join(""):vazioHTML("Nenhum registro nesta área.")}</div>`;
      nb.querySelector("#nt-f").onsubmit=async e=>{e.preventDefault();const v={};["s","o","a","p"].forEach(k=>v[k]=limitar(nb.querySelector("#nt-"+k).value.trim(),5000));
        if(!Object.values(v).some(Boolean))return avisar("Escreva pelo menos um campo.","erro");
        const btn=nb.querySelector("#nt-f [type=submit]");btn.disabled=true;
        const texto=[["S",v.s],["O",v.o],["A",v.a],["P",v.p]].filter(([,x])=>x).map(([k,x])=>`${k}: ${x}`).join("\n");
        try{await FB.criarComHora(`prontuarios/${aid}/${colNotas(area)}`,{area,texto,soap:v,autorId:APP.user.uid,autorNome:APP.user.nome,autorCargo:APP.cargo,criadoEm:new Date().toISOString()});auditar("registro_criado",{id:aid,nome},AREAS[area].nome);avisar("Registro salvo.","ok");notas()}
        catch(x){btn.disabled=false;avisar("Não foi possível salvar. Seu texto continua no formulário.","erro")}};
      nb.querySelectorAll("[data-nt-ed]").forEach(b=>b.onclick=()=>editarNota(lista.find(n=>n._id===b.dataset.ntEd)));
      nb.querySelectorAll("[data-nt-an]").forEach(b=>b.onclick=()=>anularNota(lista.find(n=>n._id===b.dataset.ntAn)));
      nb.querySelectorAll("[data-nt-ad]").forEach(b=>b.onclick=()=>adendo(lista.find(n=>n._id===b.dataset.ntAd)));
    }
    function htmlNota(n,ads){
      const pode=podeEditarNota(n),meu=n.autorId===APP.user.uid;
      return`<div class="am-nota${n.anulada?" anulada":""}"><div class="am-nota-h"><span class="am-chip">${_fmtDH(n.criadoEm||n.data)}</span><span class="am-autor">${esc(autorTxt(n))}</span>${n.editadoEm?`<span class="am-dica">editado ${_fmtDH(n.editadoEm)}</span>`:""}${n.anulada?`<span class="am-tag r">anulado</span>`:""}<span style="margin-left:auto;display:flex;gap:5px">${pode?`<button type="button" class="am-ico" data-nt-ed="${esc(n._id)}" aria-label="Editar">${AMI("edit")}</button>`:""}${meu&&!n.anulada?`<button type="button" class="am-ico r" data-nt-an="${esc(n._id)}" aria-label="Anular registro">${AMI("x")}</button>`:""}${!n.anulada?`<button type="button" class="am-mini" data-nt-ad="${esc(n._id)}">+ Adendo</button>`:""}</span></div><p class="am-nota-t">${esc(n.texto)}</p>${n.anulada?`<p class="am-dica">Motivo da anulação: ${esc(n.motivoAnulacao||"—")}</p>`:""}${ads.map(a=>`<div class="am-adendo"><span class="am-dica">Adendo · ${_fmtDH(a.criadoEm)} · ${esc(autorTxt(a))}</span><p class="am-nota-t">${esc(a.texto)}</p></div>`).join("")}</div>`;
    }
    function editarNota(n){if(!n)return;const m=abrirModal(`<h3 class="ptitle" style="font-size:20px;margin:0 0 6px">Editar registro</h3><p class="am-dica" style="margin:0 0 12px">Edição permitida ao autor nas primeiras 24 horas. A data da edição fica registrada.</p><textarea id="ed-t" maxlength="20000" style="height:200px;font-size:13px;resize:vertical">${esc(n.texto)}</textarea><div style="display:flex;justify-content:flex-end;gap:10px;margin-top:14px"><button class="btn-sec" type="button" data-fechar style="width:auto">Cancelar</button><button class="btn-y" type="button" id="ed-ok" style="width:auto;padding:10px 18px">Salvar</button></div>`,{largura:620});
      m.el.querySelector("#ed-ok").onclick=async()=>{const t=limitar(m.el.querySelector("#ed-t").value.trim(),20000);if(!t)return;try{await FB.updateDoc(`prontuarios/${aid}/${colNotas(area)}/${n._id}`,{texto:t,editadoEm:new Date().toISOString()});auditar("registro_editado",{id:aid,nome},AREAS[area].nome);m.fechar();notas()}catch(e){avisar(e.status===403?"O prazo de 24 horas para editar terminou. Use um adendo.":"Não foi possível salvar.","erro")}}}
    function anularNota(n){if(!n)return;const m=abrirModal(`<h3 class="ptitle" style="font-size:20px;margin:0 0 6px">Anular registro</h3><p class="am-dica" style="margin:0 0 12px">O registro não é apagado: fica marcado como anulado, com o motivo, para manter o histórico clínico.</p><textarea id="an-m" maxlength="500" placeholder="Motivo (obrigatório)" style="height:80px;font-size:13px"></textarea><div style="display:flex;justify-content:flex-end;gap:10px;margin-top:14px"><button class="btn-sec" type="button" data-fechar style="width:auto">Cancelar</button><button class="btn-danger" type="button" id="an-ok">Anular</button></div>`,{largura:480});
      m.el.querySelector("#an-ok").onclick=async()=>{const mo=limitar(m.el.querySelector("#an-m").value.trim(),500);if(mo.length<5)return avisar("Explique o motivo.","erro");try{await FB.updateDoc(`prontuarios/${aid}/${colNotas(area)}/${n._id}`,{anulada:true,motivoAnulacao:mo,anuladaEm:new Date().toISOString()});auditar("registro_anulado",{id:aid,nome},AREAS[area].nome);m.fechar();notas()}catch(e){avisar("Não foi possível anular.","erro")}}}
    function adendo(n){if(!n)return;const m=abrirModal(`<h3 class="ptitle" style="font-size:20px;margin:0 0 6px">Adendo</h3><p class="am-dica" style="margin:0 0 12px">Complemento ao registro de ${_fmtDH(n.criadoEm||n.data)}.</p><textarea id="ad-t" maxlength="5000" style="height:140px;font-size:13px;resize:vertical"></textarea><div style="display:flex;justify-content:flex-end;gap:10px;margin-top:14px"><button class="btn-sec" type="button" data-fechar style="width:auto">Cancelar</button><button class="btn-y" type="button" id="ad-ok" style="width:auto;padding:10px 18px">Salvar adendo</button></div>`,{largura:560});
      m.el.querySelector("#ad-ok").onclick=async()=>{const t=limitar(m.el.querySelector("#ad-t").value.trim(),5000);if(!t)return;try{await FB.criarComHora(`prontuarios/${aid}/${colNotas(area)}`,{area,texto:t,adendoDe:n._id,autorId:APP.user.uid,autorNome:APP.user.nome,autorCargo:APP.cargo,criadoEm:new Date().toISOString()});auditar("registro_adendo",{id:aid,nome},AREAS[area].nome);m.fechar();notas()}catch(e){avisar("Não foi possível salvar o adendo.","erro")}}}
  }
}
/* remove campos de um documento (incluindo campos de mapas, ex.: "anamnese.psicologico") */
async function removerCampos(path,campos){const mask=campos.map(k=>"updateMask.fieldPaths="+encodeURIComponent(k)).join("&");return FB.req(`${FB.FS}/${encPath(path)}?${mask}&currentDocument.exists=true`,"PATCH",{fields:{}})}

/* ── Registros clínicos recentes (todas as áreas do profissional) ── */
async function modRegistros(c,atletas){
  phdr(c,"Linha do tempo da sua área","Registros Clínicos");
  const box=el("div");box.innerHTML=carregandoHTML();c.appendChild(box);
  const areas=areasDe(),nomes=Object.fromEntries(atletas.map(a=>[a._id,a.nome]));
  try{
    const res=await Promise.all(areas.map(a=>FB.grupo(colNotas(a),"criadoEm","DESCENDING",80).then(l=>l.map(n=>({...n,area:a})))));
    const l=res.flat().sort((a,b)=>String(b.criadoEm||"").localeCompare(String(a.criadoEm||""))).slice(0,150);
    box.innerHTML=l.length?`<div style="display:flex;flex-direction:column;gap:11px">${l.map(n=>{const aid=(n._path||"").split("/")[1]||"";return`<div class="am-nota${n.anulada?" anulada":""}"><div class="am-nota-h"><span class="am-chip" style="color:${AREAS[n.area].cor}">${AREAS[n.area].nome}</span><b style="color:#EEF1F8;font-size:13px">${esc(nomes[aid]||"Atleta")}</b><span class="am-chip">${_fmtDH(n.criadoEm)}</span><span class="am-autor">${esc(autorTxt(n))}</span>${n.adendoDe?`<span class="am-dica">adendo</span>`:""}</div><p class="am-nota-t">${esc(n.texto)}</p></div>`}).join("")}</div>`:vazioHTML("Nenhum registro nas suas áreas ainda.");
  }catch(e){box.innerHTML=`<div class="am-note">${/index/i.test(e.message)?"Para esta tela funcionar, a administração precisa publicar os índices do banco (arquivo firestore.indexes.json do guia de instalação).":"Não foi possível carregar os registros."}</div>`}
}

/* ── Lesões e avaliações físicas ── */
async function modLesoes(c,atletas){
  phdr(c,"Saúde física","Lesões & Avaliações");
  const box=el("div");seletorAtleta(c,atletas,abrir);c.appendChild(box);
  async function abrir(aid){
    if(!aid){box.innerHTML="";return}box.innerHTML=carregandoHTML();
    const nome=nomeAtleta(atletas,aid),podeL=podeEditar.lesoes(),podeA=podeEditar.treinos();
    let les=[],avs=[];
    async function load(){const[l,a]=await Promise.all([FB.getDocs(`atletas/${aid}/lesoes`),FB.getDocs(`atletas/${aid}/avaliacoes`)]);les=ordDesc(l,x=>x.data);avs=ordDesc(a,x=>x.data);draw()}
    function draw(){
      const ativas=les.filter(lesaoAtiva).length;
      box.innerHTML=`<div class="dk-2" style="align-items:start"><div class="glass am-cs"><div class="am-cs-hd"><h3 class="am-cs-t" style="margin:0">${AMI("cross")} Lesões</h3>${ativas?`<span class="am-tag r">${plural(ativas,"ativa","ativas")}</span>`:`<span class="am-tag g">nenhuma ativa</span>`}${podeL?`<button type="button" class="am-mini" id="ls-nova">+ Registrar</button>`:""}</div>${les.length?les.map(l=>`<div class="am-nota${l.anulada?" anulada":""}" style="border-left:3px solid ${LESAO_STATUS_COR[l.status]||"#9AA3CF"}"><div class="am-nota-h"><b style="color:#EEF1F8">${esc(l.local||"—")}${l.lado&&l.lado!=="—"?" · "+esc(l.lado):""}</b><span class="am-chip" style="color:${LESAO_STATUS_COR[l.status]||"#9AA3CF"}">${esc(LESAO_STATUS[l.status]||l.status||"")}</span>${l.anulada?`<span class="am-tag r">anulado</span>`:""}${podeL&&!l.anulada?`<span style="margin-left:auto;display:flex;gap:5px"><button type="button" class="am-ico" data-ls-ed="${esc(l._id)}" aria-label="Editar">${AMI("edit")}</button></span>`:""}</div><p class="am-dica" style="margin:4px 0">${_fmtD(l.data)} · ${esc(l.tipo||"")} · ${esc(LESAO_GRAV[l.gravidade]||"")}${l.mecanismo?" · "+esc(l.mecanismo):""}</p>${l.descricao?`<p class="am-nota-t">${esc(l.descricao)}</p>`:""}${l.orientacoes?`<p class="am-dica">Orientações ao atleta: ${esc(l.orientacoes)}</p>`:""}<p class="am-dica">${l.retornoPrevisto?`Retorno previsto ${_fmtD(l.retornoPrevisto)}`:""}${l.retornoEm?` · Liberado em ${_fmtD(l.retornoEm)}`:""}${l.diasAfastado!=null?` · ${l.diasAfastado} dias fora`:""}</p><p class="am-dica">${esc(autorTxt(l))}</p></div>`).join(""):vazioHTML("Nenhuma lesão registrada.")}</div><div class="glass am-cs"><div class="am-cs-hd"><h3 class="am-cs-t" style="margin:0">${AMI("trend")} Avaliações físicas</h3>${podeA?`<button type="button" class="am-mini" id="av-nova">+ Nova medida</button>`:""}</div>${tabelaAvals(avs)}</div></div>`;
      box.querySelector("#ls-nova")?.addEventListener("click",()=>formLesao(null));
      box.querySelectorAll("[data-ls-ed]").forEach(b=>b.onclick=()=>formLesao(les.find(x=>x._id===b.dataset.lsEd)));
      box.querySelector("#av-nova")?.addEventListener("click",formAval);
      box.querySelectorAll("[data-av-an]").forEach(b=>b.onclick=async()=>{if(!await confirmar("Anular esta medida? Ela continua no histórico como anulada.",{ok:"Anular",perigo:true}))return;try{await FB.updateDoc(`atletas/${aid}/avaliacoes/${b.dataset.avAn}`,{anulada:true,anuladaEm:new Date().toISOString(),anuladaPor:APP.user.nome});auditar("avaliacao_anulada",{id:aid,nome});load()}catch(e){avisar("Não foi possível anular.","erro")}});
    }
    function tabelaAvals(avs){
      const vivas=avs.filter(a=>!a.anulada);if(!vivas.length)return vazioHTML("Nenhuma medida registrada.");
      const g={};vivas.forEach(a=>{const k=a.teste==="outro"?"outro:"+(a.nomeTeste||""):a.teste;(g[k]=g[k]||[]).push(a)});
      return`<div class="am-tab-wrap"><table class="am-tab"><thead><tr><th>Teste</th><th>Último</th><th>Variação</th><th>Histórico</th></tr></thead><tbody>${Object.values(g).map(l=>{const[a,b]=l,t=avalTeste(a.teste),u=t[2]||a.unidade||"",dif=b&&_n(a.valor)!=null&&_n(b.valor)!=null?a.valor-b.valor:null,melhor=dif==null||t[4]==null?null:t[4]?dif<0:dif>0;return`<tr><td>${esc(nomeAval(a))}<div class="am-dica">${esc(t[3])}</div></td><td><b>${esc(String(a.valor))}</b> ${esc(u)}<div class="am-dica">${_fmtD(a.data)}</div></td><td>${dif==null?"—":`<span style="color:${melhor==null?"#B4BBE0":melhor?"#4ade80":"#EC7896"}">${dif>0?"+":""}${fmt1(dif)}</span>`}</td><td>${l.slice(0,5).map(x=>`<span class="am-dica" title="${esc(x.notas||"")}">${_fmtD(x.data)}: ${esc(String(x.valor))}${podeA?` <button type="button" class="am-ico-sm" data-av-an="${esc(x._id)}" aria-label="Anular medida">×</button>`:""}</span>`).join("<br>")}</td></tr>`}).join("")}</tbody></table></div>`;
    }
    function formLesao(l){
      const n=!l;l=l||{data:hojeLocal(),status:"afastado",gravidade:"leve",lado:"—"};
      const m=abrirModal(`<h3 class="ptitle" style="font-size:20px;margin:0 0 12px">${n?"Registrar lesão":"Atualizar lesão"}</h3><form id="lf" style="display:flex;flex-direction:column;gap:11px"><div class="am-grid2"><div><label class="slbl" for="lf-data">Data da lesão</label><input type="date" id="lf-data" value="${esc(l.data||"")}" max="${hojeLocal()}" required></div><div><label class="slbl" for="lf-status">Situação</label><select id="lf-status">${Object.entries(LESAO_STATUS).map(([k,v])=>`<option value="${k}"${l.status===k?" selected":""}>${v}</option>`).join("")}</select></div></div><div class="am-grid2"><div><label class="slbl" for="lf-local">Local</label><select id="lf-local" required><option value="">Selecione...</option>${CORPO.map(p=>`<option${l.local===p?" selected":""}>${p}</option>`).join("")}</select></div><div><label class="slbl" for="lf-lado">Lado</label><select id="lf-lado">${LADOS.map(p=>`<option${l.lado===p?" selected":""}>${p}</option>`).join("")}</select></div></div><div class="am-grid2"><div><label class="slbl" for="lf-tipo">Tipo</label><select id="lf-tipo">${LESAO_TIPOS.map(p=>`<option${l.tipo===p?" selected":""}>${p}</option>`).join("")}</select></div><div><label class="slbl" for="lf-mec">Mecanismo</label><select id="lf-mec"><option value="">—</option>${LESAO_MEC.map(p=>`<option${l.mecanismo===p?" selected":""}>${p}</option>`).join("")}</select></div></div><div><label class="slbl" for="lf-grav">Gravidade (tempo fora)</label><select id="lf-grav">${Object.entries(LESAO_GRAV).map(([k,v])=>`<option value="${k}"${l.gravidade===k?" selected":""}>${v}</option>`).join("")}</select></div><div><label class="slbl" for="lf-desc">Descrição / diagnóstico</label><textarea id="lf-desc" maxlength="3000" style="height:80px;font-size:13px">${esc(l.descricao||"")}</textarea></div><div><label class="slbl" for="lf-or">Orientações para o atleta (ele vê no app)</label><textarea id="lf-or" maxlength="1000" style="height:60px;font-size:13px">${esc(l.orientacoes||"")}</textarea></div><div class="am-grid2"><div><label class="slbl" for="lf-rp">Retorno previsto</label><input type="date" id="lf-rp" value="${esc(l.retornoPrevisto||"")}"></div><div><label class="slbl" for="lf-re">Liberado em</label><input type="date" id="lf-re" value="${esc(l.retornoEm||"")}"></div></div><div style="display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap;margin-top:4px">${n?"<span></span>":`<button type="button" class="btn-danger" id="lf-anular">Anular registro</button>`}<span style="display:flex;gap:10px"><button class="btn-sec" type="button" data-fechar style="width:auto">Cancelar</button><button class="btn-y" type="submit" style="width:auto;padding:10px 18px">Salvar</button></span></div></form>`,{largura:600});
      const q=s=>m.el.querySelector(s);
      q("#lf").onsubmit=async e=>{e.preventDefault();if(!q("#lf-local").value)return avisar("Escolha o local da lesão.","erro");
        const d={data:q("#lf-data").value,status:q("#lf-status").value,local:q("#lf-local").value,lado:q("#lf-lado").value,tipo:q("#lf-tipo").value,mecanismo:q("#lf-mec").value,gravidade:q("#lf-grav").value,descricao:limitar(q("#lf-desc").value.trim(),3000),orientacoes:limitar(q("#lf-or").value.trim(),1000),retornoPrevisto:q("#lf-rp").value,retornoEm:q("#lf-re").value,atualizadoEm:new Date().toISOString(),atualizadoPor:APP.user.nome};
        if(d.retornoEm&&d.data){d.diasAfastado=Math.max(0,Math.round((_dt(d.retornoEm)-_dt(d.data))/864e5));if(d.status!=="liberado"&&d.retornoEm<=hojeLocal())d.status="liberado"}
        try{if(n){await FB.addDoc(`atletas/${aid}/lesoes`,{...d,autorId:APP.user.uid,autorNome:APP.user.nome,autorCargo:APP.cargo,criadoEm:new Date().toISOString()});auditar("lesao_registrada",{id:aid,nome},d.local)}else{await FB.updateDoc(`atletas/${aid}/lesoes/${l._id}`,d);auditar("lesao_atualizada",{id:aid,nome},d.local)}m.fechar();load()}catch(x){avisar("Não foi possível salvar.","erro")}};
      q("#lf-anular")?.addEventListener("click",async()=>{if(!await confirmar("Anular este registro de lesão (lançado por engano)?",{ok:"Anular",perigo:true}))return;try{await FB.updateDoc(`atletas/${aid}/lesoes/${l._id}`,{anulada:true,anuladaEm:new Date().toISOString(),anuladaPor:APP.user.nome});auditar("lesao_anulada",{id:aid,nome});m.fechar();load()}catch(x){avisar("Não foi possível anular.","erro")}});
    }
    function formAval(){
      const m=abrirModal(`<h3 class="ptitle" style="font-size:20px;margin:0 0 12px">Nova medida</h3><form id="af" style="display:flex;flex-direction:column;gap:11px"><div class="am-grid2"><div><label class="slbl" for="af-data">Data</label><input type="date" id="af-data" value="${hojeLocal()}" max="${hojeLocal()}" required></div><div><label class="slbl" for="af-t">Teste</label><select id="af-t">${["Antropometria","Potência","Velocidade","Resistência","Força","Flexibilidade","Outro"].map(g=>`<optgroup label="${g}">${AVAL_TESTES.filter(t=>t[3]===g).map(t=>`<option value="${t[0]}">${t[1]}</option>`).join("")}</optgroup>`).join("")}</select></div></div><input type="text" id="af-nome" maxlength="60" placeholder="Nome do teste" hidden><div class="am-grid2"><div><label class="slbl" for="af-v">Resultado</label><input type="number" id="af-v" step="any" inputmode="decimal" required></div><div><label class="slbl" for="af-u">Unidade</label><input type="text" id="af-u" maxlength="15" value="kg"></div></div><textarea id="af-n" maxlength="500" placeholder="Observações (protocolo, condições)" style="height:60px;font-size:13px"></textarea><div style="display:flex;justify-content:flex-end;gap:10px"><button class="btn-sec" type="button" data-fechar style="width:auto">Cancelar</button><button class="btn-y" type="submit" style="width:auto;padding:10px 18px">Salvar</button></div></form>`,{largura:520});
      const q=s=>m.el.querySelector(s);const sync=()=>{const t=avalTeste(q("#af-t").value);q("#af-u").value=t[2];q("#af-nome").hidden=t[0]!=="outro"};q("#af-t").onchange=sync;sync();
      q("#af").onsubmit=async e=>{e.preventDefault();const v=+q("#af-v").value;if(!isFinite(v))return avisar("Informe o resultado.","erro");const t=q("#af-t").value;
        const d={data:q("#af-data").value,teste:t,valor:v,unidade:limitar(q("#af-u").value.trim(),15),notas:limitar(q("#af-n").value.trim(),500),autorId:APP.user.uid,autorNome:APP.user.nome,autorCargo:APP.cargo,criadoEm:new Date().toISOString()};if(t==="outro")d.nomeTeste=limitar(q("#af-nome").value.trim(),60)||"Outro teste";
        try{await FB.addDoc(`atletas/${aid}/avaliacoes`,d);auditar("avaliacao_registrada",{id:aid,nome},nomeAval(d));m.fechar();load()}catch(x){avisar("Não foi possível salvar.","erro")}};
    }
    load();
  }
}

/* ── Treinos & Carga — prescrição, registro e relação aguda:crônica ── */
async function modTreinos(c,atletas){
  phdr(c,"Prescrição e monitoramento de carga","Treinos & Carga",`<p class="am-dica" style="margin-top:6px">${esc(CRITERIO_CARGA)}</p>`);
  const box=el("div");seletorAtleta(c,atletas,abrir);c.appendChild(box);
  let grafico=null;
  async function abrir(aid){
    if(!aid){box.innerHTML="";return}box.innerHTML=carregandoHTML();
    const nome=nomeAtleta(atletas,aid),pode=podeEditar.treinos();let treinos=[];
    async function load(){treinos=ordDesc(await FB.getDocs(`atletas/${aid}/treinos`),t=>dataTreino(t));draw()}
    function draw(){
      const A=analiseCarga(treinos);
      box.innerHTML=`<div class="dk-kpis">${[["Carga 7 dias",A.aguda+" UA","#EEF1F8"],["Média semanal (28 d)",Math.round(A.cronica)+" UA","#B4BBE0"],["Aguda : crônica",A.suficiente&&A.acwr!=null?fmt1(A.acwr):"—",ZONA_COR[A.suficiente?A.zona:"sem"]],["Monotonia",A.monotonia!=null?fmt1(A.monotonia):"—",A.monotonia>2?"#EC7896":"#B4BBE0"],["Strain semanal",A.strain!=null?Math.round(A.strain):"—","#B4BBE0"],["Sessões 7 dias",A.sessoes7,"var(--y)"]].map(([l,v,cor])=>`<div class="pro-card" style="padding:16px;text-align:center"><span class="slbl" style="display:block;margin-bottom:6px">${l}</span><strong style="font-family:'JetBrains Mono',monospace;font-size:24px;color:${cor};line-height:1">${v}</strong></div>`).join("")}</div><p class="am-dica" style="margin:-8px 0 16px">${A.suficiente?`Situação: <b style="color:${ZONA_COR[A.zona]}">${ZONA_TXT[A.zona]}</b>. Monotonia acima de 2 indica treinos muito parecidos dia a dia.`:"Ainda não há 3 semanas de registros: a relação aguda:crônica aparece quando houver histórico suficiente."}</p><div class="dk-2" style="align-items:start"><div class="glass am-cs"><h3 class="am-cs-t">${AMI("bars")} Carga por semana</h3><div class="chart-wrapper" style="height:240px"><canvas id="tr-ch" aria-label="Carga semanal"></canvas></div></div><div class="glass am-cs"><div class="am-cs-hd"><h3 class="am-cs-t" style="margin:0">${AMI("dumbbell")} Sessões</h3>${pode?`<button type="button" class="am-mini" id="tr-novo">+ Prescrever</button>`:""}</div><div class="cs" style="max-height:520px;overflow-y:auto;display:flex;flex-direction:column;gap:9px">${treinos.length?treinos.slice(0,60).map(t=>{const st=t.status||"prescrito",r=t.realizado||{};return`<div class="am-nota" style="border-left:3px solid ${st==="realizado"?"#4ade80":st==="nao_realizado"?"#EC7896":"var(--y)"}"><div class="am-nota-h"><b style="color:#EEF1F8;font-size:13px">${esc(t.titulo||TREINO_TIPOS[t.tipo]||"Treino")}</b><span class="am-chip">${_fmtD(dataTreino(t))}</span><span class="am-tag ${st==="realizado"?"g":st==="nao_realizado"?"r":""}">${TREINO_STATUS[st]||st}</span>${pode?`<span style="margin-left:auto;display:flex;gap:5px"><button type="button" class="am-ico" data-tr-dup="${esc(t._id)}" aria-label="Duplicar para a próxima semana" title="Duplicar +7 dias">${AMI("repeat")}</button>${st==="prescrito"?`<button type="button" class="am-ico" data-tr-ed="${esc(t._id)}" aria-label="Editar">${AMI("edit")}</button><button type="button" class="am-ico r" data-tr-del="${esc(t._id)}" aria-label="Excluir">${AMI("trash")}</button>`:""}</span>`:""}</div><p class="am-dica" style="margin:4px 0">${esc(TREINO_TIPOS[t.tipo]||"")}${t.duracaoPrevista?` · ${+t.duracaoPrevista} min previstos`:""}${t.pseAlvo!=null&&t.pseAlvo!==""?` · PSE alvo ${t.pseAlvo}`:""}${(t.exercicios||[]).length?` · ${plural(t.exercicios.length,"exercício","exercícios")}`:""} · ${t.origem==="atleta"?"registrado pelo atleta":esc(autorTxt(t))}</p>${st==="realizado"?`<p style="font-size:12.5px;color:#B4BBE0;margin:0">${r.duracao||"—"} min · PSE ${r.pse??"—"} · <b style="color:var(--y)">${cargaDe(t)} UA</b>${r.comentario?` · “${esc(r.comentario)}”`:""}</p>`:st==="nao_realizado"&&t.motivoNao?`<p class="am-dica">Motivo: ${esc(t.motivoNao)}</p>`:""}</div>`}).join(""):vazioHTML("Nenhuma sessão registrada.")}</div></div></div>`;
      box.querySelector("#tr-novo")?.addEventListener("click",()=>formTreino(null));
      box.querySelectorAll("[data-tr-ed]").forEach(b=>b.onclick=()=>formTreino(treinos.find(t=>t._id===b.dataset.trEd)));
      box.querySelectorAll("[data-tr-dup]").forEach(b=>b.onclick=()=>{const t=treinos.find(x=>x._id===b.dataset.trDup);if(t)formTreino({...t,_id:null,data:somaDias(String(t.data||hojeLocal()).slice(0,10),7),status:"prescrito",realizado:null},true)});
      box.querySelectorAll("[data-tr-del]").forEach(b=>b.onclick=async()=>{if(!await confirmar("Excluir esta sessão prescrita?",{ok:"Excluir",perigo:true}))return;try{await FB.deleteDoc(`atletas/${aid}/treinos/${b.dataset.trDel}`);auditar("treino_excluido",{id:aid,nome});load()}catch(e){avisar("Não foi possível excluir.","erro")}});
      desenharGrafico(A);
    }
    async function desenharGrafico(A){if(!await garantirChart())return;const cv=box.querySelector("#tr-ch");if(!cv)return;if(grafico)grafico.destroy();
      grafico=new Chart(cv,{type:"bar",data:{labels:A.semanas.map(s=>_dt(s.fim).toLocaleDateString("pt-BR",{day:"2-digit",month:"short"})),datasets:[{label:"Carga (UA)",data:A.semanas.map(s=>s.carga),backgroundColor:A.semanas.map((s,i)=>i===7?"#00D1FF":"rgba(0,209,255,.35)"),borderWidth:0}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{x:{ticks:{color:"#9AA3CF",font:{family:"JetBrains Mono",size:10}},grid:{display:false}},y:{beginAtZero:true,ticks:{color:"#9AA3CF",font:{family:"JetBrains Mono",size:10}},grid:{color:"rgba(154,163,207,.1)"}}}}})}
    function formTreino(t,dup=false){
      const novo=!t||!t._id;t=t||{data:hojeLocal(),tipo:"forca",exercicios:[]};let exs=(t.exercicios||[]).map(e=>({...e}));if(!exs.length)exs=[{nome:"",series:"",reps:"",carga:"",descanso:"",obs:""}];
      const m=abrirModal(`<h3 class="ptitle" style="font-size:20px;margin:0 0 12px">${dup?"Duplicar sessão":novo?"Prescrever sessão":"Editar sessão"}</h3><form id="tf" style="display:flex;flex-direction:column;gap:11px"><input type="text" id="tf-tit" maxlength="80" placeholder="Título (ex: Força inferior A)" value="${esc(t.titulo||"")}" required><div class="am-grid3"><div><label class="slbl" for="tf-data">Data</label><input type="date" id="tf-data" value="${esc(String(t.data||"").slice(0,10))}" required></div><div><label class="slbl" for="tf-tipo">Tipo</label><select id="tf-tipo">${Object.entries(TREINO_TIPOS).map(([k,v])=>`<option value="${k}"${t.tipo===k?" selected":""}>${v}</option>`).join("")}</select></div><div><label class="slbl" for="tf-dur">Duração prevista (min)</label><input type="number" id="tf-dur" min="0" max="600" value="${esc(String(t.duracaoPrevista||""))}"></div></div><div><label class="slbl" for="tf-pse">PSE alvo (opcional, 0–10)</label><input type="number" id="tf-pse" min="0" max="10" value="${esc(String(t.pseAlvo??""))}"></div><div><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px"><span class="slbl">Exercícios</span><button type="button" class="am-mini" id="tf-add">+ Exercício</button></div><div id="tf-exs" style="display:flex;flex-direction:column;gap:8px"></div></div><textarea id="tf-n" maxlength="1000" placeholder="Orientações para o atleta" style="height:60px;font-size:13px">${esc(t.notas||"")}</textarea><div style="display:flex;justify-content:flex-end;gap:10px"><button class="btn-sec" type="button" data-fechar style="width:auto">Cancelar</button><button class="btn-y" type="submit" style="width:auto;padding:10px 18px">Salvar</button></div></form>`,{largura:760});
      const q=s=>m.el.querySelector(s);
      const ler=()=>{exs=[...q("#tf-exs").querySelectorAll(".am-ex")].map(r=>({nome:r.querySelector("[data-f=nome]").value.trim(),series:r.querySelector("[data-f=series]").value.trim(),reps:r.querySelector("[data-f=reps]").value.trim(),carga:r.querySelector("[data-f=carga]").value.trim(),descanso:r.querySelector("[data-f=descanso]").value.trim(),obs:r.querySelector("[data-f=obs]").value.trim()}))};
      const pintar=()=>{q("#tf-exs").innerHTML=exs.map((e,i)=>`<div class="am-ex"><input data-f="nome" maxlength="80" placeholder="Exercício" value="${esc(e.nome)}" aria-label="Exercício ${i+1}"><input data-f="series" maxlength="10" placeholder="Séries" value="${esc(e.series)}" aria-label="Séries"><input data-f="reps" maxlength="15" placeholder="Reps / tempo" value="${esc(e.reps)}" aria-label="Repetições"><input data-f="carga" maxlength="20" placeholder="Carga" value="${esc(e.carga)}" aria-label="Carga"><input data-f="descanso" maxlength="15" placeholder="Pausa" value="${esc(e.descanso)}" aria-label="Descanso"><input data-f="obs" maxlength="120" placeholder="Obs." value="${esc(e.obs)}" aria-label="Observação"><button type="button" class="am-ico r" data-rm="${i}" aria-label="Remover exercício">${AMI("x")}</button></div>`).join("");q("#tf-exs").querySelectorAll("[data-rm]").forEach(b=>b.onclick=()=>{ler();exs.splice(+b.dataset.rm,1);pintar()})};
      pintar();q("#tf-add").onclick=()=>{ler();if(exs.length>=30)return;exs.push({nome:"",series:"",reps:"",carga:"",descanso:"",obs:""});pintar()};
      q("#tf").onsubmit=async e=>{e.preventDefault();ler();const tit=limitar(q("#tf-tit").value.trim(),80);if(!tit)return;
        const pse=q("#tf-pse").value===""?null:Math.max(0,Math.min(10,Math.round(+q("#tf-pse").value)));
        const d={titulo:tit,data:q("#tf-data").value,tipo:q("#tf-tipo").value,duracaoPrevista:Math.max(0,Math.min(600,Math.round(+q("#tf-dur").value||0))),pseAlvo:pse,exercicios:exs.filter(x=>x.nome).slice(0,30),notas:limitar(q("#tf-n").value.trim(),1000),atualizadoEm:new Date().toISOString()};
        try{if(novo){await FB.addDoc(`atletas/${aid}/treinos`,{...d,status:"prescrito",origem:"equipe",autorId:APP.user.uid,autorNome:APP.user.nome,autorCargo:APP.cargo,criadoEm:new Date().toISOString()});auditar("treino_prescrito",{id:aid,nome},tit)}else{await FB.updateDoc(`atletas/${aid}/treinos/${t._id}`,d)}m.fechar();load()}catch(x){avisar("Não foi possível salvar.","erro")}};
    }
    load();
  }
}

/* ── Agenda & Sessões — link validado, presencial ou online ── */
async function modAgenda(c,atletas){
  phdr(c,"Sessões e competições","Agenda & Calendário");
  const box=el("div");box.innerHTML=carregandoHTML();c.appendChild(box);let sessoes=[],torneios=[];
  async function load(){const desde=new Date(Date.now()-30*864e5).toISOString().slice(0,16);
    const[ss,tt]=await Promise.all([FB.query("agenda","dataHora",">=",desde,"dataHora","ASCENDING",300),FB.query("torneios","data",">=",somaDias(hojeLocal(),-60),"data","ASCENDING",200)]);sessoes=ss||[];torneios=tt||[];draw()}
  const fmtH=dt=>{const x=_dt(dt);return x?x.toLocaleString("pt-BR",{weekday:"short",day:"2-digit",month:"short",hour:"2-digit",minute:"2-digit"}):""};
  const dur=(a,b)=>{const ms=_dt(b)-_dt(a);if(!(ms>0))return"";const m=Math.round(ms/6e4);return m<60?m+" min":Math.floor(m/60)+"h"+(m%60?String(m%60).padStart(2,"0"):"")};
  function draw(){
    const agora=Date.now(),fut=sessoes.filter(s=>_dt(s.dataHora)&&_dt(s.dataHora).getTime()>=agora-3600e3),pas=sessoes.filter(s=>_dt(s.dataHora)&&_dt(s.dataHora).getTime()<agora-3600e3).reverse();
    box.innerHTML=`<div class="dk-2" style="align-items:start"><div class="glass am-cs"><h3 class="am-cs-t">${AMI("calendar")} Sessões</h3><form id="ag-f" class="am-form-box"><select id="ag-atl" required aria-label="Atleta"><option value="">Atleta...</option>${atletas.map(a=>`<option value="${esc(a._id)}">${esc(a.nome)}</option>`).join("")}</select><input type="text" id="ag-tit" maxlength="80" placeholder="Título (ex: Sessão de psicologia)" value="Sessão com ${esc(CARGOS[APP.cargo]||"equipe")}" aria-label="Título"><div class="am-grid2"><div><label class="slbl" for="ag-ini">Início</label><input type="datetime-local" id="ag-ini" required></div><div><label class="slbl" for="ag-fim">Fim</label><input type="datetime-local" id="ag-fim"></div></div><div class="tab-switch" id="ag-mod"><button type="button" class="tab-btn active" data-m="online">Online</button><button type="button" class="tab-btn" data-m="presencial">Presencial</button></div><div id="ag-on"><div style="display:flex;gap:8px"><input type="url" id="ag-link" maxlength="300" placeholder="https://meet.google.com/abc-defg-hij" aria-label="Link da sala" style="flex:1"><a class="btn-sec" href="https://meet.google.com/new" target="_blank" rel="noopener noreferrer" style="width:auto;white-space:nowrap">Criar sala</a></div><p class="am-dica">Crie a sala no Google Meet (ou Zoom, Teams) e cole o link aqui. Só links https são aceitos.</p></div><input type="text" id="ag-local" maxlength="120" placeholder="Endereço / sala" aria-label="Local" hidden><button class="btn-y" type="submit" style="font-size:12px">Marcar sessão</button></form><p class="slbl" style="margin:16px 0 8px">Próximas · ${fut.length}</p><div class="cs" style="max-height:480px;overflow-y:auto;display:flex;flex-direction:column;gap:9px">${fut.length?fut.map(s=>linhaSessao(s,true)).join(""):vazioHTML("Nenhuma sessão marcada.")}</div>${pas.length?`<details class="am-det" style="margin-top:12px"><summary>Realizadas nos últimos 30 dias · ${pas.length}</summary><div style="display:flex;flex-direction:column;gap:9px;margin-top:10px">${pas.map(s=>linhaSessao(s,false)).join("")}</div></details>`:""}</div><div class="glass am-cs"><h3 class="am-cs-t">${AMI("trophy")} Radar de Competições</h3><form id="tn-f" class="am-form-box"><input type="text" id="tn-nome" maxlength="120" placeholder="Nome da competição" required aria-label="Nome da competição"><select id="tn-mod" aria-label="Modalidade">${sportOptions("","Todas as modalidades",false)}</select><input type="text" id="tn-local" maxlength="120" placeholder="Local (opcional)" aria-label="Local"><div class="am-grid2"><div><label class="slbl" for="tn-data">Início</label><input type="date" id="tn-data" required></div><div><label class="slbl" for="tn-fim">Fim</label><input type="date" id="tn-fim"></div></div><button class="btn-sec" type="submit" style="font-size:12px">Registrar competição</button></form><div class="cs" style="max-height:560px;overflow-y:auto;display:flex;flex-direction:column;gap:8px;margin-top:14px">${torneios.length?torneios.map(t=>`<div class="tourn-card"><div style="flex:1;min-width:0"><p style="font-family:'Archivo',sans-serif;font-stretch:112%;font-style:italic;font-weight:800;font-size:15px;color:#EEF1F8;margin:0 0 3px;text-transform:uppercase">${esc(t.nome)}</p><div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap"><span style="font-size:11px;color:var(--y);font-family:'JetBrains Mono',monospace">${_fmtD(t.data)}${t.dataFim?" → "+_fmtD(t.dataFim):""}</span>${t.local?`<span class="am-dica">${esc(t.local)}</span>`:""}${t.modalidade?sportChip(t.modalidade,"sm"):""}</div></div><button type="button" class="am-ico r" data-del-t="${esc(t._id)}" aria-label="Apagar competição">${AMI("trash")}</button></div>`).join(""):vazioHTML("Nenhuma competição registrada.")}</div></div></div>`;
    const q=s=>box.querySelector(s);let modo="online";
    q("#ag-mod").querySelectorAll("[data-m]").forEach(b=>b.onclick=()=>{modo=b.dataset.m;q("#ag-mod").querySelectorAll("[data-m]").forEach(x=>x.classList.toggle("active",x===b));q("#ag-on").hidden=modo!=="online";q("#ag-local").hidden=modo!=="presencial"});
    q("#ag-ini").addEventListener("change",()=>{const f=q("#ag-fim");if(!f.value&&q("#ag-ini").value){const d=new Date(q("#ag-ini").value);d.setMinutes(d.getMinutes()+50);const p=n=>String(n).padStart(2,"0");f.value=`${d.getFullYear()}-${p(d.getMonth()+1)}-${p(d.getDate())}T${p(d.getHours())}:${p(d.getMinutes())}`}});
    q("#ag-f").onsubmit=async e=>{e.preventDefault();const aid=q("#ag-atl").value,ini=q("#ag-ini").value,fim=q("#ag-fim").value;if(!aid||!ini)return avisar("Escolha o atleta e o horário.","erro");
      if(fim&&fim<=ini)return avisar("O fim precisa ser depois do início.","erro");
      let link="",local="";if(modo==="online"){const bruto=q("#ag-link").value.trim();if(bruto){link=urlSegura(bruto);if(!link)return avisar("Use um link que comece com https://","erro")}}else local=limitar(q("#ag-local").value.trim(),120);
      const a=atletas.find(x=>x._id===aid);const area=AREA_PROPRIA[APP.cargo]||"geral";
      const d={atletaId:aid,nome:a.nome,titulo:limitar(q("#ag-tit").value.trim(),80)||"Sessão",dataHora:ini,dataHoraFim:fim||"",modo,link,local,area,profissionalId:APP.user.uid,profissionalNome:APP.user.nome,profissionalCargo:APP.cargo,criadoEm:new Date().toISOString()};
      try{const r=await FB.addDoc("agenda",d);sessoes.push({_id:r.id,...d});sessoes.sort((x,y)=>String(x.dataHora).localeCompare(String(y.dataHora)));auditar("sessao_marcada",{id:aid,nome:a.nome},ini);avisar("Sessão marcada. Ela aparece na agenda do atleta.","ok");draw()}catch(x){avisar("Não foi possível marcar.","erro")}};
    q("#tn-f").onsubmit=async e=>{e.preventDefault();const nome=limitar(q("#tn-nome").value.trim(),120),data=q("#tn-data").value,dataFim=q("#tn-fim").value||"";if(!nome||!data)return;if(dataFim&&dataFim<data)return avisar("A data final vem depois do início.","erro");
      const d={nome,data,dataFim,modalidade:SPORTS[q("#tn-mod").value]?.nome||"",local:limitar(q("#tn-local").value.trim(),120),criadoPor:APP.user.nome,criadoEm:new Date().toISOString()};
      try{const r=await FB.addDoc("torneios",d);torneios.push({_id:r.id,...d});torneios.sort((x,y)=>String(x.data).localeCompare(String(y.data)));draw()}catch(x){avisar("Não foi possível registrar.","erro")}};
    box.querySelectorAll("[data-del-s]").forEach(b=>b.onclick=async()=>{if(!await confirmar("Desmarcar esta sessão? Ela some da agenda do atleta.",{ok:"Desmarcar",perigo:true}))return;try{await FB.deleteDoc(`agenda/${b.dataset.delS}`);const s=sessoes.find(x=>x._id===b.dataset.delS);auditar("sessao_desmarcada",{id:s?.atletaId,nome:s?.nome});sessoes=sessoes.filter(x=>x._id!==b.dataset.delS);draw()}catch(x){avisar("Não foi possível desmarcar.","erro")}});
    box.querySelectorAll("[data-del-t]").forEach(b=>b.onclick=async()=>{if(!await confirmar("Apagar esta competição?",{ok:"Apagar",perigo:true}))return;try{await FB.deleteDoc(`torneios/${b.dataset.delT}`);torneios=torneios.filter(x=>x._id!==b.dataset.delT);draw()}catch(x){avisar("Não foi possível apagar.","erro")}});
    box.querySelectorAll("[data-copiar]").forEach(b=>b.onclick=async()=>{try{await navigator.clipboard.writeText(b.dataset.copiar);avisar("Link copiado.","ok")}catch(e){avisar(b.dataset.copiar,"info",8000)}});
  }
  function linhaSessao(s,futura){const u=urlSegura(s.link),d=dur(s.dataHora,s.dataHoraFim);return`<div class="am-nota"><div class="am-nota-h"><b style="color:#EEF1F8;font-size:14px">${esc(s.nome||"—")}</b><span class="am-chip">${fmtH(s.dataHora)}</span>${d?`<span class="am-tag">${d}</span>`:""}${futura?`<button type="button" class="am-ico r" data-del-s="${esc(s._id)}" aria-label="Desmarcar sessão" style="margin-left:auto">${AMI("trash")}</button>`:""}</div><p class="am-dica" style="margin:4px 0">${esc(s.titulo||"Sessão")}${s.profissionalNome?` · ${esc(s.profissionalNome)}`:""}${s.local?` · ${AMI("pin")} ${esc(s.local)}`:""}</p>${futura&&u?`<div style="display:flex;gap:8px;flex-wrap:wrap"><a href="${esc(u)}" target="_blank" rel="noopener noreferrer" class="sess-link" style="flex:1">Entrar na sala →</a><button type="button" class="btn-sec" data-copiar="${esc(u)}" style="width:auto;padding:8px 12px;font-size:11px">${AMI("link")} Copiar</button></div>`:futura&&s.modo!=="presencial"&&!s.local?`<p class="am-dica">Sem link: o atleta vê só o horário.</p>`:""}</div>`}
  load();
}

function modCalendarios(c,atletas){phdr(c,"Gestão de eventos","Calendários dos Atletas");const box=el("div");seletorAtleta(c,atletas,aid=>{box.innerHTML="";if(!aid)return;const info=el("p");info.style.cssText="font-size:13px;color:var(--dim);margin-bottom:16px";info.innerHTML=`Eventos e sessões no calendário de <strong style="color:#EEF1F8">${esc(nomeAtleta(atletas,aid))}</strong>.`;box.appendChild(info);renderCal(box,aid,true)});c.appendChild(box)}

/* ── Aquecimento & rotinas de ativação ── */
function modAquecimento(c,atletas){
  phdr(c,"Protocolo de preparação","Aquecimento & Rotinas");
  const box=el("div");seletorAtleta(c,atletas,abrir);c.appendChild(box);
  async function abrir(aid){
    if(!aid){box.innerHTML="";return}box.innerHTML=carregandoHTML();
    const[aqD,pr]=await Promise.all([FB.getDoc(`atletas/${aid}/planos/aquecimento`).catch(()=>null),FB.getDoc(`prontuarios/${aid}`).catch(()=>null)]);
    const aq={...(aqD||{})},sp=sportOf(pr?.perfil?.modalidade||(atletas.find(a=>a._id===aid)||{}).esporte),leg=pr?.rotinas||{};
    if(!aq.rotinaPre&&leg.pre)aq.rotinaPre=leg.pre;if(!aq.rotinaPos&&leg.pos)aq.rotinaPos=leg.pos;
    const rot=ehAdmin()||canStaffAccess(APP.plan,"staffRotinas");
    box.innerHTML=`<form class="glass am-cs" id="aq-f" style="max-width:640px;display:flex;flex-direction:column;gap:16px">${sp.nome?`<div>${sportChip(sp.nome,"sm")}</div>`:""}<div><label class="slbl" for="aq-tit">Título do protocolo</label><input type="text" id="aq-tit" maxlength="80" value="${esc(aq.titulo||"")}" placeholder="Ex: Aquecimento Dinâmico 15min"></div><div><label class="slbl" for="aq-dur">Duração</label><input type="text" id="aq-dur" maxlength="40" value="${esc(aq.duracao||"")}" placeholder="Ex: 15 minutos"></div><div><label class="slbl" for="aq-exer">Lista de exercícios</label><textarea id="aq-exer" maxlength="4000" placeholder="1. Corrida leve 5min&#10;2. Mobilidade 2min" style="height:140px;font-size:13px;resize:vertical">${esc(aq.exercicios||"")}</textarea></div><div><label class="slbl" for="aq-obs">Observações</label><textarea id="aq-obs" maxlength="1000" style="height:70px;font-size:13px;resize:vertical">${esc(aq.descricao||"")}</textarea></div><div style="border-top:1px solid rgba(255,255,255,.05);padding-top:16px"><div class="am-tit">${AMI("repeat")}<span>Rotinas de ativação</span>${rot?"":`<span class="am-tit-x">${AMI("lock")} plano ${PLANS[STAFF_FEAT_MIN.staffRotinas]?.label||"Pro"}+</span>`}</div><div style="display:flex;flex-direction:column;gap:14px"><div><label class="slbl" for="aq-rpre">${esc(sp.ritual)}</label><textarea id="aq-rpre" maxlength="2000" ${rot?"":"disabled"} style="height:80px;font-size:13px;resize:vertical">${esc(aq.rotinaPre||"")}</textarea></div><div><label class="slbl" for="aq-rpos">Reset pós-erro</label><textarea id="aq-rpos" maxlength="2000" ${rot?"":"disabled"} style="height:80px;font-size:13px;resize:vertical">${esc(aq.rotinaPos||"")}</textarea></div></div></div><button class="btn-y" type="submit">Salvar protocolo</button></form>`;
    box.querySelector("#aq-f").onsubmit=async e=>{e.preventDefault();const q=s=>box.querySelector(s),btn=q("[type=submit]");
      const d={titulo:limitar(q("#aq-tit").value.trim(),80),duracao:limitar(q("#aq-dur").value.trim(),40),exercicios:limitar(q("#aq-exer").value,4000),descricao:limitar(q("#aq-obs").value,1000),atualizadoEm:new Date().toISOString(),atualizadoPor:APP.user.nome};
      if(rot){d.rotinaPre=limitar(q("#aq-rpre").value,2000);d.rotinaPos=limitar(q("#aq-rpos").value,2000)}
      btn.disabled=true;btn.textContent="Salvando...";
      try{await FB.updateDoc(`atletas/${aid}/planos/aquecimento`,d);avisar("Protocolo salvo. O atleta vê na aba Pré.","ok")}catch(x){avisar("Não foi possível salvar. Seus textos continuam na tela.","erro")}
      btn.disabled=false;btn.textContent="Salvar protocolo"};
  }
}

/* ════ PAINEL DA EQUIPE — atletas, perfil, S.O.S, análises e exportação ════ */

/* ── convite: cria a conta sem trocar a sessão e envia o e-mail para o convidado criar a senha ── */
async function convidarUsuario({nome,email,cargo="paciente",plano="starter",admin=false,extra={}}){
  let conta;
  try{conta=await FB.criarConta(email,senhaAleatoria())}
  catch(e){if(/EMAIL_EXISTS/.test(e.message))throw new FBError("Este e-mail já tem conta. Se a pessoa não consegue entrar, use \"Reenviar acesso\".","EMAIL_EXISTS");throw e}
  const uid=conta.localId,dados={nome,email,cargo,plano,dataCadastro:new Date().toISOString(),convidadoPor:APP.user.uid,convidadoPorNome:APP.user.nome,...extra};
  if(admin)dados.admin=true;
  await FB.setDoc(`usuarios/${uid}`,dados);
  await FB.enviarEmail("PASSWORD_RESET",{email}).catch(()=>{});
  auditar(cargo==="paciente"?"atleta_convidado":"equipe_convidada",{id:uid,nome},CARGOS[cargo]||cargo);
  APP.atletasCache=null;return uid;
}
async function reenviarAcesso(email,nome){try{await FB.enviarEmail("PASSWORD_RESET",{email});auditar("acesso_reenviado",{nome});avisar(`Link para criar senha enviado para ${email}.`,"ok")}catch(e){avisar("Não foi possível enviar agora.","erro")}}

/* ── Atletas & Convites ── */
async function modAtletasPro(c,atletas){
  phdr(c,"Gestão de atletas","Atletas & Convites");
  const top=el("div","dk-actions");top.innerHTML=`<div id="atl-stats" style="display:flex;gap:12px;flex-wrap:wrap"></div><div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center"><input type="search" id="atl-busca" placeholder="Buscar atleta..." aria-label="Buscar atleta" style="width:min(240px,100%)"><button class="btn-y" id="atl-conv" type="button" style="width:auto;padding:10px 20px;font-size:12px">${AMI("mail")} Convidar atleta</button></div>`;
  c.appendChild(top);const grid=el("div");grid.style.cssText="display:grid;grid-template-columns:repeat(auto-fill,minmax(290px,1fr));gap:14px";c.appendChild(grid);
  const st=top.querySelector("#atl-stats");Counter(st,atletas.length,"","Atletas");Counter(st,atletas.filter(a=>a.plano==="pro"||a.plano==="elite").length,"","Pro / Elite",100,"#0098CE");Counter(st,atletas.filter(a=>!a.consentimento).length,"","Sem aceite",200,"#f59e0b");
  const cks=await FB.query("checkins","data",">=",new Date(Date.now()-40*864e5).toISOString(),"data","DESCENDING",3000,true)||[];
  const dias={};cks.forEach(r=>{(dias[r.pacienteId]=dias[r.pacienteId]||new Set()).add(diaISO(r.data))});
  const seq=id=>{const s=dias[id];if(!s)return 0;let n=0,d=hojeLocal();if(!s.has(d))d=somaDias(d,-1);while(s.has(d)){n++;d=somaDias(d,-1)}return n};
  function draw(filtro=""){const f=_norm(filtro);grid.innerHTML="";
    atletas.filter(a=>!f||_norm(a.nome+" "+a.email+" "+(a.esporte||"")).includes(f)).forEach(a=>{
      const p=PLANS[a.plano]||PLANS.starter,s=seq(a._id),cs=a.consentimento,card=el("div","pro-card card-shimmer");
      card.innerHTML=`<div class="pro-card-header" style="align-items:flex-start"><div style="display:flex;align-items:center;gap:10px;min-width:0"><div class="am-avatar">${esc((a.nome||"?").charAt(0).toUpperCase())}</div><div style="min-width:0"><p class="am-nome" style="font-size:16px">${esc(a.nome)}</p><p style="font-size:11px;color:var(--muted);margin:0;overflow:hidden;text-overflow:ellipsis">${esc(a.email||"")}</p>${a.esporte?`<div style="margin-top:7px">${sportChip(a.esporte,"sm")}</div>`:""}</div></div><span class="plan-chip ${PLANS[a.plano]?a.plano:"starter"}">${p.emoji} ${p.label}</span></div><div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:-10px">${cs?`<span class="am-tag g">termos ${esc(cs.versao||"")}</span>`:`<span class="am-tag r">aguardando aceite</span>`}${cs&&cs.menor?`<span class="am-tag">menor · ${esc(cs.responsavelNome||"responsável")}</span>`:""}${a.ultimoAcesso?`<span class="am-tag">acesso ${_fmtD(a.ultimoAcesso)}</span>`:`<span class="am-tag">nunca entrou</span>`}</div>${s>1?`<div class="streak-badge" style="margin-top:12px"><span>${AMI("flame")}</span><span>${s} dias</span><span style="opacity:.7;font-size:.65rem">SEQUÊNCIA</span></div>`:""}<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:16px"><button type="button" class="btn btn-outline" data-ficha style="padding:10px">${AMI("edit")} Ficha</button><button type="button" class="btn btn-outline" data-hist style="padding:10px;border-color:rgba(0,209,255,.2);color:var(--y)">${AMI("bars")} Histórico</button>${a.ultimoAcesso?"":`<button type="button" class="btn btn-outline" data-reenv style="padding:10px;grid-column:1/-1">${AMI("mail")} Reenviar acesso</button>`}</div>`;
      card.querySelector("[data-ficha]").onclick=()=>abrirFichaAtleta(a);
      card.querySelector("[data-hist]").onclick=()=>{const m=abrirModal(`<div class="pro-card-header" style="margin-bottom:16px"><span>${esc(a.nome)} — Histórico</span><button type="button" class="btn btn-outline" data-fechar style="padding:8px 14px;font-size:11px">✕ Fechar</button></div><div id="hist-body"></div>`,{largura:640});renderHistoricoAtleta(a._id,m.el.querySelector("#hist-body"))};
      card.querySelector("[data-reenv]")?.addEventListener("click",()=>reenviarAcesso(a.email,a.nome));
      grid.appendChild(card);
    });
    if(!grid.children.length)grid.innerHTML=vazioHTML(f?"Nenhum atleta encontrado.":"Nenhum atleta ainda. Use \"Convidar atleta\".");
  }
  top.querySelector("#atl-busca").oninput=e=>draw(e.target.value);
  top.querySelector("#atl-conv").onclick=()=>{
    const m=abrirModal(`<h3 class="ptitle" style="font-size:22px;margin:0 0 6px">Convidar atleta</h3><p class="am-dica" style="margin:0 0 14px">O atleta recebe um e-mail para criar a própria senha. No primeiro acesso, ele aceita os termos (ou o responsável, se for menor de idade).</p><form id="cv-f" style="display:flex;flex-direction:column;gap:11px"><input type="text" id="cv-nome" maxlength="80" placeholder="Nome completo" required><input type="email" id="cv-email" maxlength="120" placeholder="E-mail do atleta" required><select id="cv-esp" aria-label="Modalidade">${sportOptions("","Modalidade...")}</select><input type="text" id="cv-esp-o" maxlength="40" placeholder="Qual modalidade?" hidden><div><label class="slbl" for="cv-nasc">Data de nascimento (opcional)</label><input type="date" id="cv-nasc" max="${today()}"></div><p class="am-dica" id="cv-st" role="status"></p><div style="display:flex;justify-content:flex-end;gap:10px"><button class="btn-sec" type="button" data-fechar style="width:auto">Cancelar</button><button class="btn-y" type="submit" style="width:auto;padding:10px 18px">Enviar convite</button></div></form>`,{largura:500});
    const q=s=>m.el.querySelector(s);q("#cv-esp").onchange=e=>q("#cv-esp-o").hidden=e.target.value!=="outro";
    q("#cv-f").onsubmit=async e=>{e.preventDefault();const nome=limitar(q("#cv-nome").value.trim(),80),email=q("#cv-email").value.trim().toLowerCase();
      if(nome.length<3)return avisar("Informe o nome completo.","erro");if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))return avisar("E-mail inválido.","erro");
      const k=q("#cv-esp").value,esporte=k==="outro"?limitar(q("#cv-esp-o").value.trim(),40):(SPORTS[k]?.nome||""),nasc=q("#cv-nasc").value;
      const btn=q("[type=submit]");btn.disabled=true;q("#cv-st").textContent="Criando acesso...";
      try{const uid=await convidarUsuario({nome,email,extra:{esporte,...(nasc?{nascimento:nasc}:{})}});if(esporte)await FB.setDoc(`prontuarios/${uid}`,{perfil:{modalidade:esporte},criadoEm:new Date().toISOString()}).catch(()=>{});
        avisar(`Convite enviado para ${email}.`,"ok");m.fechar();atletas=await listarAtletas(true);draw(top.querySelector("#atl-busca").value)}
      catch(x){btn.disabled=false;q("#cv-st").textContent="";avisar(x.code==="EMAIL_EXISTS"?x.message:msgErroAuth(x.message),"erro")}};
  };
  draw();
}

/* ── ficha esportiva rápida (modal) ── */
async function abrirFichaAtleta(a){
  const d=await FB.getDoc(`prontuarios/${a._id}`).catch(()=>null);const perf={...(d?.perfil||{})};if(!perf.modalidade&&a.esporte)perf.modalidade=a.esporte;
  const sp0=sportOf(perf.modalidade);
  const m=abrirModal(`<div class="pro-card-header">Ficha de ${esc(a.nome)}</div><form id="fa-f" style="display:flex;flex-direction:column;gap:12px"><div class="am-grid2"><div><label class="slbl" for="fa-mod">Modalidade</label><select id="fa-mod">${sportOptions(sp0.key)}</select><input type="text" id="fa-mod-o" maxlength="40" placeholder="Qual modalidade?" value="${sp0.key==="outro"?esc(perf.modalidade||""):""}"${sp0.key==="outro"?"":" hidden"} style="margin-top:8px"></div><div><label class="slbl" for="fa-cat">Categoria / nível</label><input type="text" id="fa-cat" maxlength="60" list="fa-cat-dl" value="${esc(perf.categoria||"")}"><datalist id="fa-cat-dl"></datalist></div></div><div class="am-grid2"><div><label class="slbl" id="fa-est-l" for="fa-est">Estilo</label><input type="text" id="fa-est" maxlength="120" value="${esc(perf.estilo||"")}"></div><div><label class="slbl" for="fa-mao">Lateralidade</label><select id="fa-mao"><option value="">Selecione...</option>${["Destro","Canhoto","Ambidestro"].map(o=>`<option${perf.mao===o?" selected":""}>${o}</option>`).join("")}</select></div></div><div><label class="slbl" for="fa-les">Histórico de lesões</label><textarea id="fa-les" maxlength="3000" style="height:90px;font-size:13px">${esc(perf.lesoes||"")}</textarea></div><div style="display:flex;justify-content:flex-end;gap:10px"><button class="btn btn-outline" type="button" data-fechar>Cancelar</button><button class="btn btn-primary" type="submit">Salvar ficha</button></div></form>`,{largura:620});
  const q=s=>m.el.querySelector(s);
  const sync=()=>{const k=q("#fa-mod").value;q("#fa-mod-o").hidden=k!=="outro";const s=k==="outro"?sportOf(q("#fa-mod-o").value):sportByKey(k);q("#fa-est-l").textContent=s.estilo;q("#fa-est").placeholder=s.estiloEx;q("#fa-cat-dl").innerHTML=s.niveis.map(n=>`<option value="${esc(n)}">`).join("");q("#fa-les").placeholder=s.lesaoEx};
  q("#fa-mod").onchange=sync;sync();
  q("#fa-f").onsubmit=async e=>{e.preventDefault();const k=q("#fa-mod").value,modalidade=k==="outro"?limitar(q("#fa-mod-o").value.trim(),40):(SPORTS[k]?.nome||"");
    const np={...perf,modalidade,categoria:limitar(q("#fa-cat").value.trim(),60),estilo:limitar(q("#fa-est").value.trim(),120),mao:q("#fa-mao").value,lesoes:limitar(q("#fa-les").value.trim(),3000)};
    try{await FB.updateDoc(`prontuarios/${a._id}`,{perfil:np,atualizadoEm:new Date().toISOString()});await FB.updateDoc(`usuarios/${a._id}`,{esporte:modalidade}).catch(()=>{});a.esporte=modalidade;auditar("ficha_atualizada",{id:a._id,nome:a.nome});avisar("Ficha atualizada.","ok");m.fechar()}catch(x){avisar("Não foi possível salvar.","erro")}};
}

/* ── Perfil Esportivo + anamnese ── */
function modPerfil(c,atletas){
  phdr(c,"Dados técnicos e de saúde","Perfil Esportivo");let aid="",perf={},anamnese={},outro=false;
  const box=el("div");seletorAtleta(c,atletas,async v=>{aid=v;if(!aid){box.innerHTML="";return}box.innerHTML=carregandoHTML();const d=await FB.getDoc(`prontuarios/${aid}`).catch(()=>null);perf={...(d?.perfil||{})};anamnese={...(d?.anamnese||{})};delete anamnese.psicologico;if(!perf.modalidade){const a=atletas.find(x=>x._id===aid);if(a&&a.esporte)perf.modalidade=a.esporte}outro=sportOf(perf.modalidade).key==="outro";draw()});c.appendChild(box);
  const AN=[["an-doencas","doencas","Doenças pré-existentes","Ex: Asma, hipertensão, diabetes..."],["an-medic","medicacoes","Medicações em uso","Nome, dosagem e frequência..."],["an-cirurgias","cirurgias","Cirurgias anteriores","Data e tipo de procedimento..."],["an-alergias","alergias","Alergias","Medicamentosas, alimentares..."],["an-familiar","familiar","Histórico familiar relevante","Doenças cardíacas, crônicas..."],["an-suplementos","suplementos","Uso de suplementos","Whey, creatina, vitaminas..."],["an-sono","sono","Hábitos de sono","Ex: 7h por noite..."],["an-alimentar","alimentar","Hábitos alimentares","Restrições, rotina..."],["an-obs","observacoes","Observações gerais","Outras informações relevantes..."]];
  function draw(){
    const sp=sportOf(perf.modalidade),selK=outro?"outro":sp.key,podeAn=podeEditar.anamnese();
    box.innerHTML=`<form id="pf-f" class="glass dk-perfil" style="border-radius:3px;clip-path:var(--cut);padding:32px"><div style="display:flex;flex-direction:column;gap:18px"><div><label class="slbl" for="pf-mod" style="display:block;margin-bottom:7px">Modalidade esportiva</label><select id="pf-mod" style="font-size:13px">${sportOptions(selK)}</select><input type="text" id="pf-mod-outro" maxlength="40" value="${outro?esc(perf.modalidade||""):""}" placeholder="Nome da modalidade" style="font-size:13px;margin-top:8px"${outro?"":" hidden"}></div><div><label class="slbl" for="pf-cat" style="display:block;margin-bottom:7px">Categoria / nível</label><input type="text" id="pf-cat" maxlength="60" list="pf-cat-dl" value="${esc(perf.categoria||"")}" placeholder="Ex: ${esc(sp.niveis.slice(0,3).join(", "))}..." style="font-size:13px"><datalist id="pf-cat-dl">${sp.niveis.map(n=>`<option value="${esc(n)}">`).join("")}</datalist></div><div><label class="slbl" for="pf-mao" style="display:block;margin-bottom:7px">Lateralidade dominante</label><select id="pf-mao" style="font-size:12px"><option value="">Selecione...</option>${["Destro","Canhoto","Ambidestro"].map(o=>`<option${perf.mao===o?" selected":""}>${o}</option>`).join("")}</select></div></div><div style="display:flex;flex-direction:column;gap:18px"><div><label class="slbl" for="pf-est" style="display:block;margin-bottom:7px">${esc(sp.estilo)}</label><input type="text" id="pf-est" maxlength="120" value="${esc(perf.estilo||"")}" placeholder="${esc(sp.estiloEx)}" style="font-size:13px"></div><div><label class="slbl" for="pf-les" style="display:block;margin-bottom:7px">Histórico de lesões</label><textarea id="pf-les" maxlength="3000" placeholder="${esc(sp.lesaoEx)}" style="height:100px;font-size:13px;resize:vertical;display:block">${esc(perf.lesoes||"")}</textarea><p class="am-dica">Lesões atuais e retorno ficam em Lesões & Avaliações.</p></div></div>
      <div style="grid-column:1/-1;border-top:1px solid rgba(255,255,255,.05);padding-top:20px;margin-top:4px"><div class="am-tit">${AMI("steth")}<span>Anamnese</span><span class="am-tit-x">${podeAn?"edição: profissionais de saúde":"somente leitura"}</span></div><div class="dk-an">${AN.map(([id,k,l,ph])=>`<div${k==="observacoes"?' style="grid-column:1/-1"':""}><label class="slbl" for="${id}" style="display:block;margin-bottom:7px">${l}</label>${podeAn?`<textarea id="${id}" maxlength="3000" style="height:80px;font-size:13px;resize:vertical;display:block" placeholder="${ph}">${esc(anamnese[k]||"")}</textarea>`:`<div class="am-leitura">${esc(anamnese[k]||"—")}</div>`}</div>`).join("")}</div><p class="am-dica" style="margin-top:10px">O histórico psicológico fica no Prontuário, área de Psicologia, com acesso restrito.</p></div>
      <div style="grid-column:1/-1;border-top:1px solid rgba(255,255,255,.05);padding-top:20px;display:flex;justify-content:flex-end"><button class="btn-y" type="submit" style="width:auto;padding:12px 28px">Salvar ficha</button></div></form>`;
    const q=s=>box.querySelector(s);
    q("#pf-mod").onchange=e=>{const k=e.target.value;outro=k==="outro";ler();perf.modalidade=outro?q("#pf-mod-outro").value.trim():(SPORTS[k]?.nome||"");draw();if(outro)box.querySelector("#pf-mod-outro")?.focus()};
    function ler(){perf.categoria=limitar(q("#pf-cat").value.trim(),60);perf.estilo=limitar(q("#pf-est").value.trim(),120);perf.mao=q("#pf-mao").value;perf.lesoes=limitar(q("#pf-les").value,3000);if(outro)perf.modalidade=limitar(q("#pf-mod-outro").value.trim(),40);if(podeAn)AN.forEach(([id,k])=>anamnese[k]=limitar(q("#"+id).value,3000))}
    q("#pf-f").onsubmit=async e=>{e.preventDefault();ler();const btn=q("[type=submit]");btn.disabled=true;
      try{const upd={perfil:perf,atualizadoEm:new Date().toISOString()};if(podeAn)upd.anamnese=anamnese;await FB.updateDoc(`prontuarios/${aid}`,upd);await FB.updateDoc(`usuarios/${aid}`,{esporte:perf.modalidade||""}).catch(()=>{});const a=atletas.find(x=>x._id===aid);if(a)a.esporte=perf.modalidade||"";auditar("perfil_atualizado",{id:aid,nome:a?.nome},podeAn?"perfil e anamnese":"perfil");avisar("Ficha salva.","ok")}
      catch(x){avisar("Não foi possível salvar. Os dados continuam na tela.","erro")}btn.disabled=false};
  }
}

/* ── Pressão em competição ── */
function modCriticos(c,atletas){
  phdr(c,"Análise de choking","Pressão em Competição");
  let aid="",sp=sportOf(""),partidas=[],salv=false;
  const novo=()=>({torneio:"",data:"",resultado:"Vitória",confianca:"5",placar:"",adversario:"",colocacao:"",marca:""});let nova=novo();
  const box=el("div");seletorAtleta(c,atletas,async v=>{aid=v;if(!aid){box.innerHTML="";return}box.innerHTML=carregandoHTML();const[pp,es]=await Promise.all([FB.getDocs(`prontuarios/${aid}/partidas`),carregarEsporte(aid,atletas.find(a=>a._id===aid)||null)]);partidas=ordDesc(pp||[],RES.data);sp=sportOf(es);nova=novo();drawCrit()});c.appendChild(box);
  function drawCrit(){
    const st=statsComp(partidas,sp),tiles=[["Total",st.t,"#EEF1F8"],...statTiles(st,sp).filter(([l])=>l!==sp.eventos)];
    const lbl=(t,f)=>`<label class="slbl" for="${f}" style="display:block;margin-bottom:7px">${t}</label>`;
    const opc=sp.modo==="ved"?["Vitória","Empate","Derrota"]:["Vitória","Derrota"],sym={"Vitória":"●","Empate":"=","Derrota":"✕"};
    const press=(st.cw!=null&&st.cl!=null)?`<div class="am-note" style="margin-bottom:16px;display:flex;align-items:center;gap:8px;flex-wrap:wrap"><span style="color:var(--y)">${AMI("focus")}</span>Confiança média: <strong style="color:#4ade80;font-family:'JetBrains Mono',monospace">${st.cw.toFixed(1)}</strong> nas vitórias · <strong style="color:#EC7896;font-family:'JetBrains Mono',monospace">${st.cl.toFixed(1)}</strong> ${sp.modo==="pos"?"fora do pódio":"nas derrotas"}</div>`:"";
    box.innerHTML=`<div class="dk-crit"><form id="cr-f" class="glass am-cs" style="border-top:3px solid var(--y);height:fit-content"><h3 class="am-cs-t">Lançar ${esc(sp.evento)}</h3>${sp.nome?`<div style="margin:0 0 16px">${sportChip(sp.nome,"sm")}</div>`:""}<div style="display:flex;flex-direction:column;gap:13px"><div>${lbl(sp.comp,"cr-torn")}<input type="text" id="cr-torn" maxlength="120" value="${esc(nova.torneio)}" placeholder="${esc(sp.compEx)}" style="font-size:13px"></div><div>${lbl("Data","cr-data")}<input type="date" id="cr-data" value="${esc(nova.data)}" style="font-size:13px"></div>${sp.modo==="pos"
      ?`<div style="display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.3fr);gap:9px"><div>${lbl("Colocação","cr-col")}<input type="number" min="1" max="999" id="cr-col" value="${esc(nova.colocacao)}" placeholder="Ex: 2" style="font-size:13px;font-family:'JetBrains Mono',monospace"></div><div>${lbl(sp.placar,"cr-marca")}<input type="text" id="cr-marca" maxlength="40" value="${esc(nova.marca)}" placeholder="${esc(sp.placarEx)}" style="font-size:13px;font-family:'JetBrains Mono',monospace"></div></div>`
      :`<div>${lbl("Desfecho","cr-res")}<select id="cr-res" style="font-size:12px">${opc.map(v=>`<option value="${v}"${nova.resultado===v?" selected":""}>${sym[v]} ${v}</option>`).join("")}</select></div><div style="display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:9px"><div>${lbl(sp.placar,"cr-placar")}<input type="text" id="cr-placar" maxlength="40" value="${esc(nova.placar)}" placeholder="${esc(sp.placarEx)}" style="font-size:13px"></div><div>${lbl("Adversário","cr-adv")}<input type="text" id="cr-adv" maxlength="80" value="${esc(nova.adversario)}" placeholder="Opcional" style="font-size:13px"></div></div>`}<div>${lbl("Confiança (1-10)","cr-conf")}<input type="number" min="1" max="10" id="cr-conf" value="${esc(nova.confianca)}" style="font-size:13px;font-family:'JetBrains Mono',monospace"></div><button class="btn-y" type="submit" ${salv?"disabled":""}>${salv?"Computando...":"Gravar "+esc(sp.evento)}</button></div></form><div class="glass am-cs" style="display:flex;flex-direction:column;max-height:680px;min-width:0"><div style="display:grid;grid-template-columns:repeat(${tiles.length},minmax(0,1fr));gap:10px;margin-bottom:${press?12:20}px;flex-shrink:0">${tiles.map(([l,v,col])=>`<div style="background:rgba(0,0,0,.3);border:1px solid rgba(255,255,255,.05);border-radius:3px;padding:14px 8px;text-align:center"><span class="slbl" style="display:block;margin-bottom:5px">${l}</span><strong style="font-family:'JetBrains Mono',monospace;font-size:${tiles.length>4?28:36}px;color:${col};line-height:1">${v}</strong></div>`).join("")}</div>${press}<div class="cs" style="flex:1;overflow-y:auto;display:flex;flex-direction:column;gap:11px">${partidas.length?"":vazioHTML(nenhumEvento(sp)+".")}${partidas.map(p=>{const det=RES.det(p);return`<div style="background:rgba(0,0,0,.35);border:1px solid rgba(255,255,255,.05);border-radius:3px;padding:16px"><div style="display:flex;align-items:center;gap:11px;margin-bottom:10px"><div style="width:3px;height:36px;background:${RES.cor(p)};flex-shrink:0"></div><div style="flex:1;min-width:0"><p style="font-family:'Archivo',sans-serif;font-stretch:125%;font-style:italic;font-weight:900;font-size:18px;color:#EEF1F8;margin:0 0 2px;text-transform:uppercase">${esc(p.torneio||"—")}</p>${RES.data(p)?`<span style="font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--muted)">${_fmtD(RES.data(p))}</span>`:""}</div><button type="button" data-del-p="${esc(p._id)}" class="am-ico r" aria-label="Apagar registro">${AMI("trash")}</button></div><div style="display:grid;grid-template-columns:repeat(${det?3:2},minmax(0,1fr));background:rgba(0,0,0,.4);border-radius:2px;overflow:hidden;border:1px solid rgba(255,255,255,.04)"><div style="padding:10px 7px;text-align:center;border-right:1px solid rgba(255,255,255,.04)"><span class="slbl" style="display:block;margin-bottom:4px;font-size:9px">Resultado</span><strong style="font-family:'JetBrains Mono',monospace;font-size:15px;color:${RES.cor(p)}">${esc(RES.label(p))}</strong></div>${det?`<div style="padding:10px 7px;text-align:center;border-right:1px solid rgba(255,255,255,.04)"><span class="slbl" style="display:block;margin-bottom:4px;font-size:9px">${sp.modo==="pos"?esc(sp.placar):"Placar"}</span><strong style="font-family:'JetBrains Mono',monospace;font-size:13px;color:#EEF1F8">${esc(det)}</strong></div>`:""}<div style="padding:10px 7px;text-align:center"><span class="slbl" style="display:block;margin-bottom:4px;font-size:9px">Confiança</span><strong style="font-family:'JetBrains Mono',monospace;font-size:15px;color:#60a5fa">${p.confianca?esc(String(p.confianca))+"/10":"—"}</strong></div></div>${p.relato?`<div style="background:rgba(0,209,255,.03);border:1px solid rgba(0,209,255,.09);border-radius:2px;padding:10px 12px;margin-top:10px"><span class="slbl" style="display:block;margin-bottom:5px;color:rgba(0,209,255,.55)">Diário do atleta</span><p style="font-size:12px;color:#B4BBE0;margin:0;white-space:pre-wrap">${esc(p.relato)}</p></div>`:""}</div>`}).join("")}</div></div></div>`;
    const q=s=>box.querySelector(s);
    q("#cr-torn").oninput=e=>nova.torneio=e.target.value;q("#cr-data").oninput=e=>nova.data=e.target.value;q("#cr-conf").oninput=e=>nova.confianca=e.target.value;
    if(q("#cr-res"))q("#cr-res").onchange=e=>nova.resultado=e.target.value;if(q("#cr-placar"))q("#cr-placar").oninput=e=>nova.placar=e.target.value;if(q("#cr-adv"))q("#cr-adv").oninput=e=>nova.adversario=e.target.value;if(q("#cr-col"))q("#cr-col").oninput=e=>nova.colocacao=e.target.value;if(q("#cr-marca"))q("#cr-marca").oninput=e=>nova.marca=e.target.value;
    q("#cr-f").onsubmit=async e=>{e.preventDefault();if(!nova.torneio.trim())return avisar("Informe a competição.","erro");salv=true;drawCrit();
      const doc={torneio:limitar(nova.torneio.trim(),120),data:nova.data,confianca:Math.min(10,Math.max(1,Math.round(+nova.confianca)||5)),esporte:limitar(sp.nome||"",60),dataRegistro:new Date().toISOString(),registradoPor:APP.user.nome};
      if(sp.modo==="pos"){if(+nova.colocacao>0)doc.colocacao=Math.min(999,Math.round(+nova.colocacao));if(nova.marca.trim())doc.marca=limitar(nova.marca.trim(),40);doc.resultado=+nova.colocacao>0?`${Math.round(+nova.colocacao)}º lugar`:"Participação"}
      else{doc.resultado=nova.resultado;if(nova.placar.trim())doc.placar=limitar(nova.placar.trim(),40);if(nova.adversario.trim())doc.adversario=limitar(nova.adversario.trim(),80)}
      try{const r=await FB.addDoc(`prontuarios/${aid}/partidas`,doc);partidas.unshift({_id:r.id,...doc});nova={...novo(),data:nova.data}}catch(x){avisar("Não foi possível gravar.","erro")}salv=false;drawCrit()};
    box.querySelectorAll("[data-del-p]").forEach(b=>b.onclick=async()=>{if(!await confirmar("Apagar este registro de competição?",{ok:"Apagar",perigo:true}))return;try{await FB.deleteDoc(`prontuarios/${aid}/partidas/${b.dataset.delP}`);partidas=partidas.filter(p=>p._id!==b.dataset.delP);auditar("competicao_apagada",{id:aid,nome:nomeAtleta(atletas,aid)});drawCrit()}catch(x){avisar("Não foi possível apagar.","erro")}});
  }
}

/* ── histórico rápido (modal) ── */
async function renderHistoricoAtleta(uid,box){
  box.innerHTML=carregandoHTML();
  try{const[ck,pts,es]=await Promise.all([FB.query("checkins","pacienteId","==",uid,"data","DESCENDING",300),FB.getDocs(`prontuarios/${uid}/partidas`),carregarEsporte(uid)]);
    const sp=sportOf(es),checkins=ordDesc(ck,r=>r.data).slice(0,10),partidas=ordDesc(pts,RES.data);box.innerHTML="";
    if(!checkins.length&&!partidas.length){box.innerHTML=vazioHTML("Nenhum dado registrado ainda.");return}
    if(sp.nome){const s=el("div");s.style.marginBottom="16px";s.innerHTML=sportChip(sp.nome);box.appendChild(s)}
    if(checkins.length){const h=el("div");h.innerHTML=`<h4 class="tm-subtitle">${AMI("notebook")} Check-ins recentes</h4>${checkins.map(r=>`<div class="historico-badge"><span class="historico-data">${fmtDate(r.data)}</span>${ckMetricas(r)}${r.pontoForte?`<p style="font-size:12px;color:#B4BBE0;margin:6px 0 0;font-style:italic">“${esc(r.pontoForte)}”</p>`:""}</div>`).join("")}`;box.appendChild(h)}
    if(partidas.length){const h=el("div");h.style.marginTop="18px";h.innerHTML=`<h4 class="tm-subtitle">${AMI("trophy")} ${registradosEv(sp)}</h4>${partidas.slice(0,5).map(p=>`<div class="historico-badge" style="border-left-color:${RES.cor(p)}"><span class="historico-data">${esc(p.torneio||"")}${RES.data(p)?" · "+_fmtD(RES.data(p)):""}</span><div style="display:flex;gap:14px;flex-wrap:wrap"><span style="color:${RES.cor(p)}">${esc(RES.label(p))}</span>${RES.det(p)?`<span>${esc(RES.det(p))}</span>`:""}<span>Confiança: <strong style="color:#60a5fa">${p.confianca?esc(String(p.confianca)):"-"}/10</strong></span></div></div>`).join("")}`;box.appendChild(h)}
  }catch(e){box.innerHTML=vazioHTML("Não foi possível carregar o histórico.")}
}

/* ── Central S.O.S ── */
async function modSOS(c,atletas){
  phdr(c,"Acionamentos e respostas","Central S.O.S",`<p class="am-dica" style="margin-top:6px">O painel confere novos alertas a cada 15 segundos, com som e aviso do navegador. Para receber com o app fechado, ative as notificações deste aparelho em Minha conta.</p>`);
  const box=el("div");box.innerHTML=carregandoHTML();c.appendChild(box);
  const contatos={};
  async function draw(){
    const desde=new Date(Date.now()-60*864e5).toISOString();
    const l=ordDesc(await FB.query("sos_alertas","data",">=",desde,"data","DESCENDING",300),s=>s.data);
    const ativos=l.filter(s=>s.status==="pendente"||s.status==="em_atendimento"),hist=l.filter(s=>!(s.status==="pendente"||s.status==="em_atendimento"));
    await Promise.all(ativos.filter(s=>!(s.pacienteId in contatos)).map(async s=>{contatos[s.pacienteId]=await FB.getDoc(`usuarios/${s.pacienteId}`).catch(()=>null)}));
    if(!box.isConnected)return;
    const resp=l.filter(s=>s.respondidoEm).map(s=>(_dt(s.respondidoEm)-_dt(s.data))/60000).filter(m=>m>=0);
    const tel=t=>t?`<a href="tel:${esc(String(t).replace(/[^\d+]/g,""))}">${esc(t)}</a>`:"—";
    box.innerHTML=`<div class="dk-kpis">${[["Ativos agora",ativos.length,ativos.length?"#EC7896":"#4ade80"],["Acionamentos (60 dias)",l.filter(s=>s.status!=="cancelado").length,"#EEF1F8"],["Tempo médio de resposta",resp.length?Math.round(resp.reduce((s,x)=>s+x,0)/resp.length)+" min":"—","var(--y)"],["Cancelados pelo atleta",l.filter(s=>s.status==="cancelado").length,"#B4BBE0"]].map(([a,b,cor])=>`<div class="pro-card" style="padding:16px;text-align:center"><span class="slbl" style="display:block;margin-bottom:6px">${a}</span><strong style="font-family:'JetBrains Mono',monospace;font-size:26px;color:${cor}">${b}</strong></div>`).join("")}</div>
    <div style="display:flex;flex-direction:column;gap:12px;margin-bottom:24px">${ativos.length?ativos.map(s=>{const u=contatos[s.pacienteId]||{},ce=u.contatoEmergencia||{},rs=u.responsavel||{};return`<div class="glass am-cs" style="border-left:4px solid ${s.status==="pendente"?"#D2456C":"#f59e0b"}"><div class="am-cs-hd"><h3 class="am-cs-t" style="margin:0">${AMI("alert")} ${esc(s.nome||"Atleta")}</h3><span class="am-tag ${s.status==="pendente"?"r":""}">${s.status==="pendente"?"aguardando resposta":"em atendimento · "+esc(s.respondidoPorNome||"")}</span><span class="am-dica">${_fmtDH(s.data)} · ${haQuanto(s.data)}</span></div>${s.mensagem?`<div class="am-trunfo" style="margin-bottom:10px"><span>Mensagem do atleta</span><p>${esc(s.mensagem)}</p></div>`:""}<div class="am-grid3" style="margin-bottom:12px"><div><span class="slbl">Telefone do atleta</span><p style="margin:4px 0 0;font-size:13px">${tel(u.telefone||s.telefone)}</p></div><div><span class="slbl">Contato de emergência</span><p style="margin:4px 0 0;font-size:13px">${esc(ce.nome||"—")}${ce.telefone?" · "+tel(ce.telefone):""}</p></div><div><span class="slbl">Responsável legal</span><p style="margin:4px 0 0;font-size:13px">${u.consentimento?.menor?`${esc(rs.nome||u.consentimento.responsavelNome||"—")}${rs.telefone?" · "+tel(rs.telefone):""}`:"—"}</p></div></div><div style="display:flex;gap:8px;flex-wrap:wrap">${s.status==="pendente"?`<button type="button" class="btn-y" data-assumir="${esc(s._id)}" style="width:auto;padding:10px 18px">Estou cuidando</button>`:""}<button type="button" class="btn-sec" data-encerrar="${esc(s._id)}" style="width:auto">Encerrar atendimento</button></div></div>`}).join(""):`<div class="am-note">${AMI("check")} Nenhum S.O.S ativo agora.</div>`}</div>
    <div class="glass am-cs"><h3 class="am-cs-t">${AMI("clock")} Histórico (60 dias)</h3>${hist.length?`<div class="am-tab-wrap"><table class="am-tab"><thead><tr><th>Data</th><th>Atleta</th><th>Situação</th><th>Atendido por</th><th>Resposta</th><th>Desfecho</th></tr></thead><tbody>${hist.map(s=>{const m=s.respondidoEm?Math.round((_dt(s.respondidoEm)-_dt(s.data))/60000):null;return`<tr><td class="nw">${_fmtDH(s.data)}</td><td>${esc(s.nome||"")}</td><td>${s.status==="cancelado"?"Cancelado pelo atleta":"Encerrado"}</td><td>${esc(s.respondidoPorNome||s.resolvidoPorNome||"—")}</td><td>${m!=null?m+" min":"—"}</td><td>${esc(s.desfecho||"")}</td></tr>`}).join("")}</tbody></table></div>`:vazioHTML("Sem acionamentos encerrados no período.")}</div>`;
    box.querySelectorAll("[data-assumir]").forEach(b=>b.onclick=async()=>{_sosAtivos=l.filter(s=>s.status==="pendente"||s.status==="em_atendimento");await assumirSOS(b.dataset.assumir);draw()});
    box.querySelectorAll("[data-encerrar]").forEach(b=>b.onclick=()=>{_sosAtivos=l.filter(s=>s.status==="pendente"||s.status==="em_atendimento");encerrarSOS(b.dataset.encerrar)});
  }
  APP.atualizarCentralSOS=draw;draw();
}

/* ════ PAINEL DA EQUIPE — análises, comparativo, insights, exportação e notificações ════ */
const CHART_BASE={responsive:true,maintainAspectRatio:false,plugins:{legend:{labels:{color:"#C9CEEA",font:{family:"JetBrains Mono",size:11},boxWidth:12}}}};
const eixo=()=>({ticks:{color:"#9AA3CF",font:{family:"JetBrains Mono",size:10}},grid:{color:"rgba(154,163,207,.1)"}});
const RADAR_EIXOS=[["Foco",r=>r.foco],["Energia",r=>r.energia],["Sono",r=>r.sono],["Humor",r=>r.humor],["Calma",r=>r.estresse==null?null:11-r.estresse],["Corpo sem dor",r=>r.dor==null?null:10-r.dor]];
const mediaFn=(l,f)=>{const v=l.map(f).filter(x=>x!=null&&!isNaN(x));return v.length?v.reduce((s,x)=>s+ +x,0)/v.length:null};

/* ── Dashboard Analítico (métricas reais, sem fórmulas inventadas) ── */
async function modDashChart(c,atletas){
  phdr(c,"Visualização analítica","Dashboard Analítico",`<p class="am-dica" style="margin-top:6px">Calma = 11 − estresse · Corpo sem dor = 10 − dor. Assim, no radar, quanto mais longe do centro, melhor. Adesão = dias com check-in no período.</p>`);
  let dias=30,aid="",gr=[];
  const box=el("div");seletorAtleta(c,atletas,v=>{aid=v;load()},{extra:`<select id="dc-per" aria-label="Período" style="width:auto"><option value="14">14 dias</option><option value="30" selected>30 dias</option><option value="90">90 dias</option></select>`});c.appendChild(box);
  c.querySelector("#dc-per").onchange=e=>{dias=+e.target.value;load()};
  async function load(){
    gr.forEach(g=>g.destroy());gr=[];if(!aid){box.innerHTML="";return}box.innerHTML=carregandoHTML();
    const desde=new Date(Date.now()-dias*864e5).toISOString();
    const[cks,trs]=await Promise.all([FB.query("checkins","pacienteId","==",aid,"data","DESCENDING",1000),FB.getDocs(`atletas/${aid}/treinos`)]);
    const l=cks.filter(r=>String(r.data)>=desde),rev=[...l].reverse();
    if(!l.length){box.innerHTML=vazioHTML("Nenhum check-in no período.");return}
    const diasCk=new Set(l.map(r=>diaISO(r.data))).size,ades=Math.round(diasCk/dias*100),A=analiseCarga(trs||[]);
    box.innerHTML=`<div class="dk-kpis">${[["Prontidão média",fmt1(mediaFn(l,prontidao)),"var(--y)"],["Adesão",ades+"%","#4ade80"],...CK_CAMPOS.map(([k,lb,cor])=>[lb+" (média)",fmt1(mediaCampo(l,k)),cor]),["Carga 7 dias",A.aguda+" UA","#EEF1F8"]].map(([a,b,cor])=>`<div class="pro-card" style="padding:16px;text-align:center"><span class="slbl" style="display:block;margin-bottom:6px">${a}</span><strong style="font-family:'JetBrains Mono',monospace;font-size:24px;color:${cor}">${b}</strong></div>`).join("")}</div><div class="dk-2"><div class="pro-card" style="padding:22px"><h4 class="am-cs-t">Perfil do período</h4><div class="chart-wrapper"><canvas id="dc-rad" aria-label="Radar das médias"></canvas></div></div><div class="pro-card" style="padding:22px"><h4 class="am-cs-t">Evolução diária <span class="am-dica" style="font-style:normal;text-transform:none;font-weight:400;letter-spacing:0;margin-left:auto">toque na legenda para mostrar estresse e dor</span></h4><div class="chart-wrapper"><canvas id="dc-lin" aria-label="Evolução dos check-ins"></canvas></div></div></div>`;
    if(!await garantirChart())return;
    gr.push(new Chart(box.querySelector("#dc-rad"),{type:"radar",data:{labels:RADAR_EIXOS.map(x=>x[0]),datasets:[{label:"Média do período",data:RADAR_EIXOS.map(([,f])=>mediaFn(l,f)),borderColor:"#00D1FF",backgroundColor:"rgba(0,209,255,.1)",pointBackgroundColor:"#00D1FF",pointStyle:"rect",borderWidth:2}]},options:{...CHART_BASE,scales:{r:{angleLines:{color:"rgba(154,163,207,.16)"},grid:{color:"rgba(154,163,207,.16)"},pointLabels:{color:"#C9CEEA",font:{family:"JetBrains Mono",size:10,weight:"600"}},ticks:{display:false},suggestedMin:0,suggestedMax:10}}}}));
    gr.push(new Chart(box.querySelector("#dc-lin"),{type:"line",data:{labels:rev.map(r=>_dt(r.data).toLocaleDateString("pt-BR",{day:"2-digit",month:"short"})),datasets:CK_CAMPOS.map(([k,lb,cor])=>({label:lb,data:rev.map(r=>r[k]??null),borderColor:cor,backgroundColor:"transparent",tension:.25,borderWidth:2,pointRadius:2,pointStyle:"rect",spanGaps:true,hidden:k==="estresse"||k==="dor"}))},options:{...CHART_BASE,scales:{x:eixo(),y:{...eixo(),min:0,max:10}}}}));
  }
}

/* ── Comparativo multi-atleta ── */
async function modComparativo(c,atletas){
  phdr(c,"Lado a lado","Comparativo Multi-Atleta");
  let sel=new Set(atletas.slice(0,4).map(a=>a._id)),dias=30,gr=null;
  const f=el("div","glass am-cs");f.innerHTML=`<div class="am-cs-hd"><h3 class="am-cs-t" style="margin:0">${AMI("users")} Escolha até 8 atletas</h3><select id="cp-per" aria-label="Período" style="width:auto"><option value="14">14 dias</option><option value="30" selected>30 dias</option><option value="90">90 dias</option></select><button type="button" class="btn-y" id="cp-ok" style="width:auto;padding:9px 16px;font-size:12px">Comparar</button></div><div class="am-chips" id="cp-l">${atletas.map(a=>`<label class="am-chk"><input type="checkbox" value="${esc(a._id)}"${sel.has(a._id)?" checked":""}><span>${esc(a.nome)}</span></label>`).join("")}</div>`;
  c.appendChild(f);const box=el("div");box.style.marginTop="18px";c.appendChild(box);
  f.querySelectorAll("#cp-l input").forEach(i=>i.onchange=()=>{if(i.checked){if(sel.size>=8){i.checked=false;return avisar("Máximo de 8 atletas.","info")}sel.add(i.value)}else sel.delete(i.value)});
  f.querySelector("#cp-per").onchange=e=>dias=+e.target.value;f.querySelector("#cp-ok").onclick=comparar;
  async function comparar(){
    if(!sel.size){box.innerHTML=vazioHTML("Escolha pelo menos um atleta.");return}box.innerHTML=carregandoHTML("Reunindo dados...");
    const desde=new Date(Date.now()-dias*864e5).toISOString(),ids=[...sel];
    const cks=(await FB.query("checkins","data",">=",desde,"data","DESCENDING",3000)).filter(r=>sel.has(r.pacienteId));
    const extra=await Promise.all(ids.map(id=>Promise.all([FB.getDocs(`atletas/${id}/treinos`),FB.getDocs(`prontuarios/${id}/partidas`),FB.getDocs(`atletas/${id}/lesoes`)])));
    const linhas=ids.map((id,i)=>{const a=atletas.find(x=>x._id===id)||{},l=cks.filter(r=>r.pacienteId===id),[tr,pt,ls]=extra[i],A=analiseCarga(tr||[]),sp=sportOf(a.esporte),ptp=(pt||[]).filter(p=>String(RES.data(p))>=desde),st=statsComp(ptp,sp);
      return{a,n:l.length,ades:Math.round(new Set(l.map(r=>diaISO(r.data))).size/dias*100),pr:mediaFn(l,prontidao),m:Object.fromEntries(CK_CAMPOS.map(([k])=>[k,mediaCampo(l,k)])),A,st,les:(ls||[]).filter(lesaoAtiva).length,alertas:l.filter(r=>alertasCk(r).length).length}}).sort((x,y)=>(y.pr??-1)-(x.pr??-1));
    box.innerHTML=`<div class="glass am-cs"><div class="am-tab-wrap"><table class="am-tab"><thead><tr><th>Atleta</th><th class="c">Adesão</th><th class="c">Prontidão</th>${CK_CAMPOS.map(([,lb])=>`<th class="c">${lb.split(" ")[0]}</th>`).join("")}<th class="c">Alertas</th><th class="c">Carga 7d</th><th class="c">Ag:Cr</th><th class="c">Competições</th><th class="c">Lesões ativas</th></tr></thead><tbody>${linhas.map(x=>`<tr><td><b>${esc(x.a.nome||"")}</b>${x.a.esporte?`<div class="am-dica">${esc(x.a.esporte)}</div>`:""}</td><td class="c">${x.ades}%</td><td class="c"><b style="color:var(--y)">${fmt1(x.pr)}</b></td>${CK_CAMPOS.map(([k])=>`<td class="c">${fmt1(x.m[k])}</td>`).join("")}<td class="c">${x.alertas?`<span class="am-tag r">${x.alertas}</span>`:"0"}</td><td class="c">${x.A.aguda}</td><td class="c" style="color:${ZONA_COR[x.A.suficiente?x.A.zona:"sem"]}">${x.A.suficiente&&x.A.acwr!=null?fmt1(x.A.acwr):"—"}</td><td class="c">${x.st.t}${x.st.aprov!=null?` · ${x.st.aprov}%`:""}</td><td class="c">${x.les||"—"}</td></tr>`).join("")}</tbody></table></div><p class="am-dica" style="margin-top:8px">Período: últimos ${dias} dias. Médias dos check-ins; Ag:Cr = relação aguda:crônica da carga de treino.</p></div><div class="pro-card" style="padding:22px;margin-top:16px"><h4 class="am-cs-t">Prontidão e adesão</h4><div class="chart-wrapper" style="height:280px"><canvas id="cp-ch"></canvas></div></div>`;
    auditar("comparativo_gerado",{},plural(ids.length,"atleta","atletas"));
    if(!await garantirChart())return;if(gr)gr.destroy();
    gr=new Chart(box.querySelector("#cp-ch"),{type:"bar",data:{labels:linhas.map(x=>primeiroNome(x.a.nome)),datasets:[{label:"Prontidão (0–10)",data:linhas.map(x=>x.pr),backgroundColor:"#00D1FF",yAxisID:"y"},{label:"Adesão (%)",data:linhas.map(x=>x.ades),backgroundColor:"rgba(210,69,108,.75)",yAxisID:"y2"}]},options:{...CHART_BASE,scales:{x:eixo(),y:{...eixo(),min:0,max:10,position:"left"},y2:{...eixo(),min:0,max:100,position:"right",grid:{display:false}}}}});
  }
  comparar();
}

/* ── Insights (tendências) — regras transparentes + resumo opcional com IA, sem nomes ── */
async function modInsights(c,atletas){
  phdr(c,"Tendências da equipe","Insights",`<p class="am-dica" style="margin-top:6px">Compara os últimos 7 dias com as 3 semanas anteriores de cada atleta. As regras estão escritas em cada alerta.</p>`);
  const box=el("div");box.innerHTML=carregandoHTML("Analisando check-ins...");c.appendChild(box);
  const cks=await FB.query("checkins","data",">=",new Date(Date.now()-28*864e5).toISOString(),"data","DESCENDING",4000);
  const corte=new Date(Date.now()-7*864e5).toISOString();
  const res=atletas.map(a=>{const l=cks.filter(r=>r.pacienteId===a._id),rec=l.filter(r=>r.data>=corte),base=l.filter(r=>r.data<corte),s=[];
    const pr7=mediaFn(rec,prontidao),prB=mediaFn(base,prontidao),dif=pr7!=null&&prB!=null?pr7-prB:null;
    if(dif!=null&&dif<=-1.5)s.push({g:2,t:"Queda de prontidão",d:`${fmt1(prB)} → ${fmt1(pr7)} (queda de ${fmt1(-dif)})`});
    const es7=mediaCampo(rec,"estresse"),esB=mediaCampo(base,"estresse");if(es7!=null&&(es7>=7||(esB!=null&&es7-esB>=2)))s.push({g:es7>=8?2:1,t:"Estresse em alta",d:`média de ${fmt1(es7)} nos últimos 7 dias${esB!=null?` (antes ${fmt1(esB)})`:""}`});
    const so7=mediaCampo(rec,"sono"),soB=mediaCampo(base,"sono");if(so7!=null&&(so7<=5||(soB!=null&&soB-so7>=1.5)))s.push({g:1,t:"Sono em queda",d:`média de ${fmt1(so7)}${soB!=null?` (antes ${fmt1(soB)})`:""}`});
    const dor=rec.filter(r=>+r.dor>=4);if(dor.length>=3)s.push({g:2,t:"Dor persistente",d:`${dor.length} check-ins com dor ≥ 4 em 7 dias${dor[0].dorLocal?` (${dor[0].dorLocal})`:""}`});
    const hu=rec.filter(r=>r.humor!=null&&+r.humor<=3);if(hu.length>=2)s.push({g:2,t:"Humor baixo recorrente",d:`${hu.length} check-ins com humor ≤ 3`});
    const ult=l[0];const sem=ult?Math.floor((Date.now()-_dt(ult.data))/864e5):null;if(sem===null||sem>=5)s.push({g:1,t:"Sem check-in",d:sem===null?"nenhum registro em 28 dias":`último há ${sem} dias`});
    const sub=dif!=null&&dif>=1.5?{t:"Melhora de prontidão",d:`${fmt1(prB)} → ${fmt1(pr7)}`}:null;
    return{a,s,sub,pr7,prB,n7:rec.length,es7,so7}});
  const crit=res.filter(r=>r.s.some(x=>x.g===2)),aten=res.filter(r=>!r.s.some(x=>x.g===2)&&r.s.length),bons=res.filter(r=>r.sub);
  const card=r=>`<div class="am-nota" style="border-left:3px solid ${r.s.some(x=>x.g===2)?"#D2456C":"#f59e0b"}"><div class="am-nota-h"><b style="color:#EEF1F8">${esc(r.a.nome)}</b>${r.a.esporte?sportChip(r.a.esporte,"sm"):""}<span class="am-dica" style="margin-left:auto">prontidão 7d: ${fmt1(r.pr7)}</span></div>${r.s.map(x=>`<p style="margin:6px 0 0;font-size:13px;color:#EEF1F8">${AMI(x.g===2?"alert":"trend")} <b>${x.t}</b> <span class="am-dica">${esc(x.d)}</span></p>`).join("")}</div>`;
  box.innerHTML=`<div class="dk-2" style="align-items:start"><div class="glass am-cs"><h3 class="am-cs-t">${AMI("alert")} Prioridade · ${crit.length}</h3><div style="display:flex;flex-direction:column;gap:10px">${crit.length?crit.map(card).join(""):vazioHTML("Nenhum sinal forte nesta semana.")}</div><h3 class="am-cs-t" style="margin-top:20px">${AMI("trend")} Acompanhar · ${aten.length}</h3><div style="display:flex;flex-direction:column;gap:10px">${aten.length?aten.map(card).join(""):vazioHTML("Nada a acompanhar.")}</div></div><div style="display:flex;flex-direction:column;gap:16px"><div class="glass am-cs"><h3 class="am-cs-t">${AMI("heart")} Em melhora · ${bons.length}</h3>${bons.length?bons.map(r=>`<div class="dk-row"><span style="font-size:13px;color:#EEF1F8;flex:1">${esc(r.a.nome)}</span><span class="am-dica">${esc(r.sub.d)}</span></div>`).join(""):vazioHTML("Sem melhoras marcantes.")}</div><div class="glass am-cs"><h3 class="am-cs-t">${AMI("ai")} Resumo com IA</h3><p class="am-dica" style="margin:0 0 10px">Os nomes não saem do app: cada atleta vira um código (A1, A2...) antes do envio, e o resumo volta com os nomes trocados aqui no seu aparelho.</p><button type="button" class="btn btn-magic" id="in-ia" style="width:100%">${AMI("ai")} Gerar resumo da semana</button><div id="in-res" style="margin-top:12px"></div></div></div></div>`;
  box.querySelector("#in-ia").onclick=async e=>{const b=e.currentTarget;b.disabled=true;b.textContent="Gerando...";const mapa={};
    const dados=res.map((r,i)=>{const cod="A"+(i+1);mapa[cod]=r.a.nome;return{codigo:cod,modalidade:r.a.esporte||"",checkins7d:r.n7,prontidao7d:r.pr7,prontidaoAntes:r.prB,estresse7d:r.es7,sono7d:r.so7,sinais:r.s.map(x=>x.t+": "+x.d)}});
    try{const r=await FB.call("insightsIA",{atletas:dados});let t=esc(r&&r.texto||"");Object.entries(mapa).sort((a,b)=>b[0].length-a[0].length).forEach(([k,n])=>{t=t.replace(new RegExp("\\b"+k+"\\b","g"),`<b>${esc(n)}</b>`)});box.querySelector("#in-res").innerHTML=`<p class="am-pre">${t}</p><p class="am-dica" style="margin-top:8px">Gerado por IA a partir dos números acima. Confira antes de agir.</p>`;auditar("insights_ia",{},plural(dados.length,"atleta","atletas"))}
    catch(x){box.querySelector("#in-res").innerHTML=`<p class="am-note">${x.code==="REDE"||x.status===404?"O resumo com IA precisa das funções de servidor do guia de instalação.":"Não foi possível gerar agora."}</p>`}
    b.disabled=false;b.innerHTML=`${AMI("ai")} Gerar resumo da semana`};
}

/* ── Exportar dados (CSV) ── */
async function modExportar(c,atletas){
  phdr(c,"Dados brutos para planilhas","Exportar Dados (CSV)");
  const CONJ={checkins:"Check-ins",competicoes:"Competições",treinos:"Treinos e carga",lesoes:"Lesões",avaliacoes:"Avaliações físicas",sessoes:"Sessões da agenda",sos:"Acionamentos S.O.S",atletas:"Cadastro de atletas"};
  const f=el("form","glass am-cs");f.style.maxWidth="640px";
  f.innerHTML=`<div style="display:flex;flex-direction:column;gap:14px"><div><label class="slbl" for="ex-c">Conjunto de dados</label><select id="ex-c">${Object.entries(CONJ).map(([k,v])=>`<option value="${k}">${v}</option>`).join("")}</select></div><div class="am-grid2"><div><label class="slbl" for="ex-a">Atleta</label><select id="ex-a"><option value="">Todos os atletas</option>${atletas.map(a=>`<option value="${esc(a._id)}">${esc(a.nome)}</option>`).join("")}</select></div><div><label class="slbl" for="ex-p">Período</label><select id="ex-p"><option value="30">30 dias</option><option value="90" selected>90 dias</option><option value="365">12 meses</option><option value="0">Tudo</option></select></div></div><div class="am-note">${AMI("lock")} O arquivo tem dados pessoais e de saúde. Guarde em local protegido, compartilhe só com quem precisa e apague quando não usar mais. Toda exportação fica registrada na auditoria.</div><p class="am-dica" id="ex-st" role="status"></p><button class="btn-y" type="submit">${AMI("download")} Gerar CSV</button></div>`;
  c.appendChild(f);
  f.onsubmit=async e=>{e.preventDefault();const q=s=>f.querySelector(s),cj=q("#ex-c").value,aid=q("#ex-a").value,dias=+q("#ex-p").value,btn=q("[type=submit]"),st=t=>q("#ex-st").textContent=t;
    const desde=dias?new Date(Date.now()-dias*864e5).toISOString():"0000",alvo=aid?atletas.filter(a=>a._id===aid):atletas,nm=id=>nomeAtleta(atletas,id),dentro=d=>!dias||String(d||"")>=desde.slice(0,String(d||"").length>10?undefined:10);
    btn.disabled=true;let linhas=[],cols=[];
    const porAtleta=async(sub,fn)=>{for(let i=0;i<alvo.length;i++){st(`Lendo ${i+1} de ${alvo.length} atletas...`);const l=await FB.getDocs(sub(alvo[i]._id));l.forEach(x=>linhas.push(fn(x,alvo[i])))}};
    try{
      if(cj==="checkins"){const l=aid?await FB.query("checkins","pacienteId","==",aid,"data","DESCENDING",5000):await FB.query("checkins","data",">=",desde,"data","DESCENDING",10000);linhas=l.filter(r=>dentro(r.data));cols=[[r=>_fmtDH(r.data),"Data"],[r=>r.nome||nm(r.pacienteId),"Atleta"],...CK_CAMPOS.map(([k,lb])=>[k,lb]),[r=>fmt1(prontidao(r)),"Prontidão"],["dorLocal","Local da dor"],["pontoForte","Trunfo do dia"]]}
      else if(cj==="competicoes"){await porAtleta(id=>`prontuarios/${id}/partidas`,(p,a)=>({...p,_at:a.nome}));linhas=linhas.filter(p=>dentro(RES.data(p)));cols=[[p=>_fmtD(RES.data(p)),"Data"],["_at","Atleta"],["torneio","Competição"],[p=>RES.label(p),"Resultado"],["placar","Placar"],["marca","Marca"],["adversario","Adversário"],["confianca","Confiança"],["relato","Relato"]]}
      else if(cj==="treinos"){await porAtleta(id=>`atletas/${id}/treinos`,(t,a)=>({...t,_at:a.nome}));linhas=linhas.filter(t=>dentro(dataTreino(t)));cols=[[t=>_fmtD(dataTreino(t)),"Data"],["_at","Atleta"],["titulo","Sessão"],[t=>TREINO_TIPOS[t.tipo]||t.tipo,"Tipo"],[t=>TREINO_STATUS[t.status]||t.status,"Situação"],["duracaoPrevista","Duração prevista (min)"],[t=>t.realizado?.duracao??"","Duração real (min)"],[t=>t.realizado?.pse??"","PSE"],[t=>cargaDe(t)||"","Carga (UA)"],[t=>t.origem==="atleta"?"Atleta":t.autorNome||"","Registrado por"]]}
      else if(cj==="lesoes"){await porAtleta(id=>`atletas/${id}/lesoes`,(l,a)=>({...l,_at:a.nome}));linhas=linhas.filter(l=>dentro(l.data)&&!l.anulada);cols=[[l=>_fmtD(l.data),"Data"],["_at","Atleta"],["local","Local"],["lado","Lado"],["tipo","Tipo"],["mecanismo","Mecanismo"],[l=>LESAO_GRAV[l.gravidade]||"","Gravidade"],[l=>LESAO_STATUS[l.status]||"","Situação"],[l=>_fmtD(l.retornoPrevisto),"Retorno previsto"],[l=>_fmtD(l.retornoEm),"Liberado em"],["diasAfastado","Dias fora"],["autorNome","Registrado por"]]}
      else if(cj==="avaliacoes"){await porAtleta(id=>`atletas/${id}/avaliacoes`,(x,a)=>({...x,_at:a.nome}));linhas=linhas.filter(x=>dentro(x.data)&&!x.anulada);cols=[[x=>_fmtD(x.data),"Data"],["_at","Atleta"],[x=>nomeAval(x),"Teste"],["valor","Resultado"],[x=>x.unidade||avalTeste(x.teste)[2],"Unidade"],["notas","Observações"],["autorNome","Registrado por"]]}
      else if(cj==="sessoes"){const l=await FB.query("agenda","dataHora",">=",dias?desde.slice(0,16):"2000-01-01","dataHora","ASCENDING",5000);linhas=l.filter(s=>!aid||s.atletaId===aid);cols=[[s=>_fmtDH(s.dataHora),"Início"],[s=>_fmtDH(s.dataHoraFim),"Fim"],["nome","Atleta"],["titulo","Sessão"],["profissionalNome","Profissional"],[s=>s.modo==="presencial"?"Presencial":"Online","Formato"],["local","Local"]]}
      else if(cj==="sos"){const l=await FB.query("sos_alertas","data",">=",dias?desde:"2000-01-01","data","DESCENDING",5000);linhas=l.filter(s=>!aid||s.pacienteId===aid);cols=[[s=>_fmtDH(s.data),"Data"],["nome","Atleta"],["status","Situação"],["respondidoPorNome","Atendido por"],[s=>s.respondidoEm?Math.round((_dt(s.respondidoEm)-_dt(s.data))/60000):"","Minutos até a resposta"],["desfecho","Desfecho"]]}
      else{linhas=alvo;cols=[["nome","Nome"],["email","E-mail"],["esporte","Modalidade"],[a=>(PLANS[a.plano]||PLANS.starter).label,"Plano"],[a=>_fmtD(a.dataCadastro),"Cadastro"],[a=>_fmtD(a.ultimoAcesso),"Último acesso"],[a=>a.consentimento?.versao||"pendente","Termos aceitos"]]}
      if(!linhas.length){st("Nada encontrado com esse filtro.");btn.disabled=false;return}
      baixarArquivo(csv(linhas,cols),`acemind-${cj}-${today()}.csv`,"text/csv;charset=utf-8");st(`${plural(linhas.length,"linha exportada","linhas exportadas")}.`);
      auditar("exportacao_csv",{id:aid,nome:aid?nm(aid):"todos"},`${CONJ[cj]} · ${linhas.length} linhas`);
    }catch(x){st("Não foi possível gerar o arquivo.")}
    btn.disabled=false};
}

/* ── Notificações (push) — aparelho, preferências e teste ── */
const b64u8=b=>{const p="=".repeat((4-b.length%4)%4),s=atob((b+p).replace(/-/g,"+").replace(/_/g,"/"));return Uint8Array.from(s,ch=>ch.charCodeAt(0))};
async function hashCurto(t){try{const h=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(t));return Array.from(new Uint8Array(h)).slice(0,16).map(b=>b.toString(16).padStart(2,"0")).join("")}catch(e){return"d"+Math.abs([...t].reduce((a,ch)=>(a*31+ch.charCodeAt(0))|0,7)).toString(16)}}
async function painelPush(box,{extras=false}={}){
  if(!box)return;const staff=isStaff(APP.cargo),uid=APP.user.uid;
  const suporte="serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&!window.AM_DEMO,vapid=CFG.publico.vapidPublica||"";
  const doc=await FB.getDoc(`push_subs/${uid}`).catch(()=>null);
  const pad=staff?{sos:true,checkinRisco:false,dorForte:false,lesao:false,sessao:true}:{lembreteCheckin:true,horaCheckin:"08:00",sessao:true,sosRecebido:true};
  const prefs={...pad,...(doc&&doc.prefs||{})};
  let reg=null,sub=null;if(suporte){reg=await navigator.serviceWorker.getRegistration().catch(()=>null);sub=reg?await reg.pushManager.getSubscription().catch(()=>null):null}
  const ios=/iPad|iPhone|iPod/.test(navigator.userAgent),inst=window.navigator.standalone===true||(window.matchMedia&&matchMedia("(display-mode: standalone)").matches);
  const eliteOk=!staff||ehAdmin()||canStaffAccess(APP.plan,"staffNotificacoes");
  const op=(k,l,dica,trava)=>`<label class="am-check${trava?" off":""}"><input type="checkbox" data-pref="${k}"${prefs[k]?" checked":""}${trava?" disabled":""}><span>${l}${dica?`<i class="am-dica" style="display:block">${dica}</i>`:""}</span></label>`;
  const estado=!suporte?(window.AM_DEMO?"Notificações funcionam no app publicado.":ios&&!inst?"No iPhone, instale o app na tela de início (iOS 16.4 ou mais recente) para receber notificações.":"Este navegador não aceita notificações."):!vapid?"A administração ainda não configurou as notificações (chave pública em Segurança & Privacidade).":Notification.permission==="denied"?"As notificações estão bloqueadas nas configurações do navegador para este site.":sub?"Ativadas neste aparelho.":"Desativadas neste aparelho.";
  box.innerHTML=`<p class="am-dica" style="margin:0 0 10px">${AMI(sub?"check":"bell")} ${estado}</p>${suporte&&vapid&&Notification.permission!=="denied"?`<div class="am-acoes" style="margin-bottom:12px">${sub?`<button class="btn-sec" type="button" id="pu-off">Desativar neste aparelho</button><button class="btn-sec" type="button" id="pu-test">Enviar teste</button>`:`<button class="btn-y" type="button" id="pu-on" style="width:auto;padding:10px 18px">${AMI("bell")} Ativar neste aparelho</button>`}</div>`:""}<div style="display:flex;flex-direction:column;gap:8px">${staff?`${op("sos","Alertas de S.O.S","Sempre ligado para a equipe.",true)}${op("sessao","Lembrete das minhas sessões","30 minutos antes.")}${extras||eliteOk?`${op("checkinRisco","Check-in com sinal de alerta","Foco, energia ou sono ≤ 4, humor ≤ 3 ou estresse ≥ 8.",!eliteOk)}${op("dorForte","Dor forte no check-in","Dor ≥ 7.",!eliteOk)}${op("lesao","Nova lesão registrada","",!eliteOk)}`:""}`:`${op("lembreteCheckin","Lembrete diário do check-in","Só se você ainda não registrou no dia.")}<div style="padding-left:30px"><label class="slbl" for="pu-hora">Horário</label><select id="pu-hora" style="width:auto">${["06:00","07:00","08:00","09:00","10:00","12:00","18:00","20:00","21:00"].map(h=>`<option${prefs.horaCheckin===h?" selected":""}>${h}</option>`).join("")}</select></div>${op("sessao","Lembrete das sessões marcadas","30 minutos antes.")}${op("sosRecebido","Aviso quando a equipe receber meu S.O.S","")}`}</div><button class="btn-sec" type="button" id="pu-salvar" style="margin-top:12px;width:auto">Salvar preferências</button>`;
  const q=s=>box.querySelector(s);
  const salvarPrefs=async()=>{box.querySelectorAll("[data-pref]").forEach(i=>prefs[i.dataset.pref]=i.disabled?prefs[i.dataset.pref]:i.checked);if(q("#pu-hora"))prefs.horaCheckin=q("#pu-hora").value;if(staff)prefs.sos=true;await FB.setDoc(`push_subs/${uid}`,{prefs,cargo:APP.cargo,atualizadoEm:new Date().toISOString()})};
  q("#pu-salvar").onclick=async()=>{try{await salvarPrefs();avisar("Preferências salvas.","ok")}catch(e){avisar("Não foi possível salvar.","erro")}};
  q("#pu-on")?.addEventListener("click",async()=>{try{const p=await Notification.requestPermission();if(p!=="granted"){avisar("Permissão negada. Você pode liberar nas configurações do navegador.","info");return painelPush(box,{extras})}
    reg=reg||await navigator.serviceWorker.ready;const s=await reg.pushManager.subscribe({userVisibleOnly:true,applicationServerKey:b64u8(vapid)});const j=s.toJSON(),id=await hashCurto(j.endpoint);
    await FB.setDoc(`push_subs/${uid}/dispositivos/${id}`,{endpoint:j.endpoint,keys:j.keys||{},ua:navigator.userAgent.slice(0,160),criadoEm:new Date().toISOString()});await salvarPrefs();auditar("push_ativado");avisar("Notificações ativadas neste aparelho.","ok")}catch(e){registrarErro("push",e);avisar("Não foi possível ativar as notificações.","erro")}painelPush(box,{extras})});
  q("#pu-off")?.addEventListener("click",async()=>{try{const j=sub.toJSON(),id=await hashCurto(j.endpoint);await sub.unsubscribe();await FB.deleteDoc(`push_subs/${uid}/dispositivos/${id}`).catch(()=>{});avisar("Notificações desativadas neste aparelho.","info")}catch(e){avisar("Não foi possível desativar.","erro")}painelPush(box,{extras})});
  q("#pu-test")?.addEventListener("click",async e=>{const _b=e.currentTarget;_b.disabled=true;try{const r=await FB.call("testarPush",{});avisar(r&&r.enviados?`Teste enviado para ${plural(r.enviados,"aparelho","aparelhos")}.`:"Nenhum aparelho recebeu o teste.","info")}catch(x){avisar("O envio precisa das funções de servidor do guia de instalação.","erro")}_b.disabled=false});
}
async function modNotificacoes(c){
  phdr(c,"Alertas no celular e no computador","Notificações");
  const w=el("div","dk-2");w.style.alignItems="start";w.innerHTML=`<div class="glass am-cs"><h3 class="am-cs-t">${AMI("bell")} Este aparelho</h3><div id="nt-push"></div></div><div class="glass am-cs"><h3 class="am-cs-t">${AMI("phone")} Como funciona</h3><ul class="tm-list" style="font-size:13px"><li>Os alertas chegam mesmo com o app fechado, em cada aparelho onde você ativar.</li><li>S.O.S sempre avisa toda a equipe. Os outros alertas você escolhe ao lado.</li><li>Com o painel aberto, um S.O.S também toca um som e aparece no topo da tela.</li><li>No iPhone, instale o app na tela de início (iOS 16.4+) antes de ativar.</li></ul></div>`;
  c.appendChild(w);painelPush(w.querySelector("#nt-push"),{extras:true});
}

/* ── Comparar análises de vídeo ── */
async function modVideoComp(c,atletas){
  phdr(c,"Antes e depois","Comparar Análises de Vídeo");
  const box=el("div");seletorAtleta(c,atletas,abrir);c.appendChild(box);
  async function abrir(aid){
    if(!aid){box.innerHTML="";return}box.innerHTML=carregandoHTML();
    const l=ordDesc(await FB.todos("ia_analises","atletaId",aid),a=>a.dataAnalise);
    if(l.length<2){box.innerHTML=vazioHTML(l.length?"Só há uma análise salva. Faça outra para comparar.":"Nenhuma análise salva para este atleta.");return}
    const opt=s=>l.map((a,i)=>`<option value="${i}"${i===s?" selected":""}>${_fmtD(a.dataAnalise)}${a.origem==="atleta"?" · enviada pelo atleta":""}</option>`).join("");
    box.innerHTML=`<div class="am-filtros"><div><label class="slbl" for="vc-a">Antes</label><select id="vc-a">${opt(1)}</select></div><div><label class="slbl" for="vc-b">Depois</label><select id="vc-b">${opt(0)}</select></div><button class="btn-sec" type="button" id="vc-pdf" style="width:auto;align-self:end">${AMI("file")} Exportar PDF</button></div><div id="vc-area"></div>`;
    const norm=s=>_norm(s).replace(/\s+/g," ").trim(),parecido=(x,lista)=>lista.some(y=>{const a=norm(x),b=norm(y);return a===b||(a.length>12&&(a.includes(b)||b.includes(a)))});
    const draw=()=>{const A=l[+box.querySelector("#vc-a").value],B=l[+box.querySelector("#vc-b").value];
      const col=(k,t,ic)=>{const a=A[k]||[],b=B[k]||[];return`<div class="glass am-cs"><h3 class="am-cs-t">${AMI(ic)} ${t}</h3><div class="am-grid2"><div><span class="slbl">Antes · ${_fmtD(A.dataAnalise)}</span><ul class="tm-list" style="font-size:13px">${a.map(x=>`<li>${esc(x)}${k==="pontosAMelhorar"&&!parecido(x,b)?` <span class="am-tag g">não aparece depois</span>`:""}</li>`).join("")||"<li>—</li>"}</ul></div><div><span class="slbl">Depois · ${_fmtD(B.dataAnalise)}</span><ul class="tm-list" style="font-size:13px">${b.map(x=>`<li>${esc(x)}${!parecido(x,a)?` <span class="am-tag">novo</span>`:""}</li>`).join("")||"<li>—</li>"}</ul></div></div></div>`};
      box.querySelector("#vc-area").innerHTML=`<div style="display:flex;flex-direction:column;gap:14px">${col("pontosFortes","Pontos fortes","check")}${col("pontosAMelhorar","Pontos a melhorar","alert")}${col("planosDeAcao","Plano de ação","focus")}<div class="glass am-cs"><h3 class="am-cs-t">${AMI("clipboard")} Resumos</h3><div class="am-grid2"><p class="am-pre">${esc(A.resumo||"—")}</p><p class="am-pre">${esc(B.resumo||"—")}</p></div></div></div>`};
    box.querySelector("#vc-a").onchange=draw;box.querySelector("#vc-b").onchange=draw;draw();
    box.querySelector("#vc-pdf").onclick=()=>{gerarPDF("vc-area","comparacao-video-"+_norm(nomeAtleta(atletas,aid)).replace(/ /g,"-"));auditar("exportacao_pdf",{id:aid,nome:nomeAtleta(atletas,aid)},"comparação de vídeo")};
  }
}

/* ════ SISTEMA (administração) ════ */

/* ── Usuários & Planos — cargos por profissão, administração, desativação ── */
async function modAdmin(c){
  phdr(c,"Controle de acesso","Usuários & Planos",`<p class="am-dica" style="margin-top:6px">Cargo define o que cada pessoa vê (por profissão). "Admin" dá acesso a esta área de sistema, mas não abre registros clínicos de outras profissões. Só a administração muda cargos e planos.</p>`);
  let usuarios=[],filtro="",cargoF="";
  const top=el("div","dk-actions");top.innerHTML=`<div style="display:flex;gap:8px;flex-wrap:wrap"><input type="search" id="ad-busca" placeholder="Buscar nome ou e-mail..." aria-label="Buscar usuário" style="width:min(260px,100%)"><select id="ad-cargo" aria-label="Filtrar por cargo" style="width:auto"><option value="">Todos os cargos</option>${Object.entries(CARGOS).map(([k,v])=>`<option value="${k}">${v}</option>`).join("")}</select></div><button class="btn-y" type="button" id="ad-conv" style="width:auto;padding:10px 18px;font-size:12px">${AMI("mail")} Convidar membro da equipe</button>`;
  c.appendChild(top);const box=el("div","glass am-cs");c.appendChild(box);
  async function load(){box.innerHTML=carregandoHTML();usuarios=(await FB.getDocs("usuarios")).sort((a,b)=>(a.nome||"").localeCompare(b.nome||"","pt-BR"));draw()}
  const nAdmins=()=>usuarios.filter(u=>!u.desativado&&(u.cargo==="admin"||u.admin===true)).length;
  function draw(){
    const f=_norm(filtro),l=usuarios.filter(u=>(!cargoF||u.cargo===cargoF)&&(!f||_norm((u.nome||"")+" "+(u.email||"")).includes(f)));
    box.innerHTML=`<h3 class="am-cs-t">${AMI("users")} ${plural(l.length,"usuário","usuários")}</h3><div class="pro-table-container"><table class="pro-table"><thead><tr><th>Usuário</th><th>Cargo</th><th>Admin</th><th>Plano</th><th>Situação</th><th>Ações</th></tr></thead><tbody>${l.map(u=>{const eu=u._id===APP.user.uid;return`<tr data-u="${esc(u._id)}"${u.desativado?' class="am-off"':""}><td><strong style="font-family:'Archivo',sans-serif;font-stretch:110%;font-style:italic;font-weight:800;color:#EEF1F8;text-transform:uppercase">${esc(u.nome||"—")}</strong>${eu?' <span class="am-tag">você</span>':""}<br><span style="font-size:11px;color:var(--muted)">${esc(u.email||"")}</span><br><span class="am-dica">${u.ultimoAcesso?"último acesso "+_fmtD(u.ultimoAcesso):"nunca entrou"}${u.consentimento?` · termos ${esc(u.consentimento.versao||"")}`:" · sem aceite"}</span></td><td><select data-f="cargo" aria-label="Cargo de ${esc(u.nome)}">${Object.entries(CARGOS).map(([k,v])=>`<option value="${k}"${u.cargo===k?" selected":""}>${v}</option>`).join("")}</select></td><td><input type="checkbox" data-f="admin" aria-label="Administração"${u.admin===true||u.cargo==="admin"?" checked":""}${u.cargo==="admin"?" disabled":""}></td><td><select data-f="plano" aria-label="Plano de ${esc(u.nome)}">${Object.entries(PLANS).map(([k,p])=>`<option value="${k}"${(u.plano||"starter")===k?" selected":""}>${p.label}</option>`).join("")}</select></td><td>${u.desativado?'<span class="am-tag r">desativado</span>':'<span class="am-tag g">ativo</span>'}</td><td><div style="display:flex;gap:6px;flex-wrap:wrap"><button type="button" class="btn-y" data-a="salvar" style="width:auto;padding:8px 14px;font-size:11px">Salvar</button><button type="button" class="btn-sec" data-a="acesso" style="width:auto;padding:8px 10px;font-size:11px" title="Enviar link para criar ou trocar a senha">${AMI("mail")}</button><button type="button" class="btn-sec" data-a="sessoes" style="width:auto;padding:8px 10px;font-size:11px" title="Encerrar sessões em todos os aparelhos">${AMI("logout")}</button>${eu?"":`<button type="button" class="${u.desativado?"btn-sec":"btn-danger"}" data-a="ativar" style="width:auto;padding:8px 10px;font-size:11px">${u.desativado?"Reativar":"Desativar"}</button>`}</div></td></tr>`}).join("")}</tbody></table></div>`;
    box.querySelectorAll("tr[data-u]").forEach(tr=>{const u=usuarios.find(x=>x._id===tr.dataset.u),q=s=>tr.querySelector(s);
      q('[data-f="cargo"]').onchange=e=>{const adm=q('[data-f="admin"]');adm.disabled=e.target.value==="admin";if(e.target.value==="admin")adm.checked=true};
      q('[data-a="salvar"]').onclick=async e=>{const cargo=q('[data-f="cargo"]').value,plano=q('[data-f="plano"]').value,admin=cargo==="admin"||q('[data-f="admin"]').checked,eu=u._id===APP.user.uid;
        const eraAdmin=u.cargo==="admin"||u.admin===true;if(eraAdmin&&!admin&&nAdmins()<=1)return avisar("Precisa haver pelo menos uma pessoa na administração.","erro");
        if(eu&&!admin)return avisar("Você não pode tirar o próprio acesso de administração. Peça para outro admin.","erro");
        if(u.cargo!==cargo&&!await confirmar(`Mudar ${u.nome} de ${CARGOS[u.cargo]||u.cargo} para ${CARGOS[cargo]}? O que a pessoa pode ver muda na hora.`,{ok:"Mudar cargo"}))return;
        const b=e.currentTarget;b.disabled=true;
        try{await FB.updateDoc(`usuarios/${u._id}`,{cargo,plano,admin});auditar("usuario_alterado",{id:u._id,nome:u.nome},`cargo ${u.cargo}→${cargo} · plano ${u.plano||"starter"}→${plano} · admin ${eraAdmin}→${admin}`);Object.assign(u,{cargo,plano,admin});APP.atletasCache=null;b.textContent="Salvo ✓";setTimeout(()=>{b.textContent="Salvar";b.disabled=false},1800);if(eu){APP.cargo=cargo;APP.plan=plano;APP.adminFlag=admin}}
        catch(x){b.disabled=false;avisar("Não foi possível salvar: "+(x.status===403?"sem permissão.":"tente de novo."),"erro")}};
      q('[data-a="acesso"]').onclick=()=>reenviarAcesso(u.email,u.nome);
      q('[data-a="sessoes"]').onclick=async()=>{if(!await confirmar(`Encerrar as sessões de ${u.nome} em todos os aparelhos?`,{ok:"Encerrar"}))return;try{await FB.call("encerrarSessoes",{uid:u._id});auditar("sessoes_encerradas",{id:u._id,nome:u.nome});avisar("Sessões encerradas.","ok")}catch(x){avisar("Precisa das funções de servidor do guia de instalação.","erro")}};
      q('[data-a="ativar"]')?.addEventListener("click",async()=>{const des=!u.desativado;if(des&&(u.cargo==="admin"||u.admin)&&nAdmins()<=1)return avisar("Não dá para desativar a última pessoa da administração.","erro");
        if(!await confirmar(des?`Desativar ${u.nome}? A pessoa perde o acesso imediatamente. Os dados são mantidos.`:`Reativar ${u.nome}?`,{ok:des?"Desativar":"Reativar",perigo:des}))return;
        try{let viaFn=false;try{await FB.call("desativarUsuario",{uid:u._id,desativar:des});viaFn=true}catch(x){await FB.updateDoc(`usuarios/${u._id}`,{desativado:des})}
          u.desativado=des;auditar(des?"usuario_desativado":"usuario_reativado",{id:u._id,nome:u.nome},viaFn?"login bloqueado":"bloqueado no banco");APP.atletasCache=null;draw()}catch(x){avisar("Não foi possível alterar.","erro")}});
    });
  }
  top.querySelector("#ad-busca").oninput=e=>{filtro=e.target.value;draw()};top.querySelector("#ad-cargo").onchange=e=>{cargoF=e.target.value;draw()};
  top.querySelector("#ad-conv").onclick=()=>{
    const m=abrirModal(`<h3 class="ptitle" style="font-size:22px;margin:0 0 6px">Convidar para a equipe</h3><p class="am-dica" style="margin:0 0 14px">A pessoa recebe um e-mail para criar a senha e, no primeiro acesso, assina o compromisso de sigilo.</p><form id="ce-f" style="display:flex;flex-direction:column;gap:11px"><input type="text" id="ce-nome" maxlength="80" placeholder="Nome completo" required><input type="email" id="ce-email" maxlength="120" placeholder="E-mail profissional" required><div class="am-grid2"><select id="ce-cargo" aria-label="Cargo">${CARGOS_EQUIPE.map(k=>`<option value="${k}">${CARGOS[k]}</option>`).join("")}</select><select id="ce-plano" aria-label="Plano">${Object.entries(PLANS).map(([k,p])=>`<option value="${k}">${p.label}</option>`).join("")}</select></div><input type="text" id="ce-reg" maxlength="40" placeholder="Registro profissional (CREF, CREFITO, CRM, CRP...) — opcional"><label class="am-check"><input type="checkbox" id="ce-adm"><span>Também faz parte da administração</span></label><div style="display:flex;justify-content:flex-end;gap:10px"><button class="btn-sec" type="button" data-fechar style="width:auto">Cancelar</button><button class="btn-y" type="submit" style="width:auto;padding:10px 18px">Enviar convite</button></div></form>`,{largura:520});
    const q=s=>m.el.querySelector(s);
    q("#ce-f").onsubmit=async e=>{e.preventDefault();const nome=limitar(q("#ce-nome").value.trim(),80),email=q("#ce-email").value.trim().toLowerCase(),cargo=q("#ce-cargo").value;
      if(nome.length<3||!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))return avisar("Confira nome e e-mail.","erro");
      const b=q("[type=submit]");b.disabled=true;
      try{await convidarUsuario({nome,email,cargo,plano:q("#ce-plano").value,admin:cargo==="admin"||q("#ce-adm").checked,extra:q("#ce-reg").value.trim()?{registroProfissional:limitar(q("#ce-reg").value.trim(),40)}:{}});avisar(`Convite enviado para ${email}.`,"ok");m.fechar();load()}
      catch(x){b.disabled=false;avisar(x.code==="EMAIL_EXISTS"?x.message:msgErroAuth(x.message),"erro")}};
  };
  load();
}

/* ── Permissões dos planos ── */
function modPermissoes(c){
  phdr(c,"Plano mínimo de cada recurso","Permissões dos Planos");
  let tab="atleta";const box=el("div","glass am-cs");c.appendChild(box);
  function draw(){
    const src=tab==="atleta"?FEATURES_DEFAULT:STAFF_FEATURES_DEFAULT,min=tab==="atleta"?FEAT_MIN:STAFF_FEAT_MIN;
    box.innerHTML=`<div class="tab-switch" style="margin-bottom:18px;max-width:420px"><button type="button" class="tab-btn${tab==="atleta"?" active":""}" data-t="atleta">App do atleta</button><button type="button" class="tab-btn${tab==="staff"?" active":""}" data-t="staff">Painel da equipe</button></div><div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(270px,1fr));gap:10px">${Object.entries(src).map(([k,f])=>`<div class="am-perm"><span style="font-size:16px;flex-shrink:0">${f.icon}</span><div style="flex:1;min-width:0"><p>${esc(f.label)}</p>${f.nota?`<i class="am-dica">${esc(f.nota)}</i>`:""}</div><select data-k="${k}" aria-label="Plano mínimo para ${esc(f.label)}">${Object.entries(PLANS).map(([pk,p])=>`<option value="${pk}"${(min[k]||f.min)===pk?" selected":""}>${p.label}</option>`).join("")}</select></div>`).join("")}</div><div style="display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap;margin-top:20px"><button type="button" class="btn-sec" id="pm-pad" style="width:auto">Restaurar padrão</button><button type="button" class="btn-y" id="pm-salvar" style="width:auto;padding:12px 28px">${AMI("save")} Salvar permissões</button></div>`;
    box.querySelectorAll("[data-t]").forEach(b=>b.onclick=()=>{tab=b.dataset.t;draw()});
    box.querySelectorAll("[data-k]").forEach(s=>s.onchange=()=>{(tab==="atleta"?FEAT_MIN:STAFF_FEAT_MIN)[s.dataset.k]=s.value;if(s.dataset.k==="sos"&&s.value!=="starter")avisar("Atenção: o S.O.S é um recurso de segurança. Bloquear por plano pode deixar atletas sem canal de ajuda.","info",7000)});
    box.querySelector("#pm-pad").onclick=()=>{Object.entries(src).forEach(([k,f])=>min[k]=f.min);draw()};
    box.querySelector("#pm-salvar").onclick=async e=>{const _b=e.currentTarget;_b.disabled=true;try{await FB.setDoc("config/permissoes",{features:{...FEAT_MIN},staffFeatures:{...STAFF_FEAT_MIN},atualizadoEm:new Date().toISOString(),atualizadoPor:APP.user.nome});auditar("permissoes_alteradas");avisar("Permissões salvas.","ok")}catch(x){avisar("Não foi possível salvar.","erro")}_b.disabled=false};
  }
  draw();
}

/* ── Segurança & Privacidade ── */
async function modSeguranca(c){
  phdr(c,"Configurações de proteção","Segurança & Privacidade");
  const[pu,se]=await Promise.all([FB.getDoc("config/publico").catch(()=>null),FB.getDoc("config/seguranca").catch(()=>null)]);
  const p={cadastroAberto:true,...(pu||{})},s={inatividadeMin:30,...(se||{})};
  const f=el("form");f.className="dk-2";f.style.alignItems="start";
  f.innerHTML=`<div class="glass am-cs"><h3 class="am-cs-t">${AMI("lock")} Acesso</h3><div style="display:flex;flex-direction:column;gap:14px"><div><label class="slbl" for="sg-in">Encerrar sessão da equipe após inatividade</label><select id="sg-in">${[10,15,20,30,45,60,120].map(m=>`<option value="${m}"${+s.inatividadeMin===m?" selected":""}>${m} minutos</option>`).join("")}</select><p class="am-dica">Protege prontuários em computadores compartilhados. Avisa 1 minuto antes.</p></div><label class="am-check"><input type="checkbox" id="sg-cad"${p.cadastroAberto!==false?" checked":""}><span>Permitir que atletas criem conta sozinhos<i class="am-dica" style="display:block">Desligado: só atletas convidados pela equipe entram. A regra do banco também bloqueia.</i></span></label></div></div><div class="glass am-cs"><h3 class="am-cs-t">${AMI("shield")} Privacidade (LGPD)</h3><div style="display:flex;flex-direction:column;gap:12px"><input type="text" id="sg-emp" maxlength="120" placeholder="Nome da empresa (controladora)" value="${esc(p.empresa||"")}" aria-label="Empresa"><input type="text" id="sg-dpo" maxlength="80" placeholder="Nome do encarregado de dados (DPO)" value="${esc(p.encarregadoNome||"")}" aria-label="Encarregado"><input type="email" id="sg-dpoe" maxlength="120" placeholder="E-mail de privacidade" value="${esc(p.encarregadoEmail||"")}" aria-label="E-mail de privacidade"><p class="am-dica">Aparece na Política de Privacidade. Termos na versão ${TERMOS_VERSAO} (modelo: valide com seu advogado).</p></div></div><div class="glass am-cs"><h3 class="am-cs-t">${AMI("bell")} Notificações push</h3><input type="text" id="sg-vapid" maxlength="200" placeholder="Chave pública VAPID" value="${esc(p.vapidPublica||"")}" aria-label="Chave pública VAPID" style="font-family:'JetBrains Mono',monospace;font-size:11px"><p class="am-dica" style="margin-top:6px">Gere com <code>npx web-push generate-vapid-keys</code>. A chave pública vai aqui; a privada fica só nas funções de servidor (guia de instalação).</p></div><div class="glass am-cs"><h3 class="am-cs-t">${AMI("check")} Proteções ativas no app</h3><ul class="tm-list" style="font-size:12.5px"><li>Sessão renovada automaticamente; aviso e saída quando expira.</li><li>Bloqueio no aparelho após 5 tentativas de senha erradas.</li><li>Senha forte no cadastro e redefinição por e-mail.</li><li>Textos dos usuários filtrados antes de aparecer na tela.</li><li>Política de segurança de conteúdo (CSP) e bibliotecas no próprio servidor.</li><li>Prontuário separado por profissão, com autor e data em cada registro.</li><li>Auditoria de acessos, exportações e mudanças de cargo.</li><li>Registros de erro sem conteúdo pessoal.</li></ul></div><div style="grid-column:1/-1;display:flex;justify-content:flex-end"><button class="btn-y" type="submit" style="width:auto;padding:12px 28px">${AMI("save")} Salvar configurações</button></div>`;
  c.appendChild(f);
  f.onsubmit=async e=>{e.preventDefault();const q=x=>f.querySelector(x),b=q("[type=submit]");b.disabled=true;
    const em=q("#sg-dpoe").value.trim();if(em&&!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(em)){b.disabled=false;return avisar("E-mail de privacidade inválido.","erro")}
    const vap=q("#sg-vapid").value.trim();if(vap&&!/^[A-Za-z0-9_-]{60,120}$/.test(vap)){b.disabled=false;return avisar("A chave VAPID pública parece inválida.","erro")}
    try{const np={...p,cadastroAberto:q("#sg-cad").checked,empresa:limitar(q("#sg-emp").value.trim(),120),encarregadoNome:limitar(q("#sg-dpo").value.trim(),80),encarregadoEmail:em,vapidPublica:vap,atualizadoEm:new Date().toISOString()};delete np._id;
      await Promise.all([FB.setDoc("config/publico",np),FB.setDoc("config/seguranca",{inatividadeMin:+q("#sg-in").value,atualizadoEm:new Date().toISOString(),atualizadoPor:APP.user.nome})]);
      CFG.publico=np;CFG.seguranca.inatividadeMin=+q("#sg-in").value;iniciarInatividade();auditar("seguranca_alterada",{},`inatividade ${q("#sg-in").value} min · cadastro ${np.cadastroAberto?"aberto":"fechado"}`);avisar("Configurações salvas.","ok")}
    catch(x){avisar("Não foi possível salvar.","erro")}b.disabled=false};
}

/* ── Auditoria ── */
const ACOES_TXT={login:"Entrou",logout:"Saiu",logout_inatividade:"Saiu por inatividade",conta_criada:"Criou conta",consentimento_aceito:"Aceitou os termos",prontuario_aberto:"Abriu prontuário",dossie_aberto:"Abriu dossiê",exportacao_pdf:"Exportou PDF",exportacao_csv:"Exportou CSV",dados_exportados_titular:"Baixou os próprios dados",registro_criado:"Criou registro clínico",registro_editado:"Editou registro clínico",registro_anulado:"Anulou registro clínico",registro_adendo:"Fez adendo",diagnostico_atualizado:"Atualizou plano psicológico",usuario_alterado:"Mudou cargo ou plano",usuario_desativado:"Desativou usuário",usuario_reativado:"Reativou usuário",atleta_convidado:"Convidou atleta",equipe_convidada:"Convidou membro da equipe",permissoes_alteradas:"Mudou permissões",seguranca_alterada:"Mudou segurança",sos_assumido:"Assumiu S.O.S",sos_encerrado:"Encerrou S.O.S",sessoes_encerradas:"Encerrou sessões",lgpd_resposta:"Respondeu pedido LGPD"};
async function modAuditoria(c){
  phdr(c,"Quem fez o quê, e quando","Auditoria",`<p class="am-dica" style="margin-top:6px">Registros não podem ser apagados nem alterados, nem pela administração.</p>`);
  const f=el("div","am-filtros");f.innerHTML=`<div><label class="slbl" for="au-per">Período</label><select id="au-per"><option value="1">24 horas</option><option value="7" selected>7 dias</option><option value="30">30 dias</option><option value="90">90 dias</option></select></div><div><label class="slbl" for="au-txt">Filtrar</label><input type="search" id="au-txt" placeholder="Pessoa, ação ou atleta..."></div><button class="btn-sec" type="button" id="au-csv" style="width:auto;align-self:end">${AMI("download")} CSV</button>`;
  c.appendChild(f);const box=el("div","glass am-cs");c.appendChild(box);let l=[];
  async function load(){box.innerHTML=carregandoHTML();l=await FB.query("auditoria","data",">=",new Date(Date.now()-(+f.querySelector("#au-per").value)*864e5).toISOString(),"data","DESCENDING",2000);draw()}
  const filtra=()=>{const t=_norm(f.querySelector("#au-txt").value);return t?l.filter(a=>_norm([a.porNome,a.porCargo,a.acao,ACOES_TXT[a.acao],a.alvoNome,a.detalhe].join(" ")).includes(t)):l};
  function draw(){const x=filtra();box.innerHTML=x.length?`<p class="am-dica" style="margin-bottom:8px">${plural(x.length,"registro","registros")}${l.length>=2000?" (limite de 2000; use um período menor)":""}</p><div class="am-tab-wrap"><table class="am-tab"><thead><tr><th>Quando</th><th>Quem</th><th>Ação</th><th>Atleta / alvo</th><th>Detalhe</th></tr></thead><tbody>${x.map(a=>`<tr><td class="nw">${_fmtDH(a.data)}</td><td>${esc(a.porNome||"")}<div class="am-dica">${esc(CARGOS[a.porCargo]||a.porCargo||"")}</div></td><td>${esc(ACOES_TXT[a.acao]||a.acao)}</td><td>${esc(a.alvoNome||"")}</td><td class="am-dica">${esc(a.detalhe||"")}</td></tr>`).join("")}</tbody></table></div>`:vazioHTML("Nenhum registro no período.")}
  f.querySelector("#au-per").onchange=load;f.querySelector("#au-txt").oninput=draw;
  f.querySelector("#au-csv").onclick=()=>{const x=filtra();if(!x.length)return;baixarArquivo(csv(x,[[a=>_fmtDH(a.data),"Quando"],["porNome","Quem"],[a=>CARGOS[a.porCargo]||a.porCargo,"Cargo"],[a=>ACOES_TXT[a.acao]||a.acao,"Ação"],["alvoNome","Alvo"],["detalhe","Detalhe"]]),`auditoria-${today()}.csv`,"text/csv;charset=utf-8");auditar("exportacao_csv",{},"auditoria "+x.length)};
  load();
}

/* ── Pedidos LGPD ── */
async function modLGPD(c){
  phdr(c,"Direitos dos titulares","Pedidos LGPD",`<p class="am-dica" style="margin-top:6px">Prazo de resposta recomendado: até 15 dias. Registros clínicos têm prazo legal de guarda (conselhos profissionais) e não são apagados no pedido de exclusão, só bloqueados.</p>`);
  const box=el("div");box.innerHTML=carregandoHTML();c.appendChild(box);
  const TIPO={excluir:"Exclusão da conta",corrigir:"Correção de dados",exportar:"Cópia dos dados",revogar:"Revogação de consentimento"},ST={aberta:"Aberto",em_andamento:"Em andamento",concluida:"Concluído",recusada:"Recusado"};
  async function load(){const l=await FB.getDocs("solicitacoes_lgpd");const o=l.sort((a,b)=>(a.status==="aberta"?0:a.status==="em_andamento"?1:2)-(b.status==="aberta"?0:b.status==="em_andamento"?1:2)||String(b.criadoEm).localeCompare(String(a.criadoEm)));
    box.innerHTML=o.length?`<div style="display:flex;flex-direction:column;gap:12px">${o.map(s=>{const d=Math.floor((Date.now()-_dt(s.criadoEm))/864e5);return`<div class="glass am-cs" style="border-left:3px solid ${s.status==="aberta"?"#EC7896":s.status==="em_andamento"?"#f59e0b":"#4ade80"}"><div class="am-cs-hd"><h3 class="am-cs-t" style="margin:0">${esc(TIPO[s.tipo]||s.tipo)}</h3><span class="am-tag ${s.status==="aberta"?"r":s.status==="concluida"?"g":""}">${ST[s.status]||esc(s.status)}</span><span class="am-dica">${_fmtD(s.criadoEm)} · há ${plural(d,"dia","dias")}${(s.status==="aberta"||s.status==="em_andamento")&&d>=15?" · prazo vencido":""}</span></div><p style="margin:0 0 6px;font-size:13px;color:#EEF1F8">${esc(s.nome||"")} · ${esc(s.email||"")}</p>${s.detalhe?`<p class="am-pre" style="margin-bottom:8px">${esc(s.detalhe)}</p>`:""}${s.resposta?`<p class="am-dica">Resposta: ${esc(s.resposta)}</p>`:""}${s.status==="concluida"||s.status==="recusada"?"":`<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px">${s.status==="aberta"?`<button type="button" class="btn-sec" data-s="${esc(s._id)}" data-st="em_andamento" style="width:auto">Em andamento</button>`:""}${s.tipo==="exportar"?`<button type="button" class="btn-sec" data-exp="${esc(s.uid)}" style="width:auto">${AMI("download")} Gerar arquivo</button>`:""}${s.tipo==="excluir"?`<button type="button" class="btn-danger" data-exc="${esc(s.uid)}" data-id="${esc(s._id)}">Executar exclusão</button>`:""}<button type="button" class="btn-y" data-s="${esc(s._id)}" data-st="concluida" style="width:auto;padding:9px 16px">Concluir</button><button type="button" class="btn-sec" data-s="${esc(s._id)}" data-st="recusada" style="width:auto">Recusar</button></div>`}</div>`}).join("")}</div>`:vazioHTML("Nenhum pedido recebido.");
    box.querySelectorAll("[data-s]").forEach(b=>b.onclick=()=>responder(o.find(x=>x._id===b.dataset.s),b.dataset.st));
    box.querySelectorAll("[data-exp]").forEach(b=>b.onclick=async()=>{b.disabled=true;try{const d=await coletarMeusDados(b.dataset.exp);baixarArquivo(JSON.stringify(d,null,2),`dados-titular-${today()}.json`,"application/json");auditar("exportacao_titular_admin",{id:b.dataset.exp,nome:d.cadastro?.nome||""});avisar("Arquivo gerado. Registros clínicos de cada área são fornecidos pelo profissional responsável.","info",8000)}catch(x){avisar("Não foi possível gerar.","erro")}b.disabled=false});
    box.querySelectorAll("[data-exc]").forEach(b=>b.onclick=async()=>{if(!await confirmar("Executar a exclusão? A conta de acesso é removida e os dados não clínicos são apagados. Registros clínicos ficam bloqueados pelo prazo legal. Não dá para desfazer.",{ok:"Excluir conta",perigo:true}))return;b.disabled=true;try{await FB.call("excluirConta",{uid:b.dataset.exc,manterClinico:true});auditar("conta_excluida",{id:b.dataset.exc});await FB.updateDoc(`solicitacoes_lgpd/${b.dataset.id}`,{status:"concluida",resposta:"Conta excluída. Registros clínicos mantidos pelo prazo legal, com acesso bloqueado.",respondidoEm:new Date().toISOString(),respondidoPor:APP.user.nome});load()}catch(x){b.disabled=false;avisar("A exclusão precisa das funções de servidor do guia de instalação.","erro")}});
  }
  function responder(s,st){if(!s)return;const m=abrirModal(`<h3 class="ptitle" style="font-size:20px;margin:0 0 10px">${st==="concluida"?"Concluir pedido":st==="recusada"?"Recusar pedido":"Marcar em andamento"}</h3><textarea id="lg-r" maxlength="1000" placeholder="${st==="recusada"?"Motivo da recusa (obrigatório)":"Resposta ao titular (ele vê no app)"}" style="height:100px;font-size:13px"></textarea><div style="display:flex;justify-content:flex-end;gap:10px;margin-top:14px"><button class="btn-sec" type="button" data-fechar style="width:auto">Cancelar</button><button class="btn-y" type="button" id="lg-ok" style="width:auto;padding:10px 18px">Salvar</button></div>`,{largura:500});
    m.el.querySelector("#lg-ok").onclick=async()=>{const r=limitar(m.el.querySelector("#lg-r").value.trim(),1000);if(st==="recusada"&&r.length<5)return avisar("Explique o motivo.","erro");try{await FB.updateDoc(`solicitacoes_lgpd/${s._id}`,{status:st,resposta:r,respondidoEm:new Date().toISOString(),respondidoPor:APP.user.nome});auditar("lgpd_resposta",{id:s.uid,nome:s.nome},`${s.tipo} → ${st}`);m.fechar();load()}catch(x){avisar("Não foi possível salvar.","erro")}}}
  load();
}

/* ── Saúde do sistema ── */
async function modSaude(c){
  phdr(c,"Diagnóstico e manutenção","Saúde do Sistema");
  const box=el("div");box.innerHTML=carregandoHTML();c.appendChild(box);
  const[erros,pub,perm]=await Promise.all([FB.query("logs_erros","data",">=",new Date(Date.now()-14*864e5).toISOString(),"data","DESCENDING",500),FB.getDoc("config/publico").catch(()=>null),FB.getDoc("config/permissoes").catch(()=>null)]);
  let fn="verificando";
  const g={};erros.forEach(e=>{const k=e.onde+"|"+e.msg;(g[k]=g[k]||{n:0,e,ult:e.data,versoes:new Set()}).n++;g[k].versoes.add(e.versao||"")});
  const ok=(b,t)=>`<div class="dk-row"><span style="color:${b===true?"#4ade80":b===false?"#EC7896":"#f59e0b"}">${AMI(b===true?"check":"alert")}</span><span style="font-size:13px;color:#EEF1F8">${t}</span></div>`;
  function draw(){
    box.innerHTML=`<div class="dk-2" style="align-items:start"><div class="glass am-cs"><h3 class="am-cs-t">${AMI("pulse")} Verificações</h3>${ok(true,`Versão do app: ${esc(AM_VERSAO)}`)}${ok(!!pub,"Configuração pública (config/publico)")}${ok(!!(pub&&pub.encarregadoEmail),"Contato de privacidade preenchido")}${ok(!!(pub&&pub.vapidPublica),"Chave de notificações (VAPID) configurada")}${ok(!!perm,"Permissões dos planos salvas")}${ok(fn==="ok"?true:fn==="verificando"?null:false,fn==="ok"?"Funções de servidor respondendo":fn==="verificando"?"Funções de servidor: verificando...":"Funções de servidor não encontradas (push, IA e exclusão de conta ficam indisponíveis)")}<p class="am-dica" style="margin-top:10px">As regras de segurança do banco não podem ser lidas pelo app. Confira no console do Firebase se a versão publicada é a do guia (aba Regras).</p></div><div class="glass am-cs"><h3 class="am-cs-t">${AMI("repeat")} Migração para a versão 3</h3><p class="am-dica" style="margin:0 0 10px">Move o diagnóstico e o histórico psicológico antigos para a área restrita de Psicologia, em todos os atletas. Rode uma vez depois de publicar as novas regras.</p><button type="button" class="btn-y" id="sd-mig" style="width:auto;padding:10px 18px">Migrar dados</button><p class="am-dica" id="sd-mig-st" role="status" style="margin-top:8px"></p></div></div><div class="glass am-cs" style="margin-top:16px"><h3 class="am-cs-t">${AMI("alert")} Erros nos últimos 14 dias · ${erros.length}</h3>${Object.keys(g).length?`<div class="am-tab-wrap"><table class="am-tab"><thead><tr><th>Onde</th><th>Mensagem</th><th class="c">Vezes</th><th>Último</th><th>Versão</th></tr></thead><tbody>${Object.values(g).sort((a,b)=>b.n-a.n).map(x=>`<tr><td>${esc(x.e.onde)}</td><td class="am-dica">${esc(x.e.msg)}</td><td class="c">${x.n}</td><td class="nw">${_fmtDH(x.ult)}</td><td class="am-dica">${esc([...x.versoes].join(", "))}</td></tr>`).join("")}</tbody></table></div>`:vazioHTML("Nenhum erro registrado.")}</div>`;
    box.querySelector("#sd-mig").onclick=migrar;
  }
  async function migrar(e){const b=e.currentTarget,st=t=>box.querySelector("#sd-mig-st").textContent=t;if(!await confirmar("Migrar os dados psicológicos antigos de todos os atletas para a área restrita?",{ok:"Migrar"}))return;b.disabled=true;
    const at=await listarAtletas(true);let mov=0,falha=0;
    for(let i=0;i<at.length;i++){st(`Atleta ${i+1} de ${at.length}...`);try{const pr=await FB.getDoc(`prontuarios/${at[i]._id}`);if(!pr||!(pr.diagnostico||pr.anamnese?.psicologico))continue;
      try{await FB.req(`${FB.FS}/${encPath(`prontuarios/${at[i]._id}/privado/psico`)}?currentDocument.exists=false`,"PATCH",{fields:FB.toFields({diagnostico:pr.diagnostico||{},historicoPsico:pr.anamnese?.psicologico||"",migradoEm:new Date().toISOString(),atualizadoPor:"Migração v3"})})}catch(x){if(!/exists|FAILED_PRECONDITION/i.test(x.message+x.code))throw x}
      await removerCampos(`prontuarios/${at[i]._id}`,["diagnostico","anamnese.psicologico"]);mov++}catch(x){falha++;registrarErro("migracao",x)}}
    auditar("migracao_v3",{},`${mov} migrados · ${falha} falhas`);st(`Pronto: ${plural(mov,"atleta migrado","atletas migrados")}${falha?` · ${falha} com erro (veja a lista de erros)`:""}.`);b.disabled=false}
  draw();
  FB.call("status",{}).then(()=>{fn="ok";draw()},()=>{fn="falha";draw()});
}

/* ════ DOSSIÊ — todos os dados do atleta em um documento ════ */
const DZ_PERIODOS=[[30,"30 dias"],[90,"90 dias"],[365,"12 meses"],[0,"Tudo"]];
const DZ_SECOES=[["kpis","Indicadores"],["perfil","Perfil esportivo"],["bemestar","Bem-estar"],["competicoes","Competições"],["treino","Treinos e carga"],["fisico","Lesões e avaliações"],["saude","Saúde e prontuário"],["preparo","Preparação"],["mental","Treino mental"],["agenda","Agenda"],["sos","S.O.S Mental"],["ia","Análises de IA"],["parecer","Parecer da equipe"]];
function _dt(d){if(!d)return null;const x=new Date(/^\d{4}-\d{2}-\d{2}$/.test(String(d))?d+"T12:00:00":d);return isNaN(x)?null:x}
function _fmtD(d){const x=_dt(d);return x?x.toLocaleDateString("pt-BR"):"—"}
function _fmtDH(d){const x=_dt(d);return x?x.toLocaleDateString("pt-BR")+" "+x.toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"}):"—"}
const _num=(v,dc=1)=>v==null||isNaN(v)?"—":(+v).toFixed(dc).replace(".",",");
function noPeriodo(d,dias){if(!dias)return true;const x=_dt(d);return!!x&&x.getTime()>=Date.now()-dias*864e5}
function periodoTxt(dias){if(!dias)return"Todo o histórico";const ini=new Date(Date.now()-dias*864e5);return`${dias===365?"Últimos 12 meses":"Últimos "+dias+" dias"} · ${ini.toLocaleDateString("pt-BR")} a ${new Date().toLocaleDateString("pt-BR")}`}
const tendTxt=m=>!m?"—":m.tend==="↑"?"↑ em alta":m.tend==="↓"?"↓ em queda":"→ estável";
const emissorTxt=()=>APP.user?`${APP.user.nome} (${CARGOS[APP.cargo]||APP.cargo})`:"";
const resumoContagem=D=>[plural(D.checkins.length,"check-in","check-ins"),plural(D.partidas.length,D.sp.evento.toLowerCase(),D.sp.eventos.toLowerCase()),plural(D.treinos.length,"treino","treinos"),plural(D.lesoes.length,"lesão","lesões"),plural(D.avaliacoes.length,"avaliação","avaliações"),...(D.atleta?[]:[plural(D.notas.length,"registro clínico","registros clínicos")]),plural(D.tm.length,"treino mental","treinos mentais"),plural(D.sessoes.length,"sessão","sessões"),...(D.atleta?[]:[plural(D.sos.length,"S.O.S","S.O.S")]),plural(D.ia.length,"análise de IA","análises de IA")].join(" · ");
const arqDossie=nome=>`dossie-${_norm(nome).replace(/ /g,"-")||"atleta"}-${today()}`;

async function carregarDossie(uid,op={}){
  const ok=p=>Promise.resolve(p).then(x=>x,()=>null),atl=!!op.atleta,areas=atl?[]:areasDe(),psico=areas.includes("psico");
  const[usuario,pront,checkins,partidas,eventos,aquec,tm,sos,sessoes,ia,torneios,treinos,lesoes,avaliacoes,priv,legado,...notasArea]=await Promise.all([
    ok(FB.getDoc(`usuarios/${uid}`)),ok(FB.getDoc(`prontuarios/${uid}`)),
    ok(FB.todos("checkins","pacienteId",uid)),
    ok(FB.getDocs(`prontuarios/${uid}/partidas`)),ok(FB.getDocs(`atletas/${uid}/eventos`)),ok(FB.getDoc(`atletas/${uid}/planos/aquecimento`)),
    ok(FB.todos("treinos_mentais","atletaId",uid)),
    atl?null:ok(FB.todos("sos_alertas","pacienteId",uid)),
    ok(FB.todos("agenda","atletaId",uid)),
    ok(FB.todos("ia_analises","atletaId",uid)),
    ok(FB.query("torneios","data",">=",somaDias(hojeLocal(),-60),"data","ASCENDING",300)),
    ok(FB.getDocs(`atletas/${uid}/treinos`)),ok(FB.getDocs(`atletas/${uid}/lesoes`)),ok(FB.getDocs(`atletas/${uid}/avaliacoes`)),
    psico?ok(FB.getDoc(`prontuarios/${uid}/privado/psico`)):null,psico?ok(FB.getDocs(`prontuarios/${uid}/soap`)):null,
    ...areas.map(ar=>ok(FB.getDocs(`prontuarios/${uid}/${colNotas(ar)}`).then(l=>(l||[]).map(n=>({...n,area:ar})))))
  ]);
  const pr=pront||{},perf={...(pr.perfil||{})},u=usuario||{},an={...(pr.anamnese||{})};
  if(!psico)delete an.psicologico;
  const esporte=perf.modalidade||u.esporte||"";
  const notas=[...notasArea.flat().filter(Boolean),...(legado||[]).map(n=>({...n,area:"psico",legado:true,criadoEm:n.data}))].filter(n=>!n.anulada);
  return{uid,atleta:atl,areas,usuario:u,perf,anamnese:an,diag:psico?((priv&&priv.diagnostico)||pr.diagnostico||{}):{},historicoPsico:psico?((priv&&priv.historicoPsico)||pr.anamnese?.psicologico||""):"",rotinas:pr.rotinas||{},relatorio:pr.relatorio||{},esporte,sp:sportOf(esporte),
    checkins:ordDesc(checkins,r=>r.data),partidas:ordDesc(partidas,RES.data),notas:ordDesc(notas,n=>n.criadoEm||n.data),
    eventos:ordDesc(eventos,e=>(e.data||"")+" "+(e.horario||"")),aquec:aquec||{},tm:ordDesc(tm,t=>t.dataRegistro),
    sos:ordDesc(sos,s=>s.data).filter(s=>s.status!=="cancelado"),sessoes:ordDesc(sessoes,s=>s.dataHora),ia:ordDesc(ia,a=>a.dataAnalise),torneios:torneios||[],
    treinos:ordDesc(treinos,t=>dataTreino(t)),lesoes:ordDesc((lesoes||[]).filter(l=>!l.anulada),l=>l.data),avaliacoes:ordDesc((avaliacoes||[]).filter(x=>!x.anulada),x=>x.data)};
}

function resumoDossie(D,dias=0){
  const inP=d=>noPeriodo(d,dias),now=new Date(),hoje=today();
  const ck=D.checkins.filter(r=>inP(r.data)),pt=D.partidas.filter(p=>inP(RES.data(p))),notas=D.notas.filter(s=>inP(s.criadoEm||s.data)),tm=D.tm.filter(t=>inP(t.dataRegistro)),sos=D.sos.filter(s=>inP(s.data)),ia=D.ia.filter(a=>inP(a.dataAnalise)),tr=D.treinos.filter(t=>inP(dataTreino(t))),av=D.avaliacoes.filter(x=>inP(x.data)),ls=D.lesoes.filter(l=>inP(l.data)||lesaoAtiva(l));
  const sessPassadas=D.sessoes.filter(s=>{const x=_dt(s.dataHora);return x&&x<=now&&inP(s.dataHora)}),sessFuturas=D.sessoes.filter(s=>{const x=_dt(s.dataHora);return x&&x>now}).reverse();
  const evP=D.eventos.filter(e=>e.data&&e.data<=hoje&&inP(e.data)),evF=D.eventos.filter(e=>e.data&&e.data>=hoje).reverse();
  const met=k=>{const chron=[...ck].reverse().map(r=>r[k]).filter(n=>n!=null&&n!==""&&!isNaN(n)).map(Number);if(!chron.length)return null;const h=Math.floor(chron.length/2);let tend="→";if(h){const a1=chron.slice(0,h).reduce((s,x)=>s+x,0)/h,a2=chron.slice(h).reduce((s,x)=>s+x,0)/(chron.length-h);tend=a2-a1>=.5?"↑":a1-a2>=.5?"↓":"→"}return{media:chron.reduce((s,x)=>s+x,0)/chron.length,min:Math.min(...chron),max:Math.max(...chron),tend}};
  const diasCk=new Set(ck.map(r=>String(r.data).slice(0,10))).size;
  let janela=dias;if(!dias&&ck.length){const f=_dt(ck[ck.length-1].data);janela=f?Math.max(1,Math.ceil((now-f)/864e5)+1):0}
  const tmTipos={};tm.forEach(t=>{const k=t.tipo||"outro";const o=tmTipos[k]||(tmTipos[k]={n:0,min:0,int:0});o.n++;o.min+=+t.duracao||0;o.int+=+t.intensidade||0});
  const evTipos={};evP.forEach(e=>{evTipos[e.tipo]=(evTipos[e.tipo]||0)+1});
  const spk=D.sp.key,proxComp=D.torneios.filter(t=>t.data&&(t.dataFim||t.data)>=hoje&&(!t.modalidade||!spk||sportKey(t.modalidade)===spk)).slice(0,6);
  return{ck,pt,notas,tm,sos,ia,tr,av,ls,carga:analiseCarga(D.treinos),cargaPer:tr.reduce((s,t)=>s+cargaDe(t),0),sessPassadas,sessFuturas,evP,evF,evTipos,proxComp,foco:met("foco"),energia:met("energia"),sono:met("sono"),humor:met("humor"),estresse:met("estresse"),dor:met("dor"),prontidao:mediaFn(ck,prontidao),
    risco:ck.filter(r=>alertasCk(r).length).length,flow:ck.filter(r=>r.foco>=8&&r.energia>=8).length,diasCk,janela,adesao:janela?Math.min(100,Math.round(diasCk/janela*100)):null,
    st:statsComp(pt,D.sp),tmMin:tm.reduce((s,t)=>s+(+t.duracao||0),0),tmTipos};
}

function svgCheckins(chron){
  const W=720,H=176,pl=26,pr=8,pt=8,pb=24,iw=W-pl-pr,ih=H-pt-pb,n=chron.length;
  const x=i=>pl+(n===1?iw/2:i*iw/(n-1)),y=v=>pt+ih-(Math.max(0,Math.min(10,+v||0))/10)*ih;
  const grid=[0,2.5,5,7.5,10].map(v=>`<line x1="${pl}" x2="${W-pr}" y1="${y(v).toFixed(1)}" y2="${y(v).toFixed(1)}" stroke="#E3E6F2" stroke-width="1"/><text x="${pl-6}" y="${(y(v)+3).toFixed(1)}" text-anchor="end">${String(v).replace(".",",")}</text>`).join("");
  const linha=(k,cor)=>`<polyline fill="none" stroke="${cor}" stroke-width="2" stroke-linejoin="round" points="${chron.map((r,i)=>r[k]==null?"":`${x(i).toFixed(1)},${y(r[k]).toFixed(1)}`).filter(Boolean).join(" ")}"/>`+(n<=45?chron.filter(r=>r[k]!=null).map((r)=>{const i=chron.indexOf(r);return`<rect x="${(x(i)-2.2).toFixed(1)}" y="${(y(r[k])-2.2).toFixed(1)}" width="4.4" height="4.4" fill="${cor}"/>`}).join(""):"");
  const idx=[...new Set([0,Math.floor((n-1)/2),n-1])];
  const lab=idx.map(i=>`<text x="${x(i).toFixed(1)}" y="${H-7}" text-anchor="${n===1?"middle":i===0?"start":i===n-1?"end":"middle"}">${_dt(chron[i].data)?.toLocaleDateString("pt-BR",{day:"2-digit",month:"short"})||""}</text>`).join("");
  return`<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="Evolução de foco, energia e sono" style="display:block;width:100%;height:auto;font-family:'JetBrains Mono',monospace;font-size:9px;fill:#5A6294">${grid}${linha("sono","#6366F1")}${linha("energia","#E8833A")}${chron.some(r=>r.humor!=null)?linha("humor","#1E9E5A"):""}${linha("foco","#0098CE")}${lab}</svg><div class="dz-legend"><span><i style="background:#0098CE"></i>Foco</span><span><i style="background:#E8833A"></i>Energia</span><span><i style="background:#6366F1"></i>Sono</span>${chron.some(r=>r.humor!=null)?`<span><i style="background:#1E9E5A"></i>Humor</span>`:""}<span style="margin-left:auto">Escala 1–10</span></div>`;
}

const DZ_CSS=`.dz{--n:#060B42;--c:#0098CE;--c2:#00D1FF;--r:#D2456C;--t:#262D5E;--m:#5A6294;--l:#DDE1F0;--g:#F4F6FB;background:#fff;color:var(--t);font-family:'Archivo',system-ui,sans-serif;font-size:11.5px;line-height:1.55;padding:34px 38px 26px;width:100%;max-width:820px;margin:0 auto;text-align:left;-webkit-print-color-adjust:exact;print-color-adjust:exact}
.dz *{box-sizing:border-box}.dz :where(h2,h3,h4,p,dl,dd,ul){margin:0;padding:0}.dz b{font-weight:700;color:var(--n)}
.dz-top{display:flex;justify-content:space-between;align-items:flex-end;gap:16px;padding-bottom:14px;border-bottom:3px solid var(--n)}
.dz-logo svg{display:block}.dz-logo p{font-family:'JetBrains Mono',monospace;font-size:8.5px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:var(--m);margin-top:8px}
.dz-doc{text-align:right;font-family:'JetBrains Mono',monospace;font-size:8.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--m);line-height:1.8}
.dz-doc b{display:block;font-family:'Archivo',sans-serif;font-stretch:125%;font-style:italic;font-weight:800;font-size:14px;letter-spacing:.02em;color:var(--n);line-height:1.2;margin-bottom:2px}
.dz-band{position:relative;margin:16px 0 4px;background:var(--n);color:#fff;padding:18px 22px;display:grid;grid-template-columns:minmax(0,1fr) auto;gap:16px;clip-path:polygon(0 0,calc(100% - 18px) 0,100% 18px,100% 100%,0 100%)}
.dz-k:before{content:"";display:inline-block;width:3px;height:11px;background:var(--c2);box-shadow:5px 0 0 var(--r);transform:skewX(-12deg);margin-right:13px;vertical-align:-1px}
.dz-k{font-family:'JetBrains Mono',monospace;font-size:8.5px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;color:#9AA3CF;margin-bottom:4px}
.dz-name{font-family:'Archivo',sans-serif;font-stretch:125%;font-style:italic;font-weight:900;font-size:26px;line-height:1.05;text-transform:uppercase;color:#fff}
.dz-sub{color:#B4BBE0;font-size:11px;margin-top:4px}
.dz-tags{display:flex;flex-wrap:wrap;gap:6px;margin-top:10px}
.dz-tag{font-family:'JetBrains Mono',monospace;font-size:8.5px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;padding:3px 9px;border:1px solid rgba(255,255,255,.4);color:#fff;transform:skewX(-12deg)}
.dz-tag.c{border-color:var(--c2);color:var(--c2)}.dz-tag.r{border-color:#EC7896;color:#EC7896}
.dz-per{text-align:right;font-family:'JetBrains Mono',monospace;font-size:8.5px;letter-spacing:.12em;text-transform:uppercase;color:#9AA3CF;line-height:1.5;display:flex;flex-direction:column;justify-content:center;gap:2px}
.dz-per b{color:#fff;font-weight:600;letter-spacing:.04em;margin-bottom:6px}
.dz-sec{margin-top:20px}
.dz-h{display:flex;align-items:baseline;gap:10px;border-bottom:1px solid var(--l);padding-bottom:6px;margin-bottom:11px;break-after:avoid;page-break-after:avoid}
.dz-n{font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:700;color:var(--c);letter-spacing:.06em}
.dz-h h3{font-family:'Archivo',sans-serif;font-stretch:125%;font-style:italic;font-weight:800;font-size:14px;letter-spacing:.01em;text-transform:uppercase;color:var(--n)}
.dz-hint{margin-left:auto;font-family:'JetBrains Mono',monospace;font-size:8.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--m);white-space:nowrap}
.dz-h4{display:flex;justify-content:space-between;align-items:baseline;gap:10px;font-family:'Archivo',sans-serif;font-stretch:112%;font-style:italic;font-weight:800;font-size:11.5px;text-transform:uppercase;color:var(--n);margin:14px 0 7px;break-after:avoid;page-break-after:avoid}
.dz-hk{padding-bottom:84px;margin-bottom:-84px;break-inside:avoid;page-break-inside:avoid}.dz-hk.s{padding-bottom:58px;margin-bottom:-58px}.dz-hk:first-child>.dz-h4{margin-top:0}.dz-h4 span{font-family:'JetBrains Mono',monospace;font-style:normal;font-weight:500;font-size:8.5px;letter-spacing:.12em;color:var(--m)}
.dz-kpis{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:7px}
.dz-stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(104px,1fr));gap:7px;margin-bottom:10px}
.dz-kpi,.dz-mini{border:1px solid var(--l);border-top:3px solid var(--c);padding:8px 10px;break-inside:avoid;page-break-inside:avoid;background:#fff}
.dz-kpi span,.dz-mini span{display:block;font-family:'JetBrains Mono',monospace;font-size:8px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:var(--m)}
.dz-kpi b,.dz-mini b{display:block;font-family:'JetBrains Mono',monospace;font-size:18px;font-weight:600;color:var(--n);line-height:1.25;margin-top:2px}
.dz-kpi i,.dz-mini i{display:block;font-style:normal;font-size:9px;color:var(--m);margin-top:1px}
.dz-dl{display:grid;grid-template-columns:150px minmax(0,1fr);gap:6px 16px}
.dz-dl dt{font-family:'JetBrains Mono',monospace;font-size:8.5px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:var(--m);padding-top:2px}
.dz-dl dd{color:var(--t);white-space:pre-wrap}
.dz-grid2{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:9px 16px}.dz-grid3{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}.dz-col{display:flex;flex-direction:column;gap:9px}
.dz-box{background:var(--g);border-left:3px solid var(--c);padding:8px 11px;break-inside:avoid;page-break-inside:avoid}
.dz-box h4{font-family:'JetBrains Mono',monospace;font-size:8px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--m);margin-bottom:3px}
.dz-box p{white-space:pre-wrap}.dz-box ul{padding-left:15px}.dz-box li{margin:2px 0}.dz-par{margin-bottom:8px}
.dz table{width:100%;border-collapse:collapse;font-size:10.5px;margin-top:4px}
.dz th{text-align:left;font-family:'JetBrains Mono',monospace;font-size:8px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--m);border-bottom:2px solid var(--n);padding:5px 6px}
.dz td{border-bottom:1px solid var(--l);padding:5px 6px;vertical-align:top}.dz tr{break-inside:avoid;page-break-inside:avoid}
.dz th.c{text-align:center}.dz td.num{font-family:'JetBrains Mono',monospace;text-align:center;white-space:nowrap}.dz td.bad{color:var(--r);font-weight:700}
.dz td.nw{white-space:nowrap;font-family:'JetBrains Mono',monospace;font-size:9.5px}
.dz-q{font-style:italic;color:var(--m);font-size:10px;margin-top:2px}.dz-sm{font-size:9.5px;color:var(--m)}
.dz-res{display:inline-block;font-family:'JetBrains Mono',monospace;font-weight:700;font-size:8.5px;letter-spacing:.08em;text-transform:uppercase;padding:2px 7px;color:#fff;white-space:nowrap}
.dz-res.w,.dz-form i.w{background:#1E9E5A}.dz-res.l,.dz-form i.l{background:var(--r)}.dz-res.d,.dz-form i.d{background:#7A82B0}.dz-res.p,.dz-form i.p{background:var(--c)}.dz-res.n,.dz-form i.n{background:#9AA3CF}
.dz-formwrap{margin:2px 0 10px}.dz-formwrap>span{display:block;font-family:'JetBrains Mono',monospace;font-size:8px;letter-spacing:.12em;text-transform:uppercase;color:var(--m);margin-bottom:4px}
.dz-form{display:flex;gap:3px;flex-wrap:wrap}.dz-form i{min-width:19px;height:19px;padding:0 3px;display:inline-flex;align-items:center;justify-content:center;font-style:normal;font-family:'JetBrains Mono',monospace;font-size:9px;font-weight:700;color:#fff}
.dz-chart{margin:4px 0 6px;break-inside:avoid;page-break-inside:avoid}
.dz-legend{display:flex;gap:16px;font-family:'JetBrains Mono',monospace;font-size:8.5px;letter-spacing:.1em;text-transform:uppercase;color:var(--m);margin-top:2px}
.dz-legend i{display:inline-block;width:12px;height:3px;margin-right:6px;vertical-align:middle}
.dz-note{font-size:10px;color:var(--m);margin:6px 0 4px}
.dz-soap{border-left:2px solid var(--l);padding:3px 0 3px 10px;margin-bottom:7px;break-inside:avoid;page-break-inside:avoid}
.dz-soap span{display:block;font-family:'JetBrains Mono',monospace;font-size:8.5px;font-weight:600;letter-spacing:.1em;color:var(--c)}.dz-soap p{white-space:pre-wrap}
.dz-evc{display:flex;flex-wrap:wrap;gap:6px 14px;margin-bottom:8px;font-size:10px}.dz-evc i{display:inline-block;width:8px;height:8px;margin-right:5px}
.dz-k2{font-family:'JetBrains Mono',monospace;font-size:8.5px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--c);margin:8px 0 4px}
.dz-list{list-style:none}.dz-list li{padding:4px 0;border-bottom:1px solid var(--l);font-size:10.5px;break-inside:avoid;page-break-inside:avoid}
.dz-list li span{font-family:'JetBrains Mono',monospace;font-size:8px;letter-spacing:.1em;text-transform:uppercase;color:var(--m);margin-left:4px}
.dz-ia{margin-bottom:12px}.dz-ia>p{margin-bottom:6px}.dz-empty{color:var(--m);font-style:italic}
.dz-sig{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:18px;margin-top:40px;break-inside:avoid;page-break-inside:avoid}
.dz-sig div{border-top:1px solid var(--n);padding-top:6px;font-family:'JetBrains Mono',monospace;font-size:8px;letter-spacing:.1em;text-transform:uppercase;color:var(--m);text-align:center}
.dz-foot{margin-top:22px;padding-top:9px;border-top:1px solid var(--l);display:flex;justify-content:space-between;align-items:flex-start;gap:16px;font-family:'JetBrains Mono',monospace;font-size:8px;line-height:1.6;letter-spacing:.04em;color:var(--m);break-inside:avoid;page-break-inside:avoid}
.dz-foot span:last-child{text-align:right;white-space:nowrap}
.dz-pdf,.dz-pdf *{font-stretch:100%!important}
@media print{.dz{padding:0;max-width:none}}`;

function docDossie(D,o={}){
  const dias=o.dias||0,on=k=>!o.sec||o.sec[k]!==false,R=resumoDossie(D,dias),sp=D.sp,u=D.usuario,perf=D.perf,nome=u.nome||"Atleta";
  const pl=PLANS[u.plano||"starter"]||PLANS.starter,agora=new Date(),atl=o.publico==="atleta";
  const docN=`DOS-${today().replace(/-/g,"")}-${String(D.uid).replace(/[^a-z0-9]/gi,"").slice(0,5).toUpperCase()}`;
  let n=0;const H=(t,hint="")=>`<div class="dz-hk"><div class="dz-h"><span class="dz-n">${String(++n).padStart(2,"0")}</span><h3>${t}</h3>${hint?`<span class="dz-hint">${hint}</span>`:""}</div></div>`,H4=(t,hint="")=>`<div class="dz-hk s"><h4 class="dz-h4">${t}${hint?` <span>${hint}</span>`:""}</h4></div>`;
  const vazio=t=>`<p class="dz-empty">${t}</p>`,P=[],st=R.st;
  const resCls=p=>RES.win(p)?"w":RES.loss(p)?"l":RES.draw(p)?"d":RES.podio(p)?"p":"n";
  P.push(`<div class="dz-top"><div class="dz-logo">${AM.logo(30,{ace:"#060B42",mind:"#0098CE",b1:"#0098CE"}).replace("<svg ",'<svg width="174" height="30" ')}<p>High Performance Lab · Mentoria e cuidado do atleta</p></div><div class="dz-doc"><b>${atl?"Relatório do Atleta":"Dossiê de Performance"}</b>Nº ${docN}<br>Emitido em ${agora.toLocaleDateString("pt-BR")} às ${agora.toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"})}</div></div>`);
  P.push(`<div class="dz-band"><div><p class="dz-k">Atleta</p><h2 class="dz-name"${o.ids?' id="rl-nome"':""}>${esc(nome)}</h2>${u.email?`<p class="dz-sub">${esc(u.email)}</p>`:""}<div class="dz-tags">${sp.nome?`<span class="dz-tag c">${esc(sp.nome)}</span>`:""}${perf.categoria?`<span class="dz-tag">${esc(perf.categoria)}</span>`:""}${perf.estilo?`<span class="dz-tag">${esc(perf.estilo)}</span>`:""}<span class="dz-tag r">Plano ${pl.label}</span></div></div><div class="dz-per"><span>Período analisado</span><b>${periodoTxt(dias)}</b>${u.dataCadastro?`<span>Atleta desde</span><b>${_fmtD(u.dataCadastro)}</b>`:""}</div></div>`);
  if(on("kpis")){const k=[["Check-ins",R.ck.length,R.adesao!=null?`adesão de ${R.adesao}%`:""],["Foco médio",_num(R.foco?.media),tendTxt(R.foco)],["Energia média",_num(R.energia?.media),tendTxt(R.energia)],["Sono médio",_num(R.sono?.media),tendTxt(R.sono)],["Prontidão média",_num(R.prontidao),"0 a 10"],["Sinais de alerta",R.risco,"check-ins com alerta"],["Carga no período",R.cargaPer+" UA",`${R.tr.filter(t=>t.status==="realizado").length} sessões`],[sp.eventos,st.t,sp.nome||""],[sp.modo==="pos"?"Pódios":"Vitórias",sp.modo==="pos"?st.pd:st.w,sp.modo==="ved"?`${st.d} empate${st.d!==1?"s":""} · ${st.l} derrota${st.l!==1?"s":""}`:sp.modo==="pos"?`${st.w} vitória${st.w!==1?"s":""}`:`${st.l} derrota${st.l!==1?"s":""}`],[sp.modo==="pos"?"% de pódio":"Aproveitamento",st.aprov==null?"—":st.aprov+"%",st.conf==null?"":`confiança ${_num(st.conf)}`],["Treino mental",R.tmMin+" min",`${R.tm.length} sess${R.tm.length!==1?"ões":"ão"}`],["Sessões",R.sessPassadas.length,R.sessFuturas.length?`${R.sessFuturas.length} agendada${R.sessFuturas.length!==1?"s":""}`:"realizadas"],["Lesões ativas",D.lesoes.filter(lesaoAtiva).length,D.lesoes.length?`${D.lesoes.length} no histórico`:""]];
    P.push(`<section class="dz-sec">${H("Resumo de indicadores")}<div class="dz-kpis">${k.map(([l,v,s])=>`<div class="dz-kpi"><span>${l}</span><b>${v}</b>${s?`<i>${esc(s)}</i>`:""}</div>`).join("")}</div></section>`)}
  if(on("perfil")){const rows=[["Modalidade",sp.nome||perf.modalidade],["Categoria / nível",perf.categoria],[sp.estilo,perf.estilo],["Lateralidade",perf.mao],["Histórico de lesões",perf.lesoes],["Plano",pl.label],["Cadastro no app",u.dataCadastro?_fmtD(u.dataCadastro):""]].filter(([,v])=>v);
    P.push(`<section class="dz-sec">${H("Perfil esportivo")}${rows.length?`<dl class="dz-dl">${rows.map(([l,v])=>`<dt>${l}</dt><dd>${esc(v)}</dd>`).join("")}</dl>`:vazio("Perfil esportivo ainda não preenchido.")}</section>`)}
  if(on("bemestar")){const chron=[...R.ck].reverse(),mini=(l,m,cor)=>`<div class="dz-mini" style="border-top-color:${cor}"><span>${l}</span><b>${_num(m?.media)}</b><i>mín. ${m?m.min:"—"} · máx. ${m?m.max:"—"} · ${tendTxt(m)}</i></div>`;
    P.push(`<section class="dz-sec">${H("Bem-estar e check-ins",`${R.ck.length} registro${R.ck.length!==1?"s":""}`)}${R.ck.length?`<div class="dz-stats">${mini("Foco",R.foco,"#0098CE")}${mini("Energia",R.energia,"#E8833A")}${mini("Sono",R.sono,"#6366F1")}${R.humor?mini("Humor",R.humor,"#1E9E5A"):""}${R.estresse?mini("Estresse",R.estresse,"#D2456C"):""}${R.dor?mini("Dor muscular",R.dor,"#C77700"):""}</div>${chron.length>1?`<div class="dz-chart">${svgCheckins(chron)}</div>`:""}<p class="dz-note">${R.diasCk} dia${R.diasCk!==1?"s":""} com diário${R.janela?` em ${R.janela} dia${R.janela!==1?"s":""} analisados (adesão de ${R.adesao}%)`:""} · ${R.risco} registro${R.risco!==1?"s":""} com sinal de alerta · ${R.flow} em flow (foco e energia ≥ 8). ${esc(CRITERIO_RISCO)}</p><table><thead><tr><th>Data</th><th class="c">Foco</th><th class="c">Energia</th><th class="c">Sono</th><th class="c">Humor</th><th class="c">Estresse</th><th class="c">Dor</th><th>Trunfo do dia</th></tr></thead><tbody>${R.ck.map(r=>`<tr><td class="nw">${_fmtDH(r.data)}</td><td class="num${r.foco<=4?" bad":""}">${r.foco??"—"}</td><td class="num${r.energia<=4?" bad":""}">${r.energia??"—"}</td><td class="num${r.sono!=null&&r.sono<=4?" bad":""}">${r.sono??"—"}</td><td class="num${r.humor!=null&&r.humor<=3?" bad":""}">${r.humor??"—"}</td><td class="num${r.estresse>=8?" bad":""}">${r.estresse??"—"}</td><td class="num${r.dor>=7?" bad":""}">${r.dor??"—"}${r.dorLocal?`<div class="dz-sm">${esc(r.dorLocal)}</div>`:""}</td><td>${r.pontoForte?`<span class="dz-q">“${esc(r.pontoForte)}”</span>`:"—"}</td></tr>`).join("")}</tbody></table>`:vazio("Sem check-ins no período.")}</section>`)}
  if(on("competicoes")){const pt=R.pt,tiles=statTiles(st,sp).map(([l,v])=>`<div class="dz-mini"><span>${l==="Aproveit."?"Aproveitamento":l}</span><b>${v}</b></div>`).join("");
    const forma=[...pt].slice(0,24).reverse().map(p=>`<i class="${resCls(p)}" title="${esc(p.torneio||"")}">${+p.colocacao>0?+p.colocacao:RES.win(p)?"V":RES.loss(p)?"D":RES.draw(p)?"E":"·"}</i>`).join("");
    const press=(st.cw!=null&&st.cl!=null)?`<div class="dz-box" style="margin-bottom:10px"><h4>Pressão competitiva</h4><p>Confiança média de <b>${_num(st.cw)}</b> nas vitórias e de <b>${_num(st.cl)}</b> ${sp.modo==="pos"?"nas provas fora do pódio":"nas derrotas"} — diferença de ${_num(Math.abs(st.cw-st.cl))} ponto${_num(Math.abs(st.cw-st.cl))==="1,0"?"":"s"} na escala de 1 a 10.</p></div>`:"";
    P.push(`<section class="dz-sec">${H("Competições e resultados",`${st.t} ${(st.t===1?sp.evento:sp.eventos).toLowerCase()}`)}${pt.length?`<div class="dz-stats">${tiles}<div class="dz-mini"><span>Confiança média</span><b>${_num(st.conf)}</b></div></div>${forma?`<div class="dz-formwrap"><span>Sequência de resultados · da mais antiga para a mais recente</span><div class="dz-form">${forma}</div></div>`:""}${press}<table><thead><tr><th>Data</th><th>${sp.comp}</th><th>Resultado</th><th>${sp.modo==="pos"?sp.placar:"Placar"}</th><th class="c">Conf.</th></tr></thead><tbody>${pt.map(p=>`<tr><td class="nw">${_fmtD(RES.data(p))}</td><td><b>${esc(p.torneio||"—")}</b>${p.relato?`<div class="dz-q">${esc(p.relato)}</div>`:""}</td><td><span class="dz-res ${resCls(p)}">${esc(RES.label(p))}</span></td><td>${esc([p.placar,p.marca].filter(Boolean).join(" · "))||"—"}${p.adversario?`<div class="dz-sm">vs ${esc(p.adversario)}</div>`:""}</td><td class="num">${p.confianca?p.confianca+"/10":"—"}</td></tr>`).join("")}</tbody></table>`:vazio(`${nenhumEvento(sp)} no período.`)}</section>`)}
  if(on("treino")){const A=R.carga,real=R.tr.filter(t=>t.status==="realizado"),pres=R.tr.filter(t=>t.status==="prescrito"),nao=R.tr.filter(t=>t.status==="nao_realizado");
    P.push(`<section class="dz-sec">${H("Treinos e carga",`${real.length} realizada${real.length!==1?"s":""} · ${R.cargaPer} UA`)}${D.treinos.length?`<div class="dz-stats"><div class="dz-mini"><span>Carga 7 dias</span><b>${A.aguda} UA</b></div><div class="dz-mini"><span>Média semanal (28 d)</span><b>${Math.round(A.cronica)} UA</b></div><div class="dz-mini"><span>Aguda : crônica</span><b>${A.suficiente&&A.acwr!=null?_num(A.acwr,2):"—"}</b><i>${A.suficiente?ZONA_TXT[A.zona]:"menos de 3 semanas de dados"}</i></div><div class="dz-mini"><span>Monotonia</span><b>${A.monotonia!=null?_num(A.monotonia,2):"—"}</b></div><div class="dz-mini"><span>Adesão às prescrições</span><b>${real.length+nao.length?Math.round(real.filter(t=>t.origem!=="atleta").length/Math.max(1,real.filter(t=>t.origem!=="atleta").length+nao.length)*100)+"%":"—"}</b><i>${nao.length} não realizada${nao.length!==1?"s":""}</i></div></div><p class="dz-note">${esc(CRITERIO_CARGA)}</p>${R.tr.length?`<table><thead><tr><th>Data</th><th>Sessão</th><th>Situação</th><th class="c">Min</th><th class="c">PSE</th><th class="c">Carga</th></tr></thead><tbody>${R.tr.map(t=>`<tr><td class="nw">${_fmtD(dataTreino(t))}</td><td><b>${esc(t.titulo||TREINO_TIPOS[t.tipo]||"Treino")}</b><div class="dz-sm">${esc(TREINO_TIPOS[t.tipo]||"")}${(t.exercicios||[]).length?" · "+esc(t.exercicios.map(e=>e.nome).filter(Boolean).slice(0,5).join(", ")):""}${t.origem==="atleta"?" · registrado pelo atleta":""}</div></td><td>${TREINO_STATUS[t.status]||esc(t.status||"")}</td><td class="num">${t.realizado?.duracao??t.duracaoPrevista??"—"}</td><td class="num">${t.realizado?.pse??"—"}</td><td class="num">${cargaDe(t)||"—"}</td></tr>`).join("")}</tbody></table>`:vazio("Sem sessões no período.")}${pres.length?`<p class="dz-note">${pres.length} sessão(ões) prescrita(s) ainda sem registro.</p>`:""}`:vazio("Nenhum treino registrado.")}</section>`)}
  if(on("fisico")){const ult={};D.avaliacoes.forEach(a=>{const k=a.teste==="outro"?"o:"+(a.nomeTeste||""):a.teste;(ult[k]=ult[k]||[]).push(a)});
    P.push(`<section class="dz-sec">${H("Lesões e avaliações físicas",`${D.lesoes.filter(lesaoAtiva).length} lesão(ões) ativa(s)`)}${H4("Lesões")}${R.ls.length?`<table><thead><tr><th>Data</th><th>Local</th><th>Tipo / gravidade</th><th>Situação</th><th>Retorno</th></tr></thead><tbody>${R.ls.map(l=>`<tr><td class="nw">${_fmtD(l.data)}</td><td><b>${esc(l.local||"—")}</b>${l.lado&&l.lado!=="—"?`<div class="dz-sm">${esc(l.lado)}</div>`:""}</td><td>${esc(l.tipo||"")}<div class="dz-sm">${esc(LESAO_GRAV[l.gravidade]||"")}${l.mecanismo?" · "+esc(l.mecanismo):""}</div>${l.descricao&&!atl?`<div class="dz-q">${esc(l.descricao)}</div>`:""}</td><td><span class="dz-res ${l.status==="liberado"?"w":l.status==="afastado"?"l":"p"}">${esc(LESAO_STATUS[l.status]||"")}</span></td><td class="nw">${l.retornoEm?"liberado "+_fmtD(l.retornoEm):l.retornoPrevisto?"previsto "+_fmtD(l.retornoPrevisto):"—"}${l.diasAfastado!=null?`<div class="dz-sm">${l.diasAfastado} dias</div>`:""}</td></tr>`).join("")}</tbody></table>`:vazio("Nenhuma lesão no período.")}${H4("Avaliações físicas",`${R.av.length} medida${R.av.length!==1?"s":""} no período`)}${Object.keys(ult).length?`<table><thead><tr><th>Teste</th><th>Último resultado</th><th>Anterior</th><th>Variação</th></tr></thead><tbody>${Object.values(ult).map(l=>{const[a,b]=l,t=avalTeste(a.teste),u=t[2]||a.unidade||"",d=b&&_n(a.valor)!=null&&_n(b.valor)!=null?a.valor-b.valor:null;return`<tr><td><b>${esc(nomeAval(a))}</b><div class="dz-sm">${esc(t[3])}</div></td><td>${esc(String(a.valor))} ${esc(u)}<div class="dz-sm">${_fmtD(a.data)}</div></td><td>${b?esc(String(b.valor))+" "+esc(u)+`<div class="dz-sm">${_fmtD(b.data)}</div>`:"—"}</td><td class="num">${d==null?"—":(d>0?"+":"")+_num(d)}</td></tr>`}).join("")}</tbody></table>`:vazio("Nenhuma avaliação registrada.")}</section>`)}
  if(on("saude")){const an=D.anamnese,dg=D.diag;
    const AN=[["Doenças pré-existentes",an.doencas],["Medicações em uso",an.medicacoes],["Cirurgias anteriores",an.cirurgias],["Alergias",an.alergias],["Histórico familiar",an.familiar],["Suplementos",an.suplementos],["Hábitos de sono",an.sono],["Hábitos alimentares",an.alimentar],["Observações gerais",an.observacoes]].filter(([,v])=>v);
    const DG=[["Diagnóstico / hipótese",dg.diagnostico],["Objetivo terapêutico",dg.objetivo],["Plano de intervenção",dg.plano],["Frequência de atendimento",dg.frequencia]].filter(([,v])=>v);
    const bx=([l,v])=>`<div class="dz-box"><h4>${l}</h4><p>${esc(v)}</p></div>`;
    const psi=D.areas.includes("psico"),porArea=D.areas.map(ar=>[ar,R.notas.filter(x=>x.area===ar)]);
    P.push(`<section class="dz-sec">${H(atl?"Saúde":"Saúde e prontuário",atl?"":`áreas: ${D.areas.map(a=>AREAS[a].nome).join(", ")}`)}${H4("Anamnese")}${AN.length?`<div class="dz-grid2">${AN.map(bx).join("")}</div>`:vazio("Anamnese não preenchida.")}${psi?`${H4("Psicologia · plano terapêutico")}${DG.length||D.historicoPsico?`<div class="dz-grid2">${DG.map(bx).join("")}${D.historicoPsico?bx(["Histórico psicológico / emocional",D.historicoPsico]):""}</div>`:vazio("Sem plano registrado.")}`:""}${atl?"":porArea.map(([ar,l])=>`${H4("Registros · "+AREAS[ar].nome,`${l.length} no período`)}${l.length?l.map(s=>`<div class="dz-soap"><span>${_fmtDH(s.criadoEm||s.data)} · ${esc(autorTxt(s))}${s.adendoDe?" · adendo":""}</span><p>${esc(s.texto)}</p></div>`).join(""):vazio("Sem registros no período.")}`).join("")}</section>`)}
  if(on("preparo")){const aq=D.aquec,rp=aq.rotinaPre||D.rotinas.pre||"",rs=aq.rotinaPos||D.rotinas.pos||"";
    P.push(`<section class="dz-sec">${H("Preparação e rotinas")}<div class="dz-grid2"><div class="dz-box"><h4>Protocolo de aquecimento${aq.duracao?` · ${esc(aq.duracao)}`:""}</h4>${aq.titulo||aq.exercicios?`<p>${aq.titulo?`<b>${esc(aq.titulo)}</b>\n`:""}${esc(aq.exercicios||"")}${aq.descricao?"\n\n"+esc(aq.descricao):""}</p>`:`<p class="dz-empty">Não definido.</p>`}</div><div class="dz-col"><div class="dz-box"><h4>${sp.ritual}</h4><p>${esc(rp)||"—"}</p></div><div class="dz-box"><h4>Reset pós-erro</h4><p>${esc(rs)||"—"}</p></div></div></div></section>`)}
  if(on("mental")){const tipos=Object.entries(R.tmTipos);
    P.push(`<section class="dz-sec">${H("Treino mental",`${R.tm.length} sess${R.tm.length!==1?"ões":"ão"} · ${R.tmMin} min`)}${R.tm.length?`<table><thead><tr><th>Tipo</th><th class="c">Sessões</th><th class="c">Minutos</th><th class="c">Intensidade média</th></tr></thead><tbody>${tipos.map(([k,v])=>`<tr><td><b>${TM_TIPOS[k]||esc(k)}</b></td><td class="num">${v.n}</td><td class="num">${v.min}</td><td class="num">${_num(v.int/v.n)}</td></tr>`).join("")}</tbody></table>${H4("Sessões registradas")}<table><thead><tr><th>Data</th><th>Tipo</th><th class="c">Duração</th><th class="c">Intens.</th><th>Observações</th></tr></thead><tbody>${R.tm.map(t=>`<tr><td class="nw">${_fmtD(t.dataRegistro)}</td><td>${TM_TIPOS[t.tipo]||esc(t.tipo||"—")}</td><td class="num">${t.duracao||"—"} min</td><td class="num">${t.intensidade||"—"}/10</td><td>${esc(t.notas||"")||"—"}</td></tr>`).join("")}</tbody></table>`:vazio("Sem treinos mentais no período.")}</section>`)}
  if(on("agenda")){const dur=s=>{const a=_dt(s.dataHora),b=_dt(s.dataHoraFim);if(!a||!b)return"";const m=Math.round((b-a)/6e4);return m>0?(m<60?m+" min":Math.floor(m/60)+"h"+(m%60?String(m%60).padStart(2,"0"):"")):""};
    const sess=[...R.sessFuturas.slice(0,6).map(s=>[s,"Agendada","p"]),...R.sessPassadas.slice(0,10).map(s=>[s,"Realizada","n"])];
    const evc=Object.entries(TIPO_NM).map(([k,l])=>[l,R.evTipos[k]||0,TIPO_COR[k]]).filter(([,q])=>q);
    P.push(`<section class="dz-sec">${H("Agenda e acompanhamento")}<div class="dz-grid2"><div>${H4("Sessões clínicas",`${R.sessPassadas.length} realizada${R.sessPassadas.length!==1?"s":""} · ${R.sessFuturas.length} agendada${R.sessFuturas.length!==1?"s":""}`)}${sess.length?`<table><thead><tr><th>Data e hora</th><th class="c">Duração</th><th>Status</th></tr></thead><tbody>${sess.map(([s,t,c])=>`<tr><td class="nw">${_fmtDH(s.dataHora)}</td><td class="num">${dur(s)||"—"}</td><td><span class="dz-res ${c}">${t}</span></td></tr>`).join("")}</tbody></table>`:vazio("Nenhuma sessão no período.")}</div><div>${H4("Calendário do atleta",`${R.evP.length} evento${R.evP.length!==1?"s":""} no período`)}${evc.length?`<div class="dz-evc">${evc.map(([l,q,cor])=>`<span><i style="background:${cor}"></i>${l} <b>${q}</b></span>`).join("")}</div>`:""}${R.evF.length?`<p class="dz-k2">Próximos eventos</p><ul class="dz-list">${R.evF.slice(0,8).map(e=>`<li><b>${_fmtD(e.data)}${e.horario?" · "+esc(e.horario):""}</b> ${esc(e.titulo||"")}<span>${TIPO_NM[e.tipo]||""}</span></li>`).join("")}</ul>`:(evc.length?"":vazio("Sem eventos no período."))}${R.proxComp.length?`<p class="dz-k2">Próximas competições</p><ul class="dz-list">${R.proxComp.map(t=>`<li><b>${_fmtD(t.data)}${t.dataFim?" a "+_fmtD(t.dataFim):""}</b> ${esc(t.nome||"")}${t.modalidade?`<span>${esc(t.modalidade)}</span>`:""}</li>`).join("")}</ul>`:""}</div></div></section>`)}
  if(on("sos")){const pend=R.sos.filter(s=>s.status==="pendente").length;
    P.push(`<section class="dz-sec">${H("S.O.S Mental",`${R.sos.length} acionamento${R.sos.length!==1?"s":""}${pend?` · ${pend} pendente${pend!==1?"s":""}`:""}`)}${R.sos.length?`<table><thead><tr><th>Data e hora</th><th>Situação</th></tr></thead><tbody>${R.sos.map(s=>`<tr><td class="nw">${_fmtDH(s.data)}</td><td><span class="dz-res ${s.status==="pendente"?"l":"n"}">${s.status==="pendente"?"Pendente":s.status==="em_atendimento"?"Em atendimento":"Encerrado"}</span>${s.respondidoPorNome?`<div class="dz-sm">atendido por ${esc(s.respondidoPorNome)}${s.respondidoEm?` em ${Math.max(0,Math.round((_dt(s.respondidoEm)-_dt(s.data))/60000))} min`:""}</div>`:""}</td></tr>`).join("")}</tbody></table>`:vazio("Nenhum acionamento no período.")}</section>`)}
  if(on("ia")){P.push(`<section class="dz-sec">${H("Análises de vídeo com IA",`${R.ia.length} análise${R.ia.length!==1?"s":""}`)}${R.ia.length?R.ia.map(a=>`<div class="dz-ia"><p class="dz-k2">${_fmtD(a.dataAnalise)}${a.esporte?" · "+esc(a.esporte):""}</p>${a.resumo?`<p>${esc(a.resumo)}</p>`:""}<div class="dz-grid3">${[["Pontos fortes",a.pontosFortes],["A melhorar",a.pontosAMelhorar],["Plano de ação",a.planosDeAcao]].map(([l,arr])=>`<div class="dz-box"><h4>${l}</h4>${(arr||[]).length?`<ul>${arr.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>`:"<p>—</p>"}</div>`).join("")}</div></div>`).join(""):vazio("Nenhuma análise salva no período.")}</section>`)}
  if(on("parecer")){const nt=o.notas||{},bl=(t,v,id,ph)=>`<div class="dz-box dz-par"><h4>${t}</h4><p${o.ids?` id="${id}"`:""}>${v?esc(v):`<span class="dz-empty">${ph}</span>`}</p></div>`;
    P.push(atl?`<section class="dz-sec">${H("Orientações da equipe")}${bl("Objetivos",nt.objetivos,"rl-op","Nenhuma meta definida.")}${bl("Recomendações",nt.recomendacoes,"rl-rp","Sem recomendações registradas.")}</section>`:`<section class="dz-sec">${H("Parecer da equipe multidisciplinar")}${bl("Síntese de treinos",nt.sintese,"rl-tp","Nenhum apontamento.")}${bl("Objetivos",nt.objetivos,"rl-op","Nenhuma meta definida.")}${bl("Recomendações",nt.recomendacoes,"rl-rp","Sem recomendações registradas.")}<div class="dz-sig">${["Treinador(a)","Fisioterapeuta","Médico(a) do esporte","Psicólogo(a) do esporte"].map(x=>`<div>${x}</div>`).join("")}</div></section>`)}
  P.push(`<div class="dz-foot"><span>Documento confidencial. Contém dados pessoais e de saúde protegidos pela LGPD (Lei nº 13.709/2018), de uso restrito à equipe multidisciplinar AceMind e ao atleta.${!atl&&D.areas.length?` Inclui os registros clínicos das áreas acessíveis ao emissor: ${D.areas.map(a=>AREAS[a].nome).join(", ")}.`:""}</span><span>${docN}${o.emissor?`<br>Emitido por ${esc(o.emissor)}`:""}</span></div>`);
  return`<div class="dz"${o.ids?' id="rel-cont"':""}><style>${DZ_CSS}</style>${P.join("")}</div>`;
}

async function baixarPDFDoc(html,arq,rodape){
  if(!await garantirPDF())return;
  const host=document.createElement("div");host.style.cssText="position:fixed;left:-12000px;top:0;width:794px;background:#fff;pointer-events:none";host.setAttribute("aria-hidden","true");host.innerHTML=html;host.firstElementChild.classList.add("dz-pdf");document.body.appendChild(host);
  const opt={margin:[10,0,12,0],filename:arq+".pdf",image:{type:"jpeg",quality:.95},html2canvas:{scale:2,useCORS:true,backgroundColor:"#FFFFFF",scrollX:0,scrollY:0},jsPDF:{unit:"mm",format:"a4",orientation:"portrait"},pagebreak:{mode:["css","legacy"],avoid:[".dz-hk","tr",".dz-kpi",".dz-mini",".dz-box",".dz-soap",".dz-chart",".dz-sig",".dz-list li",".dz-foot"]}};
  const fim=()=>host.remove();
  try{return html2pdf().set(opt).from(host.firstElementChild).toPdf().get("pdf").then(pdf=>{const tot=pdf.internal.getNumberOfPages(),w=pdf.internal.pageSize.getWidth(),h=pdf.internal.pageSize.getHeight();for(let i=1;i<=tot;i++){pdf.setPage(i);pdf.setFontSize(7);pdf.setTextColor(90,98,148);pdf.text(`${rodape}  ·  ${i}/${tot}`,w-10,h-5,{align:"right"})}}).save().then(fim,e=>{fim();registrarErro("pdf",e);avisar("Não foi possível gerar o PDF.","erro")})}catch(e){fim();registrarErro("pdf",e);avisar("Não foi possível gerar o PDF.","erro");return Promise.resolve()}
}
function imprimirDoc(html,titulo){
  const w=window.open("","_blank");if(!w){avisar("Permita janelas pop-up para imprimir o dossiê.","info");return}
  w.document.write(`<!DOCTYPE html><html lang="pt-BR"><head><meta charset="utf-8"><title>${esc(titulo)}</title><link rel="stylesheet" href="${esc(new URL("fonts/fonts.css",location.href).href)}"><style>@page{size:A4;margin:14mm 12mm}html,body{margin:0;background:#fff}</style></head><body>${html}</body></html>`);
  w.document.close();w.focus();setTimeout(()=>{try{w.print()}catch(e){}},900);
}

/* ════ Exportar Dossiê — monta o documento com período, seções e parecer ════ */
function modRelatorios(c,atletas){
  phdr(c,"Geração de documentos","Exportar Dossiê");
  let aid="",D=null,dias=90,req=0;const sec=Object.fromEntries(DZ_SECOES.map(([k])=>[k,true])),notas={sintese:"",objetivos:"",recomendacoes:""};
  const box=el("div","dzx");c.appendChild(box);
  box.innerHTML=`<div class="glass dzx-ctl"><div class="dzx-f"><label class="slbl" for="rl-atl">Atleta</label><select id="rl-atl" style="font-size:13px"><option value="">Selecione...</option>${atletas.map(a=>`<option value="${esc(a._id)}">${esc(a.nome)}${a.esporte?" · "+esc(a.esporte):""}</option>`).join("")}</select></div><div class="dzx-f"><span class="slbl">Período</span><div class="tab-switch" id="rl-per">${DZ_PERIODOS.map(([d,l])=>`<button type="button" class="tab-btn${d===dias?" active":""}" data-dias="${d}">${l}</button>`).join("")}</div></div><div class="dzx-f"><span class="slbl">Seções do documento</span><div class="dzx-togs" id="rl-secs">${DZ_SECOES.map(([k,l])=>`<button type="button" class="dzx-tog" aria-pressed="true" data-sec="${k}">${l}</button>`).join("")}</div></div><div class="dzx-f"><label class="slbl" for="rl-tr">Síntese de treinos</label><textarea id="rl-tr" class="cs" placeholder="Apontamentos do período..." style="height:92px;resize:vertical;display:block;font-size:13px"></textarea></div><div class="dzx-f"><label class="slbl" for="rl-ob">Objetivos <span style="color:var(--y)">· o atleta vê</span></label><textarea id="rl-ob" class="cs" placeholder="Metas para a próxima fase..." style="height:80px;resize:vertical;display:block;font-size:13px"></textarea></div><div class="dzx-f"><label class="slbl" for="rl-rec">Recomendações <span style="color:var(--y)">· o atleta vê</span></label><textarea id="rl-rec" class="cs" placeholder="Orientações de treino, saúde e mente..." style="height:80px;resize:vertical;display:block;font-size:13px"></textarea></div><div class="dzx-act"><button class="btn-y" id="rl-pdf" type="button">${AMI("download")} Baixar PDF</button><button class="btn-sec" id="rl-print" type="button">${AMI("printer")} Imprimir</button></div><p class="dzx-st" id="rl-st" role="status"></p></div><div class="dzx-prev cs" id="rl-prev"><div class="dzx-empty">${AMI("file",30)}<p>Selecione um atleta para montar o dossiê com todos os dados registrados: perfil, check-ins, competições, treinos e carga, lesões, avaliações, prontuário das suas áreas, rotinas, treino mental, agenda, S.O.S e análises de IA.</p></div></div>`;
  const q=s=>box.querySelector(s),prev=q("#rl-prev"),stt=q("#rl-st");
  const status=t=>{stt.textContent=t};
  const montar=()=>{if(!D)return;prev.innerHTML=`<div class="dzx-paper">${docDossie(D,{dias,sec,notas,ids:true,emissor:emissorTxt()})}</div>`};
  const setNota=(k,id,ph)=>{const t=prev.querySelector("#"+id);if(!t)return;if(notas[k])t.textContent=notas[k];else t.innerHTML=`<span class="dz-empty">${ph}</span>`};
  q("#rl-atl").onchange=async e=>{aid=e.target.value;APP.atletaSel=aid;const meu=++req;if(!aid){D=null;prev.innerHTML=`<div class="dzx-empty">${AMI("file",30)}<p>Selecione um atleta para montar o dossiê.</p></div>`;status("");return}
    prev.innerHTML=`<div class="dzx-empty">${_loading("Reunindo todos os dados do atleta...")}</div>`;status("");
    const dd=await carregarDossie(aid);if(meu!==req)return;D=dd;auditar("dossie_aberto",{id:aid,nome:dd.usuario.nome||""},"exportar dossiê");
    notas.sintese=D.relatorio.sintese||"";notas.objetivos=D.relatorio.objetivos||"";notas.recomendacoes=D.relatorio.recomendacoes||"";q("#rl-tr").value=notas.sintese;q("#rl-ob").value=notas.objetivos;q("#rl-rec").value=notas.recomendacoes;
    status(`Encontrados: ${resumoContagem(D)}.${D.relatorio.atualizadoEm?" Notas carregadas do último dossiê.":""}`);montar()};
  q("#rl-per").querySelectorAll("[data-dias]").forEach(b=>b.onclick=()=>{dias=+b.dataset.dias;q("#rl-per").querySelectorAll("[data-dias]").forEach(x=>x.classList.toggle("active",x===b));montar()});
  q("#rl-secs").querySelectorAll("[data-sec]").forEach(b=>b.onclick=()=>{const k=b.dataset.sec;sec[k]=!sec[k];b.setAttribute("aria-pressed",String(sec[k]));montar()});
  q("#rl-tr").oninput=e=>{notas.sintese=e.target.value;setNota("sintese","rl-tp","Nenhum apontamento.")};
  q("#rl-ob").oninput=e=>{notas.objetivos=e.target.value;setNota("objetivos","rl-op","Nenhuma meta definida.")};
  q("#rl-rec").oninput=e=>{notas.recomendacoes=e.target.value;setNota("recomendacoes","rl-rp","Sem recomendações registradas.")};
  if(APP.atletaSel&&atletas.some(a=>a._id===APP.atletaSel)){q("#rl-atl").value=APP.atletaSel;q("#rl-atl").dispatchEvent(new Event("change"))}
  const salvarNotas=async()=>{if(!aid||!D)return false;if(!notas.sintese&&!notas.objetivos&&!notas.recomendacoes&&!D.relatorio.atualizadoEm)return false;if(notas.sintese===(D.relatorio.sintese||"")&&notas.objetivos===(D.relatorio.objetivos||"")&&notas.recomendacoes===(D.relatorio.recomendacoes||""))return false;try{const rel={sintese:limitar(notas.sintese,4000),objetivos:limitar(notas.objetivos,4000),recomendacoes:limitar(notas.recomendacoes,4000),atualizadoEm:new Date().toISOString(),por:APP.user?.nome||""};await FB.updateDoc(`prontuarios/${aid}`,{relatorio:rel});D.relatorio=rel;return true}catch(e){return false}};
  const html=()=>docDossie(D,{dias,sec,notas,emissor:emissorTxt()}),nome=()=>D.usuario.nome||"Atleta";
  q("#rl-pdf").onclick=async e=>{ripple(e);if(!aid||!D)return avisar("Selecione um atleta.","info");const b=e.currentTarget;b.disabled=true;status("Gerando PDF...");const ok=await salvarNotas();await baixarPDFDoc(html(),arqDossie(nome()),`AceMind · Dossiê de ${nome()}`);auditar("exportacao_pdf",{id:aid,nome:nome()},`dossiê · ${periodoTxt(dias)}`);b.disabled=false;status("PDF gerado."+(ok?" Objetivos e recomendações salvos: o atleta vê em Meu Plano.":""))};
  q("#rl-print").onclick=()=>{if(!aid||!D)return avisar("Selecione um atleta.","info");imprimirDoc(html(),`AceMind - ${nome()}`);auditar("exportacao_pdf",{id:aid,nome:nome()},"dossiê impresso");salvarNotas().then(ok=>{if(ok)status("Objetivos e recomendações salvos: o atleta vê em Meu Plano.")})};
}

/* ════ Dossiê do Atleta (tela) ════ */
async function renderDossie(uid,box){
  try{
    const D=await carregarDossie(uid),R=resumoDossie(D,0),sp=D.sp,u=D.usuario,perf=D.perf,nome=u.nome||"—",p=PLANS[u.plano||"starter"]||PLANS.starter,st=R.st;auditar("dossie_aberto",{id:uid,nome});
    const card=(t,ic,inner,mb=true)=>`<div class="pro-card" style="padding:22px${mb?";margin-bottom:16px":""}"><h4 class="tm-subtitle">${AMI(ic)} ${t}</h4>${inner}</div>`;
    const vz=t=>`<p style="font-size:12px;color:var(--muted)">${t}</p>`;
    const bloco=(l,v)=>`<div><span class="slbl" style="display:block;margin-bottom:5px">${l}</span><p style="font-size:13px;color:#B4BBE0;background:rgba(0,0,0,.25);border-radius:2px;padding:10px 12px;margin:0;white-space:pre-wrap">${esc(v)}</p></div>`;
    const linha=(a,b,cor="#B4BBE0")=>`<div class="dk-row"><span class="slbl" style="min-width:96px;flex-shrink:0">${a}</span><span style="font-size:13px;color:${cor};min-width:0">${b}</span></div>`;
    const kpis=[[AMI("bolt"),"Foco Médio",R.foco?R.foco.media.toFixed(1):"—","var(--y)"],[AMI("flame"),"Energia Média",R.energia?R.energia.media.toFixed(1):"—","#fb923c"],[AMI("moon"),"Sono Médio",R.sono?R.sono.media.toFixed(1):"—","#818cf8"],[AMI("notebook"),"Check-ins",D.checkins.length,"#EEF1F8"],[AMI(sp.icon),sp.eventos,st.t,"#4ade80"],[AMI("mind"),"Treino Mental",R.tmMin+" min","#00D1FF"],[AMI("heart"),"Prontidão",R.prontidao!=null?R.prontidao.toFixed(1):"—","#4ade80"],[AMI("dumbbell"),"Carga 7 dias",R.carga.aguda+" UA","#EEF1F8"]];
    const perfRows=[["Modalidade",sp.nome||perf.modalidade],["Categoria/Nível",perf.categoria],["Lateralidade",perf.mao],[sp.estilo,perf.estilo],["Lesões",perf.lesoes]].filter(([,v])=>v);
    const an=D.anamnese,AN=[["Doenças Pré-existentes",an.doencas],["Medicações em Uso",an.medicacoes],["Cirurgias Anteriores",an.cirurgias],["Alergias",an.alergias],["Histórico Familiar",an.familiar],["Suplementos",an.suplementos],["Hábitos de Sono",an.sono],["Hábitos Alimentares",an.alimentar],["Observações Gerais",an.observacoes]].filter(([,v])=>v);
    const dg=D.diag,DG=[["Diagnóstico/Hipótese",dg.diagnostico],["Objetivo Terapêutico",dg.objetivo],["Plano de Intervenção",dg.plano],["Frequência de Atendimento",dg.frequencia]].filter(([,v])=>v);
    const aq=D.aquec,rp=aq.rotinaPre||D.rotinas.pre||"",rs=aq.rotinaPos||D.rotinas.pos||"";
    const tiles=[["Total",st.t,"#EEF1F8"],...statTiles(st,sp).filter(([l])=>l!==sp.eventos)];
    box.innerHTML=`<div id="dossie-doc" style="font-family:'Archivo',sans-serif"><div class="dk-actions"><span class="slbl" style="line-height:1.6">${resumoContagem(D)}</span><div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn-sec" id="dos-print" style="width:auto;padding:10px 16px;font-size:12px">${AMI("printer")} Imprimir</button><button class="btn-y" id="dos-pdf" style="width:auto;padding:10px 20px;font-size:12px">${AMI("download")} Exportar PDF</button></div></div>
    <div style="background:#0E1459;border:1px solid rgba(154,163,207,.16);border-radius:3px;clip-path:var(--cut-lg);padding:32px;margin-bottom:20px;position:relative;overflow:hidden"><div class="am-bars-bg"></div><div style="position:relative;z-index:1;display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:16px"><div style="min-width:0"><div style="display:flex;align-items:center;gap:12px;margin-bottom:12px"><span class="am-logo">${AM.logo(18)}</span><span style="font-family:'JetBrains Mono',monospace;font-size:10px;color:rgba(0,209,255,.4);letter-spacing:.2em;text-transform:uppercase">Dossiê de Performance</span></div><h2 style="font-family:'Archivo',sans-serif;font-stretch:125%;font-style:italic;font-weight:900;font-size:36px;color:#fff;text-transform:uppercase;margin:0 0 4px;letter-spacing:-.01em">${esc(nome)}</h2><p style="font-size:13px;color:#9AA3CF;margin:0 0 12px">${esc(u.email||"")}</p><div style="display:flex;gap:8px;flex-wrap:wrap">${sp.nome?sportChip(sp.nome):""}${perf.categoria?`<span class="sport-chip" style="color:#EEF1F8;border-color:rgba(238,241,248,.3);background:rgba(238,241,248,.05)">${esc(perf.categoria)}</span>`:""}</div></div><div style="text-align:right"><span class="plan-chip ${u.plano||"starter"}" style="font-size:13px;padding:8px 18px">${p.emoji} ${p.label}</span><p style="font-size:11px;color:#9AA3CF;margin:8px 0 0;font-family:'JetBrains Mono',monospace">${new Date().toLocaleDateString("pt-BR")}</p></div></div></div>
    <div class="dk-kpis">${kpis.map(([ic,l,v,col])=>`<div class="pro-card" style="padding:18px;text-align:center"><span style="font-size:22px;display:block;margin-bottom:8px;color:${col}">${ic}</span><span class="slbl" style="display:block;margin-bottom:6px">${l}</span><strong style="font-family:'JetBrains Mono',monospace;font-size:28px;color:${col};line-height:1">${v}</strong></div>`).join("")}</div>
    <div class="dk-2">${card("Perfil Esportivo","medal",`<div style="display:flex;flex-direction:column;gap:2px">${perfRows.map(([l,v])=>linha(l,esc(v))).join("")||vz("Sem dados cadastrados.")}</div>`,false)}${card(`Estatísticas · ${sp.eventos}`,"trophy",`<div style="display:grid;grid-template-columns:repeat(${tiles.length},minmax(0,1fr));gap:8px">${tiles.map(([l,v,col])=>`<div style="background:rgba(0,0,0,.3);border:1px solid rgba(255,255,255,.05);border-radius:2px;padding:10px 4px;text-align:center"><span class="slbl" style="display:block;margin-bottom:4px;font-size:9px">${l}</span><strong style="font-family:'JetBrains Mono',monospace;font-size:20px;color:${col}">${v}</strong></div>`).join("")}</div>${st.cw!=null&&st.cl!=null?`<p style="font-size:12px;color:#B4BBE0;margin:12px 0 0">Confiança média: <strong style="color:#4ade80">${st.cw.toFixed(1)}</strong> nas vitórias · <strong style="color:#EC7896">${st.cl.toFixed(1)}</strong> ${sp.modo==="pos"?"fora do pódio":"nas derrotas"}</p>`:""}`,false)}</div>
    ${D.partidas.length?card(ultimosEv(sp),"focus",D.partidas.slice(0,6).map(m=>`<div class="historico-badge" style="border-left-color:${RES.cor(m)};margin-bottom:10px"><span class="historico-data">${_fmtD(RES.data(m))} · ${esc(m.torneio||"")}</span><div style="display:flex;gap:14px;flex-wrap:wrap;font-size:13px"><span style="color:${RES.cor(m)};font-weight:700">${esc(RES.label(m))}</span>${RES.det(m)?`<span style="color:#B4BBE0">${esc(RES.det(m))}</span>`:""}<span style="color:#B4BBE0">Confiança <strong style="color:#60a5fa">${m.confianca||"-"}/10</strong></span></div>${m.relato?`<p style="font-size:12px;color:#9AA3CF;margin:6px 0 0;font-style:italic">${esc(m.relato)}</p>`:""}</div>`).join("")):""}
    ${AN.length?card("Anamnese","steth",`<div class="dk-2" style="margin:0">${AN.map(([l,v])=>bloco(l,v)).join("")}</div>`):""}
    ${DG.length?card("Psicologia · Plano Terapêutico","lock",`<div style="display:flex;flex-direction:column;gap:10px">${DG.map(([l,v])=>bloco(l,v)).join("")}</div>`):""}
    <div class="dk-2">${card("Preparação","flame",`${aq.titulo||aq.exercicios?`<p style="font-family:'Archivo',sans-serif;font-stretch:110%;font-style:italic;font-weight:800;font-size:14px;color:#EEF1F8;text-transform:uppercase;margin:0 0 4px">${esc(aq.titulo||"Aquecimento")}</p>${aq.duracao?`<span class="slbl" style="display:inline-block;margin-bottom:8px;color:rgba(251,146,60,.8)">${AMI("clock")} ${esc(aq.duracao)}</span>`:""}${aq.exercicios?`<pre style="font-size:12px;color:#B4BBE0;line-height:1.7;white-space:pre-wrap;font-family:'Archivo',sans-serif;margin:0 0 14px">${esc(aq.exercicios)}</pre>`:""}`:vz("Protocolo de aquecimento não definido.")}<div style="display:flex;flex-direction:column;gap:10px">${bloco(sp.ritual,rp||"—")}${bloco("Reset Pós-Erro",rs||"—")}</div>`,false)}${card("Treino Mental","mind",R.tm.length?`<div style="display:flex;flex-direction:column;gap:2px;margin-bottom:12px">${Object.entries(R.tmTipos).map(([k,v])=>linha(TM_TIPOS[k]||esc(k),`${v.n} sess${v.n!==1?"ões":"ão"} · ${v.min} min · intens. ${(v.int/v.n).toFixed(1)}`)).join("")}</div>${R.tm.slice(0,4).map(t=>`<div class="historico-badge" style="margin-bottom:8px;padding:12px 14px"><span class="historico-data">${_fmtD(t.dataRegistro)} · ${TM_TIPOS[t.tipo]||esc(t.tipo||"")}</span><span style="font-size:12px;color:#B4BBE0">${t.duracao||"—"} min · intensidade ${t.intensidade||"—"}/10${t.notas?` · <em>${esc(t.notas)}</em>`:""}</span></div>`).join("")}`:vz("Nenhum treino mental registrado."),false)}</div>
    <div class="dk-2">${card("Agenda","calendar",`<span class="slbl" style="display:block;margin-bottom:8px">Sessões clínicas · ${R.sessPassadas.length} realizada${R.sessPassadas.length!==1?"s":""}</span>${R.sessFuturas.length?R.sessFuturas.slice(0,3).map(s=>linha(_fmtDH(s.dataHora),"Agendada","var(--y)")).join(""):vz("Nenhuma sessão agendada.")}<span class="slbl" style="display:block;margin:16px 0 8px">Próximos eventos do calendário</span>${R.evF.length?R.evF.slice(0,4).map(e=>linha(_fmtD(e.data)+(e.horario?" "+esc(e.horario):""),`<span style="color:${TIPO_COR[e.tipo]||"var(--y)"}">●</span> ${esc(e.titulo||"")}`)).join(""):vz("Nenhum evento futuro.")}${R.proxComp.length?`<span class="slbl" style="display:block;margin:16px 0 8px">Próximas competições</span>${R.proxComp.slice(0,3).map(t=>linha(_fmtD(t.data),esc(t.nome||""))).join("")}`:""}`,false)}${card("S.O.S & Análises de IA","alert",`<span class="slbl" style="display:block;margin-bottom:8px">S.O.S Mental · ${D.sos.length} acionamento${D.sos.length!==1?"s":""}</span>${D.sos.length?D.sos.slice(0,4).map(s=>linha(_fmtDH(s.data),s.status==="pendente"?"Pendente":s.status==="em_atendimento"?"Em atendimento":"Encerrado",s.status==="pendente"?"#EC7896":"#4ade80")).join(""):vz("Nenhum acionamento registrado.")}<span class="slbl" style="display:block;margin:16px 0 8px">Análises de vídeo com IA · ${D.ia.length}</span>${D.ia.length?`<p style="font-size:12px;color:#9AA3CF;margin:0 0 6px">${_fmtD(D.ia[0].dataAnalise)}${D.ia[0].esporte?" · "+esc(D.ia[0].esporte):""}</p><p style="font-size:13px;color:#B4BBE0;margin:0;line-height:1.6">${esc(D.ia[0].resumo||(D.ia[0].pontosFortes||[]).join("; "))}</p>`:vz("Nenhuma análise salva.")}`,false)}</div>
    <div class="dk-2">${card("Treinos & Lesões","dumbbell",`${linha("Carga 7 dias",R.carga.aguda+" UA")}${linha("Aguda:crônica",R.carga.suficiente&&R.carga.acwr!=null?fmt1(R.carga.acwr)+" · "+ZONA_TXT[R.carga.zona]:"dados insuficientes")}${linha("Sessões (7 dias)",String(R.carga.sessoes7))}<span class="slbl" style="display:block;margin:14px 0 8px">Lesões ativas</span>${D.lesoes.filter(lesaoAtiva).length?D.lesoes.filter(lesaoAtiva).map(l=>linha(_fmtD(l.data),`${esc(l.local||"")} · ${esc(LESAO_STATUS[l.status]||"")}`,LESAO_STATUS_COR[l.status])).join(""):vz("Nenhuma lesão ativa.")}`,false)}${card(`Registros clínicos · ${D.areas.map(a=>AREAS[a].nome).join(", ")}`,"steth",D.notas.length?D.notas.slice(0,5).map(s=>`<div class="historico-badge"><span class="historico-data">${fmtDate(s.criadoEm||s.data)} · ${esc(AREAS[s.area]?.nome||"")} · ${esc(autorTxt(s))}</span><p style="font-size:13px;color:#B4BBE0;margin:0;white-space:pre-wrap">${esc(s.texto)}</p></div>`).join(""):vz("Nenhum registro nas suas áreas."),false)}</div>
    <div class="dk-2">${card("Check-ins Recentes","notebook",D.checkins.length?`<div style="display:flex;flex-direction:column;gap:8px">${D.checkins.slice(0,6).map(r=>`<div class="historico-badge" style="margin-bottom:0"><span class="historico-data">${fmtDate(r.data)}</span>${ckMetricas(r)}${r.pontoForte?`<p style="color:#fb923c;font-style:italic;font-size:12px;margin:6px 0 0">“${esc(r.pontoForte)}”</p>`:""}</div>`).join("")}</div>`:vz("Nenhum check-in registrado."),false)}${card("Próximas Sessões","calendar",R.sessFuturas.length?R.sessFuturas.slice(0,5).map(s=>linha(_fmtDH(s.dataHora),esc(s.titulo||"Sessão")+(s.profissionalNome?" · "+esc(s.profissionalNome):""))).join(""):vz("Nenhuma sessão agendada."),false)}</div>
    </div>`;
    const docHTML=()=>docDossie(D,{dias:0,notas:{sintese:D.relatorio.sintese,objetivos:D.relatorio.objetivos,recomendacoes:D.relatorio.recomendacoes},emissor:emissorTxt()});
    box.querySelector("#dos-pdf").onclick=async e=>{const b=e.currentTarget;b.disabled=true;await baixarPDFDoc(docHTML(),arqDossie(nome),`AceMind · Dossiê de ${nome}`);auditar("exportacao_pdf",{id:uid,nome},"dossiê completo");b.disabled=false};
    box.querySelector("#dos-print").onclick=()=>{imprimirDoc(docHTML(),`AceMind - ${nome}`);auditar("exportacao_pdf",{id:uid,nome},"dossiê impresso")};
  }catch(e){registrarErro("dossie",e);box.innerHTML=`<p style="color:#EC7896">Não foi possível carregar o dossiê.</p>`}
}

/* ════ Relatório do atleta (PDF do próprio atleta, plano Pro) ════ */
async function relatorioAtletaPDF(uid){
  const D=await carregarDossie(uid,{atleta:true}),nome=D.usuario.nome||APP.user.nome||"Atleta";
  const sec={kpis:true,perfil:true,bemestar:true,competicoes:true,treino:true,fisico:true,saude:false,preparo:true,mental:true,agenda:true,sos:false,ia:true,parecer:true};
  const html=docDossie(D,{dias:90,sec,publico:"atleta",notas:{objetivos:D.relatorio.objetivos||"",recomendacoes:D.relatorio.recomendacoes||""}});
  await baixarPDFDoc(html,`relatorio-${_norm(nome).replace(/ /g,"-")||"atleta"}-${today()}`,`AceMind · Relatório de ${nome}`);
  auditar("exportacao_pdf",{id:uid,nome},"relatório do atleta");
}

Object.assign(MODULOS,{dashboard:modDashboard,checkins:modCheckins,dash_chart:modDashChart,comparativo:modComparativo,insights:modInsights,
  perfil:modPerfil,prontuario:modProntuario,registros:modRegistros,lesoes:modLesoes,criticos:modCriticos,dossie:modDossie,atletas_pro:modAtletasPro,
  treinos:modTreinos,agenda:modAgenda,calendarios:modCalendarios,aquecimento:modAquecimento,
  protocolos:modProtocolos,treino_mental:modTreinoMental,ia_analise:modIAAnalise,video_comp:modVideoComp,
  relatorios:modRelatorios,exportar:modExportar,sos:modSOS,notificacoes:modNotificacoes,
  admin:modAdmin,permissoes:modPermissoes,seguranca:modSeguranca,auditoria:modAuditoria,lgpd:modLGPD,saude:modSaude});
iniciarApp();
