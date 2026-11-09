const multiplyValue = (value: number, multiplier: number = 2): number => {
  return value * multiplier;
};

const processInput = (value: string | number | boolean): string | number => {
  if (typeof value === "string") {
    return value.toLowerCase().trim();
  }
  if (typeof value === "number") {
    return value * 10;
  }

  if (value === true) {
    return "Active";
  } else {
    return "Inactive";
  }
};

type tuple = readonly [number, number, string];
const formatCoordinate = (coordinate: tuple): string => {
  const [latitude, longitude, locationName] = coordinate;
  return `Location: ${locationName} (${latitude}, ${longitude})`;
};

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  return ([] as T[]).concat(...arrays);
};

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

// const courses: Course[] = [
//   { title: "TypeScript Mastery", students: 120, isPublished: true },
//   { title: "Draft Course", students: 200, isPublished: false },
//   { title: "Basic HTML", students: 45, isPublished: true },
//   { title: "Next.js Pro", students: 85, isPublished: true },
// ];

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  return items.map((item) => item[key]);
};

// const users = [
//   { id: 1, name: "Rakib", role: "Admin" },
//   { id: 2, name: "Sadia", role: "Editor" },
//   { id: 3, name: "Tariq", role: "Subscriber" },
// ];


  class Employee {
    protected name: string;
    private baseSalary: number;
    constructor(name: string, baseSalary: number) {
      this.name = name;
      this.baseSalary = baseSalary;
    }
    getDetails(): string {
      return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
  }

  class Manager extends Employee {
    private department: string;
    constructor(name: string, baseSalary: number, department: string) {
      super(name, baseSalary);
      this.department = department;
    }
    getRoleInfo(): string {
      return `Manager of ${this.department}: ${this.name}`;
    }
  }

  // const manager = new Manager("Alice", 50000, "Engineering");



  const validateAgeAsync = async (age: number): Promise<string> => {
    if (age < 18) {
      throw new Error("Error: Access Denied: Must be 18 or older");
    } else {
      await new Promise((res) => setTimeout(res, 1000));
      return "Access Granted";
    }
  };

