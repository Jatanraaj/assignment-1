import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>

        <a href="#" class="fa fa-facebook"></a>

        <a href="#" class="fa fa-twitter"></a>
        <a href="#" class="fa fa-google"></a>
        <a href="#" class="fa fa-linkedin"></a>
        <a href="#" class="fa fa-youtube"></a>
        <a href="#" class="fa fa-instagram"></a>
        <a href="#" class="fa fa-pinterest"></a>
        <a href="#" class="fa fa-snapchat-ghost"></a>
        <a href="#" class="fa fa-skype"></a>
        <a href="#" class="fa fa-android"></a>
        <a href="#" class="fa fa-dribbble"></a>
        <a href="#" class="fa fa-vimeo"></a>
        <a href="#" class="fa fa-tumblr"></a>
        <a href="#" class="fa fa-vine"></a>
        <a href="#" class="fa fa-foursquare"></a>
        <a href="#" class="fa fa-stumbleupon"></a>
        <a href="#" class="fa fa-flickr"></a>
        <a href="#" class="fa fa-yahoo"></a>
        <a href="#" class="fa fa-reddit"></a>
        <a href="#" class="fa fa-rss"></a>

        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                PetISam
              </h6>
              <p>
              Welcome to our pet shop! We are a team of animal lovers dedicated to providing top-quality products and services to pet owners in our community. Our shop has been serving the area for over 10 years, and we are proud to have built a loyal customer base who trusts us with the care of their furry friends.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Accessories
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Explore
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  PetFood
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Adoptions
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='#'>
            PetISam
        </a>
      </div>
    </MDBFooter>
  );
}