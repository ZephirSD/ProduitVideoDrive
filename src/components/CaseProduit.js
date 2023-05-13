import React from 'react'
import star from '../assets/star.png'
import ps52 from '../assets/ps5-2.png'
import ps53 from '../assets/ps5-3.png'
import messenger from '../assets/messenger.png'

function CaseProduit() {
  return (
    <>
      <section className='gridProduit'>
        <div className="caseImageProduit">
            <div className="caseImagePrinc"></div>
            <div className="caseImageSecond">
                <div className='image1'>
                    <img src={ps52} alt="ps52" />
                </div>
                <div className='image2'>
                    <img src={ps53} alt="ps52" />
                </div>
            </div>
        </div>
        <div className="caseInfoProduit">
            <h1 className="titreProduit">Sony Playstation 5 Slim 1TB white</h1>
            <div className="caseAvis">
                <div className="note">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                </div>
                <div className="comment">40 avis</div>
            </div>
            <h2 className="prix">999.99€</h2>
            <div className="caseBtnPanier">
                <button className="btnPanier">Ajouter au panier</button>
            </div>
            <div className="description">
                <h3 className='titreDescription'>Description</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio commodi, accusamus quia perferendis minima alias exercitationem sapiente ullam, nulla, labore perspiciatis expedita enim dolor recusandae eligendi odit fugiat magni! Vitae quidem laborum ex odio cum, illo, repellat sapiente, delectus temporibus fugit ut soluta nisi. Quis odio voluptas neque dolorem voluptatibus nulla asperiores ab eum!</p>
            </div>
            <div className="caseMessanger">
                <img src={messenger} alt="messenger" />
            </div>
        </div>
      </section>
    </>
  )
}

export default CaseProduit
