/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const map = new Map()

  for (let  i = 0; i < nums.length; i++) {
    const n = nums[i]
    const diff = target - n
    const diffIndex = map.get(diff)

    if (diffIndex !== undefined) {
      return [diffIndex, i]
    }

    map.set(n, i)
  }

  return []
}

console.log(twoSum([0, 4, 3, 0], 0))
