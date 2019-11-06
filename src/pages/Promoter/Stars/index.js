import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { MdStar, MdStarHalf } from 'react-icons/md';
import { Container } from './styles';

export default function Stars({ array }) {
  const [stars, setStars] = useState();
  const [rankStar, setRankStar] = useState([]);

  useEffect(() => {
    function loadStars() {
      const avarage = array.reduce((prevVal, elem, index) => {
        const sum = prevVal + elem.note;
        const avg = sum / (index + 1);
        return avg;
      }, 0);

      setStars(avarage);
    }

    function populateStars() {
      if (stars >= 1 && stars < 2) {
        if (stars >= 1.5) {
          setRankStar([0, 1]);
        } else {
          setRankStar([0]);
        }
      }
      if (stars >= 2 && stars < 3) {
        if (stars >= 2.5) {
          setRankStar([0, 0, 1]);
        } else {
          setRankStar([0, 0]);
        }
      }
      if (stars >= 3 && stars < 4) {
        if (stars >= 3.5) {
          setRankStar([0, 0, 0, 1]);
        } else {
          setRankStar([0, 0, 0]);
        }
      }
      if (stars > 4) {
        if (stars >= 4.5) {
          setRankStar([0, 0, 0, 0, 0]);
        } else {
          setRankStar([0, 0, 0, 0, 1]);
        }
      }
    }

    loadStars();
    populateStars();
  }, [array, stars]);

  return (
    <Container>
      {rankStar.map(star =>
        star === 0 ? (
          <MdStar size={25} color="#777" />
        ) : (
            <MdStarHalf size={25} color="#777" />
          )
      )}
    </Container>
  );
}

Stars.propTypes = {
  array: PropTypes.elementType.isRequired,
};
