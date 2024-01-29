//fileSystem Module
import fs from 'fs';
import path from 'path';



const fileRemover =(filename) => {
    fs.unlink(path.join(_dirname,'../uploads'),function(err) {
        if(err && err.code=="ENOENT"){
            //file doens't exist
           console.log(`File ${filename} Doesn't exist ,Won't remove it `)
        }
        else {
            if (err) {
                console.log(`Error While DELETING ${filename} `)
            }
            else {
                console.log(`${filename} Removed Successfully `)
            }
        }
    })
    
}
export {fileRemover}
