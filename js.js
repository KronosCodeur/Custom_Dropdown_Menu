const navigation = document.querySelector('.navigation');
document.querySelector('.toogle').onclick = function () {
    this.classList.toggle('active');
    navigation.classList.toggle('active')
}