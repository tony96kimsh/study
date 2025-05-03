size = int(input("값 개수 입력 : "))
nums = []

for i in range(size):
    num = int(input(f"{i + 1}번째 정수 입력 : "))
    nums.append(num)

# left right
def QuickSort(left, right):
    if left >= right :
        return
    pivot = left
    low = left + 1
    high = right
    
    while low <= high:
        while low <= right and nums[low] <= nums[pivot] :
            low += 1
        while high >= left and nums[high] > nums[pivot] :
            high -= 1

        if low < high:
            nums[low], nums[high] = nums[high], nums[low]
    if pivot != high:
        nums[pivot], nums[high] = nums[high], nums[pivot]

    QuickSort(left, high - 1)
    QuickSort(high + 1, right)

#출력
QuickSort(0, size - 1)
print("정렬된 리스트:", nums)