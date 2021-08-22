interface X
{
    int i = 5;
}
 
class Y implements X 
{
    void f()
    {
            i = 10;
            System.out.println("i="+i);
        
    }
}
public class Main {

        public static void main(String[] args) {
                
                Y obj = new Y();
                obj.f();        
        }
}