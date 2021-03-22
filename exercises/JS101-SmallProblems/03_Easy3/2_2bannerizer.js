function logInBox(message, size) {
  if (size ) {
  let horizontalRule = `+${"-".repeat(size + 2)}+`;
  let emptyLine = `|${" ".repeat(size + 2)}|`;

  if (message.length <= size) {
    console.log(horizontalRule);
    console.log(emptyLine);
    console.log(`| ${message} |`);
    console.log(emptyLine);
    console.log(horizontalRule);
  } else {
    let partedMessage = [];

    for (let partition = 0; partition < message.length; partition += size) {
      partedMessage.push(message.slice(partition, partition + size));
    }

    console.log(horizontalRule);
    console.log(emptyLine);
    for (parts = 0; parts < partedMessage.length; parts += 1) {

      console.log(`| ${partedMessage[parts].toString().padEnd(size, ' ')} |`);
    }
    
    console.log(emptyLine);
    console.log(horizontalRule);
  }
} else {
  
  let horizontalRule = `+${"-".repeat(message.length + 2)}+`;
  let emptyLine = `|${" ".repeat(message.length + 2)}|`;

  console.log(horizontalRule);
  console.log(emptyLine);
  console.log(`| ${message} |`);
  console.log(emptyLine);
  console.log(horizontalRule);
}
}

logInBox('To boldly go where no one has gone before.', 20);
logInBox('Hello darkness my old friend', 10);
logInBox('Hello');