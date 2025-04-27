import { mockCourses } from '../mockData';

export const getCourses = () => {
  return mockCourses;
};

export const getCourseById = (id: string) => {
  return mockCourses.find(course => course.id === parseInt(id));
};