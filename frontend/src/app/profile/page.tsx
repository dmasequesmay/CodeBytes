"use client"

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import StreakDisplayer from "@/components/StreakDisplay";
import Icon from "@/components/Icon";
import Badge from "@/components/Badge";
import { signOutUser, getCurrentUser } from "../../services/auth"; // Import auth functions

export default function Profile() {
  const [badgeOffset, setBadgeOffset] = useState(0);
  const [user, setUser] = useState<any>(null); // Initialize user state

  // Fetch the logged-in user data on component mount
  useEffect(() => {
    const currentUser = getCurrentUser();
    if (currentUser) {
      setUser(currentUser); // Set user data if logged in
    }
  }, []);

  const handleNextBadges = () => {
    // Pagination for badges (forward)
    if (badgeOffset + 4 < badges.length) {
      setBadgeOffset(badgeOffset + 4);
    } else {
      setBadgeOffset(0); 
    }
  };

  const handleLogout = async () => {
    await signOutUser();
    setUser(null); // Clear user state on logout
    // Optionally, redirect to login page
    window.location.href = "/login";
  };

  // Fallback if user data is not available
  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-xl">Loading user data...</h2>
      </div>
    );
  }

  // Sample badges data
  const badges = Array.from({ length: 20 }, (_, idx) => ({
    id: idx + 1,
    name: `Badge ${idx + 1}`,
  }));

  const visibleBadges = badges.slice(badgeOffset, badgeOffset + 4);

  return (
    <div className="flex h-screen">
      <div className="w-[200px] bg-slate-500 relative">
        <div className="absolute top-12 left-6">
          <ChevronLeft className="w-8 h-8 text-black" />
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 bg-sky-100">
        <div className="relative pt-20 pb-4 border-b border-sky-300">
          {/* Profile picture placeholder */}
          <div className="w-[200px] h-[200px] bg-slate-500 rounded-full mx-auto">
            <img src="/assets/Frame 10.png" alt="Profile" className="w-full h-full rounded-full object-cover" />
          </div>

          {/* Edit button */}
          <div className="absolute bottom-4 right-8">
            <button className="bg-slate-300 px-4 py-1 text-lg">Edit</button>
          </div>
        </div>

        {/* User info section */}
        <div className="py-4 text-center">
          <h1 className="text-2xl font-bold mb-2">{user.displayName || user.userName}</h1>
          <p className="text-lg">{user.firstName} {user.lastName}</p>
          <p className="text-gray-500">{user.email}</p>
          <p className="text-gray-500">Joined: {new Date().toDateString()}</p>

          <div className="mt-4">
            <button 
              onClick={handleLogout} 
              className="bg-red-500 text-white px-4 py-2 rounded-lg">
              Logout
            </button>
          </div>

          <div className="flex justify-center gap-8 px-8 mt-4">
            {/* Streak display */}
            <div className="w-64 h-52 bg-slate-500 rounded-lg flex flex-col items-center justify-center relative">
              <StreakDisplayer numDays={user.streak || 0} />
            </div>

            {/* Bio section */}
            <div className="flex-1 flex flex-col justify-center items-center bg-purple-500 p-4">
              <p className="text-lg max-w-md">{user.bio || "No bio available"}</p>
            </div>
          </div>
        </div>

        {/* Badges section */}
        <div className="mt-8 relative">
          <div className="absolute top-1/2 -translate-y-1/2 right-4">
            <button onClick={handleNextBadges}>
              <ChevronRight className="w-8 h-8 text-black" />
            </button>
          </div>

          {/* More options button */}
          <div className="absolute top-2 right-2">
            <MoreHorizontal className="w-5 h-5 text-gray-500" />
          </div>

          {/* Display badges */}
          <div className="grid grid-cols-4 gap-4 p-4 max-w-4xl mx-auto">
            {visibleBadges.map((badge) => (
              <div 
                key={badge.id} 
                className="w-40 h-40 bg-slate-400 rounded-lg flex items-center justify-center">
                <Badge image="/assets/Frame 10.png" name={badge.name} desc="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
