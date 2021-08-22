#include <iostream>
using namespace std;
int main(){
    int i,j;
    int arr[2][3];
    cout<<"enter the numbers"<<endl;
    for ( i = 0; i < 2 ; i++)
    {
        for(j=0;j<2;j++){
            cin>>arr[i][j];
        }
    }
    cout<<"the numbers"<<endl;
    for(i=0;i<2;i++){
        for(j=0;j<2;j++){
            cout<<"arr["<< i <<"]["<< j<<"]:"<<arr[i][j]<<endl;
        }
    }
    
}