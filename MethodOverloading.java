class MethodOverloading {
     public static void main(String s[]){
          print(); print(8); print(20 < 10); 
          }
           public static void print(){ 
               System.out.println("Called print with no parameters"); 
               } 
               public static void print(int i){
                    System.out.println("Called print with int parameter"); 

} 
public static void print(boolean b){ 
    System.out.println("Called print with boolean parameter");
     } }