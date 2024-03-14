import { useAuthContext } from "../../context/AuthContext";

function UserProfile() {
  const { authUser } = useAuthContext();

  console.log(authUser);

  return (
    <div className="flex flex-col justify-center items-center">
      <img src={authUser.profilePic} alt="" className="w-10" />
      <p>{authUser.fullName}</p>
    </div>
  );
}
export default UserProfile;
