document.addEventListener("DOMContentLoaded", () => {
    let btnsStart = document.querySelectorAll('.btn-start');

    btnsStart.forEach(function(item, i) {
        item.onclick = function() {
            let card        = item.closest('.card');
            let goalTimeNum = item.closest('.card').querySelector('.progress-time-num-goal').innerText;
            let goalTimeStr = item.closest('.card').querySelector('.progress-time-str-goal').innerText;
            let progress    = item.closest('.card').querySelector('.progress');

            setWidthToElem(progress, goalTimeNum, goalTimeStr, card);

            console.log( calcSeconds(goalTimeNum, goalTimeStr) );
        };
    });

});

function calcSeconds(num, str) {
    switch (str) {
        case 'h':
            return num * 60 * 60;
        case 'm':
            return num * 60;
    }
}

function setWidthToElem(progressElem, num, str, cardElem) {
    let progressTime = 0;
    let progressPersent = 0;
    let timer = setInterval(() => {
        if (progressTime >= calcSeconds(num, str)) {
            cardElem.classList.remove('red');
            cardElem.classList.add("teal", "accent-4");
            clearTimeout(timer);
        }
        progressTime += 1;
        progressPersent = progressTime * 100 / calcSeconds(num, str);
        progressElem.style.width = `${progressPersent}%`;
    }, 1000);
}