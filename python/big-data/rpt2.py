'''
수업시간에 사용했던 seoul.csv 자료를 기반으로 한다.
가설: 최근 30년 동안(예: 1990년대 이후)
폭염일수(일 최고기온 33도 이상인 날)가 과거 30년보다 더 많아졌다.

설명: 기후 변화로 인해 서울에서 여름철 폭염 현상이 증가했을 가능성이 있다.
폭염일수를 연도별로 비교 분석하여
서울의 여름 기후가 얼마나 더워졌는지 확인할 수 있다.

1907년 이후 매년 서울에서 발생한 폭염일수를 계산하고,
폭염일수가 유의미하게 증가했는지 검증하라.(필요시 데이터 시각화)
'''
import matplotlib.pyplot as plt
import csv
hot_day  = 0
hot_day_list = []

years = []

with open('seoul.csv', 'r', encoding='UTF-8') as f:
    reader = csv.reader(f)
    header = next(reader)
    data = list(reader)


    for year in range(1908, 2018):
        for row in data:
            if row[0].startswith(str(year)):
                # 명확한 자료를 위해 정보 부족한 해 제외
                if row[4] == '':
                    hot_day = -1
                    break
                if float(row[4]) >= 33.0:
                    hot_day += 1
        # 리스트 추가 및 연도별 초기화
        if hot_day != -1:
            years.append(year)
            hot_day_list.append(hot_day)
            hot_day = 0

# 1년 단위로는 범위 차가 티가 안난다. 10년 단위로 잘라서 보자

decade_list = []
decade_year = []
end = 0
start = 0
term = 15
decade_count = 0.0
while start < len(hot_day_list):
    end = start + term
    if end > len(hot_day_list) - 1:
        end = len(hot_day_list) - 1

    unit = len(hot_day_list[start:end])
    decade_count = sum(hot_day_list[start:end]) / unit
    
    decade_list.append(decade_count)
    decade_year.append(f"{years[start]} ~ {years[end]}")

    start += term
    
# plt.plot(years, hot_day_list)
plt.plot(decade_year, decade_list)
plt.show()

# 주기를 매년, 10년 바꿔봤지만 명확하게 폭염 일자가 전체적으로 늘어나지는 않았다.