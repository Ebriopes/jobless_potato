"use strict";(self.webpackChunkjobless_potato=self.webpackChunkjobless_potato||[]).push([[356],{1356:(z,d,i)=>{i.r(d),i.d(d,{RickAndMortyModule:()=>w});var m=i(6895),s=i(3546),l=i(4859),r=i(4650),g=i(3238),p=i(1281);const y=new r.OlP("MAT_PROGRESS_BAR_DEFAULT_OPTIONS"),A=(0,g.pj)(class{constructor(e){this._elementRef=e}},"primary");let k=(()=>{class e extends A{constructor(n,t,o,_,c){super(n),this._ngZone=t,this._changeDetectorRef=o,this._animationMode=_,this._isNoopAnimation=!1,this._value=0,this._bufferValue=0,this.animationEnd=new r.vpe,this._mode="determinate",this._transitionendHandler=h=>{0===this.animationEnd.observers.length||!h.target||!h.target.classList.contains("mdc-linear-progress__primary-bar")||("determinate"===this.mode||"buffer"===this.mode)&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))},this._isNoopAnimation="NoopAnimations"===_,c&&(c.color&&(this.color=this.defaultColor=c.color),this.mode=c.mode||this.mode)}get value(){return this._value}set value(n){this._value=u((0,p.su)(n)),this._changeDetectorRef.markForCheck()}get bufferValue(){return this._bufferValue||0}set bufferValue(n){this._bufferValue=u((0,p.su)(n)),this._changeDetectorRef.markForCheck()}get mode(){return this._mode}set mode(n){this._mode=n,this._changeDetectorRef.markForCheck()}ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._elementRef.nativeElement.addEventListener("transitionend",this._transitionendHandler)})}ngOnDestroy(){this._elementRef.nativeElement.removeEventListener("transitionend",this._transitionendHandler)}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${"buffer"===this.mode?this.bufferValue:100}%`}_isIndeterminate(){return"indeterminate"===this.mode||"query"===this.mode}}return e.\u0275fac=function(n){return new(n||e)(r.Y36(r.SBq),r.Y36(r.R0b),r.Y36(r.sBO),r.Y36(r.QbO,8),r.Y36(y,8))},e.\u0275cmp=r.Xpm({type:e,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:8,hostBindings:function(n,t){2&n&&(r.uIk("aria-valuenow",t._isIndeterminate()?null:t.value)("mode",t.mode),r.ekj("_mat-animation-noopable",t._isNoopAnimation)("mdc-linear-progress--animation-ready",!t._isNoopAnimation)("mdc-linear-progress--indeterminate",t._isIndeterminate()))},inputs:{color:"color",value:"value",bufferValue:"bufferValue",mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],features:[r.qOj],decls:7,vars:4,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(n,t){1&n&&(r.TgZ(0,"div",0),r._UZ(1,"div",1)(2,"div",2),r.qZA(),r.TgZ(3,"div",3),r._UZ(4,"span",4),r.qZA(),r.TgZ(5,"div",5),r._UZ(6,"span",4),r.qZA()),2&n&&(r.xp6(1),r.Udp("flex-basis",t._getBufferBarFlexBasis()),r.xp6(2),r.Udp("transform",t._getPrimaryBarTransform()))},styles:["@keyframes mdc-linear-progress-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(var(--mdc-linear-progress-primary-half, 83.67142%))}100%{transform:translateX(var(--mdc-linear-progress-primary-full, 200.611057%))}}@keyframes mdc-linear-progress-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(var(--mdc-linear-progress-secondary-quarter, 37.651913%))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(var(--mdc-linear-progress-secondary-half, 84.386165%))}100%{transform:translateX(var(--mdc-linear-progress-secondary-full, 160.277782%))}}@keyframes mdc-linear-progress-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-buffering{from{transform:rotate(180deg) translateX(-10px)}}@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(var(--mdc-linear-progress-primary-half-neg, -83.67142%))}100%{transform:translateX(var(--mdc-linear-progress-primary-full-neg, -200.611057%))}}@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(var(--mdc-linear-progress-secondary-quarter-neg, -37.651913%))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(var(--mdc-linear-progress-secondary-half-neg, -84.386165%))}100%{transform:translateX(var(--mdc-linear-progress-secondary-full-neg, -160.277782%))}}@keyframes mdc-linear-progress-buffering-reverse{from{transform:translateX(-10px)}}.mdc-linear-progress{position:relative;width:100%;transform:translateZ(0);outline:1px solid rgba(0,0,0,0);overflow:hidden;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}@media screen and (forced-colors: active){.mdc-linear-progress{outline-color:CanvasText}}.mdc-linear-progress__bar{position:absolute;width:100%;height:100%;animation:none;transform-origin:top left;transition:transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__bar-inner{display:inline-block;position:absolute;width:100%;animation:none;border-top-style:solid}.mdc-linear-progress__buffer{display:flex;position:absolute;width:100%;height:100%}.mdc-linear-progress__buffer-dots{background-repeat:repeat-x;flex:auto;transform:rotate(180deg);animation:mdc-linear-progress-buffering 250ms infinite linear}.mdc-linear-progress__buffer-bar{flex:0 1 100%;transition:flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__primary-bar{transform:scaleX(0)}.mdc-linear-progress__secondary-bar{display:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__bar{transition:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{left:-145.166611%}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{left:-54.888891%;display:block}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation:mdc-linear-progress-primary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-primary-indeterminate-scale 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation:mdc-linear-progress-secondary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-secondary-indeterminate-scale 2s infinite linear}[dir=rtl] .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__bar{right:0;-webkit-transform-origin:center right;transform-origin:center right}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation-name:mdc-linear-progress-primary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation-name:mdc-linear-progress-secondary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__buffer-dots,.mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__buffer-dots{animation:mdc-linear-progress-buffering-reverse 250ms infinite linear;transform:rotate(0)}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{right:-145.166611%;left:auto}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{right:-54.888891%;left:auto}.mdc-linear-progress--closed{opacity:0}.mdc-linear-progress--closed-animation-off .mdc-linear-progress__buffer-dots{animation:none}.mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar,.mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar .mdc-linear-progress__bar-inner{animation:none}.mdc-linear-progress__bar-inner{border-color:var(--mdc-linear-progress-active-indicator-color, #6200ee)}.mdc-linear-progress__buffer-dots{background-image:url(\"data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E\")}.mdc-linear-progress__buffer-bar{background-color:#e6e6e6}.mdc-linear-progress{height:var(--mdc-linear-progress-track-height, 4px)}.mdc-linear-progress__bar-inner{border-top-width:var(--mdc-linear-progress-track-height, 4px)}.mdc-linear-progress__buffer-dots{background-size:10px var(--mdc-linear-progress-track-height, 4px)}.mat-mdc-progress-bar{display:block}.mat-mdc-progress-bar[mode=query]{transform:scaleX(-1)}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner{animation:none}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar{transition:transform 1ms}"],encapsulation:2,changeDetection:0}),e})();function u(e,a=0,n=100){return Math.max(a,Math.min(n,e))}let M=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[g.BQ]}),e})();var f=i(9299),x=i(7579),b=i(2722),R=i(9358),C=i(5830);let T=(()=>{class e{constructor(n){this.api=n,this.baseUrl="https://rickandmortyapi.com/api"}getCharacters(){return this.api.get(`${this.baseUrl}/character`)}getCharacter(n){return this.api.get(`${this.baseUrl}/character/${n}`)}}return e.\u0275fac=function(n){return new(n||e)(r.LFG(C.s))},e.\u0275prov=r.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function Z(e,a){if(1&e){const n=r.EpF();r.TgZ(0,"button",7),r.NdJ("click",function(){r.CHM(n);const o=r.oxw(2);return r.KtG(o.getNewCharacter(o.prevCharacter))}),r._uU(1," Anterior "),r.qZA()}}function B(e,a){if(1&e){const n=r.EpF();r.ynx(0),r.TgZ(1,"mat-card-header")(2,"mat-card-title"),r._uU(3),r.qZA(),r.TgZ(4,"mat-card-subtitle"),r._uU(5),r.qZA()(),r._UZ(6,"img",4),r.TgZ(7,"mat-card-content")(8,"p")(9,"b"),r._uU(10,"Estado:"),r.qZA(),r._uU(11),r.qZA(),r.TgZ(12,"p")(13,"b"),r._uU(14,"Origen:"),r.qZA(),r._uU(15),r.qZA(),r.TgZ(16,"p")(17,"b"),r._uU(18,"Localizaci\xf3n:"),r.qZA(),r._uU(19),r.qZA()(),r.TgZ(20,"mat-card-actions",5),r.YNc(21,Z,2,0,"button",6),r.TgZ(22,"button",7),r.NdJ("click",function(){r.CHM(n);const o=r.oxw();return r.KtG(o.getNewCharacter())}),r._uU(23," Siguiente "),r.qZA()(),r.BQk()}if(2&e){const n=r.oxw();r.xp6(3),r.hij(" ",n.character.name," "),r.xp6(2),r.AsE(" ",n.character.species," - ",n.character.gender," "),r.xp6(1),r.Q6J("src",n.character.image,r.LSH)("alt",n.character.name),r.xp6(5),r.hij(" ",n.character.status," "),r.xp6(4),r.hij(" ",n.character.origin.name," "),r.xp6(4),r.hij(" ",n.character.location.name," "),r.xp6(2),r.Q6J("ngIf",n.prevCharacter)}}function O(e,a){1&e&&r._UZ(0,"mat-progress-bar",8)}const X=[{path:"",component:(()=>{class e{constructor(n,t){this.navbarService=n,this.rickApi=t,this.unsubscribe=new x.x,this.loading=!0,this.countTotal=1,this.navbarService.setTitle("Rick & Morty")}ngOnInit(){this.rickApi.getCharacters().pipe((0,b.R)(this.unsubscribe)).subscribe(({info:n})=>{this.countTotal=n?.count,this.getNewCharacter()})}ngOnDestroy(){this.unsubscribe.next(),this.unsubscribe.complete()}getNewCharacter(n){this.loading=!0;const t=Math.ceil(Math.random()*this.countTotal);this.prevCharacter=this.character?.id,this.rickApi.getCharacter(n||t).pipe((0,b.R)(this.unsubscribe)).subscribe(o=>{this.character=o,this.loading=!1})}}return e.\u0275fac=function(n){return new(n||e)(r.Y36(R.I),r.Y36(T))},e.\u0275cmp=r.Xpm({type:e,selectors:[["app-rick-and-morty"]],decls:6,vars:2,consts:[[1,"container"],[1,"card"],[4,"ngIf"],["mode","indeterminate",4,"ngIf"],["mat-card-image","",3,"src","alt"],["align","end"],["mat-raised-button","","color","accent",3,"click",4,"ngIf"],["mat-raised-button","","color","accent",3,"click"],["mode","indeterminate"]],template:function(n,t){1&n&&(r.TgZ(0,"main",0)(1,"h1"),r._uU(2,"Bienvenido a la API de Rick & Morty"),r.qZA(),r.TgZ(3,"mat-card",1),r.YNc(4,B,24,9,"ng-container",2),r.YNc(5,O,1,0,"mat-progress-bar",3),r.qZA()()),2&n&&(r.xp6(4),r.Q6J("ngIf",t.character),r.xp6(1),r.Q6J("ngIf",t.loading))},dependencies:[m.O5,s.a8,s.hq,s.dn,s.dk,s.G2,s.$j,s.n5,l.lW,k],styles:["[_nghost-%COMP%]{padding:2rem;height:100%}.container[_ngcontent-%COMP%]{height:inherit;display:flex;flex-direction:column;align-items:center;justify-content:space-evenly}.card[_ngcontent-%COMP%]{width:300px}.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:250px;margin-block:1rem;object-fit:cover;object-position:top}mat-card-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-of-type{margin-inline-start:1rem}"]}),e})()}];let P=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[f.Bz.forChild(X),f.Bz]}),e})(),w=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[m.ez,P,s.QW,l.ot,M]}),e})()}}]);