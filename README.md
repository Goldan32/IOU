# IOU
A server side JavaScript project for a university course. The application will be able to track the dirty finances of a friend group.

Course site: https://malna.tmit.bme.hu/vitmav42/

## Running the application

The application requires **MongoDB** and **Node.js**. Any version more recent than the tag `hw6` should be fully functional.

```
git clone ssh://git@github.com/Goldan32/IOU.git
cd IOU
npm install
node index.js
```

The site should be reachable at `localhost:3000`

## Exporting specification

Exporting only works on Linux systems. Required packages are: `pandoc` and its dependencies eg. `texlive`.

To create a pdf file from the markdown specification, execute:

```
make -C docs all
```
