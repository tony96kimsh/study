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
#include <unistd.h>  // 유닉스 계열: sleep 함수 (초 단위)

//#include <windows.h>  // Windows용


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
        
        //1
        for (int i = 1; i < inp; i++) {

        }
        /*
        // 비동기 큐 추가
        total += inp;
        printf("%d 장 추가되었습니다. 총 %d장 인쇄 중 \n", inp, total);
        */

    }
    return 0;
}