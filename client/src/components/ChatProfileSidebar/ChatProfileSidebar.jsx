import React from "react";
import {
  FiPhone,
  FiVideo,
  FiMoreVertical,
  FiStar,
  FiEdit3,
} from "react-icons/fi";
import moment from "moment";

const ChatProfileSidebar = ({user, date}) => {
 

  const [isFavorite, setIsFavorite] = React.useState(false);

  return (
    <div className="w-80 h-full bg-white border-l border-gray-200 flex flex-col justify-center">
      {/* Profile Header */}
      <div className="p-6 flex flex-col items-center">
        {/* Avatar */}
        <div className="relative mb-4">
          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center text-white text-3xl font-bold">
            AM
          </div>
          <div className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-white"></div>
        </div>

        {/* Name and Title */}
        <h2 className="text-xl font-semibold text-gray-800">{user?.name}</h2>
        <p className="text-gray-500 text-sm mb-1">{user?.title}</p>
        <p className="text-gray-400 text-xs mb-4">{user?.location}</p>

        {/* Favorite Button */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className={`p-2 rounded-full ${
            isFavorite ? "text-yellow-400" : "text-gray-300"
          } hover:bg-gray-100`}
        >
          <FiStar className="w-5 h-5" />
        </button>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-100 mx-4"></div>

      {/* About Section */}
      <div className="p-6">
        <h3 className="text-xs font-medium text-gray-400 uppercase mb-2">
          About
        </h3>
        <p className="text-gray-600 text-sm mb-6">{user.about}</p>

        {/* Contact Info */}
        <div className="space-y-4">
          <div>
            <h4 className="text-xs font-medium text-gray-400 uppercase mb-1">
              Email
            </h4>
            <p className="text-gray-700 text-sm">{user.email}</p>
          </div>
          <div>
            <h4 className="text-xs font-medium text-gray-400 uppercase mb-1">
              Join
            </h4>
            <p className="text-gray-700 text-sm">{moment(date).fromNow()}</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-auto p-4 flex justify-between items-center border-t border-gray-100">
        <div className="flex space-x-2">
          <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200">
            <FiPhone className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200">
            <FiVideo className="w-5 h-5" />
          </button>
        </div>
        <div className="flex space-x-2">
          <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200">
            <FiEdit3 className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200">
            <FiMoreVertical className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatProfileSidebar;
