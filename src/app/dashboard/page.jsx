"use client"
import React, { useState } from 'react';
import { 
  Home, 
  Search, 
  Bell, 
  Mail, 
  Bookmark, 
  User, 
  Settings, 
  MoreHorizontal, 
  MessageCircle, 
  Heart, 
  Repeat2, 
  BarChart2, 
  Share, 
  X, 
  Plus,
  Calendar,
  Globe,
  Image,
  Video,
  Smile,
  Loader,
  Menu
} from 'lucide-react';

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

import {
  Button
} from '@/components/ui/button';

import {
  Input
} from '@/components/ui/input';

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';

export default function TwitterDashboard() {
  // State for theme
  const [darkMode, setDarkMode] = useState(true);
  
  // State for sidebar
  const [expanded, setExpanded] = useState(false);
  
  // State for post creation
  const [inputValue, setInputValue] = useState('');
  
  // State for posts
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Rishiii",
      handle: "@me_rishiii",
      avatar: "/api/placeholder/40/40",
      content: "I just noticed, Bro is 14 since 2023 ?? This young cricket talent is impressive! Can't believe he's been playing at this level for so long already. Definitely someone to watch in the coming years.",
      date: "Apr 30",
      liked: false,
      retweeted: false,
      bookmarked: false,
      likeCount: 28000,
      retweetCount: 2200,
      commentCount: 746,
      viewCount: 1600000
    }
  ]);
  
  // Loading state for timeline
  const [loading, setLoading] = useState(false);

  // Formatting utility for numbers
  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  // Post interactions
  const handleLike = (postId) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          liked: !post.liked,
          likeCount: post.liked ? post.likeCount - 1 : post.likeCount + 1
        };
      }
      return post;
    }));
  };

  const handleRetweet = (postId) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          retweeted: !post.retweeted,
          retweetCount: post.retweeted ? post.retweetCount - 1 : post.retweetCount + 1
        };
      }
      return post;
    }));
  };

  const handleBookmark = (postId) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          bookmarked: !post.bookmarked
        };
      }
      return post;
    }));
  };
  
  // UI interactions
  const toggleSidebar = () => {
    setExpanded(!expanded);
  };
  
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Create new post
  const handleCreatePost = () => {
    if (!inputValue.trim()) return;
    
    const newPost = {
      id: Date.now(),
      author: "Rishiii",
      handle: "@me_rishiii",
      avatar: "/api/placeholder/40/40",
      content: inputValue,
      date: "Just now",
      liked: false,
      retweeted: false,
      bookmarked: false,
      likeCount: 0,
      retweetCount: 0,
      commentCount: 0,
      viewCount: 1
    };
    
    setPosts([newPost, ...posts]);
    setInputValue('');
  };

  // Theme colors
  const bgColor = darkMode ? 'bg-black' : 'bg-white';
  const textColor = darkMode ? 'text-white' : 'text-black';
  const borderColor = darkMode ? 'border-gray-800' : 'border-gray-200';
  const hoverBgColor = darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100';
  const secondaryTextColor = darkMode ? 'text-gray-400' : 'text-gray-600';
  const cardBgColor = darkMode ? 'bg-black' : 'bg-white';

  return (
    <div className='flex justify-center bg-black max-h-screen overflow-auto'>
    <div className={`max-h-screen max-w-screen flex justify-center ${bgColor}`}>
      <div className={`flex justify-center min-h-screen w-full ${bgColor} ${textColor}`}>
        {/* Mobile Menu Button (only visible on small screens) */}
        <div className="md:hidden fixed top-4 left-4 z-50">
          <Button variant="ghost" size="icon" onClick={toggleSidebar} className={`rounded-full ${hoverBgColor}`}>
            <Menu size={24} />
          </Button>
        </div>
        
        {/* Sidebar */}
        <div className={`
          fixed h-full p-4 border-r 
          ${borderColor} 
          transition-all duration-300 ease-in-out
          ${expanded ? 'w-64 left-0' : 'w-20 -left-full'} 
          md:left-0 z-40
        `}>
          <div className="mt-auto">
            <div 
              className={`flex items-center p-2 rounded-full cursor-pointer ${hoverBgColor} transition-all`} 
              onClick={toggleTheme}
            >
              <Avatar className="h-10 w-10">
                <AvatarImage src="/api/placeholder/40/40" alt="User" />
                <AvatarFallback className={darkMode ? 'bg-gray-800' : 'bg-gray-200'}>RS</AvatarFallback>
              </Avatar>
              {expanded && (
                <div className="ml-3">
                  <p className="font-bold text-sm">Rishiii</p>
                  <p className={`${secondaryTextColor} text-xs`}>@me_rishiii</p>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className={`
          flex-1 
          transition-all duration-300
          ml-0 md:ml-20
          ${expanded ? 'md:ml-64' : 'md:ml-20'}
        `}>
          <div className="flex">
            {/* Timeline */}
            <div className={`
              flex-1 
              border-r border-l 
              ${borderColor}
              max-w-xl mx-auto 
              sm:mx-0 sm:border-l-0 md:border-l
            `}>
              {/* Header */}
              <div className={`sticky top-0 z-10 ${bgColor} border-b ${borderColor} px-4 py-3`}>
                <div className="flex items-center justify-between mb-2">
                  <h1 className="text-xl font-bold">Home</h1>
                  <Settings size={20} className="cursor-pointer" />
                </div>
                <Tabs defaultValue="for-you" className="w-full">
                  <TabsList className="w-full grid grid-cols-2 bg-transparent">
                    <TabsTrigger 
                      value="for-you" 
                      className="data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:shadow-none rounded-none bg-transparent"
                    >
                      For you
                    </TabsTrigger>
                    <TabsTrigger 
                      value="following" 
                      className="data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:shadow-none rounded-none bg-transparent"
                    >
                      Following
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              
              {/* Compose */}
              <div className={`border-b ${borderColor} px-4 py-3`}>
                <div className="flex">
                  <Avatar className="h-10 w-10 mr-3 flex-shrink-0">
                    <AvatarImage src="/api/placeholder/40/40" alt="User" />
                    <AvatarFallback className={darkMode ? 'bg-gray-800' : 'bg-gray-200'}>RS</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <Input 
                      placeholder="What's happening?"
                      className={`border-none ${bgColor} ${textColor} text-lg focus-visible:ring-0 focus-visible:ring-offset-0`}
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                    />
                    <div className="flex justify-between mt-3">
                      <div className="flex text-blue-500 space-x-2">
                        <button className={`p-2 rounded-full ${hoverBgColor} transition-colors`}>
                          <Image size={18} />
                        </button>
                        <button className={`p-2 rounded-full ${hoverBgColor} transition-colors`}>
                          <Video size={18} />
                        </button>
                        <button className={`p-2 rounded-full ${hoverBgColor} transition-colors`}>
                          <Smile size={18} />
                        </button>
                        <button className={`p-2 rounded-full ${hoverBgColor} transition-colors hidden sm:flex`}>
                          <Calendar size={18} />
                        </button>
                        <button className={`p-2 rounded-full ${hoverBgColor} transition-colors hidden sm:flex`}>
                          <Globe size={18} />
                        </button>
                      </div>
                      <Button 
                        disabled={!inputValue.trim()} 
                        className={`rounded-full ${!inputValue.trim() ? 'bg-blue-500/60' : 'bg-blue-500'} hover:bg-blue-600 text-white px-4`}
                        onClick={handleCreatePost}
                      >
                        Post
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Timeline Posts */}
              <div>
                {posts.map(post => (
                  <div 
                    key={post.id}
                    className={`flex justify-center items-center w-full p-0 border-b ${borderColor}`}
                  >
                    <TooltipProvider>
                      <Card className={`w-full ${cardBgColor} ${textColor} border-none rounded-none shadow-none`}>
                        <CardContent className="p-4">
                          {/* Header */}
                          <div className="flex items-start gap-3 mb-2">
                            <div className="relative group">
                              <Avatar className={`h-10 w-10 border ${borderColor} transition-transform duration-300 group-hover:scale-105 flex-shrink-0`}>
                                <AvatarImage src={post.avatar} alt={post.author} />
                                <AvatarFallback className={darkMode ? "bg-gray-800 text-gray-400" : "bg-gray-200 text-gray-600"}>
                                  {post.author.substring(0, 2)}
                                </AvatarFallback>
                              </Avatar>
                              <div className="absolute inset-0 bg-blue-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-1 flex-wrap">
                                <p className="font-bold text-sm hover:underline cursor-pointer">{post.author}</p>
                                <p className={`${secondaryTextColor} text-sm truncate`}>{post.handle}</p>
                                <span className={secondaryTextColor}>·</span>
                                <p className={`${secondaryTextColor} text-sm`}>{post.date}</p>
                              </div>

                              <p className="text-base mt-1 leading-relaxed break-words">{post.content}</p>
                            </div>

                            <div className="ml-auto flex-shrink-0">
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <button className={`p-2 rounded-full ${hoverBgColor} transition-colors`}>
                                    <MoreHorizontal size={18} className={secondaryTextColor} />
                                  </button>
                                </TooltipTrigger>
                                <TooltipContent>More</TooltipContent>
                              </Tooltip>
                            </div>
                          </div>
                        </CardContent>

                        {/* Footer */}
                        <CardFooter className="px-4 pb-3 pt-0 flex justify-between">
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <button className={`group flex items-center gap-1 ${secondaryTextColor} hover:text-blue-500 transition-colors`}>
                                <div className={`p-2 rounded-full group-hover:bg-blue-500/10 transition-all duration-200 transform group-hover:scale-110`}>
                                  <MessageCircle size={18} />
                                </div>
                                <span className="text-sm">{formatNumber(post.commentCount)}</span>
                              </button>
                            </TooltipTrigger>
                            <TooltipContent>Reply</TooltipContent>
                          </Tooltip>

                          <Tooltip>
                            <TooltipTrigger asChild>
                              <button
                                className={`group flex items-center gap-1 ${post.retweeted ? 'text-green-500' : secondaryTextColor + ' hover:text-green-500'} transition-colors`}
                                onClick={() => handleRetweet(post.id)}
                              >
                                <div className={`p-2 rounded-full ${post.retweeted ? 'bg-green-500/10' : 'group-hover:bg-green-500/10'} transition-all duration-200 transform group-hover:scale-110`}>
                                  <Repeat2 
                                    size={18} 
                                    className={`transition-transform ${post.retweeted ? 'rotate-180' : 'group-hover:rotate-45'}`} 
                                  />
                                </div>
                                <span className="text-sm">{formatNumber(post.retweetCount)}</span>
                              </button>
                            </TooltipTrigger>
                            <TooltipContent>Repost</TooltipContent>
                          </Tooltip>

                          <Tooltip>
                            <TooltipTrigger asChild>
                              <button
                                className={`group flex items-center gap-1 ${post.liked ? 'text-pink-500' : secondaryTextColor + ' hover:text-pink-500'} transition-colors`}
                                onClick={() => handleLike(post.id)}
                              >
                                <div className={`p-2 rounded-full ${post.liked ? 'bg-pink-500/10' : 'group-hover:bg-pink-500/10'} transition-all duration-200 transform group-hover:scale-110`}>
                                  <Heart
                                    size={18}
                                    className={`${post.liked ? 'fill-pink-500' : ''} transition-transform duration-300 ${post.liked ? 'scale-110' : 'group-hover:scale-125 group-hover:animate-pulse'}`}
                                  />
                                </div>
                                <span className="text-sm">{formatNumber(post.likeCount)}</span>
                              </button>
                            </TooltipTrigger>
                            <TooltipContent>Like</TooltipContent>
                          </Tooltip>

                          <Tooltip>
                            <TooltipTrigger asChild>
                              <button className={`group flex items-center gap-1 ${secondaryTextColor} hover:text-blue-500 transition-colors`}>
                                <div className="p-2 rounded-full group-hover:bg-blue-500/10 transition-all duration-200 transform group-hover:scale-110">
                                  <BarChart2 size={18} />
                                </div>
                                <span className="text-sm">{formatNumber(post.viewCount)}</span>
                              </button>
                            </TooltipTrigger>
                            <TooltipContent>View analytics</TooltipContent>
                          </Tooltip>

                          <div className="flex items-center gap-2">
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <button
                                  className={`p-2 rounded-full ${post.bookmarked ? 'text-blue-500 bg-blue-500/10' : secondaryTextColor + ' hover:text-blue-500 hover:bg-blue-500/10'} transition-all duration-200 transform hover:scale-110`}
                                  onClick={() => handleBookmark(post.id)}
                                >
                                  <Bookmark 
                                    size={18} 
                                    className={`transition-transform duration-300 ${post.bookmarked ? 'fill-blue-500 scale-110' : ''}`} 
                                  />
                                </button>
                              </TooltipTrigger>
                              <TooltipContent>Bookmark</TooltipContent>
                            </Tooltip>

                            <Tooltip>
                              <TooltipTrigger asChild>
                                <button className={`p-2 rounded-full ${secondaryTextColor} hover:text-blue-500 hover:bg-blue-500/10 transition-colors`}>
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
                ))}
                
                {/* Load more indicator */}
                {loading && (
                  <div className={`flex justify-center py-6 ${borderColor}`}>
                    <div className="flex items-center gap-2 text-blue-500">
                      <Loader size={20} className="animate-spin" />
                      <span>Loading more posts...</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div/>
    </div>
  );
}