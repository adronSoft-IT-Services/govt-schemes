import Image from "next/image";

export default function FilterCheckbox({ title, callBack, id, filter, type, selectedValue, ...props }) {

    return (
        <div className="wdiget widget_catagory py-3 px-5">
            <button className="widget-title text-lg hs-collapse-toggle inline-flex justify-between items-center m-0 w-full" id={`collapse-${id}`} data-hs-collapse={`#collapse-${id}-heading`}>
                {title}
                <svg className="bi bi-chevron-up hs-collapse:rotate-180 w-2.5 h-2.5" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
                </svg>
            </button>

            <div id={`collapse-${id}-heading`} className="mt-3 hs-collapse-open w-full overflow-hidden transition-[height] duration-300" aria-labelledby={`collapse-${id}`}>
                <ul className="list-item space-y-3">
                    {filter.map((option, index) => {
                        return (
                            <li className="block" key={index}>
                                <label className="flex space-x-3 form-check cursor-pointer">
                                    <input type="checkbox" className="hidden form-check-input" checked={selectedValue.includes(option.nameValue)} value={option.nameValue} onChange={(e) => { callBack(e.target.value, type, false, e.target.checked) }} />
                                    <span className="ck-box flex flex-col items-center justify-center border">
                                        <Image src="/images/icon/white-check.svg" alt="" width={10} height={10} className="object-contain w-auto h-auto" />
                                    </span>
                                    <span className="form-check-label text-sm">{option.name}</span>
                                </label>
                            </li>
                        )
                    })}

                </ul>
            </div>
        </div>
    )
}