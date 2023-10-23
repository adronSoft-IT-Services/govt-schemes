import { Categories } from './categories'
import { Ministries } from './ministries'
import { States } from './states'


const time = new Date().getTime();
function createSlug(str) {
    // Step 1: Convert to lowercase
    str = str.toLowerCase();

    // Step 2: Remove special characters and spaces
    str = str.replace(/[^a-z0-9 -]/g, '');

    // Step 3: Replace spaces with hyphens
    str = str.replace(/\s+/g, '_');

    return str;
}


const genders = [
    {
        enumType: 'scheme_parameter_types',
        type: 'gender',
        name: 'All',
        schemes_count: 0,
        last_update: time,
        enumTypeName: 'Scheme Paramameter Types',
        typeName: 'Gender',
        nameValue: 'all',
        isFilter: true,
        valueType: 'string',
    },
    {
        enumType: 'scheme_parameter_types',
        type: 'gender',
        name: 'Male',
        schemes_count: 0,
        last_update: time,
        enumTypeName: 'Scheme Paramameter Types',
        typeName: 'Gender',
        nameValue: 'male',
        isFilter: true,
        valueType: 'string',
    },
    {
        enumType: 'scheme_parameter_types',
        type: 'gender',
        name: 'Female',
        schemes_count: 0,
        last_update: time,
        enumTypeName: 'Scheme Paramameter Types',
        typeName: 'Gender',
        nameValue: 'female',
        isFilter: true,
        valueType: 'string',
    },
    {
        enumType: 'scheme_parameter_types',
        type: 'gender',
        name: 'Transgender',
        schemes_count: 0,
        last_update: time,
        enumTypeName: 'Scheme Paramameter Types',
        typeName: 'Gender',
        nameValue: 'transgender',
        isFilter: true,
        valueType: 'string',
    },
];
const ages = [
    {
        enumType: 'scheme_parameter_types',
        type: 'age',
        name: 'All',
        schemes_count: 0,
        last_update: time,
        enumTypeName: 'Scheme Paramameter Types',
        typeName: 'Age Group',
        nameValue: 'all',
        isFilter: true,
        valueType: 'number',
    },
    {
        enumType: 'scheme_parameter_types',
        type: 'age',
        name: 'Upto 2 Yrs',
        schemes_count: 0,
        last_update: time,
        enumTypeName: 'Scheme Paramameter Types',
        typeName: 'Age Group',
        nameValue: 'upto-2-years',
        isFilter: true,
        valueType: 'number',
    },
    {
        enumType: 'scheme_parameter_types',
        type: 'age',
        name: 'Upto 12 Yrs',
        schemes_count: 0,
        last_update: time,
        enumTypeName: 'Scheme Paramameter Types',
        typeName: 'Age Group',
        nameValue: 'upto-12-years',
        isFilter: true,
        valueType: 'number',
    },
    {
        enumType: 'scheme_parameter_types',
        type: 'age',
        name: 'Below 18 Yrs',
        schemes_count: 0,
        last_update: time,
        enumTypeName: 'Scheme Paramameter Types',
        typeName: 'Age Group',
        nameValue: 'below-18-years',
        isFilter: true,
        valueType: 'number',
    },
    {
        enumType: 'scheme_parameter_types',
        type: 'age',
        name: 'Above 18 - Upto 40 Yrs',
        schemes_count: 0,
        last_update: time,
        enumTypeName: 'Scheme Paramameter Types',
        typeName: 'Age Group',
        nameValue: 'above-18-upto-40-years',
        isFilter: true,
        valueType: 'number',
    },
    {
        enumType: 'scheme_parameter_types',
        type: 'age',
        name: 'Above 40 - Upto 60 Yrs',
        schemes_count: 0,
        last_update: time,
        enumTypeName: 'Scheme Paramameter Types',
        typeName: 'Age Group',
        nameValue: 'above-40-upto-60-years',
        isFilter: true,
        valueType: 'number',
    },
    {
        enumType: 'scheme_parameter_types',
        type: 'age',
        name: 'Above 60 Yrs',
        schemes_count: 0,
        last_update: time,
        enumTypeName: 'Scheme Paramameter Types',
        typeName: 'Age Group',
        nameValue: 'above-60-years',
        isFilter: true,
        valueType: 'number',
    },
];
const castes = [
    {
        enumType: 'scheme_parameter_types',
        type: 'caste',
        name: 'All',
        schemes_count: 0,
        last_update: time,
        enumTypeName: 'Scheme Paramameter Types',
        typeName: 'Caste',
        nameValue: 'all',
        isFilter: true,
        valueType: 'string',
    },
    {
        enumType: 'scheme_parameter_types',
        type: 'caste',
        name: 'Scheduled Caste (SC)',
        schemes_count: 0,
        last_update: time,
        enumTypeName: 'Scheme Paramameter Types',
        typeName: 'Caste',
        nameValue: 'sc',
        isFilter: true,
        valueType: 'string',
    },
    {
        enumType: 'scheme_parameter_types',
        type: 'caste',
        name: 'Scheduled Tribe (ST)',
        schemes_count: 0,
        last_update: time,
        enumTypeName: 'Scheme Paramameter Types',
        typeName: 'Caste',
        nameValue: 'st',
        isFilter: true,
        valueType: 'string',
    },
    {
        enumType: 'scheme_parameter_types',
        type: 'caste',
        name: 'Other Backward Class (OBC)',
        schemes_count: 0,
        last_update: time,
        enumTypeName: 'Scheme Paramameter Types',
        typeName: 'Caste',
        nameValue: 'obc',
        isFilter: true,
        valueType: 'string',
    },
    {
        enumType: 'scheme_parameter_types',
        type: 'caste',
        name: 'Particularly Vulnerable Tribal Group (PVTG)',
        schemes_count: 0,
        last_update: time,
        enumTypeName: 'Scheme Paramameter Types',
        typeName: 'Caste',
        nameValue: 'pvtg',
        isFilter: true,
        valueType: 'string',
    },
    {
        enumType: 'scheme_parameter_types',
        type: 'caste',
        name: 'General',
        schemes_count: 0,
        last_update: time,
        enumTypeName: 'Scheme Paramameter Types',
        typeName: 'Caste',
        nameValue: 'general',
        isFilter: true,
        valueType: 'string',
    },
];
const residence = [
    {
        enumType: 'scheme_parameter_types',
        type: 'residence',
        name: 'Both',
        schemes_count: 0,
        last_update: time,
        enumTypeName: 'Scheme Paramameter Types',
        typeName: 'Resinence Type',
        nameValue: 'both',
        isFilter: true,
        valueType: 'string',
    },
    {
        enumType: 'scheme_parameter_types',
        type: 'residence',
        name: 'Rural',
        schemes_count: 0,
        last_update: time,
        enumTypeName: 'Scheme Paramameter Types',
        typeName: 'Resinence Type',
        nameValue: 'rural',
        isFilter: true,
        valueType: 'string',
    },
    {
        enumType: 'scheme_parameter_types',
        type: 'residence',
        name: 'Urban',
        schemes_count: 0,
        last_update: time,
        enumTypeName: 'Scheme Paramameter Types',
        typeName: 'Resinence Type',
        nameValue: 'urban',
        isFilter: true,
        valueType: 'string',
    },
];
const minority = [
    {
        enumType: 'scheme_parameter_types',
        type: 'minority',
        name: 'Yes',
        schemes_count: 0,
        last_update: time,
        enumTypeName: 'Scheme Paramameter Types',
        typeName: 'Minority',
        nameValue: 'true',
        isFilter: true,
        valueType: 'boolean',
    },
    {
        enumType: 'scheme_parameter_types',
        type: 'minority',
        name: 'No',
        schemes_count: 0,
        last_update: time,
        enumTypeName: 'Scheme Paramameter Types',
        typeName: 'Minority',
        nameValue: 'false',
        isFilter: true,
        valueType: 'boolean',
    },
];
const differently_abled = [
    {
        enumType: 'scheme_parameter_types',
        type: 'differently_abled',
        name: 'Yes',
        schemes_count: 0,
        last_update: time,
        enumTypeName: 'Scheme Paramameter Types',
        typeName: 'Differently abled',
        nameValue: 'true',
        isFilter: true,
        valueType: 'boolean',
    },
    {
        enumType: 'scheme_parameter_types',
        type: 'differently_abled',
        name: 'No',
        schemes_count: 0,
        last_update: time,
        enumTypeName: 'Scheme Paramameter Types',
        typeName: 'Differently abled',
        nameValue: 'false',
        isFilter: true,
        valueType: 'boolean',
    },
];
const benefit_type = [
    {
      enumType: 'scheme_parameter_types',
      type: 'benefit_type',
      name: 'Cash',
      schemes_count: 0,
      last_update: time,
      enumTypeName: 'Scheme Paramameter Types',
      typeName: 'Benefit Type',
      nameValue: 'cash',
      isFilter: true,
      valueType: 'string',
    },
    {
      enumType: 'scheme_parameter_types',
      type: 'benefit_type',
      name: 'Composite',
      schemes_count: 0,
      last_update: time,
      enumTypeName: 'Scheme Paramameter Types',
      typeName: 'Benefit Type',
      nameValue: 'composite',
      isFilter: true,
      valueType: 'string',
    },
    {
      enumType: 'scheme_parameter_types',
      type: 'benefit_type',
      name: 'In Kind',
      schemes_count: 0,
      last_update: time,
      enumTypeName: 'Scheme Paramameter Types',
      typeName: 'Benefit Type',
      nameValue: 'in-kind',
      isFilter: true,
      valueType: 'string',
    },
];
const dbt_scheme = [
    {
        enumType: 'scheme_parameter_types',
        type: 'dbt_scheme',
        name: 'Yes',
        schemes_count: 0,
        last_update: time,
        enumTypeName: 'Scheme Paramameter Types',
        typeName: 'DBT Scheme',
        nameValue: 'true',
        isFilter: true,
        valueType: 'boolean',
    },
    {
        enumType: 'scheme_parameter_types',
        type: 'dbt_scheme',
        name: 'No',
        schemes_count: 0,
        last_update: time,
        enumTypeName: 'Scheme Paramameter Types',
        typeName: 'DBT Scheme',
        nameValue: 'false',
        isFilter: true,
        valueType: 'boolean',
    },
];
const marital_status = [
    {
        enumType: 'scheme_parameter_types',
        type: 'marital_status',
        name: 'All',
        schemes_count: 0,
        last_update: time,
        enumTypeName: 'Scheme Paramameter Types',
        typeName: 'Marital Status',
        nameValue: 'all',
        isFilter: true,
        valueType: 'number',
    },
    {
        enumType: 'scheme_parameter_types',
        type: 'marital_status',
        name: 'Widowed',
        schemes_count: 0,
        last_update: time,
        enumTypeName: 'Scheme Paramameter Types',
        typeName: 'Marital Status',
        nameValue: 'widowed',
        isFilter: true,
        valueType: 'number',
    },
    {
        enumType: 'scheme_parameter_types',
        type: 'marital_status',
        name: 'Never Married',
        schemes_count: 0,
        last_update: time,
        enumTypeName: 'Scheme Paramameter Types',
        typeName: 'Marital Status',
        nameValue: 'never-married',
        isFilter: true,
        valueType: 'number',
    },
    {
        enumType: 'scheme_parameter_types',
        type: 'marital_status',
        name: 'Divorced',
        schemes_count: 0,
        last_update: time,
        enumTypeName: 'Scheme Paramameter Types',
        typeName: 'Marital Status',
        nameValue: 'divorced',
        isFilter: true,
        valueType: 'number',
    },
    {
        enumType: 'scheme_parameter_types',
        type: 'marital_status',
        name: 'Seperated',
        schemes_count: 0,
        last_update: time,
        enumTypeName: 'Scheme Paramameter Types',
        typeName: 'Marital Status',
        nameValue: 'seperated',
        isFilter: true,
        valueType: 'number',
    },
    {
        enumType: 'scheme_parameter_types',
        type: 'marital_status',
        name: 'Married',
        schemes_count: 0,
        last_update: time,
        enumTypeName: 'Scheme Paramameter Types',
        typeName: 'Marital Status',
        nameValue: 'married',
        isFilter: true,
        valueType: 'number',
    },
];
const disability_percentage = [
    {
        enumType: 'scheme_parameter_types',
        type: 'disability_percentage',
        name: 'Not Applicable',
        schemes_count: 0,
        last_update: time,
        enumTypeName: 'Scheme Paramameter Types',
        typeName: 'Disability Percentage',
        nameValue: '0',
        isFilter: true,
        valueType: 'number',
    },
    {
        enumType: 'scheme_parameter_types',
        type: 'disability_percentage',
        name: '40',
        schemes_count: 0,
        last_update: time,
        enumTypeName: 'Scheme Paramameter Types',
        typeName: 'Disability Percentage',
        nameValue: '40',
        isFilter: true,
        valueType: 'number',
    },
    {
        enumType: 'scheme_parameter_types',
        type: 'disability_percentage',
        name: '50',
        schemes_count: 0,
        last_update: time,
        enumTypeName: 'Scheme Paramameter Types',
        typeName: 'Disability Percentage',
        nameValue: '50',
        isFilter: true,
        valueType: 'number',
    },
    {
        enumType: 'scheme_parameter_types',
        type: 'disability_percentage',
        name: '60',
        schemes_count: 0,
        last_update: time,
        enumTypeName: 'Scheme Paramameter Types',
        typeName: 'Disability Percentage',
        nameValue: '60',
        isFilter: true,
        valueType: 'number',
    },
    {
        enumType: 'scheme_parameter_types',
        type: 'disability_percentage',
        name: '70',
        schemes_count: 0,
        last_update: time,
        enumTypeName: 'Scheme Paramameter Types',
        typeName: 'Disability Percentage',
        nameValue: '70',
        isFilter: true,
        valueType: 'number',
    },
    {
        enumType: 'scheme_parameter_types',
        type: 'disability_percentage',
        name: '80',
        schemes_count: 0,
        last_update: time,
        enumTypeName: 'Scheme Paramameter Types',
        typeName: 'Disability Percentage',
        nameValue: '80',
        isFilter: true,
        valueType: 'number',
    },
    {
        enumType: 'scheme_parameter_types',
        type: 'disability_percentage',
        name: '90',
        schemes_count: 0,
        last_update: time,
        enumTypeName: 'Scheme Paramameter Types',
        typeName: 'Disability Percentage',
        nameValue: '90',
        isFilter: true,
        valueType: 'number',
    },
    {
        enumType: 'scheme_parameter_types',
        type: 'disability_percentage',
        name: '100',
        schemes_count: 0,
        last_update: time,
        enumTypeName: 'Scheme Paramameter Types',
        typeName: 'Disability Percentage',
        nameValue: '100',
        isFilter: true,
        valueType: 'number',
    },
];
const below_poverty_line = [
    {
        enumType: 'scheme_parameter_types',
        type: 'below_poverty_line',
        name: 'Yes',
        schemes_count: 0,
        last_update: time,
        enumTypeName: 'Scheme Paramameter Types',
        typeName: 'Below Poverty Line',
        nameValue: 'true',
        isFilter: true,
        valueType: 'boolean',
    },
    {
        enumType: 'scheme_parameter_types',
        type: 'below_poverty_line',
        name: 'No',
        schemes_count: 0,
        last_update: time,
        enumTypeName: 'Scheme Paramameter Types',
        typeName: 'Below Poverty Line',
        nameValue: 'false',
        isFilter: true,
        valueType: 'boolean',
    },
];
const economic_distress = [
    {
        enumType: 'scheme_parameter_types',
        type: 'economic_distress',
        name: 'Yes',
        schemes_count: 0,
        last_update: time,
        enumTypeName: 'Scheme Paramameter Types',
        typeName: 'Economic Distress',
        nameValue: 'true',
        isFilter: true,
        valueType: 'boolean',
    },
    {
        enumType: 'scheme_parameter_types',
        type: 'economic_distress',
        name: 'No',
        schemes_count: 0,
        last_update: time,
        enumTypeName: 'Scheme Paramameter Types',
        typeName: 'Economic Distress',
        nameValue: 'false',
        isFilter: true,
        valueType: 'boolean',
    },
];
const government_employee = [
    {
        enumType: 'scheme_parameter_types',
        type: 'government_employee',
        name: 'Yes',
        schemes_count: 0,
        last_update: time,
        enumTypeName: 'Scheme Paramameter Types',
        typeName: 'Government Employee',
        nameValue: 'true',
        isFilter: true,
        valueType: 'boolean',
    },
    {
        enumType: 'scheme_parameter_types',
        type: 'government_employee',
        name: 'No',
        schemes_count: 0,
        last_update: time,
        enumTypeName: 'Scheme Paramameter Types',
        typeName: 'Government Employee',
        nameValue: 'false',
        isFilter: true,
        valueType: 'boolean',
    },
];
const employment_status = [
    {
        enumType: 'scheme_parameter_types',
        type: 'employment_status',
        name: 'All',
        schemes_count: 0,
        last_update: time,
        enumTypeName: 'Scheme Paramameter Types',
        typeName: 'Employement STatus',
        nameValue: 'all',
        isFilter: true,
        valueType: 'string',
    },
    {
        enumType: 'scheme_parameter_types',
        type: 'employment_status',
        name: 'Self-Employed/Entrepreneur',
        schemes_count: 0,
        last_update: time,
        enumTypeName: 'Scheme Paramameter Types',
        typeName: 'Employement STatus',
        nameValue: 'self',
        isFilter: true,
        valueType: 'string',
    },
    {
        enumType: 'scheme_parameter_types',
        type: 'employment_status',
        name: 'Employed',
        schemes_count: 0,
        last_update: time,
        enumTypeName: 'Scheme Paramameter Types',
        typeName: 'Employement STatus',
        nameValue: 'employed',
        isFilter: true,
        valueType: 'string',
    },
    {
        enumType: 'scheme_parameter_types',
        type: 'employment_status',
        name: 'Unemployed',
        schemes_count: 0,
        last_update: time,
        enumTypeName: 'Scheme Paramameter Types',
        typeName: 'Employement STatus',
        nameValue: 'unemployed',
        isFilter: true,
        valueType: 'string',
    },
];
const students = [
    {
        enumType: 'scheme_parameter_types',
        type: 'student',
        name: 'Yes',
        schemes_count: 0,
        last_update: time,
        enumTypeName: 'Scheme Paramameter Types',
        typeName: 'Student',
        nameValue: 'true',
        isFilter: true,
        valueType: 'boolean',
    },
    {
        enumType: 'scheme_parameter_types',
        type: 'student',
        name: 'No',
        schemes_count: 0,
        last_update: time,
        enumTypeName: 'Scheme Paramameter Types',
        typeName: 'Student',
        nameValue: 'false',
        isFilter: true,
        valueType: 'boolean',
    },
];
const application_modes = [
    {
        enumType: 'scheme_parameter_types',
        type: 'application_modes',
        name: 'Online',
        schemes_count: 0,
        last_update: time,
        enumTypeName: 'Scheme Paramameter Types',
        typeName: 'Application Mode',
        nameValue: 'Online',
        isFilter: true,
        valueType: 'string',
    },
    {
        enumType: 'scheme_parameter_types',
        type: 'application_modes',
        name: 'Offline',
        schemes_count: 0,
        last_update: time,
        enumTypeName: 'Scheme Paramameter Types',
        typeName: 'Application Mode',
        nameValue: 'offline',
        isFilter: true,
        valueType: 'string',
    },
    {
        enumType: 'scheme_parameter_types',
        type: 'application_modes',
        name: 'Online - via CSCs',
        schemes_count: 0,
        last_update: time,
        enumTypeName: 'Scheme Paramameter Types',
        typeName: 'Application Mode',
        nameValue: 'online-csc',
        isFilter: true,
        valueType: 'string',
    },
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
        application_modes: application_modes,
    };
    return statisticsDataForSchemeParameterTypes;
}


const all_occupations = [
    { name: 'All' },
    { name: 'Student' },
    { name: 'Unorganized Worker' },
    { name: 'Farmer' },
    { name: 'Artists' },
    { name: 'Artisans, Spinners & Weavers' },
    { name: 'Sportsperson' },
    { name: 'Safai Karamchari' },
    { name: 'Ex Servicemen' },
    { name: 'Fishermen' },
    { name: 'Journalist' },
    { name: 'Khadi Artisan' },
    { name: 'Health Worker' },
    { name: 'Other' },
];
const all_scheme_types = [
    { name: 'Central Sector Scheme' },
    { name: 'Centrally Sponsored Scheme' },
];


function statisticsDataForInterfaceTypes() {
    const entities = {
        categories: [],
        ministries: [],
        states: [],
        occupations: [],
        scheme_types: [],
    };

    const thisEntity = {
        enumType: 'interface_types',
        enumTypeName: 'Interface Types',
        schemes_count: 0,
        last_update: time,
        isFilter: true,
        valueType: 'string',

        type: '',
        typeName: '',
        name: '',
        nameValue: '',
    };
    Categories.map((entity) => {
        var singleEntity = { ...thisEntity };
        singleEntity.type = 'category';
        singleEntity.typeName = 'Category';
        singleEntity.name = entity.name;
        singleEntity.nameValue = createSlug(entity.name);
        entities.categories.push(singleEntity);
    });
    Ministries.map((entity) => {
        var singleEntity = { ...thisEntity };
        singleEntity.type = 'ministry';
        singleEntity.typeName = 'Ministry';
        singleEntity.name = entity.name;
        singleEntity.nameValue = createSlug(entity.name);
        entities.ministries.push(singleEntity);
    });
    States.map((entity) => {
        var singleEntity = { ...thisEntity };
        singleEntity.type = 'state';
        singleEntity.typeName = 'State';
        singleEntity.stateType = entity.type;
        singleEntity.name = entity.name;
        singleEntity.nameValue = createSlug(entity.name);
        singleEntity.stateCount = 0;
        singleEntity.centralCount = 0;
        entities.states.push(singleEntity);
    });
    all_occupations.map((entity) => {
        var singleEntity = { ...thisEntity };
        singleEntity.type = 'occupation';
        singleEntity.typeName = 'Occupation';
        singleEntity.name = entity.name;
        singleEntity.nameValue = createSlug(entity.name);
        entities.occupations.push(singleEntity);
    });
    all_scheme_types.map((entity) => {
        var singleEntity = { ...thisEntity };
        singleEntity.type = 'scheme_type';
        singleEntity.typeName = 'Scheme Type';
        singleEntity.name = entity.name;
        singleEntity.nameValue = createSlug(entity.name);
        entities.scheme_types.push(singleEntity);
    });

    return entities;
}

const AttributesData = {
    ...getSearchPrameters(),
    ...statisticsDataForInterfaceTypes(),
};


export { AttributesData };