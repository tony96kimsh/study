# 1
# strval = input("좋아하는 과일: ")
# print(strval + '을 좋아합니다.')
 

# 2
# strid = input('아이디를 입력하세요:')
# strpw = input('비밀번호를 입력하세요:')

# print('입력한 id: ' + strid)
# print('입력한 id: ' + strpw)


# strnum1 = input('첫번째 숫자: ')
# strnum2 = input('두번째 숫자: ')
# print(strnum1 + strnum2)
# print(type(strnum1))

# print(int(strnum1) + int(strnum2))


# #정수
# width = 10
# height = 20
# print('사각형 넓이: ', width*height)

# radius = 5
# PI = 3.14
# area = radius * radius * PI
# print(f"원의 넓이{area}")

# print('A')
# print('B')

# print(ord('A'))
# print(ord('B'))

# print(chr('65'))
# print(chr('66'))

# print('A')
# print('B')

# print(ord('A'))
# print(ord('B'))

# print(chr('65'))
# print(chr('66'))

# #줄바꿈
# print('죽는 날까지 하늘을 우러러 \n한 점 부끄럼 없기를\n 잎새에 이는 바람에도\n 나는 괴로워했다')

# # 따옴표
# print("she's gone")
# print('she say "goodbye"')
# print("she say \"goodbye\"")
# print('tony\'s car')

# print(type(100)) # <class 'int'>
# print(type(3.14)) # <class 'float'>
# print(type('py')) # <class 'str'>

# value = 100
# value = 'Hello'
# fruit1 = '수박,'
# fruit2 = '포도,'
# fruit3 = '키위'

# myfavorite = '' #좋아하는 과일 목룍

# myfavorite += fruit1
# myfavorite += fruit2
# myfavorite += fruit3
# print(myfavorite)

# '''
# 어쩌구 저쩌구
# author: Tony
# date: 2025.4.16
# remark: 파이썬 기반 주석 테스트...블라블라
# '''

# """
# 어쩌구 저쩌구
# """

# money = int(input('돈을 넣어주세요'))
# count = int(input('몇 장 드릴까요?'))

# ticket = 1200

# money = money - (ticket * count)
# print('거스름돈', money)

# a = 10
# b = 11
# c = 12
# a = 10

# print(not(a < 10))
# print((a < b) and (a > c)) 
# print((a >= c) or (a == d))

# 3항 연산자
# (a > b) and A or B


# 삼항연산자
# money = int(input('돈을 넣어주세요'))
# count = int(input('몇 장 드릴까요?'))

# ticket = 1200
# money = money - (ticket * count)
# result = (money < 0) and "잔액이 부족합니다." or "거스름돈 : " + str(money)

# print(result)

#조건문
# a = 11
# if a > 10 :
#     print('a는 10보다 큽니다.')
#     print('콘솔에 출력이 됩니다.')
#     print('참 쉽죠?')
# else :
#     print()

# id = 'tony'
# pw = 1234

# strid = input('아이디를 입력하세요: ')
# strpw = input('비밀번호를 입력하세요')

# if id == strid:
#     if pw == strpw:
#         print('로그인 되었습니다.')
#     else :
#         print('패스워드 틀렸습니다')
# else:
#     print('아이디가 틀렸습니다.')

# subject = input('favorite subject : ')

# if subject == 'python' :
#     print('넌 좋아해 파이썬')
# elif subject == 'java':
#     print('넌 좋아해 java')
# else :
#     print('좋아하는 과목은 없습니다.')


# shortcut = int(input('단축키 입력하세요 : '))

# if  shortcut == 1:
#     print('엄마에게 전화중...')
# elif shortcut == 2:
#     print('아빠에게 전화중...')
# elif shortcut == 3:
#     print('친구에게 전화중...')
# else :
#     print('실행 단축키 없음')

# month = int(input("월을 입력하세요."))

# if month == 12 or month < 3 and month > 0:
#     print("봄")
# elif month > 2 and month < 6:
#     print("여름")
# elif month > 5 and month < 9:
#     print("가을")
# elif month > 8 and month < 12:
#     print("겨울")

# score = int(input("행복은 성적순, 점수를 입력 :"))
# if score > 90 and score < 101:
#     print("A 학점입니다.")
# elif score > 80 and score < 91:
#     print("B 학점입니다.")
# elif score > 70 and score < 81:
#     print("C 학점입니다.")
# elif score > 60 and score < 71:
#     print("D 학점입니다.")
# elif score >= 0 and score < 61:
#     print("F 학점입니다.")


# print("= = = = 자판기 메뉴 = = = =")
# print("1.음료 1000원" \
# "과자 2000원" \
# "껌 500원")
# print()

# cracker = 2000
# drink = 1000
# gum = 500
# money = int(input('insert coin'))
# # 금액에 따라 주문 가능한 메뉴 알려주기
# if money >= cracker:
#     print('과자 음료 껌 모두 구매 가능')
# elif money < cracker and money >= drink:
#     print('음료 껌 모두 구매 가능')
# elif money < drink and money >= gum:
#     print('껌 모두 구매 가능')
# else:
#     print("잔액 부족")

# idnum = int(input('나이 입력: '))

# if idnum >= 19:
#     pass
# else:
#     print('신분증 보여주세요')

