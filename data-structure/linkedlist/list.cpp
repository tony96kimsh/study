#include <stdio.h>
#include <stdlib.h>
#include <string.h>
// #include <conio.h>

struct Node
{
    int val; // data
    Node* pnext; // link
};

bool DeleteNode (Node* Target) {
    Node* Del;
    Del = Target-> pnext;

    // 마지막 노드를 지우는 경우 대비
    if(Del == NULL) {
        return false;
    }


    Target-> pnext = Del->pnext;
    free(Del);
    return true;
}

Node* head;

Node* InsertNode(Node* Target, Node* aNode) {
    Node* New;
    New = (Node*)malloc(sizeof(Node));
    *New = *aNode; // val : 1, pnext : 쓰레기값
    // 주소값 넘기기
    New->pnext = Target->pnext;
    Target->pnext = New;
    return New; // 반복문 Now가 받음
}

int main () 
{
    // 헤드 생성
    head = (Node*)malloc(sizeof(Node));
    head->pnext = NULL;

    // 노드 추가
    Node* Now, Temp;

    Now = head;
    for(int i = 1; i <= 5; i++) {
        Temp.val = i;
        Now = InsertNode(Now, &Temp);
    }

    //삭제 (이전 노드를 지정해야함)
    DeleteNode(head->pnext);

    // 출력
    for(Now = head->pnext; Now; Now = Now = Now->pnext) {
        printf("%d\t", Now->val);
    }

    //메모리 해제
    while(DeleteNode(head));
    free(head);
    head = NULL;
    return 0;
}