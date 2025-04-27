"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Flame, MoreHorizontal } from "lucide-react"
import StreakDisplayer from "@/components/StreakDisplay";
import Icon from "@/components/Icon";
import Badge from "@/components/Badge";

export default function Profile({userId: number}) {
  // NOTE: we'll be using the userId to make a call to the DB to get info; will be implemented later
  const [badgeOffset, setBadgeOffset] = useState(0);

  // Placeholder info for the current user. a method to retrive information will be implemented later
  const [user, setUser] = useState({
    userName: "Username123",
    firstName: "John",
    lastName: "Doe",
    bio: "Learning to code one lesson at a time",
    email: "johndoe@email.com",
    dateJoined: new Date("2024-01-01"),
    streak: 0
  });

  // sample data - will be retrived dynamically later
  const badges = Array.from({ length: 20 }, (_, idx) => ({
    id: idx + 1,
    name: `Badge ${idx + 1}`,
    // more fields added later
  }))

  const visibleBadges = badges.slice(badgeOffset, badgeOffset + 5)

  const handleNextBadges = () => {
    // TODO: implement pagination for badges (forward)
    // use the above hooks and change the badgeOffset
    if (badgeOffset + 5 < badges.length) {
      setBadgeOffset(badgeOffset + 5);
    } else {
      setBadgeOffset(0); 
    }
  };


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
          {/* TODO: Implement an Icon component within the below div */}
          <div className="w-40 h-40 bg-slate-500 rounded-full mx-auto">
            <Icon image="" />
          </div>

          {/* Edit button */}
          <div className="absolute bottom-4 right-8">
            {/* NOTE: This button will route to a edit profile page; will be implemented later */}
            <button className="bg-slate-300 px-4 py-1 text-lg">Edit</button>
          </div>
        </div>

        {/* User info section */}
        <div className="py-4 text-center">
          {/* TODO: Dynamically display the current user info
          username
          firstname lastname
          email
          date joined */}
          <h1 className="text-2xl font-bold mb-4">{user.userName}</h1>
          <p className="text-lg">{user.firstName} {user.lastName}</p>
          <p className="text-gray-500">{user.email}</p>
          <p className="text-gray-500">Joined: {user.dateJoined.toDateString()}</p>

          
          <div className="flex justify-center gap-8 px-8">
            {/* Streak display */}
            <div className="w-64 h-52 bg-slate-500 rounded-lg flex flex-col items-center justify-center relative">
              {/* TODO: Dynamically display the current user's day streak
              using the StreakDisplay component */}
              <StreakDisplayer numDays={user.streak} />
            </div>

            {/* Bio section */}
            <div className="flex-1 flex flex-col justify-center items-center">
              <p className="text-lg max-w-md">
                {user.bio}
              </p>
            </div>
          </div>
        </div>

        {/* Badges section */}       
        <div className="mt-8 relative">
          <div className="absolute top-1/2 -translate-y-1/2 right-4">
            {/* hook this button into the handleNextBadges function
            so that each click will display the next 5 badges */}
            <button onClick={handleNextBadges} >
              <ChevronRight className="w-8 h-8 text-black" />
            </button>
          </div>

          {/* More options button */}
          <div className="absolute top-2 right-2">
            <MoreHorizontal className="w-5 h-5 text-gray-500" />
          </div>

          {/* Display badges */}
          <div className="flex justify-center gap-4 px-16">
            {/* TODO: Dynamically map all items in the badges array to a Badge Component, and show the results below */}
            {visibleBadges.map((badge) =>(
              <div key={badge.id} className="w-24 h-24 bg-slate-400 rounded-lg flex items-center justify-center">
                <Badge image="" name={badge.name} desc="placeholder" />
              </div>
            ))}
            {null}
          </div>
        </div>
      </div>
    </div>
  )
}
