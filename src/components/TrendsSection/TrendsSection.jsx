import ShowMore from "../ShowMore/ShowMore";
import Trends from "../Trends/Trends";

const trends = [
  {
    id: "1",
    title: " 1 . Trending",
    tagTrend: "#Microsoft363",
    numberOfTweets: " 5,466 Tweets",
  },
  {
    id: "2",
    Title: " 2 . Politics . Trending",
    tagTrend: "#HI-Fashion",
    numberOfTweets: " 8,464 Tweets",
  },
  {
    id: "3",
    Title: " 3 . Rock . Trending",
    tagTrend: "#Ferrari",
    numberOfTweets: " 5,586 Tweets",
  },
  {
    id: "4",
    Title: " 4 . Auto Racing . Trending",
    tagTrend: "#vettel",
    numberOfTweets: " 9,416 Tweets",
  },
];

export default function TrendsSection() {
  {
    /*second-trending tweet section*/
  }
  return (
    <>
      <div className="flex">
        <div className="flex-1 m-2">
          <h2 className="px-4 py-2 text-xl w-48 font-semibold text-white">
            Germany trends
          </h2>
        </div>
        <div className="flex-1 px-4 py-2 m-2">
          <a
            href=""
            className=" text-2xl rounded-full text-white hover:bg-blue-800 hover:text-blue-300 float-right"
          >
            <svg
              className="m-2 h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </a>
        </div>
      </div>
      <hr className="border-gray-600" />
      {trends.map(function (value) {
        return (
          <Trends
            key={value.id}
            title={value.title}
            tagTrend={value.tagTrend}
            numberOfTweets={value.numberOfTweets}
          />
        );
      })}
      <ShowMore />
    </>
  );
}
