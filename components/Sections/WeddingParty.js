import Section from '@components/Section'
import IndividualStory from '@components/IndividualStory'

export default function WeddingParty() {
  return (
    <Section id="party" title="Wedding Party" type="condensed">
      <div className="story__content">
        <IndividualStory role="Matron of Honor" title={<>Tatiana<br/>Moroz</>} img="/tanya.jpeg" img_alt="" extra={<><p> Mauris posuere magna metus, vel rutrum neque convallis ut. Quisque sagittis, metus lobortis elementum vestibulum, risus ante vestibulum augue, ac sodales enim ipsum non mi. Sed vel cursus sapien. Pellentesque posuere ex sit amet orci faucibus elementum. Vestibulum urna nulla, maximus sed velit sit amet, malesuada porta mi. Vestibulum a hendrerit augue, et auctor ex. Nullam et laoreet leo, vitae condimentum mi. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p><p>Maecenas euismod, mauris vel aliquam maximus, massa purus euismod est, vitae volutpat nisl dolor convallis sem.</p></>}>
          <p>30 years ago Tatiana transferred from another elementary school. At first recess she was standing alone by the window, I stopped by and asked her if she was a good painter.  A recess-long conversation started and it’s been going on until this day, mostly, because Tatiana never answered my question and I just want her to admit that she’s not good at painting.</p>
        </IndividualStory>

        <IndividualStory role="Best Man" title={<>Nicholas<br/>Dodson</>} img="/nick.jpeg" img_alt="" extra={<><p>, scelerisque iaculis arcu. Maecenas vehicula dictum lobortis. Curabitur sit amet viverra enim. Morbi suscipit sed enim efficitur varius. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus elementum imperdiet quam, ut molestie massa eleifend vehicula. Nulla quis ex nulla. Aenean nec urna a nisl tempor porta nec in arcu. Praesent augue neque, iaculis id sollicitudin nec, luctus finibus augue. Nullam egestas a mauris ut lobortis. Vivamus interdum eros elementum lorem egestas condimentum. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p><p>Etiam fringilla, odio interdum varius faucibus, ligula nunc condimentum magna, at tempus velit dui eget felis.</p></>}>
          <p>Nunc posuere lobortis orci, a tristique magna. Praesent dolor nibh, interdum eget arcu id.</p>
        </IndividualStory>

        <IndividualStory role="Bridesmaid" title={<>Olha<br/>Vovk</>} img="/olga.jpeg" img_alt="">
          <p>Lorem ipsum</p>
        </IndividualStory>

        <IndividualStory role="Groomsman" title={<>Devon<br/>Smith</>} img="/devon.jpg" img_alt="">
          <p>Lorem ipsum</p>
        </IndividualStory>

        <IndividualStory role="Bridesmaid" title={<>Marina<br/>Melnychuk</>} img="/marina.jpeg" img_alt="">
          <p>Marina has a special place in my heart because I’ve known her since my childhood. Incredible confidence and self control is what made me to look up to her. Marina is the one who will always give you an advice that will have the best outcome. After a long separation she came to US last year- now I cannot imagine my special day without her standing by my side.</p>
        </IndividualStory>

        <IndividualStory role="Groomsman" title={<>Corey<br/>Lee</>} img="/marina.jpeg" img_alt="">
          <p>Lorem ipsum</p>
        </IndividualStory>

        <IndividualStory role="Bridesmaid" title={<>Victoria<br/>Shevchenko</>} img="/vika2.jpeg" img_alt="">
          <p>I’ve met Victoria through a mutual friend at a Halloween party, about 4 years ago. We started talking and there was an instant connection. From that moment we’ve always enjoyed each other’s company by sharing all kinds of life experiences.</p>
        </IndividualStory>

        <IndividualStory role="Groomsman" title={<>Sasha<br/>Usman</>} img="/sasha.jpeg" img_alt="">
          <p>Lorem ipsum</p>
        </IndividualStory>
      </div>

    </Section>
  )
}
