import React from "react";

const UserProfile = () => {
    const profileData = {
        fullName: "John Doe",
        email: "john.doe@example.com",
        address: "123 Main St, City, State",
        mobileNo: "123-456-7890",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        profilePic:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMcECgxwuxIHBsvBwBPUz1FMF0RFbaSYPUWFTocrtZbA&s",
    };

    return (
        <>
            <div className='flex justify-center mt-20'>
                <div className='max-w-lg w-full bg-white rounded-lg shadow-lg p-6 space-y-6'>
                    <div className='flex items-center'>
                        <img
                            src={profileData.profilePic}
                            alt='Profile Pic'
                            className='h-16 w-16 rounded-full'
                        />
                        <div className='ml-4'>
                            <h1 className='text-2xl font-bold'>Profile</h1>
                            <p className='text-gray-600'>View Only</p>
                        </div>
                    </div>

                    <div>
                        <label htmlFor='fullName' className='text-gray-600'>
                            Full Name
                        </label>
                        <p
                            id='fullName'
                            className='rounded-md bg-gray-100 px-4 py-2 mt-2 w-full'>
                            {profileData.fullName}
                        </p>
                    </div>

                    <div>
                        <label htmlFor='email' className='text-gray-600'>
                            Email Id
                        </label>
                        <p
                            id='email'
                            className='rounded-md bg-gray-100 px-4 py-2 mt-2 w-full'>
                            {profileData.email}
                        </p>
                    </div>

                    <div>
                        <label htmlFor='address' className='text-gray-600'>
                            Address
                        </label>
                        <p
                            id='address'
                            className='rounded-md bg-gray-100 px-4 py-2 mt-2 w-full'>
                            {profileData.address}
                        </p>
                    </div>

                    <div>
                        <label htmlFor='mobileNo' className='text-gray-600'>
                            Mobile No
                        </label>
                        <p
                            id='mobileNo'
                            className='rounded-md bg-gray-100 px-4 py-2 mt-2 w-full'>
                            {profileData.mobileNo}
                        </p>
                    </div>

                    <div>
                        <label htmlFor='description' className='text-gray-600'>
                            Description
                        </label>
                        <p
                            id='description'
                            className='rounded-md bg-gray-100 px-4 py-2 mt-2 w-full'>
                            {profileData.description}
                        </p>
                    </div>

                    {/* Add other fields here */}
                </div>
            </div>
        </>
    );
};

export default UserProfile;
