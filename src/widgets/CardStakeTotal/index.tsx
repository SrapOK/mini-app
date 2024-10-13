import { Card, Progress, Button } from "@telegram-apps/telegram-ui";

import "./CardRewardsModule.css";

export const CardRewards = () => {
  return (
    <div className="flex justify-center flex-row border-t border-gray-800 mx-5 pt-5">
        <Card className="Card">
            <div className="Content">
                <div className="Top">
                    <div className="logo">
                    <svg width="29" height="32" viewBox="0 0 29 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.9647 0.0640049C13.9647 0.0994263 13.8981 0.155088 13.8111 0.18545C13.7087 0.225931 13.6575 0.276535 13.6575 0.347378C13.6575 0.4081 13.6268 0.453642 13.5807 0.453642C13.5397 0.453642 13.5039 0.478943 13.5039 0.509304C13.5039 0.539665 13.4681 0.595329 13.4271 0.635811C13.3862 0.681353 13.3503 0.757256 13.3503 0.807858C13.3503 0.858461 13.3145 0.909063 13.2735 0.929304C13.2326 0.944485 13.1967 1.01027 13.1967 1.07099C13.1967 1.13677 13.1609 1.23292 13.1199 1.28352C13.079 1.33918 13.0431 1.45557 13.0431 1.53653C13.0431 1.62255 13.0073 1.73894 12.9663 1.78954C12.9254 1.84521 12.8896 1.97677 12.8896 2.07798C12.8896 2.18424 12.864 2.27533 12.8384 2.28545C12.8076 2.29557 12.7667 2.43725 12.7513 2.60424C12.736 2.77123 12.6899 2.96858 12.654 3.04448C12.6131 3.12038 12.5824 3.28231 12.5824 3.40882C12.5824 3.53026 12.5568 3.64159 12.5261 3.65171C12.4902 3.66183 12.4493 3.85412 12.4288 4.07171C12.4032 4.29436 12.3622 4.55749 12.3315 4.65363C12.3008 4.74978 12.2752 4.97243 12.2752 5.14448C12.2752 5.31652 12.2496 5.46327 12.224 5.47339C12.1933 5.48351 12.1574 5.777 12.137 6.1464C12.1216 6.51074 12.0858 6.81941 12.0602 6.83459C12.0346 6.84977 11.9936 7.20399 11.9731 7.61893C11.9475 8.03387 11.9015 8.46399 11.8707 8.57531C11.84 8.68664 11.8144 9.0864 11.8144 9.46591C11.8144 9.92639 11.7939 10.1693 11.753 10.2098C11.6557 10.3059 11.5124 17.1524 11.6096 17.1524C11.6455 17.1524 11.6608 17.6534 11.6608 18.63C11.6608 19.6876 11.6813 20.2594 11.7376 20.6136C11.7786 20.8919 11.8144 21.4131 11.8144 21.7775C11.8195 22.2228 11.8451 22.5061 11.8912 22.6428C11.9373 22.7693 11.968 23.0476 11.968 23.3765C11.968 23.67 11.9936 23.9989 12.0243 24.1102C12.0551 24.2215 12.1011 24.6061 12.1216 24.9705C12.1472 25.3702 12.183 25.6333 12.2189 25.6435C12.2547 25.6536 12.2752 25.8155 12.2752 26.0483C12.2803 26.2912 12.3059 26.4885 12.352 26.5644C12.3981 26.6403 12.4237 26.8377 12.4288 27.0603C12.4288 27.3235 12.4493 27.455 12.5056 27.5056C12.5517 27.5512 12.5824 27.6777 12.5824 27.8092C12.5824 27.9459 12.6131 28.0724 12.6592 28.1129C12.7052 28.1635 12.736 28.2849 12.736 28.4317C12.736 28.5632 12.7718 28.715 12.8128 28.7707C12.8537 28.8213 12.8896 28.963 12.8896 29.0743C12.8896 29.216 12.9152 29.297 12.9663 29.3172C13.0175 29.3374 13.0431 29.4133 13.0431 29.5651C13.0431 29.7018 13.0739 29.8131 13.1199 29.8536C13.1609 29.889 13.1967 29.97 13.1967 30.0408C13.1967 30.1066 13.2326 30.1724 13.2735 30.1876C13.3145 30.2078 13.3503 30.2736 13.3503 30.3394C13.3503 30.4102 13.381 30.476 13.422 30.4912C13.463 30.5063 13.509 30.5721 13.5244 30.643C13.5449 30.7088 13.5807 30.7644 13.6063 30.7644C13.637 30.7644 13.6575 30.81 13.6575 30.8656C13.6575 30.9213 13.6882 30.9668 13.7292 30.9668C13.7701 30.9668 13.8111 30.9921 13.8213 31.0225C13.8316 31.0529 13.9596 31.0933 14.0978 31.1035C14.3435 31.1288 14.3691 31.1186 14.5483 30.9466C14.6507 30.8454 14.7326 30.7391 14.7326 30.7189C14.7326 30.6936 14.7685 30.6632 14.8094 30.643C14.8504 30.6278 14.8862 30.557 14.8862 30.4861C14.8862 30.4051 14.9169 30.3596 14.963 30.3596C15.0142 30.3596 15.0398 30.309 15.0398 30.2179C15.0398 30.142 15.0756 30.0357 15.1166 29.9851C15.1576 29.9295 15.1934 29.8283 15.1934 29.7574C15.1934 29.6866 15.2292 29.5803 15.2702 29.5297C15.3111 29.4741 15.347 29.3678 15.347 29.297C15.347 29.2261 15.3828 29.1198 15.4238 29.0642C15.4647 29.0136 15.5006 28.882 15.5006 28.7758C15.5006 28.6695 15.5364 28.548 15.5774 28.5076C15.6234 28.462 15.6542 28.3355 15.6542 28.2141C15.6542 28.0926 15.69 27.8953 15.731 27.7789C15.7719 27.6625 15.8077 27.45 15.8077 27.3133C15.8077 27.1767 15.8436 26.9844 15.8845 26.8832C15.9255 26.7871 15.9613 26.5847 15.9613 26.4379C15.9613 26.2912 15.9972 26.0736 16.0381 25.9572C16.0791 25.8408 16.1149 25.5979 16.1149 25.4259C16.1149 25.2538 16.1508 25.0109 16.1917 24.8946C16.2378 24.763 16.2685 24.4999 16.2685 24.2064C16.2685 23.9483 16.2941 23.675 16.3248 23.5941C16.3555 23.5182 16.4016 23.0982 16.4221 22.6681C16.4477 22.2379 16.4887 21.6459 16.5194 21.3524C16.6832 19.6724 16.6832 11.829 16.5194 9.99218C16.4887 9.6582 16.4477 9.00543 16.4272 8.53989C16.4067 8.07435 16.3658 7.66953 16.3351 7.62905C16.3044 7.59363 16.2685 7.26977 16.2583 6.91556C16.2429 6.55628 16.2122 6.24761 16.1866 6.23243C16.1559 6.21218 16.1303 6.02496 16.1252 5.81749C16.1098 5.37725 16.074 5.15966 16.0125 5.15966C15.9921 5.15966 15.9613 4.96737 15.9562 4.72954C15.9409 4.47653 15.9101 4.27918 15.8794 4.25894C15.8436 4.2387 15.8129 4.04135 15.7975 3.79845C15.7873 3.52014 15.7566 3.36328 15.7156 3.34809C15.6746 3.33797 15.6542 3.22665 15.6542 3.03942C15.6542 2.86231 15.6234 2.7105 15.5774 2.64978C15.5364 2.59918 15.5006 2.46761 15.5006 2.36641C15.5006 2.26521 15.4699 2.15894 15.4391 2.1387C15.3726 2.09822 15.3675 2.08304 15.3572 1.8199C15.3521 1.72376 15.3214 1.6681 15.2702 1.6681C15.2139 1.6681 15.1934 1.61243 15.1934 1.46569C15.1934 1.32906 15.1678 1.2481 15.1166 1.23292C15.0756 1.21268 15.0398 1.14183 15.0398 1.06593C15.0347 0.995087 14.9784 0.843281 14.9118 0.731955C14.8401 0.62063 14.7685 0.494123 14.748 0.453642C14.707 0.357498 14.5483 0.20063 14.3794 0.0893059C14.2258 -0.0169601 13.9647 -0.0321407 13.9647 0.0640049Z" fill="white"/>
                        <path d="M8.24796 1.48775C8.24796 1.50806 8.19955 1.54866 8.14145 1.57404C8.08335 1.60449 8.01557 1.67048 7.98652 1.72631C7.95747 1.78214 7.90421 1.84813 7.87516 1.86843C7.84127 1.88873 7.81223 1.95979 7.81223 2.0207C7.81223 2.08161 7.77833 2.17805 7.7396 2.2288C7.70087 2.28464 7.66698 2.38615 7.66698 2.45214C7.66698 2.51812 7.63309 2.60441 7.59436 2.64501C7.55563 2.69069 7.52174 2.78713 7.52174 2.86834C7.52174 2.94448 7.48784 3.07644 7.44911 3.15258C7.41038 3.23379 7.37649 3.40129 7.37649 3.52818C7.37649 3.66015 7.35228 3.78704 7.32323 3.8175C7.29418 3.84795 7.26029 4.06113 7.24577 4.29461C7.23125 4.52809 7.19735 4.75142 7.16831 4.78695C7.1441 4.82248 7.11021 5.02551 7.09568 5.24376C7.086 5.45694 7.05211 5.68027 7.02306 5.73611C6.99401 5.79194 6.95528 6.06603 6.93591 6.34519C6.91655 6.62435 6.87782 6.94412 6.84877 7.05579C6.81972 7.16745 6.79551 7.50245 6.79551 7.80191C6.79551 8.10138 6.7713 8.40592 6.74225 8.48713C6.70836 8.56834 6.66479 9.17743 6.64542 9.89818C6.62122 10.5935 6.58248 11.4615 6.55828 11.8269C6.50018 12.7862 6.49534 17.9381 6.55344 18.4507C6.58248 18.6893 6.62122 19.5674 6.64542 20.4049C6.67447 21.4657 6.70352 21.9276 6.74225 21.9428C6.77614 21.9529 6.79551 22.156 6.79551 22.5519C6.80035 22.9376 6.82456 23.2168 6.86813 23.3488C6.91171 23.4706 6.94076 23.7447 6.94076 24.0391C6.94076 24.3842 6.96012 24.5517 7.01338 24.6228C7.05695 24.6837 7.08116 24.841 7.086 25.0643C7.086 25.2521 7.11989 25.4907 7.15862 25.5922C7.19735 25.6887 7.23125 25.912 7.23125 26.0846C7.23609 26.2571 7.26514 26.45 7.30387 26.5211C7.3426 26.5921 7.37165 26.7545 7.37649 26.8814C7.37649 27.0083 7.41038 27.1555 7.44911 27.2114C7.48784 27.2621 7.52174 27.4042 7.52174 27.5159C7.52174 27.6377 7.55078 27.7545 7.59436 27.79C7.63309 27.8255 7.66698 27.9067 7.66698 27.9727C7.66698 28.0336 7.70087 28.1199 7.7396 28.1656C7.77833 28.2062 7.81223 28.2976 7.81223 28.3686C7.81223 28.4498 7.84127 28.5006 7.88485 28.5006C7.92358 28.5006 7.95747 28.5412 7.95747 28.5869C7.96231 28.8356 8.34963 29.0488 8.50456 28.8863C8.54329 28.8407 8.60139 28.8051 8.6256 28.8051C8.6498 28.8051 8.6837 28.7645 8.70306 28.7138C8.71759 28.6681 8.74663 28.5919 8.77084 28.5513C8.90156 28.3077 8.97418 28.125 8.97418 28.0133C8.97418 27.9372 9.00323 27.8915 9.04681 27.8915C9.10006 27.8915 9.11943 27.8306 9.11943 27.6682C9.11943 27.5464 9.14364 27.4347 9.17269 27.4245C9.20174 27.4144 9.24047 27.257 9.26468 27.0743C9.28404 26.8916 9.32761 26.6936 9.35666 26.6327C9.38571 26.5769 9.40992 26.4043 9.40992 26.2521C9.40992 26.0998 9.44381 25.8765 9.48254 25.7597C9.52127 25.643 9.55517 25.4247 9.55517 25.2826C9.56001 25.1405 9.58906 24.9679 9.62779 24.8968C9.67136 24.8207 9.69557 24.6278 9.70041 24.4147C9.70041 24.2167 9.7343 23.8665 9.77303 23.6279C9.81176 23.3894 9.84565 22.9579 9.84565 22.6635C9.84565 22.3438 9.86502 22.1052 9.89891 22.0697C9.92796 22.0392 9.96669 21.5875 9.99574 20.9581C10.0199 20.3744 10.0587 19.6892 10.0829 19.4405C10.1458 18.8162 10.1458 11.8016 10.0829 11.1671C10.0587 10.8879 10.0151 10.1672 9.99574 9.56825C9.97153 8.96932 9.92796 8.411 9.89891 8.33486C9.86986 8.25365 9.84565 7.94911 9.84081 7.64964C9.84081 7.35018 9.81661 6.9898 9.7924 6.85276C9.76335 6.71064 9.72462 6.36042 9.70525 6.07618C9.68589 5.78686 9.64715 5.53308 9.6181 5.51785C9.58906 5.49755 9.56001 5.29452 9.55032 5.06104C9.5358 4.82248 9.50675 4.62453 9.4777 4.60423C9.44381 4.58393 9.41476 4.3809 9.40024 4.14234C9.39055 3.86318 9.36151 3.70583 9.32277 3.6906C9.28888 3.68045 9.26468 3.57386 9.26468 3.40129C9.26468 3.22872 9.24047 3.11197 9.19205 3.07137C9.15332 3.03584 9.11943 2.92417 9.11943 2.82266C9.11943 2.71607 9.08554 2.58918 9.04681 2.53335C9.00808 2.48259 8.97418 2.376 8.97418 2.29479C8.97418 2.2085 8.94998 2.15775 8.90156 2.15775C8.85315 2.15775 8.82894 2.10699 8.82894 2.00547C8.82894 1.90396 8.80473 1.8532 8.75632 1.8532C8.71759 1.8532 8.6837 1.8126 8.6837 1.76184C8.6837 1.6451 8.59171 1.54866 8.48035 1.54866C8.43194 1.54866 8.39321 1.52328 8.39321 1.49791C8.39321 1.46745 8.35931 1.44715 8.32058 1.44715C8.28185 1.44715 8.24796 1.46238 8.24796 1.48775Z" fill="white"/>
                        <path d="M19.7511 1.49788C19.7511 1.52324 19.7173 1.54861 19.6787 1.54861C19.64 1.54861 19.6062 1.57905 19.6062 1.61963C19.6062 1.66022 19.5724 1.7008 19.5338 1.72109C19.4951 1.73631 19.4613 1.80733 19.4613 1.87836C19.4613 1.95953 19.4324 2.00518 19.3889 2.00518C19.3406 2.00518 19.3164 2.05591 19.3164 2.14723C19.3164 2.2284 19.2826 2.33493 19.244 2.39074C19.2053 2.44147 19.1715 2.54293 19.1715 2.61395C19.1715 2.68497 19.1377 2.78643 19.0991 2.83716C19.0604 2.89297 19.0266 3.00965 19.0266 3.10096C19.0266 3.1872 18.9928 3.32925 18.9542 3.40535C18.9155 3.48652 18.8817 3.64378 18.8817 3.75539C18.8817 3.86699 18.8479 4.04962 18.8093 4.16123C18.7706 4.27284 18.7417 4.50113 18.7368 4.66854C18.7368 4.83595 18.703 5.06423 18.6644 5.17584C18.6257 5.28745 18.5968 5.52588 18.5919 5.70851C18.5919 5.89114 18.5581 6.14987 18.5195 6.28684C18.476 6.42888 18.447 6.73327 18.447 7.00214C18.447 7.30145 18.4277 7.48408 18.3891 7.52466C18.3456 7.57032 18.3214 7.83412 18.307 8.36172C18.2973 8.798 18.2683 9.14804 18.2442 9.16326C18.1765 9.20892 18.0896 12.41 18.0896 14.8907C18.0848 17.3765 18.1765 20.9023 18.249 21.0951C18.278 21.1762 18.3021 21.5364 18.3021 21.9068C18.307 22.3938 18.3263 22.6119 18.3746 22.7032C18.4229 22.7895 18.4422 23.0025 18.447 23.4033C18.447 23.7939 18.4712 24.0324 18.5195 24.1592C18.5581 24.2607 18.5919 24.494 18.5919 24.6919C18.5919 24.8897 18.6209 25.118 18.6595 25.2042C18.6982 25.2956 18.7368 25.5543 18.7513 25.7876C18.761 26.0159 18.7948 26.2341 18.8238 26.2645C18.8576 26.3 18.8817 26.4421 18.8817 26.5841C18.8866 26.7211 18.9155 26.8936 18.9542 26.9646C18.9928 27.0356 19.0218 27.1878 19.0266 27.3096C19.0266 27.4516 19.0508 27.5378 19.0991 27.5531C19.1377 27.5734 19.1715 27.6444 19.1715 27.7205C19.1715 27.7966 19.2053 27.9031 19.244 27.9589C19.2826 28.0096 19.3164 28.1213 19.3164 28.1973C19.3164 28.2734 19.3502 28.3495 19.3889 28.3648C19.4275 28.385 19.4613 28.451 19.4613 28.5169C19.4613 28.593 19.4903 28.6387 19.5338 28.6387C19.5724 28.6387 19.6062 28.6691 19.6062 28.7097C19.6062 28.7909 19.8091 28.9431 19.9202 28.9431C20.0023 28.9431 20.1858 28.7655 20.1858 28.6894C20.1858 28.659 20.2196 28.6387 20.2583 28.6387C20.2969 28.6387 20.3307 28.5981 20.3307 28.5423C20.3307 28.4916 20.3646 28.4206 20.4032 28.385C20.4418 28.3495 20.4756 28.2582 20.4756 28.1821C20.4756 28.101 20.5095 28.0299 20.5481 28.0096C20.5916 27.9944 20.6205 27.9183 20.6205 27.8321C20.6205 27.7509 20.6544 27.619 20.693 27.5429C20.7316 27.4618 20.7654 27.3045 20.7654 27.1929C20.7654 27.0813 20.7993 26.9443 20.8379 26.8936C20.8814 26.8327 20.9103 26.6805 20.9103 26.5283C20.9103 26.3863 20.9442 26.1986 20.9828 26.1225C21.0263 26.0362 21.0552 25.8384 21.0552 25.6355C21.0552 25.4224 21.0746 25.2905 21.1132 25.2803C21.147 25.2651 21.1808 25.0774 21.2001 24.7781C21.2146 24.5143 21.2484 24.2657 21.2726 24.2251C21.2967 24.1846 21.3306 23.8092 21.3499 23.3881C21.3692 22.9721 21.4078 22.5257 21.4368 22.3988C21.461 22.272 21.4851 21.8459 21.49 21.4451C21.49 21.0494 21.5093 20.7247 21.5334 20.7247C21.5576 20.7247 21.5914 20.5117 21.6059 20.2529C21.6349 19.7558 21.7073 16.1742 21.7073 15.1951C21.7073 13.8812 21.6204 10.4772 21.5769 10.1474C21.5527 9.94958 21.5141 9.37125 21.49 8.8538C21.4706 8.33635 21.4272 7.83412 21.3982 7.73773C21.3692 7.64134 21.345 7.35725 21.345 7.1036C21.3402 6.85502 21.3161 6.54556 21.2919 6.41874C21.2629 6.29191 21.2243 5.98246 21.205 5.73388C21.1857 5.48022 21.1422 5.21135 21.1132 5.13526C21.0794 5.05409 21.0552 4.8816 21.0552 4.74463C21.0552 4.60766 21.0311 4.43517 21.0021 4.35401C20.9731 4.27791 20.9297 4.06484 20.9103 3.88221C20.8862 3.70466 20.8476 3.54739 20.8186 3.53724C20.7896 3.5271 20.7654 3.40535 20.7654 3.2633C20.7654 3.12633 20.7365 2.93863 20.6978 2.85238C20.6592 2.76107 20.6157 2.6038 20.5964 2.49727C20.5819 2.39581 20.5481 2.30957 20.5239 2.30957C20.495 2.30957 20.4756 2.25376 20.4756 2.18274C20.4756 2.11172 20.4418 2.0407 20.4032 2.02548C20.3646 2.00518 20.3307 1.95445 20.3307 1.90372C20.3307 1.77182 20.0071 1.44715 19.8719 1.44715C19.8043 1.44715 19.7511 1.46744 19.7511 1.49788Z" fill="white"/>
                        <path d="M4.18565 4.41546C4.18565 4.45552 4.14801 4.49057 4.105 4.49057C4.06198 4.49057 4.02435 4.52061 4.02435 4.56067C4.02435 4.59572 3.98671 4.65581 3.9437 4.69086C3.90068 4.7259 3.86304 4.80602 3.86304 4.87111C3.86304 4.9312 3.82541 5.01632 3.78239 5.06138C3.73938 5.10144 3.70174 5.22161 3.70174 5.33177C3.70174 5.44193 3.67486 5.54207 3.63722 5.55208C3.59959 5.5671 3.56733 5.73735 3.5512 5.99772C3.54044 6.22805 3.50281 6.43334 3.47592 6.44836C3.44366 6.46839 3.4114 6.67869 3.39527 6.92404C3.37914 7.16939 3.33613 7.41474 3.30925 7.46982C3.27699 7.5249 3.23397 7.84035 3.21246 8.17082C3.19096 8.50129 3.14794 8.87182 3.11568 8.997C3.0888 9.12218 3.06192 9.48269 3.05654 9.79814C3.05654 10.1136 3.0189 10.5642 2.97589 10.7996C2.90599 11.1551 2.88986 11.9162 2.89524 15.5513C2.89524 19.7123 2.90599 20.3332 3.00815 20.3933C3.03503 20.4083 3.05654 20.7838 3.05654 21.2294C3.06192 21.8053 3.08342 22.1007 3.13719 22.2409C3.18558 22.3611 3.21784 22.6314 3.21784 22.9319C3.21784 23.2273 3.24472 23.4676 3.28236 23.5327C3.32 23.5928 3.36301 23.8782 3.38452 24.1636C3.40603 24.4941 3.43829 24.6944 3.47592 24.7094C3.51356 24.7194 3.54044 24.8446 3.54044 25.0098C3.54582 25.1801 3.57808 25.3353 3.62109 25.3904C3.66948 25.4505 3.70174 25.6007 3.70174 25.7509C3.70174 25.9211 3.72863 26.0313 3.78239 26.0714C3.82541 26.1064 3.86304 26.1865 3.86304 26.2566C3.86304 26.3217 3.90068 26.3868 3.9437 26.4018C3.98671 26.4219 4.02435 26.4819 4.02435 26.542C4.02435 26.6422 4.20178 26.7724 4.34157 26.7724C4.4975 26.7724 4.83085 26.3067 4.83085 26.0914C4.83085 26.0313 4.85773 25.9712 4.88999 25.9612C4.92225 25.9512 4.96527 25.811 4.98677 25.6457C5.00828 25.4805 5.05129 25.2952 5.08893 25.2352C5.12657 25.1751 5.15345 24.9848 5.15345 24.8096C5.15883 24.6293 5.19109 24.439 5.2341 24.3689C5.28249 24.2888 5.30938 24.0935 5.31475 23.8332C5.31475 23.5528 5.33626 23.4176 5.37927 23.4076C5.42766 23.3925 5.45455 23.1722 5.47605 22.6615C5.49218 22.2659 5.52444 21.9104 5.55133 21.8704C5.57821 21.8353 5.62122 21.3046 5.64273 20.6937C5.66961 20.0878 5.71263 19.4068 5.73951 19.1865C5.80403 18.6758 5.80403 12.6071 5.74489 12.0764C5.718 11.8561 5.66961 11.1501 5.64273 10.5142C5.61585 9.87325 5.57283 9.32246 5.55133 9.29242C5.52982 9.26238 5.49756 8.93691 5.47605 8.56638C5.45455 8.20086 5.41691 7.87039 5.38465 7.83534C5.35239 7.80029 5.31475 7.54993 5.304 7.27955C5.29325 7.00916 5.25561 6.77383 5.22873 6.7538C5.19647 6.73377 5.16421 6.58356 5.15883 6.41832C5.14808 6.04779 5.10506 5.8425 5.04054 5.8425C5.01366 5.8425 4.99215 5.71732 4.99215 5.5671C4.99215 5.36682 4.97064 5.2817 4.9115 5.26167C4.85773 5.24164 4.83085 5.16153 4.83085 5.01131C4.83085 4.85108 4.80934 4.791 4.7502 4.791C4.70181 4.791 4.66955 4.74593 4.66955 4.67583C4.66955 4.61575 4.61041 4.5156 4.54051 4.45051C4.39534 4.32533 4.18565 4.3003 4.18565 4.41546Z" fill="white"/>
                        <path d="M24.4109 4.43158C24.3584 4.48165 24.3216 4.54674 24.3216 4.57678C24.3216 4.60682 24.2848 4.64187 24.2428 4.6619C24.2008 4.67692 24.164 4.74201 24.164 4.8071C24.164 4.87219 24.1272 4.96732 24.0852 5.0224C24.0431 5.07247 24.0064 5.20765 24.0064 5.3178C24.0064 5.42796 23.9696 5.56314 23.9276 5.61321C23.8855 5.66829 23.8488 5.80347 23.8488 5.91362C23.8488 6.02878 23.812 6.22906 23.7699 6.36424C23.7279 6.49943 23.6911 6.75478 23.6911 6.93002C23.6911 7.10526 23.6649 7.30054 23.6333 7.35561C23.6018 7.41569 23.5545 7.73613 23.5335 8.06659C23.5125 8.40205 23.4652 8.73751 23.4337 8.81262C23.4022 8.89273 23.3759 9.2382 23.3759 9.58869C23.3759 9.93917 23.3496 10.3047 23.3181 10.3998C23.2446 10.6251 23.1447 13.8496 23.1552 15.8323C23.1658 18.1204 23.2393 20.4136 23.3129 20.6139C23.3496 20.719 23.3759 21.0745 23.3759 21.4951C23.3759 22.0108 23.3969 22.2511 23.4547 22.3813C23.5073 22.5015 23.5335 22.7268 23.5335 23.0322C23.5335 23.3226 23.565 23.588 23.6123 23.7181C23.6544 23.8333 23.6911 24.0736 23.6911 24.2439C23.6911 24.4141 23.7279 24.6544 23.7699 24.7696C23.812 24.8848 23.8488 25.075 23.8488 25.1902C23.854 25.3003 23.8855 25.4505 23.9276 25.5206C23.9696 25.5907 24.0011 25.7259 24.0064 25.8261C24.0064 25.9262 24.0431 26.0363 24.0852 26.0714C24.1272 26.1064 24.164 26.1966 24.164 26.2717C24.164 26.3518 24.2008 26.4219 24.2428 26.4419C24.2848 26.4569 24.3216 26.517 24.3216 26.5721C24.3216 26.6622 24.4897 26.7724 24.6316 26.7724C24.7209 26.7724 24.9521 26.522 24.9521 26.4219C24.9521 26.3668 24.9888 26.3067 25.0309 26.2917C25.0834 26.2717 25.1097 26.1916 25.1097 26.0464C25.1097 25.9262 25.1359 25.821 25.1675 25.811C25.199 25.801 25.241 25.6408 25.2673 25.4505C25.2936 25.2603 25.3356 25.085 25.3671 25.055C25.3986 25.0249 25.4249 24.8497 25.4249 24.6645C25.4249 24.4441 25.4459 24.319 25.4879 24.309C25.53 24.2939 25.5668 24.1087 25.5878 23.7882C25.6088 23.5179 25.6508 23.2024 25.6823 23.0923C25.7139 22.9821 25.7401 22.6317 25.7401 22.3162C25.7401 22.0008 25.7664 21.6603 25.7979 21.5652C25.8294 21.4701 25.8767 20.8943 25.903 20.2884C25.9293 19.6826 25.9713 18.9165 25.9976 18.5861C26.0659 17.79 26.0659 13.459 25.9976 12.6028C25.9713 12.2323 25.9293 11.4312 25.903 10.8254C25.8767 10.2196 25.8294 9.64376 25.7979 9.54863C25.7664 9.4535 25.7401 9.11303 25.7401 8.7976C25.7401 8.48216 25.7139 8.13168 25.6823 8.02153C25.6508 7.91138 25.6088 7.63099 25.5878 7.39567C25.5668 7.16034 25.53 6.94004 25.509 6.89998C25.4827 6.86493 25.4459 6.64964 25.4196 6.42933C25.3986 6.20903 25.3566 6.01376 25.3303 5.99874C25.3041 5.98372 25.2725 5.81349 25.2568 5.62322C25.2463 5.41294 25.2095 5.26773 25.1727 5.25271C25.1359 5.2427 25.1097 5.15758 25.1097 5.06746C25.1097 4.97233 25.0729 4.86718 25.0309 4.82212C24.9888 4.78207 24.9521 4.71698 24.9521 4.68193C24.9521 4.5868 24.6789 4.34146 24.579 4.34146C24.5317 4.34146 24.4582 4.38151 24.4109 4.43158Z" fill="white"/>
                        <path d="M0.664885 10.1535C0.616221 10.1636 0.57729 10.1987 0.57729 10.2238C0.57729 10.2538 0.543226 10.309 0.504295 10.3491C0.465364 10.3943 0.431299 10.4996 0.431299 10.5949C0.431299 10.6852 0.406967 10.7705 0.377769 10.7805C0.348571 10.7905 0.30964 10.946 0.290174 11.1215C0.270709 11.3021 0.236644 11.4827 0.212312 11.5228C0.187981 11.5629 0.14905 11.8588 0.129584 12.1748C0.110119 12.4908 0.0711876 12.877 0.0468557 13.0275C-0.0164071 13.4087 -0.0164071 17.8023 0.0517221 18.1183C0.076054 18.2537 0.114985 18.6098 0.13445 18.9057C0.14905 19.2267 0.187981 19.4675 0.226912 19.5076C0.260976 19.5427 0.285308 19.7032 0.285308 19.9038C0.285308 20.1546 0.304773 20.2449 0.358304 20.27C0.402101 20.285 0.431299 20.3603 0.431299 20.4706C0.431299 20.5709 0.460497 20.6662 0.499428 20.6863C0.538359 20.7063 0.57729 20.7816 0.587023 20.8518C0.625954 21.1427 1.0104 20.907 1.01526 20.586C1.01526 20.5057 1.04933 20.4104 1.08826 20.3703C1.13206 20.3252 1.16126 20.1998 1.16126 20.0694C1.16126 19.944 1.18559 19.7935 1.21965 19.7333C1.24885 19.6731 1.29265 19.317 1.31698 18.9459C1.33644 18.5747 1.37538 18.1434 1.39971 17.9929C1.46297 17.6217 1.46297 13.5441 1.39971 13.1027C1.37538 12.9071 1.33158 12.4457 1.30725 12.0745C1.28291 11.6883 1.23912 11.3924 1.20992 11.3824C1.18559 11.3723 1.16126 11.2319 1.16126 11.0714C1.16126 10.9109 1.13692 10.7705 1.10773 10.7604C1.08339 10.7504 1.04446 10.6501 1.02986 10.5297C1.01526 10.4093 0.976333 10.3191 0.942268 10.3191C0.908204 10.3191 0.869273 10.2739 0.854674 10.2187C0.830342 10.1184 0.815743 10.1134 0.664885 10.1535Z" fill="white"/>
                        <path d="M28.1019 10.1795C28.0551 10.2045 28.0177 10.2796 28.0177 10.3397C28.0177 10.3997 27.9849 10.4948 27.9475 10.5448C27.9101 10.5999 27.8773 10.74 27.8773 10.8551C27.8773 10.9702 27.8539 11.0753 27.8258 11.0853C27.7931 11.0953 27.7556 11.2855 27.7322 11.5257C27.7135 11.7609 27.6761 12.0411 27.648 12.1512C27.6199 12.2613 27.5965 12.6416 27.5965 13.0019C27.5965 13.3572 27.5731 13.8527 27.545 14.1029C27.4795 14.6633 27.4795 16.4849 27.545 16.9553C27.5731 17.1455 27.5965 17.6609 27.5965 18.0963C27.5965 18.6818 27.6152 18.932 27.6667 19.0671C27.7042 19.1622 27.7369 19.3824 27.7369 19.5525C27.7416 19.7427 27.765 19.8928 27.8071 19.9529C27.8445 20.0079 27.8773 20.148 27.8773 20.2631C27.8773 20.3882 27.9054 20.4983 27.9475 20.5334C27.9849 20.5684 28.0177 20.6384 28.0177 20.6885C28.0177 20.7836 28.1721 20.9837 28.2423 20.9837C28.3172 20.9837 28.4389 20.8036 28.4389 20.6885C28.4389 20.6284 28.4716 20.5684 28.5091 20.5534C28.5558 20.5334 28.5792 20.4533 28.5792 20.3082C28.5792 20.1781 28.6026 20.083 28.6401 20.073C28.6775 20.0579 28.7009 19.8928 28.715 19.5525C28.7243 19.2573 28.7524 19.0421 28.7805 19.0221C28.8834 18.952 29.0051 14.1629 28.9068 14.0578C28.8787 14.0278 28.86 13.7025 28.86 13.2271C28.86 12.6967 28.8366 12.3564 28.7898 12.1612C28.7524 12.0011 28.7196 11.7408 28.7196 11.5807C28.7196 11.4206 28.6869 11.1904 28.6494 11.0753C28.612 10.9602 28.5792 10.785 28.5792 10.69C28.5792 10.5849 28.5512 10.5098 28.5091 10.4948C28.4716 10.4748 28.4389 10.4097 28.4389 10.3447C28.4389 10.2796 28.3967 10.2045 28.3499 10.1745C28.2376 10.1145 28.2049 10.1145 28.1019 10.1795Z" fill="white"/>
                    </svg>
                    <svg className="logoText" width="54" height="8" viewBox="0 0 54 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.7978 8H0V0H0.980069L6.09687 5.06555V0H7.89467V8H6.9146L1.7978 2.94003V8Z" fill="white"/>
                        <path d="M9.52411 0H15.5909V1.53975H11.3279V2.85635H14.5808V4.37936H11.3279V6.46025H15.5909V8H9.52411V0Z" fill="white"/>
                        <path d="M16.2523 0.0055788H18.1162L19.5833 5.32218L21.2909 0.0055788H22.8122L24.4777 5.31102L25.9388 0.0055788H27.8087L25.5058 8H23.7742L22.0425 2.85635L20.2628 8H18.5552L16.2523 0.0055788Z" fill="white"/>
                        <path d="M28.2957 0H35.7695V1.54533H32.9315V8H31.1277V1.54533H28.2957V0Z" fill="white"/>
                        <path d="M44.8968 4C44.8968 6.24826 43.0328 8 40.5015 8C37.9762 8 36.1122 6.24826 36.1122 4C36.1122 1.75732 37.9762 0 40.5015 0C43.0328 0 44.8968 1.75732 44.8968 4ZM43.0509 4C43.0509 2.62204 42.0528 1.53417 40.5015 1.53417C38.9562 1.53417 37.9581 2.62204 37.9581 4C37.9581 5.38354 38.9562 6.46025 40.5015 6.46025C42.0528 6.46025 43.0509 5.38354 43.0509 4Z" fill="white"/>
                        <path d="M47.9031 8H46.1053V0H47.0854L52.2022 5.06555V0H54V8H53.0199L47.9031 2.94003V8Z" fill="white"/>
                    </svg>
                    </div>
                    <div className="ScoreInfo">
                        <span className="ScoreText">YOUR SCORE:</span>
                        <span className="ScoreValue">102,546</span>
                    </div>
                </div>
                <div className="ProgressInfo">
                    <Progress className="ProgressBar" value={10} />
                    <div className="RangInfo">
                        <div><span style={{ fontWeight: 700 }}>RANG: </span>
                        <span>GOLD TIER</span></div>
                        
                        <span>10% OF EARNERS</span>
                    </div>
                </div>
                <div className="Bottom">
                    <span className="BottomText">16% COLLECTED IN TON YEARLY</span>
                    <Button
                        // mode="filled"
                        size="s"
                        className="BottomButton"
                    >
                        STAKE
                    </Button>
                </div>
            </div>
            
        </Card> 
    </div>
  )
};
