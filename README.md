# API PMB PMK ITB 2021

## Install dependencies

- Make sure you've installed `yarn`.
- At the root folder, execute on terminal/cmd: `yarn install`.
- When you want to add deps: `yarn add <packagename>`.

## Get started

- Make a file named **.env**
- Copy **.env.example** to **.env**
- Run `yarn dev`

## Commit convention

Check out these links:

- https://github.com/conventional-changelog/commitlint/#what-is-commitlint
- https://gist.github.com/qoomon/5dfcdf8eec66a051ecd85625518cfd13

## API

- This is for city or regency code in Indonesia: http://jendela.data.kemdikbud.go.id/api/index.php/cwilayah/wilayahKabGet
- This is for school at specified city or regency code in Indonesia: http://jendela.data.kemdikbud.go.id/api/index.php/Csekolah/detailSekolahGET?mst_kode_wilayah={city_or_regency_code}.
- For example in Surabaya City: http://jendela.data.kemdikbud.go.id/api/index.php/Csekolah/detailSekolahGET?mst_kode_wilayah=056000
