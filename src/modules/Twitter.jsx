import LeftSideBar from "../components/LeftSideBar/LeftSideBar";
import MiddleWall from "../components/MiddleWall/MiddleWall";
import RightSideBar from "../components/RightSideBar/RightSideBar";

export default function Twitter() {
  return (
    <>
      <div className="flex">
        <LeftSideBar />
        <div className="w-3/5 border border-gray-600 h-auto  border-t-0">
          <MiddleWall />
        </div>
        <div className="w-2/5 h-12">
          <RightSideBar />
        </div>
      </div>
    </>
  );
}
