

function output(inp) {
    document.body.appendChild(document.createElement('pre')).innerHTML = inp;
}

function syntaxHighlight(json) {
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<div class="' + cls + '">' + match + '</div>';
    });
}

var obj = { a: 1, 'b': 'foo', c: [false, 'false', null, 'null', { d: { e: 1.3e5, f: '1.3e5' } }] };
var str = JSON.stringify(obj, undefined, 4);



let user;

function generate(passed) {
    let user = document.getElementById("fname").value;
    blokzchain_json =
    {
        "user": user,
        "passphrase": passphrase,
        "package": encrypted

    }
    client.records.create('playground', {
        "blokzbox": blokzchain_json
    });
    console.log("json" + JSON.stringify(blokzchain_json))
    // hivejs.broadcast.customJson(wif, requiredAuths, requiredPostingAuths, id, json, function(err, result) {
    //console.log(err, result);
    //});
    console.log(JSON.parse(passed));
    passed = JSON.stringify(blokzchain_json);

    document.getElementById("playground").innerHTML = "<h3>payload:</h3><div class='pre'>" + syntaxHighlight(passed) + "</div><h3>decrypted message: </h3> " + AES256.decrypt(encrypted, passphrase) + "<h2><a href='./'>return</a></h2>";
}

document.getElementById("playground").innerHTML += "Passphrase <small>(generated at random)</small><br />";
let first, second, third, fourth, fifth, sixth, passphrase = "";

for (let i = 0; i < 6; i++) {
    first = Math.floor(Math.random() * 6 + 1);
    second = Math.floor(Math.random() * 6 + 1);
    third = Math.floor(Math.random() * 6 + 1);
    fourth = Math.floor(Math.random() * 6 + 1);
    fifth = Math.floor(Math.random() * 6 + 1);
    dice = first + "" + second + "" + third + "" + fourth + "" + fifth;
    passphrase += WordList[dice];
    console.log(passphrase)
    document.getElementById("playground").innerHTML += "<span style='padding-left: 1em'>" + WordList[dice] + "</span>";
}
// encryption
var encrypted = AES256.encrypt('Words, Pictures, things & such!', passphrase);
document.getElementById("playground").innerHTML += '<br /><br /><div>text we are encrypting (message): <br /> Words, Pictures, things & such!</div>';
document.getElementById("playground").innerHTML += "<br /><div>encrypted <small>w/passphrase</small> (package):</div><div>" + encrypted + "</div>";
// decryption
document.getElementById("playground").innerHTML += "<div style='margin-top: 20px'>de-crypted <small>w/phrase</small> (verify same as message):</div>" + AES256.decrypt(encrypted, passphrase);
let new_phrase = "passphrase: " + passphrase;

let account = "empty.space"
let blokzchain_json =
{
    "blokzbox": [
        'craft',
        {
            "user": user,
            "package": encrypted
        }
    ]
}
    ;
document.getElementById("generated").innerHTML += "<h3>Review page then press <button onclick='generate(`"
    + JSON.stringify(blokzchain_json, undefined, 4)
    + "`)'>test</button></h3>";










/*
   //      curl -s --data '{"jsonrpc":"2.0", "method":"database_api.find_accounts", "params": {"accounts":["hiveio"]}, "id":1}' https://api.hive.blog
   let apinode = "https://api.deathwing.me"
   let hiveuser = "sn0n"
   var fetchPosts = function () {
    fetch(apinode, {
        body: `{"jsonrpc":"2.0", "method":"database_api.find_accounts", "params": {"accounts":["` + hiveuser + `"]}, "id":1}`,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "POST"
    }).then(response => response.json()).then(data => {
        // console.log(data.result[0])
        console.log(data.result.accounts[0].memo_key);
        
    });
}
fetchPosts();

*/
console.log('all done')



window.onload = (event) => {
    pbworker();
};


//pocketbase testing things 
let records;
const client = new PocketBase('https://pb.sn0n.com/');




function pbworker() {
    const records = client.records.getFullList('playground', 200 /* batch size */, {
        sort: '-created',
    }).then(data => {
        fetchRecord(data);
    });
}

function fetchRecord(data) {
    console.log(data);
    let fetchRec = data[0]["id"];
    const record = client.records.getOne('playground', fetchRec,).then(data => {
        console.log(data)
    });
}


