const os= require('os')

//infoo abt the user
const user= os.userInfo();
console.log(user);

// total uptime in seconds
console.log(`The system is up for ${os.uptime()} seconds`);

//current info about the os

const currentOs={
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    remainingMem: os.freemem()

}
console.log(currentOs);