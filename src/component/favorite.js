import React, { useContext } from "react";
import Button from "./styledComponents/styledButton";
import { StyledDivcol } from "./styledComponents/styledColdiv";
import { PreDataContext } from "./router";

const Favourite = () => {
  const { fav, setFav } = useContext(PreDataContext);

  const favourite = (index) => {
    const updatedFav = fav.filter((item, i) => i !== index);
    setFav(updatedFav);
  };

  return (
    <StyledDivcol>
      <div className="FavCardHolder">
        <div className="Favcards">
          {fav.length >=1? <>{fav?.map((item, index) => (
            item?.Poster && (
              <div className="favCard" key={index}>
                <h1>
                  <img src={item?.Poster} alt={"filimcard"} />
                </h1>
                <Button btnclr="red" BtnTxt="Remove from Fav" hoverclr="yellow" txtclr="black" btnfun={() => favourite(index)}/>
              </div>
            )
          ))}</> :<h1 className ="msg">Opps! You haven't added any Favourites</h1>}
         
        </div>
      </div>
    </StyledDivcol>
  );
};

export default Favourite;
