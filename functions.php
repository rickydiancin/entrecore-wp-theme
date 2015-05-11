<?php
//* Start the engine
include_once( get_template_directory() . '/lib/init.php' );

//* Set Localization (do not remove)
load_child_theme_textdomain( 'parallax', apply_filters( 'child_theme_textdomain', get_stylesheet_directory() . '/languages', 'parallax' ) );

//* Add Image upload to WordPress Theme Customizer
add_action( 'customize_register', 'parallax_customizer' );
function parallax_customizer(){

require_once( get_stylesheet_directory() . '/lib/customize.php' );
}

//* Include Section Image CSS
include_once( get_stylesheet_directory() . '/lib/output.php' );

//* Child theme (do not remove)
define( 'CHILD_THEME_NAME', 'Parallax Pro Theme' );
define( 'CHILD_THEME_URL', 'http://my.studiopress.com/themes/parallax/' );
define( 'CHILD_THEME_VERSION', '1.0' );

//* Enqueue scripts and styles
add_action( 'wp_enqueue_scripts', 'parallax_enqueue_scripts_styles' );
function parallax_enqueue_scripts_styles() {

wp_enqueue_script( 'parallax-responsive-menu', get_bloginfo( 'stylesheet_directory' ) . '/js/responsive-menu.js', array( 'jquery' ), '1.0.0' );
wp_enqueue_style( 'dashicons' );
wp_enqueue_style( 'parallax-google-fonts', '//fonts.googleapis.com/css?family=Montserrat|Sorts+Mill+Goudy', array(), CHILD_THEME_VERSION );
}

//* Add HTML5 markup structure
add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list' ) );

//* Add viewport meta tag for mobile browsers
add_theme_support( 'genesis-responsive-viewport' );

//* Add support for 3-column footer widgets
add_theme_support( 'genesis-footer-widgets', 1 );

//* Reposition the primary navigation menu
remove_action( 'genesis_after_header', 'genesis_do_nav' );
add_action( 'genesis_before_content_sidebar_wrap', 'genesis_do_nav' );

//* Reposition the secondary navigation menu
remove_action( 'genesis_after_header', 'genesis_do_subnav' );
add_action( 'genesis_footer', 'genesis_do_subnav', 7 );

//* Reduce the secondary navigation menu to one level depth
add_filter( 'wp_nav_menu_args', 'parallax_secondary_menu_args' );
function parallax_secondary_menu_args( $args ){

if( 'secondary' != $args['theme_location'] )
return $args;

$args['depth'] = 1;
return $args;

}

//* Unregister layout settings
genesis_unregister_layout( 'content-sidebar-sidebar' );
genesis_unregister_layout( 'sidebar-content-sidebar' );
genesis_unregister_layout( 'sidebar-sidebar-content' );

//* Add support for additional color styles
add_theme_support( 'genesis-style-selector', array(
'parallax-pro-blue'   => __( 'Parallax Pro Blue', 'parallax' ),
'parallax-pro-green'  => __( 'Parallax Pro Green', 'parallax' ),
'parallax-pro-orange' => __( 'Parallax Pro Orange', 'parallax' ),
'parallax-pro-pink'   => __( 'Parallax Pro Pink', 'parallax' ),
) );

//* Unregister secondary sidebar
unregister_sidebar( 'sidebar-alt' );

//* Add support for custom header
add_theme_support( 'custom-header', array(
'width'           => 251,
'height'          => 63,
'header-selector' => '.site-title a',
'header-text'     => false,
) );

//* Add support for structural wraps
add_theme_support( 'genesis-structural-wraps', array(
'header',
'nav',
'subnav',
'footer-widgets',
'footer',
) );

//* Hook after post widget after the entry content
add_action( 'genesis_after_entry', 'parallax_after_entry', 5 );
function parallax_after_entry() {

if ( is_singular( 'post' ) )
genesis_widget_area( 'after-entry', array(
'before' => '<div class="after-entry widget-area">',
'after'  => '</div>',
) );

}


add_action( 'genesis_after_header', 'parallax_faq_area', 1 );
function parallax_faq_area() {

if(is_page(47) || is_page(62) || is_page(65))
genesis_widget_area( 'faq-area', array(
'before' => '<div class="faq-area widget-area">',
'after'  => '</div>',
) );


}



add_action( 'genesis_after_header', 'parallax_legal_area', 2 );
function parallax_legal_area() {

if(is_page(67) || is_page(69) || is_page(71) || is_page(73))
genesis_widget_area( 'legal-area', array(
'before' => '<div class="legal-area widget-area">',
'after'  => '</div>',
) );


}



add_action( 'genesis_before_footer', 'parallax_custom_footer', 7 );
function parallax_custom_footer() {

if(is_page())
genesis_widget_area( 'custom-footer', array(
'before' => '<div class="custom-footer widget-area">',
'after'  => '</div>',
) );


}




//* Modify the size of the Gravatar in the author box
add_filter( 'genesis_author_box_gravatar_size', 'parallax_author_box_gravatar' );
function parallax_author_box_gravatar( $size ) {

return 176;

}

//* Modify the size of the Gravatar in the entry comments
add_filter( 'genesis_comment_list_args', 'parallax_comments_gravatar' );
function parallax_comments_gravatar( $args ) {

$args['avatar_size'] = 120;

return $args;

}

//* Register widget areas

genesis_register_sidebar( array(
'id'          => 'faq-area',
'name'        => __( 'FAQ Area', 'parallax' ),
'description' => __( 'This is the FAQ Area.', 'parallax' ),
) );


genesis_register_sidebar( array(
'id'          => 'legal-area',
'name'        => __( 'Legal Area', 'parallax' ),
'description' => __( 'This is the Legal Area.', 'parallax' ),
) );




genesis_register_sidebar( array(
'id'          => 'custom-footer',
'name'        => __( 'Custom Footer', 'parallax' ),
'description' => __( 'This is the Custom Footer Area.', 'parallax' ),
) );


genesis_register_sidebar( array(
'id'          => 'home-section-1',
'name'        => __( 'Home Section 1', 'parallax' ),
'description' => __( 'This is the home section 1 section.', 'parallax' ),
) );
genesis_register_sidebar( array(
'id'          => 'home-section-2',
'name'        => __( 'Home Section 2', 'parallax' ),
'description' => __( 'This is the home section 2 section.', 'parallax' ),
) );
genesis_register_sidebar( array(
'id'          => 'home-section-3',
'name'        => __( 'Home Section 3', 'parallax' ),
'description' => __( 'This is the home section 3 section.', 'parallax' ),
) );
genesis_register_sidebar( array(
'id'          => 'home-section-4',
'name'        => __( 'Home Section 4', 'parallax' ),
'description' => __( 'This is the home section 4 section.', 'parallax' ),
) );
genesis_register_sidebar( array(
'id'          => 'home-section-5',
'name'        => __( 'Home Section 5', 'parallax' ),
'description' => __( 'This is the home section 5 section.', 'parallax' ),
) );

genesis_register_sidebar( array(
'id'          => 'home-section-6',
'name'        => __( 'Home Section 6', 'parallax' ),
'description' => __( 'This is the home section 6 section.', 'parallax' ),
) );

genesis_register_sidebar( array(
'id'          => 'home-section-7',
'name'        => __( 'Home Section 7', 'parallax' ),
'description' => __( 'This is the home section 7 section.', 'parallax' ),
) );

genesis_register_sidebar( array(
'id'          => 'after-entry',
'name'        => __( 'After Entry', 'parallax' ),
'description' => __( 'This is the after entry widget area.', 'parallax' ),
) );
