public class TestString{
 public static void main(String args[]) {
         String org = "This is a test. This is, too.";
         String search = "is";
         String sub = "was";
         String result = "";
         int i;
           i = org.indexOf(search);
           result = org.substring(0, i);
           result = result + sub;
           org = result;  
            System.out.println(org);
    }
}