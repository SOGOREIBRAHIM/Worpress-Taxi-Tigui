(()=>{var e={4184:(e,t)=>{var r;!function(){"use strict";var s={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var n=typeof r;if("string"===n||"number"===n)e.push(r);else if(Array.isArray(r)){if(r.length){var i=o.apply(null,r);i&&e.push(i)}}else if("object"===n)if(r.toString===Object.prototype.toString)for(var a in r)s.call(r,a)&&r[a]&&e.push(a);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},4578:()=>{},7349:()=>{},8204:()=>{},4093:()=>{},8543:()=>{},9421:()=>{}},t={};function r(s){var o=t[s];if(void 0!==o)return o.exports;var n=t[s]={exports:{}};return e[s](n,n.exports,r),n.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.wp.element;function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function s(e,r,s){return(r=function(e){var r=function(e,r){if("object"!==t(e)||null===e)return e;var s=e[Symbol.toPrimitive];if(void 0!==s){var o=s.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===t(r)?r:String(r)}(r))in e?Object.defineProperty(e,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[r]=s,e}const o=window.wp.i18n,n=window.wc.wcSettings;var i;const a=(0,n.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),l=a.pluginUrl+"images/",c=(a.pluginUrl,a.buildPhase,null===(i=n.STORE_PAGES.shop)||void 0===i||i.permalink,n.STORE_PAGES.checkout.id,n.STORE_PAGES.checkout.permalink,n.STORE_PAGES.privacy.permalink,n.STORE_PAGES.privacy.title,n.STORE_PAGES.terms.permalink,n.STORE_PAGES.terms.title,n.STORE_PAGES.cart.id,n.STORE_PAGES.cart.permalink,n.STORE_PAGES.myaccount.permalink?n.STORE_PAGES.myaccount.permalink:(0,n.getSetting)("wpLoginUrl","/wp-login.php"),(0,n.getSetting)("localPickupEnabled",!1),(0,n.getSetting)("countries",{})),p=(0,n.getSetting)("countryData",{}),d=(Object.fromEntries(Object.keys(p).filter((e=>!0===p[e].allowBilling)).map((e=>[e,c[e]||""]))),Object.fromEntries(Object.keys(p).filter((e=>!0===p[e].allowBilling)).map((e=>[e,p[e].states||[]]))),Object.fromEntries(Object.keys(p).filter((e=>!0===p[e].allowShipping)).map((e=>[e,c[e]||""]))),Object.fromEntries(Object.keys(p).filter((e=>!0===p[e].allowShipping)).map((e=>[e,p[e].states||[]]))),Object.fromEntries(Object.keys(p).map((e=>[e,p[e].locale||[]]))),({imageUrl:t=`${l}/block-error.svg`,header:r=(0,o.__)("Oops!","woocommerce"),text:s=(0,o.__)("There was an error loading the content.","woocommerce"),errorMessage:n,errorMessagePrefix:i=(0,o.__)("Error:","woocommerce"),button:a,showErrorBlock:c=!0})=>c?(0,e.createElement)("div",{className:"wc-block-error wc-block-components-error"},t&&(0,e.createElement)("img",{className:"wc-block-error__image wc-block-components-error__image",src:t,alt:""}),(0,e.createElement)("div",{className:"wc-block-error__content wc-block-components-error__content"},r&&(0,e.createElement)("p",{className:"wc-block-error__header wc-block-components-error__header"},r),s&&(0,e.createElement)("p",{className:"wc-block-error__text wc-block-components-error__text"},s),n&&(0,e.createElement)("p",{className:"wc-block-error__message wc-block-components-error__message"},i?i+" ":"",n),a&&(0,e.createElement)("p",{className:"wc-block-error__button wc-block-components-error__button"},a))):null);r(4578);class m extends e.Component{constructor(...e){super(...e),s(this,"state",{errorMessage:"",hasError:!1})}static getDerivedStateFromError(t){return void 0!==t.statusText&&void 0!==t.status?{errorMessage:(0,e.createElement)(e.Fragment,null,(0,e.createElement)("strong",null,t.status),": ",t.statusText),hasError:!0}:{errorMessage:t.message,hasError:!0}}render(){const{header:t,imageUrl:r,showErrorMessage:s=!0,showErrorBlock:o=!0,text:n,errorMessagePrefix:i,renderError:a,button:l}=this.props,{errorMessage:c,hasError:p}=this.state;return p?"function"==typeof a?a({errorMessage:c}):(0,e.createElement)(d,{showErrorBlock:o,errorMessage:s?c:null,header:t,imageUrl:r,text:n,errorMessagePrefix:i,button:l}):this.props.children}}const w=m,u=[".wp-block-woocommerce-cart"],g=({Block:t,containers:r,getProps:s=(()=>({})),getErrorBoundaryProps:o=(()=>({}))})=>{0!==r.length&&Array.prototype.forEach.call(r,((r,n)=>{const i=s(r,n),a=o(r,n),l={...r.dataset,...i.attributes||{}};(({Block:t,container:r,attributes:s={},props:o={},errorBoundaryProps:n={}})=>{(0,e.render)((0,e.createElement)(w,{...n},(0,e.createElement)(e.Suspense,{fallback:(0,e.createElement)("div",{className:"wc-block-placeholder"})},t&&(0,e.createElement)(t,{...o,attributes:s}))),r,(()=>{r.classList&&r.classList.remove("is-loading")}))})({Block:t,container:r,props:i,attributes:l,errorBoundaryProps:a})}))},h=window.wp.a11y,v=window.wp.apiFetch;var b=r.n(v),_=r(4184),y=r.n(_);r(7349);const k=({label:t,screenReaderLabel:r,wrapperElement:s,wrapperProps:o={}})=>{let n;const i=null!=t,a=null!=r;return!i&&a?(n=s||"span",o={...o,className:y()(o.className,"screen-reader-text")},(0,e.createElement)(n,{...o},r)):(n=s||e.Fragment,i&&a&&t!==r?(0,e.createElement)(n,{...o},(0,e.createElement)("span",{"aria-hidden":"true"},t),(0,e.createElement)("span",{className:"screen-reader-text"},r)):(0,e.createElement)(n,{...o},t))},f=({onClick:t,label:r=(0,o.__)("Load more","woocommerce"),screenReaderLabel:s=(0,o.__)("Load more","woocommerce")})=>(0,e.createElement)("div",{className:"wp-block-button wc-block-load-more wc-block-components-load-more"},(0,e.createElement)("button",{className:"wp-block-button__link",onClick:t},(0,e.createElement)(k,{label:r,screenReaderLabel:s}))),E=window.wp.compose;r(9421);const R=(0,E.withInstanceId)((({className:t,instanceId:r,label:s="",onChange:o,options:n,screenReaderLabel:i,value:a=""})=>{const l=`wc-block-components-sort-select__select-${r}`;return(0,e.createElement)("div",{className:y()("wc-block-sort-select","wc-block-components-sort-select",t)},(0,e.createElement)(k,{label:s,screenReaderLabel:i,wrapperElement:"label",wrapperProps:{className:"wc-block-sort-select__label wc-block-components-sort-select__label",htmlFor:l}}),(0,e.createElement)("select",{id:l,className:"wc-block-sort-select__select wc-block-components-sort-select__select",onChange:o,value:a},n&&n.map((t=>(0,e.createElement)("option",{key:t.key,value:t.key},t.label)))))}));r(8543);const S=({onChange:t,readOnly:r,value:s})=>(0,e.createElement)(R,{className:"wc-block-review-sort-select wc-block-components-review-sort-select",label:(0,o.__)("Order by","woocommerce"),onChange:t,options:[{key:"most-recent",label:(0,o.__)("Most recent","woocommerce")},{key:"highest-rating",label:(0,o.__)("Highest rating","woocommerce")},{key:"lowest-rating",label:(0,o.__)("Lowest rating","woocommerce")}],readOnly:r,screenReaderLabel:(0,o.__)("Order reviews by","woocommerce"),value:s});function O(e){let t,r,s,o=[];for(let n=0;n<e.length;n++)t=e.substring(n),r=t.match(/^&[a-z0-9#]+;/),r?(s=r[0],o.push(s),n+=s.length-1):o.push(e[n]);return o}const P=(e,t,r="...")=>{const s=function(e,t){const r=(t=t||{}).limit||100,s=void 0===t.preserveTags||t.preserveTags,o=void 0!==t.wordBreak&&t.wordBreak,n=t.suffix||"...",i=t.moreLink||"",a=t.moreText||"»",l=t.preserveWhiteSpace||!1,c=e.replace(/</g,"\n<").replace(/>/g,">\n").replace(/\n\n/g,"\n").replace(/^\n/g,"").replace(/\n$/g,"").split("\n");let p,d,m,w,u,g,h=0,v=[],b=!1;for(let e=0;e<c.length;e++){if(p=c[e],w=l?p:p.replace(/[ ]+/g," "),!p.length)continue;const t=O(w);if("<"!==p[0])if(h>=r)p="";else if(h+t.length>=r){if(d=r-h," "===t[d-1])for(;d&&(d-=1," "===t[d-1]););else m=t.slice(d).indexOf(" "),o||(-1!==m?d+=m:d=p.length);p=t.slice(0,d).join("")+n,i&&(p+='<a href="'+i+'" style="display:inline">'+a+"</a>"),h=r,b=!0}else h+=t.length;else if(s){if(h>=r)if(u=p.match(/[a-zA-Z]+/),g=u?u[0]:"",g)if("</"!==p.substring(0,2))v.push(g),p="";else{for(;v[v.length-1]!==g&&v.length;)v.pop();v.length&&(p=""),v.pop()}else p=""}else p="";c[e]=p}return{html:c.join("\n").replace(/\n/g,""),more:b}}(e,{suffix:r,limit:t});return s.html},L=(e,t,r)=>(t<=r?e.start=e.middle+1:e.end=e.middle-1,e),x=(e,t,r,s)=>{const o=((e,t,r)=>{let s={start:0,middle:0,end:e.length};for(;s.start<=s.end;)s.middle=Math.floor((s.start+s.end)/2),t.innerHTML=P(e,s.middle),s=L(s,t.clientHeight,r);return s.middle})(e,t,r);return P(e,o-s.length,s)},T={className:"read-more-content",ellipsis:"&hellip;",lessText:(0,o.__)("Read less","woocommerce"),maxLines:3,moreText:(0,o.__)("Read more","woocommerce")};class A extends e.Component{constructor(t){super(t),s(this,"reviewSummary",void 0),s(this,"reviewContent",void 0),this.state={isExpanded:!1,clampEnabled:null,content:t.children,summary:"."},this.reviewContent=(0,e.createRef)(),this.reviewSummary=(0,e.createRef)(),this.getButton=this.getButton.bind(this),this.onClick=this.onClick.bind(this)}componentDidMount(){this.setSummary()}componentDidUpdate(e){e.maxLines===this.props.maxLines&&e.children===this.props.children||this.setState({clampEnabled:null,summary:"."},this.setSummary)}setSummary(){if(this.props.children){const{maxLines:e,ellipsis:t}=this.props;if(!this.reviewSummary.current||!this.reviewContent.current)return;const r=(this.reviewSummary.current.clientHeight+1)*e+1,s=this.reviewContent.current.clientHeight+1>r;this.setState({clampEnabled:s}),s&&this.setState({summary:x(this.reviewContent.current.innerHTML,this.reviewSummary.current,r,t)})}}getButton(){const{isExpanded:t}=this.state,{className:r,lessText:s,moreText:o}=this.props,n=t?s:o;if(n)return(0,e.createElement)("a",{href:"#more",className:r+"__read_more",onClick:this.onClick,"aria-expanded":!t,role:"button"},n)}onClick(e){e.preventDefault();const{isExpanded:t}=this.state;this.setState({isExpanded:!t})}render(){const{className:t}=this.props,{content:r,summary:s,clampEnabled:o,isExpanded:n}=this.state;return r?!1===o?(0,e.createElement)("div",{className:t},(0,e.createElement)("div",{ref:this.reviewContent},r)):(0,e.createElement)("div",{className:t},(!n||null===o)&&(0,e.createElement)("div",{ref:this.reviewSummary,"aria-hidden":n,dangerouslySetInnerHTML:{__html:s}}),(n||null===o)&&(0,e.createElement)("div",{ref:this.reviewContent,"aria-hidden":!n},r),this.getButton()):null}}s(A,"defaultProps",T);const N=A;r(8204);const C=({attributes:t,review:r={}})=>{const{imageType:s,showReviewDate:n,showReviewerName:i,showReviewImage:a,showReviewRating:l,showReviewContent:c,showProductName:p}=t,{rating:d}=r,m=!(Object.keys(r).length>0),w=Number.isFinite(d)&&l;return(0,e.createElement)("li",{className:y()("wc-block-review-list-item__item","wc-block-components-review-list-item__item",{"is-loading":m,"wc-block-components-review-list-item__item--has-image":a}),"aria-hidden":m},(p||n||i||a||w)&&(0,e.createElement)("div",{className:"wc-block-review-list-item__info wc-block-components-review-list-item__info"},a&&function(t,r,s){var n,i;return s||!t?(0,e.createElement)("div",{className:"wc-block-review-list-item__image wc-block-components-review-list-item__image"}):(0,e.createElement)("div",{className:"wc-block-review-list-item__image wc-block-components-review-list-item__image"},"product"===r?(0,e.createElement)("img",{"aria-hidden":"true",alt:(null===(n=t.product_image)||void 0===n?void 0:n.alt)||"",src:(null===(i=t.product_image)||void 0===i?void 0:i.thumbnail)||""}):(0,e.createElement)("img",{"aria-hidden":"true",alt:"",src:t.reviewer_avatar_urls[96]||""}),t.verified&&(0,e.createElement)("div",{className:"wc-block-review-list-item__verified wc-block-components-review-list-item__verified",title:(0,o.__)("Verified buyer","woocommerce")},(0,o.__)("Verified buyer","woocommerce")))}(r,s,m),(p||i||w||n)&&(0,e.createElement)("div",{className:"wc-block-review-list-item__meta wc-block-components-review-list-item__meta"},w&&function(t){const{rating:r}=t,s={width:r/5*100+"%"},n=(0,o.sprintf)(/* translators: %f is referring to the average rating value */
(0,o.__)("Rated %f out of 5","woocommerce"),r),i={__html:(0,o.sprintf)(/* translators: %s is referring to the average rating value */
(0,o.__)("Rated %s out of 5","woocommerce"),(0,o.sprintf)('<strong class="rating">%f</strong>',r))};return(0,e.createElement)("div",{className:"wc-block-review-list-item__rating wc-block-components-review-list-item__rating"},(0,e.createElement)("div",{className:"wc-block-review-list-item__rating__stars wc-block-components-review-list-item__rating__stars",role:"img","aria-label":n},(0,e.createElement)("span",{style:s,dangerouslySetInnerHTML:i})))}(r),p&&function(t){return(0,e.createElement)("div",{className:"wc-block-review-list-item__product wc-block-components-review-list-item__product"},(0,e.createElement)("a",{href:t.product_permalink,dangerouslySetInnerHTML:{__html:t.product_name}}))}(r),i&&function(t){const{reviewer:r=""}=t;return(0,e.createElement)("div",{className:"wc-block-review-list-item__author wc-block-components-review-list-item__author"},r)}(r),n&&function(t){const{date_created:r,formatted_date_created:s}=t;return(0,e.createElement)("time",{className:"wc-block-review-list-item__published-date wc-block-components-review-list-item__published-date",dateTime:r},s)}(r))),c&&function(t){return(0,e.createElement)(N,{maxLines:10,moreText:(0,o.__)("Read full review","woocommerce"),lessText:(0,o.__)("Hide full review","woocommerce"),className:"wc-block-review-list-item__text wc-block-components-review-list-item__text"},(0,e.createElement)("div",{dangerouslySetInnerHTML:{__html:t.review||""}}))}(r))};r(4093);const M=({attributes:t,reviews:r})=>{const s=(0,n.getSetting)("showAvatars",!0),o=(0,n.getSetting)("reviewRatingsEnabled",!0),i=(s||"product"===t.imageType)&&t.showReviewImage,a=o&&t.showReviewRating,l={...t,showReviewImage:i,showReviewRating:a};return(0,e.createElement)("ul",{className:"wc-block-review-list wc-block-components-review-list"},0===r.length?(0,e.createElement)(C,{attributes:l}):r.map(((t,r)=>(0,e.createElement)(C,{key:t.id||r,attributes:l,review:t}))))},B=window.wp.isShallowEqual;var j=r.n(B);const I=(t=>{class r extends e.Component{constructor(...e){super(...e),s(this,"isPreview",!!this.props.attributes.previewReviews),s(this,"delayedAppendReviews",this.props.delayFunction(this.appendReviews)),s(this,"isMounted",!1),s(this,"state",{error:null,loading:!0,reviews:this.isPreview?this.props.attributes.previewReviews:[],totalReviews:this.isPreview?this.props.attributes.previewReviews.length:0}),s(this,"setError",(async e=>{if(!this.isMounted)return;const{onReviewsLoadError:t}=this.props,r=await(async e=>{if(!("json"in e))return{message:e.message,type:e.type||"general"};try{const t=await e.json();return{message:t.message,type:t.type||"api"}}catch(e){return{message:e.message,type:"general"}}})(e);this.setState({reviews:[],loading:!1,error:r}),t(r)}))}componentDidMount(){this.isMounted=!0,this.replaceReviews()}componentDidUpdate(e){e.reviewsToDisplay<this.props.reviewsToDisplay?this.delayedAppendReviews():this.shouldReplaceReviews(e,this.props)&&this.replaceReviews()}shouldReplaceReviews(e,t){return e.orderby!==t.orderby||e.order!==t.order||e.productId!==t.productId||!j()(e.categoryIds,t.categoryIds)}componentWillUnmount(){this.isMounted=!1,this.delayedAppendReviews.cancel&&this.delayedAppendReviews.cancel()}getArgs(e){const{categoryIds:t,order:r,orderby:s,productId:o,reviewsToDisplay:n}=this.props,i={order:r,orderby:s,per_page:n-e,offset:e};if(t){const e=Array.isArray(t)?t:JSON.parse(t);i.category_id=Array.isArray(e)?e.join(","):e}return o&&(i.product_id=o),i}replaceReviews(){if(this.isPreview)return;const{onReviewsReplaced:e}=this.props;this.updateListOfReviews().then(e)}appendReviews(){if(this.isPreview)return;const{onReviewsAppended:e,reviewsToDisplay:t}=this.props,{reviews:r}=this.state;t<=r.length||this.updateListOfReviews(r).then(e)}updateListOfReviews(e=[]){const{reviewsToDisplay:t}=this.props,{totalReviews:r}=this.state,s=Math.min(r,t)-e.length;return this.setState({loading:!0,reviews:e.concat(Array(s).fill({}))}),(o=this.getArgs(e.length),b()({path:"/wc/store/v1/products/reviews?"+Object.entries(o).map((e=>e.join("="))).join("&"),parse:!1}).then((e=>e.json().then((t=>({reviews:t,totalReviews:parseInt(e.headers.get("x-wp-total"),10)})))))).then((({reviews:t,totalReviews:r})=>(this.isMounted&&this.setState({reviews:e.filter((e=>Object.keys(e).length)).concat(t),totalReviews:r,loading:!1,error:null}),{newReviews:t}))).catch(this.setError);var o}render(){const{reviewsToDisplay:r}=this.props,{error:s,loading:o,reviews:n,totalReviews:i}=this.state;return(0,e.createElement)(t,{...this.props,error:s,isLoading:o,reviews:n.slice(0,r),totalReviews:i})}}s(r,"defaultProps",{delayFunction:e=>e,onReviewsAppended:()=>{},onReviewsLoadError:()=>{},onReviewsReplaced:()=>{}});const{displayName:o=t.name||"Component"}=t;return r.displayName=`WithReviews( ${o} )`,r})((({attributes:t,onAppendReviews:r,onChangeOrderby:s,reviews:i,sortSelectValue:a,totalReviews:l})=>{if(0===i.length)return null;const c=(0,n.getSetting)("reviewRatingsEnabled",!0);return(0,e.createElement)(e.Fragment,null,t.showOrderby&&c&&(0,e.createElement)(S,{value:a,onChange:s,readOnly:!0}),(0,e.createElement)(M,{attributes:t,reviews:i}),t.showLoadMore&&l>i.length&&(0,e.createElement)(f,{onClick:r,screenReaderLabel:(0,o.__)("Load more reviews","woocommerce")}))}));class D extends e.Component{constructor(e){super(e);const{attributes:t}=this.props;this.state={orderby:null==t?void 0:t.orderby,reviewsToDisplay:this.getReviewsOnPageLoad()},this.onAppendReviews=this.onAppendReviews.bind(this),this.onChangeOrderby=this.onChangeOrderby.bind(this)}getReviewsOnPageLoad(){const{attributes:e}=this.props;return"number"==typeof e.reviewsOnPageLoad?e.reviewsOnPageLoad:parseInt(e.reviewsOnPageLoad,10)}getReviewsOnLoadMore(){const{attributes:e}=this.props;return"number"==typeof e.reviewsOnLoadMore?e.reviewsOnLoadMore:parseInt(e.reviewsOnLoadMore,10)}onAppendReviews(){const{reviewsToDisplay:e}=this.state;this.setState({reviewsToDisplay:e+this.getReviewsOnLoadMore()})}onChangeOrderby(e){this.setState({orderby:e.target.value,reviewsToDisplay:this.getReviewsOnPageLoad()})}onReviewsAppended({newReviews:e}){(0,h.speak)((0,o.sprintf)(/* translators: %d is the count of reviews loaded. */
(0,o._n)("%d review loaded.","%d reviews loaded.",e.length,"woocommerce"),e.length))}onReviewsReplaced(){(0,h.speak)((0,o.__)("Reviews list updated.","woocommerce"))}onReviewsLoadError(){(0,h.speak)((0,o.__)("There was an error loading the reviews.","woocommerce"))}render(){const{attributes:t}=this.props,{categoryIds:r,productId:s}=t,{reviewsToDisplay:o}=this.state,{order:i,orderby:a}=(e=>{if((0,n.getSetting)("reviewRatingsEnabled",!0)){if("lowest-rating"===e)return{order:"asc",orderby:"rating"};if("highest-rating"===e)return{order:"desc",orderby:"rating"}}return{order:"desc",orderby:"date_gmt"}})(this.state.orderby);return(0,e.createElement)(I,{attributes:t,categoryIds:r,onAppendReviews:this.onAppendReviews,onChangeOrderby:this.onChangeOrderby,onReviewsAppended:this.onReviewsAppended,onReviewsLoadError:this.onReviewsLoadError,onReviewsReplaced:this.onReviewsReplaced,order:i,orderby:a,productId:s,reviewsToDisplay:o,sortSelectValue:this.state.orderby})}}(e=>{const t=document.body.querySelectorAll(u.join(",")),{Block:r,getProps:s,getErrorBoundaryProps:o,selector:n}=e;(({Block:e,getProps:t,getErrorBoundaryProps:r,selector:s,wrappers:o})=>{const n=document.body.querySelectorAll(s);o&&o.length>0&&Array.prototype.filter.call(n,(e=>!((e,t)=>Array.prototype.some.call(t,(t=>t.contains(e)&&!t.isSameNode(e))))(e,o))),g({Block:e,containers:n,getProps:t,getErrorBoundaryProps:r})})({Block:r,getProps:s,getErrorBoundaryProps:o,selector:n,wrappers:t}),Array.prototype.forEach.call(t,(t=>{t.addEventListener("wc-blocks_render_blocks_frontend",(()=>{(({Block:e,getProps:t,getErrorBoundaryProps:r,selector:s,wrapper:o})=>{const n=o.querySelectorAll(s);g({Block:e,containers:n,getProps:t,getErrorBoundaryProps:r})})({...e,wrapper:t})}))}))})({selector:"\n\t.wp-block-woocommerce-all-reviews,\n\t.wp-block-woocommerce-reviews-by-product,\n\t.wp-block-woocommerce-reviews-by-category\n",Block:D,getProps:e=>({attributes:{showOrderby:"true"===e.dataset.showOrderby,showLoadMore:"true"===e.dataset.showLoadMore,showReviewDate:e.classList.contains("has-date"),showReviewerName:e.classList.contains("has-name"),showReviewImage:e.classList.contains("has-image"),showReviewRating:e.classList.contains("has-rating"),showReviewContent:e.classList.contains("has-content"),showProductName:e.classList.contains("has-product-name")}})})})()})();