import { useEffect, useState } from "react"
import Buttonscompo from "./Buttonscompo";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export const Users = () => {
    // Replace with backend call
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");
    const [loading,setloading]=useState(true);

    useEffect(() => {
        axios.get("https://paymentapp-10.onrender.com/api/v1/user/bulk?filter=" + filter)
            .then(response => {
                setUsers(response.data.user)
                setloading(false)
            })
    }, [filter])
     
    return <>
        {loading ? (
       <div className="ml-[20px] mt-[100px] w-full">
<div role="status" class=" p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-300 md:p-6 dark:border-gray-300">
<div class="flex items-center justify-between pt-4">
        <div>
            <div className="flex">
           <div class="h-10 w-10 bg-gray-300 rounded-full dark:bg-gray-600  mb-2.5"></div>
            <div className="mt-2 ml-2">
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
           
            <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-300"></div>
            </div>
            </div>
        </div>
        <div class="h-7 bg-gray-300 rounded-full dark:bg-gray-300 w-20"></div>
    </div>
    <div class="flex items-center justify-between pt-4">
        <div>
            <div className="flex">
           <div class="h-10 w-10 bg-gray-300 rounded-full dark:bg-gray-600  mb-2.5"></div>
            <div className="mt-2 ml-2">
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
           
            <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-300"></div>
            </div>
            </div>
        </div>
        <div class="h-7 bg-gray-300 rounded-full dark:bg-gray-300 w-20"></div>
    </div>
    <div class="flex items-center justify-between pt-4">
        <div>
            <div className="flex">
           <div class="h-10 w-10 bg-gray-300 rounded-full dark:bg-gray-600  mb-2.5"></div>
            <div className="mt-2 ml-2">
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
           
            <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-300"></div>
            </div>
            </div>
        </div>
        <div class="h-7 bg-gray-300 rounded-full dark:bg-gray-300 w-20"></div>
    </div>
    <div class="flex items-center justify-between pt-4">
        <div>
            <div className="flex">
           <div class="h-10 w-10 bg-gray-300 rounded-full dark:bg-gray-600  mb-2.5"></div>
            <div className="mt-2 ml-2">
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
           
            <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-300"></div>
            </div>
            </div>
        </div>
        <div class="h-7 bg-gray-300 rounded-full dark:bg-gray-300 w-20"></div>
    </div>
    <div class="flex items-center justify-between pt-4">
        <div>
            <div className="flex">
           <div class="h-10 w-10 bg-gray-300 rounded-full dark:bg-gray-600  mb-2.5"></div>
            <div className="mt-2 ml-2">
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
           
            <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-300"></div>
            </div>
            </div>
        </div>
        <div class="h-7 bg-gray-300 rounded-full dark:bg-gray-300 w-20"></div>
    </div>
    <span class="sr-only">Loading...</span>
</div>
</div>

      ) : (
        <p><div className=" font-serif mt-6 text-xl flex justify-center">
        Your Friends Details
    </div>
    <div className="my-2">
        <input onChange={(e) => {
            setFilter(e.target.value)
        }} type="text" placeholder="Search users..." className="w-full px-2 py-1 border rounded border-slate-200"></input>
    </div>
    <div>
        {users.map(user => <User  user={user} />)}
    </div></p>
      )}
        
    </>
}

function User({user}) {
    const navigate = useNavigate();

    return <div className="flex justify-between">
        <div className="flex">
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user.firstname[0].toUpperCase()}
                </div>
            </div>
            <div className="flex flex-col justify-center h-ful">
                <div>
                    {user.firstname} {user.lastname}
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-center h-ful">
            <Buttonscompo onClick={(e) => {
                navigate("/send?id=" + user._id + "&name=" + user.firstname);
            }} label={"Send Money"} />
        </div>
    </div>
}