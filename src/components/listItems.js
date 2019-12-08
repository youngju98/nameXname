import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import SparcsIcon from '@material-ui/icons/FlashOn';
import StarsIcon from '@material-ui/icons/Stars';
import MusicIcon from '@material-ui/icons/MusicVideo';
import CustomIcon from '@material-ui/icons/AccountCircle';
// import RankIcon from '@material-ui/icons/Equalizer';

export default function MainListItems({ handle }) {
  const sparcsN = ['한영주', '강현우', '국윤범', '권해찬', '김경모', '김규성',
    '김나영', '김도현', '김상호', '김승호', '김재성', '김주연', '김지연', '김태원', '나선일',
    '황동욱', '류찬영', '마재의', '문재호', '박근용', '박준우', '박진호', '박현우', '방형조',
    '백윤기', '서동민', '신성우', '안병서', '안재웅', '윤준성', '윤지수', '이강현', '이건호',
    '이세연', '이승우', '이정연', '이준서', '이채린', '이채영', '임성준', '임준택', '정동진',
    '최다은', '최윤서', '하현정', '한승현', '한우현', '황재영', '황현빈'];
  const starsN = ['강동원', '권상우', '김래원', '류준열', '류승범', '배용준',
    '박희순', '송승헌', '송강호', '원빈', '장동건', '정우성', '조인성', '최민식', '하정우',
    '황정민', '김혜수', '문근영', '배두나', '손예진', '엄정화', '이영애', '전지현', '최지우',
    '하지원', '하희라', '한가인', '한예슬', '한지민', '한효주'];
  const musicN = ['아이유', '장범준', '박혜원', '박진영'];
  const customsN = ['홍길동', '김첨지'];
  const setData = handle;

  const handleSparcs = () => {
    setData(sparcsN);
  };
  const handleStars = () => {
    setData(starsN);
  };
  const handleMusics = () => {
    setData(musicN);
  };
  const handleCustoms = () => {
    setData(customsN);
  };
  return (
    <div>
      <ListItem button onClick={handleSparcs}>
        <ListItemIcon>
          <SparcsIcon />
        </ListItemIcon>
        <ListItemText primary="Sparcs" />
      </ListItem>
      <ListItem button onClick={handleStars}>
        <ListItemIcon>
          <StarsIcon />
        </ListItemIcon>
        <ListItemText primary="Stars" />
      </ListItem>
      <ListItem button onClick={handleMusics}>
        <ListItemIcon>
          <MusicIcon />
        </ListItemIcon>
        <ListItemText primary="Music Stars" />
      </ListItem>
      <ListItem button onClick={handleCustoms}>
        <ListItemIcon>
          <CustomIcon />
        </ListItemIcon>
        <ListItemText primary="Customs" />
      </ListItem>
      {/* <ListItem button>
        <ListItemIcon>
          <RankIcon />
        </ListItemIcon>
        <ListItemText primary="Ranking" />
      </ListItem> */}
    </div>
  );
}
