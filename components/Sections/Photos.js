import Section from '@components/Section'
import PhotoGallery from '@components/PhotoGallery'

export default function Photos() {
  let photos = [
    '/IMG_2373.jpeg',
    '/IMG_2381.jpeg',
    '/IMG_2531.jpeg',
    '/IMG_9639.jpeg',
    '/IMG_9634.jpeg',
    '/IMG_9626.jpeg',
    '/IMG_2520.jpeg',
    '/IMG_8202.jpeg',
    '/IMG_1581.jpeg',
    '/IMG_2424.jpeg',
    '/IMG_1865.jpeg',
    '/IMG_9251.jpeg',
    '/IMG_1965.jpeg',
    '/IMG_8531.jpeg',
    '/IMG_3036.jpeg',
    '/IMG_8853.jpeg',
    '/IMG_2687.jpeg',
    '/IMG_2652.jpeg',
    '/IMG_2871.jpeg',
    '/IMG_9537.jpeg',
    '/IMG_9361.jpeg',
    '/IMG_8770.jpeg',
    '/IMG_8752.jpeg',
    '/IMG_8733.jpeg',
    '/IMG_8729.jpeg',
    '/IMG_8554.jpeg',
    '/IMG_8629.jpeg',
    '/IMG_8290.jpeg',
    '/IMG_9219.jpeg',
    '/IMG_2464.jpeg',
    '/IMG_1698.jpeg',
    '/IMG_1665.jpeg',
    '/IMG_8461.jpeg'
  ];

  return (
    <Section id="photos" title="Photo Gallery">
      <PhotoGallery photos={photos.reverse()} />
    </Section>

  )
}
