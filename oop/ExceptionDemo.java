public class ExceptionDemo
{
public static void main(String args[])
{
try 
{ 
System.out.println(“Hello”);
int c;
c=10/0; //exception statement
System.out.println(“result=”+c);
}
finally 
{
System.out.println(“I am in finally block”);
}
System.out.println(“Hai ”);
System.out.println(“Bye”);
}
}