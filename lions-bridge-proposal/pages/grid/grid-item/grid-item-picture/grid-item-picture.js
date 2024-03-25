import Image from "next/image";

import classes from "./grid-item.module.scss";

import breakpointL from "../../../../styles/variables/breakpoints.module.scss"

function GridItemPicture({
                               isPriority = false,
                               path,
                               alt,
                               id,
                  }) {

 return (
      <li id={id} className={classes.gridItemPicture}>
        <Image src={path}
               alt={alt}
               sizes={`(min-width: ${breakpointL}) 25vw 6.25vw, (max-width: ${breakpointL}) 13vw 3.25vw`}
               fill
               priority={isPriority}
        />
      </li>
  );
}

export default GridItemPicture;