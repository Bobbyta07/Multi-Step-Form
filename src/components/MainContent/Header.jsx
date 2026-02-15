
const headers = [

    {   
        id: 1,
        headerName: "Personal info",
        insturctions: "Please provide your name, email address, and phone number.",
    },

    {
        id: 2,
        headerName: "Select your plan",
        insturctions: "You have the option of monthly or yearly billing.",
    },

    {
        id: 3,
        headerName: "Pick add-ons",
        insturctions: "Add-ons help enhance your gaming experience.",
    },

    {
        id: 4, 
        headerName: "Finishing up",
        insturctions: "Double-check every thing looks OK before confirming.",
    }



]


function Header(props) {

    const [info]  = headers.filter( (head) => head.id === props.activeStep);


    return (
         <div  className="flex flex-col gap-2 ">

           



                <h1 className="font-Ubuntu font-bold text-2xl text-purple-900">
                {info.headerName}
                
            </h1>
            <p className="font-Ubuntu font-normal text-sm text-gray-500">
                {info.insturctions}
            </p>

            </div>
    );

}


export default Header;