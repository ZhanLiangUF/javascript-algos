var maxArea = function(height) {
    let l = 0
    let r = height.length - 1
    let max = 0
    while(l < r) {
        max = Math.max(max,Math.min(height[l], height[r]) * (r-l))
        height[l] > height[r] ? r-- : l++
    }

    return max

};