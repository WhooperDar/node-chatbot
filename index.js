const { NlpManager } = require("node-nlp"); 
const say = require('say'); // text to speech 

console.log("Starting Chatbot... "); 

const manager = new NlpManager({languages: ["en"]}); 

manager.load(); 

var readline = require("readline"); 
var r1 = readline.createInterface(process.stdin, process.stdout); 

console.log("Chatbot started!");
r1.setPrompt("> "); 
r1.prompt(); 

r1.on("line", async (line) => {
    const defaultAnswer = "What was it?";
    const response = await manager.process("en", line); 
    if(response.answer){
        console.log(response.answer); 
        say.speak(response.answer);
        r1.prompt(); 
    }
    else {
        console.log(defaultAnswer); 
        say.speak(defaultAnswer);
        r1.prompt(); 
    }
    
}).on("close", () => {
    process.exit(0); 
})