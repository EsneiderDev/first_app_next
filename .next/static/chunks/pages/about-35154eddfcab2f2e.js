(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{512:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return r(8453)}])},8243:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return v}});let i=r(8754),n=r(1757),o=n._(r(7294)),l=r(3935),s=i._(r(3902)),a=r(5257),u=r(2093),d=r(2493);r(2078);let c=r(2250),f=i._(r(414)),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function p(e,t,r,i,n,o){let l=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===l)return;e["data-loaded-src"]=l;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&n(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,n=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(e)}})}function m(e){let[t,r]=o.version.split("."),i=parseInt(t,10),n=parseInt(r,10);return i>18||18===i&&n>=3?{fetchPriority:e}:{fetchpriority:e}}let h=(0,o.forwardRef)((e,t)=>{let{src:r,srcSet:i,sizes:n,height:l,width:s,decoding:a,className:u,style:d,fetchPriority:c,placeholder:f,loading:g,unoptimized:h,fill:b,onLoadRef:v,onLoadingCompleteRef:w,setBlurComplete:y,setShowAltText:_,onLoad:S,onError:x,...j}=e;return o.default.createElement("img",{...j,...m(c),loading:g,width:s,height:l,decoding:a,"data-nimg":b?"fill":"1",className:u,style:d,sizes:n,srcSet:i,src:r,ref:(0,o.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(x&&(e.src=e.src),e.complete&&p(e,f,v,w,y,h))},[r,f,v,w,y,x,h,t]),onLoad:e=>{let t=e.currentTarget;p(t,f,v,w,y,h)},onError:e=>{_(!0),"empty"!==f&&y(!0),x&&x(e)}})});function b(e){let{isAppRouter:t,imgAttributes:r}=e,i={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...m(r.fetchPriority)};return t&&l.preload?((0,l.preload)(r.src,i),null):o.default.createElement(s.default,null,o.default.createElement("link",{key:"__nimg-"+r.src+r.srcSet+r.sizes,rel:"preload",href:r.srcSet?void 0:r.src,...i}))}let v=(0,o.forwardRef)((e,t)=>{let r=(0,o.useContext)(c.RouterContext),i=(0,o.useContext)(d.ImageConfigContext),n=(0,o.useMemo)(()=>{let e=g||i||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[i]),{onLoad:l,onLoadingComplete:s}=e,p=(0,o.useRef)(l);(0,o.useEffect)(()=>{p.current=l},[l]);let m=(0,o.useRef)(s);(0,o.useEffect)(()=>{m.current=s},[s]);let[v,w]=(0,o.useState)(!1),[y,_]=(0,o.useState)(!1),{props:S,meta:x}=(0,a.getImgProps)(e,{defaultLoader:f.default,imgConf:n,blurComplete:v,showAltText:y});return o.default.createElement(o.default.Fragment,null,o.default.createElement(h,{...S,unoptimized:x.unoptimized,placeholder:x.placeholder,fill:x.fill,onLoadRef:p,onLoadingCompleteRef:m,setBlurComplete:w,setShowAltText:_,ref:t}),x.priority?o.default.createElement(b,{isAppRouter:!r,imgAttributes:S}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5257:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return s}}),r(2078);let i=r(8832),n=r(2093);function o(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function s(e,t){var r;let s,a,u,{src:d,sizes:c,unoptimized:f=!1,priority:g=!1,loading:p,className:m,quality:h,width:b,height:v,fill:w=!1,style:y,onLoad:_,onLoadingComplete:S,placeholder:x="empty",blurDataURL:j,fetchPriority:C,layout:E,objectFit:P,objectPosition:z,lazyBoundary:O,lazyRoot:I,...M}=e,{imgConf:N,showAltText:R,blurComplete:k,defaultLoader:A}=t,D=N||n.imageConfigDefault;if("allSizes"in D)s=D;else{let e=[...D.deviceSizes,...D.imageSizes].sort((e,t)=>e-t),t=D.deviceSizes.sort((e,t)=>e-t);s={...D,allSizes:e,deviceSizes:t}}let B=M.loader||A;delete M.loader,delete M.srcSet;let G="__next_img_default"in B;if(G){if("custom"===s.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=B;B=t=>{let{config:r,...i}=t;return e(i)}}if(E){"fill"===E&&(w=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[E];e&&(y={...y,...e});let t={responsive:"100vw",fill:"100vw"}[E];t&&!c&&(c=t)}let L="",T=l(b),F=l(v);if("object"==typeof(r=d)&&(o(r)||void 0!==r.src)){let e=o(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(a=e.blurWidth,u=e.blurHeight,j=j||e.blurDataURL,L=e.src,!w){if(T||F){if(T&&!F){let t=T/e.width;F=Math.round(e.height*t)}else if(!T&&F){let t=F/e.height;T=Math.round(e.width*t)}}else T=e.width,F=e.height}}let U=!g&&("lazy"===p||void 0===p);(!(d="string"==typeof d?d:L)||d.startsWith("data:")||d.startsWith("blob:"))&&(f=!0,U=!1),s.unoptimized&&(f=!0),G&&d.endsWith(".svg")&&!s.dangerouslyAllowSVG&&(f=!0),g&&(C="high");let W=l(h),J=Object.assign(w?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:P,objectPosition:z}:{},R?{}:{color:"transparent"},y),V=k||"empty"===x?null:"blur"===x?'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:T,heightInt:F,blurWidth:a,blurHeight:u,blurDataURL:j||"",objectFit:J.objectFit})+'")':'url("'+x+'")',q=V?{backgroundSize:J.objectFit||"cover",backgroundPosition:J.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:V}:{},H=function(e){let{config:t,src:r,unoptimized:i,width:n,quality:o,sizes:l,loader:s}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:a,kind:u}=function(e,t,r){let{deviceSizes:i,allSizes:n}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:n,kind:"w"}}if("number"!=typeof t)return{widths:i,kind:"w"};let o=[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))];return{widths:o,kind:"x"}}(t,n,l),d=a.length-1;return{sizes:l||"w"!==u?l:"100vw",srcSet:a.map((e,i)=>s({config:t,src:r,quality:o,width:e})+" "+("w"===u?e:i+1)+u).join(", "),src:s({config:t,src:r,quality:o,width:a[d]})}}({config:s,src:d,unoptimized:f,width:T,quality:W,sizes:c,loader:B}),X={...M,loading:U?"lazy":p,fetchPriority:C,width:T,height:F,decoding:"async",className:m,style:{...J,...q},sizes:H.sizes,srcSet:H.srcSet,src:H.src},Y={unoptimized:f,priority:g,placeholder:x,fill:w};return{props:X,meta:Y}}},8832:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:n,blurDataURL:o,objectFit:l}=e,s=i?40*i:t,a=n?40*n:r,u=s&&a?"viewBox='0 0 "+s+" "+a+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},154:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return u},unstable_getImgProps:function(){return a}});let i=r(8754),n=r(5257),o=r(2078),l=r(8243),s=i._(r(414)),a=e=>{(0,o.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,n.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},u=l.Image},414:function(e,t){"use strict";function r(e){let{config:t,src:r,width:i,quality:n}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+i+"&q="+(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),r.__next_img_default=!0;let i=r},8453:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return a}});var i=r(5893),n=r(9008),o=r.n(n),l=r(5675),s=r.n(l),a=!0;t.default=function(e){let{result:t}=e;return(0,i.jsxs)("div",{children:[(0,i.jsxs)(o(),{children:[(0,i.jsx)("title",{children:"ABOUT"}),(0,i.jsx)("meta",{name:"descripcion",content:"Mu firt app with Next.Js"})]}),JSON.stringify(t),(0,i.jsx)("h1",{children:"About"}),(0,i.jsx)(s(),{src:"/bg.jpg",alt:"",width:"2000",height:"200",layout:"responsive"}),(0,i.jsx)("p",{children:"This is the about pague"}),(0,i.jsx)("button",{onClick:()=>alert("\xa1HOLA MUNDO!"),children:"Clic"})]})}},9008:function(e,t,r){e.exports=r(3902)},5675:function(e,t,r){e.exports=r(154)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=512)}),_N_E=e.O()}]);