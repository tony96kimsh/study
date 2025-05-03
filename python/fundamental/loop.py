# for num in range(0, 5, 1):
#     print(num + 1, "python")


# sum = 0
# for num in range(1, 6, 1):
#     sum += num
# print(sum)


# for i in range(1, 366, 1):
#     print(i, '일')

# sum = 0

# for i in range(1, 101, 1):
#     if i % 2 == 0 :
#         sum += i
# print(sum)

# sum = 0

# for i in range(0, 101, 2):
#     sum += i
# print(sum)

# 숫자맞추기
# favorite = int(input('내가 좋아하는 숫자:'))

# start = int(input('시작값 : '))
# end = int(input('끝값 : '))

# for i in range(start, end, 1):
#     if(favorite == i):
#         print('찾았다!')
#     else:
#         print('실패')


# for val in range(1, 10, 1):
#     print('2 * %d = %d'% (val, 2 * val))

# dan = int(input('단수입력: '))
# for val in range(1, 10, 1):
#     print('%d * %d = %d'% (dan, val, dan * val))

# for dan in range(2, 10, 1):
#     for val in range (1, 10, 1):
#         print('%d * %d = %d'% (dan, val, dan*val))


# sum = 0
# val = 0

# while val < 11 :
#     sum = sum + val
#     val = val + 1
# print(sum)

# sum = 0
# inum = 0
# while True:
#     inum = int(input('정수를 입력하세요'))
#     if inum == -1 :
#         break
#     sum += inum
#     print('누적된 합', str(sum))
# iloop += 1

a = 0
while a < 100:
    a += 1
    if a > 80 and a < 90:
        continue
    print("a의 값: ", a)
