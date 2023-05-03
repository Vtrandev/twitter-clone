import {
  EllipsisHorizontalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {CheckCircleIcon} from '@heroicons/react/24/solid'
import React from "react";

function Trending() {
  return (
    <div className="hidden lg:flex flex-col ml-6 mt-4">
      <div className="flex space-x-3 bg-white bg-opacity-10 w-[300px] h-[44px] p-3 rounded-3xl">
        <MagnifyingGlassIcon className="w-6 text-gray-600" />
        <input
          className="bg-transparent focus:outline-none placeholder:text-gray-600"
          placeholder="Search Twitter"
        />
      </div>

      <div className="w-[300px] h-[500px] bg-white bg-opacity-10 rounded-3xl mt-3">
        <h1 className="font-bold text-xl p-3">What's happening</h1>
        <div className="p-3 relative">
          <EllipsisHorizontalIcon className="w-5 text-gray-600 absolute right-4" />
          <p className="text-xs text-gray-500">Trending in Canada</p>
          <h1 className="text-[15px] font-bold">Odog</h1>
          <p className="text-xs text-gray-500 mt-1">340k tweets</p>
        </div>
        <div className="p-3 relative">
          <EllipsisHorizontalIcon className="w-5 text-gray-600 absolute right-4" />
          <p className="text-xs text-gray-500">Trending in US</p>
          <h1 className="text-[15px] font-bold">Lakers</h1>
          <p className="text-xs text-gray-500 mt-1">373k tweets</p>
        </div>
        <div className="p-3 relative">
          <EllipsisHorizontalIcon className="w-5 text-gray-600 absolute right-4" />
          <p className="text-xs text-gray-500">Sports • Trending</p>
          <h1 className="text-[15px] font-bold">Chelsea</h1>
          <p className="text-xs text-gray-500 mt-1">216k tweets</p>
        </div>
        <div className="p-3 relative">
          <EllipsisHorizontalIcon className="w-5 text-gray-600 absolute right-4" />
          <p className="text-xs text-gray-500">Music • Trending</p>
          <h1 className="text-[15px] font-bold">Hybe</h1>
          <p className="text-xs text-gray-500 mt-1">389k tweets</p>
        </div>
      </div>

      <div className="w-[300px] h-[300px] bg-white bg-opacity-10 rounded-3xl mt-3">
        <h1 className="font-bold text-xl p-3">Who to follow</h1>

        <div className="flex justify-between p-3">
          <div className="flex space-x-3">
            <img
              className="w-11 h-11 object-cover rounded-full"
              src="/assets/twitter.png"
            />

            <div>
              <div className="flex space-x-1">
                <h1 className="font-bold">Twitter</h1>
                <CheckCircleIcon className="w-[18px] text-yellow-400" />
              </div>
              <h1 className="text-[12px] mt-1 text-gray-500">@Twitter</h1>
            </div>
          </div>

          <button className="bg-white text-black text-sm w-20 h-8 rounded-3xl font-bold ">Follow</button>
        </div>

        <div className="flex justify-between p-3">
          <div className="flex space-x-3">
            <img
              className="w-11 h-11 object-cover rounded-full"
              src="/assets/mrbeast.png"
            />

            <div>
              <div className="flex space-x-1">
                <h1 className="font-bold">MrBeast</h1>
                <CheckCircleIcon className="w-[18px] text-blue-400" />
              </div>
              <h1 className="text-[12px] mt-1 text-gray-500">@MrBeast</h1>
            </div>
          </div>

          <button className="bg-white text-black text-sm w-20 h-8 rounded-3xl font-bold ">Follow</button>
        </div>

        <div className="flex justify-between p-3">
          <div className="flex space-x-3">
            <img
              className="w-11 h-11 object-cover rounded-full"
              src="/assets/bragg.png"
            />

            <div>
              <div className="flex space-x-1">
                <h1 className="font-bold">David Bragg</h1>
                <CheckCircleIcon className="w-[18px] text-blue-400" />
              </div>
              <h1 className="text-[12px] mt-1 text-gray-500">@davidbragg</h1>
            </div>
          </div>

          <button className="bg-white text-black text-sm w-20 h-8 rounded-3xl font-bold ">Follow</button>
        </div>


      </div>
    </div>
  );
}

export default Trending;
