import { useEffect, Fragment } from "react";

export function FbPixel() {
    const FB_PIXEL = "372275094489744"
    useEffect(async () => {
        const { default: ReactPixel } = await import('react-facebook-pixel');
        ReactPixel.init(FB_PIXEL, null, {
            autoConfig: true,
            debug: true,
          });
        ReactPixel.pageView();
        ReactPixel.track("ViewContent")
    }, []);
    return(
      <Fragment>
      </Fragment>
    )
  }