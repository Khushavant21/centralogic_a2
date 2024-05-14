// crud.ts
import pool from './pgConfig';


const students = [
    { name: "Alice", age: 20, grade: 75 },
    { name: "Bob", age: 22, grade: 85 },
    { name: "Charlie", age: 21, grade: 60 },
    { name: "David", age: 19, grade: 45 },
    { name: "Eve", age: 20, grade: 90 }
  ];
  
  function filterPassedStudents(students: any[]): any[] {
    return students.filter(student => student.grade >= 50);
  }
  
  function getStudentNames(students: any[]): string[] {
    return students.map(student => student.name);
  }
  
  function sortStudentsByGrade(students: any[]): any[] {
    return students.slice().sort((a, b) => a.grade - b.grade);
  }
  
  function getAverageAge(students: any[]): number {
    const totalAge = students.reduce((sum, student) => sum + student.age, 0);
    return totalAge / students.length;
  }
  
  export { filterPassedStudents, getStudentNames, sortStudentsByGrade, getAverageAge };
  


// async function createUser(id:number,name: string, email: string): Promise<any> {
//     try {
//         const query = 'INSERT INTO users (id, name, email) VALUES ($1, $2, $3)';
//         let result = await pool.query(query, [id,name, email])
//         if(result){
//             return result;
//         }
       
// }catch(err: any){
//     return err  
// }

// }

// // Read
// async function getUsers(): Promise<any[]> {
//     const query = 'SELECT * FROM users';
//     const result = await pool.query(query);
//     return result.rows;
// }

// // Update
// async function updateUser(id: number, name: string, email: string): Promise<any> {
//     const query = 'UPDATE users SET name = $2, email = $3 WHERE id = $1';
//     await pool.query(query, [id, name, email]);
// }

// // Delete
// async function deleteUser(id: number): Promise<any> {
//     const query = 'DELETE FROM users WHERE id = $1';
//     await pool.query(query, [id]);
// }

// export { createUser, getUsers, updateUser, deleteUser };
