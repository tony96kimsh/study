#include <stdio.h>
#include <unistd.h>
#include <pthread.h>

int isRecord = 0; // 녹화 on/off
int nowRecordTime = 0; // 녹화중 시간
int record_length = 60; 
int inpNum;

pthread_t tid_record;

void* Record (void* arg) {
    FILE* fp = fopen("data.rec.txt", "w");
    
    fflush(stdout);
    nowRecordTime = 0;

    while ( isRecord && nowRecordTime < record_length) {
        sleep(1);
        nowRecordTime++;
        fprintf(fp, "Recording_> %d\n", nowRecordTime);
        // printf("녹화 테스트 %d\n", nowRecordTime);
        fflush(stdout);
    }
    fclose(fp);
    printf("녹화 종료\n");
    nowRecordTime = 0;
}


void QueryMenu () {
    printf("===== BlackBox Simulator =====\n");
    printf("1) 녹화 ON/OFF [[ 현재상태 : OFF ]]\n");
    printf("2) 잔여 녹화 시간 확인\n");
    printf("3) 녹화 시간 설정\n");
    printf("4) 프로그램 종료\n");
    printf("기능 선택 => ");
    scanf("%d", &inpNum);    
}

int main() {
    while(1) {
        QueryMenu();
        switch(inpNum) {
            case 1 :
                isRecord = !isRecord;

                // 녹화 쓰레드 동작
                if(isRecord) {
                    printf("녹화시작\n");
                    pthread_create(&tid_record, NULL, Record, NULL);
                } else {  // 녹화 쓰레드 중지
                    // record off
                    printf("녹화 중단 요청\n");
                    pthread_join(tid_record, NULL);
                }
                break;

            case 2:
                printf("현재 잔여 시간 %d 초",record_length - nowRecordTime);
                break;

            case 3 :
                printf("설정할 녹화시간을 입력하세요 : ");
                scanf("%d", &record_length);
                printf("녹화시간이 %d 초로 변경되었습니다.\n", record_length);
                break;

            case 4 :
                isRecord = 0;
                pthread_join(tid_record, NULL);
                return 0;
                
            default :
                printf("입력값을 확인해주세요.");
        }
    }
}