"use client"
import Icon from "./Icon"


export default function AnswerResult({
  message,
  isSuccess = true,
  successColor = "#056517", 
  errorColor = "#de1a24", 
  className = "",
}) {
  const color = isSuccess ? successColor : errorColor
  const imgSrc_string = isSuccess ? "checkmark" : "x"
  // ^ imgSrc wil be replaced with actual assets later
  return (
    <div
      className={`
        rounded-xl p-6 flex flex-col items-center text-center
        ${className}
      `}
    >
      <h2 className="text-2xl font-bold mb-4">
        {message}
      </h2>
      <div className="w-16 h-16 rounded-xl border-2 border-black flex items-center justify-center "
      style={{ backgroundColor: color }}>
        <Icon image={imgSrc_string} />
      </div>
    </div>
  )
}
