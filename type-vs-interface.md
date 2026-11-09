Type Alias vs Interface of Typescript

TypeScript gives to important way to define custom types. Type Alias and interface. Both are use to define custom type.  type Alias and interface both are use to describe the structure of data and help developer write safe and maintainable code. But they are some difference in flexibility and usege.


Describe type Alais.

A type Alias allow us to create a custom name for any type. It can define objects, primitive types, union, tuples and function type. 

type tuple = readonly [number, number, string];

const formatCoordinate = (coordinate: tuple): string => {
  const [latitude, longitude, locationName] = coordinate;
  return `Location: ${locationName} (${latitude}, ${longitude})`;
};





 Describe Interface

An interface is maimly use to define the structure of object. It helps us describe what properties and methods an object should have. Interface also support inheritance using the extends keyword.


interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (
  courses: Course[],
  minStudents: number,
): Course[] => {
  const PCourse = courses.filter((course) => {
    if (course.isPublished === true && course.students >= minStudents) {
      return minStudents;
    }
  });
  return PCourse;
};




Core defference btween type Alias and interface

The main difference is that type alias are mode flexible because its support union, intersections, primitive and tuples. Interface are mainly designed for object structure. Another important difference is declaration merging. inerface with same name can be merged automatically, but type alias can not be declared multiple times with the same name.


Finaly, both type aliases and interface are useful in typescript. tThere is no hard rule for choosing one over others.  when a developer understand  their differences  they write clener , more organized, and maintainable code.



