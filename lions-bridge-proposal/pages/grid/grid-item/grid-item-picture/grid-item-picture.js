import Image from "next/image";

import classes from "./grid-item.module.scss";

import breakpointL from "../../../../styles/variables/breakpoints.module.scss"

function GridItemPicture({
                           isPriority = false,
                           hideItem = false,
                           path,
                           alt,
                           id,
                  }) {

  const sizes = (
      `(min-width: ${breakpointL}) 13vw 25vw, 
      (max-width: ${breakpointL}) 34vw`
  )

 return (
      <li aria-hidden={hideItem} id={id} className={`${classes.gridItemPicture} ${hideItem}`}>
        <Image src={path}
               alt={alt}
               sizes={sizes}
               fill
               priority={isPriority}
        />
      </li>
  );
}

export default GridItemPicture;