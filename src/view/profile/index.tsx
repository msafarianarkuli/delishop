import ProfileHeader from "view/profile/component/ProfileHeader";
import ProfileForm from "view/profile/component/ProfileForm";
import ProfileProvider from "view/profile/context/ProfileProvider";
import ProfileLogoutModal from "view/profile/component/ProfileLogoutModal";

function Profile() {
  return (
    <ProfileProvider>
      <ProfileHeader />
      <div className="mt-headerNormal px-screenSpace">
        <ProfileForm />
      </div>
      <ProfileLogoutModal />
    </ProfileProvider>
  );
}

export default Profile;
