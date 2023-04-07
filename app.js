// template_03yppsl

// service_3sp6jop


//x8MQHtCs_-2lY1q5o


function contact(event) {
    event.preventDefault();
const loading = document.querySelector('.modal_overlay-loading');
const success = document.querySelector('.modal_overlay-success');
loading.classList += " modal_overlay-visible"; 

setTimeout(() => {
    loading.classList.remove("modal_overlay-visible");
    success.classList  +=  " modal_overlay-visible";
    console.log('it worked 1' )
} , 1000)
}