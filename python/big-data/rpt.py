'''
수업시간에 사용했던 seoul.csv 자료를 기반으로 합니다.
서울의 최고기온과 최저기온이 어떻게 변화하고 있는지 분석해보세요.
각 연도의 날짜중 가장 최고기온과 최저기온을 구해서 시각화하세요.

로직
1. 파일을 읽는다
2. 읽은 파일을 년도별로 쪼갠다
    - 시작 필드명의 레코드를 제외한다.
    - 첫해를 먼저 꺼낸다.
        * startswitch
        * if 'word' in row[0]
3. 년도별로 쪼갠 파일의 최고 기온 리스트 구한다.
4. 최고기온 리스트의 최고기온을 구한다.
5. 연도와 최고기온으로 그래프를 만든다.


날짜,지점,평균기온(℃),최저기온(℃),최고기온(℃)
'''
import matplotlib.pyplot as plt
import csv
import math

with open('seoul.csv', 'r', encoding='UTF-8') as f:
    reader = csv.reader(f)
    header = next(reader) 

    whether = list(reader)
    high = float()
    low = float()
    highest = float()
    lowerst = float()
    list_high = []
    list_low = []
    years = []


    # 첫해와 마지막해는 정보가 짤려있어서 제외
    for year in range(1908, 2018):
        high = -999 
        low = 999

        for row in whether:
            if row[0].startswith(str(year)):
                # 일일 기온이 빠진 년도는 대이터에서 제외
                if row[3] == '' or row[4] == '':
                    high = ''
                    low = ''
                    break

                # 최고기온
                if float(row[4]) > high:
                    high = float(row[4])
                
                #최저기온
                if float(row[3]) < low:
                    low = float(row[3])

        #각 연도별 최고 최저 리스트에 추가
        if high != '' or low != '':
            list_high.append(high)
            list_low.append(low)
            years.append(year)
            
for i in list_high:
    if i != '' and highest < i:
        highest = i


for i in list_low:
    if i != '' and lowerst > i:
        lowerst = i

print(f"역대 서울의 최고기온은 {highest}, 최저기온은 {lowerst} 입니다.")


start = int(math.floor(lowerst / 5) * 5)
end = int(math.ceil(highest / 5) * 5)

# y축 표시 기온 단위 5
plt.ylim(start, end)
plt.yticks(range(start, end + 1, 5))
plt.plot(years, list_low, color="blue")
plt.plot(years, list_high, color="red")
plt.show()
