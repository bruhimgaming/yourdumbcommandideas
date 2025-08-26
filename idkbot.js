
// Includes
const mathjs = require("mathjs")
const io = require("socket.io-client");
const socket = io("https://www.windows93.net:8088", {
	forceNew: true,
	transportOptions: {
		polling: {
			extraHeaders: {
				"Accept": "*/*",
				"Accept-Encoding": "identity",
				"Accept-Language": "*",
				"Cache-Control": "no-cache",
				"Connection": "keep-alive",
				"Cookie": "",
				"Host": "www.windows93.net",
				"Origin": "http://www.windows93.net",
				"Pragma": "no-cache",
				"Referer": 'http://www.windows93.net/trollbox/index.php',
				"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36"
			}
		}
	}
});

// Commands
// Just because there's a naming convention doesn't mean
// you have to follow it btw

function c_hello(data, socket) {
	socket.send("Hello, "+data.nick+"!");
}
function c_credits(data, socket) {
	socket.send("ty ben for showing me how to make this! owned by bruh! help from kailando! soon gonna have a help game on github!!!!!!!!!");
}
function c_time(data, socket) {
	socket.send("Here, "+data.nick+" "+data.date+"");
}
function c_say(data, socket) {
	let arg = data.msg.slice(5);
    socket.send('\u2062' + arg);
}
function c_fish(data, socket) {
	socket.send("gulp gulp");
}
function c_help(data, socket) {
	socket.send("vår hjälpsida! den här boten är under utveckling https://bruhimgaming.github.io/idkbothelppage/ där!");
}
function c_pasta(data, socket) {
	socket.send("https://pngtree.com/freepng/bowl-of-tricolor-pasta-with-vegetables-and-basil-for-italian-food-illustration_21001498.html");
}
function c_roll(data, socket) {
	let num = data.msg.replace(/^;roll /, "");
	if (!num) {
		socket.send("Please provide a number of sides!");
		return;
	}
	if (/^\d+$/.test(num)) {
		let d = Number(num);
		socket.send(String(Math.floor(Math.random() * d) + 1));
	} else {
		socket.send("Please provide a valid number!");
	}
}
function c_calc(data, socket) {
    let expr = data.msg.slice(6);
    try {
        let result = mathjs.evaluate(expr);
        socket.send('\u2062its ' + String(result));
    } catch (e) {
        socket.send("Please provide a valid equation!");
    }
}
function c_discord(data, socket) {
	socket.send("https://discord.gg/AwTEUQW5 our disc0rd!!!")
}

var commands = new Map([
	[";hello", c_hello],
	[";credits", c_credits],
	[";time", c_time],
	[";say ", c_say],
	[";fish", c_fish],
	[";help", c_help],
	[";roll ", c_roll],
	[";disc0rd", c_discord]
])


// Code
function main() {
	socket.emit("user joined", "IDKBot [;]", "blue", "", "");
	socket.on("message", function(data) {
		for (const [key, value] of commands) {
			if (data.msg.startsWith(key)) {
				value(data, socket);
				break;
			}
		}
	});
}