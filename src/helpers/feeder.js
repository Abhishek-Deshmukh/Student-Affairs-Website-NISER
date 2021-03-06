const fs = require("fs")
const path = require("path")
const start_identifier = "---start---"
const output_directory = "./src/contents" // do NOT put a `/` in the end
const headings_file = "order.json"
const input_file = "./src/templates/input.md"

// cleaning up the folder
fs.readdir(output_directory, (err, files) => {
  if (err) throw err

  for (const file of files) {
    if (file === "images"){continue;} // leaving the images folder
    fs.unlink(path.join(output_directory, file), err => {
      if (err) throw err
    })
  }
})

function remove_errors(section) {
  var clean_section = "";
  for (const line of section.split("\n")){
    if (line.includes(">>>>>>")){continue;} // that is the error escape sequence (source: the markdown plug-in docs)
    console.log(line)
    clean_section += line + "\n"
  }
  return clean_section
}

fs.readFile(input_file, (error, txtString) => {
  if (error) {
    throw error
  }
  // removing unecessary stuff
  data = txtString
    .toString()
    .substring(
      txtString.toString().indexOf(start_identifier) + start_identifier.length
    )
    .trim()

  // splitting
  sections = data.split("\n# ").map(section => remove_errors(section))

  // headings
  var headings = []

  // cleaning and writing
  for (let i = 0; i < sections.length; i++) {
    section = sections[i]
    heading = section
      .substring(0, section.indexOf("\n"))
      .replace("#", "")
      .trim()
    headings.push(heading)
    file_name =
      heading
        .toLowerCase()
        .replace(" ", "-")
        .replace(" ", "-")
        .replace(" ", "-")
        .replace("’", "") + ".md"
    content = `---\ntitle: "${heading}"\n---\n${section
      .substring(section.indexOf("\n"))
      .trim()}`
    fs.writeFile(`${output_directory}/${file_name}`, content, err => {
      if (err) console.log(err)
    })
  }
  fs.writeFile(
    `${output_directory}/${headings_file}`,
    JSON.stringify(headings),
    err => {
      if (err) console.log(err)
    }
  )
})
