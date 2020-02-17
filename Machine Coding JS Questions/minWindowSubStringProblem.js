// Minimum Window Substring Problem
// Find the smallest window in a string containing all characters of another string


function myFunction() {
    console.log(minWindowSubstring("ABBACBAA", "BAA"))
}

function minWindowSubstring(text, pattern) {
    let front = -1, start = 0, cnt = 0;
    let minWindow = Infinity;
    let partHash = {}, textHash = {};
    for(let i = 0; i < pattern.length; i++) {
        if(pattern[i] in partHash) {
            partHash[pattern[i]] += 1;
        } else {
            partHash[pattern[i]] = 1;
        }
    }

    for(let j = 0; j < text.length; j++) {
        if(!(text[j] in partHash)) {
            continue;
        } else {
            if(text[j] in textHash) {
                textHash[text[j]] += 1;
            } else {
                textHash[text[j]] = 1;
            }

            if(partHash[text[j]] >= textHash[text[j]]) {
                cnt++;
            }

            if(cnt === pattern.length) {
                while(!(text[start] in textHash) || (partHash[text[start]] < textHash[text[start]])) {
                    if(partHash[text[start]] < textHash[text[start]]) {
                        textHash[text[start]]--;
                    }
                    start++;
                }
                
                if(minWindow > j - start + 1) {
                    minWindow = j - start + 1;
                    front = start;
                }
            }
        }
    }

    return text.substr(front, minWindow);
}
