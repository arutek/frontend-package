const fs = require('fs')
const path = require('path')


// Recursively read files from the directory
const removeFontsize = () => {
  const directoryPath = 'dist' // Specify the directory path here
  const formats = ['less', 'scss', 'css', 'styl']
  fs.readdirSync(directoryPath).forEach(file => {
    const format = file.split('.')
    const filePath = path.join(directoryPath, file)
    if (!formats.includes(format[format.length - 1])) {
      console.log(`Skipping: ${format}`)
      return
    }
    const stats = fs.statSync(filePath)
    if (stats.isDirectory() || stats.isFile()) {
      // Recursively process subdirectories
      const fileContent = fs.readFileSync(filePath, 'utf8')
      const lines = fileContent.split('\n')
      
      const updatedLines = lines.map(line => {
        // Remove font-size property
        if (line.includes('font-size:')) {
          return
        }
        return line
      })
      
      const updatedContent = updatedLines.join('\n')
      fs.writeFileSync(filePath, updatedContent)
      console.log(`Font-size removed from: ${filePath}`)
    }
  })
}

removeFontsize()