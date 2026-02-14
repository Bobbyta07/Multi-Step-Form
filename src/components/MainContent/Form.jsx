import Button from "./Button";

function Form(){
    return(
       <form className="flex flex-col gap-4 mt-6 w-full">

                <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="text-sm text-gray-500 font-Ubuntu">Name</label>
                    <input type="text" id="name" placeholder="e.g. Stephen King" className=" w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"/>
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="text-sm text-gray-500 font-Ubuntu">Email Address</label>
                    <input type="email" id="email" placeholder="e.g. stephenking@lorem.com" className=" w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"/>
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="phone" className="text-sm text-gray-500 font-Ubuntu">Phone Number</label>
                    <input type="tel" id="phone" placeholder="e.g. +1 234 567 890" className=" w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"/>
                </div>

                <Button />

            </form>

    );
}

export default Form;
