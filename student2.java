import java.util.*;
public class student2 {
    
    int rno;
    String sname;
    int marks;
    int sum=0;
public static void main()
{
   
    student2 s[]=new student2[3];
    Scanner input =new Scanner(System.in);
    for(int i=0;i<3;i++)
    {
        System.out.println("enter the rno");
        s[i].rno=input.nextInt();
        System.out.println("enter the sname");
        s[i].sname=input.next();
        System.out.println("enter the marks");
        System.out.println("enter the sname");
        s[i].marks=input.nextInt();
    }
    for(int i=0;i<3;i++)
    {
        System.out.println(s[i].rno);
        System.out.println(s[i].sname);
    }
    for(int i=0;i<3;i++)
    {
    
        sum=sum+s[i].marks;
    }
    int avg=sum/3;
    System.out.println(avg);
}
}
