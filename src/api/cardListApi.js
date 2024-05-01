import axios from "axios";
export const host = process.env.PUBLIC_URL;
export const getCards = async () => {
  try {
    // 인증이 들어가면 여기에 헤더? 를 붙인다.
    // 매개변수로 받은 값을 > get post put delete에 넣어서 사용
    // 그냥 뿌리는거면 없겠지...

    // package.json에 프록시 설정해서 앞에 process 쪽이나 포트 번호 없앰
    const response = await axios.get(`${host}/json/cardlist.json`);
    // ㅁㅁㅁ.json(x) ㅁㅁㅁ.data(O)로 받아감.

    return response.data;
  } catch (error) {
    // 오류 떳을 때 어디로 갈지
    console.log(error);
  }
};
