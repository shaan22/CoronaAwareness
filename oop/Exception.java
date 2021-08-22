class MyException extends Exception{
}
    

 public class TestModule3 { 
    public static void main(String[] args) {
        int nums[]={2,3,0,5};
        int number = 90;
        try{
           int result = number/nums[2];
            throw new MyException();
        }catch(MyException me){
            System.out.println("MyException");
        }
        catch(ArithmeticException ae){
            System.out.println("ArithmeticException");
        }
        catch(ArrayIndexOutOfBoundsException ae){
            System.out.println("ArrayIndexOutOfBoundsException");
        }
        finally{
            System.out.println("However this will execute");
        }
    }
  }
