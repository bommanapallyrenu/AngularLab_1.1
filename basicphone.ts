import{
    Mobile
}from './Mobile'
class Basicphone extends Mobile
{
    mobileType:string;

public constructor(mobileId:number,mobileName:string,mobileCost:number,mobileType: string) 
{ 
    super(mobileId,mobileName,mobileCost);
    this.mobileType = mobileType;
    console.log("mobile type is ",this.mobileType);
    }
}
var v=new Basicphone(101,'Samsung',50000,'basic');
v.printMobileDetail();
var arraynew=[12,15,25,53,67,99];
console.log(arraynew);