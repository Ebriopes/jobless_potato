"use strict";(self.webpackChunkjobless_potato=self.webpackChunkjobless_potato||[]).push([[751],{7420:(ht,x,a)=>{a.r(x),a.d(x,{LoginModule:()=>rt});var u=a(6895),P=a(9299),c=a(4006),e=a(4650),z=a(7556),Z=a(9358),I=a(3546),v=a(9549),R=a(4859),A=a(4144),M=a(4385),y=a(3238),p=a(2722),F=a(5698),_=a(1281),D=a(9521),L=a(3353),T=a(7253),G=a(445),b=a(8184),E=a(1218),X=a(4080),S=a(7579);a(7340);const V=["tooltip"],Y=new e.OlP("mat-tooltip-scroll-strategy"),k={provide:Y,deps:[b.aV],useFactory:function U(s){return()=>s.scrollStrategies.reposition({scrollThrottle:20})}},J=new e.OlP("mat-tooltip-default-options",{providedIn:"root",factory:function j(){return{showDelay:0,hideDelay:0,touchendHideDelay:1500}}}),N="tooltip-panel",B=(0,L.i$)({passive:!0});let tt=(()=>{class s{get position(){return this._position}set position(t){t!==this._position&&(this._position=t,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(t){this._positionAtOrigin=(0,_.Ig)(t),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(t){this._disabled=(0,_.Ig)(t),this._disabled?this.hide(0):this._setupPointerEnterEventsIfNeeded()}get showDelay(){return this._showDelay}set showDelay(t){this._showDelay=(0,_.su)(t)}get hideDelay(){return this._hideDelay}set hideDelay(t){this._hideDelay=(0,_.su)(t),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}get message(){return this._message}set message(t){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this._message,"tooltip"),this._message=null!=t?String(t).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage(),this._ngZone.runOutsideAngular(()=>{Promise.resolve().then(()=>{this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")})}))}get tooltipClass(){return this._tooltipClass}set tooltipClass(t){this._tooltipClass=t,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}constructor(t,i,o,n,r,m,f,w,C,g,h,O){this._overlay=t,this._elementRef=i,this._scrollDispatcher=o,this._viewContainerRef=n,this._ngZone=r,this._platform=m,this._ariaDescriber=f,this._focusMonitor=w,this._dir=g,this._defaultOptions=h,this._position="below",this._positionAtOrigin=!1,this._disabled=!1,this._viewInitialized=!1,this._pointerExitEventsInitialized=!1,this._viewportMargin=8,this._cssClassPrefix="mat",this._showDelay=this._defaultOptions.showDelay,this._hideDelay=this._defaultOptions.hideDelay,this.touchGestures="auto",this._message="",this._passiveListeners=[],this._destroyed=new S.x,this._scrollStrategy=C,this._document=O,h&&(h.position&&(this.position=h.position),h.positionAtOrigin&&(this.positionAtOrigin=h.positionAtOrigin),h.touchGestures&&(this.touchGestures=h.touchGestures)),g.change.pipe((0,p.R)(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe((0,p.R)(this._destroyed)).subscribe(t=>{t?"keyboard"===t&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){const t=this._elementRef.nativeElement;clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._passiveListeners.forEach(([i,o])=>{t.removeEventListener(i,o,B)}),this._passiveListeners.length=0,this._destroyed.next(),this._destroyed.complete(),this._ariaDescriber.removeDescription(t,this.message,"tooltip"),this._focusMonitor.stopMonitoring(t)}show(t=this.showDelay,i){if(this.disabled||!this.message||this._isTooltipVisible())return void this._tooltipInstance?._cancelPendingAnimations();const o=this._createOverlay(i);this._detach(),this._portal=this._portal||new X.C5(this._tooltipComponent,this._viewContainerRef);const n=this._tooltipInstance=o.attach(this._portal).instance;n._triggerElement=this._elementRef.nativeElement,n._mouseLeaveHideDelay=this._hideDelay,n.afterHidden().pipe((0,p.R)(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),n.show(t)}hide(t=this.hideDelay){const i=this._tooltipInstance;i&&(i.isVisible()?i.hide(t):(i._cancelPendingAnimations(),this._detach()))}toggle(t){this._isTooltipVisible()?this.hide():this.show(void 0,t)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(t){if(this._overlayRef){const n=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!t)&&n._origin instanceof e.SBq)return this._overlayRef;this._detach()}const i=this._scrollDispatcher.getAncestorScrollContainers(this._elementRef),o=this._overlay.position().flexibleConnectedTo(this.positionAtOrigin&&t||this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(i);return o.positionChanges.pipe((0,p.R)(this._destroyed)).subscribe(n=>{this._updateCurrentPositionClass(n.connectionPair),this._tooltipInstance&&n.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=this._overlay.create({direction:this._dir,positionStrategy:o,panelClass:`${this._cssClassPrefix}-${N}`,scrollStrategy:this._scrollStrategy()}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe((0,p.R)(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe((0,p.R)(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe((0,p.R)(this._destroyed)).subscribe(n=>{this._isTooltipVisible()&&n.keyCode===D.hY&&!(0,D.Vb)(n)&&(n.preventDefault(),n.stopPropagation(),this._ngZone.run(()=>this.hide(0)))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(t){const i=t.getConfig().positionStrategy,o=this._getOrigin(),n=this._getOverlayPosition();i.withPositions([this._addOffset({...o.main,...n.main}),this._addOffset({...o.fallback,...n.fallback})])}_addOffset(t){return t}_getOrigin(){const t=!this._dir||"ltr"==this._dir.value,i=this.position;let o;"above"==i||"below"==i?o={originX:"center",originY:"above"==i?"top":"bottom"}:"before"==i||"left"==i&&t||"right"==i&&!t?o={originX:"start",originY:"center"}:("after"==i||"right"==i&&t||"left"==i&&!t)&&(o={originX:"end",originY:"center"});const{x:n,y:r}=this._invertPosition(o.originX,o.originY);return{main:o,fallback:{originX:n,originY:r}}}_getOverlayPosition(){const t=!this._dir||"ltr"==this._dir.value,i=this.position;let o;"above"==i?o={overlayX:"center",overlayY:"bottom"}:"below"==i?o={overlayX:"center",overlayY:"top"}:"before"==i||"left"==i&&t||"right"==i&&!t?o={overlayX:"end",overlayY:"center"}:("after"==i||"right"==i&&t||"left"==i&&!t)&&(o={overlayX:"start",overlayY:"center"});const{x:n,y:r}=this._invertPosition(o.overlayX,o.overlayY);return{main:o,fallback:{overlayX:n,overlayY:r}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),this._ngZone.onMicrotaskEmpty.pipe((0,F.q)(1),(0,p.R)(this._destroyed)).subscribe(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()}))}_setTooltipClass(t){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=t,this._tooltipInstance._markForCheck())}_invertPosition(t,i){return"above"===this.position||"below"===this.position?"top"===i?i="bottom":"bottom"===i&&(i="top"):"end"===t?t="start":"start"===t&&(t="end"),{x:t,y:i}}_updateCurrentPositionClass(t){const{overlayY:i,originX:o,originY:n}=t;let r;if(r="center"===i?this._dir&&"rtl"===this._dir.value?"end"===o?"left":"right":"start"===o?"left":"right":"bottom"===i&&"top"===n?"above":"below",r!==this._currentPosition){const m=this._overlayRef;if(m){const f=`${this._cssClassPrefix}-${N}-`;m.removePanelClass(f+this._currentPosition),m.addPanelClass(f+r)}this._currentPosition=r}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._passiveListeners.length||(this._platformSupportsMouseEvents()?this._passiveListeners.push(["mouseenter",t=>{let i;this._setupPointerExitEventsIfNeeded(),void 0!==t.x&&void 0!==t.y&&(i=t),this.show(void 0,i)}]):"off"!==this.touchGestures&&(this._disableNativeGesturesIfNecessary(),this._passiveListeners.push(["touchstart",t=>{const i=t.targetTouches?.[0],o=i?{x:i.clientX,y:i.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),clearTimeout(this._touchstartTimeout),this._touchstartTimeout=setTimeout(()=>this.show(void 0,o),500)}])),this._addListeners(this._passiveListeners))}_setupPointerExitEventsIfNeeded(){if(this._pointerExitEventsInitialized)return;this._pointerExitEventsInitialized=!0;const t=[];if(this._platformSupportsMouseEvents())t.push(["mouseleave",i=>{const o=i.relatedTarget;(!o||!this._overlayRef?.overlayElement.contains(o))&&this.hide()}],["wheel",i=>this._wheelListener(i)]);else if("off"!==this.touchGestures){this._disableNativeGesturesIfNecessary();const i=()=>{clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions.touchendHideDelay)};t.push(["touchend",i],["touchcancel",i])}this._addListeners(t),this._passiveListeners.push(...t)}_addListeners(t){t.forEach(([i,o])=>{this._elementRef.nativeElement.addEventListener(i,o,B)})}_platformSupportsMouseEvents(){return!this._platform.IOS&&!this._platform.ANDROID}_wheelListener(t){if(this._isTooltipVisible()){const i=this._document.elementFromPoint(t.clientX,t.clientY),o=this._elementRef.nativeElement;i!==o&&!o.contains(i)&&this.hide()}}_disableNativeGesturesIfNecessary(){const t=this.touchGestures;if("off"!==t){const i=this._elementRef.nativeElement,o=i.style;("on"===t||"INPUT"!==i.nodeName&&"TEXTAREA"!==i.nodeName)&&(o.userSelect=o.msUserSelect=o.webkitUserSelect=o.MozUserSelect="none"),("on"===t||!i.draggable)&&(o.webkitUserDrag="none"),o.touchAction="none",o.webkitTapHighlightColor="transparent"}}}return s.\u0275fac=function(t){e.$Z()},s.\u0275dir=e.lG2({type:s,inputs:{position:["matTooltipPosition","position"],positionAtOrigin:["matTooltipPositionAtOrigin","positionAtOrigin"],disabled:["matTooltipDisabled","disabled"],showDelay:["matTooltipShowDelay","showDelay"],hideDelay:["matTooltipHideDelay","hideDelay"],touchGestures:["matTooltipTouchGestures","touchGestures"],message:["matTooltip","message"],tooltipClass:["matTooltipClass","tooltipClass"]}}),s})(),it=(()=>{class s extends tt{constructor(t,i,o,n,r,m,f,w,C,g,h,O){super(t,i,o,n,r,m,f,w,C,g,h,O),this._tooltipComponent=ot,this._cssClassPrefix="mat-mdc",this._viewportMargin=8}_addOffset(t){const o=!this._dir||"ltr"==this._dir.value;return"top"===t.originY?t.offsetY=-8:"bottom"===t.originY?t.offsetY=8:"start"===t.originX?t.offsetX=o?-8:8:"end"===t.originX&&(t.offsetX=o?8:-8),t}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(b.aV),e.Y36(e.SBq),e.Y36(E.mF),e.Y36(e.s_b),e.Y36(e.R0b),e.Y36(L.t4),e.Y36(T.$s),e.Y36(T.tE),e.Y36(Y),e.Y36(G.Is,8),e.Y36(J,8),e.Y36(u.K0))},s.\u0275dir=e.lG2({type:s,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],exportAs:["matTooltip"],features:[e.qOj]}),s})(),et=(()=>{class s{constructor(t,i){this._changeDetectorRef=t,this._closeOnInteraction=!1,this._isVisible=!1,this._onHide=new S.x,this._animationsDisabled="NoopAnimations"===i}show(t){clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},t)}hide(t){clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},t)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:t}){(!t||!this._triggerElement.contains(t))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){}_handleAnimationEnd({animationName:t}){(t===this._showAnimation||t===this._hideAnimation)&&this._finalizeAnimation(t===this._showAnimation)}_cancelPendingAnimations(){clearTimeout(this._showTimeoutId),clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(t){t?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(t){const i=this._tooltip.nativeElement,o=this._showAnimation,n=this._hideAnimation;if(i.classList.remove(t?n:o),i.classList.add(t?o:n),this._isVisible=t,t&&!this._animationsDisabled&&"function"==typeof getComputedStyle){const r=getComputedStyle(i);("0s"===r.getPropertyValue("animation-duration")||"none"===r.getPropertyValue("animation-name"))&&(this._animationsDisabled=!0)}t&&this._onShow(),this._animationsDisabled&&(i.classList.add("_mat-animation-noopable"),this._finalizeAnimation(t))}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(e.sBO),e.Y36(e.QbO,8))},s.\u0275dir=e.lG2({type:s}),s})(),ot=(()=>{class s extends et{constructor(t,i,o){super(t,o),this._elementRef=i,this._isMultiline=!1,this._showAnimation="mat-mdc-tooltip-show",this._hideAnimation="mat-mdc-tooltip-hide"}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){const t=this._elementRef.nativeElement.getBoundingClientRect();return t.height>24&&t.width>=200}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(e.sBO),e.Y36(e.SBq),e.Y36(e.QbO,8))},s.\u0275cmp=e.Xpm({type:s,selectors:[["mat-tooltip-component"]],viewQuery:function(t,i){if(1&t&&e.Gf(V,7),2&t){let o;e.iGM(o=e.CRH())&&(i._tooltip=o.first)}},hostAttrs:["aria-hidden","true"],hostVars:2,hostBindings:function(t,i){1&t&&e.NdJ("mouseleave",function(n){return i._handleMouseLeave(n)}),2&t&&e.Udp("zoom",i.isVisible()?1:null)},features:[e.qOj],decls:4,vars:4,consts:[[1,"mdc-tooltip","mdc-tooltip--shown","mat-mdc-tooltip",3,"ngClass","animationend"],["tooltip",""],[1,"mdc-tooltip__surface","mdc-tooltip__surface-animation"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0,1),e.NdJ("animationend",function(n){return i._handleAnimationEnd(n)}),e.TgZ(2,"div",2),e._uU(3),e.qZA()()),2&t&&(e.ekj("mdc-tooltip--multiline",i._isMultiline),e.Q6J("ngClass",i.tooltipClass),e.xp6(3),e.Oqu(i.message))},dependencies:[u.mk],styles:['.mdc-tooltip__surface{word-break:var(--mdc-tooltip-word-break, normal);overflow-wrap:anywhere}.mdc-tooltip{position:fixed;display:none;z-index:9}.mdc-tooltip-wrapper--rich{position:relative}.mdc-tooltip--shown,.mdc-tooltip--showing,.mdc-tooltip--hide{display:inline-flex}.mdc-tooltip--shown.mdc-tooltip--rich,.mdc-tooltip--showing.mdc-tooltip--rich,.mdc-tooltip--hide.mdc-tooltip--rich{display:inline-block;left:-320px;position:absolute}.mdc-tooltip__surface{line-height:16px;padding:4px 8px;min-width:40px;max-width:200px;min-height:24px;max-height:40vh;box-sizing:border-box;overflow:hidden;text-align:center}.mdc-tooltip__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-tooltip__surface::before{border-color:CanvasText}}.mdc-tooltip--rich .mdc-tooltip__surface{align-items:flex-start;display:flex;flex-direction:column;min-height:24px;min-width:40px;max-width:320px;position:relative}.mdc-tooltip--multiline .mdc-tooltip__surface{text-align:left}[dir=rtl] .mdc-tooltip--multiline .mdc-tooltip__surface,.mdc-tooltip--multiline .mdc-tooltip__surface[dir=rtl]{text-align:right}.mdc-tooltip__surface .mdc-tooltip__title{margin:0 8px}.mdc-tooltip__surface .mdc-tooltip__content{max-width:calc(200px - (2 * 8px));margin:8px;text-align:left}[dir=rtl] .mdc-tooltip__surface .mdc-tooltip__content,.mdc-tooltip__surface .mdc-tooltip__content[dir=rtl]{text-align:right}.mdc-tooltip--rich .mdc-tooltip__surface .mdc-tooltip__content{max-width:calc(320px - (2 * 8px));align-self:stretch}.mdc-tooltip__surface .mdc-tooltip__content-link{text-decoration:none}.mdc-tooltip--rich-actions,.mdc-tooltip__content,.mdc-tooltip__title{z-index:1}.mdc-tooltip__surface-animation{opacity:0;transform:scale(0.8);will-change:transform,opacity}.mdc-tooltip--shown .mdc-tooltip__surface-animation{transform:scale(1);opacity:1}.mdc-tooltip--hide .mdc-tooltip__surface-animation{transform:scale(1)}.mdc-tooltip__caret-surface-top,.mdc-tooltip__caret-surface-bottom{position:absolute;height:24px;width:24px;transform:rotate(35deg) skewY(20deg) scaleX(0.9396926208)}.mdc-tooltip__caret-surface-top .mdc-elevation-overlay,.mdc-tooltip__caret-surface-bottom .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-tooltip__caret-surface-bottom{outline:1px solid rgba(0,0,0,0);z-index:-1}@media screen and (forced-colors: active){.mdc-tooltip__caret-surface-bottom{outline-color:CanvasText}}.mdc-tooltip__surface{background-color:var(--mdc-plain-tooltip-container-color, #fff)}.mdc-tooltip__surface{border-radius:var(--mdc-plain-tooltip-container-shape, var(--mdc-shape-small, 4px))}.mdc-tooltip__caret-surface-top,.mdc-tooltip__caret-surface-bottom{border-radius:var(--mdc-plain-tooltip-container-shape, var(--mdc-shape-small, 4px))}.mdc-tooltip__surface{color:var(--mdc-plain-tooltip-supporting-text-color, #000)}.mdc-tooltip__surface{font-family:var(--mdc-plain-tooltip-supporting-text-font, inherit);font-size:var(--mdc-plain-tooltip-supporting-text-size, inherit);font-weight:var(--mdc-plain-tooltip-supporting-text-weight, inherit);letter-spacing:var(--mdc-plain-tooltip-supporting-text-tracking, inherit)}.mat-mdc-tooltip{position:relative;transform:scale(0)}.mat-mdc-tooltip::before{content:"";top:0;right:0;bottom:0;left:0;z-index:-1;position:absolute}.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before{top:-8px}.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before{bottom:-8px}.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before{left:-8px}.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before{right:-8px}.mat-mdc-tooltip._mat-animation-noopable{animation:none;transform:scale(1)}.mat-mdc-tooltip-panel-non-interactive{pointer-events:none}@keyframes mat-mdc-tooltip-show{0%{opacity:0;transform:scale(0.8)}100%{opacity:1;transform:scale(1)}}@keyframes mat-mdc-tooltip-hide{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(0.8)}}.mat-mdc-tooltip-show{animation:mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-mdc-tooltip-hide{animation:mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards}'],encapsulation:2,changeDetection:0}),s})(),st=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({providers:[k],imports:[T.rt,u.ez,b.U8,y.BQ,y.BQ,E.ZD]}),s})();function nt(s,l){if(1&s&&(e.TgZ(0,"mat-option",9),e._uU(1),e.qZA()),2&s){const t=l.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t," ")}}const at=[{path:"",component:(()=>{class s{constructor(t,i,o){this.fb=t,this.authService=i,this.navService=o,this.roles=["ROL-A","ROL-B"],this.form=this.fb.group({rol:["",c.kI.required],password:["",c.kI.required]}),this.navService.setShowUser(!1)}ngOnDestroy(){this.navService.setShowUser(!0)}login(){const t=this.form.value;t.rol&&t.password&&this.authService.login(t.rol,t.password).subscribe({error:()=>{alert("Acceso denegado")}})}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(c.qu),e.Y36(z.e),e.Y36(Z.I))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-login"]],decls:22,vars:3,consts:[[1,"form-wrapper"],[3,"formGroup"],["formControlName","rol"],[3,"value",4,"ngFor","ngForOf"],[1,"tooltip-wrapper"],["matInput","","type","text","name","password","formControlName","password","type","password"],["matTooltip","I will tell you a secret: RolAPwd# or RolBPwd#",1,"tooltip"],[1,"buttons"],["mat-raised-button","","color","accent",3,"disabled","click"],[3,"value"]],template:function(t,i){1&t&&(e.TgZ(0,"main")(1,"mat-card",0)(2,"h1"),e._uU(3,"Ingreso"),e.qZA(),e.TgZ(4,"div",1)(5,"div")(6,"mat-form-field")(7,"mat-label"),e._uU(8,"Rol"),e.qZA(),e.TgZ(9,"mat-select",2),e.YNc(10,nt,2,2,"mat-option",3),e.qZA()()(),e.TgZ(11,"div",4)(12,"mat-form-field")(13,"mat-label"),e._uU(14,"Contrase\xf1a"),e.qZA(),e._UZ(15,"input",5),e.qZA(),e.TgZ(16,"div",6)(17,"span"),e._uU(18,"?"),e.qZA()()(),e.TgZ(19,"div",7)(20,"button",8),e.NdJ("click",function(){return i.login()}),e._uU(21," Login "),e.qZA()()()()()),2&t&&(e.xp6(4),e.Q6J("formGroup",i.form),e.xp6(6),e.Q6J("ngForOf",i.roles),e.xp6(10),e.Q6J("disabled",!i.form.valid))},dependencies:[u.sg,c.Fj,c.JJ,c.JL,c.sg,c.u,I.a8,v.KE,v.hX,R.lW,A.Nt,M.gD,y.ey,it],styles:["[_nghost-%COMP%]{height:100%;padding:2rem;display:flex;justify-content:center;align-items:center}.form-wrapper[_ngcontent-%COMP%]{margin:auto;padding:1rem}.form-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{flex-grow:1;display:flex;justify-content:flex-end;gap:1rem}.tooltip-wrapper[_ngcontent-%COMP%]{position:relative}.tooltip-wrapper[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]{position:absolute;right:8px;top:8px;background-color:#555;border-radius:50%;height:1.25rem;width:1.25rem;display:flex;justify-content:center;color:#f0f0f0;font-weight:900;cursor:help}.tooltip-wrapper[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{line-height:22px}"]}),s})()}];let lt=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[P.Bz.forChild(at),P.Bz]}),s})(),rt=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[u.ez,lt,c.UX,I.QW,v.lN,R.ot,A.c,M.LD,st]}),s})()}}]);