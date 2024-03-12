import PropTypes from "prop-types";
import TweetSVGIcons from "../TweetSVGIcons/TweetSVGIcons";

export default function Tweet(props) {
  return (
    <>
      {/*first tweet start*/}
      <div className="flex flex-shrink-0 p-4 pb-0">
        <a href="#" className="flex-shrink-0 group block">
          <div className="flex items-center">
            <div>
              <img
                className="inline-block h-10 w-10 rounded-full"
                src={props.avatar}
                alt=""
              />
            </div>
            <div className="ml-3">
              <p className="text-base leading-6 font-medium text-white">
                {props.name}
                <span className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                  {props.userNameAndDate}
                </span>
              </p>
            </div>
          </div>
        </a>
      </div>
      <div className="pl-16">
        <p className="text-base width-auto font-medium text-white flex-shrink">
          {props.dayOfChallenge}
          <span className="text-blue-400">{props.tag100DaysOfCode}</span>
          {props.content1}
          <span className="text-blue-400">{props.tagTailwindcss}</span>
          {props.content2}
          <span className="text-blue-400"> {props.lowerTags}</span>
        </p>
        <div className="md:flex-shrink pr-6 pt-3">
          {props.image && (
            <img
              className="rounded-lg w-full h-64"
              src={props.image}
              alt="Woman paying for a purchase"
            />
          )}
        </div>
      </div>
      <TweetSVGIcons />
      <hr className="border-gray-600" />
    </>
  );
}

Tweet.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  userNameAndDate: PropTypes.string.isRequired,
  dayOfChallenge: PropTypes.string.isRequired,
  tag100DaysOfCode: PropTypes.string.isRequired,
  content1: PropTypes.string.isRequired,
  tagTailwindcss: PropTypes.string.isRequired,
  content2: PropTypes.string.isRequired,
  lowerTags: PropTypes.string.isRequired,
  image: PropTypes.string,
};
