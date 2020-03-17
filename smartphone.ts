import{
    Mobile
}from './Mobile'
class Smartphone extends Mobile
{
    mobileType:string;

    public constructor(mobileId:number,mobileName:string,mobileCost:number,mobileType: string) 
    { 
        super(mobileId,mobileName,mobileCost);
        this.mobileType = mobileType;
        console.log(this.mobileType);
    }
}

var s=new Smartphone(101,'Samsung',50000,'Smart type');
s.printMobileDetail();

