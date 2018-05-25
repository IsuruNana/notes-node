let square = (x) => {
    let result = x*x;
    return result;
};
console.log(square(9));

let user = {
    name: 'ur name',
    sayHi: () => {
        console.log(`Hi. I'm ${this.name}`);
    },
    sayHiAlt () {
        console.log(`Hi. I'm ${this.name}`);
    }

}

user.sayHi();
user.sayHiAlt();