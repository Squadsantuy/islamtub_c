const main_cs_btn = document.getElementById('main-cs-btn')

main_cs_btn.insertAdjacentHTML('afterbegin', `
  
          <button id="scrollToTop" class="scroll-to-top btn btn-sm btn-primary z-index-5 position-fixed"
        style="display: none; bottom: 60px; right:20px; z-index: 999;">↑</button>
      <a class="btn btn-primary btn-sm position-fixed text-light px-2 mt-2"
        style="bottom: 20px;right: 20px; z-index: 1000;" href="https://wa.me/6289637474994" data-bs-toggle="tooltip"
        data-bs-placement="right" title="Hubungi Kami">
        <svg viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1" class="icon-20" xmlns="http://www.w3.org/2000/svg"
          fill="#000000">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <defs>
              <style>
                .cls-1 {
                  fill: none;
                  stroke: #ffffff;
                  stroke-miterlimit: 10;
                  stroke-width: 1.91px;
                }
              </style>
            </defs>
            <rect class="cls-1" x="6.27" y="5.32" width="11.45" height="15.27" rx="5.73"></rect>
            <path class="cls-1"
              d="M17.73,9.14h1.91A2.86,2.86,0,0,1,22.5,12v1.91a2.86,2.86,0,0,1-2.86,2.86H17.73a0,0,0,0,1,0,0V9.14A0,0,0,0,1,17.73,9.14Z">
            </path>
            <path class="cls-1"
              d="M1.5,9.14H3.41A2.86,2.86,0,0,1,6.27,12v1.91a2.86,2.86,0,0,1-2.86,2.86H1.5a0,0,0,0,1,0,0V9.14A0,0,0,0,1,1.5,9.14Z"
              transform="translate(7.77 25.91) rotate(180)"></path>
            <path class="cls-1" d="M4.36,9.14h0A7.64,7.64,0,0,1,12,1.5h0a7.64,7.64,0,0,1,7.64,7.64h0"></path>
            <path class="cls-1" d="M19.64,16.77v1a4.78,4.78,0,0,1-4.78,4.77"></path>
          </g>
        </svg></a>
`)
