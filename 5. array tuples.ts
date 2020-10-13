// [ latihan typescript ke-5 ]
let data:[string,number];
data=["handy rinaldi",14];
// error jika
// data=["kritoforus","natawijaya"];
// data=[6,'andi alfiqra'];
// data=["dennis varenza meidy",31,"sdn pinang ranti 09 pagi"];
for(let x=10%2;x<data.length-1;x++){
    console.log(`[ - ] nama \t: ${data[x]}\n[ - ] nomor abs : ${data[x+1]}`);
}