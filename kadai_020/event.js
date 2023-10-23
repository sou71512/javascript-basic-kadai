const pushBtn = document.getElementById('btn');

const btnText = document.getElementById('text');

pushBtn.addEventListener('click', () => {
    btnText.style = 'none'

    btnText.textContent = 'ボタンをクリックしました'
})