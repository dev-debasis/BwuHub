const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
    },
    authorAvatar: {
        type: String,
    },
    tags: [
      {
        type: String,
        enum: [
          "seminar",
          "cultural",
          "sports",
          "hackathon",
          "announcement",
          "other",
        ],
        default: "other",
      },
    ],
    eventDateTime: {
      type: Date,
    },
    imageUrl: {
      type: String,
    },
    upvotes: {
      type: Number,
      default: 0,
    },
    downvotes: {
      type: Number,
      default: 0,
    },
    voters: [
      {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        vote: { type: String, enum: ["upvote", "downvote"] },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", postSchema);
