// 한국관광공사_가을_추천_여행지
// 기존 css 재사용
// 가져올 데이터 부분 변경
import React from 'react';
import styled from 'styled-components';
// css 작업대상,
// 1) 이미지, 2) 콘텐츠 내용
const PublicItemCss = styled.div`
  display: flex;
  font-family: 'Nanum Gothic', sans-serif;
  border: 1px solid #ccc;
  border-radius: 92% 8% 92% 8% / 8% 91% 9% 92% ;
  /* border: 0.5px solid black; */

  // 이미지, thumbnail
  .thumbnail {
    margin-right: 1rem;
    img{
      display: block;
      width: 170px;
      height: 130px;
      // 해당사이즈에 비율에 맞게 이미지 크기 조정
      object-fit: cover;
    }
  }

  .contents {
    h2 {
      margin: 0;
      a{
        color: blue;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      //텍스트나 내용이 일반저긴 공백과 줄바꿈 규칙을 따름 
      // 브라우저 넓이에 따라 자동으로 줄바꿈
      white-space: normal;
    }
  }

  // &: 현재요소
  // &+&: 형제 연산자, 요소의 이웃, 같은 요소 나열시 
  //
  &+& {
    margin-top: 3rem;
  }

`;


const PublicItem3 = ({publicData}) => {
 // article: 각 기사의 내용을 담은 객체
  // 비구조화 할당으로 각 각 할당
  // 선택할 데이터 : 1)galTitle 2)galWebImageUrl 3)galPhotographyLocation 4)galSearchKeyword
  const { galTitle, galWebImageUrl,galPhotographyLocation,galSearchKeyword } = publicData;
  return (
    <PublicItemCss>
      {/* 조건부 렌더링으로 출력 */}

      {
        galWebImageUrl && (<div className="thumbnail">
          {/* 링크 클릭시 , target="blank": 새창으로 열기
          rel="noopener noreferrer" : 새창으로 열었을때,
          원본 링크의 참조라든지, 개인 정보 부분 막아줌 */}
            <img src={galWebImageUrl} alt="thumbnail" />
            
          </div>
        )
      }
      <div className="contents">
        <h2>
          <a href="https://www.cwg.go.kr/tour/selectBbsNttView.do?key=663&bbsNo=74&nttNo=65375&searchCtgry=&searchCnd=all&searchKrwd=&pageIndex=1&integrDeptCode=" target="blank" rel="noopener noreferrer">
            {galTitle }
            </a>
        </h2>
        <p>위치 : {galPhotographyLocation}</p>
        <p>설명 : {galSearchKeyword}</p>
      </div>
      
    </PublicItemCss>
  );
};

export default PublicItem3;