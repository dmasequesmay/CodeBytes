import { mockCourses } from '../mockData';

export const getCourses = () => {
  return mockCourses;
};

export const getCourseById = (id: string) => {
  console.log("id is:", id);
  console.log(mockCourses);
  return mockCourses.find(course => course.id === parseInt(id));
};