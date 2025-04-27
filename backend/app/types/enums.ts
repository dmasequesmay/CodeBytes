/* TODO: write an enum type for classRole */
export const classRole = {} as const;

/* TODO: write an enum type for user_info */
export const userInfo = {} as const;

export const lessonDifficulty = {
    easy: 1,
    medium: 2,
    hard: 3,
    extreme: 4
} as const;

export type LessonDifficulty = typeof lessonDifficulty[keyof typeof lessonDifficulty];