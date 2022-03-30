// 两数之和
let nums = [2,7,11,15], target = 9;

// let twoSum = function (nums, target) {
//     let result = []
//     for(let i=0;i<nums.length;i++) {
//         for (let j=i+1; j<nums.length;j++) {
//             if(nums[i]+nums[j] == target) {
//                 result = result.concat([i, j])
//                 break
//             }
//         }
//     }
//     console.log(result)
//     return result
// }

let twoSum = function (nums, target) {
    let map = {}
    for (let i=0; i<nums.length; i++){
        let diff = target - nums[i]
        if(map[diff] != undefined) {
            return [map[diff], i]
        }
        map[nums[i]] = i
    }
 }

// let twoSum = function (nums, target) {
//     const map = new Map()
//     for(let i =0; i<nums.length;i++) {
//         const otherIndex = map.get(target - nums[i])
//         if(otherIndex != undefined) return [otherIndex, i]
//         map.set(nums[i], i)
//     }
// }

twoSum(nums, target)
