//read me ! 

// 카운트업으로 만들 html 개체에 quokka-unt-up 이라는 클래스를 추가해주세요.
// 목표값은 태그 안에 숫자로 작성하셔야하며, 쉼표는 작성 불가. (숫자만 가능)


const quokka = document.getElementsByClassName('quokka-unt-up');

for (let i = 0 ; i < quokka.length ; i++) {
    makeCountup(quokka[i], Number(quokka[i].innerText), 2);
}



    function makeCountup(target,goal,duration,accFunc = 'ease',frame = 60) {
        const totalFrame = duration * frame;
    
    
        let progressFunc;
    
        try {
            if (accFunc === 'ease') {
                progressFunc = easeInOutCubic;
            } else if (typeof accFunc === 'function') {
                progressFunc = accFunc;
            } else if (accFunc === 'linear'){
                progressFunc = (x) => {
                    return x
                }
            } else {
                throw new Error ("잘못된 가속도 함수입니다.")
            }
    
            for (let i = 0 ; i <= totalFrame ; i++) {  
            const 진행도 = i/totalFrame; 
            setTimeout(() => {
                target.innerText = parseInt(goal * progressFunc(진행도))
            }, i/frame * 1000)
        }
    
    
        } catch (e) {
            console.log(e)
        }
    
    
        // 위에 그냥 함수로 쓰임.
        // function linear (x) {
        //     return x
        // }
    
        function easeInOutCubic(x) {
            return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
            }
    }
    



