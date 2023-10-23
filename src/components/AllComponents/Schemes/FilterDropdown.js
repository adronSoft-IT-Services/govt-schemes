
export default function FilterDropdown({ title, callBack, id, filter, type, selectedValue, ...props }) {

    return (
        <div className="wdiget widget_catagory py-3 px-5">
            <div className="widget-title text-lg inline-flex justify-between items-center m-0 w-full" id={`select-${id}`}>
                {title}
            </div>

            <div id={`select-${id}-heading`} className="mt-3 w-full overflow-hidden transition-[height] duration-300">
                <select defaultValue={selectedValue} onChange={(e) => { callBack(e.target.value, type, true) }} className="py-3 px-4 pr-9 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-[#ff7e84] focus:ring-[#ff7e84] dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
                    <option value=''></option>
                    {filter.map((option, index) => {
                        return (<option key={index} value={option.nameValue}>{option.name}</option>)
                    })}
                </select>
            </div>
        </div>
    )
}