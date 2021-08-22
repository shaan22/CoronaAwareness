/*var massMark=78;
var heightMark=5.8;
var massJohn=90;
var heightJohn=5;
var MarkBMI=massMark/heightMark*heightMark;
console.log(MarkBMI);
var JohnBMI=massJohn/heightJohn*heightJohn;
console.log(JohnBMI);
var higherBMI=MarkBMI < JohnBMI;
console.log(higherBMI);
var firstname='charan';
var civilstatus='single';
if(civilstatus=='married')
{
    console.log(firstname +' is married');
}
else
{
    console.log(firstname+' is not married');
}

var married=false;
if(married)
{
    console.log(firstname +' is married');
}
else{
    console.log(firstname+' is not married');
}*/

/*var Jm1=89,Jm2=120,Jm3=103;
var Mm1=116,Mm2=94,Mm3=123;
var Javg=Jm1+Jm2+Jm3/3;
console.log('The avg of John team is '+Javg);

var Mavg=Mm1+Mm2+Mm3/3;
console.log('The avg of mark team is  '+Mavg);
if(Javg > Mavg || Javg==Mavg)
{
    console.log('John team are the winners');
}
else if(Javg < Mavg)
{
    console.log('Mark team are winners');
}
var Mar1=97,Mar2=134,Mar3=105;
var Maavg=Mar1+Mar2+Mar3/3;
console.log('The avg of Mary team is '+Maavg);
if(Maavg > Javg && Maavg > Mavg)
{
    console.log('Mary team are the winners');
}
else if(Maavg < Javg && Maavg < Mavg)
{
    console.log('Mary team are losers');

}else if(Maavg==Javg && Maavg == Mavg)
{
    console.log('mary team has drawn wit john and mark');
}*/

/*function calculateage(brithyear)
{
    return 2021-brithyear;
}

var charanage=calculateage(2001);
console.log(charanage);

function yearsUntilRetire(year,Name)
{
    var age=calculateage(year);
    var retirement=65-age;
    console.log(Name+' will retire in '+ retirement    );
}

yearsUntilRetire(2002,'Charan');

var whatcan=function(job,firstname)
{
    switch(job)
    {
        case 'Teacher':return firstname +' is the teacher';
        case 'designer': return firstname + '  is the designer ';
        default:firstname + ' does something else';
        }

}
console.log(whatcan('Teacher','Shaan'));
console.log(whatcan('designer','sneha'));fu
var john=['john','smith',2001,'false','Designer'];
var IsDesigner=john.indexOf('Designer')=== -1 ? 'John is Not a Designer ' :
'John is  a Designer';  
console.log(IsDesigner);*/



/*var Bills=[124,48,268];

for(var i=0;i<3;i++)
{
    switch(Bills[i])
    {
        case (Bills[i] < 50) :
              var Tip1=0.2*Bills;
              console.log(Tip);
        
        case (Bills[i]>= 50 && Bills[i] < 200):
        
           var Tip2 =0.15*Bills;
        
        case (Bills[i] > 200):
            var Tip3=0.1*Bills;
        
    }

    var Tip=[Tip1,Tip2,Tip3];
    console.log(Tip);
}*/

/*function Tipcalc(Bill)
{
    var Percentage;
    if(Bill < 50) {
        Percentage=.2*Bill;
    }
    else if(Bill >=50 && Bill < 200)
    {
        Percentage=.15*Bill;

    }
    else{
        Percentage=.1*Bill;
    }
    return Percentage;
}
    var Bills=[124,48,268];
    var Tips=[Tipcalc(Bills[0]),Tipcalc(Bills[1]),Tipcalc(Bills[2])];
    var AMT=[Bills[0]+Tips[0],Bills[1]+Tips[1],Bills[2]+Tips[2]];
    console.log(Tips,AMT);*/

    /*var charan={
        firstName:'charan',
        LastName:'Shaan',
        BirthYear:2001,
        status:'single',
        calcAge:function(){
            age= 2021-this.BirthYear;
        }
    };

    console.log(charan);
    console.log(charan.calcAge);

    var John={
        Fullname:'John smith',
        Height:5.6,
        Mass:100,
        CalBMI :function() {
            this.bmi= this.Mass/ (this.Height*this.Height);
            return this.bmi;
        }
    }


    var Mark = {
        Fullname :'mark eno',
        Height:6.8,
        Mass:68,
        McalcBMI:function(){
            this.bmi=this.Mass / (this.Height*this.Height);
            return this.bmi;
        }
    }
console.log(John,Mark);
console.log(John.CalBMI());
console.log(Mark.McalcBMI());

if(John.CalBMI > Mark.McalcBMI)
{
    console.log('John BMI is Greater than Mark');
}
else{
    console.log('Mark BMI is Greater than Jogn');
}

var charan=['shaan',20,'student'];
for(var i=0;i<charan.length;i++)
{
    console.log(charan[i]);
}



var John={

     Bills:[124,48,268,180,42],
    
    Tipcalc:function()
    {
        this.Tip=[];
        this.finalvalues=[];
        for(var i=0;i< this.Bills.length;i++){
           
       if(this.Bills[i] < 50){
        this.Tip[i]=0.2*this.Bills[i];
       }
       else if(this.Bills[i] > 50 && this.Bills[i] <=200)
       {
         this.Tip[i]=0.15*this.Bills[i];
       }
       else if(this.Bills[i] > 200){
            this.Tip[i]=0.1*this.Bills[i];
       }
       this.finalvalues[i]=this.Tip[i]+this.Bills[i];
      
        }
        
    },
    avg:function(){
        this.sum=0;
        this.total;
        for(var i=0;i< this.Bills.length;i++){
            
            this.sum=this.Tip[i]+this.sum;
          
        
        this.total= this.sum/this.Tip.length;
        }
    }
    
}
  

var Mark={
    Bills:[77,375,110,45],
    Tipcalc:function(){
        this.Tip=[];
        this.finalvalues=[];
        for(var i=0;i < this.Bills.length;i++)
        {
            if(this.Bills[i] < 100)
            {
                this.Tip[i]=0.2*this.Bills[i];
            }
            else if(this.Bills[i] >= 100 && this.Bills[i] <= 300){
                this.Tip[i]=0.1*this.Bills[i];
            }
            else if(this.Bills[i] > 300){
                this.Tip[i]=0.25*this.Bills[i];
            }
            this.finalvalues[i]=this.Tip[i]+this.Bills[i];
        }
    }
}


function calAvg(tip){
    var sum=0;
    for(var i=0 ;i< 5;i++){
        sum=sum+Mark.Tip[i];

    }

    return sum/ 5;
}
console.log(John);
John.Tipcalc();
John.avg();
Mark.avg=calAvg(Mark.Tip);
console.log(Mark);
Mark.Tipcalc();

var charan={
    Fullname:'Charan Shaan',
    YOB:2001,
     Calcage: function(){
         console.log(2021-this.YOB);
     }
}

var shaan={
    FUllname:'Shaan',
    YOB:2002
}

shaan.Calcage=charan.Calcage;
console.log(charan);
charan.Calcage();
shaan.Calcage();

var person=function(name,YearofBirth,job){
    this.name=name;
    this.YearofBirth=YearofBirth;
    this.job=job;
   
    }
   
    person.prototype.calcAge=function(){
        console.log(2021-this.YearofBirth);
    }
var charan=new person('Shaan',2001,'SE');
charan.calcAge();
*/



/*var a=23;

var b=a;
a=46;
console.log(a);
console.log(b);
var obj={
    age:20,
   name:'charan',
    city:'bangalore'

};
function change(a,b){
a.age=30;
b.city='bangalore';
}
change(obj,obj);
console.log(obj.age);
console.log(obj.city);

var years=[1999,1998,1989,1997,1995];
function arecalc(arr,fn){
    var arrRes=[];
    for(var i=0;i<=arr.length;i++){
        arrRes.push(fn(arr[i]));
    }
return arrRes;
}

function CalcAge(el){
    return 2021-el;
}

var ages=arecalc(years,CalcAge);
console.log(ages);*/
function b(){
    
    console.log(myvar);
}

function a(){
    var myvar=2;
   
    b();
    console.log(myvar);
    
    
}
console.log(myvar);
var  myvar=1;

a();
console.log(myvar);
/*function waitthreeseconds(){
    var ms=3000+ new Date().getTime();
    while(new Date() < ms){}
    console.log('function finished');
}

function clickHandler(){
    console.log('click event');
}

document.addEventListener('click',clickHandler);
waitthreeseconds();
console.log('finished execution');*/
