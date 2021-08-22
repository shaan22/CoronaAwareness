
 package testmodule3;
 interface TestInterface{
   int test =10;
 }
 interface MyInterface1 extends TestInterface{
   public void m1();
 }
 interface MyInterface2 extends MyInterface1{
     public void m2();
 }
 public class TestModule3 implements MyInterface2{ 
    public void m2(){
        System.out.println("test"+ (test+10));
   }
   public void m1() {  }
    public static void main(String[] args) {
       new TestModule3().m1();
   }
    
 }