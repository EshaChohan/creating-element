var element = document.getElementById("main")

var heading1 = document.createElement("h1")
element.appendChild(heading1)
 var content = document.createTextNode("About Me")
heading1.appendChild(content)

var heading2 = document.createElement("h2")
element.appendChild(heading2)
 var content = document.createTextNode("My name is Esha Chohan")
heading2.appendChild(content)

var heading3 = document.createElement("h3")
element.appendChild(heading3)
 var content = document.createTextNode("My Father name is Shakeel Ahmed Chohan")
heading3.appendChild(content)

var heading4 = document.createElement("h4")
element.appendChild(heading4)
 var content = document.createTextNode("I am 22 years old")
heading4.appendChild(content)

var heading5 = document.createElement("h5")
element.appendChild(heading5)
 var content = document.createTextNode("I am a student of SMIT")
heading5.appendChild(content)

var heading6 = document.createElement("h6")
element.appendChild(heading6)
 var content = document.createTextNode("My last qualification is FSc")
heading6.appendChild(content)

var spanText = document.createElement("span")
element.appendChild(spanText)
 var content = document.createTextNode("I am learning Web & Mobile App development ")
spanText.appendChild(content)

var bold = document.createElement("b")
element.appendChild(bold)
 var content = document.createTextNode("My trainer is Miss Afsah Farooqui ")
bold.appendChild(content)

var italic = document.createElement("i")
element.appendChild(italic)
 var content = document.createTextNode("I am living in Karachi,Pakistan")
italic.appendChild(content)


var paragraph = document.createElement("p")
element.appendChild(paragraph)
var content = document.createTextNode("Pakistan is very beautiful country. It has so many natural beauty to see.")
paragraph.appendChild(content);