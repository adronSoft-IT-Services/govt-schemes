import { AttributesData } from "@/data/AttributesData";


// AttributesData

const AllFilters = [
    {
        filterName: "Select State",
        filterType: "dropdown",
        filter: AttributesData.states,
        type: 'state',
        selected: '',
        valueType: 'String'
    },
    {
        filterName: "Scheme Category",
        filterType: "checkbox",
        filter: AttributesData.categories,
        type: 'category',
        selected: [],
        valueType: 'String'
    },
    {
        filterName: "Gender",
        filterType: "dropdown",
        filter: AttributesData.genders,
        type: 'for_gender',
        selected: '',
        valueType: 'String'
    },
    {
        filterName: "Age",
        filterType: "dropdown",
        filter: AttributesData.ages,
        type: 'age_group',
        selected: '',
        valueType: 'String'
    },
    {
        filterName: "Caste",
        filterType: "dropdown",
        filter: AttributesData.castes,
        type: 'caste',
        selected: '',
        valueType: 'String'
    },
    {
        filterName: "Ministry",
        filterType: "dropdown",
        filter: AttributesData.ministries,
        type: 'ministry',
        selected: '',
        valueType: 'String'
    },
    {
        filterName: "Residence",
        filterType: "dropdown",
        filter: AttributesData.residence,
        type: 'residence',
        selected: '',
        valueType: 'String'
    },
    {
        filterName: "Minority",
        filterType: "dropdown",
        filter: AttributesData.minority,
        type: 'minority',
        selected: '',
        valueType: 'Boolean'
    },
    {
        filterName: "Differently Abled",
        filterType: "dropdown",
        filter: AttributesData.differently_abled,
        type: 'differently_abled',
        selected: '',
        valueType: 'Boolean'
    },
    {
        filterName: "Benefit Type",
        filterType: "dropdown",
        filter: AttributesData.benefit_type,
        type: 'benefit_type',
        selected: '',
        valueType: 'String'
    },
    {
        filterName: "DBT Scheme",
        filterType: "dropdown",
        filter: AttributesData.dbt_scheme,
        type: 'dbt_scheme',
        selected: '',
        valueType: 'Boolean'
    },
    {
        filterName: "Marital Status",
        filterType: "dropdown",
        filter: AttributesData.marital_status,
        type: 'marital_status',
        selected: '',
        valueType: 'String'
    },
    {
        filterName: "Disability Percentage",
        filterType: "dropdown",
        filter: AttributesData.disability_percentage,
        type: 'disablity_percent',
        selected: '',
        valueType: 'Number'
    },
    {
        filterName: "Below Powerty Line",
        filterType: "dropdown",
        filter: AttributesData.below_poverty_line,
        type: 'below_poverty_line',
        selected: '',
        valueType: 'Boolean'
    },
    {
        filterName: "Economic Distress",
        filterType: "dropdown",
        filter: AttributesData.economic_distress,
        type: 'economic_distress',
        selected: '',
        valueType: 'Boolean'
    },
    {
        filterName: "Government Employee",
        filterType: "dropdown",
        filter: AttributesData.government_employee,
        type: 'government_employee',
        selected: '',
        valueType: 'Boolean'
    },
    {
        filterName: "Employement Status",
        filterType: "dropdown",
        filter: AttributesData.employment_status,
        type: 'employment_status',
        selected: '',
        valueType: 'String'
    },
    {
        filterName: "Student",
        filterType: "dropdown",
        filter: AttributesData.students,
        type: 'student',
        selected: '',
        valueType: 'Boolean'
    },
    {
        filterName: "Occupation",
        filterType: "checkbox",
        filter: AttributesData.occupations,
        type: 'occupations',
        selected: [],
        valueType: 'String'
    },
    {
        filterName: "Application Mode",
        filterType: "dropdown",
        filter: AttributesData.application_modes,
        type: 'application_modes',
        selected: '',
        valueType: 'String'
    },
    {
        filterName: "Scheme Type",
        filterType: "dropdown",
        filter: AttributesData.scheme_types,
        type: 'scheme_type',
        selected: '',
        valueType: 'String'
    },
];

export default AllFilters;