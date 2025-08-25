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

        socket.emit("user joined", "IDKBot [;]", "blue", "", "");
        
		socket.on("message", function(data) {
            if (data.msg == ";hello") {
                socket.send("Hello, "+data.nick+"!")
            }

           

		

            if (data.msg == ";credits") {
                socket.send("ty ben for showing me how to make this! owned by bruh! soon gonna have a help game on github!!!!!!!!!")
            }

         

            if (data.msg == ";time") {
                socket.send("Here, "+data.nick+" "+data.date+"")
            }

     
			if (data.msg.startsWith(";say ")) {
    let arg = data.msg.slice(5)
    socket.send('\u2062' + arg)
}

            if (data.msg == ";fish") {
                socket.send("gulp gulp")
            }

			    if (data.msg == ";help") {
                socket.send("vår hjälpsida! den här boten är under utveckling https://bruhimgaming.github.io/idkbothelppage/ där!")
				}  

				if (data.msg == ";pasta") {
                socket.send("https://pngtree.com/freepng/bowl-of-tricolor-pasta-with-vegetables-and-basil-for-italian-food-illustration_21001498.html")
				}
			
				// im REALLY Not sure how this'll stand up against the test of time
				// Wasn't even tested yet
				if (data.msg.startsWith(";roll ")) {
                if ((/^\\d+$/.test(data.msg.replace(/^;roll /,""))) {
        			var d=Number(data.msg.replace(/^;roll /,""))
					socket.send(String(Math.floor(Math.random() * d) + 1)
            }

	const math = require("mathjs"); // top of file

if (data.msg.startsWith(";calc ")) {
    let expr = data.msg.slice(6);
    try {
        let result = math.evaluate(expr);
        socket.send('\u2062its ' + String(result));
    } catch (e) {
        // ignore invalid
    }
}

})	
			
		
    
	    

   

