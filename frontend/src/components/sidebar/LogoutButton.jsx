import { RiLogoutCircleRLine } from "react-icons/ri";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();

  return (
    <div>
      {!loading ? (
        <>
			<RiLogoutCircleRLine
			className="w-6 h-6 text-white cursor-pointer"
			onClick={logout}
			/>
			<p>logout</p>
		</>
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};
export default LogoutButton;
