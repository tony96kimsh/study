# '''
# C
# int plus(int a, int b) {
#     return a + b 
# }
# JS
# function plus(a, b) return a + b
# '''
# # def plus (a, b):
# # 	return a + b
# # def minus (a, b):
# # 	return a - b
# # def divide (a, b):
# # 	return a / b
# # def multiple (a, b):
# # 	return a * b

# # ip1 = int(input('첫 번째 수: '))
# # ip2 = int(input('두 번째 수: '))


# # print(ip1, " plus ", ip2," = ", plus(ip1, ip2))
# # print(ip1, " minus ", ip2," = ", minus(ip1, ip2))
# # print(ip1, " devide ", ip2," = ", divide(ip1, ip2))
# # print(ip1, " multiple ", ip2," = ", multiple(ip1, ip2))

# # dan = int(input('원하는 구구단 수를 입력: '))
# # for val in range(1, 10, 1):
# #     print("%d * %d = %d" % (dan, val, dan * val))


# # def gugudan () :
# #     for val in range(1, 10, 1):
# #         print("%d * %d = %d" % (dan, val, dan * val))

# # dan = int(input('원하는 구구단 수를 입력: '))
# # gugudan(dan)

# id = 'tony'
# pw = "1234"

# userid = input('사용자 아이디: ')
# userpw = input('사용자 비번: ')

# def account(userid, userpw):
#     if id == userid:
#         if pw == userpw:
#             print('로그인 되었습니다.')
#         else:
#             print("비번이 틀렸습니다.")
#     else:
#         print("아이디가 틀렸습니다.")
    
# userid = input('사용자 아이디 : ')
# userpw = input('사용자 비밀번호 : ')

# account(userid, userpw)


'''
def coffee_machine (coffee):
    if coffee == '아메리카노' or coffee == '1':
        print('3. 아메리카노를 탄다')
    elif coffee == '카페라떼'  or coffee == '2':
        print('3. 카페라떼를 탄다.')
    elif coffee == '헤이즐넛라떼'  or coffee == '3':
        print('3. 헤이즐넛라떼를 탄다.')
    else:
        print('3. 아무거나 탄다')
for i in range(1, 4, 1) :
    coffee = input(f'안녕하세요! {i} 번째 손님 커피를 선택하세요(아메리카노, 카페라떼, 헤이즐넛라떼) : ')
    print()

    print('1. 물을 준비한다.')
    print('2. 컵을 준비한다.')

    coffee_machine (coffee)

    print('\n', coffee, '서비스 완료')
print('\n\n= = = 주문이 없습니다. = = =')
'''

#전역변수

hap = 100
num = 50


def sum(value):
    global hap
    hap = 20
    hap = hap + value
    print('hap : ', hap)
    print('num : ', num)

sum(10)
print('hap : ', hap)