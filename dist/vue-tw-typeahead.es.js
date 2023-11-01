import { resolveDirective as v, withDirectives as p, openBlock as d, createElementBlock as h, createElementVNode as m, normalizeClass as k, vModelText as y, Fragment as w, renderList as x, toDisplayString as I, createCommentVNode as C } from "vue";
var _ = { exports: {} };
(function(t, r) {
  function c(e) {
    return typeof e.value != "function" ? (console.warn("[Vue-click-outside:] provided expression", e.expression, "is not a function."), !1) : !0;
  }
  function o(e, n) {
    if (!e || !n)
      return !1;
    for (var s = 0, l = n.length; s < l; s++)
      try {
        if (e.contains(n[s]))
          return !0;
        if (n[s].contains(e))
          return !1;
      } catch {
        return !1;
      }
    return !1;
  }
  function i(e) {
    return typeof e.componentInstance < "u" && e.componentInstance.$isServer;
  }
  t.exports = {
    bind: function(e, n, s) {
      if (!c(n))
        return;
      function l(a) {
        if (!!s.context) {
          var u = a.path || a.composedPath && a.composedPath();
          u && u.length > 0 && u.unshift(a.target), !(e.contains(a.target) || o(s.context.popupItem, u)) && e.__vueClickOutside__.callback(a);
        }
      }
      e.__vueClickOutside__ = {
        handler: l,
        callback: n.value
      };
      const f = "ontouchstart" in document.documentElement ? "touchstart" : "click";
      !i(s) && document.addEventListener(f, l);
    },
    update: function(e, n) {
      c(n) && (e.__vueClickOutside__.callback = n.value);
    },
    unbind: function(e, n, s) {
      const l = "ontouchstart" in document.documentElement ? "touchstart" : "click";
      !i(s) && e.__vueClickOutside__ && document.removeEventListener(l, e.__vueClickOutside__.handler), delete e.__vueClickOutside__;
    }
  };
})(_);
const g = _.exports, L = (t, r) => {
  const c = t.__vccOpts || t;
  for (const [o, i] of r)
    c[o] = i;
  return c;
}, S = {
  name: "VueTwTypeahead",
  directives: {
    ClickOutside: g
  },
  props: {
    lists: {
      type: Array,
      default: []
    },
    ignoredList: {
      type: Array,
      default: []
    },
    clearInputWhenClicked: {
      type: Boolean,
      default: !1
    },
    placeholder: {
      type: String,
      default: "Search here..."
    },
    inputClass: {
      type: Array,
      default: ["w-full", "px-5", "py-3", "border", "border-gray-400", "rounded-lg", "outline-none", "focus:shadow-outline"]
    },
    selectClass: {
      type: Array,
      default: ["bg-white", "border", "rounded-md", "shadow-md", "mt-1"]
    }
  },
  data() {
    return {
      search: "",
      selectedItem: "",
      showSearchItems: !1,
      isMouseOverList: !1,
      searchItemList: this.lists
    };
  },
  computed: {
    filteredList() {
      return this.searchItemList.filter((t) => {
        var r;
        return t.name.toLowerCase().includes((r = this.search) == null ? void 0 : r.toLowerCase()) && !this.checkIgnoreListItem(t.id);
      });
    },
    classProps() {
      return [...this.inputClass];
    },
    classSelectProps() {
      return [...this.selectClass];
    }
  },
  methods: {
    selectSearchItem(t) {
      this.search = t.name, this.selectedItem = t.name, this.showSearchItems = !1, this.$emit("selected", t), this.clearInputWhenClicked && (this.search = "");
    },
    checkIgnoreListItem(t) {
      return this.ignoredList.length > 0 ? this.ignoredList.some((c) => c == t) : !1;
    },
    hideMenu() {
      this.showSearchItems == !0 && (this.showSearchItems = !1);
    }
  },
  created() {
    var t, r;
    if (this.selectedData != 0) {
      const c = this.lists.filter((o) => o.id === this.selectedData);
      this.selectedItem = (t = c[0]) == null ? void 0 : t.name, this.search = (r = c[0]) == null ? void 0 : r.name;
    }
  }
}, b = { class: "w-full" }, O = { class: "mt-1 flex rounded-md shadow-sm" }, T = ["placeholder"], E = {
  key: 0,
  class: "absolute z-10 flex flex-col items-start w-64 {{selectClass}}",
  role: "menu",
  "aria-labelledby": "menu-heading"
}, P = { class: "flex flex-col w-full" }, V = ["onClick"];
function D(t, r, c, o, i, e) {
  const n = v("click-outside");
  return p((d(), h("div", b, [
    m("div", O, [
      p(m("input", {
        type: "text",
        class: k(e.classProps),
        placeholder: c.placeholder,
        "aria-label": "Search",
        "onUpdate:modelValue": r[0] || (r[0] = (s) => i.search = s),
        onInput: r[1] || (r[1] = (s) => i.showSearchItems = !0),
        ref: "searchBox"
      }, null, 42, T), [
        [y, i.search]
      ])
    ]),
    e.filteredList.length > 0 && i.showSearchItems == !0 ? (d(), h("aside", E, [
      m("ul", P, [
        (d(!0), h(w, null, x(e.filteredList, (s, l) => (d(), h("li", {
          class: "px-2 py-3 space-x-2 hover:cursor-pointer hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white focus:outline-none",
          key: l,
          onClick: (f) => {
            e.selectSearchItem(s), i.showSearchItems = !1;
          }
        }, I(s.name), 9, V))), 128))
      ])
    ])) : C("", !0)
  ])), [
    [n, e.hideMenu]
  ]);
}
const B = /* @__PURE__ */ L(S, [["render", D]]);
export {
  B as VueTwTypeahead
};
