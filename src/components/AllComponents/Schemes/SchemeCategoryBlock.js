import Image from "next/image";

export default function SchemeCategoryBlock({ scheme }) {
    return (
        <button className=" rounded-[8px] transition-all duration-300 hover:shadow-box bg-white flex space-x-5 p-[30px] border-l-4 border-white hover:border-primary" >
            <div className="w-[72px] h-[72px] rounded bg-white relative group-hover:bg-[#FFE8E8]">
                <Image src={scheme.image} alt={scheme.name} className="w-full object-cover rounded" width={72} height={72} />
            </div>
            <div className="course-content">
                <h4 className=" lg:text-1xl text-xl mb-2 font-bold">{scheme.name}</h4>
                <p>{scheme.count} Schemes</p>
            </div>
        </button>
    )
}