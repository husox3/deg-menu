// Orta ekran: ikili kombo sahneleri (sol üst + sağ alt), tatlı vitrini, diğerleri, kısa logo
window.runCenter = function (C, S, show, playLogo) {
  function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;')}

  // pastel zemin, vurgu, ikinci ton
  var PAL = [
    ['#F8DCC8','#C46A43','#F2B99A'], ['#DDE8CF','#5F7A46','#BFD3A8'], ['#F6E8BC','#A47B17','#EED48A'],
    ['#D4EAE6','#3F8682','#A8D3CC'], ['#F4D6DA','#B0566A','#E8B0BA'], ['#E5DEF1','#7561A0','#C9BDE3']
  ];

  // tüm fiyatlar tek sözlükte
  var fiyat = {}, foto = {};
  ['left','right'].forEach(function(r){
    (window.MENU[r].gruplar||[]).forEach(function(col){col.forEach(function(g){g.urunler.forEach(function(u){fiyat[u[0]]=u[1]})})});
  });
  C.tatlilar.forEach(function(t){fiyat[t[0]]=t[1]; foto[t[0]]=t[2]});
  C.diger.forEach(function(g){g.urunler.forEach(function(u){fiyat[u[0]]=u[1]})});
  for (var k in C.foto) foto[k]=C.foto[k];
  function img(ad){return foto[ad]?'<img src="foto/'+foto[ad]+'.jpg">':''}
  function img2(f){return '<img src="foto/'+f+'.jpg">'}

  if(C.komboFoto===false) document.getElementById('komboScene').className+=' fotosuz';
  var kS=document.getElementById('komboScene'), tS=document.getElementById('tatliScene'), dS=document.getElementById('digerScene');
  var komb=C.kombolar.filter(function(k){return fiyat[k[0]]!=null && fiyat[k[1]]!=null});
  // ikişerli grupla (tek kalırsa ilk kombo ile tamamlanır)
  var ciftler=[];
  for (var i=0;i<komb.length;i+=2) ciftler.push([i, i+1<komb.length?i+1:0]);

  var BEAN='<svg viewBox="0 0 24 24"><ellipse cx="12" cy="12" rx="7" ry="10" fill="COL"/><path d="M12 3c-3 5 3 13 0 18" stroke="#fff" stroke-width="1.4" fill="none" opacity=".7"/></svg>';
  var LEAF='<svg viewBox="0 0 24 24"><path d="M4 20C4 9 11 4 21 3c0 10-6 17-17 17z" fill="COL"/><path d="M5 19L16 8" stroke="#fff" stroke-width="1.2" opacity=".7"/></svg>';
  var STAR='<svg viewBox="0 0 24 24"><path d="M12 1l2.6 8.4L23 12l-8.4 2.6L12 23l-2.6-8.4L1 12l8.4-2.6z" fill="COL"/></svg>';
  var DOT='<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="COL"/></svg>';
  // [şekil, renk, sol%, üst%, boyut vmin, gecikme s, parıltı?]
  var DECO=[[BEAN,'#B9835A',49,3,3.2,0],[LEAF,'#8FAE74',94,46,4.2,-3],[STAR,'#E2A54B',47,52,2.6,-1,1],
            [DOT,'#E8B0BA',4,52,2.4,-5],[BEAN,'#8C5A3C',24,94,3,-2],[LEAF,'#A8D3CC',66,93,3.8,-6],
            [STAR,'#C46A43',90,6,2.2,-4,1],[DOT,'#C9BDE3',37,4,1.8,-7],[STAR,'#5F7A46',8,90,2,-2.5,1]];
  var YB=/\byilbasi\b/.test(document.body.className);
  if(YB){
    var FLK='<svg viewBox="0 0 24 24"><g stroke="COL" stroke-width="1.8" stroke-linecap="round" fill="none"><path d="M12 2v20M3.3 7l17.4 10M3.3 17L20.7 7"/></g></svg>';
    var BAL='<svg viewBox="0 0 24 24"><rect x="10" y="1" width="4" height="3" fill="#C9A24A"/><circle cx="12" cy="14" r="9" fill="COL"/><circle cx="9" cy="11" r="2" fill="rgba(255,255,255,.55)"/></svg>';
    DECO=[[STAR,'#C9A24A',49,3,3,0,1],[FLK,'#FFFFFF',94,46,4,-3],[BAL,'#B8403A',47,52,3,-1],
          [FLK,'#C9A24A',4,52,3,-5],[BAL,'#2F6B4F',24,94,3,-2],[FLK,'#FFFFFF',66,93,3.6,-6],
          [STAR,'#B8403A',90,6,2.4,-4,1],[FLK,'#DDE9EF',37,4,2.4,-7],[STAR,'#E8C46A',8,90,2.2,-2.5,1]];
    PAL=[['#80261F','#F1CB6E','#A8382F'],['#1B4A38','#F1CB6E','#2B6A52'],['#5E1A27','#F3D58A','#8C2C3C'],
         ['#173D30','#F1CB6E','#27604C'],['#7A2C1C','#F6D27A','#A3462B'],['#21473B','#F1CB6E','#317059']];
  }
  var decoHtml='';
  DECO.forEach(function(d){
    decoHtml+='<div class="deco'+(d[6]?' spark':'')+'" style="left:'+d[2]+'%;top:'+d[3]+'%;width:'+d[4]+'vmin;height:'+d[4]+'vmin;animation-delay:'+d[5]+'s">'+d[0].replace('COL',d[1])+'</div>';
  });

  var cup = window.ART && window.ART.cappuccino ? '<svg class="art on cup" viewBox="0 0 200 200" style="position:static;opacity:1;transform:none">'+window.ART.cappuccino+'</svg>' : '';
  var mini='<svg class="mini" viewBox="0 0 315 155"><g filter="url(#ink)"><image href="wordmark.png" width="315" height="185" y="-5"/><rect x="0" y="149" width="282" height="40" fill="#000"/></g></svg>';

  function kart(idx, yer){
    var k=komb[idx], p=PAL[idx%PAL.length], top=Math.floor((fiyat[k[0]]+fiyat[k[1]])/50)*50; // kombo fiyatı: toplam, 50 TL'ye aşağı yuvarlanır
    var ring='<svg viewBox="0 0 100 100"><defs><path id="rp'+yer+'" d="M50 50m-41 0a41 41 0 1 1 82 0a41 41 0 1 1-82 0"/></defs>'+
             '<circle cx="50" cy="50" r="47"/><text><textPath href="#rp'+yer+'">Birlikte daha lezzetli · </textPath></text></svg>';
    return '<div class="duo '+yer+'" style="--c:'+p[0]+';--a:'+p[1]+';--a2:'+p[2]+'">'+
      '<div class="arch">'+img(k[0])+'</div><div class="circ">'+img(k[1])+'</div><div class="plus">+</div>'+
      '<div class="txt">'+
        '<div class="ktag">Kombo '+(idx+1)+'</div>'+
        '<div class="nm">'+esc(k[0])+'</div>'+
        '<div class="amp">&amp;</div>'+
        '<div class="nm">'+esc(k[1])+'</div>'+
        // not: ürün fiyatları dökümü gösterilmiyor (indirim/kampanya gibi görünmesin)

      '</div>'+
      '<div class="badge">'+ring+'<div class="bin"><small>KOMBO</small><b>'+top+'<i>TL</i></b></div></div>'+
    '</div>';
  }

  function renderCift(ci){
    var c=ciftler[ci], dots='';
    for(var j=0;j<ciftler.length;j++) dots+='<i'+(j===ci?' class="on"':'')+'></i>';
    kS.innerHTML=decoHtml+
      '<div class="khead">'+cup+'<div class="eyebrow">'+(YB?'Yeni Yıl Kombosu':'Deg Kombo')+'</div><div class="script">Birlikte daha güzel</div><div class="lead">'+(YB?'Mutlu yıllar, afiyet olsun':'Tatlını seç, kahven yanında')+'</div></div>'+
      '<div class="kfoot">'+mini+'<div class="gm">Good Coffee, Good Mood</div><div class="kdots">'+dots+'</div></div>'+
      kart(c[0],'A')+kart(c[1],'B');
  }

  // tatlı vitrini
  var th='<div class="shead"><div class="eyebrow">Deg Coffee Company</div><h2>TATLILAR</h2><div class="script">Kahvenin yanına</div></div><div class="tgrid">';
  C.tatlilar.forEach(function(t,i){
    var p=PAL[i%PAL.length];
    th+='<div class="tcard" style="--c:'+p[0]+';--a:'+p[1]+';animation-delay:'+(0.25+i*0.08).toFixed(2)+'s"><div class="ph">'+img(t[0])+'</div>'+
        '<div class="nm">'+esc(t[0])+'</div><div class="pr">'+t[1]+'<small>TL</small></div></div>';
  });
  tS.innerHTML=th+'</div>';
  var cards=[].slice.call(tS.querySelectorAll('.tcard'));

  // diğerleri
  var SISE='<path d="M10 2h4v3l2 3v13a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V8l2-3z"/><path d="M8 12h8M8 17h8"/>';
  var DPAL=[PAL[1],PAL[0],PAL[3]];
  var DIKON={
    sandvic:'<path d="M3 10c0-3 4-6 9-6s9 3 9 6z"/><path d="M3 13h18"/><path d="M4 16h16l-1 3H5z"/><path d="M3 13c2 1.5 4 1.5 6 0s4-1.5 6 0 4 1.5 6 0"/>',
    seker:'<path d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0-8 0z"/><path d="M8 12L3 8.5v7z"/><path d="M16 12l5-3.5v7z"/><path d="M10.5 9.5l3 5"/>'
  };
  var dh='';
  C.diger.forEach(function(g,gi){
    var p=DPAL[gi%DPAL.length];
    dh+='<div class="dcol" style="--c:'+p[0]+';--a:'+p[1]+'">'+(g.foto?'<div class="dimg">'+img2(g.foto)+'</div>':'<div class="dico"><svg viewBox="0 0 24 24">'+(DIKON[g.ikon]||SISE)+'</svg></div>')+
        '<h3>'+esc(g.ad)+'</h3>';
    g.urunler.forEach(function(u){
      dh+='<div class="row"><span class="n">'+esc(u[0])+'</span><span class="d"></span><span class="p">'+u[1]+'<small>TL</small></span></div>';
    });
    dh+='</div>';
  });
  if(C.diger.length===1){
    // tek grup: büyük fotoğraf + liste
    var g1=C.diger[0], p1=DPAL[1];
    dh='<div class="dcol" style="--c:'+p1[0]+';--a:'+p1[1]+'">'+(g1.foto?'<div class="dimg">'+img2(g1.foto)+'</div>':'')+
       '<div class="dlist"><div class="dey">Deg Coffee Company</div><h3>'+esc(g1.ad)+'</h3><div class="dsc">Kahvenin yanına küçük bir şey</div>';
    g1.urunler.forEach(function(u,ui){
      dh+='<div class="row" style="animation-delay:'+(0.3+ui*0.1).toFixed(2)+'s"><span class="n">'+esc(u[0])+'</span><span class="d"></span><span class="p">'+u[1]+'<small>TL</small></span></div>';
    });
    dh+='</div></div>';
    dS.className+=' tek';
  }
  dS.innerHTML=dh;

  // akış: kombo çifti, kombo çifti, tatlı, kombo çifti, diğer; her birinin arasında logo
  var seq=[];
  ciftler.forEach(function(c,ci){
    seq.push(['k',ci]);
    if(ci===1) seq.push(['t']);
  });
  if(ciftler.length<2) seq.push(['t']);
  seq.push(['d']);
  // her sahne geçişinde logo (süre: SURE.logo)
  var seq2=[]; seq.forEach(function(x){ seq2.push(x); seq2.push(['l']); }); seq=seq2;

  var p=0, hiT, hi=-1;
  // test için: ?s=center&at=t (t=tatlı, d=diğer, k=kombo)
  var at=(location.search.match(/at=(\w)/)||[])[1];
  if(at) for(var q=0;q<seq.length;q++) if(seq[q][0]===at){p=q;break;}
  function step(){
    if(p===seq.length-1 && window.degTur) window.degTur(); // son logo: sarmalayıcıya haber ver
    var s=seq[p]; p=(p+1)%seq.length;
    clearInterval(hiT);
    if(s[0]==='k'){ renderCift(s[1]); show(kS); setTimeout(step,S.kombo*1000); }
    else if(s[0]==='t'){
      show(tS);
      hiT=setInterval(function(){ if(hi>=0)cards[hi].classList.remove('hi'); hi=(hi+1)%cards.length; cards[hi].classList.add('hi'); },3000);
      setTimeout(function(){ if(hi>=0)cards[hi].classList.remove('hi'); hi=-1; step(); },S.tatli*1000);
    }
    else if(s[0]==='d'){ show(dS); setTimeout(step,S.diger*1000); }
    else { playLogo(step); }
  }
  step();
};
