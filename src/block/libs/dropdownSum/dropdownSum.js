

    const button = document.getElementById('dropdownSumBtn');
    //button.addEventListener('click', () => alert('Hello world'));
    const alertHello = function(){
        alert('hello')
    }
    const displayNone = displayNone;
    //button.addEventListener('click', alertHello);
    const dropdownContextId = document.getElementById('dropdownContext');
    
    
    //elem.classList.toggle("class")
    const toggleClassvvv = function(){
        dropdownContextId.classList.add("displayNone");
    } 
    button.addEventListener('click', toggleClassvvv);
    const addClassvvv = function(){
        dropdownContextId.classList.add("RedVVV");
    }; 
    addClassvvv();


