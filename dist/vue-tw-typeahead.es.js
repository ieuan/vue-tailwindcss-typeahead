import { resolveDirective as k, withDirectives as p, openBlock as d, createElementBlock as h, createElementVNode as m, normalizeClass as _, vModelText as y, Fragment as w, renderList as x, toDisplayString as I, createCommentVNode as g } from "vue";
var v = { exports: {} };
(function(t, r) {
  function n(e) {
    return typeof e.value != "function" ? (console.warn("[Vue-click-outside:] provided expression", e.expression, "is not a function."), !1) : !0;
  }
  function a(e, c) {
    if (!e || !c)
      return !1;
    for (var s = 0, l = c.length; s < l; s++)
      try {
        if (e.contains(c[s]))
          return !0;
        if (c[s].contains(e))
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
    bind: function(e, c, s) {
      if (!n(c))
        return;
      function l(o) {
        if (!!s.context) {
          var u = o.path || o.composedPath && o.composedPath();
          u && u.length > 0 && u.unshift(o.target), !(e.contains(o.target) || a(s.context.popupItem, u)) && e.__vueClickOutside__.callback(o);
        }
      }
      e.__vueClickOutside__ = {
        handler: l,
        callback: c.value
      };
      const f = "ontouchstart" in document.documentElement ? "touchstart" : "click";
      !i(s) && document.addEventListener(f, l);
    },
    update: function(e, c) {
      n(c) && (e.__vueClickOutside__.callback = c.value);
    },
    unbind: function(e, c, s) {
      const l = "ontouchstart" in document.documentElement ? "touchstart" : "click";
      !i(s) && e.__vueClickOutside__ && document.removeEventListener(l, e.__vueClickOutside__.handler), delete e.__vueClickOutside__;
    }
  };
})(v);
const C = v.exports, S = (t, r) => {
  const n = t.__vccOpts || t;
  for (const [a, i] of r)
    n[a] = i;
  return n;
}, L = {
  name: "VueTwTypeahead",
  directives: {
    ClickOutside: C
  },
  props: {
    name: {
      type: String
    },
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
      type: String,
      default: "bg-white border rounded-md shadow-md mt-1"
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
      return this.ignoredList.length > 0 ? this.ignoredList.some((n) => n == t) : !1;
    },
    hideMenu() {
      this.showSearchItems == !0 && (this.showSearchItems = !1);
    }
  },
  created() {
    var t, r;
    if (this.selectedData != 0) {
      const n = this.lists.filter((a) => a.id === this.selectedData);
      this.selectedItem = (t = n[0]) == null ? void 0 : t.name, this.search = (r = n[0]) == null ? void 0 : r.name;
    }
  }
}, b = { class: "w-full" }, O = { class: "mt-1 flex rounded-md shadow-sm" }, T = ["placeholder", "name"], E = { class: "flex flex-col w-full" }, P = ["onClick"];
function V(t, r, n, a, i, e) {
  const c = k("click-outside");
  return p((d(), h("div", b, [
    m("div", O, [
      p(m("input", {
        type: "text",
        class: _(e.classProps),
        placeholder: n.placeholder,
        "aria-label": "Search",
        "onUpdate:modelValue": r[0] || (r[0] = (s) => i.search = s),
        onInput: r[1] || (r[1] = (s) => i.showSearchItems = !0),
        ref: "searchBox",
        name: n.name
      }, null, 42, T), [
        [y, i.search]
      ])
    ]),
    e.filteredList.length > 0 && i.showSearchItems == !0 ? (d(), h("aside", {
      key: 0,
      class: _("absolute z-10 flex flex-col items-start w-64 " + n.selectClass),
      role: "menu",
      "aria-labelledby": "menu-heading"
    }, [
      m("ul", E, [
        (d(!0), h(w, null, x(e.filteredList, (s, l) => (d(), h("li", {
          class: "px-2 py-3 space-x-2 hover:cursor-pointer hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white focus:outline-none",
          key: l,
          onClick: (f) => {
            e.selectSearchItem(s), i.showSearchItems = !1;
          }
        }, I(s.name), 9, P))), 128))
      ])
    ], 2)) : g("", !0)
  ])), [
    [c, e.hideMenu]
  ]);
}
const B = /* @__PURE__ */ S(L, [["render", V]]);
export {
  B as VueTwTypeahead
};
