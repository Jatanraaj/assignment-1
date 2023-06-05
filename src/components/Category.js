import React, { Component } from 'react'
import $ from 'jquery';
$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
}
    $(this).addClass("active");

});
export default class Category extends Component {
   
  render() {
    return (
        <div class="container">
        <div class="row">
        <div class="gallery col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h1 class="gallery-title">Gallery</h1>
        </div>

        <div align="center">
            <button class="btn btn-default filter-button" data-filter="all">All</button>
            <button class="btn btn-default filter-button" data-filter="cat">Cat Products</button>
            <button class="btn btn-default filter-button" data-filter="dog">Dog Products</button>
            <button class="btn btn-default filter-button" data-filter="clothes">Clothings</button>
            <button class="btn btn-default filter-button" data-filter="other">Other Animals</button>
            
        </div>
        <br/>



            <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter cat">
                <img src="./images/Categories/cat1.jpeg" class="img-responsive"/>
                <h1>Cat Food</h1>
                <p>Cat food is a type of food that is specifically formulated for the dietary needs and preferences of cats. It typically comes in the form of dry kibble or wet canned food and can be found in a variety of flavors, textures, and nutritional compositions to suit different cats' needs.</p>

            </div>

            <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter dog">
                <img src="./images/Categories/dog1.webp" class="img-responsive"/>
                <h1>Dog Bed</h1>
                <p>Dog Beds is a type of product that is specifically formulated for the dietary needs and preferences of cats. It typically comes in the form of dry kibble or wet canned food and can be found in a variety of flavors, textures, and nutritional compositions to suit different cats' needs.</p>

            </div>

            <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter cat">
                <img src="./images/Categories/cat2.jpg" class="img-responsive"/>
                <h1>Cat Sweater</h1>
                <p>Cat Sweater is a type of product that is specifically formulated for the dietary needs and preferences of cats. It typically comes in the form of dry kibble or wet canned food and can be found in a variety of flavors, textures, and nutritional compositions to suit different cats' needs.</p>

            </div>

            <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter other">
                <img src="./images/Categories/other1.jpeg" class="img-responsive"/>
                <h1>Cow Food</h1>
                <p>Cat food is a type of food that is specifically formulated for the dietary needs and preferences of cats. It typically comes in the form of dry kibble or wet canned food and can be found in a variety of flavors, textures, and nutritional compositions to suit different cats' needs.</p>

            </div>

            <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter clothes">
                <img src="./images/Categories/clothes1.webp" class="img-responsive"/>
                <h1>Dog Sweater</h1>
                <p>Cat food is a type of food that is specifically formulated for the dietary needs and preferences of cats. It typically comes in the form of dry kibble or wet canned food and can be found in a variety of flavors, textures, and nutritional compositions to suit different cats' needs.</p>

            </div>

            <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter dog">
                <img src="./images/Categories/dog2.webp" class="img-responsive"/>
                <h1>Dog Sofa</h1>
                <p>Cat food is a type of food that is specifically formulated for the dietary needs and preferences of cats. It typically comes in the form of dry kibble or wet canned food and can be found in a variety of flavors, textures, and nutritional compositions to suit different cats' needs.</p>
                
            </div>

            <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter clothes">
                <img src="./images/Categories/cat2.jpg" class="img-responsive"/>
                <h1>Cat Shirts</h1>
                <p>Cat food is a type of food that is specifically formulated for the dietary needs and preferences of cats. It typically comes in the form of dry kibble or wet canned food and can be found in a variety of flavors, textures, and nutritional compositions to suit different cats' needs.</p>

            </div>

            <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter other">
                <img src="./images/Categories/other2.jpeg" class="img-responsive"/>
                <h1>Horse Food</h1>
                <p>Cat food is a type of food that is specifically formulated for the dietary needs and preferences of cats. It typically comes in the form of dry kibble or wet canned food and can be found in a variety of flavors, textures, and nutritional compositions to suit different cats' needs.</p>
                
            </div>

            <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter other">
                <img src="./images/Categories/other3.jpeg" class="img-responsive"/>
                <h1>Bird Food</h1>
                <p>Cat food is a type of food that is specifically formulated for the dietary needs and preferences of cats. It typically comes in the form of dry kibble or wet canned food and can be found in a variety of flavors, textures, and nutritional compositions to suit different cats' needs.</p>
                
            </div>

            <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter cat">
                <img src="./images/Categories/cat3.webp" class="img-responsive"/>
                <h1>Cat Sofa</h1>
                <p>Cat food is a type of food that is specifically formulated for the dietary needs and preferences of cats. It typically comes in the form of dry kibble or wet canned food and can be found in a variety of flavors, textures, and nutritional compositions to suit different cats' needs.</p>
                
            </div>

            <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter clothes">
                <img src="./images/Categories/clothes2.jpeg" class="img-responsive"/>
                <h1>Dog Fashion</h1>
                <p>Cat food is a type of food that is specifically formulated for the dietary needs and preferences of cats. It typically comes in the form of dry kibble or wet canned food and can be found in a variety of flavors, textures, and nutritional compositions to suit different cats' needs.</p>
                
            </div>

            <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter dog">
                <img src="./images/Categories/dog3.webp" class="img-responsive"/>
                <h1>Dog Pillow</h1>
                <p>Cat food is a type of food that is specifically formulated for the dietary needs and preferences of cats. It typically comes in the form of dry kibble or wet canned food and can be found in a variety of flavors, textures, and nutritional compositions to suit different cats' needs.</p>
                
            </div>
            <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter clothes">
                <img src="./images/Categories/clothes3.jpeg" class="img-responsive"/>
                <h1>Cute Cat Clothings</h1>
                <p>Cat food is a type of food that is specifically formulated for the dietary needs and preferences of cats. It typically comes in the form of dry kibble or wet canned food and can be found in a variety of flavors, textures, and nutritional compositions to suit different cats' needs.</p>
                
            </div>
            <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter clothes">
                <img src="./images/Categories/dogshoes.webp" class="img-responsive"/>
                <h1>Dog Shoes</h1>
                <p>Cat food is a type of food that is specifically formulated for the dietary needs and preferences of cats. It typically comes in the form of dry kibble or wet canned food and can be found in a variety of flavors, textures, and nutritional compositions to suit different cats' needs.</p>
                
            </div>
            <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter clothes">
                <img src="./images/Categories/catshoes.jpeg" class="img-responsive"/>
                <h1>Cat Shoes</h1>
                <p>Cat food is a type of food that is specifically formulated for the dietary needs and preferences of cats. It typically comes in the form of dry kibble or wet canned food and can be found in a variety of flavors, textures, and nutritional compositions to suit different cats' needs.</p>
                
            </div>
        </div>
    </div>
    )
  }
}

