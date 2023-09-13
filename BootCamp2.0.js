const users = [
    {
    id: 2,
    name: "Jonathon Haley",
    username: "Monte.Weber2",
    email: "Daphne43@yahoo.com",
    phone: "1-563-675-1857 x11708",
    website: "carmela.net",
    password: "hashed_password",
    ages:34
    },
    {
    id: 3,
    name: "Dean John",
    username: "dd.1",
    email: "deno@google.com",
    phone: "1-123-543-1857 123212",
    website: "dd.net",
    password: "Dean_hashed_password",
    ages:23
    }
    ];
    //Q1  Write a function to add a new record at the end of array users using spread operator,
//functions : addLast(users,temp)

const newUser = {
    id: 4,
    name: "Akash chavan",
    username: "akash_chavan",
    email: "newuser@example.com",
    phone: "123-456-7890",
    website: "example.com",
    password: "123456789",
    ages: 25 
  };
function addLast(users, temp) {
    return [...users, temp];
    
  }
  
  const updatedLastUsers = addLast(users, newUser);
  console.log(updatedLastUsers);

  //Q2  Write a function to add a new record at the begining of array users using spread operator,
//functions : addFirst(users,temp)
    
  function addFirst(users, temp) {
    return [temp, ...users];
  }
  
  const newUsers = {
    id: 1,
    name: "aviraj vanjari",
    username: "aviraj_vanjari",
    email: "newuser@example.com",
    phone: "123-456-7890",
    website: "example.com",
    password: "1234567890",
    ages: 25 
  };
  const updatedFirstUsers = addFirst(users, newUsers);
  console.log(updatedFirstUsers);

  //Q3 Write a function to display all records only 3 fields id,name,username.
//functions : display(users)
//HINT : map

  function display(users) {
    return users.map(u => ({
      id: u.id,
      name: u.name,
      username: u.username,
    }));
  }
  const result = display(users);
  console.log(result);  

  //Q4 Write a function which will display all records with name ==='demon'
//function Name ---> findNameEquals(users)
//HINT : Use filter.

  function findNameEquals(users) {
    return users.filter(u => u.name == 'Dean John');
  }

  const result2 = findNameEquals(users);
console.log(result2);

//Q7 Write a function which will display all the records with only name & ages.
//function Name ---> findAll(users)
//HINT : Use map.

function findAll(users) {
    return users.map(s => ({
      name: s.name,
      ages: s.ages,
    }));
  }
  const result3 = findAll(users);
  console.log(result3); 
  
  //Q6 Write a function which will display sum of all ages.
//function Name ---> findSumAges(users) .
//HINT : Use reduce functions.

  function findSumAges(users) {
    return users.reduce((sum, a) => sum + a.ages, 0);
  }

  const totalAges = findSumAges(users);
console.log(totalAges);

//Q8

function sumAgesStartingWithJ(users) {
  const filteredUsers = users.filter(user => user.name.startsWith('J'));
  
  const sumOfAges = filteredUsers.reduce((sum, user) => sum + user.ages, 0);

  return sumOfAges;
}

const totalAgesStartingWithJ = sumAgesStartingWithJ(users);
console.log(totalAgesStartingWithJ); 

//Q5

function findSpecificStartChar(users, startChar) {
  return users.filter(user => user.name.startsWith(startChar));
}
const results = findSpecificStartChar(users, 'D');
console.log(results);

//Q9

function sorting(data, order) {
  if (order === 'ASC') {
    return data.slice().sort((a, b) => a.name.localeCompare(b.name));
  } else if (order === 'DESC') {
    return data.slice().sort((a, b) => b.name.localeCompare(a.name));
  } else {
    console.log('Invalid sorting order.');
    return data.slice(); 
  }
}


const sortedUsersAsc = sorting(users, 'ASC');
console.log(sortedUsersAsc);

const sortedUsersDesc = sorting(users, 'DESC');
console.log(sortedUsersDesc);

console.log()
//Q10 

function deleteRecord(users, indexToDelete) {
  if (indexToDelete >= 0 && indexToDelete < users.length) {
    
    users.splice(indexToDelete, 1); 
  } else {
    console.log('Invalid index.');
  }
  return users;
}

const updatedUsers = deleteRecord(users, 1); 

console.log(updatedUsers);

console.log()
//Q11

function InsertRecord(users, temp, indexToInsert) {
  if (indexToInsert >= 0 && indexToInsert <= users.length) {
    // Check if the index is within the bounds of the array
    users.splice(indexToInsert, 0, temp); // Insert the 'temp' object at the specified index
  } else {
    console.log('Invalid index.');
  }
  return users; // Return the modified array
}
const newUserss = {
  id: 4,
  name: "David",
};
const updatedUserss = InsertRecord(users, newUserss, 2); // Insert the 'newUser' object at index 1

console.log(updatedUserss); 