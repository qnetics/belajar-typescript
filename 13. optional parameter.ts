type f=(x:number,y:any)=>string;
const f=(x:Number,y?:any):string=>{
    if(y==undefined){
        var yA:String="x";
    }else{
        var yA:String=y;
    }
    return x.toString()+yA;
}
console.log(f(12,"y"));
console.log(f(12));