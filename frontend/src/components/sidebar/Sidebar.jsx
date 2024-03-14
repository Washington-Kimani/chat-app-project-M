import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";
import UserProfile from "./UserProfile";

const Sidebar = () => {
	return (
    <div className="border-r border-slate-500 p-4 flex flex-col relative w-[40%]">
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations />
      <div class="w-full flex justify-between items-center  absolute  left-0 bottom-0 p-4 bg-black">
        <LogoutButton />
        <UserProfile />
      </div>
    </div>
  );
};
export default Sidebar;
