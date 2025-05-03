def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    
    pivot = arr[0]

    # arr[1:] → 배열의 첫 번째 요소를 제외한 부분 (즉, 피벗을 제외한 나머지)
	# [x for x in ... if 조건] → 조건에 맞는 값만 새로운 리스트로 생성
	# x <= pivot → 피벗보다 작거나 같은 값들만 모아서 left 리스트 생성
    left = [x for x in arr[1:] if x <= pivot]
    right = [x for x in arr[1:] if x > pivot]

    return quick_sort(left) + [pivot] + quick_sort(right)

#입력
arr = list(map(int, input("정수들을 공백으로 입력하세요: ").split()))

# 출력
print(f"입력값 : {arr}")
arr = quick_sort(arr)
print(f"퀵 정렬 후 : {arr}")

#입력: 5 3 8 1 2 -1