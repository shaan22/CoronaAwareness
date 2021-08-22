public class teacher {
    float int marks=75;
    void show()
    {
        System.out.println("list of marks");

    }
    
}
class student extends teacher{
    void show()
    {
        marks=marks+10;
        System.out.println("students"+marks);
    }
    void details()
{
    System.out.println("students name");
}
class finalkey
{
     public static void main(String[] args) {
         teacher t=new teacher();
         teacher s=new teacher();
        
    }
}
}