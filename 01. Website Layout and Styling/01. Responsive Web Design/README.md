# Responsive Web Design

## Viewport
`<meta name="viewport" content="width=device-width, initial-scale=1">`
- `width=device-width` - match pixel for pixel device screen, otherwise the browser will render at approximately 980px
- `initial-scale=1` - 1:1 relationship between css pixels and device independant pixels

other properties available are:
- `minimum-scale`
- `maximum-scale`
- `user-scalable` - prevent the user from scaling, bad for accessibility

## CSS Media Queries
### Print
3 different ways to do it:
- `<link rel="stylesheet" href="print.css" media="print">`
- `@media print { .style {} }`
- `@import url('print.css') print;`

### Device
Many different options
- `min-width`
- `max-width`
- `min-height`
- `max-height`
- `orientation=portrait`
- `orientation=landscape`

Google recommends designing for mobile first then progressively enhancing the experience.

## Useful Links
https://developers.google.com/web/fundamentals/design-and-ux/responsive/