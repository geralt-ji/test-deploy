import{O as y,P as ue}from"./CEoGOofh.js";var ce=Object.defineProperty,l=(e,t)=>ce(e,"name",{value:t,configurable:!0}),C=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,i)=>(typeof require<"u"?require:t)[i]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+e+'" is not supported')});function U(e){return!isNaN(parseFloat(e))&&isFinite(e)}l(U,"_isNumber");function w(e){return e.charAt(0).toUpperCase()+e.substring(1)}l(w,"_capitalize");function k(e){return function(){return this[e]}}l(k,"_getter");var b=["isConstructor","isEval","isNative","isToplevel"],S=["columnNumber","lineNumber"],P=["fileName","functionName","source"],de=["args"],me=["evalOrigin"],F=b.concat(S,P,de,me);function p(e){if(e)for(var t=0;t<F.length;t++)e[F[t]]!==void 0&&this["set"+w(F[t])](e[F[t]])}l(p,"StackFrame");p.prototype={getArgs:function(){return this.args},setArgs:function(e){if(Object.prototype.toString.call(e)!=="[object Array]")throw new TypeError("Args must be an Array");this.args=e},getEvalOrigin:function(){return this.evalOrigin},setEvalOrigin:function(e){if(e instanceof p)this.evalOrigin=e;else if(e instanceof Object)this.evalOrigin=new p(e);else throw new TypeError("Eval Origin must be an Object or StackFrame")},toString:function(){var e=this.getFileName()||"",t=this.getLineNumber()||"",i=this.getColumnNumber()||"",a=this.getFunctionName()||"";return this.getIsEval()?e?"[eval] ("+e+":"+t+":"+i+")":"[eval]:"+t+":"+i:a?a+" ("+e+":"+t+":"+i+")":e+":"+t+":"+i}};p.fromString=l(function(e){var t=e.indexOf("("),i=e.lastIndexOf(")"),a=e.substring(0,t),o=e.substring(t+1,i).split(","),r=e.substring(i+1);if(r.indexOf("@")===0)var n=/@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(r,""),s=n[1],u=n[2],c=n[3];return new p({functionName:a,args:o||void 0,fileName:s,lineNumber:u||void 0,columnNumber:c||void 0})},"StackFrame$$fromString");for(v=0;v<b.length;v++)p.prototype["get"+w(b[v])]=k(b[v]),p.prototype["set"+w(b[v])]=function(e){return function(t){this[e]=!!t}}(b[v]);var v;for(_=0;_<S.length;_++)p.prototype["get"+w(S[_])]=k(S[_]),p.prototype["set"+w(S[_])]=function(e){return function(t){if(!U(t))throw new TypeError(e+" must be a Number");this[e]=Number(t)}}(S[_]);var _;for(E=0;E<P.length;E++)p.prototype["get"+w(P[E])]=k(P[E]),p.prototype["set"+w(P[E])]=function(e){return function(t){this[e]=String(t)}}(P[E]);var E,L=p;function M(){var e=/^\s*at .*(\S+:\d+|\(native\))/m,t=/^(eval@)?(\[native code])?$/;return{parse:l(function(i){if(i.stack&&i.stack.match(e))return this.parseV8OrIE(i);if(i.stack)return this.parseFFOrSafari(i);throw new Error("Cannot parse given Error object")},"ErrorStackParser$$parse"),extractLocation:l(function(i){if(i.indexOf(":")===-1)return[i];var a=/(.+?)(?::(\d+))?(?::(\d+))?$/,o=a.exec(i.replace(/[()]/g,""));return[o[1],o[2]||void 0,o[3]||void 0]},"ErrorStackParser$$extractLocation"),parseV8OrIE:l(function(i){var a=i.stack.split(`
`).filter(function(o){return!!o.match(e)},this);return a.map(function(o){o.indexOf("(eval ")>-1&&(o=o.replace(/eval code/g,"eval").replace(/(\(eval at [^()]*)|(,.*$)/g,""));var r=o.replace(/^\s+/,"").replace(/\(eval code/g,"(").replace(/^.*?\s+/,""),n=r.match(/ (\(.+\)$)/);r=n?r.replace(n[0],""):r;var s=this.extractLocation(n?n[1]:r),u=n&&r||void 0,c=["eval","<anonymous>"].indexOf(s[0])>-1?void 0:s[0];return new L({functionName:u,fileName:c,lineNumber:s[1],columnNumber:s[2],source:o})},this)},"ErrorStackParser$$parseV8OrIE"),parseFFOrSafari:l(function(i){var a=i.stack.split(`
`).filter(function(o){return!o.match(t)},this);return a.map(function(o){if(o.indexOf(" > eval")>-1&&(o=o.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g,":$1")),o.indexOf("@")===-1&&o.indexOf(":")===-1)return new L({functionName:o});var r=/((.*".+"[^@]*)?[^@]*)(?:@)/,n=o.match(r),s=n&&n[1]?n[1]:void 0,u=this.extractLocation(o.replace(r,""));return new L({functionName:s,fileName:u[0],lineNumber:u[1],columnNumber:u[2],source:o})},this)},"ErrorStackParser$$parseFFOrSafari")}}l(M,"ErrorStackParser");var fe=new M,pe=fe,h=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string"&&!1,V=h&&typeof module<"u"&&typeof module.exports<"u"&&typeof C<"u"&&typeof __dirname<"u",ye=h&&!V,he=typeof Deno<"u",z=!h&&!he,we=z&&typeof window=="object"&&typeof document=="object"&&typeof document.createElement=="function"&&typeof sessionStorage=="object"&&typeof importScripts!="function",ge=z&&typeof importScripts=="function"&&typeof self=="object";typeof navigator=="object"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome")==-1&&navigator.userAgent.indexOf("Safari")>-1;var H,D,W,j,A;async function T(){if(!h||(H=(await y(async()=>{const{default:r}=await import("./BIHI7g3E.js");return{default:r}},[],import.meta.url)).default,j=await y(()=>import("./BIHI7g3E.js"),[],import.meta.url),A=await y(()=>import("./BIHI7g3E.js"),[],import.meta.url),W=(await y(async()=>{const{default:r}=await import("./BIHI7g3E.js");return{default:r}},[],import.meta.url)).default,D=await y(()=>import("./BIHI7g3E.js"),[],import.meta.url),N=D.sep,typeof C<"u"))return;let e=j,t=await y(()=>import("./BIHI7g3E.js"),[],import.meta.url),i=await y(()=>import("./BIHI7g3E.js"),[],import.meta.url),a=await y(()=>import("./BIHI7g3E.js"),[],import.meta.url),o={fs:e,crypto:t,ws:i,child_process:a};globalThis.require=function(r){return o[r]}}l(T,"initNodeModules");function q(e,t){return D.resolve(t||".",e)}l(q,"node_resolvePath");function B(e,t){return t===void 0&&(t=location),new URL(e,t).toString()}l(B,"browser_resolvePath");var x;h?x=q:x=B;var N;h||(N="/");function Y(e,t){return e.startsWith("file://")&&(e=e.slice(7)),e.includes("://")?{response:fetch(e)}:{binary:A.readFile(e).then(i=>new Uint8Array(i.buffer,i.byteOffset,i.byteLength))}}l(Y,"node_getBinaryResponse");function J(e,t){let i=new URL(e,location);return{response:fetch(i,t?{integrity:t}:{})}}l(J,"browser_getBinaryResponse");var R;h?R=Y:R=J;async function G(e,t){let{response:i,binary:a}=R(e,t);if(a)return a;let o=await i;if(!o.ok)throw new Error(`Failed to load '${e}': request failed.`);return new Uint8Array(await o.arrayBuffer())}l(G,"loadBinaryFile");var I;if(we)I=l(async e=>await import(e),"loadScript");else if(ge)I=l(async e=>{try{globalThis.importScripts(e)}catch(t){if(t instanceof TypeError)await import(e);else throw t}},"loadScript");else if(h)I=K;else throw new Error("Cannot determine runtime environment");async function K(e){e.startsWith("file://")&&(e=e.slice(7)),e.includes("://")?W.runInThisContext(await(await fetch(e)).text()):await import(H.pathToFileURL(e).href)}l(K,"nodeLoadScript");async function Q(e){if(h){await T();let t=await A.readFile(e,{encoding:"utf8"});return JSON.parse(t)}else return await(await fetch(e)).json()}l(Q,"loadLockFile");async function X(){if(V)return __dirname;let e;try{throw new Error}catch(a){e=a}let t=pe.parse(e)[0].fileName;if(h&&!t.startsWith("file://")&&(t=`file://${t}`),ye){let a=await y(()=>import("./BIHI7g3E.js"),[],import.meta.url);return(await y(async()=>{const{fileURLToPath:o}=await import("./BIHI7g3E.js");return{fileURLToPath:o}},[],import.meta.url)).fileURLToPath(a.dirname(t))}let i=t.lastIndexOf(N);if(i===-1)throw new Error("Could not extract indexURL path from pyodide module location");return t.slice(0,i)}l(X,"calculateDirname");function Z(e){let t=e.FS,i=e.FS.filesystems.MEMFS,a=e.PATH,o={DIR_MODE:16895,FILE_MODE:33279,mount:function(r){if(!r.opts.fileSystemHandle)throw new Error("opts.fileSystemHandle is required");return i.mount.apply(null,arguments)},syncfs:async(r,n,s)=>{try{let u=o.getLocalSet(r),c=await o.getRemoteSet(r),d=n?c:u,f=n?u:c;await o.reconcile(r,d,f),s(null)}catch(u){s(u)}},getLocalSet:r=>{let n=Object.create(null);function s(d){return d!=="."&&d!==".."}l(s,"isRealDir");function u(d){return f=>a.join2(d,f)}l(u,"toAbsolute");let c=t.readdir(r.mountpoint).filter(s).map(u(r.mountpoint));for(;c.length;){let d=c.pop(),f=t.stat(d);t.isDir(f.mode)&&c.push.apply(c,t.readdir(d).filter(s).map(u(d))),n[d]={timestamp:f.mtime,mode:f.mode}}return{type:"local",entries:n}},getRemoteSet:async r=>{let n=Object.create(null),s=await ve(r.opts.fileSystemHandle);for(let[u,c]of s)u!=="."&&(n[a.join2(r.mountpoint,u)]={timestamp:c.kind==="file"?(await c.getFile()).lastModifiedDate:new Date,mode:c.kind==="file"?o.FILE_MODE:o.DIR_MODE});return{type:"remote",entries:n,handles:s}},loadLocalEntry:r=>{let n=t.lookupPath(r).node,s=t.stat(r);if(t.isDir(s.mode))return{timestamp:s.mtime,mode:s.mode};if(t.isFile(s.mode))return n.contents=i.getFileDataAsTypedArray(n),{timestamp:s.mtime,mode:s.mode,contents:n.contents};throw new Error("node type not supported")},storeLocalEntry:(r,n)=>{if(t.isDir(n.mode))t.mkdirTree(r,n.mode);else if(t.isFile(n.mode))t.writeFile(r,n.contents,{canOwn:!0});else throw new Error("node type not supported");t.chmod(r,n.mode),t.utime(r,n.timestamp,n.timestamp)},removeLocalEntry:r=>{var n=t.stat(r);t.isDir(n.mode)?t.rmdir(r):t.isFile(n.mode)&&t.unlink(r)},loadRemoteEntry:async r=>{if(r.kind==="file"){let n=await r.getFile();return{contents:new Uint8Array(await n.arrayBuffer()),mode:o.FILE_MODE,timestamp:n.lastModifiedDate}}else{if(r.kind==="directory")return{mode:o.DIR_MODE,timestamp:new Date};throw new Error("unknown kind: "+r.kind)}},storeRemoteEntry:async(r,n,s)=>{let u=r.get(a.dirname(n)),c=t.isFile(s.mode)?await u.getFileHandle(a.basename(n),{create:!0}):await u.getDirectoryHandle(a.basename(n),{create:!0});if(c.kind==="file"){let d=await c.createWritable();await d.write(s.contents),await d.close()}r.set(n,c)},removeRemoteEntry:async(r,n)=>{await r.get(a.dirname(n)).removeEntry(a.basename(n)),r.delete(n)},reconcile:async(r,n,s)=>{let u=0,c=[];Object.keys(n.entries).forEach(function(m){let g=n.entries[m],O=s.entries[m];(!O||t.isFile(g.mode)&&g.timestamp.getTime()>O.timestamp.getTime())&&(c.push(m),u++)}),c.sort();let d=[];if(Object.keys(s.entries).forEach(function(m){n.entries[m]||(d.push(m),u++)}),d.sort().reverse(),!u)return;let f=n.type==="remote"?n.handles:s.handles;for(let m of c){let g=a.normalize(m.replace(r.mountpoint,"/")).substring(1);if(s.type==="local"){let O=f.get(g),le=await o.loadRemoteEntry(O);o.storeLocalEntry(m,le)}else{let O=o.loadLocalEntry(m);await o.storeRemoteEntry(f,g,O)}}for(let m of d)if(s.type==="local")o.removeLocalEntry(m);else{let g=a.normalize(m.replace(r.mountpoint,"/")).substring(1);await o.removeRemoteEntry(f,g)}}};e.FS.filesystems.NATIVEFS_ASYNC=o}l(Z,"initializeNativeFS");var ve=l(async e=>{let t=[];async function i(o){for await(let r of o.values())t.push(r),r.kind==="directory"&&await i(r)}l(i,"collect"),await i(e);let a=new Map;a.set(".",e);for(let o of t){let r=(await e.resolve(o)).join("/");a.set(r,o)}return a},"getFsHandles");function ee(e){let t={noImageDecoding:!0,noAudioDecoding:!0,noWasmDecoding:!1,preRun:oe(e),quit(i,a){throw t.exited={status:i,toThrow:a},a},print:e.stdout,printErr:e.stderr,arguments:e.args,API:{config:e},locateFile:i=>e.indexURL+i,instantiateWasm:ae(e.indexURL)};return t}l(ee,"createSettings");function te(e){return function(t){let i="/";try{t.FS.mkdirTree(e)}catch(a){console.error(`Error occurred while making a home directory '${e}':`),console.error(a),console.error(`Using '${i}' for a home directory instead`),e=i}t.FS.chdir(e)}}l(te,"createHomeDirectory");function re(e){return function(t){Object.assign(t.ENV,e)}}l(re,"setEnvironment");function ie(e){return t=>{for(let i of e)t.FS.mkdirTree(i),t.FS.mount(t.FS.filesystems.NODEFS,{root:i},i)}}l(ie,"mountLocalDirectories");function ne(e){let t=G(e);return i=>{let a=i._py_version_major(),o=i._py_version_minor();i.FS.mkdirTree("/lib"),i.FS.mkdirTree(`/lib/python${a}.${o}/site-packages`),i.addRunDependency("install-stdlib"),t.then(r=>{i.FS.writeFile(`/lib/python${a}${o}.zip`,r)}).catch(r=>{console.error("Error occurred while installing the standard library:"),console.error(r)}).finally(()=>{i.removeRunDependency("install-stdlib")})}}l(ne,"installStdlib");function oe(e){let t;return e.stdLibURL!=null?t=e.stdLibURL:t=e.indexURL+"python_stdlib.zip",[ne(t),te(e.env.HOME),re(e.env),ie(e._node_mounts),Z]}l(oe,"getFileSystemInitializationFuncs");function ae(e){let{binary:t,response:i}=R(e+"pyodide.asm.wasm");return function(a,o){return async function(){try{let r;i?r=await WebAssembly.instantiateStreaming(i,a):r=await WebAssembly.instantiate(await t,a);let{instance:n,module:s}=r;typeof WasmOffsetConverter<"u"&&(wasmOffsetConverter=new WasmOffsetConverter(wasmBinary,s)),o(n,s)}catch(r){console.warn("wasm instantiation failed!"),console.warn(r)}}(),{}}}l(ae,"getInstantiateWasmFunc");var $="0.26.2";async function se(e={}){var t,i;await T();let a=e.indexURL||await X();a=x(a),a.endsWith("/")||(a+="/"),e.indexURL=a;let o={fullStdLib:!1,jsglobals:globalThis,stdin:globalThis.prompt?globalThis.prompt:void 0,lockFileURL:a+"pyodide-lock.json",args:[],_node_mounts:[],env:{},packageCacheDir:a,packages:[],enableRunUntilComplete:!1,checkAPIVersion:!0},r=Object.assign(o,e);(t=r.env).HOME??(t.HOME="/home/pyodide"),(i=r.env).PYTHONINSPECT??(i.PYTHONINSPECT="1");let n=ee(r),s=n.API;if(s.lockFilePromise=Q(r.lockFileURL),typeof _createPyodideModule!="function"){let m=`${r.indexURL}pyodide.asm.js`;await I(m)}let u;if(e._loadSnapshot){let m=await e._loadSnapshot;ArrayBuffer.isView(m)?u=m:u=new Uint8Array(m),n.noInitialRun=!0,n.INITIAL_MEMORY=u.length}let c=await _createPyodideModule(n);if(n.exited)throw n.exited.toThrow;if(e.pyproxyToStringRepr&&s.setPyProxyToStringMethod(!0),s.version!==$&&r.checkAPIVersion)throw new Error(`Pyodide version does not match: '${$}' <==> '${s.version}'. If you updated the Pyodide version, make sure you also updated the 'indexURL' parameter passed to loadPyodide.`);c.locateFile=m=>{throw new Error("Didn't expect to load any more file_packager files!")};let d;u&&(d=s.restoreSnapshot(u));let f=s.finalizeBootstrap(d);return s.sys.path.insert(0,s.config.env.HOME),f.version.includes("dev")||s.setCdnUrl(`https://cdn.jsdelivr.net/pyodide/v${f.version}/full/`),s._pyodide.set_excepthook(),await s.packageIndexReady,s.initializeStreams(r.stdin,r.stdout,r.stderr),f}l(se,"loadPyodide");const Ee=ue("pyodide",{state:()=>({pyodide:null,micropip:null,initialized:!1,isRunningPython:!1,initCheckPromise:null}),actions:{async initialize(){return this.initPromise||(this.initPromise=new Promise(async(e,t)=>{try{this.pyodide=await se({indexURL:"https://jsd.onmicrosoft.cn/pyodide/v0.26.2/full/"}),console.log("Pyodide Ready!"),this.initialized=!0,e()}catch(i){t(i)}})),console.debug("Initialized Pyodide Store"),this.initPromise},async checkInit(){return this.initPromise?this.initPromise:this.initialize()},async installDependency(e){await this.checkInit(),e.length>0&&(await this.pyodide.loadPackage(["micropip"]),this.micropip=this.pyodide.pyimport("micropip"),await this.micropip.install(e)),console.log("Dependency Installed!")},async initIOSetting(){await this.pyodide.runPython(`import sys;import io; _original_stdout = sys.stdout;_original_stderr = sys.stderr; sys.stdout = io.StringIO();sys.stderr = io.StringIO();import time;time.sleep = lambda x: None;
`)},async getStdOut(){return await this.pyodide.runPythonAsync("_captured_stdout = sys.stdout.getvalue();"),await this.pyodide.runPythonAsync("_captured_stdout")},async revertIOSetting(){await this.pyodide.runPython("sys.stdout = _original_stdout;sys.stderr = _original_stderr")},async runPythonAsync(e){await this.checkInit();let t,i;try{await this.initIOSetting();let a=await this.pyodide.runPythonAsync(e);t=await this.getStdOut()+(a===void 0?"":a)}catch{i=await this.pyodide.runPythonAsync("sys.stderr.getvalue()")}finally{await this.revertIOSetting()}return i===void 0?t:i}}});export{Ee as u};
