// DOM(문서 객체 모델) 로드가 완료되면 스크립트 실행
document.addEventListener('DOMContentLoaded', () => {

    // 1. 판매할 음식 데이터 (배열과 객체)
    // image 경로를 'images/파일명'으로 수정합니다.
    const products = [
        { id: 1, name: '한우 모둠 구이', price: 85000, image: 'images/한우모둠.jpg' },
        { id: 2, name: '특선 초밥 세트', price: 22000, image: 'images/초밥.jpg' },
        { id: 3, name: '모둠 곱창 구이', price: 45000, image: 'images/곱창모둠.jpg' },
        { id: 4, name: '치즈 라볶이', price: 7000, image: 'images/라볶이.jpg' },
        { id: 5, name: '미나리 삼겹살', price: 14000, image: 'images/삼겹미나리.jpg' },
        { id: 6, name: '부채살 스테이크', price: 28000, image: 'images/부채살스테이크.jpg' },
        { id: 7, name: '방어/숭어 회', price: 45000, image: 'images/방어숭어회.jpg' },
        { id: 8, name: '양갈비 (숄더랙)', price: 32000, image: 'images/숄더렉.jpg' },
        { id: 9, name: '트러플 한우 짜장면', price: 18000, image: 'images/트러플자장면.jpg' },
        { id: 10, name: '비빔 만두', price: 8000, image: 'images/비빔만두.jpg' }
    ];

    // 2. 장바구니 상태 변수
    let cart = []; // 장바구니 배열
    let total = 0; // 총 가격

    // 3. HTML 요소를 변수에 할당
    const productGrid = document.getElementById('product-grid');
    const cartItemsList = document.getElementById('cart-items');
    const totalPriceEl = document.getElementById('total-price');

    // 4. 함수: 상품 목록을 화면에 표시
    function displayProducts() {
        // products 배열을 순회하며 각 상품에 대해 HTML 카드를 생성
        products.forEach(product => {
            // 상품 카드를 감쌀 div 요소 생성
            const productCard = document.createElement('div');
            productCard.className = 'product-card';

            // productCard의 내부 HTML을 설정 (템플릿 리터럴 사용)
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="price">${product.price.toLocaleString()}원</p>
                <button class="add-to-cart" data-id="${product.id}">장바구니 담기</button>
            `;

            // 완성된 카드를 그리드에 추가
            productGrid.appendChild(productCard);
        });
    }

    // 5. 함수: 장바구니와 총액 화면 업데이트
    function updateCartDisplay() {
        // 장바구니 목록 초기화
        cartItemsList.innerHTML = '';

        // 장바구니 배열(cart)을 순회하며 목록(li) 생성
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - ${item.price.toLocaleString()}원`;
            cartItemsList.appendChild(li);
        });

        // 총액 계산 (reduce 함수 사용)
        // cart 배열의 모든 item.price를 더함 (초기값 0)
        total = cart.reduce((sum, item) => sum + item.price, 0);

        // 총액을 화면에 표시 (toLocaleString()으로 천 단위 쉼표 추가)
        totalPriceEl.textContent = total.toLocaleString();
    }

    // 6. 함수: 장바구니에 상품 추가
    function addToCart(productId) {
        // products 배열에서 클릭된 상품의 id와 일치하는 상품 찾기
        const productToAdd = products.find(p => p.id === productId);

        if (productToAdd) {
            // 찾은 상품을 cart 배열에 추가
            cart.push(productToAdd);
            // 장바구니 화면 업데이트
            updateCartDisplay();
            // (선택) 사용자에게 알림
            console.log(`${productToAdd.name}이(가) 장바구니에 추가되었습니다.`);
            // alert(`${productToAdd.name}이(가) 장바구니에 추가되었습니다.`);
        }
    }

    // 7. 이벤트 리스너: '장바구니 담기' 버튼 클릭 처리 (이벤트 위임)
    // productGrid 안에서 클릭 이벤트가 발생하면 감지
    productGrid.addEventListener('click', (event) => {
        // 클릭된 요소가 'add-to-cart' 클래스를 가지고 있는지 확인
        if (event.target.classList.contains('add-to-cart')) {
            // 클릭된 버튼의 data-id 속성값을 숫자로 가져옴
            const productId = parseInt(event.target.dataset.id);
            // 장바구니 추가 함수 호출
            addToCart(productId);
        }
    });

    // 8. 스크립트 초기 실행
    displayProducts(); // 페이지 로드 시 상품 목록 표시

});
