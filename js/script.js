(() => {
  var Wv = Object.create;
  var Cr = Object.defineProperty;
  var Bv = Object.getOwnPropertyDescriptor;
  var Hv = Object.getOwnPropertyNames;
  var zv = Object.getPrototypeOf,
    Kv = Object.prototype.hasOwnProperty;
  var ve = (e, t) => () => (e && (t = e((e = 0))), t);
  var f = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
    Ne = (e, t) => {
      for (var r in t) Cr(e, r, { get: t[r], enumerable: !0 });
    },
    fa = (e, t, r, n) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let i of Hv(t))
          !Kv.call(e, i) &&
            i !== r &&
            Cr(e, i, {
              get: () => t[i],
              enumerable: !(n = Bv(t, i)) || n.enumerable,
            });
      return e;
    };
  var fe = (e, t, r) => (
      (r = e != null ? Wv(zv(e)) : {}),
      fa(
        t || !e || !e.__esModule
          ? Cr(r, "default", { value: e, enumerable: !0 })
          : r,
        e
      )
    ),
    Ye = (e) => fa(Cr({}, "__esModule", { value: !0 }), e);
  var Kn = f(() => {
    "use strict";
    window.tram = (function (e) {
      function t(c, _) {
        var A = new k.Bare();
        return A.init(c, _);
      }
      function r(c) {
        return c.replace(/[A-Z]/g, function (_) {
          return "-" + _.toLowerCase();
        });
      }
      function n(c) {
        var _ = parseInt(c.slice(1), 16),
          A = (_ >> 16) & 255,
          x = (_ >> 8) & 255,
          P = 255 & _;
        return [A, x, P];
      }
      function i(c, _, A) {
        return (
          "#" + ((1 << 24) | (c << 16) | (_ << 8) | A).toString(16).slice(1)
        );
      }
      function o() {}
      function a(c, _) {
        l("Type warning: Expected: [" + c + "] Got: [" + typeof _ + "] " + _);
      }
      function u(c, _, A) {
        l("Units do not match [" + c + "]: " + _ + ", " + A);
      }
      function s(c, _, A) {
        if ((_ !== void 0 && (A = _), c === void 0)) return A;
        var x = A;
        return (
          Se.test(c) || !qe.test(c)
            ? (x = parseInt(c, 10))
            : qe.test(c) && (x = 1e3 * parseFloat(c)),
          0 > x && (x = 0),
          x === x ? x : A
        );
      }
      function l(c) {
        j.debug && window && window.console.warn(c);
      }
      function m(c) {
        for (var _ = -1, A = c ? c.length : 0, x = []; ++_ < A; ) {
          var P = c[_];
          P && x.push(P);
        }
        return x;
      }
      var v = (function (c, _, A) {
          function x(oe) {
            return typeof oe == "object";
          }
          function P(oe) {
            return typeof oe == "function";
          }
          function N() {}
          function Z(oe, J) {
            function U() {
              var Oe = new se();
              return P(Oe.init) && Oe.init.apply(Oe, arguments), Oe;
            }
            function se() {}
            J === A && ((J = oe), (oe = Object)), (U.Bare = se);
            var ue,
              me = (N[c] = oe[c]),
              ke = (se[c] = U[c] = new N());
            return (
              (ke.constructor = U),
              (U.mixin = function (Oe) {
                return (se[c] = U[c] = Z(U, Oe)[c]), U;
              }),
              (U.open = function (Oe) {
                if (
                  ((ue = {}),
                  P(Oe) ? (ue = Oe.call(U, ke, me, U, oe)) : x(Oe) && (ue = Oe),
                  x(ue))
                )
                  for (var er in ue) _.call(ue, er) && (ke[er] = ue[er]);
                return P(ke.init) || (ke.init = oe), U;
              }),
              U.open(J)
            );
          }
          return Z;
        })("prototype", {}.hasOwnProperty),
        p = {
          ease: [
            "ease",
            function (c, _, A, x) {
              var P = (c /= x) * c,
                N = P * c;
              return (
                _ +
                A * (-2.75 * N * P + 11 * P * P + -15.5 * N + 8 * P + 0.25 * c)
              );
            },
          ],
          "ease-in": [
            "ease-in",
            function (c, _, A, x) {
              var P = (c /= x) * c,
                N = P * c;
              return _ + A * (-1 * N * P + 3 * P * P + -3 * N + 2 * P);
            },
          ],
          "ease-out": [
            "ease-out",
            function (c, _, A, x) {
              var P = (c /= x) * c,
                N = P * c;
              return (
                _ +
                A * (0.3 * N * P + -1.6 * P * P + 2.2 * N + -1.8 * P + 1.9 * c)
              );
            },
          ],
          "ease-in-out": [
            "ease-in-out",
            function (c, _, A, x) {
              var P = (c /= x) * c,
                N = P * c;
              return _ + A * (2 * N * P + -5 * P * P + 2 * N + 2 * P);
            },
          ],
          linear: [
            "linear",
            function (c, _, A, x) {
              return (A * c) / x + _;
            },
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (c, _, A, x) {
              return A * (c /= x) * c + _;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (c, _, A, x) {
              return -A * (c /= x) * (c - 2) + _;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (c, _, A, x) {
              return (c /= x / 2) < 1
                ? (A / 2) * c * c + _
                : (-A / 2) * (--c * (c - 2) - 1) + _;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (c, _, A, x) {
              return A * (c /= x) * c * c + _;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (c, _, A, x) {
              return A * ((c = c / x - 1) * c * c + 1) + _;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (c, _, A, x) {
              return (c /= x / 2) < 1
                ? (A / 2) * c * c * c + _
                : (A / 2) * ((c -= 2) * c * c + 2) + _;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (c, _, A, x) {
              return A * (c /= x) * c * c * c + _;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (c, _, A, x) {
              return -A * ((c = c / x - 1) * c * c * c - 1) + _;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (c, _, A, x) {
              return (c /= x / 2) < 1
                ? (A / 2) * c * c * c * c + _
                : (-A / 2) * ((c -= 2) * c * c * c - 2) + _;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (c, _, A, x) {
              return A * (c /= x) * c * c * c * c + _;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (c, _, A, x) {
              return A * ((c = c / x - 1) * c * c * c * c + 1) + _;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (c, _, A, x) {
              return (c /= x / 2) < 1
                ? (A / 2) * c * c * c * c * c + _
                : (A / 2) * ((c -= 2) * c * c * c * c + 2) + _;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (c, _, A, x) {
              return -A * Math.cos((c / x) * (Math.PI / 2)) + A + _;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (c, _, A, x) {
              return A * Math.sin((c / x) * (Math.PI / 2)) + _;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (c, _, A, x) {
              return (-A / 2) * (Math.cos((Math.PI * c) / x) - 1) + _;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (c, _, A, x) {
              return c === 0 ? _ : A * Math.pow(2, 10 * (c / x - 1)) + _;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (c, _, A, x) {
              return c === x
                ? _ + A
                : A * (-Math.pow(2, (-10 * c) / x) + 1) + _;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (c, _, A, x) {
              return c === 0
                ? _
                : c === x
                ? _ + A
                : (c /= x / 2) < 1
                ? (A / 2) * Math.pow(2, 10 * (c - 1)) + _
                : (A / 2) * (-Math.pow(2, -10 * --c) + 2) + _;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (c, _, A, x) {
              return -A * (Math.sqrt(1 - (c /= x) * c) - 1) + _;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (c, _, A, x) {
              return A * Math.sqrt(1 - (c = c / x - 1) * c) + _;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (c, _, A, x) {
              return (c /= x / 2) < 1
                ? (-A / 2) * (Math.sqrt(1 - c * c) - 1) + _
                : (A / 2) * (Math.sqrt(1 - (c -= 2) * c) + 1) + _;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (c, _, A, x, P) {
              return (
                P === void 0 && (P = 1.70158),
                A * (c /= x) * c * ((P + 1) * c - P) + _
              );
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (c, _, A, x, P) {
              return (
                P === void 0 && (P = 1.70158),
                A * ((c = c / x - 1) * c * ((P + 1) * c + P) + 1) + _
              );
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (c, _, A, x, P) {
              return (
                P === void 0 && (P = 1.70158),
                (c /= x / 2) < 1
                  ? (A / 2) * c * c * (((P *= 1.525) + 1) * c - P) + _
                  : (A / 2) *
                      ((c -= 2) * c * (((P *= 1.525) + 1) * c + P) + 2) +
                    _
              );
            },
          ],
        },
        E = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
        },
        T = document,
        I = window,
        S = "bkwld-tram",
        b = /[\-\.0-9]/g,
        R = /[A-Z]/,
        O = "number",
        L = /^(rgb|#)/,
        D = /(em|cm|mm|in|pt|pc|px)$/,
        C = /(em|cm|mm|in|pt|pc|px|%)$/,
        W = /(deg|rad|turn)$/,
        H = "unitless",
        z = /(all|none) 0s ease 0s/,
        Q = /^(width|height)$/,
        ee = " ",
        q = T.createElement("a"),
        w = ["Webkit", "Moz", "O", "ms"],
        M = ["-webkit-", "-moz-", "-o-", "-ms-"],
        K = function (c) {
          if (c in q.style) return { dom: c, css: c };
          var _,
            A,
            x = "",
            P = c.split("-");
          for (_ = 0; _ < P.length; _++)
            x += P[_].charAt(0).toUpperCase() + P[_].slice(1);
          for (_ = 0; _ < w.length; _++)
            if (((A = w[_] + x), A in q.style))
              return { dom: A, css: M[_] + c };
        },
        B = (t.support = {
          bind: Function.prototype.bind,
          transform: K("transform"),
          transition: K("transition"),
          backface: K("backface-visibility"),
          timing: K("transition-timing-function"),
        });
      if (B.transition) {
        var te = B.timing.dom;
        if (((q.style[te] = p["ease-in-back"][0]), !q.style[te]))
          for (var re in E) p[re][0] = E[re];
      }
      var ce = (t.frame = (function () {
          var c =
            I.requestAnimationFrame ||
            I.webkitRequestAnimationFrame ||
            I.mozRequestAnimationFrame ||
            I.oRequestAnimationFrame ||
            I.msRequestAnimationFrame;
          return c && B.bind
            ? c.bind(I)
            : function (_) {
                I.setTimeout(_, 16);
              };
        })()),
        _e = (t.now = (function () {
          var c = I.performance,
            _ = c && (c.now || c.webkitNow || c.msNow || c.mozNow);
          return _ && B.bind
            ? _.bind(c)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        y = v(function (c) {
          function _(ne, le) {
            var Ee = m(("" + ne).split(ee)),
              pe = Ee[0];
            le = le || {};
            var xe = V[pe];
            if (!xe) return l("Unsupported property: " + pe);
            if (!le.weak || !this.props[pe]) {
              var Ve = xe[0],
                Pe = this.props[pe];
              return (
                Pe || (Pe = this.props[pe] = new Ve.Bare()),
                Pe.init(this.$el, Ee, xe, le),
                Pe
              );
            }
          }
          function A(ne, le, Ee) {
            if (ne) {
              var pe = typeof ne;
              if (
                (le ||
                  (this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1)),
                pe == "number" && le)
              )
                return (
                  (this.timer = new ie({
                    duration: ne,
                    context: this,
                    complete: N,
                  })),
                  void (this.active = !0)
                );
              if (pe == "string" && le) {
                switch (ne) {
                  case "hide":
                    U.call(this);
                    break;
                  case "stop":
                    Z.call(this);
                    break;
                  case "redraw":
                    se.call(this);
                    break;
                  default:
                    _.call(this, ne, Ee && Ee[1]);
                }
                return N.call(this);
              }
              if (pe == "function") return void ne.call(this, this);
              if (pe == "object") {
                var xe = 0;
                ke.call(
                  this,
                  ne,
                  function (Ie, Vv) {
                    Ie.span > xe && (xe = Ie.span), Ie.stop(), Ie.animate(Vv);
                  },
                  function (Ie) {
                    "wait" in Ie && (xe = s(Ie.wait, 0));
                  }
                ),
                  me.call(this),
                  xe > 0 &&
                    ((this.timer = new ie({ duration: xe, context: this })),
                    (this.active = !0),
                    le && (this.timer.complete = N));
                var Ve = this,
                  Pe = !1,
                  Rr = {};
                ce(function () {
                  ke.call(Ve, ne, function (Ie) {
                    Ie.active && ((Pe = !0), (Rr[Ie.name] = Ie.nextStyle));
                  }),
                    Pe && Ve.$el.css(Rr);
                });
              }
            }
          }
          function x(ne) {
            (ne = s(ne, 0)),
              this.active
                ? this.queue.push({ options: ne })
                : ((this.timer = new ie({
                    duration: ne,
                    context: this,
                    complete: N,
                  })),
                  (this.active = !0));
          }
          function P(ne) {
            return this.active
              ? (this.queue.push({ options: ne, args: arguments }),
                void (this.timer.complete = N))
              : l(
                  "No active transition timer. Use start() or wait() before then()."
                );
          }
          function N() {
            if (
              (this.timer && this.timer.destroy(),
              (this.active = !1),
              this.queue.length)
            ) {
              var ne = this.queue.shift();
              A.call(this, ne.options, !0, ne.args);
            }
          }
          function Z(ne) {
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1);
            var le;
            typeof ne == "string"
              ? ((le = {}), (le[ne] = 1))
              : (le = typeof ne == "object" && ne != null ? ne : this.props),
              ke.call(this, le, Oe),
              me.call(this);
          }
          function oe(ne) {
            Z.call(this, ne), ke.call(this, ne, er, Xv);
          }
          function J(ne) {
            typeof ne != "string" && (ne = "block"),
              (this.el.style.display = ne);
          }
          function U() {
            Z.call(this), (this.el.style.display = "none");
          }
          function se() {
            this.el.offsetHeight;
          }
          function ue() {
            Z.call(this), e.removeData(this.el, S), (this.$el = this.el = null);
          }
          function me() {
            var ne,
              le,
              Ee = [];
            this.upstream && Ee.push(this.upstream);
            for (ne in this.props)
              (le = this.props[ne]), le.active && Ee.push(le.string);
            (Ee = Ee.join(",")),
              this.style !== Ee &&
                ((this.style = Ee), (this.el.style[B.transition.dom] = Ee));
          }
          function ke(ne, le, Ee) {
            var pe,
              xe,
              Ve,
              Pe,
              Rr = le !== Oe,
              Ie = {};
            for (pe in ne)
              (Ve = ne[pe]),
                pe in de
                  ? (Ie.transform || (Ie.transform = {}),
                    (Ie.transform[pe] = Ve))
                  : (R.test(pe) && (pe = r(pe)),
                    pe in V ? (Ie[pe] = Ve) : (Pe || (Pe = {}), (Pe[pe] = Ve)));
            for (pe in Ie) {
              if (((Ve = Ie[pe]), (xe = this.props[pe]), !xe)) {
                if (!Rr) continue;
                xe = _.call(this, pe);
              }
              le.call(this, xe, Ve);
            }
            Ee && Pe && Ee.call(this, Pe);
          }
          function Oe(ne) {
            ne.stop();
          }
          function er(ne, le) {
            ne.set(le);
          }
          function Xv(ne) {
            this.$el.css(ne);
          }
          function Ue(ne, le) {
            c[ne] = function () {
              return this.children
                ? Uv.call(this, le, arguments)
                : (this.el && le.apply(this, arguments), this);
            };
          }
          function Uv(ne, le) {
            var Ee,
              pe = this.children.length;
            for (Ee = 0; pe > Ee; Ee++) ne.apply(this.children[Ee], le);
            return this;
          }
          (c.init = function (ne) {
            if (
              ((this.$el = e(ne)),
              (this.el = this.$el[0]),
              (this.props = {}),
              (this.queue = []),
              (this.style = ""),
              (this.active = !1),
              j.keepInherited && !j.fallback)
            ) {
              var le = F(this.el, "transition");
              le && !z.test(le) && (this.upstream = le);
            }
            B.backface &&
              j.hideBackface &&
              d(this.el, B.backface.css, "hidden");
          }),
            Ue("add", _),
            Ue("start", A),
            Ue("wait", x),
            Ue("then", P),
            Ue("next", N),
            Ue("stop", Z),
            Ue("set", oe),
            Ue("show", J),
            Ue("hide", U),
            Ue("redraw", se),
            Ue("destroy", ue);
        }),
        k = v(y, function (c) {
          function _(A, x) {
            var P = e.data(A, S) || e.data(A, S, new y.Bare());
            return P.el || P.init(A), x ? P.start(x) : P;
          }
          c.init = function (A, x) {
            var P = e(A);
            if (!P.length) return this;
            if (P.length === 1) return _(P[0], x);
            var N = [];
            return (
              P.each(function (Z, oe) {
                N.push(_(oe, x));
              }),
              (this.children = N),
              this
            );
          };
        }),
        g = v(function (c) {
          function _() {
            var N = this.get();
            this.update("auto");
            var Z = this.get();
            return this.update(N), Z;
          }
          function A(N, Z, oe) {
            return Z !== void 0 && (oe = Z), N in p ? N : oe;
          }
          function x(N) {
            var Z = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(N);
            return (Z ? i(Z[1], Z[2], Z[3]) : N).replace(
              /#(\w)(\w)(\w)$/,
              "#$1$1$2$2$3$3"
            );
          }
          var P = { duration: 500, ease: "ease", delay: 0 };
          (c.init = function (N, Z, oe, J) {
            (this.$el = N), (this.el = N[0]);
            var U = Z[0];
            oe[2] && (U = oe[2]),
              Y[U] && (U = Y[U]),
              (this.name = U),
              (this.type = oe[1]),
              (this.duration = s(Z[1], this.duration, P.duration)),
              (this.ease = A(Z[2], this.ease, P.ease)),
              (this.delay = s(Z[3], this.delay, P.delay)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = Q.test(this.name)),
              (this.unit = J.unit || this.unit || j.defaultUnit),
              (this.angle = J.angle || this.angle || j.defaultAngle),
              j.fallback || J.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    ee +
                    this.duration +
                    "ms" +
                    (this.ease != "ease" ? ee + p[this.ease][0] : "") +
                    (this.delay ? ee + this.delay + "ms" : "")));
          }),
            (c.set = function (N) {
              (N = this.convert(N, this.type)), this.update(N), this.redraw();
            }),
            (c.transition = function (N) {
              (this.active = !0),
                (N = this.convert(N, this.type)),
                this.auto &&
                  (this.el.style[this.name] == "auto" &&
                    (this.update(this.get()), this.redraw()),
                  N == "auto" && (N = _.call(this))),
                (this.nextStyle = N);
            }),
            (c.fallback = function (N) {
              var Z =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              (N = this.convert(N, this.type)),
                this.auto &&
                  (Z == "auto" && (Z = this.convert(this.get(), this.type)),
                  N == "auto" && (N = _.call(this))),
                (this.tween = new $({
                  from: Z,
                  to: N,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (c.get = function () {
              return F(this.el, this.name);
            }),
            (c.update = function (N) {
              d(this.el, this.name, N);
            }),
            (c.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                (this.nextStyle = null),
                d(this.el, this.name, this.get()));
              var N = this.tween;
              N && N.context && N.destroy();
            }),
            (c.convert = function (N, Z) {
              if (N == "auto" && this.auto) return N;
              var oe,
                J = typeof N == "number",
                U = typeof N == "string";
              switch (Z) {
                case O:
                  if (J) return N;
                  if (U && N.replace(b, "") === "") return +N;
                  oe = "number(unitless)";
                  break;
                case L:
                  if (U) {
                    if (N === "" && this.original) return this.original;
                    if (Z.test(N))
                      return N.charAt(0) == "#" && N.length == 7 ? N : x(N);
                  }
                  oe = "hex or rgb string";
                  break;
                case D:
                  if (J) return N + this.unit;
                  if (U && Z.test(N)) return N;
                  oe = "number(px) or string(unit)";
                  break;
                case C:
                  if (J) return N + this.unit;
                  if (U && Z.test(N)) return N;
                  oe = "number(px) or string(unit or %)";
                  break;
                case W:
                  if (J) return N + this.angle;
                  if (U && Z.test(N)) return N;
                  oe = "number(deg) or string(angle)";
                  break;
                case H:
                  if (J || (U && C.test(N))) return N;
                  oe = "number(unitless) or string(unit or %)";
              }
              return a(oe, N), N;
            }),
            (c.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        h = v(g, function (c, _) {
          c.init = function () {
            _.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), L));
          };
        }),
        X = v(g, function (c, _) {
          (c.init = function () {
            _.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (c.get = function () {
              return this.$el[this.name]();
            }),
            (c.update = function (A) {
              this.$el[this.name](A);
            });
        }),
        G = v(g, function (c, _) {
          function A(x, P) {
            var N, Z, oe, J, U;
            for (N in x)
              (J = de[N]),
                (oe = J[0]),
                (Z = J[1] || N),
                (U = this.convert(x[N], oe)),
                P.call(this, Z, U, oe);
          }
          (c.init = function () {
            _.init.apply(this, arguments),
              this.current ||
                ((this.current = {}),
                de.perspective &&
                  j.perspective &&
                  ((this.current.perspective = j.perspective),
                  d(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (c.set = function (x) {
              A.call(this, x, function (P, N) {
                this.current[P] = N;
              }),
                d(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (c.transition = function (x) {
              var P = this.values(x);
              this.tween = new ae({
                current: this.current,
                values: P,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var N,
                Z = {};
              for (N in this.current) Z[N] = N in P ? P[N] : this.current[N];
              (this.active = !0), (this.nextStyle = this.style(Z));
            }),
            (c.fallback = function (x) {
              var P = this.values(x);
              this.tween = new ae({
                current: this.current,
                values: P,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (c.update = function () {
              d(this.el, this.name, this.style(this.current));
            }),
            (c.style = function (x) {
              var P,
                N = "";
              for (P in x) N += P + "(" + x[P] + ") ";
              return N;
            }),
            (c.values = function (x) {
              var P,
                N = {};
              return (
                A.call(this, x, function (Z, oe, J) {
                  (N[Z] = oe),
                    this.current[Z] === void 0 &&
                      ((P = 0),
                      ~Z.indexOf("scale") && (P = 1),
                      (this.current[Z] = this.convert(P, J)));
                }),
                N
              );
            });
        }),
        $ = v(function (c) {
          function _(U) {
            oe.push(U) === 1 && ce(A);
          }
          function A() {
            var U,
              se,
              ue,
              me = oe.length;
            if (me)
              for (ce(A), se = _e(), U = me; U--; )
                (ue = oe[U]), ue && ue.render(se);
          }
          function x(U) {
            var se,
              ue = e.inArray(U, oe);
            ue >= 0 &&
              ((se = oe.slice(ue + 1)),
              (oe.length = ue),
              se.length && (oe = oe.concat(se)));
          }
          function P(U) {
            return Math.round(U * J) / J;
          }
          function N(U, se, ue) {
            return i(
              U[0] + ue * (se[0] - U[0]),
              U[1] + ue * (se[1] - U[1]),
              U[2] + ue * (se[2] - U[2])
            );
          }
          var Z = { ease: p.ease[1], from: 0, to: 1 };
          (c.init = function (U) {
            (this.duration = U.duration || 0), (this.delay = U.delay || 0);
            var se = U.ease || Z.ease;
            p[se] && (se = p[se][1]),
              typeof se != "function" && (se = Z.ease),
              (this.ease = se),
              (this.update = U.update || o),
              (this.complete = U.complete || o),
              (this.context = U.context || this),
              (this.name = U.name);
            var ue = U.from,
              me = U.to;
            ue === void 0 && (ue = Z.from),
              me === void 0 && (me = Z.to),
              (this.unit = U.unit || ""),
              typeof ue == "number" && typeof me == "number"
                ? ((this.begin = ue), (this.change = me - ue))
                : this.format(me, ue),
              (this.value = this.begin + this.unit),
              (this.start = _e()),
              U.autoplay !== !1 && this.play();
          }),
            (c.play = function () {
              this.active ||
                (this.start || (this.start = _e()),
                (this.active = !0),
                _(this));
            }),
            (c.stop = function () {
              this.active && ((this.active = !1), x(this));
            }),
            (c.render = function (U) {
              var se,
                ue = U - this.start;
              if (this.delay) {
                if (ue <= this.delay) return;
                ue -= this.delay;
              }
              if (ue < this.duration) {
                var me = this.ease(ue, 0, 1, this.duration);
                return (
                  (se = this.startRGB
                    ? N(this.startRGB, this.endRGB, me)
                    : P(this.begin + me * this.change)),
                  (this.value = se + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              (se = this.endHex || this.begin + this.change),
                (this.value = se + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (c.format = function (U, se) {
              if (((se += ""), (U += ""), U.charAt(0) == "#"))
                return (
                  (this.startRGB = n(se)),
                  (this.endRGB = n(U)),
                  (this.endHex = U),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var ue = se.replace(b, ""),
                  me = U.replace(b, "");
                ue !== me && u("tween", se, U), (this.unit = ue);
              }
              (se = parseFloat(se)),
                (U = parseFloat(U)),
                (this.begin = this.value = se),
                (this.change = U - se);
            }),
            (c.destroy = function () {
              this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = o);
            });
          var oe = [],
            J = 1e3;
        }),
        ie = v($, function (c) {
          (c.init = function (_) {
            (this.duration = _.duration || 0),
              (this.complete = _.complete || o),
              (this.context = _.context),
              this.play();
          }),
            (c.render = function (_) {
              var A = _ - this.start;
              A < this.duration ||
                (this.complete.call(this.context), this.destroy());
            });
        }),
        ae = v($, function (c, _) {
          (c.init = function (A) {
            (this.context = A.context),
              (this.update = A.update),
              (this.tweens = []),
              (this.current = A.current);
            var x, P;
            for (x in A.values)
              (P = A.values[x]),
                this.current[x] !== P &&
                  this.tweens.push(
                    new $({
                      name: x,
                      from: this.current[x],
                      to: P,
                      duration: A.duration,
                      delay: A.delay,
                      ease: A.ease,
                      autoplay: !1,
                    })
                  );
            this.play();
          }),
            (c.render = function (A) {
              var x,
                P,
                N = this.tweens.length,
                Z = !1;
              for (x = N; x--; )
                (P = this.tweens[x]),
                  P.context &&
                    (P.render(A), (this.current[P.name] = P.value), (Z = !0));
              return Z
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (c.destroy = function () {
              if ((_.destroy.call(this), this.tweens)) {
                var A,
                  x = this.tweens.length;
                for (A = x; A--; ) this.tweens[A].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        j = (t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !B.transition,
          agentTests: [],
        });
      (t.fallback = function (c) {
        if (!B.transition) return (j.fallback = !0);
        j.agentTests.push("(" + c + ")");
        var _ = new RegExp(j.agentTests.join("|"), "i");
        j.fallback = _.test(navigator.userAgent);
      }),
        t.fallback("6.0.[2-5] Safari"),
        (t.tween = function (c) {
          return new $(c);
        }),
        (t.delay = function (c, _, A) {
          return new ie({ complete: _, duration: c, context: A });
        }),
        (e.fn.tram = function (c) {
          return t.call(null, this, c);
        });
      var d = e.style,
        F = e.css,
        Y = { transform: B.transform && B.transform.css },
        V = {
          color: [h, L],
          background: [h, L, "background-color"],
          "outline-color": [h, L],
          "border-color": [h, L],
          "border-top-color": [h, L],
          "border-right-color": [h, L],
          "border-bottom-color": [h, L],
          "border-left-color": [h, L],
          "border-width": [g, D],
          "border-top-width": [g, D],
          "border-right-width": [g, D],
          "border-bottom-width": [g, D],
          "border-left-width": [g, D],
          "border-spacing": [g, D],
          "letter-spacing": [g, D],
          margin: [g, D],
          "margin-top": [g, D],
          "margin-right": [g, D],
          "margin-bottom": [g, D],
          "margin-left": [g, D],
          padding: [g, D],
          "padding-top": [g, D],
          "padding-right": [g, D],
          "padding-bottom": [g, D],
          "padding-left": [g, D],
          "outline-width": [g, D],
          opacity: [g, O],
          top: [g, C],
          right: [g, C],
          bottom: [g, C],
          left: [g, C],
          "font-size": [g, C],
          "text-indent": [g, C],
          "word-spacing": [g, C],
          width: [g, C],
          "min-width": [g, C],
          "max-width": [g, C],
          height: [g, C],
          "min-height": [g, C],
          "max-height": [g, C],
          "line-height": [g, H],
          "scroll-top": [X, O, "scrollTop"],
          "scroll-left": [X, O, "scrollLeft"],
        },
        de = {};
      B.transform &&
        ((V.transform = [G]),
        (de = {
          x: [C, "translateX"],
          y: [C, "translateY"],
          rotate: [W],
          rotateX: [W],
          rotateY: [W],
          scale: [O],
          scaleX: [O],
          scaleY: [O],
          skew: [W],
          skewX: [W],
          skewY: [W],
        })),
        B.transform &&
          B.backface &&
          ((de.z = [C, "translateZ"]),
          (de.rotateZ = [W]),
          (de.scaleZ = [O]),
          (de.perspective = [D]));
      var Se = /ms/,
        qe = /s|\./;
      return (e.tram = t);
    })(window.jQuery);
  });
  var pa = f((xF, da) => {
    "use strict";
    var jv = window.$,
      Yv = Kn() && jv.tram;
    da.exports = (function () {
      var e = {};
      e.VERSION = "1.6.0-Webflow";
      var t = {},
        r = Array.prototype,
        n = Object.prototype,
        i = Function.prototype,
        o = r.push,
        a = r.slice,
        u = r.concat,
        s = n.toString,
        l = n.hasOwnProperty,
        m = r.forEach,
        v = r.map,
        p = r.reduce,
        E = r.reduceRight,
        T = r.filter,
        I = r.every,
        S = r.some,
        b = r.indexOf,
        R = r.lastIndexOf,
        O = Array.isArray,
        L = Object.keys,
        D = i.bind,
        C =
          (e.each =
          e.forEach =
            function (w, M, K) {
              if (w == null) return w;
              if (m && w.forEach === m) w.forEach(M, K);
              else if (w.length === +w.length) {
                for (var B = 0, te = w.length; B < te; B++)
                  if (M.call(K, w[B], B, w) === t) return;
              } else
                for (var re = e.keys(w), B = 0, te = re.length; B < te; B++)
                  if (M.call(K, w[re[B]], re[B], w) === t) return;
              return w;
            });
      (e.map = e.collect =
        function (w, M, K) {
          var B = [];
          return w == null
            ? B
            : v && w.map === v
            ? w.map(M, K)
            : (C(w, function (te, re, ce) {
                B.push(M.call(K, te, re, ce));
              }),
              B);
        }),
        (e.find = e.detect =
          function (w, M, K) {
            var B;
            return (
              W(w, function (te, re, ce) {
                if (M.call(K, te, re, ce)) return (B = te), !0;
              }),
              B
            );
          }),
        (e.filter = e.select =
          function (w, M, K) {
            var B = [];
            return w == null
              ? B
              : T && w.filter === T
              ? w.filter(M, K)
              : (C(w, function (te, re, ce) {
                  M.call(K, te, re, ce) && B.push(te);
                }),
                B);
          });
      var W =
        (e.some =
        e.any =
          function (w, M, K) {
            M || (M = e.identity);
            var B = !1;
            return w == null
              ? B
              : S && w.some === S
              ? w.some(M, K)
              : (C(w, function (te, re, ce) {
                  if (B || (B = M.call(K, te, re, ce))) return t;
                }),
                !!B);
          });
      (e.contains = e.include =
        function (w, M) {
          return w == null
            ? !1
            : b && w.indexOf === b
            ? w.indexOf(M) != -1
            : W(w, function (K) {
                return K === M;
              });
        }),
        (e.delay = function (w, M) {
          var K = a.call(arguments, 2);
          return setTimeout(function () {
            return w.apply(null, K);
          }, M);
        }),
        (e.defer = function (w) {
          return e.delay.apply(e, [w, 1].concat(a.call(arguments, 1)));
        }),
        (e.throttle = function (w) {
          var M, K, B;
          return function () {
            M ||
              ((M = !0),
              (K = arguments),
              (B = this),
              Yv.frame(function () {
                (M = !1), w.apply(B, K);
              }));
          };
        }),
        (e.debounce = function (w, M, K) {
          var B,
            te,
            re,
            ce,
            _e,
            y = function () {
              var k = e.now() - ce;
              k < M
                ? (B = setTimeout(y, M - k))
                : ((B = null), K || ((_e = w.apply(re, te)), (re = te = null)));
            };
          return function () {
            (re = this), (te = arguments), (ce = e.now());
            var k = K && !B;
            return (
              B || (B = setTimeout(y, M)),
              k && ((_e = w.apply(re, te)), (re = te = null)),
              _e
            );
          };
        }),
        (e.defaults = function (w) {
          if (!e.isObject(w)) return w;
          for (var M = 1, K = arguments.length; M < K; M++) {
            var B = arguments[M];
            for (var te in B) w[te] === void 0 && (w[te] = B[te]);
          }
          return w;
        }),
        (e.keys = function (w) {
          if (!e.isObject(w)) return [];
          if (L) return L(w);
          var M = [];
          for (var K in w) e.has(w, K) && M.push(K);
          return M;
        }),
        (e.has = function (w, M) {
          return l.call(w, M);
        }),
        (e.isObject = function (w) {
          return w === Object(w);
        }),
        (e.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (e.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var H = /(.)^/,
        z = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        Q = /\\|'|\r|\n|\u2028|\u2029/g,
        ee = function (w) {
          return "\\" + z[w];
        },
        q = /^\s*(\w|\$)+\s*$/;
      return (
        (e.template = function (w, M, K) {
          !M && K && (M = K), (M = e.defaults({}, M, e.templateSettings));
          var B = RegExp(
              [
                (M.escape || H).source,
                (M.interpolate || H).source,
                (M.evaluate || H).source,
              ].join("|") + "|$",
              "g"
            ),
            te = 0,
            re = "__p+='";
          w.replace(B, function (k, g, h, X, G) {
            return (
              (re += w.slice(te, G).replace(Q, ee)),
              (te = G + k.length),
              g
                ? (re +=
                    `'+
((__t=(` +
                    g +
                    `))==null?'':_.escape(__t))+
'`)
                : h
                ? (re +=
                    `'+
((__t=(` +
                    h +
                    `))==null?'':__t)+
'`)
                : X &&
                  (re +=
                    `';
` +
                    X +
                    `
__p+='`),
              k
            );
          }),
            (re += `';
`);
          var ce = M.variable;
          if (ce) {
            if (!q.test(ce))
              throw new Error("variable is not a bare identifier: " + ce);
          } else
            (re =
              `with(obj||{}){
` +
              re +
              `}
`),
              (ce = "obj");
          re =
            `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` +
            re +
            `return __p;
`;
          var _e;
          try {
            _e = new Function(M.variable || "obj", "_", re);
          } catch (k) {
            throw ((k.source = re), k);
          }
          var y = function (k) {
            return _e.call(this, k, e);
          };
          return (
            (y.source =
              "function(" +
              ce +
              `){
` +
              re +
              "}"),
            y
          );
        }),
        e
      );
    })();
  });
  var Ge = f((RF, Ia) => {
    "use strict";
    var ge = {},
      wt = {},
      St = [],
      Yn = window.Webflow || [],
      ct = window.jQuery,
      Be = ct(window),
      Qv = ct(document),
      Qe = ct.isFunction,
      We = (ge._ = pa()),
      ha = (ge.tram = Kn() && ct.tram),
      Pr = !1,
      Qn = !1;
    ha.config.hideBackface = !1;
    ha.config.keepInherited = !0;
    ge.define = function (e, t, r) {
      wt[e] && Ea(wt[e]);
      var n = (wt[e] = t(ct, We, r) || {});
      return va(n), n;
    };
    ge.require = function (e) {
      return wt[e];
    };
    function va(e) {
      ge.env() &&
        (Qe(e.design) && Be.on("__wf_design", e.design),
        Qe(e.preview) && Be.on("__wf_preview", e.preview)),
        Qe(e.destroy) && Be.on("__wf_destroy", e.destroy),
        e.ready && Qe(e.ready) && $v(e);
    }
    function $v(e) {
      if (Pr) {
        e.ready();
        return;
      }
      We.contains(St, e.ready) || St.push(e.ready);
    }
    function Ea(e) {
      Qe(e.design) && Be.off("__wf_design", e.design),
        Qe(e.preview) && Be.off("__wf_preview", e.preview),
        Qe(e.destroy) && Be.off("__wf_destroy", e.destroy),
        e.ready && Qe(e.ready) && Zv(e);
    }
    function Zv(e) {
      St = We.filter(St, function (t) {
        return t !== e.ready;
      });
    }
    ge.push = function (e) {
      if (Pr) {
        Qe(e) && e();
        return;
      }
      Yn.push(e);
    };
    ge.env = function (e) {
      var t = window.__wf_design,
        r = typeof t < "u";
      if (!e) return r;
      if (e === "design") return r && t;
      if (e === "preview") return r && !t;
      if (e === "slug") return r && window.__wf_slug;
      if (e === "editor") return window.WebflowEditor;
      if (e === "test") return window.__wf_test;
      if (e === "frame") return window !== window.top;
    };
    var Lr = navigator.userAgent.toLowerCase(),
      ya = (ge.env.touch =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      Jv = (ge.env.chrome =
        /chrome/.test(Lr) &&
        /Google/.test(navigator.vendor) &&
        parseInt(Lr.match(/chrome\/(\d+)\./)[1], 10)),
      eE = (ge.env.ios = /(ipod|iphone|ipad)/.test(Lr));
    ge.env.safari = /safari/.test(Lr) && !Jv && !eE;
    var jn;
    ya &&
      Qv.on("touchstart mousedown", function (e) {
        jn = e.target;
      });
    ge.validClick = ya
      ? function (e) {
          return e === jn || ct.contains(e, jn);
        }
      : function () {
          return !0;
        };
    var ma = "resize.webflow orientationchange.webflow load.webflow",
      tE = "scroll.webflow " + ma;
    ge.resize = $n(Be, ma);
    ge.scroll = $n(Be, tE);
    ge.redraw = $n();
    function $n(e, t) {
      var r = [],
        n = {};
      return (
        (n.up = We.throttle(function (i) {
          We.each(r, function (o) {
            o(i);
          });
        })),
        e && t && e.on(t, n.up),
        (n.on = function (i) {
          typeof i == "function" && (We.contains(r, i) || r.push(i));
        }),
        (n.off = function (i) {
          if (!arguments.length) {
            r = [];
            return;
          }
          r = We.filter(r, function (o) {
            return o !== i;
          });
        }),
        n
      );
    }
    ge.location = function (e) {
      window.location = e;
    };
    ge.env() && (ge.location = function () {});
    ge.ready = function () {
      (Pr = !0), Qn ? rE() : We.each(St, ga), We.each(Yn, ga), ge.resize.up();
    };
    function ga(e) {
      Qe(e) && e();
    }
    function rE() {
      (Qn = !1), We.each(wt, va);
    }
    var Et;
    ge.load = function (e) {
      Et.then(e);
    };
    function _a() {
      Et && (Et.reject(), Be.off("load", Et.resolve)),
        (Et = new ct.Deferred()),
        Be.on("load", Et.resolve);
    }
    ge.destroy = function (e) {
      (e = e || {}),
        (Qn = !0),
        Be.triggerHandler("__wf_destroy"),
        e.domready != null && (Pr = e.domready),
        We.each(wt, Ea),
        ge.resize.off(),
        ge.scroll.off(),
        ge.redraw.off(),
        (St = []),
        (Yn = []),
        Et.state() === "pending" && _a();
    };
    ct(ge.ready);
    _a();
    Ia.exports = window.Webflow = ge;
  });
  var Aa = f((CF, ba) => {
    "use strict";
    var Ta = Ge();
    Ta.define("brand", (ba.exports = function () {}), function (e) {
      var t = {},
        r = document,
        n = e("html"),
        i = e("body"),
        o = ".w-webflow-badge",
        a = window.location,
        u = /PhantomJS/i.test(navigator.userAgent),
        s =
          "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
        l;
      t.ready = function () {
        var E = n.attr("data-wf-status"),
          T = n.attr("data-wf-domain") || "";
        /\.webflow\.io$/i.test(T) && a.hostname !== T && (E = !0),
          E &&
            !u &&
            ((l = l || v()), p(), setTimeout(p, 500), e(r).off(s, m).on(s, m));
      };
      function m() {
        var E =
          r.fullScreen ||
          r.mozFullScreen ||
          r.webkitIsFullScreen ||
          r.msFullscreenElement ||
          !!r.webkitFullscreenElement;
        e(l).attr("style", E ? "display: none !important;" : "");
      }
      function v() {
        var E = e('<a class="w-webflow-badge"></a>').attr(
            "href",
            "https://webflow.com?utm_campaign=brandjs"
          ),
          T = e("<img>")
            .attr("src", "../images/webflow-badge-icon-d2.89e12c322e.svg")
            .attr("alt", "")
            .css({ marginRight: "4px", width: "26px" }),
          I = e("<img>")
            .attr("src", "../images/webflow-badge-text-d2.c82cec3b78.svg")
            .attr("alt", "Made in Webflow");
        return E.append(T, I), E[0];
      }
      function p() {
        var E = i.children(o),
          T = E.length && E.get(0) === l,
          I = Ta.env("editor");
        if (T) {
          I && E.remove();
          return;
        }
        E.length && E.remove(), I || i.append(l);
      }
      return t;
    });
  });
  var Sa = f((LF, wa) => {
    "use strict";
    var Zn = Ge();
    Zn.define(
      "edit",
      (wa.exports = function (e, t, r) {
        if (
          ((r = r || {}),
          (Zn.env("test") || Zn.env("frame")) && !r.fixture && !nE())
        )
          return { exit: 1 };
        var n = {},
          i = e(window),
          o = e(document.documentElement),
          a = document.location,
          u = "hashchange",
          s,
          l = r.load || p,
          m = !1;
        try {
          m =
            localStorage &&
            localStorage.getItem &&
            localStorage.getItem("WebflowEditor");
        } catch {}
        m
          ? l()
          : a.search
          ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) ||
              /\?edit$/.test(a.href)) &&
            l()
          : i.on(u, v).triggerHandler(u);
        function v() {
          s || (/\?edit/.test(a.hash) && l());
        }
        function p() {
          (s = !0),
            (window.WebflowEditor = !0),
            i.off(u, v),
            R(function (L) {
              e.ajax({
                url: b("https://editor-api.webflow.com/api/editor/view"),
                data: { siteId: o.attr("data-wf-site") },
                xhrFields: { withCredentials: !0 },
                dataType: "json",
                crossDomain: !0,
                success: E(L),
              });
            });
        }
        function E(L) {
          return function (D) {
            if (!D) {
              console.error("Could not load editor data");
              return;
            }
            (D.thirdPartyCookiesSupported = L),
              T(S(D.scriptPath), function () {
                window.WebflowEditor(D);
              });
          };
        }
        function T(L, D) {
          e.ajax({ type: "GET", url: L, dataType: "script", cache: !0 }).then(
            D,
            I
          );
        }
        function I(L, D, C) {
          throw (console.error("Could not load editor script: " + D), C);
        }
        function S(L) {
          return L.indexOf("//") >= 0
            ? L
            : b("https://editor-api.webflow.com" + L);
        }
        function b(L) {
          return L.replace(/([^:])\/\//g, "$1/");
        }
        function R(L) {
          var D = window.document.createElement("iframe");
          (D.src = "https://webflow.com/site/third-party-cookie-check.html"),
            (D.style.display = "none"),
            (D.sandbox = "allow-scripts allow-same-origin");
          var C = function (W) {
            W.data === "WF_third_party_cookies_unsupported"
              ? (O(D, C), L(!1))
              : W.data === "WF_third_party_cookies_supported" &&
                (O(D, C), L(!0));
          };
          (D.onerror = function () {
            O(D, C), L(!1);
          }),
            window.addEventListener("message", C, !1),
            window.document.body.appendChild(D);
        }
        function O(L, D) {
          window.removeEventListener("message", D, !1), L.remove();
        }
        return n;
      })
    );
    function nE() {
      try {
        return window.top.__Cypress__;
      } catch {
        return !1;
      }
    }
  });
  var xa = f((PF, Oa) => {
    "use strict";
    var iE = Ge();
    iE.define(
      "focus-visible",
      (Oa.exports = function () {
        function e(r) {
          var n = !0,
            i = !1,
            o = null,
            a = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function u(O) {
            return !!(
              O &&
              O !== document &&
              O.nodeName !== "HTML" &&
              O.nodeName !== "BODY" &&
              "classList" in O &&
              "contains" in O.classList
            );
          }
          function s(O) {
            var L = O.type,
              D = O.tagName;
            return !!(
              (D === "INPUT" && a[L] && !O.readOnly) ||
              (D === "TEXTAREA" && !O.readOnly) ||
              O.isContentEditable
            );
          }
          function l(O) {
            O.getAttribute("data-wf-focus-visible") ||
              O.setAttribute("data-wf-focus-visible", "true");
          }
          function m(O) {
            O.getAttribute("data-wf-focus-visible") &&
              O.removeAttribute("data-wf-focus-visible");
          }
          function v(O) {
            O.metaKey ||
              O.altKey ||
              O.ctrlKey ||
              (u(r.activeElement) && l(r.activeElement), (n = !0));
          }
          function p() {
            n = !1;
          }
          function E(O) {
            u(O.target) && (n || s(O.target)) && l(O.target);
          }
          function T(O) {
            u(O.target) &&
              O.target.hasAttribute("data-wf-focus-visible") &&
              ((i = !0),
              window.clearTimeout(o),
              (o = window.setTimeout(function () {
                i = !1;
              }, 100)),
              m(O.target));
          }
          function I() {
            document.visibilityState === "hidden" && (i && (n = !0), S());
          }
          function S() {
            document.addEventListener("mousemove", R),
              document.addEventListener("mousedown", R),
              document.addEventListener("mouseup", R),
              document.addEventListener("pointermove", R),
              document.addEventListener("pointerdown", R),
              document.addEventListener("pointerup", R),
              document.addEventListener("touchmove", R),
              document.addEventListener("touchstart", R),
              document.addEventListener("touchend", R);
          }
          function b() {
            document.removeEventListener("mousemove", R),
              document.removeEventListener("mousedown", R),
              document.removeEventListener("mouseup", R),
              document.removeEventListener("pointermove", R),
              document.removeEventListener("pointerdown", R),
              document.removeEventListener("pointerup", R),
              document.removeEventListener("touchmove", R),
              document.removeEventListener("touchstart", R),
              document.removeEventListener("touchend", R);
          }
          function R(O) {
            (O.target.nodeName && O.target.nodeName.toLowerCase() === "html") ||
              ((n = !1), b());
          }
          document.addEventListener("keydown", v, !0),
            document.addEventListener("mousedown", p, !0),
            document.addEventListener("pointerdown", p, !0),
            document.addEventListener("touchstart", p, !0),
            document.addEventListener("visibilitychange", I, !0),
            S(),
            r.addEventListener("focus", E, !0),
            r.addEventListener("blur", T, !0);
        }
        function t() {
          if (typeof document < "u")
            try {
              document.querySelector(":focus-visible");
            } catch {
              e(document);
            }
        }
        return { ready: t };
      })
    );
  });
  var La = f((NF, Ca) => {
    "use strict";
    var Ra = Ge();
    Ra.define(
      "focus",
      (Ca.exports = function () {
        var e = [],
          t = !1;
        function r(a) {
          t &&
            (a.preventDefault(),
            a.stopPropagation(),
            a.stopImmediatePropagation(),
            e.unshift(a));
        }
        function n(a) {
          var u = a.target,
            s = u.tagName;
          return (
            (/^a$/i.test(s) && u.href != null) ||
            (/^(button|textarea)$/i.test(s) && u.disabled !== !0) ||
            (/^input$/i.test(s) &&
              /^(button|reset|submit|radio|checkbox)$/i.test(u.type) &&
              !u.disabled) ||
            (!/^(button|input|textarea|select|a)$/i.test(s) &&
              !Number.isNaN(Number.parseFloat(u.tabIndex))) ||
            /^audio$/i.test(s) ||
            (/^video$/i.test(s) && u.controls === !0)
          );
        }
        function i(a) {
          n(a) &&
            ((t = !0),
            setTimeout(() => {
              for (t = !1, a.target.focus(); e.length > 0; ) {
                var u = e.pop();
                u.target.dispatchEvent(new MouseEvent(u.type, u));
              }
            }, 0));
        }
        function o() {
          typeof document < "u" &&
            document.body.hasAttribute("data-wf-focus-within") &&
            Ra.env.safari &&
            (document.addEventListener("mousedown", i, !0),
            document.addEventListener("mouseup", r, !0),
            document.addEventListener("click", r, !0));
        }
        return { ready: o };
      })
    );
  });
  var Da = f((DF, Na) => {
    "use strict";
    var Jn = window.jQuery,
      $e = {},
      Nr = [],
      Pa = ".w-ix",
      Dr = {
        reset: function (e, t) {
          t.__wf_intro = null;
        },
        intro: function (e, t) {
          t.__wf_intro ||
            ((t.__wf_intro = !0), Jn(t).triggerHandler($e.types.INTRO));
        },
        outro: function (e, t) {
          t.__wf_intro &&
            ((t.__wf_intro = null), Jn(t).triggerHandler($e.types.OUTRO));
        },
      };
    $e.triggers = {};
    $e.types = { INTRO: "w-ix-intro" + Pa, OUTRO: "w-ix-outro" + Pa };
    $e.init = function () {
      for (var e = Nr.length, t = 0; t < e; t++) {
        var r = Nr[t];
        r[0](0, r[1]);
      }
      (Nr = []), Jn.extend($e.triggers, Dr);
    };
    $e.async = function () {
      for (var e in Dr) {
        var t = Dr[e];
        Dr.hasOwnProperty(e) &&
          ($e.triggers[e] = function (r, n) {
            Nr.push([t, n]);
          });
      }
    };
    $e.async();
    Na.exports = $e;
  });
  var Fr = f((MF, qa) => {
    "use strict";
    var ei = Da();
    function Ma(e, t) {
      var r = document.createEvent("CustomEvent");
      r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r);
    }
    var oE = window.jQuery,
      Mr = {},
      Fa = ".w-ix",
      aE = {
        reset: function (e, t) {
          ei.triggers.reset(e, t);
        },
        intro: function (e, t) {
          ei.triggers.intro(e, t), Ma(t, "COMPONENT_ACTIVE");
        },
        outro: function (e, t) {
          ei.triggers.outro(e, t), Ma(t, "COMPONENT_INACTIVE");
        },
      };
    Mr.triggers = {};
    Mr.types = { INTRO: "w-ix-intro" + Fa, OUTRO: "w-ix-outro" + Fa };
    oE.extend(Mr.triggers, aE);
    qa.exports = Mr;
  });
  var ti = f((FF, ka) => {
    var sE =
      typeof global == "object" && global && global.Object === Object && global;
    ka.exports = sE;
  });
  var He = f((qF, Ga) => {
    var uE = ti(),
      cE = typeof self == "object" && self && self.Object === Object && self,
      lE = uE || cE || Function("return this")();
    Ga.exports = lE;
  });
  var Ot = f((kF, Xa) => {
    var fE = He(),
      dE = fE.Symbol;
    Xa.exports = dE;
  });
  var Ba = f((GF, Wa) => {
    var Ua = Ot(),
      Va = Object.prototype,
      pE = Va.hasOwnProperty,
      gE = Va.toString,
      tr = Ua ? Ua.toStringTag : void 0;
    function hE(e) {
      var t = pE.call(e, tr),
        r = e[tr];
      try {
        e[tr] = void 0;
        var n = !0;
      } catch {}
      var i = gE.call(e);
      return n && (t ? (e[tr] = r) : delete e[tr]), i;
    }
    Wa.exports = hE;
  });
  var za = f((XF, Ha) => {
    var vE = Object.prototype,
      EE = vE.toString;
    function yE(e) {
      return EE.call(e);
    }
    Ha.exports = yE;
  });
  var lt = f((UF, Ya) => {
    var Ka = Ot(),
      mE = Ba(),
      _E = za(),
      IE = "[object Null]",
      TE = "[object Undefined]",
      ja = Ka ? Ka.toStringTag : void 0;
    function bE(e) {
      return e == null
        ? e === void 0
          ? TE
          : IE
        : ja && ja in Object(e)
        ? mE(e)
        : _E(e);
    }
    Ya.exports = bE;
  });
  var ri = f((VF, Qa) => {
    function AE(e, t) {
      return function (r) {
        return e(t(r));
      };
    }
    Qa.exports = AE;
  });
  var ni = f((WF, $a) => {
    var wE = ri(),
      SE = wE(Object.getPrototypeOf, Object);
    $a.exports = SE;
  });
  var it = f((BF, Za) => {
    function OE(e) {
      return e != null && typeof e == "object";
    }
    Za.exports = OE;
  });
  var ii = f((HF, es) => {
    var xE = lt(),
      RE = ni(),
      CE = it(),
      LE = "[object Object]",
      PE = Function.prototype,
      NE = Object.prototype,
      Ja = PE.toString,
      DE = NE.hasOwnProperty,
      ME = Ja.call(Object);
    function FE(e) {
      if (!CE(e) || xE(e) != LE) return !1;
      var t = RE(e);
      if (t === null) return !0;
      var r = DE.call(t, "constructor") && t.constructor;
      return typeof r == "function" && r instanceof r && Ja.call(r) == ME;
    }
    es.exports = FE;
  });
  var ts = f((oi) => {
    "use strict";
    Object.defineProperty(oi, "__esModule", { value: !0 });
    oi.default = qE;
    function qE(e) {
      var t,
        r = e.Symbol;
      return (
        typeof r == "function"
          ? r.observable
            ? (t = r.observable)
            : ((t = r("observable")), (r.observable = t))
          : (t = "@@observable"),
        t
      );
    }
  });
  var rs = f((si, ai) => {
    "use strict";
    Object.defineProperty(si, "__esModule", { value: !0 });
    var kE = ts(),
      GE = XE(kE);
    function XE(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var xt;
    typeof self < "u"
      ? (xt = self)
      : typeof window < "u"
      ? (xt = window)
      : typeof global < "u"
      ? (xt = global)
      : typeof ai < "u"
      ? (xt = ai)
      : (xt = Function("return this")());
    var UE = (0, GE.default)(xt);
    si.default = UE;
  });
  var ui = f((rr) => {
    "use strict";
    rr.__esModule = !0;
    rr.ActionTypes = void 0;
    rr.default = as;
    var VE = ii(),
      WE = os(VE),
      BE = rs(),
      ns = os(BE);
    function os(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var is = (rr.ActionTypes = { INIT: "@@redux/INIT" });
    function as(e, t, r) {
      var n;
      if (
        (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
        typeof r < "u")
      ) {
        if (typeof r != "function")
          throw new Error("Expected the enhancer to be a function.");
        return r(as)(e, t);
      }
      if (typeof e != "function")
        throw new Error("Expected the reducer to be a function.");
      var i = e,
        o = t,
        a = [],
        u = a,
        s = !1;
      function l() {
        u === a && (u = a.slice());
      }
      function m() {
        return o;
      }
      function v(I) {
        if (typeof I != "function")
          throw new Error("Expected listener to be a function.");
        var S = !0;
        return (
          l(),
          u.push(I),
          function () {
            if (S) {
              (S = !1), l();
              var R = u.indexOf(I);
              u.splice(R, 1);
            }
          }
        );
      }
      function p(I) {
        if (!(0, WE.default)(I))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (typeof I.type > "u")
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (s) throw new Error("Reducers may not dispatch actions.");
        try {
          (s = !0), (o = i(o, I));
        } finally {
          s = !1;
        }
        for (var S = (a = u), b = 0; b < S.length; b++) S[b]();
        return I;
      }
      function E(I) {
        if (typeof I != "function")
          throw new Error("Expected the nextReducer to be a function.");
        (i = I), p({ type: is.INIT });
      }
      function T() {
        var I,
          S = v;
        return (
          (I = {
            subscribe: function (R) {
              if (typeof R != "object")
                throw new TypeError("Expected the observer to be an object.");
              function O() {
                R.next && R.next(m());
              }
              O();
              var L = S(O);
              return { unsubscribe: L };
            },
          }),
          (I[ns.default] = function () {
            return this;
          }),
          I
        );
      }
      return (
        p({ type: is.INIT }),
        (n = { dispatch: p, subscribe: v, getState: m, replaceReducer: E }),
        (n[ns.default] = T),
        n
      );
    }
  });
  var li = f((ci) => {
    "use strict";
    ci.__esModule = !0;
    ci.default = HE;
    function HE(e) {
      typeof console < "u" &&
        typeof console.error == "function" &&
        console.error(e);
      try {
        throw new Error(e);
      } catch {}
    }
  });
  var cs = f((fi) => {
    "use strict";
    fi.__esModule = !0;
    fi.default = QE;
    var ss = ui(),
      zE = ii(),
      YF = us(zE),
      KE = li(),
      QF = us(KE);
    function us(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function jE(e, t) {
      var r = t && t.type,
        n = (r && '"' + r.toString() + '"') || "an action";
      return (
        "Given action " +
        n +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function YE(e) {
      Object.keys(e).forEach(function (t) {
        var r = e[t],
          n = r(void 0, { type: ss.ActionTypes.INIT });
        if (typeof n > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
          );
        var i =
          "@@redux/PROBE_UNKNOWN_ACTION_" +
          Math.random().toString(36).substring(7).split("").join(".");
        if (typeof r(void 0, { type: i }) > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined when probed with a random type. ' +
              ("Don't try to handle " +
                ss.ActionTypes.INIT +
                ' or other actions in "redux/*" ') +
              "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
          );
      });
    }
    function QE(e) {
      for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        typeof e[i] == "function" && (r[i] = e[i]);
      }
      var o = Object.keys(r);
      if (!1) var a;
      var u;
      try {
        YE(r);
      } catch (s) {
        u = s;
      }
      return function () {
        var l =
            arguments.length <= 0 || arguments[0] === void 0
              ? {}
              : arguments[0],
          m = arguments[1];
        if (u) throw u;
        if (!1) var v;
        for (var p = !1, E = {}, T = 0; T < o.length; T++) {
          var I = o[T],
            S = r[I],
            b = l[I],
            R = S(b, m);
          if (typeof R > "u") {
            var O = jE(I, m);
            throw new Error(O);
          }
          (E[I] = R), (p = p || R !== b);
        }
        return p ? E : l;
      };
    }
  });
  var fs = f((di) => {
    "use strict";
    di.__esModule = !0;
    di.default = $E;
    function ls(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function $E(e, t) {
      if (typeof e == "function") return ls(e, t);
      if (typeof e != "object" || e === null)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
            (e === null ? "null" : typeof e) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
        var o = r[i],
          a = e[o];
        typeof a == "function" && (n[o] = ls(a, t));
      }
      return n;
    }
  });
  var gi = f((pi) => {
    "use strict";
    pi.__esModule = !0;
    pi.default = ZE;
    function ZE() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      if (t.length === 0)
        return function (o) {
          return o;
        };
      if (t.length === 1) return t[0];
      var n = t[t.length - 1],
        i = t.slice(0, -1);
      return function () {
        return i.reduceRight(function (o, a) {
          return a(o);
        }, n.apply(void 0, arguments));
      };
    }
  });
  var ds = f((hi) => {
    "use strict";
    hi.__esModule = !0;
    var JE =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      };
    hi.default = ny;
    var ey = gi(),
      ty = ry(ey);
    function ry(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function ny() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      return function (n) {
        return function (i, o, a) {
          var u = n(i, o, a),
            s = u.dispatch,
            l = [],
            m = {
              getState: u.getState,
              dispatch: function (p) {
                return s(p);
              },
            };
          return (
            (l = t.map(function (v) {
              return v(m);
            })),
            (s = ty.default.apply(void 0, l)(u.dispatch)),
            JE({}, u, { dispatch: s })
          );
        };
      };
    }
  });
  var vi = f((Xe) => {
    "use strict";
    Xe.__esModule = !0;
    Xe.compose =
      Xe.applyMiddleware =
      Xe.bindActionCreators =
      Xe.combineReducers =
      Xe.createStore =
        void 0;
    var iy = ui(),
      oy = Rt(iy),
      ay = cs(),
      sy = Rt(ay),
      uy = fs(),
      cy = Rt(uy),
      ly = ds(),
      fy = Rt(ly),
      dy = gi(),
      py = Rt(dy),
      gy = li(),
      t1 = Rt(gy);
    function Rt(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Xe.createStore = oy.default;
    Xe.combineReducers = sy.default;
    Xe.bindActionCreators = cy.default;
    Xe.applyMiddleware = fy.default;
    Xe.compose = py.default;
  });
  var ze,
    Ei,
    Ze,
    hy,
    vy,
    qr,
    Ey,
    yi = ve(() => {
      "use strict";
      (ze = {
        NAVBAR_OPEN: "NAVBAR_OPEN",
        NAVBAR_CLOSE: "NAVBAR_CLOSE",
        TAB_ACTIVE: "TAB_ACTIVE",
        TAB_INACTIVE: "TAB_INACTIVE",
        SLIDER_ACTIVE: "SLIDER_ACTIVE",
        SLIDER_INACTIVE: "SLIDER_INACTIVE",
        DROPDOWN_OPEN: "DROPDOWN_OPEN",
        DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
        MOUSE_CLICK: "MOUSE_CLICK",
        MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
        MOUSE_DOWN: "MOUSE_DOWN",
        MOUSE_UP: "MOUSE_UP",
        MOUSE_OVER: "MOUSE_OVER",
        MOUSE_OUT: "MOUSE_OUT",
        MOUSE_MOVE: "MOUSE_MOVE",
        MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
        SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
        SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
        SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
        ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
        ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
        PAGE_START: "PAGE_START",
        PAGE_FINISH: "PAGE_FINISH",
        PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
        PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
        PAGE_SCROLL: "PAGE_SCROLL",
      }),
        (Ei = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" }),
        (Ze = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" }),
        (hy = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" }),
        (vy = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        }),
        (qr = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        }),
        (Ey = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        });
    });
  var Re,
    yy,
    kr = ve(() => {
      "use strict";
      (Re = {
        TRANSFORM_MOVE: "TRANSFORM_MOVE",
        TRANSFORM_SCALE: "TRANSFORM_SCALE",
        TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
        TRANSFORM_SKEW: "TRANSFORM_SKEW",
        STYLE_OPACITY: "STYLE_OPACITY",
        STYLE_SIZE: "STYLE_SIZE",
        STYLE_FILTER: "STYLE_FILTER",
        STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
        STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
        STYLE_BORDER: "STYLE_BORDER",
        STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
        OBJECT_VALUE: "OBJECT_VALUE",
        PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
        PLUGIN_SPLINE: "PLUGIN_SPLINE",
        PLUGIN_RIVE: "PLUGIN_RIVE",
        PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
        GENERAL_DISPLAY: "GENERAL_DISPLAY",
        GENERAL_START_ACTION: "GENERAL_START_ACTION",
        GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
        GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
        GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
        GENERAL_LOOP: "GENERAL_LOOP",
        STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
      }),
        (yy = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        });
    });
  var my,
    ps = ve(() => {
      "use strict";
      my = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    });
  var _y,
    Iy,
    Ty,
    by,
    Ay,
    wy,
    Sy,
    mi,
    gs = ve(() => {
      "use strict";
      kr();
      ({
        TRANSFORM_MOVE: _y,
        TRANSFORM_SCALE: Iy,
        TRANSFORM_ROTATE: Ty,
        TRANSFORM_SKEW: by,
        STYLE_SIZE: Ay,
        STYLE_FILTER: wy,
        STYLE_FONT_VARIATION: Sy,
      } = Re),
        (mi = {
          [_y]: !0,
          [Iy]: !0,
          [Ty]: !0,
          [by]: !0,
          [Ay]: !0,
          [wy]: !0,
          [Sy]: !0,
        });
    });
  var Te = {};
  Ne(Te, {
    IX2_ACTION_LIST_PLAYBACK_CHANGED: () => Wy,
    IX2_ANIMATION_FRAME_CHANGED: () => qy,
    IX2_CLEAR_REQUESTED: () => Dy,
    IX2_ELEMENT_STATE_CHANGED: () => Vy,
    IX2_EVENT_LISTENER_ADDED: () => My,
    IX2_EVENT_STATE_CHANGED: () => Fy,
    IX2_INSTANCE_ADDED: () => Gy,
    IX2_INSTANCE_REMOVED: () => Uy,
    IX2_INSTANCE_STARTED: () => Xy,
    IX2_MEDIA_QUERIES_DEFINED: () => Hy,
    IX2_PARAMETER_CHANGED: () => ky,
    IX2_PLAYBACK_REQUESTED: () => Py,
    IX2_PREVIEW_REQUESTED: () => Ly,
    IX2_RAW_DATA_IMPORTED: () => Oy,
    IX2_SESSION_INITIALIZED: () => xy,
    IX2_SESSION_STARTED: () => Ry,
    IX2_SESSION_STOPPED: () => Cy,
    IX2_STOP_REQUESTED: () => Ny,
    IX2_TEST_FRAME_RENDERED: () => zy,
    IX2_VIEWPORT_WIDTH_CHANGED: () => By,
  });
  var Oy,
    xy,
    Ry,
    Cy,
    Ly,
    Py,
    Ny,
    Dy,
    My,
    Fy,
    qy,
    ky,
    Gy,
    Xy,
    Uy,
    Vy,
    Wy,
    By,
    Hy,
    zy,
    hs = ve(() => {
      "use strict";
      (Oy = "IX2_RAW_DATA_IMPORTED"),
        (xy = "IX2_SESSION_INITIALIZED"),
        (Ry = "IX2_SESSION_STARTED"),
        (Cy = "IX2_SESSION_STOPPED"),
        (Ly = "IX2_PREVIEW_REQUESTED"),
        (Py = "IX2_PLAYBACK_REQUESTED"),
        (Ny = "IX2_STOP_REQUESTED"),
        (Dy = "IX2_CLEAR_REQUESTED"),
        (My = "IX2_EVENT_LISTENER_ADDED"),
        (Fy = "IX2_EVENT_STATE_CHANGED"),
        (qy = "IX2_ANIMATION_FRAME_CHANGED"),
        (ky = "IX2_PARAMETER_CHANGED"),
        (Gy = "IX2_INSTANCE_ADDED"),
        (Xy = "IX2_INSTANCE_STARTED"),
        (Uy = "IX2_INSTANCE_REMOVED"),
        (Vy = "IX2_ELEMENT_STATE_CHANGED"),
        (Wy = "IX2_ACTION_LIST_PLAYBACK_CHANGED"),
        (By = "IX2_VIEWPORT_WIDTH_CHANGED"),
        (Hy = "IX2_MEDIA_QUERIES_DEFINED"),
        (zy = "IX2_TEST_FRAME_RENDERED");
    });
  var we = {};
  Ne(we, {
    ABSTRACT_NODE: () => Bm,
    AUTO: () => Nm,
    BACKGROUND: () => Om,
    BACKGROUND_COLOR: () => Sm,
    BAR_DELIMITER: () => Fm,
    BORDER_COLOR: () => xm,
    BOUNDARY_SELECTOR: () => $y,
    CHILDREN: () => qm,
    COLON_DELIMITER: () => Mm,
    COLOR: () => Rm,
    COMMA_DELIMITER: () => Dm,
    CONFIG_UNIT: () => om,
    CONFIG_VALUE: () => tm,
    CONFIG_X_UNIT: () => rm,
    CONFIG_X_VALUE: () => Zy,
    CONFIG_Y_UNIT: () => nm,
    CONFIG_Y_VALUE: () => Jy,
    CONFIG_Z_UNIT: () => im,
    CONFIG_Z_VALUE: () => em,
    DISPLAY: () => Cm,
    FILTER: () => Tm,
    FLEX: () => Lm,
    FONT_VARIATION_SETTINGS: () => bm,
    HEIGHT: () => wm,
    HTML_ELEMENT: () => Vm,
    IMMEDIATE_CHILDREN: () => km,
    IX2_ID_DELIMITER: () => Ky,
    OPACITY: () => Im,
    PARENT: () => Xm,
    PLAIN_OBJECT: () => Wm,
    PRESERVE_3D: () => Um,
    RENDER_GENERAL: () => zm,
    RENDER_PLUGIN: () => jm,
    RENDER_STYLE: () => Km,
    RENDER_TRANSFORM: () => Hm,
    ROTATE_X: () => hm,
    ROTATE_Y: () => vm,
    ROTATE_Z: () => Em,
    SCALE_3D: () => gm,
    SCALE_X: () => fm,
    SCALE_Y: () => dm,
    SCALE_Z: () => pm,
    SIBLINGS: () => Gm,
    SKEW: () => ym,
    SKEW_X: () => mm,
    SKEW_Y: () => _m,
    TRANSFORM: () => am,
    TRANSLATE_3D: () => lm,
    TRANSLATE_X: () => sm,
    TRANSLATE_Y: () => um,
    TRANSLATE_Z: () => cm,
    WF_PAGE: () => jy,
    WIDTH: () => Am,
    WILL_CHANGE: () => Pm,
    W_MOD_IX: () => Qy,
    W_MOD_JS: () => Yy,
  });
  var Ky,
    jy,
    Yy,
    Qy,
    $y,
    Zy,
    Jy,
    em,
    tm,
    rm,
    nm,
    im,
    om,
    am,
    sm,
    um,
    cm,
    lm,
    fm,
    dm,
    pm,
    gm,
    hm,
    vm,
    Em,
    ym,
    mm,
    _m,
    Im,
    Tm,
    bm,
    Am,
    wm,
    Sm,
    Om,
    xm,
    Rm,
    Cm,
    Lm,
    Pm,
    Nm,
    Dm,
    Mm,
    Fm,
    qm,
    km,
    Gm,
    Xm,
    Um,
    Vm,
    Wm,
    Bm,
    Hm,
    zm,
    Km,
    jm,
    vs = ve(() => {
      "use strict";
      (Ky = "|"),
        (jy = "data-wf-page"),
        (Yy = "w-mod-js"),
        (Qy = "w-mod-ix"),
        ($y = ".w-dyn-item"),
        (Zy = "xValue"),
        (Jy = "yValue"),
        (em = "zValue"),
        (tm = "value"),
        (rm = "xUnit"),
        (nm = "yUnit"),
        (im = "zUnit"),
        (om = "unit"),
        (am = "transform"),
        (sm = "translateX"),
        (um = "translateY"),
        (cm = "translateZ"),
        (lm = "translate3d"),
        (fm = "scaleX"),
        (dm = "scaleY"),
        (pm = "scaleZ"),
        (gm = "scale3d"),
        (hm = "rotateX"),
        (vm = "rotateY"),
        (Em = "rotateZ"),
        (ym = "skew"),
        (mm = "skewX"),
        (_m = "skewY"),
        (Im = "opacity"),
        (Tm = "filter"),
        (bm = "font-variation-settings"),
        (Am = "width"),
        (wm = "height"),
        (Sm = "backgroundColor"),
        (Om = "background"),
        (xm = "borderColor"),
        (Rm = "color"),
        (Cm = "display"),
        (Lm = "flex"),
        (Pm = "willChange"),
        (Nm = "AUTO"),
        (Dm = ","),
        (Mm = ":"),
        (Fm = "|"),
        (qm = "CHILDREN"),
        (km = "IMMEDIATE_CHILDREN"),
        (Gm = "SIBLINGS"),
        (Xm = "PARENT"),
        (Um = "preserve-3d"),
        (Vm = "HTML_ELEMENT"),
        (Wm = "PLAIN_OBJECT"),
        (Bm = "ABSTRACT_NODE"),
        (Hm = "RENDER_TRANSFORM"),
        (zm = "RENDER_GENERAL"),
        (Km = "RENDER_STYLE"),
        (jm = "RENDER_PLUGIN");
    });
  var Es = {};
  Ne(Es, {
    ActionAppliesTo: () => yy,
    ActionTypeConsts: () => Re,
    EventAppliesTo: () => Ei,
    EventBasedOn: () => Ze,
    EventContinuousMouseAxes: () => hy,
    EventLimitAffectedElements: () => vy,
    EventTypeConsts: () => ze,
    IX2EngineActionTypes: () => Te,
    IX2EngineConstants: () => we,
    InteractionTypeConsts: () => my,
    QuickEffectDirectionConsts: () => Ey,
    QuickEffectIds: () => qr,
    ReducedMotionTypes: () => mi,
  });
  var De = ve(() => {
    "use strict";
    yi();
    kr();
    ps();
    gs();
    hs();
    vs();
    kr();
    yi();
  });
  var Ym,
    ys,
    ms = ve(() => {
      "use strict";
      De();
      ({ IX2_RAW_DATA_IMPORTED: Ym } = Te),
        (ys = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case Ym:
              return t.payload.ixData || Object.freeze({});
            default:
              return e;
          }
        });
    });
  var Ct = f((ye) => {
    "use strict";
    Object.defineProperty(ye, "__esModule", { value: !0 });
    var Qm =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    ye.clone = Xr;
    ye.addLast = Ts;
    ye.addFirst = bs;
    ye.removeLast = As;
    ye.removeFirst = ws;
    ye.insert = Ss;
    ye.removeAt = Os;
    ye.replaceAt = xs;
    ye.getIn = Ur;
    ye.set = Vr;
    ye.setIn = Wr;
    ye.update = Cs;
    ye.updateIn = Ls;
    ye.merge = Ps;
    ye.mergeDeep = Ns;
    ye.mergeIn = Ds;
    ye.omit = Ms;
    ye.addDefaults = Fs;
    var _s = "INVALID_ARGS";
    function Is(e) {
      throw new Error(e);
    }
    function _i(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols
        ? t.concat(Object.getOwnPropertySymbols(e))
        : t;
    }
    var $m = {}.hasOwnProperty;
    function Xr(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = _i(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        r[i] = e[i];
      }
      return r;
    }
    function Me(e, t, r) {
      var n = r;
      n == null && Is(_s);
      for (
        var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), u = 3;
        u < o;
        u++
      )
        a[u - 3] = arguments[u];
      for (var s = 0; s < a.length; s++) {
        var l = a[s];
        if (l != null) {
          var m = _i(l);
          if (m.length)
            for (var v = 0; v <= m.length; v++) {
              var p = m[v];
              if (!(e && n[p] !== void 0)) {
                var E = l[p];
                t && Gr(n[p]) && Gr(E) && (E = Me(e, t, n[p], E)),
                  !(E === void 0 || E === n[p]) &&
                    (i || ((i = !0), (n = Xr(n))), (n[p] = E));
              }
            }
        }
      }
      return n;
    }
    function Gr(e) {
      var t = typeof e > "u" ? "undefined" : Qm(e);
      return e != null && (t === "object" || t === "function");
    }
    function Ts(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function bs(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function As(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function ws(e) {
      return e.length ? e.slice(1) : e;
    }
    function Ss(e, t, r) {
      return e
        .slice(0, t)
        .concat(Array.isArray(r) ? r : [r])
        .concat(e.slice(t));
    }
    function Os(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function xs(e, t, r) {
      if (e[t] === r) return e;
      for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
      return (i[t] = r), i;
    }
    function Ur(e, t) {
      if ((!Array.isArray(t) && Is(_s), e != null)) {
        for (var r = e, n = 0; n < t.length; n++) {
          var i = t[n];
          if (((r = r?.[i]), r === void 0)) return r;
        }
        return r;
      }
    }
    function Vr(e, t, r) {
      var n = typeof t == "number" ? [] : {},
        i = e ?? n;
      if (i[t] === r) return i;
      var o = Xr(i);
      return (o[t] = r), o;
    }
    function Rs(e, t, r, n) {
      var i = void 0,
        o = t[n];
      if (n === t.length - 1) i = r;
      else {
        var a =
          Gr(e) && Gr(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
        i = Rs(a, t, r, n + 1);
      }
      return Vr(e, o, i);
    }
    function Wr(e, t, r) {
      return t.length ? Rs(e, t, r, 0) : r;
    }
    function Cs(e, t, r) {
      var n = e?.[t],
        i = r(n);
      return Vr(e, t, i);
    }
    function Ls(e, t, r) {
      var n = Ur(e, t),
        i = r(n);
      return Wr(e, t, i);
    }
    function Ps(e, t, r, n, i, o) {
      for (
        var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), s = 6;
        s < a;
        s++
      )
        u[s - 6] = arguments[s];
      return u.length
        ? Me.call.apply(Me, [null, !1, !1, e, t, r, n, i, o].concat(u))
        : Me(!1, !1, e, t, r, n, i, o);
    }
    function Ns(e, t, r, n, i, o) {
      for (
        var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), s = 6;
        s < a;
        s++
      )
        u[s - 6] = arguments[s];
      return u.length
        ? Me.call.apply(Me, [null, !1, !0, e, t, r, n, i, o].concat(u))
        : Me(!1, !0, e, t, r, n, i, o);
    }
    function Ds(e, t, r, n, i, o, a) {
      var u = Ur(e, t);
      u == null && (u = {});
      for (
        var s = void 0,
          l = arguments.length,
          m = Array(l > 7 ? l - 7 : 0),
          v = 7;
        v < l;
        v++
      )
        m[v - 7] = arguments[v];
      return (
        m.length
          ? (s = Me.call.apply(Me, [null, !1, !1, u, r, n, i, o, a].concat(m)))
          : (s = Me(!1, !1, u, r, n, i, o, a)),
        Wr(e, t, s)
      );
    }
    function Ms(e, t) {
      for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
        if ($m.call(e, r[i])) {
          n = !0;
          break;
        }
      if (!n) return e;
      for (var o = {}, a = _i(e), u = 0; u < a.length; u++) {
        var s = a[u];
        r.indexOf(s) >= 0 || (o[s] = e[s]);
      }
      return o;
    }
    function Fs(e, t, r, n, i, o) {
      for (
        var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), s = 6;
        s < a;
        s++
      )
        u[s - 6] = arguments[s];
      return u.length
        ? Me.call.apply(Me, [null, !0, !1, e, t, r, n, i, o].concat(u))
        : Me(!0, !1, e, t, r, n, i, o);
    }
    var Zm = {
      clone: Xr,
      addLast: Ts,
      addFirst: bs,
      removeLast: As,
      removeFirst: ws,
      insert: Ss,
      removeAt: Os,
      replaceAt: xs,
      getIn: Ur,
      set: Vr,
      setIn: Wr,
      update: Cs,
      updateIn: Ls,
      merge: Ps,
      mergeDeep: Ns,
      mergeIn: Ds,
      omit: Ms,
      addDefaults: Fs,
    };
    ye.default = Zm;
  });
  var ks,
    Jm,
    e_,
    t_,
    r_,
    n_,
    qs,
    Gs,
    Xs = ve(() => {
      "use strict";
      De();
      (ks = fe(Ct())),
        ({
          IX2_PREVIEW_REQUESTED: Jm,
          IX2_PLAYBACK_REQUESTED: e_,
          IX2_STOP_REQUESTED: t_,
          IX2_CLEAR_REQUESTED: r_,
        } = Te),
        (n_ = { preview: {}, playback: {}, stop: {}, clear: {} }),
        (qs = Object.create(null, {
          [Jm]: { value: "preview" },
          [e_]: { value: "playback" },
          [t_]: { value: "stop" },
          [r_]: { value: "clear" },
        })),
        (Gs = (e = n_, t) => {
          if (t.type in qs) {
            let r = [qs[t.type]];
            return (0, ks.setIn)(e, [r], { ...t.payload });
          }
          return e;
        });
    });
  var Ce,
    i_,
    o_,
    a_,
    s_,
    u_,
    c_,
    l_,
    f_,
    d_,
    p_,
    Us,
    g_,
    Vs,
    Ws = ve(() => {
      "use strict";
      De();
      (Ce = fe(Ct())),
        ({
          IX2_SESSION_INITIALIZED: i_,
          IX2_SESSION_STARTED: o_,
          IX2_TEST_FRAME_RENDERED: a_,
          IX2_SESSION_STOPPED: s_,
          IX2_EVENT_LISTENER_ADDED: u_,
          IX2_EVENT_STATE_CHANGED: c_,
          IX2_ANIMATION_FRAME_CHANGED: l_,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: f_,
          IX2_VIEWPORT_WIDTH_CHANGED: d_,
          IX2_MEDIA_QUERIES_DEFINED: p_,
        } = Te),
        (Us = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        }),
        (g_ = 20),
        (Vs = (e = Us, t) => {
          switch (t.type) {
            case i_: {
              let { hasBoundaryNodes: r, reducedMotion: n } = t.payload;
              return (0, Ce.merge)(e, {
                hasBoundaryNodes: r,
                reducedMotion: n,
              });
            }
            case o_:
              return (0, Ce.set)(e, "active", !0);
            case a_: {
              let {
                payload: { step: r = g_ },
              } = t;
              return (0, Ce.set)(e, "tick", e.tick + r);
            }
            case s_:
              return Us;
            case l_: {
              let {
                payload: { now: r },
              } = t;
              return (0, Ce.set)(e, "tick", r);
            }
            case u_: {
              let r = (0, Ce.addLast)(e.eventListeners, t.payload);
              return (0, Ce.set)(e, "eventListeners", r);
            }
            case c_: {
              let { stateKey: r, newState: n } = t.payload;
              return (0, Ce.setIn)(e, ["eventState", r], n);
            }
            case f_: {
              let { actionListId: r, isPlaying: n } = t.payload;
              return (0, Ce.setIn)(e, ["playbackState", r], n);
            }
            case d_: {
              let { width: r, mediaQueries: n } = t.payload,
                i = n.length,
                o = null;
              for (let a = 0; a < i; a++) {
                let { key: u, min: s, max: l } = n[a];
                if (r >= s && r <= l) {
                  o = u;
                  break;
                }
              }
              return (0, Ce.merge)(e, { viewportWidth: r, mediaQueryKey: o });
            }
            case p_:
              return (0, Ce.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        });
    });
  var Hs = f((I1, Bs) => {
    function h_() {
      (this.__data__ = []), (this.size = 0);
    }
    Bs.exports = h_;
  });
  var Br = f((T1, zs) => {
    function v_(e, t) {
      return e === t || (e !== e && t !== t);
    }
    zs.exports = v_;
  });
  var nr = f((b1, Ks) => {
    var E_ = Br();
    function y_(e, t) {
      for (var r = e.length; r--; ) if (E_(e[r][0], t)) return r;
      return -1;
    }
    Ks.exports = y_;
  });
  var Ys = f((A1, js) => {
    var m_ = nr(),
      __ = Array.prototype,
      I_ = __.splice;
    function T_(e) {
      var t = this.__data__,
        r = m_(t, e);
      if (r < 0) return !1;
      var n = t.length - 1;
      return r == n ? t.pop() : I_.call(t, r, 1), --this.size, !0;
    }
    js.exports = T_;
  });
  var $s = f((w1, Qs) => {
    var b_ = nr();
    function A_(e) {
      var t = this.__data__,
        r = b_(t, e);
      return r < 0 ? void 0 : t[r][1];
    }
    Qs.exports = A_;
  });
  var Js = f((S1, Zs) => {
    var w_ = nr();
    function S_(e) {
      return w_(this.__data__, e) > -1;
    }
    Zs.exports = S_;
  });
  var tu = f((O1, eu) => {
    var O_ = nr();
    function x_(e, t) {
      var r = this.__data__,
        n = O_(r, e);
      return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
    }
    eu.exports = x_;
  });
  var ir = f((x1, ru) => {
    var R_ = Hs(),
      C_ = Ys(),
      L_ = $s(),
      P_ = Js(),
      N_ = tu();
    function Lt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Lt.prototype.clear = R_;
    Lt.prototype.delete = C_;
    Lt.prototype.get = L_;
    Lt.prototype.has = P_;
    Lt.prototype.set = N_;
    ru.exports = Lt;
  });
  var iu = f((R1, nu) => {
    var D_ = ir();
    function M_() {
      (this.__data__ = new D_()), (this.size = 0);
    }
    nu.exports = M_;
  });
  var au = f((C1, ou) => {
    function F_(e) {
      var t = this.__data__,
        r = t.delete(e);
      return (this.size = t.size), r;
    }
    ou.exports = F_;
  });
  var uu = f((L1, su) => {
    function q_(e) {
      return this.__data__.get(e);
    }
    su.exports = q_;
  });
  var lu = f((P1, cu) => {
    function k_(e) {
      return this.__data__.has(e);
    }
    cu.exports = k_;
  });
  var Je = f((N1, fu) => {
    function G_(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    fu.exports = G_;
  });
  var Ii = f((D1, du) => {
    var X_ = lt(),
      U_ = Je(),
      V_ = "[object AsyncFunction]",
      W_ = "[object Function]",
      B_ = "[object GeneratorFunction]",
      H_ = "[object Proxy]";
    function z_(e) {
      if (!U_(e)) return !1;
      var t = X_(e);
      return t == W_ || t == B_ || t == V_ || t == H_;
    }
    du.exports = z_;
  });
  var gu = f((M1, pu) => {
    var K_ = He(),
      j_ = K_["__core-js_shared__"];
    pu.exports = j_;
  });
  var Eu = f((F1, vu) => {
    var Ti = gu(),
      hu = (function () {
        var e = /[^.]+$/.exec((Ti && Ti.keys && Ti.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
    function Y_(e) {
      return !!hu && hu in e;
    }
    vu.exports = Y_;
  });
  var bi = f((q1, yu) => {
    var Q_ = Function.prototype,
      $_ = Q_.toString;
    function Z_(e) {
      if (e != null) {
        try {
          return $_.call(e);
        } catch {}
        try {
          return e + "";
        } catch {}
      }
      return "";
    }
    yu.exports = Z_;
  });
  var _u = f((k1, mu) => {
    var J_ = Ii(),
      eI = Eu(),
      tI = Je(),
      rI = bi(),
      nI = /[\\^$.*+?()[\]{}|]/g,
      iI = /^\[object .+?Constructor\]$/,
      oI = Function.prototype,
      aI = Object.prototype,
      sI = oI.toString,
      uI = aI.hasOwnProperty,
      cI = RegExp(
        "^" +
          sI
            .call(uI)
            .replace(nI, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    function lI(e) {
      if (!tI(e) || eI(e)) return !1;
      var t = J_(e) ? cI : iI;
      return t.test(rI(e));
    }
    mu.exports = lI;
  });
  var Tu = f((G1, Iu) => {
    function fI(e, t) {
      return e?.[t];
    }
    Iu.exports = fI;
  });
  var ft = f((X1, bu) => {
    var dI = _u(),
      pI = Tu();
    function gI(e, t) {
      var r = pI(e, t);
      return dI(r) ? r : void 0;
    }
    bu.exports = gI;
  });
  var Hr = f((U1, Au) => {
    var hI = ft(),
      vI = He(),
      EI = hI(vI, "Map");
    Au.exports = EI;
  });
  var or = f((V1, wu) => {
    var yI = ft(),
      mI = yI(Object, "create");
    wu.exports = mI;
  });
  var xu = f((W1, Ou) => {
    var Su = or();
    function _I() {
      (this.__data__ = Su ? Su(null) : {}), (this.size = 0);
    }
    Ou.exports = _I;
  });
  var Cu = f((B1, Ru) => {
    function II(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    Ru.exports = II;
  });
  var Pu = f((H1, Lu) => {
    var TI = or(),
      bI = "__lodash_hash_undefined__",
      AI = Object.prototype,
      wI = AI.hasOwnProperty;
    function SI(e) {
      var t = this.__data__;
      if (TI) {
        var r = t[e];
        return r === bI ? void 0 : r;
      }
      return wI.call(t, e) ? t[e] : void 0;
    }
    Lu.exports = SI;
  });
  var Du = f((z1, Nu) => {
    var OI = or(),
      xI = Object.prototype,
      RI = xI.hasOwnProperty;
    function CI(e) {
      var t = this.__data__;
      return OI ? t[e] !== void 0 : RI.call(t, e);
    }
    Nu.exports = CI;
  });
  var Fu = f((K1, Mu) => {
    var LI = or(),
      PI = "__lodash_hash_undefined__";
    function NI(e, t) {
      var r = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (r[e] = LI && t === void 0 ? PI : t),
        this
      );
    }
    Mu.exports = NI;
  });
  var ku = f((j1, qu) => {
    var DI = xu(),
      MI = Cu(),
      FI = Pu(),
      qI = Du(),
      kI = Fu();
    function Pt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Pt.prototype.clear = DI;
    Pt.prototype.delete = MI;
    Pt.prototype.get = FI;
    Pt.prototype.has = qI;
    Pt.prototype.set = kI;
    qu.exports = Pt;
  });
  var Uu = f((Y1, Xu) => {
    var Gu = ku(),
      GI = ir(),
      XI = Hr();
    function UI() {
      (this.size = 0),
        (this.__data__ = {
          hash: new Gu(),
          map: new (XI || GI)(),
          string: new Gu(),
        });
    }
    Xu.exports = UI;
  });
  var Wu = f((Q1, Vu) => {
    function VI(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean"
        ? e !== "__proto__"
        : e === null;
    }
    Vu.exports = VI;
  });
  var ar = f(($1, Bu) => {
    var WI = Wu();
    function BI(e, t) {
      var r = e.__data__;
      return WI(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
    }
    Bu.exports = BI;
  });
  var zu = f((Z1, Hu) => {
    var HI = ar();
    function zI(e) {
      var t = HI(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    Hu.exports = zI;
  });
  var ju = f((J1, Ku) => {
    var KI = ar();
    function jI(e) {
      return KI(this, e).get(e);
    }
    Ku.exports = jI;
  });
  var Qu = f((e2, Yu) => {
    var YI = ar();
    function QI(e) {
      return YI(this, e).has(e);
    }
    Yu.exports = QI;
  });
  var Zu = f((t2, $u) => {
    var $I = ar();
    function ZI(e, t) {
      var r = $I(this, e),
        n = r.size;
      return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
    }
    $u.exports = ZI;
  });
  var zr = f((r2, Ju) => {
    var JI = Uu(),
      eT = zu(),
      tT = ju(),
      rT = Qu(),
      nT = Zu();
    function Nt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Nt.prototype.clear = JI;
    Nt.prototype.delete = eT;
    Nt.prototype.get = tT;
    Nt.prototype.has = rT;
    Nt.prototype.set = nT;
    Ju.exports = Nt;
  });
  var tc = f((n2, ec) => {
    var iT = ir(),
      oT = Hr(),
      aT = zr(),
      sT = 200;
    function uT(e, t) {
      var r = this.__data__;
      if (r instanceof iT) {
        var n = r.__data__;
        if (!oT || n.length < sT - 1)
          return n.push([e, t]), (this.size = ++r.size), this;
        r = this.__data__ = new aT(n);
      }
      return r.set(e, t), (this.size = r.size), this;
    }
    ec.exports = uT;
  });
  var Ai = f((i2, rc) => {
    var cT = ir(),
      lT = iu(),
      fT = au(),
      dT = uu(),
      pT = lu(),
      gT = tc();
    function Dt(e) {
      var t = (this.__data__ = new cT(e));
      this.size = t.size;
    }
    Dt.prototype.clear = lT;
    Dt.prototype.delete = fT;
    Dt.prototype.get = dT;
    Dt.prototype.has = pT;
    Dt.prototype.set = gT;
    rc.exports = Dt;
  });
  var ic = f((o2, nc) => {
    var hT = "__lodash_hash_undefined__";
    function vT(e) {
      return this.__data__.set(e, hT), this;
    }
    nc.exports = vT;
  });
  var ac = f((a2, oc) => {
    function ET(e) {
      return this.__data__.has(e);
    }
    oc.exports = ET;
  });
  var uc = f((s2, sc) => {
    var yT = zr(),
      mT = ic(),
      _T = ac();
    function Kr(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.__data__ = new yT(); ++t < r; ) this.add(e[t]);
    }
    Kr.prototype.add = Kr.prototype.push = mT;
    Kr.prototype.has = _T;
    sc.exports = Kr;
  });
  var lc = f((u2, cc) => {
    function IT(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
        if (t(e[r], r, e)) return !0;
      return !1;
    }
    cc.exports = IT;
  });
  var dc = f((c2, fc) => {
    function TT(e, t) {
      return e.has(t);
    }
    fc.exports = TT;
  });
  var wi = f((l2, pc) => {
    var bT = uc(),
      AT = lc(),
      wT = dc(),
      ST = 1,
      OT = 2;
    function xT(e, t, r, n, i, o) {
      var a = r & ST,
        u = e.length,
        s = t.length;
      if (u != s && !(a && s > u)) return !1;
      var l = o.get(e),
        m = o.get(t);
      if (l && m) return l == t && m == e;
      var v = -1,
        p = !0,
        E = r & OT ? new bT() : void 0;
      for (o.set(e, t), o.set(t, e); ++v < u; ) {
        var T = e[v],
          I = t[v];
        if (n) var S = a ? n(I, T, v, t, e, o) : n(T, I, v, e, t, o);
        if (S !== void 0) {
          if (S) continue;
          p = !1;
          break;
        }
        if (E) {
          if (
            !AT(t, function (b, R) {
              if (!wT(E, R) && (T === b || i(T, b, r, n, o))) return E.push(R);
            })
          ) {
            p = !1;
            break;
          }
        } else if (!(T === I || i(T, I, r, n, o))) {
          p = !1;
          break;
        }
      }
      return o.delete(e), o.delete(t), p;
    }
    pc.exports = xT;
  });
  var hc = f((f2, gc) => {
    var RT = He(),
      CT = RT.Uint8Array;
    gc.exports = CT;
  });
  var Ec = f((d2, vc) => {
    function LT(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n, i) {
          r[++t] = [i, n];
        }),
        r
      );
    }
    vc.exports = LT;
  });
  var mc = f((p2, yc) => {
    function PT(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n) {
          r[++t] = n;
        }),
        r
      );
    }
    yc.exports = PT;
  });
  var Ac = f((g2, bc) => {
    var _c = Ot(),
      Ic = hc(),
      NT = Br(),
      DT = wi(),
      MT = Ec(),
      FT = mc(),
      qT = 1,
      kT = 2,
      GT = "[object Boolean]",
      XT = "[object Date]",
      UT = "[object Error]",
      VT = "[object Map]",
      WT = "[object Number]",
      BT = "[object RegExp]",
      HT = "[object Set]",
      zT = "[object String]",
      KT = "[object Symbol]",
      jT = "[object ArrayBuffer]",
      YT = "[object DataView]",
      Tc = _c ? _c.prototype : void 0,
      Si = Tc ? Tc.valueOf : void 0;
    function QT(e, t, r, n, i, o, a) {
      switch (r) {
        case YT:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case jT:
          return !(e.byteLength != t.byteLength || !o(new Ic(e), new Ic(t)));
        case GT:
        case XT:
        case WT:
          return NT(+e, +t);
        case UT:
          return e.name == t.name && e.message == t.message;
        case BT:
        case zT:
          return e == t + "";
        case VT:
          var u = MT;
        case HT:
          var s = n & qT;
          if ((u || (u = FT), e.size != t.size && !s)) return !1;
          var l = a.get(e);
          if (l) return l == t;
          (n |= kT), a.set(e, t);
          var m = DT(u(e), u(t), n, i, o, a);
          return a.delete(e), m;
        case KT:
          if (Si) return Si.call(e) == Si.call(t);
      }
      return !1;
    }
    bc.exports = QT;
  });
  var jr = f((h2, wc) => {
    function $T(e, t) {
      for (var r = -1, n = t.length, i = e.length; ++r < n; ) e[i + r] = t[r];
      return e;
    }
    wc.exports = $T;
  });
  var be = f((v2, Sc) => {
    var ZT = Array.isArray;
    Sc.exports = ZT;
  });
  var Oi = f((E2, Oc) => {
    var JT = jr(),
      eb = be();
    function tb(e, t, r) {
      var n = t(e);
      return eb(e) ? n : JT(n, r(e));
    }
    Oc.exports = tb;
  });
  var Rc = f((y2, xc) => {
    function rb(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n; ) {
        var a = e[r];
        t(a, r, e) && (o[i++] = a);
      }
      return o;
    }
    xc.exports = rb;
  });
  var xi = f((m2, Cc) => {
    function nb() {
      return [];
    }
    Cc.exports = nb;
  });
  var Ri = f((_2, Pc) => {
    var ib = Rc(),
      ob = xi(),
      ab = Object.prototype,
      sb = ab.propertyIsEnumerable,
      Lc = Object.getOwnPropertySymbols,
      ub = Lc
        ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                ib(Lc(e), function (t) {
                  return sb.call(e, t);
                }));
          }
        : ob;
    Pc.exports = ub;
  });
  var Dc = f((I2, Nc) => {
    function cb(e, t) {
      for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
      return n;
    }
    Nc.exports = cb;
  });
  var Fc = f((T2, Mc) => {
    var lb = lt(),
      fb = it(),
      db = "[object Arguments]";
    function pb(e) {
      return fb(e) && lb(e) == db;
    }
    Mc.exports = pb;
  });
  var sr = f((b2, Gc) => {
    var qc = Fc(),
      gb = it(),
      kc = Object.prototype,
      hb = kc.hasOwnProperty,
      vb = kc.propertyIsEnumerable,
      Eb = qc(
        (function () {
          return arguments;
        })()
      )
        ? qc
        : function (e) {
            return gb(e) && hb.call(e, "callee") && !vb.call(e, "callee");
          };
    Gc.exports = Eb;
  });
  var Uc = f((A2, Xc) => {
    function yb() {
      return !1;
    }
    Xc.exports = yb;
  });
  var Yr = f((ur, Mt) => {
    var mb = He(),
      _b = Uc(),
      Bc = typeof ur == "object" && ur && !ur.nodeType && ur,
      Vc = Bc && typeof Mt == "object" && Mt && !Mt.nodeType && Mt,
      Ib = Vc && Vc.exports === Bc,
      Wc = Ib ? mb.Buffer : void 0,
      Tb = Wc ? Wc.isBuffer : void 0,
      bb = Tb || _b;
    Mt.exports = bb;
  });
  var Qr = f((w2, Hc) => {
    var Ab = 9007199254740991,
      wb = /^(?:0|[1-9]\d*)$/;
    function Sb(e, t) {
      var r = typeof e;
      return (
        (t = t ?? Ab),
        !!t &&
          (r == "number" || (r != "symbol" && wb.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
      );
    }
    Hc.exports = Sb;
  });
  var $r = f((S2, zc) => {
    var Ob = 9007199254740991;
    function xb(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Ob;
    }
    zc.exports = xb;
  });
  var jc = f((O2, Kc) => {
    var Rb = lt(),
      Cb = $r(),
      Lb = it(),
      Pb = "[object Arguments]",
      Nb = "[object Array]",
      Db = "[object Boolean]",
      Mb = "[object Date]",
      Fb = "[object Error]",
      qb = "[object Function]",
      kb = "[object Map]",
      Gb = "[object Number]",
      Xb = "[object Object]",
      Ub = "[object RegExp]",
      Vb = "[object Set]",
      Wb = "[object String]",
      Bb = "[object WeakMap]",
      Hb = "[object ArrayBuffer]",
      zb = "[object DataView]",
      Kb = "[object Float32Array]",
      jb = "[object Float64Array]",
      Yb = "[object Int8Array]",
      Qb = "[object Int16Array]",
      $b = "[object Int32Array]",
      Zb = "[object Uint8Array]",
      Jb = "[object Uint8ClampedArray]",
      eA = "[object Uint16Array]",
      tA = "[object Uint32Array]",
      he = {};
    he[Kb] =
      he[jb] =
      he[Yb] =
      he[Qb] =
      he[$b] =
      he[Zb] =
      he[Jb] =
      he[eA] =
      he[tA] =
        !0;
    he[Pb] =
      he[Nb] =
      he[Hb] =
      he[Db] =
      he[zb] =
      he[Mb] =
      he[Fb] =
      he[qb] =
      he[kb] =
      he[Gb] =
      he[Xb] =
      he[Ub] =
      he[Vb] =
      he[Wb] =
      he[Bb] =
        !1;
    function rA(e) {
      return Lb(e) && Cb(e.length) && !!he[Rb(e)];
    }
    Kc.exports = rA;
  });
  var Qc = f((x2, Yc) => {
    function nA(e) {
      return function (t) {
        return e(t);
      };
    }
    Yc.exports = nA;
  });
  var Zc = f((cr, Ft) => {
    var iA = ti(),
      $c = typeof cr == "object" && cr && !cr.nodeType && cr,
      lr = $c && typeof Ft == "object" && Ft && !Ft.nodeType && Ft,
      oA = lr && lr.exports === $c,
      Ci = oA && iA.process,
      aA = (function () {
        try {
          var e = lr && lr.require && lr.require("util").types;
          return e || (Ci && Ci.binding && Ci.binding("util"));
        } catch {}
      })();
    Ft.exports = aA;
  });
  var Zr = f((R2, tl) => {
    var sA = jc(),
      uA = Qc(),
      Jc = Zc(),
      el = Jc && Jc.isTypedArray,
      cA = el ? uA(el) : sA;
    tl.exports = cA;
  });
  var Li = f((C2, rl) => {
    var lA = Dc(),
      fA = sr(),
      dA = be(),
      pA = Yr(),
      gA = Qr(),
      hA = Zr(),
      vA = Object.prototype,
      EA = vA.hasOwnProperty;
    function yA(e, t) {
      var r = dA(e),
        n = !r && fA(e),
        i = !r && !n && pA(e),
        o = !r && !n && !i && hA(e),
        a = r || n || i || o,
        u = a ? lA(e.length, String) : [],
        s = u.length;
      for (var l in e)
        (t || EA.call(e, l)) &&
          !(
            a &&
            (l == "length" ||
              (i && (l == "offset" || l == "parent")) ||
              (o &&
                (l == "buffer" || l == "byteLength" || l == "byteOffset")) ||
              gA(l, s))
          ) &&
          u.push(l);
      return u;
    }
    rl.exports = yA;
  });
  var Jr = f((L2, nl) => {
    var mA = Object.prototype;
    function _A(e) {
      var t = e && e.constructor,
        r = (typeof t == "function" && t.prototype) || mA;
      return e === r;
    }
    nl.exports = _A;
  });
  var ol = f((P2, il) => {
    var IA = ri(),
      TA = IA(Object.keys, Object);
    il.exports = TA;
  });
  var en = f((N2, al) => {
    var bA = Jr(),
      AA = ol(),
      wA = Object.prototype,
      SA = wA.hasOwnProperty;
    function OA(e) {
      if (!bA(e)) return AA(e);
      var t = [];
      for (var r in Object(e)) SA.call(e, r) && r != "constructor" && t.push(r);
      return t;
    }
    al.exports = OA;
  });
  var yt = f((D2, sl) => {
    var xA = Ii(),
      RA = $r();
    function CA(e) {
      return e != null && RA(e.length) && !xA(e);
    }
    sl.exports = CA;
  });
  var fr = f((M2, ul) => {
    var LA = Li(),
      PA = en(),
      NA = yt();
    function DA(e) {
      return NA(e) ? LA(e) : PA(e);
    }
    ul.exports = DA;
  });
  var ll = f((F2, cl) => {
    var MA = Oi(),
      FA = Ri(),
      qA = fr();
    function kA(e) {
      return MA(e, qA, FA);
    }
    cl.exports = kA;
  });
  var pl = f((q2, dl) => {
    var fl = ll(),
      GA = 1,
      XA = Object.prototype,
      UA = XA.hasOwnProperty;
    function VA(e, t, r, n, i, o) {
      var a = r & GA,
        u = fl(e),
        s = u.length,
        l = fl(t),
        m = l.length;
      if (s != m && !a) return !1;
      for (var v = s; v--; ) {
        var p = u[v];
        if (!(a ? p in t : UA.call(t, p))) return !1;
      }
      var E = o.get(e),
        T = o.get(t);
      if (E && T) return E == t && T == e;
      var I = !0;
      o.set(e, t), o.set(t, e);
      for (var S = a; ++v < s; ) {
        p = u[v];
        var b = e[p],
          R = t[p];
        if (n) var O = a ? n(R, b, p, t, e, o) : n(b, R, p, e, t, o);
        if (!(O === void 0 ? b === R || i(b, R, r, n, o) : O)) {
          I = !1;
          break;
        }
        S || (S = p == "constructor");
      }
      if (I && !S) {
        var L = e.constructor,
          D = t.constructor;
        L != D &&
          "constructor" in e &&
          "constructor" in t &&
          !(
            typeof L == "function" &&
            L instanceof L &&
            typeof D == "function" &&
            D instanceof D
          ) &&
          (I = !1);
      }
      return o.delete(e), o.delete(t), I;
    }
    dl.exports = VA;
  });
  var hl = f((k2, gl) => {
    var WA = ft(),
      BA = He(),
      HA = WA(BA, "DataView");
    gl.exports = HA;
  });
  var El = f((G2, vl) => {
    var zA = ft(),
      KA = He(),
      jA = zA(KA, "Promise");
    vl.exports = jA;
  });
  var ml = f((X2, yl) => {
    var YA = ft(),
      QA = He(),
      $A = YA(QA, "Set");
    yl.exports = $A;
  });
  var Pi = f((U2, _l) => {
    var ZA = ft(),
      JA = He(),
      e0 = ZA(JA, "WeakMap");
    _l.exports = e0;
  });
  var tn = f((V2, Ol) => {
    var Ni = hl(),
      Di = Hr(),
      Mi = El(),
      Fi = ml(),
      qi = Pi(),
      Sl = lt(),
      qt = bi(),
      Il = "[object Map]",
      t0 = "[object Object]",
      Tl = "[object Promise]",
      bl = "[object Set]",
      Al = "[object WeakMap]",
      wl = "[object DataView]",
      r0 = qt(Ni),
      n0 = qt(Di),
      i0 = qt(Mi),
      o0 = qt(Fi),
      a0 = qt(qi),
      mt = Sl;
    ((Ni && mt(new Ni(new ArrayBuffer(1))) != wl) ||
      (Di && mt(new Di()) != Il) ||
      (Mi && mt(Mi.resolve()) != Tl) ||
      (Fi && mt(new Fi()) != bl) ||
      (qi && mt(new qi()) != Al)) &&
      (mt = function (e) {
        var t = Sl(e),
          r = t == t0 ? e.constructor : void 0,
          n = r ? qt(r) : "";
        if (n)
          switch (n) {
            case r0:
              return wl;
            case n0:
              return Il;
            case i0:
              return Tl;
            case o0:
              return bl;
            case a0:
              return Al;
          }
        return t;
      });
    Ol.exports = mt;
  });
  var Ml = f((W2, Dl) => {
    var ki = Ai(),
      s0 = wi(),
      u0 = Ac(),
      c0 = pl(),
      xl = tn(),
      Rl = be(),
      Cl = Yr(),
      l0 = Zr(),
      f0 = 1,
      Ll = "[object Arguments]",
      Pl = "[object Array]",
      rn = "[object Object]",
      d0 = Object.prototype,
      Nl = d0.hasOwnProperty;
    function p0(e, t, r, n, i, o) {
      var a = Rl(e),
        u = Rl(t),
        s = a ? Pl : xl(e),
        l = u ? Pl : xl(t);
      (s = s == Ll ? rn : s), (l = l == Ll ? rn : l);
      var m = s == rn,
        v = l == rn,
        p = s == l;
      if (p && Cl(e)) {
        if (!Cl(t)) return !1;
        (a = !0), (m = !1);
      }
      if (p && !m)
        return (
          o || (o = new ki()),
          a || l0(e) ? s0(e, t, r, n, i, o) : u0(e, t, s, r, n, i, o)
        );
      if (!(r & f0)) {
        var E = m && Nl.call(e, "__wrapped__"),
          T = v && Nl.call(t, "__wrapped__");
        if (E || T) {
          var I = E ? e.value() : e,
            S = T ? t.value() : t;
          return o || (o = new ki()), i(I, S, r, n, o);
        }
      }
      return p ? (o || (o = new ki()), c0(e, t, r, n, i, o)) : !1;
    }
    Dl.exports = p0;
  });
  var Gi = f((B2, kl) => {
    var g0 = Ml(),
      Fl = it();
    function ql(e, t, r, n, i) {
      return e === t
        ? !0
        : e == null || t == null || (!Fl(e) && !Fl(t))
        ? e !== e && t !== t
        : g0(e, t, r, n, ql, i);
    }
    kl.exports = ql;
  });
  var Xl = f((H2, Gl) => {
    var h0 = Ai(),
      v0 = Gi(),
      E0 = 1,
      y0 = 2;
    function m0(e, t, r, n) {
      var i = r.length,
        o = i,
        a = !n;
      if (e == null) return !o;
      for (e = Object(e); i--; ) {
        var u = r[i];
        if (a && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1;
      }
      for (; ++i < o; ) {
        u = r[i];
        var s = u[0],
          l = e[s],
          m = u[1];
        if (a && u[2]) {
          if (l === void 0 && !(s in e)) return !1;
        } else {
          var v = new h0();
          if (n) var p = n(l, m, s, e, t, v);
          if (!(p === void 0 ? v0(m, l, E0 | y0, n, v) : p)) return !1;
        }
      }
      return !0;
    }
    Gl.exports = m0;
  });
  var Xi = f((z2, Ul) => {
    var _0 = Je();
    function I0(e) {
      return e === e && !_0(e);
    }
    Ul.exports = I0;
  });
  var Wl = f((K2, Vl) => {
    var T0 = Xi(),
      b0 = fr();
    function A0(e) {
      for (var t = b0(e), r = t.length; r--; ) {
        var n = t[r],
          i = e[n];
        t[r] = [n, i, T0(i)];
      }
      return t;
    }
    Vl.exports = A0;
  });
  var Ui = f((j2, Bl) => {
    function w0(e, t) {
      return function (r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
      };
    }
    Bl.exports = w0;
  });
  var zl = f((Y2, Hl) => {
    var S0 = Xl(),
      O0 = Wl(),
      x0 = Ui();
    function R0(e) {
      var t = O0(e);
      return t.length == 1 && t[0][2]
        ? x0(t[0][0], t[0][1])
        : function (r) {
            return r === e || S0(r, e, t);
          };
    }
    Hl.exports = R0;
  });
  var dr = f((Q2, Kl) => {
    var C0 = lt(),
      L0 = it(),
      P0 = "[object Symbol]";
    function N0(e) {
      return typeof e == "symbol" || (L0(e) && C0(e) == P0);
    }
    Kl.exports = N0;
  });
  var nn = f(($2, jl) => {
    var D0 = be(),
      M0 = dr(),
      F0 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      q0 = /^\w*$/;
    function k0(e, t) {
      if (D0(e)) return !1;
      var r = typeof e;
      return r == "number" ||
        r == "symbol" ||
        r == "boolean" ||
        e == null ||
        M0(e)
        ? !0
        : q0.test(e) || !F0.test(e) || (t != null && e in Object(t));
    }
    jl.exports = k0;
  });
  var $l = f((Z2, Ql) => {
    var Yl = zr(),
      G0 = "Expected a function";
    function Vi(e, t) {
      if (typeof e != "function" || (t != null && typeof t != "function"))
        throw new TypeError(G0);
      var r = function () {
        var n = arguments,
          i = t ? t.apply(this, n) : n[0],
          o = r.cache;
        if (o.has(i)) return o.get(i);
        var a = e.apply(this, n);
        return (r.cache = o.set(i, a) || o), a;
      };
      return (r.cache = new (Vi.Cache || Yl)()), r;
    }
    Vi.Cache = Yl;
    Ql.exports = Vi;
  });
  var Jl = f((J2, Zl) => {
    var X0 = $l(),
      U0 = 500;
    function V0(e) {
      var t = X0(e, function (n) {
          return r.size === U0 && r.clear(), n;
        }),
        r = t.cache;
      return t;
    }
    Zl.exports = V0;
  });
  var tf = f((eq, ef) => {
    var W0 = Jl(),
      B0 =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      H0 = /\\(\\)?/g,
      z0 = W0(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(""),
          e.replace(B0, function (r, n, i, o) {
            t.push(i ? o.replace(H0, "$1") : n || r);
          }),
          t
        );
      });
    ef.exports = z0;
  });
  var Wi = f((tq, rf) => {
    function K0(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
        i[r] = t(e[r], r, e);
      return i;
    }
    rf.exports = K0;
  });
  var cf = f((rq, uf) => {
    var nf = Ot(),
      j0 = Wi(),
      Y0 = be(),
      Q0 = dr(),
      $0 = 1 / 0,
      of = nf ? nf.prototype : void 0,
      af = of ? of.toString : void 0;
    function sf(e) {
      if (typeof e == "string") return e;
      if (Y0(e)) return j0(e, sf) + "";
      if (Q0(e)) return af ? af.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -$0 ? "-0" : t;
    }
    uf.exports = sf;
  });
  var ff = f((nq, lf) => {
    var Z0 = cf();
    function J0(e) {
      return e == null ? "" : Z0(e);
    }
    lf.exports = J0;
  });
  var pr = f((iq, df) => {
    var ew = be(),
      tw = nn(),
      rw = tf(),
      nw = ff();
    function iw(e, t) {
      return ew(e) ? e : tw(e, t) ? [e] : rw(nw(e));
    }
    df.exports = iw;
  });
  var kt = f((oq, pf) => {
    var ow = dr(),
      aw = 1 / 0;
    function sw(e) {
      if (typeof e == "string" || ow(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -aw ? "-0" : t;
    }
    pf.exports = sw;
  });
  var on = f((aq, gf) => {
    var uw = pr(),
      cw = kt();
    function lw(e, t) {
      t = uw(t, e);
      for (var r = 0, n = t.length; e != null && r < n; ) e = e[cw(t[r++])];
      return r && r == n ? e : void 0;
    }
    gf.exports = lw;
  });
  var an = f((sq, hf) => {
    var fw = on();
    function dw(e, t, r) {
      var n = e == null ? void 0 : fw(e, t);
      return n === void 0 ? r : n;
    }
    hf.exports = dw;
  });
  var Ef = f((uq, vf) => {
    function pw(e, t) {
      return e != null && t in Object(e);
    }
    vf.exports = pw;
  });
  var mf = f((cq, yf) => {
    var gw = pr(),
      hw = sr(),
      vw = be(),
      Ew = Qr(),
      yw = $r(),
      mw = kt();
    function _w(e, t, r) {
      t = gw(t, e);
      for (var n = -1, i = t.length, o = !1; ++n < i; ) {
        var a = mw(t[n]);
        if (!(o = e != null && r(e, a))) break;
        e = e[a];
      }
      return o || ++n != i
        ? o
        : ((i = e == null ? 0 : e.length),
          !!i && yw(i) && Ew(a, i) && (vw(e) || hw(e)));
    }
    yf.exports = _w;
  });
  var If = f((lq, _f) => {
    var Iw = Ef(),
      Tw = mf();
    function bw(e, t) {
      return e != null && Tw(e, t, Iw);
    }
    _f.exports = bw;
  });
  var bf = f((fq, Tf) => {
    var Aw = Gi(),
      ww = an(),
      Sw = If(),
      Ow = nn(),
      xw = Xi(),
      Rw = Ui(),
      Cw = kt(),
      Lw = 1,
      Pw = 2;
    function Nw(e, t) {
      return Ow(e) && xw(t)
        ? Rw(Cw(e), t)
        : function (r) {
            var n = ww(r, e);
            return n === void 0 && n === t ? Sw(r, e) : Aw(t, n, Lw | Pw);
          };
    }
    Tf.exports = Nw;
  });
  var sn = f((dq, Af) => {
    function Dw(e) {
      return e;
    }
    Af.exports = Dw;
  });
  var Bi = f((pq, wf) => {
    function Mw(e) {
      return function (t) {
        return t?.[e];
      };
    }
    wf.exports = Mw;
  });
  var Of = f((gq, Sf) => {
    var Fw = on();
    function qw(e) {
      return function (t) {
        return Fw(t, e);
      };
    }
    Sf.exports = qw;
  });
  var Rf = f((hq, xf) => {
    var kw = Bi(),
      Gw = Of(),
      Xw = nn(),
      Uw = kt();
    function Vw(e) {
      return Xw(e) ? kw(Uw(e)) : Gw(e);
    }
    xf.exports = Vw;
  });
  var dt = f((vq, Cf) => {
    var Ww = zl(),
      Bw = bf(),
      Hw = sn(),
      zw = be(),
      Kw = Rf();
    function jw(e) {
      return typeof e == "function"
        ? e
        : e == null
        ? Hw
        : typeof e == "object"
        ? zw(e)
          ? Bw(e[0], e[1])
          : Ww(e)
        : Kw(e);
    }
    Cf.exports = jw;
  });
  var Hi = f((Eq, Lf) => {
    var Yw = dt(),
      Qw = yt(),
      $w = fr();
    function Zw(e) {
      return function (t, r, n) {
        var i = Object(t);
        if (!Qw(t)) {
          var o = Yw(r, 3);
          (t = $w(t)),
            (r = function (u) {
              return o(i[u], u, i);
            });
        }
        var a = e(t, r, n);
        return a > -1 ? i[o ? t[a] : a] : void 0;
      };
    }
    Lf.exports = Zw;
  });
  var zi = f((yq, Pf) => {
    function Jw(e, t, r, n) {
      for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i; )
        if (t(e[o], o, e)) return o;
      return -1;
    }
    Pf.exports = Jw;
  });
  var Df = f((mq, Nf) => {
    var eS = /\s/;
    function tS(e) {
      for (var t = e.length; t-- && eS.test(e.charAt(t)); );
      return t;
    }
    Nf.exports = tS;
  });
  var Ff = f((_q, Mf) => {
    var rS = Df(),
      nS = /^\s+/;
    function iS(e) {
      return e && e.slice(0, rS(e) + 1).replace(nS, "");
    }
    Mf.exports = iS;
  });
  var un = f((Iq, Gf) => {
    var oS = Ff(),
      qf = Je(),
      aS = dr(),
      kf = 0 / 0,
      sS = /^[-+]0x[0-9a-f]+$/i,
      uS = /^0b[01]+$/i,
      cS = /^0o[0-7]+$/i,
      lS = parseInt;
    function fS(e) {
      if (typeof e == "number") return e;
      if (aS(e)) return kf;
      if (qf(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = qf(t) ? t + "" : t;
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = oS(e);
      var r = uS.test(e);
      return r || cS.test(e) ? lS(e.slice(2), r ? 2 : 8) : sS.test(e) ? kf : +e;
    }
    Gf.exports = fS;
  });
  var Vf = f((Tq, Uf) => {
    var dS = un(),
      Xf = 1 / 0,
      pS = 17976931348623157e292;
    function gS(e) {
      if (!e) return e === 0 ? e : 0;
      if (((e = dS(e)), e === Xf || e === -Xf)) {
        var t = e < 0 ? -1 : 1;
        return t * pS;
      }
      return e === e ? e : 0;
    }
    Uf.exports = gS;
  });
  var Ki = f((bq, Wf) => {
    var hS = Vf();
    function vS(e) {
      var t = hS(e),
        r = t % 1;
      return t === t ? (r ? t - r : t) : 0;
    }
    Wf.exports = vS;
  });
  var Hf = f((Aq, Bf) => {
    var ES = zi(),
      yS = dt(),
      mS = Ki(),
      _S = Math.max;
    function IS(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = r == null ? 0 : mS(r);
      return i < 0 && (i = _S(n + i, 0)), ES(e, yS(t, 3), i);
    }
    Bf.exports = IS;
  });
  var ji = f((wq, zf) => {
    var TS = Hi(),
      bS = Hf(),
      AS = TS(bS);
    zf.exports = AS;
  });
  var Yf = {};
  Ne(Yf, {
    ELEMENT_MATCHES: () => wS,
    FLEX_PREFIXED: () => Yi,
    IS_BROWSER_ENV: () => Ke,
    TRANSFORM_PREFIXED: () => pt,
    TRANSFORM_STYLE_PREFIXED: () => ln,
    withBrowser: () => cn,
  });
  var jf,
    Ke,
    cn,
    wS,
    Yi,
    pt,
    Kf,
    ln,
    fn = ve(() => {
      "use strict";
      (jf = fe(ji())),
        (Ke = typeof window < "u"),
        (cn = (e, t) => (Ke ? e() : t)),
        (wS = cn(() =>
          (0, jf.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector",
            ],
            (e) => e in Element.prototype
          )
        )),
        (Yi = cn(() => {
          let e = document.createElement("i"),
            t = [
              "flex",
              "-webkit-flex",
              "-ms-flexbox",
              "-moz-box",
              "-webkit-box",
            ],
            r = "";
          try {
            let { length: n } = t;
            for (let i = 0; i < n; i++) {
              let o = t[i];
              if (((e.style.display = o), e.style.display === o)) return o;
            }
            return r;
          } catch {
            return r;
          }
        }, "flex")),
        (pt = cn(() => {
          let e = document.createElement("i");
          if (e.style.transform == null) {
            let t = ["Webkit", "Moz", "ms"],
              r = "Transform",
              { length: n } = t;
            for (let i = 0; i < n; i++) {
              let o = t[i] + r;
              if (e.style[o] !== void 0) return o;
            }
          }
          return "transform";
        }, "transform")),
        (Kf = pt.split("transform")[0]),
        (ln = Kf ? Kf + "TransformStyle" : "transformStyle");
    });
  var Qi = f((Sq, ed) => {
    var SS = 4,
      OS = 0.001,
      xS = 1e-7,
      RS = 10,
      gr = 11,
      dn = 1 / (gr - 1),
      CS = typeof Float32Array == "function";
    function Qf(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function $f(e, t) {
      return 3 * t - 6 * e;
    }
    function Zf(e) {
      return 3 * e;
    }
    function pn(e, t, r) {
      return ((Qf(t, r) * e + $f(t, r)) * e + Zf(t)) * e;
    }
    function Jf(e, t, r) {
      return 3 * Qf(t, r) * e * e + 2 * $f(t, r) * e + Zf(t);
    }
    function LS(e, t, r, n, i) {
      var o,
        a,
        u = 0;
      do
        (a = t + (r - t) / 2), (o = pn(a, n, i) - e), o > 0 ? (r = a) : (t = a);
      while (Math.abs(o) > xS && ++u < RS);
      return a;
    }
    function PS(e, t, r, n) {
      for (var i = 0; i < SS; ++i) {
        var o = Jf(t, r, n);
        if (o === 0) return t;
        var a = pn(t, r, n) - e;
        t -= a / o;
      }
      return t;
    }
    ed.exports = function (t, r, n, i) {
      if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      var o = CS ? new Float32Array(gr) : new Array(gr);
      if (t !== r || n !== i)
        for (var a = 0; a < gr; ++a) o[a] = pn(a * dn, t, n);
      function u(s) {
        for (var l = 0, m = 1, v = gr - 1; m !== v && o[m] <= s; ++m) l += dn;
        --m;
        var p = (s - o[m]) / (o[m + 1] - o[m]),
          E = l + p * dn,
          T = Jf(E, t, n);
        return T >= OS ? PS(s, E, t, n) : T === 0 ? E : LS(s, l, l + dn, t, n);
      }
      return function (l) {
        return t === r && n === i
          ? l
          : l === 0
          ? 0
          : l === 1
          ? 1
          : pn(u(l), r, i);
      };
    };
  });
  var vr = {};
  Ne(vr, {
    bounce: () => gO,
    bouncePast: () => hO,
    ease: () => NS,
    easeIn: () => DS,
    easeInOut: () => FS,
    easeOut: () => MS,
    inBack: () => oO,
    inCirc: () => tO,
    inCubic: () => XS,
    inElastic: () => uO,
    inExpo: () => ZS,
    inOutBack: () => sO,
    inOutCirc: () => nO,
    inOutCubic: () => VS,
    inOutElastic: () => lO,
    inOutExpo: () => eO,
    inOutQuad: () => GS,
    inOutQuart: () => HS,
    inOutQuint: () => jS,
    inOutSine: () => $S,
    inQuad: () => qS,
    inQuart: () => WS,
    inQuint: () => zS,
    inSine: () => YS,
    outBack: () => aO,
    outBounce: () => iO,
    outCirc: () => rO,
    outCubic: () => US,
    outElastic: () => cO,
    outExpo: () => JS,
    outQuad: () => kS,
    outQuart: () => BS,
    outQuint: () => KS,
    outSine: () => QS,
    swingFrom: () => dO,
    swingFromTo: () => fO,
    swingTo: () => pO,
  });
  function qS(e) {
    return Math.pow(e, 2);
  }
  function kS(e) {
    return -(Math.pow(e - 1, 2) - 1);
  }
  function GS(e) {
    return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
  }
  function XS(e) {
    return Math.pow(e, 3);
  }
  function US(e) {
    return Math.pow(e - 1, 3) + 1;
  }
  function VS(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 3)
      : 0.5 * (Math.pow(e - 2, 3) + 2);
  }
  function WS(e) {
    return Math.pow(e, 4);
  }
  function BS(e) {
    return -(Math.pow(e - 1, 4) - 1);
  }
  function HS(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 4)
      : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
  }
  function zS(e) {
    return Math.pow(e, 5);
  }
  function KS(e) {
    return Math.pow(e - 1, 5) + 1;
  }
  function jS(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 5)
      : 0.5 * (Math.pow(e - 2, 5) + 2);
  }
  function YS(e) {
    return -Math.cos(e * (Math.PI / 2)) + 1;
  }
  function QS(e) {
    return Math.sin(e * (Math.PI / 2));
  }
  function $S(e) {
    return -0.5 * (Math.cos(Math.PI * e) - 1);
  }
  function ZS(e) {
    return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
  }
  function JS(e) {
    return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
  }
  function eO(e) {
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (e /= 0.5) < 1
      ? 0.5 * Math.pow(2, 10 * (e - 1))
      : 0.5 * (-Math.pow(2, -10 * --e) + 2);
  }
  function tO(e) {
    return -(Math.sqrt(1 - e * e) - 1);
  }
  function rO(e) {
    return Math.sqrt(1 - Math.pow(e - 1, 2));
  }
  function nO(e) {
    return (e /= 0.5) < 1
      ? -0.5 * (Math.sqrt(1 - e * e) - 1)
      : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
  }
  function iO(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function oO(e) {
    let t = ot;
    return e * e * ((t + 1) * e - t);
  }
  function aO(e) {
    let t = ot;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function sO(e) {
    let t = ot;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function uO(e) {
    let t = ot,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (r || (r = 0.3),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        -(
          n *
          Math.pow(2, 10 * (e -= 1)) *
          Math.sin(((e - t) * (2 * Math.PI)) / r)
        ));
  }
  function cO(e) {
    let t = ot,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (r || (r = 0.3),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        n * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / r) + 1);
  }
  function lO(e) {
    let t = ot,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : (e /= 1 / 2) === 2
      ? 1
      : (r || (r = 0.3 * 1.5),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        e < 1
          ? -0.5 *
            (n *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / r))
          : n *
              Math.pow(2, -10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / r) *
              0.5 +
            1);
  }
  function fO(e) {
    let t = ot;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function dO(e) {
    let t = ot;
    return e * e * ((t + 1) * e - t);
  }
  function pO(e) {
    let t = ot;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function gO(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function hO(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
      : e < 2.5 / 2.75
      ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
      : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
  }
  var hr,
    ot,
    NS,
    DS,
    MS,
    FS,
    $i = ve(() => {
      "use strict";
      (hr = fe(Qi())),
        (ot = 1.70158),
        (NS = (0, hr.default)(0.25, 0.1, 0.25, 1)),
        (DS = (0, hr.default)(0.42, 0, 1, 1)),
        (MS = (0, hr.default)(0, 0, 0.58, 1)),
        (FS = (0, hr.default)(0.42, 0, 0.58, 1));
    });
  var rd = {};
  Ne(rd, {
    applyEasing: () => EO,
    createBezierEasing: () => vO,
    optimizeFloat: () => Er,
  });
  function Er(e, t = 5, r = 10) {
    let n = Math.pow(r, t),
      i = Number(Math.round(e * n) / n);
    return Math.abs(i) > 1e-4 ? i : 0;
  }
  function vO(e) {
    return (0, td.default)(...e);
  }
  function EO(e, t, r) {
    return t === 0
      ? 0
      : t === 1
      ? 1
      : Er(r ? (t > 0 ? r(t) : t) : t > 0 && e && vr[e] ? vr[e](t) : t);
  }
  var td,
    Zi = ve(() => {
      "use strict";
      $i();
      td = fe(Qi());
    });
  var od = {};
  Ne(od, {
    createElementState: () => id,
    ixElements: () => LO,
    mergeActionState: () => Ji,
  });
  function id(e, t, r, n, i) {
    let o =
      r === yO ? (0, Gt.getIn)(i, ["config", "target", "objectId"]) : null;
    return (0, Gt.mergeIn)(e, [n], { id: n, ref: t, refId: o, refType: r });
  }
  function Ji(e, t, r, n, i) {
    let o = NO(i);
    return (0, Gt.mergeIn)(e, [t, CO, r], n, o);
  }
  function NO(e) {
    let { config: t } = e;
    return PO.reduce((r, n) => {
      let i = n[0],
        o = n[1],
        a = t[i],
        u = t[o];
      return a != null && u != null && (r[o] = u), r;
    }, {});
  }
  var Gt,
    xq,
    yO,
    Rq,
    mO,
    _O,
    IO,
    TO,
    bO,
    AO,
    wO,
    SO,
    OO,
    xO,
    RO,
    nd,
    CO,
    LO,
    PO,
    ad = ve(() => {
      "use strict";
      Gt = fe(Ct());
      De();
      ({
        HTML_ELEMENT: xq,
        PLAIN_OBJECT: yO,
        ABSTRACT_NODE: Rq,
        CONFIG_X_VALUE: mO,
        CONFIG_Y_VALUE: _O,
        CONFIG_Z_VALUE: IO,
        CONFIG_VALUE: TO,
        CONFIG_X_UNIT: bO,
        CONFIG_Y_UNIT: AO,
        CONFIG_Z_UNIT: wO,
        CONFIG_UNIT: SO,
      } = we),
        ({
          IX2_SESSION_STOPPED: OO,
          IX2_INSTANCE_ADDED: xO,
          IX2_ELEMENT_STATE_CHANGED: RO,
        } = Te),
        (nd = {}),
        (CO = "refState"),
        (LO = (e = nd, t = {}) => {
          switch (t.type) {
            case OO:
              return nd;
            case xO: {
              let {
                  elementId: r,
                  element: n,
                  origin: i,
                  actionItem: o,
                  refType: a,
                } = t.payload,
                { actionTypeId: u } = o,
                s = e;
              return (
                (0, Gt.getIn)(s, [r, n]) !== n && (s = id(s, n, a, r, o)),
                Ji(s, r, u, i, o)
              );
            }
            case RO: {
              let {
                elementId: r,
                actionTypeId: n,
                current: i,
                actionItem: o,
              } = t.payload;
              return Ji(e, r, n, i, o);
            }
            default:
              return e;
          }
        });
      PO = [
        [mO, bO],
        [_O, AO],
        [IO, wO],
        [TO, SO],
      ];
    });
  var sd = f((eo) => {
    "use strict";
    Object.defineProperty(eo, "__esModule", { value: !0 });
    function DO(e, t) {
      for (var r in t)
        Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }
    DO(eo, {
      clearPlugin: function () {
        return UO;
      },
      createPluginInstance: function () {
        return GO;
      },
      getPluginConfig: function () {
        return MO;
      },
      getPluginDestination: function () {
        return kO;
      },
      getPluginDuration: function () {
        return FO;
      },
      getPluginOrigin: function () {
        return qO;
      },
      renderPlugin: function () {
        return XO;
      },
    });
    var MO = (e) => e.value,
      FO = (e, t) => {
        if (t.config.duration !== "auto") return null;
        let r = parseFloat(e.getAttribute("data-duration"));
        return r > 0
          ? r * 1e3
          : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
      },
      qO = (e) => e || { value: 0 },
      kO = (e) => ({ value: e.value }),
      GO = (e) => {
        let t = window.Webflow.require("lottie").createInstance(e);
        return t.stop(), t.setSubframe(!0), t;
      },
      XO = (e, t, r) => {
        if (!e) return;
        let n = t[r.actionTypeId].value / 100;
        e.goToFrame(e.frames * n);
      },
      UO = (e) => {
        window.Webflow.require("lottie").createInstance(e).stop();
      };
  });
  var cd = f((to) => {
    "use strict";
    Object.defineProperty(to, "__esModule", { value: !0 });
    function VO(e, t) {
      for (var r in t)
        Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }
    VO(to, {
      clearPlugin: function () {
        return ZO;
      },
      createPluginInstance: function () {
        return QO;
      },
      getPluginConfig: function () {
        return zO;
      },
      getPluginDestination: function () {
        return YO;
      },
      getPluginDuration: function () {
        return KO;
      },
      getPluginOrigin: function () {
        return jO;
      },
      renderPlugin: function () {
        return $O;
      },
    });
    var WO = (e) => document.querySelector(`[data-w-id="${e}"]`),
      BO = () => window.Webflow.require("spline"),
      HO = (e, t) => e.filter((r) => !t.includes(r)),
      zO = (e, t) => e.value[t],
      KO = () => null,
      ud = Object.freeze({
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
      }),
      jO = (e, t) => {
        let r = t.config.value,
          n = Object.keys(r);
        if (e) {
          let o = Object.keys(e),
            a = HO(n, o);
          return a.length ? a.reduce((s, l) => ((s[l] = ud[l]), s), e) : e;
        }
        return n.reduce((o, a) => ((o[a] = ud[a]), o), {});
      },
      YO = (e) => e.value,
      QO = (e, t) => {
        let r = t?.config?.target?.pluginElement;
        return r ? WO(r) : null;
      },
      $O = (e, t, r) => {
        let n = BO(),
          i = n.getInstance(e),
          o = r.config.target.objectId,
          a = (u) => {
            if (!u)
              throw new Error("Invalid spline app passed to renderSpline");
            let s = o && u.findObjectById(o);
            if (!s) return;
            let { PLUGIN_SPLINE: l } = t;
            l.positionX != null && (s.position.x = l.positionX),
              l.positionY != null && (s.position.y = l.positionY),
              l.positionZ != null && (s.position.z = l.positionZ),
              l.rotationX != null && (s.rotation.x = l.rotationX),
              l.rotationY != null && (s.rotation.y = l.rotationY),
              l.rotationZ != null && (s.rotation.z = l.rotationZ),
              l.scaleX != null && (s.scale.x = l.scaleX),
              l.scaleY != null && (s.scale.y = l.scaleY),
              l.scaleZ != null && (s.scale.z = l.scaleZ);
          };
        i ? a(i.spline) : n.setLoadHandler(e, a);
      },
      ZO = () => null;
  });
  var ld = f((io) => {
    "use strict";
    Object.defineProperty(io, "__esModule", { value: !0 });
    function JO(e, t) {
      for (var r in t)
        Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }
    JO(io, {
      clearPlugin: function () {
        return ux;
      },
      createPluginInstance: function () {
        return ax;
      },
      getPluginConfig: function () {
        return rx;
      },
      getPluginDestination: function () {
        return ox;
      },
      getPluginDuration: function () {
        return nx;
      },
      getPluginOrigin: function () {
        return ix;
      },
      renderPlugin: function () {
        return sx;
      },
    });
    var ro = "--wf-rive-fit",
      no = "--wf-rive-alignment",
      ex = (e) => document.querySelector(`[data-w-id="${e}"]`),
      tx = () => window.Webflow.require("rive"),
      rx = (e, t) => e.value.inputs[t],
      nx = () => null,
      ix = (e, t) => {
        if (e) return e;
        let r = {},
          { inputs: n = {} } = t.config.value;
        for (let i in n) n[i] == null && (r[i] = 0);
        return r;
      },
      ox = (e) => e.value.inputs ?? {},
      ax = (e, t) => {
        if ((t.config?.target?.selectorGuids || []).length > 0) return e;
        let n = t?.config?.target?.pluginElement;
        return n ? ex(n) : null;
      },
      sx = (e, { PLUGIN_RIVE: t }, r) => {
        let n = tx(),
          i = n.getInstance(e),
          o = n.rive.StateMachineInputType,
          { name: a, inputs: u = {} } = r.config.value || {};
        function s(l) {
          if (l.loaded) m();
          else {
            let v = () => {
              m(), l?.off("load", v);
            };
            l?.on("load", v);
          }
          function m() {
            let v = l.stateMachineInputs(a);
            if (v != null) {
              if ((l.isPlaying || l.play(a, !1), ro in u || no in u)) {
                let p = l.layout,
                  E = u[ro] ?? p.fit,
                  T = u[no] ?? p.alignment;
                (E !== p.fit || T !== p.alignment) &&
                  (l.layout = p.copyWith({ fit: E, alignment: T }));
              }
              for (let p in u) {
                if (p === ro || p === no) continue;
                let E = v.find((T) => T.name === p);
                if (E != null)
                  switch (E.type) {
                    case o.Boolean: {
                      if (u[p] != null) {
                        let T = !!u[p];
                        E.value = T;
                      }
                      break;
                    }
                    case o.Number: {
                      let T = t[p];
                      T != null && (E.value = T);
                      break;
                    }
                    case o.Trigger: {
                      u[p] && E.fire();
                      break;
                    }
                  }
              }
            }
          }
        }
        i?.rive ? s(i.rive) : n.setLoadHandler(e, s);
      },
      ux = (e, t) => null;
  });
  var ao = f((oo) => {
    "use strict";
    Object.defineProperty(oo, "__esModule", { value: !0 });
    Object.defineProperty(oo, "normalizeColor", {
      enumerable: !0,
      get: function () {
        return cx;
      },
    });
    var fd = {
      aliceblue: "#F0F8FF",
      antiquewhite: "#FAEBD7",
      aqua: "#00FFFF",
      aquamarine: "#7FFFD4",
      azure: "#F0FFFF",
      beige: "#F5F5DC",
      bisque: "#FFE4C4",
      black: "#000000",
      blanchedalmond: "#FFEBCD",
      blue: "#0000FF",
      blueviolet: "#8A2BE2",
      brown: "#A52A2A",
      burlywood: "#DEB887",
      cadetblue: "#5F9EA0",
      chartreuse: "#7FFF00",
      chocolate: "#D2691E",
      coral: "#FF7F50",
      cornflowerblue: "#6495ED",
      cornsilk: "#FFF8DC",
      crimson: "#DC143C",
      cyan: "#00FFFF",
      darkblue: "#00008B",
      darkcyan: "#008B8B",
      darkgoldenrod: "#B8860B",
      darkgray: "#A9A9A9",
      darkgreen: "#006400",
      darkgrey: "#A9A9A9",
      darkkhaki: "#BDB76B",
      darkmagenta: "#8B008B",
      darkolivegreen: "#556B2F",
      darkorange: "#FF8C00",
      darkorchid: "#9932CC",
      darkred: "#8B0000",
      darksalmon: "#E9967A",
      darkseagreen: "#8FBC8F",
      darkslateblue: "#483D8B",
      darkslategray: "#2F4F4F",
      darkslategrey: "#2F4F4F",
      darkturquoise: "#00CED1",
      darkviolet: "#9400D3",
      deeppink: "#FF1493",
      deepskyblue: "#00BFFF",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1E90FF",
      firebrick: "#B22222",
      floralwhite: "#FFFAF0",
      forestgreen: "#228B22",
      fuchsia: "#FF00FF",
      gainsboro: "#DCDCDC",
      ghostwhite: "#F8F8FF",
      gold: "#FFD700",
      goldenrod: "#DAA520",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#ADFF2F",
      grey: "#808080",
      honeydew: "#F0FFF0",
      hotpink: "#FF69B4",
      indianred: "#CD5C5C",
      indigo: "#4B0082",
      ivory: "#FFFFF0",
      khaki: "#F0E68C",
      lavender: "#E6E6FA",
      lavenderblush: "#FFF0F5",
      lawngreen: "#7CFC00",
      lemonchiffon: "#FFFACD",
      lightblue: "#ADD8E6",
      lightcoral: "#F08080",
      lightcyan: "#E0FFFF",
      lightgoldenrodyellow: "#FAFAD2",
      lightgray: "#D3D3D3",
      lightgreen: "#90EE90",
      lightgrey: "#D3D3D3",
      lightpink: "#FFB6C1",
      lightsalmon: "#FFA07A",
      lightseagreen: "#20B2AA",
      lightskyblue: "#87CEFA",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#B0C4DE",
      lightyellow: "#FFFFE0",
      lime: "#00FF00",
      limegreen: "#32CD32",
      linen: "#FAF0E6",
      magenta: "#FF00FF",
      maroon: "#800000",
      mediumaquamarine: "#66CDAA",
      mediumblue: "#0000CD",
      mediumorchid: "#BA55D3",
      mediumpurple: "#9370DB",
      mediumseagreen: "#3CB371",
      mediumslateblue: "#7B68EE",
      mediumspringgreen: "#00FA9A",
      mediumturquoise: "#48D1CC",
      mediumvioletred: "#C71585",
      midnightblue: "#191970",
      mintcream: "#F5FFFA",
      mistyrose: "#FFE4E1",
      moccasin: "#FFE4B5",
      navajowhite: "#FFDEAD",
      navy: "#000080",
      oldlace: "#FDF5E6",
      olive: "#808000",
      olivedrab: "#6B8E23",
      orange: "#FFA500",
      orangered: "#FF4500",
      orchid: "#DA70D6",
      palegoldenrod: "#EEE8AA",
      palegreen: "#98FB98",
      paleturquoise: "#AFEEEE",
      palevioletred: "#DB7093",
      papayawhip: "#FFEFD5",
      peachpuff: "#FFDAB9",
      peru: "#CD853F",
      pink: "#FFC0CB",
      plum: "#DDA0DD",
      powderblue: "#B0E0E6",
      purple: "#800080",
      rebeccapurple: "#663399",
      red: "#FF0000",
      rosybrown: "#BC8F8F",
      royalblue: "#4169E1",
      saddlebrown: "#8B4513",
      salmon: "#FA8072",
      sandybrown: "#F4A460",
      seagreen: "#2E8B57",
      seashell: "#FFF5EE",
      sienna: "#A0522D",
      silver: "#C0C0C0",
      skyblue: "#87CEEB",
      slateblue: "#6A5ACD",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#FFFAFA",
      springgreen: "#00FF7F",
      steelblue: "#4682B4",
      tan: "#D2B48C",
      teal: "#008080",
      thistle: "#D8BFD8",
      tomato: "#FF6347",
      turquoise: "#40E0D0",
      violet: "#EE82EE",
      wheat: "#F5DEB3",
      white: "#FFFFFF",
      whitesmoke: "#F5F5F5",
      yellow: "#FFFF00",
      yellowgreen: "#9ACD32",
    };
    function cx(e) {
      let t,
        r,
        n,
        i = 1,
        o = e.replace(/\s/g, "").toLowerCase(),
        u = (typeof fd[o] == "string" ? fd[o].toLowerCase() : null) || o;
      if (u.startsWith("#")) {
        let s = u.substring(1);
        s.length === 3 || s.length === 4
          ? ((t = parseInt(s[0] + s[0], 16)),
            (r = parseInt(s[1] + s[1], 16)),
            (n = parseInt(s[2] + s[2], 16)),
            s.length === 4 && (i = parseInt(s[3] + s[3], 16) / 255))
          : (s.length === 6 || s.length === 8) &&
            ((t = parseInt(s.substring(0, 2), 16)),
            (r = parseInt(s.substring(2, 4), 16)),
            (n = parseInt(s.substring(4, 6), 16)),
            s.length === 8 && (i = parseInt(s.substring(6, 8), 16) / 255));
      } else if (u.startsWith("rgba")) {
        let s = u.match(/rgba\(([^)]+)\)/)[1].split(",");
        (t = parseInt(s[0], 10)),
          (r = parseInt(s[1], 10)),
          (n = parseInt(s[2], 10)),
          (i = parseFloat(s[3]));
      } else if (u.startsWith("rgb")) {
        let s = u.match(/rgb\(([^)]+)\)/)[1].split(",");
        (t = parseInt(s[0], 10)),
          (r = parseInt(s[1], 10)),
          (n = parseInt(s[2], 10));
      } else if (u.startsWith("hsla")) {
        let s = u.match(/hsla\(([^)]+)\)/)[1].split(","),
          l = parseFloat(s[0]),
          m = parseFloat(s[1].replace("%", "")) / 100,
          v = parseFloat(s[2].replace("%", "")) / 100;
        i = parseFloat(s[3]);
        let p = (1 - Math.abs(2 * v - 1)) * m,
          E = p * (1 - Math.abs(((l / 60) % 2) - 1)),
          T = v - p / 2,
          I,
          S,
          b;
        l >= 0 && l < 60
          ? ((I = p), (S = E), (b = 0))
          : l >= 60 && l < 120
          ? ((I = E), (S = p), (b = 0))
          : l >= 120 && l < 180
          ? ((I = 0), (S = p), (b = E))
          : l >= 180 && l < 240
          ? ((I = 0), (S = E), (b = p))
          : l >= 240 && l < 300
          ? ((I = E), (S = 0), (b = p))
          : ((I = p), (S = 0), (b = E)),
          (t = Math.round((I + T) * 255)),
          (r = Math.round((S + T) * 255)),
          (n = Math.round((b + T) * 255));
      } else if (u.startsWith("hsl")) {
        let s = u.match(/hsl\(([^)]+)\)/)[1].split(","),
          l = parseFloat(s[0]),
          m = parseFloat(s[1].replace("%", "")) / 100,
          v = parseFloat(s[2].replace("%", "")) / 100,
          p = (1 - Math.abs(2 * v - 1)) * m,
          E = p * (1 - Math.abs(((l / 60) % 2) - 1)),
          T = v - p / 2,
          I,
          S,
          b;
        l >= 0 && l < 60
          ? ((I = p), (S = E), (b = 0))
          : l >= 60 && l < 120
          ? ((I = E), (S = p), (b = 0))
          : l >= 120 && l < 180
          ? ((I = 0), (S = p), (b = E))
          : l >= 180 && l < 240
          ? ((I = 0), (S = E), (b = p))
          : l >= 240 && l < 300
          ? ((I = E), (S = 0), (b = p))
          : ((I = p), (S = 0), (b = E)),
          (t = Math.round((I + T) * 255)),
          (r = Math.round((S + T) * 255)),
          (n = Math.round((b + T) * 255));
      }
      if (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n))
        throw new Error(
          `Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`
        );
      return { red: t, green: r, blue: n, alpha: i };
    }
  });
  var dd = f((so) => {
    "use strict";
    Object.defineProperty(so, "__esModule", { value: !0 });
    function lx(e, t) {
      for (var r in t)
        Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }
    lx(so, {
      clearPlugin: function () {
        return yx;
      },
      createPluginInstance: function () {
        return vx;
      },
      getPluginConfig: function () {
        return dx;
      },
      getPluginDestination: function () {
        return hx;
      },
      getPluginDuration: function () {
        return px;
      },
      getPluginOrigin: function () {
        return gx;
      },
      renderPlugin: function () {
        return Ex;
      },
    });
    var fx = ao(),
      dx = (e, t) => e.value[t],
      px = () => null,
      gx = (e, t) => {
        if (e) return e;
        let r = t.config.value,
          n = t.config.target.objectId,
          i = getComputedStyle(document.documentElement).getPropertyValue(n);
        if (r.size != null) return { size: parseInt(i, 10) };
        if (r.red != null && r.green != null && r.blue != null)
          return (0, fx.normalizeColor)(i);
      },
      hx = (e) => e.value,
      vx = () => null,
      Ex = (e, t, r) => {
        let n = r.config.target.objectId,
          i = r.config.value.unit,
          { PLUGIN_VARIABLE: o } = t,
          { size: a, red: u, green: s, blue: l, alpha: m } = o,
          v;
        a != null && (v = a + i),
          u != null &&
            l != null &&
            s != null &&
            m != null &&
            (v = `rgba(${u}, ${s}, ${l}, ${m})`),
          v != null && document.documentElement.style.setProperty(n, v);
      },
      yx = (e, t) => {
        let r = t.config.target.objectId;
        document.documentElement.style.removeProperty(r);
      };
  });
  var gd = f((uo) => {
    "use strict";
    Object.defineProperty(uo, "__esModule", { value: !0 });
    Object.defineProperty(uo, "pluginMethodMap", {
      enumerable: !0,
      get: function () {
        return bx;
      },
    });
    var gn = (De(), Ye(Es)),
      mx = hn(sd()),
      _x = hn(cd()),
      Ix = hn(ld()),
      Tx = hn(dd());
    function pd(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (pd = function (n) {
        return n ? r : t;
      })(e);
    }
    function hn(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return { default: e };
      var r = pd(t);
      if (r && r.has(e)) return r.get(e);
      var n = { __proto__: null },
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(n, o, a)
            : (n[o] = e[o]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
    var bx = new Map([
      [gn.ActionTypeConsts.PLUGIN_LOTTIE, { ...mx }],
      [gn.ActionTypeConsts.PLUGIN_SPLINE, { ..._x }],
      [gn.ActionTypeConsts.PLUGIN_RIVE, { ...Ix }],
      [gn.ActionTypeConsts.PLUGIN_VARIABLE, { ...Tx }],
    ]);
  });
  var hd = {};
  Ne(hd, {
    clearPlugin: () => ho,
    createPluginInstance: () => wx,
    getPluginConfig: () => lo,
    getPluginDestination: () => po,
    getPluginDuration: () => Ax,
    getPluginOrigin: () => fo,
    isPluginType: () => _t,
    renderPlugin: () => go,
  });
  function _t(e) {
    return co.pluginMethodMap.has(e);
  }
  var co,
    It,
    lo,
    fo,
    Ax,
    po,
    wx,
    go,
    ho,
    vo = ve(() => {
      "use strict";
      fn();
      co = fe(gd());
      (It = (e) => (t) => {
        if (!Ke) return () => null;
        let r = co.pluginMethodMap.get(t);
        if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
        let n = r[e];
        if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
        return n;
      }),
        (lo = It("getPluginConfig")),
        (fo = It("getPluginOrigin")),
        (Ax = It("getPluginDuration")),
        (po = It("getPluginDestination")),
        (wx = It("createPluginInstance")),
        (go = It("renderPlugin")),
        (ho = It("clearPlugin"));
    });
  var Ed = f((qq, vd) => {
    function Sx(e, t) {
      return e == null || e !== e ? t : e;
    }
    vd.exports = Sx;
  });
  var md = f((kq, yd) => {
    function Ox(e, t, r, n) {
      var i = -1,
        o = e == null ? 0 : e.length;
      for (n && o && (r = e[++i]); ++i < o; ) r = t(r, e[i], i, e);
      return r;
    }
    yd.exports = Ox;
  });
  var Id = f((Gq, _d) => {
    function xx(e) {
      return function (t, r, n) {
        for (var i = -1, o = Object(t), a = n(t), u = a.length; u--; ) {
          var s = a[e ? u : ++i];
          if (r(o[s], s, o) === !1) break;
        }
        return t;
      };
    }
    _d.exports = xx;
  });
  var bd = f((Xq, Td) => {
    var Rx = Id(),
      Cx = Rx();
    Td.exports = Cx;
  });
  var Eo = f((Uq, Ad) => {
    var Lx = bd(),
      Px = fr();
    function Nx(e, t) {
      return e && Lx(e, t, Px);
    }
    Ad.exports = Nx;
  });
  var Sd = f((Vq, wd) => {
    var Dx = yt();
    function Mx(e, t) {
      return function (r, n) {
        if (r == null) return r;
        if (!Dx(r)) return e(r, n);
        for (
          var i = r.length, o = t ? i : -1, a = Object(r);
          (t ? o-- : ++o < i) && n(a[o], o, a) !== !1;

        );
        return r;
      };
    }
    wd.exports = Mx;
  });
  var yo = f((Wq, Od) => {
    var Fx = Eo(),
      qx = Sd(),
      kx = qx(Fx);
    Od.exports = kx;
  });
  var Rd = f((Bq, xd) => {
    function Gx(e, t, r, n, i) {
      return (
        i(e, function (o, a, u) {
          r = n ? ((n = !1), o) : t(r, o, a, u);
        }),
        r
      );
    }
    xd.exports = Gx;
  });
  var Ld = f((Hq, Cd) => {
    var Xx = md(),
      Ux = yo(),
      Vx = dt(),
      Wx = Rd(),
      Bx = be();
    function Hx(e, t, r) {
      var n = Bx(e) ? Xx : Wx,
        i = arguments.length < 3;
      return n(e, Vx(t, 4), r, i, Ux);
    }
    Cd.exports = Hx;
  });
  var Nd = f((zq, Pd) => {
    var zx = zi(),
      Kx = dt(),
      jx = Ki(),
      Yx = Math.max,
      Qx = Math.min;
    function $x(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = n - 1;
      return (
        r !== void 0 &&
          ((i = jx(r)), (i = r < 0 ? Yx(n + i, 0) : Qx(i, n - 1))),
        zx(e, Kx(t, 3), i, !0)
      );
    }
    Pd.exports = $x;
  });
  var Md = f((Kq, Dd) => {
    var Zx = Hi(),
      Jx = Nd(),
      eR = Zx(Jx);
    Dd.exports = eR;
  });
  function Fd(e, t) {
    return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
  }
  function tR(e, t) {
    if (Fd(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    let r = Object.keys(e),
      n = Object.keys(t);
    if (r.length !== n.length) return !1;
    for (let i = 0; i < r.length; i++)
      if (!Object.hasOwn(t, r[i]) || !Fd(e[r[i]], t[r[i]])) return !1;
    return !0;
  }
  var mo,
    qd = ve(() => {
      "use strict";
      mo = tR;
    });
  var tp = {};
  Ne(tp, {
    cleanupHTMLElement: () => ZR,
    clearAllStyles: () => $R,
    clearObjectCache: () => yR,
    getActionListProgress: () => eC,
    getAffectedElements: () => Ao,
    getComputedStyle: () => SR,
    getDestinationValues: () => NR,
    getElementId: () => TR,
    getInstanceId: () => _R,
    getInstanceOrigin: () => RR,
    getItemConfigByKey: () => PR,
    getMaxDurationItemIndex: () => ep,
    getNamespacedParameterId: () => nC,
    getRenderType: () => $d,
    getStyleProp: () => DR,
    mediaQueriesEqual: () => oC,
    observeStore: () => wR,
    reduceListToGroup: () => tC,
    reifyState: () => bR,
    renderHTMLElement: () => MR,
    shallowEqual: () => mo,
    shouldAllowMediaQuery: () => iC,
    shouldNamespaceEventParameter: () => rC,
    stringifyTarget: () => aC,
  });
  function yR() {
    vn.clear();
  }
  function _R() {
    return "i" + mR++;
  }
  function TR(e, t) {
    for (let r in e) {
      let n = e[r];
      if (n && n.ref === t) return n.id;
    }
    return "e" + IR++;
  }
  function bR({ events: e, actionLists: t, site: r } = {}) {
    let n = (0, _n.default)(
        e,
        (a, u) => {
          let { eventTypeId: s } = u;
          return a[s] || (a[s] = {}), (a[s][u.id] = u), a;
        },
        {}
      ),
      i = r && r.mediaQueries,
      o = [];
    return (
      i
        ? (o = i.map((a) => a.key))
        : ((i = []), console.warn("IX2 missing mediaQueries in site data")),
      {
        ixData: {
          events: e,
          actionLists: t,
          eventTypeMap: n,
          mediaQueries: i,
          mediaQueryKeys: o,
        },
      }
    );
  }
  function wR({ store: e, select: t, onChange: r, comparator: n = AR }) {
    let { getState: i, subscribe: o } = e,
      a = o(s),
      u = t(i());
    function s() {
      let l = t(i());
      if (l == null) {
        a();
        return;
      }
      n(l, u) || ((u = l), r(u, e));
    }
    return a;
  }
  function Xd(e) {
    let t = typeof e;
    if (t === "string") return { id: e };
    if (e != null && t === "object") {
      let {
        id: r,
        objectId: n,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: u,
      } = e;
      return {
        id: r,
        objectId: n,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: u,
      };
    }
    return {};
  }
  function Ao({
    config: e,
    event: t,
    eventTarget: r,
    elementRoot: n,
    elementApi: i,
  }) {
    if (!i) throw new Error("IX2 missing elementApi");
    let { targets: o } = e;
    if (Array.isArray(o) && o.length > 0)
      return o.reduce(
        (q, w) =>
          q.concat(
            Ao({
              config: { target: w },
              event: t,
              eventTarget: r,
              elementRoot: n,
              elementApi: i,
            })
          ),
        []
      );
    let {
        getValidDocument: a,
        getQuerySelector: u,
        queryDocument: s,
        getChildElements: l,
        getSiblingElements: m,
        matchSelector: v,
        elementContains: p,
        isSiblingNode: E,
      } = i,
      { target: T } = e;
    if (!T) return [];
    let {
      id: I,
      objectId: S,
      selector: b,
      selectorGuids: R,
      appliesTo: O,
      useEventTarget: L,
    } = Xd(T);
    if (S) return [vn.has(S) ? vn.get(S) : vn.set(S, {}).get(S)];
    if (O === Ei.PAGE) {
      let q = a(I);
      return q ? [q] : [];
    }
    let C = (t?.action?.config?.affectedElements ?? {})[I || b] || {},
      W = !!(C.id || C.selector),
      H,
      z,
      Q,
      ee = t && u(Xd(t.target));
    if (
      (W
        ? ((H = C.limitAffectedElements), (z = ee), (Q = u(C)))
        : (z = Q = u({ id: I, selector: b, selectorGuids: R })),
      t && L)
    ) {
      let q = r && (Q || L === !0) ? [r] : s(ee);
      if (Q) {
        if (L === hR) return s(Q).filter((w) => q.some((M) => p(w, M)));
        if (L === kd) return s(Q).filter((w) => q.some((M) => p(M, w)));
        if (L === Gd) return s(Q).filter((w) => q.some((M) => E(M, w)));
      }
      return q;
    }
    return z == null || Q == null
      ? []
      : Ke && n
      ? s(Q).filter((q) => n.contains(q))
      : H === kd
      ? s(z, Q)
      : H === gR
      ? l(s(z)).filter(v(Q))
      : H === Gd
      ? m(s(z)).filter(v(Q))
      : s(Q);
  }
  function SR({ element: e, actionItem: t }) {
    if (!Ke) return {};
    let { actionTypeId: r } = t;
    switch (r) {
      case Bt:
      case Ht:
      case zt:
      case Kt:
      case Tn:
        return window.getComputedStyle(e);
      default:
        return {};
    }
  }
  function RR(e, t = {}, r = {}, n, i) {
    let { getStyle: o } = i,
      { actionTypeId: a } = n;
    if (_t(a)) return fo(a)(t[a], n);
    switch (n.actionTypeId) {
      case Ut:
      case Vt:
      case Wt:
      case Ir:
        return t[n.actionTypeId] || wo[n.actionTypeId];
      case Tr:
        return OR(t[n.actionTypeId], n.config.filters);
      case br:
        return xR(t[n.actionTypeId], n.config.fontVariations);
      case jd:
        return { value: (0, at.default)(parseFloat(o(e, yn)), 1) };
      case Bt: {
        let u = o(e, et),
          s = o(e, tt),
          l,
          m;
        return (
          n.config.widthUnit === gt
            ? (l = Ud.test(u) ? parseFloat(u) : parseFloat(r.width))
            : (l = (0, at.default)(parseFloat(u), parseFloat(r.width))),
          n.config.heightUnit === gt
            ? (m = Ud.test(s) ? parseFloat(s) : parseFloat(r.height))
            : (m = (0, at.default)(parseFloat(s), parseFloat(r.height))),
          { widthValue: l, heightValue: m }
        );
      }
      case Ht:
      case zt:
      case Kt:
        return jR({
          element: e,
          actionTypeId: n.actionTypeId,
          computedStyle: r,
          getStyle: o,
        });
      case Tn:
        return { value: (0, at.default)(o(e, mn), r.display) };
      case ER:
        return t[n.actionTypeId] || { value: 0 };
      default:
        return;
    }
  }
  function NR({ element: e, actionItem: t, elementApi: r }) {
    if (_t(t.actionTypeId)) return po(t.actionTypeId)(t.config);
    switch (t.actionTypeId) {
      case Ut:
      case Vt:
      case Wt:
      case Ir: {
        let { xValue: n, yValue: i, zValue: o } = t.config;
        return { xValue: n, yValue: i, zValue: o };
      }
      case Bt: {
        let { getStyle: n, setStyle: i, getProperty: o } = r,
          { widthUnit: a, heightUnit: u } = t.config,
          { widthValue: s, heightValue: l } = t.config;
        if (!Ke) return { widthValue: s, heightValue: l };
        if (a === gt) {
          let m = n(e, et);
          i(e, et, ""), (s = o(e, "offsetWidth")), i(e, et, m);
        }
        if (u === gt) {
          let m = n(e, tt);
          i(e, tt, ""), (l = o(e, "offsetHeight")), i(e, tt, m);
        }
        return { widthValue: s, heightValue: l };
      }
      case Ht:
      case zt:
      case Kt: {
        let {
          rValue: n,
          gValue: i,
          bValue: o,
          aValue: a,
          globalSwatchId: u,
        } = t.config;
        if (u && u.startsWith("--")) {
          let { getStyle: s } = r,
            l = s(e, u),
            m = (0, Bd.normalizeColor)(l);
          return {
            rValue: m.red,
            gValue: m.green,
            bValue: m.blue,
            aValue: m.alpha,
          };
        }
        return { rValue: n, gValue: i, bValue: o, aValue: a };
      }
      case Tr:
        return t.config.filters.reduce(CR, {});
      case br:
        return t.config.fontVariations.reduce(LR, {});
      default: {
        let { value: n } = t.config;
        return { value: n };
      }
    }
  }
  function $d(e) {
    if (/^TRANSFORM_/.test(e)) return zd;
    if (/^STYLE_/.test(e)) return To;
    if (/^GENERAL_/.test(e)) return Io;
    if (/^PLUGIN_/.test(e)) return Kd;
  }
  function DR(e, t) {
    return e === To ? t.replace("STYLE_", "").toLowerCase() : null;
  }
  function MR(e, t, r, n, i, o, a, u, s) {
    switch (u) {
      case zd:
        return XR(e, t, r, i, a);
      case To:
        return YR(e, t, r, i, o, a);
      case Io:
        return QR(e, i, a);
      case Kd: {
        let { actionTypeId: l } = i;
        if (_t(l)) return go(l)(s, t, i);
      }
    }
  }
  function XR(e, t, r, n, i) {
    let o = GR.map((u) => {
        let s = wo[u],
          {
            xValue: l = s.xValue,
            yValue: m = s.yValue,
            zValue: v = s.zValue,
            xUnit: p = "",
            yUnit: E = "",
            zUnit: T = "",
          } = t[u] || {};
        switch (u) {
          case Ut:
            return `${iR}(${l}${p}, ${m}${E}, ${v}${T})`;
          case Vt:
            return `${oR}(${l}${p}, ${m}${E}, ${v}${T})`;
          case Wt:
            return `${aR}(${l}${p}) ${sR}(${m}${E}) ${uR}(${v}${T})`;
          case Ir:
            return `${cR}(${l}${p}, ${m}${E})`;
          default:
            return "";
        }
      }).join(" "),
      { setStyle: a } = i;
    Tt(e, pt, i), a(e, pt, o), WR(n, r) && a(e, ln, lR);
  }
  function UR(e, t, r, n) {
    let i = (0, _n.default)(t, (a, u, s) => `${a} ${s}(${u}${kR(s, r)})`, ""),
      { setStyle: o } = n;
    Tt(e, yr, n), o(e, yr, i);
  }
  function VR(e, t, r, n) {
    let i = (0, _n.default)(
        t,
        (a, u, s) => (a.push(`"${s}" ${u}`), a),
        []
      ).join(", "),
      { setStyle: o } = n;
    Tt(e, mr, n), o(e, mr, i);
  }
  function WR({ actionTypeId: e }, { xValue: t, yValue: r, zValue: n }) {
    return (
      (e === Ut && n !== void 0) ||
      (e === Vt && n !== void 0) ||
      (e === Wt && (t !== void 0 || r !== void 0))
    );
  }
  function KR(e, t) {
    let r = e.exec(t);
    return r ? r[1] : "";
  }
  function jR({ element: e, actionTypeId: t, computedStyle: r, getStyle: n }) {
    let i = bo[t],
      o = n(e, i),
      a = HR.test(o) ? o : r[i],
      u = KR(zR, a).split(_r);
    return {
      rValue: (0, at.default)(parseInt(u[0], 10), 255),
      gValue: (0, at.default)(parseInt(u[1], 10), 255),
      bValue: (0, at.default)(parseInt(u[2], 10), 255),
      aValue: (0, at.default)(parseFloat(u[3]), 1),
    };
  }
  function YR(e, t, r, n, i, o) {
    let { setStyle: a } = o;
    switch (n.actionTypeId) {
      case Bt: {
        let { widthUnit: u = "", heightUnit: s = "" } = n.config,
          { widthValue: l, heightValue: m } = r;
        l !== void 0 && (u === gt && (u = "px"), Tt(e, et, o), a(e, et, l + u)),
          m !== void 0 &&
            (s === gt && (s = "px"), Tt(e, tt, o), a(e, tt, m + s));
        break;
      }
      case Tr: {
        UR(e, r, n.config, o);
        break;
      }
      case br: {
        VR(e, r, n.config, o);
        break;
      }
      case Ht:
      case zt:
      case Kt: {
        let u = bo[n.actionTypeId],
          s = Math.round(r.rValue),
          l = Math.round(r.gValue),
          m = Math.round(r.bValue),
          v = r.aValue;
        Tt(e, u, o),
          a(e, u, v >= 1 ? `rgb(${s},${l},${m})` : `rgba(${s},${l},${m},${v})`);
        break;
      }
      default: {
        let { unit: u = "" } = n.config;
        Tt(e, i, o), a(e, i, r.value + u);
        break;
      }
    }
  }
  function QR(e, t, r) {
    let { setStyle: n } = r;
    switch (t.actionTypeId) {
      case Tn: {
        let { value: i } = t.config;
        i === fR && Ke ? n(e, mn, Yi) : n(e, mn, i);
        return;
      }
    }
  }
  function Tt(e, t, r) {
    if (!Ke) return;
    let n = Qd[t];
    if (!n) return;
    let { getStyle: i, setStyle: o } = r,
      a = i(e, Xt);
    if (!a) {
      o(e, Xt, n);
      return;
    }
    let u = a.split(_r).map(Yd);
    u.indexOf(n) === -1 && o(e, Xt, u.concat(n).join(_r));
  }
  function Zd(e, t, r) {
    if (!Ke) return;
    let n = Qd[t];
    if (!n) return;
    let { getStyle: i, setStyle: o } = r,
      a = i(e, Xt);
    !a ||
      a.indexOf(n) === -1 ||
      o(
        e,
        Xt,
        a
          .split(_r)
          .map(Yd)
          .filter((u) => u !== n)
          .join(_r)
      );
  }
  function $R({ store: e, elementApi: t }) {
    let { ixData: r } = e.getState(),
      { events: n = {}, actionLists: i = {} } = r;
    Object.keys(n).forEach((o) => {
      let a = n[o],
        { config: u } = a.action,
        { actionListId: s } = u,
        l = i[s];
      l && Vd({ actionList: l, event: a, elementApi: t });
    }),
      Object.keys(i).forEach((o) => {
        Vd({ actionList: i[o], elementApi: t });
      });
  }
  function Vd({ actionList: e = {}, event: t, elementApi: r }) {
    let { actionItemGroups: n, continuousParameterGroups: i } = e;
    n &&
      n.forEach((o) => {
        Wd({ actionGroup: o, event: t, elementApi: r });
      }),
      i &&
        i.forEach((o) => {
          let { continuousActionGroups: a } = o;
          a.forEach((u) => {
            Wd({ actionGroup: u, event: t, elementApi: r });
          });
        });
  }
  function Wd({ actionGroup: e, event: t, elementApi: r }) {
    let { actionItems: n } = e;
    n.forEach((i) => {
      let { actionTypeId: o, config: a } = i,
        u;
      _t(o)
        ? (u = (s) => ho(o)(s, i))
        : (u = Jd({ effect: JR, actionTypeId: o, elementApi: r })),
        Ao({ config: a, event: t, elementApi: r }).forEach(u);
    });
  }
  function ZR(e, t, r) {
    let { setStyle: n, getStyle: i } = r,
      { actionTypeId: o } = t;
    if (o === Bt) {
      let { config: a } = t;
      a.widthUnit === gt && n(e, et, ""), a.heightUnit === gt && n(e, tt, "");
    }
    i(e, Xt) && Jd({ effect: Zd, actionTypeId: o, elementApi: r })(e);
  }
  function JR(e, t, r) {
    let { setStyle: n } = r;
    Zd(e, t, r), n(e, t, ""), t === pt && n(e, ln, "");
  }
  function ep(e) {
    let t = 0,
      r = 0;
    return (
      e.forEach((n, i) => {
        let { config: o } = n,
          a = o.delay + o.duration;
        a >= t && ((t = a), (r = i));
      }),
      r
    );
  }
  function eC(e, t) {
    let { actionItemGroups: r, useFirstGroupAsInitialState: n } = e,
      { actionItem: i, verboseTimeElapsed: o = 0 } = t,
      a = 0,
      u = 0;
    return (
      r.forEach((s, l) => {
        if (n && l === 0) return;
        let { actionItems: m } = s,
          v = m[ep(m)],
          { config: p, actionTypeId: E } = v;
        i.id === v.id && (u = a + o);
        let T = $d(E) === Io ? 0 : p.duration;
        a += p.delay + T;
      }),
      a > 0 ? Er(u / a) : 0
    );
  }
  function tC({ actionList: e, actionItemId: t, rawData: r }) {
    let { actionItemGroups: n, continuousParameterGroups: i } = e,
      o = [],
      a = (u) => (
        o.push((0, In.mergeIn)(u, ["config"], { delay: 0, duration: 0 })),
        u.id === t
      );
    return (
      n && n.some(({ actionItems: u }) => u.some(a)),
      i &&
        i.some((u) => {
          let { continuousActionGroups: s } = u;
          return s.some(({ actionItems: l }) => l.some(a));
        }),
      (0, In.setIn)(r, ["actionLists"], {
        [e.id]: { id: e.id, actionItemGroups: [{ actionItems: o }] },
      })
    );
  }
  function rC(e, { basedOn: t }) {
    return (
      (e === ze.SCROLLING_IN_VIEW && (t === Ze.ELEMENT || t == null)) ||
      (e === ze.MOUSE_MOVE && t === Ze.ELEMENT)
    );
  }
  function nC(e, t) {
    return e + vR + t;
  }
  function iC(e, t) {
    return t == null ? !0 : e.indexOf(t) !== -1;
  }
  function oC(e, t) {
    return mo(e && e.sort(), t && t.sort());
  }
  function aC(e) {
    if (typeof e == "string") return e;
    if (e.pluginElement && e.objectId) return e.pluginElement + _o + e.objectId;
    if (e.objectId) return e.objectId;
    let { id: t = "", selector: r = "", useEventTarget: n = "" } = e;
    return t + _o + r + _o + n;
  }
  var at,
    _n,
    En,
    In,
    Bd,
    rR,
    nR,
    iR,
    oR,
    aR,
    sR,
    uR,
    cR,
    lR,
    fR,
    yn,
    yr,
    mr,
    et,
    tt,
    Hd,
    dR,
    pR,
    kd,
    gR,
    Gd,
    hR,
    mn,
    Xt,
    gt,
    _r,
    vR,
    _o,
    zd,
    Io,
    To,
    Kd,
    Ut,
    Vt,
    Wt,
    Ir,
    jd,
    Tr,
    br,
    Bt,
    Ht,
    zt,
    Kt,
    Tn,
    ER,
    Yd,
    bo,
    Qd,
    vn,
    mR,
    IR,
    AR,
    Ud,
    OR,
    xR,
    CR,
    LR,
    PR,
    wo,
    FR,
    qR,
    kR,
    GR,
    BR,
    HR,
    zR,
    Jd,
    rp = ve(() => {
      "use strict";
      (at = fe(Ed())), (_n = fe(Ld())), (En = fe(Md())), (In = fe(Ct()));
      De();
      qd();
      Zi();
      Bd = fe(ao());
      vo();
      fn();
      ({
        BACKGROUND: rR,
        TRANSFORM: nR,
        TRANSLATE_3D: iR,
        SCALE_3D: oR,
        ROTATE_X: aR,
        ROTATE_Y: sR,
        ROTATE_Z: uR,
        SKEW: cR,
        PRESERVE_3D: lR,
        FLEX: fR,
        OPACITY: yn,
        FILTER: yr,
        FONT_VARIATION_SETTINGS: mr,
        WIDTH: et,
        HEIGHT: tt,
        BACKGROUND_COLOR: Hd,
        BORDER_COLOR: dR,
        COLOR: pR,
        CHILDREN: kd,
        IMMEDIATE_CHILDREN: gR,
        SIBLINGS: Gd,
        PARENT: hR,
        DISPLAY: mn,
        WILL_CHANGE: Xt,
        AUTO: gt,
        COMMA_DELIMITER: _r,
        COLON_DELIMITER: vR,
        BAR_DELIMITER: _o,
        RENDER_TRANSFORM: zd,
        RENDER_GENERAL: Io,
        RENDER_STYLE: To,
        RENDER_PLUGIN: Kd,
      } = we),
        ({
          TRANSFORM_MOVE: Ut,
          TRANSFORM_SCALE: Vt,
          TRANSFORM_ROTATE: Wt,
          TRANSFORM_SKEW: Ir,
          STYLE_OPACITY: jd,
          STYLE_FILTER: Tr,
          STYLE_FONT_VARIATION: br,
          STYLE_SIZE: Bt,
          STYLE_BACKGROUND_COLOR: Ht,
          STYLE_BORDER: zt,
          STYLE_TEXT_COLOR: Kt,
          GENERAL_DISPLAY: Tn,
          OBJECT_VALUE: ER,
        } = Re),
        (Yd = (e) => e.trim()),
        (bo = Object.freeze({ [Ht]: Hd, [zt]: dR, [Kt]: pR })),
        (Qd = Object.freeze({
          [pt]: nR,
          [Hd]: rR,
          [yn]: yn,
          [yr]: yr,
          [et]: et,
          [tt]: tt,
          [mr]: mr,
        })),
        (vn = new Map());
      mR = 1;
      IR = 1;
      AR = (e, t) => e === t;
      (Ud = /px/),
        (OR = (e, t) =>
          t.reduce(
            (r, n) => (r[n.type] == null && (r[n.type] = FR[n.type]), r),
            e || {}
          )),
        (xR = (e, t) =>
          t.reduce(
            (r, n) => (
              r[n.type] == null &&
                (r[n.type] = qR[n.type] || n.defaultValue || 0),
              r
            ),
            e || {}
          ));
      (CR = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (LR = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (PR = (e, t, r) => {
          if (_t(e)) return lo(e)(r, t);
          switch (e) {
            case Tr: {
              let n = (0, En.default)(r.filters, ({ type: i }) => i === t);
              return n ? n.value : 0;
            }
            case br: {
              let n = (0, En.default)(
                r.fontVariations,
                ({ type: i }) => i === t
              );
              return n ? n.value : 0;
            }
            default:
              return r[t];
          }
        });
      (wo = {
        [Ut]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [Vt]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
        [Wt]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [Ir]: Object.freeze({ xValue: 0, yValue: 0 }),
      }),
        (FR = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        })),
        (qR = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 })),
        (kR = (e, t) => {
          let r = (0, En.default)(t.filters, ({ type: n }) => n === e);
          if (r && r.unit) return r.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        }),
        (GR = Object.keys(wo));
      (BR = "\\(([^)]+)\\)"), (HR = /^rgb/), (zR = RegExp(`rgba?${BR}`));
      Jd =
        ({ effect: e, actionTypeId: t, elementApi: r }) =>
        (n) => {
          switch (t) {
            case Ut:
            case Vt:
            case Wt:
            case Ir:
              e(n, pt, r);
              break;
            case Tr:
              e(n, yr, r);
              break;
            case br:
              e(n, mr, r);
              break;
            case jd:
              e(n, yn, r);
              break;
            case Bt:
              e(n, et, r), e(n, tt, r);
              break;
            case Ht:
            case zt:
            case Kt:
              e(n, bo[t], r);
              break;
            case Tn:
              e(n, mn, r);
              break;
          }
        };
    });
  var bt = f((So) => {
    "use strict";
    Object.defineProperty(So, "__esModule", { value: !0 });
    function sC(e, t) {
      for (var r in t)
        Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }
    sC(So, {
      IX2BrowserSupport: function () {
        return uC;
      },
      IX2EasingUtils: function () {
        return lC;
      },
      IX2Easings: function () {
        return cC;
      },
      IX2ElementsReducer: function () {
        return fC;
      },
      IX2VanillaPlugins: function () {
        return dC;
      },
      IX2VanillaUtils: function () {
        return pC;
      },
    });
    var uC = jt((fn(), Ye(Yf))),
      cC = jt(($i(), Ye(vr))),
      lC = jt((Zi(), Ye(rd))),
      fC = jt((ad(), Ye(od))),
      dC = jt((vo(), Ye(hd))),
      pC = jt((rp(), Ye(tp)));
    function np(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (np = function (n) {
        return n ? r : t;
      })(e);
    }
    function jt(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return { default: e };
      var r = np(t);
      if (r && r.has(e)) return r.get(e);
      var n = { __proto__: null },
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(n, o, a)
            : (n[o] = e[o]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
  });
  var An,
    st,
    gC,
    hC,
    vC,
    EC,
    yC,
    mC,
    bn,
    ip,
    _C,
    IC,
    Oo,
    TC,
    bC,
    AC,
    wC,
    op,
    ap = ve(() => {
      "use strict";
      De();
      (An = fe(bt())),
        (st = fe(Ct())),
        ({
          IX2_RAW_DATA_IMPORTED: gC,
          IX2_SESSION_STOPPED: hC,
          IX2_INSTANCE_ADDED: vC,
          IX2_INSTANCE_STARTED: EC,
          IX2_INSTANCE_REMOVED: yC,
          IX2_ANIMATION_FRAME_CHANGED: mC,
        } = Te),
        ({
          optimizeFloat: bn,
          applyEasing: ip,
          createBezierEasing: _C,
        } = An.IX2EasingUtils),
        ({ RENDER_GENERAL: IC } = we),
        ({
          getItemConfigByKey: Oo,
          getRenderType: TC,
          getStyleProp: bC,
        } = An.IX2VanillaUtils),
        (AC = (e, t) => {
          let {
              position: r,
              parameterId: n,
              actionGroups: i,
              destinationKeys: o,
              smoothing: a,
              restingValue: u,
              actionTypeId: s,
              customEasingFn: l,
              skipMotion: m,
              skipToValue: v,
            } = e,
            { parameters: p } = t.payload,
            E = Math.max(1 - a, 0.01),
            T = p[n];
          T == null && ((E = 1), (T = u));
          let I = Math.max(T, 0) || 0,
            S = bn(I - r),
            b = m ? v : bn(r + S * E),
            R = b * 100;
          if (b === r && e.current) return e;
          let O, L, D, C;
          for (let H = 0, { length: z } = i; H < z; H++) {
            let { keyframe: Q, actionItems: ee } = i[H];
            if ((H === 0 && (O = ee[0]), R >= Q)) {
              O = ee[0];
              let q = i[H + 1],
                w = q && R !== Q;
              (L = w ? q.actionItems[0] : null),
                w && ((D = Q / 100), (C = (q.keyframe - Q) / 100));
            }
          }
          let W = {};
          if (O && !L)
            for (let H = 0, { length: z } = o; H < z; H++) {
              let Q = o[H];
              W[Q] = Oo(s, Q, O.config);
            }
          else if (O && L && D !== void 0 && C !== void 0) {
            let H = (b - D) / C,
              z = O.config.easing,
              Q = ip(z, H, l);
            for (let ee = 0, { length: q } = o; ee < q; ee++) {
              let w = o[ee],
                M = Oo(s, w, O.config),
                te = (Oo(s, w, L.config) - M) * Q + M;
              W[w] = te;
            }
          }
          return (0, st.merge)(e, { position: b, current: W });
        }),
        (wC = (e, t) => {
          let {
              active: r,
              origin: n,
              start: i,
              immediate: o,
              renderType: a,
              verbose: u,
              actionItem: s,
              destination: l,
              destinationKeys: m,
              pluginDuration: v,
              instanceDelay: p,
              customEasingFn: E,
              skipMotion: T,
            } = e,
            I = s.config.easing,
            { duration: S, delay: b } = s.config;
          v != null && (S = v),
            (b = p ?? b),
            a === IC ? (S = 0) : (o || T) && (S = b = 0);
          let { now: R } = t.payload;
          if (r && n) {
            let O = R - (i + b);
            if (u) {
              let H = R - i,
                z = S + b,
                Q = bn(Math.min(Math.max(0, H / z), 1));
              e = (0, st.set)(e, "verboseTimeElapsed", z * Q);
            }
            if (O < 0) return e;
            let L = bn(Math.min(Math.max(0, O / S), 1)),
              D = ip(I, L, E),
              C = {},
              W = null;
            return (
              m.length &&
                (W = m.reduce((H, z) => {
                  let Q = l[z],
                    ee = parseFloat(n[z]) || 0,
                    w = (parseFloat(Q) - ee) * D + ee;
                  return (H[z] = w), H;
                }, {})),
              (C.current = W),
              (C.position = L),
              L === 1 && ((C.active = !1), (C.complete = !0)),
              (0, st.merge)(e, C)
            );
          }
          return e;
        }),
        (op = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case gC:
              return t.payload.ixInstances || Object.freeze({});
            case hC:
              return Object.freeze({});
            case vC: {
              let {
                  instanceId: r,
                  elementId: n,
                  actionItem: i,
                  eventId: o,
                  eventTarget: a,
                  eventStateKey: u,
                  actionListId: s,
                  groupIndex: l,
                  isCarrier: m,
                  origin: v,
                  destination: p,
                  immediate: E,
                  verbose: T,
                  continuous: I,
                  parameterId: S,
                  actionGroups: b,
                  smoothing: R,
                  restingValue: O,
                  pluginInstance: L,
                  pluginDuration: D,
                  instanceDelay: C,
                  skipMotion: W,
                  skipToValue: H,
                } = t.payload,
                { actionTypeId: z } = i,
                Q = TC(z),
                ee = bC(Q, z),
                q = Object.keys(p).filter(
                  (M) => p[M] != null && typeof p[M] != "string"
                ),
                { easing: w } = i.config;
              return (0, st.set)(e, r, {
                id: r,
                elementId: n,
                active: !1,
                position: 0,
                start: 0,
                origin: v,
                destination: p,
                destinationKeys: q,
                immediate: E,
                verbose: T,
                current: null,
                actionItem: i,
                actionTypeId: z,
                eventId: o,
                eventTarget: a,
                eventStateKey: u,
                actionListId: s,
                groupIndex: l,
                renderType: Q,
                isCarrier: m,
                styleProp: ee,
                continuous: I,
                parameterId: S,
                actionGroups: b,
                smoothing: R,
                restingValue: O,
                pluginInstance: L,
                pluginDuration: D,
                instanceDelay: C,
                skipMotion: W,
                skipToValue: H,
                customEasingFn:
                  Array.isArray(w) && w.length === 4 ? _C(w) : void 0,
              });
            }
            case EC: {
              let { instanceId: r, time: n } = t.payload;
              return (0, st.mergeIn)(e, [r], {
                active: !0,
                complete: !1,
                start: n,
              });
            }
            case yC: {
              let { instanceId: r } = t.payload;
              if (!e[r]) return e;
              let n = {},
                i = Object.keys(e),
                { length: o } = i;
              for (let a = 0; a < o; a++) {
                let u = i[a];
                u !== r && (n[u] = e[u]);
              }
              return n;
            }
            case mC: {
              let r = e,
                n = Object.keys(e),
                { length: i } = n;
              for (let o = 0; o < i; o++) {
                let a = n[o],
                  u = e[a],
                  s = u.continuous ? AC : wC;
                r = (0, st.set)(r, a, s(u, t));
              }
              return r;
            }
            default:
              return e;
          }
        });
    });
  var SC,
    OC,
    xC,
    sp,
    up = ve(() => {
      "use strict";
      De();
      ({
        IX2_RAW_DATA_IMPORTED: SC,
        IX2_SESSION_STOPPED: OC,
        IX2_PARAMETER_CHANGED: xC,
      } = Te),
        (sp = (e = {}, t) => {
          switch (t.type) {
            case SC:
              return t.payload.ixParameters || {};
            case OC:
              return {};
            case xC: {
              let { key: r, value: n } = t.payload;
              return (e[r] = n), e;
            }
            default:
              return e;
          }
        });
    });
  var fp = {};
  Ne(fp, { default: () => CC });
  var cp,
    lp,
    RC,
    CC,
    dp = ve(() => {
      "use strict";
      cp = fe(vi());
      ms();
      Xs();
      Ws();
      lp = fe(bt());
      ap();
      up();
      ({ ixElements: RC } = lp.IX2ElementsReducer),
        (CC = (0, cp.combineReducers)({
          ixData: ys,
          ixRequest: Gs,
          ixSession: Vs,
          ixElements: RC,
          ixInstances: op,
          ixParameters: sp,
        }));
    });
  var gp = f((fk, pp) => {
    var LC = lt(),
      PC = be(),
      NC = it(),
      DC = "[object String]";
    function MC(e) {
      return typeof e == "string" || (!PC(e) && NC(e) && LC(e) == DC);
    }
    pp.exports = MC;
  });
  var vp = f((dk, hp) => {
    var FC = Bi(),
      qC = FC("length");
    hp.exports = qC;
  });
  var yp = f((pk, Ep) => {
    var kC = "\\ud800-\\udfff",
      GC = "\\u0300-\\u036f",
      XC = "\\ufe20-\\ufe2f",
      UC = "\\u20d0-\\u20ff",
      VC = GC + XC + UC,
      WC = "\\ufe0e\\ufe0f",
      BC = "\\u200d",
      HC = RegExp("[" + BC + kC + VC + WC + "]");
    function zC(e) {
      return HC.test(e);
    }
    Ep.exports = zC;
  });
  var Op = f((gk, Sp) => {
    var _p = "\\ud800-\\udfff",
      KC = "\\u0300-\\u036f",
      jC = "\\ufe20-\\ufe2f",
      YC = "\\u20d0-\\u20ff",
      QC = KC + jC + YC,
      $C = "\\ufe0e\\ufe0f",
      ZC = "[" + _p + "]",
      xo = "[" + QC + "]",
      Ro = "\\ud83c[\\udffb-\\udfff]",
      JC = "(?:" + xo + "|" + Ro + ")",
      Ip = "[^" + _p + "]",
      Tp = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      bp = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      eL = "\\u200d",
      Ap = JC + "?",
      wp = "[" + $C + "]?",
      tL = "(?:" + eL + "(?:" + [Ip, Tp, bp].join("|") + ")" + wp + Ap + ")*",
      rL = wp + Ap + tL,
      nL = "(?:" + [Ip + xo + "?", xo, Tp, bp, ZC].join("|") + ")",
      mp = RegExp(Ro + "(?=" + Ro + ")|" + nL + rL, "g");
    function iL(e) {
      for (var t = (mp.lastIndex = 0); mp.test(e); ) ++t;
      return t;
    }
    Sp.exports = iL;
  });
  var Rp = f((hk, xp) => {
    var oL = vp(),
      aL = yp(),
      sL = Op();
    function uL(e) {
      return aL(e) ? sL(e) : oL(e);
    }
    xp.exports = uL;
  });
  var Lp = f((vk, Cp) => {
    var cL = en(),
      lL = tn(),
      fL = yt(),
      dL = gp(),
      pL = Rp(),
      gL = "[object Map]",
      hL = "[object Set]";
    function vL(e) {
      if (e == null) return 0;
      if (fL(e)) return dL(e) ? pL(e) : e.length;
      var t = lL(e);
      return t == gL || t == hL ? e.size : cL(e).length;
    }
    Cp.exports = vL;
  });
  var Np = f((Ek, Pp) => {
    var EL = "Expected a function";
    function yL(e) {
      if (typeof e != "function") throw new TypeError(EL);
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    }
    Pp.exports = yL;
  });
  var Co = f((yk, Dp) => {
    var mL = ft(),
      _L = (function () {
        try {
          var e = mL(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch {}
      })();
    Dp.exports = _L;
  });
  var Lo = f((mk, Fp) => {
    var Mp = Co();
    function IL(e, t, r) {
      t == "__proto__" && Mp
        ? Mp(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (e[t] = r);
    }
    Fp.exports = IL;
  });
  var kp = f((_k, qp) => {
    var TL = Lo(),
      bL = Br(),
      AL = Object.prototype,
      wL = AL.hasOwnProperty;
    function SL(e, t, r) {
      var n = e[t];
      (!(wL.call(e, t) && bL(n, r)) || (r === void 0 && !(t in e))) &&
        TL(e, t, r);
    }
    qp.exports = SL;
  });
  var Up = f((Ik, Xp) => {
    var OL = kp(),
      xL = pr(),
      RL = Qr(),
      Gp = Je(),
      CL = kt();
    function LL(e, t, r, n) {
      if (!Gp(e)) return e;
      t = xL(t, e);
      for (var i = -1, o = t.length, a = o - 1, u = e; u != null && ++i < o; ) {
        var s = CL(t[i]),
          l = r;
        if (s === "__proto__" || s === "constructor" || s === "prototype")
          return e;
        if (i != a) {
          var m = u[s];
          (l = n ? n(m, s, u) : void 0),
            l === void 0 && (l = Gp(m) ? m : RL(t[i + 1]) ? [] : {});
        }
        OL(u, s, l), (u = u[s]);
      }
      return e;
    }
    Xp.exports = LL;
  });
  var Wp = f((Tk, Vp) => {
    var PL = on(),
      NL = Up(),
      DL = pr();
    function ML(e, t, r) {
      for (var n = -1, i = t.length, o = {}; ++n < i; ) {
        var a = t[n],
          u = PL(e, a);
        r(u, a) && NL(o, DL(a, e), u);
      }
      return o;
    }
    Vp.exports = ML;
  });
  var Hp = f((bk, Bp) => {
    var FL = jr(),
      qL = ni(),
      kL = Ri(),
      GL = xi(),
      XL = Object.getOwnPropertySymbols,
      UL = XL
        ? function (e) {
            for (var t = []; e; ) FL(t, kL(e)), (e = qL(e));
            return t;
          }
        : GL;
    Bp.exports = UL;
  });
  var Kp = f((Ak, zp) => {
    function VL(e) {
      var t = [];
      if (e != null) for (var r in Object(e)) t.push(r);
      return t;
    }
    zp.exports = VL;
  });
  var Yp = f((wk, jp) => {
    var WL = Je(),
      BL = Jr(),
      HL = Kp(),
      zL = Object.prototype,
      KL = zL.hasOwnProperty;
    function jL(e) {
      if (!WL(e)) return HL(e);
      var t = BL(e),
        r = [];
      for (var n in e)
        (n == "constructor" && (t || !KL.call(e, n))) || r.push(n);
      return r;
    }
    jp.exports = jL;
  });
  var $p = f((Sk, Qp) => {
    var YL = Li(),
      QL = Yp(),
      $L = yt();
    function ZL(e) {
      return $L(e) ? YL(e, !0) : QL(e);
    }
    Qp.exports = ZL;
  });
  var Jp = f((Ok, Zp) => {
    var JL = Oi(),
      eP = Hp(),
      tP = $p();
    function rP(e) {
      return JL(e, tP, eP);
    }
    Zp.exports = rP;
  });
  var tg = f((xk, eg) => {
    var nP = Wi(),
      iP = dt(),
      oP = Wp(),
      aP = Jp();
    function sP(e, t) {
      if (e == null) return {};
      var r = nP(aP(e), function (n) {
        return [n];
      });
      return (
        (t = iP(t)),
        oP(e, r, function (n, i) {
          return t(n, i[0]);
        })
      );
    }
    eg.exports = sP;
  });
  var ng = f((Rk, rg) => {
    var uP = dt(),
      cP = Np(),
      lP = tg();
    function fP(e, t) {
      return lP(e, cP(uP(t)));
    }
    rg.exports = fP;
  });
  var og = f((Ck, ig) => {
    var dP = en(),
      pP = tn(),
      gP = sr(),
      hP = be(),
      vP = yt(),
      EP = Yr(),
      yP = Jr(),
      mP = Zr(),
      _P = "[object Map]",
      IP = "[object Set]",
      TP = Object.prototype,
      bP = TP.hasOwnProperty;
    function AP(e) {
      if (e == null) return !0;
      if (
        vP(e) &&
        (hP(e) ||
          typeof e == "string" ||
          typeof e.splice == "function" ||
          EP(e) ||
          mP(e) ||
          gP(e))
      )
        return !e.length;
      var t = pP(e);
      if (t == _P || t == IP) return !e.size;
      if (yP(e)) return !dP(e).length;
      for (var r in e) if (bP.call(e, r)) return !1;
      return !0;
    }
    ig.exports = AP;
  });
  var sg = f((Lk, ag) => {
    var wP = Lo(),
      SP = Eo(),
      OP = dt();
    function xP(e, t) {
      var r = {};
      return (
        (t = OP(t, 3)),
        SP(e, function (n, i, o) {
          wP(r, i, t(n, i, o));
        }),
        r
      );
    }
    ag.exports = xP;
  });
  var cg = f((Pk, ug) => {
    function RP(e, t) {
      for (
        var r = -1, n = e == null ? 0 : e.length;
        ++r < n && t(e[r], r, e) !== !1;

      );
      return e;
    }
    ug.exports = RP;
  });
  var fg = f((Nk, lg) => {
    var CP = sn();
    function LP(e) {
      return typeof e == "function" ? e : CP;
    }
    lg.exports = LP;
  });
  var pg = f((Dk, dg) => {
    var PP = cg(),
      NP = yo(),
      DP = fg(),
      MP = be();
    function FP(e, t) {
      var r = MP(e) ? PP : NP;
      return r(e, DP(t));
    }
    dg.exports = FP;
  });
  var hg = f((Mk, gg) => {
    var qP = He(),
      kP = function () {
        return qP.Date.now();
      };
    gg.exports = kP;
  });
  var yg = f((Fk, Eg) => {
    var GP = Je(),
      Po = hg(),
      vg = un(),
      XP = "Expected a function",
      UP = Math.max,
      VP = Math.min;
    function WP(e, t, r) {
      var n,
        i,
        o,
        a,
        u,
        s,
        l = 0,
        m = !1,
        v = !1,
        p = !0;
      if (typeof e != "function") throw new TypeError(XP);
      (t = vg(t) || 0),
        GP(r) &&
          ((m = !!r.leading),
          (v = "maxWait" in r),
          (o = v ? UP(vg(r.maxWait) || 0, t) : o),
          (p = "trailing" in r ? !!r.trailing : p));
      function E(C) {
        var W = n,
          H = i;
        return (n = i = void 0), (l = C), (a = e.apply(H, W)), a;
      }
      function T(C) {
        return (l = C), (u = setTimeout(b, t)), m ? E(C) : a;
      }
      function I(C) {
        var W = C - s,
          H = C - l,
          z = t - W;
        return v ? VP(z, o - H) : z;
      }
      function S(C) {
        var W = C - s,
          H = C - l;
        return s === void 0 || W >= t || W < 0 || (v && H >= o);
      }
      function b() {
        var C = Po();
        if (S(C)) return R(C);
        u = setTimeout(b, I(C));
      }
      function R(C) {
        return (u = void 0), p && n ? E(C) : ((n = i = void 0), a);
      }
      function O() {
        u !== void 0 && clearTimeout(u), (l = 0), (n = s = i = u = void 0);
      }
      function L() {
        return u === void 0 ? a : R(Po());
      }
      function D() {
        var C = Po(),
          W = S(C);
        if (((n = arguments), (i = this), (s = C), W)) {
          if (u === void 0) return T(s);
          if (v) return clearTimeout(u), (u = setTimeout(b, t)), E(s);
        }
        return u === void 0 && (u = setTimeout(b, t)), a;
      }
      return (D.cancel = O), (D.flush = L), D;
    }
    Eg.exports = WP;
  });
  var _g = f((qk, mg) => {
    var BP = yg(),
      HP = Je(),
      zP = "Expected a function";
    function KP(e, t, r) {
      var n = !0,
        i = !0;
      if (typeof e != "function") throw new TypeError(zP);
      return (
        HP(r) &&
          ((n = "leading" in r ? !!r.leading : n),
          (i = "trailing" in r ? !!r.trailing : i)),
        BP(e, t, { leading: n, maxWait: t, trailing: i })
      );
    }
    mg.exports = KP;
  });
  var Tg = {};
  Ne(Tg, {
    actionListPlaybackChanged: () => Qt,
    animationFrameChanged: () => Sn,
    clearRequested: () => yN,
    elementStateChanged: () => Xo,
    eventListenerAdded: () => wn,
    eventStateChanged: () => qo,
    instanceAdded: () => ko,
    instanceRemoved: () => Go,
    instanceStarted: () => On,
    mediaQueriesDefined: () => Vo,
    parameterChanged: () => Yt,
    playbackRequested: () => vN,
    previewRequested: () => hN,
    rawDataImported: () => No,
    sessionInitialized: () => Do,
    sessionStarted: () => Mo,
    sessionStopped: () => Fo,
    stopRequested: () => EN,
    testFrameRendered: () => mN,
    viewportWidthChanged: () => Uo,
  });
  var Ig,
    jP,
    YP,
    QP,
    $P,
    ZP,
    JP,
    eN,
    tN,
    rN,
    nN,
    iN,
    oN,
    aN,
    sN,
    uN,
    cN,
    lN,
    fN,
    dN,
    pN,
    gN,
    No,
    Do,
    Mo,
    Fo,
    hN,
    vN,
    EN,
    yN,
    wn,
    mN,
    qo,
    Sn,
    Yt,
    ko,
    On,
    Go,
    Xo,
    Qt,
    Uo,
    Vo,
    xn = ve(() => {
      "use strict";
      De();
      (Ig = fe(bt())),
        ({
          IX2_RAW_DATA_IMPORTED: jP,
          IX2_SESSION_INITIALIZED: YP,
          IX2_SESSION_STARTED: QP,
          IX2_SESSION_STOPPED: $P,
          IX2_PREVIEW_REQUESTED: ZP,
          IX2_PLAYBACK_REQUESTED: JP,
          IX2_STOP_REQUESTED: eN,
          IX2_CLEAR_REQUESTED: tN,
          IX2_EVENT_LISTENER_ADDED: rN,
          IX2_TEST_FRAME_RENDERED: nN,
          IX2_EVENT_STATE_CHANGED: iN,
          IX2_ANIMATION_FRAME_CHANGED: oN,
          IX2_PARAMETER_CHANGED: aN,
          IX2_INSTANCE_ADDED: sN,
          IX2_INSTANCE_STARTED: uN,
          IX2_INSTANCE_REMOVED: cN,
          IX2_ELEMENT_STATE_CHANGED: lN,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: fN,
          IX2_VIEWPORT_WIDTH_CHANGED: dN,
          IX2_MEDIA_QUERIES_DEFINED: pN,
        } = Te),
        ({ reifyState: gN } = Ig.IX2VanillaUtils),
        (No = (e) => ({ type: jP, payload: { ...gN(e) } })),
        (Do = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: YP,
          payload: { hasBoundaryNodes: e, reducedMotion: t },
        })),
        (Mo = () => ({ type: QP })),
        (Fo = () => ({ type: $P })),
        (hN = ({ rawData: e, defer: t }) => ({
          type: ZP,
          payload: { defer: t, rawData: e },
        })),
        (vN = ({
          actionTypeId: e = Re.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: r,
          eventId: n,
          allowEvents: i,
          immediate: o,
          testManual: a,
          verbose: u,
          rawData: s,
        }) => ({
          type: JP,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: r,
            testManual: a,
            eventId: n,
            allowEvents: i,
            immediate: o,
            verbose: u,
            rawData: s,
          },
        })),
        (EN = (e) => ({ type: eN, payload: { actionListId: e } })),
        (yN = () => ({ type: tN })),
        (wn = (e, t) => ({
          type: rN,
          payload: { target: e, listenerParams: t },
        })),
        (mN = (e = 1) => ({ type: nN, payload: { step: e } })),
        (qo = (e, t) => ({ type: iN, payload: { stateKey: e, newState: t } })),
        (Sn = (e, t) => ({ type: oN, payload: { now: e, parameters: t } })),
        (Yt = (e, t) => ({ type: aN, payload: { key: e, value: t } })),
        (ko = (e) => ({ type: sN, payload: { ...e } })),
        (On = (e, t) => ({ type: uN, payload: { instanceId: e, time: t } })),
        (Go = (e) => ({ type: cN, payload: { instanceId: e } })),
        (Xo = (e, t, r, n) => ({
          type: lN,
          payload: { elementId: e, actionTypeId: t, current: r, actionItem: n },
        })),
        (Qt = ({ actionListId: e, isPlaying: t }) => ({
          type: fN,
          payload: { actionListId: e, isPlaying: t },
        })),
        (Uo = ({ width: e, mediaQueries: t }) => ({
          type: dN,
          payload: { width: e, mediaQueries: t },
        })),
        (Vo = () => ({ type: pN }));
    });
  var Le = {};
  Ne(Le, {
    elementContains: () => Ho,
    getChildElements: () => RN,
    getClosestElement: () => Ar,
    getProperty: () => AN,
    getQuerySelector: () => Bo,
    getRefType: () => zo,
    getSiblingElements: () => CN,
    getStyle: () => bN,
    getValidDocument: () => SN,
    isSiblingNode: () => xN,
    matchSelector: () => wN,
    queryDocument: () => ON,
    setStyle: () => TN,
  });
  function TN(e, t, r) {
    e.style[t] = r;
  }
  function bN(e, t) {
    return t.startsWith("--")
      ? window.getComputedStyle(document.documentElement).getPropertyValue(t)
      : e.style[t];
  }
  function AN(e, t) {
    return e[t];
  }
  function wN(e) {
    return (t) => t[Wo](e);
  }
  function Bo({ id: e, selector: t }) {
    if (e) {
      let r = e;
      if (e.indexOf(bg) !== -1) {
        let n = e.split(bg),
          i = n[0];
        if (((r = n[1]), i !== document.documentElement.getAttribute(wg)))
          return null;
      }
      return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`;
    }
    return t;
  }
  function SN(e) {
    return e == null || e === document.documentElement.getAttribute(wg)
      ? document
      : null;
  }
  function ON(e, t) {
    return Array.prototype.slice.call(
      document.querySelectorAll(t ? e + " " + t : e)
    );
  }
  function Ho(e, t) {
    return e.contains(t);
  }
  function xN(e, t) {
    return e !== t && e.parentNode === t.parentNode;
  }
  function RN(e) {
    let t = [];
    for (let r = 0, { length: n } = e || []; r < n; r++) {
      let { children: i } = e[r],
        { length: o } = i;
      if (o) for (let a = 0; a < o; a++) t.push(i[a]);
    }
    return t;
  }
  function CN(e = []) {
    let t = [],
      r = [];
    for (let n = 0, { length: i } = e; n < i; n++) {
      let { parentNode: o } = e[n];
      if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1)
        continue;
      r.push(o);
      let a = o.firstElementChild;
      for (; a != null; )
        e.indexOf(a) === -1 && t.push(a), (a = a.nextElementSibling);
    }
    return t;
  }
  function zo(e) {
    return e != null && typeof e == "object"
      ? e instanceof Element
        ? _N
        : IN
      : null;
  }
  var Ag,
    Wo,
    bg,
    _N,
    IN,
    wg,
    Ar,
    Sg = ve(() => {
      "use strict";
      Ag = fe(bt());
      De();
      ({ ELEMENT_MATCHES: Wo } = Ag.IX2BrowserSupport),
        ({
          IX2_ID_DELIMITER: bg,
          HTML_ELEMENT: _N,
          PLAIN_OBJECT: IN,
          WF_PAGE: wg,
        } = we);
      Ar = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let r = e;
            do {
              if (r[Wo] && r[Wo](t)) return r;
              r = r.parentNode;
            } while (r != null);
            return null;
          };
    });
  var Ko = f((Xk, xg) => {
    var LN = Je(),
      Og = Object.create,
      PN = (function () {
        function e() {}
        return function (t) {
          if (!LN(t)) return {};
          if (Og) return Og(t);
          e.prototype = t;
          var r = new e();
          return (e.prototype = void 0), r;
        };
      })();
    xg.exports = PN;
  });
  var Rn = f((Uk, Rg) => {
    function NN() {}
    Rg.exports = NN;
  });
  var Ln = f((Vk, Cg) => {
    var DN = Ko(),
      MN = Rn();
    function Cn(e, t) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__chain__ = !!t),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    Cn.prototype = DN(MN.prototype);
    Cn.prototype.constructor = Cn;
    Cg.exports = Cn;
  });
  var Dg = f((Wk, Ng) => {
    var Lg = Ot(),
      FN = sr(),
      qN = be(),
      Pg = Lg ? Lg.isConcatSpreadable : void 0;
    function kN(e) {
      return qN(e) || FN(e) || !!(Pg && e && e[Pg]);
    }
    Ng.exports = kN;
  });
  var qg = f((Bk, Fg) => {
    var GN = jr(),
      XN = Dg();
    function Mg(e, t, r, n, i) {
      var o = -1,
        a = e.length;
      for (r || (r = XN), i || (i = []); ++o < a; ) {
        var u = e[o];
        t > 0 && r(u)
          ? t > 1
            ? Mg(u, t - 1, r, n, i)
            : GN(i, u)
          : n || (i[i.length] = u);
      }
      return i;
    }
    Fg.exports = Mg;
  });
  var Gg = f((Hk, kg) => {
    var UN = qg();
    function VN(e) {
      var t = e == null ? 0 : e.length;
      return t ? UN(e, 1) : [];
    }
    kg.exports = VN;
  });
  var Ug = f((zk, Xg) => {
    function WN(e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, r[0]);
        case 2:
          return e.call(t, r[0], r[1]);
        case 3:
          return e.call(t, r[0], r[1], r[2]);
      }
      return e.apply(t, r);
    }
    Xg.exports = WN;
  });
  var Bg = f((Kk, Wg) => {
    var BN = Ug(),
      Vg = Math.max;
    function HN(e, t, r) {
      return (
        (t = Vg(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var n = arguments, i = -1, o = Vg(n.length - t, 0), a = Array(o);
            ++i < o;

          )
            a[i] = n[t + i];
          i = -1;
          for (var u = Array(t + 1); ++i < t; ) u[i] = n[i];
          return (u[t] = r(a)), BN(e, this, u);
        }
      );
    }
    Wg.exports = HN;
  });
  var zg = f((jk, Hg) => {
    function zN(e) {
      return function () {
        return e;
      };
    }
    Hg.exports = zN;
  });
  var Yg = f((Yk, jg) => {
    var KN = zg(),
      Kg = Co(),
      jN = sn(),
      YN = Kg
        ? function (e, t) {
            return Kg(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: KN(t),
              writable: !0,
            });
          }
        : jN;
    jg.exports = YN;
  });
  var $g = f((Qk, Qg) => {
    var QN = 800,
      $N = 16,
      ZN = Date.now;
    function JN(e) {
      var t = 0,
        r = 0;
      return function () {
        var n = ZN(),
          i = $N - (n - r);
        if (((r = n), i > 0)) {
          if (++t >= QN) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    Qg.exports = JN;
  });
  var Jg = f(($k, Zg) => {
    var eD = Yg(),
      tD = $g(),
      rD = tD(eD);
    Zg.exports = rD;
  });
  var th = f((Zk, eh) => {
    var nD = Gg(),
      iD = Bg(),
      oD = Jg();
    function aD(e) {
      return oD(iD(e, void 0, nD), e + "");
    }
    eh.exports = aD;
  });
  var ih = f((Jk, nh) => {
    var rh = Pi(),
      sD = rh && new rh();
    nh.exports = sD;
  });
  var ah = f((eG, oh) => {
    function uD() {}
    oh.exports = uD;
  });
  var jo = f((tG, uh) => {
    var sh = ih(),
      cD = ah(),
      lD = sh
        ? function (e) {
            return sh.get(e);
          }
        : cD;
    uh.exports = lD;
  });
  var lh = f((rG, ch) => {
    var fD = {};
    ch.exports = fD;
  });
  var Yo = f((nG, dh) => {
    var fh = lh(),
      dD = Object.prototype,
      pD = dD.hasOwnProperty;
    function gD(e) {
      for (
        var t = e.name + "", r = fh[t], n = pD.call(fh, t) ? r.length : 0;
        n--;

      ) {
        var i = r[n],
          o = i.func;
        if (o == null || o == e) return i.name;
      }
      return t;
    }
    dh.exports = gD;
  });
  var Nn = f((iG, ph) => {
    var hD = Ko(),
      vD = Rn(),
      ED = 4294967295;
    function Pn(e) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = ED),
        (this.__views__ = []);
    }
    Pn.prototype = hD(vD.prototype);
    Pn.prototype.constructor = Pn;
    ph.exports = Pn;
  });
  var hh = f((oG, gh) => {
    function yD(e, t) {
      var r = -1,
        n = e.length;
      for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
      return t;
    }
    gh.exports = yD;
  });
  var Eh = f((aG, vh) => {
    var mD = Nn(),
      _D = Ln(),
      ID = hh();
    function TD(e) {
      if (e instanceof mD) return e.clone();
      var t = new _D(e.__wrapped__, e.__chain__);
      return (
        (t.__actions__ = ID(e.__actions__)),
        (t.__index__ = e.__index__),
        (t.__values__ = e.__values__),
        t
      );
    }
    vh.exports = TD;
  });
  var _h = f((sG, mh) => {
    var bD = Nn(),
      yh = Ln(),
      AD = Rn(),
      wD = be(),
      SD = it(),
      OD = Eh(),
      xD = Object.prototype,
      RD = xD.hasOwnProperty;
    function Dn(e) {
      if (SD(e) && !wD(e) && !(e instanceof bD)) {
        if (e instanceof yh) return e;
        if (RD.call(e, "__wrapped__")) return OD(e);
      }
      return new yh(e);
    }
    Dn.prototype = AD.prototype;
    Dn.prototype.constructor = Dn;
    mh.exports = Dn;
  });
  var Th = f((uG, Ih) => {
    var CD = Nn(),
      LD = jo(),
      PD = Yo(),
      ND = _h();
    function DD(e) {
      var t = PD(e),
        r = ND[t];
      if (typeof r != "function" || !(t in CD.prototype)) return !1;
      if (e === r) return !0;
      var n = LD(r);
      return !!n && e === n[0];
    }
    Ih.exports = DD;
  });
  var Sh = f((cG, wh) => {
    var bh = Ln(),
      MD = th(),
      FD = jo(),
      Qo = Yo(),
      qD = be(),
      Ah = Th(),
      kD = "Expected a function",
      GD = 8,
      XD = 32,
      UD = 128,
      VD = 256;
    function WD(e) {
      return MD(function (t) {
        var r = t.length,
          n = r,
          i = bh.prototype.thru;
        for (e && t.reverse(); n--; ) {
          var o = t[n];
          if (typeof o != "function") throw new TypeError(kD);
          if (i && !a && Qo(o) == "wrapper") var a = new bh([], !0);
        }
        for (n = a ? n : r; ++n < r; ) {
          o = t[n];
          var u = Qo(o),
            s = u == "wrapper" ? FD(o) : void 0;
          s &&
          Ah(s[0]) &&
          s[1] == (UD | GD | XD | VD) &&
          !s[4].length &&
          s[9] == 1
            ? (a = a[Qo(s[0])].apply(a, s[3]))
            : (a = o.length == 1 && Ah(o) ? a[u]() : a.thru(o));
        }
        return function () {
          var l = arguments,
            m = l[0];
          if (a && l.length == 1 && qD(m)) return a.plant(m).value();
          for (var v = 0, p = r ? t[v].apply(this, l) : m; ++v < r; )
            p = t[v].call(this, p);
          return p;
        };
      });
    }
    wh.exports = WD;
  });
  var xh = f((lG, Oh) => {
    var BD = Sh(),
      HD = BD();
    Oh.exports = HD;
  });
  var Ch = f((fG, Rh) => {
    function zD(e, t, r) {
      return (
        e === e &&
          (r !== void 0 && (e = e <= r ? e : r),
          t !== void 0 && (e = e >= t ? e : t)),
        e
      );
    }
    Rh.exports = zD;
  });
  var Ph = f((dG, Lh) => {
    var KD = Ch(),
      $o = un();
    function jD(e, t, r) {
      return (
        r === void 0 && ((r = t), (t = void 0)),
        r !== void 0 && ((r = $o(r)), (r = r === r ? r : 0)),
        t !== void 0 && ((t = $o(t)), (t = t === t ? t : 0)),
        KD($o(e), t, r)
      );
    }
    Lh.exports = jD;
  });
  var Uh,
    Vh,
    Wh,
    Bh,
    YD,
    QD,
    $D,
    ZD,
    JD,
    eM,
    tM,
    rM,
    nM,
    iM,
    oM,
    aM,
    sM,
    uM,
    cM,
    Hh,
    zh,
    lM,
    fM,
    dM,
    Kh,
    pM,
    gM,
    jh,
    hM,
    Zo,
    Yh,
    Nh,
    Dh,
    Qh,
    Sr,
    vM,
    rt,
    $h,
    EM,
    Fe,
    je,
    Or,
    Zh,
    Jo,
    Mh,
    ea,
    yM,
    wr,
    mM,
    _M,
    IM,
    Jh,
    Fh,
    TM,
    qh,
    bM,
    AM,
    wM,
    kh,
    Mn,
    Fn,
    Gh,
    Xh,
    ev,
    tv = ve(() => {
      "use strict";
      (Uh = fe(xh())), (Vh = fe(an())), (Wh = fe(Ph()));
      De();
      ta();
      xn();
      (Bh = fe(bt())),
        ({
          MOUSE_CLICK: YD,
          MOUSE_SECOND_CLICK: QD,
          MOUSE_DOWN: $D,
          MOUSE_UP: ZD,
          MOUSE_OVER: JD,
          MOUSE_OUT: eM,
          DROPDOWN_CLOSE: tM,
          DROPDOWN_OPEN: rM,
          SLIDER_ACTIVE: nM,
          SLIDER_INACTIVE: iM,
          TAB_ACTIVE: oM,
          TAB_INACTIVE: aM,
          NAVBAR_CLOSE: sM,
          NAVBAR_OPEN: uM,
          MOUSE_MOVE: cM,
          PAGE_SCROLL_DOWN: Hh,
          SCROLL_INTO_VIEW: zh,
          SCROLL_OUT_OF_VIEW: lM,
          PAGE_SCROLL_UP: fM,
          SCROLLING_IN_VIEW: dM,
          PAGE_FINISH: Kh,
          ECOMMERCE_CART_CLOSE: pM,
          ECOMMERCE_CART_OPEN: gM,
          PAGE_START: jh,
          PAGE_SCROLL: hM,
        } = ze),
        (Zo = "COMPONENT_ACTIVE"),
        (Yh = "COMPONENT_INACTIVE"),
        ({ COLON_DELIMITER: Nh } = we),
        ({ getNamespacedParameterId: Dh } = Bh.IX2VanillaUtils),
        (Qh = (e) => (t) => typeof t == "object" && e(t) ? !0 : t),
        (Sr = Qh(({ element: e, nativeEvent: t }) => e === t.target)),
        (vM = Qh(({ element: e, nativeEvent: t }) => e.contains(t.target))),
        (rt = (0, Uh.default)([Sr, vM])),
        ($h = (e, t) => {
          if (t) {
            let { ixData: r } = e.getState(),
              { events: n } = r,
              i = n[t];
            if (i && !yM[i.eventTypeId]) return i;
          }
          return null;
        }),
        (EM = ({ store: e, event: t }) => {
          let { action: r } = t,
            { autoStopEventId: n } = r.config;
          return !!$h(e, n);
        }),
        (Fe = ({ store: e, event: t, element: r, eventStateKey: n }, i) => {
          let { action: o, id: a } = t,
            { actionListId: u, autoStopEventId: s } = o.config,
            l = $h(e, s);
          return (
            l &&
              $t({
                store: e,
                eventId: s,
                eventTarget: r,
                eventStateKey: s + Nh + n.split(Nh)[1],
                actionListId: (0, Vh.default)(l, "action.config.actionListId"),
              }),
            $t({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: u,
            }),
            xr({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: u,
            }),
            i
          );
        }),
        (je = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n),
        (Or = { handler: je(rt, Fe) }),
        (Zh = { ...Or, types: [Zo, Yh].join(" ") }),
        (Jo = [
          { target: window, types: "resize orientationchange", throttle: !0 },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0,
          },
        ]),
        (Mh = "mouseover mouseout"),
        (ea = { types: Jo }),
        (yM = { PAGE_START: jh, PAGE_FINISH: Kh }),
        (wr = (() => {
          let e = window.pageXOffset !== void 0,
            r =
              document.compatMode === "CSS1Compat"
                ? document.documentElement
                : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : r.scrollLeft,
            scrollTop: e ? window.pageYOffset : r.scrollTop,
            stiffScrollTop: (0, Wh.default)(
              e ? window.pageYOffset : r.scrollTop,
              0,
              r.scrollHeight - window.innerHeight
            ),
            scrollWidth: r.scrollWidth,
            scrollHeight: r.scrollHeight,
            clientWidth: r.clientWidth,
            clientHeight: r.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })()),
        (mM = (e, t) =>
          !(
            e.left > t.right ||
            e.right < t.left ||
            e.top > t.bottom ||
            e.bottom < t.top
          )),
        (_M = ({ element: e, nativeEvent: t }) => {
          let { type: r, target: n, relatedTarget: i } = t,
            o = e.contains(n);
          if (r === "mouseover" && o) return !0;
          let a = e.contains(i);
          return !!(r === "mouseout" && o && a);
        }),
        (IM = (e) => {
          let {
              element: t,
              event: { config: r },
            } = e,
            { clientWidth: n, clientHeight: i } = wr(),
            o = r.scrollOffsetValue,
            s = r.scrollOffsetUnit === "PX" ? o : (i * (o || 0)) / 100;
          return mM(t.getBoundingClientRect(), {
            left: 0,
            top: s,
            right: n,
            bottom: i - s,
          });
        }),
        (Jh = (e) => (t, r) => {
          let { type: n } = t.nativeEvent,
            i = [Zo, Yh].indexOf(n) !== -1 ? n === Zo : r.isActive,
            o = { ...r, isActive: i };
          return ((!r || o.isActive !== r.isActive) && e(t, o)) || o;
        }),
        (Fh = (e) => (t, r) => {
          let n = { elementHovered: _M(t) };
          return (
            ((r ? n.elementHovered !== r.elementHovered : n.elementHovered) &&
              e(t, n)) ||
            n
          );
        }),
        (TM = (e) => (t, r) => {
          let n = { ...r, elementVisible: IM(t) };
          return (
            ((r ? n.elementVisible !== r.elementVisible : n.elementVisible) &&
              e(t, n)) ||
            n
          );
        }),
        (qh =
          (e) =>
          (t, r = {}) => {
            let { stiffScrollTop: n, scrollHeight: i, innerHeight: o } = wr(),
              {
                event: { config: a, eventTypeId: u },
              } = t,
              { scrollOffsetValue: s, scrollOffsetUnit: l } = a,
              m = l === "PX",
              v = i - o,
              p = Number((n / v).toFixed(2));
            if (r && r.percentTop === p) return r;
            let E = (m ? s : (o * (s || 0)) / 100) / v,
              T,
              I,
              S = 0;
            r &&
              ((T = p > r.percentTop),
              (I = r.scrollingDown !== T),
              (S = I ? p : r.anchorTop));
            let b = u === Hh ? p >= S + E : p <= S - E,
              R = {
                ...r,
                percentTop: p,
                inBounds: b,
                anchorTop: S,
                scrollingDown: T,
              };
            return (r && b && (I || R.inBounds !== r.inBounds) && e(t, R)) || R;
          }),
        (bM = (e, t) =>
          e.left > t.left &&
          e.left < t.right &&
          e.top > t.top &&
          e.top < t.bottom),
        (AM = (e) => (t, r) => {
          let n = { finished: document.readyState === "complete" };
          return n.finished && !(r && r.finshed) && e(t), n;
        }),
        (wM = (e) => (t, r) => {
          let n = { started: !0 };
          return r || e(t), n;
        }),
        (kh =
          (e) =>
          (t, r = { clickCount: 0 }) => {
            let n = { clickCount: (r.clickCount % 2) + 1 };
            return (n.clickCount !== r.clickCount && e(t, n)) || n;
          }),
        (Mn = (e = !0) => ({
          ...Zh,
          handler: je(
            e ? rt : Sr,
            Jh((t, r) => (r.isActive ? Or.handler(t, r) : r))
          ),
        })),
        (Fn = (e = !0) => ({
          ...Zh,
          handler: je(
            e ? rt : Sr,
            Jh((t, r) => (r.isActive ? r : Or.handler(t, r)))
          ),
        })),
        (Gh = {
          ...ea,
          handler: TM((e, t) => {
            let { elementVisible: r } = t,
              { event: n, store: i } = e,
              { ixData: o } = i.getState(),
              { events: a } = o;
            return !a[n.action.config.autoStopEventId] && t.triggered
              ? t
              : (n.eventTypeId === zh) === r
              ? (Fe(e), { ...t, triggered: !0 })
              : t;
          }),
        }),
        (Xh = 0.05),
        (ev = {
          [nM]: Mn(),
          [iM]: Fn(),
          [rM]: Mn(),
          [tM]: Fn(),
          [uM]: Mn(!1),
          [sM]: Fn(!1),
          [oM]: Mn(),
          [aM]: Fn(),
          [gM]: { types: "ecommerce-cart-open", handler: je(rt, Fe) },
          [pM]: { types: "ecommerce-cart-close", handler: je(rt, Fe) },
          [YD]: {
            types: "click",
            handler: je(
              rt,
              kh((e, { clickCount: t }) => {
                EM(e) ? t === 1 && Fe(e) : Fe(e);
              })
            ),
          },
          [QD]: {
            types: "click",
            handler: je(
              rt,
              kh((e, { clickCount: t }) => {
                t === 2 && Fe(e);
              })
            ),
          },
          [$D]: { ...Or, types: "mousedown" },
          [ZD]: { ...Or, types: "mouseup" },
          [JD]: {
            types: Mh,
            handler: je(
              rt,
              Fh((e, t) => {
                t.elementHovered && Fe(e);
              })
            ),
          },
          [eM]: {
            types: Mh,
            handler: je(
              rt,
              Fh((e, t) => {
                t.elementHovered || Fe(e);
              })
            ),
          },
          [cM]: {
            types: "mousemove mouseout scroll",
            handler: (
              {
                store: e,
                element: t,
                eventConfig: r,
                nativeEvent: n,
                eventStateKey: i,
              },
              o = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
            ) => {
              let {
                  basedOn: a,
                  selectedAxis: u,
                  continuousParameterGroupId: s,
                  reverse: l,
                  restingState: m = 0,
                } = r,
                {
                  clientX: v = o.clientX,
                  clientY: p = o.clientY,
                  pageX: E = o.pageX,
                  pageY: T = o.pageY,
                } = n,
                I = u === "X_AXIS",
                S = n.type === "mouseout",
                b = m / 100,
                R = s,
                O = !1;
              switch (a) {
                case Ze.VIEWPORT: {
                  b = I
                    ? Math.min(v, window.innerWidth) / window.innerWidth
                    : Math.min(p, window.innerHeight) / window.innerHeight;
                  break;
                }
                case Ze.PAGE: {
                  let {
                    scrollLeft: L,
                    scrollTop: D,
                    scrollWidth: C,
                    scrollHeight: W,
                  } = wr();
                  b = I ? Math.min(L + E, C) / C : Math.min(D + T, W) / W;
                  break;
                }
                case Ze.ELEMENT:
                default: {
                  R = Dh(i, s);
                  let L = n.type.indexOf("mouse") === 0;
                  if (L && rt({ element: t, nativeEvent: n }) !== !0) break;
                  let D = t.getBoundingClientRect(),
                    { left: C, top: W, width: H, height: z } = D;
                  if (!L && !bM({ left: v, top: p }, D)) break;
                  (O = !0), (b = I ? (v - C) / H : (p - W) / z);
                  break;
                }
              }
              return (
                S && (b > 1 - Xh || b < Xh) && (b = Math.round(b)),
                (a !== Ze.ELEMENT || O || O !== o.elementHovered) &&
                  ((b = l ? 1 - b : b), e.dispatch(Yt(R, b))),
                {
                  elementHovered: O,
                  clientX: v,
                  clientY: p,
                  pageX: E,
                  pageY: T,
                }
              );
            },
          },
          [hM]: {
            types: Jo,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: r, reverse: n } = t,
                { scrollTop: i, scrollHeight: o, clientHeight: a } = wr(),
                u = i / (o - a);
              (u = n ? 1 - u : u), e.dispatch(Yt(r, u));
            },
          },
          [dM]: {
            types: Jo,
            handler: (
              { element: e, store: t, eventConfig: r, eventStateKey: n },
              i = { scrollPercent: 0 }
            ) => {
              let {
                  scrollLeft: o,
                  scrollTop: a,
                  scrollWidth: u,
                  scrollHeight: s,
                  clientHeight: l,
                } = wr(),
                {
                  basedOn: m,
                  selectedAxis: v,
                  continuousParameterGroupId: p,
                  startsEntering: E,
                  startsExiting: T,
                  addEndOffset: I,
                  addStartOffset: S,
                  addOffsetValue: b = 0,
                  endOffsetValue: R = 0,
                } = r,
                O = v === "X_AXIS";
              if (m === Ze.VIEWPORT) {
                let L = O ? o / u : a / s;
                return (
                  L !== i.scrollPercent && t.dispatch(Yt(p, L)),
                  { scrollPercent: L }
                );
              } else {
                let L = Dh(n, p),
                  D = e.getBoundingClientRect(),
                  C = (S ? b : 0) / 100,
                  W = (I ? R : 0) / 100;
                (C = E ? C : 1 - C), (W = T ? W : 1 - W);
                let H = D.top + Math.min(D.height * C, l),
                  Q = D.top + D.height * W - H,
                  ee = Math.min(l + Q, s),
                  w = Math.min(Math.max(0, l - H), ee) / ee;
                return (
                  w !== i.scrollPercent && t.dispatch(Yt(L, w)),
                  { scrollPercent: w }
                );
              }
            },
          },
          [zh]: Gh,
          [lM]: Gh,
          [Hh]: {
            ...ea,
            handler: qh((e, t) => {
              t.scrollingDown && Fe(e);
            }),
          },
          [fM]: {
            ...ea,
            handler: qh((e, t) => {
              t.scrollingDown || Fe(e);
            }),
          },
          [Kh]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: je(Sr, AM(Fe)),
          },
          [jh]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: je(Sr, wM(Fe)),
          },
        });
    });
  var yv = {};
  Ne(yv, {
    observeRequests: () => HM,
    startActionGroup: () => xr,
    startEngine: () => Vn,
    stopActionGroup: () => $t,
    stopAllActionGroups: () => hv,
    stopEngine: () => Wn,
  });
  function HM(e) {
    At({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: jM }),
      At({ store: e, select: ({ ixRequest: t }) => t.playback, onChange: YM }),
      At({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: QM }),
      At({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: $M });
  }
  function zM(e) {
    At({
      store: e,
      select: ({ ixSession: t }) => t.mediaQueryKey,
      onChange: () => {
        Wn(e),
          fv({ store: e, elementApi: Le }),
          Vn({ store: e, allowEvents: !0 }),
          dv();
      },
    });
  }
  function KM(e, t) {
    let r = At({
      store: e,
      select: ({ ixSession: n }) => n.tick,
      onChange: (n) => {
        t(n), r();
      },
    });
  }
  function jM({ rawData: e, defer: t }, r) {
    let n = () => {
      Vn({ store: r, rawData: e, allowEvents: !0 }), dv();
    };
    t ? setTimeout(n, 0) : n();
  }
  function dv() {
    document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
  }
  function YM(e, t) {
    let {
        actionTypeId: r,
        actionListId: n,
        actionItemId: i,
        eventId: o,
        allowEvents: a,
        immediate: u,
        testManual: s,
        verbose: l = !0,
      } = e,
      { rawData: m } = e;
    if (n && i && m && u) {
      let v = m.actionLists[n];
      v && (m = DM({ actionList: v, actionItemId: i, rawData: m }));
    }
    if (
      (Vn({ store: t, rawData: m, allowEvents: a, testManual: s }),
      (n && r === Re.GENERAL_START_ACTION) || ra(r))
    ) {
      $t({ store: t, actionListId: n }),
        gv({ store: t, actionListId: n, eventId: o });
      let v = xr({
        store: t,
        eventId: o,
        actionListId: n,
        immediate: u,
        verbose: l,
      });
      l && v && t.dispatch(Qt({ actionListId: n, isPlaying: !u }));
    }
  }
  function QM({ actionListId: e }, t) {
    e ? $t({ store: t, actionListId: e }) : hv({ store: t }), Wn(t);
  }
  function $M(e, t) {
    Wn(t), fv({ store: t, elementApi: Le });
  }
  function Vn({ store: e, rawData: t, allowEvents: r, testManual: n }) {
    let { ixSession: i } = e.getState();
    t && e.dispatch(No(t)),
      i.active ||
        (e.dispatch(
          Do({
            hasBoundaryNodes: !!document.querySelector(kn),
            reducedMotion:
              document.body.hasAttribute("data-wf-ix-vacation") &&
              window.matchMedia("(prefers-reduced-motion)").matches,
          })
        ),
        r &&
          (nF(e), ZM(), e.getState().ixSession.hasDefinedMediaQueries && zM(e)),
        e.dispatch(Mo()),
        JM(e, n));
  }
  function ZM() {
    let { documentElement: e } = document;
    e.className.indexOf(rv) === -1 && (e.className += ` ${rv}`);
  }
  function JM(e, t) {
    let r = (n) => {
      let { ixSession: i, ixParameters: o } = e.getState();
      i.active &&
        (e.dispatch(Sn(n, o)), t ? KM(e, r) : requestAnimationFrame(r));
    };
    r(window.performance.now());
  }
  function Wn(e) {
    let { ixSession: t } = e.getState();
    if (t.active) {
      let { eventListeners: r } = t;
      r.forEach(eF), kM(), e.dispatch(Fo());
    }
  }
  function eF({ target: e, listenerParams: t }) {
    e.removeEventListener.apply(e, t);
  }
  function tF({
    store: e,
    eventStateKey: t,
    eventTarget: r,
    eventId: n,
    eventConfig: i,
    actionListId: o,
    parameterGroup: a,
    smoothing: u,
    restingValue: s,
  }) {
    let { ixData: l, ixSession: m } = e.getState(),
      { events: v } = l,
      p = v[n],
      { eventTypeId: E } = p,
      T = {},
      I = {},
      S = [],
      { continuousActionGroups: b } = a,
      { id: R } = a;
    MM(E, i) && (R = FM(t, R));
    let O = m.hasBoundaryNodes && r ? Ar(r, kn) : null;
    b.forEach((L) => {
      let { keyframe: D, actionItems: C } = L;
      C.forEach((W) => {
        let { actionTypeId: H } = W,
          { target: z } = W.config;
        if (!z) return;
        let Q = z.boundaryMode ? O : null,
          ee = GM(z) + na + H;
        if (((I[ee] = rF(I[ee], D, W)), !T[ee])) {
          T[ee] = !0;
          let { config: q } = W;
          Gn({
            config: q,
            event: p,
            eventTarget: r,
            elementRoot: Q,
            elementApi: Le,
          }).forEach((w) => {
            S.push({ element: w, key: ee });
          });
        }
      });
    }),
      S.forEach(({ element: L, key: D }) => {
        let C = I[D],
          W = (0, ut.default)(C, "[0].actionItems[0]", {}),
          { actionTypeId: H } = W,
          Q = (
            H === Re.PLUGIN_RIVE
              ? (W.config?.target?.selectorGuids || []).length === 0
              : Un(H)
          )
            ? oa(H)(L, W)
            : null,
          ee = ia({ element: L, actionItem: W, elementApi: Le }, Q);
        aa({
          store: e,
          element: L,
          eventId: n,
          actionListId: o,
          actionItem: W,
          destination: ee,
          continuous: !0,
          parameterId: R,
          actionGroups: C,
          smoothing: u,
          restingValue: s,
          pluginInstance: Q,
        });
      });
  }
  function rF(e = [], t, r) {
    let n = [...e],
      i;
    return (
      n.some((o, a) => (o.keyframe === t ? ((i = a), !0) : !1)),
      i == null && ((i = n.length), n.push({ keyframe: t, actionItems: [] })),
      n[i].actionItems.push(r),
      n
    );
  }
  function nF(e) {
    let { ixData: t } = e.getState(),
      { eventTypeMap: r } = t;
    pv(e),
      (0, Zt.default)(r, (i, o) => {
        let a = ev[o];
        if (!a) {
          console.warn(`IX2 event type not configured: ${o}`);
          return;
        }
        cF({ logic: a, store: e, events: i });
      });
    let { ixSession: n } = e.getState();
    n.eventListeners.length && oF(e);
  }
  function oF(e) {
    let t = () => {
      pv(e);
    };
    iF.forEach((r) => {
      window.addEventListener(r, t), e.dispatch(wn(window, [r, t]));
    }),
      t();
  }
  function pv(e) {
    let { ixSession: t, ixData: r } = e.getState(),
      n = window.innerWidth;
    if (n !== t.viewportWidth) {
      let { mediaQueries: i } = r;
      e.dispatch(Uo({ width: n, mediaQueries: i }));
    }
  }
  function cF({ logic: e, store: t, events: r }) {
    lF(r);
    let { types: n, handler: i } = e,
      { ixData: o } = t.getState(),
      { actionLists: a } = o,
      u = aF(r, uF);
    if (!(0, ov.default)(u)) return;
    (0, Zt.default)(u, (v, p) => {
      let E = r[p],
        { action: T, id: I, mediaQueries: S = o.mediaQueryKeys } = E,
        { actionListId: b } = T.config;
      XM(S, o.mediaQueryKeys) || t.dispatch(Vo()),
        T.actionTypeId === Re.GENERAL_CONTINUOUS_ACTION &&
          (Array.isArray(E.config) ? E.config : [E.config]).forEach((O) => {
            let { continuousParameterGroupId: L } = O,
              D = (0, ut.default)(a, `${b}.continuousParameterGroups`, []),
              C = (0, iv.default)(D, ({ id: z }) => z === L),
              W = (O.smoothing || 0) / 100,
              H = (O.restingState || 0) / 100;
            C &&
              v.forEach((z, Q) => {
                let ee = I + na + Q;
                tF({
                  store: t,
                  eventStateKey: ee,
                  eventTarget: z,
                  eventId: I,
                  eventConfig: O,
                  actionListId: b,
                  parameterGroup: C,
                  smoothing: W,
                  restingValue: H,
                });
              });
          }),
        (T.actionTypeId === Re.GENERAL_START_ACTION || ra(T.actionTypeId)) &&
          gv({ store: t, actionListId: b, eventId: I });
    });
    let s = (v) => {
        let { ixSession: p } = t.getState();
        sF(u, (E, T, I) => {
          let S = r[T],
            b = p.eventState[I],
            { action: R, mediaQueries: O = o.mediaQueryKeys } = S;
          if (!Xn(O, p.mediaQueryKey)) return;
          let L = (D = {}) => {
            let C = i(
              {
                store: t,
                element: E,
                event: S,
                eventConfig: D,
                nativeEvent: v,
                eventStateKey: I,
              },
              b
            );
            UM(C, b) || t.dispatch(qo(I, C));
          };
          R.actionTypeId === Re.GENERAL_CONTINUOUS_ACTION
            ? (Array.isArray(S.config) ? S.config : [S.config]).forEach(L)
            : L();
        });
      },
      l = (0, cv.default)(s, BM),
      m = ({ target: v = document, types: p, throttle: E }) => {
        p.split(" ")
          .filter(Boolean)
          .forEach((T) => {
            let I = E ? l : s;
            v.addEventListener(T, I), t.dispatch(wn(v, [T, I]));
          });
      };
    Array.isArray(n) ? n.forEach(m) : typeof n == "string" && m(e);
  }
  function lF(e) {
    if (!WM) return;
    let t = {},
      r = "";
    for (let n in e) {
      let { eventTypeId: i, target: o } = e[n],
        a = Bo(o);
      t[a] ||
        ((i === ze.MOUSE_CLICK || i === ze.MOUSE_SECOND_CLICK) &&
          ((t[a] = !0),
          (r += a + "{cursor: pointer;touch-action: manipulation;}")));
    }
    if (r) {
      let n = document.createElement("style");
      (n.textContent = r), document.body.appendChild(n);
    }
  }
  function gv({ store: e, actionListId: t, eventId: r }) {
    let { ixData: n, ixSession: i } = e.getState(),
      { actionLists: o, events: a } = n,
      u = a[r],
      s = o[t];
    if (s && s.useFirstGroupAsInitialState) {
      let l = (0, ut.default)(s, "actionItemGroups[0].actionItems", []),
        m = (0, ut.default)(u, "mediaQueries", n.mediaQueryKeys);
      if (!Xn(m, i.mediaQueryKey)) return;
      l.forEach((v) => {
        let { config: p, actionTypeId: E } = v,
          T =
            p?.target?.useEventTarget === !0 && p?.target?.objectId == null
              ? { target: u.target, targets: u.targets }
              : p,
          I = Gn({ config: T, event: u, elementApi: Le }),
          S = Un(E);
        I.forEach((b) => {
          let R = S ? oa(E)(b, v) : null;
          aa({
            destination: ia({ element: b, actionItem: v, elementApi: Le }, R),
            immediate: !0,
            store: e,
            element: b,
            eventId: r,
            actionItem: v,
            actionListId: t,
            pluginInstance: R,
          });
        });
      });
    }
  }
  function hv({ store: e }) {
    let { ixInstances: t } = e.getState();
    (0, Zt.default)(t, (r) => {
      if (!r.continuous) {
        let { actionListId: n, verbose: i } = r;
        sa(r, e), i && e.dispatch(Qt({ actionListId: n, isPlaying: !1 }));
      }
    });
  }
  function $t({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: i,
  }) {
    let { ixInstances: o, ixSession: a } = e.getState(),
      u = a.hasBoundaryNodes && r ? Ar(r, kn) : null;
    (0, Zt.default)(o, (s) => {
      let l = (0, ut.default)(s, "actionItem.config.target.boundaryMode"),
        m = n ? s.eventStateKey === n : !0;
      if (s.actionListId === i && s.eventId === t && m) {
        if (u && l && !Ho(u, s.element)) return;
        sa(s, e),
          s.verbose && e.dispatch(Qt({ actionListId: i, isPlaying: !1 }));
      }
    });
  }
  function xr({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: i,
    groupIndex: o = 0,
    immediate: a,
    verbose: u,
  }) {
    let { ixData: s, ixSession: l } = e.getState(),
      { events: m } = s,
      v = m[t] || {},
      { mediaQueries: p = s.mediaQueryKeys } = v,
      E = (0, ut.default)(s, `actionLists.${i}`, {}),
      { actionItemGroups: T, useFirstGroupAsInitialState: I } = E;
    if (!T || !T.length) return !1;
    o >= T.length && (0, ut.default)(v, "config.loop") && (o = 0),
      o === 0 && I && o++;
    let b =
        (o === 0 || (o === 1 && I)) && ra(v.action?.actionTypeId)
          ? v.config.delay
          : void 0,
      R = (0, ut.default)(T, [o, "actionItems"], []);
    if (!R.length || !Xn(p, l.mediaQueryKey)) return !1;
    let O = l.hasBoundaryNodes && r ? Ar(r, kn) : null,
      L = LM(R),
      D = !1;
    return (
      R.forEach((C, W) => {
        let { config: H, actionTypeId: z } = C,
          Q = Un(z),
          { target: ee } = H;
        if (!ee) return;
        let q = ee.boundaryMode ? O : null;
        Gn({
          config: H,
          event: v,
          eventTarget: r,
          elementRoot: q,
          elementApi: Le,
        }).forEach((M, K) => {
          let B = Q ? oa(z)(M, C) : null,
            te = Q ? VM(z)(M, C) : null;
          D = !0;
          let re = L === W && K === 0,
            ce = PM({ element: M, actionItem: C }),
            _e = ia({ element: M, actionItem: C, elementApi: Le }, B);
          aa({
            store: e,
            element: M,
            actionItem: C,
            eventId: t,
            eventTarget: r,
            eventStateKey: n,
            actionListId: i,
            groupIndex: o,
            isCarrier: re,
            computedStyle: ce,
            destination: _e,
            immediate: a,
            verbose: u,
            pluginInstance: B,
            pluginDuration: te,
            instanceDelay: b,
          });
        });
      }),
      D
    );
  }
  function aa(e) {
    let { store: t, computedStyle: r, ...n } = e,
      {
        element: i,
        actionItem: o,
        immediate: a,
        pluginInstance: u,
        continuous: s,
        restingValue: l,
        eventId: m,
      } = n,
      v = !s,
      p = RM(),
      { ixElements: E, ixSession: T, ixData: I } = t.getState(),
      S = xM(E, i),
      { refState: b } = E[S] || {},
      R = zo(i),
      O = T.reducedMotion && mi[o.actionTypeId],
      L;
    if (O && s)
      switch (I.events[m]?.eventTypeId) {
        case ze.MOUSE_MOVE:
        case ze.MOUSE_MOVE_IN_VIEWPORT:
          L = l;
          break;
        default:
          L = 0.5;
          break;
      }
    let D = NM(i, b, r, o, Le, u);
    if (
      (t.dispatch(
        ko({
          instanceId: p,
          elementId: S,
          origin: D,
          refType: R,
          skipMotion: O,
          skipToValue: L,
          ...n,
        })
      ),
      vv(document.body, "ix2-animation-started", p),
      a)
    ) {
      fF(t, p);
      return;
    }
    At({ store: t, select: ({ ixInstances: C }) => C[p], onChange: Ev }),
      v && t.dispatch(On(p, T.tick));
  }
  function sa(e, t) {
    vv(document.body, "ix2-animation-stopping", {
      instanceId: e.id,
      state: t.getState(),
    });
    let { elementId: r, actionItem: n } = e,
      { ixElements: i } = t.getState(),
      { ref: o, refType: a } = i[r] || {};
    a === lv && qM(o, n, Le), t.dispatch(Go(e.id));
  }
  function vv(e, t, r) {
    let n = document.createEvent("CustomEvent");
    n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n);
  }
  function fF(e, t) {
    let { ixParameters: r } = e.getState();
    e.dispatch(On(t, 0)), e.dispatch(Sn(performance.now(), r));
    let { ixInstances: n } = e.getState();
    Ev(n[t], e);
  }
  function Ev(e, t) {
    let {
        active: r,
        continuous: n,
        complete: i,
        elementId: o,
        actionItem: a,
        actionTypeId: u,
        renderType: s,
        current: l,
        groupIndex: m,
        eventId: v,
        eventTarget: p,
        eventStateKey: E,
        actionListId: T,
        isCarrier: I,
        styleProp: S,
        verbose: b,
        pluginInstance: R,
      } = e,
      { ixData: O, ixSession: L } = t.getState(),
      { events: D } = O,
      C = D && D[v] ? D[v] : {},
      { mediaQueries: W = O.mediaQueryKeys } = C;
    if (Xn(W, L.mediaQueryKey) && (n || r || i)) {
      if (l || (s === OM && i)) {
        t.dispatch(Xo(o, u, l, a));
        let { ixElements: H } = t.getState(),
          { ref: z, refType: Q, refState: ee } = H[o] || {},
          q = ee && ee[u];
        (Q === lv || Un(u)) && CM(z, ee, q, v, a, S, Le, s, R);
      }
      if (i) {
        if (I) {
          let H = xr({
            store: t,
            eventId: v,
            eventTarget: p,
            eventStateKey: E,
            actionListId: T,
            groupIndex: m + 1,
            verbose: b,
          });
          b && !H && t.dispatch(Qt({ actionListId: T, isPlaying: !1 }));
        }
        sa(e, t);
      }
    }
  }
  var iv,
    ut,
    ov,
    av,
    sv,
    uv,
    Zt,
    cv,
    qn,
    SM,
    ra,
    na,
    kn,
    lv,
    OM,
    rv,
    Gn,
    xM,
    ia,
    At,
    RM,
    CM,
    fv,
    LM,
    PM,
    NM,
    DM,
    MM,
    FM,
    Xn,
    qM,
    kM,
    GM,
    XM,
    UM,
    Un,
    oa,
    VM,
    nv,
    WM,
    BM,
    iF,
    aF,
    sF,
    uF,
    ta = ve(() => {
      "use strict";
      (iv = fe(ji())),
        (ut = fe(an())),
        (ov = fe(Lp())),
        (av = fe(ng())),
        (sv = fe(og())),
        (uv = fe(sg())),
        (Zt = fe(pg())),
        (cv = fe(_g()));
      De();
      qn = fe(bt());
      xn();
      Sg();
      tv();
      (SM = Object.keys(qr)),
        (ra = (e) => SM.includes(e)),
        ({
          COLON_DELIMITER: na,
          BOUNDARY_SELECTOR: kn,
          HTML_ELEMENT: lv,
          RENDER_GENERAL: OM,
          W_MOD_IX: rv,
        } = we),
        ({
          getAffectedElements: Gn,
          getElementId: xM,
          getDestinationValues: ia,
          observeStore: At,
          getInstanceId: RM,
          renderHTMLElement: CM,
          clearAllStyles: fv,
          getMaxDurationItemIndex: LM,
          getComputedStyle: PM,
          getInstanceOrigin: NM,
          reduceListToGroup: DM,
          shouldNamespaceEventParameter: MM,
          getNamespacedParameterId: FM,
          shouldAllowMediaQuery: Xn,
          cleanupHTMLElement: qM,
          clearObjectCache: kM,
          stringifyTarget: GM,
          mediaQueriesEqual: XM,
          shallowEqual: UM,
        } = qn.IX2VanillaUtils),
        ({
          isPluginType: Un,
          createPluginInstance: oa,
          getPluginDuration: VM,
        } = qn.IX2VanillaPlugins),
        (nv = navigator.userAgent),
        (WM = nv.match(/iPad/i) || nv.match(/iPhone/)),
        (BM = 12);
      iF = ["resize", "orientationchange"];
      (aF = (e, t) => (0, av.default)((0, uv.default)(e, t), sv.default)),
        (sF = (e, t) => {
          (0, Zt.default)(e, (r, n) => {
            r.forEach((i, o) => {
              let a = n + na + o;
              t(i, n, a);
            });
          });
        }),
        (uF = (e) => {
          let t = { target: e.target, targets: e.targets };
          return Gn({ config: t, elementApi: Le });
        });
    });
  var Iv = f((ca) => {
    "use strict";
    Object.defineProperty(ca, "__esModule", { value: !0 });
    function dF(e, t) {
      for (var r in t)
        Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }
    dF(ca, {
      actions: function () {
        return hF;
      },
      destroy: function () {
        return _v;
      },
      init: function () {
        return mF;
      },
      setEnv: function () {
        return yF;
      },
      store: function () {
        return Bn;
      },
    });
    var pF = vi(),
      gF = vF((dp(), Ye(fp))),
      ua = (ta(), Ye(yv)),
      hF = EF((xn(), Ye(Tg)));
    function vF(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function mv(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (mv = function (n) {
        return n ? r : t;
      })(e);
    }
    function EF(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return { default: e };
      var r = mv(t);
      if (r && r.has(e)) return r.get(e);
      var n = { __proto__: null },
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(n, o, a)
            : (n[o] = e[o]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
    var Bn = (0, pF.createStore)(gF.default);
    function yF(e) {
      e() && (0, ua.observeRequests)(Bn);
    }
    function mF(e) {
      _v(), (0, ua.startEngine)({ store: Bn, rawData: e, allowEvents: !0 });
    }
    function _v() {
      (0, ua.stopEngine)(Bn);
    }
  });
  var wv = f((TG, Av) => {
    "use strict";
    var Tv = Ge(),
      bv = Iv();
    bv.setEnv(Tv.env);
    Tv.define(
      "ix2",
      (Av.exports = function () {
        return bv;
      })
    );
  });
  var Ov = f((bG, Sv) => {
    "use strict";
    var Jt = Ge();
    Jt.define(
      "links",
      (Sv.exports = function (e, t) {
        var r = {},
          n = e(window),
          i,
          o = Jt.env(),
          a = window.location,
          u = document.createElement("a"),
          s = "w--current",
          l = /index\.(html|php)$/,
          m = /\/$/,
          v,
          p;
        r.ready = r.design = r.preview = E;
        function E() {
          (i = o && Jt.env("design")),
            (p = Jt.env("slug") || a.pathname || ""),
            Jt.scroll.off(I),
            (v = []);
          for (var b = document.links, R = 0; R < b.length; ++R) T(b[R]);
          v.length && (Jt.scroll.on(I), I());
        }
        function T(b) {
          if (!b.getAttribute("hreflang")) {
            var R =
              (i && b.getAttribute("href-disabled")) || b.getAttribute("href");
            if (((u.href = R), !(R.indexOf(":") >= 0))) {
              var O = e(b);
              if (
                u.hash.length > 1 &&
                u.host + u.pathname === a.host + a.pathname
              ) {
                if (!/^#[a-zA-Z0-9\-\_]+$/.test(u.hash)) return;
                var L = e(u.hash);
                L.length && v.push({ link: O, sec: L, active: !1 });
                return;
              }
              if (!(R === "#" || R === "")) {
                var D =
                  u.href === a.href || R === p || (l.test(R) && m.test(p));
                S(O, s, D);
              }
            }
          }
        }
        function I() {
          var b = n.scrollTop(),
            R = n.height();
          t.each(v, function (O) {
            if (!O.link.attr("hreflang")) {
              var L = O.link,
                D = O.sec,
                C = D.offset().top,
                W = D.outerHeight(),
                H = R * 0.5,
                z = D.is(":visible") && C + W - H >= b && C + H <= b + R;
              O.active !== z && ((O.active = z), S(L, s, z));
            }
          });
        }
        function S(b, R, O) {
          var L = b.hasClass(R);
          (O && L) || (!O && !L) || (O ? b.addClass(R) : b.removeClass(R));
        }
        return r;
      })
    );
  });
  var Rv = f((AG, xv) => {
    "use strict";
    var Hn = Ge();
    Hn.define(
      "scroll",
      (xv.exports = function (e) {
        var t = {
            WF_CLICK_EMPTY: "click.wf-empty-link",
            WF_CLICK_SCROLL: "click.wf-scroll",
          },
          r = window.location,
          n = T() ? null : window.history,
          i = e(window),
          o = e(document),
          a = e(document.body),
          u =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (q) {
              window.setTimeout(q, 15);
            },
          s = Hn.env("editor") ? ".w-editor-body" : "body",
          l =
            "header, " +
            s +
            " > .header, " +
            s +
            " > .w-nav:not([data-no-scroll])",
          m = 'a[href="#"]',
          v = 'a[href*="#"]:not(.w-tab-link):not(' + m + ")",
          p = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
          E = document.createElement("style");
        E.appendChild(document.createTextNode(p));
        function T() {
          try {
            return !!window.frameElement;
          } catch {
            return !0;
          }
        }
        var I = /^#[a-zA-Z0-9][\w:.-]*$/;
        function S(q) {
          return I.test(q.hash) && q.host + q.pathname === r.host + r.pathname;
        }
        let b =
          typeof window.matchMedia == "function" &&
          window.matchMedia("(prefers-reduced-motion: reduce)");
        function R() {
          return (
            document.body.getAttribute("data-wf-scroll-motion") === "none" ||
            b.matches
          );
        }
        function O(q, w) {
          var M;
          switch (w) {
            case "add":
              (M = q.attr("tabindex")),
                M
                  ? q.attr("data-wf-tabindex-swap", M)
                  : q.attr("tabindex", "-1");
              break;
            case "remove":
              (M = q.attr("data-wf-tabindex-swap")),
                M
                  ? (q.attr("tabindex", M),
                    q.removeAttr("data-wf-tabindex-swap"))
                  : q.removeAttr("tabindex");
              break;
          }
          q.toggleClass("wf-force-outline-none", w === "add");
        }
        function L(q) {
          var w = q.currentTarget;
          if (
            !(
              Hn.env("design") ||
              (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(w.className))
            )
          ) {
            var M = S(w) ? w.hash : "";
            if (M !== "") {
              var K = e(M);
              K.length &&
                (q && (q.preventDefault(), q.stopPropagation()),
                D(M, q),
                window.setTimeout(
                  function () {
                    C(K, function () {
                      O(K, "add"),
                        K.get(0).focus({ preventScroll: !0 }),
                        O(K, "remove");
                    });
                  },
                  q ? 0 : 300
                ));
            }
          }
        }
        function D(q) {
          if (
            r.hash !== q &&
            n &&
            n.pushState &&
            !(Hn.env.chrome && r.protocol === "file:")
          ) {
            var w = n.state && n.state.hash;
            w !== q && n.pushState({ hash: q }, "", q);
          }
        }
        function C(q, w) {
          var M = i.scrollTop(),
            K = W(q);
          if (M !== K) {
            var B = H(q, M, K),
              te = Date.now(),
              re = function () {
                var ce = Date.now() - te;
                window.scroll(0, z(M, K, ce, B)),
                  ce <= B ? u(re) : typeof w == "function" && w();
              };
            u(re);
          }
        }
        function W(q) {
          var w = e(l),
            M = w.css("position") === "fixed" ? w.outerHeight() : 0,
            K = q.offset().top - M;
          if (q.data("scroll") === "mid") {
            var B = i.height() - M,
              te = q.outerHeight();
            te < B && (K -= Math.round((B - te) / 2));
          }
          return K;
        }
        function H(q, w, M) {
          if (R()) return 0;
          var K = 1;
          return (
            a.add(q).each(function (B, te) {
              var re = parseFloat(te.getAttribute("data-scroll-time"));
              !isNaN(re) && re >= 0 && (K = re);
            }),
            (472.143 * Math.log(Math.abs(w - M) + 125) - 2e3) * K
          );
        }
        function z(q, w, M, K) {
          return M > K ? w : q + (w - q) * Q(M / K);
        }
        function Q(q) {
          return q < 0.5
            ? 4 * q * q * q
            : (q - 1) * (2 * q - 2) * (2 * q - 2) + 1;
        }
        function ee() {
          var { WF_CLICK_EMPTY: q, WF_CLICK_SCROLL: w } = t;
          o.on(w, v, L),
            o.on(q, m, function (M) {
              M.preventDefault();
            }),
            document.head.insertBefore(E, document.head.firstChild);
        }
        return { ready: ee };
      })
    );
  });
  var Lv = f((wG, Cv) => {
    "use strict";
    var _F = Ge();
    _F.define(
      "touch",
      (Cv.exports = function (e) {
        var t = {},
          r = window.getSelection;
        (e.event.special.tap = { bindType: "click", delegateType: "click" }),
          (t.init = function (o) {
            return (
              (o = typeof o == "string" ? e(o).get(0) : o), o ? new n(o) : null
            );
          });
        function n(o) {
          var a = !1,
            u = !1,
            s = Math.min(Math.round(window.innerWidth * 0.04), 40),
            l,
            m;
          o.addEventListener("touchstart", v, !1),
            o.addEventListener("touchmove", p, !1),
            o.addEventListener("touchend", E, !1),
            o.addEventListener("touchcancel", T, !1),
            o.addEventListener("mousedown", v, !1),
            o.addEventListener("mousemove", p, !1),
            o.addEventListener("mouseup", E, !1),
            o.addEventListener("mouseout", T, !1);
          function v(S) {
            var b = S.touches;
            (b && b.length > 1) ||
              ((a = !0),
              b ? ((u = !0), (l = b[0].clientX)) : (l = S.clientX),
              (m = l));
          }
          function p(S) {
            if (a) {
              if (u && S.type === "mousemove") {
                S.preventDefault(), S.stopPropagation();
                return;
              }
              var b = S.touches,
                R = b ? b[0].clientX : S.clientX,
                O = R - m;
              (m = R),
                Math.abs(O) > s &&
                  r &&
                  String(r()) === "" &&
                  (i("swipe", S, { direction: O > 0 ? "right" : "left" }), T());
            }
          }
          function E(S) {
            if (a && ((a = !1), u && S.type === "mouseup")) {
              S.preventDefault(), S.stopPropagation(), (u = !1);
              return;
            }
          }
          function T() {
            a = !1;
          }
          function I() {
            o.removeEventListener("touchstart", v, !1),
              o.removeEventListener("touchmove", p, !1),
              o.removeEventListener("touchend", E, !1),
              o.removeEventListener("touchcancel", T, !1),
              o.removeEventListener("mousedown", v, !1),
              o.removeEventListener("mousemove", p, !1),
              o.removeEventListener("mouseup", E, !1),
              o.removeEventListener("mouseout", T, !1),
              (o = null);
          }
          this.destroy = I;
        }
        function i(o, a, u) {
          var s = e.Event(o, { originalEvent: a });
          e(a.target).trigger(s, u);
        }
        return (t.instance = t.init(document)), t;
      })
    );
  });
  var Pv = f((la) => {
    "use strict";
    Object.defineProperty(la, "__esModule", { value: !0 });
    Object.defineProperty(la, "default", {
      enumerable: !0,
      get: function () {
        return IF;
      },
    });
    function IF(e, t, r, n, i, o, a, u, s, l, m, v, p) {
      return function (E) {
        e(E);
        var T = E.form,
          I = {
            name: T.attr("data-name") || T.attr("name") || "Untitled Form",
            pageId: T.attr("data-wf-page-id") || "",
            elementId: T.attr("data-wf-element-id") || "",
            source: t.href,
            test: r.env(),
            fields: {},
            fileUploads: {},
            dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(
              T.html()
            ),
            trackingCookies: n(),
          };
        let S = T.attr("data-wf-flow");
        S && (I.wfFlow = S), i(E);
        var b = o(T, I.fields);
        if (b) return a(b);
        if (((I.fileUploads = u(T)), s(E), !l)) {
          m(E);
          return;
        }
        v.ajax({
          url: p,
          type: "POST",
          data: I,
          dataType: "json",
          crossDomain: !0,
        })
          .done(function (R) {
            R && R.code === 200 && (E.success = !0), m(E);
          })
          .fail(function () {
            m(E);
          });
      };
    }
  });
  var Dv = f((OG, Nv) => {
    "use strict";
    var zn = Ge(),
      TF = (e, t, r, n) => {
        let i = document.createElement("div");
        t.appendChild(i),
          turnstile.render(i, {
            sitekey: e,
            callback: function (o) {
              r(o);
            },
            "error-callback": function () {
              n();
            },
          });
      };
    zn.define(
      "forms",
      (Nv.exports = function (e, t) {
        let r = "TURNSTILE_LOADED";
        var n = {},
          i = e(document),
          o,
          a = window.location,
          u = window.XDomainRequest && !window.atob,
          s = ".w-form",
          l,
          m = /e(-)?mail/i,
          v = /^\S+@\S+$/,
          p = window.alert,
          E = zn.env(),
          T,
          I,
          S;
        let b = i.find("[data-turnstile-sitekey]").data("turnstile-sitekey"),
          R;
        var O = /list-manage[1-9]?.com/i,
          L = t.debounce(function () {
            p(
              "Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue."
            );
          }, 100);
        n.ready =
          n.design =
          n.preview =
            function () {
              C(), D(), !E && !T && H();
            };
        function D() {
          (l = e("html").attr("data-wf-site")),
            (I = "https://webflow.com/api/v1/form/" + l),
            u &&
              I.indexOf("https://webflow.com") >= 0 &&
              (I = I.replace(
                "https://webflow.com",
                "https://formdata.webflow.com"
              )),
            (S = `${I}/signFile`),
            (o = e(s + " form")),
            o.length && o.each(W);
        }
        function C() {
          b &&
            ((R = document.createElement("script")),
            (R.src = "https://challenges.cloudflare.com/turnstile/v0/api.js"),
            document.head.appendChild(R),
            (R.onload = () => {
              i.trigger(r);
            }));
        }
        function W(g, h) {
          var X = e(h),
            G = e.data(h, s);
          G || (G = e.data(h, s, { form: X })), z(G);
          var $ = X.closest("div.w-form");
          (G.done = $.find("> .w-form-done")),
            (G.fail = $.find("> .w-form-fail")),
            (G.fileUploads = $.find(".w-file-upload")),
            G.fileUploads.each(function (j) {
              _e(j, G);
            }),
            b &&
              ((G.wait = !1),
              Q(G),
              i.on(typeof turnstile < "u" ? "ready" : r, function () {
                TF(
                  b,
                  h,
                  (j) => {
                    (G.turnstileToken = j), z(G);
                  },
                  () => {
                    Q(G);
                  }
                );
              }));
          var ie =
            G.form.attr("aria-label") || G.form.attr("data-name") || "Form";
          G.done.attr("aria-label") || G.form.attr("aria-label", ie),
            G.done.attr("tabindex", "-1"),
            G.done.attr("role", "region"),
            G.done.attr("aria-label") ||
              G.done.attr("aria-label", ie + " success"),
            G.fail.attr("tabindex", "-1"),
            G.fail.attr("role", "region"),
            G.fail.attr("aria-label") ||
              G.fail.attr("aria-label", ie + " failure");
          var ae = (G.action = X.attr("action"));
          if (
            ((G.handler = null),
            (G.redirect = X.attr("data-redirect")),
            O.test(ae))
          ) {
            G.handler = te;
            return;
          }
          if (!ae) {
            if (l) {
              G.handler = (() => {
                let j = Pv().default;
                return j(z, a, zn, M, ce, ee, p, q, Q, l, re, e, I);
              })();
              return;
            }
            L();
          }
        }
        function H() {
          (T = !0),
            i.on("submit", s + " form", function (j) {
              var d = e.data(this, s);
              d.handler && ((d.evt = j), d.handler(d));
            });
          let g = ".w-checkbox-input",
            h = ".w-radio-input",
            X = "w--redirected-checked",
            G = "w--redirected-focus",
            $ = "w--redirected-focus-visible",
            ie = ":focus-visible, [data-wf-focus-visible]",
            ae = [
              ["checkbox", g],
              ["radio", h],
            ];
          i.on(
            "change",
            s + ' form input[type="checkbox"]:not(' + g + ")",
            (j) => {
              e(j.target).siblings(g).toggleClass(X);
            }
          ),
            i.on("change", s + ' form input[type="radio"]', (j) => {
              e(`input[name="${j.target.name}"]:not(${g})`).map((F, Y) =>
                e(Y).siblings(h).removeClass(X)
              );
              let d = e(j.target);
              d.hasClass("w-radio-input") || d.siblings(h).addClass(X);
            }),
            ae.forEach(([j, d]) => {
              i.on(
                "focus",
                s + ` form input[type="${j}"]:not(` + d + ")",
                (F) => {
                  e(F.target).siblings(d).addClass(G),
                    e(F.target).filter(ie).siblings(d).addClass($);
                }
              ),
                i.on(
                  "blur",
                  s + ` form input[type="${j}"]:not(` + d + ")",
                  (F) => {
                    e(F.target).siblings(d).removeClass(`${G} ${$}`);
                  }
                );
            });
        }
        function z(g) {
          var h = (g.btn = g.form.find(':input[type="submit"]'));
          (g.wait = g.btn.attr("data-wait") || null),
            (g.success = !1),
            h.prop("disabled", !!(b && !g.turnstileToken)),
            g.label && h.val(g.label);
        }
        function Q(g) {
          var h = g.btn,
            X = g.wait;
          h.prop("disabled", !0), X && ((g.label = h.val()), h.val(X));
        }
        function ee(g, h) {
          var X = null;
          return (
            (h = h || {}),
            g
              .find(':input:not([type="submit"]):not([type="file"])')
              .each(function (G, $) {
                var ie = e($),
                  ae = ie.attr("type"),
                  j =
                    ie.attr("data-name") ||
                    ie.attr("name") ||
                    "Field " + (G + 1);
                j = encodeURIComponent(j);
                var d = ie.val();
                if (ae === "checkbox") d = ie.is(":checked");
                else if (ae === "radio") {
                  if (h[j] === null || typeof h[j] == "string") return;
                  d =
                    g
                      .find('input[name="' + ie.attr("name") + '"]:checked')
                      .val() || null;
                }
                typeof d == "string" && (d = e.trim(d)),
                  (h[j] = d),
                  (X = X || K(ie, ae, j, d));
              }),
            X
          );
        }
        function q(g) {
          var h = {};
          return (
            g.find(':input[type="file"]').each(function (X, G) {
              var $ = e(G),
                ie = $.attr("data-name") || $.attr("name") || "File " + (X + 1),
                ae = $.attr("data-value");
              typeof ae == "string" && (ae = e.trim(ae)), (h[ie] = ae);
            }),
            h
          );
        }
        let w = { _mkto_trk: "marketo" };
        function M() {
          return document.cookie.split("; ").reduce(function (h, X) {
            let G = X.split("="),
              $ = G[0];
            if ($ in w) {
              let ie = w[$],
                ae = G.slice(1).join("=");
              h[ie] = ae;
            }
            return h;
          }, {});
        }
        function K(g, h, X, G) {
          var $ = null;
          return (
            h === "password"
              ? ($ = "Passwords cannot be submitted.")
              : g.attr("required")
              ? G
                ? m.test(g.attr("type")) &&
                  (v.test(G) ||
                    ($ = "Please enter a valid email address for: " + X))
                : ($ = "Please fill out the required field: " + X)
              : X === "g-recaptcha-response" &&
                !G &&
                ($ = "Please confirm you\u2019re not a robot."),
            $
          );
        }
        function B(g) {
          ce(g), re(g);
        }
        function te(g) {
          z(g);
          var h = g.form,
            X = {};
          if (/^https/.test(a.href) && !/^https/.test(g.action)) {
            h.attr("method", "post");
            return;
          }
          ce(g);
          var G = ee(h, X);
          if (G) return p(G);
          Q(g);
          var $;
          t.each(X, function (d, F) {
            m.test(F) && (X.EMAIL = d),
              /^((full[ _-]?)?name)$/i.test(F) && ($ = d),
              /^(first[ _-]?name)$/i.test(F) && (X.FNAME = d),
              /^(last[ _-]?name)$/i.test(F) && (X.LNAME = d);
          }),
            $ &&
              !X.FNAME &&
              (($ = $.split(" ")),
              (X.FNAME = $[0]),
              (X.LNAME = X.LNAME || $[1]));
          var ie = g.action.replace("/post?", "/post-json?") + "&c=?",
            ae = ie.indexOf("u=") + 2;
          ae = ie.substring(ae, ie.indexOf("&", ae));
          var j = ie.indexOf("id=") + 3;
          (j = ie.substring(j, ie.indexOf("&", j))),
            (X["b_" + ae + "_" + j] = ""),
            e
              .ajax({ url: ie, data: X, dataType: "jsonp" })
              .done(function (d) {
                (g.success = d.result === "success" || /already/.test(d.msg)),
                  g.success || console.info("MailChimp error: " + d.msg),
                  re(g);
              })
              .fail(function () {
                re(g);
              });
        }
        function re(g) {
          var h = g.form,
            X = g.redirect,
            G = g.success;
          if (G && X) {
            zn.location(X);
            return;
          }
          g.done.toggle(G),
            g.fail.toggle(!G),
            G ? g.done.focus() : g.fail.focus(),
            h.toggle(!G),
            z(g);
        }
        function ce(g) {
          g.evt && g.evt.preventDefault(), (g.evt = null);
        }
        function _e(g, h) {
          if (!h.fileUploads || !h.fileUploads[g]) return;
          var X,
            G = e(h.fileUploads[g]),
            $ = G.find("> .w-file-upload-default"),
            ie = G.find("> .w-file-upload-uploading"),
            ae = G.find("> .w-file-upload-success"),
            j = G.find("> .w-file-upload-error"),
            d = $.find(".w-file-upload-input"),
            F = $.find(".w-file-upload-label"),
            Y = F.children(),
            V = j.find(".w-file-upload-error-msg"),
            de = ae.find(".w-file-upload-file"),
            Se = ae.find(".w-file-remove-link"),
            qe = de.find(".w-file-upload-file-name"),
            c = V.attr("data-w-size-error"),
            _ = V.attr("data-w-type-error"),
            A = V.attr("data-w-generic-error");
          if (
            (E ||
              F.on("click keydown", function (J) {
                (J.type === "keydown" && J.which !== 13 && J.which !== 32) ||
                  (J.preventDefault(), d.click());
              }),
            F.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
            Se.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
            E)
          )
            d.on("click", function (J) {
              J.preventDefault();
            }),
              F.on("click", function (J) {
                J.preventDefault();
              }),
              Y.on("click", function (J) {
                J.preventDefault();
              });
          else {
            Se.on("click keydown", function (J) {
              if (J.type === "keydown") {
                if (J.which !== 13 && J.which !== 32) return;
                J.preventDefault();
              }
              d.removeAttr("data-value"),
                d.val(""),
                qe.html(""),
                $.toggle(!0),
                ae.toggle(!1),
                F.focus();
            }),
              d.on("change", function (J) {
                (X = J.target && J.target.files && J.target.files[0]),
                  X &&
                    ($.toggle(!1),
                    j.toggle(!1),
                    ie.toggle(!0),
                    ie.focus(),
                    qe.text(X.name),
                    oe() || Q(h),
                    (h.fileUploads[g].uploading = !0),
                    y(X, N));
              });
            var x = F.outerHeight();
            d.height(x), d.width(1);
          }
          function P(J) {
            var U = J.responseJSON && J.responseJSON.msg,
              se = A;
            typeof U == "string" && U.indexOf("InvalidFileTypeError") === 0
              ? (se = _)
              : typeof U == "string" &&
                U.indexOf("MaxFileSizeError") === 0 &&
                (se = c),
              V.text(se),
              d.removeAttr("data-value"),
              d.val(""),
              ie.toggle(!1),
              $.toggle(!0),
              j.toggle(!0),
              j.focus(),
              (h.fileUploads[g].uploading = !1),
              oe() || z(h);
          }
          function N(J, U) {
            if (J) return P(J);
            var se = U.fileName,
              ue = U.postData,
              me = U.fileId,
              ke = U.s3Url;
            d.attr("data-value", me), k(ke, ue, X, se, Z);
          }
          function Z(J) {
            if (J) return P(J);
            ie.toggle(!1),
              ae.css("display", "inline-block"),
              ae.focus(),
              (h.fileUploads[g].uploading = !1),
              oe() || z(h);
          }
          function oe() {
            var J = (h.fileUploads && h.fileUploads.toArray()) || [];
            return J.some(function (U) {
              return U.uploading;
            });
          }
        }
        function y(g, h) {
          var X = new URLSearchParams({ name: g.name, size: g.size });
          e.ajax({ type: "GET", url: `${S}?${X}`, crossDomain: !0 })
            .done(function (G) {
              h(null, G);
            })
            .fail(function (G) {
              h(G);
            });
        }
        function k(g, h, X, G, $) {
          var ie = new FormData();
          for (var ae in h) ie.append(ae, h[ae]);
          ie.append("file", X, G),
            e
              .ajax({
                type: "POST",
                url: g,
                data: ie,
                processData: !1,
                contentType: !1,
              })
              .done(function () {
                $(null);
              })
              .fail(function (j) {
                $(j);
              });
        }
        return n;
      })
    );
  });
  var Fv = f((xG, Mv) => {
    "use strict";
    var ht = Ge(),
      bF = Fr(),
      Ae = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      };
    ht.define(
      "navbar",
      (Mv.exports = function (e, t) {
        var r = {},
          n = e.tram,
          i = e(window),
          o = e(document),
          a = t.debounce,
          u,
          s,
          l,
          m,
          v = ht.env(),
          p = '<div class="w-nav-overlay" data-wf-ignore />',
          E = ".w-nav",
          T = "w--open",
          I = "w--nav-dropdown-open",
          S = "w--nav-dropdown-toggle-open",
          b = "w--nav-dropdown-list-open",
          R = "w--nav-link-open",
          O = bF.triggers,
          L = e();
        (r.ready = r.design = r.preview = D),
          (r.destroy = function () {
            (L = e()), C(), s && s.length && s.each(Q);
          });
        function D() {
          (l = v && ht.env("design")),
            (m = ht.env("editor")),
            (u = e(document.body)),
            (s = o.find(E)),
            s.length && (s.each(z), C(), W());
        }
        function C() {
          ht.resize.off(H);
        }
        function W() {
          ht.resize.on(H);
        }
        function H() {
          s.each(g);
        }
        function z(d, F) {
          var Y = e(F),
            V = e.data(F, E);
          V ||
            (V = e.data(F, E, {
              open: !1,
              el: Y,
              config: {},
              selectedIdx: -1,
            })),
            (V.menu = Y.find(".w-nav-menu")),
            (V.links = V.menu.find(".w-nav-link")),
            (V.dropdowns = V.menu.find(".w-dropdown")),
            (V.dropdownToggle = V.menu.find(".w-dropdown-toggle")),
            (V.dropdownList = V.menu.find(".w-dropdown-list")),
            (V.button = Y.find(".w-nav-button")),
            (V.container = Y.find(".w-container")),
            (V.overlayContainerId = "w-nav-overlay-" + d),
            (V.outside = y(V));
          var de = Y.find(".w-nav-brand");
          de &&
            de.attr("href") === "/" &&
            de.attr("aria-label") == null &&
            de.attr("aria-label", "home"),
            V.button.attr("style", "-webkit-user-select: text;"),
            V.button.attr("aria-label") == null &&
              V.button.attr("aria-label", "menu"),
            V.button.attr("role", "button"),
            V.button.attr("tabindex", "0"),
            V.button.attr("aria-controls", V.overlayContainerId),
            V.button.attr("aria-haspopup", "menu"),
            V.button.attr("aria-expanded", "false"),
            V.el.off(E),
            V.button.off(E),
            V.menu.off(E),
            w(V),
            l
              ? (ee(V), V.el.on("setting" + E, M(V)))
              : (q(V),
                V.button.on("click" + E, ce(V)),
                V.menu.on("click" + E, "a", _e(V)),
                V.button.on("keydown" + E, K(V)),
                V.el.on("keydown" + E, B(V))),
            g(d, F);
        }
        function Q(d, F) {
          var Y = e.data(F, E);
          Y && (ee(Y), e.removeData(F, E));
        }
        function ee(d) {
          d.overlay && (j(d, !0), d.overlay.remove(), (d.overlay = null));
        }
        function q(d) {
          d.overlay ||
            ((d.overlay = e(p).appendTo(d.el)),
            d.overlay.attr("id", d.overlayContainerId),
            (d.parent = d.menu.parent()),
            j(d, !0));
        }
        function w(d) {
          var F = {},
            Y = d.config || {},
            V = (F.animation = d.el.attr("data-animation") || "default");
          (F.animOver = /^over/.test(V)),
            (F.animDirect = /left$/.test(V) ? -1 : 1),
            Y.animation !== V && d.open && t.defer(re, d),
            (F.easing = d.el.attr("data-easing") || "ease"),
            (F.easing2 = d.el.attr("data-easing2") || "ease");
          var de = d.el.attr("data-duration");
          (F.duration = de != null ? Number(de) : 400),
            (F.docHeight = d.el.attr("data-doc-height")),
            (d.config = F);
        }
        function M(d) {
          return function (F, Y) {
            Y = Y || {};
            var V = i.width();
            w(d),
              Y.open === !0 && ie(d, !0),
              Y.open === !1 && j(d, !0),
              d.open &&
                t.defer(function () {
                  V !== i.width() && re(d);
                });
          };
        }
        function K(d) {
          return function (F) {
            switch (F.keyCode) {
              case Ae.SPACE:
              case Ae.ENTER:
                return ce(d)(), F.preventDefault(), F.stopPropagation();
              case Ae.ESCAPE:
                return j(d), F.preventDefault(), F.stopPropagation();
              case Ae.ARROW_RIGHT:
              case Ae.ARROW_DOWN:
              case Ae.HOME:
              case Ae.END:
                return d.open
                  ? (F.keyCode === Ae.END
                      ? (d.selectedIdx = d.links.length - 1)
                      : (d.selectedIdx = 0),
                    te(d),
                    F.preventDefault(),
                    F.stopPropagation())
                  : (F.preventDefault(), F.stopPropagation());
            }
          };
        }
        function B(d) {
          return function (F) {
            if (d.open)
              switch (
                ((d.selectedIdx = d.links.index(document.activeElement)),
                F.keyCode)
              ) {
                case Ae.HOME:
                case Ae.END:
                  return (
                    F.keyCode === Ae.END
                      ? (d.selectedIdx = d.links.length - 1)
                      : (d.selectedIdx = 0),
                    te(d),
                    F.preventDefault(),
                    F.stopPropagation()
                  );
                case Ae.ESCAPE:
                  return (
                    j(d),
                    d.button.focus(),
                    F.preventDefault(),
                    F.stopPropagation()
                  );
                case Ae.ARROW_LEFT:
                case Ae.ARROW_UP:
                  return (
                    (d.selectedIdx = Math.max(-1, d.selectedIdx - 1)),
                    te(d),
                    F.preventDefault(),
                    F.stopPropagation()
                  );
                case Ae.ARROW_RIGHT:
                case Ae.ARROW_DOWN:
                  return (
                    (d.selectedIdx = Math.min(
                      d.links.length - 1,
                      d.selectedIdx + 1
                    )),
                    te(d),
                    F.preventDefault(),
                    F.stopPropagation()
                  );
              }
          };
        }
        function te(d) {
          if (d.links[d.selectedIdx]) {
            var F = d.links[d.selectedIdx];
            F.focus(), _e(F);
          }
        }
        function re(d) {
          d.open && (j(d, !0), ie(d, !0));
        }
        function ce(d) {
          return a(function () {
            d.open ? j(d) : ie(d);
          });
        }
        function _e(d) {
          return function (F) {
            var Y = e(this),
              V = Y.attr("href");
            if (!ht.validClick(F.currentTarget)) {
              F.preventDefault();
              return;
            }
            V && V.indexOf("#") === 0 && d.open && j(d);
          };
        }
        function y(d) {
          return (
            d.outside && o.off("click" + E, d.outside),
            function (F) {
              var Y = e(F.target);
              (m && Y.closest(".w-editor-bem-EditorOverlay").length) || k(d, Y);
            }
          );
        }
        var k = a(function (d, F) {
          if (d.open) {
            var Y = F.closest(".w-nav-menu");
            d.menu.is(Y) || j(d);
          }
        });
        function g(d, F) {
          var Y = e.data(F, E),
            V = (Y.collapsed = Y.button.css("display") !== "none");
          if ((Y.open && !V && !l && j(Y, !0), Y.container.length)) {
            var de = X(Y);
            Y.links.each(de), Y.dropdowns.each(de);
          }
          Y.open && ae(Y);
        }
        var h = "max-width";
        function X(d) {
          var F = d.container.css(h);
          return (
            F === "none" && (F = ""),
            function (Y, V) {
              (V = e(V)), V.css(h, ""), V.css(h) === "none" && V.css(h, F);
            }
          );
        }
        function G(d, F) {
          F.setAttribute("data-nav-menu-open", "");
        }
        function $(d, F) {
          F.removeAttribute("data-nav-menu-open");
        }
        function ie(d, F) {
          if (d.open) return;
          (d.open = !0),
            d.menu.each(G),
            d.links.addClass(R),
            d.dropdowns.addClass(I),
            d.dropdownToggle.addClass(S),
            d.dropdownList.addClass(b),
            d.button.addClass(T);
          var Y = d.config,
            V = Y.animation;
          (V === "none" || !n.support.transform || Y.duration <= 0) && (F = !0);
          var de = ae(d),
            Se = d.menu.outerHeight(!0),
            qe = d.menu.outerWidth(!0),
            c = d.el.height(),
            _ = d.el[0];
          if (
            (g(0, _),
            O.intro(0, _),
            ht.redraw.up(),
            l || o.on("click" + E, d.outside),
            F)
          ) {
            P();
            return;
          }
          var A = "transform " + Y.duration + "ms " + Y.easing;
          if (
            (d.overlay &&
              ((L = d.menu.prev()), d.overlay.show().append(d.menu)),
            Y.animOver)
          ) {
            n(d.menu)
              .add(A)
              .set({ x: Y.animDirect * qe, height: de })
              .start({ x: 0 })
              .then(P),
              d.overlay && d.overlay.width(qe);
            return;
          }
          var x = c + Se;
          n(d.menu).add(A).set({ y: -x }).start({ y: 0 }).then(P);
          function P() {
            d.button.attr("aria-expanded", "true");
          }
        }
        function ae(d) {
          var F = d.config,
            Y = F.docHeight ? o.height() : u.height();
          return (
            F.animOver
              ? d.menu.height(Y)
              : d.el.css("position") !== "fixed" && (Y -= d.el.outerHeight(!0)),
            d.overlay && d.overlay.height(Y),
            Y
          );
        }
        function j(d, F) {
          if (!d.open) return;
          (d.open = !1), d.button.removeClass(T);
          var Y = d.config;
          if (
            ((Y.animation === "none" ||
              !n.support.transform ||
              Y.duration <= 0) &&
              (F = !0),
            O.outro(0, d.el[0]),
            o.off("click" + E, d.outside),
            F)
          ) {
            n(d.menu).stop(), _();
            return;
          }
          var V = "transform " + Y.duration + "ms " + Y.easing2,
            de = d.menu.outerHeight(!0),
            Se = d.menu.outerWidth(!0),
            qe = d.el.height();
          if (Y.animOver) {
            n(d.menu)
              .add(V)
              .start({ x: Se * Y.animDirect })
              .then(_);
            return;
          }
          var c = qe + de;
          n(d.menu).add(V).start({ y: -c }).then(_);
          function _() {
            d.menu.height(""),
              n(d.menu).set({ x: 0, y: 0 }),
              d.menu.each($),
              d.links.removeClass(R),
              d.dropdowns.removeClass(I),
              d.dropdownToggle.removeClass(S),
              d.dropdownList.removeClass(b),
              d.overlay &&
                d.overlay.children().length &&
                (L.length ? d.menu.insertAfter(L) : d.menu.prependTo(d.parent),
                d.overlay.attr("style", "").hide()),
              d.el.triggerHandler("w-close"),
              d.button.attr("aria-expanded", "false");
          }
        }
        return r;
      })
    );
  });
  var Gv = f((RG, kv) => {
    "use strict";
    var vt = Ge(),
      AF = Fr(),
      nt = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      },
      qv =
        'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
    vt.define(
      "slider",
      (kv.exports = function (e, t) {
        var r = {},
          n = e.tram,
          i = e(document),
          o,
          a,
          u = vt.env(),
          s = ".w-slider",
          l = '<div class="w-slider-dot" data-wf-ignore />',
          m =
            '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />',
          v = "w-slider-force-show",
          p = AF.triggers,
          E,
          T = !1;
        (r.ready = function () {
          (a = vt.env("design")), I();
        }),
          (r.design = function () {
            (a = !0), setTimeout(I, 1e3);
          }),
          (r.preview = function () {
            (a = !1), I();
          }),
          (r.redraw = function () {
            (T = !0), I(), (T = !1);
          }),
          (r.destroy = S);
        function I() {
          (o = i.find(s)), o.length && (o.each(O), !E && (S(), b()));
        }
        function S() {
          vt.resize.off(R), vt.redraw.off(r.redraw);
        }
        function b() {
          vt.resize.on(R), vt.redraw.on(r.redraw);
        }
        function R() {
          o.filter(":visible").each(B);
        }
        function O(y, k) {
          var g = e(k),
            h = e.data(k, s);
          h ||
            (h = e.data(k, s, {
              index: 0,
              depth: 1,
              hasFocus: { keyboard: !1, mouse: !1 },
              el: g,
              config: {},
            })),
            (h.mask = g.children(".w-slider-mask")),
            (h.left = g.children(".w-slider-arrow-left")),
            (h.right = g.children(".w-slider-arrow-right")),
            (h.nav = g.children(".w-slider-nav")),
            (h.slides = h.mask.children(".w-slide")),
            h.slides.each(p.reset),
            T && (h.maskWidth = 0),
            g.attr("role") === void 0 && g.attr("role", "region"),
            g.attr("aria-label") === void 0 && g.attr("aria-label", "carousel");
          var X = h.mask.attr("id");
          if (
            (X || ((X = "w-slider-mask-" + y), h.mask.attr("id", X)),
            !a && !h.ariaLiveLabel && (h.ariaLiveLabel = e(m).appendTo(h.mask)),
            h.left.attr("role", "button"),
            h.left.attr("tabindex", "0"),
            h.left.attr("aria-controls", X),
            h.left.attr("aria-label") === void 0 &&
              h.left.attr("aria-label", "previous slide"),
            h.right.attr("role", "button"),
            h.right.attr("tabindex", "0"),
            h.right.attr("aria-controls", X),
            h.right.attr("aria-label") === void 0 &&
              h.right.attr("aria-label", "next slide"),
            !n.support.transform)
          ) {
            h.left.hide(), h.right.hide(), h.nav.hide(), (E = !0);
            return;
          }
          h.el.off(s),
            h.left.off(s),
            h.right.off(s),
            h.nav.off(s),
            L(h),
            a
              ? (h.el.on("setting" + s, w(h)), q(h), (h.hasTimer = !1))
              : (h.el.on("swipe" + s, w(h)),
                h.left.on("click" + s, H(h)),
                h.right.on("click" + s, z(h)),
                h.left.on("keydown" + s, W(h, H)),
                h.right.on("keydown" + s, W(h, z)),
                h.nav.on("keydown" + s, "> div", w(h)),
                h.config.autoplay &&
                  !h.hasTimer &&
                  ((h.hasTimer = !0), (h.timerCount = 1), ee(h)),
                h.el.on("mouseenter" + s, C(h, !0, "mouse")),
                h.el.on("focusin" + s, C(h, !0, "keyboard")),
                h.el.on("mouseleave" + s, C(h, !1, "mouse")),
                h.el.on("focusout" + s, C(h, !1, "keyboard"))),
            h.nav.on("click" + s, "> div", w(h)),
            u ||
              h.mask
                .contents()
                .filter(function () {
                  return this.nodeType === 3;
                })
                .remove();
          var G = g.filter(":hidden");
          G.addClass(v);
          var $ = g.parents(":hidden");
          $.addClass(v), T || B(y, k), G.removeClass(v), $.removeClass(v);
        }
        function L(y) {
          var k = {};
          (k.crossOver = 0),
            (k.animation = y.el.attr("data-animation") || "slide"),
            k.animation === "outin" &&
              ((k.animation = "cross"), (k.crossOver = 0.5)),
            (k.easing = y.el.attr("data-easing") || "ease");
          var g = y.el.attr("data-duration");
          if (
            ((k.duration = g != null ? parseInt(g, 10) : 500),
            D(y.el.attr("data-infinite")) && (k.infinite = !0),
            D(y.el.attr("data-disable-swipe")) && (k.disableSwipe = !0),
            D(y.el.attr("data-hide-arrows"))
              ? (k.hideArrows = !0)
              : y.config.hideArrows && (y.left.show(), y.right.show()),
            D(y.el.attr("data-autoplay")))
          ) {
            (k.autoplay = !0),
              (k.delay = parseInt(y.el.attr("data-delay"), 10) || 2e3),
              (k.timerMax = parseInt(y.el.attr("data-autoplay-limit"), 10));
            var h = "mousedown" + s + " touchstart" + s;
            a ||
              y.el.off(h).one(h, function () {
                q(y);
              });
          }
          var X = y.right.width();
          (k.edge = X ? X + 40 : 100), (y.config = k);
        }
        function D(y) {
          return y === "1" || y === "true";
        }
        function C(y, k, g) {
          return function (h) {
            if (k) y.hasFocus[g] = k;
            else if (
              e.contains(y.el.get(0), h.relatedTarget) ||
              ((y.hasFocus[g] = k),
              (y.hasFocus.mouse && g === "keyboard") ||
                (y.hasFocus.keyboard && g === "mouse"))
            )
              return;
            k
              ? (y.ariaLiveLabel.attr("aria-live", "polite"),
                y.hasTimer && q(y))
              : (y.ariaLiveLabel.attr("aria-live", "off"), y.hasTimer && ee(y));
          };
        }
        function W(y, k) {
          return function (g) {
            switch (g.keyCode) {
              case nt.SPACE:
              case nt.ENTER:
                return k(y)(), g.preventDefault(), g.stopPropagation();
            }
          };
        }
        function H(y) {
          return function () {
            K(y, { index: y.index - 1, vector: -1 });
          };
        }
        function z(y) {
          return function () {
            K(y, { index: y.index + 1, vector: 1 });
          };
        }
        function Q(y, k) {
          var g = null;
          k === y.slides.length && (I(), te(y)),
            t.each(y.anchors, function (h, X) {
              e(h.els).each(function (G, $) {
                e($).index() === k && (g = X);
              });
            }),
            g != null && K(y, { index: g, immediate: !0 });
        }
        function ee(y) {
          q(y);
          var k = y.config,
            g = k.timerMax;
          (g && y.timerCount++ > g) ||
            (y.timerId = window.setTimeout(function () {
              y.timerId == null || a || (z(y)(), ee(y));
            }, k.delay));
        }
        function q(y) {
          window.clearTimeout(y.timerId), (y.timerId = null);
        }
        function w(y) {
          return function (k, g) {
            g = g || {};
            var h = y.config;
            if (a && k.type === "setting") {
              if (g.select === "prev") return H(y)();
              if (g.select === "next") return z(y)();
              if ((L(y), te(y), g.select == null)) return;
              Q(y, g.select);
              return;
            }
            if (k.type === "swipe")
              return h.disableSwipe || vt.env("editor")
                ? void 0
                : g.direction === "left"
                ? z(y)()
                : g.direction === "right"
                ? H(y)()
                : void 0;
            if (y.nav.has(k.target).length) {
              var X = e(k.target).index();
              if (
                (k.type === "click" && K(y, { index: X }), k.type === "keydown")
              )
                switch (k.keyCode) {
                  case nt.ENTER:
                  case nt.SPACE: {
                    K(y, { index: X }), k.preventDefault();
                    break;
                  }
                  case nt.ARROW_LEFT:
                  case nt.ARROW_UP: {
                    M(y.nav, Math.max(X - 1, 0)), k.preventDefault();
                    break;
                  }
                  case nt.ARROW_RIGHT:
                  case nt.ARROW_DOWN: {
                    M(y.nav, Math.min(X + 1, y.pages)), k.preventDefault();
                    break;
                  }
                  case nt.HOME: {
                    M(y.nav, 0), k.preventDefault();
                    break;
                  }
                  case nt.END: {
                    M(y.nav, y.pages), k.preventDefault();
                    break;
                  }
                  default:
                    return;
                }
            }
          };
        }
        function M(y, k) {
          var g = y.children().eq(k).focus();
          y.children().not(g);
        }
        function K(y, k) {
          k = k || {};
          var g = y.config,
            h = y.anchors;
          y.previous = y.index;
          var X = k.index,
            G = {};
          X < 0
            ? ((X = h.length - 1),
              g.infinite &&
                ((G.x = -y.endX), (G.from = 0), (G.to = h[0].width)))
            : X >= h.length &&
              ((X = 0),
              g.infinite &&
                ((G.x = h[h.length - 1].width),
                (G.from = -h[h.length - 1].x),
                (G.to = G.from - G.x))),
            (y.index = X);
          var $ = y.nav
            .children()
            .eq(X)
            .addClass("w-active")
            .attr("aria-pressed", "true")
            .attr("tabindex", "0");
          y.nav
            .children()
            .not($)
            .removeClass("w-active")
            .attr("aria-pressed", "false")
            .attr("tabindex", "-1"),
            g.hideArrows &&
              (y.index === h.length - 1 ? y.right.hide() : y.right.show(),
              y.index === 0 ? y.left.hide() : y.left.show());
          var ie = y.offsetX || 0,
            ae = (y.offsetX = -h[y.index].x),
            j = { x: ae, opacity: 1, visibility: "" },
            d = e(h[y.index].els),
            F = e(h[y.previous] && h[y.previous].els),
            Y = y.slides.not(d),
            V = g.animation,
            de = g.easing,
            Se = Math.round(g.duration),
            qe = k.vector || (y.index > y.previous ? 1 : -1),
            c = "opacity " + Se + "ms " + de,
            _ = "transform " + Se + "ms " + de;
          if (
            (d.find(qv).removeAttr("tabindex"),
            d.removeAttr("aria-hidden"),
            d.find("*").removeAttr("aria-hidden"),
            Y.find(qv).attr("tabindex", "-1"),
            Y.attr("aria-hidden", "true"),
            Y.find("*").attr("aria-hidden", "true"),
            a || (d.each(p.intro), Y.each(p.outro)),
            k.immediate && !T)
          ) {
            n(d).set(j), P();
            return;
          }
          if (y.index === y.previous) return;
          if (
            (a || y.ariaLiveLabel.text(`Slide ${X + 1} of ${h.length}.`),
            V === "cross")
          ) {
            var A = Math.round(Se - Se * g.crossOver),
              x = Math.round(Se - A);
            (c = "opacity " + A + "ms " + de),
              n(F).set({ visibility: "" }).add(c).start({ opacity: 0 }),
              n(d)
                .set({ visibility: "", x: ae, opacity: 0, zIndex: y.depth++ })
                .add(c)
                .wait(x)
                .then({ opacity: 1 })
                .then(P);
            return;
          }
          if (V === "fade") {
            n(F).set({ visibility: "" }).stop(),
              n(d)
                .set({ visibility: "", x: ae, opacity: 0, zIndex: y.depth++ })
                .add(c)
                .start({ opacity: 1 })
                .then(P);
            return;
          }
          if (V === "over") {
            (j = { x: y.endX }),
              n(F).set({ visibility: "" }).stop(),
              n(d)
                .set({
                  visibility: "",
                  zIndex: y.depth++,
                  x: ae + h[y.index].width * qe,
                })
                .add(_)
                .start({ x: ae })
                .then(P);
            return;
          }
          g.infinite && G.x
            ? (n(y.slides.not(F))
                .set({ visibility: "", x: G.x })
                .add(_)
                .start({ x: ae }),
              n(F).set({ visibility: "", x: G.from }).add(_).start({ x: G.to }),
              (y.shifted = F))
            : (g.infinite &&
                y.shifted &&
                (n(y.shifted).set({ visibility: "", x: ie }),
                (y.shifted = null)),
              n(y.slides).set({ visibility: "" }).add(_).start({ x: ae }));
          function P() {
            (d = e(h[y.index].els)),
              (Y = y.slides.not(d)),
              V !== "slide" && (j.visibility = "hidden"),
              n(Y).set(j);
          }
        }
        function B(y, k) {
          var g = e.data(k, s);
          if (g) {
            if (ce(g)) return te(g);
            a && _e(g) && te(g);
          }
        }
        function te(y) {
          var k = 1,
            g = 0,
            h = 0,
            X = 0,
            G = y.maskWidth,
            $ = G - y.config.edge;
          $ < 0 && ($ = 0),
            (y.anchors = [{ els: [], x: 0, width: 0 }]),
            y.slides.each(function (ae, j) {
              h - g > $ &&
                (k++,
                (g += G),
                (y.anchors[k - 1] = { els: [], x: h, width: 0 })),
                (X = e(j).outerWidth(!0)),
                (h += X),
                (y.anchors[k - 1].width += X),
                y.anchors[k - 1].els.push(j);
              var d = ae + 1 + " of " + y.slides.length;
              e(j).attr("aria-label", d), e(j).attr("role", "group");
            }),
            (y.endX = h),
            a && (y.pages = null),
            y.nav.length && y.pages !== k && ((y.pages = k), re(y));
          var ie = y.index;
          ie >= k && (ie = k - 1), K(y, { immediate: !0, index: ie });
        }
        function re(y) {
          var k = [],
            g,
            h = y.el.attr("data-nav-spacing");
          h && (h = parseFloat(h) + "px");
          for (var X = 0, G = y.pages; X < G; X++)
            (g = e(l)),
              g
                .attr("aria-label", "Show slide " + (X + 1) + " of " + G)
                .attr("aria-pressed", "false")
                .attr("role", "button")
                .attr("tabindex", "-1"),
              y.nav.hasClass("w-num") && g.text(X + 1),
              h != null && g.css({ "margin-left": h, "margin-right": h }),
              k.push(g);
          y.nav.empty().append(k);
        }
        function ce(y) {
          var k = y.mask.width();
          return y.maskWidth !== k ? ((y.maskWidth = k), !0) : !1;
        }
        function _e(y) {
          var k = 0;
          return (
            y.slides.each(function (g, h) {
              k += e(h).outerWidth(!0);
            }),
            y.slidesWidth !== k ? ((y.slidesWidth = k), !0) : !1
          );
        }
        return r;
      })
    );
  });
  Aa();
  Sa();
  xa();
  La();
  Fr();
  wv();
  Ov();
  Rv();
  Lv();
  Dv();
  Fv();
  Gv();
})();

Webflow.require("ix2").init({
  events: {
    e: {
      id: "e",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6721ec867443957022419c97|e34bfb24-a02b-0440-bdfb-35d388521ea0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6721ec867443957022419c97|e34bfb24-a02b-0440-bdfb-35d388521ea0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1730400047211,
    },
    "e-2": {
      id: "e-2",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6721ec867443957022419c97|e34bfb24-a02b-0440-bdfb-35d388521ea0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6721ec867443957022419c97|e34bfb24-a02b-0440-bdfb-35d388521ea0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1730400047211,
    },
    "e-3": {
      id: "e-3",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-4",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6721ec867443957022419c97|6891d1a2-1b8a-cd5f-86af-d63fca4cb580",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6721ec867443957022419c97|6891d1a2-1b8a-cd5f-86af-d63fca4cb580",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1730400775808,
    },
    "e-4": {
      id: "e-4",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-3",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6721ec867443957022419c97|6891d1a2-1b8a-cd5f-86af-d63fca4cb580",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6721ec867443957022419c97|6891d1a2-1b8a-cd5f-86af-d63fca4cb580",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1730400775808,
    },
    "e-5": {
      id: "e-5",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-6",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6721ec867443957022419c97|f493d388-6981-6d6e-ee89-7cca66d87ae3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6721ec867443957022419c97|f493d388-6981-6d6e-ee89-7cca66d87ae3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1730400983419,
    },
    "e-6": {
      id: "e-6",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-5",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6721ec867443957022419c97|f493d388-6981-6d6e-ee89-7cca66d87ae3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6721ec867443957022419c97|f493d388-6981-6d6e-ee89-7cca66d87ae3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1730400983419,
    },
    "e-7": {
      id: "e-7",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-8",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6721ec867443957022419c97|d551d1d1-24db-a565-68bb-dfb22b4ab363",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6721ec867443957022419c97|d551d1d1-24db-a565-68bb-dfb22b4ab363",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1730401123469,
    },
    "e-8": {
      id: "e-8",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-7",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6721ec867443957022419c97|d551d1d1-24db-a565-68bb-dfb22b4ab363",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6721ec867443957022419c97|d551d1d1-24db-a565-68bb-dfb22b4ab363",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1730401123469,
    },
    "e-9": {
      id: "e-9",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-10",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6721ec867443957022419c97|2da06376-966b-e930-7482-672e72def729",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6721ec867443957022419c97|2da06376-966b-e930-7482-672e72def729",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1730402123954,
    },
    "e-11": {
      id: "e-11",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-12",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6721ec867443957022419c97|0e0ddccf-c264-cc51-6fb1-a91fbf115244",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6721ec867443957022419c97|0e0ddccf-c264-cc51-6fb1-a91fbf115244",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1730402387095,
    },
    "e-13": {
      id: "e-13",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-14",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6721ec867443957022419c97|d8bfd195-6cc3-89a6-1c3a-ac702b98e6b8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6721ec867443957022419c97|d8bfd195-6cc3-89a6-1c3a-ac702b98e6b8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1730402740726,
    },
    "e-15": {
      id: "e-15",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-16",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6721ec867443957022419c97",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6721ec867443957022419c97",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1730405197288,
    },
    "e-19": {
      id: "e-19",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-20",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6721ec867443957022419c97",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6721ec867443957022419c97",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1730449458301,
    },
    "e-21": {
      id: "e-21",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-17",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-22",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        appliesTo: "PAGE",
        styleBlockIds: [],
        id: "6721ec867443957022419c97",
      },
      targets: [],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1730485115863,
    },
  },
  actionLists: {
    a: {
      id: "a",
      title: "tech high",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "6721ec867443957022419c97|e34bfb24-a02b-0440-bdfb-35d388521ea0",
                },
                value: 0.7,
                unit: "",
              },
            },
            {
              id: "a-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".technical",
                  selectorGuids: ["5887425f-ada3-ca1d-f422-7707c2e71151"],
                },
                value: 0.7,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  useEventTarget: true,
                  id: "6721ec867443957022419c97|e34bfb24-a02b-0440-bdfb-35d388521ea0",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  selector: ".technical",
                  selectorGuids: ["5887425f-ada3-ca1d-f422-7707c2e71151"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1730400060985,
    },
    "a-2": {
      id: "a-2",
      title: "technical low",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-2-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 100,
                target: {
                  useEventTarget: true,
                  id: "6721ec867443957022419c97|e34bfb24-a02b-0440-bdfb-35d388521ea0",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-2-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 100,
                target: {
                  selector: ".technical",
                  selectorGuids: ["5887425f-ada3-ca1d-f422-7707c2e71151"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-2-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 100,
                target: {
                  useEventTarget: true,
                  id: "6721ec867443957022419c97|e34bfb24-a02b-0440-bdfb-35d388521ea0",
                },
                value: 0.7,
                unit: "",
              },
            },
            {
              id: "a-2-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 100,
                target: {
                  selector: ".technical",
                  selectorGuids: ["5887425f-ada3-ca1d-f422-7707c2e71151"],
                },
                value: 0.7,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1730400119633,
    },
    "a-3": {
      id: "a-3",
      title: "opacity management high",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-3-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "6721ec867443957022419c97|6891d1a2-1b8a-cd5f-86af-d63fca4cb580",
                },
                value: 0.7,
                unit: "",
              },
            },
            {
              id: "a-3-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".management",
                  selectorGuids: ["43c15842-19ba-f521-29b6-c1bdb645dd7d"],
                },
                value: 0.7,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-3-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  useEventTarget: true,
                  id: "6721ec867443957022419c97|6891d1a2-1b8a-cd5f-86af-d63fca4cb580",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-3-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  selector: ".management",
                  selectorGuids: ["43c15842-19ba-f521-29b6-c1bdb645dd7d"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1730400791100,
    },
    "a-4": {
      id: "a-4",
      title: "management low",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-4-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 100,
                target: {
                  useEventTarget: true,
                  id: "6721ec867443957022419c97|6891d1a2-1b8a-cd5f-86af-d63fca4cb580",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-4-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 100,
                target: {
                  selector: ".management",
                  selectorGuids: ["43c15842-19ba-f521-29b6-c1bdb645dd7d"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-4-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 100,
                target: {
                  useEventTarget: true,
                  id: "6721ec867443957022419c97|6891d1a2-1b8a-cd5f-86af-d63fca4cb580",
                },
                value: 0.7,
                unit: "",
              },
            },
            {
              id: "a-4-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 100,
                target: {
                  selector: ".management",
                  selectorGuids: ["43c15842-19ba-f521-29b6-c1bdb645dd7d"],
                },
                value: 0.7,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1730400901965,
    },
    "a-5": {
      id: "a-5",
      title: "media high",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-5-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "6721ec867443957022419c97|f493d388-6981-6d6e-ee89-7cca66d87ae3",
                },
                value: 0.7,
                unit: "",
              },
            },
            {
              id: "a-5-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".media",
                  selectorGuids: ["660bb647-1ce3-7131-fa7a-6ce5cd799590"],
                },
                value: 0.7,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-5-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  useEventTarget: true,
                  id: "6721ec867443957022419c97|f493d388-6981-6d6e-ee89-7cca66d87ae3",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-5-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  selector: ".media",
                  selectorGuids: ["660bb647-1ce3-7131-fa7a-6ce5cd799590"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1730401007790,
    },
    "a-6": {
      id: "a-6",
      title: "media low",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-6-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 100,
                target: {
                  useEventTarget: true,
                  id: "6721ec867443957022419c97|f493d388-6981-6d6e-ee89-7cca66d87ae3",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-6-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 100,
                target: {
                  selector: ".media",
                  selectorGuids: ["660bb647-1ce3-7131-fa7a-6ce5cd799590"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-6-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 100,
                target: {
                  useEventTarget: true,
                  id: "6721ec867443957022419c97|f493d388-6981-6d6e-ee89-7cca66d87ae3",
                },
                value: 0.7,
                unit: "",
              },
            },
            {
              id: "a-6-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 100,
                target: {
                  selector: ".media",
                  selectorGuids: ["660bb647-1ce3-7131-fa7a-6ce5cd799590"],
                },
                value: 0.7,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1730401067733,
    },
    "a-7": {
      id: "a-7",
      title: "add-skill high",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-7-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 100,
                target: {
                  useEventTarget: true,
                  id: "6721ec867443957022419c97|d551d1d1-24db-a565-68bb-dfb22b4ab363",
                },
                value: 0.7,
                unit: "",
              },
            },
            {
              id: "a-7-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 100,
                target: {
                  selector: ".additional-skill",
                  selectorGuids: ["32a4c10c-937f-a556-d8ba-3f3b985a2376"],
                },
                value: 0.7,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-7-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  useEventTarget: true,
                  id: "6721ec867443957022419c97|d551d1d1-24db-a565-68bb-dfb22b4ab363",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-7-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  selector: ".additional-skill",
                  selectorGuids: ["32a4c10c-937f-a556-d8ba-3f3b985a2376"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1730401129315,
    },
    "a-8": {
      id: "a-8",
      title: "add-skill low",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-8-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 100,
                target: {
                  useEventTarget: true,
                  id: "6721ec867443957022419c97|d551d1d1-24db-a565-68bb-dfb22b4ab363",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-8-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 100,
                target: {
                  selector: ".additional-skill",
                  selectorGuids: ["32a4c10c-937f-a556-d8ba-3f3b985a2376"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-8-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  useEventTarget: true,
                  id: "6721ec867443957022419c97|d551d1d1-24db-a565-68bb-dfb22b4ab363",
                },
                value: 0.7,
                unit: "",
              },
            },
            {
              id: "a-8-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  selector: ".additional-skill",
                  selectorGuids: ["32a4c10c-937f-a556-d8ba-3f3b985a2376"],
                },
                value: 0.7,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1730401184660,
    },
    "a-9": {
      id: "a-9",
      title: "scroll up SJ",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-9-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "6721ec867443957022419c97|2da06376-966b-e930-7482-672e72def729",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-9-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "6721ec867443957022419c97|2da06376-966b-e930-7482-672e72def729",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-9-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "6721ec867443957022419c97|2da06376-966b-e930-7482-672e72def729",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-9-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "6721ec867443957022419c97|2da06376-966b-e930-7482-672e72def729",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1730402138415,
    },
    "a-10": {
      id: "a-10",
      title: "scroll up AO",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-10-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "6721ec867443957022419c97|0e0ddccf-c264-cc51-6fb1-a91fbf115244",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-10-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "6721ec867443957022419c97|0e0ddccf-c264-cc51-6fb1-a91fbf115244",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-10-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 550,
                target: {
                  useEventTarget: true,
                  id: "6721ec867443957022419c97|0e0ddccf-c264-cc51-6fb1-a91fbf115244",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-10-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 550,
                target: {
                  useEventTarget: true,
                  id: "6721ec867443957022419c97|0e0ddccf-c264-cc51-6fb1-a91fbf115244",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-10-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "6721ec867443957022419c97|0e0ddccf-c264-cc51-6fb1-a91fbf115244",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-10-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "6721ec867443957022419c97|0e0ddccf-c264-cc51-6fb1-a91fbf115244",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1730402408822,
    },
    "a-11": {
      id: "a-11",
      title: "scroll up GH",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-11-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "6721ec867443957022419c97|d8bfd195-6cc3-89a6-1c3a-ac702b98e6b8",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-11-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "6721ec867443957022419c97|d8bfd195-6cc3-89a6-1c3a-ac702b98e6b8",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-11-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 1100,
                target: {
                  useEventTarget: true,
                  id: "6721ec867443957022419c97|d8bfd195-6cc3-89a6-1c3a-ac702b98e6b8",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-11-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 1100,
                target: {
                  useEventTarget: true,
                  id: "6721ec867443957022419c97|d8bfd195-6cc3-89a6-1c3a-ac702b98e6b8",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-11-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "6721ec867443957022419c97|d8bfd195-6cc3-89a6-1c3a-ac702b98e6b8",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-11-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "6721ec867443957022419c97|d8bfd195-6cc3-89a6-1c3a-ac702b98e6b8",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1730402746894,
    },
    "a-12": {
      id: "a-12",
      title: "hero",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-12-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "6721ec867443957022419c97|ffe3c7ad-3d91-7a3d-578d-5bc1eca9dab7",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-12-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "6721ec867443957022419c97|1ff0417e-0dfb-fc2a-7064-b3251da31580",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-12-n-6",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "6721ec867443957022419c97|1ff0417e-0dfb-fc2a-7064-b3251da31580",
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-12-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "6721ec867443957022419c97|ffe3c7ad-3d91-7a3d-578d-5bc1eca9dab7",
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-12-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 600,
                target: {
                  id: "6721ec867443957022419c97|ffe3c7ad-3d91-7a3d-578d-5bc1eca9dab7",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-12-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 600,
                target: {
                  id: "6721ec867443957022419c97|ffe3c7ad-3d91-7a3d-578d-5bc1eca9dab7",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-12-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "6721ec867443957022419c97|1ff0417e-0dfb-fc2a-7064-b3251da31580",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-12-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "6721ec867443957022419c97|1ff0417e-0dfb-fc2a-7064-b3251da31580",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1730405209135,
    },
    "a-16": {
      id: "a-16",
      title: "search-with",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-16-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 2000,
                target: {
                  id: "6721ec867443957022419c97|2d45faac-fa24-fe8c-cf3f-7679cf4a7443",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-16-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 3200,
                target: {
                  id: "6721ec867443957022419c97|2d45faac-fa24-fe8c-cf3f-7679cf4a7443",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1730449463654,
    },
    "a-17": {
      id: "a-17",
      title: "hero-sub grow",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-17-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "6721ec867443957022419c97|91277c10-70d3-b304-6947-d3433c5ced54",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-17-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "6721ec867443957022419c97|91277c10-70d3-b304-6947-d3433c5ced54",
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-17-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 1000,
                target: {
                  id: "6721ec867443957022419c97|91277c10-70d3-b304-6947-d3433c5ced54",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-17-n-6",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 1000,
                target: {
                  id: "6721ec867443957022419c97|91277c10-70d3-b304-6947-d3433c5ced54",
                },
                yValue: 80,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-17-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  id: "6721ec867443957022419c97|91277c10-70d3-b304-6947-d3433c5ced54",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-17-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  id: "6721ec867443957022419c97|91277c10-70d3-b304-6947-d3433c5ced54",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      createdOn: 1730485129053,
      useFirstGroupAsInitialState: true,
    },
  },
  site: {
    mediaQueries: [
      { key: "main", min: 992, max: 10000 },
      { key: "medium", min: 768, max: 991 },
      { key: "small", min: 480, max: 767 },
      { key: "tiny", min: 0, max: 479 },
    ],
  },
});
