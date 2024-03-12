import FollowButton from "../FollowButton/FollowButton";
import PropTypes from "prop-types";

export default function Follower(props) {
  return (
    <>
      <hr className="border-gray-600" />
      {/*first person who to follow*/}
      <div className="flex flex-shrink-0">
        <div className="flex-1 ">
          <div className="flex items-center w-48">
            <div>
              <img
                className="inline-block h-10 w-auto rounded-full ml-4 mt-2"
                src={props.avatar}
                alt=""
              />
            </div>
            <div className="ml-3 mt-3">
              <p className="text-base leading-6 font-medium text-white">
                {props.name}
              </p>
              <p className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                {props.userName}
              </p>
            </div>
          </div>
        </div>
        <FollowButton />
      </div>
      <hr className="border-gray-600" />
    </>
  );
}

Follower.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
};
