import Footer from "../footer/Footer";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../../firebase/firebase.config";
import Swal from 'sweetalert2'

const Profile = () => {

    const auth = getAuth(app);
    const user = auth.currentUser;

    var displayName;
    var email;
    var photo;

    const saveChanges = (e) => {
        e.preventDefault();
        const newpictureLink = document.getElementById('newpictureLink').value;
        const newName = document.getElementById('newName').value;

        updateProfile(auth.currentUser, {
            displayName: `${newName}`, photoURL: `${newpictureLink}`,
        }).then(() => {
            // Profile updated!
            Swal.fire({
                title: "Done!",
                text: `Account info has been updated...`,
                icon: "success"
            });
        }).catch(() => {
            // An error occurred
            Swal.fire({
                title: "Error!",
                text: `Something went wrong. Please try again...`,
                icon: "error"
            });
        });
    }

    if (user !== null) {
        user.providerData.forEach((profile) => {
            displayName = profile.displayName;
            email = profile.email;
            photo = profile.photoURL;
        });
    }

    const viewProfile = () => {
        const view = document.getElementById("viewProfile");
        const viewBtn = document.getElementById("viewProfileBtn");
        const editBtn = document.getElementById("editProfileBtn");
        view.classList.remove("hidden");
        view.classList.add("block");
        editBtn.classList.remove("bg-[#00c867]", "text-[#2b3440]", "p-3", "rounded-lg")
        viewBtn.classList.add("bg-[#00c867]", "text-[#2b3440]", "p-3", "rounded-lg")
    }
    const editProfile = () => {
        const edit = document.getElementById("editProfile");
        const view = document.getElementById("viewProfile");
        const viewBtn = document.getElementById("viewProfileBtn");
        const editBtn = document.getElementById("editProfileBtn");
        edit.classList.remove("hidden");
        edit.classList.add("block");
        view.classList.add("hidden");
        editBtn.classList.add("bg-[#00c867]", "text-[#2b3440]", "p-3", "rounded-lg")
        viewBtn.classList.remove("bg-[#00c867]", "text-[#2b3440]", "p-3", "rounded-lg")
    }

    document.title = "Lavishy - Profile"

    return (
        <div>
            <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-5 mt-10 gap-5">

                <div className="text-[#2b3440] border-2 p-7 rounded-lg shadow-md mb-20 col-span-1">
                    <h2 className="font-bold text-xl">Your Options</h2>
                    <h2 onClick={viewProfile} id="viewProfileBtn" className="bg-[#00c867] text-[#2b3440] p-3 mt-7 rounded-lg font-semibold cursor-pointer">View Profile</h2>
                    <h2 onClick={editProfile} id="editProfileBtn" className="text-[#2b3440] mt-4 font-semibold cursor-pointer">Edit Profile</h2>
                </div>

                <div id="viewProfile" className="text-[#2b3440] border-2 p-7 rounded-lg shadow-md mb-20 lg:col-span-4">
                    <h2 className="mt-10 text-center text-2xl text-[#2b3440] font-bold">Profile</h2>
                    <div className="flex items-center justify-center">
                        <img className="mt-10 rounded-full" src={photo} alt="profile picture" />
                    </div>
                    <div className="w-[60%] mx-auto mt-10">
                        <div className="text-lg flex gap-1 mt-4">
                            <h2 className="font-bold">Name: </h2>
                            <h2>{displayName ? displayName : "Not Found"}</h2>
                        </div>
                        <div className="text-lg flex gap-1 mt-4">
                            <h2 className="font-bold">Email: </h2>
                            <h2>{email}</h2>
                        </div>
                        <div className="text-lg flex gap-1 mt-4 mb-10">
                            <h2 className="font-bold">Password: </h2>
                            <h2>****</h2>
                        </div>
                    </div>
                </div>

                <div id="editProfile" className="text-[#2b3440] border-2 p-7 rounded-lg shadow-md mb-20 lg:col-span-4 hidden">
                    <h2 className="mt-10 text-center text-2xl text-[#2b3440] font-bold">Edit Profile</h2>
                    <div className=" mx-auto mt-10">
                        <div className="text-lg flex gap-1 mt-4">
                            <h2 className="font-bold">Profile Picture Link: </h2>
                            <input id="newpictureLink" name="my-name" type="text" placeholder="Picture Link" className="input input-bordered" required />
                        </div>
                        <div className="text-lg flex gap-1 mt-4">
                            <h2 className="font-bold">Name: </h2>
                            <input id="newName" name="my-name" type="text" placeholder={displayName} className="input input-bordered" required />

                        </div>
                        <div className="text-lg flex gap-1 mt-4">
                            <h2 className="font-bold">Email: </h2>
                            <input id="newEmail" name="my-name" type="email" placeholder={email} className="input input-bordered" disabled />
                        </div>
                        <div className="text-lg flex gap-1 mt-4 mb-10">
                            <h2 className="font-bold">Password: </h2>
                            <h2>****</h2>
                        </div>
                        <div className="flex justify-end">
                            <button onClick={saveChanges} className="bg-[#00c867] text-[#2b3440] font-bold p-3 rounded-lg text-lg">Save</button>
                        </div>
                    </div>
                </div>

            </div>

            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default Profile;