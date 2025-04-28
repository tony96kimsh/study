#include <stdio.h>
#include <stdlib.h>

int* stack;
int size;
int top;

void InitStack(int aSize) {
    size = aSize;
    stack = (int*)malloc(size * sizeof(int));    
    top = -1;
}

int push(int data) {
    if(top < size - 1) {
        top++;
        stack[top] = data;
        return 1;
    } 
    else {
        return 0;
    }
}
int pop() {
    if(top >= 0) {
        return stack[top--];        
    } else {
        return -1;
    }
}

void FreeStack() {
    free(stack);
}


int main() {
    InitStack(10);

    push(7);
    push(0);
    push(6);
    push(2);
    push(9);

    printf("%d\n", pop());
    printf("%d\n", pop());
    printf("%d\n", pop());
    printf("%d\n", pop());
    printf("%d\n", pop());

    FreeStack();

    return 0;
}