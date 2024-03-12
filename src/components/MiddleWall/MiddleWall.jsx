import CreateTweet from "../CreateTweet/CreateTweet";
import Home from "../Home/Home";
import CreateTweetIcons from "../CreateTweetIcons/CreateTweetIcons";
import Tweet from "../Tweet/Tweet";

const tweets = [
  {
    id: "1",
    avatar:
      "https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png",
    name: "Sonali Hirave",
    userNameAndDate: " @ShonaDesign . 16 April",
    dayOfChallenge: "Day 07 of the challenge",
    tag100DaysOfCode: "#100DaysOfCode",
    content1: "I was wondering what I can do with",
    tagTailwindcss: "#tailwindcss",
    content2:
      ", so just started building Twitter UI using Tailwind and so far it looks so promising. I will post my code after completion. [07/100]",
    lowerTags: "#WomenWhoCode #CodeNewbie",
    image: "",

    svg1: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
    svg2: "M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4",
    svg3: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    svg4: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12",
    svg5: "M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20",
    svg6: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    id: "2",
    avatar:
      "https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png",
    name: "Sonali Hirave",
    userNameAndDate: " @ShonaDesign . 16 April",
    dayOfChallenge: "Day 07 of the challenge",
    tag100DaysOfCode: "#100DaysOfCode",
    content1: "I was wondering what I can do with",
    tagTailwindcss: "#tailwindcss",
    content2:
      ", so just started building Twitter UI using Tailwind and so far it looks so promising. I will post my code after completion. [07/100]",
    lowerTags: "#WomenWhoCode #CodeNewbie",
    image:
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80",

    svg1: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
    svg2: "M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4",
    svg3: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    svg4: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12",
    svg5: "M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20",
    svg6: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    id: "3",
    avatar:
      "https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png",
    name: "Sonali Hirave",
    userNameAndDate: " @ShonaDesign . 16 April",
    dayOfChallenge: "Day 07 of the challenge",
    tag100DaysOfCode: "#100DaysOfCode",
    content1: "I was wondering what I can do with",
    tagTailwindcss: "#tailwindcss",
    content2:
      ", so just started building Twitter UI using Tailwind and so far it looks so promising. I will post my code after completion. [07/100]",
    lowerTags: "#WomenWhoCode #CodeNewbie",

    svg1: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
    svg2: "M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4",
    svg3: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    svg4: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12",
    svg5: "M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20",
    svg6: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    image: "",
  },
];

export default function MiddleWall() {
  return (
    <>
      <Home />
      <CreateTweet />
      <CreateTweetIcons />
      {tweets.map(function (value) {
        return (
          <Tweet
            key={value.id}
            avatar={value.avatar}
            name={value.name}
            userNameAndDate={value.userNameAndDate}
            dayOfChallenge={value.dayOfChallenge}
            tag100DaysOfCode={value.tag100DaysOfCode}
            content1={value.content1}
            tagTailwindcss={value.tagTailwindcss}
            content2={value.content2}
            lowerTags={value.lowerTags}
            image={value.image}
          />
        );
      })}
    </>
  );
}
