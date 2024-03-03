import Logout from "./Logout"
export const Appbar = () => {
    return <div className="shadow h-14 flex justify-evenly">
        <div className="flex flex-col justify-center font-serif text-xl text-green-500 h-full ml-4">
            Payment Website
        </div>
        <div className="flex">
            <div className="flex flex-col justify-center h-full  mr-4">
                Hello
            </div>
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    U
                </div>
            </div>
            <div className="flex flex-col justify-center " >
            <Logout/>
            </div>
        </div>
    </div>
}

