window.onload = (event) => {
    pbworker();
  };


 //pocketbase testing things 
let records;
const client = new PocketBase('https://pb.blokz.io/');

function pbworker() {
  const records = client.records.getFullList('demo', 200 /* batch size */, {
    sort: '-created',
}).then(data => {
fetchRecord(data);
  });
}

function fetchRecord(data) {
  console.log(data);
  let fetchRec = data[1]["id"];
  const record = client.records.getOne('demo', fetchRec,).then(data => {
    console.log(data)
  });
}





