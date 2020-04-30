'use strict';

/* global CustomError, getLikedBrands, getTopBrandsForGender */

function solution(U, N) {
    return new Promise((resolve, reject) => {
        // Resolve the promise with the result
        let likeBrandsListPromise = getLikedBrands(U.id);
        let likeGenderBrandsListPromise = getTopBrandsForGender(U.gender);
        Promise.all([likeBrandsListPromise, likeGenderBrandsListPromise])
        .then((response) => {
            // console.log(response);
            // console.log("Nos->"+N);
            let likebrandslist = response[0];
            let likeGenderBrands = response[1];
            let finalObj = aggreagateBrandList(likebrandslist, likeGenderBrands, N);
            // console.log("finalObj"+JSON.stringify(finalObj));
            if(finalObj.status == "fail") {
                // console.log(CustomError);
                reject(new CustomError("Not enough data"));
            } else {
                resolve(finalObj.list)
            }
            
        }, (error) => {
            // console.log(CustomError);
            reject(new CustomError("Not enough data"))
        })
        .catch(error => {
            reject(new CustomError("Not enough data"))
        });
    });
}

function aggreagateBrandList(likeBrands, genderBrands, N) {
    let UniqueBrands = {};
    let finalArray = [];
    likeBrands.forEach((brand) => {
        UniqueBrands[brand.id] =  brand.name;
        finalArray.push(brand.name);
    });
    // console.log("First -->"+JSON.stringify(UniqueBrands));
    if(finalArray.length >= N) {
    	return {
    	    list : finalArray.slice(0, N),
    	    status: "ok"
    	}
    } else {
        let likeBrandLen = finalArray.length;
        let count = 0;
        
        for(let i = 0; i < genderBrands.length; i++) {
            
            if((likeBrandLen + count) > N) {
                break;
            } else {
                let gBrand = genderBrands[i];
                if(!UniqueBrands[gBrand.id]) {
                    UniqueBrands[gBrand.id] =  gBrand.name;
                    finalArray.push(gBrand.name);
                    count++;
                }
            }
        }
        if(finalArray.length >= N) {
        	return {
        	    list : finalArray.slice(0, N),
        	    status: "ok"
        	}
        } else {
            return {
                list: [],
                status: "fail"
            }
        }
    }
}
