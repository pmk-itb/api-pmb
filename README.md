# API PMB PMK ITB 2021

## Install dependencies

- Make sure you've installed `yarn` and connect the PATH.
- At the root folder, execute on terminal/cmd: `yarn install`.
- Install `prettier` and `eslint` as global dependency.

```
yarn global add prettier
yarn global add eslint
```

- Open `settings.json` of your VSCode instance and add this bunch of lines.

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["javascript"]
}
```

## Get started

- Make a file named **.env**
- Copy **.env.example** to **.env.development** and set the local config for your development environment.
- (If needed) Copy **.env.example** to **env.test** and set the config for your testing environment.
- Run `yarn run dev`

## db push with rollback

To perform db push with rollback on dev env, run this command

```sh
yarn run dev:push
```

and for testing environment

```sh
yarn run test:push
```

## Commit convention

Check out these links:

- https://github.com/conventional-changelog/commitlint/#what-is-commitlint
- https://gist.github.com/qoomon/5dfcdf8eec66a051ecd85625518cfd13

## API

- This is for city or regency code in Indonesia: http://jendela.data.kemdikbud.go.id/api/index.php/cwilayah/wilayahKabGet
- This is for school at specified city or regency code in Indonesia: http://jendela.data.kemdikbud.go.id/api/index.php/Csekolah/detailSekolahGET?mst_kode_wilayah={city_or_regency_code}.
- For example in Surabaya City: http://jendela.data.kemdikbud.go.id/api/index.php/Csekolah/detailSekolahGET?mst_kode_wilayah=056000
