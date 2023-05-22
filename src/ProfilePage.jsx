import React from 'react';

function ProfilePage(props) {
    console.log(props.message)
    return (
        <>

            <div className="mx-auto mt-40 border border-black flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100">
                <img src="https://source.unsplash.com/150x150/?portrait?3" alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
                <div className="space-y-4 text-center divide-y divide-gray-700">
                    <div className="my-2">
                        <h2 className="text-xl font-semibold sm:text-2xl">{props.message}</h2>
                        <p className="px-5 text-xs font-medium sm:text-base dark:text-gray-400">email@xyz.com</p>
                        <p className="px-5 text-xs sm:text-base dark:text-gray-400">Job Title</p>
                    </div>
                    <div className="flex justify-center pt-2 space-x-4 align-center">
                        <a rel="noopener noreferrer" href="#" aria-label="GitHub" className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400">

                        </a>
                        <a rel="noopener noreferrer" href="#" aria-label="Dribble" className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400">

                        </a>
                        <a rel="noopener noreferrer" href="#" aria-label="Twitter" className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400">

                        </a>
                        <a rel="noopener noreferrer" href="#" aria-label="Email" className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400">

                        </a>
                    </div>
                </div>
            </div>

        </>
    );
}
export default ProfilePage;
