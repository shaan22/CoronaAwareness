package EMPone;
  class Employee
 {
  public int empid;
public String name;
 public int age;
 static int count=0;
  public  Employee(int id,String name,int age)
   {
    this.empid=id;
    this.name=name;
    this.age=age;
    count++;
  }  
 }

 package EMPtwo;
 import EMPone.Employee;
 class  MyJava{  
  public static void main(String[] args) 
  {
   Employee x1 = new Employee(1,"abc",21);
    x1.age = 25;
   System.out.println("The age of Employee x1 is "+x1.age);
 }
 }


 .logo-wrapper img{
  width:50%;
  margin-bottom: 20px;

}

.img-text-wrapper:hover .subtitle
{
  font-weight: 600;
  color: lightseagreen;
}

.img-darken
{
  transition: 1s;
  filter: brightness(10%);
}

\* sharada@presidencyuniversity.in*\
rosan.bhasha@presidency.edu.in