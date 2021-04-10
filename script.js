
/* AJAX를 이용한 사진 비동기처리 */
$.ajax({
    type:'GET',
    url:'../resources1/store.json'
}).done(function(데이터){
    for(let i=0; i<$('.card').length; i++){
        $('.card img').eq(i).attr('src', '../resources1/'+데이터.products[i].photo)
        $('.card-title').eq(i).html(데이터.products[i].product_name)
        $('.card-text').eq(i).html(데이터.products[i].brand_name)
        $('.card-body a').eq(i).html(데이터.products[i].price)
    }
})
/* 상품검색 */

let userValue
let cards = document.querySelectorAll('.card')
let cardTitles = document.querySelectorAll('.card-title')
document.querySelector('.search input').addEventListener('keyup', search)

function search(){
    userValue=document.querySelector('.search input').value
    console.log(userValue)
    //사용자값이 .card-title값과 같다면
    for(i=0;i<cards.length;i++){
   if(cardTitles[i].innerHTML.indexOf(userValue)>-1){
    cards[i].style.backgroundColor='yellow'
   }else{
    cards[i].style.backgroundColor='#fff'
   }
   if(userValue==''){
    cards[i].style.backgroundColor='#fff'
   }
}
}

/* 드래그앤드롭 */
$('.card').draggable({
    revert:true
})

$('.dropDown').droppable({
	drop: function (event, ui) {
		let item = ui.draggable
		let addedList = item.find('.card-title').text()
		let priceList = parseInt(item.find('.price').text())
		

		if ($('#dropped h4').text().indexOf(addedList) > -1) {
			alert('중복입니다')
		} else {
			$('#dropped').append('<h4 style="margin-top:20px">' + addedList + '</h4>')
			$('.sum').text(parseInt($('.sum').text())+priceList)
		}



	}
})