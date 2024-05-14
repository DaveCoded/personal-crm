# Personal CRM

I'm not the best at keeping in touch with everyone that I should. This project
sends reminders to keep in touch with people in my life.

## Server

### Typescript

This project is written in TypeScript. The TypeScript files are in the `src` folder and the compiled JavaScript files are in the `dist` folder.

The config inherits from a base, which comes from a node module: @tsconfig/node20/tsconfig.json.

### Nodemon

Nodemon is configured in the `exec` script to compile the TypeScript files with `tsc` and then run the compiled JavaScript files (in the dist folder) with `node`.
