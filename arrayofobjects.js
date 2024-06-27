const todo= [
{
     id: 1, 
    task1: 'do dishes',
  isCompleted: true,
},
{
    id: 2, 
   task2: 'do cleaning',
 isCompleted: true,
},
{
    id: 3, 
   task3: 'do washing',
 isCompleted: true,
}
];
const {id,task2}= todo[1]
console.log(id)
console.log(task2)
todo[1].mail='jawad@gmail.com'
console.log(todo)
console.log(todo[0].task1)
