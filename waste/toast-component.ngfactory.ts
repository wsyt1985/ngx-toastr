/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './toast-component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from './toastr-service';
import * as import10 from './toastr-config';
import * as import11 from './toast-injector';
import * as import12 from '@angular/core/src/application_ref';
import * as import13 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import14 from '@angular/core/src/animation/animation_transition';
import * as import15 from '@angular/core/src/animation/animation_sequence_player';
import * as import16 from '@angular/core/src/animation/animation_styles';
import * as import17 from '@angular/core/src/animation/animation_style_util';
import * as import18 from '@angular/core/src/animation/animation_keyframe';
import * as import19 from '@angular/core/src/animation/animation_player';
import * as import20 from '@angular/core/src/linker/view_container';
import * as import21 from '@angular/core/src/security';
import * as import22 from './node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import23 from '@angular/core/src/linker/template_ref';
import * as import24 from '@angular/common/src/directives/ng_if';
export class Wrapper_Toast {
  /*private*/ _eventHandler:Function;
  context:import0.Toast;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  constructor(p0:any,p1:any,p2:any,p3:any,p4:any) {
    this._changed = false;
    this.context = new import0.Toast(p0,p1,p2,p3,p4);
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
    var animationTransition_flyInOut:any = componentView.componentType.animations['flyInOut'](view,el,this._expr_1,'void');
  }
  ngOnDestroy():void {
    this.context.ngOnDestroy();
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
    const currVal_0:any = this.context.toastClasses;
    if (import3.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      view.renderer.setElementProperty(el,'className',currVal_0);
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = this.context.state;
    if (import3.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      var animationTransition_flyInOut:any = componentView.componentType.animations['flyInOut'](view,el,((this._expr_1 == import1.UNINITIALIZED)? 'void': this._expr_1),((currVal_1 == import1.UNINITIALIZED)? 'void': currVal_1));
      this._expr_1 = currVal_1;
    }
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.tapToast()) !== false);
      result = (pd_sub_0 && result);
    }
    if ((eventName == 'mouseenter')) {
      const pd_sub_1:any = ((<any>this.context.stickAround()) !== false);
      result = (pd_sub_1 && result);
    }
    if ((eventName == 'mouseleave')) {
      const pd_sub_2:any = ((<any>this.context.delayedHideToast()) !== false);
      result = (pd_sub_2 && result);
    }
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_Toast_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_Toast_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.Toast>;
  _Toast_0_3:Wrapper_Toast;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_Toast_Host0,renderType_Toast_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'div',new import3.InlineArray2(2,'toast-component',''),rootSelector,(null as any));
    this.compView_0 = new View_Toast0(this.viewUtils,this,0,this._el_0);
    this._Toast_0_3 = new Wrapper_Toast(this.injectorGet(import9.ToastrService,this.parentIndex),this.injectorGet(import10.ToastData,this.parentIndex),this.injectorGet(import11.ToastRef,this.parentIndex),this.injectorGet(import12.ApplicationRef,this.parentIndex),this.injectorGet(import13.DomSanitizer,this.parentIndex));
    this.compView_0.create(this._Toast_0_3.context);
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray8(6,'click',(null as any),'mouseenter',(null as any),'mouseleave',(null as any)),this.eventHandler(this.handleEvent_0));
    this._Toast_0_3.subscribe(this,this.eventHandler(this.handleEvent_0));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),[disposable_0]);
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._Toast_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.Toast) && (0 === requestNodeIndex))) { return this._Toast_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._Toast_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this._Toast_0_3.checkHost(this,this.compView_0,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._Toast_0_3.ngOnDestroy();
  }
  detachInternal():void {
    this._Toast_0_3.ngOnDetach(this,this.compView_0,this._el_0);
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.compView_0.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._Toast_0_3.handleEvent(eventName,$event) && result);
    return result;
  }
}
export const ToastNgFactory:import8.ComponentFactory<import0.Toast> = new import8.ComponentFactory<import0.Toast>('[toast-component]',View_Toast_Host0,import0.Toast);
const styles_Toast:any[] = ([] as any[]);
var Toast_flyInOut_states:any = {
  'inactive': {
    'display': 'none',
    'opacity': '0'
  }
  ,
  'active': {'opacity': '1'},
  'removed': {'opacity': '0'},
  '*': {}
}
;
function Toast_flyInOut_factory(view:import2.AppView<any>,element:any,currentState:any,nextState:any):import14.AnimationTransition {
  var previousPlayers:any = view.animationContext.getAnimationPlayers(element,((nextState == 'void')? (null as any): 'flyInOut'));
  var collectedStyles:any = {};
  var player:any = (null as any);
  var totalTime:any = 0;
  var defaultStateStyles:any = Toast_flyInOut_states['*'];
  var startStateStyles:any = Toast_flyInOut_states[currentState];
  if ((startStateStyles == (null as any))) { (startStateStyles = defaultStateStyles); }
  var endStateStyles:any = Toast_flyInOut_states[nextState];
  if ((endStateStyles == (null as any))) { (endStateStyles = defaultStateStyles); }
  if (((player == (null as any)) && (((currentState == 'inactive') && (nextState == 'active')) || ((currentState == 'active') && (nextState == 'inactive'))))) {
      player = new import15.AnimationSequencePlayer([view.renderer.animate(element,new import16.AnimationStyles(import17.collectAndResolveStyles(collectedStyles,[startStateStyles])),import17.balanceAnimationKeyframes(collectedStyles,endStateStyles,[
        new import18.AnimationKeyframe(0,new import16.AnimationStyles(import17.collectAndResolveStyles(collectedStyles,[{}]))),
        new import18.AnimationKeyframe(1,new import16.AnimationStyles(import17.collectAndResolveStyles(collectedStyles,[{}])))
      ]
    ),300,0,'ease-in',previousPlayers)]);
    totalTime = 300;
  }
  if (((player == (null as any)) && (((currentState == 'active') && (nextState == 'removed')) || ((currentState == 'removed') && (nextState == 'active'))))) {
      player = new import15.AnimationSequencePlayer([view.renderer.animate(element,new import16.AnimationStyles(import17.collectAndResolveStyles(collectedStyles,[startStateStyles])),import17.balanceAnimationKeyframes(collectedStyles,endStateStyles,[
        new import18.AnimationKeyframe(0,new import16.AnimationStyles(import17.collectAndResolveStyles(collectedStyles,[{}]))),
        new import18.AnimationKeyframe(1,new import16.AnimationStyles(import17.collectAndResolveStyles(collectedStyles,[{}])))
      ]
    ),300,0,'ease-in',previousPlayers)]);
    totalTime = 300;
  }
  if ((player == (null as any))) { (player = new import19.NoOpAnimationPlayer()); }
  player.onDone(():void => {
    player.destroy();
    import17.renderStyles(element,view.renderer,import17.prepareFinalAnimationStyles(startStateStyles,endStateStyles));
  });
  new import15.AnimationSequencePlayer(previousPlayers).destroy();
  import17.renderStyles(element,view.renderer,import17.clearStyles(startStateStyles));
  view.animationContext.queueAnimation(element,'flyInOut',player);
  return new import14.AnimationTransition(player,currentState,nextState,totalTime);
}
class View_Toast1 extends import2.AppView<any> {
  _el_0:any;
  _text_1:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import20.ViewContainer) {
    super(View_Toast1,renderType_Toast,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'button',new import3.InlineArray2(2,'class','toast-close-button'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n    ×\n  ',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_0));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),[disposable_0]);
    return (null as any);
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.parentView.context.remove()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
class View_Toast2 extends import2.AppView<any> {
  _el_0:any;
  _text_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import20.ViewContainer) {
    super(View_Toast2,renderType_Toast,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_2 = import1.UNINITIALIZED;
    this._expr_3 = import1.UNINITIALIZED;
    this._expr_4 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2:any = import3.inlineInterpolate(1,'',this.parentView.context.options.titleClass,'');
    if (import3.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementProperty(this._el_0,'className',currVal_2);
      this._expr_2 = currVal_2;
    }
    const currVal_3:any = this.parentView.context.title;
    if (import3.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setElementAttribute(this._el_0,'aria-label',((currVal_3 == null)? (null as any): currVal_3.toString()));
      this._expr_3 = currVal_3;
    }
    const currVal_4:any = import3.inlineInterpolate(1,'\n    ',this.parentView.context.title,'\n  ');
    if (import3.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setText(this._text_1,currVal_4);
      this._expr_4 = currVal_4;
    }
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
class View_Toast3 extends import2.AppView<any> {
  _el_0:any;
  _text_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import20.ViewContainer) {
    super(View_Toast3,renderType_Toast,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_2 = import1.UNINITIALIZED;
    this._expr_3 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2:any = import3.inlineInterpolate(1,'',this.parentView.context.options.messageClass,'');
    if (import3.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementProperty(this._el_0,'className',currVal_2);
      this._expr_2 = currVal_2;
    }
    const currVal_3:any = this.parentView.context.message;
    if (import3.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setElementProperty(this._el_0,'innerHTML',this.viewUtils.sanitizer.sanitize(import21.SecurityContext.HTML,currVal_3));
      this._expr_3 = currVal_3;
    }
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
class View_Toast4 extends import2.AppView<any> {
  _el_0:any;
  _text_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import20.ViewContainer) {
    super(View_Toast4,renderType_Toast,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_2 = import1.UNINITIALIZED;
    this._expr_3 = import1.UNINITIALIZED;
    this._expr_4 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2:any = import3.inlineInterpolate(1,'',this.parentView.context.options.messageClass,'');
    if (import3.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementProperty(this._el_0,'className',currVal_2);
      this._expr_2 = currVal_2;
    }
    const currVal_3:any = this.parentView.context.message;
    if (import3.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setElementAttribute(this._el_0,'aria-label',((currVal_3 == null)? (null as any): currVal_3.toString()));
      this._expr_3 = currVal_3;
    }
    const currVal_4:any = import3.inlineInterpolate(1,'\n    ',this.parentView.context.message,'\n  ');
    if (import3.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setText(this._text_1,currVal_4);
      this._expr_4 = currVal_4;
    }
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
class View_Toast5 extends import2.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  /*private*/ _expr_4:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import20.ViewContainer) {
    super(View_Toast5,renderType_Toast,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_4 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'div',new import3.InlineArray2(2,'class','toast-progress'),(null as any));
    this._text_3 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3
    ]
    ),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_4:any = this.parentView.context.width;
    if (import3.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setElementStyle(this._el_2,'width',((this.viewUtils.sanitizer.sanitize(import21.SecurityContext.STYLE,currVal_4) == null)? (null as any): (this.viewUtils.sanitizer.sanitize(import21.SecurityContext.STYLE,currVal_4).toString() + '%')));
      this._expr_4 = currVal_4;
    }
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
var renderType_Toast:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,styles_Toast,{'flyInOut': Toast_flyInOut_factory});
export class View_Toast0 extends import2.AppView<import0.Toast> {
  _text_0:any;
  _anchor_1:any;
  /*private*/ _vc_1:import20.ViewContainer;
  _TemplateRef_1_5:any;
  _NgIf_1_6:import22.Wrapper_NgIf;
  _text_2:any;
  _anchor_3:any;
  /*private*/ _vc_3:import20.ViewContainer;
  _TemplateRef_3_5:any;
  _NgIf_3_6:import22.Wrapper_NgIf;
  _text_4:any;
  _anchor_5:any;
  /*private*/ _vc_5:import20.ViewContainer;
  _TemplateRef_5_5:any;
  _NgIf_5_6:import22.Wrapper_NgIf;
  _text_6:any;
  _anchor_7:any;
  /*private*/ _vc_7:import20.ViewContainer;
  _TemplateRef_7_5:any;
  _NgIf_7_6:import22.Wrapper_NgIf;
  _text_8:any;
  _anchor_9:any;
  /*private*/ _vc_9:import20.ViewContainer;
  _TemplateRef_9_5:any;
  _NgIf_9_6:import22.Wrapper_NgIf;
  _text_10:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_Toast0,renderType_Toast,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    this._anchor_1 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._vc_1 = new import20.ViewContainer(1,(null as any),this,this._anchor_1);
    this._TemplateRef_1_5 = new import23.TemplateRef_(this,1,this._anchor_1);
    this._NgIf_1_6 = new import22.Wrapper_NgIf(this._vc_1.vcRef,this._TemplateRef_1_5);
    this._text_2 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    this._anchor_3 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._vc_3 = new import20.ViewContainer(3,(null as any),this,this._anchor_3);
    this._TemplateRef_3_5 = new import23.TemplateRef_(this,3,this._anchor_3);
    this._NgIf_3_6 = new import22.Wrapper_NgIf(this._vc_3.vcRef,this._TemplateRef_3_5);
    this._text_4 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    this._anchor_5 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._vc_5 = new import20.ViewContainer(5,(null as any),this,this._anchor_5);
    this._TemplateRef_5_5 = new import23.TemplateRef_(this,5,this._anchor_5);
    this._NgIf_5_6 = new import22.Wrapper_NgIf(this._vc_5.vcRef,this._TemplateRef_5_5);
    this._text_6 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    this._anchor_7 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._vc_7 = new import20.ViewContainer(7,(null as any),this,this._anchor_7);
    this._TemplateRef_7_5 = new import23.TemplateRef_(this,7,this._anchor_7);
    this._NgIf_7_6 = new import22.Wrapper_NgIf(this._vc_7.vcRef,this._TemplateRef_7_5);
    this._text_8 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    this._anchor_9 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._vc_9 = new import20.ViewContainer(9,(null as any),this,this._anchor_9);
    this._TemplateRef_9_5 = new import23.TemplateRef_(this,9,this._anchor_9);
    this._NgIf_9_6 = new import22.Wrapper_NgIf(this._vc_9.vcRef,this._TemplateRef_9_5);
    this._text_10 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._anchor_1,
      this._text_2,
      this._anchor_3,
      this._text_4,
      this._anchor_5,
      this._text_6,
      this._anchor_7,
      this._text_8,
      this._anchor_9,
      this._text_10
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import23.TemplateRef) && (1 === requestNodeIndex))) { return this._TemplateRef_1_5; }
    if (((token === import24.NgIf) && (1 === requestNodeIndex))) { return this._NgIf_1_6.context; }
    if (((token === import23.TemplateRef) && (3 === requestNodeIndex))) { return this._TemplateRef_3_5; }
    if (((token === import24.NgIf) && (3 === requestNodeIndex))) { return this._NgIf_3_6.context; }
    if (((token === import23.TemplateRef) && (5 === requestNodeIndex))) { return this._TemplateRef_5_5; }
    if (((token === import24.NgIf) && (5 === requestNodeIndex))) { return this._NgIf_5_6.context; }
    if (((token === import23.TemplateRef) && (7 === requestNodeIndex))) { return this._TemplateRef_7_5; }
    if (((token === import24.NgIf) && (7 === requestNodeIndex))) { return this._NgIf_7_6.context; }
    if (((token === import23.TemplateRef) && (9 === requestNodeIndex))) { return this._TemplateRef_9_5; }
    if (((token === import24.NgIf) && (9 === requestNodeIndex))) { return this._NgIf_9_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1_0_0:any = this.context.options.closeButton;
    this._NgIf_1_6.check_ngIf(currVal_1_0_0,throwOnChange,false);
    this._NgIf_1_6.ngDoCheck(this,this._anchor_1,throwOnChange);
    const currVal_3_0_0:any = this.context.title;
    this._NgIf_3_6.check_ngIf(currVal_3_0_0,throwOnChange,false);
    this._NgIf_3_6.ngDoCheck(this,this._anchor_3,throwOnChange);
    const currVal_5_0_0:any = (this.context.message && this.context.options.enableHtml);
    this._NgIf_5_6.check_ngIf(currVal_5_0_0,throwOnChange,false);
    this._NgIf_5_6.ngDoCheck(this,this._anchor_5,throwOnChange);
    const currVal_7_0_0:any = (this.context.message && !this.context.options.enableHtml);
    this._NgIf_7_6.check_ngIf(currVal_7_0_0,throwOnChange,false);
    this._NgIf_7_6.ngDoCheck(this,this._anchor_7,throwOnChange);
    const currVal_9_0_0:any = this.context.options.progressBar;
    this._NgIf_9_6.check_ngIf(currVal_9_0_0,throwOnChange,false);
    this._NgIf_9_6.ngDoCheck(this,this._anchor_9,throwOnChange);
    this._vc_1.detectChangesInNestedViews(throwOnChange);
    this._vc_3.detectChangesInNestedViews(throwOnChange);
    this._vc_5.detectChangesInNestedViews(throwOnChange);
    this._vc_7.detectChangesInNestedViews(throwOnChange);
    this._vc_9.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_1.destroyNestedViews();
    this._vc_3.destroyNestedViews();
    this._vc_5.destroyNestedViews();
    this._vc_7.destroyNestedViews();
    this._vc_9.destroyNestedViews();
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 1)) { return new View_Toast1(this.viewUtils,this,1,this._anchor_1,this._vc_1); }
    if ((nodeIndex == 3)) { return new View_Toast2(this.viewUtils,this,3,this._anchor_3,this._vc_3); }
    if ((nodeIndex == 5)) { return new View_Toast3(this.viewUtils,this,5,this._anchor_5,this._vc_5); }
    if ((nodeIndex == 7)) { return new View_Toast4(this.viewUtils,this,7,this._anchor_7,this._vc_7); }
    if ((nodeIndex == 9)) { return new View_Toast5(this.viewUtils,this,9,this._anchor_9,this._vc_9); }
    return (null as any);
  }
}