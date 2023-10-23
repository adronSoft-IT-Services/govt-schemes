import Image from "next/image";
import SchemeCategoryBlock from "../AllComponents/Schemes/SchemeCategoryBlock";
import SchemesMinistriesBlock from "../AllComponents/Schemes/SchemesMinistriesBlock";
import SchemeStateBlock from "../AllComponents/Schemes/SchemeStateBlock";
import { Categories } from "@/data/categories";

export default function SchemesNavigator() {
    // const schemeCategory = Categories;
    const schemeCategory = [
        {
            name: 'Agriculture, Rural & Environment',
            image: '/schemes/Agriculture.svg',
            count: 141
        },
        {
            name: 'Banking,Financial Services and Insurance',
            image: '/schemes/Banking.svg',
            count: 89
        },
        {
            name: 'Business & Entrepreneurship',
            image: '/schemes/Business.svg',
            count: 92
        },
        {
            name: 'Education & Learning',
            image: '/schemes/Education.svg',
            count: 314
        },
        {
            name: 'Health & Wellness',
            image: '/schemes/Health.svg',
            count: 85
        },
        {
            name: 'Housing & Shelter',
            image: '/schemes/Housing.svg',
            count: 31
        },
        {
            name: 'Public Safety,Law & Justice',
            image: '/schemes/Public_Safety.svg',
            count: 7
        },
        {
            name: 'Science, IT & Communications',
            image: '/schemes/Science.svg',
            count: 18
        },
        {
            name: 'Skills & Employment',
            image: '/schemes/Skills.svg',
            count: 78
        },
        {
            name: 'Social welfare & Empowerment',
            image: '/schemes/Social_Welfare.svg',
            count: 479
        },
        {
            name: 'Sports & Culture',
            image: '/schemes/Sports.svg',
            count: 53
        },
        {
            name: 'Transport & Infrastructure',
            image: '/schemes/Transport.svg',
            count: 13
        },
        {
            name: 'Travel & Tourism',
            image: '/schemes/Travel.svg',
            count: 10
        },
        {
            name: 'Utility & Sanitation',
            image: '/schemes/Utility.svg',
            count: 23
        }
    ];
    const schemeStates = [
        {
            name: 'Andhra Pradesh',
            image: '/states/Andhra-Pradesh.svg',
            type: 'State',
            schemes: 20,
            central: 263
        },
        {
            name: 'Arunachal Pradesh',
            image: '/states/Arunachal-Pradesh.svg',
            type: 'State',
            schemes: 35,
            central: 266
        },
        {
            name: 'Assam',
            image: '/states/Assam.svg',
            type: 'State',
            schemes: 40,
            central: 266
        },
        {
            name: 'Bihar',
            image: '/states/Bihar.svg',
            type: 'State',
            schemes: 11,
            central: 262
        },
        {
            name: 'Chandigarh',
            image: '/states/Chandigarh.svg',
            type: 'UT',
            schemes: 7,
            central: 262
        },
        {
            name: 'Chhattisgarh',
            image: '/states/Chhattisgarh.svg',
            type: 'State',
            schemes: 21,
            central: 263
        },
        {
            name: 'Delhi',
            image: '/states/Delhi.svg',
            type: 'UT',
            schemes: 19,
            central: 262
        },
        {
            name: 'Goa',
            image: '/states/Goa.svg',
            type: 'State',
            schemes: 48,
            central: 263
        },
        {
            name: 'Gujarat',
            image: '/states/Gujarat.svg',
            type: 'State',
            schemes: 44,
            central: 264
        },
        {
            name: 'Haryana',
            image: '/states/Haryana.svg',
            type: 'State',
            schemes: 44,
            central: 262
        },
        {
            name: 'Himachal Pradesh',
            image: '/states/Himachal-Pradesh.svg',
            type: 'State',
            schemes: 38,
            central: 262
        },
        {
            name: 'Jammu & Kashmir',
            image: '/states/Jammu-Kashmir.svg',
            type: 'UT',
            schemes: 38,
            central: 266
        },
        {
            name: 'Jharkhand',
            image: '/states/Jharkhand.svg',
            type: 'State',
            schemes: 23,
            central: 262
        },
        {
            name: 'Karnataka',
            image: '/states/Karnataka.svg',
            type: 'State',
            schemes: 14,
            central: 263
        },
        {
            name: 'Kerala',
            image: '/states/Kerala.svg',
            type: 'State',
            schemes: 22,
            central: 263
        },
        {
            name: 'Lakshadweep',
            image: '/states/Lakshadweep.svg',
            type: 'UT',
            schemes: 1,
            central: 262
        },
        {
            name: 'Madhya Pradesh',
            image: '/states/Madhya-Pradesh.svg',
            type: 'State',
            schemes: 30,
            central: 263
        },
        {
            name: 'Maharashtra',
            image: '/states/Maharashtra.svg',
            type: 'State',
            schemes: 40,
            central: 263
        },
        {
            name: 'Manipur',
            image: '/states/Manipur.svg',
            type: 'State',
            schemes: 18,
            central: 266
        },
        {
            name: 'Meghalaya',
            image: '/states/Meghalaya.svg',
            type: 'State',
            schemes: 12,
            central: 265
        },
        {
            name: 'Mizoram',
            image: '/states/Mizoram.svg',
            type: 'State',
            schemes: 11,
            central: 266
        },
        {
            name: 'Nagaland',
            image: '/states/Nagaland.svg',
            type: 'State',
            schemes: 11,
            central: 266
        },
        {
            name: 'Odisha',
            image: '/states/Odisha.svg',
            type: 'State',
            schemes: 34,
            central: 263
        },
        {
            name: 'Puducherry',
            image: '/states/Puducherry.svg',
            type: 'UT',
            schemes: 8,
            central: 262
        },
        {
            name: 'Punjab',
            image: '/states/Punjab.svg',
            type: 'State',
            schemes: 100,
            central: 100
        },
        {
            name: 'Rajasthan',
            image: '/states/Rajasthan.svg',
            type: 'State',
            schemes: 100,
            central: 100
        },
        {
            name: 'Sikkim',
            image: '/states/Sikkim.svg',
            type: 'State',
            schemes: 100,
            central: 100
        },
        {
            name: 'Tamil Nadu',
            image: '/states/Tamil-Nadu.svg',
            type: 'State',
            schemes: 100,
            central: 100
        },
        {
            name: 'Telangana',
            image: '/states/Telangana.svg',
            type: 'State',
            schemes: 100,
            central: 100
        },
        {
            name: 'The Dadra And Nagar Haveli And Daman And Diu',
            image: '/states/Daman-Diu.svg',
            type: 'UT',
            schemes: 100,
            central: 100
        },
        {
            name: 'Tripura',
            image: '/states/Tripura.svg',
            type: 'State',
            schemes: 100,
            central: 100
        },
        {
            name: 'Uttar Pradesh',
            image: '/states/Uttar-Pradesh.svg',
            type: 'State',
            schemes: 100,
            central: 100
        },
        {
            name: 'Uttarakhand',
            image: '/states/Uttarakhand.svg',
            type: 'State',
            schemes: 100,
            central: 100
        },
        {
            name: 'West Bengal',
            image: '/states/West-Bengal.svg',
            type: 'State',
            schemes: 100,
            central: 100
        }
    ];
    const ministriesSchemes = [
        {
            name: "Comptroller And Auditor General Of India",
            count: 1
        },
        {
            name: "Ministry Of Agriculture and Farmers Welfare",
            count: 45
        },
        {
            name: "Ministry Of Chemicals And Fertilizers",
            count: 2
        },
        {
            name: "Ministry Of Commerce And Industry",
            count: 7
        },
        {
            name: "Ministry Of Communication",
            count: 5
        },
        {
            name: "Ministry Of Consumer Affairs, Food And Public Distribution",
            count: 1
        },
        {
            name: "Ministry of Corporate Affairs",
            count: 1
        },
        {
            name: "Ministry Of Culture",
            count: 10
        },
        {
            name: "Ministry Of Defence",
            count: 9
        },
        {
            name: "Ministry Of Development Of North Eastern Region",
            count: 1
        },
        {
            name: "Ministry of Education",
            count: 41
        },
        {
            name: "Ministry of Electronics and Information Technology",
            count: 5
        },
        {
            name: "Ministry Of Environment,forests and climate change",
            count: 2
        },
        {
            name: "Ministry Of External Affairs",
            count: 5
        },
        {
            name: "Ministry Of Finance",
            count: 16
        },
        {
            name: "Ministry of Fisheries,Animal Husbandry and Dairying",
            count: 2
        },
        {
            name: "Ministry of Food Processing Industries",
            count: 2
        },
        {
            name: "Ministry Of Health & Family Welfare",
            count: 9
        },
        {
            name: "Ministry of Heavy Industries",
            count: 1
        },
        {
            name: "Ministry Of Home Affairs",
            count: 4
        },
        {
            name: "Ministry Of Housing & Urban Affairs",
            count: 3
        },
        {
            name: "Ministry Of Information And Broadcasting",
            count: 1
        },
        {
            name: "Ministry Of Jal Shakti",
            count: 4
        },
        {
            name: "Ministry Of Labour and Employment",
            count: 5
        },
        {
            name: "Ministry Of Law and Justice",
            count: 2
        },
        {
            name: "Ministry Of Micro, Small and Medium Enterprises",
            count: 7
        },
        {
            name: "Ministry Of Minority Affairs",
            count: 6
        },
        {
            name: "Ministry Of New and Renewable Energy",
            count: 4
        },
        {
            name: "Ministry Of Panchayati Raj",
            count: 2
        },
        {
            name: "Ministry Of Personnel, Public Grievances And Pensions",
            count: 3
        },
        {
            name: "Ministry Of Petroleum and Natural Gas",
            count: 3
        },
        {
            name: "Ministry of Ports,Shipping and Waterways",
            count: 1
        },
        {
            name: "Ministry Of Road Transport & Highways",
            count: 1
        },
        {
            name: "Ministry Of Rural Development",
            count: 12
        },
        {
            name: "Ministry Of Science And Technology",
            count: 13
        },
        {
            name: "Ministry Of Skill Development And Entrepreneurship",
            count: 5
        },
        {
            name: "Ministry Of Social Justice and Empowerment",
            count: 59
        },
        {
            name: "Ministry Of Statistics and Programme Implementation",
            count: 1
        },
        {
            name: "Ministry Of Textiles",
            count: 3
        },
        {
            name: "Ministry Of Tourism",
            count: 3
        },
        {
            name: "Ministry Of Tribal Affairs",
            count: 5
        },
        {
            name: "Ministry of Women and Child Development",
            count: 7
        },
        {
            name: "Ministry Of Youth Affairs & Sports",
            count: 11
        },
        {
            name: "NITI Aayog (National Institution for Transforming India)",
            count: 1
        }
    ];
    return (
        <div className="section-padding bg-[url('/images/all-img/section-bg-11.png')] bg-cover bg-no-repeat lg:mt-[136px]">
            <div className="container lg:-mt-[250px] xl:pb-[136px] lg:pb-20 pb-10">
                <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] bg-white shadow-box14 rounded-md
                  divide-x-2 divide-[#E4EEED] py-20">
                    <div className=" text-center ">
                        <h2 className="text-secondary font-bold ">
                            <span className=" counter">82</span>K+
                        </h2>
                        <span className="block text-black font-semibold">Enrolled Students</span>
                    </div>

                    <div className="  text-center">
                        <h2 className="text-secondary font-bold ">
                            <span className=" counter">348</span>+
                        </h2>
                        <span className="block text-black font-semibold">Academic Programs</span>
                    </div>

                    <div className=" text-center">
                        <h2 className="text-secondary font-bold ">
                            <span className=" counter">125</span>+
                        </h2>
                        <span className="block text-black font-semibold">Winning Award</span>
                    </div>

                    <div className="  text-center">
                        <h2 className="text-secondary font-bold ">
                            <span className=" counter">37</span>+
                        </h2>
                        <span className="block text-black font-semibold">Certified Students</span>
                    </div>

                </div>
            </div>
            <div className="container">

                <div className="tabbed-container">

                    <ul className="filter-list flex xl:space-x-[39px] space-x-4 justify-center">
                        <li className="hs-tab-active:tipy-info hover:tipy-info active" data-hs-tab="#categories-tab" aria-controls="categories-tab" role="tab">
                            Categories
                        </li>
                        <li className="hs-tab-active:tipy-info hover:tipy-info" data-hs-tab="#states-tab" aria-controls="states-tab" role="tab">
                            States/UTs
                        </li>
                        <li className="hs-tab-active:tipy-info hover:tipy-info" data-hs-tab="#central-ministries-tab" aria-controls="central-ministries-tab" role="tab">
                            Central Ministries
                        </li>
                    </ul>

                    <div className="mt-8">
                        <div id="categories-tab" role="tabpanel" aria-labelledby="categories-tab">
                            <div className="flex items-center flex-wrap flex-y-4 justify-center">
                                <div className="justify-center">
                                    {/* <div className="mini-title">Popular Schemes</div> */}
                                    <div className="column-title ">
                                        Find Schemes based on <span className="shape-bg">Categories</span>
                                    </div>
                                </div>
                            </div>
                            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px] pt-10">
                                {schemeCategory.map((scheme, index) => { return <SchemeCategoryBlock key={index} scheme={scheme} /> })}
                            </div>
                        </div>

                        <div id="states-tab" className="hidden" role="tabpanel" aria-labelledby="states-tab">
                            <div className="flex items-center flex-wrap flex-y-4 justify-center">
                                <div className="justify-center">
                                    {/* <div className="mini-title">Popular Schemes</div> */}
                                    <div className="column-title ">
                                        Explore schemes of <span className="shape-bg">States/UTs</span>
                                    </div>
                                </div>
                            </div>
                            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px] pt-10">
                                {schemeStates.map((scheme, index) => { return <SchemeStateBlock key={index} scheme={scheme} /> })}
                            </div>
                        </div>

                        <div id="central-ministries-tab" className="hidden" role="tabpanel" aria-labelledby="central-ministries-tab">
                            <div className="flex items-center flex-wrap flex-y-4 justify-center">
                                <div className="justify-center">
                                    {/* <div className="mini-title">Popular Schemes</div> */}
                                    <div className="column-title ">
                                        Explore schemes from <span className="shape-bg">Central Ministries</span>
                                    </div>
                                </div>
                            </div>
                            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px] pt-10">
                                {ministriesSchemes.map((scheme, index) => { return <SchemesMinistriesBlock key={index} scheme={scheme} /> })}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center lg:pt-16 pt-10">
                    <a href="#" className=" btn btn-primary">View All Schemes</a>
                </div>
            </div>
        </div>
    )
}