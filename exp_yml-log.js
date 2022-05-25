const fs = require('fs');
fs.readFile("github-actions.log", (err, buff) => {
  // if any error
  if (err) {
    console.error(err);
    return;
  }

  // otherwise log contents
  var content = buff.toString();
  content += "\n"
  content += new Date()
  content += " [INFO] exp.yml ran."

  fs.writeFile('github-actions.log', content, err => {
    if (err) {
      console.error(err);
    }
    console.log("action logged")
    // file written successfully
  });
});
