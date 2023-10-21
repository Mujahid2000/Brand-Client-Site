


const Contact = () => {
    return (
        <div className='flex justify-center dark:bg-gray-900 pb-36'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3  gap-5 mt-10'>
            <div >
            <div className="card dark:bg-gray-900 bg-gradient-to-t from-red-50 to-orange-50 w-full max-w-[400px] p-6 bg-base-100 shadow-xl">
            <div className="card-body">
            <h2 className="card-title">Head Office</h2>
            <p className='text-lg font-medium'>70 Washington Square South, <br /> New York, NY 10012, <br /> United States</p>
            </div>
            </div>
            </div>
            <div>
            <div className="card dark:bg-gray-900 bg-gradient-to-r from-orange-100 to-red-50 w-full max-w-[400px] p-6 bg-base-100 shadow-xl">
            <div className="card-body">
            <h2 className="card-title">New York Branch</h2>
            <p className='text-lg font-medium'>70 Washington Square South, <br /> New York, NY 10012, <br /> United States</p>
            </div>
            </div>
            </div>
            <div>
            <div className="card dark:bg-gray-900 bg-gradient-to-t from-red-50 to-orange-50 w-full max-w-[400px] p-6 bg-base-100 shadow-xl">
            <div className="card-body">
            <h2 className="card-title">Las Vegas</h2>
            <p className='text-lg font-medium'>737, OAKMONT AVE UNIT, 1201 <br /> LAS VEGAS, NV 89109-0183, <br /> USA</p>
            </div>
            </div>
            </div>
        </div>
        <div className='mt-24'>
        
        </div>
        </div>
    );
};

export default Contact;