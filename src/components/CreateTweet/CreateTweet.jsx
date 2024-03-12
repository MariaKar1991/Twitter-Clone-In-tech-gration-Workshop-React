export default function CreateTweet() {
  return (
    <>
      {/*middle creat tweet*/}
      <div className="flex">
        <div className="m-2 w-10 py-1">
          <img
            className="inline-block h-10 w-10 rounded-full"
            src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png"
            alt=""
          />
        </div>
        <div className="flex-1 px-2 pt-2 mt-2">
          <textarea
            className=" bg-transparent text-gray-400 font-medium text-lg w-full"
            rows={2}
            cols={50}
            placeholder="What's happening?"
            defaultValue={""}
          />
        </div>
      </div>
    </>
  );
}
