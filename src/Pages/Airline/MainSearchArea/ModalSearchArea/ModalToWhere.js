import React, { Component } from 'react';
import ModalMap from './ModalMap';
import styled from 'styled-components';

class ModalToWhere extends Component {
  render() {
    return (
      <Modal>
        <ArrayCenter>
          <ChooseCity>
            <span>도시선택</span>
            <i
              className="fas fa-times"
              onClick={e => this.props.handleModalOn(e)}
            />
          </ChooseCity>
          <SearchBox>
            <SearchInput placeholder="도시명을 입력하세요."></SearchInput>
            <SearchButton>검색</SearchButton>
          </SearchBox>
          <div className="famousCity">주요도시 바로 선택</div>
          <ModalMap
            allOfCity={allOfCity}
            handleChangeCountryInput={this.props.handleChangeCountryInput}
          />
        </ArrayCenter>
      </Modal>
    );
  }
}

export default ModalToWhere;

const allOfCity = [
  {
    type: '국내',
    city: [
      '제주',
      '김포',
      '부산',
      '청주',
      '여수',
      '광주',
      '대구',
      '양양',
      '군산',
      '울산',
      '포항',
      '인천',
    ],
    engName: [
      'CJU',
      'GMP',
      'PUS',
      'CJJ',
      'RSU',
      'KWJ',
      'TAE',
      'YNY',
      'KUV',
      'USN',
      'KPO',
      'ICN',
    ],
  },
  {
    type: '아시아',
    city: [
      '다낭',
      '방콕',
      '세부',
      '대만/타오위안',
      '코타키나발루',
      '나트랑/캄란',
      '싱가포르',
      '팡라오',
    ],
    engName: ['DAD', 'BKK', 'CEB', 'TPE', 'BKI', 'CXR', 'SIN', 'TAG'],
  },
  {
    type: '중국',
    city: ['북경', '상해/푸동', '청도', '성도'],
    engName: ['BJS', 'PVG', 'TAO', 'CTU'],
  },
  {
    type: '일본',
    city: [
      '도쿄/나라타',
      '도쿄/하네다',
      '오사카/간사이',
      '오키나와',
      '후쿠오카',
      '키타큐슈',
      '삿포로/치토세',
      '나고야',
    ],
    engName: ['NRT', 'HND', 'KIX', 'OKA', 'FUK', 'KKJ', 'CTS', 'NGO'],
  },
  {
    type: '미주',
    city: [
      '로스앤젤레스',
      '하와이/호놀룰루',
      '뉴욕',
      '토론토',
      '밴쿠버',
      '시카고/오헤어',
      '샌프란시스코',
      '라스베가스',
    ],
    engName: ['LAX', 'HNL', 'NYC', 'YTO', 'YVR', 'ORD', 'SFO', 'LAS'],
  },
  {
    type: '중남미',
    city: ['상파울로', '칸쿤', '산티아고', '하바나'],
    engName: ['SAO', 'CUN', 'SCL', 'HAV'],
  },
  {
    type: '유럽',
    city: [
      '블라디보스토크',
      '파리',
      '런던',
      '로마',
      '프랑크푸르트',
      '프라하',
      '바르셀로나',
      '이스탄불',
    ],
    engName: ['VVO', 'PAR', 'LON', 'ROM', 'FRA', 'PRG', 'BCN', 'IST'],
  },
  {
    type: '대양주',
    city: ['시드니', '멜버른', '괌', '사이판'],
    engName: ['SYD', 'MEL', 'GUM', 'SPN'],
  },
  {
    type: '중동',
    city: ['아부다비', '두바이'],
    engName: ['AUH', 'DXB'],
  },

  {
    type: '아프리카',
    city: ['나이로비', '케이프타운', '카이로'],
    engName: ['NBO', 'CPT', 'CAI'],
  },
];

const Modal = styled.div`
  position: absolute;
  width: 745px;
  height: auto;
  background-color: white;
  border-radius: 2px;
`;

const ArrayCenter = styled.div`
  width: 681px;
  height: auto;
  margin: 0 auto;
  background-color: white;

  .famousCity {
    display: absolute;
    margin: 20px 0 20px 0;
    font-size: 16px;
  }
`;

const ChooseCity = styled.h4`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 35px;

  span {
    font-size: 18px;
  }

  .fa-times {
    font-size: 22px;
    cursor: pointer;

    &:hover {
      color: #51abf3;
    }
  }
`;

const SearchBox = styled.div`
  display: flex;
  width: 651px;
  height: 40px;
  margin: 20px 0 15px 0;
  border-radius: 4px;
`;

const SearchInput = styled.input`
  width: 551px;
  height: 100%;
  padding-left: 10px;
  border: 0.1px solid #e3e3e3;
  border-radius: 2px 0 0 2px;
  outline-color: #e3e3e3;
  transition: all 0.5s;

  &:focus {
    outline-color: #51abf3;
    transition: all 0.5s;
  }
`;

const SearchButton = styled.button`
  width: 100px;
  background-color: #51abf3;
  color: white;
  border: none;
  border-radius: 0 2px 2px 0;
  box-shadow: inset 0 0 0 0.1px rgb(132 140 148 / 30%);
  font-size: 14px;
  transition: 0.2s;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: #0095f6;
    box-shadow: 0 0 0px 0.1px rgb(132 140 148 / 30%);
    transition: 0.2s;
  }

  &:foucs {
    outline: none;
  }
`;
