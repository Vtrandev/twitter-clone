import React, { useEffect, useState } from "react";
import { Modal } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { closeSignupModal, openSignupModal } from "@/redux/modalSlice";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "@/firebase";
import { setUser } from "@/redux/userSlice";
import { useRouter } from "next/router";

function SignUpModal() {
  const isOpen = useSelector((state) => state.modals.signupModalOpen);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  async function handleSignUp() {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: `./assets/profilePictures/pfp${Math.ceil(
        Math.random() * 6
      )}.png`,
    });

    router.reload();
  }

  async function handleGuestSignIn() {
    await signInWithEmailAndPassword(auth, "guest184624@gmail.com", "qwerty");
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) return;
      //handle redux actions
      dispatch(
        setUser({
          username: currentUser.email.split("@")[0],
          name: currentUser.displayName,
          email: currentUser.email,
          uid: currentUser.uid,
          photoUrl: currentUser.photoURL,
        })
      );
    });
    return unsubscribe; //turn off unsubscribe
  }, []);

  return (
    <>
      <button
        onClick={() => dispatch(openSignupModal())}
        className="bg-white text-black w-[160px] rounded-full h-[40px] hover:bg-[#cbd2d7]"
      >
        Sign Up
      </button>

      <Modal
        open={isOpen}
        onClose={() => dispatch(closeSignupModal())}
        className="flex justify-center items-center"
      >
        <div className="w-[90%] h-[600px] bg-black text-white md:w-[600px] border border-gray-700 rounded-lg flex justify-center">
          <div className="w-[90%] mt-8 flex flex-col">
            <button
              className="bg-white text-black w-full font-bold text-lg p-2 rounded-md"
              onClick={handleGuestSignIn}
            >
              Sign In as Guest
            </button>
            <h1 className="text-center mt-4 font-bold text-lg">or</h1>
            <h1 className=" mt-4 font-bold text-4xl">Create your account</h1>
            <input
              placeholder="Full Name"
              className="h-10 mt-8 rounded-md bg-transparent border border-gray-700 p-6"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder="Email"
              className="h-10 mt-8 rounded-md bg-transparent border border-gray-700 p-6"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Password"
              className="h-10 mt-8 rounded-md bg-transparent border border-gray-700 p-6"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              className="bg-white text-black w-full font-bold text-lg p-2 mt-8 rounded-md"
              onClick={handleSignUp}
            >
              Create Account
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default SignUpModal;
