document.addEventListener('DOMContentLoaded', () => {
    // 1. 주문서 폼 요소를 ID를 사용하여 선택합니다.
    const orderForm = document.getElementById('order-form');

    // 2. 폼 제출(submit) 이벤트 리스너를 추가합니다.
    orderForm.addEventListener('submit', function(event) {
        
        // 3. 폼이 실제로 제출되어 페이지가 새로고침되는 기본 동작을 막습니다. (가장 중요!)
        event.preventDefault(); 

        // 4. 입력된 이름, 주소, 전화번호 값을 가져옵니다.
        const name = document.getElementById('name').value;
        const address = document.getElementById('address').value;
        const phone = document.getElementById('phone').value;

        // 5. 정보를 담아 주문 완료 알림창을 띄웁니다.
        alert(`${name} 님! 주문이 성공적으로 완료되었습니다. 🥳\n\n[배송 정보]\n주소: ${address}\n전화번호: ${phone}\n\n쩝쩝박사 박우디를 믿고 이용해주셔서 감사합니다.`);

        // 6. (선택 사항) 주문 완료 후 메인 페이지로 돌아가려면 아래 주석을 해제합니다.
        // window.location.href = 'index.html'; 
    });
});
