arr = [0, 1]
cyc = -1

def setFbc(ar, num):
    for i in range(num - 1):
        ar.append(ar[i] + ar[i+1])

def getCyc():
    global cyc
    while not (cyc > 0 and cyc <= 20):
        cyc = int(input("파보나치 연산 수 입력 : "))
    
#출력
getCyc()
setFbc(arr, cyc)
print(arr)