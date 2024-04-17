import Footer from "../footer/Footer";
import { getAuth } from "firebase/auth";
import app from "../../firebase/firebase.config";

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
                    <h2>{displayName}</h2>
                </div>
                <div className="text-lg flex gap-1 mt-4">
                    <h2 className="font-bold">Email: </h2>
                    <h2>{email}</h2>
                </div>
                <div className="text-lg flex gap-1 mt-4">
                    <h2 className="font-bold">Password: </h2>
                    <h2>****</h2>
                </div>
            </div>

            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default Profile;