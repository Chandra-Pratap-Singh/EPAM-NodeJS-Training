//question:
// 1)Write a   program which reads a string from standard input reverses the string and writes it to the standard output.
// a)The program should run in a
// stand-by mode and should not be terminated after reversing the first string.

// solution:
const stdin = process.stdin;
stdin.on("data", data => {
  if (data.toString() === "exit\r\n") process.exit();
  else {
    const output = data
      .toString()
      .split("")
      .reverse()
      .join("");
    console.log(output);
  }
});
