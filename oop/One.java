class One
{
	final int a=15;
}
class Two extends One
{
	final int a=20;
}
 public class Tst extends Two
{
	final int a=30;
	public static void main(String args[])
	{
		Tst t = new Tst();
		System.out.println(t.a);
	}
}