function JeffContact(props){


    return(

        <div className='border-2  h-35 mx-auto space-y-2 ml-20 mr-20 rounded-lg pt-3 pl-4' >

        <h2 className='font-bold'>Contact Information</h2>
        <p><span className='font-bold'>Email:</span> <span className='text-blue-600'>{props.email}</span></p>
        <p><span className='font-bold'>Phone:</span> <span className='text-blue-600'>{props.phone}</span></p>
        <p><span className='font-bold'>Address:</span> <span className='text-blue-600'>{props.address}</span></p>


        {/* <p class>Email: jeffieracal123@gmail.com</p>
        <p>Phone: 09387222890</p>
        <p>Address: Brgy 6, Banadero, Legazpi City, Albay</p> */}

        </div>

    );



}

export default JeffContact