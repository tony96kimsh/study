#include <stdio.h>
#include <pthread.h>
#include <unistd.h> // sleep

void* say_hello(void* arg) {
    for (int i = 0; i < 5; i++) {
        printf("안녕 from thread! %d\n", i);
        fflush(stdout);
        sleep(1);        
    }
    return NULL;
}

int main() {
    pthread_t thread_id;
    pthread_create(&thread_id, NULL, say_hello, NULL);

    for (int i = 0; i < 5; i++) {
        printf("안녕 from main! %d\n", i);
        fflush(stdout); 
        sleep(1);
    }

    pthread_join(thread_id, NULL);

    return 0;
}