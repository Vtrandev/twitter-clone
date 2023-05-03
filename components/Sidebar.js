import React from "react";
import {
  HomeIcon,
  HashtagIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardDocumentListIcon,
  BellIcon,
  UserIcon,
  EllipsisHorizontalCircleIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { signOutUser } from "@/redux/userSlice";
import { auth } from "@/firebase";
import { closeLoginModal, closeSignupModal } from "@/redux/modalSlice";

function Sidebar() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  async function handleSignOut() {
    await signOut(auth);
    dispatch(signOutUser());
    dispatch(closeSignupModal());
    dispatch(closeLoginModal());
  }

  return (
    <div className="h-full hidden sm:flex flex-col fixed xl:ml-24">
      <nav className="h-full relative xl:space-y-1.5">
        <div className="flex justify-center xl:justify-start items-center py-3 xl:p-3">
          <Image
            src={"/assets/twitter-logo.png"}
            width={34}
            height={34}
            alt="logo"
          />
        </div>
        <SidebarLink Icon={HomeIcon} text="Home" />
        <SidebarLink Icon={HashtagIcon} text="Explore" />
        <SidebarLink Icon={BellIcon} text="Notification" />
        <SidebarLink Icon={InboxIcon} text="Messages" />
        <SidebarLink Icon={BookmarkIcon} text="Bookmarks" />
        <SidebarLink Icon={ClipboardDocumentListIcon} text="Lists" />
        <SidebarLink Icon={UserIcon} text="Profile" />
        <SidebarLink Icon={EllipsisHorizontalCircleIcon} text="More" />
        <button className="hidden xl:inline bg-[#1d9bf0] rounded-full h-[52px] mt-2 w-[200px] text-lg font-bold">
          Tweet
        </button>

        <div
          onClick={handleSignOut}
          className="hover:bg-white hover:bg-opacity-10 rounded-full cursor-pointer absolute flex bottom-0 justify-center p-1 xl:p-2 items-center space-x-3"
        >
          <img
            className="w-10 h-10 rounded-full object-cover"
            src={user.photoUrl || "assets/pfp.png"}
          />
          <div className="hidden xl:inline">
            <h1 className="font-bold whitespace-nowrap">{user.name}</h1>
            <h1 className="text-gray-500">@{user.username}</h1>
          </div>
          <EllipsisHorizontalIcon className="hidden xl:inline w-6 h-6" />
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;

function SidebarLink({ text, Icon }) {
  return (
    <li className="hoverAnimation flex mb-3 justify-center xl:justify-start items-center text-xl space-x-3">
      <Icon className="h-7" />
      <span className="hidden xl:inline">{text}</span>
    </li>
  );
}
