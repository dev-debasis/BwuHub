"use client"

import { useState } from 'react';
import { MoreHorizontal, MessageCircle, Heart, Repeat2, BarChart2, Bookmark, Share } from 'lucide-react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardFooter
} from '@/components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export default function TwitterTextPost() {
  const [liked, setLiked] = useState(false);
  const [retweeted, setRetweeted] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const [likeCount, setLikeCount] = useState(28000);
  const [retweetCount, setRetweetCount] = useState(2200);
  const [commentCount, setCommentCount] = useState(746);
  const [viewCount, setViewCount] = useState(1600000);

  const formatNumber = (num: number): string => {  // Add type annotation here
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  const handleRetweet = () => {
    setRetweeted(!retweeted);
    setRetweetCount(retweeted ? retweetCount - 1 : retweetCount + 1);
  };

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <div className="flex justify-center items-center w-full max-w-xl mx-auto p-4">
      <TooltipProvider>
        <Card className="w-full bg-black text-white border border-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-gray-700 hover:shadow-lg hover:shadow-gray-900/30">
          <CardContent className="p-4">
            {/* Header */}
            <div className="flex items-start gap-3 mb-2">
              <div className="relative group">
                <Avatar className="h-10 w-10 border border-gray-700 transition-transform duration-300 group-hover:scale-105">
                  <AvatarImage src="/api/placeholder/40/40" alt="User" />
                  <AvatarFallback className="bg-gray-800 text-gray-400">RS</AvatarFallback>
                </Avatar>
                <div className="absolute inset-0 bg-blue-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-1">
                  <p className="font-bold text-sm hover:underline cursor-pointer">Rishiii</p>
                  <p className="text-gray-500 text-sm">@me_rishiii</p>
                  <span className="text-gray-500">·</span>
                  <p className="text-gray-500 text-sm">Apr 30</p>
                </div>

                <p className="text-base mt-1 leading-relaxed">I just noticed, Bro is 14 since 2023 ?? This young cricket talent is impressive! Can't believe he's been playing at this level for so long already. Definitely someone to watch in the coming years.</p>
              </div>

              <div className="ml-auto">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="p-2 rounded-full hover:bg-gray-800 transition-colors">
                      <MoreHorizontal size={18} className="text-gray-500" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>More</TooltipContent>
                </Tooltip>
              </div>
            </div>
          </CardContent>

          {/* Footer */}
          <CardFooter className="px-4 pb-3 pt-0 flex justify-between border-t border-gray-800/50 mt-1">
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="group flex items-center gap-1 text-gray-500 hover:text-blue-500 transition-colors">
                  <div className="p-2 rounded-full group-hover:bg-blue-500/10 transition-all duration-200 transform group-hover:scale-110">
                    <MessageCircle size={18} />
                  </div>
                  <span className="text-sm">{formatNumber(commentCount)}</span>
                </button>
              </TooltipTrigger>
              <TooltipContent>Reply</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  className={group flex items-center gap-1 ${retweeted ? 'text-green-500' : 'text-gray-500 hover:text-green-500'} transition-colors}
                  onClick={handleRetweet}
                >
                  <div className={p-2 rounded-full ${retweeted ? 'bg-green-500/10' : 'group-hover:bg-green-500/10'} transition-all duration-200 transform group-hover:scale-110}>
                    <Repeat2 size={18} className={transition-transform ${retweeted ? 'rotate-180' : 'group-hover:rotate-45'}} />
                  </div>
                  <span className="text-sm">{formatNumber(retweetCount)}</span>
                </button>
              </TooltipTrigger>
              <TooltipContent>Repost</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  className={group flex items-center gap-1 ${liked ? 'text-pink-500' : 'text-gray-500 hover:text-pink-500'} transition-colors}
                  onClick={handleLike}
                >
                  <div className={p-2 rounded-full ${liked ? 'bg-pink-500/10' : 'group-hover:bg-pink-500/10'} transition-all duration-200 transform group-hover:scale-110}>
                    <Heart
                      size={18}
                      className={${liked ? 'fill-pink-500' : ''} transition-transform duration-300 ${liked ? 'scale-110' : 'group-hover:scale-125 group-hover:animate-pulse'}}
                    />
                  </div>
                  <span className="text-sm">{formatNumber(likeCount)}</span>
                </button>
              </TooltipTrigger>
              <TooltipContent>Like</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <button className="group flex items-center gap-1 text-gray-500 hover:text-blue-500 transition-colors">
                  <div className="p-2 rounded-full group-hover:bg-blue-500/10 transition-all duration-200 transform group-hover:scale-110">
                    <BarChart2 size={18} />
                  </div>
                  <span className="text-sm">{formatNumber(viewCount)}</span>
                </button>
              </TooltipTrigger>
              <TooltipContent>View analytics</TooltipContent>
            </Tooltip>

            <div className="flex items-center gap-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    className={p-2 rounded-full ${bookmarked ? 'text-blue-500 bg-blue-500/10' : 'text-gray-500 hover:text-blue-500 hover:bg-blue-500/10'} transition-all duration-200 transform hover:scale-110}
                    onClick={handleBookmark}
                  >
                    <Bookmark size={18} className={transition-transform duration-300 ${bookmarked ? 'fill-blue-500 scale-110' : ''}} />
                  </button>
                </TooltipTrigger>
                <TooltipContent>Bookmark</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="p-2 rounded-full text-gray-500 hover:text-blue-500 hover:bg-blue-500/10 transition-colors">
                    <Share size={18} />
                  </button>
                </TooltipTrigger>
                <TooltipContent>Share</TooltipContent>
              </Tooltip>
            </div>
          </CardFooter>
        </Card>
      </TooltipProvider>
    </div>
  );
}