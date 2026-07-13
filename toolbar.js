.site-logo-desktop {
            position: fixed;
            top: 24px;
            left: 28px;
            z-index: 2002;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            height: 50px;
            width: auto;
            /* 將外層改為 none，讓點擊可以穿透到下方的導覽列 */
            pointer-events: none; 
            opacity: 1;
            transform: translateY(0);
            transition:
                height 0.25s ease,
                top 0.25s ease,
                left 0.25s ease;
        }

        .site-logo-desktop img {
            display: block;
            height: 100%;
            width: auto;
            max-width: clamp(120px, 16vw, 250px);
            object-fit: contain;
            user-select: none;
            -webkit-user-drag: none;
            filter: drop-shadow(0 8px 22px rgba(0, 0, 0, 0.55));
            /* 將圖片本身設為 auto，確保 Logo 依然可以被點擊回首頁 */
            pointer-events: auto; 
        }
