"use client"

export default function AnswerResult({
  message,
  isSuccess = true,
  successColor = "#056517", 
  errorColor = "#de1a24", 
  className = "",
}) {
  return (
    <div
      className={`
        /* TODO: Add these classes:
          - Large rounded corners
          - 6 units padding
          - Flex layout with column direction
          - Centered items
          - Centered text
          - Include any additional classes passed through className prop
        */
        ${className}
      `}
    >
      {/* TODO: Add heading with these properties:
          - Extra large text size
          - Bold font weight
          - 4 units bottom margin
      */}
      <h2 className=""></h2>
      
      {/* TODO: Add icon container with these properties:
          - 16 units width and height
          - Rounded corners
          - 2 units border
          - Black border color
          - Flex layout with centered items
      */}
      <div className="">
        {/* TODO: Add success or error icon
            - Use the Icon.tsx component
            - For success: checkmark imgSrc
            - For error: X imgSrc
        */}
      </div>
    </div>
  )
}
