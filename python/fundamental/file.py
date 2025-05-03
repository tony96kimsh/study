# 파일 오픈 : 파일객체 = open(파일명, 파일열기모드)
# 파일 읽고 쓰기 : 파일객체.read(), 파일객체.write(데이터)
# 파일 닫기 : 파일객체.close()

# fName = '/Users/gimseonghun/Glove/py/poem.txt'
# fName = './poem.txt'

# fp = open(fName, 'r', encoding = 'utf-8')

# print(fp.read())
'''
#한줄씩 읽는 readline 함수
strline = fp.readline()
print(strline)

#fp가 파일 포인터 역할로서 readline이 끝나면 다음 라인을 지정하고 있다.
strline = fp.readline()
print(strline)

strline = fp.readline()
print(strline)
'''

# while True :
#     strline = fp.readline()
#     if strline == '':
#         break
#     print(strline)

# fp.close()


# #텍스트 전체를 읽어들이기

# fName = './poem.txt'

# fp = open(fName, 'r', encoding = 'utf-8')
# # print(fp.readlines())

# list_str = fp.readlines()
# for str in list_str:
#     print(str)

# fp.close()

'''
# 파일 오픈 시, 에러케이스 추가
import os
fName = 'D://poem.txt'
# fName = 'D://poem.tx'#err case

if os.path.exists(fName):
    with open(fName, 'r', encoding='utf-8') as fp:
        list_str = fp.readlines()
        for str in list_str:
            print(str)
else:
    print('%s 파일이 존재하지 않습니다.' % fName)
'''

#파일객체.write(입력 문자열)
#파일객체.writelines(리스트 문자열)

fName = './test.txt'

with open(fName, 'w', encoding='utf-8') as fp:
    while True:
        instr = input('데이터입력 : ')
        if instr == '\q':
            break
        fp.writelines(instr + '\n')
