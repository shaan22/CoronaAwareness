public class organisation1 {
    void address()
    {
        System.out.println("rajanukunte Bangalore");
    }   
   }
   class employee extends organisation1
   {
       void address()
       {
           System.out.println("hebbal Bangalore");
       }
       void diaplay()
       {
           System.out.println("employee");
       }
       class methodOverride
       {
            public static void main(String[] args) {
               organisation1 o=new organisation1();
               o.address();
           }
       }
   }
   