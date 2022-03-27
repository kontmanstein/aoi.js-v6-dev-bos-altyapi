const { AoiClient } require("aoi.js");

const bot = new AoiClient({
    token: process.env["token"],
    intents: "all",
    prefix: "?"
});

bot.addEvent("onMessage");

bot.commands.add("basicCommand", {
    name: "ping",
    code: `Pong! \`$pingms\``
});

bot.commands.load(`./komutlar/`);

bot.status.add({
    name: "Aoi.JS v6 Dev",
    duration: 12000
});

bot.start();
