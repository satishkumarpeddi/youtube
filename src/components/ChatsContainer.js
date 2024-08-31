import React from "react";
import { FaUserCircle } from "react-icons/fa";
const DATA_MOCKS = [
  {
    name: "ayno",
    text: "This is a comment of the video above.",
    repiles: [
      {
        name: "ayno",
        text: "This is a comment of the video above.",
        repiles: [
          {
            name: "ayno",
            text: "This is a comment of the video above.",
            repiles: [
              {
                name: "ayno",
                text: "This is a comment of the video above.",
                repiles: [],
              },
            ],
          },
        ],
        name: "ayno",
        text: "This is a comment of the video above.",
        repiles: [],
      },
      {
        name: "ayno",
        text: "This is a comment of the video above.",
        repiles: [
          {
            name: "ayno",
            text: "This is a comment of the video above.",
            repiles: [
              {
                name: "ayno",
                text: "This is a comment of the video above.",
                repiles: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "ayno",
    text: "This is a comment of the video above.",
    repiles: [],
  },
  {
    name: "ayno",
    text: "This is a comment of the video above.",
    repiles: [],
  },
  {
    name: "ayno",
    text: "This is a comment of the video above.",
    repiles: [],
  },
  {
    name: "ayno",
    text: "This is a comment of the video above.",
    repiles: [],
  },
  {
    name: "ayno",
    text: "This is a comment of the video above.",
    repiles: [],
  },
];
const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex items-center gap-x-[.5rem]">
      <div>
        <FaUserCircle className="text-[2.3rem]" />
      </div>
      <div>
        <p className="font-bold ">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};
const CommentsList = ({ commentsData }) => {
  return commentsData.map((comment) => (
    <div>
      <Comment data={comment} />
      <div className="pl-[.5rem] border-l-4 border-gray-200">
        <CommentsList commentsData={comment.repiles} />
      </div>
    </div>
  ));
};
const ChatsContainer = () => {
  return (
    <div>
      <h1 className="font-bold p-[1rem]">Comments:</h1>
      <CommentsList commentsData={DATA_MOCKS} />
    </div>
  );
};

export default ChatsContainer;
