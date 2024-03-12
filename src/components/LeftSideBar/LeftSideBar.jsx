import TwitterLogo from "../TwitterLogo/TwitterLogo";
import NavigationListLeftMenu from "../NavigationListLeftMenu/NavigationListLeftMenu";
import LargeTweetButton from "../LargeTweetButton/LargeTweetButton";
import UserLeftSide from "../UserLeftSide/UserLeftSide";

export default function LeftSideBar() {
  return (
    <div className="w-2/5 text-white h-12 pl-32 py-4 h-auto">
      <TwitterLogo />
      <NavigationListLeftMenu />
      <LargeTweetButton />
      <UserLeftSide />
    </div>
  );
}
