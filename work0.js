const yargs = require('yargs');
const currentTime = new Date();
// Определение команды и ее аргументов

yargs.command(
    {
        command: 'current',
        describe: 'Текущая дата и время в формате ISO:',
        builder: {
            year: {
                describe: 'Текущий год:',
                demandOption: false,
                type: 'boolean',
                default: false,
                alias: 'y',
            },
            month: {
                describe: 'Текущий месяц:',
                demandOption: false,
                type: 'boolean',
                default: false,
                alias: 'm',
            },
            date: {
                describe: "Дата в календарном месяце:",
                demandOption: false,
                type: "boolean",
                default: false,
                alias: 'd',
            },
        },
        handler: function (argv) {
            let output = `Текущее время ISO: ${currentTime.toISOString()}`;
            if (argv.year) {
                output = `Текущий год: ${currentTime.getFullYear()}`;
            };
            if (argv.month) {
                output = `Текущий месяц: ${currentTime.getMonth()}`;
            };
            if (argv.date) {
                output = `Дата в календарном месяце: ${String(currentTime.getDate()).padStart(2, '0')}`;
            }
            console.log(output);
        }
    },
);

yargs.command(
    {
        command: 'add',
        describe: 'Получить дату в будущем:',
        builder: {
            year: {
                describe: "Добавить  year от текущей даты:",
                demandOption: false,
                type: "number",
                default: 0,
                alias: 'y',
            },
            month: {
                describe: "Добавить  month от текущей даты:",
                demandOption: false,
                type: "number",
                default: 0,
                alias: 'm',
            },
            day: {
                describe: "Добавить  день от текущей даты:",
                demandOption: false,
                type: "number",
                default: 0,
                alias: 'd',
            },
        },
        handler: function (argv) {
            const futureDate = new Date(currentTime);
            if (argv.day) {
                futureDate.setDate(futureDate.getDate() + argv.day);
            }
            if (argv.month) {
                futureDate.setMonth(futureDate.getMonth() + argv.month);
            }
            if (argv.year) {
                futureDate.setFullYear(futureDate.getFullYear() + argv.year);
            }
            console.log(futureDate.toISOString());
        }
    },
);

yargs.command(
    {
        command: 'sub',
        describe: 'Получить дату в прошлом:',
        builder: {
            year: {
                describe: "отнять  year от текущей даты:",
                demandOption: false,
                type: "number",
                default: 0,
                alias: 'y',
            },
            month: {
                describe: "отнять  month от текущей даты:",
                demandOption: false,
                type: "number",
                default: 0,
                alias: 'm',
            },
            day: {
                describe: "отнять  день от текущей даты:",
                demandOption: false,
                type: "number",
                default: 0,
                alias: 'd',
            },
        },
        handler: function (argv) {
            const lastDate = new Date(currentTime);
            if (argv.day) {
                lastDate.setDate(lastDate.getDate() - argv.day);
            }
            if (argv.month) {
                lastDate.setMonth(lastDate.getMonth() - argv.month);
            }
            if (argv.year) {
                lastDate.setFullYear(lastDate.getFullYear() - argv.year);
            }
            console.log(lastDate.toISOString());
        }
    },
);



yargs.parse();