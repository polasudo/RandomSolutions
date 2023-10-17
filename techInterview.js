// Write program, that runs through numbers from 1 to 100.
// For numbers divisible by 3 it writes to console "Tech".
// For numbers divisible by 5 it writes to console "Bakers".
// If the number is divisible by 3 and 5, it only writes to console "Techbakers".
// Otherwise it writes to console given number.

const code = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0){
            console.log("Techbakers")
            
        }
        else if (i % 5 == 0) {
            console.log("Bakers")
        }
        else if (i % 3 == 0) {
            console.log("Tech")
        }
    }
}

// Implement findUser function, which locates user (object) by its id property or null, when the user is not found.
// Tested on user 'u40000' => {id: 'u40000', name: 'user 40000'}
// Tested on user 'u40000000' => null

function code() {
    const createUser = (id, name) => {
      return { id: id, name: name }
    }
  
    const users = []
    for (let id = 1; id <= 1e5; id++) {
      users.push(createUser('u' + id, 'user ' + id))
    }
  
  
    const findUser = (users) => (id) => {
  
      return users.find((user) => user.id === id) || null
  
      // for (let i = 0; i < users.length; i++) {
      //   if (users[i].id === id) {
      //     return users[i]
      //   }
      // }
      // return null
    }
  
    return findUser(users)
  }


  // Fix following code to output '$:rm -rf /' and explain your solution.

function code() {
    // Edit here
    class Process {
      constructor(cmd) {
        this.cmd = cmd
      }
  
      exec() {
        console.log(`$: ${this.cmd}`)
      }
    }
  
    const surprise = new Process('rm -rf /')
    setTimeout(() => surprise.exec, 100)
  }
  

// Write a function that returns true if the arguments are an anagram (https://en.wikipedia.org/wiki/Anagram) of each other, otherwise it returns false
// isAnagram('abcd', 'bdca') // true
// isAnagram('bd2', '3db') // false

function code() {
    const isAnagram = (a, b) => {
        if (a.length !== b.length) {
            return false
        }
    
        const aString = a.split('').sort().join('')
        const bString = b.split('').sort().join('')
    
        return aString === bString
    }
    
    return isAnagram
  }
  
  