# 리스트 이름 = [값1, 값2, 값3 ...]
# 파이썬은 간단함을 추구한다. 의미를 따지면 new list[...] 형태라고 말할 수 있다.

# ktx = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# sum = int()

# for i in range(0, 10, 1):
#     sum += ktx[i]

# print('\n합: ', sum)

# ktx.append(11)

'''
list<int> lst;
lst.push_back(10);
push_back 코드안에는 realloc이 존재하므로 리스트에 10이 추가된다.
'''


# sum = 0
# ktx = []
# for i in range(0, 100):
#     ktx.append(i+1)

# for i in range(0, 100):
#     sum += ktx[i]

# print(sum)



#리스트 초기화
# ktx = []
# ktx = [1,2,3,4,5]
# ktx = [3.14, 1.59]
# ktx = ['대한민국은', '민주공화국이다']
# ktx = [1, 2, '짝', 4, 5, '짝']

# 리스트 접근 범위 지정
# 리스트의 이름[시작인덱스: 끝인덱스 + 1]
# 생략 시 시작 혹은 끝
# list[:10] 0 ~ 9
#list [5:] 5부터 끝

# ktx = [1, 2, 3, 4, 5, 6, 7]
# print(ktx[0:2])
# print(ktx[0:5])
# print(ktx[2:6])


# 리스트간 연산
# 리스트 + 리스트
# 리스트 * 정수

# ktx = [10, 20, 30, 40, 50, 60]
# tgv = [40, 50, 60]

# print(ktx + tgv)
# print(ktx * 3)

# ktx[0] = 100
# del(ktx[1])
# print(ktx)

# ktx = [10, 20, 30, 40]
# print(ktx)

# # ktx.append(50)
# ktx.pop()
# print(ktx)

# ktx.reverse()
# print(ktx)

# ktx.sort()
# print(ktx)

# ktx.insert(1, '이건뭐야')
# print(ktx)

# len = len(ktx)
# print(len)



# 튜플

# tp1 = (10, 20, 30, 40)
# tp2 = ('짝', )

# print(tp1[1:3])
# print(tp1[1:])
# print(tp1[:3])

# print(tp1 + tp2)
# print(tp2 * 3)

# print(tp1)
# print(tp2)

# tp3 = (10,)
# tp4  = (10)
# tp5 = 10,

# print(tp3)
# print(tp4)
# print(tp5)

# '''
# 튜플은 추가할 수 없다.
# tp1.append(30)
# tp1[1] = 200
# '''

# sum =  tp1[0], tp2[0] + tp3[0]
# print(sum)

#튜플의 값 수정은 형변환
# mytp = ('나혼자', '파이썬')
# mylist = list(mytp)
# mylist[0] = '다함께'

# print(mytp)
# print(mylist)

# 딕셔너리

# 딕셔너리 변수 = {키1 : 값1, 키2 : 값2}

# product = {'컵라면' : 800, '삼각김밥': 1000, '비타500': 500}
# word = {'boy': '소년', 'girl' : '소녀', 'family' : '가족'}

# print(product)
# print(word)

# product['아이스크림'] = 2000
# product['닭다리'] = 3000

# print(product)

# del(product['비타500'])

# print(product)

# print(product.get('삼각김밥'))

# print(list(product.keys()))
# print(list(product.values()))

# #딕셔너리에서 해당 키가 있는지 확인하는 방법
# # 키 in 딕셔너리이름

# product = {'컵라면' : 800, '삼각김밥': 1000, '비타500': 500}

# item = input('상품을 입력하세요 : ')

# if (item in product):
#     print('해당 상품을 찾았습니다.')
# else:
#     print('상품이 없습니다.')

capital = {'네팔' : '카트만두',
           '대한민국' : '서울',
           '일본' : '도쿄',
           '중국' : '베이징',
           '이탈리아' : '로마',
           '러시아' : '모스크바',
           '독일' : '베를린',
           '미국' : '워싱턴',
           '프랑스' : '파리',
           '영국' : '런던'}
while(True):
    contry = input(str(list(capital.keys())) + "나라의 수도는 무엇일까요? : ")
    if contry in capital:
        print("\n\n", contry, '의 수도는 ', capital.get(contry), '입니다. \n')
    elif contry == 'exit':
        break
    else:
        print('그런 나라가 없습니다.')