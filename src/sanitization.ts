// import { format } from "path/posix"

let formatName = (inputName) =>{
    let names = inputName.split(" ");
    console.log(names);
    let formattedName = "";
    //capitalize each word
    for (const name of names){
        formattedName += name.charAt(0).toUpperCase() + name.slice(1) + " "
    }
    return formattedName;
}

let formatTelp = (no_telp) => {
    let telp = "";
    if(String(no_telp).includes("+")){
        //replace +62 with 0
        telp = "0" + no_telp.slice(3,)
    }
    else{
        telp = no_telp;
    }
    return(telp);
}