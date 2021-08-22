public class string2 {
    public static void main(String[] args) {
        String str1="computer";
        String str2="science";
        System.out.println(str1.charAt(5));
        System.out.println(str2.startsWith("k"));
        System.out.println(str1.length());
        System.out.println(str2.length());
        if(str1.equals(str2))
        System.out.println("the strings are equal");
        else
        System.out.println("not equal");
        String s3=str1.substring(1,4);
        String s4=str2.substring(2,6);
        System.out.println("the substring of str1\n"+s3);
        System.out.println("the ss of str2\n"+s4);
        String s5=str1.concat("presidency university");
        System.out.println("the cc of str1\n"+s5);
    }
    
}
