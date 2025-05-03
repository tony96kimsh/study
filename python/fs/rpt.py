'''
# 사용자로부터 소문자 알파벳을 입력받아, 대문자로 변환하여 출력하세요. (upper() 함수 사용)
name = input('what\'s your name: ').upper()
print(name)

num = int( input("type number to calculate factorial: "))
sum = 1
for i in range(1, num + 1, 1):
    sum *= i
print(f"{num}! 의 결과: {sum}")

'''

'''
decimal_num = float(input('당신의 숫자는 소수(decimal)일까요? : '))
print()
if decimal_num == int(decimal_num):
    decimal_num = int(decimal_num)
    print(f'{decimal_num} 는 정수입니다.')
else:
    print(f'{decimal_num} 는 소수입니다.')


prime_num = int(input('당신의 숫자는 소수(prime)일까요? : '))
isPrime = True
for i in range(2, round(prime_num / 2), 1):
    if prime_num % i == 0:
        isPrime = False
        print(f'{prime_num} 는 합성수입니다.')
        break       
if isPrime == True:
    print(f'{prime_num} 는 소수(prime number)입니다.')

li = [1, 2, 3, 4, 5]
sum = sum(li)
print(sum)
'''


'''1
# 주어진 리스트 [10, 20, 30, 40, 50]에서 모든 요소 중 최댓값을 찾으세요.
li = [10, 20, 30, 40, 50]
print(max(li))
'''

'''2
#빈 리스트를 생성하고, 사용자로부터 5개의 숫자를 입력받아 리스트에 추가한 후 리스트를 출력하세요.
li = []
size = 5

for i in range(1, size+1, 1):
# 인덱스
    li[i] = input(f'{i}번 째 숫자 입력: ')
# 삽입
    li.append(input('type : '))

print(li)
'''

'''
# 두 개의 리스트 [1, 2, 3]와 [4, 5, 6]을 합쳐서 하나의 리스트로 만들고 출력하세요.
small_list = [1, 2, 3]
large_list = [4, 5, 6]

join_list = []

join_list = [*small_list, *large_list]
print(join_list)
'''


''' have to
# 빈 딕셔너리를 생성하고, 'name' 키에 'kim'을 값으로 추가하세요.
user = {}
user['name'] = 'kim'
#have to
# 주어진 딕셔너리 {'name': 'kim', 'age': 25, 'city': 'seoul'}에서 'age' 키의 값을 출력하세요.
user = {'name': 'kim', 'age': 25, 'city': 'seoul'}
print("유저의 나이: ", user['age'])
'''

'''
# 주어진 딕셔너리 {'name': 'kim', 'age': 25, 'city': 'seoul'}에 'job' 키를
# 추가하고 값으로 'developer'로 설정한 후 딕셔너리를 출력하세요.
user = {'name': 'kim', 'age': 25, 'city': 'seoul'}
user['job'] = 'developer'
print(user)
'''


'''
# 주어진 딕셔너리 {'name': 'kim', 'age': 25, 'city': 'seoul'}에서 
# 'age' 키를 제거한 후 딕셔너리를 출력하세요.
user = {'name': 'kim', 'age': 25, 'city': 'seoul'}
del user['age']
print(user)
'''
'''
# 주어진 딕셔너리 {'name': 'kim', 'age': 25, 'city': 'seoul'}에서 모든 키만 출력하세요
user = {'name': 'kim', 'age': 25, 'city': 'seoul'}
form = user.keys()
print(form)
'''

'''
# 주어진 딕셔너리 {'name': 'kim', 'age': 25, 'city': 'seoul'}에서
# 모든 값들만 출력하세요.
user = {'name': 'kim', 'age': 25, 'city': 'seoul'}
info = user.values()
print(info)
'''
'''
# 텍스트 파일을 생성하고 "Hello, World!"라는 문자열을 파일에 쓰세요.
# (단, 파일명은 text_file.txt라고 한다.)
f = open("text_file.txt", "w")
f.write('Hello World')
f.close()
'''
'''
# 텍스트 파일을 생성하고 "Hello, World!"라는 문자열을 파일에 쓰세요. (단, 파일명은 text_file.txt라고 한다.)

## 새 파일 생성(쓰기 모드로 열기)
with open('text_file.txt', 'w') as f:
    f.write('Hello world')
with open('text_file.txt', 'r') as f:
    content = f.read()
    print(content)
'''
'''

text_file.txt 파일에 다음과 같은 시를 입력합니다.

죽는 날까지 하늘을 우러러
한 점 부끄럼이 없기를,
잎새에 이는 바람에도
나는 괴로워했다.
별을 노래하는 마음으로
모든 죽어 가는 것을 사랑해야지
그리고 나한테 주어진 길을
걸어가야겠다.

오늘 밤에도 별이 바람에 스치운다.

텍스트 파일을 열어서 각 줄의 길이를 출력하세요.
'''
'''
with open('text_file.txt', 'r') as f:
    # readline 호출할 때마다 파일의 현재 읽기 위치(cursor) 에서,
    #  한 줄을 문자열(str) 로 리턴
    while(True):      
        line_text = f.readline()
        line_no = len(line_text)
        if line_no == 0:
            break
        print(f"글자수: {line_no}, 문장 {line_text}", end='')
'''
'''
# 앞의 문제를 기반 코드로 각 줄의 길이를 출력하였다면 길이 중에 가장 긴 줄의 값을 출력하는 코드를 추가하여 작성하시오.
with open("text_file.txt", 'r') as f:
    line = 0
    while(True):
        cursor_line = len(f.readline())

        if cursor_line == 0:
            break          

        if line < cursor_line:
            print(f"line :{line}, cursor: {cursor_line}")
            line = cursor_line

        print("test: ", line)
print(f"가장 긴 라인의 글자 수는 {line} 입니다")

'''

############################################################
############################################################



''' 
다음과 같이 주어진 데이터가 있습니다.

x = [1, 2, 3, 4, 5]
y = [2, 3, 5, 7, 11]

선 그래프로 시각화하세요.

import matplotlib.pyplot as plt

x = [1, 2, 3, 4, 5]
y = [2, 3, 5, 7, 11]

plt.plot(x, y)
plt.show()
'''




'''
다음과 같이 주어진 데이터가 있습니다.

x = [1, 2, 3, 4, 5]
y = [2, 3, 5, 7, 11]

Bar 차트로 시각화하세요.
'''
'''
import matplotlib.pyplot as plt

x = [1, 2, 3, 4, 5]
y = [2, 3, 5, 7, 11]

plt.bar(x, y)
plt.show()

'''



'''
다음과 같이 주어진 데이터가 있습니다.

x = [1, 2, 3,im 4, 5]
y = [2, 3, 5, 7, 11]

산점도로 시각화하세요.


import matplotlib.pyplot as plt
x = [1, 2, 3, 4, 5]
y = [2, 3, 5, 7, 11]

plt.scatter(x, y)
plt.show()
'''
