#!/usr/bin/env node
const boxen = require("boxen");
const chalk = require("chalk");
const EMPTYLINE = "";
const NewLine = "\n";
    
console.log(
    boxen(
        [
            chalk.cyan.bold('Name:')+chalk.white.bold( ' Luciana Brancato'),
            chalk.cyan.bold('Work:')+chalk.redBright(' Web developper Junior'),
            '-----------------',
            chalk.cyan.bold('Email:')+ ' luciana.brancato@gmail.com',
            chalk.cyan.bold('GitHub:')+ chalk.greenBright(' https://github.com/Luciana001'),
            '-----------------',
            chalk.cyan.bold('Discord:')+ chalk.magenta(' #9549'),
            EMPTYLINE,
            chalk.cyan.bold('Card:')+ chalk.white.bold( '@luciana001/card')
        ].join(NewLine),
        {
            align:"center",
            padding: 1,
            margin: 1,
            borderStyle: "round",
            borderColor:"yellowBright"
        },
    )
)
