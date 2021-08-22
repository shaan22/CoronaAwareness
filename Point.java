class Point { 
    int x,y;
     private Point(){ y=20; System.out.print(y+" ");
      } 
      private Point(int x)
{ 
    this.x=x; System.out.print(x);
     }
      public static void main(String args[])
       { 
           Point p1 = new Point(); Point p2 = new Point(10);
            } }