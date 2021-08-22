public class TwoDArray {
    public static void main(String args[]) {
   
        int twoD[][] = new int[4][];
        twoD[0] = new int[2];
        twoD[1] = new int[2];
        
        twoD[0][0]=20; twoD[0][1]=30; twoD[1][0]=40; twoD[1][1]=50;
        for(int i=0;i<2;i++){
            for(int j=0;j<2;j++){
                System.out.print(twoD[i][j]);
            }
        }
      }
}