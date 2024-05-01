import styled from "@emotion/styled";
import Card from "./Card";
import { useEffect, useState } from "react";
import { getCards } from "../api/cardListApi";
const CardListStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;
const CardList = () => {
  const [cards, setCards] = useState([]);

  // 로딩 구현 안했음
  // const [loading, setLoading] = useState(false);

  // [] 아무것도 안넣으면 렌더링 될때 1번
  // 데이터 들어올때마다 하려면 들어오는 데이터 넣어야함.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCards();
        console.log(data);
        setCards(data);
        console.log(cards);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <CardListStyle>
      {cards.map(card => (
        <Card
          key={card.id}
          id={card.id}
          imgPath={card.imgPath}
          title={card.title}
          tags={card.tags}
        />
      ))}
    </CardListStyle>
  );
};
export default CardList;
