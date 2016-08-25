var fs = require('fs')
var files = fs.readdirSync(".").filter(function(file){
  return file.match(/\.txt/)
})
describe("Haiku",function(){
  it("is in a txt file",function(){
      expect(files.length).toBe(1)
  })
  it("is 3 lines long",function(){
      var lines = fs.readFileSync(files[0],'utf8').split("\n")
      console.log(lines)
      expect(lines.length > 2).toBe(true)
  })
})