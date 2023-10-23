export default function SchemeSummary({ state, title, summary, tags, slug, ministry, props }) {
    return (
        <div className="bg-white rounded-[8px] transition shadow-box7 duration-150 border-b-4 hover:border-primary border-transparent hover:shadow-box6 flex p-8 space-x-6">
            <div className="course-content flex-1">
                <p className="text-black text-sm font-bold">{ministry ? ministry : state}</p>
                <h4 className=" text-2xl leading-[36px] m-0 font-bold text-green-800">
                    {title ? title : 'Scheme Title here'}
                </h4>
                <p className="line-clamp-2">{summary ? summary : 'TEST, Delhi Ladli Scheme was launched by the Department of Women & Children Development, Government of the National Capital Territory (NCT) of Delhi on 1st January 2008 to empower girl children born in Delhi. The State Bank Life Insurance Co. Ltd. (SBIL) is the scheme&apos;s Fund Manager.'}</p>
            </div>
        </div>
    )
}