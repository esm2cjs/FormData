var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var esm_exports = {};
__export(esm_exports, {
  File: () => File,
  FormData: () => FormData,
  formDataToBlob: () => formDataToBlob
});
module.exports = __toCommonJS(esm_exports);
var import_fetch_blob = __toESM(require("@esm2cjs/fetch-blob"));
var import_file = __toESM(require("@esm2cjs/fetch-blob/file.js"));
var _d, _a;
/*! formdata-polyfill. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */
var { toStringTag: t, iterator: i, hasInstance: h } = Symbol, r = Math.random, m = "append,set,get,getAll,delete,keys,values,entries,forEach,constructor".split(","), f = (a, b, c) => (a += "", /^(Blob|File)$/.test(b && b[t]) ? [(c = c !== void 0 ? c + "" : b[t] == "File" ? b.name : "blob", a), b.name !== c || b[t] == "blob" ? new import_file.default([b], c, b) : b] : [a, b + ""]), e = (c, f2) => (f2 ? c : c.replace(/\r?\n|\r/g, "\r\n")).replace(/\n/g, "%0A").replace(/\r/g, "%0D").replace(/"/g, "%22"), x = (n, a, e2) => {
  if (a.length < e2) {
    throw new TypeError(`Failed to execute '${n}' on 'FormData': ${e2} arguments required, but only ${a.length} present.`);
  }
};
const File = import_file.default;
const FormData = (_a = class {
  constructor(...a) {
    __privateAdd(this, _d, []);
    if (a.length)
      throw new TypeError(`Failed to construct 'FormData': parameter 1 is not of type 'HTMLFormElement'.`);
  }
  get [t]() {
    return "FormData";
  }
  [i]() {
    return this.entries();
  }
  static [h](o) {
    return o && typeof o === "object" && o[t] === "FormData" && !m.some((m2) => typeof o[m2] != "function");
  }
  append(...a) {
    x("append", arguments, 2);
    __privateGet(this, _d).push(f(...a));
  }
  delete(a) {
    x("delete", arguments, 1);
    a += "";
    __privateSet(this, _d, __privateGet(this, _d).filter(([b]) => b !== a));
  }
  get(a) {
    x("get", arguments, 1);
    a += "";
    for (var b = __privateGet(this, _d), l = b.length, c = 0; c < l; c++)
      if (b[c][0] === a)
        return b[c][1];
    return null;
  }
  getAll(a, b) {
    x("getAll", arguments, 1);
    b = [];
    a += "";
    __privateGet(this, _d).forEach((c) => c[0] === a && b.push(c[1]));
    return b;
  }
  has(a) {
    x("has", arguments, 1);
    a += "";
    return __privateGet(this, _d).some((b) => b[0] === a);
  }
  forEach(a, b) {
    x("forEach", arguments, 1);
    for (var [c, d] of this)
      a.call(b, d, c, this);
  }
  set(...a) {
    x("set", arguments, 2);
    var b = [], c = true;
    a = f(...a);
    __privateGet(this, _d).forEach((d) => {
      d[0] === a[0] ? c && (c = !b.push(a)) : b.push(d);
    });
    c && b.push(a);
    __privateSet(this, _d, b);
  }
  *entries() {
    yield* __privateGet(this, _d);
  }
  *keys() {
    for (var [a] of this)
      yield a;
  }
  *values() {
    for (var [, a] of this)
      yield a;
  }
}, _d = new WeakMap(), _a);
function formDataToBlob(F2, B = import_fetch_blob.default) {
  var b = `${r()}${r()}`.replace(/\./g, "").slice(-28).padStart(32, "-"), c = [], p = `--${b}\r
Content-Disposition: form-data; name="`;
  F2.forEach((v, n) => typeof v == "string" ? c.push(p + e(n) + `"\r
\r
${v.replace(/\r(?!\n)|(?<!\r)\n/g, "\r\n")}\r
`) : c.push(p + e(n) + `"; filename="${e(v.name, 1)}"\r
Content-Type: ${v.type || "application/octet-stream"}\r
\r
`, v, "\r\n"));
  c.push(`--${b}--`);
  return new B(c, { type: "multipart/form-data; boundary=" + b });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  File,
  FormData,
  formDataToBlob
});
//# sourceMappingURL=index.js.map
