
const sentence = "hello there from lighthouse labs";
let delay = 0;
for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    i !== sentence.length - 1?process.stdout.write(sentence[i]):process.stdout.write("\n");
      },delay)
  delay += 50;
}


