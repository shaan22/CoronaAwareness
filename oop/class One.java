class One
{
	final int a=15;
}
class Two extends One
{
	final int a=20;
}
public class Test extends Two
{
	final int a=30;
	public static void main(String args[])
	{
		Test t = new One();
		System.out.println(t.a);
	}
}