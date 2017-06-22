var classrooms = [{
    teacher: {
      name: "John Keating",
      subject: "Literature",
      age: 57
    },
    students: [{
      name: "John",
      age: 32
    },
    {
      name: "Suzy",
      age: 29
    },
    {
      name: "Jill",
      age: 44
    },
    {
      name: "Joe",
      age: 20
    }]
  },{
    teacher: {
      name: "Lillian Beauregard",
      subject: "Math",
      age: 74
    },
    students: [{
      name: "Johnny",
      age: 14
    },
    {
      name: "Suzie",
      age: 18
    },
    {
      name: "Jo",
      age: 22
    }]
  },{
    teacher: {
      name: "Mr. Schmidt",
      subject: "Literature",
      age: 50
    },
    students: [{
      name: "Bob",
      age: 32
    },
    {
      name: "George",
      age: 46
    }]
  }];


// function studentsAvg() {
//   return (classrooms[0].students[0].age + classrooms[0].students[1].age + classrooms[0].students[2].age + classrooms[0].students[3].age ) ;

// }
// function studentsAvg2() {
//   return (classrooms[1].students[0].age + classrooms[1].students[1].age + classrooms[1].students[2].age) ;
// }

// function studentsAvg3() {
//   return (classrooms[2].students[0].age + classrooms[2].students[1].age) ;
// }

//   console.log((studentsAvg() + studentsAvg2() + studentsAvg3()) / 9);






  // function teacherAvg() {
  //   return (classrooms[0].teacher.age)
  // }

  // function teacherAvg2() {
  //   return (classrooms[1].teacher.age)
  // }

  // function teacherAvg3() {
  //   return (classrooms[2].teacher.age)
  // }
  // console.log((teacherAvg() + teacherAvg2() + teacherAvg3()) /  3);



// function litAvg() {
//   return (classrooms[0].students)
// }

//   console.log(litAvg())




for(var i = 0; i < classrooms.length; i++){
  for (var j = 0; j < classrooms[i].students.length; j++){
    console.log(classrooms[i].students[j]);



  }


}
