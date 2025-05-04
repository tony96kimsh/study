#ifdef _WIN32
#include <windows.h>
#else // #elif __APPLE__ / __linux__
#include <unistd.h>
#include <pthread.h> // thread
#endif

#include <stdio.h>
// #include <unistd.h> // sleep() 

void* say_hello(void* arg) {
    for(int i = 0; i < 5; i++ ) {
        printf("안녕 from thread! %d\\n", i);
        sleep(1);
    }
    return NULL;
}

int main() {
    pthread_t thread_id;
    pthread_create(&thread_id, NULL, say_hello, NULL);

    for(int i = 0; i < 5; i++) {
        printf("안녕 from main! %d\n", i);
        sleep(1);
    }

    pthread_join(thread_id, NULL); // 스레드가 끝날 때까지 기다리기
    return 0;
}