/* 직렬 프린터 시뮬레이션 구조

1. 큐 초기화
2. 무한 반복 시작
    - 문서 페이지 수 입력 (2~10 랜덤)
    - 큐에 추가
    - 대기 문서 출력
    - 큐에서 문서 꺼내어 1초에 1페이지씩 인쇄
    - 인쇄 완료 메시지 출력
3. 계속 반복
*/

#include <stdio.h>
#include <time.h>
//#include <unistd.h>  // 유닉스 계열: sleep 함수 (초 단위)
//#include <windows.h>  // Windows용 (밀리초)

#ifdef _WIN32
    #include <windows.h>
    #define SLEEP(sec) Sleep((sec) * 1000)
#else // mac
    #include <unistd.h>
    #define SLEEP(sec) sleep(sec)
#endif


int main() {
    int inp = 0;
    int total = 0;

    while(1)
    {
        printf("프린트 장 수를 입력해주세요('-1' 종료): ");
        scanf("%d", &inp);
        if (inp == -1) {
            break;
        }
        
        for (int i = 1; i <= inp; i++) {
            if(i == 1) 
                printf("인쇄중...\n");
            SLEEP(1);
            printf("%d 장 인쇄 완료\n", i);
            fflush(stdout);
        }
    }
    return 0;
}