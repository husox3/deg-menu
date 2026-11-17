// Çizgi çizimler (200x200). Sınıflar: ln=çizgi, fl=açık dolgu, fm=orta dolgu, steam/ice/bub/drop=animasyon
(function(){
  var steam3 = function(x, y){ // x: orta nokta, y: başlangıç
    return '<path class="steam" d="M'+(x-18)+' '+y+'c-9-12 9-20 0-32s9-20 0-32"/>'+
           '<path class="steam s2" d="M'+x+' '+(y-4)+'c-9-12 9-20 0-32s9-20 0-32"/>'+
           '<path class="steam s3" d="M'+(x+18)+' '+y+'c-9-12 9-20 0-32s9-20 0-32"/>';
  };
  var bubbles = function(cx, by){
    return '<circle class="bub" cx="'+(cx-8)+'" cy="'+by+'" r="2.5"/><circle class="bub u2" cx="'+(cx+10)+'" cy="'+(by+3)+'" r="2"/>'+
           '<circle class="bub u3" cx="'+cx+'" cy="'+(by-3)+'" r="3"/><circle class="bub u4" cx="'+(cx+20)+'" cy="'+(by+1)+'" r="2"/>';
  };

  window.ART = {
    cappuccino:
      steam3(100, 78) +
      '<g class="ln">'+
        '<ellipse cx="100" cy="172" rx="72" ry="11"/><ellipse cx="100" cy="172" rx="40" ry="5" opacity=".5"/>'+
        '<path d="M44 96h112c0 44-24 70-56 70S44 140 44 96z"/>'+
        '<path d="M155 108c26-2 28 34-6 40"/>'+
        '<ellipse cx="100" cy="96" rx="56" ry="7"/>'+
        '<path d="M88 95c0-6 12-6 12 0 0-6 12-6 12 0 0 6-12 9-12 12 0-3-12-6-12-12z" opacity=".75"/>'+
      '</g>',

    latte:
      steam3(100, 48) +
      '<path class="fl" d="M73 62q13 5 27 0t27 0L121 172q-1 8-9 8H88q-8 0-9-8z"/>'+
      '<path class="fm" d="M75 104q12-5 25 0t25 0L121 172q-1 8-9 8H88q-8 0-9-8z"/>'+
      '<g class="ln">'+
        '<path d="M70 50L79 172q1 8 9 8h24q8 0 9-8L130 50"/>'+
        '<path d="M127 78c26 0 26 52-3 54"/>'+
        '<path d="M73 62q13 5 27 0t27 0" opacity=".7"/>'+
        '<path d="M75 104q12-5 25 0t25 0" opacity=".7"/>'+
        '<ellipse cx="100" cy="186" rx="44" ry="6" opacity=".6"/>'+
      '</g>',

    turk:
      '<g transform="translate(18 0)">' + steam3(100, 92) + '</g>'+
      '<g class="ln">'+
        '<path d="M86 100h64l-6 12q12 44-16 56h-20q-28-12-16-56z"/>'+
        '<path d="M148 106l44-14"/>'+
        '<path d="M82 100l-6-6" />'+
        '<path d="M30 150h40q-2 26-20 26t-20-26z"/>'+
        '<path d="M70 156c9 0 9 12-1 13"/>'+
        '<ellipse cx="50" cy="180" rx="30" ry="5"/>'+
        '<path d="M94 128q24 6 48 0" opacity=".5"/>'+
      '</g>'+
      '<path class="steam" d="M44 140c-6-8 6-14 0-22" />',

    cay:
      steam3(100, 60) +
      '<path class="fm" d="M83 92q-2 16 7 26q-11 20-7 50h34q4-30-7-50q9-10 7-26z"/>'+
      '<g class="ln">'+
        '<path d="M80 70q-6 30 8 48q-10 20-6 52h36q4-32-6-52q14-18 8-48"/>'+
        '<path d="M78 70h44"/>'+
        '<ellipse cx="100" cy="176" rx="46" ry="8"/>'+
        '<path d="M126 176l30-46" opacity=".8"/><ellipse cx="158" cy="126" rx="5" ry="3" transform="rotate(-56 158 126)" opacity=".8"/>'+
      '</g>',

    cikolata:
      '<g class="ln">'+
        '<path d="M52 92h96v66q0 16-16 16H68q-16 0-16-16z"/>'+
        '<path d="M148 106c26 0 26 42 0 42"/>'+
        '<path d="M50 94q-4-18 16-18q2-18 24-14q10-16 28-4q22-6 26 16q10 4 6 20"/>'+
        '<path d="M70 76q16 8 30-2q14 10 30 0" opacity=".55"/>'+
        '<path d="M60 92v10q0 6 5 6t5-6v-6M92 92v16q0 6 5 6t5-6v-14M124 92v8q0 5 5 5t5-5v-8" opacity=".7"/>'+
        '<ellipse cx="100" cy="182" rx="56" ry="6" opacity=".6"/>'+
      '</g>'+
      '<g class="fm"><rect x="118" y="44" width="10" height="7" rx="1.5" transform="rotate(20 123 47)"/><rect x="80" y="50" width="8" height="6" rx="1.5" transform="rotate(-15 84 53)"/></g>',

    espresso:
      steam3(100, 108) +
      '<g class="ln">'+
        '<path d="M68 118h64q0 38-32 38t-32-38z"/>'+
        '<path d="M131 126c16 0 16 20-3 22"/>'+
        '<ellipse cx="100" cy="160" rx="56" ry="9"/>'+
        '<ellipse cx="100" cy="118" rx="32" ry="4" opacity=".6"/>'+
        '<g transform="rotate(-25 40 182)"><ellipse cx="40" cy="182" rx="7" ry="10"/><path d="M40 173q-4 9 0 18"/></g>'+
        '<g transform="rotate(30 160 184)"><ellipse cx="160" cy="184" rx="7" ry="10"/><path d="M160 175q-4 9 0 18"/></g>'+
        '<g transform="rotate(70 140 190)"><ellipse cx="140" cy="190" rx="5" ry="7.5"/><path d="M140 183q-3 7 0 14"/></g>'+
      '</g>',

    buzlu:
      '<defs><clipPath id="gl1"><path d="M58 70L69 186q2 10 12 10h38q10 0 12-10L142 70z"/></clipPath></defs>'+
      '<path class="fm" d="M58 78q21-6 42 0t42 0L131 186q-2 10-12 10H81q-10 0-12-10z"/>'+
      '<g clip-path="url(#gl1)">'+
        '<rect class="ice" x="70" y="84" width="24" height="24" rx="4"/>'+
        '<rect class="ice i2" x="100" y="96" width="26" height="26" rx="4"/>'+
        '<rect class="ice i3" x="78" y="118" width="22" height="22" rx="4"/>'+
        bubbles(100, 185)+
      '</g>'+
      '<g class="ln">'+
        '<path d="M54 40L69 186q2 10 12 10h38q10 0 12-10L146 40"/><path d="M50 40h100"/>'+
        '<path d="M112 150L150 8M120 150L158 10"/><path d="M150 8l8 2"/>'+
        '<path d="M140 40c8-18 26-20 34-14-6 10-20 18-34 14z" opacity=".8"/>'+
      '</g>'+
      '<path class="drop" d="M60 100q3 5 0 8q-3-3 0-8z"/><path class="drop d2" d="M139 110q3 5 0 8q-3-3 0-8z"/>',

    frappe:
      '<path class="fm" d="M68 104L77 182h46l9-78z"/>'+
      '<path class="fl" d="M62 96q0-22 22-20q6-18 28-12q22-2 24 22q6 4 2 10z"/>'+
      '<g class="ln">'+
        '<path d="M64 96L76 184h48l12-88"/>'+
        '<path d="M60 96h80"/>'+
        '<path d="M62 96q0-22 22-20q6-18 28-12q22-2 24 22q6 4 2 10"/>'+
        '<path d="M76 84l8-6 8 7 8-8 8 8 8-7 8 6" opacity=".75"/>'+
        '<path d="M106 66L118 10M113 67L125 12"/><path d="M118 10l7 2"/>'+
        '<path d="M70 130q30 8 60 0" opacity=".5"/>'+
        '<ellipse cx="100" cy="190" rx="38" ry="5" opacity=".6"/>'+
      '</g>',

    kavanoz:
      '<defs><clipPath id="gl2"><path d="M62 66h76v102q0 10-10 10H72q-10 0-10-10z"/></clipPath></defs>'+
      '<g clip-path="url(#gl2)">'+
        '<path class="fl" d="M60 120q20-8 40 0t40 0v70H60z"/>'+
        '<path class="fm" d="M60 84q20-6 40 0t40 0v38q-20 8-40 0t-40 0z"/>'+
        '<rect class="ice" x="72" y="80" width="22" height="22" rx="4"/>'+
        '<rect class="ice i2" x="104" y="92" width="24" height="24" rx="4"/>'+
        bubbles(100, 172)+
      '</g>'+
      '<g class="ln">'+
        '<path d="M58 48h84v14H58z"/>'+
        '<path d="M62 62v106q0 12 12 12h52q12 0 12-12V62"/>'+
        '<path d="M138 82c22 0 22 54 0 54"/><path d="M138 94c10 0 10 30 0 30" opacity=".6"/>'+
        '<path d="M108 48L122 6M115 49L129 8"/><path d="M122 6l7 2"/>'+
        '<path d="M66 72v90" opacity=".35"/>'+
      '</g>',

    coldbrew:
      '<defs><clipPath id="gl3"><path d="M78 60q-20 14-20 44v66q0 12 12 12h60q12 0 12-12v-66q0-30-20-44z"/></clipPath></defs>'+
      '<g clip-path="url(#gl3)"><path class="fm" d="M50 96q25-6 50 0t50 0v90H50z"/>'+ bubbles(100, 172) +'</g>'+
      '<g class="ln">'+
        '<path d="M80 36h40v20H80z"/>'+
        '<path d="M80 56q-22 14-22 48v66q0 12 12 12h60q12 0 12-12v-66q0-34-22-48"/>'+
        '<path d="M74 122h52v28H74z" opacity=".8"/>'+
        '<path d="M84 132h32M88 140h24" opacity=".6"/>'+
        '<path d="M150 150h26l-3 32h-20z"/><rect class="ice" x="155" y="158" width="10" height="10" rx="2"/>'+
      '</g>',

    cikolataIce:
      '<defs><clipPath id="gl4"><path d="M58 70L69 186q2 10 12 10h38q10 0 12-10L142 70z"/></clipPath></defs>'+
      '<path class="fm" d="M58 84q21-6 42 0t42 0L131 186q-2 10-12 10H81q-10 0-12-10z"/>'+
      '<g clip-path="url(#gl4)">'+
        '<path class="ln" d="M60 70q4 30 2 44M80 70q-2 24 2 40M100 70q3 18-1 30M120 70q-3 26 1 44M140 70q-3 20-2 34" opacity=".7"/>'+
        bubbles(100, 185)+
      '</g>'+
      '<path class="fl" d="M54 66q-2-20 20-18q8-16 26-10q18-8 26 8q20-2 20 20z"/>'+
      '<g class="ln">'+
        '<path d="M54 40L69 186q2 10 12 10h38q10 0 12-10L146 40" opacity="0"/>'+
        '<path d="M56 66L69 186q2 10 12 10h38q10 0 12-10L144 66"/>'+
        '<path d="M54 66q-2-20 20-18q8-16 26-10q18-8 26 8q20-2 20 20z"/>'+
        '<path d="M84 46q6-14 14-8M110 40q8-6 12 4" opacity=".7"/>'+
        '<path d="M118 34L140 4M124 37L146 7"/>'+
      '</g>'+
      '<path class="drop" d="M62 110q3 5 0 8q-3-3 0-8z"/>'
  };

  // Grup başlığı ikonları (24x24)
  window.IKON = {
    cekirdek: '<g transform="rotate(30 12 12)"><ellipse cx="12" cy="12" rx="6" ry="9"/><path d="M12 3q-5 9 0 18"/></g>',
    cikolata: '<rect x="4" y="5" width="16" height="14" rx="2"/><path d="M4 12h16M9.3 5v14M14.6 5v14"/>',
    yaprak: '<path d="M5 19C5 10 11 5 20 4c0 9-5 15-15 15z"/><path d="M5 19L14 10"/>',
    cezve: '<path d="M5 8h10l-1 2q2 8-3 10H9q-5-2-3-10z"/><path d="M15 9l6-2"/>',
    damla: '<path d="M12 3q7 8 7 12a7 7 0 0 1-14 0q0-4 7-12z"/><path d="M9 15q0 3 3 3" opacity=".7"/>'
  };
})();
