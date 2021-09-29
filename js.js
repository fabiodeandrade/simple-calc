function calc(){
    return {

        // atribs here

        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),
        btnDel: document.querySelector('.btn-del'),
        btnEq: document.querySelector('.btn-eq'),
        

        // methods here

        start(){
            this.clickBtn();                        
        },

      

        clickBtn(){
            document.addEventListener('click', e => {
                const el = e.target;

                if(el.classList.contains('btn-num')) {
                    this.btnToDisplay(el.innerText);
                };

                if (el.classList.contains('btn-del')) {
                    this.delOne();
                };

                if (el.classList.contains('btn-clear')) {
                    this.cleanDisplay();
                };

                if (el.classList.contains('btn-eq')) {
                    this.operations();
                    
                };
                
            });
        },

        btnToDisplay(valor){
            this.display.value += valor;
        },
        
        delOne(){
            this.display.value = this.display.value.slice(0, -1);
        },

        
        cleanDisplay(){
            this.display.value = '';
        },

        operations(){
            let op = this.display.value;

            try {
                op = eval(op);

                if(!op) {
                    alert("Invalid operation");
                    this.display.value = '';
                    return;
                }

                this.display.value = op; 
            } catch(e) {
                alert("Invalid operation");
                return;
            }
        },

    };
}

const myCalc = calc();
myCalc.start();