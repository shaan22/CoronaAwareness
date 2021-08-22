import java.util.*;
public class name {
    public static void main(String[] args) {
        String father,mother,child;
        Scanner sc=new Scanner(System.in);
        father=sc.nextLine();
        mother=sc.nextLine();
        System.out.println("entwr male or female");
        child=sc.nextLine();
        if(child =="male")
        {

        String childM=father.substring(0,3);
        System.out.println(childM);
        }
        else
        {
            String childF=mother.substring(0,3);
        }
    }
    
}
