import SearchRightSideBar from "../SearchRightSideBar/SearchRightSideBar";
import TrendsSection from "../TrendsSection/TrendsSection";
import WhoToFollow from "../WhoToFollow/WhoToFollow";
import Terms from "../Terms/Terms";
import Copyright from "../Copyright/Copyright";

export default function RightSideBar() {
  return (
    <>
      <SearchRightSideBar />
      <div className="max-w-sm rounded-lg bg-blue-800 overflow-hidden shadow-lg m-4 mr-20">
        <TrendsSection />
      </div>
      <WhoToFollow />
      <div className="flow-root m-6 inline">
        <Terms />
        <Copyright />
      </div>
    </>
  );
}
