let productList: string[];
let fullname: string = "tai"
productList = ["a", "b", "c"]

fullname = "a"

/**
 * Day la huong dan cach su dung function nay
 */
function total(x: number, y: number): void {
  console.log("ad")
}

total(1, 2)

interface IPerson {
  firstName: string
  lastName?: string
  sayHi?: (a: string, b: number) => string
}

const person : IPerson = {
  firstName: "Tai",
  sayHi: (name, age) => "Hi" + name + age,
  lastName: "Truong"
}


class Person implements IPerson {
  firstName = ''
  lastName = ''
  sayHi: () => "a"
}

interface IEmployee {
  department: string
}

class Employee extends Person implements IEmployee  {
  department = ''
}

interface ICompany {
  salary: number
}

class Company extends Employee implements ICompany {
  salary = 0
}

const e1 = new Company()


const p1 = new Person()

function getMessage(data: IPerson): string {
  return `Hello ${data.firstName}`
}

getMessage({
  firstName: "tai",
  lastName: "ok"
})


function total1(x: number, y: number, cb ) {
  return cb(x + y)
}

function mul5(x: number, cb) {
  return cb(x * 5)
}


// total(1,2, function(z: number) {
//   mul5(z, function(g) {
//     console.log(g)
//   })
// })