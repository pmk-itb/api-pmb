// import { format } from "path/posix"

export let formatName = (inputName) =>{
    let names = inputName.split(" ");
    console.log(names);
    let formattedName = "";
    //capitalize each word
    for (const name of names){
        formattedName += name.charAt(0).toUpperCase() + name.slice(1) + " "
    }
    return formattedName;
}

export let formatTelp = (no_telp) => {
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

export let formatSekolah = (sekolah) => {
    let nama_sekolah = sekolah.split(" ");
    let formatted_nama_sekolah = ""

    formatted_nama_sekolah += nama_sekolah[0].toUpperCase()
    nama_sekolah.shift()

    for (const word of nama_sekolah){
        const temp = word.charAt(0).toUpperCase() + word.slice(1)
        console.log(temp)
        switch(temp){
            case("Kristen"):
                formatted_nama_sekolah += "K";
                break;
            case("Negeri"):
                formatted_nama_sekolah += "N";
                break;
            case("Swasta"):
                formatted_nama_sekolah += "S";
                break;
            default:
                formatted_nama_sekolah += " "+ temp
        }
    }
    return formatted_nama_sekolah;
}

export let formatGereja = (gereja) => {
    let nama_gereja = gereja.split(" ");
    let formatted_nama_gereja = ""

    formatted_nama_gereja += nama_gereja[0].toUpperCase()
    nama_gereja.shift()

    for (const word of nama_gereja){
        formatted_nama_gereja +=  " " + word.charAt(0).toUpperCase() + word.slice(1)
    }
    return formatted_nama_gereja;
}