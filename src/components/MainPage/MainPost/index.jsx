import React from "react";
import { St } from "./style";
import { MainImg, MainImg2 } from "../../../asset";

export default function MainPost() {
  return (
    <St.MainPost>
      <St.FirstPost>
        <St.FirstPostImg src={MainImg} alt="작품소개1" />
        <St.FirstPostContents>
          해당 작품은 데비앙 아트의 한 유저가 이미지 생성 AI Midjourney를
          이용해서 만든 작품입니다. <br />
          <br /> 'Midjourney'는 텍스트로 된 설명문 또는 설명구로부터 이미지를
          생성하는 인공 지능 프로그램입니다. <br />
          <br /> 현재 1,000만명의 회원을 가지고 있으며 생성 AI 시장을 주도하고
          있습니다. 해외 채팅 서비스 ‘Discord’ 기반으로 운영되며 무료로
          베타버전을 이용가능합니다.
        </St.FirstPostContents>
      </St.FirstPost>
      <St.SecondPost>
        <St.SecondPostContents>
          해당 작품은 데비앙 아트의 한 유저가 애니메이션 특화 생성 AI
          ‘Niji-journey’를 이용해서 만든 작품입니다.
          <br />
          <br /> Nijijourney는 Spellbrush와 Midjourney의 콜라보레이션을 통해
          만들어진 생성 AI입니다.
          <br /> 당신이 좋아하는 애니메이션의 다양한 캐릭터와 장면을 생성할 수
          있습니다. <br />
          <br />
          Discord를 통해 오픈 베타 버전을 사용할 수 있으며, /imagine 명령과
          프롬프트를 입력하면 뛰어난 퀄리티를 가진 <br />
          4장의 사진을 제공합니다.
        </St.SecondPostContents>
        <St.SecondPostImg src={MainImg2} alt="작품소개2" />
      </St.SecondPost>
    </St.MainPost>
  );
}
