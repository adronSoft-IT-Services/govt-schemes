import Image from "next/image";

export default function SchemesMinistriesBlock({ scheme }) {
    return (
        <a className=" rounded-[8px] transition-all duration-300 hover:shadow-box bg-white flex space-x-5 p-[30px] border-l-4 border-white hover:border-primary" href="#">
            <div className="course-content">
                <h4 className=" lg:text-1xl text-xl mb-2 font-bold">{scheme.name}</h4>
                <p>{scheme.count} Schemes</p>
            </div>
        </a>
    )
}