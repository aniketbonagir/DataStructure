'use strict';

/* global $, jQuery */

function solution() {
    let ele = document.querySelector(".comment-list");
    let tCount = ele.getAttribute("data-count");
    setLoading();
    let url = "https://www.example.com/comments?count="+tCount;
    fetch(url)
    .then((res) => res.json())
    .then((response) => {
        let commentListObj = response;
        removeLoading();
        addCommentToWall(commentListObj);
    })
    .catch((error) => {
        removeLoading();
    })
    
}

function addCommentToWall(List) {
    let str = "";
    for(let i =0; i< List.length; i++) {
         str += `<div class="comment-item">
            <div class="comment-item__username">${List[i].username}</div>
            <div class="comment-item__message">${List[i].message}</div>
        </div>`;
    }
    
    $( ".comment-list" ).append(str);
}

function addCommentToWall2(List) {
    let str = [];
    for(let i =0; i< List.length; i++) {
        var txt2 = $('<div class="comment-item__username"></div>').text(List[i].username);
        var txt3 = $('<div class="comment-item__message"></div>').text(List[i].message);
        str.push($('<div class="comment-item"></div>').append(txt2, txt3));
    }
    
   $( ".comment-list" ).append(str);
}

function setLoading() {
    $( ".comment-list" ).text( "Loading..." );
}

function removeLoading() {
    $( ".comment-list" ).text( "" );
}