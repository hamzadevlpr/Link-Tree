import React, { useState } from 'react';
import ProfilePage from './ProfilePage';
import * as ReactIcons from 'react-icons/all';
import { useNavigate } from 'react-router-dom';

function MainLogin() {
  const [inputs, setInputs] = useState({
    FullName: '',
    jobTitle: '',
    email: '',
    github: '',
    facebook: '',
    linkedIn: '',
    instagram: ''
  });

  const handleChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };
  const nav = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // if (
    //   inputs.Fname == '') {
    //   console.log('Error');
    // } else {
      console.log(inputs.FullName);
      <ProfilePage message={inputs.FullName} />

    nav('/profile')
    // }
  };

  return (
    <>
      <div className='h-screen bg-gradient-to-b from-green-400 to-blue-500 '>
        <div className="relative top-20 border-b border-2 w-96 p-5 mx-auto rounded-lg bg-gray-100 shadow-xl">
          <form className=''>
            <div className="text-center mb-3">
              <h2 className="text-gray-700 text-3xl font-bold">Create a new Account</h2>
              <p className="text-1xl text-gray-400">It's quick and easy.</p>
            </div>
            <hr className="py-3 border-gray-300" />
            <div className="flex gap-4">
              <input
                onChange={handleChange}
                name="name"
                type="text"
                placeholder="Name"
                className=" pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inse sm:text-sm sm:leading-6"
              />

              <input
                onChange={handleChange}
                name="jobTitle"
                type="text"
                placeholder="Job Title"
                className=" pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inse sm:text-sm sm:leading-6"
              />
            </div>
            <input
              onChange={handleChange}
              name="email"
              type="link"
              placeholder="Email"
              className=" mt-4 pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inse sm:text-sm sm:leading-6"
            />
            {/* All links */}
            <p className='text-xs p-3 font-bold'>Add your Links Here</p>
            <div className="relative">
              <label htmlFor="UserEmail" className="sr-only"> Email </label>
              <input
                onChange={handleChange}
                name="github"
                type="text"
                placeholder="Github"
                className="  pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inse sm:text-sm sm:leading-6"
              />
              <ReactIcons.AiFillGithub className='pointer-events-none absolute inset-y-3 end-0 grid w-10 place-content-center text-gray-500' />
            </div>

            <div className="relative">
              <label htmlFor="UserEmail" className="sr-only"> Email </label>
              <input
                onChange={handleChange}
                name="facebook"
                type="text"
                placeholder="Facebook"
                className="mt-4 pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inse sm:text-sm sm:leading-6"
              />
              <ReactIcons.BsFacebook className='pointer-events-none absolute inset-y-3 end-0 grid w-10 place-content-center text-gray-500' />
            </div>

            <div className="relative">
              <label htmlFor="UserEmail" className="sr-only"> Email </label>
              <input
                onChange={handleChange}
                name="linkedIn"
                type="text"
                placeholder="Linked In"
                className="mt-4 pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inse sm:text-sm sm:leading-6"
              />
              <ReactIcons.FaLinkedinIn className='pointer-events-none absolute inset-y-3 end-0 grid w-10 place-content-center text-gray-500' />
            </div>

            <div className="relative">
              <label htmlFor="UserEmail" className="sr-only"> Email </label>
              <input
                onChange={handleChange}
                name="instagram"
                type="text"
                placeholder="Instagram"
                className="mt-4 pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inse sm:text-sm sm:leading-6"
              />
              <ReactIcons.AiFillInstagram className='pointer-events-none absolute inset-y-3 end-0 grid w-10 place-content-center text-gray-500' />
            </div>



            <button
              type='submit'
              onClick={handleSubmit}
              className="mt-5 mx-auto w-40 px-3 py-2 flex w-11/11 justify-center rounded-md bg-green-400 text-xl font-medium leading-6 text-white shadow-sm hover:bg-blue-400 focus-visible:outline-green-600"
            >
              Add User
            </button>

          </form>
        </div>
      </div>
    </>
  );
}

export default MainLogin;
