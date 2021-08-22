class MyException{
    
}
public class TestModule3 { 
    public static void main(String[] args) {
        try{
            System.out.println("Hello World");
            throw new MyException();
        }catch(MyException me){
            System.out.println("Exception Caught here");
        }
    }
    
}