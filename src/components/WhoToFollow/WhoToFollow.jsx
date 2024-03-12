import Follower from "../Follower/Follower";
import ShowMore from "../ShowMore/ShowMore";

const followers = [
  {
    id: "1",
    avatar:
      "https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png",
    name: " Sonali Hirave",
    userName: " @ShonaDesign",
  },
  {
    id: "2",
    avatar:
      "https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png",
    name: " Sonali Hirave",
    userName: " @ShonaDesign",
  },
];

export default function WhoToFollow() {
  return (
    <>
      {/*third-people suggetion to follow section*/}
      <div className="max-w-sm rounded-lg bg-blue-800 overflow-hidden shadow-lg m-4 mr-20">
        <div className="flex">
          <div className="flex-1 m-2">
            <h2 className="px-4 py-2 text-xl w-48 font-semibold text-white">
              Who to follow
            </h2>
          </div>
        </div>
        {followers.map(function (value) {
          return (
            <Follower
              key={value.id}
              avatar={value.avatar}
              name={value.name}
              userName={value.userName}
            />
          );
        })}
        <ShowMore />
      </div>
    </>
  );
}
