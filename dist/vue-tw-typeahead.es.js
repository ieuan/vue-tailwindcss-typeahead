import { resolveDirective as k, withDirectives as p, openBlock as d, createElementBlock as h, createElementVNode as m, normalizeClass as _, vModelText as y, Fragment as w, renderList as x, toDisplayString as I, createCommentVNode as C } from "vue";
var v = { exports: {} };
(function(t, r) {
  function c(e) {
    return typeof e.value != "function" ? (console.warn("[Vue-click-outside:] provided expression", e.expression, "is not a function."), !1) : !0;
  }
  function a(e, n) {
    if (!e || !n)
      return !1;
    for (var s = 0, i = n.length; s < i; s++)
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
  function l(e) {
    return typeof e.componentInstance < "u" && e.componentInstance.$isServer;
  }
  t.exports = {
    bind: function(e, n, s) {
      if (!c(n))
        return;
      function i(o) {
        if (!!s.context) {
          var u = o.path || o.composedPath && o.composedPath();
          u && u.length > 0 && u.unshift(o.target), !(e.contains(o.target) || a(s.context.popupItem, u)) && e.__vueClickOutside__.callback(o);
        }
      }
      e.__vueClickOutside__ = {
        handler: i,
        callback: n.value
      };
      const f = "ontouchstart" in document.documentElement ? "touchstart" : "click";
      !l(s) && document.addEventListener(f, i);
    },
    update: function(e, n) {
      c(n) && (e.__vueClickOutside__.callback = n.value);
    },
    unbind: function(e, n, s) {
      const i = "ontouchstart" in document.documentElement ? "touchstart" : "click";
      !l(s) && e.__vueClickOutside__ && document.removeEventListener(i, e.__vueClickOutside__.handler), delete e.__vueClickOutside__;
    }
  };
})(v);
const g = v.exports, S = (t, r) => {
  const c = t.__vccOpts || t;
  for (const [a, l] of r)
    c[a] = l;
  return c;
}, L = {
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
      const c = this.lists.filter((a) => a.id === this.selectedData);
      this.selectedItem = (t = c[0]) == null ? void 0 : t.name, this.search = (r = c[0]) == null ? void 0 : r.name;
    }
  }
}, b = { class: "w-full" }, O = { class: "mt-1 flex rounded-md shadow-sm" }, P = ["placeholder"], T = { class: "flex flex-col w-full" }, E = ["onClick"];
function V(t, r, c, a, l, e) {
  const n = k("click-outside");
  return p((d(), h("div", b, [
    m("div", O, [
      p(m("input", {
        type: "text",
        class: _(e.classProps),
        placeholder: c.placeholder,
        "aria-label": "Search",
        "onUpdate:modelValue": r[0] || (r[0] = (s) => l.search = s),
        onInput: r[1] || (r[1] = (s) => l.showSearchItems = !0),
        ref: "searchBox"
      }, null, 42, P), [
        [y, l.search]
      ])
    ]),
    e.filteredList.length > 0 && l.showSearchItems == !0 ? (d(), h("aside", {
      key: 0,
      class: _("absolute z-10 flex flex-col items-start w-64" + e.classSelectProps),
      role: "menu",
      "aria-labelledby": "menu-heading"
    }, [
      m("ul", T, [
        (d(!0), h(w, null, x(e.filteredList, (s, i) => (d(), h("li", {
          class: "px-2 py-3 space-x-2 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white focus:outline-none",
          key: i,
          onClick: (f) => {
            e.selectSearchItem(s), l.showSearchItems = !1;
          }
        }, I(s.name), 9, E))), 128))
      ])
    ], 2)) : C("", !0)
  ])), [
    [n, e.hideMenu]
  ]);
}
const A = /* @__PURE__ */ S(L, [["render", V]]);
export {
  A as VueTwTypeahead
};
