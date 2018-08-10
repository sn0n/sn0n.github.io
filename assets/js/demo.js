// setup all variables in the beginning of the doc
var count = 0;
// multiple line variable use backticks
var playgroun1 = `
    hello world!
`;
// data variable is in demo.json 
var mydata = JSON.parse(data);

// this checks for url variables like ?id=42&name=steve
function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}


window.onload = function loading(){


document.getElementById("name").innerHTML = "Rob";
document.getElementById("age").innerHTML = mydata[0].age;
document.getElementById("location").innerHTML = mydata[0].location;
document.getElementById("default_pic").src = mydata[0].default_pic;
document.getElementById("biofull").innerHTML = mydata[0].biofull;
if (getQueryVariable("id") !== false) {
document.getElementById("external").innerHTML = getQueryVariable("id");
} else {
document.getElementById("external").innerHTML = "none";
}
	
if (getQueryVariable("friend") === "8-bit") {
	document.getElementById("name").innerHTML = "8-bit";
	document.getElementById("age").innerHTML = "88";
	document.getElementById("location").innerHTML = "Online";
	document.getElementById("biofull").innerHTML = "classic";
} else {
	
}

//loading end
};


            
function demo() {
   
     document.getElementById("playground").innerHTML = playgroun1;
    
    if (count > 0) {
        console.log(count);
         document.getElementById("playground").innerHTML = count;
        
            
            var db = new Nedb({
                filename: 'library.db',
                autoload: true
              });  
            db.insert({ count: count }, function (err) {
               
               });
               db.find({count : 1 }, function (err,docs){ 
                   document.getElementById("playground").innerHTML = "Visit "+docs.length;
               });  
               
               count++;
        } else {
            console.log(count);
 
            count++;
        }
    }
    
    
    

// stats logging
var db = new Nedb({ filename: 'db.json', autoload: true });

db.findOne({ _id: 1 }, function (err, doc) {  
  doc = doc || { _id: 1, counter: 0 };

  console.log('This example was executed ' + doc.counter + ' times. Last access time was ' + doc.lastSeenAt);

  doc.lastSeenAt = new Date();
  doc.counter++;

  db.update({ _id: 1 }, doc, { upsert: true }, function (err, num) {
    console.log('Updated ' + num + ' records');
  });
});

















    
