import Image from 'next/image'
import React from 'react';
import FilterCheckbox from "@/components/AllComponents/Schemes/FilterCheckbox";
import SchemeSummary from "@/components/AllComponents/Schemes/SchemeSummary";
import FilterDropdown from "@/components/AllComponents/Schemes/FilterDropdown";

const SearchPage = ({ schemes, filters }) => {

    const [allSchemes, setAllSchemes] = React.useState(schemes);
    const [allFilters, setAllFilters] = React.useState(filters);

    const [filteredSchemes, setFilteredSchemes] = React.useState(allSchemes);

    const findFilterByName = (name) => {
        return allFilters.find((filter) => filter.type === name);
    }

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

        const filters = allFilters.map((filter) => {
            if (filter.type === filterName) {
                filter = currentFilter;
            }
            return filter;
        })

        // console.log('findFilterByName', currentFilter)
        // console.log('findFilterByName', filters)
        setAllFilters(filters);

        // console.log(filterValue, filterName, 'isDropdown: ' + isDropdown, 'isChecked: ' + isChecked)
    }

    React.useEffect(() => {
        console.log('allSchemes', allSchemes);
        console.log('allFilters', allFilters);
        // start filtering schemes
    }, [allFilters, allSchemes]);

    const filterSchemes = () => { }
    const sortSchemes = () => { }

    return (
        <div className="nav-tab-wrapper tabs pt-10 section-padding-bottom">
            <div className="container">
                <div className="grid grid-cols-12 gap-[30px]">

                    <div className="lg:col-span-3 col-span-12">
                        <div className="sidebarWrapper space-y-[10px]">

                            {allFilters.map((filter, fIndex) => {
                                return filter.filterType === 'dropdown' ? (
                                    <FilterDropdown key={fIndex} title={filter.filterName} selectedValue={filter.selected} type={filter.type} callBack={onChangeFilter} id={fIndex} filter={filter.filter} />
                                ) : (
                                    <FilterCheckbox key={fIndex} title={filter.filterName} selectedValue={filter.selected} type={filter.type} callBack={onChangeFilter} id={fIndex} filter={filter.filter} />
                                )
                            })}
                        </div>
                    </div>

                    <div className="lg:col-span-9 col-span-12">
                        <div className="wdiget widget_search mb-6 p-0">
                            <div className="flex bg-white rounded-md shadow-e1 items-center relative">
                                <div className="flex-1 bg-white">
                                    <input type="text" placeholder="Search keyword..." className="border-none bg-white focus:ring-0" />
                                </div>
                                <div className="flex-none">
                                    <button className="btn btn-primary">
                                        <Image src="/images/icon/search.svg" width={20} height={20} alt="Search" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex md:flex-row flex-col items-center mb-6 space-y-6 md:space-y-0">
                            <div className="flex-1 flex sm:flex-row flex-col  space-x-6  items-center">
                                Total {filteredSchemes.length} {filteredSchemes.length > 1 ? 'schemes' : 'scheme'} available
                            </div>
                            <div className="flex-0">
                                <div className="wdiget widget_catagory p-0">
                                    <div className="mt-3 w-full overflow-hidden transition-[height] duration-300 p-0">
                                        <select defaultValue={''} className="py-3 px-4 pr-9 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-[#ff7e84] focus:ring-[#ff7e84] dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
                                            <option data-display="Sort By: Popularity">Sort By: Popularity</option>
                                            <option value="1">Popularity</option>
                                            <option value="2">Another option</option>
                                            <option value="4">Potato</option>
                                        </select>
                                    </div>
                                </div>
                                {/* <div className="min-w-[272px] text-end">
                            </div> */}
                            </div>
                        </div>
                        <div className="content">
                            <div className="grid grid-cols-1 gap-[30px]">
                                {filteredSchemes.map((scheme, index) => {
                                    return (<SchemeSummary key={index} />)
                                })}
                            </div>
                            <div className="text-center pt-14">
                                {/* pagination */}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchPage