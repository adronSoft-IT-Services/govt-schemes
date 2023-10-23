import { AttributesData } from "@/data/AttributesData";


// AttributesData

const AllFilters = [
    {
        filterName: "Select State",
        filterType: "dropdown",
        filter: AttributesData.states,
        type: 'states',
        selected: ''
    },
    {
        filterName: "Scheme Category",
        filterType: "checkbox",
        filter: AttributesData.categories,
        type: 'categories',
        selected: []
    },
    {
        filterName: "Gender",
        filterType: "dropdown",
        filter: AttributesData.genders,
        type: 'genders',
        selected: ''
    },
    {
        filterName: "Age",
        filterType: "dropdown",
        filter: AttributesData.ages,
        type: 'ages',
        selected: ''
    },
    {
        filterName: "Caste",
        filterType: "dropdown",
        filter: AttributesData.castes,
        type: 'castes',
        selected: ''
    },
    {
        filterName: "Ministry",
        filterType: "dropdown",
        filter: AttributesData.ministries,
        type: 'ministries',
        selected: ''
    },
    {
        filterName: "Residence",
        filterType: "dropdown",
        filter: AttributesData.residence,
        type: 'residence',
        selected: ''
    },
    {
        filterName: "Minority",
        filterType: "dropdown",
        filter: AttributesData.minority,
        type: 'minority',
        selected: ''
    },
    {
        filterName: "Differently Abled",
        filterType: "dropdown",
        filter: AttributesData.differently_abled,
        type: 'differently_abled',
        selected: ''
    },
    {
        filterName: "Benefit Type",
        filterType: "dropdown",
        filter: AttributesData.benefit_type,
        type: 'benefit_type',
        selected: ''
    },
    {
        filterName: "DBT Scheme",
        filterType: "dropdown",
        filter: AttributesData.dbt_scheme,
        type: 'dbt_scheme',
        selected: ''
    },
    {
        filterName: "Marital Status",
        filterType: "dropdown",
        filter: AttributesData.marital_status,
        type: 'marital_status',
        selected: ''
    },
    {
        filterName: "Disability Percentage",
        filterType: "dropdown",
        filter: AttributesData.disability_percentage,
        type: 'disability_percentage',
        selected: ''
    },
    {
        filterName: "Below Powerty Line",
        filterType: "dropdown",
        filter: AttributesData.below_poverty_line,
        type: 'below_poverty_line',
        selected: ''
    },
    {
        filterName: "Economic Distress",
        filterType: "dropdown",
        filter: AttributesData.economic_distress,
        type: 'economic_distress',
        selected: ''
    },
    {
        filterName: "Government Employee",
        filterType: "dropdown",
        filter: AttributesData.government_employee,
        type: 'government_employee',
        selected: ''
    },
    {
        filterName: "Employement Status",
        filterType: "dropdown",
        filter: AttributesData.employment_status,
        type: 'employment_status',
        selected: ''
    },
    {
        filterName: "Student",
        filterType: "dropdown",
        filter: AttributesData.students,
        type: 'students',
        selected: ''
    },
    {
        filterName: "Occupation",
        filterType: "checkbox",
        filter: AttributesData.occupations,
        type: 'occupations',
        selected: []
    },
    {
        filterName: "Application Mode",
        filterType: "dropdown",
        filter: AttributesData.application_modes,
        type: 'application_modes',
        selected: ''
    },
    {
        filterName: "Scheme Type",
        filterType: "dropdown",
        filter: AttributesData.scheme_types,
        type: 'scheme_types',
        selected: ''
    },
];

export default AllFilters;