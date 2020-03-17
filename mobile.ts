export class Mobile{
    mobileId:number;
    mobileName:string;
    mobileCost:number;

    public constructor(mobileId: number,mobileName:string,mobileCost:number) 
    { this.mobileId = mobileId;
      this.mobileName = mobileName;
      this.mobileCost = mobileCost;
    
    }
    printMobileDetail(){
        
        console.log("Id is",this.mobileId);
        console.log("Name is",this.mobileName);
        console.log("Cost is",this.mobileCost);

    }
}