Livarix — image assets
livarix.vercel.app

Drop these eleven files into this folder, keeping the names exactly as
written. The page references them by these names and nothing else.

  livarix-3-bottles-guarantee.webp   used TWICE: the hero shot and the
                                     three-bottle price card. It is the LCP
                                     image and the only preloaded one, so
                                     keep it under ~110 KB. It is also the
                                     og:image when the page is shared.
  livarix-2-bottles-guarantee.webp   two-bottle price card
  livarix-6-bottles-guarantee.webp   six-bottle price card
  livarix-bonus-1.webp               bonus guide, The Longevity Reset Protocol
  livarix-bonus-2.webp               bonus guide, The Energy Suppression Code
  livarix-bonus-3.webp               bonus guide, Serenity Blueprint
  livarix-review-1.webp              reviews section
  livarix-review-2.webp              reviews section
  livarix-review-3.webp              reviews section
  livarix-guarantee.webp             60-day guarantee seal
  favicon.png                        tab icon and web app icon (512 x 512)

Sizes do not need to match anything

  Every image slot has a fixed CSS aspect-ratio with object-fit:contain,
  so Cumulative Layout Shift stays at zero whatever proportions your
  files are. Nothing is stretched and nothing is cropped; a file that
  does not match its slot is centred inside it instead.

  The slots are:
    hero shot         1:1  on a soft mint gradient panel
    price card images 1:1  on white
    bonus covers      3:4  (portrait, suits a book cover)
    review images     4:3  on a mint tile
    guarantee seal    1:1  transparent

  To fill the slots edge to edge, supply roughly 800x800, 400x400,
  600x800, 800x600 and 400x400.

Other notes

  * Serve real WebP, not a renamed PNG or JPEG.
  * The bottles photograph well on white or transparent backgrounds,
    which is what the price cards and the hero panel expect.
  * Only livarix-3-bottles-guarantee.webp is preloaded. Everything else
    is lazy loaded, which is what holds the PageSpeed score. Do not add
    more preloads.
