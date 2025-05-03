'''
수업시간에 사용했던 seoul.csv 자료를 기반으로 한다.

가설: 최근 30년 동안 서울에서 열대야 현상(일 최저기온이 25도 이상인 날)이 증가했다.

설명: 기온이 상승하면서 여름철 밤에도 기온이 떨어지지 않는 열대야 현상이 증가했을 가능성이 있다. 
여름철 최저 기온 데이터를 통해 열대야 발생일수를 분석할 수 있다.

최근 50년 동안 서울의 여름철(6월~8월) 열대야 발생 빈도가 증가했는지 분석하라. 
열대야 발생일수를 연도별로 계산하고, 기온 상승과의 상관관계를 제시하라. (필요시 데이터 시각화)
'''
import csv
import matplotlib.pyplot as plt


with open('seoul.csv', 'r', encoding="UTF-8") as f:
    fp = csv.reader(f)
    header =  next(fp)
    data = list(fp)
    hot_night = 0
    hot_night_list = []
    years = []

    # 최저기온 리스트를 만들자    
    for year in range(1908, 2018):
        for row in data:
            row_date = list(map(float, row[0].split("-")))
            
            
            
            
            if row_date[0] == year and row_date[1] >= 6 and row_date[1] <= 8:
                # 불완전한 데이터 제외
                if row[3] == '':
                    hot_night = 0
                    break

                # 열대야 카운트
                temp = float(row[3])
                if temp >= 25:
                    hot_night += 1

        hot_night_list.append(hot_night)
        years.append(year)
        hot_night = 0

    for i in range(1, len(years)):
        print(f"{years[i]}년 열대야 횟수 {hot_night_list[i]}")

    plt.plot(years, hot_night_list)
    plt.show()

# 열대아 그래프를 확인할 때 많은 날과 적은 날이 번갈아 나타나지만, 
# 많은 날이 값이 최근들어 눈에 띄게 커지고 있다.