// import { format } from "path/posix"

export let formatName = (inputName) =>{
    let names = inputName.split(" ");
    console.log(names);
    let formattedName = "";
    //capitalize each word
    for (const name of names){
        formattedName += name.charAt(0).toUpperCase() + name.slice(1) + " "
        console.log(name);
    }
    console.log(formattedName);
}

