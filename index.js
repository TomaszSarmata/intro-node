#!/usr/bin/env node

import { count } from "./utils.js";
import whateverNameAsItsDefault from "./utils.js";
import fs from "fs"; //if it's internal module we don't provide the path (as opposed to the user created modules)
import _ from "lodash"; //this is how we import 3rd party modules that we have installed on the project

const note = process.argv[2]; //first two items in the argv arr are the instance of the node and then the js file that gets executed. The third one is the argument that we pass after the command

//Create a data model for a note

const newNote = {
  content: note,
  id: Date.now(),
};
console.log(whateverNameAsItsDefault);
