# IOU
A server side JavaScript project for a university course. The application will be able to track the dirty finances of a friend group.

Course site: https://malna.tmit.bme.hu/vitmav42/

## Exporting specification

Exporting only works on Linux systems. Required packages are: `pandoc` and its dependencies eg. `texlive`.

To create a pdf file from the markdown specification, execute:

```
make -C docs all
```

## Running the static application

Static application is the second Homework task. Running the static application provides plain html sites with very basic navigation features. This way, mostly the UI can be explored, not the functionality. To run the static application you have to select the appropriate git tag `hw2`.

```
git clone ssh://git@github.com/Goldan32/IOU.git
cd IOU
git checkout tags/hw2
npm install
node index.js
```

Static site should be reachable at `localhost:3000`
