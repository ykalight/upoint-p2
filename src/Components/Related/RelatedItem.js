import React from 'react';
import {Link} from 'react-router-dom'; 
import {MdKeyboardArrowRight} from 'react-icons/lib/md';


let RelatedItem = function statelessFunctionComponentClass(props) {
  let title = props.related.title,
    small = props.related.small,
    img = `${process.env.PUBLIC_URL}` + props.related.img,
    destination = props.related.destination,
    onclick = props.onClick;

  return (
        <Link onClick={onclick} className="related" to={destination}>
            <img src={img} alt="img" />
            <h4>{title}</h4>
            <p>{small} <MdKeyboardArrowRight style={{width: '17px', height: '17px'}} /></p>
        </Link>
  );
};

export default RelatedItem;