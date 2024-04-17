import Footer from "../footer/Footer";
import { getAuth } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { CgProfile } from "react-icons/cg";

const Profile = () => {

    const auth = getAuth(app);
    const user = auth.currentUser;

    var profile_id;
    var displayName;
    var email;
    var photo;

    if (user !== null) {
        user.providerData.forEach((profile) => {
            profile_id = profile.uid;
            displayName = profile.displayName;
            email = profile.email;
            photo = profile.photoURL;
        });
    }

    document.title = "Lavishy - Profile"

    return (
        <div>
            <div className="w-[80%] mx-auto grid grid-cols-5 mt-10 gap-5">

                <div className="text-[#2b3440] border-2 p-7 rounded-lg shadow-md mb-20 col-span-1">
                    <h2 className="font-bold text-xl">Your Options</h2>
                    <h2 className="bg-[#00c867] text-[#2b3440] p-3 mt-7 rounded-lg font-semibold cursor-pointer">View Profile</h2>
                    <h2 className="text-[#2b3440] mt-4 font-semibold cursor-pointer">Edit Profile</h2>
                </div>

                <div className="text-[#2b3440] border-2 p-7 rounded-lg shadow-md mb-20 col-span-4">
                    <h2 className="mt-10 text-center text-2xl text-[#2b3440] font-bold">Profile</h2>
                    <div className="flex items-center justify-center">
                        <img className="mt-10 rounded-full" src={photo} alt="profile picture" />
                    </div>
                    <div className="w-[60%] mx-auto mt-10">
                        <div className="text-lg flex gap-1 mt-4">
                            <h2 className="font-bold">User ID: </h2>
                            <h2>{profile_id}</h2>
                        </div>
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

            </div>

            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default Profile;