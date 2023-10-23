"use strict";
(() => {
var exports = {};
exports.id = 190;
exports.ids = [190];
exports.modules = {

/***/ 9127:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Ffind_preferredRegion_absolutePagePath_private_next_pages_2Ffind_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ next_route_loaderpage_2Ffind_preferredRegion_absolutePagePath_private_next_pages_2Ffind_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./src/pages/find.js
var find_namespaceObject = {};
__webpack_require__.r(find_namespaceObject);
__webpack_require__.d(find_namespaceObject, {
  "default": () => (Find),
  getServerSideProps: () => (getServerSideProps)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
var module_default = /*#__PURE__*/__webpack_require__.n(pages_module);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./src/pages/_document.js
var _document = __webpack_require__(6687);
// EXTERNAL MODULE: ./src/pages/_app.js + 4 modules
var _app = __webpack_require__(8402);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: external "firebase/app"
const app_namespaceObject = require("firebase/app");
;// CONCATENATED MODULE: external "firebase/firestore"
const firestore_namespaceObject = require("firebase/firestore");
// EXTERNAL MODULE: ./src/data/categories.js
var categories = __webpack_require__(5418);
;// CONCATENATED MODULE: ./src/data/ministries.js
const Ministries = [
    {
        name: "Ministry Of Social Justice and Empowerment"
    },
    {
        name: "Ministry Of Agriculture and Farmers Welfare"
    },
    {
        name: "Ministry of Education"
    },
    {
        name: "Ministry Of Finance"
    },
    {
        name: "Ministry Of Science And Technology"
    },
    {
        name: "Ministry Of Rural Development"
    },
    {
        name: "Ministry Of Youth Affairs & Sports"
    },
    {
        name: "Ministry Of Culture"
    },
    {
        name: "Ministry Of Health & Family Welfare"
    },
    {
        name: "Ministry Of Defence"
    },
    {
        name: "Ministry Of Commerce And Industry"
    },
    {
        name: "Ministry Of Micro, Small and Medium Enterprises"
    },
    {
        name: "Ministry of Women and Child Development"
    },
    {
        name: "Ministry Of Home Affairs"
    },
    {
        name: "Ministry Of Communication"
    },
    {
        name: "Ministry Of External Affairs"
    },
    {
        name: "Ministry Of Labour and Employment"
    },
    {
        name: "Ministry Of Minority Affairs"
    },
    {
        name: "Ministry Of Skill Development And Entrepreneurship"
    },
    {
        name: "Ministry Of Tribal Affairs"
    },
    {
        name: "Ministry of Electronics and Information Technology"
    },
    {
        name: "Ministry Of Housing & Urban Affairs"
    },
    {
        name: "Ministry Of Jal Shakti"
    },
    {
        name: "Ministry Of New and Renewable Energy"
    },
    {
        name: "Ministry Of Personnel, Public Grievances And Pensions"
    },
    {
        name: "Ministry Of Petroleum and Natural Gas"
    },
    {
        name: "Ministry Of Textiles"
    },
    {
        name: "Ministry Of Tourism"
    },
    {
        name: "Ministry Of Chemicals And Fertilizers"
    },
    {
        name: "Ministry Of Environment,forests and climate change"
    },
    {
        name: "Ministry Of Law and Justice"
    },
    {
        name: "Ministry Of Panchayati Raj"
    },
    {
        name: "Ministry of Fisheries,Animal Husbandry and Dairying"
    },
    {
        name: "Ministry of Food Processing Industries"
    },
    {
        name: "Comptroller And Auditor General Of India"
    },
    {
        name: "Ministry Of Consumer Affairs, Food And Public Distribution"
    },
    {
        name: "Ministry Of Development Of North Eastern Region"
    },
    {
        name: "Ministry Of Information And Broadcasting"
    },
    {
        name: "Ministry Of Railways"
    },
    {
        name: "Ministry Of Road Transport & Highways"
    },
    {
        name: "Ministry Of Statistics and Programme Implementation"
    },
    {
        name: "Ministry of Corporate Affairs"
    },
    {
        name: "Ministry of Heavy Industries"
    },
    {
        name: "Ministry of Ports,Shipping and Waterways"
    },
    {
        name: "NITI Aayog (National Institution for Transforming India)"
    }
];

;// CONCATENATED MODULE: ./src/data/states.js
const States = [
    {
        name: "Andhra Pradesh",
        image: "/states/Andhra-Pradesh.svg",
        type: "State",
        schemes: 20,
        central: 263
    },
    {
        name: "Arunachal Pradesh",
        image: "/states/Arunachal-Pradesh.svg",
        type: "State",
        schemes: 35,
        central: 266
    },
    {
        name: "Assam",
        image: "/states/Assam.svg",
        type: "State",
        schemes: 40,
        central: 266
    },
    {
        name: "Bihar",
        image: "/states/Bihar.svg",
        type: "State",
        schemes: 11,
        central: 262
    },
    {
        name: "Chandigarh",
        image: "/states/Chandigarh.svg",
        type: "Union Territory",
        schemes: 7,
        central: 262
    },
    {
        name: "Chhattisgarh",
        image: "/states/Chhattisgarh.svg",
        type: "State",
        schemes: 21,
        central: 263
    },
    {
        name: "Delhi",
        image: "/states/Delhi.svg",
        type: "Union Territory",
        schemes: 19,
        central: 262
    },
    {
        name: "Goa",
        image: "/states/Goa.svg",
        type: "State",
        schemes: 48,
        central: 263
    },
    {
        name: "Gujarat",
        image: "/states/Gujarat.svg",
        type: "State",
        schemes: 44,
        central: 264
    },
    {
        name: "Haryana",
        image: "/states/Haryana.svg",
        type: "State",
        schemes: 44,
        central: 262
    },
    {
        name: "Himachal Pradesh",
        image: "/states/Himachal-Pradesh.svg",
        type: "State",
        schemes: 38,
        central: 262
    },
    {
        name: "Jammu & Kashmir",
        image: "/states/Jammu-Kashmir.svg",
        type: "Union Territory",
        schemes: 38,
        central: 266
    },
    {
        name: "Jharkhand",
        image: "/states/Jharkhand.svg",
        type: "State",
        schemes: 23,
        central: 262
    },
    {
        name: "Karnataka",
        image: "/states/Karnataka.svg",
        type: "State",
        schemes: 14,
        central: 263
    },
    {
        name: "Kerala",
        image: "/states/Kerala.svg",
        type: "State",
        schemes: 22,
        central: 263
    },
    {
        name: "Lakshadweep",
        image: "/states/Lakshadweep.svg",
        type: "Union Territory",
        schemes: 1,
        central: 262
    },
    {
        name: "Madhya Pradesh",
        image: "/states/Madhya-Pradesh.svg",
        type: "State",
        schemes: 30,
        central: 263
    },
    {
        name: "Maharashtra",
        image: "/states/Maharashtra.svg",
        type: "State",
        schemes: 40,
        central: 263
    },
    {
        name: "Manipur",
        image: "/states/Manipur.svg",
        type: "State",
        schemes: 18,
        central: 266
    },
    {
        name: "Meghalaya",
        image: "/states/Meghalaya.svg",
        type: "State",
        schemes: 12,
        central: 265
    },
    {
        name: "Mizoram",
        image: "/states/Mizoram.svg",
        type: "State",
        schemes: 11,
        central: 266
    },
    {
        name: "Nagaland",
        image: "/states/Nagaland.svg",
        type: "State",
        schemes: 11,
        central: 266
    },
    {
        name: "Odisha",
        image: "/states/Odisha.svg",
        type: "State",
        schemes: 34,
        central: 263
    },
    {
        name: "Puducherry",
        image: "/states/Puducherry.svg",
        type: "Union Territory",
        schemes: 8,
        central: 262
    },
    {
        name: "Punjab",
        image: "/states/Punjab.svg",
        type: "State",
        schemes: 100,
        central: 100
    },
    {
        name: "Rajasthan",
        image: "/states/Rajasthan.svg",
        type: "State",
        schemes: 100,
        central: 100
    },
    {
        name: "Sikkim",
        image: "/states/Sikkim.svg",
        type: "State",
        schemes: 100,
        central: 100
    },
    {
        name: "Tamil Nadu",
        image: "/states/Tamil-Nadu.svg",
        type: "State",
        schemes: 100,
        central: 100
    },
    {
        name: "Telangana",
        image: "/states/Telangana.svg",
        type: "State",
        schemes: 100,
        central: 100
    },
    {
        name: "The Dadra And Nagar Haveli And Daman And Diu",
        image: "/states/Daman-Diu.svg",
        type: "Union Territory",
        schemes: 100,
        central: 100
    },
    {
        name: "Tripura",
        image: "/states/Tripura.svg",
        type: "State",
        schemes: 100,
        central: 100
    },
    {
        name: "Uttar Pradesh",
        image: "/states/Uttar-Pradesh.svg",
        type: "State",
        schemes: 100,
        central: 100
    },
    {
        name: "Uttarakhand",
        image: "/states/Uttarakhand.svg",
        type: "State",
        schemes: 100,
        central: 100
    },
    {
        name: "West Bengal",
        image: "/states/West-Bengal.svg",
        type: "State",
        schemes: 100,
        central: 100
    }
];

;// CONCATENATED MODULE: ./src/data/AttributesData.js



const time = new Date().getTime();
function createSlug(str) {
    // Step 1: Convert to lowercase
    str = str.toLowerCase();
    // Step 2: Remove special characters and spaces
    str = str.replace(/[^a-z0-9 -]/g, "");
    // Step 3: Replace spaces with hyphens
    str = str.replace(/\s+/g, "_");
    return str;
}
const genders = [
    {
        enumType: "scheme_parameter_types",
        type: "gender",
        name: "All",
        schemes_count: 0,
        last_update: time,
        enumTypeName: "Scheme Paramameter Types",
        typeName: "Gender",
        nameValue: "all",
        isFilter: true,
        valueType: "string"
    },
    {
        enumType: "scheme_parameter_types",
        type: "gender",
        name: "Male",
        schemes_count: 0,
        last_update: time,
        enumTypeName: "Scheme Paramameter Types",
        typeName: "Gender",
        nameValue: "male",
        isFilter: true,
        valueType: "string"
    },
    {
        enumType: "scheme_parameter_types",
        type: "gender",
        name: "Female",
        schemes_count: 0,
        last_update: time,
        enumTypeName: "Scheme Paramameter Types",
        typeName: "Gender",
        nameValue: "female",
        isFilter: true,
        valueType: "string"
    },
    {
        enumType: "scheme_parameter_types",
        type: "gender",
        name: "Transgender",
        schemes_count: 0,
        last_update: time,
        enumTypeName: "Scheme Paramameter Types",
        typeName: "Gender",
        nameValue: "transgender",
        isFilter: true,
        valueType: "string"
    }
];
const ages = [
    {
        enumType: "scheme_parameter_types",
        type: "age",
        name: "All",
        schemes_count: 0,
        last_update: time,
        enumTypeName: "Scheme Paramameter Types",
        typeName: "Age Group",
        nameValue: "all",
        isFilter: true,
        valueType: "number"
    },
    {
        enumType: "scheme_parameter_types",
        type: "age",
        name: "Upto 2 Yrs",
        schemes_count: 0,
        last_update: time,
        enumTypeName: "Scheme Paramameter Types",
        typeName: "Age Group",
        nameValue: "upto-2-years",
        isFilter: true,
        valueType: "number"
    },
    {
        enumType: "scheme_parameter_types",
        type: "age",
        name: "Upto 12 Yrs",
        schemes_count: 0,
        last_update: time,
        enumTypeName: "Scheme Paramameter Types",
        typeName: "Age Group",
        nameValue: "upto-12-years",
        isFilter: true,
        valueType: "number"
    },
    {
        enumType: "scheme_parameter_types",
        type: "age",
        name: "Below 18 Yrs",
        schemes_count: 0,
        last_update: time,
        enumTypeName: "Scheme Paramameter Types",
        typeName: "Age Group",
        nameValue: "below-18-years",
        isFilter: true,
        valueType: "number"
    },
    {
        enumType: "scheme_parameter_types",
        type: "age",
        name: "Above 18 - Upto 40 Yrs",
        schemes_count: 0,
        last_update: time,
        enumTypeName: "Scheme Paramameter Types",
        typeName: "Age Group",
        nameValue: "above-18-upto-40-years",
        isFilter: true,
        valueType: "number"
    },
    {
        enumType: "scheme_parameter_types",
        type: "age",
        name: "Above 40 - Upto 60 Yrs",
        schemes_count: 0,
        last_update: time,
        enumTypeName: "Scheme Paramameter Types",
        typeName: "Age Group",
        nameValue: "above-40-upto-60-years",
        isFilter: true,
        valueType: "number"
    },
    {
        enumType: "scheme_parameter_types",
        type: "age",
        name: "Above 60 Yrs",
        schemes_count: 0,
        last_update: time,
        enumTypeName: "Scheme Paramameter Types",
        typeName: "Age Group",
        nameValue: "above-60-years",
        isFilter: true,
        valueType: "number"
    }
];
const castes = [
    {
        enumType: "scheme_parameter_types",
        type: "caste",
        name: "All",
        schemes_count: 0,
        last_update: time,
        enumTypeName: "Scheme Paramameter Types",
        typeName: "Caste",
        nameValue: "all",
        isFilter: true,
        valueType: "string"
    },
    {
        enumType: "scheme_parameter_types",
        type: "caste",
        name: "Scheduled Caste (SC)",
        schemes_count: 0,
        last_update: time,
        enumTypeName: "Scheme Paramameter Types",
        typeName: "Caste",
        nameValue: "sc",
        isFilter: true,
        valueType: "string"
    },
    {
        enumType: "scheme_parameter_types",
        type: "caste",
        name: "Scheduled Tribe (ST)",
        schemes_count: 0,
        last_update: time,
        enumTypeName: "Scheme Paramameter Types",
        typeName: "Caste",
        nameValue: "st",
        isFilter: true,
        valueType: "string"
    },
    {
        enumType: "scheme_parameter_types",
        type: "caste",
        name: "Other Backward Class (OBC)",
        schemes_count: 0,
        last_update: time,
        enumTypeName: "Scheme Paramameter Types",
        typeName: "Caste",
        nameValue: "obc",
        isFilter: true,
        valueType: "string"
    },
    {
        enumType: "scheme_parameter_types",
        type: "caste",
        name: "Particularly Vulnerable Tribal Group (PVTG)",
        schemes_count: 0,
        last_update: time,
        enumTypeName: "Scheme Paramameter Types",
        typeName: "Caste",
        nameValue: "pvtg",
        isFilter: true,
        valueType: "string"
    },
    {
        enumType: "scheme_parameter_types",
        type: "caste",
        name: "General",
        schemes_count: 0,
        last_update: time,
        enumTypeName: "Scheme Paramameter Types",
        typeName: "Caste",
        nameValue: "general",
        isFilter: true,
        valueType: "string"
    }
];
const residence = [
    {
        enumType: "scheme_parameter_types",
        type: "residence",
        name: "Both",
        schemes_count: 0,
        last_update: time,
        enumTypeName: "Scheme Paramameter Types",
        typeName: "Resinence Type",
        nameValue: "both",
        isFilter: true,
        valueType: "string"
    },
    {
        enumType: "scheme_parameter_types",
        type: "residence",
        name: "Rural",
        schemes_count: 0,
        last_update: time,
        enumTypeName: "Scheme Paramameter Types",
        typeName: "Resinence Type",
        nameValue: "rural",
        isFilter: true,
        valueType: "string"
    },
    {
        enumType: "scheme_parameter_types",
        type: "residence",
        name: "Urban",
        schemes_count: 0,
        last_update: time,
        enumTypeName: "Scheme Paramameter Types",
        typeName: "Resinence Type",
        nameValue: "urban",
        isFilter: true,
        valueType: "string"
    }
];
const minority = [
    {
        enumType: "scheme_parameter_types",
        type: "minority",
        name: "Yes",
        schemes_count: 0,
        last_update: time,
        enumTypeName: "Scheme Paramameter Types",
        typeName: "Minority",
        nameValue: "true",
        isFilter: true,
        valueType: "boolean"
    },
    {
        enumType: "scheme_parameter_types",
        type: "minority",
        name: "No",
        schemes_count: 0,
        last_update: time,
        enumTypeName: "Scheme Paramameter Types",
        typeName: "Minority",
        nameValue: "false",
        isFilter: true,
        valueType: "boolean"
    }
];
const differently_abled = [
    {
        enumType: "scheme_parameter_types",
        type: "differently_abled",
        name: "Yes",
        schemes_count: 0,
        last_update: time,
        enumTypeName: "Scheme Paramameter Types",
        typeName: "Differently abled",
        nameValue: "true",
        isFilter: true,
        valueType: "boolean"
    },
    {
        enumType: "scheme_parameter_types",
        type: "differently_abled",
        name: "No",
        schemes_count: 0,
        last_update: time,
        enumTypeName: "Scheme Paramameter Types",
        typeName: "Differently abled",
        nameValue: "false",
        isFilter: true,
        valueType: "boolean"
    }
];
const benefit_type = [
    {
        enumType: "scheme_parameter_types",
        type: "benefit_type",
        name: "Cash",
        schemes_count: 0,
        last_update: time,
        enumTypeName: "Scheme Paramameter Types",
        typeName: "Benefit Type",
        nameValue: "cash",
        isFilter: true,
        valueType: "string"
    },
    {
        enumType: "scheme_parameter_types",
        type: "benefit_type",
        name: "Composite",
        schemes_count: 0,
        last_update: time,
        enumTypeName: "Scheme Paramameter Types",
        typeName: "Benefit Type",
        nameValue: "composite",
        isFilter: true,
        valueType: "string"
    },
    {
        enumType: "scheme_parameter_types",
        type: "benefit_type",
        name: "In Kind",
        schemes_count: 0,
        last_update: time,
        enumTypeName: "Scheme Paramameter Types",
        typeName: "Benefit Type",
        nameValue: "in-kind",
        isFilter: true,
        valueType: "string"
    }
];
const dbt_scheme = [
    {
        enumType: "scheme_parameter_types",
        type: "dbt_scheme",
        name: "Yes",
        schemes_count: 0,
        last_update: time,
        enumTypeName: "Scheme Paramameter Types",
        typeName: "DBT Scheme",
        nameValue: "true",
        isFilter: true,
        valueType: "boolean"
    },
    {
        enumType: "scheme_parameter_types",
        type: "dbt_scheme",
        name: "No",
        schemes_count: 0,
        last_update: time,
        enumTypeName: "Scheme Paramameter Types",
        typeName: "DBT Scheme",
        nameValue: "false",
        isFilter: true,
        valueType: "boolean"
    }
];
const marital_status = [
    {
        enumType: "scheme_parameter_types",
        type: "marital_status",
        name: "All",
        schemes_count: 0,
        last_update: time,
        enumTypeName: "Scheme Paramameter Types",
        typeName: "Marital Status",
        nameValue: "all",
        isFilter: true,
        valueType: "number"
    },
    {
        enumType: "scheme_parameter_types",
        type: "marital_status",
        name: "Widowed",
        schemes_count: 0,
        last_update: time,
        enumTypeName: "Scheme Paramameter Types",
        typeName: "Marital Status",
        nameValue: "widowed",
        isFilter: true,
        valueType: "number"
    },
    {
        enumType: "scheme_parameter_types",
        type: "marital_status",
        name: "Never Married",
        schemes_count: 0,
        last_update: time,
        enumTypeName: "Scheme Paramameter Types",
        typeName: "Marital Status",
        nameValue: "never-married",
        isFilter: true,
        valueType: "number"
    },
    {
        enumType: "scheme_parameter_types",
        type: "marital_status",
        name: "Divorced",
        schemes_count: 0,
        last_update: time,
        enumTypeName: "Scheme Paramameter Types",
        typeName: "Marital Status",
        nameValue: "divorced",
        isFilter: true,
        valueType: "number"
    },
    {
        enumType: "scheme_parameter_types",
        type: "marital_status",
        name: "Seperated",
        schemes_count: 0,
        last_update: time,
        enumTypeName: "Scheme Paramameter Types",
        typeName: "Marital Status",
        nameValue: "seperated",
        isFilter: true,
        valueType: "number"
    },
    {
        enumType: "scheme_parameter_types",
        type: "marital_status",
        name: "Married",
        schemes_count: 0,
        last_update: time,
        enumTypeName: "Scheme Paramameter Types",
        typeName: "Marital Status",
        nameValue: "married",
        isFilter: true,
        valueType: "number"
    }
];
const disability_percentage = [
    {
        enumType: "scheme_parameter_types",
        type: "disability_percentage",
        name: "Not Applicable",
        schemes_count: 0,
        last_update: time,
        enumTypeName: "Scheme Paramameter Types",
        typeName: "Disability Percentage",
        nameValue: "0",
        isFilter: true,
        valueType: "number"
    },
    {
        enumType: "scheme_parameter_types",
        type: "disability_percentage",
        name: "40",
        schemes_count: 0,
        last_update: time,
        enumTypeName: "Scheme Paramameter Types",
        typeName: "Disability Percentage",
        nameValue: "40",
        isFilter: true,
        valueType: "number"
    },
    {
        enumType: "scheme_parameter_types",
        type: "disability_percentage",
        name: "50",
        schemes_count: 0,
        last_update: time,
        enumTypeName: "Scheme Paramameter Types",
        typeName: "Disability Percentage",
        nameValue: "50",
        isFilter: true,
        valueType: "number"
    },
    {
        enumType: "scheme_parameter_types",
        type: "disability_percentage",
        name: "60",
        schemes_count: 0,
        last_update: time,
        enumTypeName: "Scheme Paramameter Types",
        typeName: "Disability Percentage",
        nameValue: "60",
        isFilter: true,
        valueType: "number"
    },
    {
        enumType: "scheme_parameter_types",
        type: "disability_percentage",
        name: "70",
        schemes_count: 0,
        last_update: time,
        enumTypeName: "Scheme Paramameter Types",
        typeName: "Disability Percentage",
        nameValue: "70",
        isFilter: true,
        valueType: "number"
    },
    {
        enumType: "scheme_parameter_types",
        type: "disability_percentage",
        name: "80",
        schemes_count: 0,
        last_update: time,
        enumTypeName: "Scheme Paramameter Types",
        typeName: "Disability Percentage",
        nameValue: "80",
        isFilter: true,
        valueType: "number"
    },
    {
        enumType: "scheme_parameter_types",
        type: "disability_percentage",
        name: "90",
        schemes_count: 0,
        last_update: time,
        enumTypeName: "Scheme Paramameter Types",
        typeName: "Disability Percentage",
        nameValue: "90",
        isFilter: true,
        valueType: "number"
    },
    {
        enumType: "scheme_parameter_types",
        type: "disability_percentage",
        name: "100",
        schemes_count: 0,
        last_update: time,
        enumTypeName: "Scheme Paramameter Types",
        typeName: "Disability Percentage",
        nameValue: "100",
        isFilter: true,
        valueType: "number"
    }
];
const below_poverty_line = [
    {
        enumType: "scheme_parameter_types",
        type: "below_poverty_line",
        name: "Yes",
        schemes_count: 0,
        last_update: time,
        enumTypeName: "Scheme Paramameter Types",
        typeName: "Below Poverty Line",
        nameValue: "true",
        isFilter: true,
        valueType: "boolean"
    },
    {
        enumType: "scheme_parameter_types",
        type: "below_poverty_line",
        name: "No",
        schemes_count: 0,
        last_update: time,
        enumTypeName: "Scheme Paramameter Types",
        typeName: "Below Poverty Line",
        nameValue: "false",
        isFilter: true,
        valueType: "boolean"
    }
];
const economic_distress = [
    {
        enumType: "scheme_parameter_types",
        type: "economic_distress",
        name: "Yes",
        schemes_count: 0,
        last_update: time,
        enumTypeName: "Scheme Paramameter Types",
        typeName: "Economic Distress",
        nameValue: "true",
        isFilter: true,
        valueType: "boolean"
    },
    {
        enumType: "scheme_parameter_types",
        type: "economic_distress",
        name: "No",
        schemes_count: 0,
        last_update: time,
        enumTypeName: "Scheme Paramameter Types",
        typeName: "Economic Distress",
        nameValue: "false",
        isFilter: true,
        valueType: "boolean"
    }
];
const government_employee = [
    {
        enumType: "scheme_parameter_types",
        type: "government_employee",
        name: "Yes",
        schemes_count: 0,
        last_update: time,
        enumTypeName: "Scheme Paramameter Types",
        typeName: "Government Employee",
        nameValue: "true",
        isFilter: true,
        valueType: "boolean"
    },
    {
        enumType: "scheme_parameter_types",
        type: "government_employee",
        name: "No",
        schemes_count: 0,
        last_update: time,
        enumTypeName: "Scheme Paramameter Types",
        typeName: "Government Employee",
        nameValue: "false",
        isFilter: true,
        valueType: "boolean"
    }
];
const employment_status = [
    {
        enumType: "scheme_parameter_types",
        type: "employment_status",
        name: "All",
        schemes_count: 0,
        last_update: time,
        enumTypeName: "Scheme Paramameter Types",
        typeName: "Employement STatus",
        nameValue: "all",
        isFilter: true,
        valueType: "string"
    },
    {
        enumType: "scheme_parameter_types",
        type: "employment_status",
        name: "Self-Employed/Entrepreneur",
        schemes_count: 0,
        last_update: time,
        enumTypeName: "Scheme Paramameter Types",
        typeName: "Employement STatus",
        nameValue: "self",
        isFilter: true,
        valueType: "string"
    },
    {
        enumType: "scheme_parameter_types",
        type: "employment_status",
        name: "Employed",
        schemes_count: 0,
        last_update: time,
        enumTypeName: "Scheme Paramameter Types",
        typeName: "Employement STatus",
        nameValue: "employed",
        isFilter: true,
        valueType: "string"
    },
    {
        enumType: "scheme_parameter_types",
        type: "employment_status",
        name: "Unemployed",
        schemes_count: 0,
        last_update: time,
        enumTypeName: "Scheme Paramameter Types",
        typeName: "Employement STatus",
        nameValue: "unemployed",
        isFilter: true,
        valueType: "string"
    }
];
const students = [
    {
        enumType: "scheme_parameter_types",
        type: "student",
        name: "Yes",
        schemes_count: 0,
        last_update: time,
        enumTypeName: "Scheme Paramameter Types",
        typeName: "Student",
        nameValue: "true",
        isFilter: true,
        valueType: "boolean"
    },
    {
        enumType: "scheme_parameter_types",
        type: "student",
        name: "No",
        schemes_count: 0,
        last_update: time,
        enumTypeName: "Scheme Paramameter Types",
        typeName: "Student",
        nameValue: "false",
        isFilter: true,
        valueType: "boolean"
    }
];
const application_modes = [
    {
        enumType: "scheme_parameter_types",
        type: "application_modes",
        name: "Online",
        schemes_count: 0,
        last_update: time,
        enumTypeName: "Scheme Paramameter Types",
        typeName: "Application Mode",
        nameValue: "Online",
        isFilter: true,
        valueType: "string"
    },
    {
        enumType: "scheme_parameter_types",
        type: "application_modes",
        name: "Offline",
        schemes_count: 0,
        last_update: time,
        enumTypeName: "Scheme Paramameter Types",
        typeName: "Application Mode",
        nameValue: "offline",
        isFilter: true,
        valueType: "string"
    },
    {
        enumType: "scheme_parameter_types",
        type: "application_modes",
        name: "Online - via CSCs",
        schemes_count: 0,
        last_update: time,
        enumTypeName: "Scheme Paramameter Types",
        typeName: "Application Mode",
        nameValue: "online-csc",
        isFilter: true,
        valueType: "string"
    }
];
function getSearchPrameters() {
    // Array<Statistic[]>
    const statisticsDataForSchemeParameterTypes = {
        // ...genders,
        genders: genders,
        // ...ages,
        ages: ages,
        // ...castes,
        castes: castes,
        // ...residence,
        residence: residence,
        // ...minority,
        minority: minority,
        // ...differently_abled,
        differently_abled: differently_abled,
        // ...benefit_type,
        benefit_type: benefit_type,
        // ...dbt_scheme,
        dbt_scheme: dbt_scheme,
        // ...marital_status,
        marital_status: marital_status,
        // ...disability_percentage,
        disability_percentage: disability_percentage,
        // ...below_poverty_line,
        below_poverty_line: below_poverty_line,
        // ...economic_distress,
        economic_distress: economic_distress,
        // ...government_employee,
        government_employee: government_employee,
        // ...employment_status,
        employment_status: employment_status,
        // ...students,
        students: students,
        // ...application_modes,
        application_modes: application_modes
    };
    return statisticsDataForSchemeParameterTypes;
}
const all_occupations = [
    {
        name: "All"
    },
    {
        name: "Student"
    },
    {
        name: "Unorganized Worker"
    },
    {
        name: "Farmer"
    },
    {
        name: "Artists"
    },
    {
        name: "Artisans, Spinners & Weavers"
    },
    {
        name: "Sportsperson"
    },
    {
        name: "Safai Karamchari"
    },
    {
        name: "Ex Servicemen"
    },
    {
        name: "Fishermen"
    },
    {
        name: "Journalist"
    },
    {
        name: "Khadi Artisan"
    },
    {
        name: "Health Worker"
    },
    {
        name: "Other"
    }
];
const all_scheme_types = [
    {
        name: "Central Sector Scheme"
    },
    {
        name: "Centrally Sponsored Scheme"
    }
];
function statisticsDataForInterfaceTypes() {
    const entities = {
        categories: [],
        ministries: [],
        states: [],
        occupations: [],
        scheme_types: []
    };
    const thisEntity = {
        enumType: "interface_types",
        enumTypeName: "Interface Types",
        schemes_count: 0,
        last_update: time,
        isFilter: true,
        valueType: "string",
        type: "",
        typeName: "",
        name: "",
        nameValue: ""
    };
    categories/* Categories */.R.map((entity)=>{
        var singleEntity = {
            ...thisEntity
        };
        singleEntity.type = "category";
        singleEntity.typeName = "Category";
        singleEntity.name = entity.name;
        singleEntity.nameValue = createSlug(entity.name);
        entities.categories.push(singleEntity);
    });
    Ministries.map((entity)=>{
        var singleEntity = {
            ...thisEntity
        };
        singleEntity.type = "ministry";
        singleEntity.typeName = "Ministry";
        singleEntity.name = entity.name;
        singleEntity.nameValue = createSlug(entity.name);
        entities.ministries.push(singleEntity);
    });
    States.map((entity)=>{
        var singleEntity = {
            ...thisEntity
        };
        singleEntity.type = "state";
        singleEntity.typeName = "State";
        singleEntity.stateType = entity.type;
        singleEntity.name = entity.name;
        singleEntity.nameValue = createSlug(entity.name);
        singleEntity.stateCount = 0;
        singleEntity.centralCount = 0;
        entities.states.push(singleEntity);
    });
    all_occupations.map((entity)=>{
        var singleEntity = {
            ...thisEntity
        };
        singleEntity.type = "occupation";
        singleEntity.typeName = "Occupation";
        singleEntity.name = entity.name;
        singleEntity.nameValue = createSlug(entity.name);
        entities.occupations.push(singleEntity);
    });
    all_scheme_types.map((entity)=>{
        var singleEntity = {
            ...thisEntity
        };
        singleEntity.type = "scheme_type";
        singleEntity.typeName = "Scheme Type";
        singleEntity.name = entity.name;
        singleEntity.nameValue = createSlug(entity.name);
        entities.scheme_types.push(singleEntity);
    });
    return entities;
}
const AttributesData = {
    ...getSearchPrameters(),
    ...statisticsDataForInterfaceTypes()
};


;// CONCATENATED MODULE: ./src/app/filters.js

// AttributesData
const AllFilters = [
    {
        filterName: "Select State",
        filterType: "dropdown",
        filter: AttributesData.states,
        type: "states",
        selected: ""
    },
    {
        filterName: "Scheme Category",
        filterType: "checkbox",
        filter: AttributesData.categories,
        type: "categories",
        selected: []
    },
    {
        filterName: "Gender",
        filterType: "dropdown",
        filter: AttributesData.genders,
        type: "genders",
        selected: ""
    },
    {
        filterName: "Age",
        filterType: "dropdown",
        filter: AttributesData.ages,
        type: "ages",
        selected: ""
    },
    {
        filterName: "Caste",
        filterType: "dropdown",
        filter: AttributesData.castes,
        type: "castes",
        selected: ""
    },
    {
        filterName: "Ministry",
        filterType: "dropdown",
        filter: AttributesData.ministries,
        type: "ministries",
        selected: ""
    },
    {
        filterName: "Residence",
        filterType: "dropdown",
        filter: AttributesData.residence,
        type: "residence",
        selected: ""
    },
    {
        filterName: "Minority",
        filterType: "dropdown",
        filter: AttributesData.minority,
        type: "minority",
        selected: ""
    },
    {
        filterName: "Differently Abled",
        filterType: "dropdown",
        filter: AttributesData.differently_abled,
        type: "differently_abled",
        selected: ""
    },
    {
        filterName: "Benefit Type",
        filterType: "dropdown",
        filter: AttributesData.benefit_type,
        type: "benefit_type",
        selected: ""
    },
    {
        filterName: "DBT Scheme",
        filterType: "dropdown",
        filter: AttributesData.dbt_scheme,
        type: "dbt_scheme",
        selected: ""
    },
    {
        filterName: "Marital Status",
        filterType: "dropdown",
        filter: AttributesData.marital_status,
        type: "marital_status",
        selected: ""
    },
    {
        filterName: "Disability Percentage",
        filterType: "dropdown",
        filter: AttributesData.disability_percentage,
        type: "disability_percentage",
        selected: ""
    },
    {
        filterName: "Below Powerty Line",
        filterType: "dropdown",
        filter: AttributesData.below_poverty_line,
        type: "below_poverty_line",
        selected: ""
    },
    {
        filterName: "Economic Distress",
        filterType: "dropdown",
        filter: AttributesData.economic_distress,
        type: "economic_distress",
        selected: ""
    },
    {
        filterName: "Government Employee",
        filterType: "dropdown",
        filter: AttributesData.government_employee,
        type: "government_employee",
        selected: ""
    },
    {
        filterName: "Employement Status",
        filterType: "dropdown",
        filter: AttributesData.employment_status,
        type: "employment_status",
        selected: ""
    },
    {
        filterName: "Student",
        filterType: "dropdown",
        filter: AttributesData.students,
        type: "students",
        selected: ""
    },
    {
        filterName: "Occupation",
        filterType: "checkbox",
        filter: AttributesData.occupations,
        type: "occupations",
        selected: []
    },
    {
        filterName: "Application Mode",
        filterType: "dropdown",
        filter: AttributesData.application_modes,
        type: "application_modes",
        selected: ""
    },
    {
        filterName: "Scheme Type",
        filterType: "dropdown",
        filter: AttributesData.scheme_types,
        type: "scheme_types",
        selected: ""
    }
];
/* harmony default export */ const filters = (AllFilters);

;// CONCATENATED MODULE: ./src/firebase.js




// Authentication
const firebaseConfig = {
    apiKey: "AIzaSyBrq3jjo2GHP7FwsrDRwJp1m5G8s7rUhFk",
    authDomain: "govtschemes-e93e6.firebaseapp.com",
    projectId: "govtschemes-e93e6",
    storageBucket: "govtschemes-e93e6.appspot.com",
    messagingSenderId: "443125390412",
    appId: "1:443125390412:web:b5d14796b202593b9c28e9"
};
// Initialize Firebase
const app = (0,app_namespaceObject.initializeApp)(firebaseConfig);
// const auth = getAuth(app);
const fireStore = (0,firestore_namespaceObject.getFirestore)(app);
// export default getFirestore(app)
async function getSchemes() {
    const q = (0,firestore_namespaceObject.query)((0,firestore_namespaceObject.collection)(fireStore, "schemes"), (0,firestore_namespaceObject.where)("isActive", "==", true));
    const schemesCollection = await (0,firestore_namespaceObject.getDocs)(q);
    const allNewSchemes = [];
    schemesCollection.forEach((scheme)=>{
        allNewSchemes.push(scheme);
    });
    return {
        schemes: allNewSchemes,
        filters: filters
    };
// setSchemes(allNewSchemes);
}
const getAllSchemes = getSchemes();


// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./src/components/AllComponents/Schemes/FilterCheckbox.js


function FilterCheckbox({ title, callBack, id, filter, type, selectedValue, ...props }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "wdiget widget_catagory py-3 px-5",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                className: "widget-title text-lg hs-collapse-toggle inline-flex justify-between items-center m-0 w-full",
                id: `collapse-${id}`,
                "data-hs-collapse": `#collapse-${id}-heading`,
                children: [
                    title,
                    /*#__PURE__*/ jsx_runtime.jsx("svg", {
                        className: "bi bi-chevron-up hs-collapse:rotate-180 w-2.5 h-2.5",
                        width: "16",
                        height: "16",
                        fill: "currentColor",
                        viewBox: "0 0 16 16",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                            fillRule: "evenodd",
                            d: "M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                id: `collapse-${id}-heading`,
                className: "mt-3 hs-collapse-open w-full overflow-hidden transition-[height] duration-300",
                "aria-labelledby": `collapse-${id}`,
                children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                    className: "list-item space-y-3",
                    children: filter.map((option, index)=>{
                        return /*#__PURE__*/ jsx_runtime.jsx("li", {
                            className: "block",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                className: "flex space-x-3 form-check cursor-pointer",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                                        type: "checkbox",
                                        className: "hidden form-check-input",
                                        checked: selectedValue.includes(option.nameValue),
                                        value: option.nameValue,
                                        onChange: (e)=>{
                                            callBack(e.target.value, type, false, e.target.checked);
                                        }
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        className: "ck-box flex flex-col items-center justify-center border",
                                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                            src: "/images/icon/white-check.svg",
                                            alt: "",
                                            width: 10,
                                            height: 10,
                                            className: "object-contain w-auto h-auto"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        className: "form-check-label text-sm",
                                        children: option.name
                                    })
                                ]
                            })
                        }, index);
                    })
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/AllComponents/Schemes/SchemeSummary.js

function SchemeSummary({ state, title, summary, tags, slug, props }) {
    return /*#__PURE__*/ jsx_runtime.jsx("button", {
        className: "bg-white rounded-[8px] transition shadow-box7 duration-150 border-b-4 hover:border-primary border-transparent hover:shadow-box6 flex p-8 space-x-6",
        href: "#",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "course-content flex-1",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("p", {
                    className: "text-black text-sm font-bold",
                    children: "Delhi"
                }),
                /*#__PURE__*/ jsx_runtime.jsx("h4", {
                    className: " text-2xl leading-[36px] m-0 font-bold text-green-800",
                    children: "Delhi Ladli Scheme"
                }),
                /*#__PURE__*/ jsx_runtime.jsx("p", {
                    className: "line-clamp-2",
                    children: "TEST, Delhi Ladli Scheme was launched by the Department of Women & Children Development, Government of the National Capital Territory (NCT) of Delhi on 1st January 2008 to empower girl children born in Delhi. The State Bank Life Insurance Co. Ltd. (SBIL) is the scheme's Fund Manager."
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/components/AllComponents/Schemes/FilterDropdown.js

function FilterDropdown({ title, callBack, id, filter, type, selectedValue, ...props }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "wdiget widget_catagory py-3 px-5",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "widget-title text-lg inline-flex justify-between items-center m-0 w-full",
                id: `select-${id}`,
                children: title
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                id: `select-${id}-heading`,
                className: "mt-3 w-full overflow-hidden transition-[height] duration-300",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("select", {
                    defaultValue: selectedValue,
                    onChange: (e)=>{
                        callBack(e.target.value, type, true);
                    },
                    className: "py-3 px-4 pr-9 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-[#ff7e84] focus:ring-[#ff7e84] dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("option", {
                            value: ""
                        }),
                        filter.map((option, index)=>{
                            return /*#__PURE__*/ jsx_runtime.jsx("option", {
                                value: option.nameValue,
                                children: option.name
                            }, index);
                        })
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/_pages/find/searchpage.js






const SearchPage = ({ schemes, filters })=>{
    const [allSchemes, setAllSchemes] = external_react_default().useState(schemes);
    const [allFilters, setAllFilters] = external_react_default().useState(filters);
    const [filteredSchemes, setFilteredSchemes] = external_react_default().useState(allSchemes);
    const findFilterByName = (name)=>{
        return allFilters.find((filter)=>filter.type === name);
    };
    function onChangeFilter(filterValue, filterName, isDropdown = false, isChecked = false) {
        const currentFilter = findFilterByName(filterName);
        // console.log('findFilterByName', currentFilter)
        if (!isDropdown) {
            const oldValues = currentFilter.selected;
            if (isChecked) {
                // add value to filter
                oldValues.push(filterValue);
            } else {
                // remove value from filter
                var index = oldValues.indexOf(filterValue);
                if (index !== -1) {
                    oldValues.splice(index, 1);
                }
            }
            currentFilter.selected = oldValues;
        } else {
            currentFilter.selected = filterValue;
        }
        const filters = allFilters.map((filter)=>{
            if (filter.type === filterName) {
                filter = currentFilter;
            }
            return filter;
        });
        // console.log('findFilterByName', currentFilter)
        // console.log('findFilterByName', filters)
        setAllFilters(filters);
    // console.log(filterValue, filterName, 'isDropdown: ' + isDropdown, 'isChecked: ' + isChecked)
    }
    external_react_default().useEffect(()=>{
        console.log("allSchemes", allSchemes);
        console.log("allFilters", allFilters);
    // start filtering schemes
    }, [
        allFilters,
        allSchemes
    ]);
    const filterSchemes = ()=>{};
    const sortSchemes = ()=>{};
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "nav-tab-wrapper tabs pt-10 section-padding-bottom",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "grid grid-cols-12 gap-[30px]",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "lg:col-span-3 col-span-12",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "sidebarWrapper space-y-[10px]",
                            children: allFilters.map((filter, fIndex)=>{
                                return filter.filterType === "dropdown" ? /*#__PURE__*/ jsx_runtime.jsx(FilterDropdown, {
                                    title: filter.filterName,
                                    selectedValue: filter.selected,
                                    type: filter.type,
                                    callBack: onChangeFilter,
                                    id: fIndex,
                                    filter: filter.filter
                                }, fIndex) : /*#__PURE__*/ jsx_runtime.jsx(FilterCheckbox, {
                                    title: filter.filterName,
                                    selectedValue: filter.selected,
                                    type: filter.type,
                                    callBack: onChangeFilter,
                                    id: fIndex,
                                    filter: filter.filter
                                }, fIndex);
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "lg:col-span-9 col-span-12",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "wdiget widget_search mb-6 p-0",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex bg-white rounded-md shadow-e1 items-center relative",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "flex-1 bg-white",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                type: "text",
                                                placeholder: "Search keyword...",
                                                className: "border-none bg-white focus:ring-0"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "flex-none",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                className: "btn btn-primary",
                                                children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                    src: "/images/icon/search.svg",
                                                    width: 20,
                                                    height: 20,
                                                    alt: "Search"
                                                })
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex md:flex-row flex-col items-center mb-6 space-y-6 md:space-y-0",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex-1 flex sm:flex-row flex-col  space-x-6  items-center",
                                        children: [
                                            "Total ",
                                            filteredSchemes.length,
                                            " ",
                                            filteredSchemes.length > 1 ? "schemes" : "scheme",
                                            " available"
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "flex-0",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "wdiget widget_catagory p-0",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "mt-3 w-full overflow-hidden transition-[height] duration-300 p-0",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("select", {
                                                    defaultValue: "",
                                                    className: "py-3 px-4 pr-9 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-[#ff7e84] focus:ring-[#ff7e84] dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("option", {
                                                            "data-display": "Sort By: Popularity",
                                                            children: "Sort By: Popularity"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("option", {
                                                            value: "1",
                                                            children: "Popularity"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("option", {
                                                            value: "2",
                                                            children: "Another option"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("option", {
                                                            value: "4",
                                                            children: "Potato"
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "content",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "grid grid-cols-1 gap-[30px]",
                                        children: filteredSchemes.map((scheme, index)=>{
                                            return /*#__PURE__*/ jsx_runtime.jsx(SchemeSummary, {}, index);
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "text-center pt-14"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const searchpage = (SearchPage);

;// CONCATENATED MODULE: ./src/pages/find.js



async function getServerSideProps() {
    const data = await getAllSchemes;
    return {
        props: {
            filters: data.filters,
            schemes: JSON.stringify(data.schemes)
        }
    };
}
function Find({ filters, schemes }) {
    const allSchemes = JSON.parse(schemes);
    return /*#__PURE__*/ jsx_runtime.jsx(searchpage, {
        schemes: allSchemes,
        filters: filters
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Ffind&preferredRegion=&absolutePagePath=private-next-pages%2Ffind.js&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=private-next-pages%2F_document.js&middlewareConfigBase64=e30%3D!

        // Next.js Route Loader
        
        

        // Import the app and document modules.
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Ffind_preferredRegion_absolutePagePath_private_next_pages_2Ffind_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(find_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(find_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(find_namespaceObject, "getStaticPaths")
        const next_route_loaderpage_2Ffind_preferredRegion_absolutePagePath_private_next_pages_2Ffind_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_getServerSideProps = (0,helpers/* hoist */.l)(find_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(find_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(find_namespaceObject, "reportWebVitals")
        

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(find_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(find_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(find_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(find_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(find_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/find","pathname":"/find","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({
          ...options,
          components: {
            App: _app["default"],
            Document: _document["default"],
          },
          userland: find_namespaceObject,
        })
        
        
    

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 5132:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/get-img-props.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 2924:
/***/ ((module) => {

module.exports = require("preline");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [743,84,418], () => (__webpack_exec__(9127)));
module.exports = __webpack_exports__;

})();