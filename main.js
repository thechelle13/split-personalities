const originalDisorderFormat = "Depression|$|Bipolar|$|Manic|$|Anxiety|$|Anorexia|$|Posttraumtic Stress|$|Seasonal Affective|$|Bulimia"

// create a series of div elements that contain disorder name using split()



let listDis = originalDisorderFormat.split('|$|')

// join() the array back into the string making sure disorder is surrounded by <div> html


const newlistDis = listDis.join("</div>\n<div>")


 
console.log(`<div>${newlistDis}</div>`)




