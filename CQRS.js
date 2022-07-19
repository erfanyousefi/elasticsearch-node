// Command and query Responsibility Segregation
//Command : Write - Update - Delete 
//Query : Read


//Write DB1 => (join, lookup) => write -> DB2

// {
//     title,
//     text,
//     date,
//     author : {
//         name,
//         age,
//         phone,
//         id
//     },
//     Image,
//     likes: [
//         {erfanyousefi, 26, date: 23/4/1401},
//         {ahmad, 26, date: 23/4/1401},
//         {ali, 26, date: 23/4/1401},
//         {mohammad, 26, date: 23/4/1401},
//     ],
//     bookmark : [
//         {},
//         {},
//         {},
//     ],

// }

//Read !(aggregate, lookup, join, projection) => read DB2 (find())

fork()