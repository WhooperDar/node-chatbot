const { NlpManager } = require("node-nlp"); 
console.log("Starting Chatbot... "); 

const manager = new NlpManager({languages: ["en"]}); 

manager.load(); 

var readline = require("readline"); 
var r1 = readline.createInterface(process.stdin, process.stdout); 

console.log("Chatbot started!");
r1.setPrompt("> "); 
r1.prompt(); 

r1.on("line", async (line) => {
    const response = await manager.process("en", line); 
    console.log(response.answer); 
    r1.prompt(); 
}).on("close", () => {
    process.exit(0); 
})