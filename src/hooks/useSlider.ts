import { useKeenSlider } from 'keen-slider/react'
import React from 'react'

const useSlider = () => {
  const [activeSlide, setActiveSlide] = React.useState(0)
  const [loaded, setLoaded] = React.useState(false)

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      slides: {
        perView: 2,
        spacing: 105,
        origin: 'center',
      },
      slideChanged(slider) {
        setActiveSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
      },
      defaultAnimation: {
        duration: 1200,
      },
      // @ts-ignore
      breakpoints: {
        '(max-width: 1100px)': {
          slides: { perView: 2, spacing: 50, origin: 'center' },
        },
        '(max-width: 1024px)': {
          slides: { perView: 1.8, spacing: 50, origin: 'center' },
        },
        '(max-width: 840px)': {
          slides: { perView: 1.5, spacing: 60, origin: 'center' },
        },
        '(max-width: 768px)': {
          slides: { perView: 1, spacing: 60, origin: 'center' },
        },
      },
    },
    [
      // add plugins here
    ]
  )

  return {
    activeSlide,
    setActiveSlide,
    loaded,
    setLoaded,
    sliderRef,
    instanceRef,
  }
}

export default useSlider
