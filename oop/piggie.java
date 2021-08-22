import java.util.*;
 class piggiebank {
    static int sita=300;
    static int geetha=200;
    static int Tamt=500;
static void display()
{
    int s_spent= (int) (sita*0.3);
    int g_spent=(int) (geetha*0.2);
    System.out.println("sita spent"+s_spent);
    System.out.println("sita spent"+g_spent);
    int balance=(int) (Tamt-s_spent-g_spent);
    System.out.println("the balance is"+balance);

}
}
public class piggie{
    public static void main (String[] args){
        piggiebank p=new piggiebank();
        p.display();
    }

}

