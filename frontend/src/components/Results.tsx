"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useParams } from "next/navigation"
import { lessonDifficulty } from "../../../backend/types/enums"

export default function Results({lessonId:number, 
  difficulty:lessonDifficulty
}) {
// FOr when the user's just finished a lesson
  return (
    <div>
      {/* TBD */}
    </div>
  )
}