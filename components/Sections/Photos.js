import Section from '@components/Section'
import PhotoGallery from '@components/PhotoGallery'

export default function Photos() {
  let photos = [
    '/g1.jpeg',
    '/g2.jpeg',
    '/g3.jpeg',
    '/g4.jpeg',
    '/g5.jpeg',
    '/g6.jpeg',
    '/g7.jpeg',
    '/g8.jpeg',
    '/g9.jpeg',
    '/g10.jpeg',
    '/g11.jpeg',
    '/g12.jpeg',
    '/g13.jpeg',
    '/g14.jpeg',
    '/g15.jpeg',
    '/g16.jpeg',
    '/g17.jpeg',
    '/g18.jpeg',
    '/g19.jpeg',
    '/g20.jpeg',
    '/g21.jpeg',
    '/g22.jpeg',
    '/g23.jpeg',
    '/g24.jpeg',
    '/g25.jpeg',
    '/g26.jpeg',
    '/g27.jpeg',
    '/g28.jpeg',
    '/g29.jpeg',
    '/g30.jpeg',
    '/g31.jpeg',
    '/g32.jpeg',
    '/g33.jpeg',
    '/g34.jpeg',
    '/g35.jpeg',
    '/g36.jpeg'

  ];

  return (
    <Section id="photos" title="Photo Gallery">
      <PhotoGallery photos={photos} />
    </Section>

  )
}
