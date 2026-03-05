// getElementbyId , getElementbyClassName ,
// qereslectorAll, etc
// evetn bubble ing , event handalar ,
// Array ,Object 


const moblile  = {
    sohan: 'sohan',
    sadia : 'sia',
    shasa : 'ssss'
}


const so = Object.keys(moblile)
// console.log(so);
// for (const mo in so){
//     console.log(mo);
// }
for(const key of so ){
    console.log(key,moblile[key]);
}