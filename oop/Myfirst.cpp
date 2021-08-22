#include <bits/stdc++.h>
#include <iostream>
using namespace std;


int main(){
    int i;
    int max_profit=0;
    int arr[5]={4,8,1,7,6} ; 
    cout<<"enter the nummber"<<endl;

    for(i=0;i<=5-1;i++){
        for(int j=1;j<=5-1;j++){
            int profit=arr[j]-arr[i];
            if(profit>max_profit){
                max_profit=profit;
            }
            else{
                profit=profit;
            }
             
        } 
    }
    cout<<max_profit;
   
}