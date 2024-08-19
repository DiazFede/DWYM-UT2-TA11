function duplicates(nums) {
    const counts = {};
    nums.forEach(num => counts[num] = (counts[num] || 0) + 1);
    const duplicateCount = Object.values(counts).filter(count => count > 1).length;
    console.log(duplicateCount);
}

duplicates([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]);