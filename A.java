class A{
     int num=40;
}
class B extends A{
    int num=30;
}
class C extends B{
    int num=20;
}
public class Test extends C {
     int num;    
      public Test(int num) {
          this.num = super.num;
      }
       public static void main(String[] args) {
           System.out.println(new Test(10).num);
  }
}