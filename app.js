const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

const printProfileData = profileDataArr => {
    // for (let i=0; i < profileDataArgs.length; i++) {
    //     console.log(profileDataArr[i]);
    // }

    profileDataArr.forEach(profileItem => console.log("Profile: " + profileItem));
};

printProfileData(profileDataArgs);

var sayHello = (name) => {
    console.log("Hello! " + name);
}

// let is block-scoped, so changing its value in a block does change its value outside the block _if_ the variable is not redeclared in the block:

let four = 'four: outside the block';

if (true === true) {
  four = 'four: inside the block'; // notice: we don't redeclare the variable
  console.log(four); // prints 'four: inside the block'
}

console.log(four); // prints 'four: inside the block', because we didn't redeclare the variable inside the block. That meant we referenced the variable outside the block, and we therefore changed it.