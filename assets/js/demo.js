// setup all variables in the beginning of the doc
var count = 0;
// multiple line variable use backticks
var playgroun1 = `
    You clicked once, you won't see this again. ^>^
`;
// data variable is in demo.json 
var mydata = JSON.parse(data);

// this checks for url variables like ?id=42&friend=8-bit
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


document.getElementById("name").innerHTML = mydata[0].name;
document.getElementById("usertitle").innerHTML = mydata[0].title;
var year = new Date();
var age = year.getFullYear() - mydata[0].birthyear;
document.getElementById("age").innerHTML = age;
document.getElementById("sign").innerHTML = mydata[0].sign;
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
    document.getElementById("usertitle").innerHTML = "guru";
    document.getElementById("sign").innerHTML = "infinity";
	document.getElementById("location").innerHTML = "Online";
    document.getElementById("biofull").innerHTML = "classic";
    document.getElementById("userpic").innerHTML = "<i class='icon-user icons'></i>";
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

















    