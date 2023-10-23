export default function FullPageLoader() {

    return (
        <div id="FullPageLoader" className="fixed top-0 left-0 w-screen h-screen bg-black/70">
            <div className="absolute top-1/2 left-1/2">
                <div className="animate-spin inline-block w-28 h-28 border-[8px] border-current border-t-transparent text-blue-600 rounded-full" role="status" aria-label="loading">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </div>
    )
}