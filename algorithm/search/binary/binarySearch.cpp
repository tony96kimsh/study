#include <stdio.h>

int BinarySearch(int* pArr, int nSize, int nKey) {
    unsigned int lower = 0;
    unsigned int upper = nSize;
    unsigned int mid = 0;

    for(;;) 
    {
        mid = (lower + upper)/2;


        if(upper < lower) {
            return -1;
        }
        
        if (pArr[mid] == nKey){
            return mid;
        }

        if(pArr[mid] > nKey) {
            upper = mid - 1;
        }
        else {
            lower = mid + 1;
        }
    }
    return -1;
}

int main () {
    int arr[]={2,6,13,19,21,21,23,29,35,48,62,89,90,95,99,102,109,208,629};
    unsigned int size = sizeof(arr) / sizeof(arr[0]);
    int key = 888;

    int idx = BinarySearch(arr, size, key);

    if(idx == -1) {
        printf("값업슈\n");
    }
    else {
        printf("%d번째 있습니다.\n", idx + 1);
    }

}