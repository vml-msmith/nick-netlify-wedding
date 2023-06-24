import Section from '@components/Section'
import PhotoGallery from '@components/PhotoGallery'

export default function Photos() {
  let photos = [
    '/IMG_1071.jpeg',
    '/IMG_0961.jpeg',
    '/IMG_1046.jpeg'
  ];

  return (
    <Section id="photos" title="Photo Gallery">
      <PhotoGallery photos={photos} />
    </Section>

  )
}
