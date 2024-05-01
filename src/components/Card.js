import styled from "@emotion/styled";
// 대문자로 안하면 인식 안한다.
// 파스칼로 해야함.
const CardStyle = styled.div`
  // warp
  // 전체크기 잡을 땐 상위에서 부터 잡고 가자.
  width: 240px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
`;
const ImgStyle = styled.div`
  height: 180px;
  //   border-radius: 8px;
  //   border: 1px solid rgba(0, 0, 0, 0.1);
`;
const DescStyle = styled.div`
  // 내부
  display: flex;
  align-items: flex-start;
  gap: 6px;
  .number {
    color: #595959;
    font-family: Pretendard;
    font-size: 32px;
    font-weight: 600;
    line-height: 80%;
  }
  .textBox {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    flex: 1 0 0;
  }
  .title {
    color: #595959;
    font-feature-settings: "clig" off, "liga" off;
    font-family: "Pretendard Variable";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 14px */
  }
  .tags {
    color: #c5c5c5;
    font-family: "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
  }
`;

const Card = ({ id, imgPath, title, tags }) => {
  return (
    <CardStyle>
      <ImgStyle>
        <img
          src={`${process.env.PUBLIC_URL}/images/${imgPath}`}
          alt="{title}"
        />
      </ImgStyle>
      <DescStyle>
        <div className="number">{id}</div>
        <div className="textBox">
          <div className="title">{title}</div>
          <div className="tags">{tags}</div>
        </div>
      </DescStyle>
    </CardStyle>

    // <div className="CardStyle">
    //   <div>
    //      Link NavLink 사용
    //      a태그 사용 X
    //     <a style={{ background: "#000" }}>aaa</a>
    //   </div>
    //   <div style={{ display: "flex" }}>
    //     <div>3</div>
    //     <div>
    //       <div>ffff</div>
    //       <div>ffff</div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Card;
