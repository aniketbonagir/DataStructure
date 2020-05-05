// Median of Two Sorted Arrays leetcode

function myFunction() {
    console.log(findMedianSortedArrays(
        [1,2],
        [3,4]
      ));


}


// Approach 1 works in all cases
var findMedianSortedArrays = function(nums1, nums2) {
  let n = nums1.length + nums2.length;
  let l = Math.floor((n+1)/2);
    let r= Math.floor((n+2)/2);
    
    return (getKthElement(nums1, 0, nums2, 0, l) + getKthElement(nums1, 0, nums2, 0, r)) /2;
};

function getKthElement(ar, aStart, br, bStart, k) {
    if(aStart > ar.length -1) return br[bStart + k -1];
    if(bStart > br.length -1) return ar[aStart + k -1];
    if(k ==1)
        return Math.min(ar[aStart], br[bStart]);
    
    let aMid = Infinity, bMid = Infinity;
    if(Math.floor(aStart + k / 2 )- 1 < ar.length)
        aMid = ar[aStart + Math.floor(k / 2 )- 1];
    if(Math.floor(bStart + k / 2 )- 1 < br.length)
        bMid = br[Math.floor(bStart + k / 2 )- 1];
    
    if(aMid < bMid) {
        return getKthElement(ar, Math.floor(aStart + k / 2 ), br, bStart, Math.round(k - k/2));
    } else {
        return getKthElement(ar, aStart, br,  Math.floor(bStart + k / 2), Math.round(k - k/2));
    }
}

// Approach 2 but doesnt work in few cases
var findMedianSortedArrays1 = function(nums1, nums2) {
  return findMedianSortedArraysHelper(nums1, 0 , nums1.length, nums2, 0 , nums2.length)
};

function findMedianSortedArraysHelper(a, aLow, aHigh, b, bLow, bHigh) {
  if((aHigh - aLow == 1) && (bHigh - bLow == 1)) {
    return (Math.max(a[aLow], b[bLow]) + Math.min(a[aHigh], b[bHigh])) / 2;
  }
  let aMid = aLow + Math.floor((aHigh-aLow)/2);
  let bMid = bLow + Math.floor((bHigh-bLow)/2);
  if(a[aMid] === b[bMid]){
    return ar[aMid];
  } else if(a[aMid] < b[bMid]) {
    aLow = aMid;
    bHigh = bMid;
  } else {
    bLow = bMid;
    aHigh = aMid;
  }

  return findMedianSortedArraysHelper(a, aLow, aHigh, b, bLow, bHigh);
}

function getMedian(ar) {
  if(ar.length % 2 == 0) {
    return (ar[ar.length / 2] + ar[(ar.length / 2) -1]) / 2
  }
}

function helper(ar, aLow, aHigh, br, bLow, bHigh) {
    let aMid = aLow + Math.floor((aHigh-aLow)/2);
    let bMid = bLow + Math.floor((bHigh-bLow)/2);
    if(ar[aMid] === br[bMid]){
        return ar[aMid];
    }        
    else if(aHigh - aLow + bHigh - bLow < 4) {
        return (Math.max(ar[aLow], br[bLow]) + Math.min(ar[aHigh], br[bHigh])) / 2;
    } else if(ar[aMid] > br[bMid]) {
        return helper(ar, aLow, aMid, br, bMid+1, bHigh)
    } else {
        return helper(ar, aMid+1, aHigh, br, bLow, bMid)
    }
}