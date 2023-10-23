exports.id = 84;
exports.ids = [84];
exports.modules = {

/***/ 8402:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./src/components/common/Footer.js



const footerLogo = "/images/logo/footer-logo-2.svg";
const socialIcons = {
    twitter: "/images/icon/tw.svg",
    facebook: "/images/icon/fb.svg",
    pinterest: "/images/icon/pn.svg",
    instagram: "/images/icon/ins.svg"
};
const instagramPostsImage = [
    "/images/all-img/ins-1.png",
    "/images/all-img/ins-2.png",
    "/images/all-img/ins-3.png",
    "/images/all-img/ins-4.png",
    "/images/all-img/ins-5.png",
    "/images/all-img/ins-6.png"
];
function Footer() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("footer", {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "relative z-[1] mx-auto max-w-[1170px] rounded-md bg-[url('/images/all-img/section-bg-3.png')] bg-cover bg-center bg-no-repeat p-20",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "items-center space-x-4 space-y-5 text-center lg:flex lg:space-y-0 lg:text-left",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "flex-1",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "max-w-[590px] text-3xl font-bold text-white md:text-3xl lg:text-[44px] lg:leading-[61px]",
                                children: "Education Is About Creating Leaders For Tomorrow"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "flex-none",
                            children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                className: "btn bg-white font-bold text-black",
                                children: "Register Today"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "-mt-[150px] bg-[url('/images/all-img/section-bg-10.png')] bg-cover bg-center bg-no-repeat pt-[150px]",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "section-padding container",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "grid grid-cols-12 gap-5",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "single-footer col-span-12 lg:col-span-6 xl:col-span-3",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "lg:max-w-[270px]",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                className: "mb-10 block",
                                                children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                    src: "/images/logo/logo.png",
                                                    alt: "image",
                                                    width: 300,
                                                    height: 40
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                children: "Lorem ipsum amet, consectetur adipiscing elit. Suspendis varius enim eros elementum tristique. Duis cursus."
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                className: "flex space-x-4 pt-8",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                            className: "flex h-10 w-10",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                                src: socialIcons.facebook,
                                                                alt: "facebook",
                                                                width: 40,
                                                                height: 40
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                            className: "flex h-10 w-10",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                                src: socialIcons.twitter,
                                                                alt: "twitter",
                                                                width: 40,
                                                                height: 40
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                            className: "flex h-10 w-10",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                                src: socialIcons.pinterest,
                                                                alt: "pinterest",
                                                                width: 40,
                                                                height: 40
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                            className: "flex h-10 w-10",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                                src: socialIcons.instagram,
                                                                alt: "instagram",
                                                                width: 40,
                                                                height: 40
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "single-footer col-span-12 lg:col-span-6 xl:col-span-6",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "ml-auto xl:w-[80%]",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex space-x-[80px]",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex-1 lg:flex-none",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                            className: "mb-8 text-2xl font-bold text-black",
                                                            children: "Links"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                            className: "list-item space-y-5",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                        children: "Home"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                        children: "About Us"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                        children: "Pricing"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                        children: "Courses"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                        children: "Contact Us"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                        children: "Blog"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex-1 lg:flex-none",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                            className: "mb-8 text-2xl font-bold text-black",
                                                            children: "Legal"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                            className: "list-item space-y-5",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                        children: "Legal"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                        children: "Tearms of Use"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                        children: "Tearm & Condition"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                        children: "Payment Method"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                        children: "Privacy Policy"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                        children: "Privacy Policy"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "single-footer col-span-12 lg:col-span-6 xl:col-span-3",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                            className: "mb-8 text-2xl font-bold text-black",
                                            children: "Instagram Post"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "grid grid-cols-3 gap-4",
                                            children: instagramPostsImage.map((image, index)=>{
                                                return /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                                        className: "group relative block h-20 w-full rounded",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                                src: image,
                                                                alt: "instagram",
                                                                width: 149,
                                                                height: 80,
                                                                className: "block h-auto w-auto rounded object-cover"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center rounded bg-black bg-opacity-40 text-3xl text-white opacity-0 transition-all duration-150 group-hover:opacity-100",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                    className: "scale-0 transition-all duration-150 group-hover:scale-100",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("iconify-icon", {
                                                                        icon: "akar-icons:instagram-fill"
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                }, index);
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "container border-t border-[#E9D4D0] py-8 text-center text-base",
                        children: "\xa9 Copyright 2022 | Govt Schemes | All Rights Reserved"
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/common/Header.js




function Header() {
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("header", {
            className: "site-header  header-normal top-0 bg-white z-[9] rt-sticky",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "main-header py-8",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "basis-1/3 justify-start flex",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "/",
                                        className: "brand-logo",
                                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                            src: "/images/emblem-black.svg",
                                            alt: "image",
                                            width: 25,
                                            height: 45
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "/",
                                        className: "brand-logo flex justify-center align-center items-center h-[45px] px-2",
                                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                            src: "/images/logo/logo.png",
                                            alt: "image",
                                            width: 190,
                                            height: 25,
                                            className: "h-auto w-auto"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "https://www.g20.org/en/",
                                        target: "_blank",
                                        className: "brand-logo flex justify-center align-center items-center h-[45px] px-2",
                                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                            src: "/images/di.png",
                                            alt: "image",
                                            width: 70,
                                            height: 30,
                                            className: "h-auto w-auto"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "https://digitalindia.gov.in/",
                                        target: "_blank",
                                        className: "brand-logo flex justify-center align-center items-center h-[45px] px-2",
                                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                            src: "/images/g20_opt.png",
                                            alt: "image",
                                            width: 70,
                                            height: 30,
                                            className: "h-auto w-auto"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "basis-2/3 justify-end",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "w-full flex justify-end text-end",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            className: "py-2 px-4",
                                            href: "/find",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                width: "28",
                                                height: "28",
                                                viewBox: "0 0 20 20",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                    d: "M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",
                                                    stroke: "currentColor",
                                                    fill: "none",
                                                    fillRule: "evenodd",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                                            className: "btn btn-black bg-green-500 py-2 px-4",
                                            children: "Sign In"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                                            className: "btn btn-primary py-2 px-4 ms-2",
                                            children: "Register"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            })
        })
    });
}

;// CONCATENATED MODULE: ./src/app/ClientRoot.js
/* __next_internal_client_entry_do_not_use__ default auto */ 



// import { initializeApp } from 'firebase/app';
// const firebaseConfig = {
//     //...
// };
// const fireApp = initializeApp(firebaseConfig);
function ClientRoot({ children }) {
    external_react_default().useEffect(()=>{
        Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 2924, 23));
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Header, {}),
            children,
            /*#__PURE__*/ jsx_runtime.jsx(Footer, {}),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "rt-mobile-menu-overlay"
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(4542);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: ./src/components/common/FullPageLoader.js

function FullPageLoader() {
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        id: "FullPageLoader",
        className: "fixed top-0 left-0 w-screen h-screen bg-black/70",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "absolute top-1/2 left-1/2",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "animate-spin inline-block w-28 h-28 border-[8px] border-current border-t-transparent text-blue-600 rounded-full",
                role: "status",
                "aria-label": "loading",
                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                    className: "sr-only",
                    children: "Loading..."
                })
            })
        })
    });
}

;// CONCATENATED MODULE: ./src/pages/_app.js






function App({ Component, pageProps }) {
    const [loading, setLoading] = external_react_default().useState(false);
    external_react_default().useEffect(()=>{
        const start = ()=>{
            console.log("start");
            setLoading(true);
        };
        const end = ()=>{
            console.log("finished");
            setLoading(false);
        };
        router_default().events.on("routeChangeStart", start);
        router_default().events.on("routeChangeComplete", end);
        router_default().events.on("routeChangeError", end);
        return ()=>{
            router_default().events.off("routeChangeStart", start);
            router_default().events.off("routeChangeComplete", end);
            router_default().events.off("routeChangeError", end);
        };
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ClientRoot, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Component, {
                ...pageProps
            }),
            loading ? /*#__PURE__*/ jsx_runtime.jsx(FullPageLoader, {}) : ""
        ]
    });
}


/***/ }),

/***/ 6687:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Document),
/* harmony export */   metadata: () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6859);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);


const metadata = {
    title: "Govt. Schemes"
};
function Document({ children }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
        lang: "en",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                className: "font-gilroy font-medium text-gray text-lg leading-[27px]",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {})
                ]
            })
        ]
    });
}


/***/ }),

/***/ 4542:
/***/ (() => {



/***/ })

};
;