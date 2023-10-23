const pushBtn = document.getElementById('btn');

const btnText = document.getElementById('text');

pushBtn.addEventListener('click', () => {
    setTimeout(() => {
    
        btnText.textContent = 'ボタンをクリックしました'
   
    }, 2000);
});