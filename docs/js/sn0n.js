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





