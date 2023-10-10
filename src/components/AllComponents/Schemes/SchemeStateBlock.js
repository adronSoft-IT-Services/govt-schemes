import Image from "next/image";

export default function SchemeStateBlock({ scheme }) {
    return (
        <a className=" rounded-[8px] transition-all duration-300 hover:shadow-box bg-white flex space-x-5 p-[30px] border-l-4 border-white hover:border-primary" href="#">
            <div className="w-[72px] h-[72px] rounded overflow-hidden bg-white relative group-hover:bg-[#FFE8E8]">
                <Image src={scheme.image} alt={scheme.name} className="rounded" width={72} height={72} />
            </div>
            <div className="course-content">
                <h4 className=" lg:text-1xl text-xl mb-2 font-bold">{scheme.name}</h4>
                <p>{scheme.central} Central | {scheme.schemes} {scheme.type}</p>
            </div>
        </a>
    )
}