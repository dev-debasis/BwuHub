const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    title: {
      type: String,
      trim: true,
    },
    content: {
      type: String,
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
      // default: () => new Date(),
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

// module.exports = mongoose.model("Post", postSchema);

export const Post = mongoose.models.Post ?? mongoose.model("Post", postSchema);