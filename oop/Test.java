public class Test{
	public static void main(String args[]) {
		int x=3, y=4;
		switch(x+3) {	
			case 6: y  = 0;
			case 7: y = 1;
			default: y += 1;
		}
	}
}