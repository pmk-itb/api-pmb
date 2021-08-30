# Mengubah format json (lihat struktur pada main())
# Menghapus entry gereja: 
# 1) berupa akronim dan kemunculannya > 1
# 2) berupa kepanjangan akronim gereja, namun tidak ada nama tempatnya
# Menghilangkan trailing whitespaces pada entry yang tersisa

import json

def readJSON(dir: str):
  try:
    with open(dir, 'r') as f:
      return json.load(f)
  except FileNotFoundError:
    print('No file found')
  except:
    print('Error occured')

def dumpJSON(data, dir):
  try:
    with open(dir, 'w') as f:
      json.dump(data, f, indent=2)
  except FileNotFoundError:
    print('No file found')
  except:
    print('Error occured')

def prettifyJSON(data):
  # list of provinsi
  newData = list()

  for provID in data:
    namaProvinsi = list(data[provID].keys())[0]
    temp = {
      'idProvinsi': provID,
      'provinsi': namaProvinsi
    }

    #list of kabupaten
    temp['listKabupaten'] = list()
    for kabupaten in data[provID][namaProvinsi]:
      temp2 = {
        'kabupaten': kabupaten["Kabupaten"],
        'gereja': kabupaten["Gereja"]
      }
      temp['listKabupaten'].append(temp2)
    
    # temp['listKabupaten'].sort()
    temp['listKabupaten'] = sorted(temp['listKabupaten'], key=lambda k: k['kabupaten']) 
    newData.append(temp)
  
  # newData.sort()
  # newlist = sorted(list_to_be_sorted, key=lambda k: k['name']) 
  newData = sorted(newData, key=lambda k: int(k['idProvinsi'])) 
  return newData

def selectAcronymOnly(data):
  # menyeleksi entry gereja yang akan dihapus berdasarkan akronim

  def isAcronymRedundant(entry):
    # menerima entry dengan format (i_prov, i_kab, i_gereja, acr_gereja)
    # acr_gereja berupa akronim
    # True jika sudah ada gereja dengan denominasi tersebut di kabupaten yg sama
    i_prov = entry[0]
    i_kab = entry[1]
    i_gereja = entry[2]
    acr_gereja = entry[3]
    count = 0
    idxFirstFound = -1

    dataGereja = data[i_prov]['listKabupaten'][i_kab]['gereja']
    for i in range(len(dataGereja)):
      if acr_gereja in dataGereja[i]:
        count += 1
    return count > 1

  listCoret = list()

  i_prov = 0
  for provinsi in data:
    i_kab = 0
    for kabupaten in provinsi['listKabupaten']:
      i_gereja = 0
      for gereja in kabupaten['gereja']:
        entry = (i_prov, i_kab, i_gereja, gereja)
        if len(gereja) < 6 and isAcronymRedundant(entry):
          listCoret.append(entry)
        i_gereja += 1
      i_kab += 1
    i_prov += 1

  return listCoret

def selectWithoutName(data):
  # Menyeleksi entry gereja yang tidak memiliki nama tempat
  # (hanya denominasi / hanya singkatan + kepanjangan nama / 'gereja' + denominasi)

  # bisa ditambahkan lagi...
  listNama = [
    "huria kristen batak protestan",
    "gereja kristen indonesia",
    "gereja bethel indonesia",
    "gereja reformed injili indonesia",
    "hkbp",
    "grii",
    "gki",
    "gbi"
  ]
  listNamaUmum = [
    "hkbp",
    "gki",
    "gbi",
    "gereja"
  ]

  def isChurchNameless(gereja: str):
    # True jika gereja terdaftar dalam listNama *dan* tidak memiliki nama tempat

    for kepanjanganNama in listNama:
      temp = gereja.lower()
      if kepanjanganNama in temp:
        temp = temp.replace(kepanjanganNama, '').strip().lower()
        if temp == '' or temp in listNamaUmum:
          return True
        break
    return False

  listCoret = list()

  i_prov = 0
  for provinsi in data:
    i_kab = 0
    for kabupaten in provinsi['listKabupaten']:
      i_gereja = 0
      for gereja in kabupaten['gereja']:
        entry = (i_prov, i_kab, i_gereja, gereja)
        if isChurchNameless(gereja):
          listCoret.append(entry)
        i_gereja += 1
      i_kab += 1
    i_prov += 1

  return listCoret

def getListCoret(data):
  # Mengembalikan list of tuple entry gereja yang akan dibuang
  # Format tuple: (i_prov, i_kabupaten, i_gereja, gereja)
  listCoret = selectAcronymOnly(data)
  for e in selectWithoutName(data):
    listCoret.append(e)
  
  listCoret.sort()

  return listCoret

def cleanData(data, listCoret):
  # data sudah melalui prettifyJSON sebelumnya
  newData = data.copy()
  i_current_prov = -1
  i_current_kabupaten = -1
  count = 0

  for entry in listCoret:
    if i_current_prov == entry[0] and i_current_kabupaten == entry[1]:
      count += 1
    else: 
      i_current_prov = entry[0]
      i_current_kabupaten = entry[1]
      count = 0
      
    del newData[i_current_prov]['listKabupaten'][i_current_kabupaten]['gereja'][entry[2]-count]

  # merapihkan nama gereja (menghilangkan spasi di awal dan akhir)
  for i_prov in range(len(data)):
    listKabupaten = data[i_prov]['listKabupaten']
    for i_kabupaten in range(len(listKabupaten)):
      listGereja = listKabupaten[i_kabupaten]['gereja']
      for i_gereja in range(len(listGereja)):
        listGereja[i_gereja] = listGereja[i_gereja].strip()

  return newData

def printi(l):
  i = 1
  for e in l:
    print(i, e)
    i += 1

def main():
  # Format data:
  # data: [
  #   idProvinsi        : str   { '1'..'34' }
  #   provinsi          : str   { nama provinsi }
  #   listKabupaten: [
  #     idKabupaten     : str
  #     kabupaten       : str   { nama kabupaten }
  #     gereja          : [str] { list nama-nama gereja }
  #   ]
  # ]
  #
  # Mengakses gereja:
  #   data[i_provinsi]['listKabupaten'][i_kabupaten]['gereja']
  #     i_provinsi    : index provinsi  (terurut berdasarkan idProvinsi)
  #     i_kabupaten   : index kabupaten (terurut berdasarkan kabupaten)
  #   contoh: print(data[15]['listKabupaten'][5]['gereja'])
  data = prettifyJSON(readJSON('churches.json'))
  
  # List of entry gereja yang akan dihapus
  # Entry berupa tuple dengan format (i_provinsi, i_kabupaten, i_gereja, gereja)
  listCoret = getListCoret(data)
  # printi(listCoret)

  newData = cleanData(data, listCoret)

  dumpJSON(newData, 'cleaned_churches.json')
  

if __name__ == "__main__":
  main()