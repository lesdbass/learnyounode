
const fs=require('fs');
//const f=require('./myFile.txt')


//    const buf= 
  fs.readFile(process.argv[2],function (err, contents) {
      if (err) return console.log(err)
      console.log(contents.toString().split('\n').length-1)
  })
   
//    const str =buf.toString().split('\n').length-1
//    console.log(str)


