class Mutate { public static void main(String[] args) {

StringBuffer s = new StringBuffer (012345678);
if (s.length() == 10)

s.insert (10, "abcdef");

s.delete(3, 7);

System.out.println(s.append('g'));

}

}