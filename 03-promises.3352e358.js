var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequire7bc7;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequire7bc7=o);var i=o("7Y9D8");const r=document.querySelector('input[name="delay"]'),u=document.querySelector('input[name="step"]'),l=document.querySelector('input[name="amount"]');function a(e,t){return new Promise(((n,o)=>{setTimeout((()=>{Math.random()>.3?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}document.querySelector('button[type="submit"]').addEventListener("click",(function(e){e.preventDefault();let t=Number(r.value),n=Number(u.value),o=Number(l.value);for(let e=1;e<=o;e+=1)a(e,t).then((({position:e,delay:t})=>{i.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{i.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)})),t+=n}));
//# sourceMappingURL=03-promises.3352e358.js.map
