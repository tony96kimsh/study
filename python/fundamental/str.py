# train_str = '칙칙폭폭'
# num_str = '123456789'

# newtrain = '-'.join(num_str)
# print(newtrain)

# newnum = ':'.join(num_str)
# print(newnum)

# ani_list = ['강아지', '고양이', '원숭이', '코끼리']
# time_list = ['123456789']

# newani = '-'.join(train_str)
# print(newtrain)

# newnum = ':'.join(num_str)
# print(newnum)

# newtime = ':'.join(time_list)
# print(newtime)


#리스트 = 문자열.splite(구분자)
# planet_str = '수성-금성-지구-화성-목성'
# time_str = '12사:30분55초'

# planet_list = planet_str.split('-')
# print(planet_list)

# planet_list = planet_str.split('-')
# print(planet_list)

# time_list = time_str.split(':')
# print(time_list)

#대소문자 변환하기

# 대문자 .upper(), 문자열.lower()

# eng = input('영문자를 입력하세요 :')

# upper_str = eng.upper()
# lower_str = eng.lower()

# print('%s' % upper_str)
# print('%s' % lower_str)


# 문자열 공백 없애기 stript

# 문자열.lstrip(), 문자열. rstrip(), 문자열.strip()

# string1 = ' 죽는 날까지 하늘을 우러러'
# string2 = '한점 부끄럼이 없기를 '
# string3 = ' 잎새에 이는 바람에도 '

# print('%s' % string1)
# print('%s' % string2)
# print('%s' % string3)
# print('\n')
# lstrip = string1.lstrip()
# rstrip = string1.rstrip()
# strip = string1.strip()

# print('%s' % string1)
# print('%s' % string2)
# print('%s' % string3)


# 문자열이 어떤 상태인지 ... 

#문자열.isdigit()
while True:
    string = input('문자열을 입력하세요')

    if string.isdigit():
        print('숫자로 구성되어 있습니다.')
    elif string.isalpha():
        print('대문자로 구성되어 있습니다.')
        if string.isupper():
            print('대문자로 구성되어 있습니다.')
        elif string.islower():
            print('소문자로 구성되어 있습니다.')
    elif string.isspace():
        print('공백으로 이뤄져있습니다.')
        break
#문자열.isdigit()
