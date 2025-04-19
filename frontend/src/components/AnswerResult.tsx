"use client"

export default function AnswerResult({
  message,
  isSuccess = true,
  successColor = "#056517", 
  errorColor = "#de1a24", 
  className = "",
}) {
  const color = isSuccess ? successColor : errorColor
  const imgSrc_string = isSuccess ? "checkmark" : "x"
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
      <div className="w-16 h-16 rounded-xl border-2 border-black flex items-center justify-center">
        <Icon imgSrc={imgSrc_string} color={color} />
      </div>
    </div>
  )
}
