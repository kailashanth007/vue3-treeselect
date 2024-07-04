import { defineComponent as Yt, openBlock as p, createElementBlock as v, Fragment as k, renderList as Te, createCommentVNode as C, createElementVNode as O, normalizeClass as I, normalizeStyle as at, toDisplayString as B, resolveComponent as x, renderSlot as A, createTextVNode as K, createBlock as V, createVNode as W, TransitionGroup as In, createSlots as te, withCtx as N, Transition as ut, toRaw as ze, createApp as Xt, ref as Ae, useSlots as Bn, reactive as Vn, computed as D, nextTick as ke, watch as X, onMounted as zn, provide as Fn } from "vue";
var Ie = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ae(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Hn(e, t) {
  var r = t.length, c = e.length;
  if (c > r)
    return !1;
  if (c === r)
    return e === t;
  e: for (var d = 0, o = 0; d < c; d++) {
    for (var f = e.charCodeAt(d); o < r; )
      if (t.charCodeAt(o++) === f)
        continue e;
    return !1;
  }
  return !0;
}
var Wn = Hn;
const $n = /* @__PURE__ */ ae(Wn);
function Pn() {
}
var jn = Pn;
const Qn = /* @__PURE__ */ ae(jn), Z = process.env.NODE_ENV === "production" ? (
  /* istanbul ignore next */
  Qn
) : function(t, r) {
  if (!t()) {
    const c = ["[Vue-Treeselect Warning]"].concat(r());
    console.error(...c);
  }
};
function de(e) {
  return function(r, ...c) {
    r.type === "mousedown" && r.button === 0 && e.call(this, r, ...c);
  };
}
function Kn(e, t) {
  const r = e.getBoundingClientRect(), c = t.getBoundingClientRect(), d = t.offsetHeight / 3;
  c.bottom + d > r.bottom ? e.scrollTop = Math.min(
    t.offsetTop + t.clientHeight - e.offsetHeight + d,
    e.scrollHeight
  ) : c.top - d < r.top && (e.scrollTop = Math.max(t.offsetTop - d, 0));
}
function Un(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Gt = Un, qn = typeof Ie == "object" && Ie && Ie.Object === Object && Ie, Yn = qn, Xn = Yn, Gn = typeof self == "object" && self && self.Object === Object && self, Jn = Xn || Gn || Function("return this")(), Jt = Jn, Zn = Jt, es = function() {
  return Zn.Date.now();
}, ts = es, ns = /\s/;
function ss(e) {
  for (var t = e.length; t-- && ns.test(e.charAt(t)); )
    ;
  return t;
}
var os = ss, rs = os, ls = /^\s+/;
function as(e) {
  return e && e.slice(0, rs(e) + 1).replace(ls, "");
}
var is = as, cs = Jt, us = cs.Symbol, Zt = us, At = Zt, en = Object.prototype, ds = en.hasOwnProperty, hs = en.toString, _e = At ? At.toStringTag : void 0;
function fs(e) {
  var t = ds.call(e, _e), r = e[_e];
  try {
    e[_e] = void 0;
    var c = !0;
  } catch {
  }
  var d = hs.call(e);
  return c && (t ? e[_e] = r : delete e[_e]), d;
}
var ps = fs, ms = Object.prototype, vs = ms.toString;
function gs(e) {
  return vs.call(e);
}
var ys = gs, kt = Zt, Ss = ps, bs = ys, _s = "[object Null]", Os = "[object Undefined]", It = kt ? kt.toStringTag : void 0;
function ws(e) {
  return e == null ? e === void 0 ? Os : _s : It && It in Object(e) ? Ss(e) : bs(e);
}
var Es = ws;
function Ts(e) {
  return e != null && typeof e == "object";
}
var Cs = Ts, Ds = Es, Ns = Cs, Ls = "[object Symbol]";
function Ms(e) {
  return typeof e == "symbol" || Ns(e) && Ds(e) == Ls;
}
var Rs = Ms, xs = is, Bt = Gt, As = Rs, Vt = NaN, ks = /^[-+]0x[0-9a-f]+$/i, Is = /^0b[01]+$/i, Bs = /^0o[0-7]+$/i, Vs = parseInt;
function zs(e) {
  if (typeof e == "number")
    return e;
  if (As(e))
    return Vt;
  if (Bt(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Bt(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = xs(e);
  var r = Is.test(e);
  return r || Bs.test(e) ? Vs(e.slice(2), r ? 2 : 8) : ks.test(e) ? Vt : +e;
}
var tn = zs, Fs = Gt, st = ts, zt = tn, Hs = "Expected a function", Ws = Math.max, $s = Math.min;
function Ps(e, t, r) {
  var c, d, o, f, u, g, S = 0, _ = !1, T = !1, z = !0;
  if (typeof e != "function")
    throw new TypeError(Hs);
  t = zt(t) || 0, Fs(r) && (_ = !!r.leading, T = "maxWait" in r, o = T ? Ws(zt(r.maxWait) || 0, t) : o, z = "trailing" in r ? !!r.trailing : z);
  function ne(E) {
    var L = c, F = d;
    return c = d = void 0, S = E, f = e.apply(F, L), f;
  }
  function U(E) {
    return S = E, u = setTimeout(i, t), _ ? ne(E) : f;
  }
  function Fe(E) {
    var L = E - g, F = E - S, se = t - L;
    return T ? $s(se, o - F) : se;
  }
  function s(E) {
    var L = E - g, F = E - S;
    return g === void 0 || L >= t || L < 0 || T && F >= o;
  }
  function i() {
    var E = st();
    if (s(E))
      return Ce(E);
    u = setTimeout(i, Fe(E));
  }
  function Ce(E) {
    return u = void 0, z && c ? ne(E) : (c = d = void 0, f);
  }
  function He() {
    u !== void 0 && clearTimeout(u), S = 0, c = g = d = u = void 0;
  }
  function he() {
    return u === void 0 ? f : Ce(st());
  }
  function $() {
    var E = st(), L = s(E);
    if (c = arguments, d = this, g = E, L) {
      if (u === void 0)
        return U(g);
      if (T)
        return clearTimeout(u), u = setTimeout(i, t), ne(g);
    }
    return u === void 0 && (u = setTimeout(i, t)), f;
  }
  return $.cancel = He, $.flush = he, $;
}
var js = Ps;
const Qs = /* @__PURE__ */ ae(js);
var Ks = function(e, t) {
  var r = document.createElement("_"), c = r.appendChild(document.createElement("_")), d = r.appendChild(document.createElement("_")), o = c.appendChild(document.createElement("_")), f = void 0, u = void 0;
  return c.style.cssText = r.style.cssText = "height:100%;left:0;opacity:0;overflow:hidden;pointer-events:none;position:absolute;top:0;transition:0s;width:100%;z-index:-1", o.style.cssText = d.style.cssText = "display:block;height:100%;transition:0s;width:100%", o.style.width = o.style.height = "200%", e.appendChild(r), g(), _;
  function g() {
    S();
    var T = e.offsetWidth, z = e.offsetHeight;
    (T !== f || z !== u) && (f = T, u = z, d.style.width = T * 2 + "px", d.style.height = z * 2 + "px", r.scrollLeft = r.scrollWidth, r.scrollTop = r.scrollHeight, c.scrollLeft = c.scrollWidth, c.scrollTop = c.scrollHeight, t({ width: T, height: z })), c.addEventListener("scroll", g), r.addEventListener("scroll", g);
  }
  function S() {
    c.removeEventListener("scroll", g), r.removeEventListener("scroll", g);
  }
  function _() {
    S(), e.removeChild(r);
  }
};
function nn(e, t) {
  const r = e.indexOf(t);
  r !== -1 && e.splice(r, 1);
}
let it;
const Ve = [], Us = 100;
function qs() {
  it = setInterval(() => {
    Ve.forEach(sn);
  }, Us);
}
function Ys() {
  clearInterval(it), it = null;
}
function sn(e) {
  const { $el: t, listener: r, lastWidth: c, lastHeight: d } = e, o = t.offsetWidth, f = t.offsetHeight;
  (c !== o || d !== f) && (e.lastWidth = o, e.lastHeight = f, r({ width: o, height: f }));
}
function Xs(e, t) {
  const r = {
    $el: e,
    listener: t,
    lastWidth: null,
    lastHeight: null
  }, c = () => {
    nn(Ve, r), Ve.length || Ys();
  };
  return Ve.push(r), sn(r), qs(), c;
}
function on(e, t) {
  const r = document.documentMode === 9;
  let c = !0;
  const f = (r ? Xs : Ks)(e, (...u) => c || t(...u));
  return c = !1, f;
}
function Gs(e) {
  const t = [];
  let r = e.parentNode;
  for (; r && r.nodeName !== "BODY" && r.nodeType === document.ELEMENT_NODE; )
    Js(r) && t.push(r), r = r.parentNode;
  return t.push(window), t;
}
function Js(e) {
  const { overflow: t, overflowX: r, overflowY: c } = getComputedStyle(e);
  return /(auto|scroll|overlay)/.test(t + c + r);
}
function rn(e, t) {
  const r = Gs(e);
  return window.addEventListener("resize", t, { passive: !0 }), r.forEach((c) => {
    c.addEventListener("scroll", t, { passive: !0 });
  }), function() {
    window.removeEventListener("resize", t, { passive: !0 }), r.forEach((d) => {
      d.removeEventListener("scroll", t, { passive: !0 });
    });
  };
}
function ln(e) {
  return e !== e;
}
function an(e) {
  return !!e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function";
}
var Zs = tn, Ft = 1 / 0, eo = 17976931348623157e292;
function to(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = Zs(e), e === Ft || e === -Ft) {
    var t = e < 0 ? -1 : 1;
    return t * eo;
  }
  return e === e ? e : 0;
}
var no = to, so = no;
function oo(e) {
  var t = so(e), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
var ro = oo, lo = ro, ao = "Expected a function";
function io(e, t) {
  var r;
  if (typeof t != "function")
    throw new TypeError(ao);
  return e = lo(e), function() {
    return --e > 0 && (r = t.apply(this, arguments)), e <= 1 && (t = void 0), r;
  };
}
var co = io, uo = co;
function ho(e) {
  return uo(2, e);
}
var fo = ho;
const po = /* @__PURE__ */ ae(fo);
function mo(e) {
  return e;
}
var vo = mo;
const go = /* @__PURE__ */ ae(vo);
function yo(e) {
  return function() {
    return e;
  };
}
var So = yo;
const Ht = /* @__PURE__ */ ae(So), j = () => /* @__PURE__ */ Object.create(null);
function bo(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var _o = bo;
const Wt = /* @__PURE__ */ ae(_o);
function ee(e, t) {
  return e.indexOf(t) !== -1;
}
function cn(e, t, r) {
  for (let c = 0, d = e.length; c < d; c++)
    if (t.call(r, e[c], c, e)) return e[c];
}
function Oo(e, t) {
  if (e.length !== t.length) return !0;
  for (let r = 0; r < e.length; r++)
    if (e[r] !== t[r]) return !0;
  return !1;
}
let wo = 0;
const Eo = () => wo++, le = null, ct = 0, un = 1, dn = 2, ue = "ALL_CHILDREN", Oe = "ALL_DESCENDANTS", we = "LEAF_CHILDREN", Ee = "LEAF_DESCENDANTS", To = "LOAD_ROOT_OPTIONS", Co = "LOAD_CHILDREN_OPTIONS", Do = "ASYNC_SEARCH", ot = "ALL", Be = "BRANCH_PRIORITY", rt = "LEAF_PRIORITY", lt = "ALL_WITH_INDETERMINATE", $t = "ORDER_SELECTED", Pt = "LEVEL", jt = "INDEX", R = {
  BACKSPACE: 8,
  ENTER: 13,
  ESCAPE: 27,
  END: 35,
  HOME: 36,
  ARROW_LEFT: 37,
  ARROW_UP: 38,
  ARROW_RIGHT: 39,
  ARROW_DOWN: 40,
  DELETE: 46
}, No = process.env.NODE_ENV === "testing" ? (
  /* to speed up unit testing */
  10
) : (
  /* istanbul ignore next */
  200
), Qt = 5, Kt = 40, H = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [c, d] of t)
    r[c] = d;
  return r;
}, Lo = Yt({
  name: "vue-treeselect--hidden-fields",
  inject: ["instance"],
  computed: {
    canRender() {
      return !this.instance || !this.instance.name || this.instance.disabled || !this.instance.hasValue;
    },
    values() {
      let e = this.instance.internalValue.value.map(this.stringifyValue);
      return this.instance.multiple && this.instance.joinValues && (e = [
        e.join(this.instance.delimiter)
      ]), e;
    }
  },
  methods: {
    stringifyValue(e) {
      return typeof e == "string" ? e : e != null && !ln(e) ? JSON.stringify(e) : "";
    }
  }
}), Mo = ["name", "value"];
function Ro(e, t, r, c, d, o) {
  return e.canRender ? (p(!0), v(k, { key: 0 }, Te(e.values, (f, u) => (p(), v("input", {
    type: "hidden",
    name: e.instance.name,
    value: f,
    key: "hidden-field-" + u
  }, null, 8, Mo))), 128)) : C("", !0);
}
const xo = /* @__PURE__ */ H(Lo, [["render", Ro]]), Ao = [
  R.ENTER,
  R.END,
  R.HOME,
  R.ARROW_LEFT,
  R.ARROW_UP,
  R.ARROW_RIGHT,
  R.ARROW_DOWN
], ko = {
  name: "vue-treeselect--input",
  inject: ["instance"],
  data: () => ({
    inputWidth: Qt,
    value: ""
  }),
  computed: {
    isSearchable() {
      return this.instance.searchable;
    },
    isDisabled() {
      return this.instance.disabled;
    },
    isRequired() {
      return this.instance.required;
    },
    tabIndex() {
      return this.instance.tabIndex;
    },
    hasValue() {
      return this.instance.hasValue.value;
    },
    isEmpty() {
      return !this.value.length;
    },
    needAutoSize() {
      const { instance: e } = this;
      return e.searchable && !e.disabled && e.multiple;
    },
    inputStyle() {
      return {
        // width: this.needAutoSize ? `${this.inputWidth}px` : null,
      };
    }
  },
  watch: {
    "instance.trigger.searchQuery"(e) {
      this.value = e;
    },
    value() {
      this.needAutoSize && this.$nextTick(this.updateInputWidth);
    }
  },
  mounted() {
    this.debouncedCallback = Qs(
      this.updateSearchQuery,
      No,
      { leading: !0, trailing: !0 }
    );
  },
  methods: {
    clear() {
      this.onInput({
        target: { value: "" }
      });
    },
    focus() {
      const { instance: e } = this;
      e.disabled || this.$refs.input && this.$refs.input.focus();
    },
    blur() {
      this.$refs.input && this.$refs.input.blur();
    },
    onFocus() {
      const { instance: e } = this;
      e.trigger.isFocused = !0, e.openOnFocus && e.openMenu();
    },
    onBlur() {
      const { instance: e } = this, t = e.getMenu();
      if (t && document.activeElement === t)
        return this.focus();
      e.trigger.isFocused = !1, this.value = "";
    },
    onInput(e) {
      const { value: t } = e.target;
      this.value = t, t ? this.debouncedCallback() : (this.debouncedCallback.cancel(), this.updateSearchQuery());
    },
    // 用 keyUp 事件存在一个问题，删除输入框最后一个字符也会导致取消选中最后一项
    onKeyDown(e) {
      const { instance: t } = this, r = "which" in e ? e.which : (
        /* istanbul ignore next */
        e.keyCode
      );
      if (!(e.ctrlKey || e.shiftKey || e.altKey || e.metaKey)) {
        if (!t.menu.isOpen && ee(Ao, r))
          return e.preventDefault(), t.openMenu();
        switch (r) {
          case R.BACKSPACE: {
            t.backspaceRemoves && !this.value.length && t.removeLastValue();
            break;
          }
          case R.ENTER: {
            if (e.preventDefault(), t.menu.current === null) return;
            const c = t.getNode(t.menu.current);
            if (c.isBranch && t.disableBranchNodes) return;
            t.select(c);
            break;
          }
          case R.ESCAPE: {
            this.value.length ? this.clear() : t.menu.isOpen && t.closeMenu();
            break;
          }
          case R.END: {
            e.preventDefault(), t.highlightLastOption();
            break;
          }
          case R.HOME: {
            e.preventDefault(), t.highlightFirstOption();
            break;
          }
          case R.ARROW_LEFT: {
            const c = t.getNode(t.menu.current);
            c.isBranch && t.shouldExpand(c) ? (e.preventDefault(), t.toggleExpanded(c)) : !c.isRootNode && (c.isLeaf || c.isBranch && !t.shouldExpand(c)) && (e.preventDefault(), t.setCurrentHighlightedOption(c.parentNode));
            break;
          }
          case R.ARROW_UP: {
            e.preventDefault(), t.highlightPrevOption();
            break;
          }
          case R.ARROW_RIGHT: {
            const c = t.getNode(t.menu.current);
            c.isBranch && !t.shouldExpand(c) && (e.preventDefault(), t.toggleExpanded(c));
            break;
          }
          case R.ARROW_DOWN: {
            e.preventDefault(), t.highlightNextOption();
            break;
          }
          case R.DELETE: {
            t.deleteRemoves && !this.value.length && t.removeLastValue();
            break;
          }
          default:
            t.openMenu();
        }
      }
    },
    onMouseDown(e) {
      this.value.length && e.stopPropagation();
    },
    updateInputWidth() {
      this.inputWidth = Math.max(
        Qt,
        this.$refs.sizer.scrollWidth + 15
      );
    },
    updateSearchQuery() {
      const { instance: e } = this;
      e.trigger.searchQuery = this.value;
    }
  }
}, Io = ["tabindex"], Bo = ["tabIndex", "required", "value"];
function Vo(e, t, r, c, d, o) {
  return p(), v("div", {
    class: "vue-treeselect__input-container",
    tabindex: !o.isSearchable && !o.isDisabled ? o.instance.tabIndex : "",
    onFocus: t[5] || (t[5] = (f) => o.isSearchable ? null : o.onFocus),
    onBlur: t[6] || (t[6] = (f) => o.isSearchable ? null : o.onBlur),
    onKeydown: t[7] || (t[7] = (f) => o.isSearchable ? null : o.onKeyDown)
  }, [
    o.isSearchable && !o.isDisabled ? (p(), v(k, { key: 0 }, [
      O("input", {
        ref: "input",
        class: I(["vue-treeselect__input", { "is-empty": o.isEmpty }]),
        type: "text",
        autocomplete: "off",
        tabIndex: o.tabIndex,
        required: o.isRequired && !o.hasValue,
        value: e.value,
        style: at(o.inputStyle),
        onFocus: t[0] || (t[0] = (...f) => o.onFocus && o.onFocus(...f)),
        onInput: t[1] || (t[1] = (...f) => o.onInput && o.onInput(...f)),
        onBlur: t[2] || (t[2] = (...f) => o.onBlur && o.onBlur(...f)),
        onKeydown: t[3] || (t[3] = (...f) => o.onKeyDown && o.onKeyDown(...f)),
        onMousedown: t[4] || (t[4] = (...f) => o.onMouseDown && o.onMouseDown(...f))
      }, null, 46, Bo),
      o.needAutoSize ? (p(), v("div", {
        key: 0,
        ref: "sizer",
        class: "vue-treeselect__sizer"
      }, B(e.value), 513)) : C("", !0)
    ], 64)) : C("", !0)
  ], 40, Io);
}
const hn = /* @__PURE__ */ H(ko, [["render", Vo]]), zo = {
  name: "vue-treeselect--placeholder",
  inject: ["instance"],
  computed: {
    hasValue() {
      return this.instance.hasValue.value;
    },
    hasSearchQuery() {
      return !!this.instance.trigger.searchQuery;
    }
  }
};
function Fo(e, t, r, c, d, o) {
  return p(), v("div", {
    class: I({
      "vue-treeselect__placeholder": !0,
      "vue-treeselect-helper-zoom-effect-off": !0,
      "vue-treeselect-helper-hide": o.hasValue || o.hasSearchQuery
    })
  }, B(o.instance.placeholder), 3);
}
const fn = /* @__PURE__ */ H(zo, [["render", Fo]]), Ho = {
  name: "vue-treeselect--single-value",
  inject: ["instance"],
  components: { Placeholder: fn, Input: hn },
  computed: {
    node() {
      return this.instance.selectedNodes.value[0];
    },
    hasValue() {
      return this.instance.hasValue.value;
    },
    hasActiveQuery() {
      return this.instance.trigger.searchQuery;
    },
    isFocused() {
      return this.instance.trigger.isFocused;
    }
  }
}, Wo = {
  key: 0,
  class: "vue-treeselect__value-container"
}, $o = { class: "vue-treeselect__single-value s-value-container" };
function Po(e, t, r, c, d, o) {
  const f = x("Placeholder"), u = x("Input");
  return p(), v(k, null, [
    o.hasValue ? (p(), v("div", Wo, [
      O("div", $o, [
        e.$slots["value-label"] ? A(e.$slots, "value-label", {
          key: 0,
          node: o.node
        }) : (p(), v(k, { key: 1 }, [
          K(B(o.node.label), 1)
        ], 64))
      ])
    ])) : C("", !0),
    !o.hasValue && !o.isFocused ? (p(), V(f, {
      key: 1,
      class: "s-value-container"
    })) : C("", !0),
    W(u, {
      ref: "input",
      class: I({ "as-overlay": o.hasValue })
    }, null, 8, ["class"])
  ], 64);
}
const Ut = /* @__PURE__ */ H(Ho, [["render", Po]]), jo = {
  name: "vue-treeselect--x"
}, Qo = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 348.333 348.333"
}, Ko = /* @__PURE__ */ O("path", { d: "M336.559 68.611L231.016 174.165l105.543 105.549c15.699 15.705 15.699 41.145 0 56.85-7.844 7.844-18.128 11.769-28.407 11.769-10.296 0-20.581-3.919-28.419-11.769L174.167 231.003 68.609 336.563c-7.843 7.844-18.128 11.769-28.416 11.769-10.285 0-20.563-3.919-28.413-11.769-15.699-15.698-15.699-41.139 0-56.85l105.54-105.549L11.774 68.611c-15.699-15.699-15.699-41.145 0-56.844 15.696-15.687 41.127-15.687 56.829 0l105.563 105.554L279.721 11.767c15.705-15.687 41.139-15.687 56.832 0 15.705 15.699 15.705 41.145.006 56.844z" }, null, -1), Uo = [
  Ko
];
function qo(e, t, r, c, d, o) {
  return p(), v("svg", Qo, Uo);
}
const pn = /* @__PURE__ */ H(jo, [["render", qo]]), Yo = {
  name: "vue-treeselect--multi-value-item",
  inject: ["instance"],
  components: { DeleteIcon: pn },
  props: {
    node: {
      type: Object,
      required: !0
    }
  },
  computed: {
    itemClass() {
      return {
        "vue-treeselect__multi-value-item": !0,
        "vue-treeselect__multi-value-item-disabled": this.node.isDisabled,
        "vue-treeselect__multi-value-item-new": this.node.isNew
      };
    }
  },
  methods: {
    handleMouseDown: de(function() {
      const { instance: t, node: r } = this;
      t.select(r);
    })
  }
}, Xo = { class: "vue-treeselect__multi-value-item-container" }, Go = { class: "vue-treeselect__icon vue-treeselect__value-remove" };
function Jo(e, t, r, c, d, o) {
  const f = x("DeleteIcon");
  return p(), v("div", Xo, [
    O("div", {
      class: I(o.itemClass),
      onMousedown: t[0] || (t[0] = (...u) => o.handleMouseDown && o.handleMouseDown(...u))
    }, [
      e.$slots["value-label"] ? A(e.$slots, "value-label", {
        key: 0,
        node: r.node
      }) : (p(), v(k, { key: 1 }, [
        K(B(r.node.label), 1)
      ], 64)),
      O("span", Go, [
        W(f)
      ])
    ], 34)
  ]);
}
const Zo = /* @__PURE__ */ H(Yo, [["render", Jo]]), er = {
  name: "vue-treeselect--multi-value",
  inject: ["instance"],
  components: { Placeholder: fn, TransitionGroup: In, Input: hn, MultiValueItem: Zo },
  computed: {
    multiValueItems() {
      return this.instance.internalValue.value.slice(0, this.instance.limit).map(this.instance.getNode);
    },
    count() {
      return this.instance.internalValue.length - this.instance.limit;
    },
    isFocused() {
      return this.instance.trigger.isFocused;
    },
    hasValue() {
      return this.instance.hasValue.value;
    }
  }
}, tr = {
  class: "vue-treeselect__limit-tip vue-treeselect-helper-zoom-effect-off",
  key: "exceed-limit-tip"
}, nr = { class: "vue-treeselect__limit-tip-text" };
function sr(e, t, r, c, d, o) {
  const f = x("MultiValueItem"), u = x("Placeholder"), g = x("Input");
  return p(), v(k, null, [
    (p(!0), v(k, null, Te(o.multiValueItems, (S) => (p(), V(f, {
      key: `multi-value-item-${S.id}`,
      node: S
    }, te({ _: 2 }, [
      e.$slots["value-label"] ? {
        name: "value-label",
        fn: N(({ node: _ }) => [
          A(e.$slots, "value-label", { node: _ })
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["node"]))), 128)),
    o.count > 0 ? (p(), v("div", tr, [
      O("span", nr, B(o.instance.limitText(o.count)), 1)
    ])) : C("", !0),
    !o.hasValue && !o.isFocused ? (p(), V(u, { key: "placeholder" })) : C("", !0),
    W(g, {
      ref: "input",
      key: "input"
    }, null, 512)
  ], 64);
}
const qt = /* @__PURE__ */ H(er, [["render", sr]]), or = {
  name: "vue-treeselect--arrow"
}, rr = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "24",
  height: "24"
}, lr = /* @__PURE__ */ O("path", { d: "M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" }, null, -1), ar = [
  lr
];
function ir(e, t, r, c, d, o) {
  return p(), v("svg", rr, ar);
}
const mn = /* @__PURE__ */ H(or, [["render", ir]]), cr = {
  name: "vue-treeselect--control",
  inject: ["instance"],
  components: {
    SingleValue: Ut,
    MultiValue: qt,
    DeleteIcon: pn,
    ArrowIcon: mn
  },
  data() {
    return {
      SingleValue: Ut,
      MultiValue: qt
    };
  },
  computed: {
    isSingle() {
      return this.instance.single.value;
    },
    /* eslint-disable valid-jsdoc */
    /**
     * Should show the "×" button that resets value?
     * @return {boolean}
     */
    shouldShowX() {
      const { instance: e } = this;
      return e.clearable && !e.disabled && e.hasValue && (this.hasUndisabledValue || e.allowClearingDisabled);
    },
    /**
     * Should show the arrow button that toggles menu?
     * @return {boolean}
     */
    shouldShowArrow() {
      const { instance: e } = this;
      return e.alwaysOpen ? !e.menu.isOpen : !0;
    },
    /**
     * Has any undisabled option been selected?
     * @type {boolean}
     */
    hasUndisabledValue() {
      const { instance: e } = this;
      return e.hasValue && e.internalValue.value.some((t) => !e.getNode(t).isDisabled);
    }
    /* eslint-enable valid-jsdoc */
  },
  methods: {
    getTitleX() {
      return this.instance.multiple ? this.instance.clearAllText : this.instance.clearValueText;
    },
    getArrowClass() {
      return {
        "vue-treeselect__control-arrow": !0,
        "vue-treeselect__control-arrow--rotated": this.instance.menu.isOpen
      };
    },
    handleMouseDownOnX: de(function(t) {
      t.stopPropagation(), t.preventDefault();
      const { instance: r } = this, c = r.beforeClearAll(), d = (o) => {
        o && r.clear();
      };
      an(c) ? c.then(d) : setTimeout(() => d(c), 0);
    }),
    handleMouseDownOnArrow: de(function(t) {
      t.preventDefault(), t.stopPropagation();
      const { instance: r } = this;
      r.focusInput();
    }),
    handleClick() {
      const { instance: e } = this;
      e.toggleMenu();
    }
    // This is meant to be called by child `<Value />` component.
  }
}, ur = ["title"];
function dr(e, t, r, c, d, o) {
  const f = x("SingleValue"), u = x("MultiValue"), g = x("DeleteIcon"), S = x("ArrowIcon");
  return p(), v("div", {
    class: "vue-treeselect__control",
    onMousedown: t[2] || (t[2] = (..._) => o.instance.handleMouseDown && o.instance.handleMouseDown(..._)),
    onClick: t[3] || (t[3] = (..._) => o.handleClick && o.handleClick(..._))
  }, [
    o.isSingle ? (p(), V(f, {
      key: 0,
      ref: "value-container"
    }, te({ _: 2 }, [
      e.$slots["value-label"] ? {
        name: "value-label",
        fn: N(({ node: _ }) => [
          A(e.$slots, "value-label", { node: _ })
        ]),
        key: "0"
      } : void 0
    ]), 1536)) : (p(), V(u, {
      key: 1,
      ref: "value-container"
    }, te({ _: 2 }, [
      e.$slots["value-label"] ? {
        name: "value-label",
        fn: N(({ node: _ }) => [
          A(e.$slots, "value-label", { node: _ })
        ]),
        key: "0"
      } : void 0
    ]), 1536)),
    o.shouldShowX ? (p(), v("div", {
      key: 2,
      class: "vue-treeselect__x-container",
      title: o.getTitleX(),
      onMousedown: t[0] || (t[0] = (..._) => o.handleMouseDownOnX && o.handleMouseDownOnX(..._))
    }, [
      W(g, { class: "vue-treeselect__x" })
    ], 40, ur)) : C("", !0),
    O("div", {
      class: "vue-treeselect__control-arrow-container",
      onMousedown: t[1] || (t[1] = (..._) => o.handleMouseDownOnArrow && o.handleMouseDownOnArrow(..._))
    }, [
      W(S, {
        class: I(o.getArrowClass())
      }, null, 8, ["class"])
    ], 32)
  ], 32);
}
const hr = /* @__PURE__ */ H(cr, [["render", dr]]), fr = Yt({
  name: "vue-treeselect--tip",
  props: {
    type: {
      type: String,
      required: !0
    },
    icon: {
      type: String,
      required: !0
    }
  }
}), pr = { class: "vue-treeselect__icon-container" };
function mr(e, t, r, c, d, o) {
  return p(), v("div", {
    class: I(`vue-treeselect__tip vue-treeselect__${e.type}-tip`)
  }, [
    O("div", pr, [
      O("span", {
        class: I(`vue-treeselect__icon-${e.icon}`)
      }, null, 2)
    ]),
    O("span", {
      class: I(`vue-treeselect__tip-text vue-treeselect__${e.type}-tip-text`)
    }, [
      A(e.$slots, "default")
    ], 2)
  ], 2);
}
const vn = /* @__PURE__ */ H(fr, [["render", mr]]), vr = {
  name: "VueTreeselectOption",
  inject: ["instance"],
  components: { ArrowIcon: mn, Transition: ut, Tip: vn },
  props: {
    node: {
      type: Object,
      required: !0
    }
  },
  data() {
    return {
      UNCHECKED: ct,
      INDETERMINATE: un,
      CHECKED: dn
    };
  },
  computed: {
    isSingle() {
      return this.instance.single.value;
    },
    shouldExpand() {
      const { instance: e, node: t } = this;
      return t.isBranch && e.shouldExpand(t);
    },
    shouldShow() {
      const { instance: e, node: t } = this;
      return e.shouldShowOptionInMenu(t);
    },
    checkedState() {
      return this.instance.forest.checkedStateMap[this.node.id];
    },
    shouldShowCount() {
      return this.node.isBranch && (this.instance.localSearch.active ? this.instance.showCountOnSearchComputed : this.instance.showCount);
    },
    childrenStatesLoaded() {
      return this.node.childrenStates.isLoaded;
    }
  },
  methods: {
    getCount() {
      return this.shouldShowCount ? this.instance.localSearch.active ? this.instance.localSearch.countMap[this.node.id][this.instance.showCountOf] : this.node.count[this.instance.showCountOf] : NaN;
    },
    handleMouseEnterOption(e) {
      const { instance: t, node: r } = this;
      e.target === e.currentTarget && t.setCurrentHighlightedOption(r, !1);
    },
    handleMouseDownOnArrow: de(function() {
      const { instance: t, node: r } = this;
      t.toggleExpanded(r);
    }),
    handleMouseDownOnLabelContainer: de(function() {
      const { instance: t, node: r } = this;
      r.isBranch && t.disableBranchNodes ? t.toggleExpanded(r) : t.select(r);
    }),
    handleMouseDownOnRetry: de(function() {
      const { instance: t, node: r } = this;
      t.loadChildrenOptions(r);
    })
  }
}, gr = ["data-id"], yr = {
  key: 1,
  class: "vue-treeselect__option-arrow-placeholder"
}, Sr = {
  key: 0,
  class: "vue-treeselect__checkbox-container"
}, br = /* @__PURE__ */ O("span", { class: "vue-treeselect__check-mark" }, null, -1), _r = /* @__PURE__ */ O("span", { class: "vue-treeselect__minus-mark" }, null, -1), Or = [
  br,
  _r
], wr = {
  key: 2,
  class: /* @__PURE__ */ I("vue-treeselect__label")
}, Er = {
  key: 0,
  class: /* @__PURE__ */ I("vue-treeselect__count")
}, Tr = { key: 0 }, Cr = { class: "vue-treeselect__list" }, Dr = ["title"];
function Nr(e, t, r, c, d, o) {
  const f = x("ArrowIcon"), u = x("VueTreeselectOption"), g = x("Tip");
  return p(), v("div", {
    class: I({
      "vue-treeselect__list-item": !0,
      [`vue-treeselect__indent-level-${o.instance.shouldFlattenOptions ? 0 : r.node.level}`]: !0
    })
  }, [
    O("div", {
      class: I({
        "vue-treeselect__option": !0,
        "vue-treeselect__option--disabled": r.node.isDisabled,
        "vue-treeselect__option--selected": o.instance.isSelected(r.node),
        "vue-treeselect__option--highlight": r.node.isHighlighted,
        "vue-treeselect__option--matched": o.instance.localSearch.active && r.node.isMatched,
        "vue-treeselect__option--hide": !o.shouldShow
      }),
      onMouseenter: t[2] || (t[2] = (...S) => o.handleMouseEnterOption && o.handleMouseEnterOption(...S)),
      "data-id": r.node.id
    }, [
      o.instance.shouldFlattenOptions && this.shouldShow ? C("", !0) : (p(), v(k, { key: 0 }, [
        r.node.isBranch ? (p(), v("div", {
          key: 0,
          class: "vue-treeselect__option-arrow-container",
          onMousedown: t[0] || (t[0] = (...S) => o.handleMouseDownOnArrow && o.handleMouseDownOnArrow(...S))
        }, [
          W(f, {
            class: I({
              "vue-treeselect__option-arrow": !0,
              "vue-treeselect__option-arrow--rotated": o.shouldExpand
            })
          }, null, 8, ["class"])
        ], 32)) : C("", !0),
        o.instance.hasBranchNodes ? (p(), v("div", yr, " ")) : C("", !0)
      ], 64)),
      O("div", {
        class: "vue-treeselect__label-container",
        onMousedown: t[1] || (t[1] = (...S) => o.handleMouseDownOnLabelContainer && o.handleMouseDownOnLabelContainer(...S))
      }, [
        !o.isSingle && !(o.instance.disableBranchNodes && r.node.isBranch) ? (p(), v("div", Sr, [
          O("span", {
            class: I({
              "vue-treeselect__checkbox": !0,
              "vue-treeselect__checkbox--checked": o.checkedState === d.CHECKED,
              "vue-treeselect__checkbox--indeterminate": o.checkedState === d.INDETERMINATE,
              "vue-treeselect__checkbox--unchecked": o.checkedState === d.UNCHECKED,
              "vue-treeselect__checkbox--disabled": r.node.isDisabled
            })
          }, Or, 2)
        ])) : C("", !0),
        e.$slots["option-label"] ? A(e.$slots, "option-label", {
          key: 1,
          node: r.node,
          shouldShowCount: o.shouldShowCount,
          count: o.getCount()
        }) : (p(), v("label", wr, [
          K(B(r.node.label) + " ", 1),
          o.shouldShowCount ? (p(), v("span", Er, "({ getCount() })")) : C("", !0)
        ]))
      ], 32)
    ], 42, gr),
    r.node.isBranch && o.shouldExpand ? (p(), v("div", Tr, [
      W(ut, { name: "vue-treeselect__list--transition" }, {
        default: N(() => [
          O("div", Cr, [
            o.childrenStatesLoaded ? (p(!0), v(k, { key: 0 }, Te(r.node.children, (S) => (p(), V(u, {
              node: S,
              key: S.id
            }, te({ _: 2 }, [
              e.$slots["option-label"] ? {
                name: "option-label",
                fn: N(({ node: _, shouldShowCount: T, count: z }) => [
                  A(e.$slots, "option-label", {
                    node: _,
                    shouldShowCount: T,
                    count: z
                  })
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["node"]))), 128)) : (p(), v(k, { key: 1 }, [
              r.node.childrenStates.isLoaded && !r.node.children.length ? (p(), V(g, {
                key: 0,
                type: "no-children",
                icon: "warning"
              }, {
                default: N(() => [
                  K(B(o.instance.noChildrenText), 1)
                ]),
                _: 1
              })) : C("", !0),
              r.node.childrenStates.isLoading ? (p(), V(g, {
                key: 1,
                type: "loading",
                icon: "loader"
              }, {
                default: N(() => [
                  K(B(o.instance.loadingText), 1)
                ]),
                _: 1
              })) : C("", !0),
              r.node.childrenStates.loadingError ? (p(), V(g, {
                key: 2,
                type: "error",
                icon: "error"
              }, {
                default: N(() => [
                  K(" { node.childrenStates.loadingError } "),
                  O("a", {
                    class: "vue-treeselect__retry",
                    title: o.instance.retryTitle,
                    onMousedown: t[3] || (t[3] = (...S) => o.handleMouseDownOnRetry && o.handleMouseDownOnRetry(...S))
                  }, B(o.instance.retryText), 41, Dr)
                ]),
                _: 1
              })) : C("", !0)
            ], 64))
          ])
        ]),
        _: 3
      })
    ])) : C("", !0)
  ], 2);
}
const Lr = /* @__PURE__ */ H(vr, [["render", Nr]]), Mr = {
  top: "top",
  bottom: "bottom",
  above: "top",
  below: "bottom"
}, Rr = {
  name: "vue-treeselect--menu",
  inject: ["instance"],
  components: { Transition: ut, Tip: vn, Option: Lr },
  computed: {
    getTipIcon() {
      const e = this.instance.trigger.searchQuery === "" && !this.instance.defaultOptions, t = e ? !1 : this.entry.isLoaded && this.entry.options.length === 0;
      return e ? "warning" : this.entry.isLoading ? "loader" : this.entry.loadingError ? "error" : t ? "warning" : null;
    },
    menuStyle() {
      const { instance: e } = this;
      return {
        maxHeight: e.maxHeight + "px"
      };
    },
    menuContainerStyle() {
      const { instance: e } = this;
      return {
        zIndex: e.appendToBody ? null : e.zIndex
      };
    },
    getTipText() {
      const e = this.instance.trigger.searchQuery === "" && !this.instance.defaultOptions, t = e ? !1 : this.entry.isLoaded && this.entry.options.length === 0;
      return e ? this.instance.searchPromptText : this.entry.isLoading ? this.instance.loadingText : this.entry.loadingError ? this.entry.loadingError : t ? this.instance.noResultsText : null;
    },
    getNormalTip() {
      return this.instance.rootOptionsStates.isLoading ? ["loader", this.instance.loadingText] : this.instance.rootOptionsStates.loadingError ? ["error", this.instance.rootOptionsStates.loadingError, this.instance.retryText] : this.instance.rootOptionsStates.isLoaded && this.instance.forest.normalizedOptions.length === 0 ? ["warning", this.instance.noOptionsText] : this.instance.localSearch.noResults ? ["warning", this.instance.noResultsText] : null;
    },
    shouldShowSearchPromptTip() {
      return this.instance.trigger.searchQuery === "" && !this.instance.defaultOptions;
    },
    entry() {
      return this.instance.getRemoteSearchEntry();
    },
    normalizedOptions() {
      return ze(this.instance.forest.normalizedOptions);
    }
  },
  watch: {
    "instance.menu.isOpen"(e) {
      e ? this.$nextTick(this.onMenuOpen) : this.onMenuClose();
    }
  },
  mounted() {
    this.menuSizeWatcher = null, this.menuResizeAndScrollEventListeners = null, this.instance.menu.isOpen && this.$nextTick(this.onMenuOpen);
  },
  unmounted() {
    this.onMenuClose();
  },
  methods: {
    onMenuOpen() {
      this.adjustMenuOpenDirection(), this.setupMenuSizeWatcher(), this.setupMenuResizeAndScrollEventListeners();
    },
    onMenuClose() {
      this.removeMenuSizeWatcher(), this.removeMenuResizeAndScrollEventListeners();
    },
    adjustMenuOpenDirection() {
      const { instance: e } = this;
      if (!e.menu.isOpen) return;
      const t = e.getMenu(), r = e.getControl(), c = t.getBoundingClientRect(), d = r.getBoundingClientRect(), o = c.height, f = window.innerHeight, u = d.top, g = window.innerHeight - d.bottom, S = d.top >= 0 && d.top <= f || d.top < 0 && d.bottom > 0, _ = g > o + Kt, T = u > o + Kt;
      S ? e.openDirection !== "auto" ? e.menu.placement = Mr[e.openDirection] : _ || !T ? e.menu.placement = "bottom" : e.menu.placement = "top" : e.closeMenu();
    },
    setupMenuSizeWatcher() {
      const { instance: e } = this, t = e.getMenu();
      this.menuSizeWatcher || (this.menuSizeWatcher = {
        remove: on(t, this.adjustMenuOpenDirection)
      });
    },
    setupMenuResizeAndScrollEventListeners() {
      const { instance: e } = this, t = e.getControl();
      this.menuResizeAndScrollEventListeners || (this.menuResizeAndScrollEventListeners = {
        remove: rn(t, this.adjustMenuOpenDirection)
      });
    },
    removeMenuSizeWatcher() {
      this.menuSizeWatcher && (this.menuSizeWatcher.remove(), this.menuSizeWatcher = null);
    },
    removeMenuResizeAndScrollEventListeners() {
      this.menuResizeAndScrollEventListeners && (this.menuResizeAndScrollEventListeners.remove(), this.menuResizeAndScrollEventListeners = null);
    }
  }
}, xr = ["title"], Ar = ["title"];
function kr(e, t, r, c, d, o) {
  const f = x("Tip"), u = x("Option");
  return p(), v("div", {
    ref: "menu-container",
    class: "vue-treeselect__menu-container",
    style: at(o.menuContainerStyle)
  }, [
    o.instance.menu.isOpen ? (p(), v("div", {
      key: 0,
      ref: "menu",
      class: "vue-treeselect__menu",
      onMousedown: t[2] || (t[2] = (...g) => o.instance.handleMouseDown && o.instance.handleMouseDown(...g)),
      style: at(o.menuStyle)
    }, [
      A(e.$slots, "before-list"),
      o.instance.async ? (p(), v(k, { key: 0 }, [
        o.entry.isLoading || !o.entry.isLoaded || o.entry.loadingError || !o.entry.options.length ? (p(), V(f, {
          key: 0,
          type: "search-prompt",
          icon: o.getTipIcon
        }, {
          default: N(() => [
            K(B(o.getTipText) + " ", 1),
            o.getTipIcon === "error" ? (p(), v("a", {
              key: 0,
              class: "vue-treeselect__retry",
              onClick: t[0] || (t[0] = (...g) => o.instance.handleRemoteSearch && o.instance.handleRemoteSearch(...g)),
              title: o.instance.retryTitle
            }, B(o.instance.retryText), 9, xr)) : C("", !0)
          ]),
          _: 1
        }, 8, ["icon"])) : (p(!0), v(k, { key: 1 }, Te(o.normalizedOptions, (g) => (p(), V(u, {
          node: g,
          key: g.id
        }, te({ _: 2 }, [
          e.$slots["option-label"] ? {
            name: "option-label",
            fn: N(({ node: S, shouldShowCount: _, count: T }) => [
              A(e.$slots, "option-label", {
                node: S,
                shouldShowCount: _,
                count: T
              })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["node"]))), 128))
      ], 64)) : (p(), v(k, { key: 1 }, [
        o.getNormalTip ? (p(), V(f, {
          key: 0,
          type: "search-prompt",
          icon: o.getNormalTip[0]
        }, {
          default: N(() => [
            K(B(o.getNormalTip[1]) + " ", 1),
            o.getNormalTip[2] ? (p(), v("a", {
              key: 0,
              class: "vue-treeselect__retry",
              onClick: t[1] || (t[1] = (...g) => o.instance.loadRootOptions && o.instance.loadRootOptions(...g)),
              title: o.instance.retryTitle
            }, B(o.instance.retryText), 9, Ar)) : C("", !0)
          ]),
          _: 1
        }, 8, ["icon"])) : (p(!0), v(k, { key: 1 }, Te(o.normalizedOptions, (g) => (p(), V(u, {
          node: g,
          key: g.id
        }, te({ _: 2 }, [
          e.$slots["option-label"] ? {
            name: "option-label",
            fn: N(({ node: S, shouldShowCount: _, count: T }) => [
              A(e.$slots, "option-label", {
                node: S,
                shouldShowCount: _,
                count: T
              })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["node"]))), 128))
      ], 64)),
      A(e.$slots, "after-list")
    ], 36)) : C("", !0)
  ], 4);
}
const Ir = /* @__PURE__ */ H(Rr, [["render", kr]]), Br = {
  name: "vue-treeselect--portal-target",
  inject: ["instance"],
  watch: {
    "instance.menu.isOpen"(e) {
      e ? this.setupHandlers() : this.removeHandlers();
    },
    "instance.menu.placement"() {
      this.updateMenuContainerOffset();
    }
  },
  created() {
    this.controlResizeAndScrollEventListeners = null, this.controlSizeWatcher = null;
  },
  mounted() {
    const { instance: e } = this;
    e.menu.isOpen && this.setupHandlers();
  },
  methods: {
    setupHandlers() {
      this.updateWidth(), this.updateMenuContainerOffset(), this.setupControlResizeAndScrollEventListeners(), this.setupControlSizeWatcher();
    },
    removeHandlers() {
      this.removeControlResizeAndScrollEventListeners(), this.removeControlSizeWatcher();
    },
    setupControlResizeAndScrollEventListeners() {
      const { instance: e } = this, t = e.getControl();
      this.controlResizeAndScrollEventListeners || (this.controlResizeAndScrollEventListeners = {
        remove: rn(t, this.updateMenuContainerOffset)
      });
    },
    setupControlSizeWatcher() {
      const { instance: e } = this, t = e.getControl();
      this.controlSizeWatcher || (this.controlSizeWatcher = {
        remove: on(t, () => {
          this.updateWidth(), this.updateMenuContainerOffset();
        })
      });
    },
    removeControlResizeAndScrollEventListeners() {
      this.controlResizeAndScrollEventListeners && (this.controlResizeAndScrollEventListeners.remove(), this.controlResizeAndScrollEventListeners = null);
    },
    removeControlSizeWatcher() {
      this.controlSizeWatcher && (this.controlSizeWatcher.remove(), this.controlSizeWatcher = null);
    },
    updateWidth() {
      const { instance: e } = this, t = this.$el, c = e.getControl().getBoundingClientRect();
      t.style.width = c.width + "px";
    },
    updateMenuContainerOffset() {
      const { instance: e } = this, t = e.getControl(), r = this.$el, c = t.getBoundingClientRect(), d = r.getBoundingClientRect(), o = e.menu.placement === "bottom" ? c.height : 0, f = Math.round(c.left - d.left) + "px", u = Math.round(c.top - d.top + o) + "px", g = this.$refs.menu.$refs["menu-container"].style, _ = cn(["transform", "webkitTransform", "MozTransform", "msTransform"], (T) => T in document.body.style);
      g[_] = `translate(${f}, ${u})`;
    }
  },
  unmounted() {
    this.removeHandlers();
  }
}, Vr = {
  name: "vue-treeselect--menu-portal",
  created() {
    this.portalTarget = null;
  },
  mounted() {
    this.setup();
  },
  unmounted() {
    this.teardown();
  },
  methods: {
    setup() {
      const e = document.createElement("div");
      document.body.appendChild(e), this.portalTarget = Xt({
        parent: this,
        ...Br
      }), this.portalTarget.mount(e);
    },
    teardown() {
      document.body.removeChild(this.portalTarget.$el), this.portalTarget.$el.innerHTML = "", this.portalTarget.$destroy(), this.portalTarget = null;
    }
  }
}, zr = { class: "vue-treeselect__menu-placeholder" };
function Fr(e, t, r, c, d, o) {
  return p(), v("div", zr);
}
const Hr = /* @__PURE__ */ H(Vr, [["render", Fr]]), Wr = {
  name: "vue-treeselect"
}, $r = /* @__PURE__ */ Object.assign(Wr, {
  props: {
    /**
     * Whether to allow resetting value even if there are disabled selected nodes.
     */
    allowClearingDisabled: {
      type: Boolean,
      default: !1
    },
    /**
     * When an ancestor node is selected/deselected, whether its disabled descendants should be selected/deselected.
     * You may want to use this in conjunction with `allowClearingDisabled` prop.
     */
    allowSelectingDisabledDescendants: {
      type: Boolean,
      default: !1
    },
    /**
     * Whether the menu should be always open.
     */
    alwaysOpen: {
      type: Boolean,
      default: !1
    },
    /**
     * Append the menu to <body />?
     */
    appendToBody: {
      type: Boolean,
      default: !1
    },
    /**
     * Whether to enable async search mode.
     */
    async: {
      type: Boolean,
      default: !1
    },
    /**
     * Automatically focus the component on mount?
     */
    autoFocus: {
      type: Boolean,
      default: !1
    },
    /**
     * Automatically load root options on mount. When set to `false`, root options will be loaded when the menu is opened.
     */
    autoLoadRootOptions: {
      type: Boolean,
      default: !0
    },
    /**
     * When user deselects a node, automatically deselect its ancestors. Applies to flat mode only.
     */
    autoDeselectAncestors: {
      type: Boolean,
      default: !1
    },
    /**
     * When user deselects a node, automatically deselect its descendants. Applies to flat mode only.
     */
    autoDeselectDescendants: {
      type: Boolean,
      default: !1
    },
    /**
     * When user selects a node, automatically select its ancestors. Applies to flat mode only.
     */
    autoSelectAncestors: {
      type: Boolean,
      default: !1
    },
    /**
     * When user selects a node, automatically select its descendants. Applies to flat mode only.
     */
    autoSelectDescendants: {
      type: Boolean,
      default: !1
    },
    /**
     * Whether pressing backspace key removes the last item if there is no text input.
     */
    backspaceRemoves: {
      type: Boolean,
      default: !0
    },
    /**
     * Function that processes before clearing all input fields.
     * Return `false` to prevent value from being cleared.
     * @type {function(): (boolean|Promise<boolean>)}
     */
    beforeClearAll: {
      type: Function,
      default: Ht(!0)
    },
    /**
     * Show branch nodes before leaf nodes?
     */
    branchNodesFirst: {
      type: Boolean,
      default: !1
    },
    /**
     * Should cache results of every search request?
     */
    cacheOptions: {
      type: Boolean,
      default: !0
    },
    /**
     * Show an "×" button that resets value?
     */
    clearable: {
      type: Boolean,
      default: !0
    },
    /**
     * Title for the "×" button when `multiple: true`.
     */
    clearAllText: {
      type: String,
      default: "Clear all"
    },
    /**
     * Whether to clear the search input after selecting.
     * Use only when `multiple` is `true`.
     * For single-select mode, it **always** clears the input after selecting an option regardless of the prop value.
     */
    clearOnSelect: {
      type: Boolean,
      default: !1
    },
    /**
     * Title for the "×" button.
     */
    clearValueText: {
      type: String,
      default: "Clear value"
    },
    /**
     * Whether to close the menu after selecting an option?
     * Use only when `multiple` is `true`.
     */
    closeOnSelect: {
      type: Boolean,
      default: !0
    },
    /**
     * How many levels of branch nodes should be automatically expanded when loaded.
     * Set `Infinity` to make all branch nodes expanded by default.
     */
    defaultExpandLevel: {
      type: Number,
      default: 0
    },
    /**
     * The default set of options to show before the user starts searching. Used for async search mode.
     * When set to `true`, the results for search query as a empty string will be autoloaded.
     * @type {boolean|node[]}
     */
    defaultOptions: {
      default: !1
    },
    /**
     * Whether pressing delete key removes the last item if there is no text input.
     */
    deleteRemoves: {
      type: Boolean,
      default: !0
    },
    /**
     * Delimiter to use to join multiple values for the hidden field value.
     */
    delimiter: {
      type: String,
      default: ","
    },
    /**
     * Only show the nodes that match the search value directly, excluding its ancestors.
     *
     * @type {Object}
     */
    flattenSearchResults: {
      type: Boolean,
      default: !1
    },
    /**
     * Prevent branch nodes from being selected?
     */
    disableBranchNodes: {
      type: Boolean,
      default: !1
    },
    /**
     * Disable the control?
     */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * Disable the fuzzy matching functionality?
     */
    disableFuzzyMatching: {
      type: Boolean,
      default: !1
    },
    /**
     * Whether to enable flat mode or not. Non-flat mode (default) means:
     *   - Whenever a branch node gets checked, all its children will be checked too
     *   - Whenever a branch node has all children checked, the branch node itself will be checked too
     * Set `true` to disable this mechanism
     */
    flat: {
      type: Boolean,
      default: !1
    },
    /**
     * Joins multiple values into a single form field with the `delimiter` (legacy mode).
     */
    joinValues: {
      type: Boolean,
      default: !1
    },
    /**
     * Limit the display of selected options.
     * The rest will be hidden within the limitText string.
     */
    limit: {
      type: Number,
      default: 1 / 0
    },
    /**
     * Function that processes the message shown when selected elements pass the defined limit.
     * @type {function(number): string}
     */
    limitText: {
      type: Function,
      default: function(t) {
        return `and ${t} more`;
      }
    },
    /**
     * Text displayed when loading options.
     */
    loadingText: {
      type: String,
      default: "Loading..."
    },
    /**
     * Used for dynamically loading options.
     * @type {function({action: string, callback: (function((Error|string)=): void), parentNode: node=, instanceId}): void}
     */
    loadOptions: {
      type: Function
    },
    /**
     * Which node properties to filter on.
     */
    matchKeys: {
      type: Array,
      default: Ht(["label"])
    },
    /**
     * Sets `maxHeight` style value of the menu.
     */
    maxHeight: {
      type: Number,
      default: 300
    },
    /**
     * Set `true` to allow selecting multiple options (a.k.a., multi-select mode).
     */
    multiple: {
      type: Boolean,
      default: !1
    },
    /**
     * Generates a hidden <input /> tag with this field name for html forms.
     */
    name: {
      type: String
    },
    /**
     * Text displayed when a branch node has no children.
     */
    noChildrenText: {
      type: String,
      default: "No sub-options."
    },
    /**
     * Text displayed when there are no available options.
     */
    noOptionsText: {
      type: String,
      default: "No options available."
    },
    /**
     * Text displayed when there are no matching search results.
     */
    noResultsText: {
      type: String,
      default: "No results found..."
    },
    /**
     * Used for normalizing source data.
     * @type {function(node, instanceId): node}
     */
    normalizer: {
      type: Function,
      default: go
    },
    /**
     * By default (`auto`), the menu will open below the control. If there is not
     * enough space, vue-treeselect will automatically flip the menu.
     * You can use one of other four options to force the menu to be always opened
     * to specified direction.
     * Acceptable values:
     *   - `"auto"`
     *   - `"below"`
     *   - `"bottom"`
     *   - `"above"`
     *   - `"top"`
     */
    openDirection: {
      type: String,
      default: "auto",
      validator(e) {
        return ee(["auto", "top", "bottom", "above", "below"], e);
      }
    },
    /**
     * Whether to automatically open the menu when the control is clicked.
     */
    openOnClick: {
      type: Boolean,
      default: !0
    },
    /**
     * Whether to automatically open the menu when the control is focused.
     */
    openOnFocus: {
      type: Boolean,
      default: !1
    },
    /**
     * Array of available options.
     * @type {node[]}
     */
    options: {
      type: Array
    },
    /**
     * Field placeholder, displayed when there's no value.
     */
    placeholder: {
      type: String,
      default: "Select..."
    },
    /**
     * Applies HTML5 required attribute when needed.
     */
    required: {
      type: Boolean,
      default: !1
    },
    /**
     * Text displayed asking user whether to retry loading children options.
     */
    retryText: {
      type: String,
      default: "Retry?"
    },
    /**
     * Title for the retry button.
     */
    retryTitle: {
      type: String,
      default: "Click to retry"
    },
    /**
     * Enable searching feature?
     */
    searchable: {
      type: Boolean,
      default: !0
    },
    /**
     * Search in ancestor nodes too.
     */
    searchNested: {
      type: Boolean,
      default: !1
    },
    /**
     * Text tip to prompt for async search.
     */
    searchPromptText: {
      type: String,
      default: "Type to search..."
    },
    /**
     * Whether to show a children count next to the label of each branch node.
     */
    showCount: {
      type: Boolean,
      default: !1
    },
    /**
     * Used in conjunction with `showCount` to specify which type of count number should be displayed.
     * Acceptable values:
     *   - "ALL_CHILDREN"
     *   - "ALL_DESCENDANTS"
     *   - "LEAF_CHILDREN"
     *   - "LEAF_DESCENDANTS"
     */
    showCountOf: {
      type: String,
      default: ue,
      validator(e) {
        return ee([ue, Oe, we, Ee], e);
      }
    },
    /**
     * Whether to show children count when searching.
     * Fallbacks to the value of `showCount` when not specified.
     * @type {boolean}
     */
    showCountOnSearch: null,
    /**
     * In which order the selected options should be displayed in trigger & sorted in `value` array.
     * Used for multi-select mode only.
     * Acceptable values:
     *   - "ORDER_SELECTED"
     *   - "LEVEL"
     *   - "INDEX"
     */
    sortValueBy: {
      type: String,
      default: $t,
      validator(e) {
        return ee([$t, Pt, jt], e);
      }
    },
    /**
     * Tab index of the control.
     */
    tabIndex: {
      type: Number,
      default: 0
    },
    /**
     * The value of the control.
     * Should be `id` or `node` object for single-select mode, or an array of `id` or `node` object for multi-select mode.
     * Its format depends on the `valueFormat` prop.
     * For most cases, just use `v-model` instead.
     * @type {?Array}
     */
    modelValue: null,
    /**
     * Which kind of nodes should be included in the `value` array in multi-select mode.
     * Acceptable values:
     *   - "ALL" - Any node that is checked will be included in the `value` array
     *   - "BRANCH_PRIORITY" (default) - If a branch node is checked, all its descendants will be excluded in the `value` array
     *   - "LEAF_PRIORITY" - If a branch node is checked, this node itself and its branch descendants will be excluded from the `value` array but its leaf descendants will be included
     *   - "ALL_WITH_INDETERMINATE" - Any node that is checked will be included in the `value` array, plus indeterminate nodes
     */
    valueConsistsOf: {
      type: String,
      default: Be,
      validator(e) {
        return ee([ot, Be, rt, lt], e);
      }
    },
    /**
     * Format of `value` prop.
     * Note that, when set to `"object"`, only `id` & `label` properties are required in each `node` object in `value` prop.
     * Acceptable values:
     *   - "id"
     *   - "object"
     */
    valueFormat: {
      type: String,
      default: "id"
    },
    /**
     * z-index of the menu.
     */
    zIndex: {
      type: [Number, String],
      default: 999
    }
  },
  emits: ["update:modelValue", "search-change", "close", "open", "select", "deselect"],
  setup(e, { emit: t }) {
    const r = Ae(null), c = Ae(null), d = Ae(null), o = Ae(null), f = Eo(), u = (n, l) => {
      let a = 0;
      do {
        if (n.level < a) return -1;
        if (l.level < a) return 1;
        if (n.index[a] !== l.index[a]) return n.index[a] - l.index[a];
        a++;
      } while (!0);
    }, g = (n, l) => n.level === l.level ? u(n, l) : n.level - l.level, S = () => ({
      isLoaded: !1,
      isLoading: !1,
      loadingError: ""
    }), _ = (n) => typeof n == "string" ? n : typeof n == "number" && !ln(n) ? n + "" : "", T = (n, l, a) => n ? $n(l, a) : ee(a, l), z = (n) => n.message || /* istanbul ignore next */
    String(n), ne = () => s.modelValue == null ? [] : s.valueFormat === "id" ? s.multiple ? s.modelValue.slice() : [s.modelValue] : (s.multiple ? s.modelValue : [s.modelValue]).map((n) => Se(n)).map((n) => n.id), U = t, Fe = Bn(), s = e, i = Vn({
      trigger: {
        // Is the control focused?
        isFocused: !1,
        // User entered search query - value of the input.
        searchQuery: ""
      },
      menu: {
        // Is the menu opened?
        isOpen: !1,
        // Id of current highlighted option.
        current: null,
        // The scroll position before last menu closing.
        lastScrollPosition: 0,
        // Which direction to open the menu.
        placement: "bottom"
      },
      forest: {
        // Normalized options.
        normalizedOptions: [],
        // <id, node> map for quick look-up.
        nodeMap: j(),
        // <id, checkedState> map, used for multi-select mode.
        checkedStateMap: j(),
        // Id list of all selected options.
        selectedNodeIds: ne(),
        // <id, true> map for fast checking:
        //   if (forest.selectedNodeIds.indexOf(id) !== -1) forest.selectedNodeMap[id] === true
        selectedNodeMap: j()
      },
      rootOptionsStates: S(),
      localSearch: {
        // Has user entered any query to search local options?
        active: !1,
        // Has any options matched the search query?
        noResults: !1,
        // <id, countObject> map for counting matched children/descendants.
        countMap: j()
      },
      // <searchQuery, remoteSearchEntry> map.
      remoteSearch: j(),
      isReady: !1,
      _blurOnSelect: !1
    }), Ce = D(() => ({
      name: s.name || "vue-treeselect",
      hasValue: E,
      trigger: i.trigger,
      forest: i.forest,
      localSearch: i.localSearch,
      remoteSearch: i.remoteSearch,
      isReady: i.isReady,
      rootOptionsStates: i.rootOptionsStates,
      internalValue: $,
      selectedNodes: he,
      $slots: Fe,
      $refs: {
        control: r.value,
        wrapper: c.value,
        portal: d.value,
        menu: o.value
      },
      menu: i.menu,
      single: L,
      verifyProps: dt,
      resetFlags: ht,
      initialize: ie,
      getInstanceId: q,
      getValue: ft,
      getNode: w,
      createFallbackNode: pt,
      extractCheckedNodeIdsFromValue: ne,
      extractNodeFromValue: mt,
      fixSelectedNodeIds: We,
      keepDataOfSelectedNodes: vt,
      isSelected: Q,
      traverseDescendantsBFS: fe,
      traverseDescendantsDFS: De,
      traverseAllNodesDFS: $e,
      traverseAllNodesByIndex: Pe,
      toggleClickOutsideEvent: je,
      getValueContainer: gt,
      getInput: Qe,
      focusInput: yt,
      blurInput: St,
      handleMouseDown: Cn,
      handleClickOutside: Ke,
      handleLocalSearch: bt,
      getRemoteSearchEntry: Ne,
      shouldExpand: _t,
      shouldOptionBeIncludedInSearchResult: Ue,
      shouldShowOptionInMenu: Ot,
      getControl: Dn,
      getMenu: pe,
      setCurrentHighlightedOption: me,
      resetHighlightedOptionWhenNecessary: ve,
      highlightFirstOption: qe,
      highlightPrevOption: Nn,
      highlightNextOption: Ln,
      highlightLastOption: wt,
      resetSearchQuery: Ye,
      closeMenu: ce,
      openMenu: ge,
      toggleMenu: Mn,
      toggleExpanded: Rn,
      buildForestState: ye,
      enhancedNormalizer: Se,
      normalize: Le,
      loadRootOptions: Xe,
      loadChildrenOptions: Ge,
      callLoadOptionsProp: Me,
      checkDuplication: Et,
      verifyNodeShape: Tt,
      select: Ct,
      clear: Je,
      _selectNode: Dt,
      _deselectNode: Nt,
      addValue: G,
      removeValue: J,
      removeLastValue: xn,
      saveMenuScrollPosition: Lt,
      restoreMenuScrollPosition: Mt,
      handleRemoteSearch: Ze,
      allowClearingDisabled: s.allowClearingDisabled,
      allowSelectingDisabledDescendants: s.allowSelectingDisabledDescendants,
      alwaysOpen: s.alwaysOpen,
      appendToBody: s.appendToBody,
      async: s.async,
      autoFocus: s.autoFocus,
      autoLoadRootOptions: s.autoLoadRootOptions,
      autoDeselectAncestors: s.autoDeselectAncestors,
      autoDeselectDescendants: s.autoDeselectDescendants,
      autoSelectAncestors: s.autoSelectAncestors,
      autoSelectDescendants: s.autoSelectDescendants,
      backspaceRemoves: s.backspaceRemoves,
      beforeClearAll: s.beforeClearAll,
      branchNodesFirst: s.branchNodesFirst,
      cacheOptions: s.cacheOptions,
      clearable: s.clearable,
      clearAllText: s.clearAllText,
      clearOnSelect: s.clearOnSelect,
      clearValueText: s.clearValueText,
      closeOnSelect: s.closeOnSelect,
      defaultExpandLevel: s.defaultExpandLevel,
      defaultOptions: s.defaultOptions,
      deleteRemoves: s.deleteRemoves,
      delimiter: s.delimiter,
      flattenSearchResults: s.flattenSearchResults,
      disableBranchNodes: s.disableBranchNodes,
      disabled: s.disabled,
      disableFuzzyMatching: s.disableFuzzyMatching,
      flat: s.flat,
      instanceId: f,
      joinValues: s.joinValues,
      limit: s.limit,
      limitText: s.limitText,
      loadingText: s.loadingText,
      loadOptions: s.loadOptions,
      matchKeys: s.matchKeys,
      maxHeight: s.maxHeight,
      multiple: s.multiple,
      noChildrenText: s.noChildrenText,
      noOptionsText: s.noOptionsText,
      noResultsText: s.noResultsText,
      normalizer: s.normalizer,
      openDirection: s.openDirection,
      openOnClick: s.openOnClick,
      openOnFocus: s.openOnFocus,
      options: s.options,
      placeholder: s.placeholder,
      required: s.required,
      retryText: s.retryText,
      retryTitle: s.retryTitle,
      searchable: s.searchable,
      searchNested: s.searchNested,
      searchPromptText: s.searchPromptText,
      showCount: s.showCount,
      showCountOf: s.showCountOf,
      showCountOnSearch: s.showCountOnSearch,
      sortValueBy: s.sortValueBy,
      tabIndex: s.tabIndex,
      modelValue: s.modelValue,
      valueConsistsOf: s.valueConsistsOf,
      valueFormat: s.valueFormat,
      zIndex: s.zIndex
    })), He = D(() => ({
      "vue-treeselect": !0,
      "vue-treeselect--single": L.value,
      "vue-treeselect--multi": s.multiple,
      "vue-treeselect--searchable": s.searchable,
      "vue-treeselect--disabled": s.disabled,
      "vue-treeselect--focused": i.trigger.isFocused,
      "vue-treeselect--has-value": E.value,
      "vue-treeselect--open": i.menu.isOpen,
      "vue-treeselect--open-above": i.menu.placement === "top",
      "vue-treeselect--open-below": i.menu.placement === "bottom",
      "vue-treeselect--branch-nodes-disabled": s.disableBranchNodes,
      "vue-treeselect--append-to-body": s.appendToBody
    })), he = D(() => i.forest.selectedNodeIds.map(w)), $ = D(() => {
      let n;
      if (L.value || s.flat || s.disableBranchNodes || s.valueConsistsOf === ot)
        n = i.forest.selectedNodeIds.slice();
      else if (s.valueConsistsOf === Be)
        n = i.forest.selectedNodeIds.filter((l) => {
          const a = w(l);
          return a.isRootNode ? !0 : !Q(a.parentNode);
        });
      else if (s.valueConsistsOf === rt)
        n = i.forest.selectedNodeIds.filter((l) => {
          const a = w(l);
          return a.isLeaf ? !0 : a.children.length === 0;
        });
      else if (s.valueConsistsOf === lt) {
        const l = [];
        n = i.forest.selectedNodeIds.slice(), he.value.forEach((a) => {
          a.ancestors.forEach((m) => {
            ee(l, m.id) || ee(n, m.id) || l.push(m.id);
          });
        }), n.push(...l);
      }
      return s.sortValueBy === Pt ? n.sort((l, a) => g(w(l), w(a))) : s.sortValueBy === jt && n.sort((l, a) => u(w(l), w(a))), n;
    }), E = D(() => $.value.length > 0), L = D(() => !s.multiple), F = D(() => {
      const n = [];
      return Pe((l) => {
        if ((!i.localSearch.active || Ue(l)) && n.push(l.id), l.isBranch && !_t(l))
          return !1;
      }), n;
    }), se = D(() => F.value.length !== 0);
    D(() => typeof s.showCountOnSearch == "boolean" ? s.showCountOnSearch : s.showCount), D(() => i.forest.normalizedOptions.some((n) => n.isBranch)), D(() => i.localSearch.active && s.flattenSearchResults);
    const gn = D(() => i.trigger.searchQuery), yn = D(() => s.modelValue), Sn = D(() => s.alwaysOpen), bn = D(() => s.branchNodesFirst), _n = D(() => s.disabled), On = D(() => s.flat), wn = D(() => s.matchKeys), En = D(() => s.multiple), Tn = D(() => s.options), dt = () => {
      Z(
        () => s.async ? s.searchable : !0,
        () => 'For async search mode, the value of "searchable" prop must be true.'
      ), s.options == null && !s.loadOptions && Z(
        () => !1,
        () => 'Are you meant to dynamically load options? You need to use "loadOptions" prop.'
      ), s.flat && Z(
        () => s.multiple,
        () => 'You are using flat mode. But you forgot to add "multiple=true"?'
      ), s.flat || [
        "autoSelectAncestors",
        "autoSelectDescendants",
        "autoDeselectAncestors",
        "autoDeselectDescendants"
      ].forEach((l) => {
        Z(
          () => !s[l],
          () => `"${l}" only applies to flat mode.`
        );
      });
    }, ht = () => {
      i._blurOnSelect = !1;
    }, ie = () => {
      const n = s.async ? Ne().options : ze(s.options);
      if (Array.isArray(n)) {
        const l = i.forest.nodeMap;
        i.forest.nodeMap = j(), vt(l), i.forest.normalizedOptions = Le(le, n, l), We($.value);
        const { searchQuery: a } = i.trigger;
        i.remoteSearch[a] = Ne();
      } else
        i.forest.normalizedOptions = [];
    }, q = () => f, ft = () => {
      if (s.valueFormat === "id")
        return s.multiple ? $.value.slice() : $.value[0];
      const n = $.value.map((l) => w(l).raw);
      return s.multiple ? n : n[0];
    }, w = (n) => (Z(
      () => n != null,
      () => `Invalid node id: ${n}`
    ), n == null ? null : n in i.forest.nodeMap ? i.forest.nodeMap[n] : pt(n)), pt = (n) => {
      const l = mt(n), a = Se(l).label || `${n} (unknown)`, m = {
        id: n,
        label: a,
        ancestors: [],
        parentNode: le,
        isFallbackNode: !0,
        isRootNode: !0,
        isLeaf: !0,
        isBranch: !1,
        isDisabled: !1,
        isNew: !1,
        index: [-1],
        level: 0,
        raw: l
      };
      return i.forest.nodeMap[n] = m;
    }, mt = (n) => {
      const l = { id: n };
      if (s.valueFormat === "id")
        return l;
      const a = s.multiple ? Array.isArray(s.modelValue) ? s.modelValue : [] : s.modelValue ? [s.modelValue] : [];
      return cn(
        a,
        (h) => h && Se(h).id === n
      ) || l;
    }, We = (n) => {
      let l = [];
      if (L.value || s.flat || s.disableBranchNodes || s.valueConsistsOf === ot)
        l = n;
      else if (s.valueConsistsOf === Be)
        n.forEach((a) => {
          l.push(a);
          const m = w(a);
          m.isBranch && fe(m, (h) => {
            l.push(h.id);
          });
        });
      else if (s.valueConsistsOf === rt) {
        const a = j(), m = n.slice();
        for (; m.length; ) {
          const h = m.shift(), b = w(h);
          l.push(h), !b.isRootNode && (b.parentNode.id in a || (a[b.parentNode.id] = b.parentNode.children.length), --a[b.parentNode.id] === 0 && m.push(b.parentNode.id));
        }
      } else if (s.valueConsistsOf === lt) {
        const a = j(), m = n.filter((h) => {
          const b = w(h);
          return b.isLeaf || b.children.length === 0;
        });
        for (; m.length; ) {
          const h = m.shift(), b = w(h);
          l.push(h), !b.isRootNode && (b.parentNode.id in a || (a[b.parentNode.id] = b.parentNode.children.length), --a[b.parentNode.id] === 0 && m.push(b.parentNode.id));
        }
      }
    }, vt = (n) => {
      i.forest.selectedNodeIds.forEach((l) => {
        n[l] && (i.forest.nodeMap[l] = {
          ...n[l],
          isFallbackNode: !0
        });
      });
    }, Q = (n) => i.forest.selectedNodeMap[n.id] === !0, fe = (n, l) => {
      if (!n.isBranch) return;
      const a = n.children.slice();
      for (; a.length; ) {
        const m = a[0];
        m.isBranch && a.push(...m.children), l(m), a.shift();
      }
    }, De = (n, l) => {
      n.isBranch && n.children.forEach((a) => {
        De(a, l), l(a);
      });
    }, $e = (n) => {
      i.forest.normalizedOptions.forEach((l) => {
        De(l, n), n(l);
      });
    }, Pe = (n) => {
      const l = (a) => {
        a.children.forEach((m) => {
          n(m) !== !1 && m.isBranch && l(m);
        });
      };
      l({ children: i.forest.normalizedOptions });
    }, je = (n) => {
      n ? document.addEventListener("mousedown", Ke, !1) : document.removeEventListener("mousedown", Ke, !1);
    }, gt = () => r.value.$refs["value-container"], Qe = () => gt().$refs.input, yt = () => {
      Qe().focus();
    }, St = () => {
      Qe().blur();
    }, Cn = () => {
    }, Ke = (n) => {
      c.value && !c.value.contains(n.target) && (St(), ce());
    }, bt = () => {
      const { searchQuery: n } = i.trigger, l = () => ve(!0);
      if (!n)
        return i.localSearch.active = !1, i.localSearch.noResults = !1, l();
      i.localSearch.active = !0, i.localSearch.noResults = !0, $e((h) => {
        h.isBranch && (h.isExpandedOnSearch = !1, h.showAllChildrenOnSearch = !1, h.isMatched = !1, h.hasMatchedDescendants = !1, i.localSearch.countMap[h.id] = {
          [ue]: 0,
          [Oe]: 0,
          [we]: 0,
          [Ee]: 0
        });
      });
      const a = n.trim().toLocaleLowerCase(), m = a.replace(/\s+/g, " ").split(" ");
      $e((h) => {
        s.searchNested && m.length > 1 ? h.isMatched = m.every(
          (b) => T(!1, b, h.nestedSearchLabel)
        ) : h.isMatched = s.matchKeys.some(
          (b) => T(!s.disableFuzzyMatching, a, h.lowerCased[b])
        ), h.isMatched && (i.localSearch.noResults = !1, h.ancestors.forEach((b) => i.localSearch.countMap[b.id][Oe]++), h.isLeaf && h.ancestors.forEach((b) => i.localSearch.countMap[b.id][Ee]++), h.parentNode !== le && (i.localSearch.countMap[h.parentNode.id][ue] += 1, h.isLeaf && (i.localSearch.countMap[h.parentNode.id][we] += 1))), (h.isMatched || h.isBranch && h.isExpandedOnSearch) && h.parentNode !== le && (h.parentNode.isExpandedOnSearch = !0, h.parentNode.hasMatchedDescendants = !0);
      }), l();
    }, Ne = () => {
      const { searchQuery: n } = i.trigger, l = i.remoteSearch[n] || {
        ...S(),
        options: []
      };
      if (n === "") {
        if (Array.isArray(s.defaultOptions))
          return l.options = s.defaultOptions, l.isLoaded = !0, l;
        if (s.defaultOptions !== !0)
          return l.isLoaded = !0, l;
      }
      return i.remoteSearch[n] || (i.remoteSearch[n] = l), i.remoteSearch[n];
    }, _t = (n) => i.localSearch.active ? n.isExpandedOnSearch : n.isExpanded, Ue = (n) => !!(n.isMatched || n.isBranch && n.hasMatchedDescendants && !s.flattenSearchResults || !n.isRootNode && n.parentNode.showAllChildrenOnSearch), Ot = (n) => !(i.localSearch.active && !Ue(n)), Dn = () => r.value.$el, pe = () => o.value.$el, me = (n, l = !0) => {
      const a = i.menu.current;
      if (a != null && a in i.forest.nodeMap && (i.forest.nodeMap[a].isHighlighted = !1), i.menu.current = n.id, n.isHighlighted = !0, i.menu.isOpen && l) {
        const m = () => {
          const h = pe(), b = h.querySelector(`.vue-treeselect__option[data-id="${n.id}"]`);
          b && Kn(h, b);
        };
        pe() ? m() : ke(m);
      }
    }, ve = (n = !1) => {
      const { current: l } = i.menu;
      (n || l == null || !(l in i.forest.nodeMap) || !Ot(w(l))) && qe();
    }, qe = () => {
      if (!se.value) return;
      const n = F.value[0];
      me(w(n));
    }, Nn = () => {
      if (!se.value) return;
      const n = F.value.indexOf(i.menu.current) - 1;
      if (n === -1) return wt();
      me(w(F.value[n]));
    }, Ln = () => {
      if (!se.value) return;
      const n = F.value.indexOf(i.menu.current) + 1;
      if (n === F.value.length) return qe();
      me(w(F.value[n]));
    }, wt = () => {
      if (!se.value) return;
      const n = Wt(F.value);
      me(w(n));
    }, Ye = () => {
      i.trigger.searchQuery = "";
    }, ce = () => {
      !i.menu.isOpen || !s.disabled && s.alwaysOpen || (Lt(), i.menu.isOpen = !1, je(!1), Ye(), U("close", ft(), q()));
    }, ge = () => {
      s.disabled || i.menu.isOpen || (i.menu.isOpen = !0, ke(ve), ke(Mt), !s.options && !s.async && Xe(), je(!0), U("open", q()));
    }, Mn = () => {
      i.menu.isOpen ? ce() : ge();
    }, Rn = (n) => {
      let l;
      i.localSearch.active ? (l = n.isExpandedOnSearch = !n.isExpandedOnSearch, l && (n.showAllChildrenOnSearch = !0)) : l = n.isExpanded = !n.isExpanded, l && !n.childrenStates.isLoaded && Ge(n);
    }, ye = () => {
      const n = j();
      i.forest.selectedNodeIds.forEach((a) => {
        n[a] = !0;
      }), i.forest.selectedNodeMap = n;
      const l = j();
      s.multiple && (Pe((a) => {
        l[a.id] = ct;
      }), he.value.forEach((a) => {
        l[a.id] = dn, !s.flat && !s.disableBranchNodes && a.ancestors.forEach((m) => {
          Q(m) || (l[m.id] = un);
        });
      })), i.forest.checkedStateMap = l;
    }, Se = (n) => ({
      ...n,
      ...s.normalizer(n, q())
    }), Le = (n, l, a) => {
      let m = l.map((h) => [Se(h), h]).map(([h, b], oe) => {
        Et(h), Tt(h);
        const { id: Y, label: Re, children: P, isDefaultExpanded: be } = h, re = n === le, Rt = re ? 0 : n.level + 1, et = Array.isArray(P) || P === null, tt = !et, xt = !!h.isDisabled || !s.flat && !re && n.isDisabled, An = !!h.isNew, nt = s.matchKeys.reduce((M, xe) => ({
          ...M,
          [xe]: _(h[xe]).toLocaleLowerCase()
        }), {}), kn = re ? nt.label : n.nestedSearchLabel + " " + nt.label;
        i.forest.nodeMap[Y] = j();
        const y = i.forest.nodeMap[Y];
        if (y.id = Y, y.label = Re, y.level = Rt, y.ancestors = re ? [] : [n].concat(n.ancestors), y.index = (re ? [] : n.index).concat(oe), y.parentNode = n, y.lowerCased = nt, y.nestedSearchLabel = kn, y.isDisabled = xt, y.isNew = An, y.isMatched = !1, y.isHighlighted = !1, y.isBranch = et, y.isLeaf = tt, y.isRootNode = re, y.raw = b, et) {
          const M = Array.isArray(P);
          y.childrenStates = { ...S(), isLoaded: M }, y.isExpanded = typeof be == "boolean" ? be : Rt < s.defaultExpandLevel, y.hasMatchedDescendants = !1, y.hasDisabledDescendants = !1, y.isExpandedOnSearch = !1, y.showAllChildrenOnSearch = !1, y.count = {
            [ue]: 0,
            [Oe]: 0,
            [we]: 0,
            [Ee]: 0
          }, y.children = M ? Le(y, P, a) : [], be === !0 && y.ancestors.forEach((xe) => {
            xe.isExpanded = !0;
          }), !M && typeof s.loadOptions != "function" ? Z(
            () => !1,
            () => 'Unloaded branch node detected. "loadOptions" prop is required to load its children.'
          ) : !M && y.isExpanded && Ge(y);
        }
        if (y.ancestors.forEach((M) => M.count[Oe]++), tt && y.ancestors.forEach((M) => M.count[Ee]++), re || (n.count[ue] += 1, tt && (n.count[we] += 1), xt && (n.hasDisabledDescendants = !0)), a && a[Y]) {
          const M = a[Y];
          y.isMatched = M.isMatched, y.showAllChildrenOnSearch = M.showAllChildrenOnSearch, y.isHighlighted = M.isHighlighted, M.isBranch && y.isBranch && (y.isExpanded = M.isExpanded, y.isExpandedOnSearch = M.isExpandedOnSearch, M.childrenStates.isLoaded && !y.childrenStates.isLoaded ? y.isExpanded = !1 : y.childrenStates = { ...M.childrenStates });
        }
        return y;
      });
      if (s.branchNodesFirst) {
        const h = m.filter((oe) => oe.isBranch), b = m.filter((oe) => oe.isLeaf);
        m = h.concat(b);
      }
      return m;
    }, Xe = () => {
      Me({
        action: To,
        isPending: () => i.rootOptionsStates.isLoading,
        start: () => {
          i.rootOptionsStates.isLoading = !0, i.rootOptionsStates.loadingError = "";
        },
        succeed: () => {
          i.rootOptionsStates.isLoaded = !0, ke(() => {
            ve(!0);
          });
        },
        fail: (n) => {
          i.rootOptionsStates.loadingError = z(n);
        },
        end: () => {
          i.rootOptionsStates.isLoading = !1;
        }
      });
    }, Ge = (n) => {
      const { id: l, raw: a } = n;
      Me({
        action: Co,
        args: {
          // We always pass the raw node instead of the normalized node to any
          // callback provided by the user of this component.
          // Because the shape of the raw node is more likely to be closing to
          // what the back-end API service of the application needs.
          parentNode: a
        },
        isPending: () => w(l).childrenStates.isLoading,
        start: () => {
          w(l).childrenStates.isLoading = !0, w(l).childrenStates.loadingError = "";
        },
        succeed: (m) => {
          const h = w(l);
          h.children = Le(n, m), h.childrenStates.isLoaded = !0;
        },
        fail: (m) => {
          w(l).childrenStates.loadingError = z(m);
        },
        end: () => {
          w(l).childrenStates.isLoading = !1;
        }
      });
    }, Me = ({ action: n, args: l, isPending: a, start: m, succeed: h, fail: b, end: oe }) => {
      if (!s.loadOptions || a())
        return;
      m();
      const Y = po((P, be) => {
        P ? b(P) : h(be), oe();
      }), Re = s.loadOptions({
        id: q(),
        instanceId: q(),
        action: n,
        ...l,
        callback: Y
      });
      an(Re) && Re.then(() => {
        Y();
      }, (P) => {
        Y(P);
      }).catch((P) => {
        console.error(P);
      });
    }, Et = (n) => {
      Z(
        () => !(n.id in i.forest.nodeMap && !i.forest.nodeMap[n.id].isFallbackNode),
        () => `Detected duplicate presence of node id ${JSON.stringify(n.id)}. Their labels are "${i.forest.nodeMap[n.id].label}" and "${n.label}" respectively.`
      );
    }, Tt = (n) => {
      Z(
        () => !(n.children === void 0 && n.isBranch === !0),
        () => "Are you meant to declare an unloaded branch node? `isBranch: true` is no longer supported, please use `children: null` instead."
      );
    }, Ct = (n) => {
      if (s.disabled || n.isDisabled)
        return;
      L.value && Je();
      const l = s.multiple && !s.flat ? i.forest.checkedStateMap[n.id] === ct : !Q(n);
      l ? Dt(n) : Nt(n), ye(), U(l ? "select" : "deselect", n.raw, q()), i.localSearch.active && l && (L.value || s.clearOnSelect) && Ye(), L.value && s.closeOnSelect && (ce(), s.searchable && (i._blurOnSelect = !0)), U("update:modelValue", s.multiple ? i.forest.selectedNodeIds : i.forest.selectedNodeIds[0] || null);
    }, Je = () => {
      E.value && (L.value || s.allowClearingDisabled ? i.forest.selectedNodeIds = [] : i.forest.selectedNodeIds = i.forest.selectedNodeIds.filter(
        (n) => w(n).isDisabled
      ), ye(), U("update:modelValue", null));
    }, Dt = (n) => {
      if (L.value || s.disableBranchNodes)
        return G(n);
      if (s.flat) {
        G(n), s.autoSelectAncestors ? n.ancestors.forEach((a) => {
          !Q(a) && !a.isDisabled && G(a);
        }) : s.autoSelectDescendants && fe(n, (a) => {
          !Q(a) && !a.isDisabled && G(a);
        });
        return;
      }
      const l = n.isLeaf || /* node.isBranch && */
      !n.hasDisabledDescendants || /* node.isBranch && */
      s.allowSelectingDisabledDescendants;
      if (l && G(n), n.isBranch && fe(n, (a) => {
        (!a.isDisabled || s.allowSelectingDisabledDescendants) && G(a);
      }), l) {
        let a = n;
        for (; (a = a.parentNode) !== le && a.children.every(Q); )
          G(a);
      }
    }, Nt = (n) => {
      if (s.disableBranchNodes)
        return J(n);
      if (s.flat) {
        J(n), s.autoDeselectAncestors ? n.ancestors.forEach((a) => {
          Q(a) && !a.isDisabled && J(a);
        }) : s.autoDeselectDescendants && fe(n, (a) => {
          Q(a) && !a.isDisabled && J(a);
        });
        return;
      }
      let l = !1;
      if (n.isBranch && De(n, (a) => {
        (!a.isDisabled || s.allowSelectingDisabledDescendants) && (J(a), l = !0);
      }), n.isLeaf || /* node.isBranch && */
      l || /* node.isBranch && */
      n.children.length === 0) {
        J(n);
        let a = n;
        for (; (a = a.parentNode) !== le && Q(a); )
          J(a);
      }
    }, G = (n) => {
      i.forest.selectedNodeIds.push(n.id), i.forest.selectedNodeMap[n.id] = !0;
    }, J = (n) => {
      nn(i.forest.selectedNodeIds, n.id), delete i.forest.selectedNodeMap[n.id];
    }, xn = () => {
      if (!E.value) return;
      if (L.value) return Je();
      const n = Wt($.value), l = w(n);
      Ct(l);
    }, Lt = () => {
      const n = pe();
      n && (o.value.lastScrollPosition = n.scrollTop);
    }, Mt = () => {
      const n = pe();
      n && (n.scrollTop = o.value.lastScrollPosition);
    }, Ze = () => {
      const { searchQuery: n } = i.trigger, l = Ne(), a = () => {
        ie(), ve(!0);
      };
      if ((n === "" || s.cacheOptions) && l.isLoaded)
        return a();
      Me({
        action: Do,
        args: { searchQuery: n },
        isPending() {
          return l.isLoading;
        },
        start: () => {
          l.isLoading = !0, l.isLoaded = !1, l.loadingError = "";
        },
        succeed: (m) => {
          l.isLoading = !1, l.isLoaded = !0, l.options = m, i.trigger.searchQuery === n && a();
        },
        fail: (m) => {
          l.isLoading = !1, l.loadingError = z(m);
        },
        end: () => {
          l.isLoading = !1;
        }
      });
    };
    return X(Sn, (n) => {
      n ? ge() : ce();
    }), X(bn, () => {
      ie();
    }), X(_n, (n) => {
      n && i.menu.isOpen ? ce() : !n && !i.menu.isOpen && s.alwaysOpen && ge();
    }), X(On, () => {
      ie();
    }), X(wn, () => {
      ie();
    }), X(En, (n) => {
      n && ye();
    }), X(Tn, () => {
      s.async || (ie(), i.rootOptionsStates.isLoaded = Array.isArray(s.options));
    }, {
      deep: !0,
      immediate: !0
    }), X(gn, () => {
      s.async ? Ze() : bt(), U("search-change", i.trigger.searchQuery, q());
    }), X(yn, () => {
      const n = ne();
      Oo(n, $.value) && We(n);
    }), zn(() => {
      dt(), ht(), i.isReady = !0, s.autoFocus && yt(), !s.options && !s.async && s.autoLoadRootOptions && Xe(), s.alwaysOpen && ge(), s.async && s.defaultOptions && Ze(), ye();
    }), Fn("instance", Ce.value), (n, l) => (p(), v("div", {
      ref_key: "wrapper",
      ref: c,
      class: I(He.value)
    }, [
      i.isReady ? (p(), v(k, { key: 0 }, [
        W(xo),
        W(hr, {
          ref_key: "control",
          ref: r
        }, te({ _: 2 }, [
          n.$slots["value-label"] ? {
            name: "value-label",
            fn: N(({ node: a }) => [
              A(n.$slots, "value-label", { node: a })
            ]),
            key: "0"
          } : void 0
        ]), 1536),
        e.appendToBody ? (p(), V(Hr, {
          key: 0,
          ref_key: "portal",
          ref: d
        }, null, 512)) : (p(), V(Ir, {
          key: 1,
          ref_key: "rmenu",
          ref: o
        }, te({ _: 2 }, [
          n.$slots["before-list"] ? {
            name: "before-list",
            fn: N(() => [
              A(n.$slots, "before-list")
            ]),
            key: "0"
          } : void 0,
          n.$slots["after-list"] ? {
            name: "after-list",
            fn: N(() => [
              A(n.$slots, "after-list")
            ]),
            key: "1"
          } : void 0,
          n.$slots["option-label"] ? {
            name: "option-label",
            fn: N(({ node: a, shouldShowCount: m, count: h }) => [
              A(n.$slots, "option-label", {
                node: a,
                shouldShowCount: m,
                count: h
              })
            ]),
            key: "2"
          } : void 0
        ]), 1536))
      ], 64)) : C("", !0)
    ], 2));
  }
}), Pr = {
  components: { Treeselect: $r },
  data() {
    return {
      test: "b",
      test2: ["b", "c"],
      test3: ["b", "c"],
      test4: null,
      options: [{
        id: "a",
        label: "Ohm",
        symbol: "&#8486;",
        children: [{
          id: "aa",
          label: "Beta",
          symbol: "&#8492;"
        }, {
          id: "ab",
          label: "Charlie",
          symbol: "&#8493;"
        }]
      }, {
        id: "b",
        label: "Snowman",
        symbol: "&#9731;"
      }, {
        id: "c",
        label: "Phone",
        symbol: "&#9743;"
      }],
      highLevelOptions: [{
        id: "a1",
        label: "Ohm-lvl1",
        symbol: "&#8486;",
        children: null
      }]
    };
  },
  methods: {
    handleEvent(e, t) {
      console.log(e, t);
    },
    fakeLoad() {
      return new Promise((e) => {
        setTimeout(() => e(ze(this.highLevelOptions)), 2e3);
      });
    },
    fakeLoadChildren() {
      return new Promise((e) => {
        setTimeout(() => e(ze(this.options)), 2e3);
      });
    },
    async loadOptions({ action: e, searchQuery: t, callback: r }) {
      if (e === "ASYNC_SEARCH") {
        const c = await this.fakeLoad();
        r(null, c);
      }
      if (e === "LOAD_CHILDREN_OPTIONS") {
        const c = await this.fakeLoadChildren();
        r(null, c);
      }
    }
  },
  watch: {
    test(e, t) {
      console.log(e, t);
    },
    test2(e, t) {
      console.log(e, t);
    }
  }
}, jr = /* @__PURE__ */ O("div", { class: "heading" }, "Single Value", -1), Qr = /* @__PURE__ */ O("div", { class: "heading" }, "Multiple Values", -1), Kr = /* @__PURE__ */ O("div", { class: "heading" }, "Slots", -1), Ur = /* @__PURE__ */ O("div", { innerHTML: "☝" }, null, -1), qr = /* @__PURE__ */ O("div", { innerHTML: "✌" }, null, -1), Yr = ["innerHTML"], Xr = { style: { display: "flex", "flex-flow": "row" } }, Gr = ["innerHTML"], Jr = /* @__PURE__ */ O("div", { class: "heading" }, "Async", -1);
function Zr(e, t, r, c, d, o) {
  const f = x("Treeselect");
  return p(), v("div", null, [
    jr,
    W(f, {
      modelValue: d.test,
      "onUpdate:modelValue": [
        t[0] || (t[0] = (u) => d.test = u),
        t[3] || (t[3] = (u) => o.handleEvent(u, "update"))
      ],
      options: d.options,
      onOpen: t[1] || (t[1] = (u) => o.handleEvent(u, "open")),
      onClose: t[2] || (t[2] = (u) => o.handleEvent(u, "close")),
      "clear-on-select": !1,
      onSelect: t[4] || (t[4] = (u) => o.handleEvent(u, "select")),
      onDeselect: t[5] || (t[5] = (u) => o.handleEvent(u, "deselect")),
      onSearchChange: t[6] || (t[6] = (u) => o.handleEvent(u, "search-change")),
      "close-on-select": !1
    }, null, 8, ["modelValue", "options"]),
    Qr,
    W(f, {
      modelValue: d.test2,
      "onUpdate:modelValue": [
        t[7] || (t[7] = (u) => d.test2 = u),
        t[10] || (t[10] = (u) => o.handleEvent(u, "update"))
      ],
      options: d.options,
      multiple: !0,
      "close-on-select": !1,
      onOpen: t[8] || (t[8] = (u) => o.handleEvent(u, "open")),
      onClose: t[9] || (t[9] = (u) => o.handleEvent(u, "close")),
      onSelect: t[11] || (t[11] = (u) => o.handleEvent(u, "select")),
      onDeselect: t[12] || (t[12] = (u) => o.handleEvent(u, "deselect")),
      onSearchChange: t[13] || (t[13] = (u) => o.handleEvent(u, "search-change"))
    }, null, 8, ["modelValue", "options"]),
    Kr,
    W(f, {
      modelValue: d.test3,
      "onUpdate:modelValue": [
        t[14] || (t[14] = (u) => d.test3 = u),
        t[17] || (t[17] = (u) => o.handleEvent(u, "update"))
      ],
      options: d.options,
      onOpen: t[15] || (t[15] = (u) => o.handleEvent(u, "open")),
      onClose: t[16] || (t[16] = (u) => o.handleEvent(u, "close")),
      multiple: !0,
      "clear-on-select": !1,
      onSelect: t[18] || (t[18] = (u) => o.handleEvent(u, "select")),
      onDeselect: t[19] || (t[19] = (u) => o.handleEvent(u, "deselect")),
      onSearchChange: t[20] || (t[20] = (u) => o.handleEvent(u, "search-change")),
      "close-on-select": !1
    }, {
      "before-list": N(() => [
        Ur
      ]),
      "after-list": N(() => [
        qr
      ]),
      "option-label": N(({ node: u, shouldShowCount: g, count: S }) => [
        O("div", null, [
          K(B(u.label) + " ", 1),
          O("span", {
            innerHTML: u.raw.symbol
          }, null, 8, Yr)
        ])
      ]),
      "value-label": N(({ node: u }) => [
        O("div", Xr, [
          K(B(u.label) + " ", 1),
          O("span", {
            innerHTML: u.raw.symbol
          }, null, 8, Gr)
        ])
      ]),
      _: 1
    }, 8, ["modelValue", "options"]),
    Jr,
    W(f, {
      modelValue: d.test4,
      "onUpdate:modelValue": t[21] || (t[21] = (u) => d.test4 = u),
      async: !0,
      "default-options": !0,
      "load-options": o.loadOptions
    }, null, 8, ["modelValue", "load-options"])
  ]);
}
const el = /* @__PURE__ */ H(Pr, [["render", Zr]]), tl = Xt(el);
tl.mount("#app");
export {
  Do as ASYNC_SEARCH,
  Co as LOAD_CHILDREN_OPTIONS,
  To as LOAD_ROOT_OPTIONS,
  $r as Treeselect,
  $r as default
};
