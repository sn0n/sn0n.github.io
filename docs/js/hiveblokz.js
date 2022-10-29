var div = document.getElementById('hiveblokz');
let apinode;
let frontend;
let hiveuser = document.currentScript.getAttribute('hiveuser');

//frontend
if (!document.currentScript.getAttribute('frontend')) {
    console.log("frontend not set, using personal.community");
    frontend = "https://personal.community"
} else {
    frontend = "https://" + document.currentScript.getAttribute('frontend') + "/@";
    console.log("frontend set: " + document.currentScript.getAttribute('frontend'))
}

// hive node options : https://developers.hive.io/quickstart/hive_full_nodes.html
if (!document.currentScript.getAttribute('apinode')) {
    console.log("api node not set, using deathwing");
    apinode = "https://api.deathwing.me"
} else {
    console.log("api node set" + document.currentScript.getAttribute('apinode'))
    apinode = "https://" + document.currentScript.getAttribute('apinode')
}
// markdown parser from : https://codepen.io/kvendrik/pen/bGKeEE
function parseMD(md) {
    md = md.replace(/^\s*\n\*/gm, '<ul>\n*');
    md = md.replace(/^(\*.+)\s*\n([^\*])/gm, '$1\n</ul>\n\n$2');
    md = md.replace(/^\*(.+)/gm, '<li>$1</li>');
    md = md.replace(/^\s*\n\d\./gm, '<ol>\n1.');
    md = md.replace(/^(\d\..+)\s*\n([^\d\.])/gm, '$1\n</ol>\n\n$2');
    md = md.replace(/^\d\.(.+)/gm, '<li>$1</li>');
    md = md.replace(/^\>(.+)/gm, '<blockquote>$1</blockquote>');
    md = md.replace(/[\#]{6}(.+)/g, '<h6>$1</h6>');
    md = md.replace(/[\#]{5}(.+)/g, '<h5>$1</h5>');
    md = md.replace(/[\#]{4}(.+)/g, '<h4>$1</h4>');
    md = md.replace(/[\#]{3}(.+)/g, '<h3>$1</h3>');
    md = md.replace(/[\#]{2}(.+)/g, '<h2>$1</h2>');
    md = md.replace(/[\#]{1}(.+)/g, '<h1>$1</h1>');
    md = md.replace(/^(.+)\n\=+/gm, '<h1>$1</h1>');
    md = md.replace(/^(.+)\n\-+/gm, '<h2>$1</h2>');
    md = md.replace(/\!\[([^\]]+)\]\(([^\)]+)\)/g, '<img src="$2" alt="$1" />');
    md = md.replace(/[\[]{1}([^\]]+)[\]]{1}[\(]{1}([^\)\"]+)(\"(.+)\")?[\)]{1}/g, '<a href="$2" title="$4">$1</a>');
    md = md.replace(/[\*\_]{2}([^\*\_]+)[\*\_]{2}/g, '<b>$1</b>');
    md = md.replace(/[\*\_]{1}([^\*\_]+)[\*\_]{1}/g, '<i>$1</i>');
    md = md.replace(/[\~]{2}([^\~]+)[\~]{2}/g, '<del>$1</del>');
    md = md.replace(/^\s*\n\`\`\`(([^\s]+))?/gm, '<pre class="$2">');
    md = md.replace(/^\`\`\`\s*\n/gm, '</pre>\n\n');
    md = md.replace(/[\`]{1}([^\`]+)[\`]{1}/g, '<code>$1</code>');
    md = md.replace(/^\s*(\n)?(.+)/gm, function (m) {
        return /\<(\/)?(h\d|ul|ol|li|blockquote|pre|img)/.test(m) ? m : '<p>' + m + '</p>';
    });
    md = md.replace(/(\<pre.+\>)\s*\n\<p\>(.+)\<\/p\>/gm, '$1$2');
    return md;
}



var fetchPosts = function () {
    fetch(apinode, {
        body: `{"jsonrpc":"2.0", "method":"bridge.get_account_posts", "params":{"sort":"posts", "account": "` + hiveuser + `", "limit": 10}, "id":1}`,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "POST"
    }).then(response => response.json()).then(data => {
        // console.log(data.result[0])
        data.result.forEach(element => {
            // console.log("texting + " + JSON.stringify(element))
            //console.log("recent1 from main: " + recent1.body);
            var recent1date = element.created.slice(0, 10);
            post1 = parseMD(element.body);
            post1 = post1.replace(new RegExp("<img ", 'g'), "<img width='80%' ");
            div.innerHTML += '<article><h1>' + element.title + "</h1><small>" + recent1date + "</small><div id='postbody'>" + post1 + "</div></article><hr />";
        });
        // view more on peakd
        div.innerHTML += "<br /><div style='display: block; padding: 1em; margin: 1em;  text-align: left'>View More on <a href='"+frontend+hiveuser+"' target='_blank'>"+frontend+hiveuser+"</a></div>";
    });
}
fetchPosts();
