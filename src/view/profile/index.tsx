import ProfileHeader from "view/profile/component/ProfileHeader";
import ProfileForm from "view/profile/component/ProfileForm";

function Profile() {
  return (
    <>
      <ProfileHeader />
      <div className="mt-headerNormal px-screenSpace">
        <ProfileForm />
      </div>
    </>
  );
}

export default Profile;
