import fs from 'fs';

fs.writeFile("hello.txt","hello feni" ,function(err){
if(err) console.error(err);
else console.log("done")
})