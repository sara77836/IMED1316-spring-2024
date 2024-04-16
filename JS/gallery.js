// A $( document ).ready() block.
$( document ).ready(function() {
   //console.log( "ready!" );

   $("#blinn-gallery").nanogallery2({
        thumbnailWidth: "300",
        thubmnailHeight: "auto",
        thumbnailBorderVertical: 0,
        thumbnailBorderHorizontal: 0,
        thumbnailLabel: {
            postition: "overImageOnBottom",
            display: false
        },
        thumbnailHoverEffect2: "imageScaleIn80|imageSepiaOff|labelAppear75",
        thumbnailGutterWidth: 0,
        thumbnailGutterHeight: 0,
        thumbnailAlignment: "center",
        thumbnailOpenImage: true

  });


});