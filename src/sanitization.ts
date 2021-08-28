// import { format } from "path/posix"

export const formatName = (inputName: string): string => {
  const names = inputName.split(' ');
  let formattedName = '';
  //capitalize each word
  for (const name of names) {
    formattedName += name.charAt(0).toUpperCase() + name.slice(1) + ' ';
  }
  return formattedName.trim();
};

export const formatTelp = (no_telp: string): string => {
  let telp = '';
  if (String(no_telp).includes('+')) {
    //replace +62 with 0
    telp = '0' + no_telp.slice(3);
  } else {
    telp = no_telp;
  }
  return telp;
};

export const formatSekolah = (sekolah: string): string => {
  const nama_sekolah = sekolah.split(' ');
  let formatted_nama_sekolah = '';

  formatted_nama_sekolah += nama_sekolah[0].toUpperCase();
  nama_sekolah.shift();

  for (const word of nama_sekolah) {
    const temp = word.charAt(0).toUpperCase() + word.slice(1);
    switch (temp) {
      case 'Kristen':
        formatted_nama_sekolah += 'K';
        break;
      case 'Negeri':
        formatted_nama_sekolah += 'N';
        break;
      case 'Swasta':
        formatted_nama_sekolah += 'S';
        break;
      default:
        formatted_nama_sekolah += ' ' + temp;
    }
  }
  return formatted_nama_sekolah;
};

export const formatGereja = (gereja: string): string => {
  const nama_gereja = gereja.split(' ');
  let formatted_nama_gereja = '';

  formatted_nama_gereja += nama_gereja[0].toUpperCase();
  nama_gereja.shift();

  for (const word of nama_gereja) {
    formatted_nama_gereja += ' ' + word.charAt(0).toUpperCase() + word.slice(1);
  }
  return formatted_nama_gereja;
};
