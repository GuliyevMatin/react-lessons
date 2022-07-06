import ProfileForm from "./profileForm";
import ProfileInfo from "./profileInfo";

function Profile() {
  return (
    <div className="profile d-flex row">
      <ProfileInfo />
      <ProfileForm />
    </div>
  );
}

export default Profile;
