public class Sample {
    public static void main(String args[ ])
{
try
{
int  x=0;
throw new Exception("thrown");
}
catch(Exception e)
{
System.out.println(e);
System.out.println("CaughtException");
}
finally
{
System.out.println("Ever");
}
}
    }